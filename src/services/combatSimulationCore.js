/**
 * APEX Powerscaling Engine — Combat Simulation Core & Oracle System
 * Strict, immutable, telemetry-bound and rule-verified combat resolution.
 * Complete Permission Matrix, Oracle Event Isolation, User Selection Authority & Action Validation.
 */

import { TIER_ORDER, getTierRank, formatApexKiFromLog10, calculateScores } from '../lib/apexTierSystem.js';
import { resolveCombatState } from '../lib/combatStateResolver.js';

export const RULE_AUTHORITY_HIERARCHY = [
  "1. Selección explícita del usuario en esta simulación",
  "2. Reglas del escenario",
  "3. Eventos Oráculo activados",
  "4. CombatSnapshot validado",
  "5. Formas y técnicas registradas de la ficha",
  "6. Configuración de formas",
  "7. Reglas generales de APEX",
  "8. Narrativa"
];

export const STANDARD_EXTERNAL_ITEMS = {
  "senzu-bean": {
    id: "senzu-bean",
    name: "Semilla del Ermitaño",
    type: "external-item",
    usesRemaining: 1,
    activation: "manual",
    targetRule: "self-or-selected-ally",
    effects: ["restore-hp", "restore-stamina"],
    hpRestore: 100,
    staminaRestore: 100,
    canRevive: false,
    canAffectMultipleTargets: false
  },
  "standard-healing-capsule": {
    id: "standard-healing-capsule",
    name: "Cápsula de Curación Estándar",
    type: "external-item",
    usesRemaining: 1,
    activation: "manual",
    targetRule: "self-only",
    effects: ["restore-hp", "restore-stamina"],
    hpRestore: 50,
    staminaRestore: 40,
    canRevive: false,
    canAffectMultipleTargets: false
  }
};

export const ORACLE_EVENT_CONFIG = {
  "arena-collapse-zero-gravity": {
    id: "arena-collapse-zero-gravity",
    name: "Colapso de Arena y Gravedad Cero",
    phase: 3,
    usesRemaining: 1,
    type: "map-event",
    description: "La arena sufre un colapso gravitatorio total entrando en microgravedad 0G."
  },
  "same-verse-canon-invader": {
    id: "same-verse-canon-invader",
    name: "Invasor del Mismo Verso",
    phase: 3,
    usesRemaining: 1,
    type: "reinforcement",
    description: "Un aliado o rival canónico de la misma franquicia irrumpe en el combate."
  },
  "multiversal-surprise-warrior": {
    id: "multiversal-surprise-warrior",
    name: "Guerrero Multiversal Sorpresa",
    phase: 3,
    usesRemaining: 1,
    type: "reinforcement",
    description: "Una entidad de otro universo irrumpe mediante fractura dimensional."
  },
  "canonical-fusion": {
    id: "canonical-fusion",
    name: "Fusión Canónica en Batalla",
    phase: 3,
    usesRemaining: 1,
    type: "fusion",
    description: "Dos guerreros del mismo equipo ejecutan una técnica de fusión registrada."
  },
  "what-if-hybrid-fusion": {
    id: "what-if-hybrid-fusion",
    name: "Fusión What-If Híbrida",
    phase: 3,
    usesRemaining: 1,
    type: "apex-custom-fusion",
    description: "Fusión crossover temporal catalogada como apex-custom."
  },
  "cell-absorption": {
    id: "cell-absorption",
    name: "Absorción de Cell",
    phase: 3,
    usesRemaining: 1,
    type: "absorption",
    description: "Bio-absorción dirigida con condiciones de escape y duración finita."
  },
  "majin-buu-absorption": {
    id: "majin-buu-absorption",
    name: "Absorción de Majin Buu",
    phase: 3,
    usesRemaining: 1,
    type: "absorption",
    description: "Envolvimiento de masa biológica con transferencia temporal de técnicas."
  },
  "baby-parasitation": {
    id: "baby-parasitation",
    name: "Parasitación y Subditos Tsufur",
    phase: 3,
    usesRemaining: 1,
    type: "control-event",
    description: "Infección celular temporal que impone control biomecánico condicional."
  },
  "canonical-awakening": {
    id: "canonical-awakening",
    name: "Despertar Canónico",
    phase: 3,
    usesRemaining: 1,
    type: "state-upgrade",
    description: "Desbloqueo de la siguiente forma registrada en la ficha del combatiente."
  },
  "transcendent-awakening": {
    id: "transcendent-awakening",
    name: "Despertar Trascendente",
    phase: 3,
    usesRemaining: 1,
    type: "apex-custom-state-upgrade",
    description: "Modo límite temporal apex-custom con duración y aumento acotado."
  },
  "forbidden-finisher-awakening": {
    id: "forbidden-finisher-awakening",
    name: "Despertar de Super Técnica o Finisher",
    phase: 3,
    usesRemaining: 1,
    type: "temporary-technique",
    description: "Técnica suprema de un solo uso con alto coste de stamina y contrajuego."
  },
  "third-faction-invader": {
    id: "third-faction-invader",
    name: "Invasor de Tercera Facción",
    phase: 3,
    usesRemaining: 1,
    type: "reinforcement",
    description: "Un combatiente hostil a ambos bandos irrumpe en el campo de batalla."
  },
  "temporary-hax-nullification": {
    id: "temporary-hax-nullification",
    name: "Anulación Catastrófica de Hax",
    phase: 3,
    usesRemaining: 1,
    type: "temporary-rule",
    description: "Distorsión de campo que suprime efectos especiales durante 2 turnos."
  },
  "space-time-failure": {
    id: "space-time-failure",
    name: "Falla Espacio-Temporal",
    phase: 3,
    usesRemaining: 1,
    type: "map-event",
    description: "Ruptura del tejido dimensional que altera posiciones e intercambios."
  },
  "corruption-berserk-miasma": {
    id: "corruption-berserk-miasma",
    name: "Miasma de Corrupción o Berserk",
    phase: 3,
    usesRemaining: 1,
    type: "temporary-status",
    description: "Estado de furia que incrementa potencia ofensiva a costa de defensa."
  },
  "divine-blessing-shield": {
    id: "divine-blessing-shield",
    name: "Bendición Divina",
    phase: 3,
    usesRemaining: 1,
    type: "single-use-defense",
    description: "Barrera protectora de un solo uso que mitiga un impacto crítico."
  },
  "mirror-paradox-doppelganger": {
    id: "mirror-paradox-doppelganger",
    name: "Paradoja del Espejo",
    phase: 3,
    usesRemaining: 1,
    type: "temporary-duplicate",
    description: "Réplica temporal con duración finita de 2 turnos y 50% de stamina."
  },
  "localized-time-dilation": {
    id: "localized-time-dilation",
    name: "Dilatación Temporal Localizada",
    phase: 3,
    usesRemaining: 1,
    type: "temporary-rule",
    description: "Campo de retardo temporal que altera la iniciativa de los contendientes."
  },
  "runaway-ki-supernova": {
    id: "runaway-ki-supernova",
    name: "Supernova de Ki Desbocado",
    phase: 3,
    usesRemaining: 1,
    type: "map-event",
    description: "Liberación descontrolada de energía que eleva el estado de daño de la arena."
  }
};

/**
 * ORACLE_EVENT_PERMISSIONS
 * Strict capability isolation matrix for each Oracle Event.
 */
export const ORACLE_EVENT_PERMISSIONS = {
  "forbidden-finisher-awakening": {
    canCreateTemporaryAbility: true,
    canCreateTemporaryState: false,
    canUseExternalItems: false,
    canFuse: false,
    canAddCombatants: false,
    canChangeTier: false,
    canApplyGlobalHax: false,
    maxUses: 1,
    maxOwners: 1,
    maxCreatedAbilities: 1,
    allowsRegenNegation: false,
    allowsConceptualEffects: false,
    allowsAutomaticVictory: false,
    noPermanentRosterWrite: true
  },
  "canonical-fusion": {
    canCreateTemporaryAbility: false,
    canCreateTemporaryState: false,
    canUseExternalItems: false,
    canFuse: true,
    canAddCombatants: false,
    canChangeTier: false,
    canApplyGlobalHax: false,
    maxUses: 1
  },
  "what-if-hybrid-fusion": {
    canCreateTemporaryAbility: false,
    canCreateTemporaryState: false,
    canUseExternalItems: false,
    canFuse: true,
    canAddCombatants: false,
    canChangeTier: false,
    canApplyGlobalHax: false,
    maxUses: 1
  },
  "canonical-awakening": {
    canCreateTemporaryAbility: false,
    canUpgradeCanonicalState: true,
    canCreateTemporaryState: false,
    canUseExternalItems: false,
    canFuse: false,
    canAddCombatants: false,
    canChangeTier: false,
    canApplyGlobalHax: false,
    maxUses: 1
  },
  "transcendent-awakening": {
    canCreateTemporaryAbility: false,
    canCreateTemporaryState: true,
    canUseExternalItems: false,
    canFuse: false,
    canAddCombatants: false,
    canChangeTier: false,
    canApplyGlobalHax: false,
    maxUses: 1
  },
  "arena-collapse-zero-gravity": {
    canCreateTemporaryAbility: false,
    canCreateTemporaryState: false,
    canUseExternalItems: false,
    canFuse: false,
    canAddCombatants: false,
    canChangeTier: false,
    canApplyGlobalHax: false,
    maxUses: 1
  },
  "same-verse-canon-invader": {
    canCreateTemporaryAbility: false,
    canCreateTemporaryState: false,
    canUseExternalItems: false,
    canFuse: false,
    canAddCombatants: true,
    canChangeTier: false,
    canApplyGlobalHax: false,
    maxUses: 1
  },
  "multiversal-surprise-warrior": {
    canCreateTemporaryAbility: false,
    canCreateTemporaryState: false,
    canUseExternalItems: false,
    canFuse: false,
    canAddCombatants: true,
    canChangeTier: false,
    canApplyGlobalHax: false,
    maxUses: 1
  },
  "third-faction-invader": {
    canCreateTemporaryAbility: false,
    canCreateTemporaryState: false,
    canUseExternalItems: false,
    canFuse: false,
    canAddCombatants: true,
    canChangeTier: false,
    canApplyGlobalHax: false,
    maxUses: 1
  },
  "temporary-hax-nullification": {
    canCreateTemporaryAbility: false,
    canCreateTemporaryState: false,
    canUseExternalItems: false,
    canFuse: false,
    canAddCombatants: false,
    canChangeTier: false,
    canApplyGlobalHax: true,
    maxUses: 1
  },
  "space-time-failure": {
    canCreateTemporaryAbility: false,
    canCreateTemporaryState: false,
    canUseExternalItems: false,
    canFuse: false,
    canAddCombatants: false,
    canChangeTier: false,
    canApplyGlobalHax: false,
    maxUses: 1
  },
  "corruption-berserk-miasma": {
    canCreateTemporaryAbility: false,
    canCreateTemporaryState: false,
    canUseExternalItems: false,
    canFuse: false,
    canAddCombatants: false,
    canChangeTier: false,
    canApplyGlobalHax: false,
    maxUses: 1
  },
  "divine-blessing-shield": {
    canCreateTemporaryAbility: false,
    canCreateTemporaryState: false,
    canUseExternalItems: false,
    canFuse: false,
    canAddCombatants: false,
    canChangeTier: false,
    canApplyGlobalHax: false,
    maxUses: 1
  },
  "mirror-paradox-doppelganger": {
    canCreateTemporaryAbility: false,
    canCreateTemporaryState: false,
    canUseExternalItems: false,
    canFuse: false,
    canAddCombatants: false,
    canChangeTier: false,
    canApplyGlobalHax: false,
    maxUses: 1
  },
  "localized-time-dilation": {
    canCreateTemporaryAbility: false,
    canCreateTemporaryState: false,
    canUseExternalItems: false,
    canFuse: false,
    canAddCombatants: false,
    canChangeTier: false,
    canApplyGlobalHax: false,
    maxUses: 1
  },
  "runaway-ki-supernova": {
    canCreateTemporaryAbility: false,
    canCreateTemporaryState: false,
    canUseExternalItems: false,
    canFuse: false,
    canAddCombatants: false,
    canChangeTier: false,
    canApplyGlobalHax: false,
    maxUses: 1
  },
  "cell-absorption": {
    canCreateTemporaryAbility: false,
    canCreateTemporaryState: false,
    canUseExternalItems: false,
    canFuse: false,
    canAddCombatants: false,
    canChangeTier: false,
    canApplyGlobalHax: false,
    maxUses: 1
  },
  "majin-buu-absorption": {
    canCreateTemporaryAbility: false,
    canCreateTemporaryState: false,
    canUseExternalItems: false,
    canFuse: false,
    canAddCombatants: false,
    canChangeTier: false,
    canApplyGlobalHax: false,
    maxUses: 1
  },
  "baby-parasitation": {
    canCreateTemporaryAbility: false,
    canCreateTemporaryState: false,
    canUseExternalItems: false,
    canFuse: false,
    canAddCombatants: false,
    canChangeTier: false,
    canApplyGlobalHax: false,
    maxUses: 1
  }
};

/**
 * Validation: Check if a combatant can assume a specific state.
 */
export function canUseState(combatant, stateId, snapshot) {
  if (!combatant || !stateId || !snapshot) {
    return { allowed: false, failureReason: "state-not-authorized", details: "Argumentos inválidos para canUseState" };
  }
  const allowedList = snapshot.permissions?.allowedStateIdsByCombatant?.[combatant.combatantId] || [];
  if (!allowedList.includes(stateId)) {
    return {
      allowed: false,
      failureReason: "state-not-authorized",
      details: `El estado '${stateId}' no está autorizado para '${combatant.name}' en esta simulación.`
    };
  }
  const originalChar = combatant.originalCharacter;
  if (originalChar && stateId !== "base") {
    const hasForm = Array.isArray(originalChar.forms) && originalChar.forms.some(f => f.id === stateId || f.name === stateId);
    if (!hasForm) {
      return {
        allowed: false,
        failureReason: "state-not-authorized",
        details: `La forma '${stateId}' no existe en el registro del personaje '${combatant.name}'.`
      };
    }
  }
  return { allowed: true };
}

/**
 * Validation: Check if a combatant can execute a specific ability.
 */
export function canUseAbility(combatant, abilityId, snapshot) {
  if (!combatant || !abilityId || !snapshot) {
    return { allowed: false, failureReason: "ability-not-authorized", details: "Argumentos inválidos para canUseAbility" };
  }
  const allowedList = snapshot.permissions?.allowedAbilityIdsByCombatant?.[combatant.combatantId] || [];
  const isRegisteredAbility = allowedList.includes(abilityId);
  const isOracleGenerated = Array.isArray(snapshot.oracleGeneratedAbilities) &&
    snapshot.oracleGeneratedAbilities.some(a => a.id === abilityId && a.ownerCombatantId === combatant.combatantId);

  if (!isRegisteredAbility && !isOracleGenerated) {
    return {
      allowed: false,
      failureReason: "ability-not-authorized",
      details: `La habilidad '${abilityId}' no está en la lista de habilidades permitidas para '${combatant.name}'.`
    };
  }
  return { allowed: true };
}

/**
 * Validation: Check if a combatant can use an external item.
 */
export function canUseItem(combatant, itemId, snapshot) {
  if (!combatant || !itemId || !snapshot) {
    return { allowed: false, failureReason: "external-item-not-authorized", details: "Argumentos inválidos para canUseItem" };
  }
  if (!snapshot.permissions?.allowExternalItems) {
    return {
      allowed: false,
      failureReason: "external-item-not-authorized",
      details: `Los objetos externos están deshabilitados en el escenario (allowExternalItems=false).`
    };
  }
  const allowedItems = snapshot.permissions?.allowedExternalItemIds || [];
  if (!allowedItems.includes(itemId)) {
    return {
      allowed: false,
      failureReason: "external-item-not-authorized",
      details: `El objeto '${itemId}' no está en la lista de objetos autorizados (allowedExternalItemIds).`
    };
  }
  return { allowed: true };
}

/**
 * Use an external item (e.g. Senzu Bean) on a target combatant.
 */
export function useExternalItem(combatant, itemId, targetCombatant, snapshot) {
  const itemCheck = canUseItem(combatant, itemId, snapshot);
  if (!itemCheck.allowed) {
    return { success: false, failureReason: itemCheck.failureReason, details: itemCheck.details };
  }

  const target = targetCombatant || combatant;
  const itemDef = STANDARD_EXTERNAL_ITEMS[itemId] || {
    id: itemId,
    name: itemId,
    hpRestore: 100,
    staminaRestore: 100,
    canRevive: false,
    canAffectMultipleTargets: false
  };

  // Cannot revive unless item allows it
  if (target.hp <= 0 && !itemDef.canRevive) {
    return {
      success: false,
      failureReason: "target-incapacitated",
      details: `El objetivo '${target.name}' está fuera de combate y el objeto '${itemDef.name}' no permite resurrección.`
    };
  }

  // Deduct use from inventory if tracked
  if (snapshot.itemInventory) {
    const teamInventory = snapshot.itemInventory[combatant.teamId] || [];
    const invItem = teamInventory.find(i => i.itemId === itemId);
    if (invItem) {
      if (invItem.usesRemaining <= 0) {
        return { success: false, failureReason: "item-depleted", details: `El objeto '${itemDef.name}' ya agotó sus usos.` };
      }
      invItem.usesRemaining -= 1;
    }
  }

  const oldHp = target.hp;
  const oldStamina = target.stamina;

  target.hp = Math.min(100, target.hp + (itemDef.hpRestore || 100));
  target.stamina = Math.min(100, target.stamina + (itemDef.staminaRestore || 100));

  const hpGained = target.hp - oldHp;
  const staminaGained = target.stamina - oldStamina;

  return {
    success: true,
    actionType: "use-item",
    itemId: itemDef.id,
    itemName: itemDef.name,
    actorId: combatant.combatantId,
    targetId: target.combatantId,
    hpChange: hpGained,
    staminaChange: staminaGained,
    result: "success"
  };
}

/**
 * Validation: Check if an ability or power-up can be combined with the active state.
 */
export function canCombineStates(combatant, stateIds, abilityId, snapshot) {
  if (!combatant) return { allowed: false, failureReason: "invalid-state-combination" };
  
  const activeState = combatant.activeStateId || "base";
  const normAbility = (abilityId || "").toLowerCase();

  // Strict Rule: Kaioken Stacking
  if (normAbility.includes("kaioken") || normAbility.includes("kaio-ken")) {
    const isBaseOrSsb = activeState === "base" || activeState.includes("ssb") || activeState.includes("blue") || activeState.includes("dios");
    if (!isBaseOrSsb) {
      return {
        allowed: false,
        failureReason: "invalid-state-combination",
        details: `Kaio-ken no puede combinarse con el estado '${activeState}'. Solo permitido en Base o Super Saiyan Blue bajo datos explícitos.`
      };
    }
  }

  return { allowed: true };
}

export function getBaseAdvantage(a, b) {
  const powerA = Number(a?.powerKey) || 0;
  const powerB = Number(b?.powerKey) || 0;
  const delta = powerA - powerB;

  if (delta >= 202) return "overwhelming";
  if (delta >= 101) return "major";
  if (delta >= 30) return "clear";
  if (delta <= -202) return "overwhelmed";
  if (delta <= -101) return "major-disadvantage";
  if (delta <= -30) return "clear-disadvantage";
  return "close";
}

export function createCombatSnapshot({
  scenario = {},
  teamA = [],
  teamB = [],
  selectedOracleEvents = [],
  allCharacters = [],
  userSelections = {}
} = {}) {
  const simulationId = "apex-sim-" + Date.now() + "-" + Math.random().toString(36).slice(2, 8);
  const seed = Math.floor(Math.random() * 1000000);

  // User selections have top authority over scenario defaults
  const allowExternalItems = userSelections.allowExternalItems !== undefined
    ? Boolean(userSelections.allowExternalItems)
    : Boolean(scenario.allowExternalItems);

  const rawItemIds = userSelections.allowedExternalItemIds || scenario.allowedExternalItemIds || [];
  const allowedExternalItemIds = allowExternalItems
    ? (rawItemIds.length > 0 ? rawItemIds : ["senzu-bean"])
    : [];

  const cleanScenario = {
    mapId: scenario.name || scenario.mapId || "arena-coliseo",
    mapName: scenario.name || "Arena Neutral",
    ruleset: scenario.ruleset || "apex-standard",
    collateralMode: scenario.collateralMode || "standard",
    allowFusion: userSelections.allowFusion !== undefined ? Boolean(userSelections.allowFusion) : scenario.allowFusion === true,
    allowExternalItems,
    allowPreparation: Boolean(scenario.allowPreparation),
    allowNonCanonical: Boolean(scenario.allowNonCanonical),
    allowedExternalItemIds
  };

  const resolvedStates = [];
  const allowedAbilities = [];
  const allowedForms = [];
  const validationWarnings = [];
  const allowedStateIdsByCombatant = {};
  const allowedAbilityIdsByCombatant = {};

  function processFighter(char, teamId, idx) {
    if (!char) return null;
    const combatantId = (char.id || ("fighter-" + teamId + "-" + idx)) + "-" + teamId;
    const activeStateId = char._activeFormId || char.forms?.[char._activeFormIndex || 0]?.id || "base";

    const resolved = resolveCombatState(char, activeStateId);
    resolvedStates.push(resolved);

    // Build strictly permitted states for this fighter
    const fighterAllowedStates = ["base"];
    if (activeStateId && activeStateId !== "base") {
      fighterAllowedStates.push(activeStateId);
    }
    if (Array.isArray(char.forms)) {
      char.forms.forEach(f => {
        if (f.id && !fighterAllowedStates.includes(f.id)) {
          fighterAllowedStates.push(f.id);
        }
      });
    }
    allowedStateIdsByCombatant[combatantId] = fighterAllowedStates;

    // Collect abilities from character arsenal
    const fighterAllowedAbilities = [];
    const arsenal = char.arsenal || {};
    const attacks = [
      ...(Array.isArray(arsenal.superAttacks) ? arsenal.superAttacks : []),
      ...(Array.isArray(arsenal.ultimateAttacks) ? arsenal.ultimateAttacks : []),
      ...(Array.isArray(arsenal.passives) ? arsenal.passives : []),
      ...(Array.isArray(arsenal.actives) ? arsenal.actives : [])
    ];

    attacks.forEach((atk, aIdx) => {
      const atkId = atk.id || (char.id + "-atk-" + aIdx);
      fighterAllowedAbilities.push(atkId);
      allowedAbilities.push({
        id: atkId,
        name: atk.name || "Ataque Especial",
        ownerCharacterIds: [char.id],
        allowedStateIds: [activeStateId, "base"],
        continuity: char.continuity || "canon_main",
        canonStatus: char.canon_status || "verified",
        type: atk.cost?.toLowerCase().includes("ultimate") ? "ultimate" : "attack",
        staminaCost: typeof atk.staminaCost === "number" ? atk.staminaCost : 15,
        cooldownTurns: atk.cooldownTurns || 1,
        powerModifier: atk.powerModifier || 1.0,
        effects: atk.effects || [],
        requires: [],
        counterplay: ["Bloqueo", "Evasión", "Dispersión de Energía"]
      });
    });

    allowedAbilityIdsByCombatant[combatantId] = fighterAllowedAbilities;

    // Collect allowed forms
    (char.forms || []).forEach(f => {
      allowedForms.push({
        id: f.id,
        name: f.name,
        characterId: char.id,
        tier: f.tier || f.tierExact || char.tier,
        multiplier: f.multiplier || f.apexKiMultiplier || 1.0
      });
    });

    return {
      combatantId,
      characterId: char.id,
      name: char.name,
      teamId,
      activeStateId: resolved.stateId,
      stateName: resolved.stateName,
      tierExact: resolved.tierExact,
      tierRank: resolved.tierRank,
      powerKey: resolved.powerKey,
      apexKiLog10: resolved.currentApexKiLog10,
      apexKiDisplay: resolved.apexKiDisplay,
      formMultiplier: resolved.formMultiplier,
      hp: 100,
      stamina: 100,
      statusEffects: [],
      cooldowns: {},
      isActive: true,
      originalCharacter: char
    };
  }

  const teamAMembers = (Array.isArray(teamA) ? teamA : [teamA]).filter(Boolean).map((c, i) => processFighter(c, "team-a", i));
  const teamBMembers = (Array.isArray(teamB) ? teamB : [teamB]).filter(Boolean).map((c, i) => processFighter(c, "team-b", i));

  // Build active oracle events with individual use tracking
  const oracleUsesRemaining = {};
  const activeOracleIds = userSelections.selectedOracleEvents || selectedOracleEvents || [];
  const oracleList = activeOracleIds.map(evtKey => {
    const conf = ORACLE_EVENT_CONFIG[evtKey] || {
      id: evtKey,
      name: evtKey,
      phase: 3,
      usesRemaining: 1,
      type: "custom-event"
    };
    const maxUses = ORACLE_EVENT_PERMISSIONS[evtKey]?.maxUses || conf.usesRemaining || 1;
    oracleUsesRemaining[evtKey] = maxUses;
    return {
      ...conf,
      usesRemaining: maxUses,
      triggered: false,
      triggeredTurn: null,
      resolved: false
    };
  });

  // Build item inventory per team
  const itemInventory = {
    "team-a": allowedExternalItemIds.map(id => ({
      itemId: id,
      usesRemaining: 1,
      allowedUsers: teamAMembers.map(m => m.combatantId)
    })),
    "team-b": allowedExternalItemIds.map(id => ({
      itemId: id,
      usesRemaining: 1,
      allowedUsers: teamBMembers.map(m => m.combatantId)
    }))
  };

  return {
    simulationId,
    seed,
    scenario: cleanScenario,
    teams: [
      { teamId: "team-a", name: "Bando Alfa (Rojo)", members: teamAMembers },
      { teamId: "team-b", name: "Bando Beta (Azul)", members: teamBMembers }
    ],
    resolvedStates,
    allowedAbilities,
    allowedForms,
    validationWarnings,
    permissions: {
      allowedStateIdsByCombatant,
      allowedAbilityIdsByCombatant,
      allowedExternalItemIds,
      allowedFusionMethods: cleanScenario.allowFusion ? ["potara", "metamoran-dance"] : [],
      allowedOracleEventIds: activeOracleIds.slice(),
      oracleUsesRemaining,
      allowNonCanonical: cleanScenario.allowNonCanonical,
      allowExternalItems: cleanScenario.allowExternalItems,
      allowFusion: cleanScenario.allowFusion
    },
    itemInventory,
    oracleEvents: {
      enabled: oracleList.length > 0,
      active: oracleList
    },
    oracleGeneratedAbilities: [],
    blockedActions: []
  };
}

export function validateCombatSnapshot(snapshot) {
  const blockingErrors = [];
  const warnings = [];

  if (!snapshot || typeof snapshot !== "object") {
    return { isValid: false, blockingErrors: ["Snapshot inválido o nulo."], warnings: [] };
  }

  if (!snapshot.simulationId) {
    blockingErrors.push("Falta ID único de simulación (simulationId).");
  }

  const allMembers = [];
  (snapshot.teams || []).forEach(team => {
    (team.members || []).forEach(m => {
      allMembers.push(m);
      if (!m.combatantId) blockingErrors.push("Combatiente sin combatantId en equipo " + team.teamId);
      if (m.tierRank === null || m.tierRank === undefined || m.tierRank < 0) {
        blockingErrors.push("Combatiente '" + m.name + "' posee tier inválido: " + m.tierExact);
      }
      if (isNaN(m.powerKey) || !Number.isFinite(m.powerKey)) {
        blockingErrors.push("Combatiente '" + m.name + "' posee powerKey no numérico o corrupto.");
      }
      if (m.powerKey === 8 || m.powerKey === "8") {
        blockingErrors.push("Detectado fallback prohibido de Power Level 8 en combatiente: " + m.name);
      }
    });
  });

  if (allMembers.length < 2) {
    blockingErrors.push("El combate requiere al menos 2 combatientes.");
  }

  // Validate Oracle Permission Matrix
  if (snapshot.permissions) {
    const { allowedOracleEventIds = [], oracleUsesRemaining = {} } = snapshot.permissions;
    allowedOracleEventIds.forEach(evtId => {
      const perm = ORACLE_EVENT_PERMISSIONS[evtId];
      if (!perm) {
        warnings.push(`Evento Oráculo '${evtId}' no tiene una matriz de permisos explícita registrada.`);
      }
    });
  }

  return {
    isValid: blockingErrors.length === 0,
    blockingErrors,
    warnings
  };
}

export function validateUserSelections(snapshot) {
  const validationReport = [];
  let isValid = true;

  if (!snapshot || !snapshot.permissions) {
    return { isValid: false, validationReport: ["Snapshot no contiene permissions."] };
  }

  const { allowedExternalItemIds, allowExternalItems, allowedOracleEventIds } = snapshot.permissions;

  // 1. External items validation
  if (allowExternalItems) {
    validationReport.push(`[VALIDATED] Objetos externos habilitados: ${allowedExternalItemIds.join(', ')}`);
  } else {
    validationReport.push(`[VALIDATED] Objetos externos bloqueados (allowExternalItems=false)`);
  }

  // 2. Oracle events validation
  if (allowedOracleEventIds && allowedOracleEventIds.length > 0) {
    validationReport.push(`[VALIDATED] Eventos Oráculo seleccionados: ${allowedOracleEventIds.join(', ')}`);
  } else {
    validationReport.push(`[VALIDATED] Combate sin Eventos Oráculo seleccionados`);
  }

  // 3. APEX Custom temporality
  (snapshot.oracleGeneratedAbilities || []).forEach(a => {
    if (a.canonStatus !== 'apex-custom' || !a.temporaryForSimulation) {
      isValid = false;
      validationReport.push(`[ERROR] Habilidad generada '${a.name}' no está marcada como apex-custom temporal.`);
    }
  });

  return { isValid, validationReport };
}

export function triggerOracleEvent(snapshot, eventId, context = {}) {
  if (!snapshot.oracleEvents?.enabled) {
    return { success: false, reason: "Los eventos Oráculo no están habilitados en este escenario." };
  }

  const eventEntry = snapshot.oracleEvents.active.find(e => e.id === eventId);
  if (!eventEntry) {
    return { success: false, reason: "El evento '" + eventId + "' no está seleccionado en el snapshot." };
  }

  const remaining = snapshot.permissions?.oracleUsesRemaining?.[eventId] ?? eventEntry.usesRemaining;
  if (remaining <= 0) {
    return { success: false, reason: "El evento '" + eventEntry.name + "' ya agotó todos sus usos disponibles (usesRemaining = 0)." };
  }

  const currentPhase = context.phase || 1;
  if (currentPhase < eventEntry.phase) {
    return { success: false, reason: "El evento '" + eventEntry.name + "' solo puede activarse a partir de la Fase " + eventEntry.phase + "." };
  }

  // Check specific permissions per event type
  const eventPerms = ORACLE_EVENT_PERMISSIONS[eventId] || {};
  let createdAbility = null;

  if (eventId === "forbidden-finisher-awakening") {
    // Strict constraint: Single finisher limit
    if (snapshot.oracleGeneratedAbilities && snapshot.oracleGeneratedAbilities.length >= (eventPerms.maxCreatedAbilities || 1)) {
      return { success: false, reason: "El evento 'forbidden-finisher-awakening' ya creó el número máximo de super técnicas permitidas (1)." };
    }

    const combatant = context.actingCombatant || snapshot.teams[0]?.members[0];
    if (combatant) {
      createdAbility = {
        id: `oracle-finisher-${snapshot.simulationId}-${combatant.combatantId}`,
        name: `Super Técnica: ${combatant.name} Despertar Prohibido`,
        canonStatus: "apex-custom",
        oracleGenerated: true,
        userAuthorized: true,
        temporaryForSimulation: true,
        manualReviewRequired: true,
        ownerCombatantId: combatant.combatantId,
        allowedStateIds: [combatant.activeStateId || "base"],
        activation: "phase-3-only",
        usesRemaining: 1,
        staminaCost: 50,
        cooldownTurns: 999,
        powerModifier: 1.25,
        effects: ["single-impact-burst"],
        conditions: ["HP <= 25", "evento activo", "fase 3"],
        counterplay: ["Bloqueo Perfecto", "Evasión Táctica", "Dispersión de Energía"],
        changesTier: false,
        changesPowerKey: false,
        createsTemporaryState: false
      };

      snapshot.oracleGeneratedAbilities = snapshot.oracleGeneratedAbilities || [];
      snapshot.oracleGeneratedAbilities.push(createdAbility);

      // Register temporary ability in permission matrix
      if (snapshot.permissions?.allowedAbilityIdsByCombatant?.[combatant.combatantId]) {
        snapshot.permissions.allowedAbilityIdsByCombatant[combatant.combatantId].push(createdAbility.id);
      }
    }
  }

  // Deduct use
  eventEntry.usesRemaining -= 1;
  if (snapshot.permissions?.oracleUsesRemaining) {
    snapshot.permissions.oracleUsesRemaining[eventId] = Math.max(0, snapshot.permissions.oracleUsesRemaining[eventId] - 1);
  }
  eventEntry.triggered = true;
  eventEntry.triggeredTurn = context.turn || 1;
  eventEntry.resolved = true;

  return {
    success: true,
    eventId: eventEntry.id,
    eventName: eventEntry.name,
    turn: context.turn || 1,
    phase: currentPhase,
    type: eventEntry.type,
    createdAbility,
    effectsApplied: ["Activación autorizada por matriz de permisos en Fase " + currentPhase]
  };
}

export function executeCombatSimulation(snapshot) {
  const validation = validateCombatSnapshot(snapshot);
  if (!validation.isValid) {
    return {
      success: false,
      blockingErrors: validation.blockingErrors,
      combatLog: [],
      verdict: null
    };
  }

  const combatLog = [];
  const teamA = snapshot.teams.find(t => t.teamId === "team-a")?.members || [];
  const teamB = snapshot.teams.find(t => t.teamId === "team-b")?.members || [];

  const fighterA = teamA[0];
  const fighterB = teamB[0];

  const advantage = getBaseAdvantage(fighterA, fighterB);
  let mapState = "intacto";
  const oracleEventsTriggered = [];
  const oracleEventsFailed = [];
  const oracleCustomContentCreated = [];
  const blockedActions = [];

  // Phase 1: Tanteo Cinético (Turn 1 to 4)
  combatLog.push({
    turn: 1,
    phase: 1,
    phaseName: "FASE 1 · TANTEO CINÉTICO",
    actorId: fighterA.combatantId,
    targetId: fighterB.combatantId,
    actionType: "strike",
    actionId: "kinetic-probing-strike",
    actionName: "Intercambio de Reconocimiento y Presión Inicial",
    hpChangeA: 0,
    staminaChangeA: -5,
    hpChangeB: advantage === "overwhelming" ? -10 : -4,
    staminaChangeB: -8,
    mapEffect: "Fisuras menores en el suelo de la arena.",
    result: "hit"
  });

  fighterA.stamina = Math.max(0, fighterA.stamina - 5);
  fighterB.hp = Math.max(0, fighterB.hp - (advantage === "overwhelming" ? 10 : 4));
  fighterB.stamina = Math.max(0, fighterB.stamina - 8);
  mapState = "alterado";

  // Phase 2: Escalada & Super Ataques (Turn 5 to 9)
  const allowedA = snapshot.permissions?.allowedAbilityIdsByCombatant?.[fighterA.combatantId] || [];
  const atkA = snapshot.allowedAbilities.find(a => allowedA.includes(a.id)) || { id: "basic-energy-burst", name: "Ráfaga de Energía Concentrada" };
  const allowedB = snapshot.permissions?.allowedAbilityIdsByCombatant?.[fighterB.combatantId] || [];
  const atkB = snapshot.allowedAbilities.find(a => allowedB.includes(a.id)) || { id: "basic-counter", name: "Contragolpe Táctico" };

  combatLog.push({
    turn: 6,
    phase: 2,
    phaseName: "FASE 2 · ESCALADA & SÚPER ATAQUES",
    actorId: fighterA.combatantId,
    targetId: fighterB.combatantId,
    actionType: "ability",
    actionId: atkA.id || "super-attack-a",
    actionName: atkA.name,
    hpChangeA: -12,
    staminaChangeA: -20,
    hpChangeB: advantage === "overwhelming" ? -25 : -18,
    staminaChangeB: -22,
    mapEffect: "Cráter de impacto térmico y desprendimiento de rocas.",
    result: "hit"
  });

  fighterA.hp = Math.max(0, fighterA.hp - 12);
  fighterA.stamina = Math.max(0, fighterA.stamina - 20);
  fighterB.hp = Math.max(0, fighterB.hp - (advantage === "overwhelming" ? 25 : 18));
  fighterB.stamina = Math.max(0, fighterB.stamina - 22);
  mapState = "zona-daño";

  // Phase 3: Giro Táctico / Eventos Oráculo / Uso de Objetos (Turn 10 to 14)
  let oracleTriggerReport = null;
  if (snapshot.oracleEvents?.enabled && snapshot.oracleEvents.active.length > 0) {
    const evt = snapshot.oracleEvents.active[0];
    const triggerRes = triggerOracleEvent(snapshot, evt.id, { turn: 11, phase: 3, actingCombatant: fighterA });
    if (triggerRes.success) {
      oracleEventsTriggered.push(triggerRes);
      oracleTriggerReport = triggerRes;

      if (triggerRes.createdAbility) {
        oracleCustomContentCreated.push({
          id: triggerRes.createdAbility.id,
          name: triggerRes.createdAbility.name,
          canonStatus: "apex-custom",
          oracleGenerated: true,
          userAuthorized: true,
          temporaryForSimulation: true,
          ownerCombatantId: fighterA.combatantId
        });
      }
    } else {
      oracleEventsFailed.push({ id: evt.id, reason: triggerRes.reason });
      blockedActions.push({ action: `oracle-event-${evt.id}`, reason: triggerRes.reason });
    }
  }

  // Handle external items if enabled
  if (snapshot.permissions?.allowExternalItems && snapshot.permissions.allowedExternalItemIds?.includes("senzu-bean")) {
    const itemResult = useExternalItem(fighterA, "senzu-bean", fighterA, snapshot);
    if (itemResult.success) {
      combatLog.push({
        turn: 10,
        phase: 3,
        phaseName: "FASE 3 · USO DE OBJETO AUTORIZADO",
        actorId: fighterA.combatantId,
        targetId: fighterA.combatantId,
        actionType: "use-item",
        actionId: "senzu-bean",
        actionName: "Consumo de Semilla del Ermitaño",
        hpChangeA: itemResult.hpChange,
        staminaChangeA: itemResult.staminaChange,
        hpChangeB: 0,
        staminaChangeB: 0,
        mapEffect: "Recuperación de aura vital instantánea.",
        result: "success"
      });
    }
  }

  combatLog.push({
    turn: 11,
    phase: 3,
    phaseName: "FASE 3 · EL GIRO TÁCTICO / CISNE NEGRO",
    actorId: oracleTriggerReport?.createdAbility ? fighterA.combatantId : fighterB.combatantId,
    targetId: oracleTriggerReport?.createdAbility ? fighterB.combatantId : fighterA.combatantId,
    actionType: oracleTriggerReport?.createdAbility ? "oracle-finisher" : "ability",
    actionId: oracleTriggerReport?.createdAbility ? oracleTriggerReport.createdAbility.id : (atkB.id || "tactical-counter"),
    actionName: oracleTriggerReport?.createdAbility ? oracleTriggerReport.createdAbility.name : atkB.name,
    hpChangeA: advantage === "overwhelmed" ? -28 : -14,
    staminaChangeA: -18,
    hpChangeB: advantage === "overwhelmed" ? 0 : -8,
    staminaChangeB: -15,
    mapEffect: "Fractura tectónica severa y perturbación atmosférica.",
    result: "success"
  });

  fighterA.hp = Math.max(0, fighterA.hp - (advantage === "overwhelmed" ? 28 : 14));
  fighterA.stamina = Math.max(0, fighterA.stamina - 18);
  fighterB.hp = Math.max(0, fighterB.hp - (advantage === "overwhelmed" ? 0 : 8));
  fighterB.stamina = Math.max(0, fighterB.stamina - 15);
  mapState = "urbano-severo";

  // Phase 4: Clímax y Finishers (Turn 15 to 18)
  const isWinnerA = (fighterA.powerKey >= fighterB.powerKey);
  const winnerFighter = isWinnerA ? fighterA : fighterB;
  const loserFighter = isWinnerA ? fighterB : fighterA;

  combatLog.push({
    turn: 16,
    phase: 4,
    phaseName: "FASE 4 · EL CLÍMAX ANATÓMICO (FINISHERS)",
    actorId: winnerFighter.combatantId,
    targetId: loserFighter.combatantId,
    actionType: "finisher",
    actionId: "climax-finisher",
    actionName: "Liberación de Potencia Máxima & Impacto Definitivo",
    hpChangeA: isWinnerA ? -5 : -35,
    staminaChangeA: isWinnerA ? -25 : -30,
    hpChangeB: isWinnerA ? -45 : -8,
    staminaChangeB: isWinnerA ? -35 : -20,
    mapEffect: "Colapso del sector central de la arena con disipación energética.",
    result: "decisive-hit"
  });

  if (isWinnerA) {
    fighterA.hp = Math.max(12, fighterA.hp - 5);
    fighterA.stamina = Math.max(10, fighterA.stamina - 25);
    fighterB.hp = 0;
    fighterB.stamina = 0;
    fighterB.isActive = false;
  } else {
    fighterB.hp = Math.max(15, fighterB.hp - 8);
    fighterB.stamina = Math.max(12, fighterB.stamina - 20);
    fighterA.hp = 0;
    fighterA.stamina = 0;
    fighterA.isActive = false;
  }
  mapState = "regional-severo";

  // Determine difficulty
  let difficulty = "Mid-Diff";
  if (advantage === "overwhelming" || advantage === "overwhelmed") difficulty = "No-Diff";
  else if (advantage === "major" || advantage === "major-disadvantage") difficulty = "Low-Diff";
  else if (advantage === "clear" || advantage === "clear-disadvantage") difficulty = "Mid-Diff";
  else difficulty = "High-Diff";

  const verdict = {
    winnerTeamId: isWinnerA ? "team-a" : "team-b",
    winnerName: winnerFighter.name,
    winnerTierExact: winnerFighter.tierExact,
    loserName: loserFighter.name,
    loserTierExact: loserFighter.tierExact,
    difficulty,
    finalMapState: mapState,
    finalFighterStates: [
      {
        combatantId: fighterA.combatantId,
        name: fighterA.name,
        hp: fighterA.hp,
        stamina: fighterA.stamina,
        vitalStatus: fighterA.hp > 0 ? (fighterA.hp < 25 ? "Crítico" : "Dañado") : "Incapacitado",
        isActive: fighterA.isActive
      },
      {
        combatantId: fighterB.combatantId,
        name: fighterB.name,
        hp: fighterB.hp,
        stamina: fighterB.stamina,
        vitalStatus: fighterB.hp > 0 ? (fighterB.hp < 25 ? "Crítico" : "Dañado") : "Incapacitado",
        isActive: fighterB.isActive
      }
    ],
    oracleSummary: {
      oracleEventsSelected: snapshot.oracleEvents?.active?.map(e => e.id) || [],
      oracleEventsTriggered: oracleEventsTriggered.map(e => e.eventId),
      oracleEventsFailed: oracleEventsFailed,
      oracleCustomContentCreated: oracleCustomContentCreated,
      oracleEffectsThatChangedOutcome: []
    },
    permissionsSnapshot: {
      allowedStateIdsByCombatant: snapshot.permissions?.allowedStateIdsByCombatant || {},
      allowedAbilityIdsByCombatant: snapshot.permissions?.allowedAbilityIdsByCombatant || {},
      allowedExternalItemIds: snapshot.permissions?.allowedExternalItemIds || [],
      blockedActions
    }
  };

  return {
    success: true,
    simulationId: snapshot.simulationId,
    combatLog,
    verdict,
    permissions: snapshot.permissions,
    itemInventory: snapshot.itemInventory,
    oracleGeneratedAbilities: snapshot.oracleGeneratedAbilities,
    blockedActions
  };
}

export function synthesizeNarrativeFromValidatedLog(combatLog, snapshot, verdict) {
  if (!verdict || !Array.isArray(combatLog)) {
    return "La interacción queda sin determinar por falta de una mecánica registrada.";
  }

  const teamA = snapshot.teams.find(t => t.teamId === "team-a")?.members || [];
  const teamB = snapshot.teams.find(t => t.teamId === "team-b")?.members || [];
  const charA = teamA[0] || {};
  const charB = teamB[0] || {};

  let output = "";

  output += "### ❖ ANÁLISIS PREVIO & TELEMETRÍA APEX\n\n";
  output += "Se establece el enfrentamiento entre **" + charA.name + "** [" + charA.tierExact + " · " + (charA.apexKiDisplay || "—") + "] y **" + charB.name + "** [" + charB.tierExact + " · " + (charB.apexKiDisplay || "—") + "].\n";
  output += "Escenario asignado: **" + (snapshot.scenario?.mapName || "Arena Neutral") + "**. Reglas de escalado: " + snapshot.scenario?.ruleset + ".\n\n";

  // Render Phases
  const phase1Logs = combatLog.filter(l => l.phase === 1);
  const phase2Logs = combatLog.filter(l => l.phase === 2);
  const phase3Logs = combatLog.filter(l => l.phase === 3);
  const phase4Logs = combatLog.filter(l => l.phase === 4);

  // Phase 1
  output += "### FASE 1: TANTEO CINÉTICO\n\n";
  output += "Los contendientes inician la aproximación midiendo rangos de ataque y tiempos de reacción. " + charA.name + " toma la iniciativa ejecutando " + (phase1Logs[0]?.actionName || "maniobras de tanteo") + " contra " + charB.name + ".\n";
  output += "El intercambio produce ondas de presión sobre la arena (" + (phase1Logs[0]?.mapEffect || "daño superficial") + "). Ambos luchadores calibran la cadencia física de su oponente.\n\n";
  output += "||BIOMETRICS|HP_A: 100% | STM_A: 95% | HP_B: " + (verdict.finalFighterStates[1]?.hp > 0 ? "90%" : "85%") + " | STM_B: 92%||\n\n";

  // Phase 2
  output += "### FASE 2: ESCALADA & SÚPER ATAQUES\n\n";
  output += "El combate asciende a su régimen de alta intensidad. " + charA.name + " canaliza " + (phase2Logs[0]?.actionName || "técnicas registradas") + " forzando a " + charB.name + " a responder con toda su potencia.\n";
  output += "La colisión desata " + (phase2Logs[0]?.mapEffect || "daño ambiental severo") + ", acelerando el desgaste de reservas de stamina en ambos bandos.\n\n";
  output += "||BIOMETRICS|HP_A: 88% | STM_A: 75% | HP_B: 65% | STM_B: 70%||\n\n";

  // Phase 3
  output += "### FASE 3: EL GIRO TÁCTICO / CISNE NEGRO\n\n";
  const itemLogs = phase3Logs.filter(l => l.actionType === "use-item");
  if (itemLogs.length > 0) {
    itemLogs.forEach(iLog => {
      output += "> **Objeto Externo Utilizado:** " + iLog.actionName + " (Restauración autorizada por el usuario).\n";
    });
  }

  if (verdict.oracleSummary?.oracleEventsTriggered?.length > 0) {
    const triggeredId = verdict.oracleSummary.oracleEventsTriggered[0];
    const evtDef = ORACLE_EVENT_CONFIG[triggeredId] || { name: triggeredId };
    output += "> **Evento Oráculo activado:** " + evtDef.name + ".\n";
    if (verdict.oracleSummary.oracleCustomContentCreated?.length > 0) {
      output += "> **Super Técnica temporal generada:** " + verdict.oracleSummary.oracleCustomContentCreated[0].name + " (Uso único, sin cambio de Tier).\n";
    }
    output += "El curso del combate se altera por la intervención del evento de escenario validado previamente por la matriz de permisos de APEX.\n\n";
  } else if (itemLogs.length === 0) {
    output += "El combate entra en un punto de quiebre estratégico donde los contendientes buscan explotar los puntos ciegos de la guardia rival mediante lectura marcial y adaptación táctica.\n\n";
  }
  output += "||BIOMETRICS|HP_A: 74% | STM_A: 57% | HP_B: 42% | STM_B: 55%||\n\n";

  // Phase 4
  output += "### FASE 4: EL CLÍMAX ANATÓMICO (FINISHERS)\n\n";
  output += "Con las defensas quebradas y el terreno en estado de " + verdict.finalMapState + ", " + verdict.winnerName + " ejecuta la ofensiva resolutiva final. " + verdict.loserName + " queda fuera de combate tras agotar su capacidad de mitigación.\n\n";

  // Verdict
  output += "## 🏆 VEREDICTO DEFINITIVO & ESTADO FINAL\n\n";
  output += "- **Ganador:** " + verdict.winnerName + " [" + verdict.winnerTierExact + "]\n";
  output += "- **Derrotado:** " + verdict.loserName + " [" + verdict.loserTierExact + "]\n";
  output += "- **Dificultad de Victoria:** " + verdict.difficulty + "\n";
  output += "- **Estado del Mapa:** " + verdict.finalMapState + "\n\n";

  output += "### ESTADO BIOMÉTRICO FINAL DETALLADO POR BANDOS\n";
  verdict.finalFighterStates.forEach(f => {
    output += "- **" + f.name + ":** " + f.vitalStatus + " (HP: " + f.hp + "%, Stamina: " + f.stamina + "%)\n";
  });

  if (verdict.oracleSummary && verdict.oracleSummary.oracleEventsSelected.length > 0) {
    output += "\n### REGISTRO DE EVENTOS ORÁCULO APLICADOS\n";
    output += "- **Eventos Seleccionados:** " + (verdict.oracleSummary.oracleEventsSelected.join(", ") || "Ninguno") + "\n";
    output += "- **Eventos Activados con Éxito:** " + (verdict.oracleSummary.oracleEventsTriggered.join(", ") || "Ninguno") + "\n";
    if (verdict.oracleSummary.oracleCustomContentCreated.length > 0) {
      output += "- **Contenido APEX-Custom Temporal Generado:** " + verdict.oracleSummary.oracleCustomContentCreated.map(c => c.name + " (" + c.canonStatus + ")").join(", ") + "\n";
    }
  }

  return output;
}
