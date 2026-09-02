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
  const batFile = path.join(projectRoot, 'DESPLEGAR_A_VERCEL.bat');
  const cleanBatContent = [
    '@echo off',
    'title Sincronizador Apex Engine Vercel',
    'color 0B',
    'cd /d "%~dp0"',
    '',
    'echo ========================================================',
    'echo   SINCRONIZANDO APEX ENGINE (GITHUB + VERCEL)',
    'echo ========================================================',
    'echo.',
    '',
    'echo [1/2] Guardando cambios locales...',
    'git add .',
    'git commit -m "feat: sync y despliegue limpio" 2>nul',
    '',
    'echo [2/2] Subiendo a GitHub para despliegue automatico en Vercel...',
    'git push origin main',
    '',
    'echo.',
    'echo ========================================================',
    'echo   EXITO: Cambios enviados a GitHub',
    'echo   Vercel actualizara la web en: https://apex-engine-six.vercel.app/',
    'echo ========================================================',
    'echo.',
    'pause',
    ''
  ].join('\r\n');

  fs.writeFileSync(batFile, cleanBatContent, 'binary');
  console.log('✓ DESPLEGAR_A_VERCEL.bat reescrito con codificación pura Windows CRLF.');
}

main().catch(console.error);
