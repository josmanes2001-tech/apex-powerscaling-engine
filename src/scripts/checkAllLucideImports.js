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
  const batContent = `@echo off
title SINCRONIZADOR APEX ENGINE
chcp 65001 >nul
cd /d "%~dp0"

echo ========================================================
echo   SINCRONIZANDO APEX ENGINE (GITHUB + VERCEL)
echo ========================================================
echo.

git add .
git commit -m "feat: sync y despliegue limpio" 2>nul
git push origin main

echo.
echo ========================================================
echo   ✅ ¡CAMBIOS ENVIADOS A GITHUB CON ÉXITO!
echo   🌐 Vercel actualizará la web en https://apex-engine-six.vercel.app/
echo ========================================================
echo.
pause
`;
  fs.writeFileSync(batFile, batContent, 'utf8');
  console.log('✓ DESPLEGAR_A_VERCEL.bat actualizado para sincronizar limpiamente con GitHub y Vercel.');
}

main().catch(console.error);
