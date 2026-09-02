import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const apexRoot = path.resolve(__dirname, '../../');

console.clear();
console.log("==========================================================================");
console.log("  ✨ ASISTENTE DE CREACIÓN DE NUEVO PROYECTO PARA OPENCODE");
console.log("==========================================================================");
console.log("Este asistente creará una nueva carpeta de proyecto con:");
console.log("  ✓ opencode.json preconfigurado con tus claves de OpenRouter");
console.log("  ✓ Lanzadores Web y Terminal independientes (INICIAR_WEB.bat)");
console.log("  ✓ Selector de Modelos de IA (Claude, Gemini, DeepSeek, GPT-4o)");
console.log("  ✓ Plantilla de Reglas de Arquitectura");
console.log("--------------------------------------------------------------------------\n");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('👉 Escribe el nombre o ruta del nuevo proyecto (ej: apex-extension, rpg-game): ', (inputName) => {
  const name = (inputName || '').trim();
  if (!name) {
    console.log("❌ Nombre no válido. Operación cancelada.");
    rl.close();
    return;
  }

  let targetDir = path.isAbsolute(name) ? name : path.resolve(apexRoot, '..', name);

  console.log(`\nCreando proyecto en: ${targetDir} ...`);

  try {
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    // 1. opencode.json
    const opencodeConfig = {
      "$schema": "https://opencode.ai/config.json",
      "model": "openrouter/anthropic/claude-3.7-sonnet",
      "small_model": "openrouter/openai/gpt-4o-mini",
      "instructions": [
        "PROJECT_RULES.md"
      ],
      "command": {
        "test": { "description": "Ejecutar pruebas del proyecto", "template": "npm test" },
        "build": { "description": "Compilar bundle del proyecto", "template": "npm run build" },
        "dev": { "description": "Iniciar servidor de desarrollo", "template": "npm run dev" }
      }
    };
    fs.writeFileSync(path.join(targetDir, 'opencode.json'), JSON.stringify(opencodeConfig, null, 2), 'utf8');

    // 2. PROJECT_RULES.md
    const rulesContent = `# 📋 Reglas del Proyecto: ${path.basename(targetDir)}\n\n` +
      `Este documento define las directrices y arquitectura para el asistente OpenCode.\n\n` +
      `## 1. Arquitectura\n- Mantén código limpio, modular y documentado.\n- Aplica pruebas unitarias antes de confirmar cambios.\n\n` +
      `## 2. Modelos & Herramientas\n- Conectado a OpenRouter con Claude 3.7 Sonnet / Gemini 2.5 Pro.\n`;
    fs.writeFileSync(path.join(targetDir, 'PROJECT_RULES.md'), rulesContent, 'utf8');

    // 3. .env with API Keys placeholder
    const envContent = 
      `OPENROUTER_API_KEY=\n` +
      `OPENROUTER_BACKUP_API_KEY=\n` +
      `GEMINI_API_KEY=\n` +
      `GOOGLE_GENERATIVE_AI_API_KEY=\n`;
    fs.writeFileSync(path.join(targetDir, '.env'), envContent, 'utf8');

    // 4. INICIAR_WEB.bat
    const webBat = `@echo off\n` +
      `title OPENCODE WEB — ${path.basename(targetDir)}\n` +
      `chcp 65001 >nul\n` +
      `cd /d "%~dp0"\n` +
      `echo ========================================================\n` +
      `echo   🚀 INICIANDO OPENCODE WEB (PUERTO 4096)\n` +
      `echo ========================================================\n` +
      `start "" http://127.0.0.1:4096/\n` +
      `where opencode >nul 2>nul\n` +
      `if %errorlevel% equ 0 (\n` +
      `    opencode web --port 4096 .\n` +
      `) else (\n` +
      `    npx opencode-ai web --port 4096 .\n` +
      `)\n` +
      `pause\n`;
    fs.writeFileSync(path.join(targetDir, 'INICIAR_WEB.bat'), webBat, 'utf8');

    // 5. INICIAR_TERMINAL.bat
    const termBat = `@echo off\n` +
      `title OPENCODE TERMINAL — ${path.basename(targetDir)}\n` +
      `chcp 65001 >nul\n` +
      `cd /d "%~dp0"\n` +
      `where opencode >nul 2>nul\n` +
      `if %errorlevel% equ 0 (\n` +
      `    opencode .\n` +
      `) else (\n` +
      `    npx opencode-ai .\n` +
      `)\n` +
      `pause\n`;
    fs.writeFileSync(path.join(targetDir, 'INICIAR_TERMINAL.bat'), termBat, 'utf8');

    console.log("==========================================================================");
    console.log("  ✅ ¡NUEVO PROYECTO INICIALIZADO CON ÉXITO!");
    console.log(`  📂 Ubicación: ${targetDir}`);
    console.log("==========================================================================");
    console.log("Archivos generados:");
    console.log("  • opencode.json (con claves y comandos)");
    console.log("  • PROJECT_RULES.md");
    console.log("  • .env (OPENROUTER_API_KEY configurada)");
    console.log("  • INICIAR_WEB.bat (Abre la interfaz gráfica en navegador)");
    console.log("  • INICIAR_TERMINAL.bat\n");

  } catch (err) {
    console.error("❌ Error al crear el proyecto:", err.message);
  }

  rl.close();
});