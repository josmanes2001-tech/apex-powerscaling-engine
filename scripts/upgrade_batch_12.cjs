const fs = require('fs');
const path = require('path');

const batch12Upgrades = [
  // 1. CABBA (PATCHING FORMS)
  {
    "id": "cabba-dragon-ball-super-566",
    "name": "Cabba",
    "alias": "El Orgullo de Sadala",
    "universe": "Dragon Ball Super",
    "saga": "Torneo del Poder",
    "version": "Guerrero Saiyajin de Élite",
    "tier": "Tier 3-A | Nivel Universal",
    "ap": "Nivel Universal. Un joven prodigio de los Saiyajin del U6. A pesar de ser delgado, su poder base equiparaba increíblemente al nivel base de Vegeta (post-saga Buu). Sus ataques son contundentes, derribando guerreros de choque y soportando daños formidables por su maestro, especialmente al usar su SSJ2.",
    "range": "Planetario.",
    "speed": { "combat": "MFTL+.", "reaction": "MFTL+.", "travel": "MFTL+.", "attack": "Ráfaga rápida." },
    "strength": { "striking": "Clase Universal.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Universal. Soporta palizas brutales negándose a caer por respeto a su honor.",
    "stamina": "Alta.",
    "battleIQ": "Estilo militar formal. Lucha como un soldado del escuadrón de defensa.",
    "haxTags": [ "Estilo de Combate Espejo (Como Vegeta)", "Evolución por Traición/Furia" ],
    "arsenal": {
      "basicAttacks": "Golpes y patadas firmes y rectos.",
      "superAttacks": [
        { "name": "Cañón Galick (Galick Gun)", "desc": "Adoptando la misma pose que Vegeta, dispara una ola púrpura idéntica.", "cost": "20% Ki" },
        { "name": "Lluvia de Ataques Rápidos", "desc": "Docenas de ráfagas amarillas consecutivas.", "cost": "10% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Impacto Orgullo de Sadala (SSJ2 Rush)", "desc": "En un estallido de ira y honor por las enseñanzas de Vegeta, Cabba descarga toda su Ki en un asalto suicida frontal rematado por un cañón gigante.", "cost": "60% Ki" }
      ],
      "passives": [
        { "name": "Promesa al Maestro", "desc": "Su resistencia y AP aumentan críticamente cuando está al borde de la eliminación.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ 
      { "id": "cabba-base", "name": "Saiyan Base", "stats": "Nivel Universal. Físico muy delgado, traje morado de Sadala." },
      { "id": "cabba-ssj", "name": "Super Saiyan 1", "stats": "Nivel Universal. Cabello erizado dorado." },
      { "id": "cabba-ssj2", "name": "Super Saiyan 2", "stats": "Nivel Universal. Pelo más afilado, electricidad azul, mirada endurecida de guerrero fiero." } 
    ],
    "feats": [ "Igualó a Vegeta Base en su estado Base original.", "Eliminó a Monna (U4) tras despertar el SSJ2." ],
    "psychology": "Noble, puro de corazón y defensor de la paz. Respeta a Vegeta como a un Dios.",
    "weaknesses": "Le falta músculo y malicia en el combate real cuerpo a cuerpo."
  },
  // 2. GOTENKS (PATCHING FORMS)
  {
    "id": "gotenks-base-saga-buu-858",
    "name": "Gotenks",
    "alias": "El Héroe Definitivo de la Justicia",
    "universe": "Dragon Ball Z",
    "saga": "Saga de Buu",
    "version": "Fusión Metamoru Prodigio",
    "tier": "Tier 4-B a 4-A | Nivel Sistema Solar a Multi-Sistema Solar",
    "ap": "Nivel Multi-Sistema Solar. La fusión cómica pero inmensamente poderosa de Goten y Trunks. En SSJ3, su poder era suficiente para barrer el piso con Super Buu (temporalmente), siendo el mortal más fuerte de la Tierra después de Gohan Definitivo.",
    "range": "Sistema Solar (Ataques Kamikaze Fantasmas).",
    "speed": { "combat": "MFTL+.", "reaction": "MFTL+.", "travel": "MFTL+ (Dio varias vueltas a la Tierra durmiendo la siesta en segundos).", "attack": "Veloz." },
    "strength": { "striking": "Clase Sistema Solar.", "lifting": "Clase Estelar." },
    "durability": "Nivel Sistema Solar. En SSJ3 resiste los embates furiosos de Super Buu.",
    "stamina": "Baja en SSJ3 (Drena la fusión a 5 minutos). Media en Base/SSJ.",
    "battleIQ": "Infantil, arrogante y ridículo. Gasta tiempo haciendo poses, poniéndoles nombres largos a los golpes, y dejando que el enemigo se recupere solo por el espectáculo.",
    "haxTags": [ "Fusión Metamoru", "Magia Cómica (Creación de Fantasmas Vudú)", "Atrapamiento de Voleibol" ],
    "arsenal": {
      "basicAttacks": "Golpes a lo loco con nombres como 'Magnum Brain Chop' o 'Miracle Super Punch'.",
      "superAttacks": [
        { "name": "Ataque Kamikaze de los Súper Fantasmas (Super Ghost Kamikaze Attack)", "desc": "Escupe de su boca fantasmas de Ki idénticos a él. Tienen voluntad propia y, si tocan cualquier cosa, explotan con daño de nivel estelar.", "cost": "20% Ki" },
        { "name": "Aros Galácticos (Galactic Donut)", "desc": "Crea anillos de Ki que apresan al enemigo reduciéndolos a una pelota.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Remate de Voleibol Ultra Buu", "desc": "Encierra al enemigo en los Aros Galácticos, formando una pelota de voleibol con él, y lo remata contra el suelo en un cráter gigante (En colaboración con Piccolo).", "cost": "45% Ki" }
      ],
      "passives": [
        { "name": "Sobre-confianza Cómica", "desc": "Sus ataques más fuertes a veces fallan porque se muerde la lengua o se olvida el plan a mitad de la carga.", "cost": "Debuff Cómico" }
      ]
    },
    "forms": [ 
      { "id": "gotenks-base", "name": "Gotenks Base", "stats": "Nivel Sistema Solar Menor. Cabello mitad morado, mitad negro." },
      { "id": "gotenks-ssj", "name": "Super Saiyan 1", "stats": "Nivel Sistema Solar." },
      { "id": "gotenks-ssj3", "name": "Super Saiyan 3", "stats": "Nivel Multi-Sistema Solar. Pelo dorado hasta las rodillas, electricidad, aura abrumadora." }
    ],
    "feats": [ "Forzó a Super Buu a usar la magia dimensional para escapar del cuarto del tiempo.", "Destrozó la barrera dimensional con un grito de SSJ3." ],
    "psychology": "Un mocoso mimado, que cree que las batallas por la supervivencia del universo son un juego de superhéroes para lucirse.",
    "weaknesses": "Límite de fusión de 30 minutos (5 mins en SSJ3). Arrogancia estúpida que le cuesta las victorias ganadas."
  },
  // 3. VEGETA (MAESTRO KAIO-KEN - BROKOLY)
  {
    "id": "vegeta-kaioken-brokoly",
    "name": "Vegeta (Kaio-ken Maestro)",
    "alias": "El Príncipe de los Dioses Marciales",
    "universe": "Dragon Ball What-if (Brokoly350)",
    "saga": "Ruta Alterna: Entrenamiento de Kaio-Sama",
    "version": "Kaio-ken x20 (Estabilizado)",
    "tier": "Tier 4-B | Nivel Sistema Solar",
    "ap": "Nivel Sistema Solar. En este What-if, Vegeta acepta entrenar con Kaio-sama y aprende a estabilizar el Kaio-ken mejor que Goku debido a su control de Ki superior como élite. Combinado con el Super Saiyan y su Final Flash, destruye oponentes de la talla de Cell Perfecto y Majin Buu con multiplicadores de daño absurdos sin destrozar su cuerpo.",
    "range": "Planetario a Sistema Solar.",
    "speed": { "combat": "MFTL+.", "reaction": "MFTL+.", "travel": "MFTL+.", "attack": "Velocidad Kaio-ken x20 instantánea." },
    "strength": { "striking": "Clase Sistema Solar.", "lifting": "Clase Estelar." },
    "durability": "Nivel Sistema Solar. Su resistencia se ve mermada por el uso del Kaio-ken, pero su voluntad es inquebrantable.",
    "stamina": "Media-Alta.",
    "battleIQ": "Combina su brutalidad genética con el misticismo divino de Kaio.",
    "haxTags": [ "Multiplicador Kaio-ken Perfecto", "Fusión de Aura Dual (Dorada/Carmesí)" ],
    "arsenal": {
      "basicAttacks": "Golpes fulminantes con la fuerza del Kaio-ken x10.",
      "superAttacks": [
        { "name": "Galick Gun x20", "desc": "Dispara su cañón morado impregnado de aura carmesí.", "cost": "25% Ki / 10% HP" }
      ],
      "ultimateAttacks": [
        { "name": "Final Flash (Super Kaio-ken)", "desc": "Activa el SSJ y el Kaio-ken simultáneamente. Un destello final amarillo/rojo letal, sacrificando gran parte de su sistema nervioso por el golpe definitivo.", "cost": "60% Ki / 30% HP" }
      ],
      "passives": [
        { "name": "Orgullo Controlado", "desc": "Al usar técnicas divinas, no cae en provocaciones infantiles.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ 
      { "id": "vegeta-base-kaioken", "name": "Vegeta Kaio-ken", "stats": "Nivel Estrella. Aura roja." },
      { "id": "vegeta-ssj-kaioken", "name": "Super Saiyan Kaio-ken", "stats": "Nivel Sistema Solar. Aura dual roja y dorada, extrema presión." }
    ],
    "feats": [ "Evaporó a Cell en su segunda forma de un solo golpe.", "Sobrevivió al uso del Kaio-ken x20 en SSJ sin morir." ],
    "psychology": "Mucho más calmado, honrando las enseñanzas divinas pero reteniendo su instinto de monarca.",
    "weaknesses": "Desgaste muscular extremo si se prolonga la batalla."
  },
  // 4. RADITZ REDIMIDO (BROKOLY)
  {
    "id": "raditz-redimido-brokoly",
    "name": "Raditz",
    "alias": "El Hermano Mayor Redimido",
    "universe": "Dragon Ball What-if (Brokoly350)",
    "saga": "Ruta Alterna: Superviviente",
    "version": "Super Saiyan 2 / Guerrero Z",
    "tier": "Tier 4-B | Nivel Sistema Solar",
    "ap": "Nivel Sistema Solar. Goku lo convenció de unirse a ellos. Años de entrenamiento con Piccolo, Gohan y su hermano, forjaron a Raditz en un guerrero noble. Su largo cabello en estado SSJ3 es un espectáculo visual masivo. Defiende la Tierra con su técnica 'Double Sunday' elevada a niveles destructores de planetas.",
    "range": "Sistema Solar.",
    "speed": { "combat": "MFTL.", "reaction": "MFTL.", "travel": "MFTL.", "attack": "Veloz." },
    "strength": { "striking": "Clase Sistema Solar.", "lifting": "Clase Estelar." },
    "durability": "Nivel Sistema Solar. Acostumbrado a los Zenkai de entrenar con Goku.",
    "stamina": "Alta.",
    "battleIQ": "Experimentado. Ya no depende del Scouter, aprendiendo a sentir el Ki a la perfección.",
    "haxTags": [ "Fuerza Bruta Saiyan", "Doble Disparo de Ki (Ráfagas Duales)" ],
    "arsenal": {
      "basicAttacks": "Artes marciales combinadas (Tierra/Saiyan).",
      "superAttacks": [
        { "name": "Saturday Crash (Mejorado)", "desc": "Una esfera aturdidora masiva.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Weekend Final (Doble Sunday Divino)", "desc": "Canaliza todo su Ki de SSJ2/SSJ3 en dos ondas gemelas gigantescas rosadas que envuelven al enemigo en un tifón de energía.", "cost": "45% Ki" }
      ],
      "passives": [
        { "name": "Lazo Fraternal", "desc": "Si Goku o Gohan están heridos, su poder de ataque aumenta drásticamente (La sangre Saiyan lo protege).", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ 
      { "id": "raditz-redimido-base", "name": "Guerrero Z", "stats": "Nivel Estrella Enana. Dogi de combate, sin Scouter, cola amarrada." },
      { "id": "raditz-redimido-ssj2", "name": "Super Saiyan 2", "stats": "Nivel Sistema Solar. Cabello dorado larguísimo (idéntico al SSJ3 pero con cejas), electricidad." }
    ],
    "feats": [ "Sustituyó a Vegeta como el eterno rival y aliado de Goku en muchas batallas tempranas.", "Derrotó a Nappa y a las Fuerzas Ginyu sin sudar." ],
    "psychology": "Siente gran remordimiento por haber secuestrado a Gohan en el pasado. Es un tío protector y un guerrero leal a la Tierra, manteniendo algo de su orgullo áspero.",
    "weaknesses": "Le cuesta asimilar técnicas complejas de Ki mágico (Shunkanido), dependiendo más de ráfagas brutas."
  },
  // 5. SAIBAMAN MUTANTE (BROKOLY)
  {
    "id": "saibaman-mutante-brokoly",
    "name": "Saibaman (Mutante)",
    "alias": "El Superviviente Evolutivo",
    "universe": "Dragon Ball What-if (Brokoly350)",
    "saga": "Ruta Alterna: Saibaman Entrenado",
    "version": "Zen-Kai Botánico Supremo",
    "tier": "Tier 4-C | Nivel Estrella Enana",
    "ap": "Nivel Estrella Enana. Un Saibaman que sobrevivió a la Saga Saiyan, huyó al bosque y comenzó a entrenar asimilando la fauna y energía de la Tierra. Desarrolló consciencia propia, inteligencia táctica y un poder ridículamente alto, rivalizando con los Androides, escupiendo un ácido capaz de derretir Katchin.",
    "range": "Planetario (Ácido corrosivo).",
    "speed": { "combat": "FTL.", "reaction": "FTL.", "travel": "Supersónica.", "attack": "Velocidad Feral." },
    "strength": { "striking": "Clase Estrella Enana.", "lifting": "Clase Montañas." },
    "durability": "Nivel Estrella Enana. Su cuerpo se regenera si es plantado en la tierra o absorbe luz solar/agua.",
    "stamina": "Infinita (Fotosíntesis de Ki).",
    "battleIQ": "Animal inteligente, como una pantera asesina entrenada. Usa tácticas de guerrilla.",
    "haxTags": [ "Ácido Corrosivo Absoluto", "Clonación por Semillas", "Regeneración Botánica" ],
    "arsenal": {
      "basicAttacks": "Garras afiladas con veneno, mordiscos rompe-cuellos.",
      "superAttacks": [
        { "name": "Lluvia de Ácido (Chou Makouhou Corrosivo)", "desc": "Dispara desde el cráneo un géiser de ácido verde brillante que deshace escudos de energía.", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "El Bosque de la Muerte (Auto-Destrucción Infinita)", "desc": "Planta docenas de clones de sí mismo de igual poder en el suelo. Todos saltan simultáneamente sobre el enemigo y se autodestruyen en una reacción en cadena masiva. El original sobrevive bajo tierra.", "cost": "60% Ki" }
      ],
      "passives": [
        { "name": "Fotosíntesis Ki", "desc": "Regenera pasivamente el 5% de su vida cada turno si el combate es a la luz del día.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "saibaman-mutante-base", "name": "Guerrero Evolutivo", "stats": "Nivel Estrella Enana. Color verde oscuro, más musculoso, ojos afilados, cicatrices." } ],
    "feats": [ "Pudo sobrevivir emboscadas a guerreros nivel Cell Imperfecto." ],
    "psychology": "Solitario, respeta a aquellos que protegen la naturaleza. Ya no obedece a los Saiyans, desarrollando un odio a Nappa y Vegeta.",
    "weaknesses": "Vulnerable a ataques de congelación o fuego masivos que arruinen su capacidad regenerativa celular-vegetal."
  },
  // 6. BABY VEGETA GOD (BROKOLY)
  {
    "id": "baby-vegeta-god-brokoly",
    "name": "Super Baby Vegeta",
    "alias": "El Dios Tsufuru de la Venganza",
    "universe": "Dragon Ball What-if (Brokoly350)",
    "saga": "Ruta Alterna: Baby absorbe Ki Divino",
    "version": "Super Saiyan God (Tsufuru-ki)",
    "tier": "Tier 2-C | Nivel Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. Al invadir el cuerpo de un Vegeta de la era Super (con acceso al Ki Divino), Baby asimila la energía de los dioses. Su 'Super Baby God' mezcla el fuego blanco y carmesí con la venganza mutante, volviéndolo una amenaza capaz de derrotar al Ultra Instinto imperfecto y aniquilar universos con su Death Ball Divina.",
    "range": "Universal.",
    "speed": { "combat": "Inconmensurable.", "reaction": "Inconmensurable.", "travel": "MFTL+.", "attack": "Velocidad Divina." },
    "strength": { "striking": "Clase Multiversal Bajo.", "lifting": "Clase Universal." },
    "durability": "Nivel Multiversal Bajo. Piel divina protegida por el parásito mutante.",
    "stamina": "Infinita temporal (se alimenta del cuerpo de Vegeta).",
    "battleIQ": "Megalomaniaco divino, cruel e impecablemente calculador.",
    "haxTags": [ "Posesión de Ki Divino", "Death Ball Negativa", "Regeneración Mutante" ],
    "arsenal": {
      "basicAttacks": "Golpes elegantes envueltos en fuego divino blanco y negro.",
      "superAttacks": [
        { "name": "Big Bang Attack Oscuro", "desc": "Versión Tsufuru del ataque de Vegeta.", "cost": "15% Ki Divino" }
      ],
      "ultimateAttacks": [
        { "name": "Death Ball Vengativa Divina", "desc": "Concentra el odio de los Tsufuru mezclado con Hakai y energía divina en una esfera inmensa negra y carmesí. Destruye sistemas solares instantáneamente.", "cost": "60% Ki Divino" }
      ],
      "passives": [
        { "name": "Inmunidad al Veneno/Parásitos", "desc": "No puede ser poseído o corrompido, ya que él es el parásito definitivo.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ 
      { "id": "baby-vegeta-god", "name": "Baby God (SSG Tsufuru)", "stats": "Nivel Multiversal Bajo. Cabello rojo fuego divino modificado a blanco-plateado por las líneas de mutación Tsufuru en el rostro. Aura flamígera negra y blanca." } 
    ],
    "feats": [ "Sometió a Goku UI Señal usando tácticas de absorción divina." ],
    "psychology": "Cree ser el salvador legítimo del universo, considerando el ki de los dioses como el derecho de nacimiento de su raza extinguida.",
    "weaknesses": "Separación del huésped; si sufre un daño purificador espiritual supremo (Fisión Forzada del Espíritu), Baby es expulsado."
  },
  // 7. GOHAN FUTURO (VENCEDOR DISTÓPICO - BROKOLY)
  {
    "id": "gohan-futuro-brokoly",
    "name": "Gohan del Futuro",
    "alias": "El Vencedor Distópico",
    "universe": "Dragon Ball What-if (Brokoly350)",
    "saga": "Ruta Alterna: Gohan derrota a los Androides",
    "version": "Defensor Solitario de la Tierra",
    "tier": "Tier 4-B | Nivel Sistema Solar",
    "ap": "Nivel Sistema Solar. Gohan (Manco) logró desbloquear el SSJ2 en su batalla final contra los androides, aniquilándolos a ambos sin piedad y vengando a su maestro. En los años posteriores, se dedicó a entrenar y cazar a Babidi, logrando acceder a la Espada Z y volviéndose el Gohan Definitivo (con un solo brazo), siendo la muralla inexpugnable del futuro.",
    "range": "Sistema Solar (Masenko Máximo).",
    "speed": { "combat": "MFTL.", "reaction": "MFTL.", "travel": "MFTL.", "attack": "Veloz." },
    "strength": { "striking": "Clase Sistema Solar.", "lifting": "Clase Estelar (Usa ki para compensar su brazo perdido)." },
    "durability": "Nivel Sistema Solar. Curado en el combate crudo. Tiene más resistencia al dolor que el Gohan del presente.",
    "stamina": "Muy Alta. Dispuesto a luchar por días.",
    "battleIQ": "No hay juegos. Si ve una amenaza (como Dabura o Cell 1ra forma), los desintegra en los primeros segundos de combate sin preguntar.",
    "haxTags": [ "Magia Definitiva (Kaioshin Unlock)", "Manejo de Espada Z a una mano" ],
    "arsenal": {
      "basicAttacks": "Golpes pesados con su brazo derecho, patadas rompe-huesos implacables.",
      "superAttacks": [
        { "name": "Kamehameha Manco", "desc": "Técnica perfeccionada de carga rápida con una mano.", "cost": "20% Ki" },
        { "name": "Tajo de la Espada Z", "desc": "Cortes masivos con el arma de los Kaioshin.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Masenko Definitivo (Explosión de Rabia)", "desc": "Condensa todo su potencial místico en su brazo derecho; dispara un pilar de luz amarillo que desintegra al instante, técnica con la que borró a Cell imperfecto del mapa.", "cost": "50% Ki" }
      ],
      "passives": [
        { "name": "Guerrero Sin Piedad", "desc": "Ignora el primer turno de defensas especiales del enemigo si es un Androide o Demonio (Por su odio y pragmatismo).", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ 
      { "id": "gohan-futuro-definitivo", "name": "Estado Místico (Manco)", "stats": "Nivel Sistema Solar. Cicatriz en la cara, sin brazo izquierdo, ropa de Piccolo, aura blanca/plateada transparente." } 
    ],
    "feats": [ "Mató a Dabura y Babidi antes de que pudieran resucitar a Majin Buu.", "Destruyó a Cell en su primera forma fácilmente." ],
    "psychology": "Frío, estoico pero inmensamente amable con su pueblo. A diferencia de su homólogo del presente (Gran Saiyaman), él es un soldado de guerra que valora la paz obtenida con sangre.",
    "weaknesses": "Falta del brazo izquierdo limita su agarre cuerpo a cuerpo. Dependiente excesivo de ráfagas Ki o ataques de piernas."
  },
  // 8. BROLY KAKUMEI
  {
    "id": "broly-kakumei",
    "name": "Broly",
    "alias": "El Berserker de la Destrucción / Furia Controlada",
    "universe": "Dragon Ball Kakumei (Fan Manga)",
    "saga": "Universo 0 / Rebelión",
    "version": "Guerrero Hakaishin Aprendiz (Ira Controlada)",
    "tier": "Tier 2-C | Nivel Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. Entrenado intensamente por Whis, Beerus y Goku en Kakumei, Broly domina su poder Legendario y comienza a aprender a infundirlo con energía Hakai, convirtiéndose en el destructor bruto más fuerte de la historia. Su nivel Full Power pulveriza barreras cósmicas y aterra a los Ángeles de otros universos.",
    "range": "Multiversal (Explosiones verdes).",
    "speed": { "combat": "Inconmensurable.", "reaction": "Inconmensurable.", "travel": "MFTL+.", "attack": "Implacable." },
    "strength": { "striking": "Clase Multiversal Bajo (Su punto más fuerte, rompe planetas con un paso).", "lifting": "Clase Universal." },
    "durability": "Nivel Multiversal Bajo. Prácticamente inmatable frente a golpes físicos, el daño lo hace enojar y lo hace más fuerte.",
    "stamina": "Monstruosa infinita.",
    "battleIQ": "Salvaje pero domado. Ahora sabe usar bloqueos de artes marciales básicos enseñados por Goku.",
    "haxTags": [ "Evolución Exponencial en Combate", "Aura de Hakai Legendario", "Ki Verde Mutante Absoluto" ],
    "arsenal": {
      "basicAttacks": "Golpes demoledores que parten la tierra, rugidos sónicos, agarres que destrozan la espina dorsal.",
      "superAttacks": [
        { "name": "Eraser Cannon Múltiple", "desc": "Dispara cientos de bolas verdes erráticas a la velocidad de la luz.", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Hakai Gigantic Roar (Estallido de la Bestia Dios)", "desc": "Grita expulsando una onda de choque verde y púrpura. Su Ki base combinado con la destrucción divina evapora sistemas solares enteros y pulveriza entidades cósmicas tier Dios. Rompe la tela del espacio a su alrededor (Rompe-dimensiones).", "cost": "60% Ki" }
      ],
      "passives": [
        { "name": "Poder Infinito Despierto", "desc": "Recupera pasivamente 10% de HP y Ki cada turno y su Poder de Ataque sube un 5% acumulativo.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ 
      { "id": "broly-fssj", "name": "Super Saiyan Legendario", "stats": "Nivel Multiversal Bajo. Pelo verde, músculos gigantes, pero ahora con los ojos controlados (con pupilas afiladas) y armadura Saiyan." }
    ],
    "feats": [ "Sometió a soldados del Universo 0 por pura fuerza bruta.", "Sobrevivió el entrenamiento intensivo de Beerus a muerte." ],
    "psychology": "De corazón puro, pacífico por naturaleza. Pelea porque Goku y Vegeta son sus amigos y siente que debe proteger el universo que lo acogió. Si hieren a sus amigos (Lemo/Cheelai), pierde el control total.",
    "weaknesses": "Lento en reacción inicial comparado con el Ultra Instinto. Puede ser víctima de ataques de desgaste dimensionales si lo aíslan."
  },
  // 9. AMOND KAKUMEI
  {
    "id": "amond-kakumei",
    "name": "Amond",
    "alias": "El Primordial del Universo 0",
    "universe": "Dragon Ball Kakumei (Fan Manga)",
    "saga": "Reino Cero",
    "version": "Bestia Primordial de la Destrucción",
    "tier": "Tier 2-C | Nivel Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo (Extremo). Una de las criaturas divinas selladas en el Universo 0. Posee un poder antiguo que ignora completamente las reglas de los Ángeles y de los Dioses de la Destrucción. Sus ataques y presencia física amenazan con colapsar a guerreros de la élite de Zeno-sama. (Su encarnación de Kakumei lo eleva a Dios).",
    "range": "Universal (Materia oscura).",
    "speed": { "combat": "Inconmensurable.", "reaction": "Inconmensurable.", "travel": "MFTL+.", "attack": "Veloz por superioridad estadística." },
    "strength": { "striking": "Clase Multiversal Bajo.", "lifting": "Clase Multiversal (Maneja agujeros negros físicos)." },
    "durability": "Nivel Multiversal Bajo. Armadura natural cósmica impenetrable por ataques que no sean divinos de máximo nivel (UI/UE).",
    "stamina": "Infinita Absoluta.",
    "battleIQ": "Inteligencia antigua, arrogante. Ve a los mortales y dioses como polvo insignificante.",
    "haxTags": [ "Manipulación de Materia Oscura / Cero", "Anulación de Ki Divino Básico", "Regeneración Cósmica" ],
    "arsenal": {
      "basicAttacks": "Golpes pesados de gravedad, pisotones y ráfagas que anulan la magia.",
      "superAttacks": [
        { "name": "Prisión de Cero", "desc": "Encierra al rival en una caja de gravedad de 1,000,000x.", "cost": "20% Magia Oscura" }
      ],
      "ultimateAttacks": [
        { "name": "Vórtice del Borrado Primigenio", "desc": "Abre la boca / manos y genera un agujero negro primordial que succiona universos enteros, rompiendo los avatares de Ki gigantes de guerreros UI.", "cost": "70% Ki Oscuro" }
      ],
      "passives": [
        { "name": "Ley del Universo Cero", "desc": "Cualquier ataque de oponentes que no hayan entrenado en el Universo Cero (Hakai o Ki regular) ve su daño reducido en un 90%.", "cost": "Defensa Absoluta" }
      ]
    },
    "forms": [ { "id": "amond-bestia", "name": "Avatar Primordial", "stats": "Nivel Multiversal Bajo. Entidad gigantesca, ropaje antiguo, aura negra y roja asfixiante." } ],
    "feats": [ "Sometió a Dioses Destructores como si fueran niños." ],
    "psychology": "Una deidad que no entiende de piedad ni maldad; solo existe para devolver la existencia a la nada. Actúa como una fuerza de la naturaleza implacable.",
    "weaknesses": "Lento en movilidad (Depende de tanquear ataques). Vulnerable al Ultra Instinto Verdadero o técnicas cooperativas divinas."
  },
  // 10. KAKAROTTO (DB AFTER)
  {
    "id": "kakarotto-db-after",
    "name": "Kakarotto",
    "alias": "El Saiyan Corrupto / Instinto Primitivo",
    "universe": "Dragon Ball After (Fan Manga)",
    "saga": "La Caída de la Tierra",
    "version": "Goku (Daño Cerebral Restaurado)",
    "tier": "Tier 4-B | Nivel Sistema Solar a Multi-Sistema Solar",
    "ap": "Nivel Multi-Sistema Solar (En SSJ3 / Forma base oscura). Tras un golpe letal en la cabeza que re-activa sus memorias originales de bebé Saiyan, el alma bondadosa de Goku muere, renaciendo el asesino implacable Kakarotto. Armado con todo el entrenamiento de los dioses y el cuerpo de Goku, sumado al instinto genocida, masacra sin piedad a sus propios amigos usando el Super Saiyan 3 con una eficiencia letal superior.",
    "range": "Sistema Solar.",
    "speed": { "combat": "MFTL+.", "reaction": "MFTL+.", "travel": "Instantáneo (Shunkanido Sádico).", "attack": "Velocidad lumínica sin moral." },
    "strength": { "striking": "Clase Sistema Solar (Arranca cabezas sin esfuerzo).", "lifting": "Clase Estelar." },
    "durability": "Nivel Sistema Solar. No le importa usar a sus amigos como escudo y sacrificar sus propias extremidades para ganar.",
    "stamina": "Muy Alta. La maldad pura parece optimizar su uso de energía en SSJ3.",
    "battleIQ": "Extremadamente letal. Usó el Shunkanido para teletransportarse al espacio y dejar que Piccolo y Gohan se ahogaran. Juega sucio.",
    "haxTags": [ "Fuerza Bruta Corrupta", "Manejo Letal del Shunkanido", "Falta de Empatía" ],
    "arsenal": {
      "basicAttacks": "Golpes a matar, mutilaciones (romper cuellos/espinas dorsales), atacar a traición.",
      "superAttacks": [
        { "name": "Kamehameha Oscuro", "desc": "Un Kamehameha de ki rojizo y negro, disparado a matar sin aviso.", "cost": "15% Ki" },
        { "name": "Teletransportación al Vacío", "desc": "Agarra al enemigo y lo lleva al espacio exterior o al sol, dejándolo ahí a morir.", "cost": "25% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Asalto del Mono Asesino (SSJ3 Rush)", "desc": "No usa piedad, entra en SSJ3 y desmembra al adversario con golpes cortantes, finalizando con una esfera masiva a quemarropa (Técnica usada contra Krillin y Yamcha).", "cost": "45% Ki" }
      ],
      "passives": [
        { "name": "Inmunidad Psicológica", "desc": "Es sordo a las súplicas. Ningún ruego o técnica de negociación de paz funciona contra él.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ 
      { "id": "kakarotto-base", "name": "Saiyan Base", "stats": "Nivel Sistema Solar. Mirada psicópata como la de Raditz, sonrisa sádica, dogi negro (O el de Goku rasgado)." },
      { "id": "kakarotto-ssj3", "name": "SSJ3 Asesino", "stats": "Nivel Multi-Sistema Solar. Aura eléctrica brutal, sin corazón." }
    ],
    "feats": [ "Asesinó a casi todos los Guerreros Z (Krilin, Piccolo) sin titubear usando su propio conocimiento de sus puntos débiles.", "Torturó a Vegeta mentalmente (Vegeta se niega a matarlo por ser Goku)." ],
    "psychology": "Un demonio sádico. Disfruta genuinamente ver a Gohan y Chi-Chi llorar de horror al ver lo que ha hecho. Es el 'Majin Vegeta' a la inversa; un mal sin redención atrapado en el cuerpo del salvador.",
    "weaknesses": "Exceso de sadismo, le gusta jugar con sus presas lo cual da ventana a contraataques mortales (Vegeta SSJ3)."
  },
  // 11. VEGETA (DB AFTER)
  {
    "id": "vegeta-ssj3-db-after",
    "name": "Vegeta (DB After)",
    "alias": "El Guardián de la Tierra",
    "universe": "Dragon Ball After (Fan Manga)",
    "saga": "La Caída de la Tierra",
    "version": "Super Saiyan 3 / Protector Definitivo",
    "tier": "Tier 4-A | Nivel Multi-Sistema Solar",
    "ap": "Nivel Multi-Sistema Solar. Tras el colapso de Goku en Kakarotto, Vegeta toma el manto de protector del universo. Por la desesperación de ver a su eterno rival matar a Bulma (o intentarlo), Vegeta rompe sus propios límites alcanzando el Super Saiyan 3 para enfrentarlo a muerte en un combate brutal y sangriento.",
    "range": "Sistema Solar a Multi-Sistema Solar.",
    "speed": { "combat": "MFTL+.", "reaction": "MFTL+.", "travel": "MFTL+.", "attack": "Veloz (Combate crudo)." },
    "strength": { "striking": "Clase Sistema Solar (Choque de puños letales contra Kakarotto).", "lifting": "Clase Estelar." },
    "durability": "Nivel Multi-Sistema Solar. Aguanta mutilaciones y dolor extremo para proteger a Gohan y la Tierra.",
    "stamina": "Baja en SSJ3. Vegeta quema su energía vital a cambio del poder para rivalizar con Kakarotto.",
    "battleIQ": "El mejor táctico de los dos, pero cegado por el dolor de tener que matar al que consideraba su único amigo.",
    "haxTags": [ "Fuerza de Voluntad Inquebrantable", "Super Saiyan 3 (Desgaste letal)" ],
    "arsenal": {
      "basicAttacks": "Golpes técnicos defensivos y letales, sacrificando defensa por ataques críticos.",
      "superAttacks": [
        { "name": "Big Bang Protector", "desc": "Usado para desviar los ataques de Kakarotto hacia el espacio.", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Final Flash (Venganza Trágica)", "desc": "Usa todo su Ki en estado SSJ3, desatando un relámpago final desesperado que amenaza con matarlo por desgaste, en un intento de borrar a Kakarotto de la existencia.", "cost": "60% Ki / 20% HP" }
      ],
      "passives": [
        { "name": "El Manto del Defensor", "desc": "Su poder sube un 50% extra cuando lucha para proteger a terceros en lugar de por orgullo.", "cost": "Buff de Héroe" }
      ]
    },
    "forms": [ 
      { "id": "vegeta-after-ssj3", "name": "Super Saiyan 3", "stats": "Nivel Multi-Sistema Solar. Pelo dorado hasta las rodillas sin cejas, aura masiva amarilla, lágrimas y sangre en el rostro." }
    ],
    "feats": [ "Soportó el SSJ3 con maestría, sobrepasando a Kakarotto momentáneamente.", "Se convirtió en el salvador moral de la historia." ],
    "psychology": "Trágico. Ha superado todo su egoísmo; ama a la Tierra y consideraba a Goku su verdadero amigo. Pelear a muerte contra el cuerpo de Kakarotto le causa un sufrimiento mental terrible.",
    "weaknesses": "El desgaste del SSJ3 y su negativa subconsciente a matar a Goku (lo cual lo hace vacilar en el último segundo)."
  },
  // 12. GOHAN DEFINITIVO (DB AFTER)
  {
    "id": "gohan-db-after",
    "name": "Son Gohan",
    "alias": "El Hijo Desgarrado",
    "universe": "Dragon Ball After (Fan Manga)",
    "saga": "La Caída de la Tierra",
    "version": "Estado Místico / Definitivo (Pico de Trauma)",
    "tier": "Tier 4-A | Nivel Multi-Sistema Solar",
    "ap": "Nivel Multi-Sistema Solar. Gohan mantiene su estado definitivo post-Saga Buu. Cuando su padre se vuelve el villano más sanguinario de la historia (Kakarotto), Gohan entra en un trauma que potencia su poder a niveles bestiales, intentando someter a su padre en una batalla cataclísmica mano a mano, rivalizando con el SSJ3 oscuro.",
    "range": "Sistema Solar.",
    "speed": { "combat": "MFTL+.", "reaction": "MFTL+.", "travel": "MFTL+.", "attack": "Veloz." },
    "strength": { "striking": "Clase Sistema Solar (Golpes llenos de lágrimas).", "lifting": "Clase Estelar." },
    "durability": "Nivel Sistema Solar. Kakarotto le propina palizas crueles y lo humilla psicológicamente.",
    "stamina": "Muy Alta. Sin el desgaste del SSJ3.",
    "battleIQ": "Nublado por la histeria y la desesperación. Es incapaz de razonar tácticas frías.",
    "haxTags": [ "Poder Definitivo Sostenido", "Rabia de Hijo" ],
    "arsenal": {
      "basicAttacks": "Golpes furiosos y agarres desesperados, rogando a gritos a su padre que reaccione.",
      "superAttacks": [
        { "name": "Masenko Iracundo (Definitivo)", "desc": "Dispara el rayo amarillo a quemarropa.", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Super Kamehameha (Castigo Filial)", "desc": "Usa toda su energía del estado místico en un Kamehameha ciego cargado de rabia para intentar repeler a Kakarotto.", "cost": "50% Ki" }
      ],
      "passives": [
        { "name": "Debilidad Emocional", "desc": "Tiene un 30% de penalización al daño si el enemigo es su padre biológico, fallando golpes letales en el último segundo.", "cost": "Debuff Crítico" }
      ]
    },
    "forms": [ 
      { "id": "gohan-mistico-after", "name": "Estado Místico", "stats": "Nivel Multi-Sistema Solar. Pelo negro en punta (con mechón), dogi naranja de su padre ensangrentado." }
    ],
    "feats": [ "Soportó golpes a matar del SSJ3 de Kakarotto." ],
    "psychology": "Totalmente destruido por dentro. El pilar de su vida se ha vuelto un demonio que asesina a sus amigos. Sufre de ataques de pánico en combate.",
    "weaknesses": "Incapacidad psicológica para rematar a su enemigo."
  }
];

const filePath = path.resolve(__dirname, '../src/data/characters.js');
let content = fs.readFileSync(filePath, 'utf8');

const prefix = 'export const INITIAL_CHARACTERS = ';
const currentList = eval(content.replace(prefix, ''));
console.log(`Current characters count: ${currentList.length}`);

let updatedCount = 0;
batch12Upgrades.forEach(upgrade => {
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

console.log(`Batch 12 Upgrade Complete. ${updatedCount} characters successfully enhanced. Cabba & Gotenks FORMS patched.`);
