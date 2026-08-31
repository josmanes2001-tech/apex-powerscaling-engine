const fs = require('fs');
const path = require('path');

const batch8Upgrades = [
  // 1. GOHAN SSJ2 (CELL GAMES)
  {
    "id": "son-gohan-joven-saga-androides-cell-945",
    "name": "Son Gohan (Joven)",
    "alias": "El Guerrero de la Furia Dorada / Super Saiyajin 2 Original",
    "universe": "Dragon Ball Z",
    "saga": "Juegos de Cell",
    "version": "Super Saiyan 2",
    "tier": "Tier 4-B | Nivel Sistema Solar",
    "ap": "Nivel Sistema Solar. Al ver a sus amigos torturados y al Androide 16 destruido, Gohan libera el potencial latente que guardaba desde niño. En SSJ2, su Ki rompió los límites conocidos; masacró a los Cell Jr de un solo golpe, humilló y obligó a Cell Perfecto a auto-destruirse, y su Kamehameha Padre e Hijo abrumó y borró el Kamehameha Solar de Cell Super Perfecto.",
    "range": "Planetario a Sistema Solar.",
    "speed": {
      "combat": "Masivamente FTL. Tan veloz que Cell no podía ver sus movimientos, robándole las semillas del ermitaño de las manos sin que lo notara.",
      "reaction": "MFTL.",
      "travel": "MFTL.",
      "attack": "Ráfagas instantáneas."
    },
    "strength": { "striking": "Clase Sistema Solar. Dos golpes secos en el abdomen de Cell lo hicieron vomitar a la Androide 18.", "lifting": "Clase Estelar." },
    "durability": "Nivel Sistema Solar. Inmune a ráfagas de ki inferiores, pero biológicamente vulnerable si baja su ki para proteger a otros (perdió el uso del brazo izquierdo protegiendo a Vegeta).",
    "stamina": "Muy Alta. Su reserva latente era inmensa.",
    "battleIQ": "Normalmente pacifista, pero en SSJ2 se vuelve despiadado y excesivamente arrogante (Síndrome Saiyan), lo que alarga las batallas innecesariamente buscando torturar.",
    "haxTags": [ "Furia Latente (Bonus de AP Extremo)", "Kamehameha Guiado Místico" ],
    "arsenal": {
      "basicAttacks": "Golpes letales de KO (Uppercuts que rompen el cuello, patadas en picada).",
      "superAttacks": [
        { "name": "Masenko Super", "desc": "Versión perfeccionada de la técnica de Piccolo.", "cost": "15% Ki" },
        { "name": "Combo de la Furia (Chou Maretsugeki)", "desc": "Una ráfaga de ganchos al estómago seguidos de un revés a la cara que destroza la voluntad del rival.", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Kamehameha Padre e Hijo", "desc": "Con un brazo inutilizado, y el espíritu de Goku apoyándole, canaliza su Ki caminando lentamente hacia adelante. Es capaz de vaporizar a un enemigo de Nivel Sistema Solar desde sus cimientos.", "cost": "70% Ki" }
      ],
      "passives": [
        { "name": "Muro del Castigo", "desc": "Bloquea o evade pasivamente cualquier ataque físico de oponentes de Tier 4-C o inferior sin recibir daño.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [
      { "id": "gohan-joven-ssj", "name": "Super Saiyan 1 (Full Power)", "stats": "Nivel Estrella. A la par o ligeramente superior a Goku SSJ." },
      { "id": "gohan-joven-ssj2", "name": "Super Saiyan 2", "stats": "Nivel Sistema Solar. Cabello erizado drásticamente con un mechón, electricidad constante, lágrimas de furia secas, mirada sádica." }
    ],
    "feats": [
      "Aniquiló a 7 Cell Jrs en menos de 10 segundos.",
      "Hizo vomitar a Cell Perfecto con solo dos golpes físicos.",
      "Ganó un choque de Kamehamehas contra un ataque que iba a destruir el Sistema Solar, usando solo un brazo."
    ],
    "psychology": "Odia pelear. Lloró al transformarse pidiéndole a Cell que parase. Pero al cruzar el límite (SSJ2), su personalidad se invierte: se vuelve cruel, arrogante y sádico, queriendo ver a su enemigo sufrir ('¡Aún no! ¡Aún no he terminado de jugar con él!').",
    "weaknesses": "Exceso de arrogancia que llevó a la muerte de Goku y Trunks. Falta de instinto marcial puro sin estar impulsado por la furia."
  },
  // 2. VEGETA SCOUTER (SAIYAN)
  {
    "id": "vegeta-llegada-a-la-tierra-saga-saiyan-504",
    "name": "Vegeta (Llegada a la Tierra)",
    "alias": "El Príncipe de los Saiyans",
    "universe": "Dragon Ball Z",
    "saga": "Saga Saiyan",
    "version": "Invasor Élite",
    "tier": "Tier 5-A | Nivel Planeta Grande",
    "ap": "Nivel Planeta. Con un poder base de 18,000 unidades, Vegeta era una fuerza de la naturaleza. Sobrevivió a los ataques combinados del Kaio-ken x4, un Genkidama, y el aplastamiento de Gohan Oozaru, demostrando la durabilidad más absurda de la serie clásica. Su Cañón Galick iba a hacer polvo el planeta Tierra entero.",
    "range": "Planetario.",
    "speed": { "combat": "Relativista (A la par del Kaio-ken x2).", "reaction": "Relativista.", "travel": "Sub-relativista.", "attack": "Veloz." },
    "strength": { "striking": "Clase Planetaria.", "lifting": "Clase Luna." },
    "durability": "Nivel Planeta Grande. Prácticamente inmatable para los humanos. Recibió cortes de espada, impactos cósmicos, ataques de su propia luna artificial y siguió arrastrándose a su nave.",
    "stamina": "Absurda. Se niega a morir por puro orgullo.",
    "battleIQ": "Élite Táctica, genio del combate, capaz de inventar lunas artificiales en pleno campo de batalla para ganar ventaja.",
    "haxTags": [ "Transformación Oozaru Cósmica", "Luna Artificial de Ki (Bola de Poder)", "Resiliencia de Orgullo" ],
    "arsenal": {
      "basicAttacks": "Golpes precisos, rodillazos a la columna vertebral, pisotones sádicos a rivales caídos.",
      "superAttacks": [
        { "name": "Cañón Galick (Galick Gun)", "desc": "Carga energía púrpura cruzando los brazos, disparando un torrente capaz de perforar y vaporizar un planeta de tamaño similar a la Tierra.", "cost": "25% Ki" },
        { "name": "Luna Artificial", "desc": "Crea una bola de Ki que emite Ondas Blutz, permitiéndole transformarse en Mono Gigante perdiendo algo de Ki inicial.", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Transformación Oozaru", "desc": "Multiplica su poder por 10. A diferencia de los de clase baja, Vegeta conserva 100% su inteligencia y velocidad, volviéndose una bestia capaz de aplastar a Goku fácilmente.", "cost": "Requiere Luna" }
      ],
      "passives": [
        { "name": "Armadura de Combate Saiyan", "desc": "Absorbe daños de impacto y cortes leves.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "vegeta-scouter", "name": "Príncipe Saiyan", "stats": "Nivel Planeta. Armadura blanca con hombreras amarillas, scouter rosa." } ],
    "feats": [
      "Soportó un Kamehameha potenciado con Kaio-ken x4.",
      "Sobrevivió al impacto de la Genkidama y al aplastamiento de un Oozaru consecutivamente."
    ],
    "psychology": "Orgullo aristocrático, clasista y despiadado. No le importan sus compañeros (mató a Nappa), solo demostrar que él es la cima de la jerarquía universal.",
    "weaknesses": "Cortar su cola anula el modo Oozaru. Si su orgullo es quebrado (ser superado por un 'clase baja'), pierde los estribos y desperdicia Ki."
  },
  // 3. VEGETA (NAMEK / ZENKAI)
  {
    "id": "vegeta-saga-namek-saga-namek-783",
    "name": "Vegeta (Saga Namek)",
    "alias": "El Guerrero Renacido",
    "universe": "Dragon Ball Z",
    "saga": "Saga Namek",
    "version": "Zenkai Múltiple (Armadura de Nueva Generación)",
    "tier": "Tier 4-C | Nivel Estrella Enana",
    "ap": "Nivel Estrella Enana (Post Zenkai Final). A base de casi morir y recuperarse continuamente, Vegeta multiplicó su poder vertiginosamente. Pasó de 24,000 (derrotando a Cui y Dodoria) a 30,000 (Zarbon), para finalmente rivalizar con la Forma Final (contenida) de Freezer, aunque fue masacrado al final.",
    "range": "Planetario.",
    "speed": { "combat": "FTL.", "reaction": "FTL.", "travel": "FTL.", "attack": "Ataques lumínicos continuos." },
    "strength": { "striking": "Clase Estrella Enana.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Estrella Enana. Soportó una paliza unilateral de Freezer Forma Verdadera que habría matado a cualquiera al instante.",
    "stamina": "Muy Alta, pero el terror saca lo peor de él.",
    "battleIQ": "Pragmático y tramposo. Ciega con tierra, ataca por la espalda y roba esferas.",
    "haxTags": [ "Zenkai Acumulado", "Ráfagas Múltiples de Presión" ],
    "arsenal": {
      "basicAttacks": "Lluvia de puñetazos rabiosos y patadas aéreas.",
      "superAttacks": [
        { "name": "Ráfaga de Ki Incesante (Lluvia de Meteoros)", "desc": "Dispara cientos de rayos de Ki de forma iracunda cubriendo todo de explosiones y humo (aunque casi nunca mata a villanos fuertes).", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Cañón Garlick Final", "desc": "Versión mejorada de su ataque, aunque fue devuelto por una patada casual de Freezer.", "cost": "40% Ki" }
      ],
      "passives": [
        { "name": "Ilusión del Súper Saiyajin", "desc": "Creía ser el Legendario SSJ, dándole un buff moral irreal que se quiebra al primer contraataque enemigo.", "cost": "Debuff psicológico" }
      ]
    },
    "forms": [ { "id": "vegeta-namek", "name": "Zenkai Élite", "stats": "Nivel Estrella Enana. Armadura sin hombreras (antigua), más rápido y ágil." } ],
    "feats": [
      "Eliminó por sí solo a casi toda la guardia de Freezer (Cui, Dodoria, Zarbon, Guldo, Jeice).",
      "Pudo ver momentáneamente los movimientos invisibles de Freezer Forma Verdadera."
    ],
    "psychology": "Aterrado por el trauma de la niñez frente a Freezer, pero disfrazándolo de arrogancia. Lloró por primera vez al morir, pidiendo a Goku que vengara a la raza Saiyan.",
    "weaknesses": "Pánico paralizante ante un poder incomprensible. Falta de poder final real para rivalizar con deidades."
  },
  // 4. VEGETA SUPER (CELL SAGA)
  {
    "id": "vegeta-saga-cell-saga-androides-856",
    "name": "Vegeta (Saga Cell)",
    "alias": "Super Vegeta",
    "universe": "Dragon Ball Z",
    "saga": "Saga Androides / Cell",
    "version": "Super Saiyan Grado 2 (Ascendido)",
    "tier": "Tier 4-B | Nivel Sistema Solar Menor",
    "ap": "Nivel Sistema Solar Menor. Tras la Habitación del Tiempo, Vegeta superó el límite del Super Saiyajin ordinario. En su estado 'Super Vegeta' destrozó literalmente a Cell Semi-Perfecto, poseyendo el Final Flash, un ataque tan devastador que Cell reconoció que si no lo esquivaba destruiría el planeta y su núcleo celular.",
    "range": "Planetario a Sistema Solar Menor (Final Flash).",
    "speed": { "combat": "MFTL.", "reaction": "MFTL.", "travel": "MFTL.", "attack": "Velocidad lumínica." },
    "strength": { "striking": "Clase Sistema Solar Menor. Sus puñetazos hundían el rostro a Cell de manera cómica.", "lifting": "Clase Estelar." },
    "durability": "Nivel Sistema Solar Menor. Armadura y piel muy endurecida por el aumento de masa muscular.",
    "stamina": "Alta, pero drena energía más rápido que el SSJ1 Full Power.",
    "battleIQ": "Cegado por su orgullo absoluto. Permitió que Cell absorbiera a la Androide 18 solo para 'probar su verdadera fuerza', su mayor error táctico.",
    "haxTags": [ "Compresión de Masa Muscular (Grado 2)", "Ráfaga Perforante Definitiva" ],
    "arsenal": {
      "basicAttacks": "Golpes pesados de boxeo, apuntando al abdomen para inmovilizar.",
      "superAttacks": [
        { "name": "Big Bang Attack", "desc": "Dispara una esfera concentrada desde la palma que explota en una enorme cúpula (Con la que destrozó al Androide 19).", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Final Flash (Destello Final)", "desc": "Abre los brazos de par en par acumulando electricidad amarilla en todo el planeta; dispara un haz ineludible que condensa el espacio a su alrededor. Si se dispara hacia el núcleo, borra el planeta.", "cost": "50% Ki" }
      ],
      "passives": [
        { "name": "Arrogancia del Ascendido", "desc": "Reduce su percepción del peligro; subestima al enemigo y baja su guardia táctica creyéndose invencible.", "cost": "Pasivo negativo" }
      ]
    },
    "forms": [ { "id": "super-vegeta", "name": "Super Saiyan Segundo Grado", "stats": "Nivel Sistema Solar Menor. Músculos hipertrofiados, pelo más erizado, aura chispeante amarilla brillante." } ],
    "feats": [
      "Arrancó los brazos del Androide 19.",
      "Humilló física y mentalmente a Cell Semi-Perfecto.",
      "Destrozó el brazo y torso lateral de Cell Perfecto (obligándolo a regenerarse) con el Final Flash."
    ],
    "psychology": "Orgullo tóxico puro. Su deseo de sentirse supremo nubla cualquier juicio lógico, prefiriendo arriesgar el universo entero solo por 5 minutos de desafío personal.",
    "weaknesses": "Ego. Se deja humillar intencionalmente o permite que el rival se fortalezca. No soporta ver a Trunks o Goku superarlo."
  },
  // 5. GOKU (FULL POWER SSJ - CELL GAMES)
  {
    "id": "son-goku-saga-cell-saga-androides-459",
    "name": "Son Goku (Saga Cell)",
    "alias": "El Maestro Relajado",
    "universe": "Dragon Ball Z",
    "saga": "Juegos de Cell",
    "version": "Super Saiyan Full Power",
    "tier": "Tier 4-B | Nivel Sistema Solar Menor",
    "ap": "Nivel Sistema Solar Menor. Goku perfeccionó el SSJ1 volviéndolo su estado natural (sin coste de energía ni agitación emocional). Esto le permitió usar el 100% de su poder sin fatiga muscular. Su Kamehameha Instantáneo voló la mitad superior de Cell Perfecto, una de las mayores hazañas tácticas de DBZ.",
    "range": "Sistema Solar Menor.",
    "speed": { "combat": "MFTL.", "reaction": "MFTL.", "travel": "Shunkanido.", "attack": "Teletransportación combinada." },
    "strength": { "striking": "Clase Sistema Solar Menor.", "lifting": "Clase Estelar." },
    "durability": "Nivel Sistema Solar Menor. Soportó los ataques de Cell Perfecto y su velocidad punta.",
    "stamina": "Extremadamente Alta (Consumo Nulo pasivo de SSJ).",
    "battleIQ": "Genio Absoluto. Creador de tácticas imposibles (Kamehameha + Teletransportación).",
    "haxTags": [ "Eficiencia de Ki Perfecta (SSJ Full Power)", "Teletransportación Ofensiva" ],
    "arsenal": {
      "basicAttacks": "Artes marciales perfectas, bloqueo instintivo y ráfagas concentradas.",
      "superAttacks": [
        { "name": "Kamehameha Teletransportado", "desc": "Apunta al planeta fingiendo lanzar el ataque, pero se teletransporta en el último microsegundo a la cara del oponente para dispararle sin dejarle margen de reacción.", "cost": "30% Ki" },
        { "name": "Kienzan Destructor (Copiado)", "desc": "Copia el disco de Krilin usándolo tácticamente.", "cost": "10% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Super Kamehameha Full Power", "desc": "La cúspide de su poder en esa etapa.", "cost": "45% Ki" }
      ],
      "passives": [
        { "name": "Calma Marcial", "desc": "Inmune al terror y a provocaciones. Evalúa el poder del rival milimétricamente.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "goku-ssj-full", "name": "SSJ Full Power", "stats": "Nivel Sistema Solar Menor. Cabello dorado suave (no tan erizado como el grado 2), aura tranquila dorada. Exuda paz en lugar de furia." } ],
    "feats": [
      "Voló el torso completo de Cell Perfecto usando el Kamehameha Instantáneo.",
      "Rindió el combate admitiendo que no podía ganar, para dar paso al verdadero salvador (Gohan).",
      "Se sacrificó llevando a Cell bomba al planeta del Kaio del Norte."
    ],
    "psychology": "Paternal pero frío al evaluar combates. Su fe en Gohan era absoluta, aunque Piccolo tuvo que recordarle que Gohan era solo un niño asustado, revelando su única falta como padre.",
    "weaknesses": "Vulnerable (como mortal) a explosiones suicidas (Murió salvando la Tierra de Cell)."
  },
  // 6. GOKU LLEGADA DBZ (SAIYAN)
  {
    "id": "son-goku-llegada-dbz-saga-saiyan-169",
    "name": "Son Goku (Llegada DBZ)",
    "alias": "El Guerrero Defensor",
    "universe": "Dragon Ball Z",
    "saga": "Saga Saiyan",
    "version": "Kaio-ken Máximo (x4)",
    "tier": "Tier 5-A | Nivel Planeta Grande",
    "ap": "Nivel Planeta Grande. Tras entrenar con Kaio-sama, Goku base superaba a Nappa fácilmente. Al usar el Kaio-ken x4, su poder se disparó hasta 32,000 unidades, sobrepasando el Galick Gun de Vegeta y empujándolo hacia el espacio exterior. Su poder destructivo podía aniquilar mundos fácilmente si el rayo tocaba tierra.",
    "range": "Planetario.",
    "speed": { "combat": "Relativista.", "reaction": "Relativista.", "travel": "Sub-relativista.", "attack": "Veloz por sobre-estimulación muscular." },
    "strength": { "striking": "Clase Planetaria.", "lifting": "Clase Montaña/Luna." },
    "durability": "Nivel Planeta. El Kaio-ken destruye su propio cuerpo; después del x4, una simple palmada en la espalda de Yajirobe le causaba dolor extremo.",
    "stamina": "Muy Baja bajo efectos del Kaio-ken. El cuerpo colapsa casi al instante post-combate.",
    "battleIQ": "Instintivo e Ingenioso. Utiliza a sus aliados para lanzar la Genkidama tras quedar incapacitado.",
    "haxTags": [ "Multiplicador Exponencial de Atributos (Kaio-ken)", "Genkidama Terrestre" ],
    "arsenal": {
      "basicAttacks": "Golpes de la tortuga combinados con el aura roja, bloqueos cruzados.",
      "superAttacks": [
        { "name": "Kaio-ken x2 y x3", "desc": "Aumenta la velocidad y fuerza temporalmente para asestar palizas (como a Nappa) o combatir de tú a tú con la élite.", "cost": "20% HP (Desgaste corporal)" }
      ],
      "ultimateAttacks": [
        { "name": "Kamehameha Kaio-ken x4", "desc": "Desobedece a Kaio-sama rompiendo todos sus vasos sanguíneos para impulsar el Kamehameha, generando una presión letal que doblega el Galick Gun.", "cost": "50% HP / 50% Ki" },
        { "name": "Pequeña Genkidama", "desc": "Esfera de energía reunida de la Tierra. (Lanzada por Krillin tras Goku ser aplastado).", "cost": "Requiere carga larga / Inmovilidad" }
      ],
      "passives": [
        { "name": "Músculo Destrozado", "desc": "Si usa el Kaio-ken más de 3 turnos, sus stats bajan a cero por ruptura muscular severa.", "cost": "Debuff activo" }
      ]
    },
    "forms": [ { "id": "goku-kaioken", "name": "Kaio-ken x4", "stats": "Nivel Planeta Grande. Aura rojo carmesí rugiente, cuerpo hiper-tensado, venas marcadas." } ],
    "feats": [
      "Derrotó a Nappa paralizándolo dejándolo caer al suelo sin esfuerzo (Base).",
      "Venció en el choque de energía más icónico de la historia a Vegeta.",
      "Sobrevivió con casi todos los huesos rotos al aplastamiento de Oozaru Vegeta."
    ],
    "psychology": "Emocionado por pelear contra gente fuerte, perdonando la vida a Vegeta por puro egoísmo de querer volver a pelear con él en el futuro.",
    "weaknesses": "El propio Kaio-ken lo destroza físicamente."
  },
  // 7. PICCOLO NAMEK (ASIMILADO)
  {
    "id": "piccolo-saga-saiyan-namek-saga-saiyan-967",
    "name": "Piccolo (Saga Namek)",
    "alias": "El Guerrero Namekiano Original",
    "universe": "Dragon Ball Z",
    "saga": "Saga Namek",
    "version": "Asimilado con Nail",
    "tier": "Tier 5-A | Nivel Planeta Grande",
    "ap": "Nivel Planeta Grande. Tras asimilar al guerrero Nail, Piccolo obtiene un poder abismal (más de 1,000,000 unidades). Literalmente arrojó como si fuera basura a la Segunda Forma de Freezer, dándole una paliza unilateral asombrosa que obligó al tirano a usar su tercera forma.",
    "range": "Planetario.",
    "speed": { "combat": "Relativista+.", "reaction": "Relativista+.", "travel": "Relativista+.", "attack": "Velocidad lumínica con golpes elásticos." },
    "strength": { "striking": "Clase Planetaria. Detenía ráfagas de Freezer con una sola mano.", "lifting": "Clase Luna." },
    "durability": "Nivel Planeta Grande. Regeneración constante y cuerpo optimizado por Nail.",
    "stamina": "Muy Alta. La asimilación Namekiana no tiene desgaste, multiplica la vitalidad base permanentemente.",
    "battleIQ": "Pragmático y confiado. Se quitó las pesas para demostrar su velocidad suprema.",
    "haxTags": [ "Fusión Permanente Namek (Asimilación)", "Regeneración Avanzada", "Brazos Elásticos" ],
    "arsenal": {
      "basicAttacks": "Golpes letales al cuello, agarres en el aire estirando sus brazos.",
      "superAttacks": [
        { "name": "Onda Expansiva Demoníaca", "desc": "Una gran explosión centrada en su cuerpo para repeler.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Makankosappo Veloz", "desc": "Al ser asimilado, ya no necesita tanta carga para disparar ráfagas penetrantes altísimas.", "cost": "25% Ki" }
      ],
      "passives": [
        { "name": "Sinergia de Guerreros", "desc": "La consciencia de Nail le otorga consejos instintivos de supervivencia pasivos.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "piccolo-nail", "name": "Piccolo (Nail)", "stats": "Nivel Planeta Grande. Aura blanca pura, más musculoso, sin pesas." } ],
    "feats": [
      "Vapuleó por completo a Freezer Segunda Forma (quien superaba el millón de unidades).",
      "Sobrevivió el Death Beam directo al pecho de Freezer (Forma final) para proteger a Goku, regenerándose después."
    ],
    "psychology": "Tremendamente confiado tras asimilar a Nail. Sintió que era invencible hasta que probó el abismo de la tercera forma de Freezer.",
    "weaknesses": "Vulnerable a amenazas que multipliquen mágicamente su poder (como las transformaciones alienígenas)."
  },
  // 8. CELL JR
  {
    "id": "cell-jr-saga-androides-134",
    "name": "Cell Jr.",
    "alias": "La Cría Perfecta",
    "universe": "Dragon Ball Z",
    "saga": "Juegos de Cell",
    "version": "Engendro Múltiple",
    "tier": "Tier 4-C a 4-B | Nivel Estrella Enana Alta",
    "ap": "Nivel Estrella Enana Alta. Estos pequeños monstruos engendrados por Cell Perfecto poseen casi la misma fuerza, velocidad y técnicas que su 'padre'. Pudiendo apalear sin piedad a Trunks SSJ, Vegeta SSJ y agotando a Goku (cansado), demuestran una capacidad ofensiva demencial para su diminuto tamaño.",
    "range": "Planetario.",
    "speed": { "combat": "MFTL.", "reaction": "MFTL.", "travel": "MFTL.", "attack": "Igualan a Cell Perfecto en evasión." },
    "strength": { "striking": "Clase Estrella Enana.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Estrella Enana. Piel durísima, aunque fueron destrozados a puñetazos secos por el SSJ2, resistieron Final Flashes y Makankosappos de los Guerreros Z.",
    "stamina": "Muy Alta. Al ser sintéticos/celulares apenas se cansan en combates cortos.",
    "battleIQ": "Instintivo e infantil, juegan a matar con total sadismo usando las artes marciales de todos los Guerreros Z.",
    "haxTags": [ "Copias Perfectas de Técnicas", "Factor de Regeneración", "Tamaño Reducido Evasivo" ],
    "arsenal": {
      "basicAttacks": "Golpes rápidos y sádicos, tacleadas aéreas, rompen huesos como juego.",
      "superAttacks": [
        { "name": "Kamehameha / Kienzan / Makankosappo", "desc": "Pueden usar cualquier técnica insignia de los héroes a discreción y a su máximo nivel destructivo.", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Asalto del Enjambre", "desc": "Si hay más de uno, atacan simultáneamente desde puntos ciegos, torturando al oponente y moliéndolo a golpes sin rematarlo.", "cost": "30% Ki" }
      ],
      "passives": [
        { "name": "Crueldad de Celélula", "desc": "Aprovechan la debilidad enemiga para asestar golpes críticos pasivos.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "cell-jr-base", "name": "Engendro Celular", "stats": "Nivel Estrella Enana Alta. Tamaño infantil, aspecto azulado de Cell Perfecto, ojos rosas chillones." } ],
    "feats": [
      "Derrotaron y torturaron a Krilin, Tenshinhan, Yamcha, Goku cansado y rivalizaron con Vegeta/Trunks Ascendidos.",
      "Sobrevivieron a un asalto de Ki coordinado ilesos."
    ],
    "psychology": "Pequeños sádicos sin escrúpulos. Ríen a carcajadas (con la misma voz aguda) mientras mutilan.",
    "weaknesses": "Carecen de la inteligencia de combate real de Cell. Cuando se enfrentan a un poder abrumador (SSJ2), mueren asustados de un solo golpe."
  },
  // 9. GOTEN
  {
    "id": "goten-saga-buu-694",
    "name": "Son Goten",
    "alias": "El Niño Prodigio Saiyan",
    "universe": "Dragon Ball Z",
    "saga": "Saga de Buu",
    "version": "Niño (Super Saiyan)",
    "tier": "Tier 4-C | Nivel Estrella Enana (Bajo)",
    "ap": "Nivel Estrella Enana. Nació con una cantidad ridícula de Células S, alcanzando el Super Saiyajin jugando con Chi-Chi sin entrenamiento extremo. Su poder base es lo suficientemente alto como para sorprender a Gohan adulto, pero carece de cualquier refinamiento marcial. Su AP es alto, pero su eficiencia y precisión son nulas.",
    "range": "Montañas a Lunar.",
    "speed": { "combat": "FTL (En SSJ).", "reaction": "FTL.", "travel": "Supersónica (Al principio no sabía ni volar).", "attack": "Veloz pero torpe." },
    "strength": { "striking": "Clase Estrella Enana.", "lifting": "Clase Luna." },
    "durability": "Nivel Estrella Enana. Piel Saiyan, soporta golpes fuertes de Gohan o Trunks en entrenamiento.",
    "stamina": "Media. Se aburre y cansa rápido como cualquier niño humano de 7 años.",
    "battleIQ": "Pésimo. Finge ataques, no tiene guardia, se distrae con insectos.",
    "haxTags": [ "Genética Mutante (SSJ Innato)", "Lágrimas de Engaño" ],
    "arsenal": {
      "basicAttacks": "Golpes a lo loco tirando los brazos (estilo molino).",
      "superAttacks": [
        { "name": "Kamekameha (Error de Pronunciación)", "desc": "Un Kamehameha mal pronunciado que a veces desvía su trayectoria, pero mantiene una potencia altísima descontrolada.", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Fusión Metamoru (Mitad)", "desc": "Técnica combinada con Trunks para crear a Gotenks.", "cost": "0% Ki (Requiere Trunks)" }
      ],
      "passives": [
        { "name": "Inocencia Desarmante", "desc": "Causa debuff de agresión en rivales que no sean totalmente malvados.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "goten-ssj", "name": "Super Saiyan", "stats": "Nivel Estrella Enana (Pura fuerza bruta descontrolada). Apariencia de Goku mini." } ],
    "feats": [
      "Alcanzó el SSJ de forma natural sin sufrir ningún trauma emocional.",
      "Le dio problemas a Gohan en el entrenamiento lanzándole piedras con fuerza estelar."
    ],
    "psychology": "Inocente, puro e ingenuo. Hace todo lo que Trunks le dice y toma el combate como un juego de recreo.",
    "weaknesses": "Cero disciplina táctica, predecible y llora si el dolor es muy agudo."
  },
  // 10. TRUNKS NIÑO
  {
    "id": "trunks-ni-o-saga-buu-209",
    "name": "Trunks (Niño)",
    "alias": "El Príncipe Infantil",
    "universe": "Dragon Ball Z",
    "saga": "Saga de Buu",
    "version": "Heredero de Capsule Corp (Super Saiyan)",
    "tier": "Tier 4-C | Nivel Estrella Enana (Bajo)",
    "ap": "Nivel Estrella Enana. Es un año mayor que Goten y ligeramente más fuerte y astuto. Ha entrenado brevemente con Vegeta en cámaras de gravedad. Sus ráfagas de ki obligaron a Vegeta a usar reflejos reales para esquivarlo en su entrenamiento.",
    "range": "Planetario (Con ráfagas concentradas).",
    "speed": { "combat": "FTL.", "reaction": "FTL.", "travel": "Sub-relativista.", "attack": "Velocidad estándar de SSJ base." },
    "strength": { "striking": "Clase Estrella Enana.", "lifting": "Clase Planeta Pequeño." },
    "durability": "Nivel Estrella Enana. Aguantó un puñetazo en la cara de Vegeta (reaccionario) que lo hizo sangrar un poco, pero se levantó en segundos.",
    "stamina": "Media. Acostumbrado a los lujos, no soporta la supervivencia extrema.",
    "battleIQ": "Medio-Bajo. Es más astuto que Goten (le engaña en su torneo), pero sigue siendo muy infantil.",
    "haxTags": [ "Entrenamiento de Gravedad (Leve)", "Genética Híbrida" ],
    "arsenal": {
      "basicAttacks": "Golpes rápidos y trucos visuales en torneos infantiles.",
      "superAttacks": [
        { "name": "Big Tree Cannon", "desc": "Su propia versión del Final Flash, disparando una onda masiva con ambas manos.", "cost": "20% Ki" },
        { "name": "Doble Ráfaga Oscura", "desc": "Imita ligeramente los movimientos de Vegeta disparando desde el aire.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Fusión Metamoru (Mitad)", "desc": "Técnica combinada con Goten para crear a Gotenks.", "cost": "0% Ki (Requiere Goten)" }
      ],
      "passives": [
        { "name": "Astucia Infantil", "desc": "Logra atrapar a oponentes con fintas que los luchadores experimentados no esperan de un niño.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "trunks-niño-ssj", "name": "Super Saiyan", "stats": "Nivel Estrella Enana. Pelo morado, dogi verde, engreído como su padre." } ],
    "feats": [
      "Acertó un golpe en el rostro de Vegeta en la cámara de gravedad x150.",
      "Derrotó a Mr. Satán de un solo golpe 'débil' (reteniéndose) mandándolo fuera de la arena y de la ciudad."
    ],
    "psychology": "Un niño mimado, arrogante, pero inteligente. Le gusta fardar de su poder, creyéndose mejor que Goten.",
    "weaknesses": "Subestima demasiado las situaciones, cobarde frente a amenazas horroríficas verdaderas si no está fusionado."
  },
  // 11. YAJIROBE
  {
    "id": "yajirobe-dragon-ball-cl-sico-111",
    "name": "Yajirobe",
    "alias": "El Samurái Glotón / El Héroe Improbable",
    "universe": "Dragon Ball (Clásico a Z)",
    "saga": "Saga Saiyan",
    "version": "Superviviente Humano",
    "tier": "Tier 8-B a 7-C | Nivel Bloque de Ciudad a Pueblo",
    "ap": "Nivel Pueblo (Con Espada). Aunque Yajirobe no puede volar ni manipular Ki en ráfagas destructivas, su fuerza física es bestial para un humano gordo, y su habilidad con la katana es inigualable. Cortó la armadura saiyan y la espalda de Vegeta, y le amputó la cola a Vegeta Oozaru de un tajo certero y limpio. En la saga de Piccolo Daimao cargaba con monstruos gigantes en la espalda y se los comía.",
    "range": "Cuerpo a cuerpo (Alcance de espada).",
    "speed": { "combat": "Sub-relativista (En ataques de emboscada).", "reaction": "Supersónica.", "travel": "Humano Normal (Corre y se esconde).", "attack": "Desenfunde instantáneo de Katana." },
    "strength": { "striking": "Clase Pueblo (Puede rebanar materiales alienígenas casi indestructibles).", "lifting": "Clase Toneladas (Físico robusto)." },
    "durability": "Nivel Bloque de Ciudad. Sobrevivió a una paliza humillante de Vegeta iracundo sin morir.",
    "stamina": "Muy Baja. Huye del combate y prefiere comer antes que pelear.",
    "battleIQ": "Cobarde por excelencia, pero instintivamente brillante para el combate de emboscada (Ocultar su presencia).",
    "haxTags": [ "Acero Inexplicablemente Filoso (Su Katana)", "Ocultamiento Pasivo (Nadie espera nada de él)", "Soporte Médico (Semillas Senzu)" ],
    "arsenal": {
      "basicAttacks": "Cortes limpios y rápidos con katana, lanzamiento de piedras, huir.",
      "superAttacks": [
        { "name": "Lanzamiento de Senzu", "desc": "Soporte táctico. Aparece y lanza una Semilla del Ermitaño a un aliado, curándole el 100% de HP y KI.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Tajo Certero (Emboscada Samurái)", "desc": "Escondido entre las rocas, salta y realiza un corte descendente con su Katana. La hoja logra perforar armaduras y tejidos cósmicos que resisten cañones de energía, cortando extremidades vitales (como colas).", "cost": "Efecto Sorpresa Requerido" }
      ],
      "passives": [
        { "name": "El Héroe que Huye", "desc": "Aumenta enormemente sus posibilidades de evasión y supervivencia al alejarse activamente del campo de batalla.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "yajirobe-base", "name": "Samurái Cobarde", "stats": "Nivel Pueblo. Pelo largo desaliñado, katana en la cintura, rechoncho." } ],
    "feats": [
      "Salvó la Tierra de la destrucción total amputando la cola del Oozaru Vegeta.",
      "Rebanó a Cymbal (demonio dragón gigante) de un corte y se lo comió asado.",
      "Cortó la espalda del poderoso Vegeta obligándolo a bajar la guardia."
    ],
    "psychology": "Interesado, vago, glotón y cobarde, pero en los escasos momentos en que todo parece perdido y nadie lo ve, saca un coraje irrefrenable para dar un golpe clave y volver a huir.",
    "weaknesses": "Cero capacidad aeróbica, no vuela, no dispara Ki, y huye ante cualquier daño."
  },
  // 12. GOHAN NIÑO FURIA (SAIYAN/NAMEK)
  {
    "id": "son-gohan-ni-o-saga-saiyan-namek-830",
    "name": "Son Gohan (Niño)",
    "alias": "El Potencial Oculto",
    "universe": "Dragon Ball Z",
    "saga": "Saga Saiyan / Namek",
    "version": "Ataque de Ira Incontrolable",
    "tier": "Tier 5-B | Nivel Planeta Pequeño a Planeta Grande",
    "ap": "Nivel Planeta Grande (Picos de Ira). Normalmente tiene un poder muy bajo (Llorón de 1,000 unidades), pero sus estallidos emocionales rompen todas las lógicas. Rompió la armadura de Raditz de un cabezazo letal (llegando a 1,307), y en Namek masacró temporalmente a Freezer 3ra Forma con ráfagas continuas al verlo torturar a Krilin, demostrando un potencial que asustó incluso al emperador galáctico.",
    "range": "Planetario.",
    "speed": { "combat": "Relativista (Impulsado por ira).", "reaction": "Pobre en estado base.", "travel": "Supersónica.", "attack": "Embestidas lumínicas cegadoras." },
    "strength": { "striking": "Clase Planetaria (Destruye barreras que sus mayores no pueden ni rasguñar).", "lifting": "Clase Montañas." },
    "durability": "Nivel Lunar. Sobrevive milagrosamente a ataques por ser mestizo, y Piccolo suele protegerlo. Cuando sufre una golpiza (como por Recoome), le rompen el cuello.",
    "stamina": "Muy Baja. El estallido de ira consume el 100% de sus reservas y cae desmayado al segundo siguiente.",
    "battleIQ": "Llorón. Cierra los ojos al golpear si está aterrado. Su ira es ciega y sin técnica.",
    "haxTags": [ "Ruptura de Límites (Ira Inconsciente)", "Oozaru Incontrolable" ],
    "arsenal": {
      "basicAttacks": "Cabezazos ciegos, ráfagas al azar, patadas inmaduras.",
      "superAttacks": [
        { "name": "Masenko Iracundo", "desc": "Pone las manos en la frente y libera toda su rabia en un rayo dorado devastador.", "cost": "50% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Lluvia de Ira (Rush Masenko)", "desc": "Un asalto físico incesante donde golpea sin descanso superando a enemigos de nivel dios temporalmente, finalizando con un ataque de Ki masivo (Usado contra Freezer 3ra forma).", "cost": "Todo su Ki y Estamina restante" }
      ],
      "passives": [
        { "name": "Potencial Dormido", "desc": "Su poder se multiplica pasivamente x10 o x50 si ve a un ser querido ser herido mortalmente.", "cost": "Activación Condicional" }
      ]
    },
    "forms": [ { "id": "gohan-nino-ira", "name": "Estado Iracundo", "stats": "Nivel Planeta Grande (Temporal). Traje Namekiano o Demoníaco de Piccolo, lágrimas en los ojos, aura roja brillante." } ],
    "feats": [
      "Quebró la armadura y costillas de Raditz de un solo cabezazo volador.",
      "Empujó a Freezer en su tercera forma forzándolo a bloquear ráfagas continuas de pánico.",
      "Aplastó a Vegeta transformado en Oozaru."
    ],
    "psychology": "Un niño aterrado que quiere ser académico. Odia pelear, llora de miedo e impotencia, sintiéndose inútil por depender de los demás. Su única salvación es la pérdida temporal de razón al enfadarse.",
    "weaknesses": "Inutilidad crónica en estado base. Pierde el coraje muy fácil. Cierra los ojos al atacar si tiene miedo."
  }
];

const filePath = path.resolve(__dirname, '../src/data/characters.js');
let content = fs.readFileSync(filePath, 'utf8');

const prefix = 'export const INITIAL_CHARACTERS = ';
const currentList = eval(content.replace(prefix, ''));
console.log(`Current characters count: ${currentList.length}`);

let updatedCount = 0;
batch8Upgrades.forEach(upgrade => {
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

console.log(`Batch 8 Upgrade Complete. ${updatedCount} characters successfully enhanced.`);
