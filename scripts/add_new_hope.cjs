const fs = require('fs');
const path = require('path');

const newCharacters = [
  // ================= DRAGON BALL NEW HOPE =================
  {
    "id": "tenshinhan-new-hope",
    "name": "Tenshinhan (New Hope)",
    "alias": "El Guerrero Iluminado / Maestro del Kikoho",
    "universe": "Dragon Ball New Hope (Fan Manga)",
    "saga": "Saga de Cell Hiper Perfecto",
    "version": "Post-Entrenamiento Habitación del Tiempo",
    "tier": "Tier 3-C | Nivel Galaxia",
    "ap": "Nivel Galaxia. Al igual que Krillin, Tenshinhan empujó los límites humanos más allá de lo concebible. Al dominar el Kikoho Supremo y su Ki espiritual, su poder de ataque concentrado puede rivalizar e incluso lastimar a seres del calibre de Cell Hiper Perfecto.",
    "range": "Planetario a Galáctico.",
    "speed": { "combat": "MFTL+", "reaction": "MFTL+", "travel": "MFTL+", "attack": "Velocidad lumínica absoluta." },
    "strength": { "striking": "Clase Galaxia.", "lifting": "Clase Sistema Solar." },
    "durability": "Nivel Galaxia. Acostumbrado a ignorar el daño orgánico por pura meditación.",
    "stamina": "Extrema, aunque el uso excesivo del Nuevo Kikoho drena su fuerza vital.",
    "battleIQ": "Maestro de Artes Marciales Absoluto. Creador de técnicas letales.",
    "haxTags": [ "Daño de Energía Vital (Kikoho)", "Multiplicación de Cuerpos", "Visión Omnidireccional" ],
    "arsenal": {
      "basicAttacks": "Golpes letales a puntos de presión que bloquean el Ki enemigo.",
      "superAttacks": [
        { "name": "Kikoho Neo-Espiritual", "desc": "Consume fragmentos de su fuerza vital para lanzar ráfagas cuadradas que empujan a seres universalmente más fuertes.", "cost": "20% HP, 10% Ki" },
        { "name": "Dodonpa Perforante Estelar", "desc": "Rayo amarillo concentrado capaz de atravesar barreras celulares densas.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Kikoho Hiper Perfecto (Sacrificio)", "desc": "Su técnica definitiva. Drena todo su Ki y vitalidad para lanzar un Kikoho continuo capaz de desintegrar a un enemigo clase Galaxia.", "cost": "99% HP / Muerte" }
      ],
      "passives": [
        { "name": "Tercer Ojo Iluminado", "desc": "Inmunidad pasiva a ilusiones, bengalas solares y ataques por la espalda.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "tien-new-hope", "name": "Tenshinhan Humano Trascendido", "stats": "Nivel Galaxia." } ],
    "feats": [
      "Retuvo a Cell Hiper Perfecto usando el Kikoho Neo-Espiritual, superando a Super Saiyans con creces."
    ],
    "psychology": "Estricto, disciplinado y dispuesto a morir en cualquier instante para proteger la Tierra.",
    "weaknesses": "Sus técnicas más poderosas acortan drásticamente su esperanza de vida y HP."
  },
  {
    "id": "piccolo-new-hope",
    "name": "Piccolo (New Hope)",
    "alias": "El Sabio Namekiano / Dios de la Tierra",
    "universe": "Dragon Ball New Hope (Fan Manga)",
    "saga": "Saga de Cell Hiper Perfecto",
    "version": "Súper Namekiano Evolucionado",
    "tier": "Tier 3-C | Nivel Galaxia",
    "ap": "Nivel Galaxia. Piccolo ha meditado y asimilado a la perfección el poder de Kami y Nail. En New Hope, su poder supera al de Gohan SSJ2 (versión adolescente), logrando herir a las criaturas de Cell.",
    "range": "Galáctico.",
    "speed": { "combat": "MFTL+", "reaction": "MFTL+", "travel": "MFTL+", "attack": "Velocidad MFTL+." },
    "strength": { "striking": "Clase Galaxia.", "lifting": "Clase Galaxia." },
    "durability": "Nivel Galaxia. Regeneración celular masiva.",
    "stamina": "Muy Alta. Usa la meditación en combate para recuperar energía.",
    "battleIQ": "El mejor táctico de los Guerreros Z en New Hope.",
    "haxTags": [ "Regeneración Avanzada", "Magia Namekiana Materializadora", "Lectura de Mentes" ],
    "arsenal": {
      "basicAttacks": "Estiramiento de extremidades y combate brutal y preciso.",
      "superAttacks": [
        { "name": "Granada Infernal Continua", "desc": "Atrapa al rival en un domo de esferas de Ki y las hace detonar todas a la vez.", "cost": "20% Ki" },
        { "name": "Makankosappo de Presión", "desc": "Puede lanzarlo en un tercio del tiempo original y con una fuerza penetrante nivel Galaxia.", "cost": "30% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Luz de la Justicia Namekiana", "desc": "Una colosal ola expansiva nacida de su alma unificada que erradica la materia oscura.", "cost": "60% Ki" }
      ],
      "passives": [
        { "name": "Mente de Dios", "desc": "Inmunidad al control mental; analiza el estilo del enemigo a los pocos segundos.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "piccolo-new-hope", "name": "Super Namekiano Dios", "stats": "Nivel Galaxia." } ],
    "feats": [
      "Lideró la defensa de la Tierra frente a la progenie de Cell Hiper Perfecto."
    ],
    "psychology": "Serio, protector, actuando como el padre y líder que la Tierra necesita en ausencia de Goku.",
    "weaknesses": "Si destruyen su cabeza, pierde la regeneración."
  },

  // ================= DRAGON BALL AFTER (EXTRA) =================
  {
    "id": "kakarotto-db-after",
    "name": "Kakarotto (El Saiyan Corrupto)",
    "alias": "El Héroe Caído / Goku Demonio",
    "universe": "Dragon Ball After (Fan Manga)",
    "saga": "Regreso de Kakarotto",
    "version": "Goku (Locura Saiyan Incurable)",
    "tier": "Tier 3-A | Nivel Universal+",
    "ap": "Nivel Universal+. Un golpe en la cabeza revierte mágicamente a Goku a su programación original Saiyan. Conserva todo su poder, maestría marcial y transformaciones hasta el SSJ3, pero lo combina con una brutalidad sádica, sin piedad alguna por su familia o la Tierra.",
    "range": "Universal+.",
    "speed": { "combat": "MFTL+", "reaction": "MFTL+", "travel": "MFTL+", "attack": "Instantáneo." },
    "strength": { "striking": "Clase Universal+.", "lifting": "Clase Universal." },
    "durability": "Nivel Universal+. El dolor solo lo excita más.",
    "stamina": "Inmensa. No sufre el desgaste de dudar o contenerse.",
    "battleIQ": "Combina el genio prodigioso de Goku con el instinto asesino puro y brutal de un Saiyan salvaje de clase baja.",
    "haxTags": [ "Fuerza Bruta Despiadada", "Teletransportación Defensiva/Ofensiva", "Adaptabilidad Violenta" ],
    "arsenal": {
      "basicAttacks": "Golpes a romper huesos, pisotones a la cabeza, arrancar extremidades.",
      "superAttacks": [
        { "name": "Kamehameha Oscuro (Sangriento)", "desc": "Un Kamehameha rojizo y violento lanzado a quemarropa.", "cost": "20% Ki" },
        { "name": "Masacre de Teletransportación", "desc": "Usa el Shunkanido para torturar psicológicamente atacando en puntos vitales sin parar.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Puño del Dragón Negro (SSJ3)", "desc": "Una versión retorcida y oscura del Puño del Dragón que empala y devora la esencia de la víctima.", "cost": "75% Ki" }
      ],
      "passives": [
        { "name": "Instinto Asesino Puro", "desc": "No se puede razonar con él; ignora el 50% de los debuffs mentales o mágicos.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [
      { "id": "kakarotto-base", "name": "Kakarotto Base / SSJ", "stats": "Nivel Multi-Galáctico." },
      { "id": "kakarotto-ssj3", "name": "Kakarotto SSJ3", "stats": "Nivel Universal+. Sonrisa maníaca y sádica, aura letal." }
    ],
    "feats": [
      "Derrotó y masacró a Gohan Definitivo y Gotenks con facilidad.",
      "Rompió a Vegeta tanto física como emocionalmente durante su tortura global."
    ],
    "psychology": "Sádico, cruel, sediento de sangre. Disfruta el dolor de aquellos que solía amar, burlándose de su debilidad.",
    "weaknesses": "Su arrogancia Saiyan pura puede ser aprovechada si se le reta al combate directo."
  }
];

const filePath = path.resolve(__dirname, '../src/data/characters.js');
let content = fs.readFileSync(filePath, 'utf8');

const prefix = 'export const INITIAL_CHARACTERS = ';
const currentList = eval(content.replace(prefix, ''));

const existingIds = new Set(currentList.map(c => c.id));
let added = 0;

for (const nc of newCharacters) {
  if (!existingIds.has(nc.id)) {
    currentList.push(nc);
    existingIds.add(nc.id);
    added++;
  } else {
    const idx = currentList.findIndex(c => c.id === nc.id);
    currentList[idx] = nc;
  }
}

const output = "// APEX Engine — Base de Datos de Personajes Estructurada (VS Battles Tier System)\n// Total fichas deduplicadas y normalizadas\n\nexport const INITIAL_CHARACTERS = " + JSON.stringify(currentList, null, 2) + ";\n";

fs.writeFileSync(filePath, output, 'utf8');
console.log('Successfully injected New Hope and Extra DB After characters.');
