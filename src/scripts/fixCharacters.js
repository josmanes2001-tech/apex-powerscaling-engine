import { INITIAL_CHARACTERS } from '../data/characters.js';
import { TIER_ORDER, getTierRank } from '../lib/apexTierSystem.js';
import { writeFileSync } from 'fs';
import { join } from 'path';

// ── Helper: extract first valid tier from a messy tier string ──
function extractValidTier(tierStr) {
  if (!tierStr) return null;
  const raw = String(tierStr).replace(/^Tier\s+/i, '').trim();

  // Try exact match first
  if (TIER_ORDER.includes(raw)) return raw;

  // Try to find the first matching tier token in the string
  // Patterns: "9-C Físico", "8-A (Base)", "7-B Físico", "3-C (Galáctico)", etc.
  const tierPatterns = TIER_ORDER.map(t => {
    // Match tier at start of string, possibly followed by space and non-tier chars
    const regex = new RegExp('^' + t.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + '\\b', 'i');
    return { tier: t, regex };
  });

  for (const { tier, regex } of tierPatterns) {
    if (regex.test(raw)) return tier;
  }

  // Try splitting by common delimiters and find first valid tier
  const parts = raw.split(/\s*(?:\s*a\s+|\|\(|–|-)\s*/);
  for (const part of parts) {
    const trimmed = part.trim();
    if (TIER_ORDER.includes(trimmed)) return trimmed;
  }

  // Last resort: search for any tier token anywhere in the string
  for (const tier of TIER_ORDER) {
    if (raw.includes(tier)) return tier;
  }

  return null;
}

// ── Fix 1: Convert strength objects to strings ──
console.log('=== FIX 1: Convertir campo "strength" de objeto a string ===\n');
let strengthFixed = 0;
let strengthSkipped = 0;

INITIAL_CHARACTERS.forEach(char => {
  if (char.strength && typeof char.strength === 'object' && !Array.isArray(char.strength)) {
    const s = char.strength;
    const parts = [];
    if (s.striking) parts.push(s.striking);
    if (s.lifting) parts.push(`Levantamiento: ${s.lifting}`);
    if (parts.length === 0) {
      char.strength = '';
    } else {
      char.strength = parts.join('. ');
    }
    strengthFixed++;
  } else {
    strengthSkipped++;
  }
});

console.log(`  strength objects converted to strings: ${strengthFixed}`);
console.log(`  characters already having string strength: ${strengthSkipped}`);

// ── Fix 2: Normalize tier values ──
console.log('\n=== FIX 2: Normalizar valores de tier ===\n');
let tierFixed = 0;
let tierSkipped = 0;
const tierFixDetails = [];

INITIAL_CHARACTERS.forEach(char => {
  if (!char.tier) return;
  const validTier = extractValidTier(char.tier);
  if (validTier === null) {
    tierFixDetails.push({ id: char.id, name: char.name, tier: char.tier, reason: 'NO_VALID_TIER_FOUND' });
    return;
  }
  const currentClean = String(char.tier).replace(/^Tier\s+/i, '').trim();
  if (currentClean !== validTier) {
    tierFixDetails.push({ id: char.id, name: char.name, old: char.tier, newTier: validTier });
    char.tier = validTier;
    tierFixed++;
  } else {
    tierSkipped++;
  }
});

console.log(`  Tiers normalized: ${tierFixed}`);
console.log(`  Tiers already valid: ${tierSkipped}`);
if (tierFixDetails.length > 0 && tierFixDetails.length <= 20) {
  tierFixDetails.forEach(d => console.log(`    - ${d.name}: "${d.old}" -> "${d.newTier}"`));
} else if (tierFixDetails.length > 20) {
  console.log(`  (First 20 of ${tierFixDetails.length} fixes shown)`);
  tierFixDetails.slice(0, 20).forEach(d => console.log(`    - ${d.name}: "${d.old}" -> "${d.newTier}"`));
}

// ── Fix 3: Fix forms without scaling (base forms should have multiplier 1) ──
console.log('\n=== FIX 3: Verificar formas base sin escalado ===\n');
let baseFormFixed = 0;

INITIAL_CHARACTERS.forEach(char => {
  if (!char.forms || char.forms.length === 0) return;
  const firstForm = char.forms[0];
  const isBase = firstForm.name && (
    firstForm.name.toLowerCase().includes('base') ||
    firstForm.name.toLowerCase().includes('estado base') ||
    firstForm.name.toLowerCase().includes('forma base') ||
    firstForm.name.toLowerCase().includes('normal') ||
    firstForm.id === 'base' ||
    firstForm.id?.toLowerCase().includes('base')
  );
  if (isBase && !firstForm.apexKiMultiplier && !firstForm.multiplier) {
    firstForm.apexKiMultiplier = 1;
    baseFormFixed++;
  }
});

console.log(`  Base forms with apexKiMultiplier=1 added: ${baseFormFixed}`);

// ── Write the fixed characters.js ──
console.log('\n=== ESCRIBIENDO ARCHIVO CORREGIDO ===');

const charsPath = join(process.cwd(), 'src/data/characters.js');
let src = `export const INITIAL_CHARACTERS = ${JSON.stringify(INITIAL_CHARACTERS, null, 4)};\n`;

// Write the corrected file
writeFileSync(charsPath, src, 'utf8');
console.log(`  Archivo escrito: ${charsPath}`);
console.log(`  Total caracteres: ${src.length}`);

// ── Summary ──
console.log('\n==================================================');
console.log('RESUMEN DE CORRECCIONES:');
console.log(`  strength objects -> strings: ${strengthFixed}`);
console.log(`  tier values normalized: ${tierFixed}`);
console.log(`  base forms scaled: ${baseFormFixed}`);
console.log(`  Tiers without valid mapping: ${tierFixDetails.filter(d => d.reason === 'NO_VALID_TIER_FOUND').length}`);
console.log('==================================================');
