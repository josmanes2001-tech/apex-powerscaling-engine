// src/scripts/auditRosterErrors.js
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '../../');
const CHARACTERS_FILE = path.join(projectRoot, 'src/data/characters.js');

async function loadCharacters() {
  const mod = await import('file://' + CHARACTERS_FILE.replace(/\\/g, '/'));
  return mod.INITIAL_CHARACTERS || [];
}

async function main() {
  const characters = await loadCharacters();
  console.log(`Auditing ${characters.length} characters for lore inconsistencies and form tier mismatches...\n`);

  const issues = [];

  characters.forEach(c => {
    // 1. Check for illegal biological assimilation in Saiyans/Humans
    const isSaiyanOrHuman = /saiyajin|saiyan|humano|human/i.test(c.race || c.name || c.universe || '');
    const isBio = /cell|buu|moro|baby|parasito|parásito|absorbedor/i.test(c.name || c.id || '');
    
    if (isSaiyanOrHuman && !isBio) {
      const allText = JSON.stringify(c).toLowerCase();
      if (allText.includes('asimilación genética') || allText.includes('asimilacion genetica') || allText.includes('biomasa compartida')) {
        issues.push({
          id: c.id,
          name: c.name,
          type: 'LORE_BIOLOGY_LEAK',
          desc: 'Saiyan/Humano tiene técnica o pasiva de Asimilación Genética / Biomasa'
        });
      }
    }

    // 2. Check for form tier vs base tier mismatch
    // If character has forms and the base form tier is identical to SSJ3/SSJ2/4-B when base is 5-A
    if (c.forms && c.forms.length > 1) {
      const baseForm = c.forms[0];
      const maxForm = c.forms[c.forms.length - 1];
      if (baseForm && maxForm && baseForm.name.toLowerCase().includes('base')) {
        if (c.tier && (c.tier.includes('4-B') || c.tier.includes('4-A') || c.tier.includes('3-') || c.tier.includes('2-'))) {
          // Check if base form has explicit separate tier or inherits peak
          if (!baseForm.tierExact && !baseForm.tier) {
            issues.push({
              id: c.id,
              name: c.name,
              type: 'BASE_FORM_OVERPOWERED',
              desc: `Ficha general tiene Tier pico (${c.tier}) pero Forma Base no tiene tier físico base desacoplado`
            });
          }
        }
      }
    }
  });

  console.log(`Found ${issues.length} potential issues across roster.`);
  console.log('Sample of issues:');
  console.log(JSON.stringify(issues.slice(0, 15), null, 2));
}

main().catch(err => console.error(err));
