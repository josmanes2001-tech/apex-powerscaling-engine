/**
 * APEX Engine - Actualizador Maestro de Fan Mangas, OCs y What-Ifs
 * Añade y perfecciona con precisión canónica:
 * 1. Brokoly350 What-Ifs (Bardock, Vegeta Kaio-ken, Saibaman Mutante, Raditz Guerrero Z, Gohan Futuro Místico, Baby God)
 * 2. Dragon Ball Kakumei (Goku U0, Vegeta Hakaishin, Gohan U11 Hakaishin Beast, Broly, Amond)
 * 3. Dragon Ball New Hope (Krillin Limit Break, Cell Hiper Perfecto, Tenshinhan, Piccolo)
 * 4. Dragon Ball Multiverse (Vegetto U16, Son Bra U16, Zen Buu U4, Gast Carcolh, Cell U17, Kakarotto U13, Raditz Místico U13)
 * 5. Dragon Ball After (Vegeta SSJ3, Gotenks Adulto SSJ3, Gohan Místico)
 * 6. OCs APEX (Rocky Zeppeli, Josh)
 */

const fs = require('fs');
const path = require('path');

const CHARS_PATH = path.join(__dirname, '../src/data/characters.js');
let src = fs.readFileSync(CHARS_PATH, 'utf8');

// Array de fichas completas y exactas de Fan Mangas & What-Ifs
const FAN_CHARACTERS = [
  // ─── BROKOLY350 WHAT-IFS ──────────────────────────────────────────────
  {
    id: 'bardock-superviviente-brokoly',
    name: 'Bardock (El Superviviente del Destino)',
    universe: 'Brokoly350 (What If)',
    tier: '4-B a 3-C (Sistema Solar a Galáctico)',
    range: 'Planetario a Interestelar',
    speed: {
      reaction: 'Sub-Relativista a FTL+',
      travel: 'Hipersónico a FTL',
      combat: 'FTL+'
    },
    durability: 'Sistema Solar a Galaxia Menor',
    abilities: [
      'Gatillo del Destino (Riot Javelin Potenciado)',
      'Precognición de Visiones Temporales',
      'Zenkai Extremo por Supervivencia',
      'Super Saiyan 1, 2 y 3'
    ],
    weaknesses: 'Impulsividad saiyan y dolores de cabeza por visiones del futuro repentinas.',
    description: 'Versión de Bardock que sobrevive al ataque de Freezer en el Planeta Vegeta, entrena en los confines del cosmos y regresa para desafiar a los tiranos del universo alcanzando hasta el Super Saiyan 3.',
    forms: [
      { id: 'bardock-brokoly-base', name: 'Bardock (Estado Base Superviviente)', stats: 'Nivel Planeta Grande. Cicatrices de combate y Ki base endurecido por cientos de batallas al borde de la muerte.' },
      { id: 'bardock-brokoly-ssj1', name: 'Bardock (Super Saiyan 1)', stats: 'Nivel Estrella Pequeña. Ira desatada por la memoria de la raza Saiyan.' },
      { id: 'bardock-brokoly-ssj2', name: 'Bardock (Super Saiyan 2)', stats: 'Nivel Sistema Solar. Rayos bio-eléctricos y velocidad que supera a los generales de Freezer.' },
      { id: 'bardock-brokoly-ssj3', name: 'Bardock (Super Saiyan 3 / Pico de Ira)', stats: 'Nivel Galáctico Menor. Melena dorada desbordante, poder destructivo colosal.' }
    ]
  },
  {
    id: 'vegeta-kaioken-brokoly',
    name: 'Vegeta (Kaio-ken Maestro)',
    universe: 'Dragon Ball What-if (Brokoly350)',
    tier: '3-B a 2-C (Galáctico a Universal Menor)',
    range: 'Universal',
    speed: {
      reaction: 'MFTL+',
      travel: 'FTL+',
      combat: 'MFTL+'
    },
    durability: 'Galáctico a Universal Menor',
    abilities: [
      'Kaio-ken Maestro Multiplicador x20',
      'Cañón Galick Potenciado con Kaio-ken',
      'Big Bang Attack Carmesí',
      'Super Saiyan Kaio-ken Definitivo'
    ],
    weaknesses: 'Riesgo de colapso muscular si mantiene el SSJ Kaio-ken prolongadamente.',
    description: 'En este What-If, Vegeta comprende la naturaleza multiplicadora del Kaio-ken durante la batalla de la Tierra y se obsesiona con perfeccionarlo, combinándolo con la transformación de Super Saiyan.',
    forms: [
      { id: 'vegeta-kaioken-base', name: 'Vegeta Base (Maestro del Kaio-ken)', stats: 'Nivel Galáctico. Control de respiración y circulación de Ki perfeccionados con rigor militar.' },
      { id: 'vegeta-kaioken-x20', name: 'Vegeta Kaio-ken (x10 - x20)', stats: 'Nivel Galáctico Superior. Aura carmesí hirviente que multiplica fuerza de choque y reflejos.' },
      { id: 'vegeta-kaioken-ssj', name: 'Super Saiyan Kaio-ken (Poder Prohibido)', stats: 'Nivel Universal Menor. Aura dorada y roja superpuesta, potencia colosal de destrucción.' }
    ]
  },
  {
    id: 'saibaman-mutante-brokoly',
    name: 'Saibaman (Mutante Evolutivo)',
    universe: 'Dragon Ball What-if (Brokoly350)',
    tier: '4-A a 3-A (Multi-Sistema Solar a Universal Menor)',
    range: 'Planetario a Cósmico',
    speed: {
      reaction: 'FTL a MFTL+',
      combat: 'MFTL+'
    },
    durability: 'Multi-Sistema Solar a Universal Menor',
    abilities: [
      'Ácido Corrosivo Atómico',
      'Absorción de Ki Orgánico',
      'Auto-Destrucción Regenerativa',
      'Mutación Celular Adaptativa'
    ],
    weaknesses: 'Inestabilidad genética temporal tras mutaciones forzadas.',
    description: 'Un Saibaman que sobrevive a la explosión de la Tierra, absorbe restos biológicos de los Guerreros Z caídos y comienza un proceso de evolución biológica que lo lleva a rivalizar con deidades.',
    forms: [
      { id: 'saibaman-base', name: 'Saibaman (Estado Base Superviviente)', stats: 'Nivel Planeta Pequeño (1.200 Unidades). Fisiología vegetal inteligente que aprende tácticas de supervivencia.' },
      { id: 'saibaman-mutado', name: 'Saibaman Mutante (Absorción de Ki)', stats: 'Nivel Sistema Solar. Crecimiento muscular, piel endurecida y garras de ácido molecular.' },
      { id: 'saibaman-divino', name: 'Saibaman (Evolución Divina / Kaiju)', stats: 'Nivel Galáctico a Universal Menor. Gigantismo biológico, regeneración atómica y energía destructora.' }
    ]
  },
  {
    id: 'raditz-redimido-brokoly',
    name: 'Raditz (Guerrero Z)',
    universe: 'Dragon Ball What-if (Brokoly350)',
    tier: '4-B a 4-A (Sistema Solar)',
    range: 'Planetario',
    speed: {
      reaction: 'FTL',
      combat: 'FTL'
    },
    durability: 'Sistema Solar',
    abilities: [
      'Double Sunday Potenciado',
      'Saturday Crash Explosivo',
      'Kaio-ken de Resistencia',
      'Super Saiyan 1 y 2'
    ],
    weaknesses: 'Orgullo saiyan inicial que a veces le hace dudar ante sus compañeros.',
    description: 'Historia alternativa donde Raditz no muere en la Tierra, recapacita tras ser perdonado por Goku, y entrena con Kaio-sama y los Guerreros Z convirtiéndose en un protector crucial de la Tierra.',
    forms: [
      { id: 'raditz-base-brokoly', name: 'Raditz Base (Guerrero Z)', stats: 'Nivel Planeta Grande. Disciplina marcial de la Escuela Tortuga y control de Ki refinado.' },
      { id: 'raditz-kk10-brokoly', name: 'Raditz (Kaio-ken x10)', stats: 'Nivel Estrella. Aura roja que compensa su límite físico natural.' },
      { id: 'raditz-ssj1-brokoly', name: 'Raditz (Super Saiyan 1)', stats: 'Nivel Estrella a Sistema Solar Menor. Larga melena dorada resplandeciente.' },
      { id: 'raditz-ssj2-brokoly', name: 'Raditz (Super Saiyan 2)', stats: 'Nivel Sistema Solar. Rayos bioeléctricos, supera el poder de Cell Perfecto.' }
    ]
  },
  {
    id: 'gohan-futuro-brokoly',
    name: 'Gohan del Futuro (Estado Místico)',
    universe: 'Dragon Ball What-if (Brokoly350)',
    tier: '3-B (Galáctico)',
    range: 'Planetario a Interestelar',
    speed: {
      reaction: 'FTL+',
      combat: 'MFTL'
    },
    durability: 'Galáctico',
    abilities: [
      'Kamehameha Místico con Un Solo Brazo',
      'Masenko Trascendental',
      'Instinto de Supervivencia Apocalíptica',
      'Poder Desbloqueado por el Sagrado Kaio'
    ],
    weaknesses: 'Falta del brazo izquierdo y fatiga en batallas de desgaste extremo.',
    description: 'En esta variante, Trunks del Futuro y Gohan logran acceder al Reino de los Kaio-shin antes de ser erradicados, permitiendo que el Anciano Kaio-shin despierte todo el potencial oculto de Gohan.',
    forms: [
      { id: 'gohan-futuro-base', name: 'Gohan del Futuro (Estado Base)', stats: 'Nivel Planeta Grande. Mirada curtida por la guerra y cicatrices de batalla.' },
      { id: 'gohan-futuro-ssj', name: 'Gohan del Futuro (Super Saiyan 1 Manco)', stats: 'Nivel Estrella. Furia contenida contra A-17 y A-18.' },
      { id: 'gohan-futuro-mystic', name: 'Gohan del Futuro (Estado Místico Despertado)', stats: 'Nivel Galáctico. Aura blanca densa, aniquila a los Androides y Cell con facilidad.' }
    ]
  },
  {
    id: 'baby-god-brokoly',
    name: 'Super Baby Vegeta (Baby God)',
    universe: 'Dragon Ball What-if (Brokoly350)',
    tier: '3-A a 2-C (Universal a Multiversal Bajo)',
    range: 'Universal',
    speed: {
      reaction: 'MFTL+',
      combat: 'MFTL+'
    },
    durability: 'Universal',
    abilities: [
      'Revenge Death Ball Divina',
      'Parásito Tsufuru Inmunitario',
      'Ki Divino Corrompido',
      'Absorción de Energía de Mortales y Dioses'
    ],
    weaknesses: 'Dependencia del huésped saiyan para canalizar el Ki divino.',
    description: 'En este escenario, Baby logra infectar a Vegeta tras el ritual del Super Saiyan God, corrompiendo la energía divina de los dioses con la tecnología parasitaria Tsufuru.',
    forms: [
      { id: 'baby-god-base', name: 'Super Baby Vegeta (Estado Base)', stats: 'Nivel Galáctico. Control parasitario de la mente y cuerpo de Vegeta.' },
      { id: 'baby-god-super2', name: 'Super Baby 2 (Poder Máximo)', stats: 'Nivel Multi-Galáctico. Hombreras de combate y peinado plateado Tsufuru.' },
      { id: 'baby-god-ssg', name: 'Baby God (Super Saiyan Dios Tsufuru)', stats: 'Nivel Universal Menor. Cabello rojizo oscuro, Revenge Death Ball con Ki destructor de deidades.' }
    ]
  },

  // ─── DRAGON BALL KAKUMEI ──────────────────────────────────────────────
  {
    id: 'goku-universo-cero-kakumei',
    name: 'Son Goku (Universo Cero)',
    universe: 'Dragon Ball Kakumei (Fan Manga)',
    tier: '2-C a 2-B (Multiversal Bajo a Multiversal)',
    range: 'Multiversal',
    speed: {
      reaction: 'Inconmensurable',
      combat: 'Inconmensurable'
    },
    durability: 'Multiversal',
    abilities: [
      'Manipulación de Ki del Vacío Primordial',
      'Ultra Instinto Despojado de Emociones',
      'Resonancia de Almas del Multiverso Cero',
      'Trascendencia Espacio-Temporal'
    ],
    weaknesses: 'Prisión de hielo cósmica sellada por el Gran Sacerdote.',
    description: 'Tras el deseo del Torneo del Poder, Goku es atrapado y sellado en el Universo 0. Allí lucha por sobrevivir contra las entidades olvidadas por Zeno, alcanzando el estado de Superviviente Blanco.',
    forms: [
      { id: 'goku-kakumei-base', name: 'Son Goku (Estado Base Kakumei)', stats: 'Nivel Galáctico a Universal. Traje rasgado y entrenamiento físico extremo en condiciones de gravedad infinita.' },
      { id: 'goku-kakumei-void', name: 'Son Goku (Ki del Alma / Prisionero del Vacío)', stats: 'Nivel Universal Superior. Canalización de energía existencial sin depender de los Ángeles.' },
      { id: 'goku-kakumei-survivor', name: 'Superviviente Blanco (Modo Trascendente)', stats: 'Nivel Multiversal Alto. Cabello blanco flotante, control de la materia y el vacío cósmico.' }
    ]
  },
  {
    id: 'vegeta-kakumei',
    name: 'Vegeta (Hakaishin)',
    universe: 'Dragon Ball Kakumei (Fan Manga)',
    tier: '2-C a 2-B (Multiversal Bajo a Multiversal)',
    range: 'Multiversal',
    speed: {
      reaction: 'MFTL+',
      combat: 'MFTL+'
    },
    durability: 'Multiversal',
    abilities: [
      'Hakai Absoluto a Escala Multiversal',
      'Ultra Ego Sin Límites',
      'Resplandor Final del Dios de la Destrucción',
      'Inmunidad a Técnicas de Borrado Menores'
    ],
    weaknesses: 'Deterioro físico acumulativo al recibir daño voluntariamente para potenciar su Ultra Ego.',
    description: 'Vegeta asume el manto formal como sucesor de Bills y Hakaishin del Universo 7 para liderar la guerra contra los dioses traidores de los universos reanimados.',
    forms: [
      { id: 'vegeta-kakumei-base', name: 'Vegeta (Estado Base Kakumei)', stats: 'Nivel Galáctico. Capa y pendientes de Dios de la Destrucción.' },
      { id: 'vegeta-kakumei-ultra-ego', name: 'Vegeta (Ultra Ego / Hakaishin Activo)', stats: 'Nivel Multiversal Bajo. Aura púrpura ardiente de Hakai puro.' },
      { id: 'vegeta-kakumei-supreme', name: 'Hakaishin Total (Juicio Destructor Universal)', stats: 'Nivel Multiversal Alto. Destruye conceptos existenciales con la punta de los dedos.' }
    ]
  },
  {
    id: 'gohan-heredero-u11-kakumei',
    name: 'Son Gohan (Heredero del U11)',
    universe: 'Dragon Ball Kakumei (Fan Manga)',
    tier: '2-C a 2-B (Multiversal)',
    range: 'Universal a Multiversal',
    speed: {
      reaction: 'MFTL+',
      combat: 'MFTL+'
    },
    durability: 'Multiversal',
    abilities: [
      'Makankosappo de la Justicia Hakaishin',
      'Juicio de las Tropas del Orgullo',
      'Modo Bestia con Ki Destructor',
      'Inteligencia Estratégica Suprema'
    ],
    weaknesses: 'Riesgo de perder la calma ante la muerte de inocentes.',
    description: 'Gohan es enviado a entrenar al Universo 11 bajo la tutela de Belmod, Toppo y Jiren, fusionando el código moral de la Justicia con su propio Modo Bestia destructivo.',
    forms: [
      { id: 'gohan-u11-base', name: 'Son Gohan (Estado Base U11)', stats: 'Nivel Galáctico. Uniforme de las Tropas del Orgullo y porte marcial riguroso.' },
      { id: 'gohan-u11-justice', name: 'Son Gohan (Justicia Sagrada / Toppo Style)', stats: 'Nivel Universal. Salida de Ki concentrado en justicia fulminante.' },
      { id: 'gohan-u11-beast-hakaishin', name: 'Forma Hakaishin Bestia (Pico Kakumei)', stats: 'Nivel Multiversal Alto. Cabello plateado alargado y aura carmesí oscura de Hakai.' }
    ]
  },
  {
    id: 'broly-kakumei',
    name: 'Broly (Kakumei)',
    universe: 'Dragon Ball Kakumei (Fan Manga)',
    tier: '2-C a 2-B (Multiversal)',
    range: 'Universal',
    speed: {
      reaction: 'MFTL+',
      combat: 'MFTL+'
    },
    durability: 'Multiversal',
    abilities: [
      'Gigantic Roar Destructor Cósmico',
      'Aura Legendaria de Crecimiento Infinito',
      'Fisiología Saiyan Primitiva Desatada'
    ],
    weaknesses: 'Frenesí berserker si no es guiado por Cheelai o Lemo.',
    description: 'Broly es reclutado por los Guerreros Z en el Planeta Vampa para enfrentar la invasión del Multiverso Cero, dominando su Ki legendario sin perder la conciencia.',
    forms: [
      { id: 'broly-kakumei-base', name: 'Broly (Estado Base Kakumei)', stats: 'Nivel Galáctico. Piel endurecida en Vampa y entrenamiento mental con Cheelai.' },
      { id: 'broly-kakumei-lssj', name: 'Super Saiyan Legendario (Despertar de la Ira)', stats: 'Nivel Multiversal Alto. Torbellino verde esmeralda de energía infinita que sacude el espacio-tiempo.' }
    ]
  },
  {
    id: 'amond-kakumei',
    name: 'Amond',
    universe: 'Dragon Ball Kakumei (Fan Manga)',
    tier: '2-B (Multiversal)',
    range: 'Multiversal',
    speed: {
      reaction: 'Inconmensurable',
      combat: 'Inconmensurable'
    },
    durability: 'Multiversal',
    abilities: [
      'Reescritura de Leyes Cósmicas',
      'Desintegración de Dimensiones Paralelas',
      'Aura de la Reina del Multiverso Perdido'
    ],
    weaknesses: 'Arrogancia divina ante la perseverancia de los mortales.',
    description: 'Entidad suprema de los universos olvidados que busca destronar a Zeno y reconfigurar la jerarquía de los dioses con poder primordial.',
    forms: [
      { id: 'amond-base', name: 'Amond (Forma Sellada)', stats: 'Nivel Universal. Túnica ceremonial y control de la gravedad cósmica.' },
      { id: 'amond-true', name: 'Avatar Primordial (Diosa de la Destrucción U0)', stats: 'Nivel Multiversal Alto. Manifestación de materia oscura primordial capaz de colapsar galaxias enteras.' }
    ]
  },

  // ─── DRAGON BALL NEW HOPE ─────────────────────────────────────────────
  {
    id: 'krillin-new-hope',
    name: 'Krillin (Dragon Ball New Hope)',
    universe: 'Dragon Ball New Hope (Fan Manga)',
    tier: '4-B a 3-C (Sistema Solar a Galáctico)',
    range: 'Planetario',
    speed: {
      reaction: 'FTL+',
      combat: 'FTL+'
    },
    durability: 'Sistema Solar a Galaxia Menor',
    abilities: [
      'Kienzan Séxtuple de Precisión Láser',
      'Condensador Limitador Cibernético',
      'Kaio-ken Humano Máximo Poder',
      'Kamehameha de Energía Comprimida'
    ],
    weaknesses: 'Sobrecalentamiento del condensador cibernético tras usar el Kaio-ken máximo.',
    description: 'Tras la muerte de Gohan y los Guerreros Z a manos de Cell, Krillin se convierte en el último bastión de la Tierra, modificando su cuerpo con prótesis cibernéticas para soportar el Kaio-ken divino.',
    forms: [
      { id: 'krillin-nh-base', name: 'Krillin (Forma Base / Condensador Limitador)', stats: 'Nivel Sistema Solar Menor. Circuitos cibernéticos de limitación que evitan que su Ki humano desgarre sus músculos.' },
      { id: 'krillin-nh-unleashed', name: 'Krillin (Poder Liberado / Sin Condensador)', stats: 'Nivel Sistema Solar. Retirada de los limitadores, velocidad extrema y Kienzan reforzado.' },
      { id: 'krillin-nh-kaioken', name: 'Krillin (Kaio-ken al Límite / Nivel Dios)', stats: 'Nivel Galáctico Menor. Técnica final que sobrecarga sus circuitos para igualar a Cell Hiper Perfecto.' }
    ]
  },
  {
    id: 'cell-hiper-perfecto-new-hope',
    name: 'Cell (Hiper Perfecto)',
    universe: 'Dragon Ball New Hope (Fan Manga)',
    tier: '3-C (Galáctico)',
    range: 'Sistema Solar a Interestelar',
    speed: {
      reaction: 'MFTL',
      combat: 'MFTL'
    },
    durability: 'Galáctico',
    abilities: [
      'Regeneración Celular a Nivel Atómico',
      'Absorción de Células de Deidades',
      'Kamehameha Solar Hiper Perfecto',
      'Zenkai Ilimitado'
    ],
    weaknesses: 'Confianza absoluta en su invulnerabilidad genética.',
    description: 'Versión de Cell que extermina a Gohan en los Cell Games y gobierna la Tierra durante años, absorbiendo energía residual de todo el planeta hasta alcanzar la hiper perfección.',
    forms: [
      { id: 'cell-nh-base', name: 'Cell Perfecto (Resucitado)', stats: 'Nivel Sistema Solar Superior. Vencedor de los Cell Games, aura dorada con relámpagos constantes.' },
      { id: 'cell-nh-hyper', name: 'Cell (Forma Hiper Perfecta)', stats: 'Nivel Galáctico. Piel oscura reforzada, coraza impenetrable y núcleo celular miniaturizado.' }
    ]
  },
  {
    id: 'tenshinhan-new-hope',
    name: 'Tenshinhan (New Hope)',
    universe: 'Dragon Ball New Hope (Fan Manga)',
    tier: '4-A (Multi-Sistema Solar)',
    range: 'Planetario',
    speed: {
      reaction: 'FTL',
      combat: 'FTL'
    },
    durability: 'Sistema Solar',
    abilities: [
      'Shin Kikoho Definitivo al Límite de Vida',
      'Técnica de Cuatro Cuerpos de Combate',
      'Visión del Tercer Ojo Trascendental'
    ],
    weaknesses: 'Consumo acelerado de su propia fuerza vital al disparar el Kikoho.',
    description: 'Tenshinhan lucha junto a Krillin como veterano de guerra, llevando el Shin Kikoho a un nivel destructivo capaz de pulverizar las barreras de Cell.',
    forms: [
      { id: 'tenshinhan-nh-base', name: 'Tenshinhan (Veterano de la Muerte / Base)', stats: 'Nivel Planeta Grande. Cuerpo endurecido por décadas de entrenamiento solitario en las montañas.' },
      { id: 'tenshinhan-nh-kikoho', name: 'Tenshinhan (Shin Kikoho Extremo / Sacrificio)', stats: 'Nivel Multi-Sistema Solar. Disparo continuo a quemarropa que contiene a monstruos galácticos.' }
    ]
  },
  {
    id: 'piccolo-new-hope',
    name: 'Piccolo (New Hope)',
    universe: 'Dragon Ball New Hope (Fan Manga)',
    tier: '4-A (Multi-Sistema Solar)',
    range: 'Planetario',
    speed: {
      reaction: 'FTL',
      combat: 'FTL'
    },
    durability: 'Multi-Sistema Solar',
    abilities: [
      'Makankosappo Espiral de Penetración Celular',
      'Regeneración Namekiana Aumentada',
      'Herencia de Sabiduría Ancestral'
    ],
    weaknesses: 'Daño crítico en la antena y núcleo de regeneración.',
    description: 'El estratega principal de la resistencia humana frente al terror de Cell, liderando el entrenamiento del joven Goten.',
    forms: [
      { id: 'piccolo-nh-base', name: 'Piccolo (Maestro Namekiano / Base)', stats: 'Nivel Sistema Solar Menor. Concentración mental absoluta y ropa pesada de entrenamiento.' },
      { id: 'piccolo-nh-fused', name: 'Piccolo (Poder Desatado de Namek)', stats: 'Nivel Multi-Sistema Solar. Despierta el Ki latente de la raza guerrera namekiana.' }
    ]
  },

  // ─── DRAGON BALL MULTIVERSE (DBM) ─────────────────────────────────────
  {
    id: 'vegetto-u16-dbm',
    name: 'Vegetto (Universo 16)',
    universe: 'Dragon Ball Multiverse (Fan Manga)',
    tier: '3-A a 2-C (Universal a Multiversal Bajo)',
    range: 'Universal',
    speed: {
      reaction: 'MFTL+',
      combat: 'MFTL+'
    },
    durability: 'Multiversal Bajo',
    abilities: [
      'Espada de Espíritu de Ki Condensado',
      'Final Kamehameha Multiversal',
      'Barrera de Ki Inquebrantable',
      'Super Saiyan 1, 2 y 3'
    ],
    weaknesses: 'Consumo acelerado de energía en SSJ3 y miedo a perder el control de su propia hija Bra.',
    description: 'En el Universo 16 de DBM, Vegetto nunca se desfusionó dentro del cuerpo de Buu. Vive como un ser supremo, casado con Bulma y padre de Son Bra.',
    forms: [
      { id: 'vegetto-u16-base', name: 'Vegetto (Estado Base DBM)', stats: 'Nivel Galáctico a Multi-Galáctico. Fusión Pothala permanente, poder base que humilla a Gohan Místico.' },
      { id: 'vegetto-u16-ssj1', name: 'Super Vegetto (SSJ1)', stats: 'Nivel Universal Menor. Destrucción fulminante de amenazas cósmicas.' },
      { id: 'vegetto-u16-ssj2', name: 'Super Vegetto 2 (SSJ2)', stats: 'Nivel Universal. Duelo épico contra Broly del Universo 20.' },
      { id: 'vegetto-u16-ssj3', name: 'Super Vegetto 3 (SSJ3 / Pico DBM)', stats: 'Nivel Multiversal Bajo. Máximo poder del torneo DBM, capaz de hacer temblar el estadio multidimensional.' }
    ]
  },
  {
    id: 'son-bra-u16-dbm',
    name: 'Son Bra (Universo 16)',
    universe: 'Dragon Ball Multiverse (Fan Manga)',
    tier: '3-B a 3-A (Galáctico a Universal Menor)',
    range: 'Planetario a Universal',
    speed: {
      reaction: 'MFTL',
      combat: 'MFTL'
    },
    durability: 'Universal Menor',
    abilities: [
      'Espada de Ki Pothala Heredada',
      'Big Bang Buster',
      'Teletransporte Instantáneo Táctico',
      'Furia Majin Desatada'
    ],
    weaknesses: 'Inestabilidad emocional y remordimiento por sus actos bajo el control de Babidi.',
    description: 'Hija prodigio de Vegetto y Bulma. Posee un potencial que aterra a su propio padre y que la lleva a cometer una masacre durante la rebelión de Babidi.',
    forms: [
      { id: 'bra-u16-base', name: 'Son Bra (Estado Base)', stats: 'Nivel Sistema Solar. Hija de Vegetto con reflejos prodigiosos.' },
      { id: 'bra-u16-ssj1', name: 'Son Bra (Super Saiyan 1)', stats: 'Nivel Galáctico. Supera con creces a Gotenks SSJ3 de Z.' },
      { id: 'bra-u16-ssj2', name: 'Son Bra (Super Saiyan 2)', stats: 'Nivel Multi-Galáctico a Universal Menor. Poder inmenso pero difícil de controlar emocionalmente.' },
      { id: 'bra-u16-majin', name: 'Majin Bra (SSJ2 Potenciada por Babidi)', stats: 'Nivel Universal Menor. Masacre implacable con espadas de Ki simultáneas contra los participantes del torneo.' }
    ]
  },
  {
    id: 'zen-buu-u4-dbm',
    name: 'Hyper Buu (Zen Buu)',
    universe: 'Dragon Ball Multiverse (Fan Manga)',
    tier: '3-A a 2-C (Universal a Multiversal Bajo)',
    range: 'Universal',
    speed: {
      reaction: 'MFTL+',
      combat: 'MFTL+'
    },
    durability: 'Universal',
    abilities: [
      'Absorción Total de Millones de Civilizaciones',
      'Omnipresencia de Células de Chicle en Todo el Estadio',
      'Magia Suprema y Hechizos de Reversión',
      'Conocimiento Tecnológico y Científico Absoluto'
    ],
    weaknesses: 'Busca el entretenimiento por encima de la victoria rápida.',
    description: 'Majin Buu del Universo 4 que absorbió a Goku, Vegeta, Gohan, Piccolo, dioses y científicos de su universo. Es el ser más versátil, sabio y peligroso de DBM.',
    forms: [
      { id: 'zenbuu-base', name: 'Zen Buu (Forma Original U4)', stats: 'Nivel Multi-Galáctico a Universal. Cuerpo elástico que alberga la mente de los mayores genios del cosmos.' },
      { id: 'zenbuu-omni', name: 'Zen Buu (Omni-Absorción Multiversal)', stats: 'Nivel Multiversal Bajo. Clones ocultos en cada grano de polvo, domina la magia de los Kaio-shin y la tecnología Vargas.' }
    ]
  },
  {
    id: 'gast-carcolh-u7-dbm',
    name: 'Gast Carcolh',
    universe: 'Dragon Ball Multiverse (Fan Manga)',
    tier: '3-A (Universal Menor)',
    range: 'Universal',
    speed: {
      reaction: 'MFTL',
      combat: 'MFTL'
    },
    durability: 'Universal Menor',
    abilities: [
      'Fusión de Toda la Raza Namekiana',
      'Magia de Desactivación de Super Saiyan',
      'Anulación de Fusión y Sellado de Ki',
      'Regeneración y Telepatía Planetaria'
    ],
    weaknesses: 'El peso de las almas de su pueblo en su conciencia.',
    description: 'El Gran Super Namekiano del Universo 7, nacido de la fusión de todos los habitantes de Namek para derrotar a Freezer. Posee una magia única anti-Saiyan.',
    forms: [
      { id: 'gast-base', name: 'Gast Carcolh (El Gran Namekiano)', stats: 'Nivel Universal Menor. Sabiduría de millones de monjes y guerreros namekianos.' },
      { id: 'gast-magic', name: 'Gast Carcolh (Magia Ancestral / Anti-Ki)', stats: 'Nivel Universal. Capaz de cancelar transformaciones y paralizar a Vegetto SSJ3 con un solo gesto.' }
    ]
  },
  {
    id: 'cell-u17-dbm',
    name: 'Cell (Universo 17)',
    universe: 'Dragon Ball Multiverse (Fan Manga)',
    tier: '3-B (Galáctico)',
    range: 'Planetario a Interestelar',
    speed: {
      reaction: 'MFTL',
      combat: 'MFTL'
    },
    durability: 'Galáctico',
    abilities: [
      'Zenkai Ilimitado Post-Cell Games',
      'Engendros Cell Jr. Nivel SSJ2',
      'Regeneración Atómica Instantánea',
      'Kamehameha Solar Perfeccionado'
    ],
    weaknesses: 'Miedo visceral a ser vaporizado por completo.',
    description: 'Cell del Universo 17 que mató a Gohan en los Cell Games y absorbió a los Guerreros Z restantes, acumulando Zenkais continuos a lo largo de décadas.',
    forms: [
      { id: 'cell-u17-base', name: 'Cell (Perfección Vencedora U17)', stats: 'Nivel Sistema Solar Superior. Experiencia en combate acumulada y múltiples Cell Juniors.' },
      { id: 'cell-u17-zenkai', name: 'Cell (Perfección Absoluta / Zenkai Supremo)', stats: 'Nivel Galáctico. Núcleo celular microscópico reforzado y poder parejo a SSJ3.' }
    ]
  },
  {
    id: 'kakarotto-u13-dbm',
    name: 'Kakarotto (Universo 13)',
    universe: 'Dragon Ball Multiverse (Fan Manga)',
    tier: '4-B a 4-A (Sistema Solar)',
    range: 'Planetario',
    speed: {
      reaction: 'FTL',
      combat: 'FTL'
    },
    durability: 'Sistema Solar',
    abilities: [
      'Inmortalidad Concedida por Shenron',
      'Super Saiyan 1, 2 y 3 Desquiciado',
      'Tácticas Asesinas Despiadadas'
    ],
    weaknesses: 'Mente psicópata y burlona que descuida la defensa.',
    description: 'Goku del Universo 13 que nunca se golpeó la cabeza. Exterminó a la humanidad, conquistó la Tierra y lidera junto al Rey Vegeta el imperio Saiyan.',
    forms: [
      { id: 'kakarotto-u13-base', name: 'Kakarotto (Estado Base Asesino)', stats: 'Nivel Planeta. Actitud despiadada y sed de sangre saiyan.' },
      { id: 'kakarotto-u13-ssj1', name: 'Kakarotto (Super Saiyan 1)', stats: 'Nivel Estrella.' },
      { id: 'kakarotto-u13-ssj2', name: 'Kakarotto (Super Saiyan 2)', stats: 'Nivel Sistema Solar Menor.' },
      { id: 'kakarotto-u13-ssj3', name: 'Kakarotto (Super Saiyan 3 Inmortal)', stats: 'Nivel Sistema Solar Superior. Risa histérica y regeneración por su deseo de inmortalidad.' }
    ]
  },
  {
    id: 'raditz-u13-dbm',
    name: 'Raditz (Universo 13)',
    universe: 'Dragon Ball Multiverse (Fan Manga)',
    tier: '4-A a 3-C (Sistema Solar a Galáctico)',
    range: 'Planetario',
    speed: {
      reaction: 'FTL+',
      combat: 'FTL+'
    },
    durability: 'Galáctico Menor',
    abilities: [
      'Poder Místico Desbloqueado por Ro Kaio-shin',
      'Doble Domingo Definitivo',
      'Tácticas de Guerrilla Saiyan'
    ],
    weaknesses: 'Complejo de inferioridad frente a Vegeta y Kakarotto.',
    description: 'Raditz del Universo 13 que, tras años siendo el eslabón débil de su equipo, consigue que el Anciano Kaio-shin despierte su potencial oculto en el torneo DBM.',
    forms: [
      { id: 'raditz-u13-base', name: 'Raditz (Estado Base U13)', stats: 'Nivel Planeta Pequeño. Guerrero veterano del imperio de Vegeta.' },
      { id: 'raditz-u13-mystic', name: 'Raditz (Estado Místico Desbloqueado)', stats: 'Nivel Sistema Solar a Galáctico. Aura blanca resplandeciente, humilla a enemigos que antes lo superaban.' }
    ]
  },

  // ─── DRAGON BALL AFTER (YOUNG JIJII) ──────────────────────────────────
  {
    id: 'vegeta-db-after',
    name: 'Vegeta (DB After)',
    universe: 'Dragon Ball After (Fan Manga)',
    tier: '3-A (Universal Menor)',
    range: 'Universal',
    speed: {
      reaction: 'MFTL',
      combat: 'MFTL'
    },
    durability: 'Universal Menor',
    abilities: [
      'Final Flash Atómico',
      'Super Saiyan 3 sin Desgaste',
      'Big Bang Attack Definitivo'
    ],
    weaknesses: 'Orgullo saiyan frente a la sombra de Goku.',
    description: 'En el fan manga de Young Jijii tras la partida de Goku con Shenron, Vegeta entrena hasta dominar el Super Saiyan 3 protegiendo la paz de la Tierra.',
    forms: [
      { id: 'vegeta-after-base', name: 'Vegeta Base (DB After)', stats: 'Nivel Galáctico. Gran madurez marcial y control de Ki refinado.' },
      { id: 'vegeta-after-ssj2', name: 'Vegeta Super Saiyan 2', stats: 'Nivel Multi-Galáctico.' },
      { id: 'vegeta-after-ssj3', name: 'Vegeta Super Saiyan 3 (Dominado)', stats: 'Nivel Universal Menor. Melena dorada sin cejas, dominio total sin pérdida excesiva de estamina.' }
    ]
  },
  {
    id: 'gotenks-adulto-db-after',
    name: 'Gotenks Adulto',
    universe: 'Dragon Ball After (Fan Manga)',
    tier: '3-A (Universal Menor)',
    range: 'Universal',
    speed: {
      reaction: 'MFTL',
      combat: 'MFTL'
    },
    durability: 'Universal Menor',
    abilities: [
      'Super Ghost Kamikaze Attack Adulto',
      'Galactic Donut Atómico',
      'Super Saiyan 3 Adulto'
    ],
    weaknesses: 'Límite de tiempo de 30 minutos de la Danza Metamoran.',
    description: 'Goten y Trunks adultos perfeccionan la Fusión Metamoran en Dragon Ball After para combatir a las nuevas amenazas cósmicas.',
    forms: [
      { id: 'gotenks-adulto-base', name: 'Gotenks Adulto (Estado Base)', stats: 'Nivel Galáctico. Combinación madura de los talentos de Goten y Trunks.' },
      { id: 'gotenks-adulto-ssj1', name: 'Gotenks Adulto (Super Saiyan 1)', stats: 'Nivel Multi-Galáctico.' },
      { id: 'gotenks-adulto-ssj3', name: 'Gotenks Adulto (Super Saiyan 3)', stats: 'Nivel Universal Menor. Poder destructivo abrumador con fantasmas kamikazes mejorados.' }
    ]
  },
  {
    id: 'son-gohan-db-after',
    name: 'Son Gohan (DB After)',
    universe: 'Dragon Ball After (Fan Manga)',
    tier: '3-A (Universal Menor)',
    range: 'Universal',
    speed: {
      reaction: 'MFTL',
      combat: 'MFTL'
    },
    durability: 'Universal Menor',
    abilities: [
      'Kamehameha Místico Definitivo',
      'Masenko Potenciado',
      'Reflejos Místicos Trascendentes'
    ],
    weaknesses: 'Deberes académicos y familiares.',
    description: 'Gohan reactiva su entrenamiento en Dragon Ball After, desbloqueando un nivel místico superior para proteger a su familia.',
    forms: [
      { id: 'gohan-after-base', name: 'Son Gohan Base (DB After)', stats: 'Nivel Sistema Solar.' },
      { id: 'gohan-after-mystic', name: 'Son Gohan (Estado Místico Desatado)', stats: 'Nivel Galáctico a Universal Menor. Aura blanca cegadora y mirada implacable.' }
    ]
  },

  // ─── OCS APEX ENGINE ──────────────────────────────────────────────────
  {
    id: 'rocky-white-zeppeli',
    name: 'Rocky White Zeppeli',
    universe: "JoJo's Bizarre Adventure (Linaje Zeppeli)",
    tier: '8-C a 2-C (Edificio a Universal Menor)',
    range: 'Medio a Dimensional',
    speed: {
      reaction: 'FTL a Infinito',
      combat: 'FTL a Infinito'
    },
    durability: 'Edificio a Universal Menor',
    abilities: [
      'Hamon Solar de Alta Frecuencia',
      'Técnica de Rotación Dorada (Spin de Acero)',
      'Stand: White Echoes (Ecos del Vacío)',
      'Rotación Infinita Dimensional'
    ],
    weaknesses: 'Fisiología humana base si es tomado por sorpresa antes de manifestar el Spin.',
    description: 'Heredero legendario del linaje Zeppeli. Combina la respiración Hamon ancestral con la Rotación Dorada de las esferas de acero y su Stand White Echoes.',
    forms: [
      { id: 'rocky-base', name: 'Rocky Zeppeli (Hamon & Spin Base)', stats: 'Nivel Edificio. Esferas de acero y técnica de respiración Hamon que cura y ataca.' },
      { id: 'rocky-spin-infinite', name: 'Rocky (Stand: White Echoes / Rotación Infinita)', stats: 'Nivel Universal Menor / Daño Dimensional. Ondas de rotación que atraviesan dimensiones paralelas y escudos absolutos.' }
    ]
  },
  {
    id: 'josh-apex-oc',
    name: 'Josh',
    universe: 'Universo Híbrido (APEX Original)',
    tier: '9-B a 2-C (Muro a Multiversal Bajo)',
    range: 'Cuerpo a Cuerpo a Multiversal',
    speed: {
      reaction: 'Hipersónico a Inconmensurable',
      combat: 'Inconmensurable'
    },
    durability: 'Multiversal Bajo',
    abilities: [
      'Manipulación de Matrices Probabilísticas',
      'Sobrecarga de Datos de la Bóveda Cuántica',
      'Anulación de Hax y Distorsión de Reglas',
      'Resonancia del Motor APEX'
    ],
    weaknesses: 'Consumo de energía cognitiva al sincronizar múltiples dimensiones.',
    description: 'Guardián del Nexo Multiversal de APEX. Capaz de alterar probabilidades de combate, neutralizar habilidades invulnerables y reescribir parámetros de batalla.',
    forms: [
      { id: 'josh-base', name: 'Josh (Forma Humana / Nexo)', stats: 'Nivel Muro a Edificio. Percepción cuántica y reflejos tácticos.' },
      { id: 'josh-nexo', name: 'Josh (Forma Nexo Multiversal / Sobrecarga de Datos)', stats: 'Nivel Multiversal Bajo. Resonancia directa con el motor cuántico de APEX, borrado de paradojas temporales.' }
    ]
  }
];

// Reemplazar o insertar los personajes en characters.js
const { INITIAL_CHARACTERS } = require('../src/data/characters.js');

let updated = [...INITIAL_CHARACTERS];

FAN_CHARACTERS.forEach(fc => {
  const existingIdx = updated.findIndex(c => c.id === fc.id || c.name === fc.name);
  if (existingIdx > -1) {
    updated[existingIdx] = fc;
    console.log(`[UPDATED] ${fc.name}`);
  } else {
    updated.push(fc);
    console.log(`[ADDED NEW] ${fc.name}`);
  }
});

const out = `// APEX Engine - Database Central de Personajes & Power Scaling
// 270+ Luchadores Canónicos, Fan Mangas, What-Ifs y OCs Oficiales

export const INITIAL_CHARACTERS = ${JSON.stringify(updated, null, 2)};
`;

fs.writeFileSync(CHARS_PATH, out, 'utf8');
console.log(`\n[SUCCESS] Total de personajes en la base de datos: ${updated.length}`);
