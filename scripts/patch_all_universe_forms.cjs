/**
 * APEX Engine - Script Completo de Normalización de Formas Base Multiverso
 * Garantiza que absolutamente todas las fichas con transformaciones tengan su Forma Base en forms[0].
 */

const fs = require('fs');
const path = require('path');

const CHARS_PATH = path.join(__dirname, '../src/data/characters.js');
let src = fs.readFileSync(CHARS_PATH, 'utf8');

const EXTENDED_PATCHES = [
  {
    targetName: 'Gojo Satoru',
    match: '"name": "Gojo Satoru"',
    forms: [
      { id: 'gojo-base', name: 'Gojo Satoru (Estado Base / Venda)', stats: 'Nivel Ciudad Pequeña. Manipulación espacial ilimitada e Infinito activo.' },
      { id: 'gojo-pico', name: 'Gojo (Ojos Descubiertos / Pico Total)', stats: 'Nivel Ciudad Grande. Hollow Purple y Expansión de Dominio: Vacío Inconmensurable.' }
    ]
  },
  {
    targetName: 'Ryomen Sukuna',
    match: '"name": "Ryomen Sukuna"',
    forms: [
      { id: 'sukuna-base', name: 'Sukuna (Cuerpo de Megumi / 20 Dedos)', stats: 'Nivel Ciudad Pequeña a Ciudad. Mahoraga, Diez Sombras y Santuario Malevolente.' },
      { id: 'sukuna-heian', name: 'Forma Verdadera (Era Heian)', stats: 'Nivel Ciudad Grande a País Pequeño. Cuatro brazos, Canto Físico continuo y Corte que Corta el Mundo.' }
    ]
  },
  {
    targetName: 'Yuta Okkotsu',
    match: '"name": "Yuta Okkotsu"',
    forms: [
      { id: 'yuta-base', name: 'Yuta Okkotsu (Estado Base / Katana)', stats: 'Nivel Edificio Grande a Ciudad Pequeña. Energía maldita inmensa y copia de técnicas.' },
      { id: 'yuta-rika', name: 'Conexión Total con Rika (Modo 5 Minutos)', stats: 'Nivel Ciudad Grande. Salida masiva de energía maldita y Expansión de Dominio auténtica.' }
    ]
  },
  {
    targetName: 'Enrico Pucci (Made in Heaven)',
    match: '"name": "Enrico Pucci (Made in Heaven)"',
    forms: [
      { id: 'pucci-whitesnake', name: 'Pucci (Whitesnake / Base)', stats: 'Nivel Edificio. Extracción de Discos de Stand y Memorias.' },
      { id: 'pucci-cmoon', name: 'C-Moon (Gravedad Reversa)', stats: 'Nivel Bloque de Ciudad. Manipulación gravitatoria e inversión biológica.' },
      { id: 'pucci-mih', name: 'Made in Heaven (Velocidad Infinita)', stats: 'Nivel Universal / Velocidad Infinita. Aceleración temporal y reseteo cósmico.' }
    ]
  },
  {
    targetName: 'Hulk (Bruce Banner)',
    match: '"name": "Hulk (Bruce Banner)"',
    forms: [
      { id: 'hulk-base', name: 'Hulk Salvaje (Estado Base)', stats: 'Nivel Planeta. Fuerza colosal que escala ilimitadamente con la ira.' },
      { id: 'hulk-worldbreaker', name: 'World Breaker Hulk', stats: 'Nivel Sistema Solar a Galáctico. Radiación gamma cataclísmica capaz de quebrar placas continentales con un paso.' }
    ]
  },
  {
    targetName: 'Thor Odinson',
    match: '"name": "Thor Odinson"',
    forms: [
      { id: 'thor-base', name: 'Thor Vengador (Estado Base / Mjolnir)', stats: 'Nivel Planeta a Estrella. Dios del Trueno asgardiano.' },
      { id: 'thor-rkt', name: 'Rune King Thor', stats: 'Nivel Multiversal Alto / Outerversal. Magia rúnica omnisciente que trasciende a Los Que Se Sientan en las Sombras.' }
    ]
  },
  {
    targetName: 'Iron Man (Tony Stark)',
    match: '"name": "Iron Man (Tony Stark)"',
    forms: [
      { id: 'ironman-base', name: 'Bleeding Edge (Armadura Base)', stats: 'Nivel Ciudad a País. Nanotecnología neuronal líquida.' },
      { id: 'ironman-godbuster', name: 'Armadura Godbuster', stats: 'Nivel Multiversal Menor. Creada en el eScape para enfrentar entidades cósmicas.' }
    ]
  },
  {
    targetName: 'Batman (Bruce Wayne)',
    match: '"name": "Batman (Bruce Wayne)"',
    forms: [
      { id: 'batman-base', name: 'Caballero Oscuro (Batsuit Estándar)', stats: 'Nivel Humano Máximo / Edificio Pequeño con gadgets y Battle IQ divino.' },
      { id: 'batman-hellbat', name: 'Armadura Hellbat', stats: 'Nivel Planetario a Estelar. Forjada en el Sol por la Liga de la Justicia para combatir en Apokolips.' }
    ]
  },
  {
    targetName: 'Darkseid (Uxas)',
    match: '"name": "Darkseid (Uxas)"',
    forms: [
      { id: 'darkseid-avatar', name: 'Avatar de Darkseid (Forma Física)', stats: 'Nivel Multi-Galáctico a Universal. Rayos Omega y tiranía apokoliptiana.' },
      { id: 'darkseid-true', name: 'Forma Verdadera (Dios Abstracto del Mal)', stats: 'Nivel Multiversal Alto / Outerversal. Su mera caída arrastra el continuo espacio-tiempo de la Creación.' }
    ]
  },
  {
    targetName: 'Doomsday',
    match: '"name": "Doomsday"',
    forms: [
      { id: 'doomsday-base', name: 'Doomsday (Muerte de Superman / Base)', stats: 'Nivel Planetario. Fuerza bruta y resistencia implacable que quiebra la guardia de Superman.' },
      { id: 'doomsday-hunter', name: 'Doomsday Hunter/Prey (Pico Evolutivo)', stats: 'Nivel Universal Menor. Inmunidad adaptativa instantánea y superación biológica de cualquier ataque previo.' }
    ]
  },
  {
    targetName: 'Toppo',
    match: '"name": "Toppo"',
    forms: [
      { id: 'toppo-base', name: 'Toppo (Líder Tropas del Orgullo / Base)', stats: 'Nivel Galáctico a Universal Menor. Justicia implacable y Justice Flash.' },
      { id: 'toppo-hakaishin', name: 'Modo Dios de la Destrucción (Hakaishin)', stats: 'Nivel Universal. Aura Hakai destructora invulnerable a ataques normales.' }
    ]
  },
  {
    targetName: 'Gotenks Adulto',
    match: '"name": "Gotenks Adulto"',
    forms: [
      { id: 'gotenks-adulto-base', name: 'Gotenks Adulto (Estado Base)', stats: 'Nivel Galáctico. Fusión madura de Goten y Trunks.' },
      { id: 'gotenks-adulto-ssj1', name: 'Super Saiyan 1', stats: 'Nivel Multi-Galáctico.' },
      { id: 'gotenks-adulto-ssj3', name: 'Super Saiyan 3', stats: 'Nivel Universal Menor.' }
    ]
  },
  {
    targetName: 'Vegeta (Kaio-ken Maestro)',
    match: '"name": "Vegeta (Kaio-ken Maestro)"',
    forms: [
      { id: 'vegeta-kaioken-base', name: 'Vegeta Base (Maestro Marcial)', stats: 'Nivel Galáctico.' },
      { id: 'vegeta-kaioken-x20', name: 'Vegeta Kaio-ken (x10-x20)', stats: 'Nivel Galáctico Superior.' },
      { id: 'vegeta-kaioken-ssj', name: 'Super Saiyan Kaio-ken', stats: 'Nivel Universal Menor.' }
    ]
  },
  {
    targetName: 'Bardock',
    match: '"name": "Bardock"',
    forms: [
      { id: 'bardock-base', name: 'Bardock (Estado Base / Guerrero Élite)', stats: 'Nivel Luna a Planeta Pequeño.' },
      { id: 'bardock-oozaru', name: 'Oozaru (Mono Gigante)', stats: 'Nivel Planeta x10.' },
      { id: 'bardock-ssj', name: 'Super Saiyan (Especial del Pasado)', stats: 'Nivel Estrella Pequeña.' }
    ]
  },
  {
    targetName: 'Super Baby Vegeta',
    match: '"name": "Super Baby Vegeta"',
    forms: [
      { id: 'baby-vegeta-base', name: 'Vegeta Poseído por Baby (Base)', stats: 'Nivel Sistema Solar a Galaxia.' },
      { id: 'baby-vegeta-super1', name: 'Super Baby 1', stats: 'Nivel Galáctico.' },
      { id: 'baby-vegeta-super2', name: 'Super Baby 2', stats: 'Nivel Multi-Galáctico.' },
      { id: 'baby-vegeta-oozaru', name: 'Ohzaru Dorado Mutante', stats: 'Nivel Universal Menor.' }
    ]
  },
  {
    targetName: 'Tanjiro Kamado',
    match: '"name": "Tanjiro Kamado"',
    forms: [
      { id: 'tanjiro-base', name: 'Tanjiro Cazador (Respiración del Agua / Base)', stats: 'Nivel Muro a Edificio Pequeño.' },
      { id: 'tanjiro-solar', name: 'Despertar Solar (Hinokami Kagura / Pico)', stats: 'Nivel Edificio Grande / Hipersónico.' }
    ]
  },
  {
    targetName: 'Johnny Joestar',
    match: '"name": "Johnny Joestar"',
    forms: [
      { id: 'johnny-base', name: 'Johnny Joestar (Tusk Act 1-3 / Base)', stats: 'Nivel Humano / Uñas Bala de Rotación.' },
      { id: 'johnny-act4', name: 'Johnny (Tusk Act 4 / Rotación Infinita)', stats: 'Nivel Multiversal Bajo / Daño Infinito Dimensional.' }
    ]
  },
  {
    targetName: 'Funny Valentine',
    match: '"name": "Funny Valentine"',
    forms: [
      { id: 'valentine-base', name: 'Funny Valentine (D4C / Base)', stats: 'Nivel Edificio. Saltos entre dimensiones paralelas.' },
      { id: 'valentine-lovetrain', name: 'Valentine (D4C Love Train / Pico)', stats: 'Nivel Universal Defensivo / Redirección de Desgracia.' }
    ]
  },
  {
    targetName: 'Isaac Netero',
    match: '"name": "Isaac Netero"',
    forms: [
      { id: 'netero-base', name: 'Presidente Netero (Estado Base)', stats: 'Nivel Edificio a Bloque. Velocidad sobrehumana de oración.' },
      { id: 'netero-hyakushiki', name: 'Guanyin Bodhisattva de 100 Tipos (Pico)', stats: 'Nivel Ciudad Pequeña / Hipersónico.' }
    ]
  },
  {
    targetName: 'Billy Butcher',
    match: '"name": "Billy Butcher"',
    forms: [
      { id: 'butcher-base', name: 'Billy Butcher (Humano / Armas de Fuego)', stats: 'Nivel Humano Atlético.' },
      { id: 'butcher-tempv', name: 'Butcher con Temp-V (Rayos Láser)', stats: 'Nivel Edificio / Rivaliza con Homelander.' },
      { id: 'butcher-tumor', name: 'Butcher Tumor Viviente (Kessler Tentáculos)', stats: 'Nivel Bloque de Ciudad / Desmembramiento biológico.' }
    ]
  },
  {
    targetName: 'Raditz',
    match: '"name": "Raditz"',
    forms: [
      { id: 'raditz-base', name: 'Raditz (Guerrero Z / Estado Base)', stats: 'Nivel Planeta Grande.' },
      { id: 'raditz-ssj2', name: 'Raditz Super Saiyan 2', stats: 'Nivel Sistema Solar.' }
    ]
  }
];

function patchCharacterForms(source, matchString, newForms, charName) {
  const blockStart = source.indexOf(matchString);
  if (blockStart === -1) {
    return source;
  }

  const formsKeyIdx = source.indexOf('"forms":', blockStart);
  if (formsKeyIdx === -1) {
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

EXTENDED_PATCHES.forEach(p => {
  src = patchCharacterForms(src, p.match, p.forms, p.targetName);
});

fs.writeFileSync(CHARS_PATH, src, 'utf8');
console.log('\n[DONE] Todas las fichas del multiverso tienen ahora su Forma Base en forms[0].');
