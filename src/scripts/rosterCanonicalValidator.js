/**
 * APEX POWER SCALING ENGINE — MASTER CANONICAL VALIDATOR & AUTO-CORRECTOR
 * 
 * Garantiza de forma 100% autónoma y continua:
 * 1. Forma Base obligatoria en índice 0 (apexKiMultiplier: 1.0)
 * 2. Orden ascendente estricto de transformaciones (Base -> SSJ1 -> SSJ2 -> SSJ3...)
 * 3. Cero formas sin tier, multiplicador o stamina
 * 4. Cero números flotantes raros (...020) o clones estáticos
 * 5. Cero sourceKi en personajes fuera de Dragon Ball
 * 6. Organización inmutable de las 16 franquicias oficiales
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getCharacterSignatureVariance, getPowerLevelFormulaBreakdown } from '../services/scouterEngine.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '../../');
const CHARACTERS_FILE = path.join(projectRoot, 'src/data/characters.js');

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
  '6-B', '6-A', 'High 6-A',
  '5-C', 'Low 5-B', '5-B', 'High 5-B', 'Low 5-A', '5-A', 'High 5-A',
  'Low 4-C', '4-C', 'High 4-C',
  '4-B', '4-A',
  '3-C', '3-B', '3-A', 'High 3-A',
  'Low 2-C', '2-C', '2-B', '2-A',
  'Low 1-C', '1-C', 'High 1-C',
  '1-B', 'High 1-B',
  '1-A', 'High 1-A',
  '0'
];

function scaleTier(baseTier, mult) {
  if (!baseTier) return '7-B';
  const cleanBase = baseTier.split('|')[0].replace('Tier', '').trim();
  const idx = TIER_ORDER.indexOf(cleanBase);
  if (idx === -1) return cleanBase;
  if (mult <= 1.0) return cleanBase;

  let steps = 0;
  if (mult >= 50000) steps = 6;
  else if (mult >= 10000) steps = 5;
  else if (mult >= 1000) steps = 4;
  else if (mult >= 100) steps = 2;
  else if (mult >= 50) steps = 1;
  else if (mult >= 10) steps = 1;

  const newIdx = Math.min(TIER_ORDER.length - 1, idx + steps);
  return TIER_ORDER[newIdx];
}

function cleanSignificantDigits(num) {
  if (typeof num !== 'number' || isNaN(num) || num <= 0) return 1000;
  if (!Number.isFinite(num)) return 1e24;
  if (num < 1000) return Math.round(num);
  if (num < 100000) return Math.round(num / 10) * 10;
  if (num < 1000000) return Math.round(num / 100) * 100;
  const magnitude = Math.pow(10, Math.floor(Math.log10(num)) - 2);
  return Math.round(num / magnitude) * magnitude;
}

function deduplicateArsenal(arr) {
  if (!Array.isArray(arr)) return [];
  const seen = new Set();
  const res = [];
  for (const item of arr) {
    const rawName = typeof item === 'object' ? (item.name || item.desc || '') : String(item);
    const norm = rawName.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]/g, '');
    if (!norm) continue;
    let duplicate = false;
    for (const s of seen) {
      if (s === norm || (s.length > 5 && norm.length > 5 && (s.includes(norm) || norm.includes(s)))) {
        duplicate = true;
        break;
      }
    }
    if (!duplicate) {
      seen.add(norm);
      res.push(item);
    }
  }
  return res;
}

export function validateAndAutoCorrectRoster(characters) {
  let correctionsCount = 0;

  for (const c of characters) {
    const idLower = (c.id || '').toLowerCase();
    const nameLower = (c.name || '').toLowerCase();

    // 1. Franquicia y Universo canónico inmutable
    if (idLower.includes('kojiro-sasaki') || nameLower.includes('kojiro sasaki')) {
      if (c.franchise !== 'Record of Ragnarok') {
        c.franchise = 'Record of Ragnarok';
        c.universe = 'Shuumatsu no Valkyrie (Record of Ragnarok)';
        correctionsCount++;
      }
    } else if (idLower.includes('kakyoin') || nameLower.includes('kakyoin')) {
      if (c.franchise !== "JoJo's Bizarre Adventure") {
        c.franchise = "JoJo's Bizarre Adventure";
        c.universe = "JoJo's Bizarre Adventure";
        correctionsCount++;
      }
    } else if (!c.franchise || !VALID_FRANCHISES.includes(c.franchise)) {
      const u = (c.universe || '').toLowerCase();
      const n = (c.name || '').toLowerCase();
      if (u.includes('dragon ball') || n.includes('goku') || n.includes('vegeta')) c.franchise = 'Dragon Ball';
      else if (u.includes('jujutsu') || n.includes('gojo') || n.includes('sukuna')) c.franchise = 'Jujutsu Kaisen';
      else if (u.includes('demon slayer') || u.includes('kimetsu')) c.franchise = 'Demon Slayer (Kimetsu no Yaiba)';
      else if (u.includes('marvel') || n.includes('spiderman') || n.includes('iron man')) c.franchise = 'Marvel Comics';
      else if (u.includes('dc') || n.includes('superman') || n.includes('batman')) c.franchise = 'DC Comics';
      else if (u.includes('hunter')) c.franchise = 'Hunter x Hunter';
      else if (u.includes('baki')) c.franchise = 'Baki the Grappler';
      else if (u.includes('ragnarok') || u.includes('valkyrie')) c.franchise = 'Record of Ragnarok';
      else if (u.includes('the boys')) c.franchise = 'The Boys';
      else if (u.includes('invincible')) c.franchise = 'Invincible';
      else if (u.includes('one punch') || n.includes('saitama')) c.franchise = 'One Punch Man';
      else if (u.includes('my hero') || u.includes('boku no hero')) c.franchise = 'My Hero Academia';
      else if (u.includes('jojo')) c.franchise = "JoJo's Bizarre Adventure";
      else if (u.includes('chainsaw')) c.franchise = 'Chainsaw Man';
      else if (u.includes('spy x family')) c.franchise = 'Spy x Family';
      else c.franchise = 'APEX Original / Híbrido';
      correctionsCount++;
    }

    // 1.5. Blindaje de Tiers Canónicos Críticos
    if (idLower.includes('granjero-con-escopeta') || nameLower.includes('granjero con escopeta')) {
      if (c.tier !== '10-C' || c.numericStats?.apexKi !== 5) {
        c.tier = '10-C';
        c.physicalTier = '10-C';
        c.haxTier = '10-C';
        c.sourceKi = 5;
        c.numericStats = { apexKi: 5, scouterKi: 5, powerLevel: 5 };
        if (c.forms && c.forms[0]) c.forms[0].tier = '10-C';
        correctionsCount++;
      }
    } else if (idLower.includes('nam') && (c.universe || '').includes('Clásico')) {
      if (c.tier !== '9-A' || c.numericStats?.apexKi !== 26) {
        c.tier = '9-A';
        c.physicalTier = '9-A';
        c.haxTier = '9-A';
        c.sourceKi = 26;
        c.numericStats = { apexKi: 26, scouterKi: 26, powerLevel: 26 };
        if (c.forms && c.forms[0]) c.forms[0].tier = '9-A';
        correctionsCount++;
      }
    } else if (idLower === 'videl-saga-buu-6') {
      if (c.tier !== '9-A' || c.numericStats?.apexKi !== 42) {
        c.tier = '9-A';
        c.physicalTier = '9-A';
        c.haxTier = '9-A';
        c.numericStats = { apexKi: 42, scouterKi: 42, powerLevel: 42 };
        if (c.forms && c.forms[0]) c.forms[0].tier = '9-A';
        correctionsCount++;
      }
    } else if (idLower.includes('carmine') && (c.universe || '').includes('Super')) {
      if (c.tier !== '9-C' || c.numericStats?.apexKi !== 10) {
        c.tier = '9-C';
        c.physicalTier = '9-C';
        c.haxTier = '9-C';
        c.numericStats = { apexKi: 10, scouterKi: 10, powerLevel: 10 };
        if (c.forms && c.forms[0]) c.forms[0].tier = '9-C';
        correctionsCount++;
      }
    }

    // 2. Blindaje de Ki no-Dragon Ball
    if (c.franchise !== 'Dragon Ball' && c.sourceKi) {
      delete c.sourceKi;
      delete c.sourceKiStatus;
      correctionsCount++;
    }

    // 2.5. Sanitización de Nombres Duplicados (ej: "X / X")
    if (c.name && c.name.includes('/')) {
      const parts = c.name.split('/').map(p => p.trim());
      if (parts.length === 2 && parts[0].toLowerCase() === parts[1].toLowerCase()) {
        c.name = parts[0];
        correctionsCount++;
      }
    }

    // 2.6. Erradicación de Textos Genéricos de Plantilla en AP y Durabilidad
    const apStr = typeof c.ap === 'string' ? c.ap : '';
    if (apStr.includes('Capacidades de combate activas al 100% de su rendimiento físico') ||
        apStr.includes('Forma inicial de combate con balance óptimo entre velocidad, resistencia física') ||
        apStr.includes('Forma Base canónica estándar')) {
      const cleanTier = (c.tier || c.physicalTier || '7-B').split('|')[0].replace('Tier', '').trim();
      c.ap = `Nivel destructivo correspondiente a Tier ${cleanTier}. Despliega todo su repertorio característico de combate y artes marciales en estado base.`;
      correctionsCount++;
    }

    const durStr = typeof c.durability === 'string' ? c.durability : '';
    if (durStr.startsWith('Escalado a ') || durStr === 'Escalado a Base' || durStr.length < 15) {
      const cleanTier = (c.physicalTier || c.tier || '7-B').split('|')[0].replace('Tier', '').trim();
      c.durability = `Resistencia física y tolerancia a impactos consistente con su Tier ${cleanTier}, reforzada por su fisionomía y experiencia en combate.`;
      correctionsCount++;
    }

    // 2.7. Deduplicación Estricta de Arsenal
    if (c.arsenal) {
      ['basicAttacks', 'superAttacks', 'ultimateAttacks', 'passives', 'specialMechanics', 'weaknesses'].forEach(k => {
        if (Array.isArray(c.arsenal[k])) {
          const originalLen = c.arsenal[k].length;
          c.arsenal[k] = deduplicateArsenal(c.arsenal[k]);
          if (c.arsenal[k].length !== originalLen) correctionsCount++;
        }
      });
    }

    // 3. Blindaje de Ki numérico contextual (Prohibición estricta de niveles planos como 800 o 5.5e9)
    if (!c.numericStats || typeof c.numericStats !== 'object') {
      c.numericStats = {};
    }
    const currentKi = c.numericStats.apexKi || 0;
    const isGenericFlat = (currentKi === 800 || currentKi === 5.5e9 || currentKi === 60000000 || currentKi <= 0);
    if (isGenericFlat && c.franchise !== 'Dragon Ball') {
      const bd = getPowerLevelFormulaBreakdown(c, 'base');
      const authenticKi = cleanSignificantDigits(bd?.finalPowerLevel || 1500);
      c.numericStats.apexKi = authenticKi;
      c.numericStats.scouterKi = authenticKi;
      c.numericStats.powerLevel = authenticKi;
      correctionsCount++;
    } else {
      const cleanKi = cleanSignificantDigits(currentKi);
      if (cleanKi !== currentKi) {
        c.numericStats.apexKi = cleanKi;
        c.numericStats.scouterKi = cleanKi;
        c.numericStats.powerLevel = cleanKi;
        correctionsCount++;
      }
    }

    // 3.5. Aislamiento Biológico y Cero Contaminación de Lore
    if (c.arsenal && Array.isArray(c.arsenal.passives)) {
      const isSaiyan = (c.franchise === 'Dragon Ball') && (
        /saiyajin|saiyan|goku|vegeta|gohan|broly|raditz|nappa|bardock|goten|trunks|cumber|shallot|giblet|kakarotto/i.test(c.name + ' ' + (c.alias || ''))
      );
      if (!isSaiyan) {
        const initialLen = c.arsenal.passives.length;
        c.arsenal.passives = c.arsenal.passives.filter(p => {
          const pName = (typeof p === 'object' ? (p.name || p.desc || '') : String(p)).toLowerCase();
          return !pName.includes('zenkai') && !pName.includes('cola saiyan');
        });
        if (c.arsenal.passives.length !== initialLen) correctionsCount++;
      }
    }

    // 4. Formas: Asegurar array
    if (!c.forms || !Array.isArray(c.forms) || c.forms.length === 0) {
      c.forms = [{
        id: 'base',
        name: `${c.name} (Estado Base)`,
        apexKiMultiplier: 1.0,
        staminaDrain: 0,
        tier: c.tier || '7-B',
        stats: 'Forma Base estándar.'
      }];
      correctionsCount++;
      continue;
    }

    // Asegurar que ninguna forma tenga multiplicador ni tier undefined
    c.forms.forEach((f, idx) => {
      if (typeof f.apexKiMultiplier !== 'number' || f.apexKiMultiplier <= 0) {
        f.apexKiMultiplier = idx === 0 ? 1.0 : 2.0;
        correctionsCount++;
      }
      if (!f.tier) {
        f.tier = scaleTier(c.tier || c.physicalTier || '7-B', f.apexKiMultiplier);
        correctionsCount++;
      }
      if (typeof f.staminaDrain !== 'number') {
        f.staminaDrain = idx === 0 ? 0 : Math.min(50, Math.round(f.apexKiMultiplier * 5));
        correctionsCount++;
      }
    });

    // Asegurar que la Forma Base esté en el índice 0
    const firstFormName = (c.forms[0]?.name || '').toLowerCase();
    const firstFormId = (c.forms[0]?.id || '').toLowerCase();
    const isFirstBase = firstFormName.includes('base') || firstFormId.includes('base') || c.forms[0]?.apexKiMultiplier === 1;

    if (!isFirstBase) {
      const baseIdx = c.forms.findIndex(f => (f.name || '').toLowerCase().includes('base') || (f.id || '').toLowerCase().includes('base') || f.apexKiMultiplier === 1);
      if (baseIdx > 0) {
        const [baseF] = c.forms.splice(baseIdx, 1);
        c.forms.unshift(baseF);
        correctionsCount++;
      } else {
        c.forms.unshift({
          id: 'base',
          name: `${c.name} (Estado Base)`,
          apexKiMultiplier: 1.0,
          staminaDrain: 0,
          tier: c.tier || '7-B',
          stats: 'Forma Base canónica estándar.'
        });
        correctionsCount++;
      }
    }

    // Orden ascendente de transformaciones
    const baseForm = c.forms[0];
    const transforms = c.forms.slice(1);
    let needsSort = false;
    for (let i = 0; i < transforms.length - 1; i++) {
      const tName = (transforms[i + 1].name || '').toLowerCase();
      const isDebuff = tName.includes('penalizado') || tName.includes('sin compuesto v') || tName.includes('humana común') || tName.includes('debilitado');
      if (transforms[i].apexKiMultiplier > transforms[i + 1].apexKiMultiplier && !isDebuff) {
        needsSort = true;
        break;
      }
    }

    if (needsSort) {
      transforms.sort((a, b) => (a.apexKiMultiplier || 1) - (b.apexKiMultiplier || 1));
      c.forms = [baseForm, ...transforms];
      correctionsCount++;
    }

    // 5. Garantizar estructura completa de ficha (Arsenal, Stamina, Feats, Diálogos)
    if (!c.arsenal || typeof c.arsenal !== 'object') {
      c.arsenal = {
        basicAttacks: [],
        superAttacks: [],
        ultimateAttacks: [],
        passives: [],
        specialMechanics: [],
        weaknesses: []
      };
      correctionsCount++;
    } else {
      if (!Array.isArray(c.arsenal.basicAttacks)) { c.arsenal.basicAttacks = []; correctionsCount++; }
      if (!Array.isArray(c.arsenal.superAttacks)) { c.arsenal.superAttacks = []; correctionsCount++; }
      if (!Array.isArray(c.arsenal.ultimateAttacks)) { c.arsenal.ultimateAttacks = []; correctionsCount++; }
      if (!Array.isArray(c.arsenal.passives)) { c.arsenal.passives = []; correctionsCount++; }
      if (!Array.isArray(c.arsenal.specialMechanics)) { c.arsenal.specialMechanics = []; correctionsCount++; }
      if (!Array.isArray(c.arsenal.weaknesses)) { c.arsenal.weaknesses = []; correctionsCount++; }
    }

    if (!c.staminaProfile || typeof c.staminaProfile !== 'object') {
      c.staminaProfile = { basePool: 100, recoveryRate: 5, exhaustionThreshold: 20 };
      correctionsCount++;
    }
    if (!Array.isArray(c.provenFeats)) c.provenFeats = [];
    if (!Array.isArray(c.synergies)) c.synergies = [];
    if (!Array.isArray(c.teamCombos)) c.teamCombos = [];
  }

  // 5. Reordenar permanentemente por Franquicia y Cronología
  characters.sort((a, b) => {
    const fIdxA = VALID_FRANCHISES.indexOf(a.franchise);
    const fIdxB = VALID_FRANCHISES.indexOf(b.franchise);
    const rankA = fIdxA === -1 ? 999 : fIdxA;
    const rankB = fIdxB === -1 ? 999 : fIdxB;
    if (rankA !== rankB) return rankA - rankB;

    if (a.franchise === 'Dragon Ball' && b.franchise === 'Dragon Ball') {
      const uIdxA = DB_UNIVERSE_ORDER.indexOf(a.universe);
      const uIdxB = DB_UNIVERSE_ORDER.indexOf(b.universe);
      const uRankA = uIdxA === -1 ? 999 : uIdxA;
      const uRankB = uIdxB === -1 ? 999 : uIdxB;
      if (uRankA !== uRankB) return uRankA - uRankB;
    }

    return (a.name || '').localeCompare(b.name || '');
  });

  return { characters, correctionsCount };
}

// Ejecución directa por CLI
async function main() {
  console.log('================================================================');
  console.log('  🛡️ VALIDADOR Y AUTO-CORRECTOR CANÓNICO DEL ROSTER — APEX');
  console.log('================================================================\n');

  const content = fs.readFileSync(CHARACTERS_FILE, 'utf8');
  let characters;
  try {
    characters = eval(content.replace(/export\s+const\s+INITIAL_CHARACTERS\s*=\s*/, '').replace(/;\s*$/, ''));
  } catch (err) {
    console.error('❌ Error al evaluar characters.js:', err.message);
    process.exit(1);
  }
  console.log(`📋 Total de personajes cargados: ${characters.length}`);

  const { characters: validated, correctionsCount } = validateAndAutoCorrectRoster(characters);

  if (correctionsCount > 0) {
    console.log(`⚠️ Se aplicaron ${correctionsCount} auto-correcciones canónicas.`);
    fs.writeFileSync(CHARACTERS_FILE, 'export const INITIAL_CHARACTERS = ' + JSON.stringify(validated, null, 2) + ';\n', 'utf8');
    console.log(`✅ characters.js actualizado y 100% blindado.`);
  } else {
    console.log(`✨ Roster 100% canónico, ordenado y sin anomalías detectadas (0 errores).`);
  }
}

if (process.argv[1] && process.argv[1].includes('rosterCanonicalValidator.js')) {
  main().catch(console.error);
}
