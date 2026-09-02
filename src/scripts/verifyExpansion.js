// src/scripts/verifyExpansion.js
import { calcPower } from './calcPower.js';
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
  if (!characters.length) {
    console.log('No characters found.');
    return;
  }
  const sample = { ...characters[0] }; // shallow copy
  const result = calcPower(sample);
  console.log('Character ID:', result.id);
  console.log('Original apexKi (preserved):', result.originalApexKi);
  console.log('Adjusted apexKi:', result.apexKiAdjusted);
  console.log('Adjusted tierExact:', result.tierExactAdjusted);
}

main().catch(err => console.error('Verification error:', err));
