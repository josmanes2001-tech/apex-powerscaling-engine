/**
 * Patch Vegeta (Saga Super) and Trunks del Futuro (DBZ)
 */
const fs = require('fs');
const path = require('path');

const CHARS_PATH = path.join(__dirname, '../src/data/characters.js');
let src = fs.readFileSync(CHARS_PATH, 'utf8');

const PATCHES = [
  {
    match: '"id": "vegeta-saga-super-dragon-ball-super-454"',
    forms: [
      { id: 'vegeta-super-base', name: 'Vegeta (Estado Base DBS)', stats: 'Nivel Galáctico. Entrenamiento divino en el planeta de Bills.' },
      { id: 'vegeta-super-ssj', name: 'Super Saiyan 1 y 2', stats: 'Nivel Multi-Galáctico.' },
      { id: 'vegeta-super-god', name: 'Super Saiyan God (Rojo)', stats: 'Nivel Universal Menor.' },
      { id: 'vegeta-super-blue-evo', name: 'Super Saiyan Blue Evolution (Evolución Azul)', stats: 'Nivel Universal. Supera a Toppo Hakaishin con el Final Explosion divino.' },
      { id: 'vegeta-super-ultra-ego', name: 'Ultra Ego (Mega Instinto / Hakaishin)', stats: 'Nivel Multiversal Bajo. Su poder de destrucción crece cuanto más daño absorbe.' }
    ]
  },
  {
    match: '"id": "trunks-del-futuro-saga-androides-saga-androides-577"',
    forms: [
      { id: 'trunks-futuro-base', name: 'Trunks del Futuro (Estado Base)', stats: 'Nivel Planeta Grande. Espadachín letal con espada de Tapion.' },
      { id: 'trunks-futuro-ssj1', name: 'Super Saiyan 1', stats: 'Nivel Estrella Pequeña. Corta a Mecha Freezer en pedazos instantáneamente.' },
      { id: 'trunks-futuro-ssj3rd', name: 'Ultra Trunks (Super Saiyan 3er Grado)', stats: 'Nivel Sistema Solar Menor. Masa muscular desbordante con sacrificio de velocidad.' }
    ]
  }
];

function patchCharacter(source, match, newForms) {
  const blockStart = source.indexOf(match);
  if (blockStart === -1) return source;

  const formsIdx = source.indexOf('"forms":', blockStart);
  if (formsIdx === -1) return source;

  let arrStart = source.indexOf('[', formsIdx);
  let depth = 0, arrEnd = -1;
  for (let i = arrStart; i < source.length; i++) {
    if (source[i] === '[') depth++;
    else if (source[i] === ']') {
      depth--;
      if (depth === 0) { arrEnd = i + 1; break; }
    }
  }

  if (arrEnd === -1) return source;
  console.log(`[PATCH OK] ${match}`);
  return source.slice(0, arrStart) + JSON.stringify(newForms, null, 8) + source.slice(arrEnd);
}

PATCHES.forEach(p => {
  src = patchCharacter(src, p.match, p.forms);
});

fs.writeFileSync(CHARS_PATH, src, 'utf8');
console.log('[DONE] Vegeta DBS y Trunks DBZ normalizados.');
