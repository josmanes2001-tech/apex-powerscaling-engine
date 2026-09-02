/**
 * APEX Powerscaling Engine — Global Policy, Oracle & Permission Test Suite
 * Validates User Selection Priority, Scenario Rules, Item Inventory, Senzu Bean consumption,
 * Oracle Event Isolation, State Combinations, and Narrative Traceability.
 */

import {
  createCombatSnapshot,
  validateCombatSnapshot,
  validateUserSelections,
  executeCombatSimulation,
  synthesizeNarrativeFromValidatedLog,
  canUseState,
  canUseAbility,
  canUseItem,
  canCombineStates,
  useExternalItem,
  triggerOracleEvent,
  ORACLE_EVENT_PERMISSIONS,
  RULE_AUTHORITY_HIERARCHY,
  STANDARD_EXTERNAL_ITEMS
} from '../services/combatSimulationCore.js';

let passedCount = 0;
let failedCount = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  [PASS] ${message}`);
    passedCount++;
  } else {
    console.error(`  [FAIL] ${message}`);
    failedCount++;
  }
}

console.log('=== EJECUTANDO SUITE DE POLÍTICA GLOBAL, PERMISOS Y ORÁCULO APEX ===\n');

// Mock fighters
const vegetaDBAfter = {
  id: 'vegeta-db-after',
  name: 'Vegeta (DB After)',
  universe: 'Dragon Ball',
  tier: '4-B',
  forms: [
    { id: 'ssj1', name: 'Super Saiyan 1', multiplier: 50 },
    { id: 'ssj2', name: 'Super Saiyan 2', multiplier: 100 }
  ],
  arsenal: {
    superAttacks: [{ id: 'final-flash', name: 'Final Flash', staminaCost: 25 }],
    ultimateAttacks: [{ id: 'big-bang-attack', name: 'Big Bang Attack', staminaCost: 40 }]
  }
};

const kakarottoDBAfter = {
  id: 'kakarotto-db-after',
  name: 'Kakarotto (DB After)',
  universe: 'Dragon Ball',
  tier: '4-B',
  forms: [
    { id: 'ssj1', name: 'Super Saiyan 1', multiplier: 50 }
  ],
  arsenal: {
    superAttacks: [{ id: 'kamehameha', name: 'Kamehameha', staminaCost: 20 }]
  }
};

// 1. Hierarchy of Authority check
assert(RULE_AUTHORITY_HIERARCHY.length === 8 && RULE_AUTHORITY_HIERARCHY[0].includes('Selección explícita del usuario'), '1. Jerarquía de autoridad establecida con prioridad 1 al usuario');

// 2. User Selection Priority: User explicitly enables Senzu Bean
const snapshotWithSenzu = createCombatSnapshot({
  scenario: {
    mapName: 'Torneo del Más Allá',
    ruleset: 'strict-canon',
    allowFusion: false,
    allowExternalItems: false // Scenario default is false
  },
  userSelections: {
    allowExternalItems: true, // User override is true!
    allowedExternalItemIds: ['senzu-bean'],
    selectedOracleEvents: ['forbidden-finisher-awakening']
  },
  teamA: [vegetaDBAfter],
  teamB: [kakarottoDBAfter]
});

const userSelVal = validateUserSelections(snapshotWithSenzu);
assert(userSelVal.isValid && snapshotWithSenzu.permissions.allowExternalItems === true, '2. Selección explícita del usuario anula el valor por defecto del escenario y habilita la Semilla');

// 3. Senzu Bean Rule Validation
const vegFighter = snapshotWithSenzu.teams[0].members[0];
vegFighter.hp = 20;
vegFighter.stamina = 15;

const senzuUseRes = useExternalItem(vegFighter, 'senzu-bean', vegFighter, snapshotWithSenzu);
assert(senzuUseRes.success && vegFighter.hp === 100 && vegFighter.stamina === 100, '3. Semilla del Ermitaño restaura HP y Stamina al 100% del objetivo');
assert(snapshotWithSenzu.itemInventory['team-a'][0].usesRemaining === 0, '4. El uso de la Semilla se deduce del inventario y no reaparece');

// 5. Senzu cannot be reused after depletion
const senzuReuse = useExternalItem(vegFighter, 'senzu-bean', vegFighter, snapshotWithSenzu);
assert(!senzuReuse.success && senzuReuse.failureReason === 'item-depleted', '5. Reintento de usar Semilla agotada es bloqueado por item-depleted');

// 6. External Item Blocked when user DOES NOT enable it
const snapshotNoItems = createCombatSnapshot({
  scenario: { allowExternalItems: false },
  userSelections: { allowExternalItems: false },
  teamA: [vegetaDBAfter],
  teamB: [kakarottoDBAfter]
});
const itemBlocked = canUseItem(snapshotNoItems.teams[0].members[0], 'senzu-bean', snapshotNoItems);
assert(!itemBlocked.allowed && itemBlocked.failureReason === 'external-item-not-authorized', '6. Semilla del Ermitaño queda estrictamente bloqueada si el usuario no la seleccionó');

// 7. State & Ability Restrictions
const ssbCheck = canUseState(vegFighter, 'ssb', snapshotWithSenzu);
assert(!ssbCheck.allowed && ssbCheck.failureReason === 'state-not-authorized', '7. Forma no registrada (SSB) bloqueada por state-not-authorized');

vegFighter.activeStateId = 'ssj3';
const kaiokenCheck = canCombineStates(vegFighter, ['ssj3'], 'kaioken-x20', snapshotWithSenzu);
assert(!kaiokenCheck.allowed && kaiokenCheck.failureReason === 'invalid-state-combination', '8. Combinación ilegal Kaio-ken x20 + SSJ3 bloqueada por invalid-state-combination');
vegFighter.activeStateId = 'base';

// 8. Oracle Event Isolation & Single Finisher Limit
const triggerFinisher1 = triggerOracleEvent(snapshotWithSenzu, 'forbidden-finisher-awakening', { turn: 11, phase: 3, actingCombatant: vegFighter });
assert(triggerFinisher1.success && triggerFinisher1.createdAbility.canonStatus === 'apex-custom', '9. Evento Oráculo genera UNA super técnica temporal marcada como apex-custom');
assert(triggerFinisher1.createdAbility.userAuthorized === true && triggerFinisher1.createdAbility.temporaryForSimulation === true, '10. Contenido apex-custom está marcado con flags temporales estrictos');
assert(triggerFinisher1.createdAbility.changesTier === false && triggerFinisher1.createdAbility.changesPowerKey === false, '11. Super Técnica temporal no altera Tier ni powerKey');

const triggerFinisher2 = triggerOracleEvent(snapshotWithSenzu, 'forbidden-finisher-awakening', { turn: 12, phase: 3, actingCombatant: snapshotWithSenzu.teams[1].members[0] });
assert(!triggerFinisher2.success, '12. Segundo intento de crear Finisher con un solo evento es rechazado');

// 9. Simulation execution and CombatLog traceability
const snapshotForFullSim = createCombatSnapshot({
  scenario: { mapName: 'Torneo del Más Allá', ruleset: 'strict-canon', allowFusion: false },
  userSelections: {
    allowExternalItems: true,
    allowedExternalItemIds: ['senzu-bean'],
    selectedOracleEvents: ['forbidden-finisher-awakening']
  },
  teamA: [vegetaDBAfter],
  teamB: [kakarottoDBAfter]
});

const simResult = executeCombatSimulation(snapshotForFullSim);
assert(simResult.success, '13. Simulación ejecutada con éxito');
assert(simResult.combatLog.some(l => l.actionType === 'use-item' && l.actionId === 'senzu-bean'), '14. CombatLog registra con precisión el uso del objeto externo');
assert(simResult.combatLog.some(l => l.actionType === 'oracle-finisher'), '15. CombatLog registra con precisión la ejecución de la Super Técnica Oráculo');

// 10. Narrative bound to validated data
const narrative = synthesizeNarrativeFromValidatedLog(simResult.combatLog, snapshotForFullSim, simResult.verdict);
assert(narrative.includes('Semilla del Ermitaño') && narrative.includes('Super Técnica temporal'), '16. Narrativa describe los elementos seleccionados por el usuario');
assert(!narrative.includes('Super Saiyan Blue'), '17. Narrativa no contiene formas no registradas');

console.log(`\n==================================================`);
console.log(`RESULTADO FINAL: ${passedCount} Pasadas / ${failedCount} Falladas.`);
console.log(`==================================================\n`);

if (failedCount > 0) {
  process.exit(1);
}
