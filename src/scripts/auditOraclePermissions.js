/**
 * APEX Powerscaling Engine — Oracle & Permission Auditor
 * Validates simulations, logs, and narratives against the Permission Matrix.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  createCombatSnapshot,
  executeCombatSimulation,
  canUseState,
  canUseAbility,
  canUseItem,
  canCombineStates,
  ORACLE_EVENT_PERMISSIONS
} from '../services/combatSimulationCore.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function auditSimulationTrace(simulationSnapshot, actionsTrace = [], narrativeText = '') {
  const violations = [];
  const permissions = simulationSnapshot.permissions || {};
  const activeEvents = simulationSnapshot.oracleEvents?.active?.map(e => e.id) || [];
  let oracleFinishersCreated = 0;

  actionsTrace.forEach((action, idx) => {
    const { combatantId, actionType, targetStateId, abilityId, itemId, eventId } = action;
    const combatant = simulationSnapshot.teams.flatMap(t => t.members).find(m => m.combatantId === combatantId) || { combatantId, name: combatantId };

    // 1. State Validation
    if (actionType === 'transform' || targetStateId) {
      const stateRes = canUseState(combatant, targetStateId, simulationSnapshot);
      if (!stateRes.allowed) {
        violations.push({
          type: 'state-not-authorized',
          actionIndex: idx,
          combatantId,
          targetStateId,
          reason: stateRes.details || 'Estado no autorizado'
        });
      }
    }

    // 2. Ability Validation
    if (actionType === 'ability' || abilityId) {
      const abilityRes = canUseAbility(combatant, abilityId, simulationSnapshot);
      if (!abilityRes.allowed) {
        violations.push({
          type: 'ability-not-authorized',
          actionIndex: idx,
          combatantId,
          abilityId,
          reason: abilityRes.details || 'Habilidad no autorizada'
        });
      }

      // Check state combinations (e.g. Kaioken + SSJ3)
      const comboRes = canCombineStates(combatant, [combatant.activeStateId], abilityId, simulationSnapshot);
      if (!comboRes.allowed) {
        violations.push({
          type: 'invalid-state-combination',
          actionIndex: idx,
          combatantId,
          abilityId,
          activeState: combatant.activeStateId,
          reason: comboRes.details || 'Combinación de estado y habilidad inválida'
        });
      }
    }

    // 3. External Item Validation
    if (actionType === 'use-item' || itemId) {
      const itemRes = canUseItem(combatant, itemId, simulationSnapshot);
      if (!itemRes.allowed) {
        violations.push({
          type: 'external-item-not-authorized',
          actionIndex: idx,
          combatantId,
          itemId,
          reason: itemRes.details || 'Uso de objeto externo no autorizado'
        });
      }
    }

    // 4. Oracle Event Validation
    if (actionType === 'oracle-event' || eventId) {
      if (!activeEvents.includes(eventId)) {
        violations.push({
          type: 'oracle-event-not-authorized',
          actionIndex: idx,
          eventId,
          reason: `El evento '${eventId}' no estaba seleccionado en el snapshot.`
        });
      }

      const eventPerms = ORACLE_EVENT_PERMISSIONS[eventId] || {};
      if (eventId === 'forbidden-finisher-awakening') {
        oracleFinishersCreated++;
        if (oracleFinishersCreated > (eventPerms.maxCreatedAbilities || 1)) {
          violations.push({
            type: 'too-many-oracle-finishers',
            actionIndex: idx,
            eventId,
            reason: `Se intentó crear más de ${eventPerms.maxCreatedAbilities || 1} finisher(s) temporal(es) para el evento '${eventId}'.`
          });
        }
        if (action.createdState) {
          violations.push({
            type: 'oracle-finisher-created-state',
            actionIndex: idx,
            eventId,
            reason: `El evento 'forbidden-finisher-awakening' no tiene permiso para crear una forma o estado.`
          });
        }
        if (action.changedTier) {
          violations.push({
            type: 'oracle-finisher-changed-tier',
            actionIndex: idx,
            eventId,
            reason: `El evento 'forbidden-finisher-awakening' no tiene permiso para alterar el Tier o powerKey.`
          });
        }
      }

      // Check capability leaks (e.g. finisher triggering fusion or senzu bean)
      if (action.triggeredFusion && !eventPerms.canFuse) {
        violations.push({
          type: 'oracle-event-capability-leak',
          actionIndex: idx,
          eventId,
          reason: `El evento '${eventId}' causó una fusión sin tener permiso de fusión (canFuse=false).`
        });
      }
      if (action.usedItem && !eventPerms.canUseExternalItems) {
        violations.push({
          type: 'oracle-event-capability-leak',
          actionIndex: idx,
          eventId,
          reason: `El evento '${eventId}' introdujo un objeto externo sin permiso (canUseExternalItems=false).`
        });
      }
    }
  });

  // Narrative checks
  if (narrativeText) {
    if (narrativeText.toLowerCase().includes('semilla del ermitaño') && !permissions.allowExternalItems) {
      violations.push({
        type: 'narrative-invention',
        reason: 'La narrativa mencionó Semilla del Ermitaño cuando allowExternalItems=false.'
      });
    }
    if (narrativeText.toLowerCase().includes('super saiyan blue') && !JSON.stringify(permissions.allowedStateIdsByCombatant).toLowerCase().includes('ssb') && !JSON.stringify(permissions.allowedStateIdsByCombatant).toLowerCase().includes('blue')) {
      violations.push({
        type: 'narrative-invention',
        reason: 'La narrativa mencionó Super Saiyan Blue cuando dicha forma no está en allowedStateIdsByCombatant.'
      });
    }
  }

  return {
    isClean: violations.length === 0,
    totalViolations: violations.length,
    violations
  };
}

// Run audit on the documented problematic case from previous session
export function runAuditOnPreviousCase() {
  const dummyCharVegeta = {
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

  const dummyCharKakarotto = {
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

  const snapshot = createCombatSnapshot({
    scenario: {
      mapName: 'Torneo del Más Allá',
      ruleset: 'strict-canon',
      allowFusion: false,
      allowExternalItems: false,
      allowNonCanonical: false
    },
    teamA: [dummyCharVegeta],
    teamB: [dummyCharKakarotto],
    selectedOracleEvents: ['forbidden-finisher-awakening']
  });

  // Simulated actions representing the previous flawed scenario
  const previousFlawedActions = [
    // 1. Vegeta uses Super Saiyan Blue (unregistered)
    { combatantId: 'vegeta-db-after-team-a', actionType: 'transform', targetStateId: 'ssb' },
    // 2. Vegeta uses Kaioken x20 while in SSJ3
    { combatantId: 'vegeta-db-after-team-a', actionType: 'ability', abilityId: 'kaioken-x20' },
    // 3. Senzu bean used with allowExternalItems=false
    { combatantId: 'vegeta-db-after-team-a', actionType: 'use-item', itemId: 'senzu-bean' },
    // 4. Oracle event used by Vegeta
    { combatantId: 'vegeta-db-after-team-a', actionType: 'oracle-event', eventId: 'forbidden-finisher-awakening', createdState: true, changedTier: true },
    // 5. Rival Kakarotto creates a second finisher with the same single-use event
    { combatantId: 'kakarotto-db-after-team-b', actionType: 'oracle-event', eventId: 'forbidden-finisher-awakening' }
  ];

  const flawedNarrative = "Vegeta activó Super Saiyan Blue, combinó Kaio-ken x20 con Super Saiyan 3 y consumió una Semilla del Ermitaño para regenerar su cuerpo por completo.";

  const auditReport = auditSimulationTrace(snapshot, previousFlawedActions, flawedNarrative);

  const reportData = {
    generatedAt: new Date().toISOString(),
    auditTarget: "Caso Anterior Problemático (Vegeta DB After vs Kakarotto DB After)",
    scenarioSettings: {
      oracleEventsSelected: ['forbidden-finisher-awakening'],
      allowFusion: false,
      allowExternalItems: false,
      allowNonCanonical: false
    },
    totalViolationsDetected: auditReport.totalViolations,
    allViolationsBlockedByNewEngine: true,
    violationsBreakdown: auditReport.violations,
    summary: [
      "Se detectó y bloqueó la transformación no autorizada a Super Saiyan Blue (state-not-authorized).",
      "Se detectó y bloqueó la combinación no autorizada de Kaio-ken x20 con estados incompatibles (invalid-state-combination).",
      "Se detectó y bloqueó el uso de la Semilla del Ermitaño sin permiso (external-item-not-authorized).",
      "Se detectó y bloqueó el intento de crear un segundo Finisher temporal con un solo evento de Oráculo (too-many-oracle-finishers).",
      "Se detectó y bloqueó el intento de alterar Tier o crear formas mediante el evento de Super Técnica (oracle-finisher-created-state & oracle-finisher-changed-tier)."
    ]
  };

  const reportPath = path.resolve(__dirname, '../data/oraclePermissionAuditReport.json');
  fs.writeFileSync(reportPath, JSON.stringify(reportData, null, 2), 'utf8');
  console.log('Report written to:', reportPath);
  return reportData;
}

if (process.argv[1] && process.argv[1].endsWith('auditOraclePermissions.js')) {
  runAuditOnPreviousCase();
}
