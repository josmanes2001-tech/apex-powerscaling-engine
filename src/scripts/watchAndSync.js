/**
 * APEX Engine - Continuous Watch & Auto-Deploy to Vercel
 * Watches src/ directory and auto-deploys to https://apex-engine-six.vercel.app/ on every change.
 */

import { watch } from 'fs';
import { execSync } from 'child_process';
import path from 'path';

let debounceTimer = null;
let isDeploying = false;

function triggerDeploy() {
  if (isDeploying) return;
  isDeploying = true;
  console.log("\n⚡ [APEX WATCHER] Cambio detectado. Sincronizando con Vercel...");
  try {
    execSync('node src/scripts/autoDeployVercel.js', { stdio: 'inherit' });
  } catch (err) {
    console.error("❌ Error en sincronización:", err.message);
  } finally {
    isDeploying = false;
    console.log("\n👀 Observando cambios en src/ para sincronización continua...");
  }
}

console.log("========================================================");
console.log("  👀 APEX ENGINE — WATCH & SYNC TO VERCEL ACTIVO");
console.log("========================================================");
console.log("Cualquier cambio guardado en src/ se compilará y subirá automáticamente a https://apex-engine-six.vercel.app/\n");

// Initial deploy
triggerDeploy();

// Watch src recursively
watch('src', { recursive: true }, (eventType, filename) => {
  if (!filename || filename.includes('node_modules') || filename.includes('.git')) return;
  console.log(`[Modificación] ${filename} (${eventType})`);
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(triggerDeploy, 1500);
});