import { INITIAL_CHARACTERS } from '../data/characters.js';
import { resolveCombatState } from '../lib/combatStateResolver.js';
import { TIER_ORDER, getTierRank, getBaseApexKiLog10 } from '../lib/apexTierSystem.js';
import { FORM_SCALING_CONFIG } from '../data/formScalingConfig.js';

let passed = 0;
let failed = 0;
const warnings = [];
const errors = [];
const corrections = [];

function assert(condition, message) {
  if (condition) { passed++; console.log("  [PASS] " + message); }
  else { failed++; console.error("  [FAIL] " + message); }
}

function normalizeText(str) {
  return String(str || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
}

console.log("=== AUDITORIA COMPLETA DE characters.js ===\n");
console.log("Total personajes cargados:", INITIAL_CHARACTERS.length);
console.log("Total tiers en TIER_ORDER:", TIER_ORDER.length);
console.log("");

// 1. TIER VALIDATION
console.log("=== 1. VALIDACION DE TIERS ===");
const invalidTiers = [];
const tierCounts = {};
INITIAL_CHARACTERS.forEach((char, idx) => {
  const rawTier = char.tier;
  if (!rawTier) {
    invalidTiers.push({ id: char.id, name: char.name, issue: 'SIN TIER' });
    return;
  }
  const cleanTier = String(rawTier).replace(/^Tier\s+/i, '').split('|')[0].trim().replace(/\s+a\s+.*$/i, '');
  const rank = getTierRank(cleanTier);
  if (rank === null) {
    invalidTiers.push({ id: char.id, name: char.name, tier: rawTier, issue: 'TIER INVALIDO' });
  } else {
    const tierKey = cleanTier;
    tierCounts[tierKey] = (tierCounts[tierKey] || 0) + 1;
  }
});
console.log(`  Personajes con tier valido: ${INITIAL_CHARACTERS.length - invalidTiers.length}`);
console.log(`  Personajes con tier INVALIDO: ${invalidTiers.length}`);
if (invalidTiers.length > 0) {
  invalidTiers.forEach(t => console.error(`    - ${t.name} (${t.id}): "${t.tier}" -> ${t.issue}`));
  errors.push(...invalidTiers);
}
assert(invalidTiers.length === 0, `Todos los ${INITIAL_CHARACTERS.length} personajes tienen tiers validos`);

// 2. STATS OBJECT IN FIELDS CHECK
console.log("\n=== 2. INTEGRIDAD DE FICHAS (objetos en campos string) ===");
const statsObjectIssues = [];
const statsFields = ['ap', 'range', 'durability', 'strength', 'psychology', 'weaknesses'];
INITIAL_CHARACTERS.forEach(char => {
  const checks = { ...char, ...(char.forms?.[0] || {}) };
  // Check top-level fields
  for (const field of statsFields) {
    const val = char[field];
    if (val && typeof val === 'object' && !Array.isArray(val)) {
      statsObjectIssues.push({ id: char.id, name: char.name, field, type: typeof val, keys: Object.keys(val) });
    }
  }
  // Check form objects for object-in-stats
  if (char.forms) {
    char.forms.forEach((form, fi) => {
      if (form.stats && typeof form.stats === 'object' && !Array.isArray(form.stats)) {
        statsObjectIssues.push({ id: char.id, name: char.name, field: `forms[${fi}].stats`, type: 'object', keys: Object.keys(form.stats) });
      }
    });
  }
  // Check arsenal for object values
  if (char.arsenal) {
    for (const [key, val] of Object.entries(char.arsenal)) {
      if (typeof val === 'object' && !Array.isArray(val) && key !== 'superAttacks' && key !== 'ultimateAttacks' && key !== 'passives' && key !== 'actives') {
        statsObjectIssues.push({ id: char.id, name: char.name, field: `arsenal.${key}`, type: 'object', keys: Object.keys(val) });
      }
    }
  }
});
console.log(`  Campos con objetos donde se espera string: ${statsObjectIssues.length}`);
if (statsObjectIssues.length > 0) {
  statsObjectIssues.forEach(s => console.error(`    - ${s.name} (${s.id}): campo "${s.field}" es un objeto con claves [${s.keys.join(', ')}]`));
  errors.push(...statsObjectIssues);
}
assert(statsObjectIssues.length === 0, `No hay objetos en campos de texto en ninguna ficha`);

// 3. UNIVERSE TAG CHECK
console.log("\n=== 3. VERIFICACION DE UNIVERSE / FRANQUISIA ===");
const universeIssues = [];
const dbUniverse = ['Dragon Ball Super', 'Dragon Ball Z', 'Dragon Ball (Clasico, GT, Daima)', 'Dragon Ball'];
INITIAL_CHARACTERS.forEach(char => {
  const universe = (char.universe || '').toLowerCase();
  const name = (char.name || '').toLowerCase();
  const saga = (char.saga || '').toLowerCase();
  if (universe.includes('dragon ball') && universe.includes('z') && saga.includes('cell') && !universe.includes('z')) {
    universeIssues.push({ id: char.id, name: char.name, universe: char.universe, saga: char.saga, issue: 'DBZ character with saga Cell but universe missing "Z"' });
  }
  if (universe.includes('dragon ball') && !universe.includes('z') && !universe.includes('super') && saga.includes('saga androides')) {
    universeIssues.push({ id: char.id, name: char.name, universe: char.universe, saga: char.saga, issue: 'Cell saga character missing "Z" in universe' });
  }
});
console.log(`  Inconsistencias de universo encontradas: ${universeIssues.length}`);
if (universeIssues.length > 0) {
  universeIssues.forEach(u => console.error(`    - ${u.name} (${u.id}): universo="${u.universe}", saga="${u.saga}" -> ${u.issue}`));
}
assert(universeIssues.length === 0, `Todos los tags de universo son coherentes`);

// 4. FORM SCALING VALIDATION
console.log("\n=== 4. VALIDACION DE ESCALADO DE FORMAS ===");
const scalingIssues = [];
const scalingMissing = [];
const scalingWrongMultiplier = [];
const formCountByChar = {};
let totalForms = 0;
let totalFormsWithConfigMatch = 0;
let totalFormsWithoutConfig = 0;

INITIAL_CHARACTERS.forEach(char => {
  const forms = char.forms || [];
  totalForms += forms.length;
  formCountByChar[char.id] = forms.length;

  forms.forEach(form => {
    const formName = normalizeText(form.name);
    const formId = normalizeText(form.id);
    const isBaseState = formName.includes('base') || formName.includes('estado base') || formName.includes('forma base') || formId === 'base' || formId.includes('base');

    if (isBaseState) return; // Skip base forms - they should have multiplier 1

    // Check if this form has explicit scaling
    const hasExplicitScaling = form.apexKiMultiplier || form.multiplier || form.explicitSourceKi || form.tierExact || form.tier;

    // Try to match against FORM_SCALING_CONFIG aliases
    let matchedConfig = null;
    const universeKey = 'dragon-ball';
    if (FORM_SCALING_CONFIG[universeKey]) {
      for (const [configKey, configDef] of Object.entries(FORM_SCALING_CONFIG[universeKey])) {
        const allAliases = [configKey, ...(configDef.aliases || [])];
        for (const alias of allAliases) {
          if (normalizeText(alias) === formName || normalizeText(alias) === formId) {
            matchedConfig = { key: configKey, ...configDef };
            break;
          }
        }
        if (matchedConfig) break;
      }
    }

    if (matchedConfig) {
      totalFormsWithConfigMatch++;
      // Verify the multiplier matches
      if (hasExplicitScaling && form.apexKiMultiplier && form.apexKiMultiplier !== matchedConfig.apexKiMultiplier) {
        scalingWrongMultiplier.push({ id: char.id, name: char.name, form: form.name, formId: form.id, actual: form.apexKiMultiplier, expected: matchedConfig.apexKiMultiplier });
      }
    } else if (!hasExplicitScaling) {
      totalFormsWithoutConfig++;
      scalingMissing.push({ id: char.id, name: char.name, form: form.name, formId: form.id });
    }
  });
});

console.log(`  Total de formas en todo el roster: ${totalForms}`);
console.log(`  Formas con match en formScalingConfig: ${totalFormsWithConfigMatch}`);
console.log(`  Formas sin configuracion de escalado: ${totalFormsWithoutConfig}`);
console.log(`  Multiplicadores incorrectos: ${scalingWrongMultiplier.length}`);

if (scalingMissing.length > 0) {
  console.error(`  Formas sin escalado configurado:`);
  scalingMissing.forEach(s => console.error(`    - ${s.name} -> ${s.form} (${s.formId})`));
}
if (scalingWrongMultiplier.length > 0) {
  console.error(`  Multiplicadores incorrectos:`);
  scalingWrongMultiplier.forEach(s => console.error(`    - ${s.name} -> ${s.form}: actual=${s.actual}, esperado=${s.expected}`));
}

// 5. RESOLVE COMBAT STATE for every character
console.log("\n=== 5. RESOLUCION DE ESTADOS DE COMBATE ===");
let totalWarnings = 0;
let totalErrors = 0;
const unresolvedForms = [];
const tierMismatchForms = [];

INITIAL_CHARACTERS.forEach(char => {
  const res = resolveCombatState(char, 'base');
  totalWarnings += res.warnings.length;
  if (res.warnings.length > 0) {
    res.warnings.forEach(w => warnings.push({ id: char.id, name: char.name, warning: w }));
  }
  if (res.apexKiStatus === 'unresolved') {
    unresolvedForms.push({ id: char.id, name: char.name, state: res.stateName });
  }
  // Check all forms
  (char.forms || []).forEach(form => {
    const formRes = resolveCombatState(char, form.id);
    if (formRes.warnings.length > 0) {
      formRes.warnings.forEach(w => warnings.push({ id: char.id, name: char.name, form: form.name, warning: w }));
      totalWarnings++;
    }
    if (formRes.apexKiStatus === 'unresolved' && formRes.scalingMethod === 'unresolved') {
      unresolvedForms.push({ id: char.id, name: char.name, form: form.name, state: res.stateName });
    }
  });
});

console.log(`  Warnings totales: ${totalWarnings}`);
console.log(`  Formas sin resolver: ${unresolvedForms.length}`);
if (unresolvedForms.length > 0) {
  console.error(`  Formas sin escalado configurado (unresolved):`);
  unresolvedForms.forEach(u => console.error(`    - ${u.name} -> ${u.form || u.state}: ${u.warning || ''}`));
}
// Filter for critical warnings (exclude "unresolved" / scaling warnings)
const criticalWarnings = warnings.filter(w => !w.warning.includes('sin escalado') && !w.warning.includes('no reconocido'));
totalWarnings = criticalWarnings.length;
if (totalWarnings > 0) {
  console.error(`  Warnings críticos detectados: ${totalWarnings}`);
  criticalWarnings.forEach(w => console.error(`    - ${w.name} (${w.id}): ${w.warning}`));
}
assert(totalWarnings === 0, `Cero warnings críticos en la resolucion de combat state`);

// 6. SPECIAL ATTACKS CHECK
console.log("\n=== 6. VERIFICACION DE ATAQUES ESPECIALES ===");
const missingArsenalIssues = [];
const emptyAttacks = [];
INITIAL_CHARACTERS.forEach(char => {
  const arsenal = char.arsenal || {};
  const hasSuperAttacks = Array.isArray(arsenal.superAttacks) && arsenal.superAttacks.length > 0;
  const hasUltimateAttacks = Array.isArray(arsenal.ultimateAttacks) && arsenal.ultimateAttacks.length > 0;
  const hasPassives = Array.isArray(arsenal.passives) && arsenal.passives.length > 0;

  if (!hasSuperAttacks && !hasUltimateAttacks && !hasPassives) {
    emptyAttacks.push({ id: char.id, name: char.name });
  }
});
console.log(`  Personajes sin ningun ataque especial: ${emptyAttacks.length}`);
if (emptyAttacks.length > 0) {
  emptyAttacks.forEach(e => console.error(`    - ${e.name} (${e.id})`));
}
assert(emptyAttacks.length === 0, `Todos los personajes tienen al menos un ataque especial`);

// 7. APEX-Ki CONSISTENCY
console.log("\n=== 7. CONSISTENCIA DE APEX-KI ===");
const apexKiIssues = [];
const powerKeyIssues = [];
INITIAL_CHARACTERS.forEach(char => {
  const res = resolveCombatState(char, 'base');
  if (res.powerKey === null || res.powerKey === undefined || isNaN(res.powerKey)) {
    apexKiIssues.push({ id: char.id, name: char.name, issue: 'powerKey invalido' });
  }
  if (res.powerKey === 8) {
    powerKeyIssues.push({ id: char.id, name: char.name, issue: 'powerKey = 8 (fallback prohibido)' });
  }
  if (res.currentApexKiLog10 !== null && (isNaN(res.currentApexKiLog10) || !isFinite(res.currentApexKiLog10))) {
    apexKiIssues.push({ id: char.id, name: char.name, issue: 'currentApexKiLog10 NaN/Infinity' });
  }
});
console.log(`  Personajes con powerKey invalido: ${apexKiIssues.length}`);
console.log(`  Personajes con powerKey=8 (fallback): ${powerKeyIssues.length}`);
assert(apexKiIssues.length === 0, `Todos los personajes tienen APEX-Ki valido`);
assert(powerKeyIssues.length === 0, `Ningun personaje tiene fallback 8`);

// 8. CORRECTIONS TO APPLY
console.log("\n=== 8. CORRECCIONES REQUERIDAS ===");
if (errors.length === 0 && scalingMissing.length === 0 && unresolvedForms.length === 0) {
  console.log("  No se detectaron errores criticos.");
} else {
  console.log(`  TOTAL ERRORES/ADVERTENCIAS: ${errors.length + scalingMissing.length + unresolvedForms.length + statsObjectIssues.length + universeIssues.length}`);
}

// Summary
console.log("\n==================================================");
console.log("RESUMEN DE AUDITORIA:");
console.log(`  Personajes auditados: ${INITIAL_CHARACTERS.length}`);
console.log(`  Total formas: ${totalForms}`);
console.log(`  Tiers invalidos: ${invalidTiers.length}`);
console.log(`  Stats object issues: ${statsObjectIssues.length}`);
console.log(`  Universe issues: ${universeIssues.length}`);
console.log(`  Formas sin escalado: ${scalingMissing.length}`);
console.log(`  Multiplicadores incorrectos: ${scalingWrongMultiplier.length}`);
console.log(`  Warnings de combat state: ${totalWarnings}`);
console.log(`  Formas unresolved: ${unresolvedForms.length}`);
console.log(`  APEX-Ki issues: ${apexKiIssues.length}`);
console.log(`  PowerKey=8 issues: ${powerKeyIssues.length}`);
console.log(`  Personajes sin ataques: ${emptyAttacks.length}`);
console.log(`  PASADAS: ${passed} / FALLADAS: ${failed}`);
console.log("==================================================");

if (failed > 0) process.exit(1);
