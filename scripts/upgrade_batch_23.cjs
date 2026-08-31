const fs = require('fs');
const path = require('path');

const batch23Upgrades = [
  // 1. HULK
  {
    "id": "hulk",
    "name": "Hulk (Bruce Banner)",
    "alias": "El Gigante Esmeralda / World Breaker / Immortal Hulk",
    "universe": "Marvel Comics",
    "saga": "World War Hulk / Immortal Hulk",
    "version": "World Breaker / Fractura de la Puerta Verde",
    "tier": "Tier 2-C a 2-A | Nivel Multiversal",
    "ap": "Nivel Multiversal (World Breaker / Furia Ilimitada). Conectado a la Puerta Verde (The Below-Place) y a The One Below All. Su fuerza física no tiene techo; cuanto más se enfada, más fuerte se vuelve infinitamente. Como World Breaker, cada uno de sus pasos destruía la costa este de EE.UU. y agrietó la dimensión de la Dimensión Oscura.",
    "range": "Físico y Ondas de Choque Planetarias a Multiversales.",
    "speed": { "combat": "Masivamente FTL+.", "reaction": "Masivamente FTL+.", "travel": "MFTL+ (Saltos interplanetarios).", "attack": "Thunderclap que desintegra continentes." },
    "strength": { "striking": "Clase Multiversal (Ha destrozado dimensiones y aguantado el peso de una estrella sobre sus hombros).", "lifting": "Incalculable / Infinita." },
    "durability": "Nivel Multiversal. Regeneración casi instantánea (Regenera su cuerpo entero a partir de un esqueleto en segundos).",
    "stamina": "Infinita (La ira retroalimenta su energía gamma continuamente).",
    "battleIQ": "Combina la fuerza berserker imparable de Hulk con los destellos científicos de Bruce Banner.",
    "haxTags": [ "Fuerza y Furia Infinitas", "Inmortalidad Gamma (Resurrección por la Puerta Verde)", "Thunderclap (Onda Sónica Sísmica)", "Emisión de Radiación Gamma Devastadora" ],
    "arsenal": {
      "basicAttacks": "Golpes que causan terremotos tectónicos, pisotones volcánicos.",
      "superAttacks": [
        { "name": "Thunderclap (Aplauso Atronador)", "desc": "Junta las palmas de sus manos generando una onda de choque sónica y cinética que apaga huracanes y desintegra ejércitos cósmicos.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "World Breaker Eruption (Estallido del Destructor)", "desc": "Libera toda la radiación gamma acumulada en una erupción que vaporiza la corteza planetaria y agrieta la realidad.", "cost": "Furia Máxima" }
      ],
      "passives": [
        { "name": "La Puerta Verde (Inmortalidad Absoluta)", "desc": "Si es asesinado durante el día o la noche, su alma atraviesa la Puerta Verde y resucita al caer la noche más furioso y poderoso que antes.", "cost": "Inmortalidad Pasiva" }
      ]
    },
    "forms": [ 
      { "id": "hulk-salvaje", "name": "Hulk Salvaje", "stats": "Nivel Planeta. Piel verde clásica, pantalones morados rotos." },
      { "id": "hulk-worldbreaker", "name": "World Breaker Hulk", "stats": "Nivel Multiversal. Aura gamma verde brillante emanando de cada poro de su cuerpo, ojos fluorescentes." }
    ],
    "feats": [ "Soportó el peso de una estrella de 100 billones de toneladas en Secret Wars.", "Destruyó la dimensión de Nightcrawler de un solo aplauso sísmico." ],
    "psychology": "Una fuerza de la naturaleza motivada por la rabia y el deseo de ser dejado en paz; como Immortal Hulk, es una entidad inteligente y aterradora que busca desmantelar el orden humano.",
    "weaknesses": "Si se le calma psicológicamente (mediante telepatía empática extrema o seres queridos), revierte a su forma vulnerable de Bruce Banner."
  },
  // 2. IRON MAN
  {
    "id": "iron-man-marvel-908",
    "name": "Iron Man (Tony Stark)",
    "alias": "El Vengador Dorado / El Hombre de Hierro",
    "universe": "Marvel Comics",
    "saga": "Avengers / Model Prime / Godkiller",
    "version": "Pico Tecnológico (Armadura Godbuster / Bleeding Edge)",
    "tier": "Tier 7-A Físico | Tier 2-C con Armaduras Buster Cósmicas",
    "ap": "Nivel Montaña (Traje Estándar) / Nivel Multiversal Bajo (Con Armadura Godbuster o Thorbuster). Uno de los 8 intelectos más brillantes de la Tierra. Ha diseñado armaduras capaces de absorber y redirigir el poder de Odín, combatir al Fénix o hacer frente a Celestiales cósmicos.",
    "range": "Planetario (Rayos Unibeam y Satélites Orbitales).",
    "speed": { "combat": "Masivamente FTL+ (Con trajes cósmicos).", "reaction": "Masivamente FTL+ (IA de Nanosegundos).", "travel": "MFTL+.", "attack": "Rayos repulsores guiados por IA." },
    "strength": { "striking": "Clase Multiversal con trajes Buster.", "lifting": "Clase 10,000+ Toneladas." },
    "durability": "Nivel Multiversal con escudos de fuerza y aleaciones nanotecnológicas avanzadas.",
    "stamina": "Infinita (Reactores Arc de energía de punto cero).",
    "battleIQ": "Genio visionario multitarea; predice trayectorias enemigas mediante algoritmos de combate de IA (FRIDAY/JARVIS).",
    "haxTags": [ "Nanotecnología Adaptativa", "Rayo Unibeam", "IA de Análisis Predictivo de Combate", "Armaduras Buster Específicas" ],
    "arsenal": {
      "basicAttacks": "Disparos repulsores desde las palmas, misiles micrométricos guiados.",
      "superAttacks": [
        { "name": "Unibeam Máximo", "desc": "Dispara un rayo colosal continuo desde el reactor Arc central de su pecho que atraviesa búnkeres nucleares.", "cost": "20% Batería" }
      ],
      "ultimateAttacks": [
        { "name": "Despliegue Godbuster / Armadura Celestial", "desc": "Invoca la armadura diseñada dentro del mundo virtual eScape, disparando cañones de energía que diezman entidades de grado divino.", "cost": "100% Reactor" }
      ],
      "passives": [
        { "name": "Análisis de Patrones de Pelea", "desc": "Su IA escanea el estilo de combate marcial del rival y genera automáticamente contraataques óptimos en tiempo real.", "cost": "Pasivo Táctico" }
      ]
    },
    "forms": [ 
      { "id": "ironman-bleedingedge", "name": "Bleeding Edge (Nanotecnología)", "stats": "Nivel Montaña a País. Armadura roja y dorada que emerge de sus propios huesos." },
      { "id": "ironman-godbuster", "name": "Armadura Godbuster", "stats": "Nivel Multiversal Bajo. Armadura blanca y dorada masiva diseñada para enfrentar dioses cósmicos." }
    ],
    "feats": [ "Diseñó el cañón que dividió a la Fuerza Fénix en cinco partes.", "Combatió mano a mano contra Thor y Hulk con armaduras personalizadas." ],
    "psychology": "Futurista arrogante, ingenioso y obsesionado con construir un escudo protector para la Tierra a cualquier costo.",
    "weaknesses": "Cuerpo humano vulnerable dentro de la armadura; vulnerable a virus informáticos alienígenas o EMP de grado dimensional."
  },
  // 3. DOCTOR STRANGE
  {
    "id": "doctor-strange",
    "name": "Doctor Strange (Stephen Strange)",
    "alias": "El Hechicero Supremo de la Tierra",
    "universe": "Marvel Comics",
    "saga": "Classic Strange / Damnation",
    "version": "Hechicero Supremo Clásico (Ojo de Agamotto)",
    "tier": "Tier 2-C a 2-A | Nivel Multiversal",
    "ap": "Nivel Multiversal. El maestro absoluto de las artes místicas. Invoca a las entidades primordiales del cosmos (Vishanti, Cyttorak, Raggadorr) para manipular el tiempo, el espacio, las almas y la realidad. Ha derrotado a señores dimensionales como Dormammu y Shuma-Gorath.",
    "range": "Multiversal / Interdimensional.",
    "speed": { "combat": "Inconmensurable.", "reaction": "Inconmensurable.", "travel": "Instantáneo (Portales interdimensionales).", "attack": "Conjuros automáticos a la velocidad del pensamiento." },
    "strength": { "striking": "Clase Multiversal con escudos místicos y puños de Hoggoth.", "lifting": "Magia infinita." },
    "durability": "Nivel Multiversal mediante los Escudos de los Vishanti y la Capa de Levitación.",
    "stamina": "Muy Alta (Sostenida por energía mística).",
    "battleIQ": "Uno de los mayores eruditos y estrategas del cosmos mágico.",
    "haxTags": [ "Ojo de Agamotto (Revelación de la Verdad y Manipulación Temporal)", "Bandas Carmesíes de Cyttorak (Inmovilización Irrompible)", "Proyección Astral", "Banishment Interdimensional" ],
    "arsenal": {
      "basicAttacks": "Ráfagas místicas de luz astral, dagas de energía.",
      "superAttacks": [
        { "name": "Bandas Carmesíes de Cyttorak", "desc": "Cintas místicas indestructibles que atrapan y paralizan el cuerpo y poder mágico del oponente (retuvo a Hulk y Galactus).", "cost": "15% Magia" },
        { "name": "Rayos de Balthakk", "desc": "Descargas eléctricas dimensionales que perforan defensas cósmicas.", "cost": "20% Magia" }
      ],
      "ultimateAttacks": [
        { "name": "Ojo de Agamotto: Reversión del Tiempo y Destierro", "desc": "Abre el relicario divino que anula ilusiones, rebobina el tiempo universal y destierra al oponente a la Dimensión del Caos Eterno.", "cost": "Artefacto Supremo" }
      ],
      "passives": [
        { "name": "Escudos de los Vishanti", "desc": "Barrera mística pasiva que desvía ataques físicos y mágicos de nivel multiversal de forma automática.", "cost": "Defensa Pasiva" }
      ]
    },
    "forms": [ 
      { "id": "strange-clasico", "name": "Hechicero Supremo", "stats": "Nivel Multiversal. Túnica azul con el Ojo de Agamotto en el pecho y la Capa de Levitación roja flotante." }
    ],
    "feats": [ "Sometió a Dormammu en su propia Dimensión Oscura.", "Reconstruyó realidades enteras usando la magia de los Vishanti." ],
    "psychology": "Un guardián sabio, reservado y dispuesto a realizar sacrificios cósmicos oscuros para proteger a la Tierra de amenazas místicas.",
    "weaknesses": "Cuerpo humano de cirujano que depende de sus manos y cánticos para conjurar hechizos si sus defensas son neutralizadas."
  },
  // 4. DOOMSDAY
  {
    "id": "doomsday",
    "name": "Doomsday",
    "alias": "La Muerte de Superman / El Juicio Final",
    "universe": "DC Comics",
    "saga": "La Muerte de Superman / Hunter/Prey",
    "version": "Pico Evolutivo (Adaptación Reactiva Instantánea)",
    "tier": "Tier 2-C a 2-A | Nivel Multiversal",
    "ap": "Nivel Multiversal. El monstruo genético definitivo nacido en el Krypton prehistórico. Fue asesinado millones de veces hasta volverse la máquina de supervivencia perfecta. Si algo lo mata o lo daña, su ADN muta instantáneamente volviéndose inmune a esa forma de muerte para siempre. Asesinó a Superman en combate cuerpo a cuerpo.",
    "range": "Físico.",
    "speed": { "combat": "Masivamente FTL+.", "reaction": "Masivamente FTL+.", "travel": "MFTL+ (Saltos atmosféricos).", "attack": "Salvajismo puro." },
    "strength": { "striking": "Clase Multiversal (Rompió los huesos y el escudo de Superman a puñetazos limpios).", "lifting": "Incalculable." },
    "durability": "Nivel Multiversal. Inmune a la fuerza contundente, al fuego, a la radiación y a la desintegración molecular.",
    "stamina": "Infinita Absoluta (No tiene órganos internos que requieran oxígeno, comida o descanso).",
    "battleIQ": "Instinto depredador asesino supremo que se adapta a las técnicas marciales enemigas sobre la marcha.",
    "haxTags": [ "Evolución Reactiva Instantánea", "Inmunidad Permanente a Causas de Muerte Previas", "Espinas de Hueso Perforantes", "Aura del Virus Doomsday" ],
    "arsenal": {
      "basicAttacks": "Puñetazos con nudillos de hueso que fracturan acero kryptoniano.",
      "superAttacks": [
        { "name": "Empalamiento de Hueso Evolutivo", "desc": "Extiende garras de hueso afiladas impregnadas con toxinas capaces de perforar la piel de Superman.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Adaptación Definitiva", "desc": "Ante un ataque mágico, cósmico o elemental, muta en el acto generando la defensa y counter perfecto para despedazar al enemigo.", "cost": "Mecánica Pasiva/Activa" }
      ],
      "passives": [
        { "name": "Inmunidad Acumulada", "desc": "No puede ser asesinado dos veces de la misma manera; cualquier técnica que lo venció en el pasado es inútil en el presente.", "cost": "Inmortalidad Evolutiva" }
      ]
    },
    "forms": [ 
      { "id": "doomsday-clasico", "name": "Doomsday (Muerte de Superman)", "stats": "Nivel Multiversal Bajo. Monstruo grisáceo gigante con espinas óseas cubriendo su rostro y nudillos." },
      { "id": "doomsday-hunterprey", "name": "Doomsday Hunter/Prey (Pico)", "stats": "Nivel Multiversal. Inteligencia aumentada, espinas gigantes, inmune al Efecto Omega de Darkseid." }
    ],
    "feats": [ "Asesinó a Superman a golpes en Metrópolis.", "Resistió los Rayos Omega de Darkseid a quemarropa sin sufrir un solo rasguño." ],
    "psychology": "Puro odio y terror genético hacia toda forma de vida orgánica; solo existe para destruir.",
    "weaknesses": "Ser enviado al fin del universo mediante manipulación temporal donde nada puede sobrevivir (Entropy End of Time)."
  },
  // 5. JOTARO KUJO
  {
    "id": "jotaro-kujo",
    "name": "Jotaro Kujo",
    "alias": "El Portador de Star Platinum",
    "universe": "JoJo's Bizarre Adventure",
    "saga": "Stardust Crusaders / Diamond is Unbreakable / Stone Ocean",
    "version": "Pico de Poder (Star Platinum: The World)",
    "tier": "Tier 8-C Físico | Tier 2-C Hax Temporal",
    "ap": "Nivel Multi-Bloque Físico / Nivel Universal (Detención del Tiempo). Su Stand, Star Platinum, posee una fuerza, precisión y velocidad sobrehumanas insuperables en combate cerrado. Con 'The World', puede detener el flujo del tiempo durante hasta 5 segundos completos, golpeando a sus rivales mientras están congelados en la realidad.",
    "range": "2 Metros (Rango de Star Platinum) / Universal (Detención del Tiempo).",
    "speed": { "combat": "Masivamente FTL+ (Más rápido que la luz).", "reaction": "Masivamente FTL+.", "travel": "Humana.", "attack": "Ráfaga de golpes ORA ORA a velocidad lumínica." },
    "strength": { "striking": "Clase Multi-Bloque (Destruye dientes de diamante y rompe acero de una andanada).", "lifting": "Clase Stand 100+ Toneladas." },
    "durability": "Nivel Multi-Bloque (Con Star Platinum como escudo).",
    "stamina": "Muy Alta por fuerza de voluntad Joestar.",
    "battleIQ": "Uno de los combatientes tácticos más fríos y analíticos de la historia; mantiene la calma absoluta bajo presión extrema.",
    "haxTags": [ "Star Platinum: The World (Detención del Tiempo de 5 Segundos)", "Velocidad FTL y Precisión Microscópica", "Star Finger" ],
    "arsenal": {
      "basicAttacks": "Ráfaga legendaria de puñetazos gritando '¡ORA ORA ORA ORA!' a velocidad lumínica.",
      "superAttacks": [
        { "name": "Star Finger", "desc": "Extiende sus dedos índice y corazón como hojas elásticas de acero para cortar o apuñalar a distancia.", "cost": "0% Stand" }
      ],
      "ultimateAttacks": [
        { "name": "Star Platinum: The World (Detención del Tiempo)", "desc": "Congela el flujo temporal del universo entero durante 5 segundos, permitiéndole moverse libremente y conectar cientos de golpes mortales al enemigo inmóvil.", "cost": "5 Segundos de Tiempo Detenido" }
      ],
      "passives": [
        { "name": "Calma Joestar", "desc": "Inmune a la intimidación y al pánico; su cerebro procesa soluciones tácticas incluso herido de muerte.", "cost": "Pasivo Mental" }
      ]
    },
    "forms": [ 
      { "id": "jotaro-part3", "name": "Jotaro (Stardust Crusaders)", "stats": "Nivel Multi-Bloque / 5 Segundos de Time Stop. Uniforme escolar negro con cadenas doradas y gorra fusionada con el pelo." },
      { "id": "jotaro-part6", "name": "Jotaro (Stone Ocean)", "stats": "Nivel Multi-Bloque / Experiencia Veterana. Traje de cuero morado con pantalones de serpiente." }
    ],
    "feats": [ "Derrotó a DIO y destruyó a The World de una sola patada fracturadora.", "Atrapó una bala disparada a quemarropa con los dedos de Star Platinum." ],
    "psychology": "Estoico, parco y aparentemente frío, pero con un sentido de la justicia férreo y un amor infinito por su familia.",
    "weaknesses": "Rango muy corto de 2 metros y cuerpo humano normal susceptible a heridas si Star Platinum es eludido."
  },
  // 6. DIO BRANDO
  {
    "id": "dio",
    "name": "DIO (Dio Brando)",
    "alias": "El Vampiro Supremo / El Usuario de The World",
    "universe": "JoJo's Bizarre Adventure",
    "saga": "Stardust Crusaders",
    "version": "Pico Vampírico (Sangre de Joseph Joestar / 9 Segundos de Time Stop)",
    "tier": "Tier 8-C Físico | Tier 2-C Hax Temporal",
    "ap": "Nivel Multi-Bloque Físico / Nivel Universal (Detención del Tiempo). Fusionado con el cuerpo de Jonathan Joestar y alimentado con su sangre, su Stand 'The World' (Za Warudo) alcanzó los 9 segundos de detención temporal completa. Combina la fuerza sobrehumana de un vampiro con la velocidad FTL de su Stand.",
    "range": "10 Metros / Universal (Detención del Tiempo).",
    "speed": { "combat": "Masivamente FTL+.", "reaction": "Masivamente FTL+.", "travel": "Humana / Vuelo por impulsos de Stand.", "attack": "Ráfaga MUDA MUDA a la velocidad de la luz." },
    "strength": { "striking": "Clase Multi-Bloque (Levanta apisonadoras gigantes y las lanza en el tiempo detenido).", "lifting": "Clase Vampírica." },
    "durability": "Nivel Multi-Bloque con regeneración vampírica instantánea (Reconecta extremidades cortadas en segundos).",
    "stamina": "Infinita durante la noche.",
    "battleIQ": "Maquiavélico, sádico y extremadamente confiado; planifica trampas crueles como lanzar cuchillos en el tiempo congelado.",
    "haxTags": [ "The World (Za Warudo - Detención del Tiempo de 9 Segundos)", "Fisiología Vampírica (Regeneración y Rayos Espaciales de los Ojos)", "Lanzamiento de Apisonadora (Road Roller Da)" ],
    "arsenal": {
      "basicAttacks": "Ráfagas incesantes de golpes gritando '¡MUDA MUDA MUDA MUDA!'.",
      "superAttacks": [
        { "name": "Lluvia de Cuchillos en Tiempo Detenido", "desc": "Arroja decenas de cuchillos que quedan suspendidos en el aire a milímetros del oponente y se clavan simultáneamente cuando el tiempo se reanuda.", "cost": "0% Stand" },
        { "name": "Space Ripper Stingy Eyes", "desc": "Dispara chorros de fluido presurizado desde sus pupilas capaces de cortar piedra y personas como láseres.", "cost": "0% Sangre" }
      ],
      "ultimateAttacks": [
        { "name": "Road Roller Da (Aplastamiento con Apisonadora)", "desc": "Detiene el tiempo, salta y arroja una apisonadora gigante sobre el rival, golpeándola furiosamente durante los 9 segundos congelados hasta aplastarlo.", "cost": "9 Segundos de Time Stop" }
      ],
      "passives": [
        { "name": "Carisma Vampírico", "desc": "Seduce y manipula a guerreros de voluntad débil para convertirlos en sus siervos con brotes de carne parasitarios.", "cost": "Control Mental Menor" }
      ]
    },
    "forms": [ 
      { "id": "dio-sombras", "name": "DIO (En las Sombras)", "stats": "Nivel Multi-Bloque / 5 Segundos de Time Stop. Traje amarillo y verde con tiara de corazón." },
      { "id": "dio-high", "name": "DIO 'High' (Sangre de Joseph)", "stats": "Nivel Multi-Bloque / 9 Segundos de Time Stop. Cabello amarillo brillante desordenado, labios negros, éxtasis absoluto." }
    ],
    "feats": [ "Detuvo el tiempo durante 9 segundos completos superando a Star Platinum.", "Sobrevivió a ser decapitado y se implantó el cuerpo de Jonathan Joestar." ],
    "psychology": "Un megalómano narcisista que cree ser el rey legítimo del universo; disfruta humillando a sus víctimas antes de matarlas.",
    "weaknesses": "Luz solar directa (lo desintegra en cenizas) y daño masivo directo a la mitad izquierda de su cuerpo que aún rechaza el tejido de Jonathan."
  }
];

const filePath = path.resolve(__dirname, '../src/data/characters.js');
let content = fs.readFileSync(filePath, 'utf8');

const prefix = 'export const INITIAL_CHARACTERS = ';
let currentList = eval(content.replace(prefix, ''));
console.log(`Current characters count: ${currentList.length}`);

let updatedCount = 0;
batch23Upgrades.forEach(upgrade => {
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

console.log(`Batch 23 Upgrade Complete. ${updatedCount} characters successfully enhanced. (Hulk, Iron Man, Dr Strange, Doomsday, Jotaro, DIO).`);
