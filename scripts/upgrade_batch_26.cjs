const fs = require('fs');
const path = require('path');

const batch26Upgrades = [
  // 1. AKI HAYAKAWA
  {
    "id": "aki-hayakawa",
    "name": "Aki Hayakawa",
    "alias": "El Cazador Vengativo / El Demonio Pistola",
    "universe": "Chainsaw Man",
    "saga": "Parte 1 (Saga de Seguridad Pública)",
    "version": "Demonio Pistola / Contrato del Demonio Maldición y Futuro",
    "tier": "Tier 8-A a 7-B | Nivel Multi-Bloque a Ciudad",
    "ap": "Nivel Ciudad (Como Poseído por el Demonio Pistola). Inicialmente usaba la Espada Maldición que mata en 3 estocadas (Kon) y el Demonio Zorro. Como el Poseído por el Demonio Pistola, dispara ráfagas balísticas de alta cadencia desde su cabeza y brazo derecho que derriban rascacielos y aniquilan distritos enteros mientras en su mente alucina con una pelea de bolas de nieve.",
    "range": "Kilómetros (Balística del Demonio Pistola).",
    "speed": { "combat": "Masivamente Hipersónica (Demonio Futuro le permite ver segundos por delante).", "reaction": "Masivamente Hipersónica.", "travel": "Hipersónica.", "attack": "Lluvia incesante de balas." },
    "strength": { "striking": "Clase Multi-Bloque.", "lifting": "Clase 50+ Toneladas." },
    "durability": "Nivel Ciudad (Regeneración de poseído por ingestión de sangre).",
    "stamina": "Muy Alta.",
    "battleIQ": "Cazador metódico y disciplinado; combina el ojo del Demonio Futuro con esgrima.",
    "haxTags": [ "Demonio Pistola (Metralletas de Fuego Pesado)", "Demonio Futuro (Precognición de Segundos)", "Espada de la Maldición (Muerte en 3 Estocadas)", "Invocación de la Cabeza del Demonio Zorro ('Kon')" ],
    "arsenal": {
      "basicAttacks": "Cortes de espada tácticos y disparos balísticos pesados desde el brazo.",
      "superAttacks": [
        { "name": "Invocación 'Kon' (Demonio Zorro)", "desc": "Hace el gesto de la cabeza de zorro con la mano e invoca la boca gigante del demonio para devorar al enemigo.", "cost": "Piel/Cabello" },
        { "name": "Espada de la Maldición (Espada Clavo)", "desc": "Clava el clavo maldito tres veces en el oponente; el Demonio de la Maldición aparece y le rompe la columna vertebral causándole muerte instantánea.", "cost": "Años de Vida" }
      ],
      "ultimateAttacks": [
        { "name": "Guerra de Bolas de Nieve (Ráfaga de Fuego del Demonio Pistola)", "desc": "Dispara cientos de balas pesadas y proyectiles de cañón desde su brazo destrozando edificios y rivales creyendo inocentemente que está jugando con Denji.", "cost": "Furia del Demonio" }
      ],
      "passives": [
        { "name": "El Futuro es lo Mejor", "desc": "El Demonio del Futuro que habita en su ojo derecho le muestra visiones de los ataques enemigos un par de segundos antes de que ocurran.", "cost": "Precognición Pasiva" }
      ]
    },
    "forms": [ 
      { "id": "aki-cazador", "name": "Aki Cazador (Traje Negro)", "stats": "Nivel Multi-Bloque. Traje negro formal, moño samurái en el pelo, espada clavo a la espalda." },
      { "id": "aki-pistola", "name": "Aki Demonio Pistola", "stats": "Nivel Ciudad. Cañón de pistola emergiendo de su rostro como nariz, cargador de tambor en la nuca y ametralladora en el brazo derecho." }
    ],
    "feats": [ "Sobrevivió a encuentros contra Katana Man y el Demonio de las Sombras.", "Llevó a Denji a su límite emocional y físico en su trágica batalla final." ],
    "psychology": "Un hombre noble y trágico que sacrificó toda su vida por venganza hacia el Demonio Pistola, para luego convertirse en aquello que más odiaba.",
    "weaknesses": "Como humano, sus contratos acortaron su vida a solo un par de años."
  },
  // 2. POWER
  {
    "id": "power",
    "name": "Power",
    "alias": "El Demonio de la Sangre / La Primera Presidenta",
    "universe": "Chainsaw Man",
    "saga": "Parte 1 (Saga de Seguridad Pública)",
    "version": "Demonio de la Sangre Verdadero",
    "tier": "Tier 8-A a 7-B | Nivel Multi-Bloque a Ciudad",
    "ap": "Nivel Ciudad (Demonio de la Sangre Completo). Puede manipular la sangre libremente, creando martillos, lanzas y espadas de sangre sólida. En su forma verdadera como Demonio de la Sangre, puede hacer explotar y manipular la sangre dentro del cuerpo de sus oponentes.",
    "range": "Decenas de metros (Lanzas y Lluvia de Espadas de Sangre).",
    "speed": { "combat": "Masivamente Hipersónica.", "reaction": "Masivamente Hipersónica.", "travel": "Hipersónica.", "attack": "Lluvia de estacas de sangre." },
    "strength": { "striking": "Clase Multi-Bloque (Martillos de sangre gigantes).", "lifting": "Clase 50+ Toneladas." },
    "durability": "Nivel Ciudad (Regeneración instantánea por sangre).",
    "stamina": "Infinita mientras tenga sangre disponible.",
    "battleIQ": "Caótica, tramposa y cobarde; pero brillante al improvisar armas de sangre.",
    "haxTags": [ "Manipulación Total de la Sangre (Armas y Proyectiles)", "Forma del Demonio de la Sangre Verdadero", "Regeneración Sanguínea Rápida" ],
    "arsenal": {
      "basicAttacks": "Golpes con martillos gigantes de sangre coagulada, cuchillas de antebrazo.",
      "superAttacks": [
        { "name": "Lluvia de Espadas de Sangre (Blood Rain)", "desc": "Materializa decenas de espadas rojas en el aire y las hace caer como proyectiles sobre el rival.", "cost": "10% Sangre" }
      ],
      "ultimateAttacks": [
        { "name": "Erupción de Sangre Interna (Forma Verdadera)", "desc": "En su forma demoníaca original de cuatro brazos, manipula la sangre del interior del cuerpo del oponente haciéndola brotar como púas desde sus propios órganos.", "cost": "30% Sangre" }
      ],
      "passives": [
        { "name": "Ego Narcisista y Cobardía Táctica", "desc": "Si el enemigo es más fuerte, huye gritando y culpando a otros; si el enemigo cae, se autoproclama la ganadora suprema.", "cost": "Pasivo Cómico" }
      ]
    },
    "forms": [ 
      { "id": "power-poseida", "name": "Power Poseída", "stats": "Nivel Multi-Bloque. Chica rubia con dos cuernos rojos en la cabeza y ojos con cruces amarillas." },
      { "id": "power-demonio", "name": "Demonio de la Sangre Verdadero", "stats": "Nivel Ciudad. Monstruo colosal de cuatro brazos con cabeza esquelética y cuernos masivos." }
    ],
    "feats": [ "Rescató a Denji de las garras de Makima en el clímax de la Parte 1.", "Desafió la orden absoluta de Makima por amor fraternal hacia Denji." ],
    "psychology": "Infantil, mentirosa, gregaria y adicta a comer carne; pero desarrolló un amor incondicional por su gato Meowy y por Denji.",
    "weaknesses": "Si gasta demasiada sangre sin reponerla, sufre anemia severa y se desmaya."
  },
  // 3. REZE
  {
    "id": "reze",
    "name": "Reze",
    "alias": "El Demonio Bomba / Lady Reze",
    "universe": "Chainsaw Man",
    "saga": "Arco de la Chica Bomba",
    "version": "Híbrido del Demonio Bomba (Pico)",
    "tier": "Tier 7-B | Nivel Ciudad",
    "ap": "Nivel Ciudad. Una soldado de élite soviética entrenada desde niña. Al tirar de la anilla de granada en su cuello, se transforma en el Híbrido Bomba. Puede generar explosiones colosales desde cualquier parte de su cuerpo, propulsarse a velocidad supersónica por ondas expansivas y decapitarse para usar su cabeza como misil teledirigido.",
    "range": "Cientos de metros (Explosiones y Torpedos).",
    "speed": { "combat": "Masivamente Hipersónica (Propulsión por detonaciones).", "reaction": "Masivamente Hipersónica.", "travel": "Masivamente Hipersónica.", "attack": "Detonaciones en cadena." },
    "strength": { "striking": "Clase Ciudad (Golpes reforzados con dinamita en los nudillos).", "lifting": "Clase 100+ Toneladas." },
    "durability": "Nivel Ciudad. Inmortalidad híbrida (Se regenera de un charco de sangre tirando de su anilla).",
    "stamina": "Infinita mientras beba sangre.",
    "battleIQ": "Asesina militar soviética de operaciones negras; experta en seducción, sigilo, artes marciales y armas pesadas.",
    "haxTags": [ "Híbrido Bomba (Explosiones Ilimitadas)", "Propulsión Cinética Explosiva", "Decapitación Guiada (Cabeza Misil)", "Inmortalidad por Anilla" ],
    "arsenal": {
      "basicAttacks": "Chispas y detonaciones desde las palmas, patadas impulsadas por bombas.",
      "superAttacks": [
        { "name": "Lanzamiento de Cabeza Misil", "desc": "Se arranca la cabeza y la arroja; la cabeza vuela como un misil nuclear mientras su cuerpo se regenera en la base.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Bombardeo Satelital en Cadena", "desc": "Vuela sobre la ciudad propulsada por detonaciones y desata una lluvia de explosiones masivas que arrasan distritos completos en segundos.", "cost": "Furia Explosiva" }
      ],
      "passives": [
        { "name": "Pólvora en la Piel", "desc": "Cualquier contacto físico directo con su piel puede ser detonado instantáneamente a voluntad.", "cost": "Defensa Activa" }
      ]
    },
    "forms": [ 
      { "id": "reze-humana", "name": "Reze (Humana)", "stats": "Nivel Humano Pico. Chica con gargantilla negra con anilla, cabello morado atado." },
      { "id": "reze-bomba", "name": "Híbrido Bomba", "stats": "Nivel Ciudad. Cabeza con forma de ojiva de misil atómico, delantal hecho de cartuchos de dinamita y piel endurecida." }
    ],
    "feats": [ "Masacró a divisiones enteras de cazadores de Seguridad Pública ella sola.", "Destruyó a Denji y a Beam en múltiples ocasiones antes de ser neutralizada por Makima." ],
    "psychology": "Una espía calculadora y letal con un entrenamiento despiadado, pero que en el fondo soñaba con escapar con Denji y tener una vida escolar normal.",
    "weaknesses": "El agua abundante (como ser sumergida en el mar) sofoca sus chispas y le impide encender sus detonaciones."
  },
  // 4. A-TRAIN
  {
    "id": "a-train",
    "name": "A-Train (Reggie Franklin)",
    "alias": "El Hombre Más Rápido del Mundo / Los Siete",
    "universe": "The Boys",
    "saga": "Temporadas 1 a 4",
    "version": "Pico de Velocidad (Corazón Trasplantado / Redención)",
    "tier": "Tier 8-A | Nivel Multi-Bloque",
    "ap": "Nivel Multi-Bloque. El velocista oficial de Los Siete. Con su nuevo corazón resistente trasplantado de Blue Hawk, corre a más de Mach 3 sin riesgo de infarto. Es capaz de desintegrar personas vivas convirtiéndolas en una nube de sangre con solo atropellarlas a la carrera.",
    "range": "Físico.",
    "speed": { "combat": "Hipersónica (Mach 3+ a Mach 5).", "reaction": "Hipersónica.", "travel": "Hipersónica (Cruza ciudades en segundos).", "attack": "Impactos cinéticos ultra-veloces." },
    "strength": { "striking": "Clase Multi-Bloque por aceleración cinética.", "lifting": "Clase 10+ Toneladas (Arrastró un tren de carga).", },
    "durability": "Nivel Multi-Bloque. Piel y huesos densos adaptados a la fricción sónica.",
    "stamina": "Muy Alta tras recibir el nuevo corazón.",
    "battleIQ": "Velocista que suele depender del impulso directo, pero aprendió a pelear en equipo durante su redención.",
    "haxTags": [ "Súper Velocidad Hipersónica (Mach 3+)", "Impacto Cinético de Desintegración Corporal", "Nuevo Corazón Imparable" ],
    "arsenal": {
      "basicAttacks": "Ráfaga de puñetazos supersónicos, esquivas reflejas.",
      "superAttacks": [
        { "name": "Atropello Mortal (Como a Robin)", "desc": "Pasa a través del oponente a Mach 3; la fuerza cinética hace estallar el cuerpo del rival en una masa de sangre y huesos.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Arrastre de Asfalto (Venganza de Blue Hawk)", "desc": "Agarra al enemigo del tobillo y lo arrastra por el asfalto a 1,000 km/h durante kilómetros hasta desollar su carne contra el pavimento.", "cost": "Furia de Velocidad" }
      ],
      "passives": [
        { "name": "Metabolismo Hiperacelerado", "desc": "Sana fracturas óseas y cortes en cuestión de horas ingiriendo grandes cantidades de calorías.", "cost": "Curación Acelerada" }
      ]
    },
    "forms": [ 
      { "id": "atrain-base", "name": "A-Train", "stats": "Nivel Multi-Bloque. Traje aerodinámico azul con gafas de protección deportiva." }
    ],
    "feats": [ "Desintegró a Robin de un impacto involuntario.", "Arrastró a Blue Hawk hasta desollarlo vivo en el pavimento." ],
    "psychology": "Un atleta consumido inicialmente por el miedo a perder la fama y la relevancia, pero que maduró hacia una redención genuina ayudando a derrotar a Homelander.",
    "weaknesses": "Vulnerable a obstáculos imprevistos que rompan sus piernas (como el bate de béisbol con Temp-V de Kimiko)."
  },
  // 5. QUEEN MAEVE
  {
    "id": "queen-maeve",
    "name": "Queen Maeve (Maggie Shaw)",
    "alias": "La Guerrera de Los Siete",
    "universe": "The Boys",
    "saga": "Temporadas 1 a 3",
    "version": "Entrenamiento Secreto / Sacrificio Final",
    "tier": "Tier 7-B | Nivel Ciudad",
    "ap": "Nivel Ciudad. La segunda superheroína más fuerte de Los Siete solo por detrás de Homelander. Tras meses de entrenamiento sobrio, logró pelear mano a mano contra Homelander en la torre Vought, rompiéndole la nariz y clavándole una pajita de metal en el oído interno dejándolo sordo.",
    "range": "Físico y Espada de Acero.",
    "speed": { "combat": "Hipersónica.", "reaction": "Hipersónica.", "travel": "Atlética.", "attack": "Artes marciales pesadas." },
    "strength": { "striking": "Clase Ciudad (Partió un camión blindado en dos con el cuerpo al chocar).", "lifting": "Clase 1,000+ Toneladas." },
    "durability": "Nivel Ciudad. Sobrevivió a la explosión nuclear de Soldier Boy a quemarropa (perdiendo sus poderes pero viva).",
    "stamina": "Muy Alta.",
    "battleIQ": "La combatiente marcial más técnica y disciplinada de Los Siete.",
    "haxTags": [ "Fuerza y Durabilidad Sobrehumana de Élite", "Espada y Escudo de Guerrera", "Tolerancia Suprema al Dolor" ],
    "arsenal": {
      "basicAttacks": "Ganchos y rodillazos de boxeo tailandés, cortes de espada corta.",
      "superAttacks": [
        { "name": "Estocada de Punto Débil", "desc": "Clava objetos punzantes en las cavidades vulnerables del enemigo (como el oído de Homelander).", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Sacrificio Heroico (Plunge)", "desc": "Placlea al rival lanzándose desde ventanas de rascacielos para contener explosiones cósmicas en el aire.", "cost": "Fuerza Heroica" }
      ],
      "passives": [
        { "name": "Voluntad de Guerrera", "desc": "Inmune a la intimidación de Homelander tras aceptar que no le teme a la muerte.", "cost": "Pasivo Mental" }
      ]
    },
    "forms": [ 
      { "id": "maeve-base", "name": "Queen Maeve", "stats": "Nivel Ciudad. Armadura de amazona roja y dorada, tiara en la frente, espada corta en la cintura." }
    ],
    "feats": [ "Le sacó sangre y le rompió la nariz a Homelander en un combate 1v1.", "Sobrevivió a la explosión desintegradora de Soldier Boy." ],
    "psychology": "Una mujer cínica y desilusionada que recuperó su heroísmo y dignidad al decidir dar la vida para proteger a los inocentes.",
    "weaknesses": "Tras perder el Compuesto V, es una humana común y corriente."
  },
  // 6. BIO-BROLY
  {
    "id": "bio-broly-pel-culas-dbz-toei-858",
    "name": "Bio-Broly",
    "alias": "El Clon Mutante de Lodo",
    "universe": "Dragon Ball Z (Toei)",
    "saga": "Película 11: ¡El Combate Definitivo!",
    "version": "Clon Mutado con Biolíquido",
    "tier": "Tier 4-C a 4-B | Nivel Estrella Enana a Sistema Solar Menor",
    "ap": "Nivel Sistema Solar Menor. Un clon genético de Broly creado por el Dr. Collie y corrompido por el biolíquido químico de la isla. Su cuerpo es una masa viscosa de lodo corrosivo que absorbe materia orgánica y regenera extremidades sin sufrir daño convencional.",
    "range": "Planetario (Expansión de Biocultivo).",
    "speed": { "combat": "FTL.", "reaction": "FTL.", "travel": "Supersónica.", "attack": "Pesada y viscosa." },
    "strength": { "striking": "Clase Sistema Solar Menor.", "lifting": "Clase Masa de Lodo." },
    "durability": "Nivel Sistema Solar Menor. Fisiología maleable que absorbe impactos físicos.",
    "stamina": "Infinita mientras el biolíquido se expanda.",
    "battleIQ": "Bestia descerebrada impulsada por el rencor genético original de Broly.",
    "haxTags": [ "Fisiología Corrosiva de Biolíquido", "Absorción de Materia Orgánica", "Gigantificación por Masa Química" ],
    "arsenal": {
      "basicAttacks": "Manotazos de lodo corrosivo, tentáculos químicos.",
      "superAttacks": [
        { "name": "Eraser Cannon Mutante", "desc": "Dispara esferas verdes de Ki desde su boca y manos deformes.", "cost": "10% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Gigantificación por Biocultivo", "desc": "Absorbe todo el líquido de la isla y se convierte en un titán de lodo colosal del tamaño de una montaña.", "cost": "Absorción Química" }
      ],
      "passives": [
        { "name": "Corrosión Celular", "desc": "Cualquier ser vivo tocado por su cuerpo de lodo es disuelto y asimilado en segundos.", "cost": "Pasivo Corrosivo" }
      ]
    },
    "forms": [ 
      { "id": "biobroly-base", "name": "Bio-Broly", "stats": "Nivel Sistema Solar Menor. Monstruo de lodo marrón y verde, ojos rojos incandescentes, pelaje viscoso." }
    ],
    "feats": [ "Sometió a Goten SSJ, Trunks SSJ, Androide 18 y Krilin juntos.", "Casi infecta el océano entero con su masa celular corrosiva." ],
    "psychology": "Un monstruo sin mente consciente que solo busca destruir todo lo que esté a su alcance.",
    "weaknesses": "Vulnerabilidad extrema al agua de mar: el contacto con el agua salada solidifica su cuerpo convirtiéndolo en roca frágil que se rompe de un golpe."
  }
];

const filePath = path.resolve(__dirname, '../src/data/characters.js');
let content = fs.readFileSync(filePath, 'utf8');

const prefix = 'export const INITIAL_CHARACTERS = ';
let currentList = eval(content.replace(prefix, ''));
console.log(`Current characters count: ${currentList.length}`);

// Clean up known broken duplicate IDs
const cleanupIds = new Set([
  'ssj-saga-buu-41', 
  'ssj3-saga-buu-509', 
  'ssj-saga-buu-683', 
  'super-pel-culas-dbz-toei-877', 
  'rey-yemma-saga-saiyan-203', 
  'vegito-blue-dragon-ball-super-vb001', 
  'gogeta-blue-dbs-broly-gb001'
]);

currentList = currentList.filter(c => !cleanupIds.has(c.id));
console.log(`Cleaned up broken/duplicate fragments. Remaining count: ${currentList.length}`);

let updatedCount = 0;
batch26Upgrades.forEach(upgrade => {
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

console.log(`Batch 26 Upgrade Complete. ${updatedCount} characters successfully enhanced. (Aki, Power, Reze, A-Train, Maeve, Bio-Broly).`);
