/**
 * APEX — Script de Corrección de Formas v2 (con IDs reales)
 */

const fs = require('fs');
const path = require('path');

const CHARS_PATH = path.join(__dirname, '../src/data/characters.js');
let src = fs.readFileSync(CHARS_PATH, 'utf8');

const FORM_PATCHES = [
  {
    matchId: '"id": "gotenks-base-saga-buu-858"',
    charName: 'Gotenks (3 formas)',
    newForms: [
      { id: 'gotenks-base', name: 'Gotenks Base', stats: 'Nivel Sistema Solar Menor. Fusión jovial, mohawk bicolor. Sin restricciones morales, poder brutal en bruto.' },
      { id: 'gotenks-ssj', name: 'Super Saiyan 1', stats: 'Nivel Sistema Solar. Cabello dorado estándar, multiplicador x50. Más serio pero mantiene la personalidad cómica.' },
      { id: 'gotenks-ssj2', name: 'Super Saiyan 2', stats: 'Nivel Sistema Solar Grande. Electricidad constante, multiplicador x100. Empata con Majin Buu en el manga.' },
      { id: 'gotenks-ssj3', name: 'Super Saiyan 3', stats: 'Nivel Multi-Sistema Solar. Pelo dorado hasta las rodillas, electricidad masiva, aura abrumadora. Límite de 30 minutos o 5 min en el Otro Mundo.' }
    ]
  },
  {
    matchId: '"id": "piccolo-saga-saiyan-namek-saga-saiyan-967"',
    charName: 'Piccolo (Saga Namek) — 3 formas',
    newForms: [
      { id: 'piccolo-namek-base', name: 'Piccolo Base (Pre-Namek)', stats: 'Nivel Planeta. Con pesas (100kg), capa y turbante blancos. Poder limitado pero reserva táctica enorme.' },
      { id: 'piccolo-nail-fusion', name: 'Piccolo + Nail (Fusión)', stats: 'Nivel Planeta Grande. Sin pesas. Aura blanca intensa. Multiplicador aproximado x3. Suficiente para enfrentar a la 2ª forma de Freezer.' },
      { id: 'piccolo-kami-fusion', name: 'Namekiano Supremo (+ Kami)', stats: 'Nivel Planeta Grande Superior / Multi-Planeta. La fusión más completa. Equivale a Cell Semi-Perfecto o superior según la saga.' }
    ]
  },
  {
    matchId: '"id": "son-goku-saga-buu-saga-buu-646"',
    charName: 'Son Goku Saga Buu — 3 formas',
    newForms: [
      { id: 'goku-buu-base-ssj', name: 'Base / Super Saiyan 1 (Saga Buu)', stats: 'Nivel Sistema Solar. Estado base robusto de la saga. SSJ1 como multiplicador de combate estándar.' },
      { id: 'goku-buu-ssj2', name: 'Super Saiyan 2 (Saga Buu)', stats: 'Nivel Sistema Solar Grande. Electricidad, iris dorados. Comparable a Majin Vegeta SSJ2.' },
      { id: 'goku-buu-ssj3', name: 'Super Saiyan 3 (Saga Buu)', stats: 'Nivel Multi-Sistema Solar. Pelo largo hasta la espalda, sin cejas, aura masiva. Supera ampliamente a Majin Vegeta y Gordo Buu.' }
    ]
  },
  {
    matchId: '"id": "vegeta-saga-buu-saga-buu-213"',
    charName: 'Vegeta Saga Buu — 3 formas',
    newForms: [
      { id: 'vegeta-buu-ssj', name: 'Super Saiyan (Pre-Majin)', stats: 'Nivel Sistema Solar. Estado base de Vegeta en la Saga Buu antes de la firma de Babidi.' },
      { id: 'vegeta-buu-ssj2-base', name: 'Super Saiyan 2 (Pre-Majin)', stats: 'Nivel Sistema Solar Grande. Similar a Goku SSJ2 en la Saga Buu.' },
      { id: 'vegeta-majin-form', name: 'Majin Vegeta (Potenciado por Babidi)', stats: 'Nivel Multi-Sistema Solar. "M" en la frente, aura oscura y espesa. Poder superior al SSJ2 estándar. Sacrifica el alma voluntariamente.' }
    ]
  },
  {
    matchId: '"id": "nappa-saga-saiyan-462"',
    charName: 'Nappa — 2 formas',
    newForms: [
      { id: 'nappa-base-form', name: 'Comandante Saiyan Base', stats: 'Nivel País a Continente. Élite de la guardia de Vegeta. Power Level 4,000+. Sin pelo, fuerza bruta colosal, cuerpo musculoso de combate puro.' },
      { id: 'nappa-ohzaru-form', name: 'Gran Mono (Ohzaru)', stats: 'Nivel Planeta Pequeño. Con cola y luna artificial generada por Vegeta. Multiplicador x10 del poder base. Control mínimo, destrucción máxima.' }
    ]
  },
  {
    matchId: '"id": "captain-ginyu-saga-namek-524"',
    charName: 'Capitán Ginyu — 3 formas',
    newForms: [
      { id: 'ginyu-original-body', name: 'Cuerpo Mutante Original', stats: 'Nivel Planeta Grande. Cuerpo real del Capitán Ginyu. Power Level 120,000. Cuernos violetas, armadura de élite, dominio completo del Cambiatransformación.' },
      { id: 'ginyu-goku-body', name: 'Cuerpo de Goku (Intercambiado)', stats: 'Nivel Planeta Grande — Inferior. Cuerpo de Goku controlado por Ginyu, pero sin saber canalizar su Ki correctamente. ~40-50% del poder real de Goku.' },
      { id: 'ginyu-frog-body', name: 'Cuerpo de Rana (Penalizado)', stats: 'Nivel Batraceo. Sin poderes de combate. Atrapado en el cuerpo de una rana en Namek. Sin acceso al Cambiatransformación.' }
    ]
  }
];

function patchForms(src, matchId, newForms, charName) {
  const blockStart = src.indexOf(matchId);
  if (blockStart === -1) {
    console.log(`[SKIP] ID no encontrado: ${matchId}`);
    return src;
  }

  const formsKeyIdx = src.indexOf('"forms":', blockStart);
  if (formsKeyIdx === -1) {
    console.log(`[ERROR] Campo forms no encontrado para: ${charName}`);
    return src;
  }

  // Find the array start
  let arrStart = src.indexOf('[', formsKeyIdx);
  if (arrStart === -1) { console.log(`[ERROR] Array no encontrado para: ${charName}`); return src; }

  // Find the matching closing bracket
  let depth = 0;
  let arrEnd = -1;
  for (let i = arrStart; i < src.length; i++) {
    if (src[i] === '[') depth++;
    else if (src[i] === ']') {
      depth--;
      if (depth === 0) { arrEnd = i + 1; break; }
    }
  }

  if (arrEnd === -1) { console.log(`[ERROR] Cierre de array no encontrado para: ${charName}`); return src; }

  const newFormsStr = JSON.stringify(newForms, null, 8);
  console.log(`[OK] Formas actualizadas: ${charName} (${newForms.length} formas)`);
  return src.slice(0, arrStart) + newFormsStr + src.slice(arrEnd);
}

FORM_PATCHES.forEach(patch => {
  src = patchForms(src, patch.matchId, patch.newForms, patch.charName);
});

fs.writeFileSync(CHARS_PATH, src, 'utf8');
console.log('\n[DONE] characters.js actualizado con correcciones de formas v2.');
