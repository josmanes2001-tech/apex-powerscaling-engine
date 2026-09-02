// src/scripts/expandSynergies.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '../../');
const CHARACTERS_FILE = path.join(projectRoot, 'src/data/characters.js');
const PATCHES_FILE = path.join(projectRoot, 'src/data/rosterExpansionPatches.json');

// Factor de multiplicación aleatorio entre 2 y 4
const MIN_FACTOR = 2;
const MAX_FACTOR = 4;
function randomFactor() {
  return Math.floor(Math.random() * (MAX_FACTOR - MIN_FACTOR + 1)) + MIN_FACTOR;
}

async function loadCharacters() {
  const mod = await import('file://' + CHARACTERS_FILE.replace(/\\\\/g, '/'));
  return mod.INITIAL_CHARACTERS || [];
}

function savePatches(patches) {
  fs.writeFileSync(PATCHES_FILE, JSON.stringify(patches, null, 2), 'utf8');
}

function generateVariant(name, effect, idx) {
  const suffixes = ['II','III','IV'];
  const newName = `${name} ${suffixes[idx-2] || idx}`;
  const percentMatch = effect.match(/(\d+)%/);
  let newEffect = effect;
  if (percentMatch) {
    const base = parseInt(percentMatch[1]);
    const variation = Math.round(base * (1 + (Math.random() - 0.5) * 0.1)); // ±5%
    newEffect = effect.replace(/\d+%/, `${variation}%`);
  }
  return { name: newName, effect: newEffect };
}

async function main() {
  const characters = await loadCharacters();
  const patches = [];

  characters.forEach(c => {
    const addedSynergies = [];
    const addedPassives = [];
    const addedTags = ['synergy_extra'];
    const factor = randomFactor();
    if (c.synergies && Array.isArray(c.synergies)) {
      c.synergies.forEach(s => {
        for (let n = 2; n <= factor; n++) {
          const variant = generateVariant(s.name, s.effect || '', n);
          addedSynergies.push({ ...variant, partnerTags: s.partnerTags || [] });
        }
      });
    }
    if (c.passives && Array.isArray(c.passives)) {
      c.passives.forEach(p => {
        for (let n = 2; n <= factor; n++) {
          const variant = generateVariant(p.name, p.desc || p.effect || '', n);
          addedPassives.push({ ...variant, effect: variant.effect || p.desc || p.effect });
        }
      });
    }
    if (addedSynergies.length || addedPassives.length) {
      patches.push({
        charId: c.id,
        addedSynergies,
        addedPassives,
        addedTags
      });
    }
  });

  savePatches(patches);
  console.log(`Generated expansion patches for ${patches.length} characters (factor 2‑4 aleatorio).`);
}

main().catch(err => console.error('Error generando sinergias expand:', err));
