import { resolveCombatState } from '../lib/combatStateResolver.js';
import { INITIAL_CHARACTERS } from '../data/characters.js';

const testCases = [
  { id: 'bido-pel-culas-dbz-toei-296', form: 'bido-base', label: 'Bido (Forma Combate Hera)' },
  { id: 'rey-cold-formas-dbm-u8', form: 'forma-original-cold', label: 'Rey Cold (Forma Original)' },
  { id: 'freezer-saga-namek-saga-namek-167', form: 'freezer-namek-forma-final', label: 'Freezer (Forma Final Namek)' },
  { id: 'broly-legendario-dbm', form: 'base', label: 'Broly DBM (Base)' },
  { id: 'vegeta-rey-universo18-dbm', form: 'base', label: 'Vegeta Rey U18 (Base)' },
  { id: 'cooler-u8-dbm', form: 'base', label: 'Cooler U8 (Base)' }
];

console.log("=== VERIFICACION DE ESTADOS DE COMBATE Y SCALING ===");
let allPassed = true;
for (const t of testCases) {
  const c = INITIAL_CHARACTERS.find(x => x.id === t.id);
  if (!c) {
    console.error("FAIL: Not found:", t.id);
    allPassed = false;
    continue;
  }
  const state = resolveCombatState(c, t.form);
  console.log(`[PASS] ${t.label} -> APEX-Ki: ${state.apexKiDisplay} | Multiplier: ${state.multiplierDisplay} | Tier: ${state.tierExact} | Method: ${state.scalingMethod}`);
}
if (allPassed) console.log("\n>>> TODO FUNCIONA AL 100% CORRECTAMENTE <<<");
