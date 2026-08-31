/**
 * APEX — Script de Corrección de Formas v3
 * Añade las formas bases a personajes que solo tenían su transformación máxima.
 */

const fs = require('fs');
const path = require('path');

const CHARS_PATH = path.join(__dirname, '../src/data/characters.js');
let src = fs.readFileSync(CHARS_PATH, 'utf8');

const FORM_PATCHES = [
  {
    matchId: '"id": "son-goku-saga-namek-saga-namek-176"',
    charName: 'Goku (Namek)',
    newForms: [
      { id: 'goku-namek-base', name: 'Base / Kaio-ken x10-x20', stats: 'Nivel Planeta a Planeta Grande. Poder base de 3M. El Kaio-ken destroza su cuerpo pero le permite pelear con Freezer.' },
      { id: 'goku-namek-ssj', name: 'Super Saiyan 1', stats: 'Nivel Planeta Grande. Multiplicador x50. Ira pura, poder estable de 150M. Supera a Freezer 100%.' }
    ]
  },
  {
    matchId: '"id": "son-goku-llegada-dbz-saga-saiyan-169"',
    charName: 'Goku (Llegada DBZ)',
    newForms: [
      { id: 'goku-llegada-base', name: 'Base / Kaio-ken x2', stats: 'Nivel Planeta Pequeño. Poder base de 8,000+ unidades. Supera a Nappa fácilmente.' },
      { id: 'goku-llegada-kk4', name: 'Kaio-ken x3 / x4', stats: 'Nivel Planeta Pequeño Superior. Multiplicador suicida. Logra superar el Galick Gun de Vegeta.' }
    ]
  },
  {
    matchId: '"id": "son-goku-saga-cell-saga-androides-459"',
    charName: 'Goku (Cell)',
    newForms: [
      { id: 'goku-cell-base', name: 'Estado Base (Saga Cell)', stats: 'Nivel Estrella Enana. Entrenamiento en la Habitación del Tiempo.' },
      { id: 'goku-cell-ssj-fp', name: 'SSJ Full Power', stats: 'Nivel Sistema Solar Menor. Dominio total del SSJ sin desgaste de energía ni estrés mental.' }
    ]
  },
  {
    matchId: '"id": "vegeta-saga-namek-saga-namek-783"',
    charName: 'Vegeta (Namek)',
    newForms: [
      { id: 'vegeta-namek-base', name: 'Vegeta Base (Llegada a Namek)', stats: 'Nivel Planeta. Poder 24,000 (Supera a Dodoria y Zarbon base).' },
      { id: 'vegeta-namek-zenkai', name: 'Zenkai Élite (Pre-Freezer)', stats: 'Nivel Planeta Grande. Poder superior a 2M tras curarse con Dende. Capaz de ver los movimientos de Freezer forma final, pero no de seguir su ritmo.' }
    ]
  },
  {
    matchId: '"id": "vegeta-saga-cell-saga-androides-856"',
    charName: 'Vegeta (Cell)',
    newForms: [
      { id: 'vegeta-cell-ssj', name: 'Super Saiyan (Post-Yadrat/Base)', stats: 'Nivel Estrella Enana. Estado normal de SSJ antes de dominar los grados superiores.' },
      { id: 'vegeta-cell-ssj-grade2', name: 'Super Vegeta (SSJ 2do Grado)', stats: 'Nivel Sistema Solar Menor. Gran aumento muscular y de Ki bruto. Humilla a Cell Semi-Perfecto.' }
    ]
  },
  {
    matchId: '"id": "trunks-del-futuro-saga-androides-saga-androides-577"',
    charName: 'Trunks (Futuro / Androides)',
    newForms: [
      { id: 'trunks-futuro-base', name: 'Estado Base / SSJ1', stats: 'Nivel Estrella Enana. Supera fácilmente a Mecha Freezer y King Cold.' },
      { id: 'trunks-futuro-ssj-grade3', name: 'Ultra Trunks (SSJ 3er Grado)', stats: 'Nivel Sistema Solar Menor. Aumento brutal de fuerza bruta superando a Super Vegeta, pero pierde muchísima velocidad.' }
    ]
  }
];

function patchForms(src, matchId, newForms, charName) {
  const blockStart = src.indexOf(matchId);
  if (blockStart === -1) return src;

  const formsKeyIdx = src.indexOf('"forms":', blockStart);
  if (formsKeyIdx === -1) return src;

  let arrStart = src.indexOf('[', formsKeyIdx);
  let depth = 0, arrEnd = -1;
  for (let i = arrStart; i < src.length; i++) {
    if (src[i] === '[') depth++;
    else if (src[i] === ']') {
      depth--;
      if (depth === 0) { arrEnd = i + 1; break; }
    }
  }

  if (arrEnd === -1) return src;
  const newFormsStr = JSON.stringify(newForms, null, 8);
  console.log(`[OK] Formas añadidas: ${charName} (${newForms.length} formas)`);
  return src.slice(0, arrStart) + newFormsStr + src.slice(arrEnd);
}

FORM_PATCHES.forEach(patch => {
  src = patchForms(src, patch.matchId, patch.newForms, patch.charName);
});

fs.writeFileSync(CHARS_PATH, src, 'utf8');
console.log('\n[DONE] characters.js actualizado con correcciones de bases v3.');
