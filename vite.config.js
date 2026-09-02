import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'url';
import { dirname, resolve as pathResolve } from 'path';
import { readFile } from 'fs/promises';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = __dirname;
const projectRootFwd = projectRoot.replace(/\\/g, '/');
const indexHtml = pathResolve(projectRoot, 'index.html');

function cleanPath(p) {
  if (!p) return p;
  return p.replace(/[A-Za-z]:\s*Obsidian[\\\/]apex-powerscaling-engine/g, projectRootFwd)
          .replace(/[\\\/]\s*Obsidian[\\\/]apex-powerscaling-engine/g, projectRootFwd);
}

const EXTENSIONS = ['', '.jsx', '.js', '.tsx', '.ts', '.json', '/index.jsx', '/index.js'];

const fixNasPathPlugin = () => ({
  name: 'apex:fix-nas-path',
  enforce: 'pre',
  async resolveId(id, importer) {
    if (!id || id.startsWith('\0') || id.includes('\0')) return null;
    const fixedImporter = cleanPath(importer);
    const fixedId = cleanPath(id);

    if (id === indexHtml || id === indexHtml.replace(/\\/g, '/') || (id.endsWith('/index.html') && !id.includes('node_modules'))) {
      return indexHtml;
    }

    if (fixedId.startsWith('.') && fixedImporter) {
      const baseDir = dirname(fixedImporter);
      const target = pathResolve(baseDir, fixedId);
      for (const ext of EXTENSIONS) {
        const cand = (target + ext).replace(/\\/g, '/');
        try {
          const st = await readFile(cand);
          if (st) return cand;
        } catch {}
      }
    }

    if (!fixedId.startsWith('.') && !fixedId.startsWith('/') && !fixedId.includes(':')) {
      try {
        const resolvedUrl = import.meta.resolve(fixedId);
        if (resolvedUrl) return fileURLToPath(resolvedUrl);
      } catch {}
      try {
        return require.resolve(fixedId, { paths: [projectRoot] });
      } catch {}
    }

    return null;
  },
  async load(id) {
    if (!id || id.startsWith('\0') || id.includes('\0')) return null;
    if (id.includes(' Obsidian') || id.includes('Vault Obsidian')) {
      const fixedId = cleanPath(id).replace(/\//g, '\\');
      try {
        this.addWatchFile(fixedId);
        return await readFile(fixedId, 'utf-8');
      } catch {
        return null;
      }
    }
    return null;
  }
});

export default defineConfig({
  root: projectRoot,
  resolve: {
    alias: {
      'react/jsx-runtime': pathResolve(projectRoot, 'node_modules/react/jsx-runtime.js'),
      'react/jsx-dev-runtime': pathResolve(projectRoot, 'node_modules/react/jsx-dev-runtime.js'),
      'react': pathResolve(projectRoot, 'node_modules/react'),
      'react-dom': pathResolve(projectRoot, 'node_modules/react-dom')
    }
  },
  plugins: [fixNasPathPlugin(), react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: indexHtml,
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/lucide-react')) return 'vendor-icons';
          if (id.includes('node_modules/canvas-confetti') || id.includes('node_modules/html2canvas')) return 'vendor-effects';
        }
      }
    },
    chunkSizeWarningLimit: 2500
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: true,
    proxy: {
      '/api': 'http://localhost:3001'
    }
  }
});