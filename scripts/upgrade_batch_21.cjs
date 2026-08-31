const fs = require('fs');
const path = require('path');

const batch21Upgrades = [
  // 1. OMNI-MAN
  {
    "id": "omni-man-invincible-905",
    "name": "Omni-Man (Nolan Grayson)",
    "alias": "El Conquistador de Viltrum",
    "universe": "Invincible",
    "saga": "Invasión Viltrumita / Guerra Viltrumita",
    "version": "Pico de Poder (Guerra Viltrumita)",
    "tier": "Tier 5-B a 5-A | Nivel Planeta Grande",
    "ap": "Nivel Planeta Grande. Un guerrero de sangre pura de la élite de Viltrum con más de 2,000 años de experiencia en conquista estelar. Destruyó la civilización entera de los Flaxans causando cataclismos geológicos con pura aceleración corporal. Junto a Mark y Thaedus, atravesó el núcleo del Planeta Viltrum destruyendo el planeta entero.",
    "range": "Físico e interplanetario (Vuelo espacial).",
    "speed": { "combat": "Masivamente FTL+ en el vacío del espacio.", "reaction": "Masivamente FTL+.", "travel": "MFTL+ (Viaja entre sistemas solares en semanas).", "attack": "Impactos hipersónicos que generan ondas de choque nucleares." },
    "strength": { "striking": "Clase Planeta Grande (Corta viltrumitas por la mitad con las manos desnudas).", "lifting": "Clase Billones de Toneladas (Desvió un asteroide del tamaño de Texas)." },
    "durability": "Nivel Planeta Grande. Piel y músculos ultra-densos inmunes al armamento nuclear terrestre.",
    "stamina": "Monstruosa (Puede luchar con los órganos expuestos y pulmones perforados durante días).",
    "battleIQ": "Veterano de milenios de guerras genocidas; experto en decapitación rápida y combate sin reglas.",
    "haxTags": [ "Fisiología Viltrumita Pura", "Vuelo Espacial MFTL", "Longevidad de Milenios", "Respiración Contenida de 2 Semanas en el Vacío" ],
    "arsenal": {
      "basicAttacks": "Golpes con el filo de la mano (chops) capaces de decapitar seres sobrehumanos de un solo tajo.",
      "superAttacks": [
        { "name": "Vuelo de Ignición Atmosférica", "desc": "Vuela a velocidades relativistas a ras del suelo creando una estela de fricción que calcina continentes enteros (Como hizo en el Planeta Flaxan).", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Embestida Partenúcleos de Viltrum", "desc": "Se lanza a máxima velocidad junto a su impulso cinético atravesando el núcleo rocoso y metálico de un planeta hasta hacerlo estallar.", "cost": "Impacto Máximo" }
      ],
      "passives": [
        { "name": "Adaptación Genética Dominante", "desc": "Su ADN viltrumita sobrescribe casi el 100% de la genética de cualquier especie con la que se reproduzca.", "cost": "Pasivo biológico" }
      ]
    },
    "forms": [ 
      { "id": "omniman-tierra", "name": "Héroe de la Tierra", "stats": "Nivel Planeta. Traje blanco y rojo con la gran 'O' en el pecho, bigote pulcro." },
      { "id": "omniman-emperador", "name": "Emperador de Viltrum", "stats": "Nivel Planeta Grande. Uniforme imperial viltrumita blanco y gris, barba poblada." }
    ],
    "feats": [ "Masacró a los Guardianes del Globo en minutos.", "Extinguió a la civilización Flaxan devastando su planeta.", "Atravesó y destruyó el Planeta Viltrum." ],
    "psychology": "Criado como un colonizador frío y despiadado, pero su estadía en la Tierra y el amor por su hijo Mark lo llevaron a rebelarse contra el Imperio de Viltrum por empatía.",
    "weaknesses": "Vulnerabilidad a frecuencias sonoras extremadamente agudas que desestabilizan el oído interno viltrumita, calor estelar del centro del sol y el virus del Azote (Scourge Virus)."
  },
  // 2. MARK GRAYSON (INVINCIBLE)
  {
    "id": "mark-grayson-invincible-906",
    "name": "Mark Grayson (Invincible)",
    "alias": "Invencible / El Emperador Supremo",
    "universe": "Invincible",
    "saga": "Final de la Serie / 500 Años en el Futuro",
    "version": "Pico Final (Emperador de Viltrum)",
    "tier": "Tier 5-B a 5-A | Nivel Planeta Grande (Alto)",
    "ap": "Nivel Planeta Grande (Alto). El héroe supremo que superó a todos los Viltrumitas de la historia. En su juventud ayudó a destruir el planeta Viltrum. Al final de la historia, tras 500 años de evolución biológica, superó la fuerza del Gran Regente Thragg, matándolo en la superficie del sol.",
    "range": "Físico e interplanetario.",
    "speed": { "combat": "Masivamente FTL+.", "reaction": "Masivamente FTL+.", "travel": "MFTL+.", "attack": "Velocidad salvaje implacable." },
    "strength": { "striking": "Clase Planeta Grande.", "lifting": "Clase Billones de Toneladas." },
    "durability": "Nivel Planeta Grande. Resistió luchar en la corona del sol con la piel quemada viva.",
    "stamina": "Infinita por fuerza de voluntad heroica inquebrantable.",
    "battleIQ": "Combate cuerpo a cuerpo brutal aprendido a base de cientos de palizas extremas y victorias milagrosas.",
    "haxTags": [ "Fisiología Viltrumita Híbrida", "Evolución por Edad (500 Años de Crecimiento)", "Voluntad Inquebrantable" ],
    "arsenal": {
      "basicAttacks": "Golpes implacables, cabezazos demoledores, agarres de sumisión viltrumitas.",
      "superAttacks": [
        { "name": "Embestida Invencible", "desc": "Carga frontal a máxima aceleración atravesando defensas enemigas.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Duelo en la Corona Solar", "desc": "Arrastra al enemigo a la superficie del sol, aguantando el calor estelar para asfixiarlo y destrozarle la garganta a mordiscos y puñetazos (Como mató a Thragg).", "cost": "Furia Extrema" }
      ],
      "passives": [
        { "name": "Verdaderamente Invencible", "desc": "Cuanto más daño físico y huesos rotos sufra, mayor es su adrenalina y ferocidad para seguir luchando.", "cost": "Pasivo de Voluntad" }
      ]
    },
    "forms": [ 
      { "id": "mark-clasico", "name": "Invincible (Traje Amarillo/Azul)", "stats": "Nivel País a Planeta. Traje icónico de superhéroe." },
      { "id": "mark-negro", "name": "Traje Azul y Negro", "stats": "Nivel Planeta. Modo más oscuro y agresivo." },
      { "id": "mark-emperador", "name": "Emperador Mark Grayson (500 Años)", "stats": "Nivel Planeta Grande (Alto). Físico masivo, túnica imperial dorada y blanca, barba completa." }
    ],
    "feats": [ "Asesinó a Conquest dos veces.", "Derrotó a Thragg dentro de la superficie del sol.", "Guió al Imperio Viltrumita a una era de paz universal durante 500 años." ],
    "psychology": "Un héroe noble que sufrió torturas y pérdidas inenarrables pero nunca perdió su compasión fundamental por la vida.",
    "weaknesses": "Sensibilidad auditiva viltrumita a frecuencias sónicas específicas y calor extremo estelar prolongado."
  },
  // 3. HOMELANDER
  {
    "id": "homelander-the-boys-913",
    "name": "Homelander (John)",
    "alias": "El Patriota / El Ser Más Fuerte de la Tierra",
    "universe": "The Boys",
    "saga": "Temporadas 1 a 4 / Cómics",
    "version": "Pico de Poder (Compuesto V)",
    "tier": "Tier 7-B a 7-A | Nivel Ciudad a Montaña",
    "ap": "Nivel Ciudad (Visión Térmica y Fuerza Bruta). El producto supremo de Vought International. Sus rayos láser oculares cortan personas, metales reforzados y aviones comerciales como mantequilla caliente. Su fuerza física le permite lanzar aviones y aplastar cráneos con los dedos.",
    "range": "Cientos de metros (Visión Láser).",
    "speed": { "combat": "Hipersónica (Mach 1.5 a Mach 3 en combate).", "reaction": "Hipersónica.", "travel": "Hipersónica+ (Mach 10+ en vuelo recto).", "attack": "Láser a la velocidad de la luz." },
    "strength": { "striking": "Clase Ciudad.", "lifting": "Clase Miles de Toneladas." },
    "durability": "Nivel Ciudad. Inmune a todas las armas convencionales terrestres conocidas.",
    "stamina": "Muy Alta (Nunca ha tenido que esforzarse al 100% en toda su vida).",
    "battleIQ": "Pésimo artista marcial; no tiene entrenamiento formal y pelea como un bravucón arrogante acostumbrado a ganar de un solo golpe.",
    "haxTags": [ "Visión Láser Térmica Instantánea", "Súper Oído y Visión de Rayos X", "Vuelo Supersónico" ],
    "arsenal": {
      "basicAttacks": "Manotazos descalabrantes, puñetazos de martillo al pecho.",
      "superAttacks": [
        { "name": "Visión Térmica Concentrada", "desc": "Dispara dos rayos rojos continuos de calor extremo desde los ojos que parten personas y blindajes en dos.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Grito Sónico y Barrido Láser Omnidireccional", "desc": "Grita con furia rompiendo tímpanos y gira sobre su eje disparando láseres en 360 grados para aniquilar multitudes enteras.", "cost": "Furia Psicótica" }
      ],
      "passives": [
        { "name": "Complejo de Dios", "desc": "Si el enemigo es más débil que él, le infunde terror psicológico reduciendo su moral de combate.", "cost": "Intimidación Pasiva" }
      ]
    },
    "forms": [ 
      { "id": "homelander-base", "name": "Homelander", "stats": "Nivel Ciudad. Traje azul con bandera estadounidense como capa, águilas doradas en los hombros." }
    ],
    "feats": [ "Cortó un avión de pasajeros por la mitad con sus ojos.", "Soportó una explosión química en una planta energética sin un solo rasguño." ],
    "psychology": "Un sociópata con traumas maternales infantiles, narcisista extremo y desesperado por la aprobación y el amor del público.",
    "weaknesses": "Pánico absoluto si se enfrenta a alguien con fuerza física superior a la suya; ataques que atraviesen el canal auditivo interno (como la pajita de metal de Maeve)."
  },
  // 4. BILLY BUTCHER
  {
    "id": "billy-butcher-the-boys-914",
    "name": "Billy Butcher",
    "alias": "El Carnicero / Temp-V & Tumor Tentacular",
    "universe": "The Boys",
    "saga": "Temporadas 3 y 4",
    "version": "Tumor de Compuesto V / Tentáculos Parasitarios",
    "tier": "Tier 7-B | Nivel Ciudad",
    "ap": "Nivel Ciudad. Con Temp-V igualó a Homelander en fuerza y visión láser. Con el tumor consciente de Compuesto V alojado en su cuerpo, puede desplegar tentáculos monstruosos capaces de partir en dos a superhéroes legendarios como Victoria Neuman sin pestañear.",
    "range": "Decenas de metros (Tentáculos y Visión Láser).",
    "speed": { "combat": "Hipersónica.", "reaction": "Hipersónica.", "travel": "Atlética.", "attack": "Tentáculos viscerales a alta velocidad." },
    "strength": { "striking": "Clase Ciudad (Puñetazos directos a la mandíbula de Homelander).", "lifting": "Clase 100+ Toneladas." },
    "durability": "Nivel Ciudad. Soportó ráfagas directas de visión térmica de Homelander.",
    "stamina": "Muy Alta por odio puro y adrenalina.",
    "battleIQ": "Ex-operativo militar SAS británico; maestro del combate sucio, emboscadas y guerra psicológica.",
    "haxTags": [ "Tentáculos Biológicos Asesinos", "Visión Láser Amarilla", "Tolerancia Absurda al Dolor" ],
    "arsenal": {
      "basicAttacks": "Golpes con palancas de hierro, puñetazos de boxeo militar.",
      "superAttacks": [
        { "name": "Visión Láser Dorada", "desc": "Rayo de calor amarillento desde los ojos con potencia equivalente al de Homelander.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Desgarro de Tentáculos Parasitarios", "desc": "Desata masas de tentáculos negros desde su pecho que empalan, desgarran y parten en dos verticalmente al oponente (Como hizo con Victoria Neuman).", "cost": "Furia del Tumor" }
      ],
      "passives": [
        { "name": "Odio Puro Anti-Supers", "desc": "Inmune a la intimidación o manipulación mental; su única motivación existencial es erradicar a los superhéroes.", "cost": "Pasivo mental" }
      ]
    },
    "forms": [ 
      { "id": "butcher-tempv", "name": "Butcher con Temp-V", "stats": "Nivel Ciudad. Ojos dorados brillantes, traje negro y gabardina." },
      { "id": "butcher-tumor", "name": "Butcher Tumor Viviente", "stats": "Nivel Ciudad (Alto). Tentáculos negros saliendo de su camisa, rostro pálido y oscuro." }
    ],
    "feats": [ "Le dejó un ojo morado a Homelander en la pelea de Herogasm.", "Partió en dos a Victoria Neuman (quien era invulnerable al fuego y balas)." ],
    "psychology": "Un perro rabioso cínico y autodestructivo que quema todos los puentes éticos con tal de ver muerto a Homelander.",
    "weaknesses": "Cáncer terminal avanzado; su cuerpo humano original está deteriorándose rápidamente."
  },
  // 5. MERUEM
  {
    "id": "meruem-hxh-911",
    "name": "Meruem",
    "alias": "El Rey de las Hormigas Quimera",
    "universe": "Hunter x Hunter",
    "saga": "Saga de las Hormigas Quimera",
    "version": "Post-Rosa (Alimentado por Youpi y Pouf)",
    "tier": "Tier 7-B a 7-A | Nivel Ciudad a Montaña",
    "ap": "Nivel Montaña (Post-Rosa). El pináculo de la evolución biológica. Posee una cantidad inconmensurable de Aura Nen. En su estado Post-Rosa puede transformar su aura en fotones de luz, leer pensamientos, teletransportarse y vaporizar montañas enteras con el Rage Blast de Youpi.",
    "range": "Kilómetros (En de Fotones).",
    "speed": { "combat": "Masivamente Hipersónica+.", "reaction": "Masivamente Hipersónica+.", "travel": "Velocidad de la Luz en Fotones de En.", "attack": "Instantáneo." },
    "strength": { "striking": "Clase Montaña.", "lifting": "Clase 10,000+ Toneladas." },
    "durability": "Nivel Montaña. Sobrevivió a los golpes de la Mano Cero de Netero y al epicentro de una bomba nuclear (La Rosa Miniatura).",
    "stamina": "Infinita de forma práctica.",
    "battleIQ": "El mayor genio analítico jamás nacido; calcula millones de combinaciones y patrones de ataque como un gran maestro de Gungi.",
    "haxTags": [ "En de Fotones (Lectura Mente y Emociones / Teletransporte)", "Síntesis de Aura por Ingestión", "Alas de Metamorfosis", "Rage Blast (Cañón de Masa)" ],
    "arsenal": {
      "basicAttacks": "Coletazos capaces de decapitar líderes militares, golpes marciales de precisión absoluta.",
      "superAttacks": [
        { "name": "En de Fotones", "desc": "Expande su aura convertida en luz cubriendo toda la ciudad; cualquier cosa que la luz toque revela su ubicación, masa, pensamientos y estado emocional al instante.", "cost": "5% Nen" },
        { "name": "Rage Blast", "desc": "Dispara una esfera concentrada de aura explosiva que desintegra colinas y búnkeres enteros.", "cost": "20% Nen" }
      ],
      "ultimateAttacks": [
        { "name": "Desplazamiento Fotónico y Decapitación", "desc": "Se convierte en fotones de aura, aparece detrás del enemigo a la velocidad de la luz y le arranca la cabeza antes de que pueda pestañear.", "cost": "30% Nen" }
      ],
      "passives": [
        { "name": "Lectura de Patrones de Gungi", "desc": "Tras recibir los primeros intercambios de golpes, descifra el ritmo y sesgo subconsciente del enemigo, encontrando su punto ciego inevitable.", "cost": "Genio Analítico" }
      ]
    },
    "forms": [ 
      { "id": "meruem-nacimiento", "name": "Rey Hormiga (Base)", "stats": "Nivel Ciudad. Cola con aguijón, coraza verde oscura y casco biológico." },
      { "id": "meruem-post-rosa", "name": "Meruem Post-Rosa", "stats": "Nivel Montaña. Alas de ángel luminosas, halo divino de fotones, aura resplandeciente." }
    ],
    "feats": [ "Soportó miles de golpes directos del Guanyin Bodhisattva de Netero sin daño significativo.", "Destruyó una montaña de un solo disparo de aura casual tras renacer." ],
    "psychology": "Nació como un tirano absoluto pero su relación con Komugi le otorgó una humanidad y sabiduría filosófica superior a la de la propia raza humana.",
    "weaknesses": "Envenenamiento por radiación tóxica (La Rosa Miniatura causó necrosis celular irreversible que acabó con su vida)."
  },
  // 6. ISAAC NETERO
  {
    "id": "netero-hxh-912",
    "name": "Isaac Netero",
    "alias": "El 12° Presidente de la Asociación de Cazadores",
    "universe": "Hunter x Hunter",
    "saga": "Saga de las Hormigas Quimera",
    "version": "Pico de Poder (Guanyin Bodhisattva de 100 Brazos)",
    "tier": "Tier 7-B | Nivel Ciudad",
    "ap": "Nivel Ciudad. El ser humano más fuerte del mundo de Nen. Tras décadas de rezar 10,000 puñetazos diarios en la montaña, alcanzó una velocidad de plegaria que supera la velocidad del sonido. Su estatua Guanyin Bodhisattva conecta cientos de golpes masivos desde ángulos imposibles.",
    "range": "Decenas de metros (Estatua Gigante de Nen).",
    "speed": { "combat": "Hipersónica a Masivamente Hipersónica (Su plegaria es más rápida que el tiempo de reacción de Meruem).", "reaction": "Masivamente Hipersónica.", "travel": "Supersónica.", "attack": "Velocidad de ataque supersónica pura." },
    "strength": { "striking": "Clase Ciudad.", "lifting": "Clase 1,000+ Toneladas." },
    "durability": "Nivel Ciudad (Resistió perder una pierna y un brazo y siguió luchando deteniendo el sangrado con puro Nen).",
    "stamina": "Muy Alta.",
    "battleIQ": "Más de un siglo de experiencia marcial inigualable.",
    "haxTags": [ "Guanyin Bodhisattva de 100 Brazos", "Plegaria más Rápida que el Sonido", "Mano Cero (Rayo de Aura Total)", "Bomba de la Rosa del Pobre (Bomba Nuclear en el Corazón)" ],
    "arsenal": {
      "basicAttacks": "Junta las manos en oración instantánea para invocar la estatua gigante de 100 brazos dorados.",
      "superAttacks": [
        { "name": "Primera / Tercera / Noventa y Nueve Mano", "desc": "Palmetazos y bofetadas colosales desde arriba, los lados o combinaciones continuas de 100 palmas.", "cost": "5% Nen" }
      ],
      "ultimateAttacks": [
        { "name": "Mano Cero (Zero Hand)", "desc": "La estatua abraza al enemigo por la espalda y dispara todo el remanente de aura vital de Netero desde su boca en un rayo de energía pura abrasador.", "cost": "100% Nen Vital" },
        { "name": "La Rosa Miniatura (Poor Man's Rose)", "desc": "Si su corazón se detiene, un detonador biológico activa una bomba nuclear alojada en su pecho liberando una explosión masiva con veneno radiactivo.", "cost": "Muerte" }
      ],
      "passives": [
        { "name": "Velocidad del Rezo Sagrado", "desc": "El movimiento de juntar sus manos en oración no puede ser interceptado por ningún oponente que no posea velocidad lumínica.", "cost": "Prioridad de Velocidad" }
      ]
    },
    "forms": [ 
      { "id": "netero-presidente", "name": "Presidente Anciano", "stats": "Nivel Multi-Bloque. Kimono blanco tradicional, barba larga." },
      { "id": "netero-combate", "name": "Camiseta del Corazón (Modo Muerte)", "stats": "Nivel Ciudad. Músculos tensos, camiseta con el kanji de 'Corazón', listo para morir." }
    ],
    "feats": [ "Conectó más de 1,000 golpes al Rey Meruem sin que este pudiera atravesar su guardia durante minutos.", "Detonó la Rosa Miniatura acabando con la vida de Meruem, Youpi y Pouf." ],
    "psychology": "Un anciano bromista y excéntrico que buscó durante toda su vida un oponente contra el cual poder luchar con todo su corazón sin contenerse.",
    "weaknesses": "Cuerpo humano de 110 años susceptible al daño penetrante letal si el enemigo logra atravesar la estatua."
  }
];

const filePath = path.resolve(__dirname, '../src/data/characters.js');
let content = fs.readFileSync(filePath, 'utf8');

const prefix = 'export const INITIAL_CHARACTERS = ';
let currentList = eval(content.replace(prefix, ''));
console.log(`Current characters count: ${currentList.length}`);

let updatedCount = 0;
batch21Upgrades.forEach(upgrade => {
  let index = currentList.findIndex(c => c.id === upgrade.id);
  if (index !== -1) {
    currentList[index] = upgrade; 
    updatedCount++;
    console.log(`Upgraded: ${upgrade.name} (${upgrade.id})`);
  } else {
    currentList.push(upgrade);
    updatedCount++;
    console.log(`Added as New: ${upgrade.name} (${upgrade.id})`);
  }
});

const output = "// APEX Engine — Base de Datos de Personajes Estructurada (VS Battles Tier System)\\n// Total fichas deduplicadas y normalizadas\\n\\nexport const INITIAL_CHARACTERS = " + JSON.stringify(currentList, null, 2) + ";\\n";
fs.writeFileSync(filePath, output.replace(/\\n/g, '\n'), 'utf8');

console.log(`Batch 21 Upgrade Complete. ${updatedCount} characters successfully enhanced. (Invincible, The Boys, Hunter x Hunter).`);
