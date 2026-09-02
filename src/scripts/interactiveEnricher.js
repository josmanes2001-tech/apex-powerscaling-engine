/**
 * APEX INTERACTIVE ENRICHER & AUDITOR CLI (GOLDEN STANDARD)
 * 
 * Interfaz interactiva 100% nativa en Node.js con colores ANSI,
 * soporte de teclas, valores por defecto con Enter y cero fallos de codificación.
 */

import readline from 'readline';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '../../');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ask = (query, defaultVal = '') => new Promise((resolve) => {
  rl.question(query, (ans) => {
    const trimmed = ans.trim();
    resolve(trimmed ? trimmed : defaultVal);
  });
});

async function runMenu() {
  console.clear();
  console.log('\x1b[36m╔════════════════════════════════════════════════════════════════════╗\x1b[0m');
  console.log('\x1b[36m║\x1b[0m \x1b[1m\x1b[33m🌟 APEX POWER SCALING — ENRIQUECEDOR AUTÓNOMO DE ROSTER           \x1b[0m\x1b[36m║\x1b[0m');
  console.log('\x1b[36m║\x1b[0m \x1b[90m   Auditoría de Formas, Arsenal con Stamina, Sinergias y Ki       \x1b[0m\x1b[36m║\x1b[0m');
  console.log('\x1b[36m╚════════════════════════════════════════════════════════════════════╝\x1b[0m\n');

  // 1. Tarea
  console.log('\x1b[1m\x1b[32m[1/4] SELECCIONA LA TAREA A EJECUTAR:\x1b[0m');
  console.log('  \x1b[33m1.\x1b[0m \x1b[1mEnriquecimiento y Auditoría Completa\x1b[0m (Formas + Stamina + Combos + Sinergias) \x1b[32m[RECOMENDADO]\x1b[0m');
  console.log('  \x1b[33m2.\x1b[0m Auditoría Especializada de Formas (Base, Canónicas y Custom)');
  console.log('  \x1b[33m3.\x1b[0m Sinergias y Team Combos de 3 Fases');
  console.log('  \x1b[33m4.\x1b[0m Pasivas Biológicas y Debilidades de Combate');
  const taskChoice = await ask('\n👉 Elige tarea [1-4, Enter=1]: ', '1');
  
  const tasksMap = {
    '1': 'full_enrichment',
    '2': 'forms_audit',
    '3': 'synergies_combos',
    '4': 'passives_weaknesses'
  };
  const task = tasksMap[taskChoice] || 'full_enrichment';

  // 2. Universo
  console.log('\n\x1b[1m\x1b[32m[2/4] SELECCIONA EL UNIVERSO:\x1b[0m');
  console.log('  • Presiona \x1b[1mEnter\x1b[0m para procesar \x1b[33mtodo el Roster completo (821+ personajes)\x1b[0m');
  console.log('  • O escribe un universo (ej: Dragon Ball, Baki, Marvel, DC, Jujutsu Kaisen)');
  const universe = await ask('\n👉 Universo [Enter=all]: ', 'all');

  // 3. Motor IA
  console.log('\n\x1b[1m\x1b[32m[3/4] SELECCIONA EL MOTOR DE INTELIGENCIA ARTIFICIAL:\x1b[0m');
  console.log('  \x1b[33m1.\x1b[0m \x1b[1mGoogle Gemini Flash Lite\x1b[0m (Clave Directa Oficial de Google) \x1b[32m[ULTRA RÁPIDO - 1s/lote]\x1b[0m');
  console.log('  \x1b[33m2.\x1b[0m Modo Híbrido Conjunto (Gemini Flash Lite + OpenRouter 50/50)');
  console.log('  \x1b[33m3.\x1b[0m Solo OpenRouter (NVIDIA Nemotron 3.5 Lightning / Llama 70B)');
  const modelChoice = await ask('\n👉 Elige Motor IA [1-3, Enter=1]: ', '1');

  let model = 'google/gemini-3.5-flash-lite';
  if (modelChoice === '2') {
    console.log('\n  \x1b[90mElige el compañero de OpenRouter para alternar con Gemini:\x1b[0m');
    console.log('    1. NVIDIA Nemotron 3.5 Lightning (Gratis - Ultra Rápido) \x1b[32m[RECOMENDADO]\x1b[0m');
    console.log('    2. Meta Llama 3.3 70B Instruct (Alta Precisión de Combate)');
    console.log('    3. MiniMax M3 (minimax/minimax-m3:free - Gratis & Alta Capacidad)');
    console.log('    4. DeepSeek R1 (deepseek/deepseek-r1:free - Pensamiento Extremo)');
    console.log('    5. Poolside Laguna S 2.1 (Razonamiento de Código/Agentes)');
    console.log('    6. Ingresar cualquier modelo de OpenRouter personalizado');
    const subChoice = await ask('\n  👉 OpenRouter [1-6, Enter=1]: ', '1');
    if (subChoice === '2') model = 'hybrid:meta-llama/llama-3.3-70b-instruct:free';
    else if (subChoice === '3') model = 'hybrid:minimax/minimax-m3:free';
    else if (subChoice === '4') model = 'hybrid:deepseek/deepseek-r1:free';
    else if (subChoice === '5') model = 'hybrid:poolside/laguna-s-2.1:free';
    else if (subChoice === '6') {
      const customId = await ask('  👉 Escribe el Model ID de OpenRouter (ej: minimax/minimax-m3:free): ', 'minimax/minimax-m3:free');
      model = `hybrid:${customId}`;
    } else model = 'hybrid:nvidia/nemotron-3.5-lightning:free';
  } else if (modelChoice === '3') {
    console.log('\n  \x1b[90mElige el modelo de OpenRouter:\x1b[0m');
    console.log('    1. NVIDIA Nemotron 3.5 Lightning (Gratis - Ultra Rápido)');
    console.log('    2. Meta Llama 3.3 70B Instruct (Alta Precisión)');
    console.log('    3. MiniMax M3 (minimax/minimax-m3:free - Gratis & Alta Capacidad)');
    console.log('    4. DeepSeek R1 (deepseek/deepseek-r1:free - Pensamiento Extremo)');
    console.log('    5. Poolside Laguna S 2.1 (Razonamiento)');
    console.log('    6. Ingresar cualquier modelo de OpenRouter personalizado');
    const subChoice = await ask('\n  👉 OpenRouter [1-6, Enter=1]: ', '1');
    if (subChoice === '2') model = 'meta-llama/llama-3.3-70b-instruct:free';
    else if (subChoice === '3') model = 'minimax/minimax-m3:free';
    else if (subChoice === '4') model = 'deepseek/deepseek-r1:free';
    else if (subChoice === '5') model = 'poolside/laguna-s-2.1:free';
    else if (subChoice === '6') {
      const customId = await ask('  👉 Escribe el Model ID de OpenRouter (ej: minimax/minimax-m3:free): ', 'minimax/minimax-m3:free');
      model = customId;
    } else model = 'nvidia/nemotron-3.5-lightning:free';
  }

  // 4. Vueltas al Roster
  console.log('\n\x1b[1m\x1b[32m[4/4] SELECCIONA EL MODO DE VUELTAS AL ROSTER:\x1b[0m');
  console.log('  \x1b[33m1.\x1b[0m \x1b[1m1 Vuelta Completa al Roster\x1b[0m (Audita y enriquece los 821 pjs una vez) \x1b[32m[RECOMENDADO]\x1b[0m');
  console.log('  \x1b[33m2.\x1b[0m 2 Vueltas de Refinamiento Maestro (Pasa 2 veces puliendo cada detalle)');
  console.log('  \x1b[33m3.\x1b[0m 3 Vueltas a Fondo');
  console.log('  \x1b[33m4.\x1b[0m \x1b[1mBucle Infinito Nocturno\x1b[0m (Sigue dando vueltas continuas toda la noche)');
  console.log('  \x1b[33m5.\x1b[0m Prueba Rápida de 10 personajes (2 lotes)');
  const roundChoice = await ask('\n👉 Elige modo de vueltas [1-5, Enter=1]: ', '1');

  let rounds = 1;
  let limit = 0;
  if (roundChoice === '2') rounds = 2;
  else if (roundChoice === '3') rounds = 3;
  else if (roundChoice === '4') rounds = 0; // 0 = infinito
  else if (roundChoice === '5') {
    rounds = 1;
    limit = 10;
  }

  rl.close();

  console.log('\n\x1b[32m🚀 INICIANDO ENRIQUECEDOR AUTÓNOMO...\x1b[0m\n');

  // Lanzar el script runner con los argumentos limpios
  const child = spawn('node', [
    path.join(__dirname, 'runAutonomousTask.js'),
    task,
    universe,
    model,
    limit.toString(),
    rounds.toString()
  ], {
    cwd: projectRoot,
    stdio: 'inherit'
  });

  child.on('close', (code) => {
    console.log(`\n\x1b[36m════════════════════════════════════════════════════════════════════\x1b[0m`);
    console.log(`\x1b[32m  Proceso finalizado con código: ${code}\x1b[0m`);
    console.log(`\x1b[90m  Para aplicar todas las mejoras al juego, ejecuta APLICAR_PARCHES_AL_ROSTER.bat\x1b[0m`);
    console.log(`\x1b[36m════════════════════════════════════════════════════════════════════\x1b[0m\n`);
  });
}

runMenu().catch(console.error);
