/**
 * APEX POWER SCALING ENGINE — MASTER CANONICAL VALIDATOR & AUDITOR
 * 
 * Modos de ejecución:
 * 1. AUDIT (por defecto): `node src/scripts/rosterCanonicalValidator.js`
 *    - Inspecciona exhaustivamente el Roster sin modificar characters.js.
 *    - Emite informe detallado de errores, advertencias, sugerencias y diffs.
 * 2. FIX (explícito): `node src/scripts/rosterCanonicalValidator.js --fix`
 *    - Crea automáticamente un backup timestamped en src/data/backups/
 *    - Guarda un reporte de auditoría en src/data/reports/
 *    - Corrige y guarda characters.js.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '../../');
const CHARACTERS_FILE = path.join(projectRoot, 'src/data/characters.js');
const BACKUPS_DIR = path.join(projectRoot, 'src/data/backups');
const REPORTS_DIR = path.join(projectRoot, 'src/data/reports');

export const VALID_FRANCHISES = [
  'Dragon Ball',
  'Jujutsu Kaisen',
  'Demon Slayer (Kimetsu no Yaiba)',
  'Chainsaw Man',
  'Hunter x Hunter',
  "JoJo's Bizarre Adventure",
  'One Punch Man',
  'My Hero Academia',
  'Baki the Grappler',
  'Record of Ragnarok',
  'Marvel Comics',
  'DC Comics',
  'Invincible',
  'The Boys',
  'Spy x Family',
  'APEX Original / Híbrido'
];

export const DB_UNIVERSE_ORDER = [
  'Dragon Ball (Clásico)',
  'Dragon Ball Z',
  'Dragon Ball Super',
  'Dragon Ball Daima',
  'Dragon Ball GT',
  'Dragon Ball Z — Películas y OVAs',
  'Dragon Ball (Multi-Era)',
  'Dragon Ball Multiverse (Fan-Manga)',
  'Dragon Ball (Fan-Mangas & What-If)'
];

const TIER_ORDER = [
  '10-C', '10-B', '10-A',
  '9-C', '9-B', '9-A',
  '8-C', '8-B', '8-A',
  'Low 7-C', '7-C', 'High 7-C',
  'Low 7-B', '7-B', '7-A', 'High 7-A',
  'Low 6-C', '6-C', 'High 6-C',
  'Low 6-B', '6-B', 'High 6-B',
  '6-A', 'High 6-A',
  '5-C', 'Low 5-B', '5-B', '5-A', 'High 5-A',
  'Low 4-C', '4-C', 'High 4-C',
  '4-B', '4-A',
  '3-C', '3-B', '3-A', 'High 3-A',
  'Low 2-C', '2-C', '2-B', '2-A',
  'Low 1-C', '1-C', 'High 1-C',
  '1-B', 'High 1-B',
  '1-A', 'High 1-A', '0'
];

/**
 * AUDITORÍA PURA DEL ROSTER
 * Inspecciona cada personaje e identifica fallos sin alterar datos en memoria.
 */
export function auditRoster(characters) {
  const issues = [];
  const warnings = [];
  const stats = {
    total: characters.length,
    dbCharacters: 0,
    crossVerseCharacters: 0,
    nonDbWithSourceKi: 0,
    missingSourceRef: 0,
    invalidBaseCategory: 0,
    burstLessThanApex: 0,
    outOfRangeApex: 0,
    tier2WithoutCosmology: 0
  };

  characters.forEach((c) => {
    const isDb = c.franchise === 'Dragon Ball';
    if (isDb) stats.dbCharacters++;
    else stats.crossVerseCharacters++;

    // 1. Detección de sourceKi en no-Dragon Ball
    if (!isDb && c.sourceKi !== null && c.sourceKi !== undefined) {
      stats.nonDbWithSourceKi++;
      issues.push({
        type: 'NON_DB_SOURCEKI',
        severity: 'CRITICAL',
        characterId: c.id,
        characterName: c.name,
        franchise: c.franchise,
        detail: `Personaje fuera de Dragon Ball posee sourceKi: ${c.sourceKi}. Debe ser estrictamente null.`
      });
    }

    // 2. sourceType canon_explicit sin fuente
    if (c.sourceType === 'canon_explicit' && !c.sourceReference) {
      stats.missingSourceRef++;
      issues.push({
        type: 'MISSING_CANON_REFERENCE',
        severity: 'HIGH',
        characterId: c.id,
        characterName: c.name,
        detail: `sourceType está marcado como 'canon_explicit' pero carece del campo sourceReference obligatorio.`
      });
    }

    // 3. Forma base en índice 0 no categorizada como 'base'
    if (Array.isArray(c.forms) && c.forms.length > 0) {
      if (c.forms[0].category !== 'base') {
        stats.invalidBaseCategory++;
        issues.push({
          type: 'INVALID_BASE_FORM_CATEGORY',
          severity: 'HIGH',
          characterId: c.id,
          characterName: c.name,
          detail: `La forma en índice 0 tiene category: '${c.forms[0].category}'. Debe ser estrictamente category: 'base'.`
        });
      }
    }

    // 4. burstKi menor que apexKi
    const apexKi = c.numericStats?.apexKi || c.apexKi || 5;
    if (typeof c.burstKi === 'number' && c.burstKi < apexKi) {
      stats.burstLessThanApex++;
      issues.push({
        type: 'BURST_LESS_THAN_APEX',
        severity: 'HIGH',
        characterId: c.id,
        characterName: c.name,
        detail: `burstKi (${c.burstKi}) es menor que apexKi (${apexKi}). El pico temporal nunca puede ser inferior al poder base sostenido.`
      });
    }

    // 5. apexKi fuera del rango declarado
    if (Array.isArray(c.apexKiRange) && c.apexKiRange.length === 2) {
      const [minR, maxR] = c.apexKiRange;
      if (apexKi < minR || apexKi > maxR) {
        stats.outOfRangeApex++;
        warnings.push({
          type: 'APEX_OUT_OF_RANGE',
          severity: 'MEDIUM',
          characterId: c.id,
          characterName: c.name,
          detail: `apexKi (${apexKi}) está fuera del rango declarado [${minR}, ${maxR}].`
        });
      }
    }

    // 6. Tier 2+ sin cosmologyClass
    const t = c.tier || '';
    if ((t.includes('2-') || t.includes('1-') || t === '0') && !c.cosmologyClass) {
      stats.tier2WithoutCosmology++;
      warnings.push({
        type: 'TIER_2_WITHOUT_COSMOLOGY',
        severity: 'MEDIUM',
        characterId: c.id,
        characterName: c.name,
        detail: `Personaje en Tier ${t} no posee 'cosmologyClass' ni reglas dimensionales declaradas.`
      });
    }

    // 7. Validación Exhaustiva de Transformaciones y Estados
    if (Array.isArray(c.forms)) {
      c.forms.forEach((f, fIdx) => {
        // A. Multiplicador inválido
        if (typeof f.apexKiMultiplier !== 'number' || f.apexKiMultiplier <= 0) {
          issues.push({
            type: 'INVALID_FORM_MULTIPLIER',
            severity: 'HIGH',
            characterId: c.id,
            characterName: c.name,
            detail: `Forma #${fIdx} ('${f.name}') posee apexKiMultiplier inválido: ${f.apexKiMultiplier}.`
          });
        }
        // B. apexKi de forma no numérico
        if (typeof f.apexKi !== 'number' || f.apexKi <= 0) {
          issues.push({
            type: 'INVALID_FORM_APEX_KI',
            severity: 'HIGH',
            characterId: c.id,
            characterName: c.name,
            detail: `Forma #${fIdx} ('${f.name}') no tiene un apexKi numérico válido.`
          });
        }
        // C. burstKi de forma menor que su apexKi
        if (typeof f.burstKi === 'number' && typeof f.apexKi === 'number' && f.burstKi < f.apexKi) {
          issues.push({
            type: 'FORM_BURST_LESS_THAN_APEX',
            severity: 'HIGH',
            characterId: c.id,
            characterName: c.name,
            detail: `Forma #${fIdx} ('${f.name}') tiene burstKi (${f.burstKi}) menor que apexKi (${f.apexKi}).`
          });
        }
        // D. sourceKi en formas no-Dragon Ball
        if (!isDb && f.sourceKi !== null && f.sourceKi !== undefined) {
          issues.push({
            type: 'NON_DB_FORM_SOURCEKI',
            severity: 'CRITICAL',
            characterId: c.id,
            characterName: c.name,
            detail: `Forma #${fIdx} ('${f.name}') de universo no-DB tiene sourceKi (${f.sourceKi}). Debe ser null.`
          });
        }
      });
    }
  });

  return { issues, warnings, stats };
}

/**
 * AUTO-CORRECCIÓN EXPLÍCITA (--fix)
 */
export function applyAutoCorrections(characters) {
  let correctionsCount = 0;
  const diffs = [];

  characters.forEach(c => {
    const isDb = c.franchise === 'Dragon Ball';

    // 1. Limpiar sourceKi en personajes ajenos a Dragon Ball
    if (!isDb && (c.sourceKi !== null || c.sourceType !== 'cross_verse_estimate')) {
      const oldKi = c.sourceKi;
      c.sourceKi = null;
      c.sourceType = 'cross_verse_estimate';
      diffs.push({ id: c.id, field: 'sourceKi', old: oldKi, new: null });
      correctionsCount++;
    }

    // 2. Normalizar forma base en índice 0
    if (Array.isArray(c.forms) && c.forms.length > 0) {
      if (c.forms[0].category !== 'base') {
        const oldCat = c.forms[0].category;
        c.forms[0].category = 'base';
        c.forms[0].apexKiMultiplier = 1.0;
        diffs.push({ id: c.id, field: 'forms[0].category', old: oldCat, new: 'base' });
        correctionsCount++;
      }
    }

    // 3. Normalizar burstKi
    const curApex = c.numericStats?.apexKi || c.apexKi || 5;
    if (typeof c.burstKi !== 'number' || c.burstKi < curApex) {
      const oldBurst = c.burstKi;
      c.burstKi = Math.round(curApex * 1.35);
      diffs.push({ id: c.id, field: 'burstKi', old: oldBurst, new: c.burstKi });
      correctionsCount++;
    }

    // 4. Normalizar apexKiRange
    if (!Array.isArray(c.apexKiRange) || c.apexKiRange.length !== 2) {
      c.apexKiRange = [Math.max(1, Math.round(curApex * 0.85)), Math.round(curApex * 1.25)];
      diffs.push({ id: c.id, field: 'apexKiRange', old: null, new: c.apexKiRange });
      correctionsCount++;
    }

    // 5. Añadir cosmologyClass básica a Tiers multiversales si falta
    const t = c.tier || '';
    if ((t.includes('2-') || t.includes('1-') || t === '0') && !c.cosmologyClass) {
      c.cosmologyClass = t.includes('1-A') || t === '0' ? 'outerversal_boundary' : 'multiversal_macrocosm';
      diffs.push({ id: c.id, field: 'cosmologyClass', old: null, new: c.cosmologyClass });
      correctionsCount++;
    }
  });

  return { characters, correctionsCount, diffs };
}

export const validateAndAutoCorrectRoster = applyAutoCorrections;

async function main() {
  const isFixMode = process.argv.includes('--fix');

  console.log('================================================================');
  console.log(`  🛡️ AUDITOR Y VALIDADOR CANÓNICO DEL ROSTER — APEX [${isFixMode ? 'MODO FIX' : 'MODO AUDIT'}]`);
  console.log('================================================================\n');

  if (!fs.existsSync(CHARACTERS_FILE)) {
    console.error(`❌ Archivo no encontrado: ${CHARACTERS_FILE}`);
    process.exit(1);
  }

  const content = fs.readFileSync(CHARACTERS_FILE, 'utf8');
  let characters;
  try {
    characters = eval(content.replace(/export\s+const\s+INITIAL_CHARACTERS\s*=\s*/, '').replace(/;\s*$/, ''));
  } catch (err) {
    console.error('❌ Error al parsear characters.js:', err.message);
    process.exit(1);
  }

  console.log(`📋 Total de personajes cargados: ${characters.length}`);

  // 1. Ejecución de auditoría
  const auditResult = auditRoster(characters);
  console.log('\n--- RESUMEN DE AUDITORÍA ---');
  console.log(`• Personajes Dragon Ball: ${auditResult.stats.dbCharacters}`);
  console.log(`• Personajes Cross-Verse: ${auditResult.stats.crossVerseCharacters}`);
  console.log(`• Errores críticos/altos detectados: ${auditResult.issues.length}`);
  console.log(`• Advertencias detectadas: ${auditResult.warnings.length}`);

  if (auditResult.issues.length > 0) {
    console.log('\n🔴 ERRORES DETECTADOS:');
    auditResult.issues.slice(0, 10).forEach((iss, i) => {
      console.log(`  ${i + 1}. [${iss.type}] ${iss.characterName}: ${iss.detail}`);
    });
    if (auditResult.issues.length > 10) {
      console.log(`  ... y ${auditResult.issues.length - 10} errores más.`);
    }
  }

  if (auditResult.warnings.length > 0) {
    console.log('\n🟡 ADVERTENCIAS:');
    auditResult.warnings.slice(0, 5).forEach((w, i) => {
      console.log(`  ${i + 1}. [${w.type}] ${w.characterName}: ${w.detail}`);
    });
    if (auditResult.warnings.length > 5) {
      console.log(`  ... y ${auditResult.warnings.length - 5} advertencias más.`);
    }
  }

  // 2. Acciones según modo
  if (!isFixMode) {
    console.log('\n🔒 MODO AUDIT ACTIVO: characters.js NO ha sido modificado.');
    console.log('👉 Para aplicar las correcciones con backup previo, ejecuta:');
    console.log('   node src/scripts/rosterCanonicalValidator.js --fix\n');
    return;
  }

  // 3. MODO FIX: Backup previo obligatorio
  if (!fs.existsSync(BACKUPS_DIR)) fs.mkdirSync(BACKUPS_DIR, { recursive: true });
  if (!fs.existsSync(REPORTS_DIR)) fs.mkdirSync(REPORTS_DIR, { recursive: true });

  const timestamp = Date.now();
  const backupFile = path.join(BACKUPS_DIR, `characters_backup_${timestamp}.js`);
  fs.writeFileSync(backupFile, content, 'utf8');
  console.log(`\n💾 Backup previo creado en: ${backupFile}`);

  // Aplicar correcciones
  const { characters: corrected, correctionsCount, diffs } = applyAutoCorrections(characters);

  // Guardar reporte
  const reportFile = path.join(REPORTS_DIR, `audit_report_${timestamp}.json`);
  fs.writeFileSync(reportFile, JSON.stringify({ timestamp, correctionsCount, diffs }, null, 2), 'utf8');
  console.log(`📄 Reporte de cambios guardado en: ${reportFile}`);

  // Guardar characters.js
  fs.writeFileSync(CHARACTERS_FILE, 'export const INITIAL_CHARACTERS = ' + JSON.stringify(corrected, null, 2) + ';\n', 'utf8');
  console.log(`✅ characters.js actualizado con éxito (${correctionsCount} correcciones aplicadas).\n`);
}

if (process.argv[1] && process.argv[1].includes('rosterCanonicalValidator.js')) {
  main().catch(console.error);
}
