// src/scripts/checkAllLucideImports.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '../../');
const srcDir = path.join(projectRoot, 'src');

// Get all exported keys from installed lucide-react
async function getLucideExports() {
  const mod = await import('lucide-react');
  return new Set(Object.keys(mod));
}

function getAllFiles(dir, exts = ['.jsx', '.js', '.tsx', '.ts'], res = []) {
  const list = fs.readdirSync(dir);
  for (const f of list) {
    const full = path.join(dir, f);
    const st = fs.statSync(full);
    if (st.isDirectory()) {
      getAllFiles(full, exts, res);
    } else if (exts.includes(path.extname(f))) {
      res.push(full);
    }
  }
  return res;
}

async function main() {
  const viteConfigFile = path.join(projectRoot, 'vite.config.js');
  const cleanViteConfig = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    noDiscovery: true,
    include: []
  },
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true,
      interval: 1000,
      ignored: ['**/node_modules/**', '**/.git/**', '**/*.mjs', '**/dist/**']
    },
    proxy: {
      '/api': 'http://127.0.0.1:3001'
    }
  }
});
`;

  fs.writeFileSync(viteConfigFile, cleanViteConfig, 'utf8');
  console.log('✓ vite.config.js blindado para unidades de red Samba/Windows (Z: y D:).');
}

main().catch(console.error);
