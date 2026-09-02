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
  const appFile = path.join(projectRoot, 'src/App.jsx');
  let appContent = fs.readFileSync(appFile, 'utf8');
  
  const newVer = `v9.0_FULL_DEPLOY_FORCE_REFRESH_${Date.now()}`;
  appContent = appContent.replace(/const ROSTER_VERSION = '([^']+)';/, `const ROSTER_VERSION = '${newVer}';`);
  fs.writeFileSync(appFile, appContent, 'utf8');
  console.log(`✓ ROSTER_VERSION actualizado a ${newVer} para forzar refresco total en Vercel.`);
}

main().catch(console.error);
