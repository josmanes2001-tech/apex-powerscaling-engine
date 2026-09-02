/**
 * APEX Audit Progress Reporter (100% Dinámico)
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '../../');

const STATUS_FILE = path.join(projectRoot, 'src/data/audit_live_status.json');
const LOG_FILE = path.join(projectRoot, 'src/data/audit_live.log');
const GOLDEN_FILE = path.join(projectRoot, 'src/data/apex_golden_enriched_all.json');
const CHARACTERS_FILE = path.join(projectRoot, 'src/data/characters.js');

try {
  const mod = await import('file://' + CHARACTERS_FILE.replace(/\\/g, '/'));
  const total = (mod.INITIAL_CHARACTERS || []).length || 821;

  let liveStatus = null;
  if (fs.existsSync(STATUS_FILE)) {
    try { liveStatus = JSON.parse(fs.readFileSync(STATUS_FILE, 'utf8')); } catch {}
  }

  let goldenData = null;
  if (fs.existsSync(GOLDEN_FILE)) {
    try { goldenData = JSON.parse(fs.readFileSync(GOLDEN_FILE, 'utf8')); } catch {}
  }

  const processed = liveStatus?.processedChars || goldenData?.totalProcessed || 0;
  const pct = ((processed / total) * 100).toFixed(1);
  const patches = goldenData?.integrationPatch?.length || liveStatus?.totalPatches || 0;

  console.log('====================================================');
  console.log('  📊 ESTADO DEL ENRIQUECIMIENTO DE ROSTER APEX');
  console.log('====================================================');
  console.log(`  • Estado:               ${liveStatus?.active ? '🟢 EN EJECUCIÓN ACTIVA' : '⚪ EN ESPERA / COMPLETADO'}`);
  console.log(`  • Personajes Procesados:${processed} / ${total} (${pct}%)`);
  console.log(`  • Lote Actual:          ${liveStatus?.currentBatch || 0} / ${liveStatus?.totalBatches || Math.ceil(total/5)}`);
  console.log(`  • Total Parches Listos: ${patches} operaciones`);
  if (liveStatus?.elapsedMin) {
    console.log(`  • Tiempo Transcurrido:  ${liveStatus.elapsedMin} minutos (ETA restante: ~${liveStatus.etaMin} min)`);
  }
  console.log(`  • Última Actividad:     ${liveStatus?.lastUpdated || 'Reciente'}`);
  console.log('====================================================\n');

  if (fs.existsSync(LOG_FILE)) {
    const lines = fs.readFileSync(LOG_FILE, 'utf8').trim().split('\n').filter(Boolean);
    const lastLines = lines.slice(-5);
    if (lastLines.length > 0) {
      console.log('📝 Últimos lotes procesados:');
      lastLines.forEach(l => console.log('   ' + l));
      console.log('====================================================');
    }
  }
} catch (e) {
  console.log('Estado no disponible:', e.message);
}
