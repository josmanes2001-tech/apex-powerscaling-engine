/**
 * APEX Engine - Script Final Exhaustivo de Formas Base
 * Completa la normalización en todos los personajes restantes.
 */

const fs = require('fs');
const path = require('path');

const CHARS_PATH = path.join(__dirname, '../src/data/characters.js');
let src = fs.readFileSync(CHARS_PATH, 'utf8');

const FINAL_PATCHES = [
  {
    targetName: 'Gohan del Futuro',
    match: '"name": "Gohan del Futuro"',
    forms: [
      { id: 'gohan-futuro-base', name: 'Gohan del Futuro (Estado Base)', stats: 'Nivel Planeta Grande. Superviviente solitario de la Tierra apocalíptica.' },
      { id: 'gohan-futuro-ssj', name: 'Super Saiyan (Manco)', stats: 'Nivel Estrella Enana. Determinación inquebrantable en inferioridad numérica frente a A-17 y A-18.' }
    ]
  },
  {
    targetName: 'Kefla',
    match: '"name": "Kefla"',
    forms: [
      { id: 'kefla-base', name: 'Kefla Base', stats: 'Nivel Galáctico. Fusión Pothala de Caulifla y Kale.' },
      { id: 'kefla-ssj1', name: 'Super Saiyan 1', stats: 'Nivel Universal Menor.' },
      { id: 'kefla-ssj2', name: 'Super Saiyan 2 (Máximo Poder)', stats: 'Nivel Universal. Fuerza destructiva capaz de forzar el Ultra Instinto de Goku.' }
    ]
  },
  {
    targetName: 'Son Bra (Universo 16)',
    match: '"name": "Son Bra (Universo 16)"',
    forms: [
      { id: 'bra-base', name: 'Son Bra (Estado Base)', stats: 'Nivel Sistema Solar. Hija prodigio de Vegetto y Bulma.' },
      { id: 'bra-ssj1', name: 'Super Saiyan 1', stats: 'Nivel Galáctico.' },
      { id: 'bra-ssj2', name: 'Majin Bra (Super Saiyan 2)', stats: 'Nivel Universal Menor. Desenfreno homicida potenciada por Babidi.' }
    ]
  },
  {
    targetName: 'Vegetto (Universo 16)',
    match: '"name": "Vegetto (Universo 16)"',
    forms: [
      { id: 'vegetto-u16-base', name: 'Vegetto (Estado Base DBM)', stats: 'Nivel Galáctico a Multi-Galáctico.' },
      { id: 'vegetto-u16-ssj1', name: 'Super Saiyan 1', stats: 'Nivel Universal Menor.' },
      { id: 'vegetto-u16-ssj2', name: 'Super Saiyan 2', stats: 'Nivel Universal.' },
      { id: 'vegetto-u16-ssj3', name: 'Super Saiyan 3 (Pico DBM)', stats: 'Nivel Multiversal Bajo.' }
    ]
  },
  {
    targetName: 'Broly',
    match: '"name": "Broly"',
    forms: [
      { id: 'broly-kakumei-base', name: 'Broly (Estado Base Kakumei)', stats: 'Nivel Galáctico. Control de Ki en el Planeta Vampa.' },
      { id: 'broly-kakumei-lssj', name: 'Super Saiyan Legendario (LSSJ)', stats: 'Nivel Multiversal Bajo. Despertar primitivo ante las deidades del Multiverso Cero.' }
    ]
  },
  {
    targetName: 'Vegeta (DB After)',
    match: '"name": "Vegeta (DB After)"',
    forms: [
      { id: 'vegeta-after-base', name: 'Vegeta Base (DB After)', stats: 'Nivel Galáctico.' },
      { id: 'vegeta-after-ssj2', name: 'Super Saiyan 2', stats: 'Nivel Multi-Galáctico.' },
      { id: 'vegeta-after-ssj3', name: 'Super Saiyan 3', stats: 'Nivel Universal Menor.' }
    ]
  },
  {
    targetName: 'Son Gohan',
    match: '"name": "Son Gohan"',
    forms: [
      { id: 'gohan-after-base', name: 'Son Gohan Base (DB After)', stats: 'Nivel Sistema Solar.' },
      { id: 'gohan-after-mystic', name: 'Estado Místico (Definitivo)', stats: 'Nivel Galáctico a Universal Menor.' }
    ]
  },
  {
    targetName: 'Piccolo',
    match: '"name": "Piccolo"',
    forms: [
      { id: 'piccolo-base', name: 'Piccolo (Guerrero Namekiano Base)', stats: 'Nivel Planeta Pequeño.' },
      { id: 'piccolo-fused-nail', name: 'Fusión con Nail (Saga Namek)', stats: 'Nivel Planeta Grande a Estrella.' },
      { id: 'piccolo-super-namek', name: 'Super Namekiano (Fusión con Kami-sama)', stats: 'Nivel Sistema Solar Menor. Rivaliza con el Androide 17.' }
    ]
  },
  {
    targetName: 'Moro',
    match: '"name": "Moro"',
    forms: [
      { id: 'moro-anciano', name: 'Moro Anciano (Sellado)', stats: 'Nivel Planeta Grande. Magia de absorción de energía vital planetaria.' },
      { id: 'moro-joven', name: 'Moro Joven (Poder Restaurado)', stats: 'Nivel Galáctico. Fuerza física y magia a escala cósmica.' },
      { id: 'moro-73', name: 'Moro 7-3 (Fusión con 7-3)', stats: 'Nivel Universal Menor. Copia del poder de Vegeta y técnicas de los Guerreros Z.' },
      { id: 'moro-angel', name: 'Moro Ángel (Fusionado con la Tierra)', stats: 'Nivel Universal. Copia del Ultra Instinto de Merus, fusionado con la masa del planeta Tierra.' }
    ]
  },
  {
    targetName: 'Zamasu (Futuro)',
    match: '"name": "Zamasu (Futuro)"',
    forms: [
      { id: 'zamasu-base', name: 'Zamasu (Kaio del Norte U10 / Base)', stats: 'Nivel Galáctico. Prodigio del combate sagrado.' },
      { id: 'zamasu-inmortal', name: 'Zamasu Inmortal (Cuerpo Divino)', stats: 'Nivel Galáctico a Universal Menor. Inmortalidad absoluta por las Super Dragon Balls.' },
      { id: 'zamasu-fusion', name: 'Fusión Zamasu', stats: 'Nivel Universal. Unión Pothala con Black Goku.' },
      { id: 'zamasu-corrupto', name: 'Zamasu Mitad Corrupta', stats: 'Nivel Universal. Brazo mutado de oscuridad por la inestabilidad de la regeneración.' }
    ]
  }
];

function patchCharacterForms(source, matchString, newForms, charName) {
  const blockStart = source.indexOf(matchString);
  if (blockStart === -1) return source;

  const formsKeyIdx = source.indexOf('"forms":', blockStart);
  if (formsKeyIdx === -1) return source;

  let arrStart = source.indexOf('[', formsKeyIdx);
  let depth = 0, arrEnd = -1;
  for (let i = arrStart; i < source.length; i++) {
    if (source[i] === '[') depth++;
    else if (source[i] === ']') {
      depth--;
      if (depth === 0) { arrEnd = i + 1; break; }
    }
  }

  if (arrEnd === -1) return source;
  const newFormsStr = JSON.stringify(newForms, null, 8);
  console.log(`[OK] Formas normalizadas con Base en #0: ${charName} (${newForms.length} formas)`);
  return source.slice(0, arrStart) + newFormsStr + source.slice(arrEnd);
}

FINAL_PATCHES.forEach(p => {
  src = patchCharacterForms(src, p.match, p.forms, p.targetName);
});

fs.writeFileSync(CHARS_PATH, src, 'utf8');
console.log('\n[DONE] Lote final de formas base aplicado con éxito.');
