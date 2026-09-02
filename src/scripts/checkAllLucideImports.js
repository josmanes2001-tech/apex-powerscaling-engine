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
  // 1. Parchar server.cjs para que maneje EADDRINUSE amigablemente
  const serverFile = path.join(projectRoot, 'server.cjs');
  let serverContent = fs.readFileSync(serverFile, 'utf8');
  
  const oldListen = `app.listen(PORT, '0.0.0.0', () => {
  console.log(\`====================================================\`);
  console.log(\`⚡ APEX ENGINE MULTI-AI BACKEND RUNNING\`);
  console.log(\`🌐 Port: http://0.0.0.0:\${PORT}\`);
  console.log(\`🧠 Providers: OpenRouter, Gemini, OpenAI, Ollama, Custom URL\`);
  console.log(\`📂 Vault Path: \${VAULT_PATH}\`);
  console.log(\`====================================================\`);
});`;

  const newListen = `const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(\`====================================================\`);
  console.log(\`⚡ APEX ENGINE MULTI-AI BACKEND RUNNING\`);
  console.log(\`🌐 Port: http://0.0.0.0:\${PORT}\`);
  console.log(\`🧠 Providers: OpenRouter, Gemini, OpenAI, Ollama, Custom URL\`);
  console.log(\`📂 Vault Path: \${VAULT_PATH}\`);
  console.log(\`====================================================\`);
});

server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.log(\`ℹ️ El puerto \${PORT} ya está en uso por otra instancia activa de APEX. Continuando normalmente...\`);
  } else {
    console.error('Error en el servidor backend:', e);
  }
});`;

  if (serverContent.includes(oldListen)) {
    serverContent = serverContent.replace(oldListen, newListen);
    fs.writeFileSync(serverFile, serverContent, 'utf8');
    console.log('✓ server.cjs protegido contra errores EADDRINUSE.');
  }

  // 2. Mejorar START_APEX_ENGINE.bat para que libere puertos antes de lanzar
  const startBat = path.join(projectRoot, 'START_APEX_ENGINE.bat');
  const startBatContent = `@echo off
title APEX Engine - Servidor de Inicio
color 0A
chcp 65001 >nul
echo ========================================================
echo        INICIANDO MOTOR APEX POWERSCALING ENGINE
echo ========================================================
echo.

pushd "%~dp0"

echo [0/2] Liberando puertos y cerrando procesos huérfanos...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3001 ^| findstr LISTENING 2^>nul') do taskkill /F /PID %%a >nul 2>&1
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :5173 ^| findstr LISTENING 2^>nul') do taskkill /F /PID %%a >nul 2>&1

echo [1/2] Iniciando Servidor Backend y API (Puerto 3001)...
start "APEX Backend & Web (3001)" cmd /k "node server.cjs"

echo [2/2] Iniciando Servidor Frontend (Puerto 5173)...
start "APEX Frontend Dev (5173)" cmd /k "npm run dev"

timeout /t 3 /nobreak >nul

echo Abriendo navegador en http://localhost:5173 ...
start http://localhost:5173

echo.
echo ========================================================
echo   ¡APEX Engine está en ejecución!
echo   Local: http://localhost:5173/
echo ========================================================
echo.
popd
pause
`;
  fs.writeFileSync(startBat, startBatContent, 'utf8');
  console.log('✓ START_APEX_ENGINE.bat actualizado con liberación precisa de puertos.');
}

main().catch(console.error);
