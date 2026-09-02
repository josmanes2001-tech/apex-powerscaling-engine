import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { readFileSync, existsSync } from 'fs';

const ROOT = 'Z:/apex-powerscaling-engine';
const NM   = ROOT + '/node_modules';
const IDX  = ROOT + '/index.html';

const BAD_PATH = /^[A-Za-z]:[\/\\]?\s+Obsidian[\/\\]apex-powerscaling-engine/;

function clean(p) {
  if (!p) return p;
  return p.replace(BAD_PATH, ROOT).replace(/\\/g, '/');
}

function resolveBare(id) {
  // No interceptar modulos virtuales/internos de Vite
  if (id.startsWith('vite/') || id.startsWith('@vite/')) return null;
  const parts  = id.split('/');
  const pkg    = id.startsWith('@') ? parts[0] + '/' + parts[1] : parts[0];
  const sub    = id.startsWith('@') ? parts.slice(2).join('/') : parts.slice(1).join('/');
  const pkgDir = NM + '/' + pkg;
  if (sub) {
    for (const ext of ['', '.js', '.jsx', '.ts', '.tsx', '/index.js', '/index.jsx']) {
      const p = pkgDir + '/' + sub + ext;
      if (existsSync(p)) return p;
    }
    return null; // no existe → dejar a Vite manejarlo
  }
  try {
    const pj = JSON.parse(readFileSync(pkgDir + '/package.json', 'utf-8'));
    const e  = pj.module || pj['jsnext:main'] || pj.main || 'index.js';
    const fp = pkgDir + '/' + e;
    return existsSync(fp) ? fp : null;
  } catch { return null; }
}

function resolveRelative(id, importer) {
  const base     = clean(importer).split('/').slice(0, -1).join('/');
  const combined = base + '/' + id;
  const parts    = combined.split('/');
  const segs     = [];
  for (const s of parts) {
    if (s === '..') segs.pop();
    else if (s && s !== '.') segs.push(s);
  }
  // NO agregar '/' inicial si el primer segmento es letra de disco Windows (ej: 'Z:')
  const isWinDrive = segs.length > 0 && /^[A-Za-z]:$/.test(segs[0]);
  const target = isWinDrive ? segs.join('/') : '/' + segs.join('/');
  for (const ext of ['', '.jsx', '.js', '.tsx', '.ts', '/index.jsx', '/index.js']) {
    if (existsSync(target + ext)) return target + ext;
  }
  return target;
}

function fixPaths() {
  return {
    name: 'apex:fix-paths',
    enforce: 'pre',
    resolveId(id, importer) {
      if (!id || id.startsWith('\0')) return null;
      // id con ruta UNC corrupta → limpiar
      if (BAD_PATH.test(id)) return clean(id);
      // URL de navegador /src/... → resolver desde ROOT
      if (/^\/src\/|^\/public\//.test(id)) return ROOT + id;
      // Import relativo desde importer con ruta corrupta
      if (id.startsWith('.') && importer && BAD_PATH.test(importer)) {
        return resolveRelative(id, importer);
      }
      // TODOS los bare imports — saltar vite/* y nodos internos.
      // Resolvemos desde NM para que Rollup nunca llame a realpathSync.
      if (!id.startsWith('.') && !id.startsWith('/') && !id.includes(':')) {
        const r = resolveBare(id);
        if (r) return r;
      }
      return null;
    },
    load(id) {
      if (!id || id.startsWith('\0')) return null;
      if (BAD_PATH.test(id)) {
        try { return readFileSync(clean(id), 'utf-8'); } catch { return null; }
      }
      return null;
    },
  };
}

function noReactPreBundle() {
  return {
    name: 'apex:no-react-prebundle',
    enforce: 'post',
    config(cfg) {
      cfg.optimizeDeps = cfg.optimizeDeps || {};
      cfg.optimizeDeps.include = (cfg.optimizeDeps.include || []).filter(
        (e) => !e.startsWith('react') && !e.startsWith('react-dom')
      );
      cfg.optimizeDeps.noDiscovery = true;
      return cfg;
    },
  };
}

export default defineConfig({
  root: ROOT,
  cacheDir: NM + '/.vite',
  resolve: {
    alias: [
      { find: /^react\/jsx-runtime$/,     replacement: NM + '/react/jsx-runtime.js' },
      { find: /^react\/jsx-dev-runtime$/, replacement: NM + '/react/jsx-dev-runtime.js' },
      { find: /^react$/,                  replacement: NM + '/react/index.js' },
      { find: /^react-dom$/,              replacement: NM + '/react-dom/index.js' },
    ]
  },
  optimizeDeps: { include: [], noDiscovery: true },
  plugins: [fixPaths(), react(), tailwindcss(), noReactPreBundle()],
  build: {
    rollupOptions: {
      input: IDX,
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/lucide-react'))    return 'vendor-icons';
          if (id.includes('node_modules/canvas-confetti') ||
              id.includes('node_modules/html2canvas'))     return 'vendor-effects';
        }
      }
    },
    chunkSizeWarningLimit: 2500
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: true,
    proxy: { '/api': 'http://localhost:3001' },
    watch: { usePolling: true, interval: 1000, ignored: ['**/node_modules/**', '**/.git/**'] },
    fs: { allow: [ROOT] }
  }
});
