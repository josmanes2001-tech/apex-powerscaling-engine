const fs = require('fs');
const path = require('path');

const newCharacters = [
  // ================= DRAGON BALL MULTIVERSE =================
  {
    "id": "vegetto-dbm",
    "name": "Vegetto (Universo 16)",
    "alias": "El Dios Invicto / La Fusión Perfecta",
    "universe": "Dragon Ball Multiverse (Fan Manga)",
    "saga": "Torneo Multiversal",
    "version": "Padre de Bra / Guardián del U16",
    "tier": "Tier Low 2-C a 2-C | Nivel Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. A diferencia de su homólogo de DBS, esta versión nunca se separó. Con 20 años adicionales de entrenamiento constante y dominio de las transformaciones hasta el Super Saiyan 3, su poder destructivo amenaza con romper la estructura gravitacional del propio multiverso solo con liberar su aura.",
    "range": "Rango Universal a Multiversal mediante proyecciones de Ki y Teletransportación.",
    "speed": {
      "combat": "Inconmensurable. Humilló a la versión de Broly cuyo poder crecía infinitamente, moviéndose tan rápido que la luz se curvaba a su alrededor.",
      "reaction": "Inconmensurable.",
      "travel": "MFTL+ / Desplazamiento Instantáneo Multiversal.",
      "attack": "Golpes que superan la percepción de seres de Nivel Galaxia."
    },
    "strength": {
      "striking": "Clase Multiversal Bajo. Capaz de arrancar extremidades a seres de poder infinito con pura fuerza bruta.",
      "lifting": "Clase Universal."
    },
    "durability": "Nivel Multiversal Bajo. Su escudo de Ki resiste la magia de asimilación absoluta y ataques que destruyen realidades de bolsillo.",
    "stamina": "Absurda en Base/SSJ1-2, pero el Super Saiyan 3 drena su Ki a un ritmo alarmante debido al inmenso peso de su poder en la realidad.",
    "battleIQ": "Estratega Absoluto. Combina el genio marcial de Goku y la mente analítica de Vegeta.",
    "haxTags": [
      "Teletransportación Instantánea",
      "Manipulación Avanzada de Ki (Espadas, Escudos)",
      "Resistencia a Manipulación Mágica",
      "Anulación de Regeneración (vía Desintegración)"
    ],
    "arsenal": {
      "basicAttacks": "Golpes letales precisos y humillantes (patadas sin mirar, bloqueos con un dedo).",
      "superAttacks": [
        { "name": "Big Bang Attack", "desc": "Carga de energía estelar comprimida capaz de destruir sistemas solares con daño nulo al entorno si él lo desea.", "cost": "10% Ki" },
        { "name": "Espada de Espíritu (Vegetto Sword)", "desc": "Hoja de Ki concentrado que ignora la durabilidad biológica del rival.", "cost": "5% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Final Kamehameha del Dragón (SSJ3)", "desc": "Combina el Puño del Dragón con el Final Kamehameha. Desgarra el tejido del espacio-tiempo y aniquila todo a nivel atómico.", "cost": "70% Ki" }
      ],
      "passives": [
        { "name": "Muro del Dios Saiyan", "desc": "Ataques de seres inferiores al Tier 3-A no le causan ningún tipo de retroceso ni daño físico.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [
      { "id": "vegetto-base", "name": "Vegetto Base", "stats": "Nivel Multi-Galáctico a Universal." },
      { "id": "vegetto-ssj", "name": "Super Saiyan 1 y 2", "stats": "Nivel Universal+." },
      { "id": "vegetto-ssj3", "name": "Super Saiyan 3", "stats": "Nivel Multiversal Bajo. Poder absoluto que colapsa la realidad, pero drena energía crítica en 5 minutos." }
    ],
    "feats": [
      "Venció y desintegró al Broly del Universo 20, cuyo poder crecía eternamente hasta niveles multiversales.",
      "Intimidó a Gast Carcolh y Zen Buu con su mera presencia transformado en SSJ3."
    ],
    "psychology": "Profundamente arrogante, egocéntrico pero responsable de su universo. Sufre secretamente por no tener verdaderos rivales y teme volverse loco por la falta de desafíos.",
    "weaknesses": "Desgaste de Ki masivo en SSJ3; ego colosal que le lleva a jugar con los rivales."
  },
  {
    "id": "cell-dbm",
    "name": "Cell (Universo 17)",
    "alias": "El Bio-Androide Perfecto / El Rey de los Cell Jrs.",
    "universe": "Dragon Ball Multiverse (Fan Manga)",
    "saga": "Torneo Multiversal",
    "version": "Perfección Evolucionada (Post-Zenkai Infinito)",
    "tier": "Tier 3-A | Nivel Universal",
    "ap": "Nivel Universal. Tras vencer a Gohan SSJ2 en su universo y asesinar a los Guerreros Z, Cell pasó décadas puliendo su núcleo y provocándose Zenkais extremos. Su poder base en el torneo rivaliza con un Super Saiyan 3 avanzado, y oculta aumentos masivos de poder.",
    "range": "Universal mediante ráfagas colosales.",
    "speed": {
      "combat": "MFTL+. Combatió a la par contra Vegeta U18 y Gohan Definitivo.",
      "reaction": "MFTL+. Ojos y sensores biológicos optimizados.",
      "travel": "MFTL+ / Teletransportación.",
      "attack": "Instantáneo mediante teletransportación y rayos mortales."
    },
    "strength": { "striking": "Clase Universal. Soporta y devuelve golpes a seres de nivel SSJ3 y superior.", "lifting": "Clase Universal." },
    "durability": "Nivel Universal. Núcleo celular desplazable; no muere a menos que desintegren hasta su última molécula. Regeneración mejorada a velocidades absurdas.",
    "stamina": "Infinita. Absorbe energía latente y posee el reactor inagotable de los androides 17 y 18 mejorado.",
    "battleIQ": "Genio Biológico. Ha mejorado su propia genética y puede engendrar Cell Jrs. del tamaño y poder de un SSJ2 adulto.",
    "haxTags": [ "Regeneración Molecular", "Zenkai Voluntario", "Clonación Biológica Perfecta", "Núcleo Desplazable" ],
    "arsenal": {
      "basicAttacks": "Golpes marciales perfectos mezclando la elegancia de Freezer y la contundencia de Goku.",
      "superAttacks": [
        { "name": "Kamehameha Solar Multiplicado", "desc": "Dispara ráfagas colosales que amenazan sistemas solares y los teletransporta a quemarropa.", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Invasión de Cell Jrs.", "desc": "Expulsa de su cuerpo varios Cell Jrs. mejorados que tienen el nivel de un SSJ2 o superior, superando a sus adversarios por superioridad numérica.", "cost": "30% Ki" }
      ],
      "passives": [
        { "name": "Núcleo Intocable", "desc": "Puede mover su núcleo cerebral por todo su cuerpo, haciendo inútiles los ataques de desmembramiento o decapitación.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "cell-evolved", "name": "Forma Súper Perfecta (Zenkai Constante)", "stats": "Nivel Universal. Un aura densa, dorada y eléctrica." } ],
    "feats": [
      "Humilló a Dabura y asesinó a Gohan en su universo.",
      "Soportó ataques combinados de seres equivalentes a SSJ3 e hirió gravemente a Hirudegarn."
    ],
    "psychology": "Refinado, sumamente narcisista y calculador. Busca siempre el entretenimiento de probar su perfección biológica.",
    "weaknesses": "Vulnerable a la aniquilación total de su cuerpo (desintegración a nivel atómico global)."
  },
  {
    "id": "raichi-dbm",
    "name": "Dr. Raichi (Universo 3)",
    "alias": "El Fantasma Tsufur / Amo de la Máquina Hate",
    "universe": "Dragon Ball Multiverse (Fan Manga)",
    "saga": "Torneo Multiversal",
    "version": "Con la Máquina de los Rancores (Hatchiyack)",
    "tier": "Tier 3-A | Nivel Universal (vía Summons Fantasmales)",
    "ap": "Nivel Universal. Su propio poder físico es mínimo (Nivel Humano/Militar Tsufur), pero su escudo orbital es impenetrable. Su AP radica en la 'Hate Machine', capaz de invocar fantasmas de TODAS las personas asesinadas en su universo y de los guerreros que él mata, con sus plenos poderes y habilidades.",
    "range": "Multiversal (a través de sus fantasmas invocados).",
    "speed": { "combat": "Humano", "reaction": "Supersónica (Asistido por IA)", "travel": "Flotando (Esfera robótica)", "attack": "Varia según el fantasma invocado (MFTL+ con guerreros Saiyans/Dioses)." },
    "strength": { "striking": "Clase Humano.", "lifting": "Clase Humano." },
    "durability": "Nivel Universal (Solo su escudo). Su burbuja protectora puede soportar ataques de SSJ3 sin inmutarse, alimentada por la máquina del odio.",
    "stamina": "Infinita para él; Limitada por el odio acumulado en la máquina para sus fantasmas.",
    "battleIQ": "Genio Tecnológico Supremo. Controla a un ejército entero estratégicamente sin exponer su verdadero cuerpo.",
    "haxTags": [ "Invocación / Necromancia Tecnológica", "Campo de Fuerza Impenetrable", "Absorción de Energía Residual (Odio)", "Inmortalidad Relativa (Es un fantasma digital)" ],
    "arsenal": {
      "basicAttacks": "Manda a Oozarus, Saiyans de clase baja y soldados del Imperio del Frío como carne de cañón.",
      "superAttacks": [
        { "name": "Ejército de Élite Tsufur", "desc": "Invoca a los fantasmas de Vegeta, Nappa, King Cold y Cooler simultáneamente con su poder máximo.", "cost": "20% Batería Hate" },
        { "name": "Invocación Suprema: Broly", "desc": "Libera al fantasma del Super Saiyan Legendario, causando estragos a escala cósmica a expensas de un gran consumo de odio.", "cost": "50% Batería Hate" }
      ],
      "ultimateAttacks": [
        { "name": "Despertar de Hatchiyack", "desc": "Cuando Raichi muere, la máquina absorbe su odio y forma a Hatchiyack, un bio-androide alimentado por la masacre universal, con un poder superior a un SSJ3.", "cost": "Muerte de Raichi" }
      ],
      "passives": [
        { "name": "Barrera de Odio Absoluta", "desc": "El escudo que rodea a Raichi neutraliza daño biológico y físico de alto calibre.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "raichi-base", "name": "Fantasma Digital (Protegido por Escudo)", "stats": "Dependiente al 100% de la barrera." } ],
    "feats": [
      "Acabó con casi todos los Saiyans en su universo (Universo 3).",
      "Luchó contra Gast Carcolh acorralándolo al invocar al fantasma de Vegeta SSJ3 y Broly LSSJ."
    ],
    "psychology": "Consumido por el resentimiento hacia los Saiyans. Justifica cualquier atrocidad como venganza por el genocidio de los Tsufurs.",
    "weaknesses": "Si la barrera es atravesada (generalmente con magia o un impacto destructivo colosal directo a la matriz), su cuerpo frágil muere instantáneamente. Los fantasmas consumen mucha energía y duran poco."
  },

  // ================= BROKOLY350 (WHAT IFS EXTRAS) =================
  {
    "id": "gohan-futuro-brokoly",
    "name": "Gohan del Futuro (El Vencedor Distópico)",
    "alias": "El Héroe Manco / La Última Esperanza",
    "universe": "Brokoly350 (What If)",
    "saga": "Futuro Restaurado",
    "version": "Post-Victoria contra Androides y Babidi",
    "tier": "Tier 4-B a 3-C | Nivel Sistema Solar a Galaxia",
    "ap": "Nivel Galaxia. Gohan sobrevive al asedio bajo la lluvia, alcanza el Super Saiyan 2 por la ira de casi perder a Trunks, y más tarde entrena en el Planeta Sagrado. Desarrolla tácticas letales y precisas para luchar con un solo brazo, superando la escala de poder de Dabura y Babidi en el futuro.",
    "range": "Multi-planetario a estelar con ataques de Ki.",
    "speed": { "combat": "MFTL+", "reaction": "MFTL+", "travel": "MFTL+", "attack": "Velocidad lumínica (técnicas de Ki)." },
    "strength": { "striking": "Clase Galáctica.", "lifting": "Clase Sistema Solar." },
    "durability": "Nivel Galaxia. Acostumbrado al dolor extremo y a peleas de supervivencia suicidas.",
    "stamina": "Muy Alta. Curtido en un mundo de guerrillas sin semillas Senzu.",
    "battleIQ": "Maestro de Supervivencia. Lee el entorno y utiliza cada escombro o ventaja a su favor; estilo marcial asimétrico impredecible.",
    "haxTags": [ "Fuerza de Voluntad Inquebrantable", "Bloqueo Asimétrico", "Liberación del Potencial (Ruta Espada Z)" ],
    "arsenal": {
      "basicAttacks": "Golpes con su único brazo, patadas demoledoras y rodillazos brutales. Cubre su falta de brazo izquierdo con Ki sólido defensivo.",
      "superAttacks": [
        { "name": "Kamehameha Unilateral (One-Handed)", "desc": "Dispara una ráfaga devastadora con una mano, usando su cuerpo como contrapeso gravitacional.", "cost": "25% Ki" },
        { "name": "Masenko Múltiple de Supervivencia", "desc": "Dispara decenas de esferas doradas que actúan como minas terrestres flotantes.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Estallido de la Ira Futura (SSJ2 / Definitivo)", "desc": "Un combo físico hiper-violento terminando con una onda explosiva masiva a quemarropa que erradica la materia maligna.", "cost": "70% Ki" }
      ],
      "passives": [
        { "name": "Defensa Asimétrica Fantasma", "desc": "Inconscientemente usa telequinesis leve y Ki concentrado donde solía estar su brazo, bloqueando ataques sorpresa.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [
      { "id": "gohan-futuro-ssj2", "name": "Super Saiyan 2 del Futuro", "stats": "Nivel Sistema Solar. Cicatrices, dogi destrozado." },
      { "id": "gohan-futuro-mistico", "name": "Estado Místico / Definitivo", "stats": "Nivel Galaxia. Tranquilidad sepulcral." }
    ],
    "feats": [
      "Sobrevivió a la emboscada bajo la lluvia y asesinó a 17 y 18.",
      "Entrenó a Trunks hasta el SSJ2 y destruyó a Babidi y Dabura antes de que Majin Buu despertara."
    ],
    "psychology": "Melancólico, maduro, pero letal sin titubeos. No da segundas oportunidades a los villanos.",
    "weaknesses": "Físicamente desequilibrado en el combate cuerpo a cuerpo si el enemigo es un experto marcial superior."
  },
  {
    "id": "baby-vegeta-god-brokoly",
    "name": "Baby Vegeta (Super Saiyan God Tsufur)",
    "alias": "El Parásito Divino / Dios de la Venganza",
    "universe": "Brokoly350 (Mini What-If)",
    "saga": "Venganza Tsufur (Dimensión Divina)",
    "version": "Posesión Divina Perfecta",
    "tier": "Tier 3-A a 2-C | Nivel Universal a Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. Baby asimila la genética y el acceso al Ki Divino de Vegeta. Al corromper la energía de los dioses con el rencor de los Tsufur, obtiene una variante oscura del Super Saiyan God, con un aura carmesí y morada capaz de diezmar galaxias enteras con un simple parpadeo.",
    "range": "Universal a Multiversal (hax de corrupción).",
    "speed": { "combat": "Inconmensurable", "reaction": "Inconmensurable", "travel": "MFTL+", "attack": "Ataques de Ki hiper-lumínicos." },
    "strength": { "striking": "Clase Universal.", "lifting": "Clase Universal." },
    "durability": "Nivel Universal. Regeneración tisular por la infección de Baby combinada con resistencia divina.",
    "stamina": "Ilimitada mediante la absorción parasitaria de Ki de sus seguidores y del entorno.",
    "battleIQ": "Intelecto Tecnológico-Biológico Supremo. Posee el intelecto de una raza hiperavanzada y la astucia marcial de Vegeta.",
    "haxTags": [ "Corrupción de Ki Divino", "Parasitismo a Nivel Celular", "Asimilación Genética Absoluta", "Manipulación de Gravedad / Agujeros Negros" ],
    "arsenal": {
      "basicAttacks": "Golpes elegantes envueltos en energía eléctrica negativa.",
      "superAttacks": [
        { "name": "Final Flash Infeccioso", "desc": "Un rayo cruzado que no solo daña, sino que planta esporas parásitas en la herida del oponente.", "cost": "20% Ki" },
        { "name": "Big Bang Attack Oscuro", "desc": "Crea una anomalía gravitacional (Agujero Negro Tsufur) que succiona ataques enemigos.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Revenge Death Ball Divina", "desc": "Esfera colosal forjada con la desesperación de trillones de almas esclavizadas universalmente y amplificada con Ki Divino destructivo.", "cost": "75% Ki" }
      ],
      "passives": [
        { "name": "Soberanía Tsufur", "desc": "Absorbe pasivamente el 5% de la energía del enemigo cada vez que colisionan físicamente.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "baby-god", "name": "Super Saiyan God Tsufur", "stats": "Nivel Multiversal Bajo. Cabello rojo pálido, ojos corruptos." } ],
    "feats": [
      "Subyugó universos enteros infundiendo su parásito a través del Ki divino, eludiendo la detección de los dioses menores."
    ],
    "psychology": "Un monarca vengativo y racista, convencido de que su asimilación universal es justicia divina contra los bárbaros Saiyans.",
    "weaknesses": "Su arrogancia lo vuelve vulnerable a luz divina pura y ataques basados en purificación de almas."
  },
  {
    "id": "raditz-redimido-brokoly",
    "name": "Raditz (El Hermano Redimido)",
    "alias": "El Segundo Hijo de Bardock / Aliado de la Tierra",
    "universe": "Brokoly350 (What If)",
    "saga": "Rebelión contra Freezer / Saga Androides",
    "version": "Guerrero Z / Super Saiyan Despierto",
    "tier": "Tier 4-C a 4-B | Nivel Estrella Enana a Sistema Solar",
    "ap": "Nivel Sistema Solar. Al evitar su muerte y aliarse con Goku, Raditz entrena su potencial latente. Supera su estatus de clase baja logrando el Super Saiyan y el Super Saiyan 2. Su descomunal melena dorada canaliza y acumula estática, haciendo que sus ataques eléctricos sean devastadores.",
    "range": "Interplanetario con ataques relámpago.",
    "speed": { "combat": "MFTL+", "reaction": "MFTL+", "travel": "MFTL+", "attack": "Velocidad lumínica (Electricidad Ki)." },
    "strength": { "striking": "Clase Estelar.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Sistema Solar. Robusto y acostumbrado a la tortura física.",
    "stamina": "Muy Alta. Fisiología Saiyan perfeccionada por entrenamiento pacífico terrestre.",
    "battleIQ": "Guerrillero Astuto. Prefiere tácticas de engaño, emboscadas y ataques rápidos por la espalda.",
    "haxTags": [ "Manipulación de Electricidad / Paralización", "Ataques Perforantes (Rango)", "Vuelo Táctico" ],
    "arsenal": {
      "basicAttacks": "Golpes rápidos y uso de su propio cabello gigantesco para cegar o azotar al rival.",
      "superAttacks": [
        { "name": "Double Sunday Perforante", "desc": "Dos haces rosados lanzados desde las manos con efecto taladro.", "cost": "15% Ki" },
        { "name": "Saturday Crash Paralizante", "desc": "Esfera explosiva que genera un pulso electromagnético, paralizando el sistema nervioso del enemigo.", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Shining Friday: Explosión del Orgullo Son", "desc": "Una colosal onda de energía eléctrica rosada-dorada, desatada a máxima potencia desde el aire.", "cost": "60% Ki" }
      ],
      "passives": [
        { "name": "Melena de Estática Saiyan", "desc": "En Super Saiyan 2, su inmenso cabello genera un campo eléctrico pasivo que hiere a quienes intentan combate cuerpo a cuerpo.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [
      { "id": "raditz-base", "name": "Raditz (Guerrero Z)", "stats": "Nivel Planeta Grande." },
      { "id": "raditz-ssj2", "name": "Super Saiyan 2", "stats": "Nivel Sistema Solar. Melena hasta los tobillos envuelta en rayos azules." }
    ],
    "feats": [
      "Ayudó a Goku a vencer a Nappa y Vegeta.",
      "Se sacrificó en Namek para ganar tiempo contra Freezer, y tras revivir, logró el Super Saiyan."
    ],
    "psychology": "Gruñón, pragmático y con un constante complejo de inferioridad respecto a Goku, pero profundamente leal a su familia y sobrino.",
    "weaknesses": "Su largo cabello puede ser utilizado en su contra en agarres físicos."
  },

  // ================= DRAGON BALL KAKUMEI =================
  {
    "id": "gohan-kakumei",
    "name": "Gohan (Heredero Supremo del U11)",
    "alias": "El Sabio Marcial / Gohan Dios",
    "universe": "Dragon Ball Kakumei (Fan Manga)",
    "saga": "Rebelión del Universo 0",
    "version": "Entrenamiento en el Universo 11",
    "tier": "Tier 2-C | Nivel Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. En DB Kakumei, Gohan entrena bajo la tutela de Toppo, Jiren y los Kaioshins del Universo 11, trascendiendo su estado Definitivo hacia el 'Ki Blanco' puro (Místico Divino), donde su mente, espíritu y cuerpo operan en armonía sin transformaciones coléricas.",
    "range": "Universal a Multiversal Bajo.",
    "speed": { "combat": "Inconmensurable.", "reaction": "Inconmensurable (Fluidez mental perfecta).", "travel": "MFTL+.", "attack": "Golpes etéreos que no pierden inercia." },
    "strength": { "striking": "Clase Universal+.", "lifting": "Clase Universal." },
    "durability": "Nivel Multiversal Bajo. Su control de Ki neutraliza la fricción y el daño interno.",
    "stamina": "Infinita en términos prácticos, ya que su técnica no desperdicia una sola gota de energía.",
    "battleIQ": "Erudito del Combate Supremo. Gohan analiza vectores de ataque, biomecánica y el flujo espiritual en nanosegundos.",
    "haxTags": [ "Manipulación de Ki Blanco (Purificación)", "Análisis Táctico Predictivo", "Defensa de Muro de Justicia", "Dispersión de Magia Maligna" ],
    "arsenal": {
      "basicAttacks": "Golpes de artes marciales impecables. Cada impacto se siente como una montaña cayendo gracias a la perfecta transferencia de peso.",
      "superAttacks": [
        { "name": "Masenko Trascendental", "desc": "Un pilar de luz blanca que ciega espiritualmente al enemigo y desintegra materia oscura.", "cost": "20% Ki" },
        { "name": "Muro del Sabio", "desc": "Campo de fuerza de Ki denso aprendido de Jiren que repele impactos multiversales.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Kamehameha del Juicio Final de Dios", "desc": "Unificación del espíritu de la Tierra y la justicia del U11 en una onda de choque estática que purifica el multiverso.", "cost": "70% Ki" }
      ],
      "passives": [
        { "name": "Paz Absoluta (Zero Mortal Folly)", "desc": "Inmune a la provocación, el miedo o ataques psíquicos. Su mente es una fortaleza impenetrable.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "gohan-mistico-divino", "name": "Estado Místico Divino (Ki Blanco)", "stats": "Nivel Multiversal Bajo. Cabello erizado normal pero aura blanca brillante." } ],
    "feats": [
      "Resistió la gravedad y la presión mística de los mundos sagrados sin inmutarse.",
      "Sometió a demonios primordiales del Universo 0 combinando táctica y paciencia divina."
    ],
    "psychology": "Sereno, analítico y pacífico. Solo pelea con una determinación absoluta cuando el orden cósmico o su familia están en riesgo.",
    "weaknesses": "Falta de instinto asesino; intentará razonar o paralizar al enemigo antes de desintegrarlo."
  },
  {
    "id": "broly-kakumei",
    "name": "Broly (Furia Controlada)",
    "alias": "El Mutante Legendario / Campeón de Vampa",
    "universe": "Dragon অংশগ্রহণ (Fan Manga)",
    "saga": "Entrenamiento con Dioses / U0",
    "version": "Control Ikari y Super Saiyan Domado",
    "tier": "Tier 2-C a 2-B | Nivel Multiversal",
    "ap": "Nivel Multiversal. Tras el Torneo del Poder, Broly entrena en el planeta de Beerus controlando su furia desmedida. Al dominar el estado Oozaru en forma humana (Ikari) sin perder la cordura, su poder latente rompe la escala de los ángeles, y en Full Power Super Saiyan amenaza con desgarrar el tejido del universo con un grito.",
    "range": "Multi-Galáctico (Físico) a Multiversal (Explosiones Omega).",
    "speed": { "combat": "Inconmensurable (Acelera infinitamente en combate).", "reaction": "Inconmensurable.", "travel": "MFTL+.", "attack": "Brutalidad instantánea." },
    "strength": { "striking": "Clase Multiversal. Rompe la dimensión del espacio con las manos desnudas (como hizo con Gogeta).", "lifting": "Incalculable." },
    "durability": "Nivel Multiversal. Es una esponja de daño cósmico; absorbe ataques de nivel Dios y los convierte en aumento de masa muscular y Ki.",
    "stamina": "Zenkai Infinito e hiper-reactivo en batalla.",
    "battleIQ": "Instinto Bestial Prodigioso. Aprende a luchar al nivel de dioses de la destrucción en cuestión de minutos simplemente recibiendo golpes.",
    "haxTags": [ "Evolución de Combate Infinita", "Adaptabilidad Ambiental Extrema", "Generación de Ondas de Choque Dimensionales", "Inmunidad a la Fatiga (por furia)" ],
    "arsenal": {
      "basicAttacks": "Agarres, estrangulamientos, estrellar al oponente contra planetas, y pisotones que generan terremotos estelares.",
      "superAttacks": [
        { "name": "Aliento Borrador (Eraser Cannon)", "desc": "Esferas de ki verde neón disparadas indiscriminadamente que persiguen y explotan con poder de supernova.", "cost": "10% Ki" },
        { "name": "Lluvia de Meteoros Omega", "desc": "Dispara cientos de ráfagas al cielo que caen como lluvia destructiva erradicando escuadrones enteros.", "cost": "25% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Estallido Legendario Controlado", "desc": "Expulsa un domo de energía verde y magma que engulle todo a su alrededor en un radio galáctico, condensándolo después en un láser bucal.", "cost": "80% Ki" }
      ],
      "passives": [
        { "name": "Potencial Ilimitado (Mutante)", "desc": "Sus estadísticas base (Fuerza, AP y Durabilidad) aumentan pasivamente un 10% por cada turno/fase en combate prolongado.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [
      { "id": "broly-ikari", "name": "Estado Ikari (Oozaru Humanoide Controlado)", "stats": "Nivel Multiversal Bajo. Pupilas amarillas, masa muscular aumentada." },
      { "id": "broly-ssj-full-power", "name": "Super Saiyan Full Power (Domado)", "stats": "Nivel Multiversal. Pelo verde esmeralda. Ahora ataca con estrategia bestial en vez de ceguera." }
    ],
    "feats": [
      "Logró seguir el ritmo de entrenamiento de Bills y Whis sin destruir el planeta gracias a su nuevo autocontrol.",
      "Luchó de tú a tú con los comandantes supremos de los universos caídos."
    ],
    "psychology": "Introvertido, gentil y tímido fuera de combate. En batalla es un berserker enfocado; su ira ya no lo ciega, lo impulsa con precisión letal.",
    "weaknesses": "Proteccionista. Si sus amigos (Cheelai, Lemo o Goku) son heridos, corre el riesgo de perder el control y entrar en modo furia ciega, perdiendo precisión táctica."
  },
  {
    "id": "amond-kakumei",
    "name": "Amond (El Primordial del Universo 0)",
    "alias": "Dios Demonio / El Primero",
    "universe": "Dragon Ball Kakumei (Fan Manga)",
    "saga": "Rebelión del Universo 0",
    "version": "Despertar del Sello Supremo",
    "tier": "Tier 2-B | Nivel Multiversal",
    "ap": "Nivel Multiversal. Amond es uno de los Dioses Primordiales del Universo 0, un universo borrado en el pasado por ser demasiado oscuro y poderoso. Maneja magia antigua, Ki caótico y posee una fuerza suficiente para aplastar universos enteros y rivalizar con Daishinkan.",
    "range": "Multiversal (Con Hax Espacio-temporales).",
    "speed": { "combat": "Inconmensurable", "reaction": "Inconmensurable", "travel": "Omnipresente en su plano", "attack": "Alteración de la realidad (Instantánea)." },
    "strength": { "striking": "Clase Multiversal. Un movimiento de su brazo genera vórtices espaciales.", "lifting": "Clase Multiversal." },
    "durability": "Nivel Multiversal. Fisiología divina corrupta; las armas físicas o de Ki inferior se evaporan al tocar su piel de ébano.",
    "stamina": "Infinita (se alimenta del vacío oscuro).",
    "battleIQ": "Milmillonario en años de experiencia. Mente de deidad suprema maquiavélica.",
    "haxTags": [ "Magia Primordial / Oscura", "Alteración de las Leyes Físicas", "Control de Antimateria", "Inmortalidad Primordial", "Corrupción de Ángeles y Dioses" ],
    "arsenal": {
      "basicAttacks": "Golpes lentos y majestuosos que aplastan el alma. Ondas de fuerza con la mirada.",
      "superAttacks": [
        { "name": "Vórtice del Universo 0", "desc": "Crea agujeros negros de antimateria que borran la existencia misma.", "cost": "20% Ki Divino" },
        { "name": "Cadenas Primordiales", "desc": "Magia selladora que anula transformaciones (incluido el Ultra Instinto y Hakai) y drena vitalidad.", "cost": "30% Ki Divino" }
      ],
      "ultimateAttacks": [
        { "name": "Génesis Inverso", "desc": "Una explosión de luz negra que invierte el tiempo y el espacio en una galaxia, colapsándola a su estado de nada original.", "cost": "90% Ki Divino" }
      ],
      "passives": [
        { "name": "Aura de Desesperación Primigenia", "desc": "Reduce las estadísticas (Fuerza, Defensa, Velocidad) de todos los enemigos en un 30% con su sola presencia.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "amond-true", "name": "Forma Verdadera Primordial", "stats": "Nivel Multiversal. Ser antropomórfico rodeado de estrellas muertas." } ],
    "feats": [
      "Obligó a los universos sobrevivientes y a los Dioses de la Destrucción a formar una alianza desesperada.",
      "Sobrevivió al borrado original de Zeno-sama al sellarse en el vacío absoluto."
    ],
    "psychology": "Un ser de fría arrogancia cósmica. No siente odio, solo percibe a los mortales y dioses actuales como insectos intrusos en su cosmos perfecto.",
    "weaknesses": "Limitado temporalmente por las leyes del multiverso restaurado. Sus poderes menguan si se expone demasiado tiempo fuera del vacío."
  },

  // ================= DRAGON BALL AFTER =================
  {
    "id": "vegeta-ssj3-db-after",
    "name": "Vegeta (Guardián de la Tierra / DB After)",
    "alias": "El Príncipe Protector / El Último Muro",
    "universe": "Dragon Ball After (Fan Manga de Young Jijii)",
    "saga": "Regreso de Kakarotto",
    "version": "Super Saiyan 3 Desbloqueado por Desesperación",
    "tier": "Tier 3-A | Nivel Universal",
    "ap": "Nivel Universal. Ante la traición brutal y locura homicida de Goku (ahora Kakarotto maligno), Vegeta se ve forzado a defender el planeta y a su familia. Empujado por la desesperación y la ira pura al ver a sus seres queridos heridos, desbloquea el Super Saiyan 3 con una letalidad abrumadora.",
    "range": "Multi-Galáctico a Universal mediante el Final Flash.",
    "speed": { "combat": "MFTL+ (A la par con Goku SSJ3).", "reaction": "MFTL+.", "travel": "MFTL+.", "attack": "Ataques de Ki hiper-rápidos para mantener al enemigo alejado." },
    "strength": { "striking": "Clase Universal. Acierta golpes críticos capaces de aturdir al salvaje Kakarotto.", "lifting": "Clase Universal." },
    "durability": "Nivel Universal. Pelea con huesos rotos, armadura destrozada y pulmones perforados por pura terquedad para proteger a Bulma y Trunks.",
    "stamina": "Muy Alta en base, pero el SSJ3 agota su Ki mortalmente en el mundo de los vivos. Juega a contrarreloj.",
    "battleIQ": "Genio Marcial Heroico. Utiliza tácticas suicidas, fintas y sacrificios corporales para proteger ciudades y familiares a sus espaldas.",
    "haxTags": [ "Boost de Poder por Vínculo Emocional (Ira de Protector)", "Ataques Perforantes", "Resistencia de Mártir" ],
    "arsenal": {
      "basicAttacks": "Ráfagas rápidas de Ki, codazos a la defensiva, e intercepciones corporales.",
      "superAttacks": [
        { "name": "Big Bang Attack Táctico", "desc": "Concentra la explosión hacia adelante en forma de cono para no dañar el planeta detrás de él.", "cost": "20% Ki" },
        { "name": "Lluvia de Orgullo (Gatling Gun)", "desc": "Cientos de ráfagas disparadas con un solo brazo para distraer.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Final Flash Suicida (SSJ3 Máximo)", "desc": "Canaliza toda la energía de su alma y musculatura en un último ataque, sabiendo que su cuerpo colapsará tras lanzarlo.", "cost": "80% Ki / Muerte o Coma temporal" }
      ],
      "passives": [
        { "name": "Muro del Padre", "desc": "Su resistencia a ataques físicos letales se duplica si algún aliado con el tag (Familia/Amigo) está en el campo de batalla.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [
      { "id": "vegeta-db-after-ssj2", "name": "Super Saiyan 2", "stats": "Nivel Multi-Galáctico. Cubierto de heridas." },
      { "id": "vegeta-db-after-ssj3", "name": "Super Saiyan 3", "stats": "Nivel Universal. Pelo dorado extremo, sin cejas. Aura eléctrica colosal." }
    ],
    "feats": [
      "Detuvo él solo la masacre global de Kakarotto tras la caída de Gohan y Gotenks.",
      "Desbloqueó el SSJ3 en el mundo de los vivos resistiendo el desgarro muscular por pura fuerza de voluntad."
    ],
    "psychology": "Un giro completo a su pasado: ahora él es el protector estoico y noble de la Tierra, sacrificándolo todo por el honor y el amor a los suyos frente a un Goku monstruoso.",
    "weaknesses": "El SSJ3 consume su energía ridículamente rápido y su cuerpo no estaba preparado; si falla el golpe de gracia, pierde."
  },
  {
    "id": "gohan-db-after",
    "name": "Gohan Definitivo (DB After)",
    "alias": "El Hijo Quebrado / Guerrero Traicionado",
    "universe": "Dragon Ball After (Fan Manga)",
    "saga": "Regreso de Kakarotto",
    "version": "Adulto / Padre Defensor",
    "tier": "Tier 3-A | Nivel Universal",
    "ap": "Nivel Universal. Gohan se ve forzado a enfrentar a su propio padre que ha perdido la cordura. Mantiene todo el poder místico de la saga de Buu. Su poder base es colosal, pero su ataque decae debido al trauma psicológico de golpear a matar a su progenitor.",
    "range": "Multi-Galáctico.",
    "speed": { "combat": "MFTL+", "reaction": "MFTL+", "travel": "MFTL+", "attack": "Velocidad lumínica." },
    "strength": { "striking": "Clase Universal.", "lifting": "Clase Universal." },
    "durability": "Nivel Universal. Su cuerpo resistió torturas impensables por parte de su propio padre.",
    "stamina": "Moderada. Su voluntad se rompe más rápido que su físico por la angustia mental.",
    "battleIQ": "Gran capacidad de combate, pero severamente nublado por las emociones y la duda moral.",
    "haxTags": [ "Fuerza Mística Absoluta", "Potencial Oculto", "Curación Latente", "Barreras Protectoras" ],
    "arsenal": {
      "basicAttacks": "Golpes defensivos, derribos e intentos de inmovilizar al enemigo sin matar.",
      "superAttacks": [
        { "name": "Masenko Protector", "desc": "Ráfaga de cobertura rápida para salvar civiles.", "cost": "15% Ki" },
        { "name": "Kamehameha Lloroso", "desc": "Un Super Kamehameha lanzado con todo el poder pero cargado de dolor y desesperación.", "cost": "40% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Estallido de Ira Definitivo", "desc": "Al ver a Pan o Videl en peligro, pierde la cordura y ataca con intención homicida a su padre, liberando su verdadero 100%.", "cost": "70% Ki" }
      ],
      "passives": [
        { "name": "Bloqueo Emocional / Ira del Hijo", "desc": "Inicia el combate con un debuff del 30% al AP. Si un aliado cae, se convierte en un buff del 50% extra.", "cost": "Pasivo psicológico" }
      ]
    },
    "forms": [ { "id": "gohan-mistico", "name": "Estado Definitivo", "stats": "Nivel Universal. Dogi naranja, ensangrentado y con lágrimas de frustración." } ],
    "feats": [
      "Retuvo a Kakarotto SSJ3 el tiempo suficiente para que Goten, Trunks y Vegeta actuaran.",
      "Sobrevivió a tener el brazo fracturado brutalmente sin desmayarse."
    ],
    "psychology": "Atormentado. Ama a su padre y no comprende su locura. Lucha desesperadamente por desmayarlo, negándose a aceptar que debe matarlo.",
    "weaknesses": "Se contiene excesivamente. Es un blanco fácil para los ataques sucios de Kakarotto por intentar razonar."
  },
  {
    "id": "gotenks-adulto-db-after",
    "name": "Gotenks Adulto",
    "alias": "La Última Fusión / El Guerrero Desesperado",
    "universe": "Dragon Ball After (Fan Manga)",
    "saga": "Regreso de Kakarotto",
    "version": "Adulto / SSJ3 de Emergencia",
    "tier": "Tier 3-A | Nivel Universal+",
    "ap": "Nivel Universal+. Goten y Trunks se ven forzados a fusionarse de adultos frente a la crisis global. Gotenks Adulto es infinitamente superior a su versión infantil, poseyendo la madurez de combate y el poder crudo necesario para intercambiar golpes letales con un Goku SSJ3 sanguinario.",
    "range": "Universal.",
    "speed": { "combat": "Inconmensurable.", "reaction": "Inconmensurable.", "travel": "MFTL+.", "attack": "Ataques ultra-veloces y fantasmales." },
    "strength": { "striking": "Clase Universal+.", "lifting": "Clase Universal." },
    "durability": "Nivel Universal+. La magia de la fusión proporciona una tolerancia ridícula al daño contundente.",
    "stamina": "Muy Limitada (Tiempo de fusión hiper-reducido en SSJ3).",
    "battleIQ": "Creativo e Impredecible, pero ahora con mucha menos arrogancia cómica y más seriedad homicida debido al contexto macabro.",
    "haxTags": [ "Fusión Metamoru Mágica", "Creación de Armas/Entidades de Ki (Fantasmas Kamikaze)", "Maleabilidad Corporal", "Grito Dimensional" ],
    "arsenal": {
      "basicAttacks": "Lluvia de puñetazos de voleibol y patadas dinamo, pero ejecutadas para matar.",
      "superAttacks": [
        { "name": "Donut Galáctico Cuchilla", "desc": "Anillos de Ki que en lugar de inmovilizar, aprietan hasta seccionar miembros.", "cost": "15% Ki" },
        { "name": "Súper Fantasmas Kamikaze (Modo Asesinato)", "desc": "Invoca fantasmas silenciosos que atacan puntos ciegos y explotan con potencia neutrónica.", "cost": "25% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Kamehameha del Resplandor Final", "desc": "Combinación perfecta del Kamehameha y el Final Flash canalizado a través del poder de la fusión adulta.", "cost": "60% Ki" }
      ],
      "passives": [
        { "name": "Cuenta Regresiva Crítica", "desc": "El tiempo de su existencia es un factor de estrés; su agresividad aumenta cada turno sabiendo que se des-fusionarán pronto.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [
      { "id": "gotenks-adulto-ssj", "name": "Super Saiyan", "stats": "Nivel Multi-Galáctico." },
      { "id": "gotenks-adulto-ssj3", "name": "Super Saiyan 3", "stats": "Nivel Universal+. Cabello largo dorado, actitud de justiciero serio y desesperado." }
    ],
    "feats": [
      "Presionó a Kakarotto hasta su límite y obligó al monstruo a usar todo su poder.",
      "Demostró que la fusión adulta carece de la estupidez infantil, siendo un guerrero táctico de élite."
    ],
    "psychology": "Una mezcla de la rabia fría de Trunks y el dolor traicionado de Goten. Entienden que si fallan, la Tierra muere.",
    "weaknesses": "Límite de tiempo severo en SSJ3 (probablemente menos de 5 minutos)."
  }
];

const filePath = path.resolve(__dirname, '../src/data/characters.js');
let content = fs.readFileSync(filePath, 'utf8');

const prefix = 'export const INITIAL_CHARACTERS = ';
const currentList = eval(content.replace(prefix, ''));
console.log(`Current characters count: ${currentList.length}`);

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
    console.log(`Updated character: ${nc.name}`);
  }
}

console.log(`Added ${added} new characters. Total: ${currentList.length}`);

const output = `// APEX Engine — Base de Datos de Personajes Estructurada (VS Battles Tier System)\n// Total fichas deduplicadas y normalizadas\n\nexport const INITIAL_CHARACTERS = ${JSON.stringify(currentList, null, 2)};\n`;

fs.writeFileSync(filePath, output, 'utf8');
console.log('Successfully updated src/data/characters.js');
