const fs = require('fs');
const path = require('path');

const batch3Upgrades = [
  // 1. GOGETA BLUE (DBS)
  {
    "id": "gogeta-blue-dragon-ball-super-456",
    "name": "Gogeta (Saga Super)",
    "alias": "El Guerrero Definitivo / Fusión Metamoru",
    "universe": "Dragon Ball Super",
    "saga": "Película: Broly",
    "version": "Super Saiyan Blue",
    "tier": "Tier 2-C | Nivel Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. La fusión perfecta de Goku y Vegeta. Su poder destructivo es tal que al chocar puños con Broly LSSJ destrozaron las barreras del espacio-tiempo, peleando en una dimensión paralela. Supera abismalmente a los Dioses de la Destrucción. Cada impacto suyo infunde Ki divino con la destreza letal de un artista marcial sin igual.",
    "range": "Universal a Inter-Dimensional.",
    "speed": {
      "combat": "Inconmensurable. Evadió por completo la lluvia de ataques cósmicos de Broly sin ser tocado una sola vez en su forma Blue.",
      "reaction": "Inconmensurable.",
      "travel": "MFTL+ / Desplazamiento interdimensional.",
      "attack": "Velocidad lumínica a instantánea."
    },
    "strength": { "striking": "Clase Multiversal Bajo. Hacía gritar de dolor a Broly LSSJ (una esponja de daño infinito) con cada golpe.", "lifting": "Clase Universal." },
    "durability": "Nivel Multiversal Bajo. Su Ki Blue genera una presión que disipa pasivamente los ataques más débiles antes de que lo toquen.",
    "stamina": "Muy Alta, pero limitada al tiempo de la Fusión (30 minutos, aunque el Ki divino no la recorta tan agresivamente como el SSJ3 o el Pothala).",
    "battleIQ": "Combate de Máxima Perfección. Combina el instinto y genio de Goku con la estrategia despiadada y calculadora de Vegeta. No juega con la comida; busca erradicar la amenaza inmediatamente si esta es muy grande.",
    "haxTags": [ "Fusión Metamoru", "Rompedor Dimensional por Impacto", "Purificación de Ki (Stardust Breaker)", "Evasión Cíclica Instintiva" ],
    "arsenal": {
      "basicAttacks": "Golpes fluidos y abrumadores. Ataca con ángulos de 360 grados, usando acrobacias que confunden al enemigo.",
      "superAttacks": [
        { "name": "Castigador de Almas (Stardust Breaker)", "desc": "Una esfera de arcoíris que aniquila por completo el mal o la negatividad dentro del objetivo. Si el objetivo es puro, causa menos daño letal.", "cost": "20% Ki" },
        { "name": "Lluvia de Castigo", "desc": "Dispara cientos de rayos azules que siguen al enemigo y detonan como bombas nucleares individuales.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Kamehameha Rompedor de Límites", "desc": "Un Kamehameha de proporciones divinas, rodeado de un aura dorada y azul capaz de borrar a seres inmortales o mutantes legendarios de la existencia.", "cost": "60% Ki" }
      ],
      "passives": [
        { "name": "Flujo de Batalla Impecable", "desc": "A medida que encadena golpes sin ser interrumpido, su velocidad y daño aumentan pasivamente un 10% por turno.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [
      { "id": "gogeta-base", "name": "Base / Super Saiyan", "stats": "Nivel Universal. Abismalmente superior a Goku/Vegeta por separado." },
      { "id": "gogeta-blue", "name": "Super Saiyan Blue", "stats": "Nivel Multiversal Bajo. Invicto, implacable, dominancia absoluta." }
    ],
    "feats": [
      "Rompió la fábrica del universo junto con Broly solo peleando.",
      "Ganó el combate contra Broly LSSJ sin recibir un solo golpe directo dañino en Blue.",
      "Combinó un Kamehameha, Big Bang y Final Flash en un solo combate."
    ],
    "psychology": "Confiado pero letal. A diferencia de Vegetto, Gogeta es más silencioso, sonriendo durante el combate pero enfocado un 100% en finalizar la batalla con contundencia.",
    "weaknesses": "Límite de 30 minutos de existencia. Si se desgasta demasiado pronto, la fusión termina."
  },
  // 2. VEGETTO BLUE (DBS)
  {
    "id": "vegetto-blue-dragon-ball-super-79",
    "name": "Vegetto (Saga Super)",
    "alias": "El Dios de la Fusión / Pothala Divino",
    "universe": "Dragon Ball Super",
    "saga": "Trunks del Futuro (Black Goku)",
    "version": "Super Saiyan Blue",
    "tier": "Tier 2-C | Nivel Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. La fusión mediante arcillos Pothala. En su estado Blue, su poder supera las leyes de los Dioses. Fue capaz de destrozar físicamente el cuerpo inmortal y mutado de Zamasu Fusión, ignorando los ataques de rayos sagrados de nivel universal.",
    "range": "Universal mediante Final Kamehameha.",
    "speed": {
      "combat": "Inconmensurable. Zamasu Fusión no podía seguir el rastro de sus puños.",
      "reaction": "Inconmensurable.",
      "travel": "MFTL+ / Shunkanido.",
      "attack": "Velocidad lumínica con sus Espadas de Ki."
    },
    "strength": { "striking": "Clase Multiversal Bajo. Cada puñetazo desestabilizaba la materia inmortal de Zamasu.", "lifting": "Clase Universal." },
    "durability": "Nivel Multiversal Bajo. Soportó los impactos directos de la luz de la justicia de Zamasu sin un rasguño grave.",
    "stamina": "Críticamente Limitada por la Potencia. Aunque el Pothala dura 1 hora, el inmenso desgaste del SSJ Blue a máximo poder drena el tiempo de vida de la fusión a meros minutos.",
    "battleIQ": "Extremadamente Brillante. Burlón pero estratégico, provocando al enemigo para que cometa errores fatales.",
    "haxTags": [ "Fusión Pothala (Bonus Divino)", "Creación de Armas de Ki Cortante", "Resistencia a Magia de Borrado", "Barreras Protectoras Absolutas" ],
    "arsenal": {
      "basicAttacks": "Golpes con patadas y cortes con espadas de energía (Spirit Sword) que evitan la resistencia física de armaduras.",
      "superAttacks": [
        { "name": "Espada de Espíritu (Spirit Excalibur)", "desc": "Condensa su Ki en una larga hoja ineludible. Atraviesa y anula los factores de regeneración temporalmente.", "cost": "20% Ki" },
        { "name": "Big Bang Attack Controlado", "desc": "Disparos a quemarropa para desestabilizar la guardia enemiga.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Kamehameha Final", "desc": "Combina el Final Flash y el Super Kamehameha. Una descarga colosal que puede borrar sistemas estelares, pero consume la mayor parte del tiempo de fusión.", "cost": "80% Ki / Reduce tiempo de fusión a 0" }
      ],
      "passives": [
        { "name": "Burlas del Rey", "desc": "Inmunidad pasiva al daño psicológico o control mental; sus constantes burlas inducen ceguera de ira (debuff táctico) en oponentes inestables.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "vegetto-blue", "name": "Super Saiyan Blue", "stats": "Nivel Multiversal Bajo. Superioridad aplastante, pero reloj en contra." } ],
    "feats": [
      "Le dio una paliza unilateral a Zamasu Fusión (quien era inmortal e intocable para Goku y Vegeta).",
      "Perforó la mano divina de Zamasu con su espada de Ki sin esfuerzo.",
      "Sobrevivió al ataque definitivo 'Luz de la Absolución' absorbiéndolo."
    ],
    "psychology": "Tremendamente arrogante, egocéntrico y provocador. Utiliza el sarcasmo para destrozar el ego de los supuestos 'Dioses', obligándolos a pelear cuerpo a cuerpo.",
    "weaknesses": "Límite de fusión inestable; si usa un ataque a máximo poder (Final Kamehameha), los arcillos Pothala colapsan separándolos al instante."
  },
  // 3. KID BUU
  {
    "id": "kid-buu-saga-buu-907",
    "name": "Kid Buu",
    "alias": "El Majin Original / Caos Encarnado",
    "universe": "Dragon Ball Z",
    "saga": "Saga de Buu",
    "version": "Forma Original Pura",
    "tier": "Tier 4-A a 3-C | Nivel Multi-Sistema Solar a Galaxia",
    "ap": "Nivel Galaxia. Al perder a todos los absorbidos (Gohan, Gotenks, Piccolo y Fat Buu), regresa a su estado original desprovisto de toda moral o razón. Aunque tiene menos poder bruto que Buuhan o Buutenks, su falta de contención lo vuelve infinitamente más peligroso, disparando ráfagas que pulverizan planetas enteros solo para divertirse.",
    "range": "Galáctico (Destrucción por capricho).",
    "speed": {
      "combat": "Masivamente FTL+. Superaba a Goku SSJ3 en resistencia y capacidad de asalto continuo.",
      "reaction": "MFTL+.",
      "travel": "MFTL+ / Teletransportación (Shunkanido aprendido instantáneamente).",
      "attack": "Velocidad lumínica (Ráfagas erráticas)."
    },
    "strength": { "striking": "Clase Sistema Solar+. Físicamente equiparaba a un Goku SSJ3 al 100%.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Galaxia. No se cansa, no siente dolor y se regenera a nivel atómico en un segundo.",
    "stamina": "Literalmente Infinita. Nunca se agotó luchando contra Goku, Vegeta y Fat Buu consecutivamente.",
    "battleIQ": "Cero razonamiento, 100% instinto animal letal. Pelea como un mono salvaje impredecible.",
    "haxTags": [ "Inmortalidad por Regeneración Infinita", "Absorción Orgánica Menor", "Stamina Infinita Absoluta", "Copia Instantánea de Técnicas" ],
    "arsenal": {
      "basicAttacks": "Golpes elásticos, estrangulamientos con su propia antena, hacerse bola y rebotar.",
      "superAttacks": [
        { "name": "Ráfaga Desaparecedora (Kamehameha copiado)", "desc": "Copia técnicas como el Kamehameha solo con verlas una vez, disparándolas con una potencia destructiva rosada.", "cost": "0% Ki" },
        { "name": "Rayo Transfigurador Inesperado", "desc": "Dispara su rayo de antena en medio de una voltereta, buscando convertir al enemigo en dulce.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Bomba Destructora de Planetas (Planet Burst)", "desc": "Crea una esfera inmensa rosada sobre su cabeza con la pura intención de reventar el planeta en el que se encuentra sin previo aviso. Es capaz de hacer esto infinitas veces.", "cost": "0% Ki (Regeneración mágica instantánea de energía)" }
      ],
      "passives": [
        { "name": "Energía Infinita", "desc": "El coste de KI de Kid Buu es inexistente. Lucha siempre a su 100% sin importar cuántos ataques reciba, sanando completamente cualquier herida física cada turno.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "kid-buu-base", "name": "Forma Original Pura", "stats": "Nivel Galaxia. Pequeño, rosa, sin pupilas ni consciencia moral." } ],
    "feats": [
      "Pulverizó la Tierra sin decir una palabra instantes después de formarse.",
      "Luchó contra Goku SSJ3 hasta dejar a Goku completamente exhausto sin sudar.",
      "Destruyó múltiples planetas cruzando la galaxia en minutos para buscar a Goku y Vegeta."
    ],
    "psychology": "Un demonio primigenio infantil. No habla, solo gruñe, ríe y grita. Disfruta genuinamente de la aniquilación y del terror ajeno.",
    "weaknesses": "Carece de intelecto para prever trampas complejas. Solo puede ser asesinado mediante una Genkidama o ataque que purifique el 100% de cada célula (borrado espiritual)."
  },
  // 4. ANDROID 17 (DBS/DBZ Update)
  {
    "id": "androide-17-saga-androides-489",
    "name": "Androide 17 (C-17)",
    "alias": "El MVP del Universo 7 / Defensor Natural",
    "universe": "Dragon Ball Super",
    "saga": "Torneo del Poder",
    "version": "Ranger / Campeón del Torneo",
    "tier": "Tier 3-A a 2-C | Nivel Universal+",
    "ap": "Nivel Universal+. Tras años de proteger la naturaleza y entrenar secretamente enfrentándose a cazadores y fuerzas del espacio, 17 elevó su nivel absurdamente, siendo capaz de forzar a Goku a usar el SSJ Blue. Su poder radica en sus barreras energéticas cibernéticas que pueden resistir ataques de Dioses de la Destrucción temporales.",
    "range": "Planetario mediante ráfagas y barreras.",
    "speed": {
      "combat": "MFTL+. Pudo esquivar y seguir el ritmo de asaltos de Jiren y Toppo.",
      "reaction": "MFTL+.",
      "travel": "MFTL+.",
      "attack": "Rápida ejecución cibernética."
    },
    "strength": { "striking": "Clase Universal. Acierta golpes clave en puntos ciegos de Jiren.", "lifting": "Clase Galáctica." },
    "durability": "Nivel Universal+. Sus barreras de energía esférica son virtualmente irrompibles para adversarios estándar, y puede condensarlas para mayor dureza.",
    "stamina": "Infinita Absoluta (Reactor de Energía Ilimitada). Nunca se cansa físicamente ni agota su Ki.",
    "battleIQ": "Táctico Frío y Pragmático. Encuentra el punto ciego de cualquier adversario y no se distrae. Interrumpe las poses de los rivales sin dudar.",
    "haxTags": [ "Reactor de Energía Infinita", "Barreras Cibernéticas Absolutas", "Fisiología Inmune a Absorción de Ki", "Ausencia de Presencia (No puede ser rastreado)" ],
    "arsenal": {
      "basicAttacks": "Combate cuerpo a cuerpo técnico, sin derroche de movimiento.",
      "superAttacks": [
        { "name": "Ataque del Relámpago (Blitz)", "desc": "Dispara cientos de rayos amarillos precisos sin agotarse.", "cost": "0% Ki" },
        { "name": "Escudo Androide (Barrera Multicapa)", "desc": "Rodea su cuerpo con múltiples barreras verdes. Puede proyectarlas, atrapar al rival dentro, o condensarlas en sus puños.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Explosión del Reactor Máximo", "desc": "Finge inmolarse condensando todo el poder de su reactor infinito en una explosión contenida en un escudo verde masivo, capaz de anular el ataque final de Jiren.", "cost": "0% Ki" }
      ],
      "passives": [
        { "name": "Ki Artificial / Presencia Cero", "desc": "Dado que su Ki no es orgánico/espiritual, el enemigo no puede rastrear sus movimientos ni leer sus ataques por sentir el KI.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "a17-base", "name": "Androide Ranger", "stats": "Nivel Universal+. Brazalete Mir, mirada estoica." } ],
    "feats": [
      "Resistió un ataque suicida contra Jiren en su máximo poder y sobrevivió.",
      "Interrumpió las transformaciones mágicas del U2 y descubrió el punto débil táctico del monstruo gigante Anilaza.",
      "Fue el último guerrero en pie y ganador oficial del Torneo del Poder."
    ],
    "psychology": "Distante, sarcástico y extremadamente pragmático. Ama a los animales más que a las personas, y no cree en los códigos de honor ridículos de los luchadores marciales.",
    "weaknesses": "Aunque su resistencia/Ki es infinita, si un ataque sobrepasa de golpe la tolerancia de tensión de su barrera mecánica (impacto destructivo mayor), recibe el daño crítico directamente."
  },
  // 5. PICCOLO (KAMI FUSION - Z)
  {
    "id": "piccolo-saga-cell-buu-saga-androides-946",
    "name": "Piccolo",
    "alias": "El Súper Namekiano",
    "universe": "Dragon Ball Z",
    "saga": "Saga Androides / Cell",
    "version": "Fusionado con Kami-sama",
    "tier": "Tier 4-B | Nivel Sistema Solar Menor",
    "ap": "Nivel Estrella a Sistema Solar Menor. Al reunificarse con Kami-sama, Piccolo recuperó su estatus de Dios completo pero mantuvo su cuerpo de guerrero. Su nivel de poder superó abismalmente a los Super Saiyan originales, logrando pelear de igual a igual contra Androide 17 y retener a Cell Imperfecto.",
    "range": "Interplanetario (Makankosappo o Granada Infernal).",
    "speed": {
      "combat": "Masivamente FTL.",
      "reaction": "MFTL. Seguía a 17 e interceptaba sus movimientos letales.",
      "travel": "MFTL.",
      "attack": "Velocidad MFTL (Granadas guiadas)."
    },
    "strength": { "striking": "Clase Estrella Grande.", "lifting": "Clase Estrella." },
    "durability": "Nivel Estrella. Regeneración Namekiana activa; capaz de soportar la mutilación de brazos y agujeros en el torso.",
    "stamina": "Muy Alta. Combatió a A-17 (quien tenía estamina infinita) durante horas antes de mostrar desgaste notable.",
    "battleIQ": "El mejor estratega de DBZ. Experto en tender trampas de Ki y ocultar su presencia para emboscar.",
    "haxTags": [ "Regeneración Avanzada", "Magia Namek (Creación de Ropa/Armas)", "Telepatía Mundial (Dios de la Tierra)", "Extensión de Extremidades" ],
    "arsenal": {
      "basicAttacks": "Usa sus brazos elásticos para enganchar, electrocutar y arrojar enemigos. Golpes precisos al cuello.",
      "superAttacks": [
        { "name": "Granada Infernal (Hellzone Grenade)", "desc": "Dispara decenas de esferas de ki que parecen fallar, pero se suspenden en el aire rodeando al enemigo. Luego las hace colapsar todas a la vez en una explosión ineludible.", "cost": "25% Ki" },
        { "name": "Luz Demoníaca (Masenko Básico)", "desc": "Ráfaga veloz desde la frente o las manos.", "cost": "10% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Makankosappo Concentrado", "desc": "Requiere 2 turnos de carga (dedos en la frente). Dispara un taladro láser que atraviesa cualquier barrera y defensa de nivel estelar, matando o mutilando irreparablemente al objetivo.", "cost": "40% Ki" }
      ],
      "passives": [
        { "name": "Sabiduría de Dios", "desc": "Puede sentir las intenciones asesinas y el Ki a nivel planetario de forma pasiva, prediciendo emboscadas.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "piccolo-kami", "name": "Súper Namek (Kami)", "stats": "Nivel Sistema Solar Menor. Aura blanca explosiva." } ],
    "feats": [
      "Derrotó temporalmente a Cell Imperfecto usando engaño táctico (dejarse atrapar para obtener información).",
      "Luchó a la par en un combate histórico contra el Androide 17.",
      "Se convirtió en el ser más fuerte de la Tierra temporalmente antes de la Habitación del Tiempo."
    ],
    "psychology": "Noble, maduro, pero sin dudar a la hora de matar. Asumió plenamente la responsabilidad espiritual de proteger la Tierra.",
    "weaknesses": "La regeneración consume inmensas cantidades de Ki. Si le destruyen el cerebro (núcleo), muere instantáneamente."
  },
  // 6. YAMCHA Z
  {
    "id": "yamcha-dragon-ball-cl-sico-865",
    "name": "Yamcha",
    "alias": "El Lobo Solitario",
    "universe": "Dragon Ball Z",
    "saga": "Saga Saiyan / Androides",
    "version": "Humano Máximo (Guerrero Z)",
    "tier": "Tier 5-A | Nivel Planeta Grande",
    "ap": "Nivel Planeta Grande. Aunque es el blanco de muchas burlas debido a sus muertes tempranas, Yamcha es biológicamente uno de los humanos más fuertes que han existido jamás. Superó fácilmente el nivel de los Saibamen y las Fuerzas Especiales Ginyu (en relleno), poseyendo capacidad para destruir planetas si usara su máximo Ki.",
    "range": "Planetario mediante el Sokidan.",
    "speed": { "combat": "FTL (Superlumínica).", "reaction": "FTL.", "travel": "FTL.", "attack": "Velocidad lumínica (Control remoto)." },
    "strength": { "striking": "Clase Planetaria.", "lifting": "Clase Luna." },
    "durability": "Nivel Planeta. Fisiología humana frágil en comparación a los saiyans, pero soportó ser empalado por el Dr. Gero.",
    "stamina": "Moderada. Se retira del frente de batalla al darse cuenta de la brecha imposible con los alienígenas.",
    "battleIQ": "Bueno. Crea técnicas extremadamente precisas y astutas, aunque su exceso de confianza inicial suele costarle la vida.",
    "haxTags": [ "Control Remoto de Ki Absoluto (Sokidan)", "Agilidad Extrema (Estilo Lobo)" ],
    "arsenal": {
      "basicAttacks": "Estilo del Colmillo de Lobo (Golpes salvajes en ráfaga simulando garras).",
      "superAttacks": [
        { "name": "Kamehameha Terrestre", "desc": "Su versión de la escuela tortuga. Fuerte pero estándar.", "cost": "20% Ki" },
        { "name": "Neo Colmillo de Lobo", "desc": "Ráfaga de golpes mucho más rápidos que aturden el sistema nervioso del humanoide promedio.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Sokidan (Esfera Espiritual Controlada)", "desc": "Crea una esfera de Ki concentrado que puede controlar mentalmente con los dedos. Golpea desde ángulos imposibles (bajo tierra, por la espalda) múltiples veces hasta que él decide detonarla.", "cost": "40% Ki" }
      ],
      "passives": [
        { "name": "Evasión del Lobo", "desc": "Alta agilidad al inicio del combate.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "yamcha-z", "name": "Humano Entrenado", "stats": "Nivel Planeta Grande. Cicatrices en la cara, dogi naranja." } ],
    "feats": [
      "Derrotó a un Saibaman en combate singular antes de que este se inmolara por sorpresa.",
      "Venció a Recoome en el planeta del Kaio del Norte (Relleno de anime).",
      "Sobrevivió a ser atravesado en el pecho por el Androide 20 y ser curado por una semilla senzu."
    ],
    "psychology": "Simpático, valiente pero realista. Acaba aceptando que su nivel no sirve para salvar el universo, retirándose elegantemente para no ser una carga.",
    "weaknesses": "Exceso de confianza cuando domina el combate inicial. Fragilidad biológica letal; carece de defensas pasivas contra el empalamiento."
  },
  // 7. GOHAN DEL FUTURO
  {
    "id": "gohan-del-futuro-l-nea-temporal-futura-43",
    "name": "Gohan del Futuro",
    "alias": "El Último Guerrero Z",
    "universe": "Dragon Ball Z",
    "saga": "Un Futuro Diferente (Especial TV)",
    "version": "Maestro Manco (Super Saiyan)",
    "tier": "Tier 4-C | Nivel Estrella Enana",
    "ap": "Nivel Estrella Enana a Estrella (Bajo). El único superviviente de la masacre androide original. A pesar de perder un brazo y no tener gravedad de entrenamiento ni salas del tiempo, Gohan logró alcanzar y mantener el Super Saiyajin durante 13 años peleando un infierno constante. Puede erradicar ciudades y dañar gravemente a 17 o 18 en 1v1.",
    "range": "Planetario mediante Masenko.",
    "speed": {
      "combat": "FTL. Capaz de combatir simultáneamente contra dos Androides por cortos períodos.",
      "reaction": "FTL. Extrema supervivencia.",
      "travel": "FTL.",
      "attack": "Ráfagas lumínicas."
    },
    "strength": { "striking": "Clase Estrella Enana. Pese a faltarle un brazo, sus patadas y codazos sacuden a los androides.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Estrella Enana. Tiene una resistencia al dolor demencial. Pelea mutilado y sin semillas Senzu sin quejarse.",
    "stamina": "Muy Alta, pero el daño crónico, la falta de descanso y el estrés reducen su rendimiento en batallas muy prolongadas.",
    "battleIQ": "Veterano de Guerra Frío. Trata siempre de aislar a un enemigo, usa escombros, humo y emboscadas tácticas para compensar la desventaja numérica.",
    "haxTags": [ "Determinación Inquebrantable", "Bloqueo Asimétrico", "Manipulación de Escudos Ki Básicos" ],
    "arsenal": {
      "basicAttacks": "Codazos letales, patadas de barrido, lucha defensiva asimétrica usando Ki para mantener el equilibrio.",
      "superAttacks": [
        { "name": "Masenko Múltiple", "desc": "Dispara desde la frente múltiples ráfagas mientras esquiva para alejar a oponentes dobles.", "cost": "15% Ki" },
        { "name": "Escudo de Ki Defensivo", "desc": "Crea una cúpula amarilla que resiste la lluvia incesante de rayos androides.", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Kamehameha Unilateral (One-Handed)", "desc": "Carga un Kamehameha letal con su único brazo derecho impulsado por la desesperación de proteger el futuro.", "cost": "50% Ki" }
      ],
      "passives": [
        { "name": "Alma del Maestro", "desc": "Su resistencia y voluntad aumentan críticamente si Trunks está en peligro, llegando a sacrificarse a sí mismo para salvarlo.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "gohan-futuro-ssj", "name": "Super Saiyan (Manco)", "stats": "Nivel Estrella Enana. Cicatriz en la cara, sin brazo izquierdo, dogi destrozado." } ],
    "feats": [
      "Sobrevivió en solitario 13 años contra androides inmortales con energía infinita.",
      "Protegió a Trunks y lo noqueó para salvarle la vida, yendo a morir con honor frente a los androides.",
      "Empujó al Androide 17 al 50% de su poder."
    ],
    "psychology": "Melancólico, maduro, paternal. Asume su muerte inminente sabiendo que su vida es solo el puente para que Trunks alcance la victoria final.",
    "weaknesses": "Desequilibrio físico por la pérdida de la extremidad; siempre pierde al enfrentarse a dos enemigos con estamina infinita (Los Androides)."
  },
  // 8. ANDROIDE 18
  {
    "id": "androide-18-saga-androides-476",
    "name": "Androide 18 (C-18)",
    "alias": "La Belleza Letal",
    "universe": "Dragon Ball Z / Super",
    "saga": "Androides / Torneo del Poder",
    "version": "Modelo Cibernético de Energía Infinita",
    "tier": "Tier 3-C | Nivel Galaxia",
    "ap": "Nivel Galaxia (Saga Super). Originalmente rompió ambos brazos a Vegeta SSJ con simples patadas. En Dragon Ball Super, entrenando junto a Krillin, ha aumentado su potencia lo suficiente como para competir y lanzar del ring a miembros formidables del Torneo del Poder, aplastando corazas de seres del Universo 2 y 11.",
    "range": "Planetario a Galáctico.",
    "speed": {
      "combat": "MFTL+. Coordinación perfecta con A-17 y Krillin.",
      "reaction": "MFTL+.",
      "travel": "MFTL+.",
      "attack": "Ejecuciones cibernéticas instantáneas."
    },
    "strength": { "striking": "Clase Galaxia. Un simple cachetazo de A-18 puede fracturar cráneos de razas alienígenas blindadas.", "lifting": "Clase Galáctica." },
    "durability": "Nivel Galaxia. No sufre de pérdida de sangre que afecte su rendimiento, su endoesqueleto orgánico modificado tolera la presión profunda.",
    "stamina": "Infinita (Reactor gemelo al de 17). Puede luchar eternamente a su máxima capacidad sin jadear una sola vez.",
    "battleIQ": "Pragmática y letal. Usa tácticas de desgaste, sabiendo que su oponente terminará exhausto mientras ella mantiene el 100%.",
    "haxTags": [ "Reactor de Energía Ilimitada", "Fisiología Invisible al Ki", "Coordinación Psíquica Gemela" ],
    "arsenal": {
      "basicAttacks": "Patadas circulares demoledoras que fracturan huesos, y rodillazos precisos al rostro.",
      "superAttacks": [
        { "name": "Kienzan Destructor", "desc": "Copia el disco cortante de Krillin, combinando la técnica asombrosa con su energía infinita.", "cost": "0% Ki" },
        { "name": "Photon Strike (Lluvia de Rayos)", "desc": "Dispara cientos de rayos amarillos/rosados desde sus palmas hacia el suelo de manera incesante.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Danza Sádica (Sadistic 18)", "desc": "Atrapa al rival, rompiéndole las extremidades a patadas y lo remata con una bola de energía al pecho a quemarropa.", "cost": "0% Ki" }
      ],
      "passives": [
        { "name": "Ventaja de Desgaste (Batería Infinita)", "desc": "Cada turno de combate prolongado, sus enemigos pierden velocidad y fuerza por agotamiento, mientras ella y 17 mantienen sus stats base al máximo.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "a18-base", "name": "Humana Modificada Base", "stats": "Nivel Galaxia. Vestimenta casual, mirada fría y confiada." } ],
    "feats": [
      "Humilló y fracturó a Vegeta SSJ en su debut, arruinando su orgullo.",
      "Luchó y eliminó a la guerrera del amor Ribrianne en el Torneo del Poder gigante.",
      "Sobrevivió sacrificándose tácticamente para asegurar que 17 ganara el Torneo."
    ],
    "psychology": "Materialista y sarcástica pero profundamente devota a su familia (Krillin y Marron). Lucha por dinero o para proteger a su esposo e hija. Extremadamente ruda.",
    "weaknesses": "Carece de las barreras ultra-resistentes de 17, haciéndola vulnerable a ataques de nivel multiversal si logra asestar un golpe limpio."
  },
  // 9. SUPER 17 (GT)
  {
    "id": "super-17-dragon-ball-gt-73",
    "name": "Super 17",
    "alias": "El Androide Definitivo del Infierno",
    "universe": "Dragon Ball GT",
    "saga": "Super 17",
    "version": "Fusión del Androide Terrestre y del Infierno",
    "tier": "Tier 3-A | Nivel Universal",
    "ap": "Nivel Universal. Creado por la venganza de Gero y Myuu, Super 17 derrotó a la totalidad de los Guerreros Z simultáneamente (Gohan, Vegeta, Trunks, Goten, Uub). Era capaz de humillar fácilmente a Goku en Super Saiyajin 4, absorbiendo su máximo Kamehameha x10 y volviéndose aún más monstruoso con la energía divina ingerida.",
    "range": "Universal mediante ráfagas Flash Bomber y absorción.",
    "speed": {
      "combat": "Inconmensurable+. Sorteaba los golpes teletransportados de Goku SSJ4 y respondía al instante.",
      "reaction": "Inconmensurable+.",
      "travel": "MFTL+.",
      "attack": "Absorción automática de ráfagas lumínicas."
    },
    "strength": { "striking": "Clase Universal. Sometió a SSJ4 Goku con rodillazos contundentes.", "lifting": "Clase Universal." },
    "durability": "Nivel Universal. Reforzado con tecnología del infierno, casi indestructible a menos que abra su punto débil voluntariamente.",
    "stamina": "Infinita Absoluta. Se hace más fuerte cuanto más se prolonga la lucha gracias a su absorción.",
    "battleIQ": "Programación Asesina Perfecta. Calcula ángulos de ataque a la perfección.",
    "haxTags": [ "Absorción Voluntaria de Energía (Aumenta poder)", "Barreras Electromagnéticas", "Cuerpo Cibernético Inmune", "Velocidad de Reacción Cuántica" ],
    "arsenal": {
      "basicAttacks": "Barridos letales con el cabello y golpes electromagnéticos paralizantes.",
      "superAttacks": [
        { "name": "Flash Bomber", "desc": "Coloca ambas manos hacia adelante, disparando miles de ráfagas dispersas como ametralladora para acribillar al enemigo en un ángulo imposible de esquivar.", "cost": "0% Ki" },
        { "name": "Trueno Infernal", "desc": "Genera una lluvia de relámpagos estáticos negros sobre el área de combate.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Bola de Choque Eléctrico (Shocking Death Ball)", "desc": "Una esfera masiva de energía oscura y electricidad generada reuniendo ambas manos, capaz de desintegrar a un oponente tier Universal de un golpe directo.", "cost": "Absorción previa requerida" }
      ],
      "passives": [
        { "name": "Campo de Absorción Dinámica", "desc": "Si cruza los brazos frente a su torso, todo ataque basado en Ki o energía es absorbido directamente, restaurando todo su daño y aumentando su Poder Base (AP) de manera permanente.", "cost": "Requiere inmovilizar su cuerpo un instante" }
      ]
    },
    "forms": [ { "id": "super-17-base", "name": "Super Androide Fusión", "stats": "Nivel Universal. Cabello largo oscuro, chaqueta rota, aspecto pálido vampiresco." } ],
    "feats": [
      "Noqueó a Majuub, Gohan, Trunks y Vegeta simultáneamente.",
      "Humilló físicamente al Goku SSJ4 absorbiendo su técnica magna.",
      "Derribó a la Androide 18 sin esfuerzo."
    ],
    "psychology": "Una máquina asesina controlada por Myuu, pero retiene una minúscula fracción de la consciencia de 17 original (su amor por su hermana), lo cual se convierte en su única debilidad psicológica.",
    "weaknesses": "Para absorber la energía, debe paralizar por completo sus extremidades, dejando su cuerpo abierto a golpes físicos contundentes (El Puño del Dragón de Goku aprovechó esto)."
  }
];

const filePath = path.resolve(__dirname, '../src/data/characters.js');
let content = fs.readFileSync(filePath, 'utf8');

const prefix = 'export const INITIAL_CHARACTERS = ';
const currentList = eval(content.replace(prefix, ''));
console.log(`Current characters count: ${currentList.length}`);

let updatedCount = 0;
batch3Upgrades.forEach(upgrade => {
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

console.log(`Batch 3 Upgrade Complete. ${updatedCount} characters successfully enhanced.`);
