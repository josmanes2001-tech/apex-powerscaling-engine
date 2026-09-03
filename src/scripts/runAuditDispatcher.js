/**
 * APEX SMART AUDIT DISPATCHER
 * 
 * Permite ejecutar la auditoría de forma flexible tanto con modelos de OpenRouter como con Google Gemini API.
 * Detecta automáticamente si los argumentos son modelo, universo o número de inicio.
 * 
 * Ejemplos de uso en terminal u OpenCode:
 *   node src/scripts/runAuditDispatcher.js
 *   node src/scripts/runAuditDispatcher.js gemini
 *   node src/scripts/runAuditDispatcher.js nemotron "Dragon Ball" 20
 *   node src/scripts/runAuditDispatcher.js minimax all 1
 *   node src/scripts/runAuditDispatcher.js ling
 */

import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '../../');

const args = process.argv.slice(2);

let model = 'nvidia/nemotron-3.5-lightning:free'; // Por defecto OpenRouter
let universe = 'all';
let startIndex = 1;
let limit = 0; // 0 = todo el roster

const MODEL_ALIASES = {
  'gemini': '~google/gemini-flash-lite-latest',
  'gemini-flash': '~google/gemini-flash-lite-latest',
  'google': '~google/gemini-flash-lite-latest',
  'nemotron': 'nvidia/nemotron-3.5-lightning:free',
  'nemotron-lightning': 'nvidia/nemotron-3.5-lightning:free',
  'nemotron-ultra': 'nvidia/nemotron-3-ultra-550b-a55b:free',
  'ultra': 'nvidia/nemotron-3-ultra-550b-a55b:free',
  'minimax': 'minimax/minimax-m3:free',
  'minimax-m3': 'minimax/minimax-m3:free',
  'minimax-m2.7': 'minimax/minimax-m2.7:free',
  'ling': 'inclusionai/ling-3.0-flash-fin:free',
  'muse': 'meta/muse-spark-1.3-contributor:free',
  'muse-spark': 'meta/muse-spark-1.3-contributor:free',
  'meta-muse': 'meta/muse-spark-1.3-contributor:free',
  'zen': 'opencode/muse-spark-1.3-contributor-free',
  'gemma': 'google/gemma-4-31b-it:free',
  'gemma-4': 'google/gemma-4-31b-it:free',
  'glm': 'z-ai/glm-5.2:free',
  'glm-5': 'z-ai/glm-5.2:free',
  'cohere': 'cohere/north-mini-code:free',
  'openrouter': 'nvidia/nemotron-3.5-lightning:free'
};

// Analizar argumentos flexibles
for (const arg of args) {
  const trimmed = arg.trim();
  const lower = trimmed.toLowerCase();

  // Si es un alias o contiene /
  if (MODEL_ALIASES[lower]) {
    model = MODEL_ALIASES[lower];
  } else if (trimmed.includes('/') || trimmed.startsWith('~')) {
    model = trimmed;
  } else if (!isNaN(parseInt(trimmed, 10)) && parseInt(trimmed, 10) > 0 && !trimmed.includes(' ')) {
    startIndex = parseInt(trimmed, 10);
  } else if (trimmed.length > 0) {
    universe = trimmed;
  }
}

console.log('================================================================');
console.log('  🌙 APEX AUDITORÍA Y ENRIQUECIMIENTO DE ROSTER');
console.log('================================================================');
console.log(`  • Motor / Modelo:   ${model.startsWith('~') ? '🌐 Google Gemini API Oficial Directa (' + model + ')' : '⚡ OpenRouter (' + model + ')'}`);
console.log(`  • Universo / Filtro: ${universe}`);
console.log(`  • Ficha Inicial:     #${startIndex}`);
console.log(`  • Límite:            ${limit === 0 ? 'Todo el roster activo' : limit + ' fichas'}`);
console.log('================================================================\n');

// Parámetros para runAutonomousTask.js:
// argv[2] = TASK_DESCRIPTION
// argv[3] = TARGET_UNIVERSE
// argv[4] = MODEL
// argv[5] = MAX_LIMIT
// argv[6] = ROUNDS
// argv[7] = START_INDEX

const runnerArgs = [
  path.join(__dirname, 'runAutonomousTask.js'),
  'full_audit',
  universe,
  model,
  String(limit),
  '1',
  String(startIndex)
];

const child = spawn(process.execPath, runnerArgs, {
  cwd: projectRoot,
  stdio: 'inherit',
  env: { ...process.env }
});

child.on('exit', (code) => {
  if (code === 0) {
    console.log('\n✅ Auditoría finalizada exitosamente.');
  } else {
    console.log(`\n⚠️ Auditoría detenida con código: ${code}`);
  }
  process.exit(code || 0);
});
