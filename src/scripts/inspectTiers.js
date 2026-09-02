import { INITIAL_CHARACTERS } from '../data/characters.js';
import { getTierRank } from '../lib/apexTierSystem.js';

// Find the exact 103 invalid tiers
const invalidTiers = [];
INITIAL_CHARACTERS.forEach(char => {
  const rawTier = char.tier;
  if (!rawTier) return;
  const cleanTier = String(rawTier).replace(/^Tier\s+/i, '').split('|')[0].trim().replace(/\s+a\s+.*$/i, '');
  const rank = getTierRank(cleanTier);
  if (rank === null) {
    invalidTiers.push({ id: char.id, name: char.name, tier: rawTier, cleanTier });
  }
});

console.log('Total truly invalid tiers:', invalidTiers.length);
console.log('');

// Group by cleanTier format
const formatGroups = {};
invalidTiers.forEach(t => {
  const fmt = t.cleanTier.split(' ')[0];
  if (!formatGroups[fmt]) formatGroups[fmt] = [];
  formatGroups[fmt].push(t);
});

for (const [fmt, chars] of Object.entries(formatGroups)) {
  console.log(`Format "${fmt}": ${chars.length} characters`);
  if (chars.length <= 5) {
    chars.forEach(c => console.log(`  - ${c.name}: clean="${c.cleanTier}" full="${c.tier}"`));
  }
}

// Show all unique invalid tier formats
console.log('\n=== UNIQUE INVALID TIER FORMATS ===');
const uniqueTiers = [...new Set(invalidTiers.map(t => t.cleanTier))];
uniqueTiers.sort().forEach(t => console.log(`  "${t}"`));