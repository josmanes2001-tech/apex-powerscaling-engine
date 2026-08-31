const fs = require('fs');
const path = require('path');

const batch7Upgrades = [
  // 1. KRILIN (Z/SUPER)
  {
    "id": "krilin-dragon-ball-cl-sico-802",
    "name": "Krilin",
    "alias": "El Humano Más Fuerte / Policía de la Tierra",
    "universe": "Dragon Ball Z / Super",
    "saga": "Supervivencia Universal",
    "version": "Humano Terrestre Máximo (Con Desbloqueo del Patriarca)",
    "tier": "Tier 4-C a 4-B | Nivel Estrella Enana a Sistema Solar (Con Kienzan)",
    "ap": "Nivel Estrella Enana (Daño físico) / Nivel Sistema Solar (Hax de Corte). Como el humano más poderoso sin modificaciones corporales, el nivel físico de Krilin puede retener a rivales medianamente poderosos. Sin embargo, su legendario Kienzan posee un poder de corte capaz de mutilar a seres absurdamente superiores como Freezer (Forma 2) e ignorar defensas masivas si acierta.",
    "range": "Planetario mediante el Kienzan / Taiyoken.",
    "speed": { "combat": "FTL.", "reaction": "FTL. Usa tácticas evasivas extremas.", "travel": "FTL.", "attack": "Velocidad lumínica con discos." },
    "strength": { "striking": "Clase Estrella Enana.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Estrella Enana. Humano frágil frente a amenazas alienígenas, sobrevive usando bloqueos inteligentes y retrocediendo.",
    "stamina": "Muy Alta. Entrenamiento de la escuela tortuga perfeccionado, resiste palizas letales manteniéndose consciente.",
    "battleIQ": "Pragmático y Táctico. Es el rey de los trucos de soporte, cegando, cortando por sorpresa y huyendo cuando es necesario.",
    "haxTags": [ "Daño de Corte Absoluto (Kienzan)", "Ceguera Lumínica Infalible (Taiyoken)", "Dispersión de Ki" ],
    "arsenal": {
      "basicAttacks": "Golpes técnicos, patadas de barrido y uso del escenario para cubrirse.",
      "superAttacks": [
        { "name": "Taiyoken (Bengala Solar)", "desc": "Luz pura que ciega completamente al enemigo sin importar su poder temporalmente.", "cost": "5% Ki" },
        { "name": "Kamehameha Disperso", "desc": "Kamehameha estándar que puede dividir en ráfagas más pequeñas.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Kienzan (Disco Destructor)", "desc": "Crea un disco giratorio de Ki afilado a nivel molecular. Atraviesa y amputa al instante a casi cualquier ser en la existencia (Excepto Cell Perfecto u oponentes absurdamente más fuertes y atentos).", "cost": "20% Ki" },
        { "name": "Taiyoken x100", "desc": "Una versión tan luminosa que ciega incluso a aquellos que cierran los ojos o usan gafas, anulando su percepción del Ki temporalmente.", "cost": "15% Ki" }
      ],
      "passives": [
        { "name": "Soporte Letal", "desc": "Su presencia aumenta las oportunidades de ataques sorpresas de sus aliados. Si muere, el guerrero más cercano recibe un boost de Furia (Zenkai pasivo).", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "krilin-base", "name": "Humano Entrenado", "stats": "Nivel Estrella Enana. Sin nariz, calvo (o con pelo corto), seis puntos en la frente." } ],
    "feats": [
      "Cortó la cola a Freezer en su segunda forma.",
      "Mantuvo a raya a Cell Imperfecto rescatando a la Androide 18 (en el anime).",
      "Expulsó a guerreros mayores a él en el Torneo del Poder mediante estrategia pura y olor de zapatos."
    ],
    "psychology": "Acomplejado a veces por su debilidad frente a los Saiyans, pero cuando su familia o amigos están en peligro, su valor supera cualquier barrera psicológica.",
    "weaknesses": "Fisiología humana estándar, muy fácil de perforar (Cuerno de Freezer, Tambourine)."
  },
  // 2. TEN SHIN HAN
  {
    "id": "ten-shin-han-dragon-ball-cl-sico-812",
    "name": "Ten Shin Han",
    "alias": "El Artista Marcial de Tres Ojos",
    "universe": "Dragon Ball Z / Super",
    "saga": "Supervivencia Universal",
    "version": "Humano Tricíclope Máximo",
    "tier": "Tier 4-C a 4-B | Nivel Estrella Enana a Sistema Solar (Con Kikoho)",
    "ap": "Nivel Estrella Enana (Base) / Sistema Solar (Neo Kikoho). Su poder físico es el de un humano de élite de la Tierra, pero su Kikohu y Shin Kikoho empujan las barreras del daño a niveles ridículos. Pudo empujar, retener e inmovilizar a Cell Semi-Perfecto y bloquear un ataque de Buutenks, cosas que estaban a años luz de su fuerza base.",
    "range": "Planetario a Estelar mediante el Kikoho.",
    "speed": { "combat": "FTL.", "reaction": "FTL. Su tercer ojo mejora su percepción del movimiento hiperveloz.", "travel": "FTL.", "attack": "El Kikoho cae casi instantáneamente." },
    "strength": { "striking": "Clase Estrella Enana.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Estrella Enana. Su técnica magna consume su propia vida, siendo él mismo su peor enemigo en términos de durabilidad.",
    "stamina": "Extremadamente Alta, combinada con Fuerza de Voluntad suicida.",
    "battleIQ": "Maestro Disciplinado. Jamás deja de entrenar, serio, enfocado.",
    "haxTags": [ "Daño de Área Absoluto y Retroceso (Kikoho)", "Clonación Física (4 Cuerpos)", "Extensión de Brazos Mágicos", "Visión Mejorada (Tercer Ojo)" ],
    "arsenal": {
      "basicAttacks": "Golpes marciales perfectos del estilo Grulla. Golpes de volea.",
      "superAttacks": [
        { "name": "Dodonpa", "desc": "Un rayo amarillo ultra penetrante desde la yema del dedo, mucho más rápido que un Kamehameha base.", "cost": "10% Ki" },
        { "name": "Golpe de Cuatro Cuerpos", "desc": "Se divide en 4, rodeando al enemigo. Su poder y velocidad se divide entre 4.", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Neo Kikoho (Shin Kikoho)", "desc": "Forma un triángulo con sus manos. Dispara una onda de presión cuadrangular colosal que aplasta al enemigo contra el suelo. Puede repetirlo decenas de veces a costa de su propia energía vital.", "cost": "15% Ki y 10% HP por disparo" }
      ],
      "passives": [
        { "name": "Concentración Absoluta", "desc": "Inmune a ilusiones ópticas o técnicas de cegado simples gracias a su tercer ojo divino.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "tenshinhan-base", "name": "Guerrero Tricíclope", "stats": "Nivel Estrella Enana (Sistema Solar en AP). Calvo, tercer ojo, dogi verde/blanco, hombros masivos." } ],
    "feats": [
      "Retuvo a Cell Semi-Perfecto con el Shin Kikoho durante decenas de impactos, a punto de matarse de esfuerzo.",
      "Bloqueó un ataque de Ki de Super Buu (Gotenks Absorbido) para salvar a Gohan, Mr. Satán y Dende.",
      "Desvió el ataque de Freezer para salvar a Gohan en la resurrección de 'F'."
    ],
    "psychology": "Estricto, honorable y solitario. Vive para entrenar. No siente temor de morir frente a seres infinitamente superiores si eso significa comprar tiempo para los héroes principales.",
    "weaknesses": "El coste letal de sus mejores técnicas. Su técnica de clones reduce peligrosamente su velocidad defensiva."
  },
  // 3. CHAOS
  {
    "id": "chaos-dragon-ball-cl-sico-318",
    "name": "Chaos (Chiaotzu)",
    "alias": "El Niño Psíquico / El Mejor Amigo de Ten",
    "universe": "Dragon Ball Z",
    "saga": "Saga Saiyan",
    "version": "Humano Psíquico",
    "tier": "Tier 5-C | Nivel Planeta Pequeño",
    "ap": "Nivel Planeta Pequeño. Aunque su poder bruto de Ki es el menor de los Guerreros Z clásicos, Chaos posee capacidades telequinéticas que pueden paralizar internamente a adversarios descuidados, y su ataque suicida libera toda su energía almacenada en una explosión devastadora.",
    "range": "Montañas a Lunar.",
    "speed": { "combat": "Sub-relativista.", "reaction": "Sub-relativista.", "travel": "Supersónica.", "attack": "Veloz mediante ataques psíquicos." },
    "strength": { "striking": "Clase Montañas.", "lifting": "Clase Planetaria mediante Telequinesis." },
    "durability": "Nivel Montañas. Extremadamente frágil. Una patada de Nappa o Rey Piccolo fue suficiente para destrozarlo.",
    "stamina": "Baja. Sus poderes mentales requieren gran concentración y le causan dolor de cabeza.",
    "battleIQ": "Infantil, depende mucho de Tenshinhan.",
    "haxTags": [ "Telequinesis Interna", "Parálisis por Vudú Cósmico", "Autodestrucción" ],
    "arsenal": {
      "basicAttacks": "Golpes levitando, cabezazos, pequeños disparos de energía.",
      "superAttacks": [
        { "name": "Dodonpa Psíquico", "desc": "Dispara desde un dedo un rayo concentrado, aunque con menos potencia que Tenshinhan.", "cost": "10% Ki" },
        { "name": "Parálisis Mental", "desc": "Usando sus manos, ataca los órganos internos del enemigo inmovilizándolo (debe tener un Ki similar o menor al suyo).", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Adiós Ten... (Autodestrucción)", "desc": "Se adhiere a la espalda del oponente y explota inmolándose. Si el oponente no es ridículamente más fuerte y blindado, sufrirá heridas letales.", "cost": "100% HP (Muerte)" }
      ],
      "passives": [
        { "name": "Levitación Constante", "desc": "No pisa el suelo, evitando trampas de tierra.", "cost": "Pasivo" }
      ]
    },
    "forms": [ { "id": "chaos-base", "name": "Enano Psíquico", "stats": "Nivel Montañas. Tez blanca, mejillas rojas, ropa de monje." } ],
    "feats": [
      "Inmovilizó a Goku (Niño) temporalmente en el Torneo 22.",
      "Se inmoló para intentar matar a Nappa, logrando arrancar parte de su armadura (aunque Nappa sobrevivió)."
    ],
    "psychology": "Leal e inocente, haría cualquier cosa por Tenshinhan.",
    "weaknesses": "Poder base y durabilidad minúsculas; sus ataques psíquicos no funcionan si el enemigo tiene un nivel de poder muy superior (Nappa simplemente ignoró su parálisis)."
  },
  // 4. DABURA
  {
    "id": "dabura-saga-buu-107",
    "name": "Dabura",
    "alias": "El Rey de los Demonios",
    "universe": "Dragon Ball Z",
    "saga": "Saga de Buu",
    "version": "Rey Demonio / Sirviente Majin",
    "tier": "Tier 4-B | Nivel Sistema Solar",
    "ap": "Nivel Sistema Solar. Con un poder equiparable al de Cell Perfecto, Dabura es la cúspide del reino demoníaco. Su magia, materialización de armas letales y, sobre todo, su saliva petrificadora lo vuelven un oponente mortífero incluso para guerreros Gohan SSJ2 (que había perdido práctica).",
    "range": "Planetario.",
    "speed": { "combat": "MFTL.", "reaction": "MFTL.", "travel": "MFTL.", "attack": "Veloz, especialmente su saliva." },
    "strength": { "striking": "Clase Sistema Solar.", "lifting": "Clase Estelar." },
    "durability": "Nivel Sistema Solar. Demonio resistente, aguanta el combate de Gohan y Majin Buu.",
    "stamina": "Muy Alta, respaldado por magia oscura.",
    "battleIQ": "Pragmático y calculador. Advierte a Babidi de los peligros (como la arrogancia de Vegeta o el nivel de Goku).",
    "haxTags": [ "Petrificación Absoluta (Saliva)", "Materialización de Armas Demoníacas", "Aliento Ígneo Mágico" ],
    "arsenal": {
      "basicAttacks": "Uso de espadas enormes y lanzas, cortes a presión, y llamaradas.",
      "superAttacks": [
        { "name": "Llama Maligna", "desc": "Escupe una llamarada infernal masiva de su boca.", "cost": "15% Ki" },
        { "name": "Lanza de la Oscuridad", "desc": "Materializa una lanza y la arroja con potencia capaz de atravesar a un Gohan distraído.", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Saliva Petrificadora", "desc": "Escupe sobre su enemigo. Si la saliva toca piel humana o ropa, la víctima se convierte en piedra maciza al instante. Solo la muerte de Dabura puede deshacer el hechizo.", "cost": "30% Ki" }
      ],
      "passives": [
        { "name": "Aura Demoniaca", "desc": "Inmune a la magia oscura e ilusiones, su naturaleza malévola bloquea manipulación mental básica.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "dabura-base", "name": "Rey Demonio Majin", "stats": "Nivel Sistema Solar. Piel roja, cuernos, traje azul, símbolo 'M' en la frente." } ],
    "feats": [
      "Petrificó a Piccolo y a Krillin sin sudar.",
      "Luchó a la par contra Gohan SSJ2 (estado oxidado).",
      "Asesinó a Kibito instantáneamente con una ráfaga sorpresa."
    ],
    "psychology": "Leal a Babidi pero conserva su intelecto estratégico del Rey del Inframundo. No subestima a los Saiyans y propone usar la maldad de Vegeta. Curiosamente, tras morir y ser enviado al cielo, se vuelve un ser amoroso y bondadoso.",
    "weaknesses": "Vulnerable a ataques de purificación de aura; Majin Buu lo superó en fuerza y magia transmutadora sin esfuerzo."
  },
  // 5. ZARBON
  {
    "id": "zarbon-saga-namek-939",
    "name": "Zarbon",
    "alias": "La Mano Derecha de Freezer",
    "universe": "Dragon Ball Z",
    "saga": "Saga Namek",
    "version": "Forma Monstruosa Desatada",
    "tier": "Tier 5-B | Nivel Planeta Grande",
    "ap": "Nivel Planeta Grande. Originalmente un soldado refinado y hermoso, Zarbon oculta una transformación bestial que multiplica su poder enormemente. En esta forma aplastó al Vegeta que acababa de matar a Dodoria y Cui, dejándolo al borde de la muerte.",
    "range": "Planetario (Cañones ráfaga).",
    "speed": { "combat": "Relativista.", "reaction": "Relativista.", "travel": "Relativista.", "attack": "Ráfagas rápidas." },
    "strength": { "striking": "Clase Planetaria.", "lifting": "Clase Luna." },
    "durability": "Nivel Planeta Grande. Piel dura reptiliana en forma monstruosa.",
    "stamina": "Alta.",
    "battleIQ": "Arrogante, narcisista. Prefiere luchar elegante, y cuando usa la fuerza bruta se vuelve un matón poco refinado.",
    "haxTags": [ "Transformación Monstruosa (Aumento Físico)" ],
    "arsenal": {
      "basicAttacks": "Rodillazos, cabezazos, lariats, agarres desde el aire y pisotear al enemigo.",
      "superAttacks": [
        { "name": "Elegant Blaster", "desc": "Dispara una ráfaga limpia rosada desde su mano.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Monster Smash (Golpe Triturador)", "desc": "En su forma monstruosa, agarra al enemigo, lo aplasta contra el suelo y lanza todo su peso en un rodillazo seguido de una ola de ki a quemarropa.", "cost": "40% Ki" }
      ],
      "passives": [
        { "name": "Vanidad", "desc": "Odia su forma monstruosa. Obtiene un bonus defensivo en su forma hermosa por su intento de no ensuciarse, pero pierde potencia de ataque.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [
      { "id": "zarbon-hermoso", "name": "Forma Atractiva", "stats": "Nivel Planetario. Piel turquesa, pelo verde largo." },
      { "id": "zarbon-monstruo", "name": "Forma Monstruosa", "stats": "Nivel Planeta Grande. Reptiliano, escamas, corpulencia grotesca como un cocodrilo humanoide." }
    ],
    "feats": [
      "Derrotó a Vegeta (Pre-Zenkai Namek) dándole una paliza unilateral que casi lo mata.",
      "Servía como el general táctico de la élite de Freezer."
    ],
    "psychology": "Narcisista absoluto. Le aterra decepcionar a Freezer y odia la fealdad de su verdadero poder.",
    "weaknesses": "Descuidado; dejó vivir a Vegeta asumiendo que el lago lo había ahogado. Perdió cuando Vegeta ganó poder y recurrió a cegarlo con tierra."
  },
  // 6. DODORIA
  {
    "id": "dodoria-saga-namek-528",
    "name": "Dodoria",
    "alias": "El Ejecutor de Freezer",
    "universe": "Dragon Ball Z",
    "saga": "Saga Namek",
    "version": "Guardaespaldas Élite",
    "tier": "Tier 5-B | Nivel Planeta Grande",
    "ap": "Nivel Planeta Grande. Un bruto sádico de gran poder. Masacró a los aldeanos de Namek con un solo brazo y destrozó la armadura e intestinos de los guerreros Namekianos defensores con facilidad. Su ataque de boca fue capaz de barrer cordilleras Namekianas.",
    "range": "Planetario (Ráfaga Máxima).",
    "speed": { "combat": "Relativista.", "reaction": "Relativista.", "travel": "Relativista.", "attack": "Sorprendentemente rápido para su tamaño." },
    "strength": { "striking": "Clase Planetaria.", "lifting": "Clase Luna." },
    "durability": "Nivel Planetario. Piel espinosa gruesa.",
    "stamina": "Media. Se cansa si el enemigo corre demasiado, es propenso a frustrarse.",
    "battleIQ": "Nulo, solo ataca de frente y confía ciegamente en su poder.",
    "haxTags": [ "Fuerza Bruta" ],
    "arsenal": {
      "basicAttacks": "Golpes pesados, cabezazos con sus púas, pisotones.",
      "superAttacks": [
        { "name": "Ráfaga Devastadora de Boca (Chou Makouhou)", "desc": "Abre la boca y lanza un torrente de Ki anaranjado colosal.", "cost": "25% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Asalto del Carnicero", "desc": "Embestida frontal rompiendo brazos y atravesando a la víctima de un puñetazo.", "cost": "40% Ki" }
      ],
      "passives": [
        { "name": "Rabia Ciega", "desc": "Si lo provocan, su poder de ataque sube levemente, pero su precisión y defensa bajan drásticamente.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "dodoria-base", "name": "Élite de Freezer", "stats": "Nivel Planeta Grande. Piel rosada y gorda, pinchos en brazos y cabeza." } ],
    "feats": [
      "Sobrevivió a la patada de Krilin y el Kikoho de Gohan.",
      "Asesinó a los clanes de Namek."
    ],
    "psychology": "Cobarde, matón y mentiroso. Trató de sobornar a Vegeta revelando la verdad del Planeta Vegeta para que lo dejara vivir, suplicando cobardemente.",
    "weaknesses": "Lento mentalmente, fácil de engañar (el Taiyoken lo descolocó por completo). Vegeta lo mató sin sudar."
  },
  // 7. GULDO
  {
    "id": "guldo-saga-namek-583",
    "name": "Guldo",
    "alias": "El Mutante Psíquico",
    "universe": "Dragon Ball Z",
    "saga": "Saga Namek",
    "version": "Fuerzas Especiales Ginyu",
    "tier": "Tier 5-B | Nivel Planetario",
    "ap": "Nivel Planetario (Por Escala). Guldo es físicamente el más débil de las Fuerzas Ginyu y dependiente de sus poderes mágicos. Sin embargo, su telequinesis es lo suficientemente fuerte como para paralizar a Krilin (con poder desbloqueado) y Gohan simultáneamente en medio del aire, dejándolos vulnerables a morir ensartados.",
    "range": "Corto (Telequinesis).",
    "speed": { "combat": "Hipersónico.", "reaction": "Hipersónico. Mide mal el tiempo real por detenerlo.", "travel": "Hipersónico.", "attack": "Instantáneo mediante Tiempo Congelado." },
    "strength": { "striking": "Clase Ciudad.", "lifting": "Clase Planetaria (Usa árboles y rocas gigantes con la mente)." },
    "durability": "Nivel Planetario. Físicamente fofo y cobarde.",
    "stamina": "Muy Baja. Usar sus poderes de Tiempo agota drásticamente su aire y Ki.",
    "battleIQ": "Tramposo y sádico, le gusta empalar enemigos inmovilizados usando su magia.",
    "haxTags": [ "Congelación del Tiempo (Holding Breath)", "Telequinesis Paralizante Absoluta (Mind Bind)" ],
    "arsenal": {
      "basicAttacks": "Esconderse y arrojar rocas.",
      "superAttacks": [
        { "name": "Stop! (Parada Temporal)", "desc": "Al aguantar la respiración, el tiempo se detiene en todo el universo de manera local para él. Le permite huir o posicionarse, pero no suele usarlo para dañar directamente porque se queda sin aire.", "cost": "25% Ki / Límite de Respiración" }
      ],
      "ultimateAttacks": [
        { "name": "Parálisis Mental / Ensartamiento Cósmico", "desc": "Sus 4 ojos brillan inmovilizando al rival con magia psíquica; luego arranca árboles/rocas afiladas y los empala lentamente con su telequinesis.", "cost": "50% Ki" }
      ],
      "passives": [
        { "name": "Evasión Mágica", "desc": "Siempre que tenga aire en sus pulmones, puede evitar golpes letales deteniendo el tiempo a costa de energía.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "guldo-base", "name": "Miembro de Ginyu", "stats": "Nivel Planetario. Cuatro ojos, verde, rechoncho, feo." } ],
    "feats": [
      "Casi mata a Gohan y Krillin si no fuera por la intervención de Vegeta.",
      "Entró a la Fuerza Ginyu no por poder de pelea, sino puramente por sus trucos Hax."
    ],
    "psychology": "Un villano clásico asustadizo, resiente a Vegeta porque este lo subestima.",
    "weaknesses": "Vulnerable a ataques sorpresa o decapitaciones. Si el enemigo es demasiado fuerte físicamente, la parálisis puede ser rota."
  },
  // 8. BURTER
  {
    "id": "burter-saga-namek-641",
    "name": "Burter",
    "alias": "El Huracán Azul",
    "universe": "Dragon Ball Z",
    "saga": "Saga Namek",
    "version": "Fuerzas Especiales Ginyu",
    "tier": "Tier 5-B | Nivel Planeta Grande",
    "ap": "Nivel Planeta Grande. Proclama ser 'el ser más rápido del universo'. Sus ataques físicos coordinados con Jeice lo vuelven un combatiente letal capaz de lanzar a los oponentes como pelotas de pinball con la fuerza suficiente para reventar cordilleras.",
    "range": "Planetario.",
    "speed": { "combat": "Relativista+.", "reaction": "Relativista+.", "travel": "Relativista+.", "attack": "Asaltos casi lumínicos." },
    "strength": { "striking": "Clase Planetaria.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Planeta Grande. Muy alto, aunque fue derribado de un solo codazo de Goku.",
    "stamina": "Alta.",
    "battleIQ": "Ataca coordinado, experto en el 2v1 junto al Cometa Rojo.",
    "haxTags": [ "Velocidad Extrema (Para su Liga)", "Ataques Sincronizados (Con Jeice)" ],
    "arsenal": {
      "basicAttacks": "Golpes a mach 100, rodillazos y patadas hacha.",
      "superAttacks": [
        { "name": "Mach Kick", "desc": "Una ráfaga incesante de patadas azules desde el aire.", "cost": "10% Ki" },
        { "name": "Blue Hurricane (Huracán Azul)", "desc": "Gira a velocidad absurda creando un tornado gigante que absorbe y destroza todo.", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Purple Comet Crash (Ataque Combinado)", "desc": "Combinando ataques con Jeice, lanzan docenas de esferas de energía envueltas en luz roja y azul que caen como meteoritos erradicadores.", "cost": "40% Ki / Apoyo" }
      ],
      "passives": [
        { "name": "Ataque Rápido", "desc": "Tiene un alto bonus a golpear primero en las fases iniciales del combate.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "burter-base", "name": "Huracán Azul", "stats": "Nivel Planeta Grande. Alienígena azul muy alto, manchas púrpuras." } ],
    "feats": [
      "Humilló la velocidad de Vegeta al inicio de su pelea.",
      "Es el segundo miembro más rápido de su escuadrón (Aunque Goku resultó mucho más rápido)."
    ],
    "psychology": "Orgulloso de su velocidad, si alguien lo supera entra en negación absoluta.",
    "weaknesses": "Vulnerable a engaños de velocidad. Si se rompe su sincronía con Jeice, pierde eficiencia letal."
  },
  // 9. RECOOME
  {
    "id": "recoome-saga-namek-951",
    "name": "Recoome",
    "alias": "El Tanque Inmortal de Ginyu",
    "universe": "Dragon Ball Z",
    "saga": "Saga Namek",
    "version": "Fuerzas Especiales Ginyu",
    "tier": "Tier 5-B | Nivel Planeta Grande",
    "ap": "Nivel Planeta Grande. Una de las exhibiciones de poder bruto más aterradoras de Z. Soportó todos los ataques de máximo poder de Vegeta, el Masenko de Gohan y las combinaciones de Krilin literalmente riéndose. Su Recoome Eraser Gun amenazó con borrar una gran porción del mapa Namekiano de un solo golpe.",
    "range": "Planetario mediante Recoome Eraser Gun.",
    "speed": { "combat": "Relativista.", "reaction": "Relativista.", "travel": "Relativista.", "attack": "Veloz para su tamaño." },
    "strength": { "striking": "Clase Planeta Grande (Casi mata a Gohan y Krilin de un golpe limpio a cada uno, destrozó a Vegeta).", "lifting": "Clase Planetaria." },
    "durability": "Nivel Estrella Enana (Prácticamente Inmune en su Tier). Resistió de todo, perdiendo la armadura y la ropa, luchando en calzones sin sangrar ni perder poder.",
    "stamina": "Monstruosa. No parece sentir cansancio ni dolor real.",
    "battleIQ": "Juega con su presa de manera estúpida y excesivamente teatral, bailando y dejando aberturas por doquier.",
    "haxTags": [ "Durabilidad Absurda", "Tanque de Choque", "Poses Ridículas" ],
    "arsenal": {
      "basicAttacks": "Codazos pesados, golpes pélvicos, rodillazos crueles que rompen el cuello.",
      "superAttacks": [
        { "name": "Recoome Kick", "desc": "Una patada frontal capaz de romper todos los huesos de un guerrero Z y enterrarlo en el suelo.", "cost": "15% Ki" },
        { "name": "Recoome Mach Attack", "desc": "Una embestida letal brutal contra oponentes pequeños.", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Recoome Eraser Gun (Cañón Borrador)", "desc": "Carga energía por la boca realizando poses absurdas, hasta escupir un gigantesco rayo blanco que destruye cordilleras enteras sin perder su fuerza.", "cost": "50% Ki" }
      ],
      "passives": [
        { "name": "Cuerpo de Piedra", "desc": "Reduce enormemente el daño recibido. Ignora hematomas y heridas mortales temporales.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "recoome-base", "name": "Tanque Ginyu", "stats": "Nivel Planeta Grande. Musculoso extremo, pelirrojo con peinado de piña." } ],
    "feats": [
      "Vapuleó a Vegeta hasta dejarlo sollozando e inerte.",
      "Mantuvo su fuerza después de que Krillin lo atacara por sorpresa y Vegeta le volara parte de los dientes y el pelo.",
      "Se necesitó de Goku recién entrenado en gravedad x100 para noquearlo de un solo codazo al estómago."
    ],
    "psychology": "Un sádico infantil, trata el combate como un espectáculo teatral o lucha libre, divirtiéndose genuinamente lastimando a los demás.",
    "weaknesses": "Totalmente predecible, pierde tiempo haciendo poses ridículas antes de cada técnica especial, dejando aberturas garrafales (Goku y Krillin aprovecharon esto)."
  },
  // 10. BABIDI
  {
    "id": "babidi-saga-buu-330",
    "name": "Babidi",
    "alias": "El Hechicero Oscuro",
    "universe": "Dragon Ball Z",
    "saga": "Saga de Buu",
    "version": "Líder Hechicero",
    "tier": "Tier 7-B | Nivel Ciudad",
    "ap": "Nivel Ciudad (Poder Propio Mágico). Físicamente es más débil que un humano promedio, incapaz de defenderse de Piccolo con un solo dedo. Sin embargo, su poder radica en su hechicería cósmica: Puede hacer explotar a guerreros demonios inferiores o encerrar a Majin Buu usando su magia, y puede cambiar el entorno del combate al planeta que él desee.",
    "range": "Universal mediante telepatía y conjuros.",
    "speed": { "combat": "Humano Normal.", "reaction": "Lenta.", "travel": "Levitación / Teletransportación.", "attack": "Hechizos instantáneos." },
    "strength": { "striking": "Clase Humano.", "lifting": "Clase Humano (Aunque usa la mente)." },
    "durability": "Nivel Ciudad (Gracias a su Barrera Mágica). Sin ella, Piccolo lo cortó a la mitad como mantequilla.",
    "stamina": "Media.",
    "battleIQ": "Un cobarde, pero brillante creando trampas, manipulando emociones de terceros para poseerlos y usar su nave como escudo.",
    "haxTags": [ "Control Mental Oscuro (Sello Majin)", "Teletransportación de Escenarios (Paparapapa)", "Barrera Mágica Fuerte", "Telepatía Universal" ],
    "arsenal": {
      "basicAttacks": "Llorar y pedir a Buu que lo defienda.",
      "superAttacks": [
        { "name": "Barrera de Hechicero", "desc": "Un escudo de luz esférico que logró bloquear temporalmente el impacto residual de los ataques de Majin Vegeta.", "cost": "20% Ki Mágico" },
        { "name": "Magia Paparapapa", "desc": "Teletransporta a los combatientes y todo el escenario de batalla a un entorno ventajoso (Como el Planeta Oscuro u otro planeta de alta gravedad).", "cost": "30% Ki Mágico" }
      ],
      "ultimateAttacks": [
        { "name": "Posesión Majin (Sello de Maldad)", "desc": "Usa la maldad oculta en el corazón de un oponente para corromperlo, otorgándole un poder inmenso a cambio de control total sobre su mente (Falló en Vegeta, funcionó en Dabura y Spopovich).", "cost": "90% Ki Mágico" }
      ],
      "passives": [
        { "name": "Cobardía del Mago", "desc": "Siempre se sitúa en la retaguardia, forzando a sus sirvientes (Buu/Dabura) a absorber el 100% de los impactos si están presentes.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "babidi-base", "name": "Hechicero Majin", "stats": "Nivel Ciudad (Con Magia). Pequeño alienígena gris con capa naranja y ojos saltones." } ],
    "feats": [
      "Corrompió y controló a Dabura, el Rey del mundo Demonio.",
      "Sobrevivió (partido a la mitad) a los ataques y curó a Majin Buu repetidas veces.",
      "Encerró y revivió al Majin Buu original usando la energía robada."
    ],
    "psychology": "Megalomaniaco, llorón y ruin. Trata a Majin Buu como basura esclava y abusa verbalmente de él (lo cual le costó que Buu le reventara la cabeza).",
    "weaknesses": "Ninguna capacidad física, muere de un solo golpe físico sin su barrera. Su control sobre Buu era puramente por la amenaza del conjuro de encierro."
  },
  // 11. SPOPOVICH
  {
    "id": "spopovich-saga-buu-676",
    "name": "Spopovich",
    "alias": "El Esclavo Majin",
    "universe": "Dragon Ball Z",
    "saga": "Saga de Buu",
    "version": "Humano Majinizado",
    "tier": "Tier 8-A | Nivel Multi-Estructura a Ciudad",
    "ap": "Nivel Multi-Estructura. Un antiguo artista marcial humano mediocre que fue potenciado abismalmente por el sello de Babidi. Su cuerpo mutó ganando masa muscular y una resistencia al dolor demencial, ignorando el cuello roto provocado por Videl. Puede volar y lanzar ráfagas de ki letales.",
    "range": "Decenas de Metros.",
    "speed": { "combat": "Supersónica.", "reaction": "Supersónica.", "travel": "Supersónica.", "attack": "Ráfagas rápidas." },
    "strength": { "striking": "Clase Multi-Estructura (Casi mata a Videl a golpes lentos).", "lifting": "Clase Base Fuerte." },
    "durability": "Nivel Multi-Estructura (Zombi). Sobrevivió con el cuello torcido 180 grados girándolo de vuelta con las manos.",
    "stamina": "Inagotable por el efecto Zombi del sello Majin.",
    "battleIQ": "Bruto, machista y cruel. Torturó a Videl lentamente.",
    "haxTags": [ "Fisiología Zombi Majin (No siente dolor)", "Resiliencia Extrema Humana" ],
    "arsenal": {
      "basicAttacks": "Golpes pesados contundentes, rodillazos a la cara, pisar el cráneo del enemigo tirado.",
      "superAttacks": [
        { "name": "Crash Launcher", "desc": "Dispara una esfera amarilla de Ki desde la palma capaz de matar a un humano ordinario sin esfuerzo.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Tortura Majin (Asalto Brutal)", "desc": "Atrapa a oponentes débiles y los muele a golpes durante horas absorbiendo su energía (o torturándolos) sin que su barra de HP baje por el cansancio.", "cost": "20% Ki" }
      ],
      "passives": [
        { "name": "Anulación de Dolor", "desc": "Inmune al stun físico, rotura de cuellos o dislocación; sigue atacando ignorando traumas corporales severos.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "spopovich-majin", "name": "Sirviente Majin", "stats": "Nivel Multi-Estructura. Musculoso pálido, sin pelo, venas remarcadas y sello 'M'." } ],
    "feats": [
      "Derrotó y masacró a Videl (quien era mucho más técnica y ágil que él).",
      "Soportó la rotura de su cuello como si nada."
    ],
    "psychology": "Un sádico impulsado por el control de Babidi. Siente que es superior y busca venganza contra Mr. Satán torturando a su hija.",
    "weaknesses": "Lento, torpe. Fue destruido usando magia expansiva interna por el propio Babidi."
  },
  // 12. JEICE
  {
    "id": "jeice-saga-namek-726",
    "name": "Jeice",
    "alias": "El Cometa Rojo",
    "universe": "Dragon Ball Z",
    "saga": "Saga Namek",
    "version": "Fuerzas Especiales Ginyu",
    "tier": "Tier 5-B | Nivel Planeta Grande",
    "ap": "Nivel Planeta Grande. Con el mismo nivel de pelea aproximado que Recoome y Burter (40,000+), Jeice es un experto atacante energético de soporte y velocidad. Su Bola de Trituración demostró poder barrer grandes terrenos.",
    "range": "Planetario mediante Crasher Ball.",
    "speed": { "combat": "Relativista.", "reaction": "Relativista.", "travel": "Relativista.", "attack": "Veloz en ráfagas de Ki." },
    "strength": { "striking": "Clase Planetaria.", "lifting": "Clase Luna." },
    "durability": "Nivel Planetario. Huyó presa del pánico al ver a Burter caer.",
    "stamina": "Alta.",
    "battleIQ": "Cobarde sin Burter. Lucha confiando en la superioridad numérica de Ginyu.",
    "haxTags": [ "Compañerismo (Sinergia de Ginyu)" ],
    "arsenal": {
      "basicAttacks": "Golpes elegantes, uso de su ráfaga y poses excéntricas.",
      "superAttacks": [
        { "name": "Crasher Ball (Bola Trituradora)", "desc": "Crea una bola de energía roja brillante sobre su cabeza, emulando un remate de vóleibol, y la dispara como un meteorito.", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Purple Comet Crash", "desc": "Sinergia brutal junto a Burter disparando esferas rojas y azules combinadas.", "cost": "40% Ki (Con Burter)" }
      ],
      "passives": [
        { "name": "Vuelo Ágil", "desc": "Evasivo en el combate aéreo a distancia.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "jeice-base", "name": "Cometa Rojo", "stats": "Nivel Planeta Grande. Piel roja brillante, pelo blanco largo, arrogante." } ],
    "feats": [
      "Retuvo a Vegeta junto con Burter antes de la llegada de Goku.",
      "Soportó la humillación ante Goku y volvió con su capitán para que los salvara."
    ],
    "psychology": "Un cobarde que confía ciegamente en la reputación de su escuadrón. Se desespera cuando las matemáticas y niveles de poder (Scouter) se rompen.",
    "weaknesses": "Pánico escénico. Cuando Vegeta (Post-zenkai) lo enfrentó, Jeice no pudo acertar ni un solo golpe por puro terror y fue decapitado/asesinado cruelmente."
  }
];

const filePath = path.resolve(__dirname, '../src/data/characters.js');
let content = fs.readFileSync(filePath, 'utf8');

const prefix = 'export const INITIAL_CHARACTERS = ';
const currentList = eval(content.replace(prefix, ''));
console.log(`Current characters count: ${currentList.length}`);

let updatedCount = 0;
batch7Upgrades.forEach(upgrade => {
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

console.log(`Batch 7 Upgrade Complete. ${updatedCount} characters successfully enhanced.`);
