const fs = require('fs');
const path = require('path');
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

const chars = fs.readFileSync(charactersPath, 'utf8');
const codex = fs.readFileSync(codexPath, 'utf8');
const charTiers = extractTiers(chars);
const codexTiers = extractCodexTiers(codex);
const missing = charTiers.filter(t => !codexTiers.includes(t));
console.log('Missing tiers:', missing);
