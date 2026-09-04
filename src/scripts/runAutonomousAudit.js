/**
 * APEX CONTINUOUS ROSTER AUDIT & AUTO-ENRICHMENT — AUTONOMOUS RUNNER
 * 
 * Runs autonomously in a loop while you sleep.
 * Processes characters in batches of 5 via the local OpenRouter proxy (http://127.0.0.1:4097),
 * automatically recovers from network hiccups, and saves all patches incrementally.
 */

import fs from 'fs';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '../../');

const CHARACTERS_FILE = path.join(projectRoot, 'src/data/characters.js');
const PROGRESS_FILE = path.join(projectRoot, 'src/data/auditProgress.json');
const PATCHES_FILE = path.join(projectRoot, 'src/data/rosterEnrichmentPatches.json');

const BATCH_SIZE = 5;
const MODEL = process.argv[2] || 'nvidia/nemotron-3.5-lightning:free';
const PROXY_PORT = 4097;

const SYSTEM_PROMPT = `APEX CONTINUOUS ROSTER AUDIT & AUTO-ENRICHMENT ENGINE
MODO AUTÓNOMO SECUENCIAL — NEMOTRON ULTRA / LAGUNA COMPATIBLE
AUDITA, CONSERVA, COMPLETA Y EMITE PARCHES LISTOS PARA INTEGRAR

SALIDA ESTRICTA: Devuelve EXCLUSIVAMENTE un objeto JSON válido según el esquema APEX_CONTINUOUS_ROSTER_AUDIT.
No incluyas texto fuera del JSON, ni markdown exterior, ni saludos.
BASE INALTERABLE ROSTER V22:
- Roster oficial e inalterable: ROSTER_NIVELES_PODER_CORREGIDO_V22.json.
- PROHIBIDO MODIFICAR O RECALCULAR tiers, Ki, multiplicadores, forms, universe, franchise ni IDs de la versión oficial.
- APEX_NEEDS_REVIEW_BACKLOG_V22.json se utiliza EXCLUSIVAMENTE para advertir que una ficha tiene una incidencia pendiente de revisión editorial.
- Si un combate, equipo, sinergia o ficha necesita interpretar un registro de needsReview: conserva el roster V22, explica la limitación, no inventes correcciones y no alteres el dato persistente.
Campos protegidos (PROHIBIDO MODIFICAR): tierExact, tierRank, powerKey, APEX-Ki, Source Ki, numericStats, simulationOutput, forms, franchise, universe.
Usa tags en inglés snake_case (ki_user, martial_artist, saiyan, etc.).
Respeta la continuidad temporal estricta de cada saga.

REGLAS DE SINERGIAS & PASIVAS CANÓNICAS:
1. AISLAMIENTO TOTAL: partnerTags solo pueden apuntar a personajes o facciones de su mismo universo y lore.
2. CERO CONTAMINACIÓN BIOLÓGICA: Zenkai solo para Saiyajins legítimos; Biomasa/absorción solo para Cell/bio-androides; Cursed Energy solo para hechiceros JJK; Nen solo para cazadores HxH; Stands solo para usuarios de Stand.
3. EFECTOS TÁCTICOS: Los efectos deben otorgar buffs mecánicos fundamentados (ej: cobertura, distracción, sincronización de energía, impulso de furia por caída de aliado).`;

// Load Characters
async function loadCharacters() {
  const content = fs.readFileSync(CHARACTERS_FILE, 'utf8');
  // Simple extraction of INITIAL_CHARACTERS
  const mod = await import('file://' + CHARACTERS_FILE.replace(/\\/g, '/'));
  return mod.INITIAL_CHARACTERS || [];
}

// Load Progress
function loadProgress() {
  if (fs.existsSync(PROGRESS_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8'));
    } catch {
      return { lastIndex: 0, completedBatches: 0, startTime: new Date().toISOString() };
    }
  }
  return { lastIndex: 0, completedBatches: 0, startTime: new Date().toISOString() };
}

// Save Progress
function saveProgress(data) {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(data, null, 2), 'utf8');
}

// Load Existing Patches
function loadPatches() {
  if (fs.existsSync(PATCHES_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(PATCHES_FILE, 'utf8'));
    } catch {
      return [];
    }
  }
  return [];
}

// Save Patches
function savePatches(patches) {
  fs.writeFileSync(PATCHES_FILE, JSON.stringify(patches, null, 2), 'utf8');
}

import { executeResilientCompletion } from './aiKeyRotator.js';

// Send Request con Auto-Rotación y Fallback de 3 Vías
function sendCompletion(payload) {
  return executeResilientCompletion(SYSTEM_PROMPT, payload, MODEL);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Clean JSON text from markdown fences
function cleanJsonText(raw) {
  let text = raw.trim();
  if (text.startsWith('```')) {
    text = text.replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/i, '');
  }
  const firstBrace = text.indexOf('{');
  const lastBrace = text.lastIndexOf('}');
  if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
    return text.substring(firstBrace, lastBrace + 1);
  }
  return text;
}

// Main Autonomous Loop
async function run() {
  console.log('================================================================');
  console.log('  🌙 AUDITORÍA NOCTURNA AUTÓNOMA — APEX ROSTER ENRICHMENT');
  console.log('================================================================');
  console.log(`  • Modelo: ${MODEL}`);
  console.log(`  • Proxy:  http://127.0.0.1:${PROXY_PORT}`);
  console.log(`  • Lotes:  ${BATCH_SIZE} personajes por iteración`);
  console.log('================================================================\n');

  // Load expansion patches (synergy/pasiva extras)
  const EXPANSION_PATCHES_FILE = path.join(projectRoot, 'src/data/rosterExpansionPatches.json');
  function loadExpansionPatches() {
    if (fs.existsSync(EXPANSION_PATCHES_FILE)) {
      try { return JSON.parse(fs.readFileSync(EXPANSION_PATCHES_FILE, 'utf8')); } catch { return []; }
    }
    return [];
  }
  function applyExpansion(characters) {
    const patches = loadExpansionPatches();
    const map = {};
    patches.forEach(p => { map[p.charId] = p; });
    characters.forEach(c => {
      const p = map[c.id];
      if (p) {
        if (p.addedSynergies) c.synergies = (c.synergies || []).concat(p.addedSynergies);
        if (p.addedPassives) c.passives = (c.passives || []).concat(p.addedPassives);
        if (p.addedTags) c.haxTags = (c.haxTags || []).concat(p.addedTags);
      }
    });
    return characters;
  }

  // After loading characters
  let characters = await loadCharacters();
  characters = applyExpansion(characters);

  const total = characters.length;
  let progress = loadProgress();
  let allPatches = loadPatches();

  let currentIndex = progress.lastIndex || 0;
  console.log(`📌 Reanudando desde el índice ${currentIndex} de ${total} personajes.`);
  console.log(`📦 Parches acumulados actualmente: ${allPatches.length}\n`);

  while (currentIndex < total) {
    const end = Math.min(currentIndex + BATCH_SIZE, total);
    const batch = characters.slice(currentIndex, end);
    const batchId = `roster_audit_batch_${Math.floor(currentIndex / BATCH_SIZE) + 1}`;

    const batchSummary = batch.map(c => c.name).join(', ');
    console.log(`\n⏳ [${currentIndex + 1}-${end}/${total}] Procesando Lote: ${batchSummary}...`);

    const payload = {
      mode: 'APEX_CONTINUOUS_ROSTER_AUDIT',
      batchId: batchId,
      auditMode: 'continuous_auto_enrichment',
      crossVerseMode: false,
      allowApexCustomAutoIntegration: true,
      maxRecordsPerRun: BATCH_SIZE,
      requestedFocus: [
        'full_audit', 'tags', 'abilities', 'passives', 
        'special_mechanics', 'hax', 'weaknesses', 'synergies', 
        'team_combos', 'forms', 'artifacts'
      ],
      records: batch
    };

    let attempts = 0;
    let success = false;

    while (attempts < 5 && !success) {
      attempts++;
      try {
        const rawResponse = await sendCompletion(payload);
        const cleaned = cleanJsonText(rawResponse);
        const parsed = JSON.parse(cleaned);

        if (parsed.results || parsed.integrationPatch) {
          const patchCount = (parsed.integrationPatch || []).length;
          console.log(`  ✅ Lote completado con éxito. Operaciones emitidas: ${patchCount}`);

          if (parsed.integrationPatch && parsed.integrationPatch.length > 0) {
            allPatches.push(...parsed.integrationPatch);
            savePatches(allPatches);
          }

          currentIndex = end;
          progress.lastIndex = currentIndex;
          progress.completedBatches = (progress.completedBatches || 0) + 1;
          progress.lastUpdated = new Date().toISOString();
          saveProgress(progress);

          const percent = ((currentIndex / total) * 100).toFixed(1);
          console.log(`  📊 Progreso Global: ${currentIndex}/${total} (${percent}%) | Total Parches Guardados: ${allPatches.length}`);
          success = true;
        } else {
          throw new Error('La respuesta JSON no contiene results ni integrationPatch.');
        }
      } catch (err) {
        console.error(`  ⚠️ Intento ${attempts}/5 falló: ${err.message}`);
        if (attempts < 5) {
          const waitTime = attempts * 6000;
          console.log(`  ⏳ Esperando ${waitTime / 1000}s antes de reintentar...`);
          await sleep(waitTime);
        }
      }
    }

    if (!success) {
      console.error(`\n❌ No se pudo completar el lote tras 5 intentos. Pausando 15 segundos y continuando con el siguiente para no detener la noche...`);
      currentIndex = end;
      progress.lastIndex = currentIndex;
      saveProgress(progress);
      await sleep(15000);
    } else {
      // Cooldown between batches to avoid rate limits
      await sleep(2500);
    }
  }

  console.log('\n================================================================');
  console.log('  🎉 ¡AUDITORÍA COMPLETA DE LOS 821 PERSONAJES FINALIZADA!');
  console.log(`  • Total de parches generados: ${allPatches.length}`);
  console.log(`  • Archivo de salida: src/data/rosterEnrichmentPatches.json`);
  console.log('================================================================\n');
}

run().catch(err => {
  console.error('Error crítico en el corredor autónomo:', err);
});
