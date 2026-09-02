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
  const startBat = path.join(projectRoot, 'START_APEX_ENGINE.bat');
  const cleanBatContent = [
    '@echo off',
    'title APEX Engine',
    'color 0A',
    'cd /d "%~dp0"',
    '',
    'echo ========================================================',
    'echo        INICIANDO APEX POWERSCALING ENGINE',
    'echo ========================================================',
    'echo.',
    '',
    'echo [1/2] Iniciando Servidor Backend (Puerto 3001)...',
    'start "APEX Backend (3001)" cmd /k "node server.cjs"',
    '',
    'echo [2/2] Iniciando Servidor Frontend (Puerto 5173)...',
    'start "APEX Frontend (5173)" cmd /k "npx vite --host 0.0.0.0 --port 5173"',
    '',
    'echo.',
    'echo Esperando a que el servidor de desarrollo cargue...',
    'timeout /t 10 /nobreak >nul',
    '',
    'echo Abriendo navegador en http://localhost:5173 ...',
    'start http://localhost:5173',
    '',
    'echo.',
    'echo ========================================================',
    'echo   APEX Engine esta en ejecucion',
    'echo   Local: http://localhost:5173/',
    'echo   (Si el navegador carga antes de tiempo, pulsa F5)',
    'echo ========================================================',
    'echo.',
    'pause',
    ''
  ].join('\r\n');

  fs.writeFileSync(startBat, cleanBatContent, 'binary');
  console.log('✓ START_APEX_ENGINE.bat actualizado con 10s de espera para inicialización completa de Vite.');
}

main().catch(console.error);
