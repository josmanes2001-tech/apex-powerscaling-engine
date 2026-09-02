import { resolveCombatState } from '../lib/combatStateResolver.js';
import { INITIAL_CHARACTERS } from '../data/characters.js';

const freezer = INITIAL_CHARACTERS.find(x => x.id === 'freezer-saga-namek-saga-namek-167');
console.log("=== FORMAS DE FREEZER SAGA NAMEK ===");
if (freezer && freezer.forms) {
  for (const f of freezer.forms) {
    const s = resolveCombatState(freezer, f.id);
    console.log(`[PASS] ${f.name} (${f.id}) -> APEX-Ki: ${s.apexKiDisplay} | Multiplier: ${s.multiplierDisplay} | Tier: ${s.tierExact}`);
  }
}
