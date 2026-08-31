const fs = require('fs');
const path = require('path');

const batch1Upgrades = [
  // 1. GOKU SUPER
  {
    "id": "son-goku-saga-super-dragon-ball-super-732",
    "name": "Son Goku (Saga Super)",
    "alias": "El Saiyan Divino / Maestro del Instinto",
    "universe": "Dragon Ball Super",
    "saga": "Torneo del Poder / Granolah",
    "version": "Post-Moro / Granolah (Ultra Instinto Dominado)",
    "tier": "Tier 2-C | Nivel Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. Sus puños chocando con Beerus al inicio de DBS amenazaron con destruir todo el macrocosmos del Universo 7. En su estado de Ultra Instinto Perfeccionado/Verdadero, su Ki trasciende la comprensión mortal, capaz de someter a seres que superan a los Dioses de la Destrucción, quebrando galaxias enteras como efecto colateral si no contiene su fuerza.",
    "range": "Físico a Multiversal Bajo (a través de proyecciones masivas de Ki y choque de ondas).",
    "speed": {
      "combat": "Inconmensurable. Trasciende el tiempo mismo; se movió dentro de la prisión temporal de Hit y esquivó ataques automáticos a nivel divino.",
      "reaction": "Inconmensurable (En UI). Su cuerpo reacciona antes de que la mente procese la información, evadiendo ataques a la velocidad del pensamiento cósmico.",
      "travel": "Masivamente FTL+ / Teletransportación Instantánea.",
      "attack": "Golpes que superan la percepción de seres Tier 2-C."
    },
    "strength": {
      "striking": "Clase Multiversal Bajo. Puede herir a seres de la talla de Jiren, Moro y Gas.",
      "lifting": "Clase Universal."
    },
    "durability": "Nivel Multiversal Bajo. Su control molecular defensivo en Ultra Instinto lo vuelve casi invulnerable a ataques por debajo de su propio Tier, endureciendo zonas de impacto de manera autónoma.",
    "stamina": "Muy Alta, pero el Ultra Instinto consume energía mental y vital a un ritmo extremo, limitándolo a escasos minutos en combates prolongados.",
    "battleIQ": "Genio del Combate Absoluto. En batalla, posee el mayor índice de adaptabilidad del multiverso, aprendiendo y copiando técnicas complejas casi al instante.",
    "haxTags": [
      "Ultra Instinto (Evasión Automática / Autodefensa)",
      "Zenkai (Limit Break Constante)",
      "Teletransportación Dimensional (Shunkanido)",
      "Proyección Avatar de Ki Gigante",
      "Hakai (Uso Básico/Imperfecto)"
    ],
    "arsenal": {
      "basicAttacks": "Artes marciales divinas. Movimientos que no dejan aberturas, golpeando puntos vitales con precisión microscópica.",
      "superAttacks": [
        { "name": "Kamehameha Divino", "desc": "Una versión refinada con Ki de los dioses, inmensamente más letal y veloz.", "cost": "20% Ki" },
        { "name": "Kamehameha Instantáneo", "desc": "Combina el Shunkanido con un Kamehameha a quemarropa sin posibilidad de evasión.", "cost": "25% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Kamehameha Supremo del Ultra Instinto", "desc": "Un torrente de energía plateada capaz de erradicar amenazas de nivel galáctico-universal instantáneamente.", "cost": "70% Ki" },
        { "name": "Avatar de Ki Susanoo", "desc": "Materializa un Goku titánico de pura energía para luchar contra seres colosales como Moro-Tierra.", "cost": "50% Ki" }
      ],
      "passives": [
        { "name": "Endurecimiento Inconsciente (UI)", "desc": "El daño físico recibido es mitigado casi en su totalidad si es detectado por su cuerpo antes del impacto.", "cost": "Pasivo en UI" }
      ]
    },
    "forms": [
      { "id": "goku-dbs-base", "name": "Base / SSJ1-3", "stats": "Nivel Universal+. Fuerte, pero palidece frente al poder divino." },
      { "id": "goku-dbs-god", "name": "SSJ God / SSJ Blue", "stats": "Nivel Universal+. Flujo perfecto, acceso a Ki Divino y multiplicador letal." },
      { "id": "goku-dbs-ui", "name": "Ultra Instinto (Verdadero / Plateado)", "stats": "Nivel Multiversal Bajo. Evasión perfecta, daño cósmico." }
    ],
    "feats": [
      "Sacudió el infinito Reino de la Nada con su simple presencia.",
      "Derrotó a Jiren el Gris, quien superaba a un Dios de la Destrucción.",
      "Desintegró los fragmentos de Moro fusionados con la Tierra usando un avatar de Ki masivo."
    ],
    "psychology": "Un purista de la batalla. Siempre busca enfrentarse al oponente más fuerte para mejorar, a menudo bajando la guardia si cree que la pelea está ganada.",
    "weaknesses": "Exceso de confianza crónico, baja la guardia dejándolo vulnerable a ataques menores (Ray Gun). El Ultra Instinto perfecto rompe su cuerpo tras el uso prolongado."
  },
  // 2. VEGETA SUPER
  {
    "id": "vegeta-saga-super-dragon-ball-super-454",
    "name": "Vegeta (Saga Super)",
    "alias": "El Príncipe de la Destrucción / Ego Divino",
    "universe": "Dragon Ball Super",
    "saga": "Granolah",
    "version": "Post-Moro / Granolah (Mega Instinto)",
    "tier": "Tier 2-C | Nivel Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. Vegeta ha dominado la fisión del espíritu y el poder puro del Hakai bajo el tutelaje de Beerus. En el Ultra Ego (Mega Instinto), su daño destructivo escala a niveles impensables, aumentando su potencia exponencialmente con cada herida que recibe.",
    "range": "Físico a Multiversal Bajo (Ki de Destrucción).",
    "speed": {
      "combat": "Inconmensurable. A la par o ligeramente superior en pura acometida a Goku UI, persiguiendo implacablemente a sus adversarios.",
      "reaction": "Inconmensurable.",
      "travel": "Masivamente FTL+.",
      "attack": "Velocidad destructiva inmediata; el Hakai disuelve objetos antes de contactarlos físicamente."
    },
    "strength": { "striking": "Clase Multiversal Bajo. Sus golpes resquebrajan la materia y anulan factores regenerativos.", "lifting": "Clase Universal." },
    "durability": "Nivel Multiversal Bajo. Absorbe daño letal y lo convierte en combustible para su propia furia, siendo un tanque absoluto en batalla.",
    "stamina": "Absurda. Su fuerza de voluntad mantiene su cuerpo funcional incluso cuando debería estar muerto biológicamente.",
    "battleIQ": "Estratega Supremo e Implacable. Vegeta lee los patrones de ataque de sus enemigos y castiga los errores sin dudar.",
    "haxTags": [
      "Fisión Forzada del Espíritu (Separa fusiones y robos de energía)",
      "Manipulación de Hakai (Borrado Existencial)",
      "Mega Instinto (Aumento de poder mediante dolor/daño)"
    ],
    "arsenal": {
      "basicAttacks": "Cuerpo a cuerpo brutal. Prefiere los puñetazos de lleno, sacrificando la esquiva para asegurar el golpe y potenciar el Mega Instinto.",
      "superAttacks": [
        { "name": "Final Flash Divino", "desc": "Una colosal ola amarilla que atraviesa incluso escudos de energía de nivel galáctico.", "cost": "20% Ki" },
        { "name": "Esfera Hakai", "desc": "Una orbe violeta pequeña que borra de la existencia cualquier cosa que toque, ignorando la resistencia convencional.", "cost": "30% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Explosión Final del Ego (Hakai Máximo)", "desc": "Libera todo el poder del Dios de la Destrucción asimilado en una supernova de aura violeta que desintegra al enemigo por completo.", "cost": "80% Ki" }
      ],
      "passives": [
        { "name": "Combustible de Sangre (Ultra Ego)", "desc": "Cuanto más daño recibe, más aumentan su AP, Velocidad y Agresividad. Inmune al miedo.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [
      { "id": "vegeta-dbs-base", "name": "Base / SSJ1-2", "stats": "Nivel Universal+. El príncipe de los saiyans con técnica impecable." },
      { "id": "vegeta-dbs-blue", "name": "SSJ Blue / Blue Evolution", "stats": "Nivel Universal+. Capacidad de romper barreras existenciales (como la técnica de Toppo)." },
      { "id": "vegeta-dbs-ego", "name": "Ultra Ego (Mega Instinto)", "stats": "Nivel Multiversal Bajo. Sin cejas, aura de fuego violeta oscuro. Puro masoquismo ofensivo." }
    ],
    "feats": [
      "Destrozó a Toppo Dios de la Destrucción anulando su Hakai puro.",
      "Separó la energía absorbida por Moro golpeando su núcleo espiritual.",
      "Soportó ataques mortales de Granolah y Gas, utilizando el daño a su favor."
    ],
    "psychology": "Orgullo inquebrantable, pero ya no egoísta. Protege ferozmente a su familia y su honor, dispuesto a cargar con el pecado de la destrucción.",
    "weaknesses": "El Ultra Ego tiene un límite biológico; si recibe más daño del que sus órganos pueden tolerar (trauma craneal extremo), colapsa perdiendo la forma instantáneamente."
  },
  // 3. GOHAN SUPER
  {
    "id": "son-gohan-saga-super-dragon-ball-super-39",
    "name": "Son Gohan (Saga Super)",
    "alias": "El Potencial Infinito / Gohan Bestia",
    "universe": "Dragon Ball Super",
    "saga": "Super Hero",
    "version": "Modo Bestia (Beast)",
    "tier": "Tier 2-C | Nivel Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. En su forma Bestia, desatada por la ira instintiva de proteger a Piccolo, el poder bruto de Gohan eclipsa momentáneamente al Ultra Instinto de Goku y al Ultra Ego de Vegeta (según declaraciones de Piccolo/Toriyama). Es capaz de destruir núcleos blindados como el de Cell Max que un SSJ Blue no podría ni rozar.",
    "range": "Planetario a Multiversal Bajo.",
    "speed": {
      "combat": "Inconmensurable. Cell Max (Nivel Broly DBS) no pudo reaccionar ni percibir el vuelo del contraataque de Gohan.",
      "reaction": "Inconmensurable.",
      "travel": "MFTL+.",
      "attack": "Sus rayos atraviesan materia a velocidad trans-lumínica."
    },
    "strength": { "striking": "Clase Multiversal Bajo. Soporta sin inmutarse golpes a máxima potencia que destruirían el sistema solar con la sola onda expansiva.", "lifting": "Clase Universal." },
    "durability": "Nivel Multiversal Bajo. Un golpe a matar del gigantesco Cell Max directo a su cuerpo no le movió un solo centímetro de su eje.",
    "stamina": "Muy Alta, pero la forma Bestia se alimenta de pura adrenalina y ferocidad, pudiendo apagarse si se tranquiliza.",
    "battleIQ": "Altamente Inteligente, pero influenciado por una letalidad fría y arrogante en su forma Bestia (similar a su SSJ2 contra Cell).",
    "haxTags": [ "Explosión de Potencial Oculto (Ira Absoluta)", "Curación Mística (vía Ki)", "Anulación de Durabilidad Física" ],
    "arsenal": {
      "basicAttacks": "Patadas que rompen la barrera del sonido cósmico y bloqueos de aura estáticos.",
      "superAttacks": [
        { "name": "Masenko Definitivo", "desc": "Un torrente brutal de energía que barre amenazas cósmicas instantáneamente.", "cost": "20% Ki" },
        { "name": "Impacto de Bestia (Counter)", "desc": "Inmoviliza el golpe del enemigo para contraatacar con un golpe al plexo que revienta los órganos vitales.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Makankosappo Especial (Modo Bestia)", "desc": "Técnica de su maestro llevada a su clímax masivo; un rayo espiral de aura eléctrica ineludible que perfora núcleos universales como mantequilla.", "cost": "75% Ki" }
      ],
      "passives": [
        { "name": "Muro del Bestia", "desc": "Anula por completo el daño físico (Daño = 0) si el atacante posee un AP considerablemente menor al suyo.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [
      { "id": "gohan-mistico-dbs", "name": "Estado Definitivo (Ultimate)", "stats": "Nivel Universal+. Fuerte, pero oxidado." },
      { "id": "gohan-bestia", "name": "Modo Bestia (Beast)", "stats": "Nivel Multiversal Bajo. Pelo blanco erizado (estilo SSJ2), ojos rojos demoníacos y aura de tormenta." }
    ],
    "feats": [
      "Derrotó a Cell Max (cuya potencia asustó a Piccolo y rivalizaba con Broly) con un solo Makankosappo.",
      "Ignoró completamente el puñetazo gigante de Cell Max sin pestañear.",
      "Logró combatir a la par contra el Ultra Instinto de Goku en un sparring en el Planeta de Bills."
    ],
    "psychology": "Pacífico e intelectual por naturaleza. Sin embargo, en Modo Bestia es frío, arrogante e increíblemente letal. Si alguien amenaza a su hija o a Piccolo, perderá toda piedad.",
    "weaknesses": "Falta de entrenamiento constante; se confía de más cuando se transforma en Bestia, pudiendo jugar con la comida."
  },
  // 4. JIREN
  {
    "id": "jiren-dragon-ball-super-983",
    "name": "Jiren",
    "alias": "El Gris / El Guerrero Más Fuerte",
    "universe": "Dragon Ball Super",
    "saga": "Torneo del Poder",
    "version": "Full Power (Desatado)",
    "tier": "Tier 2-C | Nivel Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. Jiren es el guerrero mortal que supera por pura fuerza cruda y dominio de Ki a un Dios de la Destrucción (Belmod). Un solo parpadeo suyo genera una onda de choque capaz de barrer de la arena a oponentes estelares. En estado Full Power, amenaza con quemar el infinito Reino de la Nada.",
    "range": "Planetario (con mirada) a Universal.",
    "speed": {
      "combat": "Inconmensurable. Pudo moverse e interceptar el 'Salto en el Tiempo' de Hit, superando las leyes cronológicas a pura fuerza bruta.",
      "reaction": "Inconmensurable. Meditaba e interceptaba teletransportaciones sin abrir los ojos.",
      "travel": "MFTL+ viajando entre planetas volando en el vacío intergaláctico sin nave.",
      "attack": "Instantáneo mediante impacto de presión en los ojos (Glare)."
    },
    "strength": { "striking": "Clase Multiversal Bajo.", "lifting": "Clase Universal." },
    "durability": "Nivel Multiversal Bajo. Una fortaleza inquebrantable; detuvo la espada de Ki de Goku Black y cortadas de dimensiones con un solo dedo.",
    "stamina": "Inagotable hasta que es llevado más allá de sus límites espirituales.",
    "battleIQ": "Pragmático y Calculador. Basado exclusivamente en el poder absoluto, no requiere estrategias complejas.",
    "haxTags": [
      "Barrera de Presión (Ki Pasivo Automático)",
      "Superación Temporal por Poder (Rompe el tiempo)",
      "Impacto Visual / Telequinesis Extrema",
      "Inmunidad Térmica y de Vacío Espacial"
    ],
    "arsenal": {
      "basicAttacks": "Golpes simples que generan columnas de fuego ardiente y presión de vacío.",
      "superAttacks": [
        { "name": "Impacto Invisible (Glare)", "desc": "Asesta docenas de golpes a quemarropa de inmenso poder simplemente mirando fijamente al oponente.", "cost": "5% Ki" },
        { "name": "Impacto de Calor Magnético", "desc": "Una bola de fuego minúscula que se expande explosivamente en el abdomen del objetivo, causándole daño crítico y quemaduras divinas.", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Omegaheat Magnetron (Full Power)", "desc": "Libera el 100% de su Ki oculto, envolviéndose en llamas absolutas. Lanza una esfera masiva que desintegra barreras conceptuales y físicas.", "cost": "60% Ki" }
      ],
      "passives": [
        { "name": "Muro del Absoluto", "desc": "Su simple aura repele ataques de nivel inferior a 3-A sin que tenga que moverse.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [
      { "id": "jiren-base", "name": "Base (Contenido)", "stats": "Nivel Universal. Ojos cerrados/relajado, invulnerable a la mayoría del castigo." },
      { "id": "jiren-full-power", "name": "Full Power (Desatado / Trauma)", "stats": "Nivel Multiversal Bajo. Musculatura inflada al extremo, envuelto en fuego rojo oscuro." }
    ],
    "feats": [
      "Rompío la prisión temporal de Hit a pura fuerza bruta (Vados dijo: 'Su poder trasciende el tiempo').",
      "Empujó la Genkidama Universal de Goku UI (Sign) de vuelta hacia él con un simple grito.",
      "Luchó contra Goku, Vegeta, Freezer, 17, Gohan y todo el U7 casi simultáneamente."
    ],
    "psychology": "Solitario, traumatizado por la pérdida de sus seres queridos en el pasado. Cree ciegamente que la fuerza absoluta es la única verdad y justicia del universo.",
    "weaknesses": "Cuando su ideología se rompe o se siente acorralado mentalmente, su eficiencia y precisión bajan drásticamente (pierde los estribos)."
  },
  // 5. BROLY DBS
  {
    "id": "broly-dbs-dragon-ball-super-172",
    "name": "Broly",
    "alias": "El Mutante Legendario",
    "universe": "Dragon Ball Super",
    "saga": "Película: Broly",
    "version": "Super Saiyan Full Power (Berserker)",
    "tier": "Tier 2-C | Nivel Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. El mutante absoluto. Al desatar todo su potencial en LSSJ, su colisión de poder con Gogeta Blue fue tan brutal que fracturó las paredes de la realidad, arrastrándolos a una dimensión paralela. Su Ki aumenta incesantemente a medida que pelea, convirtiéndolo en una amenaza inmensurable para los dioses.",
    "range": "Masivo Intergaláctico mediante la lluvia de energía (Omega Blaster).",
    "speed": {
      "combat": "Inconmensurable. Igualó a Goku y Vegeta Blue, obligándolos a fusionarse.",
      "reaction": "Inconmensurable.",
      "travel": "MFTL+.",
      "attack": "Destrucción instantánea a gran escala."
    },
    "strength": { "striking": "Clase Multiversal Bajo. Arrastró la cara de Goku Dios contra el hielo destrozando continentes de puro impacto contundente.", "lifting": "Clase Universal." },
    "durability": "Nivel Multiversal Bajo. Recibió docenas de ataques directos de Gogeta SSJ Blue y seguía levantándose, resistiendo roturas óseas de niveles estelares.",
    "stamina": "Zenkai infinito y automático en medio del combate; nunca se cansa mientras esté en modo berserker.",
    "battleIQ": "Instinto Animal Prodigioso. Empieza como un novato y en 20 minutos supera el nivel de los Dioses solo por memoria muscular.",
    "haxTags": [ "Adaptabilidad de Combate Infinita", "Inmunidad al Dolor", "Rotura Dimensional por Fricción", "Armadura de Ki Verde (Full Power)" ],
    "arsenal": {
      "basicAttacks": "Agarres, estrangulamientos, estrellar al oponente, pisotones volcánicos.",
      "superAttacks": [
        { "name": "Aliento Borrador", "desc": "Dispara desde la boca una ráfaga inmensa de energía hiper-densa color esmeralda.", "cost": "15% Ki" },
        { "name": "Omega Blaster (Lluvia de Meteoros)", "desc": "Dispara cientos de miles de bolas verdes al cielo que caen como lluvia aniquilando un radio planetario entero.", "cost": "25% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Estallido Legendario de Rabia (LSSJ)", "desc": "Un escudo de magma y ki que explota engullendo a su oponente en el fin de la realidad, seguido de un rayo brutal.", "cost": "60% Ki" }
      ],
      "passives": [
        { "name": "Crecimiento Infinito", "desc": "Su poder, velocidad y resistencia se incrementan pasivamente por cada minuto/turno que pasa combatiendo.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [
      { "id": "broly-dbs-ikari", "name": "Estado Ikari (Oozaru en Humano)", "stats": "Nivel Universal+. Ojos amarillos, pelaje oscuro, invulnerable a ataques simples." },
      { "id": "broly-dbs-lssj", "name": "Super Saiyan Legendario / Full Power", "stats": "Nivel Multiversal Bajo. Pelo verde, músculos grotescos, furia ciega, rompe dimensiones." }
    ],
    "feats": [
      "Rompió el espacio-tiempo luchando con Gogeta.",
      "Golpeó a Freezer Dorado ininterrumpidamente durante 1 hora sin recibir un rasguño.",
      "Aprendió a combatir usando Ki divino en 10 minutos de sparring contra Vegeta."
    ],
    "psychology": "Un alma amable y gentil criada como un perro de ataque por un padre abusivo. Pierde completamente la mente al transformarse.",
    "weaknesses": "Pierde toda lógica y estrategia en LSSJ. Lucha de forma lineal, lo que lo hace presa de tácticas de desvío y confusiones."
  },
  // 6. FREEZER SUPER
  {
    "id": "freezer-saga-super-dragon-ball-super-180",
    "name": "Freezer (Saga Super)",
    "alias": "El Emperador del Mal / Black Freezer",
    "universe": "Dragon Ball Super",
    "saga": "Granolah / Super Hero",
    "version": "Black Freezer (10 Años Habitación del Tiempo)",
    "tier": "Tier 2-C a 2-B | Nivel Multiversal",
    "ap": "Nivel Multiversal. Tras descubrir una Cámara de Tiempo hiperbárica en un planeta lejano y entrenar durante el equivalente a 10 años ininterrumpidos, alcanzó la forma Black. En esta forma mató de un solo golpe (one-shot) a Gas en su cúspide, y derribó simultáneamente a Goku (Ultra Instinto Verdadero) y Vegeta (Ultra Ego) en sus mejores formas sin esfuerzo alguno.",
    "range": "Universal mediante esferas de la muerte (Death Ball).",
    "speed": {
      "combat": "Inconmensurable+. Ni Goku UI ni Vegeta UE pudieron reaccionar a su acometida física cuando apareció en Cereal.",
      "reaction": "Inconmensurable+.",
      "travel": "MFTL+ a velocidad cósmica absurda.",
      "attack": "Rayos de la Muerte inmediatos."
    },
    "strength": { "striking": "Clase Multiversal. Atravesó el abdomen blindado del bio-androide más fuerte del universo como si fuera de papel.", "lifting": "Clase Universal." },
    "durability": "Nivel Multiversal. Soporta daño destructivo colosal. Su cuerpo no gasta prácticamente energía en la forma Black.",
    "stamina": "Ilimitada. Ha superado el problema de la fatiga que padecía en Namek y en la Saga de Golden.",
    "battleIQ": "Maquiavélico, brillante y sádico. Un tirano táctico al máximo nivel.",
    "haxTags": [
      "Inmunidad a Magia de Destrucción (Hakai contenido)",
      "Resistencia a Vacío y Temperaturas Absolutas",
      "Rayo Perforante de Durabilidad"
    ],
    "arsenal": {
      "basicAttacks": "Golpes finos y letales a puntos vitales (hígado, corazón). Utiliza su cola como látigo asfixiante.",
      "superAttacks": [
        { "name": "Death Beam Perforante", "desc": "Dispara rayos morados o negros por el dedo índice con velocidad infinita que ignoran corazas biológicas.", "cost": "5% Ki" },
        { "name": "Death Saucer", "desc": "Discos morados que cortan lo que sea y persiguen térmicamente al enemigo.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Emperador Oscuro (Black Supernova)", "desc": "Una colosal bola de fuego negra y morada del tamaño de un pequeño sol. Si toca el núcleo de un planeta, aniquila la galaxia local por reacción en cadena.", "cost": "50% Ki" }
      ],
      "passives": [
        { "name": "Orgullo del Tirano (Black)", "desc": "Su inmenso poder abrumador causa un 25% de caída de defensa en los oponentes debido al pánico biológico que infunde.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [
      { "id": "freezer-golden", "name": "Golden Freezer", "stats": "Nivel Universal+. Fuerte, a la par con SSJ Blue, con control estricto del Ki." },
      { "id": "freezer-black", "name": "Black Freezer", "stats": "Nivel Multiversal. Su forma definitiva que humilla a Dioses y mortales por igual." }
    ],
    "feats": [
      "Soportó la energía del Hakai en su estado Golden sin desintegrarse antes del Torneo.",
      "Un-shotteó y asesinó a Gas, quien momentos antes había superado a Goku y Vegeta.",
      "Noqueó simultáneamente a Goku Ultra Instinto y Vegeta Ultra Ego de un solo golpe al hígado a cada uno."
    ],
    "psychology": "Calculador, sádico, elegante. Ha abandonado su arrogancia cegadora, prefiriendo ahora asegurar la victoria con paciencia (entrenando 10 años) y golpes decisivos.",
    "weaknesses": "Vulnerable a la subestimación en sus formas tempranas, y puede ser atrapado por engaños emocionales o sorpresas tácticas."
  },
  // 7. GOKU NAMEK
  {
    "id": "son-goku-saga-namek-saga-namek-176",
    "name": "Son Goku (Saga Namek)",
    "alias": "El Legendario Super Saiyajin",
    "universe": "Dragon Ball Z",
    "saga": "Saga de Namek",
    "version": "Despertar del Super Saiyajin (Furia en Namek)",
    "tier": "Tier 4-B | Nivel Estrella a Estrella Grande",
    "ap": "Nivel Estrella. Al despertar el legendario Super Saiyajin tras presenciar el asesinato de Krillin a manos de Freezer, el poder base de Goku se multiplica x50. Sus ataques cargados pueden diezmar núcleos planetarios grandes e hirieron gravemente a Freezer 100% de Poder. En esta fase, su Ki era inestable y abrumadoramente agresivo.",
    "range": "Planetario mediante el Kamehameha o el Smash de Meteoros.",
    "speed": {
      "combat": "Masivamente Relativista a FTL. Totalmente indetectable para Freezer 50%.",
      "reaction": "FTL. Detenía ráfagas y discos mortales con una mano.",
      "travel": "Relativista a Velocidad Lumínica.",
      "attack": "Velocidad lumínica (Ráfagas Ki)."
    },
    "strength": { "striking": "Clase Estrella. Con una sola bofetada rompía rocas de Katchin e inutilizaba el cuerpo de Freezer.", "lifting": "Clase G (Miles de millones de toneladas)." },
    "durability": "Nivel Estrella. Sobrevivió a ser bañado en lava, la explosión del núcleo de Namek y rayos mortales consecutivos de Freezer.",
    "stamina": "Muy Alta, pero el estado Super Saiyajin temprano lo desgasta gradualmente y le provoca altos picos de estrés arterial.",
    "battleIQ": "Instintivo e implacable. En su primera vez en SSJ pierde el carácter pacífico, luchando con sed de sangre y furia de venganza.",
    "haxTags": [ "Amplificación de Ira", "Telepatía Básica (Kaio)", "Telequinesis Defensiva Mínima" ],
    "arsenal": {
      "basicAttacks": "Golpes coléricos a puño cerrado, combos aéreos (Meteor Smash).",
      "superAttacks": [
        { "name": "Kamehameha Furioso", "desc": "Lanzado con una mano en pleno vuelo, color dorado ardiente.", "cost": "20% Ki" },
        { "name": "Ráfaga Rompe-Meteoros", "desc": "Combo físico demoledor culminado con un rodillazo al estómago del rival.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Super Kamehameha (Ira de Namek)", "desc": "Rechazando el último ataque desesperado de Freezer con un grito de 'Estúpido', lanza un estallido masivo de energía para hundirlo.", "cost": "50% Ki" }
      ],
      "passives": [
        { "name": "Corazón Gélido del SSJ", "desc": "Inmunidad al dolor moral; su piedad se reduce al 0% a menos que el rival quede físicamente mutilado.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "goku-ssj1-namek", "name": "Super Saiyajin 1", "stats": "Nivel Estrella. Ojos verde mar furiosos, aura dorada brillante chisporroteante." } ],
    "feats": [
      "Devolvió el rayo mortal de Freezer con un simple parpadeo/manotazo.",
      "Rompió a Freezer 100% psicológicamente al demostrar su superioridad y luego renunciar a seguir peleando.",
      "Sobrevivió a la detonación final del planeta Namek estando malherido y exhausto."
    ],
    "psychology": "A diferencia de su habitual calma, este Goku está consumido por la furia. Castiga severamente al rival para hacerle sufrir las mismas humillaciones que causó.",
    "weaknesses": "Falta de control de ira, pérdida de Stamina drástica hacia el final del combate, y vulnerabilidad a ataques en áreas orgánicas sin Ki si baja la guardia (sobrevive al vacío de milagro)."
  },
  // 8. CELL
  {
    "id": "cell-saga-androides-98",
    "name": "Cell (Perfecto / Super Perfecto)",
    "alias": "El Bio-Androide Perfecto",
    "universe": "Dragon Ball Z",
    "saga": "Saga de Cell / Androides",
    "version": "Forma Perfecta (Post Zenkai de Explosión)",
    "tier": "Tier 4-B | Nivel Sistema Solar",
    "ap": "Nivel Sistema Solar. Tras su aparente suicidio explotando, el núcleo celular de Cell regeneró su cuerpo y aplicó un Zenkai pasivo que lo elevó al nivel de Super Perfecto. Según guías y el mismo Cell, su Kamehameha Solar (Kamehameha Perfecto) almacenaba la energía cinética suficiente para destruir toda la masa gravitacional del Sistema Solar.",
    "range": "Sistema Solar mediante ataques Ki máximos.",
    "speed": {
      "combat": "Masivamente FTL (MFTL).",
      "reaction": "MFTL.",
      "travel": "MFTL (Shunkanido copiado de Goku).",
      "attack": "Velocidad lumínica."
    },
    "strength": { "striking": "Clase Estelar a Sistema Solar. Podía romper el brazo de un SSJ2 (Vegeta) de un golpe desprevenido.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Sistema Solar. Su cuerpo exterior fue pulverizado parcialmente por Gohan SSJ2, pero su núcleo desplazable lo salvaba de morir instantáneamente.",
    "stamina": "Casi Ilimitada. Absorbe energía de la naturaleza y tiene células de A-17 y A-18.",
    "battleIQ": "Genio Supremo Genético. Posee las memorias musculares y tácticas de combate de Goku, Vegeta, Piccolo y Freezer.",
    "haxTags": [ "Regeneración Molecular Acelerada", "Mimetismo Táctico y de Ki (Aprende Técnicas copiándolas)", "Clonación (Cell Jrs)", "Teletransportación Instantánea" ],
    "arsenal": {
      "basicAttacks": "Cuerpo a cuerpo sofisticado. Bloqueos elegantes y golpes mortales limpios.",
      "superAttacks": [
        { "name": "Death Beam Perfecto", "desc": "Rayos disparados desde el dedo índice para atravesar oponentes incautos.", "cost": "5% Ki" },
        { "name": "Teletransportación + Impacto", "desc": "Se acerca instantáneamente y utiliza barreras o el Kienzan para rematar.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Kamehameha Solar (Perfecto)", "desc": "Reuniendo todo el ADN y el Ki monstruoso de su forma Súper Perfecta en un rayo azul masivo diseñado para destruir desde el Sol hasta Plutón.", "cost": "80% Ki" }
      ],
      "passives": [
        { "name": "Regeneración Zenkai", "desc": "Mientras su masa celular (núcleo) sobreviva intacta en su cráneo/cuerpo, regenera el 100% del daño en 1 turno y recibe un buff temporal a estadísticas.", "cost": "Pasivo continuo / Coste Vital alto" }
      ]
    },
    "forms": [ { "id": "cell-super-perfecto", "name": "Forma Super Perfecta", "stats": "Nivel Sistema Solar. Rodeado de rayos eléctricos amarillos." } ],
    "feats": [
      "Sobrevivió a la aniquilación atómica tras autodestruirse al tamaño de una bomba planetaria.",
      "Humilló al Super Vegeta, Goku SSJ Full Power y Trunks musculoso.",
      "Asesinó a Trunks de un solo disparo preciso con el Death Beam apenas resucitó."
    ],
    "psychology": "Narcisista, refinado y sádico. Disfruta infligiendo miedo antes que matando rápido. Busca ser desafiado solo para aplastar la esperanza ajena.",
    "weaknesses": "Vulnerable a daños que vaporicen su cuerpo entero instantáneamente sin dejar rastros (Kamehameha Padre e Hijo). Sumamente arrogante."
  },
  // 9. SUPER BUU
  {
    "id": "super-buu-saga-buu-69",
    "name": "Super Buu (Gohan Absorbido / Buuhan)",
    "alias": "El Monstruo Supremo (Buuhan)",
    "universe": "Dragon Ball Z",
    "saga": "Saga de Buu",
    "version": "Con Gohan Definitivo, Piccolo y Gotenks absorbidos",
    "tier": "Tier 3-C | Nivel Galaxia a Multi-Galaxia",
    "ap": "Nivel Multi-Galaxia. Al absorber a Gohan (quien ya dominaba a Super Buu), Piccolo (inteligencia) y a los niños, Buuhan se transformó en el ser más fuerte de DBZ (sin contar a Vegetto). Su Grito Dimensional amenazó con colapsar toda la existencia (el Multiverso 7) aplastando dimensiones paralelas debido a pura emisión de Ki inestable.",
    "range": "Dimensional / Universal mediante Grito y Magia.",
    "speed": {
      "combat": "Inconmensurable (MFTL+).",
      "reaction": "MFTL+.",
      "travel": "Desplazamiento dimensional instantáneo.",
      "attack": "Velocidad dimensional imperceptible."
    },
    "strength": { "striking": "Clase Galáctica.", "lifting": "Clase Galáctica." },
    "durability": "Nivel Galaxia+. Fisiológicamente inmortal gracias a la maleabilidad chiclosa de los Majin; cualquier daño que no desintegre cada partícula de vapor será regenerado de forma automática y gratuita.",
    "stamina": "Infinita en términos prácticos, aunque el daño mental y la frustración merman su eficacia.",
    "battleIQ": "Extremadamente Brillante. Usa el intelecto táctico de Piccolo combinado con la fuerza de Gohan y las técnicas tramposas de Gotenks.",
    "haxTags": [ "Manipulación Dimensional (Gritos que rasgan dimensiones)", "Absorción de Materia (Convierte en chocolate/Dulces)", "Regeneración de Humo (Inmortalidad Majin)", "Absorción de Enemigos por Piezas", "Copiar Técnicas" ],
    "arsenal": {
      "basicAttacks": "Golpes fluidos y extensibles de goma, estrangulamiento con las antenas o apéndices corporales.",
      "superAttacks": [
        { "name": "Fantasmas Kamikaze Especiales (Kamehameha)", "desc": "Crea fantasmas que disparan ataques especiales de los Guerreros Z en lugar de solo explotar.", "cost": "20% Ki" },
        { "name": "Rayo Transfigurador (Chocolate Beam)", "desc": "Rayo rosado de su antena que convierte la materia, energía o entidades en dulces comestibles. Ignora durabilidad física.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Vice Shout (Colapso Dimensional de Grito)", "desc": "Buu enloquece y grita forzando un quiebre en la fábrica del universo. Invoca portales donde dimensiones paralelas se estrellan contra la nuestra, amenazando la existencia cósmica.", "cost": "80% Ki" }
      ],
      "passives": [
        { "name": "Anatomía de Chicle Inmortal", "desc": "Inmune a balas, cortes, desmembramientos, explosiones físicas estándar. Requiere desintegración atómica para matarlo.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "buuhan", "name": "Super Buu (Gohan Absorbido)", "stats": "Nivel Multi-Galaxia. Usa la chaqueta naranja de Gohan; rostro alargado e inteligencia superior." } ],
    "feats": [
      "Acabó con la humanidad completa (Tormenta de Exterminio) en su forma normal en segundos.",
      "Dominó y asesinó/absorbió a Gohan Definitivo.",
      "Obligó a Goku y Vegeta a fusionarse mediante los anillos Pothala (Vegetto) para poder tener una posibilidad de victoria."
    ],
    "psychology": "Maquiavélico, confiado y extremadamente hablador. Disfruta humillar psicológicamente usando técnicas de los amigos muertos del rival.",
    "weaknesses": "Inestabilidad emocional: si se desespera, pierde capacidad táctica, luchando a lo salvaje y bajando la guardia a cortes moleculares. Pierde a los absorbidos si alguien entra en su cuerpo y los desengancha."
  },
  // 10. GOKU BLACK
  {
    "id": "goku-black-l-nea-temporal-futura-209",
    "name": "Goku Black (Zamasu)",
    "alias": "La Falsa Deidad / Zamasu del Cuerpo Robado",
    "universe": "Dragon Ball Super",
    "saga": "Trunks del Futuro",
    "version": "Super Saiyan Rosé / Dios de la Justicia",
    "tier": "Tier 3-A a 2-C | Nivel Universal a Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. Zamasu, en el cuerpo de Goku, adapta rápidamente las células Saiyan al Ki puramente divino del Kaioshin. Tras múltiples Zenkais por luchar con Goku, Vegeta y Trunks, el SSJ Rosé rebasa al SSJ Blue y abre portales a otras realidades con su Guadaña de dolor.",
    "range": "Físico, Universal a Inter-Dimensional (Cortes en el Espacio-Tiempo).",
    "speed": {
      "combat": "Inconmensurable. Capaz de cruzar fintas con Vegeta y Goku SSJ Blue simultáneamente, leyéndolos a la perfección.",
      "reaction": "Inconmensurable.",
      "travel": "Teletransportación / MFTL+.",
      "attack": "Cortes dimensionales instantáneos."
    },
    "strength": { "striking": "Clase Universal+. Apuñaló el plexo solar de Vegeta Blue dejándolo mortalmente herido.", "lifting": "Clase Universal." },
    "durability": "Nivel Universal+. El daño masoquistamente alimenta sus células, elevando su nivel debido al factor Zenkai combinado con regeneración divina.",
    "stamina": "Muy Alta. La forma Rosé canaliza el estrés físico mucho mejor que el Blue, operando como su estado divino natural.",
    "battleIQ": "Altamente Letal e Impredecible. Posee la sabiduría oscura de los Kaioshin fusionada con la sed de pelea del cuerpo de Goku.",
    "haxTags": [ "Manipulación Espacio-Temporal Básica (Guadaña)", "Adaptación Rápida Célular", "Clonación Temporal Incorruptible", "Creación de Armas de Ki de Alta Densidad" ],
    "arsenal": {
      "basicAttacks": "Golpes marciales combinados con cortes precisos con cuchillas de energía rosa adheridas a sus manos.",
      "superAttacks": [
        { "name": "Espada de Ki Ferviente (Violent Fierce God Slicer)", "desc": "Una hoja de energía rosa violácea y negra capaz de empalar dioses en un descuido.", "cost": "15% Ki" },
        { "name": "Kamehameha Oscuro (Black Kamehameha)", "desc": "Dispara el rayo característico con energía maligna negra-rosada, corrompiendo cualquier ataque que choca contra él.", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Guadaña de la Pena (Desgarro Dimensional)", "desc": "Materializa una guadaña colosal infundida con su odio a los mortales. Al cortar el aire, rompe la dimensión y crea portales por los que salen innumerables clones inmortales suyos.", "cost": "70% Ki" }
      ],
      "passives": [
        { "name": "Zenkai del Sufrimiento Divino", "desc": "Al asimilar el dolor físico como penitencia para alcanzar la justicia divina, Black incrementa su poder pasivamente con cada golpe crítico recibido, sanando rápidamente las heridas menores.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [
      { "id": "black-base", "name": "Goku Black Base", "stats": "Nivel Universal+. Fuerte, ágil, oscuro." },
      { "id": "black-rose", "name": "Super Saiyan Rosé", "stats": "Nivel Multiversal Bajo. Aura fucsia y negra con un aura de falsa divinidad absoluta." }
    ],
    "feats": [
      "Asesinó a casi la totalidad de la humanidad y a los Dioses en múltiples líneas de tiempo.",
      "Apuñaló y derrotó a Vegeta SSJ Blue y Goku SSJ Blue en múltiples ocasiones.",
      "Destrozó las barreras de la realidad, creando clones que ni él mismo sabía de dónde venían."
    ],
    "psychology": "Megalomaniaco y poético. Zamasu se percibe a sí mismo como el salvador y víctima de un cosmos contaminado por pecadores mortales, extasiándose en su propia elegancia morbosa.",
    "weaknesses": "Ego delirante y falta de comprensión de las verdaderas emociones puras; se niega a pelear defensivamente y menosprecia enormemente el poder bruto de los mortales."
  }
];

// Lee el archivo original
const filePath = path.resolve(__dirname, '../src/data/characters.js');
let content = fs.readFileSync(filePath, 'utf8');

// Extrae el array actual de INITIAL_CHARACTERS evaluándolo
const prefix = 'export const INITIAL_CHARACTERS = ';
const currentList = eval(content.replace(prefix, ''));
console.log(`Current characters count: ${currentList.length}`);

// Actualiza los personajes que coincidan con los IDs
let updatedCount = 0;
batch1Upgrades.forEach(upgrade => {
  const index = currentList.findIndex(c => c.id === upgrade.id);
  if (index !== -1) {
    currentList[index] = upgrade; // Sobrescribir por completo
    updatedCount++;
    console.log(`Upgraded: ${upgrade.name} (${upgrade.id})`);
  } else {
    console.warn(`WARNING: ID not found in database: ${upgrade.id}`);
  }
});

// Escribe el archivo actualizado
const output = "// APEX Engine — Base de Datos de Personajes Estructurada (VS Battles Tier System)\\n// Total fichas deduplicadas y normalizadas\\n\\nexport const INITIAL_CHARACTERS = " + JSON.stringify(currentList, null, 2) + ";\\n";
fs.writeFileSync(filePath, output.replace(/\\n/g, '\n'), 'utf8');

console.log(`Batch 1 Upgrade Complete. ${updatedCount} characters successfully enhanced to APEX-Gold Standard.`);
