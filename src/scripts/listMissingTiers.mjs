import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const charactersPath = path.resolve(__dirname, '../data/characters.js');
const codexPath = path.resolve(__dirname, '../data/powerscalingCodex.js');

function extractTiers(content) {
  const regex = /"tier"\s*:\s*"([^\"]+)"/g;
  const set = new Set();
  let match;
  while ((match = regex.exec(content)) !== null) {
    set.add(match[1]);
  }
  return [...set];
}

function extractCodexTiers(content) {
  const regex = /{\s*tier:\s*'([^']+)'/g;
  const set = new Set();
  let match;
  while ((match = regex.exec(content)) !== null) {
    set.add(match[1]);
  }
  return [...set];
}

const chars = await fs.promises.readFile(charactersPath, 'utf8');
const codex = await fs.promises.readFile(codexPath, 'utf8');
const charTiers = extractTiers(chars);
const codexTiers = extractCodexTiers(codex);
const missing = charTiers.filter(t => !codexTiers.includes(t));
console.log('Missing tiers:', missing);
