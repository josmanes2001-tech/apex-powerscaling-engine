import fs from 'fs';

const content = `/**
 * APEX Combat State Resolver
 * Universal state, form, transformation, fusion and power scaling resolver.
 */

import { TIER_ORDER, getTierRank, getTierLog10, getBaseApexKiLog10, formatApexKiFromLog10, calculateQuality, calculateScores, TEMP_PROFILES } from './apexTierSystem.js';
import { FORM_SCALING_CONFIG } from '../data/formScalingConfig.js';

/**
 * Normaliza strings para búsqueda de alias
 */
function normalizeName(str) {
  return String(str || '')
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .trim();
}

/**
 * Encuentra el objeto de forma/estado dentro de todas las colecciones posibles del personaje
 */
export function findStateInCharacter(character, stateId) {
  if (!character) return null;
  if (!stateId || stateId === 'base' || stateId === 'default' || stateId === character.id) {
    return {
      id: 'base',
      name: character.form_or_state || character.name || 'Estado Base',
      isBase: true
    };
  }

  const collections = [
    character.forms,
    character.transformations,
    character.states,
    character.modes,
    character.variants,
    character.powerUps,
    character.fusionMethods
  ];

  for (const col of collections) {
    if (Array.isArray(col)) {
      // 1. Direct ID match
      const byId = col.find(item => item && (item.id === stateId || item.stateId === stateId));
      if (byId) return byId;

      // 2. Name or normalized name match
      const normStateId = normalizeName(stateId);
      const byName = col.find(item => item && (normalizeName(item.name) === normStateId || normalizeName(item.id) === normStateId));
      if (byName) return byName;
    }
  }

  return null;
}

/**
 * Resuelve el estado de combate activo con prioridad universal y sin doble escalado
 */
export function resolveCombatState(character, activeStateId = 'base') {
  if (!character) {
    return {
      combatantId: 'unknown',
      stateId: 'base',
      stateName: 'Desconocido',
      tierExact: '10-B',
      tierRank: 1,
      powerKey: 101,
      apexScore: '1.50',
      currentApexKiLog10: 1.0,
      apexKiDisplay: '10 APEX-Ki',
      multiplier: 1.0,
      scalingApplied: { method: 'fallback-none', source: 'default', multiplier: 1.0 },
      warnings: ['Personaje nulo o indefinido.'],
      manualReviewRequired: true
    };
  }

  const warnings = [];
  const universe = character.universe || character.franchise || 'Unknown';
  const isDB = /dragon\s*ball/i.test(universe) || /dragon-ball/i.test(character.id || '');

  // 1. Base Character Properties
  const baseTierRaw = character.tierExact || character.tier || '7-B';
  const baseTierExact = String(baseTierRaw).replace(/^Tier\s+/i, '').split('|')[0].trim().replace(/\s+a\s+.*$/i, '');
  const baseTierRank = getTierRank(baseTierExact) ?? getTierRank('7-B') ?? 14;

  const baseStats = (character.stats && typeof character.stats === 'object')
    ? character.stats
    : (TEMP_PROFILES.balanced);
  const baseQuality = calculateQuality(baseStats);
  const baseWithinTierScore = Math.max(0, Math.min(100, Math.round(baseQuality * 100)));
  const baseApexKiLog10 = getBaseApexKiLog10(baseTierExact, baseWithinTierScore);

  // 2. Locate Active State
  const stateObj = findStateInCharacter(character, activeStateId);
  const isBaseState = !activeStateId || activeStateId === 'base' || activeStateId === 'default' || (stateObj && stateObj.isBase);

  if (!stateObj && !isBaseState) {
    warnings.push(`Forma/Estado '${activeStateId}' no existe en la ficha de '${character.name}'. Usando base.`);
  }

  const stateName = stateObj?.name || (isBaseState ? (character.form_or_state || character.name || 'Estado Base') : String(activeStateId));
  const normStateName = normalizeName(stateName);
  const normStateId = normalizeName(stateObj?.id || activeStateId);

  // 3. Priority-based Scaling Resolution
  let activeTierExact = baseTierExact;
  let activeMultiplier = 1.0;
  let currentApexKiLog10 = baseApexKiLog10;
  let scalingApplied = { method: 'base', source: 'character-base', multiplier: 1.0 };

  if (!isBaseState && stateObj) {
    let resolved = false;

    // Priority 1: Explicit apexKiLog10 / apexKi on state
    if (typeof stateObj.apexKiLog10 === 'number' && Number.isFinite(stateObj.apexKiLog10)) {
      currentApexKiLog10 = stateObj.apexKiLog10;
      activeMultiplier = Math.pow(10, Math.max(0, currentApexKiLog10 - baseApexKiLog10));
      scalingApplied = { method: 'explicit-apexki-log10', source: 'state.apexKiLog10', multiplier: activeMultiplier };
      resolved = true;
    } else if (typeof stateObj.apexKi === 'number' && stateObj.apexKi > 0) {
      currentApexKiLog10 = Math.log10(stateObj.apexKi);
      activeMultiplier = stateObj.apexKi / Math.max(1, Math.pow(10, baseApexKiLog10));
      scalingApplied = { method: 'explicit-apexki-raw', source: 'state.apexKi', multiplier: activeMultiplier };
      resolved = true;
    }

    // Priority 2: Explicit sourceKi (Dragon Ball only)
    if (!resolved && isDB && typeof stateObj.sourceKi === 'number' && stateObj.sourceKi > 0) {
      const baseSourceKi = (typeof character.sourceKi === 'number' && character.sourceKi > 0) ? character.sourceKi : null;
      if (baseSourceKi) {
        activeMultiplier = stateObj.sourceKi / baseSourceKi;
        currentApexKiLog10 = baseApexKiLog10 + Math.log10(Math.max(1, activeMultiplier));
        scalingApplied = { method: 'explicit-sourceki-ratio', source: 'state.sourceKi', multiplier: activeMultiplier };
        resolved = true;
      }
    }

    // Priority 3: Explicit apexKiMultiplier or multiplier on state
    if (!resolved) {
      const explicitMult = stateObj.apexKiMultiplier ?? stateObj.multiplier ?? stateObj.powerMultiplier;
      if (typeof explicitMult === 'number' && Number.isFinite(explicitMult) && explicitMult > 0) {
        activeMultiplier = explicitMult;
        currentApexKiLog10 = baseApexKiLog10 + Math.log10(activeMultiplier);
        scalingApplied = { method: 'explicit-multiplier', source: 'state.multiplier', multiplier: activeMultiplier };
        resolved = true;
      }
    }

    // Priority 4: State's own tier (tierExact / tier)
    if (!resolved && (stateObj.tierExact || stateObj.tier || stateObj.stats)) {
      const rawStateStats = String(stateObj.tierExact || stateObj.tier || stateObj.stats || '');
      const tierMatch = rawStateStats.match(/(Tier\s*[\w\-\+]+|High\s*[\w\-\+]+|Low\s*[\w\-\+]+)/i);
      if (tierMatch) {
        const parsedTier = tierMatch[1].replace(/^Tier\s+/i, '').trim();
        const stateTierRank = getTierRank(parsedTier);
        if (stateTierRank !== null) {
          activeTierExact = parsedTier;
          const targetLog10 = getBaseApexKiLog10(activeTierExact, baseWithinTierScore);
          activeMultiplier = Math.pow(10, Math.max(0, targetLog10 - baseApexKiLog10));
          currentApexKiLog10 = targetLog10;
          scalingApplied = { method: 'state-own-tier', source: parsedTier, multiplier: activeMultiplier };
          resolved = true;
        }
      }
    }

    // Priority 5: Universe Alias Lookup in FORM_SCALING_CONFIG
    if (!resolved) {
      const universeKey = isDB ? 'dragon-ball' : normalizeName(universe);
      const universeConfig = FORM_SCALING_CONFIG[universeKey] || FORM_SCALING_CONFIG['dragon-ball'];

      if (universeConfig) {
        for (const [formKey, formDef] of Object.entries(universeConfig)) {
          const isAliasMatch = formDef.aliases.some(alias => {
            const normAlias = normalizeName(alias);
            return normStateName.includes(normAlias) || normStateId.includes(normAlias);
          });

          if (isAliasMatch) {
            activeMultiplier = formDef.apexKiMultiplier || 1.0;
            currentApexKiLog10 = baseApexKiLog10 + Math.log10(activeMultiplier);

            // Tier boost if specified
            if (formDef.tierBoost && formDef.tierBoost > 0) {
              const boostedRank = Math.min(TIER_ORDER.length - 1, baseTierRank + formDef.tierBoost);
              activeTierExact = TIER_ORDER[boostedRank];
            }

            scalingApplied = { method: 'config-alias-lookup', source: formKey, multiplier: activeMultiplier };
            resolved = true;
            break;
          }
        }
      }
    }

    // Priority 6: Unresolved -> fallback to base with warning
    if (!resolved) {
      warnings.push(`No se pudo resolver escalado exacto para '${stateName}'. Manteniendo estadísticas base.`);
      scalingApplied = { method: 'unresolved-fallback', source: 'base', multiplier: 1.0 };
    }
  }

  // 4. Final Calculations
  const finalTierRank = getTierRank(activeTierExact) ?? baseTierRank;
  const { withinTierScore, powerKey, apexScore, powerBand } = calculateScores(finalTierRank, baseQuality, activeTierExact);
  const apexKiDisplay = formatApexKiFromLog10(currentApexKiLog10, activeTierExact);

  return {
    combatantId: character.id,
    characterId: character.id,
    name: character.name,
    stateId: isBaseState ? 'base' : (stateObj?.id || activeStateId),
    stateName: stateName,
    isTransformed: !isBaseState && activeMultiplier > 1,
    tierExact: activeTierExact,
    tierRank: finalTierRank,
    withinTierScore,
    powerKey,
    apexScore,
    powerBand,
    currentApexKiLog10,
    apexKiDisplay,
    formMultiplier: activeMultiplier,
    scalingApplied,
    sourceKi: (isDB && character.sourceKi) ? Math.round(character.sourceKi * activeMultiplier) : null,
    statModifiers: stateObj?.statModifiers || {},
    staminaDrainPerTurn: stateObj?.staminaDrain || 0,
    warnings,
    manualReviewRequired: warnings.length > 0
  };
}
`;

fs.writeFileSync('src/lib/combatStateResolver.js', content, 'utf8');
console.log('src/lib/combatStateResolver.js created successfully!');
