/**
 * Script para añadir los personajes específicos solicitados:
 * - Son Goku (Janemba / Fusión Reborn)
 * - Goten (New Hope - Cell Saga)
 * - Goten (New Hope - Adulto)
 * - Vegeta (DB After) con SSJ + Kaio-ken x20, Príncipe de la Destrucción (SSJ2 Majin) y SSJ3
 */

const fs = require('fs');
const path = require('path');

const CHARS_PATH = path.join(__dirname, '../src/data/characters.js');
const { INITIAL_CHARACTERS } = require('../src/data/characters.js');

const NEW_CHARACTERS = [
  {
    id: 'goku-janemba-movie12',
    name: 'Son Goku (Fusión Reborn / Infierno)',
    universe: 'Dragon Ball Z (Películas Toei)',
    tier: '3-A (Universal Menor / Macrocosmos)',
    range: 'Universal a Dimensional',
    speed: {
      reaction: 'MFTL+',
      travel: 'MFTL+',
      combat: 'MFTL+'
    },
    durability: 'Universal Menor',
    abilities: [
      'Kamehameha Instantáneo Multi-Dimensional',
      'Dragon Fist (Puño del Dragón)',
      'Super Saiyan 3 que sacude el Más Allá',
      'Danza Metamoran Perfecta'
    ],
    weaknesses: 'Drenaje acelerado de energía en SSJ3 dentro del Infierno de Janemba.',
    description: 'Versión de Goku de la película ¡Fusión! que combate a Janemba en el Infierno. Su transformación en Super Saiyan 3 hizo temblar todo el Otro Mundo, el Cielo, el Infierno y la dimensión de los vivos simultáneamente.',
    forms: [
      { id: 'goku-janemba-base', name: 'Son Goku (Estado Base / Infierno)', stats: 'Nivel Planeta Grande a Estrella. Gran destreza marcial en el Más Allá.' },
      { id: 'goku-janemba-ssj1', name: 'Son Goku (Super Saiyan 1)', stats: 'Nivel Sistema Solar Menor. Destruye fácilmente a la primera forma de Janemba.' },
      { id: 'goku-janemba-ssj2', name: 'Son Goku (Super Saiyan 2)', stats: 'Nivel Sistema Solar.' },
      { id: 'goku-janemba-ssj3', name: 'Super Saiyan 3 (Hará temblar el Macrocosmos)', stats: 'Nivel Universal Menor. Ondas de Ki que resuenan por todas las dimensiones del cosmos.' }
    ]
  },
  {
    id: 'goten-new-hope-cell-saga',
    name: 'Goten (New Hope - Saga de Cell)',
    universe: 'Dragon Ball New Hope (Fan Manga)',
    tier: '4-B a 4-A (Sistema Solar)',
    range: 'Planetario',
    speed: {
      reaction: 'FTL',
      combat: 'FTL'
    },
    durability: 'Sistema Solar',
    abilities: [
      'Kamehameha Desesperado de la Escuela Tortuga',
      'Super Saiyan Despertado por Trauma',
      'Tácticas de Guerrilla con Krilin'
    ],
    weaknesses: 'Inexperiencia infantil y dolor por la pérdida de su familia.',
    description: 'En Dragon Ball New Hope tras la masacre de los Guerreros Z, Chi-Chi entrega a Goten niño a Krilin y Roshi. Entrena en condiciones extremas y desbloquea el Super Saiyan a una edad récord para vengar a Gohan y Goku.',
    forms: [
      { id: 'goten-nh-child-base', name: 'Goten Niño (Estado Base New Hope)', stats: 'Nivel Planeta Grande. Físico endurecido por el entrenamiento con Krilin.' },
      { id: 'goten-nh-child-ssj1', name: 'Goten Niño (Super Saiyan de la Venganza)', stats: 'Nivel Sistema Solar Menor. Ira desatada contra los engendros de Cell.' }
    ]
  },
  {
    id: 'goten-new-hope-adult',
    name: 'Goten (New Hope - Adulto)',
    universe: 'Dragon Ball New Hope (Fan Manga)',
    tier: '3-C a 3-B (Galáctico)',
    range: 'Planetario a Interestelar',
    speed: {
      reaction: 'MFTL',
      combat: 'MFTL'
    },
    durability: 'Galáctico',
    abilities: [
      'Kamehameha del Solitario',
      'Super Saiyan 1 y 2 Maduro',
      'Espada de Ki del Vengador',
      'Instinto Saiyan de Supervivencia'
    ],
    weaknesses: 'Carga psicológica del exterminio de su civilización.',
    description: 'Goten ya adulto en la era tardía de Dragon Ball New Hope. Es el guerrero más poderoso de la Tierra, portando la voluntad de Goku, Gohan y Krilin para erradicar permanentemente a Cell Hiper Perfecto.',
    forms: [
      { id: 'goten-nh-adult-base', name: 'Goten Adulto (Estado Base)', stats: 'Nivel Sistema Solar. Gran madurez de combate y porte similar a Goku.' },
      { id: 'goten-nh-adult-ssj1', name: 'Goten Adulto (Super Saiyan 1)', stats: 'Nivel Sistema Solar Superior.' },
      { id: 'goten-nh-adult-ssj2', name: 'Goten Adulto (Super Saiyan 2 / Vengador Supremo)', stats: 'Nivel Galáctico. Rayos constantes y potencia capaz de quebrar la coraza de Cell.' }
    ]
  },
  {
    id: 'vegeta-db-after',
    name: 'Vegeta (DB After)',
    universe: 'Dragon Ball After (Fan Manga)',
    tier: '3-A (Universal Menor)',
    range: 'Universal',
    speed: {
      reaction: 'MFTL+',
      combat: 'MFTL+'
    },
    durability: 'Universal Menor',
    abilities: [
      'Super Saiyan + Kaio-ken x20',
      'Príncipe de la Destrucción (Residuo Majin Despertado)',
      'Super Saiyan 3 sin Drenaje de Estamina',
      'Final Flash Nuclear Comprimido'
    ],
    weaknesses: 'Tensión muscular extrema al mantener el SSJ Kaio-ken x20.',
    description: 'En el fan manga de Young Jijii, Vegeta asume la defensa de la Tierra frente a Evil Kakarotto. Desarrolla el uso del Kaio-ken sobre el Super Saiyan, domina el residuo del poder Majin en su estado Príncipe de la Destrucción (superior al SSJ2 ordinario), y perfecciona el Super Saiyan 3 sin pérdida de estamina.',
    forms: [
      { id: 'vegeta-after-base', name: 'Vegeta Base (DB After)', stats: 'Nivel Galáctico. Gran madurez marcial post-Buu y control de Ki perfeccionado.' },
      { id: 'vegeta-after-ssj-kk20', name: 'Super Saiyan + Kaio-ken x20', stats: 'Nivel Multi-Galáctico. Fusión de aura dorada y carmesí con potencia de choque abrumadora.' },
      { id: 'vegeta-after-prince-destruct', name: 'Príncipe de la Destrucción (SSJ2 Majin Potenciado)', stats: 'Nivel Universal Menor. Despierta voluntariamente el residuo de poder Majin de Babidi sin perder el control, superando con creces a cualquier SSJ2.' },
      { id: 'vegeta-after-ssj3', name: 'Super Saiyan 3 (Dominado sin Desgaste)', stats: 'Nivel Universal. Melena dorada sin cejas con control absoluto de estamina, igualando a Evil Kakarotto SSJ3.' }
    ]
  }
];

let updated = [...INITIAL_CHARACTERS];

NEW_CHARACTERS.forEach(nc => {
  const idx = updated.findIndex(c => c.id === nc.id || c.name === nc.name);
  if (idx > -1) {
    updated[idx] = nc;
    console.log(`[UPDATED] ${nc.name}`);
  } else {
    updated.push(nc);
    console.log(`[ADDED NEW] ${nc.name}`);
  }
});

const out = `// APEX Engine - Database Central de Personajes & Power Scaling
// 270+ Luchadores Canónicos, Fan Mangas, What-Ifs y OCs Oficiales

export const INITIAL_CHARACTERS = ${JSON.stringify(updated, null, 2)};
`;

fs.writeFileSync(CHARS_PATH, out, 'utf8');
console.log(`[DONE] Total personajes en base de datos: ${updated.length}`);
