import { resolveCombatState } from '../lib/combatStateResolver.js';

console.log("=== INICIANDO TEST SUITE DE RESOLVER ===");

// 1. Dragon Ball Character (Goku)
const goku = {
  id: "goku-z",
  name: "Son Goku",
  universe: "Dragon Ball Z",
  tierExact: "4-B",
  sourceKi: 3000000,
  forms: [
    { id: "base", name: "Estado Base" },
    { id: "ssj", name: "Super Saiyan" },
    { id: "ssj2", name: "Super Saiyan 2" },
    { id: "ssj3", name: "Super Saiyan 3" }
  ]
};

const gokuBase = resolveCombatState(goku, "base");
const gokuSSJ = resolveCombatState(goku, "ssj");
const gokuSSJ2 = resolveCombatState(goku, "ssj2");
const gokuSSJ3 = resolveCombatState(goku, "ssj3");

console.log("Goku Base:", gokuBase.apexKiDisplay, "| Scouter:", gokuBase.sourceKiDisplay, "| Mult:", gokuBase.multiplierDisplay);
console.log("Goku SSJ:", gokuSSJ.apexKiDisplay, "| Scouter:", gokuSSJ.sourceKiDisplay, "| Mult:", gokuSSJ.multiplierDisplay, "| Method:", gokuSSJ.scalingMethod);
console.log("Goku SSJ2:", gokuSSJ2.apexKiDisplay, "| Scouter:", gokuSSJ2.sourceKiDisplay, "| Mult:", gokuSSJ2.multiplierDisplay, "| Method:", gokuSSJ2.scalingMethod);
console.log("Goku SSJ3:", gokuSSJ3.apexKiDisplay, "| Scouter:", gokuSSJ3.sourceKiDisplay, "| Mult:", gokuSSJ3.multiplierDisplay, "| Method:", gokuSSJ3.scalingMethod);

// 2. Freezer Forms
const freezer = {
  id: "frieza-namek",
  name: "Freezer",
  universe: "Dragon Ball Z",
  tierExact: "5-A",
  sourceKi: 530000,
  forms: [
    { id: "freezer-1", name: "Primera Forma", sourceKi: 530000 },
    { id: "freezer-2", name: "Segunda Forma", sourceKi: 1000000 },
    { id: "freezer-final", name: "Forma Final", sourceKi: 60000000 },
    { id: "freezer-100", name: "Freezer 100% de Poder", sourceKi: 120000000 }
  ]
};

const f1 = resolveCombatState(freezer, "freezer-1");
const f2 = resolveCombatState(freezer, "freezer-2");
const fFinal = resolveCombatState(freezer, "freezer-final");
const f100 = resolveCombatState(freezer, "freezer-100");

console.log("Freezer F1:", f1.apexKiDisplay, "| Scouter:", f1.sourceKiDisplay);
console.log("Freezer F2:", f2.apexKiDisplay, "| Scouter:", f2.sourceKiDisplay, "| Method:", f2.scalingMethod);
console.log("Freezer Final:", fFinal.apexKiDisplay, "| Scouter:", fFinal.sourceKiDisplay, "| Method:", fFinal.scalingMethod);
console.log("Freezer 100%:", f100.apexKiDisplay, "| Scouter:", f100.sourceKiDisplay, "| Method:", f100.scalingMethod);

// 3. Non-Dragon Ball (Naruto)
const naruto = {
  id: "naruto-shippuden",
  name: "Naruto Uzumaki",
  universe: "Naruto",
  tierExact: "7-A",
  forms: [
    { id: "base", name: "Estado Base" },
    { id: "sage", name: "Modo Sabio" },
    { id: "kcm2", name: "Modo Kurama Completo" }
  ]
};

const nBase = resolveCombatState(naruto, "base");
const nSage = resolveCombatState(naruto, "sage");
const nKcm2 = resolveCombatState(naruto, "kcm2");

console.log("Naruto Base:", nBase.apexKiDisplay, "| Scouter:", nBase.sourceKiDisplay);
console.log("Naruto Sage:", nSage.apexKiDisplay, "| Scouter:", nSage.sourceKiDisplay, "| Mult:", nSage.multiplierDisplay);
console.log("Naruto KCM2:", nKcm2.apexKiDisplay, "| Scouter:", nKcm2.sourceKiDisplay, "| Mult:", nKcm2.multiplierDisplay);

// 4. Form with Own Tier
const garou = {
  id: "garou",
  name: "Garou",
  universe: "One Punch Man",
  tierExact: "8-A",
  forms: [
    { id: "base", name: "Humano" },
    { id: "cosmic", name: "Garou Cósmico", tierExact: "4-B" }
  ]
};

const gBase = resolveCombatState(garou, "base");
const gCosmic = resolveCombatState(garou, "cosmic");

console.log("Garou Base Tier:", gBase.tierExact, "| APEX-Ki:", gBase.apexKiDisplay);
console.log("Garou Cosmic Tier:", gCosmic.tierExact, "| APEX-Ki:", gCosmic.apexKiDisplay, "| Method:", gCosmic.scalingMethod);

// 5. Unresolved Form
const oc = {
  id: "custom-char",
  name: "Luchador Desconocido",
  universe: "Custom",
  tierExact: "7-B",
  forms: [
    { id: "unknown-form", name: "Forma Misteriosa Sin Datos" }
  ]
};
const ocRes = resolveCombatState(oc, "unknown-form");
console.log("Unresolved Form Warning:", ocRes.warnings[0], "| Method:", ocRes.scalingMethod);

console.log("=== TESTS COMPLETADOS CON ÉXITO ===");
