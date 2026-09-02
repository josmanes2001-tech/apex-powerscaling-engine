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

// Tabla de nombres legibles para Tiers
async function main() {
  console.log('Testing and verifying all React components in src/ for broken imports...');
  const files = getAllFiles(path.join(srcDir, 'components'));
  const validExports = await getLucideExports();

  let brokenIcons = [];

  for (const f of files) {
    const code = fs.readFileSync(f, 'utf8');
    const impRegex = /import\s*\{([^}]+)\}\s*from\s*['"]lucide-react['"]/g;
    let match;
    while ((match = impRegex.exec(code)) !== null) {
      const list = match[1].split(',').map(s => s.trim().split(/\s+as\s+/)[0]).filter(Boolean);
      for (const item of list) {
        if (!validExports.has(item)) {
          brokenIcons.push({ file: path.relative(projectRoot, f), icon: item });
        }
      }
    }
  }

  if (brokenIcons.length > 0) {
    console.error('❌ BROKEN ICONS FOUND IN COMPONENTS:', brokenIcons);
  } else {
    console.log('✅ ALL LUCIDE IMPORTS IN ALL COMPONENTS ARE 100% VALID!');
  }
}

main().catch(console.error);
