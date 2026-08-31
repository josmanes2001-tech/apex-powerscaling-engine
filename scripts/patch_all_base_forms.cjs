/**
 * APEX Engine - Script Maestro de Normalización de Formas Base
 * Garantiza que todo personaje con transformaciones tenga su Forma Base en el índice 0.
 */

const fs = require('fs');
const path = require('path');

const CHARS_PATH = path.join(__dirname, '../src/data/characters.js');
let src = fs.readFileSync(CHARS_PATH, 'utf8');

// Array de correcciones explícitas para personajes clave
const BASE_FORM_PATCHES = [
  {
    targetName: 'Vegeta (Saga Buu Base)',
    match: '"name": "Vegeta (Saga Buu Base)"',
    forms: [
      { id: 'vegeta-buu-base', name: 'Vegeta Base (Saga Buu)', stats: 'Nivel Estrella Pequeña. Gran maestría marcial y poder parejo a Goku base.' },
      { id: 'vegeta-buu-ssj1', name: 'Super Saiyan 1', stats: 'Nivel Estrella / Sistema Solar Menor. Gran poder concentrado.' },
      { id: 'vegeta-buu-ssj2', name: 'Super Saiyan 2', stats: 'Nivel Sistema Solar. Rivaliza con Gohan SSJ2 de Cell Games.' },
      { id: 'vegeta-buu-majin', name: 'Majin Vegeta', stats: 'Nivel Sistema Solar Superior. Potenciado por Babidi hasta el límite absoluto de Goku SSJ2.' }
    ]
  },
  {
    targetName: 'Son Gohan (Joven)',
    match: '"name": "Son Gohan (Joven)"',
    forms: [
      { id: 'gohan-joven-base', name: 'Estado Base (Habitación del Tiempo)', stats: 'Nivel Estrella Pequeña. Gran reserva latente de Ki.' },
      { id: 'gohan-joven-ssj1', name: 'Super Saiyan 1 (Full Power)', stats: 'Nivel Sistema Solar Menor. Supera a Goku SSJ Full Power.' },
      { id: 'gohan-joven-ssj2', name: 'Super Saiyan 2', stats: 'Nivel Sistema Solar. Ira desatada, humilla a Cell Perfecto.' }
    ]
  },
  {
    targetName: 'Son Gohan (Adulto)',
    match: '"name": "Son Gohan (Adulto)"',
    forms: [
      { id: 'gohan-adulto-base', name: 'Estado Base (Saga Buu)', stats: 'Nivel Estrella Enana. Forma pacífica.' },
      { id: 'gohan-adulto-saiyaman', name: 'Gran Saiyaman / SSJ1', stats: 'Nivel Sistema Solar Menor.' },
      { id: 'gohan-adulto-ssj2', name: 'Super Saiyan 2', stats: 'Nivel Sistema Solar. Poder mostrado en el Torneo ante Kibito.' }
    ]
  },
  {
    targetName: 'Son Gohan (Saga Super)',
    match: '"name": "Son Gohan (Saga Super)"',
    forms: [
      { id: 'gohan-super-base', name: 'Estado Base / SSJ (DBS)', stats: 'Nivel Galáctico. Entrenamiento reactivado.' },
      { id: 'gohan-super-ultimate', name: 'Estado Definitivo (Ultimate Gohan)', stats: 'Nivel Universal Menor. Rivaliza con Goku SSJ Blue.' },
      { id: 'gohan-super-beast', name: 'Modo Bestia (Gohan Beast)', stats: 'Nivel Multiversal Bajo. Poder destructivo superior a Cell Max y parejo a Goku UI.' }
    ]
  },
  {
    targetName: 'Freezer (Saga Super)',
    match: '"name": "Freezer (Saga Super)"',
    forms: [
      { id: 'freezer-super-base', name: 'Forma Final (Base DBS)', stats: 'Nivel Galáctico. Entrenado tras resucitar, supera al Freezer de Z por órdenes de magnitud.' },
      { id: 'freezer-super-golden', name: 'Golden Freezer', stats: 'Nivel Universal Menor. Poder parejo a SSJ Blue.' },
      { id: 'freezer-super-black', name: 'Black Freezer', stats: 'Nivel Multiversal. One-shot a Goku UI y Vegeta Ultra Ego simultáneamente.' }
    ]
  },
  {
    targetName: 'Broly (Z)',
    match: '"name": "Broly (Z)"',
    forms: [
      { id: 'broly-z-base', name: 'Estado Base (Control Mental)', stats: 'Nivel Planeta Grande. Contenido por la tiara de Paragus.' },
      { id: 'broly-z-ssj', name: 'SSJ Restringido (Pelo Azul/Morado)', stats: 'Nivel Estrella. Primer desbordamiento de energía.' },
      { id: 'broly-z-lssj', name: 'Super Saiyan Legendario (LSSJ)', stats: 'Nivel Galaxia. Destruye la Galaxia del Sur, Ki infinito que desborda.' }
    ]
  },
  {
    targetName: 'Son Goten',
    match: '"name": "Son Goten"',
    forms: [
      { id: 'goten-base', name: 'Goten (Estado Base)', stats: 'Nivel Planeta Grande. Talento nato prodigioso.' },
      { id: 'goten-ssj', name: 'Super Saiyan', stats: 'Nivel Estrella Enana. Acceso al SSJ a temprana edad.' }
    ]
  },
  {
    targetName: 'Trunks (Niño)',
    match: '"name": "Trunks (Niño)"',
    forms: [
      { id: 'trunks-nino-base', name: 'Trunks Niño (Estado Base)', stats: 'Nivel Planeta Grande. Heredero de Vegeta y Capsule Corp.' },
      { id: 'trunks-nino-ssj', name: 'Super Saiyan', stats: 'Nivel Estrella Enana. Super Saiyan natural.' }
    ]
  },
  {
    targetName: 'Gogeta (Z)',
    match: '"name": "Gogeta (Z)"',
    forms: [
      { id: 'gogeta-z-base', name: 'Gogeta Base', stats: 'Nivel Galaxia. Danza Metamoran de Goku y Vegeta.' },
      { id: 'gogeta-z-ssj', name: 'Super Gogeta (SSJ)', stats: 'Nivel Universal Menor. Purificador de almas (Soul Punisher), humilla a Janemba.' }
    ]
  },
  {
    targetName: 'Denji (Chainsaw Man)',
    match: '"name": "Denji (Chainsaw Man)"',
    forms: [
      { id: 'denji-humano', name: 'Denji (Humano)', stats: 'Nivel Humano Atlético / Hacha de Pochita.' },
      { id: 'denji-motosierra', name: 'Híbrido Motosierra', stats: 'Nivel Edificio a Bloque de Ciudad. Regeneración con sangre.' },
      { id: 'denji-pochita', name: 'Héroe del Infierno (Pochita Verdadero)', stats: 'Nivel Ciudad a Continental. Borrado conceptual de demonios ingeridos.' }
    ]
  }
];

function patchCharacterForms(source, matchString, newForms, charName) {
  const blockStart = source.indexOf(matchString);
  if (blockStart === -1) {
    console.log(`[SKIP] No encontrado: ${charName}`);
    return source;
  }

  const formsKeyIdx = source.indexOf('"forms":', blockStart);
  if (formsKeyIdx === -1) {
    console.log(`[SKIP] No tiene forms key: ${charName}`);
    return source;
  }

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

BASE_FORM_PATCHES.forEach(p => {
  src = patchCharacterForms(src, p.match, p.forms, p.targetName);
});

fs.writeFileSync(CHARS_PATH, src, 'utf8');
console.log('\n[DONE] characters.js actualizado con Formas Base en índice 0.');
