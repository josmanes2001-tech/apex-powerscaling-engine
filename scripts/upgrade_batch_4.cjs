const fs = require('fs');
const path = require('path');

const batch4Upgrades = [
  // 1. ZAMASU (DBS)
  {
    "id": "zamasu-l-nea-temporal-futura-736",
    "name": "Zamasu (Inmortal)",
    "alias": "El Dios Supremo Corrupto",
    "universe": "Dragon Ball Super",
    "saga": "Trunks del Futuro",
    "version": "Inmortalidad de Super Shenlong",
    "tier": "Tier 3-A | Nivel Universal",
    "ap": "Nivel Universal. Aunque carece de la fuerza abrumadora de Goku Black, su verdadero poder radica en su inmortalidad y su resistencia inagotable. Su capacidad de daño físico es menor al SSJ Blue, pero lo compensa al lanzar cortes precisos que pueden decapitar a oponentes cansados.",
    "range": "Planetario mediante ráfagas divinas.",
    "speed": {
      "combat": "FTL+. Supera al SSJ2, pero es fácilmente superado por Goku y Vegeta en SSJ Blue.",
      "reaction": "FTL+. Aunque es golpeado a menudo, no necesita esquivar gracias a su inmortalidad.",
      "travel": "MFTL+ / Vuelo de Kaioshin.",
      "attack": "Cortes instantáneos de su mano de Ki."
    },
    "strength": { "striking": "Clase Universal. Acierta golpes críticos, pero palidece en fuerza bruta contra guerreros de élite.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Universal (Inmortal). Literalmente no puede morir por daño físico. Incluso si lo perforan, cortan a la mitad o lo vaporizan, su cuerpo se regenerará de la nada intacto en segundos.",
    "stamina": "Infinita (por Inmortalidad). Su regeneración es un flujo divino sin costo.",
    "battleIQ": "Sádico y Metódico. Pelea como un escudo humano infinito para Black Goku, atrapando a los enemigos para que Black los atraviese a ambos.",
    "haxTags": [
      "Inmortalidad Verdadera (Super Shenlong)",
      "Curación de Aliados",
      "Magia de Kaioshin (Materialización de Metales Katchin)",
      "Escudo Humano Voluntario"
    ],
    "arsenal": {
      "basicAttacks": "Golpes elegantes y poco agresivos, prefiriendo usar su cuerpo para inmovilizar rivales (Bear Hug inmortales).",
      "superAttacks": [
        { "name": "Espada de Energía Divina (Aura Slide)", "desc": "Condensa su Ki púrpura/violeta en una navaja afilada en su mano, utilizada para cortes limpios.", "cost": "10% Ki" },
        { "name": "Corte de la Justicia Absoluta", "desc": "Dispara desde sus dedos una ráfaga afilada que persigue al rival.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Abrazo de la Inmortalidad", "desc": "Sujeta al oponente por la espalda ignorando todo daño recibido, para que su aliado (Black Goku) lo atraviese con un Kamehameha o una espada.", "cost": "0% Ki" }
      ],
      "passives": [
        { "name": "Cuerpo Inmortal", "desc": "El HP no puede bajar de 1. Es inmune a ser asesinado por cualquier ataque de Daño, a menos que sea borrado de la existencia misma (Hakai perfecto) o sellado (Mafuba).", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "zamasu-inmortal", "name": "Kaioshin Inmortal", "stats": "Nivel Universal. Piel verde, cabello blanco mohawk, aura serena divina." } ],
    "feats": [
      "Sobrevivió repetidas palizas mortales de Trunks y Goku sin un solo rasguño posterior.",
      "Soportó la espada de Trunks incrustada en su estómago y sanó instantáneamente al sacarla.",
      "Casi elimina a Goku empujándolo a la desesperación."
    ],
    "psychology": "Narcisista extremo y purista. Odia a los mortales con cada fibra de su ser y llora de emoción al ver su propia 'belleza divina'. No tiene reparos en jugar sucio.",
    "weaknesses": "Falta de poder ofensivo destructivo masivo (depende de Black). Extremadamente susceptible a ser sellado (Mafuba), ya que subestima siempre a los humanos."
  },
  // 2. MAJIN BUU GORDO
  {
    "id": "majin-buu-gordo-saga-buu-604",
    "name": "Majin Buu (Gordo)",
    "alias": "El Monstruo Inocente",
    "universe": "Dragon Ball Z",
    "saga": "Saga de Buu",
    "version": "Liberación Inicial",
    "tier": "Tier 4-A | Nivel Multi-Sistema Solar",
    "ap": "Nivel Multi-Sistema Solar. Majin Buu es una pesadilla destructiva oculta tras una sonrisa infantil. Supera fácilmente el poder de Gohan SSJ2 y Vegeta SSJ2 (Majin). Una ráfaga errática suya puede barrer la superficie de la Tierra, y su cuerpo de goma absorbe impactos que destrozarían soles.",
    "range": "Planetario mediante explosiones de ira.",
    "speed": {
      "combat": "Masivamente FTL. A pesar de su apariencia gorda, se mueve con agilidad demoníaca y reacciona de forma impredecible.",
      "reaction": "MFTL.",
      "travel": "MFTL.",
      "attack": "Sus rayos de antena son prácticamente lumínicos."
    },
    "strength": { "striking": "Clase Sistema Solar. Sometió a Majin Vegeta a puñetazos.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Multi-Sistema Solar. Regeneración instantánea ilimitada. Es inmune a daño contundente; rebotando, estirándose o reparándose al instante si le vuelan la cabeza.",
    "stamina": "Infinita en su estado juguetón, aunque puede agotarse si se enfrenta a oponentes masivamente superiores (como Kid Buu).",
    "battleIQ": "Infantil, errático pero prodigioso copiando técnicas y usando su propia anatomía como arma (estrangular con un trozo de su barriga).",
    "haxTags": [
      "Anatomía de Chicle Inmortal",
      "Magia de Transmutación (Convertir en Chocolate/Galleta)",
      "Regeneración de Humo Rosa",
      "Curación a Terceros Magica"
    ],
    "arsenal": {
      "basicAttacks": "Golpes pesados elásticos, sentarse sobre el enemigo, ataques de aliento pestilente.",
      "superAttacks": [
        { "name": "Rayo Transfigurador (Chocolate Beam)", "desc": "Dispara un rayo rosa desde su antena que convierte al enemigo en dulces, galletas o leche para comerlos.", "cost": "10% Ki" },
        { "name": "Kamehameha Rosado", "desc": "Copiado de Goku en el primer intento.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Explosión de Furia (Angry Explosion)", "desc": "Acumula vapor en su cabeza gritando hasta liberar una explosión rosada omnidireccional capaz de borrar sistemas enteros. Causó que Majin Vegeta decidiera suicidarse.", "cost": "60% Ki" }
      ],
      "passives": [
        { "name": "Mente Impredecible", "desc": "Ignora todos los estilos de combate estructurados, haciendo que las habilidades tácticas de artes marciales pierdan efectividad contra él.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "buu-gordo", "name": "Majin Buu (Gordo)", "stats": "Nivel Multi-Sistema Solar. Gordo, rosado, usa capa, siempre sonríe." } ],
    "feats": [
      "Humilló a Majin Vegeta, forzando su Sacrificio Final (el cual Buu sobrevivió sin problemas).",
      "Sanó la ceguera de un niño y a su perrito Bee de heridas mortales mágicamente.",
      "Derrotó a Dabra y se lo comió convertido en galleta sin apenas esfuerzo."
    ],
    "psychology": "Un niño con el poder de un dios. No comprende el concepto de la muerte o el dolor ajeno, destruye porque Babidi se lo dice o porque es 'divertido'. Si se enoja genuinamente (humo gris), es letal.",
    "weaknesses": "Fácil de engañar con comida o trucos simples. Su parte malvada (Evil Buu) puede expulsarse y matarlo si sufre un trauma emocional enorme."
  },
  // 3. MAJIN VEGETA
  {
    "id": "vegeta-saga-buu-saga-buu-213",
    "name": "Vegeta (Majin)",
    "alias": "El Príncipe Caído / Orgullo Oscuro",
    "universe": "Dragon Ball Z",
    "saga": "Saga de Buu",
    "version": "Control Mental Babidi (Super Saiyan 2)",
    "tier": "Tier 4-B | Nivel Sistema Solar",
    "ap": "Nivel Sistema Solar. Vegeta se dejó manipular voluntariamente por la magia de Babidi para romper sus propios límites (despertando el verdadero poder del SSJ2). En este estado de pura malicia recuperada, igualó perfectamente el poder del SSJ2 de Goku, siendo capaz de destruir gran parte de la arena del torneo y a cientos de personas con un solo destello de Ki, solo por diversión.",
    "range": "Sistema Solar mediante ataques devastadores de Ki.",
    "speed": {
      "combat": "Masivamente FTL (MFTL). A la par de Goku SSJ2.",
      "reaction": "MFTL.",
      "travel": "MFTL.",
      "attack": "Velocidad lumínica con sus anillos atadores."
    },
    "strength": { "striking": "Clase Sistema Solar. Derribó y aturdió a Majin Buu temporalmente de pura fuerza bruta.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Sistema Solar. Recibe un buff de resistencia por la magia de Babidi, soportando una paliza extrema de Buu y levantándose para seguir luchando por puro orgullo.",
    "stamina": "Muy Alta. Su voluntad no cede ante nada, ignorando el dolor y la fatiga muscular debido al sello 'M'.",
    "battleIQ": "Despiadado, Técnico y Visceral. Vegeta recupera sus instintos asesinos de la Saga Saiyan, usando cualquier método para abrumar.",
    "haxTags": [ "Amplificación Mágica (Sello M)", "Anillos de Inmovilización (Ki Rings)", "Explosión Suicida (Autodestrucción)" ],
    "arsenal": {
      "basicAttacks": "Golpes a puño cerrado, rodillazos al estómago, codos al cuello. Lucha callejera y brutal.",
      "superAttacks": [
        { "name": "Impacto Oscuro (Dark Impact)", "desc": "Disparo a quemarropa directo al estómago del adversario.", "cost": "15% Ki" },
        { "name": "Anillos Atadores de Energía", "desc": "Aros de Ki dorado que lanzan a Goku contra las rocas y lo inmovilizan con extrema fuerza.", "cost": "10% Ki" },
        { "name": "Destello Final (Final Flash)", "desc": "Ráfaga devastadora estándar de gran área.", "cost": "25% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Explosión Final (Final Explosion)", "desc": "Vegeta canaliza toda su fuerza vital y su energía Majin en un estallido omnidireccional gigantesco diseñado para desintegrar a seres inmortales o de goma como Buu. Convierte su cuerpo en piedra al concluir.", "cost": "100% HP (Muerte Definitiva)" }
      ],
      "passives": [
        { "name": "Orgullo Inquebrantable (M)", "desc": "A pesar de tener el sello de Babidi, Vegeta ignora completamente las órdenes de control mental, traduciendo toda la magia en puro aumento de estadísticas (+20% AP/Speed).", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "majin-vegeta", "name": "Super Saiyan 2 (Majin)", "stats": "Nivel Sistema Solar. Sello 'M' en la frente, venas marcadas, ojos oscurecidos con bordes negros (delineador Majin), electricidad." } ],
    "feats": [
      "Noqueó a Goku por la espalda tras fingir una tregua.",
      "Rechazó el control mental de Babidi por puro orgullo ('Puedes invadir mi mente y mi cuerpo, ¡pero hay algo que un Saiyajin siempre conservará! ¡Su ORGULLO!').",
      "Se sacrificó explotando para tratar de salvar a Bulma, Trunks y a Kakarotto de Majin Buu."
    ],
    "psychology": "Torturado internamente por su amor a su familia terrestre, el cual percibe como debilidad. Finge volver a ser un asesino sin corazón, pero al final acepta que ama a la Tierra y decide dar su vida para expiar sus pecados.",
    "weaknesses": "Impulsivo, cegado por su rivalidad con Goku, lo que le impidió ver el verdadero peligro de Majin Buu a tiempo."
  },
  // 4. GOKU SSJ3 (Z)
  {
    "id": "son-goku-saga-buu-saga-buu-646",
    "name": "Son Goku (Saga Buu)",
    "alias": "El Salvador del Universo",
    "universe": "Dragon Ball Z",
    "saga": "Saga de Buu",
    "version": "Super Saiyan 3",
    "tier": "Tier 4-A | Nivel Multi-Sistema Solar",
    "ap": "Nivel Multi-Sistema Solar. Al revelar esta forma ante Majin Buu, la inmensa liberación de Ki se sintió en la Tierra, el Otro Mundo y el Planeta Kaioshin simultáneamente. El poder crudo del Super Saiyan 3 fue más que suficiente para darle una paliza a Fat Buu y dominar a Kid Buu cuando peleaba a su 100%.",
    "range": "Sistema Solar mediante el Super Kamehameha.",
    "speed": {
      "combat": "Masivamente FTL+.",
      "reaction": "MFTL+.",
      "travel": "MFTL+ / Shunkanido.",
      "attack": "Velocidad lumínica absoluta."
    },
    "strength": { "striking": "Clase Sistema Solar+. Sus impactos perforaban el cuerpo de chicle de Majin Buu de par en par.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Multi-Sistema Solar. Resistente, pero en el mundo de los vivos, el desgaste anula lentamente su durabilidad.",
    "stamina": "Muy Baja en SSJ3 (Cuerpo Mortal). Consume energía tan masivamente que un combate de pocos minutos agotó su reserva estelar, perdiendo la transformación.",
    "battleIQ": "Maestro de Artes Marciales. Conoce la ventaja del desgaste, pero debido al drenaje del SSJ3 a menudo se confía para probar al enemigo.",
    "haxTags": [ "Multiplicador de Presión Extrema (SSJ3)", "Teletransportación", "Creación de la Genkidama Universal" ],
    "arsenal": {
      "basicAttacks": "Golpes pesados a dos manos, combos aéreos impulsados con su gran melena.",
      "superAttacks": [
        { "name": "Super Kamehameha (Auténtico)", "desc": "Un torrente azul gigantesco desatado desde las palmas.", "cost": "25% Ki" },
        { "name": "Kamehameha Teletransportado", "desc": "Dispara el Super Kamehameha justo al usar el Shunkanido, a centímetros de la cara del enemigo.", "cost": "30% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Puño del Dragón (Explosión del Dragón)", "desc": "Concentra todo su poder latente en su puño, atravesando el torso del rival. Del impacto emerge un dragón dorado gigante de energía que envuelve, tritura y desintegra al objetivo.", "cost": "75% Ki" },
        { "name": "Super Genkidama", "desc": "Pide energía prestada a todo el universo, concentrándola en una esfera blanca letal que erradica la maldad pura (Usado en forma Base y rematado en SSJ).", "cost": "100% Ki / Apoyo Universal" }
      ],
      "passives": [
        { "name": "Presión del Tercer Nivel", "desc": "Al entrar en SSJ3, los enemigos se ven aturdidos temporalmente y el entorno sufre terremotos destructivos.", "cost": "Pasivo continuo / Drenaje de Vida" }
      ]
    },
    "forms": [
      { "id": "goku-buu-base", "name": "Super Saiyan 2", "stats": "Nivel Sistema Solar. La misma escala que Majin Vegeta." },
      { "id": "goku-buu-ssj3", "name": "Super Saiyan 3", "stats": "Nivel Multi-Sistema Solar. Pelo dorado hasta los tobillos, sin cejas, aura dorada masiva. Gran poder, duración corta." }
    ],
    "feats": [
      "Hizo temblar la Tierra y otras dimensiones con solo gritar para transformarse.",
      "Dominó completamente a Majin Buu gordo durante su breve pelea.",
      "Aniquiló el cuerpo de Kid Buu con la Genkidama Universal."
    ],
    "psychology": "Goku en su punto más maestro. Deseaba que la nueva generación (Goten y Trunks) salvara la Tierra en su lugar, evitando matar a Buu cuando pudo hacerlo (según confesó).",
    "weaknesses": "El drenaje de Ki en el SSJ3 (estando vivo) es atroz. No puede canalizar ataques prolongados al 100% sin revertir a estado base (perdió el SSJ3 cargando Ki contra Kid Buu)."
  },
  // 5. GOHAN DEFINITIVO Z
  {
    "id": "son-gohan-adulto-saga-buu-774",
    "name": "Son Gohan (Saga Buu)",
    "alias": "El Guerrero Definitivo / Gohan Místico",
    "universe": "Dragon Ball Z",
    "saga": "Saga de Buu",
    "version": "Potencial Desbloqueado por el Anciano Kaioshin",
    "tier": "Tier 3-C | Nivel Galaxia",
    "ap": "Nivel Galaxia. Tras 25 horas de ritual místico con el Supremo Kaio-sama, Gohan desbloqueó todo su poder latente sin necesidad de usar el Super Saiyajin (evitando el desgaste de Ki). Su poder base aplastó totalmente a Super Buu (quien previamente erradicó a la humanidad entera y dominó a Gotenks SSJ3).",
    "range": "Planetario a Galáctico.",
    "speed": {
      "combat": "Masivamente FTL+. Tan rápido que Super Buu ni siquiera registró el primer golpe directo.",
      "reaction": "MFTL+.",
      "travel": "MFTL+.",
      "attack": "Velocidad MFTL+."
    },
    "strength": { "striking": "Clase Galáctica. Su superioridad física sobre Buu era insultante, cortándole a la mitad con el filo de la mano de forma casual.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Galaxia. Inmune al daño de Super Buu estándar. Incluso sobrevivió absorber la explosión suicida de Super Buu sin usar un escudo.",
    "stamina": "Muy Alta. La ventaja del Estado Místico es que no consume exceso de energía como un SSJ3, manteniendo el poder al máximo.",
    "battleIQ": "Normalmente pacífico, pero en este estado Gohan hereda la arrogancia cruel de su adolescencia, humillando a Buu con golpes secos y precisos, aunque esta misma arrogancia le cuesta caro.",
    "haxTags": [ "Potencial Místico Desatado (Sin desgaste de forma)", "Resistencia al Agotamiento" ],
    "arsenal": {
      "basicAttacks": "Golpes elegantes, contundentes y arrogantes. Patadas altas a la barbilla y puñetazos invisibles.",
      "superAttacks": [
        { "name": "Ráfaga Rápida Castigadora", "desc": "Múltiples disparos de ki que destrozan extremidades sin matarlo, para torturar psicológicamente.", "cost": "10% Ki" },
        { "name": "Masenko Místico", "desc": "Una versión infinitamente más grande y poderosa del ataque de Piccolo.", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Kamehameha Definitivo (Burst Rush)", "desc": "Ataca con un combo físico devastador que estrella al rival contra la tierra, finalizando con un Super Kamehameha que erradica la zona por completo.", "cost": "60% Ki" }
      ],
      "passives": [
        { "name": "Confianza Arrolladora", "desc": "Genera debuff moral en adversarios al no necesitar transformarse (cabello negro) y tener un Ki superior a los SSJ3.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "gohan-mistico-z", "name": "Estado Definitivo (Místico)", "stats": "Nivel Galaxia. Cabello negro erizado de SSJ, dogi de su padre (Goku), mirada implacable y arrogante." } ],
    "feats": [
      "Humilló física y verbalmente a Super Buu ('¿Pelear contigo? No... vengo a matarte').",
      "Soportó la explosión de Ki de Super Buu en la cara.",
      "Cortó el cuerpo de Buu a la mitad de un solo hachazo de brazo."
    ],
    "psychology": "Sufre del 'Síndrome Saiyan' (similar a cuando alcanzó el SSJ2 contra Cell). Se confía demasiado al sentirse abrumadoramente superior, queriendo humillar a la amenaza en lugar de asesinarla rápido, lo que llevó a que Buu absorbiera a Goten y Trunks.",
    "weaknesses": "Arrogancia táctica letal; exceso de confianza."
  },
  // 6. GOTENKS SSJ3 (Z)
  {
    "id": "gotenks-ssj3-saga-buu-gt001",
    "name": "Gotenks",
    "alias": "El Héroe de la Justicia",
    "universe": "Dragon Ball Z",
    "saga": "Saga de Buu",
    "version": "Super Saiyan 3",
    "tier": "Tier 4-A | Nivel Multi-Sistema Solar",
    "ap": "Nivel Multi-Sistema Solar. La fusión mágica de Goten y Trunks. Este niño prodigio alcanzó el SSJ3 con solo verlo. Su enorme poder es capaz de pulverizar a Super Buu, y sus habilidades ki son las más creativas de todo el universo de Dragon Ball, ignorando las leyes convencionales del KI.",
    "range": "Planetario mediante Super Fantasmas.",
    "speed": {
      "combat": "Masivamente FTL+. Voló alrededor de la Tierra docenas de veces en un instante para 'dormir una siesta' (Relleno).",
      "reaction": "MFTL+.",
      "travel": "MFTL+.",
      "attack": "Velocidad lumínica con ataques engañosos."
    },
    "strength": { "striking": "Clase Sistema Solar+. Jugaba a voleyball con Majin Buu.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Multi-Sistema Solar. Recibió ataques masivos de Super Buu y se los sacudió como si nada.",
    "stamina": "Muy Baja en SSJ3. La fusión de 30 minutos se reduce a solo 5 minutos debido al extremo consumo energético de la fase 3.",
    "battleIQ": "Creativo e infantil, inventa ataques sobre la marcha engañando al oponente, pero es extremadamente inmaduro.",
    "haxTags": [ "Fusión Metamoru Mágica", "Creación Autónoma de Ki (Fantasmas Kamikaze)", "Grito Dimensional (Rasga el espacio)" ],
    "arsenal": {
      "basicAttacks": "Lluvia de puñetazos de jabalí, patadas dinamo, y nombres rimbombantes para ataques normales.",
      "superAttacks": [
        { "name": "Donut Galáctico", "desc": "Anillos amarillos que inmovilizan herméticamente al rival, adaptándose a su tamaño.", "cost": "15% Ki" },
        { "name": "Voleibol Buu", "desc": "Tras atrapar al oponente, forma una pelota gigante con su cuerpo y juega con Piccolo para hacer un mate letal contra el suelo.", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Ataque Kamikaze de los Super Fantasmas (Super Ghost Kamikaze Attack)", "desc": "Escupe por la boca clones ectoplásmicos de sí mismo. Tienen inteligencia propia y si tocan cualquier cosa, explotan con potencia de sistema solar.", "cost": "50% Ki" }
      ],
      "passives": [
        { "name": "Impredecible (Comedia)", "desc": "Las tácticas serias no aplican; su modo de pelea absurdo desconcierta y aturde (debuff) al adversario.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "gotenks-ssj3", "name": "Super Saiyan 3", "stats": "Nivel Multi-Sistema Solar. Cabello dorado gigante, chaleco metamoru. Demasiado fuerte pero el reloj corre." } ],
    "feats": [
      "Destrozó por completo a Super Buu, obligándolo a regenerarse del humo constantemente.",
      "Rasgó la dimensión de la Habitación del Tiempo gritando a máximo pulmón.",
      "Destruyó a Buu en pedazos microscópicos (aunque este se regeneró)."
    ],
    "psychology": "El niño engreído por excelencia. Su arrogancia no viene de la crueldad, sino de querer lucirse como en los cómics. Suele hacerse el perdedor para luego dar un giro heroico (casi siempre costándole caro).",
    "weaknesses": "Inmadurez severa. Se burla de oponentes letales y pierde tiempo en el SSJ3, lo que invariablemente provoca su separación antes de dar el golpe de gracia."
  },
  // 7. GOKU SSJ4 (GT)
  {
    "id": "son-goku-saga-gt-dragon-ball-gt-281",
    "name": "Son Goku (Saga GT)",
    "alias": "El Guerrero de Pelaje Carmesí",
    "universe": "Dragon Ball GT",
    "saga": "Super 17 / Dragones Oscuros",
    "version": "Super Saiyan 4",
    "tier": "Tier 3-A | Nivel Universal",
    "ap": "Nivel Universal. La transformación que domina el instinto animal del Oozaru con el raciocinio Saiyan. A diferencia del SSJ3, no drena su vida inútilmente. Su Kamehameha x10 es capaz de destrozar seres como Baby Vegeta o empujar a Dragones Malignos de escala universal. El Ki que emana es primitivo, bruto y rojo.",
    "range": "Físico y Universal mediante Kamehameha x10.",
    "speed": {
      "combat": "Inconmensurable+. Reaccionaba a los ataques ilusorios de Super 17 y Baby sin mirar.",
      "reaction": "Inconmensurable+.",
      "travel": "MFTL+ / Shunkanido.",
      "attack": "Velocidad MFTL+ a Lumínica."
    },
    "strength": { "striking": "Clase Universal. Su poder muscular es el más alto de su línea temporal (Sin Ki divino).", "lifting": "Clase Estelar." },
    "durability": "Nivel Universal. Piel cubierta por pelaje carmesí denso que resiste el fuego solar y los relámpagos demoníacos sin sufrir quemaduras.",
    "stamina": "Muy Alta. La forma SSJ4 canaliza el Ki de forma extremadamente eficiente comparado con niveles 3 o fusiones.",
    "battleIQ": "Maduro y Táctico. En SSJ4, Goku recupera su instinto marcial de adulto pero con un toque agresivo e intimidante, analizando los patrones de Super 17 para encontrar su debilidad.",
    "haxTags": [ "Control de Instinto Primitivo", "Superación de Debilidades Elementales", "Ondas de Presión Oozaru", "Ceguera Lumínica (Bengala Solar)" ],
    "arsenal": {
      "basicAttacks": "Combate cercano brutal, puñetazos de gancho, usa su cuerpo para embestir.",
      "superAttacks": [
        { "name": "Kamehameha x10", "desc": "Concentra 10 veces el poder de su ataque estrella, generando dos esferas rojas ardientes que convergen en un torrente carmesí letal.", "cost": "30% Ki" },
        { "name": "Puño del Dragón Super", "desc": "Atraviesa al rival con su cuerpo envuelto en la forma de un dragón dorado de energía que erradica células y circuitos.", "cost": "60% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Choque del Dragón (Kamehameha x10 Final)", "desc": "Sobrecarga de poder, ignorando las quemaduras en sus propias manos, lanza un rayo continuo ineludible.", "cost": "80% Ki" }
      ],
      "passives": [
        { "name": "Pelaje de Oozaru Dorado", "desc": "Reducción del 50% de todo daño físico y quemaduras, mitigando ataques directos gracias a su recubrimiento protector.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "goku-gt-ssj4", "name": "Super Saiyan 4", "stats": "Nivel Universal. Ojos dorados/rojos, pelaje rojo, cola visible, musculatura máxima." } ],
    "feats": [
      "Derrotó a Baby Vegeta Ozaru Dorado empujándolo al sol con el Kamehameha x10.",
      "Encontró y atravesó la debilidad de absorción de Super 17.",
      "Derrotó a varios Dragones Malignos y consumió una esfera de energía negativa tragándola literalmente."
    ],
    "psychology": "Confiado, imponente y protector. A diferencia de sus etapas Z, este Goku es más severo y directo, no juega tanto con los villanos y usa su poder para imponer terror en enemigos como Baby.",
    "weaknesses": "Confía demasiado en que el enemigo no sobrevivirá a su Kamehameha x10; ocasionalmente la falta de absorción mágica (Genki) le hace depender de aliados para recargar su KI al máximo."
  },
  // 8. BABY VEGETA (GT)
  {
    "id": "baby-vegeta-dragon-ball-gt-510",
    "name": "Super Baby Vegeta",
    "alias": "El Monarca Tsufur",
    "universe": "Dragon Ball GT",
    "saga": "Baby",
    "version": "Forma Fuerte 2 (Pelo Blanco)",
    "tier": "Tier 3-A | Nivel Universal",
    "ap": "Nivel Universal. Tras asimilar por completo el cuerpo de Vegeta y parasitar a todos los Saiyans vivos de la Tierra (Gohan, Goten, Trunks), Baby muta el cuerpo de su huésped. Su Vengador de la Bola Mortal iguala y temporalmente supera al Goku SSJ3 (Niño) de forma humillante, hasta la llegada del SSJ4.",
    "range": "Universal a través de ondas oscuras y Death Balls.",
    "speed": {
      "combat": "Inconmensurable.",
      "reaction": "Inconmensurable.",
      "travel": "MFTL+.",
      "attack": "Ráfagas lumínicas y expansión atómica veloz."
    },
    "strength": { "striking": "Clase Universal. Acierta golpes aplastantes contra un Goku sin transformación completa.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Universal. Factor de regeneración (infección celular) combinado con la armadura Tsufur modificada.",
    "stamina": "Muy Alta. Puede drenar remotamente la energía de todos sus seguidores hipnotizados en la Tierra/Nuevo Vegeta.",
    "battleIQ": "Ingenioso Tecnológico, utilizando tácticas parasitarias y manipulación genética antes de luchar a puñetazos.",
    "haxTags": [ "Parasitismo Molecular Absoluto", "Robo y Suministro de Ki (Red Tsufur)", "Mutación Genética (Transición Saiyan-Tsufur)", "Telequinesis Superior" ],
    "arsenal": {
      "basicAttacks": "Técnicas heredadas de Vegeta (Ráfagas rápidas) imbuidas en Ki oscuro/negativo.",
      "superAttacks": [
        { "name": "Resplandor Final (Final Flash Vengador)", "desc": "Una ráfaga cruzada de color rojo y violeta que calcina montañas enteras.", "cost": "20% Ki" },
        { "name": "Bala Asesina (Revenge Blast)", "desc": "Rayos disparados desde los dedos que plantan semillas parasitarias o penetran corazas.", "cost": "10% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Bola de la Muerte Vengadora (Revenge Death Ball)", "desc": "Similar a la Genkidama, pero usando el odio de los Tsufurs y drenando la energía negra de sus lacayos hipnotizados, crea una esfera oscura supermasiva letal.", "cost": "70% Ki / Drenaje de Aliados" }
      ],
      "passives": [
        { "name": "Consciencia Asimilada", "desc": "Tiene acceso a toda la memoria muscular y técnicas de Vegeta, usando su orgullo y agresividad pero sin dudar en usar tácticas rastreras.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "super-baby-2", "name": "Super Baby Vegeta 2", "stats": "Nivel Universal. Pelo blanco, líneas faciales rojas, traje blindado negro y amarillo." } ],
    "feats": [
      "Derrotó sin esfuerzo a Majuub tragándose su ataque final y devolviéndolo.",
      "Drenó a todos los habitantes del planeta Tierra.",
      "Con la máquina de Bulma alcanzó la forma de Oozaru Dorado, acorralando a Goku SSJ4."
    ],
    "psychology": "Soberbio, clasista y racista. Cree ser el pináculo biológico y exige adoración. Todo su propósito es castigar a los Saiyans y revivir a su antigua raza esparciendo parásitos.",
    "weaknesses": "Arrogante; si su huésped base (Vegeta) sufre suficiente desgaste físico por radiación o si le cortan la cola de Oozaru, pierde gran parte de su dominio. Expulsable del cuerpo huésped con purificación (Agua Ultra Divina)."
  },
  // 9. REY PICCOLO (DB CLASICO)
  {
    "id": "rey-piccolo-dragon-ball-cl-sico-497",
    "name": "Rey Demonio Piccolo",
    "alias": "Piccolo Daimao",
    "universe": "Dragon Ball (Clásico)",
    "saga": "Piccolo Daimao",
    "version": "Juventud Restaurada",
    "tier": "Tier 7-B | Nivel Ciudad",
    "ap": "Nivel Ciudad. En la era clásica, Daimao representaba el mal absoluto en la Tierra. Tras pedir la juventud eterna a Shenlong (y destruirlo inmediatamente después), su poder destrozó una ciudad entera con un simple gesto de su brazo sin apenas esforzarse. Era completamente superior al Goku pre-Agua Ultra Divina.",
    "range": "Ciudad mediante su Bakurikimaha.",
    "speed": {
      "combat": "Hipersónico+. Movimientos invisibles al ojo humano y entrenadores terrestres.",
      "reaction": "Hipersónico+.",
      "travel": "Hipersónico.",
      "attack": "Rápida emisión de ki por los ojos o la boca."
    },
    "strength": { "striking": "Clase Ciudad. Destrozó el cuerpo y rodillas de Goku a puros puñetazos.", "lifting": "Clase 100." },
    "durability": "Nivel Ciudad. Solo el puño atravesador de Goku impulsado al límite absoluto con el Ozaru Oculto logró matarlo.",
    "stamina": "Muy Alta. La juventud restaurada curó todos los problemas de fatiga que tenía al inicio del arco.",
    "battleIQ": "Dictador Tiránico. Brillante, manipulador y letal. No duda en tomar rehenes o destruir artefactos mágicos para asegurar su reino.",
    "haxTags": [
      "Regeneración Menor/Parcial Namekiana",
      "Creación de Engendros Demonios (vía Huevos)",
      "Vuelo y Telequinesis Básica"
    ],
    "arsenal": {
      "basicAttacks": "Golpes a presiones letales, uso de los ojos láser, pisar a enemigos caídos y extender extremidades.",
      "superAttacks": [
        { "name": "Ondas Demoniacas de Ojos", "desc": "Rayos gemelos precisos para inutilizar extremidades (rodillas/hombros) sin matar al rival.", "cost": "10% Ki" },
        { "name": "Creación Demoniaca (Huevos)", "desc": "Carga Ki para escupir un huevo por la boca del que nace un demonio sirviente (Tambourine, Cymbal, Piccolo Jr).", "cost": "30% Ki / Reduce tiempo de vida" }
      ],
      "ultimateAttacks": [
        { "name": "Explosión Demoniaca (Bakurikimaha)", "desc": "Reúne energía masiva en una mano sujetándola con la otra y lanza una onda expansiva colosal capaz de reducir toda una capital metropolitana a polvo.", "cost": "70% Ki" }
      ],
      "passives": [
        { "name": "Rey del Terror", "desc": "Los oponentes humanos menores o civiles pierden por completo su voluntad de pelear en su presencia.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "daimao-joven", "name": "Daimao (Joven)", "stats": "Nivel Ciudad. Aspecto verde, símbolo demonio en su pecho, letal." } ],
    "feats": [
      "Asesinó al Shenlong original para que nadie deshiciera sus deseos.",
      "Derrotó y asesinó a Chaoz, al Maestro Roshi y destruyó su trampa de Mafuba.",
      "Destruyó la Ciudad Capital con un solo ataque casual."
    ],
    "psychology": "Pura maldad, crueldad y deseo de caos absoluto. Le divierte ver sufrir a la humanidad, instaurando el día de su reinado y permitiendo crímenes, liberando a todos los presos.",
    "weaknesses": "Exceso de tortura; en lugar de matar a Goku inmediatamente, quiso verle sufrir rompiendo sus extremidades poco a poco, dejando a Goku su brazo derecho intacto (lo que le costó la vida). Vulnerable al Mafuba."
  },
  // 10. TRUNKS DEL FUTURO DBZ (SSJ)
  {
    "id": "trunks-del-futuro-saga-androides-saga-androides-577",
    "name": "Trunks del Futuro",
    "alias": "El Joven del Futuro",
    "universe": "Dragon Ball Z",
    "saga": "Androides / Cell",
    "version": "Super Saiyan (Con Espada Z / Presente)",
    "tier": "Tier 4-C a 4-B | Nivel Estrella Enana a Estrella",
    "ap": "Nivel Estrella. Su primera aparición como Super Saiyajin destrozó completamente a Mecha Freezer (quien aseguraba poder destruir planetas con un dedo y era superior a su versión de Namek). Con su espada forjada en el futuro, despachó a King Cold y limpió a las fuerzas de Freezer en segundos.",
    "range": "Planetario mediante Burning Attack.",
    "speed": {
      "combat": "FTL. Descuartizó a Freezer en docenas de pedazos antes de que este pudiera reaccionar o sentir dolor.",
      "reaction": "FTL.",
      "travel": "FTL.",
      "attack": "Tajos de espada lumínicos."
    },
    "strength": { "striking": "Clase Estrella. Soportó un ataque colosal de Freezer usando un dedo (reforzado con Ki), y rebanó metal y armaduras sin esfuerzo.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Estrella Enana. Superó fácilmente la Supernova de Mecha Freezer sosteniéndola físicamente sin quemarse.",
    "stamina": "Muy Alta. Entrenado desde niño en un entorno post-apocalíptico.",
    "battleIQ": "Pragmático y Directo. No tiene el orgullo Saiyan de Vegeta ni la bondad juguetona de Goku; si puede matar a un enemigo en un segundo, lo hace sin preguntar.",
    "haxTags": [ "Arma Filosa (Ignora cierta durabilidad base)", "Ataque Sorpresa (Señuelos manuales)" ],
    "arsenal": {
      "basicAttacks": "Esgrima avanzada usando su espada del futuro infundida con Ki para rebanar ataques energéticos, sumado a patadas y golpes rápidos.",
      "superAttacks": [
        { "name": "Buster Cannon", "desc": "Dispara dos ondas azules simultáneas con las manos.", "cost": "15% Ki" },
        { "name": "Ataque Ardiente (Burning Attack)", "desc": "Realiza una rápida e intrincada serie de movimientos de manos para confundir y cegar al enemigo, terminando en una potente esfera explosiva naranja.", "cost": "25% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Ataque Domo de Calor (Heat Dome Attack)", "desc": "Atrapa al rival en el aire, junta ambas manos sobre su cabeza y dispara una ola de calor expansiva masiva hacia arriba (la técnica que usó para matar a Cell Imperfecto en el futuro).", "cost": "60% Ki" },
        { "name": "Brillo Cortante (Shining Sword Attack)", "desc": "Combina el Burning Attack como distracción con docenas de cortes instantáneos de espada seguidos por una bola de Ki para vaporizar los restos.", "cost": "50% Ki" }
      ],
      "passives": [
        { "name": "Juicio Rápido", "desc": "No padece del 'Complejo de Superioridad Saiyajin'. Ataca a matar en su primer turno y obtiene un bonus a la Precisión en asaltos sorpresa.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "trunks-futuro-z", "name": "Super Saiyan", "stats": "Nivel Estrella. Chaqueta Capsule Corp, cabello morado/lila erizado en dorado, mirada seria." } ],
    "feats": [
      "Cortó a Mecha Freezer en mil pedazos con facilidad abismal.",
      "Detuvo la Supernova de Freezer con una sola mano y un salto rápido.",
      "Limpió su línea de tiempo aniquilando a C-17, C-18 y Cell Imperfecto regresando de entrenar."
    ],
    "psychology": "Respetuoso, cortés pero profundamente ansioso. Sufre por la incertidumbre de no saber si alteró algo peor. Valora la vida más que cualquier guerrero Z, debido al infierno que vivió en su dimensión.",
    "weaknesses": "Exceso de pánico al enfrentarse a enemigos que no conoce o superan sus expectativas de nivel (su miedo a los androides del presente afectó temporalmente su desempeño inicial)."
  }
];

const filePath = path.resolve(__dirname, '../src/data/characters.js');
let content = fs.readFileSync(filePath, 'utf8');
const prefix = 'export const INITIAL_CHARACTERS = ';
const currentList = eval(content.replace(prefix, ''));
console.log(`Current characters count: ${currentList.length}`);

let updatedCount = 0;
batch4Upgrades.forEach(upgrade => {
  let index = currentList.findIndex(c => c.id === upgrade.id);
  if (index !== -1) {
    currentList[index] = upgrade; // Overwrite
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

console.log(`Batch 4 Upgrade Complete. ${updatedCount} characters successfully enhanced.`);
