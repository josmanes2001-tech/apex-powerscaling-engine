import { resolveCombatState } from '../lib/combatStateResolver.js';

const dummyChar = {
  id: "goku-z",
  name: "Son Goku (Saga Cell)",
  universe: "Dragon Ball Z",
  tierExact: "4-B",
  forms: [
    { id: "base", name: "Estado Base" },
    { id: "ssj", name: "Super Saiyan" },
    { id: "ssj2", name: "Super Saiyan 2" }
  ]
};

const baseRes = resolveCombatState(dummyChar, "base");
const ssjRes = resolveCombatState(dummyChar, "ssj");
const ssj2Res = resolveCombatState(dummyChar, "ssj2");

console.log("Base:", baseRes.apexKiDisplay, "Tier:", baseRes.tierExact);
console.log("SSJ:", ssjRes.apexKiDisplay, "Tier:", ssjRes.tierExact, "Mult:", ssjRes.formMultiplier);
console.log("SSJ2:", ssj2Res.apexKiDisplay, "Tier:", ssj2Res.tierExact, "Mult:", ssj2Res.formMultiplier);
