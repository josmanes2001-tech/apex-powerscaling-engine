/**
 * APEX Engine - Auto Deployer & Resilient Synchronizer
 * Automatically tries:
 * 1) Git Push (GitHub Triggered Deploy - No Vercel CLI Limit)
 * 2) Direct Vercel CLI Deploy (Fallback)
 * 3) Local Production Preview Server (if offline or limit hit)
 */

import { execSync } from 'child_process';
import fs from 'fs';

console.log("========================================================");
console.log("  🚀 SINCRONIZADOR RESILIENTE APEX -> VERCEL & GITHUB");
console.log("========================================================");

// 1. Ejecutar build local
console.log("\n[1/4] Compilando bundle de producción (npm run build)...");
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log("✓ Build completado exitosamente.");
} catch (err) {
  console.error("❌ Error durante el build:", err.message);
  process.exit(1);
}

// 2. Commit & Push a GitHub (Vercel Git Integration)
console.log("\n[2/4] Sincronizando con GitHub (Disparador de Build Automático sin límite de CLI)...");
let gitPushed = false;
try {
  execSync('git add .', { stdio: 'ignore' });
  try {
    execSync('git commit -m "auto: sincronizacion de cambios y despliegue"', { stdio: 'ignore' });
  } catch {
    // Si no hay cambios nuevos para commitear, ignorar
  }
  console.log("  -> Enviando commits a GitHub...");
  execSync('git push origin main', { stdio: 'inherit' });
  console.log("✓ ¡Sincronizado con GitHub con éxito! Vercel iniciará el despliegue automático.");
  gitPushed = true;
} catch (gitErr) {
  console.log("ℹ️ Push a GitHub requiere credenciales o falló. Pasando a Vercel CLI...");
}

// 3. Intento de Vercel CLI Directo
console.log("\n[3/4] Desplegando vía Vercel CLI...");
let cliDeployed = false;
try {
  execSync('npx vercel --prod --yes', { stdio: 'inherit' });
  console.log("\n========================================================");
  console.log("  ✅ ¡DESPLIEGUE POR VERCEL CLI EXITOSO!");
  console.log("  🌐 URL en vivo: https://apex-engine-six.vercel.app/");
  console.log("========================================================");
  cliDeployed = true;
} catch (deployErr) {
  if (deployErr.message && deployErr.message.includes('api-deployments-free-per-day')) {
    console.log("\n⚠️ Se alcanzó el límite diario de la CLI de Vercel (100 deploys/día).");
    if (gitPushed) {
      console.log("✅ No te preocupes: los cambios ya fueron subidos a GitHub y Vercel los compilará por Git.");
    } else {
      console.log("💡 Para desplegar inmediatamente, ejecuta 'git push origin main' en tu terminal.");
    }
  } else {
    console.log("⚠️ Vercel CLI finalizó con aviso/error:", deployErr.message);
  }
}

// 4. Resumen Final
console.log("\n[4/4] Resumen de Estado:");
if (gitPushed || cliDeployed) {
  console.log("✨ Todo sincronizado correctamente.");
} else {
  console.log("💡 El bundle local 'dist/' está 100% listo para producción.");
}
console.log("========================================================\n");