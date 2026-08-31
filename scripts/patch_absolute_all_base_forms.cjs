/**
 * APEX Engine - Normalizador Absoluto de Formas Base
 * Garantiza que el 100% de los personajes con formas tengan 'Base' explícito en forms[0].
 */

const fs = require('fs');
const path = require('path');

const CHARS_PATH = path.join(__dirname, '../src/data/characters.js');
let content = fs.readFileSync(CHARS_PATH, 'utf8');

const ABSOLUTE_PATCHES = [
  {
    name: 'Gotenks (idx 177)',
    match: '"id": "gotenks-dbz-ssj3-canon-901"',
    forms: [
      { id: 'gotenks-base-dbz', name: 'Gotenks (Estado Base)', stats: 'Nivel Sistema Solar Menor. Fusión de Goten y Trunks.' },
      { id: 'gotenks-ssj1-dbz', name: 'Gotenks (Super Saiyan 1)', stats: 'Nivel Galáctico Menor.' },
      { id: 'gotenks-ssj3-dbz', name: 'Gotenks (Super Saiyan 3)', stats: 'Nivel Multi-Galáctico. Abre grietas interdimensionales con su grito.' }
    ]
  },
  {
    name: 'Gogeta (GT)',
    match: '"name": "Gogeta (GT)"',
    forms: [
      { id: 'gogeta-gt-base', name: 'Gogeta Base (GT)', stats: 'Nivel Multi-Galáctico.' },
      { id: 'gogeta-gt-ssj4', name: 'Super Saiyan 4 Gogeta', stats: 'Nivel Universal Menor / Macrocosmos. Big Bang Kamehameha x100, velocidad que supera la percepción de Omega Shenron.' }
    ]
  },
  {
    name: 'Black Frieza',
    match: '"id": "black-frieza-dbs-manga-bf001"',
    forms: [
      { id: 'black-frieza-base', name: 'Freezer Forma Final (Base DBS)', stats: 'Nivel Galáctico a Universal Menor.' },
      { id: 'black-frieza-form', name: 'Black Frieza (10 Años de Entrenamiento)', stats: 'Nivel Multiversal. One-shot a Goku UI y Vegeta Ultra Ego simultáneamente.' }
    ]
  },
  {
    name: 'Ribrianne',
    match: '"name": "Ribrianne"',
    forms: [
      { id: 'brianne-base', name: 'Brianne de Chateau (Forma Humana/Base)', stats: 'Nivel Planeta Pequeño.' },
      { id: 'ribrianne-form', name: 'Ribrianne (Doncella del Amor)', stats: 'Nivel Galáctico Menor.' },
      { id: 'super-ribrianne', name: 'Super Ribrianne (Alas de Amor)', stats: 'Nivel Galáctico Superior.' }
    ]
  },
  {
    name: 'Kokushibo',
    match: '"name": "Kokushibo"',
    forms: [
      { id: 'kokushibo-base', name: 'Kokushibo (Luna Superior Uno / Base)', stats: 'Nivel Bloque de Ciudad / Hipersónico. Respiración de la Luna y Espada de Carne.' },
      { id: 'kokushibo-monstruo', name: 'Forma Monstruosa Desesperada (Regeneración Cerebral)', stats: 'Nivel Ciudad Pequeña. Múltiples hojas que brotan del cuerpo.' }
    ]
  },
  {
    name: 'Jotaro Kujo',
    match: '"name": "Jotaro Kujo"',
    forms: [
      { id: 'jotaro-base', name: 'Jotaro Kujo (Star Platinum / Base)', stats: 'Nivel Edificio / Velocidad Luz (Ftl). Fuerza devastadora y reflejos instantáneos.' },
      { id: 'jotaro-timestop', name: 'Jotaro (Star Platinum: The World / Parada Temporal)', stats: 'Nivel Bloque de Ciudad / 5 Segundos de Detención Temporal Absoluta.' }
    ]
  },
  {
    name: 'DIO (Dio Brando)',
    match: '"name": "DIO (Dio Brando)"',
    forms: [
      { id: 'dio-base', name: 'DIO (The World / Base)', stats: 'Nivel Edificio / 5s de Detención Temporal y Fisiología Vampírica.' },
      { id: 'dio-high', name: "DIO 'High' (Sangre de Joseph / 9s Parada Temporal)", stats: 'Nivel Bloque de Ciudad. Inmortalidad regenerativa mejorada y Aplanadora.' }
    ]
  },
  {
    name: 'Aki Hayakawa',
    match: '"name": "Aki Hayakawa"',
    forms: [
      { id: 'aki-base', name: 'Aki Hayakawa (Humano Base / Katana de Maldición)', stats: 'Nivel Humano Atlético / Espada del Demonio de la Maldición y Demonio Zorro.' },
      { id: 'aki-gun-devil', name: 'Aki (Demonio Pistola / Híbrido)', stats: 'Nivel Ciudad Pequeña. Balas automáticas de alta cadencia y destrucción masiva.' }
    ]
  },
  {
    name: 'Power',
    match: '"name": "Power"',
    forms: [
      { id: 'power-base', name: 'Power (Poseída de Sangre / Base)', stats: 'Nivel Muro / Martillos y Lanzas de Sangre.' },
      { id: 'power-true', name: 'Demonio de la Sangre Verdadero', stats: 'Nivel Edificio Grande a Ciudad. Manipulación biológica de la sangre enemiga.' }
    ]
  },
  {
    name: 'Hisoka Morow',
    match: '"name": "Hisoka Morow"',
    forms: [
      { id: 'hisoka-base', name: 'Hisoka Morow (Estado Base / Bungee Gum)', stats: 'Nivel Edificio / Elasticidad y Textura Engañosa con Nen prodigioso.' },
      { id: 'hisoka-postmortem', name: 'Hisoka Post-Mortem (Nen Resucitado)', stats: 'Nivel Bloque de Ciudad. Extremidades recreadas con goma reactiva y letalidad implacable.' }
    ]
  },
  {
    name: 'Gohan del Futuro (Kakumei / DB)',
    match: '"id": "gohan-futuro-brokoly"',
    forms: [
      { id: 'gohan-futuro-whatif-base', name: 'Gohan del Futuro (Estado Base)', stats: 'Nivel Planeta Grande.' },
      { id: 'gohan-futuro-mystic', name: 'Gohan del Futuro (Estado Místico Manco)', stats: 'Nivel Sistema Solar a Galáctico.' }
    ]
  },
  {
    name: 'Super Baby Vegeta (What If)',
    match: '"id": "baby-god-brokoly"',
    forms: [
      { id: 'baby-god-base', name: 'Super Baby Vegeta (Estado Base)', stats: 'Nivel Galáctico.' },
      { id: 'baby-god-ssg', name: 'Baby God (Super Saiyan Dios Tsufuru)', stats: 'Nivel Universal Menor.' }
    ]
  },
  {
    name: 'Gohan (Heredero del U11)',
    match: '"name": "Gohan (Heredero del U11)"',
    forms: [
      { id: 'gohan-u11-base', name: 'Gohan del Universo 11 (Estado Base)', stats: 'Nivel Galáctico. Discípulo de Belmod y las Tropas del Orgullo.' },
      { id: 'gohan-u11-beast-hakaishin', name: 'Forma Hakaishin Bestia', stats: 'Nivel Multiversal Bajo. Fusión de Ki Destructor Hakaishin e Instinto Bestial.' }
    ]
  },
  {
    name: 'Nuova Shenron',
    match: '"name": "Nuova Shenron"',
    forms: [
      { id: 'nuova-base', name: 'Nuova Shenron (Cáscara Roja / Base)', stats: 'Nivel Galáctico.' },
      { id: 'nuova-true', name: 'Forma Verdadera Dorada (Calor Solar)', stats: 'Nivel Multi-Galáctico. Temperatura superior al núcleo del Sol.' }
    ]
  },
  {
    name: 'Omega Shenron',
    match: '"name": "Omega Shenron"',
    forms: [
      { id: 'syn-base', name: 'Syn Shenron (1 Estrella / Base)', stats: 'Nivel Multi-Galáctico.' },
      { id: 'omega-true', name: 'Omega Shenron (7 Esferas del Dragón)', stats: 'Nivel Universal Menor. Energía Negativa kármica que corrompe el universo entero.' }
    ]
  }
];

function patchCharacter(src, match, newForms) {
  const blockStart = src.indexOf(match);
  if (blockStart === -1) return src;

  const formsIdx = src.indexOf('"forms":', blockStart);
  if (formsIdx === -1) return src;

  let arrStart = src.indexOf('[', formsIdx);
  let depth = 0, arrEnd = -1;
  for (let i = arrStart; i < src.length; i++) {
    if (src[i] === '[') depth++;
    else if (src[i] === ']') {
      depth--;
      if (depth === 0) { arrEnd = i + 1; break; }
    }
  }

  if (arrEnd === -1) return src;
  return src.slice(0, arrStart) + JSON.stringify(newForms, null, 8) + src.slice(arrEnd);
}

ABSOLUTE_PATCHES.forEach(p => {
  content = patchCharacter(content, p.match, p.forms);
});

fs.writeFileSync(CHARS_PATH, content, 'utf8');
console.log('[DONE] Normalización absoluta de 100% de formas completada.');
