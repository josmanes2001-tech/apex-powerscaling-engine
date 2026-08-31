/**
 * APEX Engine - Separación Limpia de Formas Base de Goku, Vegeta, Gohan, Trunks y Multiverso
 * Asegura que ningún personaje mezcle 'Base / SSJ' o 'Base / Kaio-ken' en la misma forma,
 * teniendo su Estado Base 100% puro y limpio como forms[0].
 */

const fs = require('fs');
const path = require('path');

const CHARS_PATH = path.join(__dirname, '../src/data/characters.js');
let src = fs.readFileSync(CHARS_PATH, 'utf8');

const PURE_BASE_PATCHES = [
  // ─── GOKUS ───────────────────────────────────────────────────────────
  {
    name: 'Son Goku (Niño)',
    match: '"id": "son-goku-ni-o-dragon-ball-cl-sico-987"',
    forms: [
      { id: 'goku-nino-base', name: 'Goku Niño (Estado Base)', stats: 'Nivel Muro a Edificio. Fuerza saiyan innata, Báculo Sagrado y Nube Kinton.' },
      { id: 'goku-nino-oozaru', name: 'Goku Niño (Ohzaru / Mono Gigante)', stats: 'Nivel Ciudad Pequeña. Multiplicador x10 descontrolado al ver la luna llena.' }
    ]
  },
  {
    name: 'Son Goku (Llegada DBZ)',
    match: '"id": "son-goku-llegada-dbz-saga-saiyan-169"',
    forms: [
      { id: 'goku-saiyan-base', name: 'Son Goku (Estado Base)', stats: 'Nivel Luna / 8.000+ Unidades. Gran dominio marcial entrenado con Kaio-sama.' },
      { id: 'goku-saiyan-kk2-3', name: 'Kaio-ken x2 / x3', stats: 'Nivel Luna a Planeta Pequeño. Multiplica velocidad, fuerza y reflejos superando a Vegeta.' },
      { id: 'goku-saiyan-kk4', name: 'Kaio-ken x4 (Choque Kamehameha)', stats: 'Nivel Planeta. Sobrepasa el Cañón Galick de Vegeta al límite de ruptura corporal.' }
    ]
  },
  {
    name: 'Son Goku (Saga Namek)',
    match: '"id": "son-goku-saga-namek-saga-namek-176"',
    forms: [
      { id: 'goku-namek-base', name: 'Son Goku (Estado Base Namek)', stats: 'Nivel Planeta Grande. 3.000.000 Unidades tras múltiples Zenkai y gravedad 100G.' },
      { id: 'goku-namek-kk20', name: 'Kaio-ken x10 / x20', stats: 'Nivel Estrella Enana. 60.000.000 Unidades, rivaliza con Freezer al 50% de poder.' },
      { id: 'goku-namek-ssj1', name: 'Super Saiyan 1 (Despertar Legendario)', stats: 'Nivel Estrella Pequeña. 150.000.000 Unidades, ira desatada tras la muerte de Krilin.' }
    ]
  },
  {
    name: 'Son Goku (Saga Cell)',
    match: '"id": "son-goku-saga-cell-saga-androides-459"',
    forms: [
      { id: 'goku-cell-base', name: 'Son Goku (Estado Base Saga Cell)', stats: 'Nivel Estrella Pequeña. Gran maestría de control de Ki post-Yadrat.' },
      { id: 'goku-cell-ssj1', name: 'Super Saiyan 1', stats: 'Nivel Estrella / Sistema Solar Menor. Primer grado superado.' },
      { id: 'goku-cell-ssjfp', name: 'Super Saiyan Full Power (Cell Games)', stats: 'Nivel Sistema Solar Menor. Cero desgaste de energía, combate épico contra Cell Perfecto.' }
    ]
  },
  {
    name: 'Son Goku (Saga Buu)',
    match: '"id": "son-goku-saga-buu-saga-buu-646"',
    forms: [
      { id: 'goku-buu-base', name: 'Son Goku (Estado Base Saga Buu)', stats: 'Nivel Estrella Pequeña. 7 años de entrenamiento en el Otro Mundo.' },
      { id: 'goku-buu-ssj1', name: 'Super Saiyan 1', stats: 'Nivel Estrella / Sistema Solar Menor.' },
      { id: 'goku-buu-ssj2', name: 'Super Saiyan 2', stats: 'Nivel Sistema Solar. Duelo feroz contra Majin Vegeta.' },
      { id: 'goku-buu-ssj3', name: 'Super Saiyan 3', stats: 'Nivel Multi-Sistema Solar a Galaxia Menor. Consume estamina rápidamente en el mundo de los vivos.' }
    ]
  },
  {
    name: 'Son Goku (Saga Super)',
    match: '"id": "son-goku-saga-super-dragon-ball-super-732"',
    forms: [
      { id: 'goku-super-base', name: 'Son Goku (Estado Base DBS)', stats: 'Nivel Galáctico. Ki divino asimilado tras la batalla con Bills.' },
      { id: 'goku-super-ssj', name: 'Super Saiyan 1, 2 y 3', stats: 'Nivel Multi-Galáctico.' },
      { id: 'goku-super-god', name: 'Super Saiyan God (Dios Rojo)', stats: 'Nivel Universal Menor. Regeneración pasiva y Ki divino divino.' },
      { id: 'goku-super-blue', name: 'Super Saiyan Blue (SSGSS / Kaio-ken x20)', stats: 'Nivel Universal. Control absoluto de Ki divino y potencia de choque.' },
      { id: 'goku-super-ui-omen', name: 'Ultra Instinto -Señal- (Omen)', stats: 'Nivel Universal Superior. Esquiva inconsciente automática.' },
      { id: 'goku-super-ui-mastered', name: 'Ultra Instinto Dominado (Plateado / Verdadero)', stats: 'Nivel Multiversal Bajo. Juicio divino automático, supera a Jiren Máximo Poder.' }
    ]
  },
  {
    name: 'Son Goku (Saga GT)',
    match: '"id": "son-goku-saga-gt-dragon-ball-gt-281"',
    forms: [
      { id: 'goku-gt-base', name: 'Goku GT (Estado Base)', stats: 'Nivel Galáctico. Poder base superior a Majin Buu de Z.' },
      { id: 'goku-gt-ssj', name: 'Super Saiyan 1, 2 y 3', stats: 'Nivel Multi-Galáctico.' },
      { id: 'goku-gt-ssj4', name: 'Super Saiyan 4 (Forma Primitiva)', stats: 'Nivel Universal Menor / Macrocosmos. Máxima evolución saiyan combinando el Ohzaru Dorado y el control humano.' }
    ]
  },
  {
    name: 'Son Goku (Mini)',
    match: '"id": "son-goku-mini-dragon-ball-daima-751"',
    forms: [
      { id: 'goku-mini-base', name: 'Goku Mini (Estado Base Daima)', stats: 'Nivel Galáctico Menor. Combate con el Nyoibo Báculo Sagrado adaptado al Reino Demoníaco.' },
      { id: 'goku-mini-ssj', name: 'Goku Mini (Super Saiyan)', stats: 'Nivel Galáctico.' }
    ]
  },
  {
    name: 'Son Goku (Universo Cero)',
    match: '"id": "goku-universo-cero-kakumei"',
    forms: [
      { id: 'goku-kakumei-base', name: 'Son Goku (Estado Base Kakumei)', stats: 'Nivel Galáctico a Universal.' },
      { id: 'goku-kakumei-survivor', name: 'Superviviente Blanco (Modo Multiverso Cero)', stats: 'Nivel Multiversal Alto. Control trascendental de Ki en el Vacío Supremo.' }
    ]
  },

  // ─── VEGETAS ─────────────────────────────────────────────────────────
  {
    name: 'Vegeta (Llegada a la Tierra)',
    match: '"id": "vegeta-llegada-a-la-tierra-saga-saiyan-901"',
    forms: [
      { id: 'vegeta-saiyan-base', name: 'Vegeta (Estado Base / Príncipe Saiyan)', stats: 'Nivel Luna / 18.000 Unidades. Cañón Galick capaz de pulverizar la Tierra.' },
      { id: 'vegeta-saiyan-oozaru', name: 'Vegeta (Ohzaru / Mono Gigante 180.000)', stats: 'Nivel Planeta x10. Conserva el raciocinio y control táctico total.' }
    ]
  },
  {
    name: 'Vegeta (Saga Cell)',
    match: '"id": "vegeta-saga-cell-saga-androides-729"',
    forms: [
      { id: 'vegeta-cell-base', name: 'Vegeta (Estado Base Saga Cell)', stats: 'Nivel Estrella Pequeña. Entrenamiento post-Yadrat.' },
      { id: 'vegeta-cell-ssj1', name: 'Super Saiyan 1', stats: 'Nivel Sistema Solar Menor. Destruye a A-19 con el Big Bang Attack.' },
      { id: 'vegeta-cell-super', name: 'Super Vegeta (SSJ 2do Grado)', stats: 'Nivel Sistema Solar. Resplandor Final (Final Flash) que desintegra la mitad de Cell Semi-Perfecto.' }
    ]
  },
  {
    name: 'Vegeta (Saga Super)',
    match: '"id": "vegeta-saga-super-dragon-ball-super-66"',
    forms: [
      { id: 'vegeta-super-base', name: 'Vegeta (Estado Base DBS)', stats: 'Nivel Galáctico. Entrenamiento divino en el planeta de Bills.' },
      { id: 'vegeta-super-ssj', name: 'Super Saiyan 1 y 2', stats: 'Nivel Multi-Galáctico.' },
      { id: 'vegeta-super-god', name: 'Super Saiyan God (Rojo)', stats: 'Nivel Universal Menor.' },
      { id: 'vegeta-super-blue-evo', name: 'Super Saiyan Blue Evolution (Evolución Azul)', stats: 'Nivel Universal. Supera a Toppo Hakaishin con el Final Explosion divino.' },
      { id: 'vegeta-super-ultra-ego', name: 'Ultra Ego (Mega Instinto / Hakaishin)', stats: 'Nivel Multiversal Bajo. Su poder de destrucción crece cuanto más daño absorbe.' }
    ]
  },
  {
    name: 'Vegeta (Hakaishin - Kakumei)',
    match: '"id": "vegeta-kakumei"',
    forms: [
      { id: 'vegeta-kakumei-base', name: 'Vegeta (Estado Base Kakumei)', stats: 'Nivel Galáctico a Universal.' },
      { id: 'vegeta-kakumei-hakaishin', name: 'Ultra Ego / Hakaishin (Sucesor de Bills)', stats: 'Nivel Multiversal Alto. Juicio Destructor absoluto.' }
    ]
  },

  // ─── GOHANS & TRUNKS ─────────────────────────────────────────────────
  {
    name: 'Son Gohan (Saga Super)',
    match: '"id": "son-gohan-saga-super-dragon-ball-super-39"',
    forms: [
      { id: 'gohan-super-base', name: 'Son Gohan (Estado Base DBS)', stats: 'Nivel Galáctico. Reactivación marcial con Piccolo.' },
      { id: 'gohan-super-ssj', name: 'Super Saiyan 1 y 2', stats: 'Nivel Multi-Galáctico.' },
      { id: 'gohan-super-ultimate', name: 'Estado Definitivo (Ultimate Gohan)', stats: 'Nivel Universal Menor. Poder que rivaliza con Goku SSJ Blue.' },
      { id: 'gohan-super-beast', name: 'Modo Bestia (Gohan Beast)', stats: 'Nivel Multiversal Bajo. Makankosappo de ira cósmica que erradica a Cell Max.' }
    ]
  },
  {
    name: 'Trunks del Futuro (DBZ)',
    match: '"id": "trunks-del-futuro-saga-androides-771"',
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
  console.log(`[CLEAN BASE PATCH] Normalizado con éxito: ${match}`);
  return source.slice(0, arrStart) + JSON.stringify(newForms, null, 8) + source.slice(arrEnd);
}

PURE_BASE_PATCHES.forEach(p => {
  src = patchCharacter(src, p.match, p.forms);
});

fs.writeFileSync(CHARS_PATH, src, 'utf8');
console.log('[COMPLETED] Todos los Gokus, Vegetas, Gohans y Trunks tienen ahora formas base limpias y separadas.');
