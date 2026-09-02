/**
 * APEX PATCH APPLIER & REFINER
 * 
 * Takes the generated integration patches from `rosterEnrichmentPatches.json`
 * or `apex_golden_enriched_*.json`, creates a safety backup of `characters.js`,
 * and applies all additions, fixes, forms, tags, abilities, passives, combos and synergies!
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '../../');

const CHARACTERS_FILE = path.join(projectRoot, 'src/data/characters.js');
const BACKUP_FILE = path.join(projectRoot, `src/data/characters.backup.${Date.now()}.js`);
const PATCHES_FILE = path.join(projectRoot, 'src/data/rosterEnrichmentPatches.json');

async function main() {
  console.log('================================================================');
  console.log('  🛠️ APLICADOR Y REFINADOR DE PARCHES DE ROSTER — APEX');
  console.log('================================================================\n');

  // Find patch files in src/data/
  let patchSources = [];
  if (fs.existsSync(PATCHES_FILE)) patchSources.push(PATCHES_FILE);

  const dataFiles = fs.readdirSync(path.join(projectRoot, 'src/data'));
  for (const f of dataFiles) {
    if (f.startsWith('apex_golden_enriched_') && f.endsWith('.json')) {
      patchSources.push(path.join(projectRoot, 'src/data', f));
    }
  }

  if (patchSources.length === 0) {
    console.log('⚠️ No se encontraron archivos de parches pendientes en src/data/.');
    console.log('Ejecuta primero ENRIQUECER_ROSTER_AUTONOMO.bat para generar mejoras.');
    return;
  }

  console.log(`📦 Archivos de parches encontrados (${patchSources.length}):`);
  patchSources.forEach(p => console.log(`   • ${path.basename(p)}`));

  // Load characters
  const mod = await import('file://' + CHARACTERS_FILE.replace(/\\/g, '/'));
  let characters = JSON.parse(JSON.stringify(mod.INITIAL_CHARACTERS || []));
  console.log(`\n📋 Personajes en el roster actual: ${characters.length}`);

  // Create safety backup
  fs.copyFileSync(CHARACTERS_FILE, BACKUP_FILE);
  console.log(`🛡️ Copia de seguridad creada en: ${path.basename(BACKUP_FILE)}`);

  const charMap = new Map();
  characters.forEach(c => {
    if (c.id) charMap.set(c.id, c);
    if (c.name) charMap.set(c.name.toLowerCase().trim(), c);
  });

  let appliedOps = 0;

  for (const src of patchSources) {
    try {
      const data = JSON.parse(fs.readFileSync(src, 'utf8'));
      const patches = Array.isArray(data) ? data : (data.integrationPatch || []);
      const results = Array.isArray(data) ? [] : (data.results || []);

      // 1. Apply from results (direct character enrichment)
      for (const res of results) {
        let target = charMap.get(res.id) || charMap.get((res.name || '').toLowerCase().trim());
        if (target) {
          // Merge Forms
          if (res.formsAudited && Array.isArray(res.formsAudited) && res.formsAudited.length > 0) {
            if (!Array.isArray(target.forms)) target.forms = [];
            for (const f of res.formsAudited) {
              const existingFormIdx = target.forms.findIndex(ef => ef && (ef.id === f.id || ef.name === f.name));
              if (existingFormIdx >= 0) {
                target.forms[existingFormIdx] = { ...target.forms[existingFormIdx], ...f };
              } else {
                target.forms.push(f);
              }
              appliedOps++;
            }
          }

          // Merge Arsenal
          if (res.arsenal && typeof res.arsenal === 'object') {
            if (!target.arsenal || typeof target.arsenal !== 'object') target.arsenal = {};
            ['basicAttacks', 'superAttacks', 'ultimateAttacks', 'passives', 'specialMechanics', 'weaknesses'].forEach(key => {
              if (res.arsenal[key] && Array.isArray(res.arsenal[key])) {
                if (!Array.isArray(target.arsenal[key])) target.arsenal[key] = [];
                for (const item of res.arsenal[key]) {
                  const itemIdent = item?.name || item;
                  const alreadyHas = target.arsenal[key].some(ei => (ei?.name || ei) === itemIdent);
                  if (!alreadyHas) {
                    target.arsenal[key].push(item);
                    appliedOps++;
                  }
                }
              }
            });
          }

          // Merge HaxTags
          if (res.haxTags && Array.isArray(res.haxTags)) {
            if (!Array.isArray(target.haxTags)) target.haxTags = [];
            for (const tag of res.haxTags) {
              if (!target.haxTags.includes(tag)) {
                target.haxTags.push(tag);
                appliedOps++;
              }
            }
          }

          // Merge Synergies
          if (res.synergies && Array.isArray(res.synergies)) {
            if (!Array.isArray(target.synergies)) target.synergies = [];
            for (const syn of res.synergies) {
              if (!target.synergies.some(s => s && s.name === syn?.name)) {
                target.synergies.push(syn);
                appliedOps++;
              }
            }
          }

          // Merge Team Combos
          if (res.teamCombos && Array.isArray(res.teamCombos)) {
            if (!Array.isArray(target.teamCombos)) target.teamCombos = [];
            for (const tc of res.teamCombos) {
              if (!target.teamCombos.some(c => c && c.name === tc?.name)) {
                target.teamCombos.push(tc);
                appliedOps++;
              }
            }
          }
        }
      }

      // 2. Apply from atomic integrationPatch
      for (const patch of patches) {
        let target = charMap.get(patch.characterId) || charMap.get((patch.characterName || '').toLowerCase().trim());
        if (!target) continue;

        if (patch.op === 'add' || patch.op === 'append') {
          const pathParts = (patch.path || '').replace(/^\//, '').split('/');
          let curr = target;
          for (let i = 0; i < pathParts.length - 1; i++) {
            curr[pathParts[i]] = curr[pathParts[i]] || {};
            curr = curr[pathParts[i]];
          }
          const lastKey = pathParts[pathParts.length - 1];
          if (Array.isArray(curr[lastKey])) {
            curr[lastKey].push(patch.value);
            appliedOps++;
          } else {
            curr[lastKey] = patch.value;
            appliedOps++;
          }
        }
      }
    } catch (err) {
      console.error(`⚠️ Error al procesar ${path.basename(src)}: ${err.message}`);
    }
  }

  // Write updated characters.js file
  const newContent = `// APEX Power Scaling Engine — Master Characters Roster\n// Refinado y enriquecido automáticamente con Estándar Dorado APEX\n\nexport const INITIAL_CHARACTERS = ${JSON.stringify(characters, null, 2)};\n`;
  fs.writeFileSync(CHARACTERS_FILE, newContent, 'utf8');

  console.log('\n================================================================');
  console.log(`  🎉 ¡PARCHES Y MEJORAS APLICADOS EXITOSAMENTE AL ROSTER!`);
  console.log(`  • Total de operaciones aplicadas: ${appliedOps}`);
  console.log(`  • Archivo actualizado: src/data/characters.js`);
  console.log(`  • Copia de seguridad guardada: ${path.basename(BACKUP_FILE)}`);
  console.log('================================================================\n');
}

main().catch(console.error);
