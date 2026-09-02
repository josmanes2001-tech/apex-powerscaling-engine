import { INITIAL_CHARACTERS } from '../data/characters.js';

// Check the strength field structure
const char = INITIAL_CHARACTERS.find(c => c.id === 'son-goku-ni-o-dragon-ball-cl-sico-987');
if (char) {
  console.log('Character:', char.name);
  console.log('strength type:', typeof char.strength);
  console.log('strength:', JSON.stringify(char.strength, null, 2));
  console.log('');
  console.log('tier:', char.tier);
  console.log('');
  // Check all strength fields
  const strengthObjs = INITIAL_CHARACTERS.filter(c => c.strength && typeof c.strength === 'object');
  console.log('Total characters with strength as object:', strengthObjs.length);
  console.log('Sample strength keys:', Object.keys(strengthObjs[0].strength));
}

// Check tier values for invalid ones
const invalidTiers = INITIAL_CHARACTERS.filter(c => {
  const t = c.tier;
  if (!t) return false;
  const cleanTier = String(t).replace(/^Tier\s+/i, '').split('|')[0].trim().replace(/\s+a\s+.*$/i, '');
  // Check if tier contains non-standard format
  if (!/^Tier\s+\d/.test(cleanTier) && !/^High\s+/i.test(cleanTier) && !/^Low\s+/i.test(cleanTier)) {
    return true;
  }
  return false;
});
console.log('\nNon-standard tier format count:', invalidTiers.length);
invalidTiers.slice(0, 5).forEach(t => console.log(`  - ${t.name}: "${t.tier}"`));