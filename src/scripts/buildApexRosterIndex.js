import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { TIER_ORDER, TEMP_PROFILES, getTierRank, calculateQuality, calculateScores } from '../lib/apexTierSystem.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../../');

const inputCandidates = [
  path.join(rootDir, 'src/data/allAuditedCharacters.temp.json'),
  path.join(rootDir, 'src/data/allAuditedCharacters.v2.json'),
  path.join(rootDir, 'src/data/allAuditedCharacters.json')
];

let selectedInputPath = null;
let rawData = null;

for (const candidate of inputCandidates) {
  if (fs.existsSync(candidate)) {
    try {
      const parsed = JSON.parse(fs.readFileSync(candidate, 'utf8'));
      if (Array.isArray(parsed) && parsed.length > 0) {
        selectedInputPath = candidate;
        rawData = parsed;
        break;
      }
    } catch (err) {
      console.warn(`Could not parse ${candidate}: ${err.message}`);
    }
  }
}

if (!rawData) {
  console.error("Error: No valid input roster file found in priority order.");
  process.exit(1);
}

const origCharsCode = fs.readFileSync(path.join(rootDir, 'src/data/characters.js'), 'utf8');
const origCharactersList = eval(origCharsCode.replace(/export\s+const\s+INITIAL_CHARACTERS\s*=\s*/, '').replace(/;$/, ''));
const origMapById = new Map(origCharactersList.map(c => [c.id, c]));

const issues = [];
const indexedRecords = [];
const seenIds = new Set();
let duplicateCount = 0;
let recordsWithTier = 0;
let recordsWithoutTier = 0;
let temporaryProfilesUsed = 0;
let inputStatsUsed = 0;

function inferProfile(item) {
  const name = (item.name || '').toLowerCase();
  const universe = (item.universe || '').toLowerCase();
  const mechanics = item.specialMechanics || item.recommended?.specialMechanics || [];
  const tags = (item.haxTags || []).map(t => String(t).toLowerCase());

  // Hax specialist
  const hasHax = mechanics.length > 0 || tags.some(t => /hax|tiempo|causalidad|espacio|realidad|infinito|maldita|stand|requiem/i.test(t));
  if (hasHax && (/gojo|giorno|ger|pucci|valentine|higuruma|zeno|law|yhwach|alucard|rimuru|makima/i.test(name) || tags.some(t => /infinita|inconmensurable/i.test(t)))) {
    return 'haxSpecialist';
  }

  // Speedster
  if (tags.some(t => /velocidad|speed|ftl|relativista|rayo/i.test(t)) || /flash|quicksilver|dyspo|a-train|zenitsu|sonic/i.test(name)) {
    return 'speedster';
  }

  // Strategist
  if (tags.some(t => /estrateg|intelecto|preparaci|mente|tecnolog/i.test(t)) || /batman|doom|bulma|lelouch|shikamaru|iron man|tony stark|senku|urahara/i.test(name)) {
    return 'strategist';
  }

  // Tank / Brute
  if (/hulk|doomsday|juggernaut|abomination|the thing/i.test(name)) {
    return 'tank';
  }
  if (tags.some(t => /fuerza|bruta|monstruo|bestia|colosal/i.test(t)) || /pickle|hanayama|oliva|broly|kaido|raian|superalloy/i.test(name)) {
    return 'brute';
  }

  // Martial Artist
  if (universe.includes('baki') || /baki|yujiro|kengan|ippo|garou|bang|rock lee|guy/i.test(name)) {
    return 'martialArtist';
  }

  // Energy Fighter
  if (universe.includes('dragon ball') || universe.includes('naruto') || universe.includes('bleach') || tags.some(t => /ki|chakra|reiatsu|energia/i.test(t))) {
    if (/krilin|krillin|tenshinhan|yamcha|roshi/i.test(name)) {
      return 'martialArtist';
    }
    return 'energyFighter';
  }

  return 'balanced';
}

function hasValidNormalizedStats(s) {
  if (!s || typeof s !== 'object') return false;
  const keys = ['ap', 'speed', 'durability', 'formControl', 'battleIQ', 'haxReliability'];
  return keys.every(k => typeof s[k] === 'number' && Number.isFinite(s[k]) && s[k] >= 0 && s[k] <= 1);
}

rawData.forEach((item, index) => {
  const charId = String(item.id || item.legacyId || `char-${index + 1}`).trim();
  
  if (!charId) {
    issues.push({
      id: `index-${index}`,
      type: "input-shape-warning",
      severity: "high",
      note: "Registro sin ID válido."
    });
    return;
  }

  if (seenIds.has(charId)) {
    duplicateCount++;
    issues.push({
      id: charId,
      type: "ambiguous-identity",
      severity: "high",
      note: `ID duplicado detectado: ${charId}`
    });
  }
  seenIds.add(charId);

  const origChar = origMapById.get(charId) || {};
  const name = item.name || origChar.name || "Desconocido";
  const universe = origChar.universe || origChar.franchise || item.universe || "Unknown";
  const isDB = /dragon\s*ball/i.test(universe) || /dragon-ball/i.test(charId);

  // Tier handling
  const rawTier = item.tierExact || item.recommended?.tierExact || item.tier || null;
  const cleanTier = rawTier ? String(rawTier).replace(/^Tier\s+/i, '').trim() : null;
  const tierRank = getTierRank(cleanTier);

  let temporaryStatus = "temporary-gameplay-ready";
  if (tierRank === null) {
    recordsWithoutTier++;
    temporaryStatus = "needs-manual-tier-review";
    issues.push({
      id: charId,
      type: "missing-tier",
      severity: "high",
      note: `Tier no reconocido en TIER_ORDER: '${rawTier}'`
    });
  } else {
    recordsWithTier++;
  }

  // SourceKi handling
  let sourceKi = null;
  let sourceKiStatus = null;
  const rawSourceKi = item.sourceKi || item.recommended?.sourceKi;
  const rawKiStatus = item.sourceKiStatus || item.recommended?.sourceKiStatus;

  if (isDB && typeof rawSourceKi === 'number' && rawSourceKi > 0) {
    sourceKi = rawSourceKi;
    sourceKiStatus = rawKiStatus || "temporary-unverified";
  } else if (!isDB && rawSourceKi) {
    issues.push({
      id: charId,
      type: "invalid-sourceki",
      severity: "medium",
      note: `sourceKi eliminado para personaje no-Dragon Ball (${universe})`
    });
  }

  // Stats handling & Profile
  let statsStatus = "temporary-profile";
  let profile = "balanced";
  let statsObj = null;

  const candidateStats = item.stats || item.recommended?.stats;
  if (hasValidNormalizedStats(candidateStats)) {
    statsObj = { ...candidateStats };
    statsStatus = "input-stats";
    inputStatsUsed++;
  } else {
    profile = inferProfile(item);
    statsObj = { ...TEMP_PROFILES[profile] };
    statsStatus = "temporary-profile";
    temporaryProfilesUsed++;
    issues.push({
      id: charId,
      type: "missing-stats",
      severity: "low",
      note: `Asignado perfil temporal '${profile}' por estadísticas de entrada no completas.`
    });
  }

  const quality = calculateQuality(statsObj);
  const { withinTierScore, powerKey, apexScore, powerBand } = calculateScores(tierRank, quality, cleanTier);

  // Special Mechanics check
  const rawMechanics = item.specialMechanics || item.recommended?.specialMechanics || [];
  let specialMechanicsStatus = "pending-lore-review";
  const validMechanics = [];

  for (const m of rawMechanics) {
    const isGeneric = (m.conditions || []).some(c => /uso de estamina|requiere energ|condicional en combate/i.test(c)) ||
                      (m.counterplay || []).some(cp => /evasi[oó]n|contraataque|ninguno directo/i.test(cp));
    if (isGeneric) {
      issues.push({
        id: charId,
        type: "generic-special-mechanic",
        severity: "medium",
        note: `Mecánica especial omitida por contener placeholders genéricos: '${m.name || 'Sin nombre'}'`
      });
    } else if (m.name) {
      validMechanics.push(m);
    }
  }

  if (validMechanics.length > 0) {
    specialMechanicsStatus = "available";
  }

  const record = {
    id: charId,
    name: name,
    universe: universe,
    tierExact: cleanTier,
    tierRank: tierRank,
    withinTierScore: withinTierScore,
    powerKey: powerKey,
    apexScore: apexScore,
    powerBand: powerBand,
    sourceKi: sourceKi,
    sourceKiStatus: sourceKiStatus,
    profile: profile,
    statsStatus: statsStatus,
    specialMechanicsStatus: specialMechanicsStatus,
    temporaryStatus: temporaryStatus,
    manualReviewRequired: true
  };

  indexedRecords.push(record);
});

// Sort index:
// 1. tierRank desc (nulls last)
// 2. withinTierScore desc
// 3. name asc
indexedRecords.sort((a, b) => {
  if (a.tierRank === null && b.tierRank !== null) return 1;
  if (a.tierRank !== null && b.tierRank === null) return -1;
  if (a.tierRank !== b.tierRank) return (b.tierRank || 0) - (a.tierRank || 0);
  if (a.withinTierScore !== b.withinTierScore) return (b.withinTierScore || 0) - (a.withinTierScore || 0);
  return (a.name || '').localeCompare(b.name || '');
});

const outputPathIndex = path.join(rootDir, 'src/data/apexRosterIndex.json');
const outputPathIssues = path.join(rootDir, 'src/data/apexRosterIssues.json');

fs.writeFileSync(outputPathIndex, JSON.stringify(indexedRecords, null, 2), 'utf8');
fs.writeFileSync(outputPathIssues, JSON.stringify(issues, null, 2), 'utf8');

const summary = {
  inputFile: path.relative(rootDir, selectedInputPath),
  inputRecords: rawData.length,
  indexedRecords: indexedRecords.length,
  recordsWithTier: recordsWithTier,
  recordsWithoutTier: recordsWithoutTier,
  temporaryProfilesUsed: temporaryProfilesUsed,
  inputStatsUsed: inputStatsUsed,
  issuesWritten: issues.length,
  duplicateIds: duplicateCount,
  outputIndex: path.relative(rootDir, outputPathIndex),
  outputIssues: path.relative(rootDir, outputPathIssues)
};

console.log(JSON.stringify(summary, null, 2));
