const fs = require('fs');
const path = require('path');

const batch9Upgrades = [
  // 1. GOHAN (SAGA BUU / GREAT SAIYAMAN)
  {
    "id": "son-gohan-adulto-saga-buu-774",
    "name": "Son Gohan (Adulto)",
    "alias": "El Gran Saiyaman / El Erudito",
    "universe": "Dragon Ball Z",
    "saga": "Saga de Buu (Pre-Definitivo)",
    "version": "Super Saiyan 2 (Desgastado)",
    "tier": "Tier 4-B | Nivel Sistema Solar",
    "ap": "Nivel Sistema Solar. Aunque ha perdido entrenamiento durante 7 años de paz y no alcanza los picos de poder que tuvo contra Cell, Gohan adulto sigue siendo increíblemente poderoso. Su SSJ2 fue suficiente para mantener a raya a Dabura, el Rey Demonio, y sus ataques básicos aplastan fácilmente a lacayos de clase alta.",
    "range": "Planetario.",
    "speed": { "combat": "MFTL.", "reaction": "MFTL.", "travel": "MFTL.", "attack": "Veloz." },
    "strength": { "striking": "Clase Sistema Solar.", "lifting": "Clase Estelar." },
    "durability": "Nivel Sistema Solar. A pesar de estar falto de entrenamiento, resistió la petrificación por instinto y aguantó golpes mágicos de Dabura y el asalto inicial de Majin Buu.",
    "stamina": "Moderada. Se cansa más rápido que en su juventud debido a la falta de entrenamiento marcial constante.",
    "battleIQ": "Ha perdido instinto asesino y reflejos, cayendo a menudo en trucos sucios, pero retiene su brillantez académica y comprensión del Ki.",
    "haxTags": [ "Doble Identidad (Great Saiyaman)" ],
    "arsenal": {
      "basicAttacks": "Artes marciales oxidadas, combinadas con poses ridículas de superhéroe para desconcertar.",
      "superAttacks": [
        { "name": "Masenko", "desc": "Su técnica de energía favorita heredada de Piccolo.", "cost": "15% Ki" },
        { "name": "Ráfaga de la Justicia (Superhéroe)", "desc": "Una ráfaga rápida usada para no matar, pero sí noquear a criminales y villanos.", "cost": "10% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Kamehameha Super (Saga Buu)", "desc": "Un potente Kamehameha lanzado en estado SSJ2 (el cual disparó contra el cascarón de Majin Buu).", "cost": "40% Ki" }
      ],
      "passives": [
        { "name": "El Peso de la Paz", "desc": "Su primer ataque tiene daño reducido porque inconscientemente se contiene por miedo a destruir el entorno terrestre.", "cost": "Debuff Inicial" }
      ]
    },
    "forms": [
      { "id": "gohan-saiyaman", "name": "Gran Saiyaman", "stats": "Nivel Sistema Solar. Casco/turbante, capa roja, traje verde." },
      { "id": "gohan-adulto-ssj2", "name": "Super Saiyan 2", "stats": "Nivel Sistema Solar. Cabello erizado, pero menos agresivo que en su juventud." }
    ],
    "feats": [
      "Luchó a la par contra Dabura a pesar de haber perdido poder.",
      "Mantuvo a salvo a los Kaioshins temporalmente de Majin Buu."
    ],
    "psychology": "Un joven noble, puro y ligeramente friki. Se siente obligado a ser un superhéroe y a estudiar, dividiendo su tiempo. Le falta la fiereza Saiyan pura de Goku o Vegeta.",
    "weaknesses": "Falta de entrenamiento. Reflejos oxidados. Su naturaleza compasiva lo hace blanco fácil de villanos despiadados."
  },
  // 2. ANDROIDE 20 (DR. GERO)
  {
    "id": "androide-20-saga-androides-799",
    "name": "Androide 20 (Dr. Gero)",
    "alias": "El Genio Maligno de la Red Ribbon",
    "universe": "Dragon Ball Z",
    "saga": "Saga Androides",
    "version": "Cíborg de Absorción de Ki",
    "tier": "Tier 4-C | Nivel Estrella Enana",
    "ap": "Nivel Estrella Enana. Gero transfirió su cerebro a un cuerpo robótico letal. Al igual que el Androide 19, carece de energía infinita pero puede robarla. Era capaz de perforar el cuerpo de Yamcha y absorberlo en segundos. Su poder es muy inferior al de un SSJ1 descansado o a Piccolo (fusionado con Nail).",
    "range": "Planetario mediante Sifón y Ojos.",
    "speed": { "combat": "FTL.", "reaction": "FTL.", "travel": "Sub-relativista.", "attack": "Velocidad de drenaje instantáneo." },
    "strength": { "striking": "Clase Estrella Enana.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Estrella Enana. Chasis duro, pero Piccolo le arrancó un brazo de un solo tajo limpio (Karate chop).",
    "stamina": "Alta (Depende puramente de absorber Ki).",
    "battleIQ": "Genio Científico. Lucha escondiéndose en terrenos rocosos, apagando su presencia y emboscando 1 a 1 para recargarse.",
    "haxTags": [ "Absorción de Energía (Sifón)", "Ausencia de Ki", "Visión Óptica Calculadora" ],
    "arsenal": {
      "basicAttacks": "Golpes letales al pecho y agarres a la boca/rostro.",
      "superAttacks": [
        { "name": "Ojo Láser", "desc": "Corta rocas y ciudades con la mirada para crear caos y esconderse en el polvo.", "cost": "0% Ki" },
        { "name": "Bionic Punisher", "desc": "Dispara dos ondas gemelas de Ki concentrado.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Drenaje Letal (Abrazo de Gero)", "desc": "Empala o sujeta al enemigo (como hizo con Yamcha y Piccolo), drenando su Ki y HP masivamente a sus propias reservas.", "cost": "0% Ki (Absorbe)" }
      ],
      "passives": [
        { "name": "Tácticas de Guerrilla", "desc": "Se oculta fácilmente; los escáneres o guerreros que dependen del radar de Ki no pueden encontrarlo.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "gero-base", "name": "Cíborg Dr. Gero", "stats": "Nivel Estrella Enana. Anciano robótico, bigote, cerebro expuesto bajo un domo de cristal." } ],
    "feats": [
      "Casi mata a Yamcha empalándolo y absorbiéndolo por sorpresa.",
      "Sobrevivió a los primeros asaltos de los Guerreros Z gracias a emboscadas.",
      "Creador del ser perfecto (Cell) y de los androides gemelos."
    ],
    "psychology": "Vengativo y cobarde. Su única obsesión es vengarse de Goku por destruir la patrulla Red Ribbon. Huye rápidamente si sus cálculos fallan (como el poder imprevisto de Vegeta o Piccolo).",
    "weaknesses": "Exceso de confianza en sus cálculos antiguos. Vulnerable al daño físico extremo contundente; fue decapitado por su propia creación (Androide 17)."
  },
  // 3. ANDROIDE 17 (Z)
  {
    "id": "androide-17-saga-androides-489",
    "name": "Androide 17",
    "alias": "El Gemelo Rebelde (Lapis)",
    "universe": "Dragon Ball Z",
    "saga": "Saga Androides",
    "version": "Modelo Z (Energía Infinita)",
    "tier": "Tier 4-C | Nivel Estrella Enana",
    "ap": "Nivel Estrella Enana. Superaba fácilmente a un SSJ ordinario (como Vegeta) y estaba exactamente a la par de Piccolo (Fusionado con Kami-sama). Sus golpes contundentes y estilo salvaje lo hacían una máquina de matar que no podía ser desgastada por métodos convencionales.",
    "range": "Planetario.",
    "speed": { "combat": "FTL.", "reaction": "FTL.", "travel": "FTL.", "attack": "Ágil y acróbata." },
    "strength": { "striking": "Clase Estrella Enana.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Estrella Enana. Su barrera androide anula por completo daño menor, y su base humana modificada resiste daño masivo (como los golpes de Piccolo).",
    "stamina": "Infinita Absoluta. Nunca se cansa ni pierde el aliento. Nunca necesita recargar Ki.",
    "battleIQ": "Inteligente pero inmaduro. Trata las peleas a muerte como 'juegos'.",
    "haxTags": [ "Generador de Energía Infinita", "Barrera Androide (Menor en Z)" ],
    "arsenal": {
      "basicAttacks": "Golpes callejeros, rodillazos a la mandíbula, patadas giratorias.",
      "superAttacks": [
        { "name": "Accel Dance", "desc": "Combo brutal sincronizado junto a 18 (o en solitario) acribillando a golpes al enemigo.", "cost": "0% Ki" },
        { "name": "Power Blitz", "desc": "Dispara ráfagas de fotones letales a una mano.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Barrera de Energía", "desc": "Crea una esfera verde impenetrable que bloquea casi cualquier ataque de Ki del mismo Tier, repeliéndolo a su alrededor.", "cost": "0% Ki" }
      ],
      "passives": [
        { "name": "Ventaja de Atrición", "desc": "El combate largo siempre favorece a 17, ya que sus oponentes pierden stamina mientras él mantiene el 100% de potencia.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "17-z", "name": "Cíborg Gemelo", "stats": "Nivel Estrella Enana. Ropa casual, pañuelo naranja, mirada confiada." } ],
    "feats": [
      "Derrotó a Tenshinhan, Piccolo y Trunks simultáneamente (junto a 18).",
      "Peleó de tú a tú en el combate más parejo de la saga contra Piccolo Kami."
    ],
    "psychology": "Un adolescente rebelde que odia recibir órdenes, especialmente del Dr. Gero. Le gusta conducir, robar camionetas y tomarse su tiempo para disfrutar el viaje.",
    "weaknesses": "Arrogante; no toma en serio a los rivales hasta que es demasiado tarde (Cell lo sorprendió). Vulnerable al ser absorbido."
  },
  // 4. ANDROIDE 17 FUTURO (CRUEL)
  {
    "id": "androide-17-futuro-l-nea-temporal-futura-398",
    "name": "Androide 17 (Futuro)",
    "alias": "El Verdugo del Futuro",
    "universe": "Dragon Ball Z",
    "saga": "Trunks del Futuro / TV Special",
    "version": "Línea Temporal Apocalíptica",
    "tier": "Tier 4-C | Nivel Estrella Enana (Bajo)",
    "ap": "Nivel Estrella Enana. Aunque cronológicamente es la misma persona, esta versión de otra línea de tiempo es ligeramente más débil en poder bruto que el del presente, pero infinitamente más cruel y letal en sus intenciones, habiendo aniquilado al 99% de la raza humana y asesinado a casi todos los Guerreros Z.",
    "range": "Planetario.",
    "speed": { "combat": "FTL.", "reaction": "FTL.", "travel": "FTL.", "attack": "Veloz." },
    "strength": { "striking": "Clase Estrella Enana.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Estrella Enana.",
    "stamina": "Infinita Absoluta.",
    "battleIQ": "Sádico y cobarde si se ve superado. Se contiene siempre para torturar y alargar el sufrimiento, pero mata por la espalda sin honor.",
    "haxTags": [ "Energía Infinita", "Trabajo en Equipo Letal (Con 18 del Futuro)" ],
    "arsenal": {
      "basicAttacks": "Golpes a matar a traición, pisotear humanos inocentes.",
      "superAttacks": [
        { "name": "Lluvia Fotónica", "desc": "Dispara cientos de rayos contra las ciudades sin descanso, arrasándolas en minutos.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Sadistic Dance (Danza Sádica)", "desc": "Junto a 18, acorrala al rival y le lanzan cientos de ráfagas continuas a quemarropa hasta que no quede rastro (técnica que mató a Gohan del Futuro).", "cost": "0% Ki" }
      ],
      "passives": [
        { "name": "Inmunidad al Remordimiento", "desc": "No titubea ni es engañado por técnicas de piedad o negociación.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "17-futuro", "name": "Asesino del Futuro", "stats": "Nivel Estrella Enana (Bajo). Vestimenta oscura y rota, mirada psicópata." } ],
    "feats": [
      "Asesinó a Gohan del Futuro, Piccolo, Vegeta y los demás héroes del futuro.",
      "Destruyó la civilización humana de la Tierra casi por completo."
    ],
    "psychology": "Un asesino en serie a escala global. Trata la aniquilación de la humanidad como el único juego divertido en un mundo aburrido.",
    "weaknesses": "Mucho más débil que el 17 del presente. Cuando Trunks del Futuro regresó entrenado, 17 fue pulverizado en instantes al ser incapaz de asimilar una diferencia de poder real."
  },
  // 5. MR. SATAN
  {
    "id": "mr-satan-saga-androides-140",
    "name": "Mr. Satán (Hercule)",
    "alias": "El Campeón del Mundo / El Salvador de la Tierra",
    "universe": "Dragon Ball (Z/Super)",
    "saga": "Juegos de Cell / Buu",
    "version": "Humano Normal (Leyenda Mediática)",
    "tier": "Tier 9-B | Nivel Atleta de Élite a Muro",
    "ap": "Nivel Muro. Para los estándares humanos convencionales, Satán es un campeón legítimo de las artes marciales, capaz de jalar autobuses y romper decenas de tejas de piedra. Contra adversarios de nivel Z es menos que una mosca, pero tiene una resiliencia cómica y una suerte abrumadora que lo salva de la muerte.",
    "range": "Cuerpo a cuerpo.",
    "speed": { "combat": "Atleta.", "reaction": "Atleta (Lentísimo para niveles Z).", "travel": "A pie o en Jetpack.", "attack": "Rápido para un humano normal." },
    "strength": { "striking": "Clase Muro.", "lifting": "Clase Vehículos (Arrastra autobuses)." },
    "durability": "Nivel Atleta... (Con suerte Gag: Nivel Cósmico). Un manotazo de Cell Perfecto y un golpe de Buu lo mandaron a volar contra montañas y sobrevivió con rasguños cómicos.",
    "stamina": "Atleta. Tiembla de miedo o huye, gastando energía en llorar o fingir dolor de estómago.",
    "battleIQ": "Maestro del Engaño. Un genio de las relaciones públicas y manipulación de masas. Usa sobornos, cámaras y fama.",
    "haxTags": [ "Toon Force Defensiva / Suerte Extrema", "Carisma Universal", "Dinero (Armas Ocultas)" ],
    "arsenal": {
      "basicAttacks": "Golpes vistosos sin daño de ki. Lanzamiento de piedras.",
      "superAttacks": [
        { "name": "Dynamic Kick", "desc": "Una patada voladora épica a la cara... que suele hacerle 0 de daño al villano y le rompe la pierna a Satán.", "cost": "0% Ki" },
        { "name": "Presente Sorpresa (Bomba)", "desc": "Saca un Game Boy o una consola disfrazada con explosivos plásticos C4 y se lo regala al villano.", "cost": "Objeto" }
      ],
      "ultimateAttacks": [
        { "name": "Súplica de los Terrestres (Genkidama Boost)", "desc": "Mr. Satán no ataca; habla al universo entero convenciéndoles (por su fama) de alzar las manos. Si está apoyando, garantiza el éxito del Genkidama aliado.", "cost": "0% Ki / Hax Social" }
      ],
      "passives": [
        { "name": "Gag de Supervivencia", "desc": "Por más fuerte que sea el enemigo (Cell, Buu, Omega Shenron), Mr. Satán nunca recibe daño letal, los ataques siempre lo rozan o lo golpean con daño cómico no-mortal.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "satan-base", "name": "Campeón Humano", "stats": "Nivel Muro. Traje de artes marciales marrón, cinturón de campeón mundial, gran afro y bigote." } ],
    "feats": [
      "Salvó al mundo al lanzar la cabeza del Androide 16 para motivar a Gohan.",
      "Domesticó temporalmente a Majin Buu Gordo haciéndose su mejor amigo.",
      "Fue la clave para convencer a la humanidad de donar energía para la Super Genkidama."
    ],
    "psychology": "Un farsante cobarde que ama la fama y el dinero, pero con un corazón genuinamente bueno. Si su familia (Videl, Pan) o Buu están en peligro, arriesga la vida a pesar de saber que morirá.",
    "weaknesses": "Es solo un humano normal y corriente sin poderes Ki."
  },
  // 6. VIDEL
  {
    "id": "videl-saga-buu-6",
    "name": "Videl",
    "alias": "La Guerrera de Ciudad Satán",
    "universe": "Dragon Ball Z",
    "saga": "Saga de Buu",
    "version": "Humana Entrenada (Usuaria de Ki Básico)",
    "tier": "Tier 8-B a 8-A | Nivel Bloque de Ciudad a Multi-Estructura",
    "ap": "Nivel Multi-Estructura. Videl es inmensamente superior a su padre Mr. Satán. Domina el Ki de forma básica gracias al entrenamiento de Gohan, pudiendo volar y lanzar ataques de energía débiles. Derrotó fácilmente a criminales con armas de fuego e infligió daño físico técnico a Spopovich Majin antes de ser abrumada por su regeneración.",
    "range": "Cuerpo a cuerpo, metros.",
    "speed": { "combat": "Supersónica (Ligeramente más rápida que el ojo humano normal).", "reaction": "Supersónica.", "travel": "Supersónica (Vuelo de Ki).", "attack": "Veloz marcialmente." },
    "strength": { "striking": "Clase Multi-Estructura.", "lifting": "Clase Fuerte Atleta." },
    "durability": "Nivel Bloque de Ciudad. Resistió una brutal paliza sangrienta de Spopovich sin rendirse, soportando dolor que mataría a humanos ordinarios.",
    "stamina": "Alta (Persistencia férrea).",
    "battleIQ": "Avanzado. Comprende tácticas de desvío, llaves articulares y rompimiento de guardias mejor que muchos artistas marciales.",
    "haxTags": [ "Fuerza de Voluntad Inquebrantable", "Vuelo de Ki" ],
    "arsenal": {
      "basicAttacks": "Barridos, patadas descendentes, llaves de sumisión e intercepción de golpes.",
      "superAttacks": [
        { "name": "Vuelo de Halcón", "desc": "Combo de patadas aéreas finalizando con un pisotón directo a la cabeza.", "cost": "5% Ki" },
        { "name": "Ráfaga de Ki Menor", "desc": "Pequeña esfera de energía que aprendió a proyectar.", "cost": "10% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Justicia Implacable (Desesperación)", "desc": "Videl se lanza con todo su cuerpo, asestando un golpe cruzado capaz de romper el cuello a oponentes (como hizo con Spopovich, aunque este no sintió dolor).", "cost": "15% Ki" }
      ],
      "passives": [
        { "name": "Determinación Férrea", "desc": "No cede ante el miedo; si se enfrenta a un enemigo sádico, su defensa técnica aumenta por pura terquedad.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "videl-base", "name": "Videl", "stats": "Nivel Multi-Estructura. Pelo corto, camiseta blanca, mayas negras." } ],
    "feats": [
      "Le rompió el cuello a un Majin Spopovich de una patada giratoria perfecta.",
      "Aprendió a dominar el Ki y volar en pocos días, demostrando talento prodigioso para una humana."
    ],
    "psychology": "Orgullosa, terca y con un sentido de la justicia extremo (trabajaba como policía justiciera honoraria). No soporta la mentira, y su orgullo a veces le impide rendirse cuando debe.",
    "weaknesses": "Poder humano limitado; ante monstruos regenerativos o oponentes de clase estelar, no tiene forma de dañarlos."
  },
  // 7. GOKU NIÑO (CLÁSICO)
  {
    "id": "son-goku-ni-o-dragon-ball-cl-sico-987",
    "name": "Son Goku (Niño)",
    "alias": "El Niño Mono Salvaje",
    "universe": "Dragon Ball (Clásico)",
    "saga": "Búsqueda de las Esferas / Red Ribbon / Rey Piccolo",
    "version": "Pre-Rey Piccolo (Agua Ultra Divina)",
    "tier": "Tier 7-B a 5-C | Nivel Ciudad a Lunar (Por escala)",
    "ap": "Nivel Ciudad a Lunar. Como niño (tras beber el agua Ultra Divina), Goku derrotó al Rey Demonio Piccolo perforándole el pecho. Su poder bruto superaba a cualquier humano en la Tierra de su época. Resistió balas, misiles, explosiones y hachazos sin apenas cortes.",
    "range": "Ciudad a Lunar (Kamehameha completo).",
    "speed": { "combat": "Hipersónico.", "reaction": "Hipersónico (Evadió ataques láser de la Red Ribbon).", "travel": "Supersónico (En Nube Voladora).", "attack": "Veloz." },
    "strength": { "striking": "Clase Ciudad (Derrumba edificios o castillos de un puñetazo).", "lifting": "Clase Vehículos Pesados/Bloques de Piedra G." },
    "durability": "Nivel Ciudad. Las balas de rifle o metralleta rebotan en su piel provocando solo un '¡Ay!'.",
    "stamina": "Muy Alta, pero condicionada a si tiene el estómago lleno o no.",
    "battleIQ": "Prodigio Natural. Aprende técnicas (Kamehameha) solo viéndolas una vez.",
    "haxTags": [ "Cola de Oozaru", "Báculo Mágico (Nyoibo Extensión Infinita)", "Kamehameha Impulsor" ],
    "arsenal": {
      "basicAttacks": "Mordiscos salvajes, golpizas al estilo mono, uso del Báculo Mágico para golpear de lejos.",
      "superAttacks": [
        { "name": "Kamehameha", "desc": "Su técnica firma, aunque en esta etapa tarda unos segundos en cargar.", "cost": "20% Ki" },
        { "name": "Janken (Piedra, Papel, Tijeras)", "desc": "Golpe directo a la cara (Piedra), golpe a los ojos con dedos (Tijera), y empujón/corte de mano (Papel).", "cost": "5% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Golpe del Mono Gigante (Penetración Oozaru)", "desc": "Canaliza el poder del Oozaru en su puño propulsándose con un Kamehameha hacia atrás. Atraviesa el cuerpo del adversario como un torpedo vivo, destrozándolo.", "cost": "80% Ki" }
      ],
      "passives": [
        { "name": "Corazón Puro", "desc": "Inmune al Rayo Akkumite (Diablo) porque no posee ni una gota de maldad. Puede montar la Nube Voladora.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "goku-nino", "name": "Goku Clásico", "stats": "Nivel Ciudad. Pequeño, traje tortuga rojo, báculo mágico a la espalda, cola de mono, nube voladora." } ],
    "feats": [
      "Derrotó a la organización paramilitar más grande de la Tierra (Ejército Red Ribbon) él solo.",
      "Atravesó y mató al Rey Demonio Piccolo impulsado con un solo brazo funcional."
    ],
    "psychology": "Un niño salvaje del bosque, sumamente ingenuo (confunde matrimonios con comida), amable y amante de los combates justos.",
    "weaknesses": "Su cola (si la agarran con fuerza, pierde el 100% de su energía y cae al suelo inútil). El hambre extrema lo debilita muchísimo."
  },
  // 8. GOKU SAGA BUU (SSJ2 / BASE)
  {
    "id": "son-goku-saga-buu-saga-buu-646",
    "name": "Son Goku (Saga Buu)",
    "alias": "El Guerrero del Más Allá",
    "universe": "Dragon Ball Z",
    "saga": "Saga de Buu",
    "version": "Super Saiyan 2 (Combate contra Majin Vegeta)",
    "tier": "Tier 4-B | Nivel Sistema Solar",
    "ap": "Nivel Sistema Solar. En este estado (y sin revelar el SSJ3), Goku libró la batalla más encarnizada y pareja de todo DBZ contra Majin Vegeta. Su control sobre el SSJ2 es magistral, canalizando el daño en golpes devastadores capaces de romper rocas reforzadas y montañas con puras ondas de choque.",
    "range": "Sistema Solar (Kamehameha SSJ2).",
    "speed": { "combat": "MFTL+.", "reaction": "MFTL+.", "travel": "Shunkanido.", "attack": "Velocidad lumínica de combate." },
    "strength": { "striking": "Clase Sistema Solar. Chocaba a la par contra Vegeta buffeado por la magia Majin.", "lifting": "Clase Estelar." },
    "durability": "Nivel Sistema Solar. Aguantó los aros paralizantes de Vegeta y el impacto masivo en paredes de roca, levantándose sin apenas bajar el ritmo.",
    "stamina": "Muy Alta, pero el estar 'muerto' limitaba su tiempo en la Tierra.",
    "battleIQ": "Años de entrenamiento en el Otro Mundo le han dado la experiencia marcial suprema. Maestro de fintas y contraataques cerrados.",
    "haxTags": [ "Aura Eléctrica Paralizante (SSJ2)", "Shunkanido Instantáneo" ],
    "arsenal": {
      "basicAttacks": "Artes marciales perfectas, patadas hacha al cuello, giros de bloqueo y uppercuts rompe costillas.",
      "superAttacks": [
        { "name": "Meteor Blast", "desc": "Combo rápido rematado con una esfera de Ki de impacto contundente.", "cost": "15% Ki" },
        { "name": "Kiai de Viento (Onda Invisible)", "desc": "Dispara una onda de aire invisible cortante desde la palma o el grito para repeler a distancia.", "cost": "5% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Super Kamehameha (SSJ2)", "desc": "Versión extrema y cargada del Kamehameha que rivaliza con el Final Flash de Majin Vegeta.", "cost": "45% Ki" }
      ],
      "passives": [
        { "name": "Retención Estratégica", "desc": "Goku siempre esconde poder (SSJ3). Esto confunde al radar/análisis enemigo haciéndoles creer que el combate está parejo.", "cost": "Pasivo psicológico" }
      ]
    },
    "forms": [ { "id": "goku-buu-ssj2", "name": "Super Saiyan 2", "stats": "Nivel Sistema Solar. Aureola, cabello erizado, electricidad pura, rostro serio." } ],
    "feats": [
      "Derrotó a Yakon haciéndolo estallar al darle demasiada energía SSJ2.",
      "Empató tácticamente contra Majin Vegeta en poder puro (aunque perdió por la espalda confiándose)."
    ],
    "psychology": "Compasivo pero irresponsable tácticamente; prefirió luchar contra Vegeta y gastar tiempo a pesar de saber que eso reviviría a Majin Buu, demostrando su lado Saiyan egoísta.",
    "weaknesses": "Ingenuidad y compasión. Al dar la espalda a Majin Vegeta para sacar semillas del ermitaño, fue noqueado y perdió el combate."
  },
  // 9. VEGETA SAGA BUU (BASE / SSJ2 - PRE-MAJIN)
  {
    "id": "vegeta-saga-buu-saga-buu-213",
    "name": "Vegeta (Saga Buu Base)",
    "alias": "El Príncipe Domesticado",
    "universe": "Dragon Ball Z",
    "saga": "Torneo de las Artes Marciales / Pui Pui",
    "version": "Super Saiyan 2 (Pre-Majin)",
    "tier": "Tier 4-B | Nivel Sistema Solar",
    "ap": "Nivel Sistema Solar. Antes de dejarse controlar por Babidi, Vegeta entrenó incesantemente durante 7 años. Destruyó a Pui Pui, el supuesto guerrero de élite de Babidi, sin siquiera usar el Super Saiyan ni sudar una gota, destrozándolo con puro combate base.",
    "range": "Planetario a Sistema Solar.",
    "speed": { "combat": "MFTL+.", "reaction": "MFTL+.", "travel": "MFTL+.", "attack": "Implacable." },
    "strength": { "striking": "Clase Sistema Solar.", "lifting": "Clase Estelar." },
    "durability": "Nivel Sistema Solar.",
    "stamina": "Muy Alta. Entrena diariamente en Gravedad extrema.",
    "battleIQ": "Altamente arrogante pero calculador.",
    "haxTags": [ "Fuerza Bruta Absoluta", "Ráfaga de Ki Comprimida" ],
    "arsenal": {
      "basicAttacks": "Lluvia de puñetazos cortos al estómago, patadas frontales empujadoras.",
      "superAttacks": [
        { "name": "Luces de Destrucción", "desc": "El combo con el que aniquiló a Pui Pui (Pone su mano en el pecho del enemigo y libera una explosión a quemarropa que vaporiza el torso).", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Big Bang Attack", "desc": "Su ataque letal concentrado y sin piedad.", "cost": "30% Ki" }
      ],
      "passives": [
        { "name": "Frustración Interna", "desc": "A lo largo del combate, si ve que Goku o Gohan son inferiores o muestran debilidad, su poder de ataque sube por pura rabia, aunque su paciencia baja.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "vegeta-buu-ssj2", "name": "SSJ2", "stats": "Nivel Sistema Solar. Traje azul sin armadura rígida. Orgullo herido." } ],
    "feats": [
      "Vaporizó a Pui Pui en estado Base bajo 10x Gravedad sin pestañear.",
      "Alcanzó el nivel de Gohan en los Cell Games por puro entrenamiento de 7 años."
    ],
    "psychology": "Crisis de los cuarenta y existencial. Es un padre de familia y vive cómodamente, pero resiente en secreto esa 'debilidad' y añora los días de ser un despiadado guerrero galáctico.",
    "weaknesses": "Vulnerable a la manipulación oscura de Babidi al tener maldad (orgullo tóxico) en el fondo de su corazón."
  },
  // 10. GOKU GT (SSJ3 / NIÑO)
  {
    "id": "son-goku-saga-gt-dragon-ball-gt-281",
    "name": "Son Goku (Saga GT)",
    "alias": "El Héroe Pequeño",
    "universe": "Dragon Ball GT",
    "saga": "El Gran Viaje / Baby",
    "version": "Niño (Maldición de Pilaf) / Super Saiyan 3",
    "tier": "Tier 3-C | Nivel Galaxia a Multi-Galaxia",
    "ap": "Nivel Galaxia. Al inicio de GT (Incluso en cuerpo de niño), el poder Base de Goku rivalizaba con el nivel SSJ3 de la saga Buu o superior. En estado SSJ3, a pesar de que su cuerpo infantil limitaba críticamente su tiempo, su poder destructivo empujaba los límites galácticos contra Baby Vegeta y General Rilldo (superior a Majin Buu).",
    "range": "Multi-Galáctico (Kamehameha x10).",
    "speed": { "combat": "Inconmensurable.", "reaction": "Inconmensurable.", "travel": "Inconmensurable.", "attack": "Velocidad luz extrema." },
    "strength": { "striking": "Clase Galaxia. Puede destrozar acero alienígena M2 con las manos desnudas.", "lifting": "Clase Sistema Solar." },
    "durability": "Nivel Galaxia. Sin embargo, su cuerpo de niño tiene menos tolerancia al daño cósmico extremo que su cuerpo adulto.",
    "stamina": "Muy Baja (En SSJ3). El cuerpo de niño GT quema la energía del SSJ3 en menos de un minuto, perdiendo la transformación rápidamente.",
    "battleIQ": "Mismo genio marcial de Z pero ligeramente más relajado.",
    "haxTags": [ "Restricción de Cuerpo Infantil", "Kamehameha x10 (Carga Letal)" ],
    "arsenal": {
      "basicAttacks": "Golpes veloces, acrobacias aprovechando su tamaño diminuto.",
      "superAttacks": [
        { "name": "Ryuken (Puño del Dragón)", "desc": "Atraviesa al enemigo creando un dragón dorado físico capaz de pulverizar entidades como Super 17 o dragones oscuros.", "cost": "40% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Kamehameha x10 (SSJ3/SSJ4)", "desc": "Dispara dos esferas rojas o concentradas masivas fundiéndolas en un rayo azul/rojo devastador de nivel Multi-Galáctico.", "cost": "50% Ki" }
      ],
      "passives": [
        { "name": "Cuerpo Reducido", "desc": "Bonus de evasión debido a su caja de colisión diminuta, pero recibe daño incrementado por falta de masa muscular protectora.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "goku-gt-ssj3", "name": "SSJ3 Niño", "stats": "Nivel Galaxia. Cuerpo de niño, cabello SSJ3 desproporcionadamente largo hasta los tobillos, sin cejas." } ],
    "feats": [
      "Venció al General Rilldo (quien era superior a Majin Buu) en estado base/SSJ1.",
      "Destrozó dimensiones estomacales absurdas en el otro mundo."
    ],
    "psychology": "Toma su maldición infantil como algo divertido, pero se enfurece profundamente si lastiman a la Tierra o a Pan.",
    "weaknesses": "El SSJ3 consume su energía ridículamente rápido en este estado. Además carece del Shunkanido (hasta final de la serie) por su pérdida parcial de habilidades en cuerpo infantil."
  },
  // 11. VEGETA GT (BIGOTE)
  {
    "id": "vegeta-saga-gt-dragon-ball-gt-851",
    "name": "Vegeta (Saga GT)",
    "alias": "El Padre de Familia GT",
    "universe": "Dragon Ball GT",
    "saga": "Super 17 / Dragones Oscuros",
    "version": "Super Saiyan 2 / 100%",
    "tier": "Tier 3-C | Nivel Galaxia a Multi-Galaxia",
    "ap": "Nivel Galaxia. A lo largo de la paz post-Buu, Vegeta GT ha mantenido un nivel excepcional (mucho más alto que su fase Z) a pesar de haber integrado su vida a la Tierra por completo. Su SSJ2 luchó a la par contra monstruos como Super 17 (conteniéndose) o los infectados de Baby antes de caer.",
    "range": "Multi-Galáctico (Final Shine Attack).",
    "speed": { "combat": "Inconmensurable.", "reaction": "Inconmensurable.", "travel": "Inconmensurable.", "attack": "Veloz." },
    "strength": { "striking": "Clase Galaxia.", "lifting": "Clase Sistema Solar." },
    "durability": "Nivel Galaxia. Sobrevive empalamientos y daños casi letales por honor puro y testarudez.",
    "stamina": "Muy Alta. Mantiene el SSJ casi pasivamente.",
    "battleIQ": "Maduro. Ya no posee el orgullo tóxico de Z; lucha inteligentemente y sabe hacer equipo para ganar.",
    "haxTags": [ "Final Shine (Láser Concentrado)", "Rayo Blutz Artificial (Soporte externo)" ],
    "arsenal": {
      "basicAttacks": "Golpes pulidos, paradas, combate urbano.",
      "superAttacks": [
        { "name": "Ataque del Big Bang Mejorado", "desc": "Dispara el Big Bang más letal con mínimo tiempo de carga.", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Final Shine Attack (Resplandor Final)", "desc": "Usa una sola mano extendida o cruza ambas para lanzar un torrente de Ki de un brillante color verde que pulveriza al enemigo instantáneamente. Es su variante refinada del Final Flash.", "cost": "45% Ki" }
      ],
      "passives": [
        { "name": "Orgullo Maduro", "desc": "No subestima a nadie. Si ve peligro, va a matar desde el turno uno sin jugar.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "vegeta-gt-ssj2", "name": "SSJ2 GT", "stats": "Nivel Galaxia. Pelo más corto y liso hacia arriba, sin armadura Saiyan (Ropa de cuero), y en sus inicios un Bigote icónico." } ],
    "feats": [
      "Sobrevivió y defendió a la Tierra liderando el ataque contra los resucitados del Infierno.",
      "Soportó ataques letales de los Dragones Oscuros esperando a la máquina de Bulma."
    ],
    "psychology": "Un hombre terrestre que ama a su hija (Bulla). Ha aceptado que Goku es más fuerte, pero no deja de esforzarse por pura pasión, siendo un aliado incondicional y noble, dispuesto a morir con honor.",
    "weaknesses": "Sin acceso al SSJ3 o SSJ4 por medios naturales (requiere máquina de ondas Blutz)."
  },
  // 12. GOKU MINI (DAIMA)
  {
    "id": "son-goku-mini-dragon-ball-daima-751",
    "name": "Son Goku (Mini)",
    "alias": "El Aventurero Empequeñecido",
    "universe": "Dragon Ball Daima",
    "saga": "Reino de los Demonios",
    "version": "Humanoide Reducido (Uso del Báculo)",
    "tier": "Tier 4-B | Nivel Sistema Solar (Poder retenido / Limitado)",
    "ap": "Nivel Sistema Solar (Base). A pesar de haber sido transformado en un mini-niño por una conspiración del Reino de los Demonios (post-Buu), su poder cósmico base sigue latente. Sin embargo, su longitud de brazos y piernas le impide pelear bien, por lo que recurre de nuevo a su viejo Báculo Mágico (Nyoibo) infundido de poder Z para equilibrar la balanza y luchar acrobáticamente contra Majins gigantes.",
    "range": "Alcance cuerpo a cuerpo masivo con Báculo Mágico, Ki planetario.",
    "speed": { "combat": "MFTL.", "reaction": "MFTL.", "travel": "MFTL.", "attack": "Veloz." },
    "strength": { "striking": "Clase Sistema Solar.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Sistema Solar. Tan resistente como Goku Base, aunque los golpes críticos le duelen cómicamente más.",
    "stamina": "Alta, pero se queja de la incomodidad de su cuerpo.",
    "battleIQ": "Instintivo e improvisador. Al no alcanzar al oponente, vuelve a sus raíces clásicas de combate con armas.",
    "haxTags": [ "Fisiología Reducida", "Báculo Mágico Reforzado de Ki", "Kamehameha Reducido" ],
    "arsenal": {
      "basicAttacks": "Golpes con el báculo extendido a la cabeza o pies del enemigo, volteretas y cabezazos.",
      "superAttacks": [
        { "name": "Extensión Nyoibo", "desc": "Alarga el palo para empujar monstruos demoníacos a gran distancia y golpearlos contra montañas.", "cost": "10% Ki" },
        { "name": "Mini Kamehameha Explosivo", "desc": "Pequeño en área pero con el peso y AP del Ki de un Goku Post-Buu.", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Combo Super Saiyan Mini", "desc": "Se transforma en SSJ (Daima), soltando un combo brutal y terminando con un rayo potente concentrado.", "cost": "40% Ki" }
      ],
      "passives": [
        { "name": "Desventaja de Altura", "desc": "Sus golpes físicos (manos/pies) carecen de alcance, fallando oponentes más altos a menos que use el Báculo.", "cost": "Debuff Activo" }
      ]
    },
    "forms": [ { "id": "goku-daima", "name": "Goku Daima", "stats": "Nivel Sistema Solar (Aprox, dependiendo escala). Cuerpo súper pequeño (no es GT), báculo rojo en la espalda, ropa azul clásica." } ],
    "feats": [
      "Derrota a guerreros demoníacos de élite usando técnicas básicas de palo.",
      "Mantiene su habilidad y Ki en un entorno hostil."
    ],
    "psychology": "Frustrado cómicamente por no alcanzar la comida o los enemigos, pero animado por la nueva aventura en el Reino de los Demonios.",
    "weaknesses": "Alcance físico muy corto y un periodo de adaptación lento a su nuevo equilibrio corporal."
  }
];

const filePath = path.resolve(__dirname, '../src/data/characters.js');
let content = fs.readFileSync(filePath, 'utf8');

const prefix = 'export const INITIAL_CHARACTERS = ';
const currentList = eval(content.replace(prefix, ''));
console.log(`Current characters count: ${currentList.length}`);

let updatedCount = 0;
batch9Upgrades.forEach(upgrade => {
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

console.log(`Batch 9 Upgrade Complete. ${updatedCount} characters successfully enhanced.`);
