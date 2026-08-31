const fs = require('fs');
const path = require('path');

const batch18Upgrades = [
  // 1. NAIL
  {
    "id": "nail-saga-namek-672",
    "name": "Nail",
    "alias": "El Guerrero Namekiano Élite",
    "universe": "Dragon Ball Z",
    "saga": "Saga de Namek",
    "version": "Guardián del Gran Patriarca",
    "tier": "Tier 5-B | Nivel Planeta",
    "ap": "Nivel Planeta. El único Namekiano de tipo guerrero que sobrevivió al cataclismo climático. Con un poder de pelea oficial de 42,000, superaba a guerreros de élite como Dodoria y Zarbon. Aunque fue superado por la primera forma de Freezer (530,000), demostró una tenacidad increíble aguantando una tortura sádica para ganar tiempo para Dende.",
    "range": "Físico y decenas de metros.",
    "speed": { "combat": "Relativista.", "reaction": "Relativista.", "travel": "Sub-relativista.", "attack": "Veloz." },
    "strength": { "striking": "Clase Planeta.", "lifting": "Clase Montaña." },
    "durability": "Nivel Planeta. Regeneración Namekiana activa para reponer brazos perdidos.",
    "stamina": "Muy Alta. Dispuesto a morir desangrado con tal de proteger al Gran Patriarca.",
    "battleIQ": "Estratega marcial de alto nivel y líder militar natural del pueblo Namekiano.",
    "haxTags": [ "Regeneración Namekiana", "Asimilación / Fusión Namekiana" ],
    "arsenal": {
      "basicAttacks": "Golpes marciales rápidos, estirar extremidades.",
      "superAttacks": [
        { "name": "Ráfaga de Ki Concentrada", "desc": "Dispara esferas celestes de alta potencia a quemarropa.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Asimilación de Almas (Fusión con Piccolo)", "desc": "Ofrece su cuerpo y espíritu a otro Namekiano de corazón puro (Piccolo) para fusionarse permanentemente, multiplicando los stats de Piccolo más de 20 veces.", "cost": "Sacrificio definitivo" }
      ],
      "passives": [
        { "name": "Lealtad Inquebrantable", "desc": "Inmune al dolor o miedo si defiende al Patriarca o a su raza.", "cost": "Pasivo psicológico" }
      ]
    },
    "forms": [ 
      { "id": "nail-base", "name": "Guerrero Namekiano", "stats": "Nivel Planeta (42,000 Ki). Chaleco azul, faja roja, piel verde pura." }
    ],
    "feats": [ "Soportó minutos de tortura directa de Freezer sin revelar el secreto de las Dragon Balls.", "Su asimilación permitió a Piccolo superar a Freezer Segunda Forma." ],
    "psychology": "Noble, estoico y profundamente protector de su gente y de la paz universal.",
    "weaknesses": "Regenerar extremidades consume grandes porciones de su estamina."
  },
  // 2. REY COLD
  {
    "id": "rey-cold-saga-androides-751",
    "name": "Rey Cold",
    "alias": "El Gran Patriarca del Imperio del Frío",
    "universe": "Dragon Ball Z",
    "saga": "Saga Androides / Mecha Freezer",
    "version": "Forma Restringida (Segunda Forma)",
    "tier": "Tier 4-C | Nivel Estrella Enana",
    "ap": "Nivel Estrella Enana. Padre de Freezer y Cooler. Su poder latente en su forma casual igualaba o superaba al de Mecha Freezer según los Guerreros Z en la Tierra. Sin embargo, su extrema arrogancia y dependencia psicológica de las armas y la diplomacia cobarde lo llevaron a su perdición frente a Trunks del Futuro.",
    "range": "Planetario.",
    "speed": { "combat": "FTL.", "reaction": "FTL.", "travel": "MFTL (Cruceros espaciales).", "attack": "Pesada." },
    "strength": { "striking": "Clase Estrella Enana.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Estrella Enana. Fue atravesado por su propia espada y vaporizado por el Buster Cannon de Trunks.",
    "stamina": "Alta.",
    "battleIQ": "Monarca calculador. Cree falsamente que el poder de un guerrero reside en su arma (como la espada de Trunks).",
    "haxTags": [ "Supervivencia en el Vacío Espacial", "Linaje Mutante del Frío" ],
    "arsenal": {
      "basicAttacks": "Golpes pesados con cuernos y cola gigante.",
      "superAttacks": [
        { "name": "Rayo de Muerte Real", "desc": "Versión del Death Beam disparada desde los dedos con coloración carmesí.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Estocada de la Espada Saiyan", "desc": "Blande la espada que le arrebata al enemigo con la esperanza de decapitarlo a traición.", "cost": "0% Ki" }
      ],
      "passives": [
        { "name": "Emperador Oculto", "desc": "Comanda ejércitos galácticos completos desde las sombras.", "cost": "Pasivo geopolítico" }
      ]
    },
    "forms": [ 
      { "id": "cold-segunda", "name": "Forma Estándar (Segunda Forma)", "stats": "Nivel Estrella Enana. Altísimo, cuernos curvados negros, capa real roja, armadura biológica blanca y morada." }
    ],
    "feats": [ "Gobernó el imperio galáctico durante siglos antes de delegarlo a Freezer.", "Su Ki fue sentido en la Tierra a años luz de distancia." ],
    "psychology": "Un aristócrata del mal, mezquino y cobarde cuando se ve superado; intentó adoptar a Trunks como su hijo al ver su fuerza.",
    "weaknesses": "Pésima evaluación del Ki ajeno; creyó que la espada le daba poder a Trunks."
  },
  // 3. PIKKON (PAIKUHAN)
  {
    "id": "pikkon-torneo-del-otro-mundo-912",
    "name": "Pikkon (Paikuhan)",
    "alias": "El Campeón de la Galaxia del Oeste",
    "universe": "Dragon Ball Z (Toei)",
    "saga": "Torneo del Otro Mundo / Película Fusión",
    "version": "Guerrero Muerto Legendario",
    "tier": "Tier 4-B | Nivel Sistema Solar",
    "ap": "Nivel Sistema Solar. El mejor alumno del Kaio del Oeste. En el infierno noqueó a Perfect Cell, Freeza y Cold de un solo golpe cada uno. En el torneo igualó a Goku Super Kaioken y combatió a Janemba reteniendo a la bestia con insultos mágicos.",
    "range": "Sistema Solar (Torbellino de Fuego).",
    "speed": { "combat": "MFTL+.", "reaction": "MFTL+.", "travel": "MFTL+.", "attack": "Ultrarrápido (Pesas retiradas)." },
    "strength": { "striking": "Clase Sistema Solar.", "lifting": "Clase Estelar." },
    "durability": "Nivel Sistema Solar. Resistió un Super Kamehameha de Goku SSJ.",
    "stamina": "Infinita de forma práctica (Está muerto, posee aureola en la cabeza).",
    "battleIQ": "Artista marcial de élite comparable a Piccolo. Detecta puntos ciegos.",
    "haxTags": [ "Ropas Pesadas de Gravedad", "Insultos Rompe-Barreras (Janemba Hax)", "Fuego Flamígero" ],
    "arsenal": {
      "basicAttacks": "Patadas dobles giratorias, ganchos cruzados de alta velocidad.",
      "superAttacks": [
        { "name": "Hyper Tornado", "desc": "Gira sobre su propio eje como un ciclón devorador que atrapa al enemigo cortándolo con viento cortante.", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Thunder Flash (Fogonazo de Trueno)", "desc": "Cruza los brazos, realiza una coreografía ritual y expulsa un cañón de llamas colosales que quemó a Goku SSJ en el aire.", "cost": "45% Ki" }
      ],
      "passives": [
        { "name": "Retirada de Pesas", "desc": "Se quita la túnica y sombrero pesados, duplicando su velocidad de reacción y esquiva.", "cost": "Buff táctico" }
      ]
    },
    "forms": [ 
      { "id": "pikkon-pesado", "name": "Ropa Pesada", "stats": "Nivel Sistema Solar Menor. Túnica blanca y gorro alto." },
      { "id": "pikkon-max", "name": "Sin Pesas", "stats": "Nivel Sistema Solar. Cabeza verde descubierta, velocidad extrema." }
    ],
    "feats": [ "Noqueó a Super Perfect Cell de una sola patada descendente en el Infierno.", "Herió a Janemba insultando el espacio dimensional." ],
    "psychology": "Serio, disciplinado y de pocas palabras; entabla una rivalidad de respeto con Goku.",
    "weaknesses": "El Thunder Flash deja una ventana de vulnerabilidad de 1 segundo si el oponente lo esquiva por la espalda (Goku aprovechó esto con el Kamehameha)."
  },
  // 4. SHIN (KAIOSHIN DEL ESTE)
  {
    "id": "shin-kaio-shin-del-este-saga-buu-0",
    "name": "Shin (Kaio-shin del Este)",
    "alias": "El Dios de la Creación del Universo 7",
    "universe": "Dragon Ball Z / Super",
    "saga": "Saga de Buu / DBS",
    "version": "Dios Supremo",
    "tier": "Tier 4-C a 4-B | Nivel Estrella Enana a Sistema Solar",
    "ap": "Nivel Estrella Enana (Capaz de derrotar a Freezer Namek de 1 golpe según sus propias palabras). Posee telequinesis divina capaz de inmovilizar a Gohan SSJ2. Sin embargo, su inexperiencia debido a la masacre que Majin Buu cometió contra sus maestros lo dejó con graves vacíos de conocimiento cósmico.",
    "range": "Universal (Telepatía y Shunkanido Kaioshin).",
    "speed": { "combat": "FTL+.", "reaction": "FTL+.", "travel": "Instantáneo (Kai Kai).", "attack": "Parálisis Mental Instantánea." },
    "strength": { "striking": "Clase Estrella Enana.", "lifting": "Clase Mágica." },
    "durability": "Nivel Sistema Solar Menor. Sobrevivió a los golpes destructivos de Majin Buu Gordo.",
    "stamina": "Muy Alta (Energía Divina).",
    "battleIQ": "Carente de temple marcial; entra en pánico fácilmente ante amenazas que desconoce.",
    "haxTags": [ "Teletransportación Kai Kai (Sin necesidad de Ki)", "Parálisis Telequinética Divina", "Vínculo Vital con Beerus" ],
    "arsenal": {
      "basicAttacks": "Ondas invisibles de presión psíquica.",
      "superAttacks": [
        { "name": "Ráfaga de Ki Divino", "desc": "Disparos dorados puros desde las palmas.", "cost": "15% Ki Divino" }
      ],
      "ultimateAttacks": [
        { "name": "Inmovilización de la Deidad", "desc": "Atrapa la mente y el cuerpo del enemigo en un lazo psíquico irrompible (inmovilizó a Gohan SSJ2 sin que pudiera mover un solo dedo).", "cost": "35% Ki Divino" }
      ],
      "passives": [
        { "name": "Enlace de Vida del Hakaishin", "desc": "Si Shin muere, el Dios de la Destrucción Beerus muere automáticamente.", "cost": "Vínculo Cósmico" }
      ]
    },
    "forms": [ 
      { "id": "shin-base", "name": "Kaio-shin", "stats": "Nivel Estrella Enana. Pelo blanco en mohawk, túnica púrpura, pendientes Pothala amarillos." },
      { "id": "kibitoshin", "name": "Kibito-shin (Fusión Pothala)", "stats": "Nivel Sistema Solar. Fusión permanente con Kibito (separada luego con las esferas de Namek)." }
    ],
    "feats": [ "Inmovilizó a Gohan SSJ2.", "Llegó al planeta sagrado y rescató a Goku y Vegeta tras la destrucción de la Tierra." ],
    "psychology": "Bienintencionado pero incompetente y asustadizo. Cree que todo es un peligro imposible hasta que los Saiyans lo resuelven a golpes.",
    "weaknesses": "Falta total de confianza y poder de combate físico de primera línea frente a villanos top."
  },
  // 5. KIBITO
  {
    "id": "kibito-saga-buu-184",
    "name": "Kibito",
    "alias": "El Siervo del Kaio-shin",
    "universe": "Dragon Ball Z",
    "saga": "Saga de Buu",
    "version": "Guardián Sagrado",
    "tier": "Tier 4-C | Nivel Estrella Enana",
    "ap": "Nivel Estrella Enana. El asistente y guardaespaldas de Shin. Su poder físico es suficiente para desafiar a guerreros terrestres experimentados, pero su verdadero valor radica en su magia curativa milagrosa y la capacidad de teletransportarse libremente entre dimensiones.",
    "range": "Dimensional (Kai Kai).",
    "speed": { "combat": "FTL.", "reaction": "FTL.", "travel": "Instantáneo.", "attack": "Pesada." },
    "strength": { "striking": "Clase Estrella Enana.", "lifting": "Clase Montaña." },
    "durability": "Nivel Estrella Enana. Murió de una ráfaga de Ki de Dabura pero fue revivido.",
    "stamina": "Alta.",
    "battleIQ": "Tradicionalista religioso divino. Subestima a los mortales.",
    "haxTags": [ "Curación Mágica Instantánea (Como Semilla del Ermitaño)", "Materialización Mágica de Ropas", "Kai Kai" ],
    "arsenal": {
      "basicAttacks": "Golpes pesados de artes marciales divinas.",
      "superAttacks": [
        { "name": "Onda Expansiva Divina", "desc": "Empuja a los enemigos alrededor con un estallido de aura sagrada.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Curación Milagrosa (Hands of God)", "desc": "Toca a un aliado caído al borde de la muerte y restaura el 100% de su HP, Ki y energía vital al instante.", "cost": "40% Ki Mágico" }
      ],
      "passives": [
        { "name": "Soporte Sagrado", "desc": "Restaura pasivamente los estados alterados (veneno, parálisis) de su equipo.", "cost": "Pasivo Mágico" }
      ]
    },
    "forms": [ 
      { "id": "kibito-base", "name": "Kibito", "stats": "Nivel Estrella Enana. Pelo largo blanco, piel rosada, túnica roja y azul." }
    ],
    "feats": [ "Curó a Gohan tras ser drenado por Yamu y Spopovich.", "Rescató a Gohan del campo de batalla tras el despertar de Majin Buu." ],
    "psychology": "Orgulloso de su linaje sagrado, al principio desprecia a los humanos pero cambia de parecer al ver el heroísmo de Goku y Gohan.",
    "weaknesses": "Fácilmente sorprendido por técnicas de muerte rápida (Dabura lo vaporizó por la espalda)."
  },
  // 6. KAMI-SAMA
  {
    "id": "kami-sama-dragon-ball-cl-sico-772",
    "name": "Kami-sama",
    "alias": "El Dios Protector de la Tierra",
    "universe": "Dragon Ball (Clásico / Z)",
    "saga": "Dragon Ball Clásico / Saga Saiyan",
    "version": "Dios Guardián (Namekiano)",
    "tier": "Tier 7-B a 6-A | Nivel Ciudad a Continental",
    "ap": "Nivel Continental. La mitad bondadosa del hijo de Katattsu. Creador de las Dragon Balls de la Tierra. Superaba holgadamente al Rey Piccolo y humilló a Yamcha poseyendo el cuerpo de Shen en el 23° Torneo. Entrenó a Goku, Krilin, Ten Shin Han y Yamcha.",
    "range": "Planetario (Visión Omni-terrestre).",
    "speed": { "combat": "Hipersónica+ a Sub-relativista.", "reaction": "Sub-relativista.", "travel": "Vuelo.", "attack": "Preciso." },
    "strength": { "striking": "Clase Continental.", "lifting": "Clase Montaña." },
    "durability": "Nivel Continental. Sin embargo, su envejecimiento limitaba su cuerpo físico.",
    "stamina": "Baja por la edad avanzada.",
    "battleIQ": "Sabiduría milenaria, maestro de sellos y lectura del alma.",
    "haxTags": [ "Creación de Esferas del Dragón", "Mafuba", "Posesión de Cuerpos (Shen)" ],
    "arsenal": {
      "basicAttacks": "Golpes con los dedos, bloqueos con los ojos, uso del báculo.",
      "superAttacks": [
        { "name": "Ojo Divino", "desc": "Dispara ráfagas invisibles que noquean a oponentes con solo mirarlos fijamente.", "cost": "10% Ki" },
        { "name": "Mafuba Divino", "desc": "Canaliza el sello definitivo para atrapar a Piccolo Jr en una botella (Piccolo se lo devolvió con un contra-Mafuba).", "cost": "30% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Fusión Namekiana de Retorno", "desc": "Se reintegra en el cuerpo de Piccolo en la saga Androides, otorgándole todo su poder y sabiduría para crear al Super Namekiano definitivo.", "cost": "Sacrificio de identidad" }
      ],
      "passives": [
        { "name": "Omnipresencia Terrestre", "desc": "Puede ver y escuchar cualquier acontecimiento que ocurra en la superficie del planeta Tierra desde su templo.", "cost": "Pasivo divino" }
      ]
    },
    "forms": [ 
      { "id": "kami-base", "name": "Dios Anciano", "stats": "Nivel Ciudad a Continental. Namekiano arrugado con túnica blanca y kanji de Dios (Kami)." }
    ],
    "feats": [ "Creó las Esferas del Dragón y a Shenron.", "Restauró la Luna tras ser destruida por Roshi." ],
    "psychology": "Un dios compasivo, agobiado por la culpa de haber creado al Rey Demonio Piccolo al expulsar su maldad.",
    "weaknesses": "Vínculo vital con Piccolo: si uno muere, el otro también."
  },
  // 7. KAIO-SAMA DEL NORTE
  {
    "id": "kaio-sama-del-norte-saga-saiyan-446",
    "name": "Kaio-sama del Norte",
    "alias": "El Rey del Mundo del Norte",
    "universe": "Dragon Ball Z",
    "saga": "Saga Saiyan / Namek",
    "version": "Deidad Marcial",
    "tier": "Tier 5-B | Nivel Planeta",
    "ap": "Nivel Planeta (Poder de 3,500 en la época Saiyan). Aunque rara vez combate de frente, es el creador de dos de las técnicas más icónicas y rotas de toda la franquicia: el Kaio-ken y la Genkidama. Su planeta posee una gravedad 10 veces superior a la Tierra.",
    "range": "Galáctico (Telepatía por antenas).",
    "speed": { "combat": "Relativista.", "reaction": "Relativista.", "travel": "En su auto clásico.", "attack": "Golpes marciales." },
    "strength": { "striking": "Clase Planeta.", "lifting": "Clase 10x Gravedad." },
    "durability": "Nivel Planeta. Murió por la auto-destrucción de Cell en su planeta (Conservando su aureola).",
    "stamina": "Infinita (Como muerto divino).",
    "battleIQ": "Uno de los mayores genios teóricos de las artes marciales del cosmos.",
    "haxTags": [ "Creador del Kaio-ken", "Creador de la Genkidama", "Telepatía Cósmica por Antenas" ],
    "arsenal": {
      "basicAttacks": "Golpes de artes marciales antiguas, chistes malos.",
      "superAttacks": [
        { "name": "Enlace Telepático Galáctico", "desc": "Usa sus antenas para conectar la mente de guerreros a millones de años luz.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Enseñanza del Kaio-ken y Genkidama", "desc": "Otorga el conocimiento y la bendición para canalizar la energía del universo a sus discípulos.", "cost": "Maestría" }
      ],
      "passives": [
        { "name": "Prueba del Chiste", "desc": "Cualquiera que quiera entrenar con él debe obligatoriamente hacerlo reír con un chiste absurdo.", "cost": "Pasivo cómico" }
      ]
    },
    "forms": [ 
      { "id": "kaio-vivo", "name": "Kaio del Norte (Vivo)", "stats": "Nivel Planeta. Gordito azul con lentes de sol, túnica negra y sombrero oriental." },
      { "id": "kaio-muerto", "name": "Kaio del Norte (Con Aureola)", "stats": "Nivel Planeta. Mismo aspecto con aureola tras la explosión de Cell." }
    ],
    "feats": [ "Entrenó a Goku, Piccolo, Yamcha, Tenshinhan y Chaos.", "Ideó el plan para salvar a los Namekianos de la explosión de su planeta." ],
    "psychology": "Amante de los chistes malos, los juegos de palabras y su auto clásico. Se queja constantemente pero daría todo por sus alumnos.",
    "weaknesses": "Él mismo nunca pudo dominar el Kaio-ken al 100% en su propio cuerpo, dependiendo de Goku para perfeccionarlo."
  },
  // 8. ENMA DAIOH (REY YEMMA)
  {
    "id": "enma-daioh-saga-saiyan-579",
    "name": "Enma Daioh (Rey Yemma)",
    "alias": "El Juez del Otro Mundo",
    "universe": "Dragon Ball Z",
    "saga": "Saga Saiyan / Buu / Janemba",
    "version": "Juez de las Almas",
    "tier": "Tier 5-A | Nivel Planeta Grande",
    "ap": "Nivel Planeta Grande. El ogro divino supremo encargado de juzgar todas las almas del Universo 7 para enviarlas al Cielo o al Infierno. Sometió personalmente a Raditz con una llave de lucha libre cuando este causó problemas al morir.",
    "range": "Plano Espiritual del Más Allá.",
    "speed": { "combat": "Relativista.", "reaction": "Relativista.", "travel": "Sedentario.", "attack": "Golpes colosales de escritorio." },
    "strength": { "striking": "Clase Planeta Grande.", "lifting": "Clase Masiva." },
    "durability": "Nivel Planeta Grande. Inmune a ataques espirituales de almas mortales.",
    "stamina": "Infinita en su labor burocrática.",
    "battleIQ": "Juez implacable con milenios de experiencia en sumisión física.",
    "haxTags": [ "Juicio de Almas (Cielo o Infierno)", "Sellado Espiritual", "Fuerza Burocrática Divina" ],
    "arsenal": {
      "basicAttacks": "Manotazos gigantescos, sellos de goma con tinta mágica.",
      "superAttacks": [
        { "name": "Llave Yemma (Yemma Lock)", "desc": "La famosa llave de lucha con la que sometió a Raditz en segundos.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Sentencia al Infierno", "desc": "Dictamina la condena del alma enemiga enviándola directamente al plano de purificación infernal.", "cost": "Veredicto Divino" }
      ],
      "passives": [
        { "name": "Autoridad de la Muerte", "desc": "Ningún alma desencarnada puede hacerle daño dentro de su palacio del Otro Mundo.", "cost": "Inmunidad espiritual" }
      ]
    },
    "forms": [ 
      { "id": "yemma-base", "name": "Rey Yemma", "stats": "Nivel Planeta Grande. Gigante rojo con cuernos, barba negra espesa, traje de oficina y casco vikingo." }
    ],
    "feats": [ "Sometió a Raditz sin despeinarse.", "Permitió a Goku conservar su cuerpo físico para recorrer el Camino de la Serpiente." ],
    "psychology": "Estricto, adicto al trabajo administrativo de juzgar millones de almas, pero benevolente con los verdaderos héroes cósmicos.",
    "weaknesses": "Fue atrapado temporalmente por la magia de Janemba al quedar encerrado en su palacio de caramelos dimensionales."
  },
  // 9. META COOLER
  {
    "id": "meta-cooler-pel-culas-dbz-toei-714",
    "name": "Meta Cooler",
    "alias": "El Clon Mecánico de la Estrella Big Gete",
    "universe": "Dragon Ball Z (Toei)",
    "saga": "Película: Los Guerreros Más Poderosos",
    "version": "Cuerpo de Metal Puro / Red Big Gete Star",
    "tier": "Tier 4-B | Nivel Sistema Solar Menor",
    "ap": "Nivel Sistema Solar Menor. Tras ser derrotado en el sol, los restos del cerebro de Cooler se fusionaron con la supercomputadora orgánica Big Gete Star. Cada cuerpo de Meta Cooler es un androide de metal líquido que supera a Goku SSJ y Vegeta SSJ individualmente, y cuenta con un ejército de millones de clones idénticos operando en red.",
    "range": "Sistema Solar (Teletransportación instantánea).",
    "speed": { "combat": "MFTL+.", "reaction": "MFTL+ (Shunkanido Mecánico).", "travel": "MFTL+.", "attack": "Ciega." },
    "strength": { "striking": "Clase Sistema Solar.", "lifting": "Clase Estelar." },
    "durability": "Nivel Sistema Solar. Regeneración y auto-reparación instantánea ante cualquier daño físico o de Ki.",
    "stamina": "Infinita (Alimentado por la Estrella Big Gete).",
    "battleIQ": "Procesador central que aprende instantáneamente de cada golpe recibido.",
    "haxTags": [ "Regeneración y Adaptación Instantánea", "Shunkanido Robado", "Ejército de 10 Millones de Clones" ],
    "arsenal": {
      "basicAttacks": "Golpes de metal reforzado, cortes de cola metálica, estrangulamiento.",
      "superAttacks": [
        { "name": "Lock-on Buster", "desc": "Dispara rayos de energía amarilla desde los ojos con precisión guiada por computadora.", "cost": "0% Ki" },
        { "name": "Supernova Metálica", "desc": "Versión condensada y rápida del ataque clásico de su familia.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Invasión del Ejército de Meta Coolers (10 Millones)", "desc": "Invoca a miles de clones de Meta Cooler simultáneamente sobre la colina, rodeando al enemigo en una emboscada donde es matemáticamente imposible ganar por desgaste.", "cost": "Enlace Big Gete Star" }
      ],
      "passives": [
        { "name": "Auto-Reparación de la Big Gete Star", "desc": "Si pierde un brazo o la mitad de su cuerpo, la materia líquida se regenera en segundos volviendo esa parte del cuerpo inmune al ataque que la destruyó.", "cost": "Regeneración infinita" }
      ]
    },
    "forms": [ 
      { "id": "meta-cooler-clone", "name": "Cuerpo de Metal", "stats": "Nivel Sistema Solar Menor. Cromado plateado brillante, ojos rojos." },
      { "id": "cooler-core", "name": "Núcleo Big Gete Star", "stats": "Nivel Sistema Solar. Cabeza gigante biomecánica conectada a cables masivos en el centro de la nave." }
    ],
    "feats": [ "Interceptó a Goku dentro del propio espacio del Shunkanido (Teletransporte).", "Desplegó un ejército de miles de clones que capturó a Goku y Vegeta exhaustos." ],
    "psychology": "Frío, sádico y motivado por una venganza megalómana contra los Saiyans.",
    "weaknesses": "Sobrecarga de energía: Si le inyectan más Ki del que su núcleo central puede absorber, los cables de la Big Gete Star explotan."
  },
  // 10. DR. WHEELO
  {
    "id": "dr-wheelo-pel-culas-dbz-toei-823",
    "name": "Dr. Wheelo",
    "alias": "El Cerebro del Mal",
    "universe": "Dragon Ball Z (Toei)",
    "saga": "Película: El Hombre Más Fuerte del Mundo",
    "version": "Armadura Robótica Gigante",
    "tier": "Tier 5-B a 5-A | Nivel Planeta",
    "ap": "Nivel Planeta. Un científico genio cuyo cerebro fue preservado en una gigantesca fortaleza biónica de combate. Su poder físico superaba a Roshi y a Goku con Kaio-ken x2. Su rayo final pretendía desintegrar la Tierra entera.",
    "range": "Planetario.",
    "speed": { "combat": "Relativista.", "reaction": "Relativista.", "travel": "Vuelo pesado.", "attack": "Cañones de energía letales." },
    "strength": { "striking": "Clase Planeta.", "lifting": "Clase Montaña." },
    "durability": "Nivel Planeta. Cristal blindado irrompible para armas normales.",
    "stamina": "Infinita (Cuerpo mecánico).",
    "battleIQ": "Cerebro científico supremo; domina el lavado de cerebro cibernético.",
    "haxTags": [ "Lavado de Cerebro Cibernético (Control Mental)", "Cuerpo Blindado Gigante" ],
    "arsenal": {
      "basicAttacks": "Coletazos mecánicos gigantes, puñetazos de émbolo hidráulico.",
      "superAttacks": [
        { "name": "Descarga Gigante", "desc": "Dispara torrentes de electricidad roja desde sus hombros biónicos.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Cañón Rompedor de Planetas (Planet Geyser)", "desc": "Vuela a la estratosfera y canaliza toda la energía de su reactor para destruir la corteza de la Tierra en un rayo cataclísmico.", "cost": "Sobrecarga del reactor" }
      ],
      "passives": [
        { "name": "Búsqueda del Cuerpo Perfecto", "desc": "Inmune a la fatiga; busca robar el cuerpo del hombre más fuerte.", "cost": "Pasivo obsesivo" }
      ]
    },
    "forms": [ 
      { "id": "wheelo-robot", "name": "Fortaleza Robótica", "stats": "Nivel Planeta. Mech colosal blanco con cúpula de cristal y cerebro flotante." }
    ],
    "feats": [ "Sometió a Piccolo bajo control mental forzándolo a pelear contra Goku.", "Obligó a Goku a recurrir a la Genkidama para destruirlo." ],
    "psychology": "Narcisista intelectual con complejo de dios; desprecia a los humanos considerándolos inferiores a su intelecto.",
    "weaknesses": "Si rompen la cúpula de cristal, su cerebro queda expuesto y vulnerable."
  },
  // 11. HATCHIYACK
  {
    "id": "hatchiyack-pel-culas-dbz-toei-383",
    "name": "Hatchiyack",
    "alias": "El Superandroide de Odio Tsufuru",
    "universe": "Dragon Ball Z (OVA)",
    "saga": "El Plan para Erradicar a los Saiyans",
    "version": "Forma Definitiva de Odio",
    "tier": "Tier 4-B | Nivel Sistema Solar Menor",
    "ap": "Nivel Sistema Solar Menor. La computadora de odio construida por el Dr. Lychee para vengar a la raza Tsufuru. Goku afirmó que su poder destructivo era igual o superior al de Broly. Soportó los ataques simultáneos de 4 Super Saiyans (Goku, Gohan, Vegeta, Trunks) y Piccolo sin sufrir daño.",
    "range": "Planetario a Sistema Solar.",
    "speed": { "combat": "MFTL.", "reaction": "MFTL.", "travel": "MFTL.", "attack": "Pesada y destructiva." },
    "strength": { "striking": "Clase Sistema Solar.", "lifting": "Clase Estelar." },
    "durability": "Nivel Sistema Solar. Blindaje orgánico alimentado por el rencor cósmico.",
    "stamina": "Infinita.",
    "battleIQ": "Algoritmo letal programado con el único fin de matar a la raza Saiyajin.",
    "haxTags": [ "Amplificación por Rencor / Odio", "Gas Destron (Veneno Planetario)" ],
    "arsenal": {
      "basicAttacks": "Embestidas demoledoras, golpes con hombreras blindadas.",
      "superAttacks": [
        { "name": "Revenger Charge", "desc": "Carga su cuerpo de energía roja acumulando el daño recibido para disparar.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Revenger Cannon", "desc": "Tras una carga obligatoria de 15 segundos con los brazos en guardia, dispara una ola masiva verde/roja que vaporiza galaxias cercanas si no se interrumpe.", "cost": "Carga de 15 segundos" }
      ],
      "passives": [
        { "name": "Absorción de Odio Tsufuru", "desc": "Su poder de ataque aumenta por cada Saiyan presente en el combate.", "cost": "Buff Anti-Saiyan" }
      ]
    },
    "forms": [ 
      { "id": "hatchiyack-base", "name": "Forma Definitiva", "stats": "Nivel Sistema Solar Menor. Piel roja carmesí, joyas azules en hombros y pecho, aspecto imponente." },
      { "id": "hatchiyack-super", "name": "Super Hatchiyack (Gigante)", "stats": "Nivel Sistema Solar. Forma colosal alada de máximo poder." }
    ],
    "feats": [ "Soportó los ataques de Goku SSJ, Vegeta SSJ, Gohan SSJ, Trunks SSJ y Piccolo a la vez.", "Requirió un ataque combinado quintuple al unísono para ser destruido." ],
    "psychology": "Máquina viviente de odio puro; no razona ni siente piedad.",
    "weaknesses": "Durante los 15 segundos que tarda en cargar el Revenger Cannon, su defensa cae a cero y queda totalmente inmóvil."
  },
  // 12. ZANGYA
  {
    "id": "zangya-pel-culas-dbz-toei-447",
    "name": "Zangya",
    "alias": "La Guerrera de Hera / Mano Derecha de Bojack",
    "universe": "Dragon Ball Z (Toei)",
    "saga": "Película: ¡Los Guerreros de Plata!",
    "version": "Pirata Espacial",
    "tier": "Tier 4-C a 4-B | Nivel Estrella Enana a Sistema Solar",
    "ap": "Nivel Sistema Solar Menor. La guerrera femenina del clan de Bojack. Superó y humilló a Krilin de una patada, y coordinó con Bujin y Bido para atrapar a Trunks SSJ y Gohan SSJ en sus hilos de Ki psico-kinéticos.",
    "range": "Físico y Cuerdas de Ki (Decenas de metros).",
    "speed": { "combat": "FTL+.", "reaction": "FTL+.", "travel": "MFTL.", "attack": "Acrobática." },
    "strength": { "striking": "Clase Estrella Enana.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Estrella Enana. Murió traicionada por Bojack, quien la usó como escudo humano.",
    "stamina": "Alta.",
    "battleIQ": "Luchadora despiadada que ataca en coordinación con sus compañeros piratas.",
    "haxTags": [ "Hilos Psico-Kinéticos (Drenaje de Ki y Parálisis)", "Tácticas de Emboscada" ],
    "arsenal": {
      "basicAttacks": "Patadas acrobáticas, ráfagas cortantes desde las uñas.",
      "superAttacks": [
        { "name": "Spark Lasers", "desc": "Disparos amarillos rápidos desde los dedos.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Trampa de Hilos Psíquicos (Con Bujin y Bido)", "desc": "Dispara cuerdas de energía invisible que atrapan al enemigo estrangulándolo y drenando su energía vital poco a poco.", "cost": "25% Ki" }
      ],
      "passives": [
        { "name": "Pirata Despiadada", "desc": "Aumenta su daño si ataca a oponentes que ya están inmovilizados por sus hilos.", "cost": "Pasivo sádico" }
      ]
    },
    "forms": [ 
      { "id": "zangya-base", "name": "Guerrera de Hera", "stats": "Nivel Sistema Solar Menor. Cabello naranja salvaje, piel verde azulada, chaleco blanco y pendientes dorados." }
    ],
    "feats": [ "Noqueó a Krilin sin esfuerzo.", "Inmovilizó a Gohan SSJ1 permitiendo la golpiza de Bojack." ],
    "psychology": "Sádica y vanidosa, pero cobarde en el fondo; se aterrorizó hasta el llanto cuando vio a Gohan despertar el SSJ2.",
    "weaknesses": "Físicamente muy inferior a un SSJ2; Bojack la sacrificó lanzándola contra Gohan sin dudar."
  }
];

const filePath = path.resolve(__dirname, '../src/data/characters.js');
let content = fs.readFileSync(filePath, 'utf8');

const prefix = 'export const INITIAL_CHARACTERS = ';
let currentList = eval(content.replace(prefix, ''));
console.log(`Current characters count: ${currentList.length}`);

let updatedCount = 0;
batch18Upgrades.forEach(upgrade => {
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

console.log(`Batch 18 Upgrade Complete. ${updatedCount} characters successfully enhanced.`);
