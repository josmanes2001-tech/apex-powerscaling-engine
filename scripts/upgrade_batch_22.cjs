const fs = require('fs');
const path = require('path');

const batch22Upgrades = [
  // 1. SUPERMAN
  {
    "id": "superman-dc-909",
    "name": "Superman (Clark Kent / Kal-El)",
    "alias": "El Hombre de Acero / El Último Hijo de Krypton",
    "universe": "DC Comics",
    "saga": "Post-Crisis / Rebirth",
    "version": "Pico de Poder Solar (Radiación Solar Amarilla)",
    "tier": "Tier 2-C a 2-A | Nivel Multiversal",
    "ap": "Nivel Multiversal. Alimentado por la radiación inagotable de estrellas amarillas y azules. Sus golpes han sacudido realidades dimensionales y destruido planetas de pura fuerza de choque. Con el 'Infinite Mass Punch' golpea con masa infinita a la velocidad de la luz, y su visión calorífica rivaliza con el Big Bang.",
    "range": "Multiversal (Visión Calorífica y Grito de Frecuencia).",
    "speed": { "combat": "Inconmensurable.", "reaction": "Inconmensurable.", "travel": "MFTL+ (Cruza galaxias en segundos).", "attack": "Trascendental." },
    "strength": { "striking": "Clase Multiversal (Ha movido sistemas solares y aguantado agujeros negros con las manos).", "lifting": "Incalculable / Infinita." },
    "durability": "Nivel Multiversal. Invulnerabilidad molecular; resistió supernovas y choques dimensionales.",
    "stamina": "Infinita mientras reciba luz solar.",
    "battleIQ": "Cerebro cuántico kryptoniano capaz de procesar billones de cálculos por segundo; maestro de artes marciales alienígenas (Torquasm-Vo y Torquasm-Rao).",
    "haxTags": [ "Fisiología Kryptoniana Solar", "Visión Calorífica del Big Bang", "Aliento Ártico de Cero Absoluto", "Bio-Matriz de Invulnerabilidad" ],
    "arsenal": {
      "basicAttacks": "Puñetazos titánicos que generan ondas de choque atmosféricas masivas.",
      "superAttacks": [
        { "name": "Visión Calorífica Solar", "desc": "Dispara dos haces gemelos incandescentes capaces de reparar brechas en el espacio o calcinar planetas enteros.", "cost": "0% Ki" },
        { "name": "Aliento Ártico", "desc": "Sopla aire comprimido que congela estrellas y tornados al instante.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Infinite Mass Punch (Puñetazo de Masa Infinita)", "desc": "Acelera a velocidades relativistas extremas haciendo que su masa aumente infinitamente, impactando con la fuerza destructiva de una supernova de masa infinita.", "cost": "Impacto Máximo" },
        { "name": "Solar Flare (Super llamarada Solar)", "desc": "Libera toda la energía solar almacenada en cada célula de su cuerpo en una explosión termonuclear omnidireccional masiva.", "cost": "100% Energía Solar Almacenada" }
      ],
      "passives": [
        { "name": "Torquasm-Vo (Defensa Psíquica)", "desc": "Maestría mental kryptoniana que lo vuelve inmune a posesiones, ilusiones y control mental cósmico.", "cost": "Inmunidad Mental" }
      ]
    },
    "forms": [ 
      { "id": "superman-base", "name": "Superman (Traje Clásico)", "stats": "Nivel Multiversal. Mallas azules, capa roja, escudo de la esperanza 'S' en el pecho." },
      { "id": "superman-sundipped", "name": "Superman Sun-Dipped", "stats": "Nivel Multiversal Complejo. Tras bañarse 15 minutos en el núcleo del sol, su poder y durabilidad se multiplican de forma incalculable." }
    ],
    "feats": [ "Sostuvo un libro con páginas infinitas junto a Shazam.", "Reconstruyó una línea temporal de un solo puñetazo (Punching Reality).", "Voló más rápido que la teletransportación instantánea." ],
    "psychology": "El faro moral definitivo; cree incondicionalmente en la bondad inherente del ser humano y se contiene constantemente para no destruir la Tierra con un paso.",
    "weaknesses": "Radiación de Kryptonita verde (debilita y envenena sus células), magia mística pura y radiación de soles rojos."
  },
  // 2. BATMAN
  {
    "id": "batman-dc-910",
    "name": "Batman (Bruce Wayne)",
    "alias": "El Caballero de la Noche / El Detective Supremo",
    "universe": "DC Comics",
    "saga": "Liga de la Justicia / Batman Endgame",
    "version": "Pico Táctico (Armadura Hellbat / Plan de Contingencia)",
    "tier": "Tier 9-A Físico | Tier 2-C con Hellbat y Tiempo de Preparación",
    "ap": "Nivel Humano Pico Físico / Nivel Multiversal Bajo (Con Armadura Hellbat). El cerebro más brillante y peligroso del universo mortal. Ha diseñado planes de contingencia (Torre de Babel) para incapacitar a cada miembro de la Liga de la Justicia. Con la armadura Hellbat (forjada en el Sol por Superman y bendecida por los Dioses) puede combatir cuerpo a cuerpo contra Darkseid en Apokolips.",
    "range": "Físico y Gadgets de Alta Tecnología.",
    "speed": { "combat": "Humano Pico a Masivamente FTL+ (Con Hellbat).", "reaction": "Masivamente FTL+ (Hellbat / Radares cuánticos).", "travel": "Batmóvil / Vuelo Hellbat.", "attack": "Sigilo absoluto." },
    "strength": { "striking": "Clase Humano Pico a Clase Multiversal (Hellbat).", "lifting": "Clase 1,000+ Toneladas con servo-armadura." },
    "durability": "Nivel Humano Pico (Con traje de kevlar) a Nivel Multiversal Bajo (Hellbat resistió rayos Omega de Darkseid).",
    "stamina": "Inquebrantable por pura fuerza de voluntad.",
    "battleIQ": "El mejor detective y estratega del multiverso; analiza cada milisegundo de combate y prepara contingencias para contingencias.",
    "haxTags": [ "Tiempo de Preparación Supremo (Prep-Time)", "Armadura Hellbat", "Planes de Contingencia de la Liga de la Justicia (Kryptonita, EMP, Nanites)" ],
    "arsenal": {
      "basicAttacks": "Maestro de 127 artes marciales, uso de Batarangs de impacto y gas somnífero.",
      "superAttacks": [
        { "name": "Batarang de Kryptonita / Granadas de Frecuencia Sónica", "desc": "Despliega armas específicas diseñadas para explotar las debilidades genéticas del enemigo.", "cost": "Gadget" }
      ],
      "ultimateAttacks": [
        { "name": "Despliegue de la Armadura Hellbat", "desc": "Activa la armadura forjada por la Liga de la Justicia en el núcleo de las estrellas, volando y golpeando con fuerza para mandar a volar a Darkseid y hordas de Parademonios.", "cost": "Consume fuerza vital" }
      ],
      "passives": [
        { "name": "Siempre Cinco Pasos por Delante", "desc": "Si Batman conoce al enemigo antes del combate, inicia la batalla con el counter absoluto a su mayor habilidad.", "cost": "Prep-Time Pasivo" }
      ]
    },
    "forms": [ 
      { "id": "batman-batsuit", "name": "Caballero Oscuro (Batsuit)", "stats": "Nivel Multi-Bloque (Con gadgets). Traje gris y negro, capucha con orejas puntiagudas, capa de planeo." },
      { "id": "batman-hellbat", "name": "Armadura Hellbat", "stats": "Nivel Multiversal Bajo. Armadura negra colosal con ojos rojos brillantes, alas de murciélago de nanomateria pura." }
    ],
    "feats": [ "Sometió a toda la Liga de la Justicia en múltiples ocasiones con sus planes de contingencia.", "Se infiltró en Apokolips y rescató el sarcófago de Damian Wayne enfrentando a Darkseid." ],
    "psychology": "Paranoico, implacable y atormentado por el asesinato de sus padres; se niega a cruzar la línea moral de matar pero no tiene límites para incapacitar.",
    "weaknesses": "Es biológicamente un ser humano mortal; la armadura Hellbat drena su propio metabolismo celular si se usa por tiempo prolongado."
  },
  // 3. THE FLASH
  {
    "id": "flash",
    "name": "The Flash (Barry Allen / Wally West)",
    "alias": "El Hombre Más Rápido del Mundo / El Rayo Escarlata",
    "universe": "DC Comics",
    "saga": "Flashpoint / Crisis en Tierras Infinitas",
    "version": "Pico de la Speed Force (Fuerza de la Velocidad)",
    "tier": "Tier 2-C a 2-A | Nivel Multiversal (Viaje Temporal)",
    "ap": "Nivel Multiversal (Alteración de Líneas Temporales). El conducto viviente de la Speed Force. Puede correr más rápido que la luz, viajar en el tiempo, atravesar dimensiones paralelas y desfasar sus moléculas para que la materia sólida pase a través de él. Su Infinite Mass Punch concentra la energía cinética de toda la creación.",
    "range": "Multiversal / Temporal.",
    "speed": { "combat": "Inconmensurable a Infinita (Corre más rápido que la teletransportación instantánea y el concepto del tiempo).", "reaction": "Inconmensurable.", "travel": "Infinita (Cruza eones y líneas de tiempo corriendo).", "attack": "Trascendental." },
    "strength": { "striking": "Clase Multiversal (Por energía cinética infinita acumulada).", "lifting": "Clase Velocidad." },
    "durability": "Nivel Multiversal mediante aura de la Speed Force protectora.",
    "stamina": "Infinita mientras esté conectado a la Speed Force.",
    "battleIQ": "Científico forense genio; percibe y piensa en attosegundos.",
    "haxTags": [ "Speed Force Ilimitada", "Viaje en el Tiempo y Alteración de Líneas Temporales", "Robo de Velocidad (Speed Steal)", "Intangibilidad Molecular por Vibración" ],
    "arsenal": {
      "basicAttacks": "Golpes a velocidad de la luz, lanzar rayos de electricidad generados por su fricción.",
      "superAttacks": [
        { "name": "Robo de Velocidad (Speed Steal)", "desc": "Drena la energía cinética del oponente dejándolo congelado como una estatua viviente para siempre.", "cost": "0% Ki" },
        { "name": "Desfase Molecular (Intangibilidad)", "desc": "Vibra sus moléculas a la frecuencia exacta de la materia sólida para volverse intocable o hacer explotar objetos al atravesarlos.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Reinicio Flashpoint (Ruptura Temporal)", "desc": "Corre hacia atrás en el tiempo rompiendo la barrera temporal, reescribiendo la historia entera del universo y borrando eventos futuros.", "cost": "Paradoja Temporal" }
      ],
      "passives": [
        { "name": "Aura de la Speed Force", "desc": "Protege su cuerpo, ropa y acompañantes de la fricción destructiva del aire y de la relatividad cinética.", "cost": "Protección Pasiva" }
      ]
    },
    "forms": [ 
      { "id": "flash-base", "name": "The Flash", "stats": "Nivel Multiversal. Traje rojo carmesí con relámpagos dorados, botas amarillas." }
    ],
    "feats": [ "Superó la muerte misma (Black Racer) corriendo hasta el fin del tiempo donde la muerte no tenía significado.", "Reescribió el Multiverso de DC provocando el evento Flashpoint." ],
    "psychology": "Un héroe profundamente compasivo y esperanzador que busca salvar hasta la última vida antes de dar un solo golpe.",
    "weaknesses": "Ataques que corten su conexión con la Speed Force o trampas de paradojas temporales causadas por sus propios viajes."
  },
  // 4. DARKSEID
  {
    "id": "darkseid",
    "name": "Darkseid (Uxas)",
    "alias": "El Dios del Mal / El Señor de Apokolips",
    "universe": "DC Comics",
    "saga": "Crisis Final / Guerra de Darkseid",
    "version": "Forma Verdadera / Avatar Supremo",
    "tier": "Tier 2-C a 1-C | Nivel Multiversal Complejo",
    "ap": "Nivel Multiversal Complejo (Forma Verdadera). Darkseid no es un alienígena, sino una idea platónica viva: el concepto primordial de la tiranía y el mal. Sus Rayos Omega (Omega Beams) doblan esquinas, persiguen al objetivo interdimensionalmente y desintegran o atrapan a la víctima en la Sanción Omega (una vida infinita de tormentos).",
    "range": "Multiversal a Trascendental.",
    "speed": { "combat": "Inconmensurable.", "reaction": "Inconmensurable.", "travel": "Instantáneo (Tubo Boom / Esfera de los Dioses).", "attack": "Ineludible (Rayos Omega teledirigidos)." },
    "strength": { "striking": "Clase Multiversal Complejo.", "lifting": "Incalculable." },
    "durability": "Nivel Multiversal Complejo. Su forma verdadera es tan masiva que su simple caída colapsó el tejido del multiverso entero en Crisis Final.",
    "stamina": "Infinita Absoluta (Dios Nuevo Inmortal).",
    "battleIQ": "Milenios de dominio cósmico maquiavélico y conquista universal.",
    "haxTags": [ "Efecto Omega (Rayos de Borrado Existencial Ineludibles)", "Sanción Omega (Muerte y Renacimiento Eterno de Tormento)", "Ecuación Anti-Vida (Control de la Voluntad Cósmica)", "Inmortalidad Conceptual" ],
    "arsenal": {
      "basicAttacks": "Golpes pesados con las manos en la espalda que agrietan planetas.",
      "superAttacks": [
        { "name": "Rayos Omega (Omega Beams)", "desc": "Dispara rayos carmesí en zigzag desde los ojos que siguen al oponente a través de dimensiones hasta desintegrarlo o resucitarlo a voluntad.", "cost": "Poder Omega" }
      ],
      "ultimateAttacks": [
        { "name": "Ecuación Anti-Vida (Anti-Life Equation)", "desc": "Pronuncia la fórmula matemática que demuestra la futilidad de la existencia, subyugando la mente, alma y voluntad de todos los seres del universo para convertirlos en extensiones de Darkseid.", "cost": "Control Mental Multiversal" }
      ],
      "passives": [
        { "name": "Darkseid Es (Presencia Cósmica)", "desc": "Mientras exista la tiranía y el mal en el multiverso, su esencia no puede ser destruida de forma permanente.", "cost": "Inmortalidad Conceptual" }
      ]
    },
    "forms": [ 
      { "id": "darkseid-avatar", "name": "Avatar de Darkseid", "stats": "Nivel Multiversal. Piel rocosa gris, ojos rojos ardientes, armadura azul y botas metálicas." },
      { "id": "darkseid-true", "name": "Forma Verdadera de Darkseid", "stats": "Nivel Multiversal Complejo. Entidad dimensional abstracta colosal que habita en la Esfera de los Dioses." }
    ],
    "feats": [ "Rompió un anillo de Linterna Verde con la mano desnuda.", "Arrastró al multiverso entero hacia el colapso al descender su forma verdadera a la realidad física." ],
    "psychology": "La tiranía personificada; no busca la simple destrucción, sino el control absoluto y la sumisión de toda vida consciente.",
    "weaknesses": "La radiación del elemento Radión (tóxico para los Nuevos Dioses) y frecuencias de canto armonioso de pureza absoluta (como el canto de Superman en Final Crisis)."
  },
  // 5. THOR
  {
    "id": "thor-marvel-907",
    "name": "Thor Odinson",
    "alias": "El Dios del Trueno / El Rey de Asgard",
    "universe": "Marvel Comics",
    "saga": "Rune King Thor / All-Black Thor",
    "version": "Rey Thor (Fuerza de Odín / Runas de Yggdrasil)",
    "tier": "Tier 2-C a 2-A | Nivel Multiversal",
    "ap": "Nivel Multiversal (Fuerza de Odín y Runas). Con el martillo Mjolnir y el poder de las Runas de la Sabiduría, Thor superó a 'Aquellos que se sientan en las Sombras' cortando los hilos del destino cósmico. Su God-Blast (Ráfaga de Dios) canaliza la inmortalidad asgardiana y ha hecho retroceder a seres como Galactus.",
    "range": "Multiversal (Truenos y Rayos Interdimensionales).",
    "speed": { "combat": "Inconmensurable.", "reaction": "Inconmensurable.", "travel": "MFTL+ (Cruza las 9 Dimensiones al instante).", "attack": "Velocidad de relámpago celestial." },
    "strength": { "striking": "Clase Multiversal (Parte planetas y armaduras celestiales con Mjolnir).", "lifting": "Incalculable (Ha levantado la Serpiente de Midgard que rodea la Tierra).", },
    "durability": "Nivel Multiversal. Fisiología de Dios Asgardiano y Elder God (hijo de Gaea).",
    "stamina": "Infinita (Luchó durante meses ininterrumpidos en Jotunheim sin descansar).",
    "battleIQ": "Siglos de experiencia en batallas mitológicas y guerras cósmicas.",
    "haxTags": [ "Fuerza de Odín / Magia de las Runas", "God-Blast (Ráfaga de la Esencia Divina)", "Manipulación Absoluta del Clima y la Tormenta", "Encantamiento del Mjolnir (Solo los Dignos)" ],
    "arsenal": {
      "basicAttacks": "Martillazos atronadores con Mjolnir, golpes con el puño del trueno.",
      "superAttacks": [
        { "name": "Llamada del Trueno Celestial", "desc": "Convoca tormentas cósmicas que disparan relámpagos capaces de calcinar soles enteros.", "cost": "0% Ki" },
        { "name": "Anti-Force", "desc": "Dispara una onda de energía antagónica destructora de galaxias desde el martillo.", "cost": "15% Magia" }
      ],
      "ultimateAttacks": [
        { "name": "God-Blast (Ráfaga de Dios)", "desc": "Canaliza toda la fuerza vital y divinidad de su alma a través del Mjolnir, disparando un rayo tan devastador que quebró la armadura de Exitar el Verdugo Celestial.", "cost": "50% Fuerza Vital" }
      ],
      "passives": [
        { "name": "El Encantamiento de la Dignidad", "desc": "Ningún oponente que no sea moralmente digno según los estándares de Odín puede levantar o arrebatarle el Mjolnir.", "cost": "Escudo de Arma" }
      ]
    },
    "forms": [ 
      { "id": "thor-vengador", "name": "Thor Vengador", "stats": "Nivel Sistema Solar a Galaxia. Traje clásico con capa roja, casco con alas y Mjolnir." },
      { "id": "thor-runas", "name": "Rune King Thor", "stats": "Nivel Multiversal. Ciego de ambos ojos por el sacrificio de Odín, dominio omnisciente de las Runas y la magia asgardiana." }
    ],
    "feats": [ "Destruyó los hilos del destino cortando el ciclo eterno del Ragnarok.", "Hizo retroceder a Galactus hambriento de un God-Blast directo." ],
    "psychology": "Un guerrero honorable y orgulloso pero con un corazón humilde que valora el sacrificio de sus aliados y hermanos de armas.",
    "weaknesses": "Furia de Guerrero (Warrior's Madness), un estado de locura berserker que multiplica su fuerza pero le hace perder la razón táctica."
  },
  // 6. THANOS
  {
    "id": "thanos",
    "name": "Thanos de Titán",
    "alias": "El Titán Loco / El Avatar de la Muerte",
    "universe": "Marvel Comics",
    "saga": "El Guantelete del Infinito / Infinity",
    "version": "Pico Cósmico (Guantelete del Infinito / Poder Eterno)",
    "tier": "Tier 2-C Físico | Tier 2-A con Guantelete del Infinito",
    "ap": "Nivel Multiversal (Con el Guantelete del Infinito). El titán mutante más temido del cosmos. En su base derrota a Hulk, Thor y Silver Surfer sin esfuerzo. Con las 6 Gemas del Infinito (Espacio, Mente, Alma, Realidad, Tiempo y Poder) posee omnipotencia, omnisciencia y omnipresencia dentro de su universo, derrotando a todas las entidades cósmicas (Galactus, Eternidad, Muerte, Orden y Caos) simultáneamente.",
    "range": "Multiversal.",
    "speed": { "combat": "Inconmensurable.", "reaction": "Inconmensurable.", "travel": "Instantáneo (Gema del Espacio / Teletransporte cuántico).", "attack": "Trascendental." },
    "strength": { "striking": "Clase Multiversal.", "lifting": "Incalculable." },
    "durability": "Nivel Multiversal. Invulnerabilidad casi absoluta y rechazo de la propia Dama Muerte a recibir su alma.",
    "stamina": "Infinita.",
    "battleIQ": "Uno de los mayores intelectos científicos y tácticos de Marvel; domina la biotecnología, la hechicería mística y la cosmología.",
    "haxTags": [ "Guantelete del Infinito (Control de las 6 Leyes del Cosmos)", "Manipulación de Realidad y Materia", "Inmortalidad por Destierro de la Muerte", "Intelecto de Nivel Cósmico" ],
    "arsenal": {
      "basicAttacks": "Bofetadas y golpes de fuerza bruta que noquean seres de nivel cósmico.",
      "superAttacks": [
        { "name": "Ráfaga de Energía Cósmica", "desc": "Dispara rayos devastadores desde sus manos y ojos que desintegran planetas.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "El Chasquido del Infinito (The Snap)", "desc": "Chasquea los dedos con el Guantelete borrando al 50% (o 100%) de toda la vida existente en el universo de forma instantánea.", "cost": "1 Chasquido" },
        { "name": "Confinamiento de Entidades Cósmicas", "desc": "Encierra a dioses como Galactus y Kronos en bloques de estasis dimensional eterna.", "cost": "Uso de Gemas" }
      ],
      "passives": [
        { "name": "Rechazado por la Muerte", "desc": "La Muerte lo ha desterrado de su reino, haciéndolo incapaz de morir de forma definitiva por medios convencionales.", "cost": "Inmortalidad Pasiva" }
      ]
    },
    "forms": [ 
      { "id": "thanos-base", "name": "Titán Loco (Base)", "stats": "Nivel Sistema Solar a Galaxia. Armadura dorada y azul, piel morada arrugada." },
      { "id": "thanos-ig", "name": "Thanos con Guantelete del Infinito", "stats": "Nivel Multiversal. Guantelete dorado brillante con las 6 gemas cósmicas en la mano izquierda." }
    ],
    "feats": [ "Derrotó a la personificación del universo (Eternidad) y tomó su lugar en el cosmos.", "Humilló a los Vengadores, X-Men y entidades cósmicas juntos en Infinity Gauntlet." ],
    "psychology": "Obsesionado con la filosofía de la nada y el amor no correspondido por la Dama Muerte; subconscientemente siempre deja una ventana de fallo debido a que en el fondo sabe que no es digno de ser Dios.",
    "weaknesses": "Su propio complejo de inferioridad subconsciente que lo lleva a perder el control de sus artefactos de omnipotencia."
  }
];

const filePath = path.resolve(__dirname, '../src/data/characters.js');
let content = fs.readFileSync(filePath, 'utf8');

const prefix = 'export const INITIAL_CHARACTERS = ';
let currentList = eval(content.replace(prefix, ''));
console.log(`Current characters count: ${currentList.length}`);

let updatedCount = 0;
batch22Upgrades.forEach(upgrade => {
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

console.log(`Batch 22 Upgrade Complete. ${updatedCount} characters successfully enhanced. (Superman, Batman, Flash, Darkseid, Thor, Thanos).`);
