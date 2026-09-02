/**
 * APEX Engine - Data Fix Script
 * Fixes:
 * 1. strength field: convert objects {striking, lifting} to strings
 * 2. Tier values: normalize to just the primary tier value
 */
import { readFileSync, writeFileSync } from 'fs';
import { INITIAL_CHARACTERS } from '../data/characters.js';

const charsPath = 'src/data/characters.js';

// Work with a deep copy to avoid mutating the import
const chars = JSON.parse(JSON.stringify(INITIAL_CHARACTERS));

let strengthFixed = 0;
let tierFixed = 0;
let tierAlreadyClean = 0;
const tierFixLog = [];

// ── Fix 1: Convert strength objects to strings ──
chars.forEach(char => {
  if (char.strength && typeof char.strength === 'object' && !Array.isArray(char.strength)) {
    const s = char.strength;
    const parts = [];
    if (s.striking) parts.push(s.striking);
    if (s.lifting) parts.push('Levantamiento: ' + s.lifting);
    char.strength = parts.length > 0 ? parts.join('. ') : '';
    strengthFixed++;
    
    // Also check forms for strength objects
    if (char.forms) {
      char.forms.forEach(form => {
        if (form.strength && typeof form.strength === 'object' && !Array.isArray(form.strength)) {
          const fs = form.strength;
          const fparts = [];
          if (fs.striking) fparts.push(fs.striking);
          if (fs.lifting) fparts.push('Levantamiento: ' + fs.lifting);
          form.strength = fparts.length > 0 ? fparts.join('. ') : '';
          strengthFixed++;
        }
      });
    }
  }
});

// ── Fix 2: Normalize tier values ──
chars.forEach(char => {
  if (!char.tier) return;
  const rawTier = String(char.tier);
  
  // Pattern 1: "Tier X-Y | description" → extract "X-Y"
  const match1 = rawTier.match(/^Tier\s+([0-9]+-[A-Z](?:\s+High|\s+Low)?)\s*(?:\([^)]*\))?\s*(?:\||$)/i);
  if (match1 && match1[1]) {
    char.tier = match1[1];
    tierFixed++;
    tierFixLog.push({ name: char.name, old: rawTier, new: match1[1] });
    return;
  }
  
  // Pattern 2: tier without "Tier " prefix: "3-C (Galáctico)" → "3-C"
  const match2 = rawTier.match(/^([0-9]+-[A-Z](?:\s+High|\s+Low)?)\s*(?:\([^)]*\))?\s*(?:\||$)/i);
  if (match2 && match2[1]) {
    char.tier = match2[1];
    tierFixed++;
    tierFixLog.push({ name: char.name, old: rawTier, new: match2[1] });
    return;
  }
  
  // Pattern 3: "Tier 7-B a 5-C | ..." → "7-B"
  const match3 = rawTier.match(/^Tier\s+([0-9]+-[A-Z](?:\s+High|\s+Low)?)\s+a\s+/i);
  if (match3 && match3[1]) {
    char.tier = match3[1];
    tierFixed++;
    tierFixLog.push({ name: char.name, old: rawTier, new: match3[1] });
    return;
  }
  
  // Pattern 4: "7-B a 6-C ..." → "7-B"
  const match4 = rawTier.match(/^([0-9]+-[A-Z](?:\s+High|\s+Low)?)\s+a\s+/i);
  if (match4 && match4[1]) {
    char.tier = match4[1];
    tierFixed++;
    tierFixLog.push({ name: char.name, old: rawTier, new: match4[1] });
    return;
  }
  
  // If nothing matched, try a simple extraction
  const match5 = rawTier.match(/([0-9]+-[A-Z])/i);
  if (match5 && match5[1]) {
    // Check if it has suffix like "Físico"
    const match6 = rawTier.match(/^([0-9]+-[A-Z](?:\s+High|\s+Low)?)\s*/i);
    if (match6 && match6[1]) {
      char.tier = match6[1];
      tierFixed++;
      tierFixLog.push({ name: char.name, old: rawTier, new: match6[1] });
    } else {
      tierAlreadyClean++;
    }
  } else {
    tierAlreadyClean++;
  }
});

// ── Fix 3: Ensure base forms have apexKiMultiplier = 1 ──
let baseFormsFixed = 0;
chars.forEach(char => {
  if (!char.forms || char.forms.length === 0) return;
  const firstForm = char.forms[0];
  if (!firstForm) return;
  
  const formNameLower = (firstForm.name || '').toLowerCase();
  const isBaseForm = formNameLower.includes('base') || 
                     formNameLower.includes('estado base') ||
                     formNameLower.includes('forma base') ||
                     formNameLower.includes('normal') ||
                     formNameLower.includes('humano') ||
                     firstForm.id?.toLowerCase().includes('base') ||
                     firstForm.id === 'base';
  
  if (isBaseForm && !firstForm.apexKiMultiplier && !firstForm.multiplier) {
    firstForm.apexKiMultiplier = 1;
    baseFormsFixed++;
  }
  
  // For DB characters, ensure base form has sourceKi matching the character
  if (isBaseForm && char.universe?.toLowerCase().includes('dragon ball')) {
    if (!firstForm.explicitSourceKi && !firstForm.sourceKi && !firstForm.sourceKiMultiplier) {
      // Mark as base (already 1x multiplier by default)
    }
  }
});

// ── Write the corrected file ──
const newSrc = `export const INITIAL_CHARACTERS = ${JSON.stringify(chars, null, 4)};\n`;
writeFileSync(charsPath, newSrc, 'utf8');

console.log('=== RESUMEN DE REPARACIONES DE DATOS ===');
console.log('strength objects → strings:', strengthFixed);
console.log('tier values normalizados:', tierFixed);
console.log('tier values ya limpios:', tierAlreadyClean);
console.log('base forms con multiplier=1:', baseFormsFixed);
console.log('Total characters:', chars.length);

if (tierFixLog.length <= 20) {
  console.log('\nDetalles de tier fix:');
  tierFixLog.forEach(d => console.log(`  - ${d.name}: "${d.old}" -> "${d.new}"`));
} else {
  console.log(`\n(Showing first 20 of ${tierFixLog.length} tier fixes)`);
  tierFixLog.slice(0, 20).forEach(d => console.log(`  - ${d.name}: "${d.old}" -> "${d.new}"`));
}
console.log('\nArchivo escrito:', charsPath);
