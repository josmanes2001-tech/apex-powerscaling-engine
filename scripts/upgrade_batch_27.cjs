const fs = require('fs');
const path = require('path');

const batch27Upgrades = [
  // 1. PICCOLO (SAGA SUPER)
  {
    "id": "piccolo-saga-super-dragon-ball-super-228",
    "name": "Piccolo (Saga Super)",
    "alias": "El Sabio Estratega Namekiano",
    "universe": "Dragon Ball Super",
    "saga": "Torneo del Poder / Saga de Moro",
    "version": "Pico de Entrenamiento (Pre-Deseo Shenron)",
    "tier": "Tier 3-A | Nivel Universal",
    "ap": "Nivel Universal. Tras un entrenamiento ininterrumpido con Gohan para restaurar su instinto marcial. En el Torneo del Poder y contra los prisioneros galácticos de Moro, Piccolo demostró un nivel de combate que rivalizaba con los guerreros divinos, utilizando su Makankosappo perforante cargado para atravesar defensas cósmicas.",
    "range": "Universal (Makankosappo Perforante).",
    "speed": { "combat": "MFTL+.", "reaction": "MFTL+.", "travel": "MFTL+.", "attack": "Perforación veloz." },
    "strength": { "striking": "Clase Universal.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Universal. Regeneración Namekiana mejorada.",
    "stamina": "Muy Alta.",
    "battleIQ": "El mayor cerebro táctico de los Guerreros Z en el campo de batalla.",
    "haxTags": [ "Makankosappo Perforador", "Brazos Elásticos Gigantes", "Regeneración Namekiana", "Telepatía Fina" ],
    "arsenal": {
      "basicAttacks": "Golpes marciales calculados, estiramiento de extremidades.",
      "superAttacks": [
        { "name": "Granada de Luz (Light Grenade)", "desc": "Dispara una esfera concentrada con ambas manos que detona en una onda masiva.", "cost": "15% Ki" },
        { "name": "Makankosappo Continuo", "desc": "Rayo en espiral que perfora defensas y barreras de energía sin importar su grosor.", "cost": "25% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Makankosappo Combinado con Gohan", "desc": "Carga su técnica al 200% mientras Gohan retiene al enemigo para atravesar a dos objetivos simultáneamente.", "cost": "50% Ki" }
      ],
      "passives": [
        { "name": "Mente Táctica Namekiana", "desc": "Analiza las debilidades del oponente en 2 turnos, otorgando bonificación de acierto a sus aliados.", "cost": "Buff Táctico" }
      ]
    },
    "forms": [ 
      { "id": "piccolo-dbs-base", "name": "Piccolo (DBS)", "stats": "Nivel Universal. Capa y turbante blanco pesados, dogi morado con faja azul." }
    ],
    "feats": [ "Ayudó a Gohan a despertar su estado Definitivo antes del Torneo del Poder.", "Derrotó a los Namekianos del Universo 6 (Saonel y Pirina) con su Makankosappo." ],
    "psychology": "Un maestro riguroso, leal y paciente que actúa como el pilar de estabilidad y sabiduría del equipo.",
    "weaknesses": "Regenerar miembros consume grandes porciones de su energía vital."
  },
  // 2. DENDE
  {
    "id": "dende-saga-namek-100",
    "name": "Dende",
    "alias": "El Dios de la Tierra / El Niño Sanador",
    "universe": "Dragon Ball (Z / Super)",
    "saga": "Saga Namek / Saga Cell / DBS",
    "version": "Kami-sama de la Tierra",
    "tier": "Tier 9-A Físico | Tier 2-C Hax de Creación de Esferas",
    "ap": "Nivel Muro Físico / Nivel Multiversal (Creación y Mejora de Shenron). El joven Namekiano del Clan Dragón que asumió el puesto de Dios de la Tierra. Mejoró a Shenron permitiendo 3 deseos y conservando a los revividos. Posee la habilidad mágica de curar cualquier herida mortal y restaurar el 100% del Ki al instante con solo tocar al objetivo.",
    "range": "Planetario (Visión y Telepatía Divina).",
    "speed": { "combat": "Humano.", "reaction": "Atleta.", "travel": "Vuelo Namekiano.", "attack": "Curación al tacto." },
    "strength": { "striking": "Clase Humano.", "lifting": "Clase Niño." },
    "durability": "Nivel Muro (Físicamente frágil).",
    "stamina": "Muy Alta (Magia del Clan Dragón).",
    "battleIQ": "No combatiente; actúa como soporte médico milagroso de primera línea.",
    "haxTags": [ "Curación Milagrosa al 100%", "Creación y Mantenimiento de las Dragon Balls", "Percepción Divina del Ki Cósmico" ],
    "arsenal": {
      "basicAttacks": "Vuelo y evasión defensiva.",
      "superAttacks": [
        { "name": "Sanación del Clan Dragón", "desc": "Pone las manos sobre un aliado caído y restaura instantáneamente su HP, extremidades perdidas y Ki al 100%.", "cost": "20% Magia" }
      ],
      "ultimateAttacks": [
        { "name": "Activación de Shenron de la Tierra", "desc": "Invoca al dragón sagrado otorgando 3 deseos para revivir aliados o conceder buffs cósmicos.", "cost": "7 Esferas del Dragón" }
      ],
      "passives": [
        { "name": "Soporte Sagrado", "desc": "Cualquier aliado que luche junto a él recibe curación pasiva tras cada ronda.", "cost": "Aura de Soporte" }
      ]
    },
    "forms": [ 
      { "id": "dende-namek", "name": "Dende Niño (Namek)", "stats": "Nivel Muro. Túnica blanca namekiana con chaleco marrón." },
      { "id": "dende-kami", "name": "Dende Dios de la Tierra", "stats": "Nivel Muro / Soporte Supremo. Túnica ceremonial de Kami-sama con bastón sagrado." }
    ],
    "feats": [ "Curó a Vegeta, Gohan, Krilin y Piccolo repetidas veces durante la batalla contra Freezer.", "Recreó las Dragon Balls de la Tierra tras la fusión de Kami y Piccolo." ],
    "psychology": "Un chico pacífico y noble que detesta la violencia pero arriesga su vida en el campo de batalla para curar a sus amigos.",
    "weaknesses": "Físicamente vulnerable a ataques directos si sus protectores son derrotados."
  },
  // 3. GRAN PATRIARCA GURU
  {
    "id": "gran-patriarca-guru-saga-namek-183",
    "name": "Gran Patriarca Guru",
    "alias": "El Padre de la Raza Namekiana / Saichōrō",
    "universe": "Dragon Ball Z",
    "saga": "Saga de Namek",
    "version": "Patriarca del Clan Dragón",
    "tier": "Tier 5-B | Nivel Planeta (Hax Desbloqueador de Potencial)",
    "ap": "Nivel Planeta (Poder Latente / Magia). El único superviviente adulto de la catástrofe climática de Namek y creador de Porunga. Posee la habilidad mística de posar su mano sobre la cabeza de cualquier ser vivo y liberar todo su poder oculto latente (como hizo con Gohan y Krilin, multiplicando su Ki exponencialmente).",
    "range": "Planetario (Enlace Vital con Porunga).",
    "speed": { "combat": "Inmóvil (Sedentario).", "reaction": "Relativista (Mental).", "travel": "Nula.", "attack": "Desbloqueo de potencial al tacto." },
    "strength": { "striking": "Inmóvil.", "lifting": "Clase Masiva." },
    "durability": "Nivel Planeta (Resistencia mística).",
    "stamina": "Muy Baja por ancianidad extrema y enfermedad terminal.",
    "battleIQ": "Sabiduría y telepatía ancestral de cientos de años.",
    "haxTags": [ "Desbloqueo de Potencial Oculto (Multiplicador de Ki)", "Creación de Porunga (Esferas Gigantes de Namek)", "Telepatía Planetaria" ],
    "arsenal": {
      "basicAttacks": "Lectura de mentes y recuerdos al apoyar la mano.",
      "superAttacks": [
        { "name": "Despertar del Potencial Latente", "desc": "Coloca su mano en la cabeza del objetivo desatando toda la fuerza oculta de su ADN (Multiplicó el poder de Gohan y Krilin decenas de veces).", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Invocación del Dragón Porunga", "desc": "Invoca al Dios Dragón de los Deseos de Namek capaz de revivir personas múltiples veces y transportar ejércitos enteros por el cosmos.", "cost": "7 Super Dragon Balls" }
      ],
      "passives": [
        { "name": "Vínculo con Porunga", "desc": "Mientras el Patriarca respire, las Esferas de Namek se mantienen activas concediendo 3 deseos.", "cost": "Vínculo de Vida" }
      ]
    },
    "forms": [ 
      { "id": "guru-base", "name": "Gran Patriarca", "stats": "Nivel Planeta. Anciano namekiano colosal sentado en su trono de piedra sagrado." }
    ],
    "feats": [ "Dio origen a toda la generación moderna de Namekianos.", "Desbloqueó el poder de Gohan y Krilin permitiéndoles combatir a las Fuerzas Ginyu." ],
    "psychology": "Un padre bondadoso y piadoso que carga con el dolor de la extinción de sus hermanos y ama a todos sus hijos por igual.",
    "weaknesses": "Físicamente inmóvil y con una esperanza de vida que expiró por vejez y tristeza."
  },
  // 4. ANCIANO KAIO-SHIN
  {
    "id": "anciano-kaio-shin-saga-buu-404",
    "name": "Anciano Kaio-shin (Ro Kaio-shin)",
    "alias": "El Dios de Hace 15 Generaciones / El Desbloqueador Definitivo",
    "universe": "Dragon Ball Z",
    "saga": "Saga de Buu",
    "version": "Liberado de la Espada Z",
    "tier": "Tier 4-C a 3-C | Nivel Estrella a Galaxia (Hax Ritual)",
    "ap": "Nivel Galaxia (Ritual Definitivo). El antiguo Kaio-shin atrapado por Beerus dentro de la Espada Z durante millones de años. Fusionado accidentalmente con una bruja vieja mediante los Pothala, obtuvo magia mística que supera los límites biológicos. Su ritual de 25 horas desbloqueó el 'Estado Definitivo' (Ultimate Gohan), elevándolo por encima del SSJ3 sin gastar energía.",
    "range": "Universal (Visión Cósmica con Bola de Cristal).",
    "speed": { "combat": "Relativista.", "reaction": "Relativista.", "travel": "Kai Kai.", "attack": "Magia ritual." },
    "strength": { "striking": "Clase Estrella Enana.", "lifting": "Clase Dios." },
    "durability": "Nivel Estrella Enana. Inmortalidad biológica de deidad.",
    "stamina": "Muy Alta (Puede realizar rituales de baile durante días seguidos).",
    "battleIQ": "Millones de años de sabiduría divina y conocimiento de artefactos prohibidos (Pendientes Pothala).",
    "haxTags": [ "Ritual del Poder Definitivo (Ultimate / Místico)", "Pendientes Pothala (Fusión Divina)", "Cesión de Fuerza Vital (Resurrección de Goku)" ],
    "arsenal": {
      "basicAttacks": "Regaños con el bastón, bailes extraños.",
      "superAttacks": [
        { "name": "Bola de Cristal del Vidente", "desc": "Observa cualquier suceso en cualquier parte del macrocosmos en tiempo real.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Ritual de Desbloqueo Definitivo (25 Horas)", "desc": "Baila alrededor del objetivo y medita, rompiendo el techo de poder del guerrero y desbloqueando su estado Definitivo más allá de sus límites naturales.", "cost": "Ritual Sagrado" },
        { "name": "Cesión de Vida Divina", "desc": "Entrega su propia vida y aureola a un mortal caído (como hizo con Goku) para que regrese a la vida físicamente al instante.", "cost": "Sacrificio de Vida" }
      ],
      "passives": [
        { "name": "Sabiduría de los Pothala", "desc": "Conoce los secretos de la fusión con pendientes Pothala y las leyes de los Dioses de la Creación.", "cost": "Conocimiento Cósmico" }
      ]
    },
    "forms": [ 
      { "id": "anciano-kaioshin", "name": "Anciano Kaio-shin", "stats": "Nivel Estrella Enana. Aspecto arrugado con piel púrpura, mohawk blanco y túnica azul con pendientes dorados." }
    ],
    "feats": [ "Creó a Gohan Definitivo (Buu Saga), el guerrero no fusionado más fuerte de todo DBZ.", "Le entregó su vida a Goku para que pudiera descender a la Tierra a pelear con Buu." ],
    "psychology": "Un viejo pervertido y cascarrabias aficionado a las revistas para adultos, pero con una sabiduría cósmica y sentido del deber divino insuperables.",
    "weaknesses": "Físicamente frágil frente a amenazas de nivel Buu si combate cuerpo a cuerpo."
  },
  // 5. PARAGUS (Z)
  {
    "id": "paragus-pel-culas-dbz-toei-728",
    "name": "Paragus (Z)",
    "alias": "El Comandante Saiyajin / El Padre de Broly",
    "universe": "Dragon Ball Z (Toei)",
    "saga": "Película 8: El Poder Invencible",
    "version": "Líder Militar con Control Remoto",
    "tier": "Tier 5-B | Nivel Planeta",
    "ap": "Nivel Planeta (4,000 Ki aprox). Un aristócrata saiyajin de clase alta que sobrevivió a la purga de Freezer gracias al poder latente de su hijo Broly. Diseñó un dispositivo de control mental con una diadema dorada para suprimir la furia psicópata de Broly y usarlo como arma de conquista galáctica.",
    "range": "Físico y Control Remoto a distancia.",
    "speed": { "combat": "Relativista.", "reaction": "Relativista.", "travel": "En Naves Espaciales.", "attack": "Disparos de Ki." },
    "strength": { "striking": "Clase Planeta.", "lifting": "Clase Montaña." },
    "durability": "Nivel Planeta. Murió aplastado dentro de su cápsula espacial por el propio Broly.",
    "stamina": "Media.",
    "battleIQ": "Maquiavélico y paciente; orquestó un plan de décadas atrayendo a Vegeta a un planeta condenado al choque con un cometa.",
    "haxTags": [ "Diadema de Control Mental de Broly", "Estratega Galáctico", "Rastreador Ocular Cibernético" ],
    "arsenal": {
      "basicAttacks": "Golpes militares saiyajin, ráfagas de Ki desde los dedos.",
      "superAttacks": [
        { "name": "Deadly Slicer", "desc": "Ráfaga cortante carmesí lanzada desde la palma.", "cost": "10% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Activación del Anillo de Control Mental", "desc": "Usa su control remoto de muñeca para emitir ondas que suprimen la voluntad de Broly forzándolo a calmarse o atacar al objetivo designado.", "cost": "Control Remoto" }
      ],
      "passives": [
        { "name": "Venganza Contra la Realeza", "desc": "Su odio hacia la línea de sangre del Rey Vegeta le otorga determinación táctica absoluta.", "cost": "Pasivo psicológico" }
      ]
    },
    "forms": [ 
      { "id": "paragus-base", "name": "Paragus", "stats": "Nivel Planeta. Armadura saiyajin blanca y dorada con capa roja, cicatriz en el ojo izquierdo cubierto por un parche cibernético y barba blanca." }
    ],
    "feats": [ "Sometió y controló al Super Saiyajin Legendario durante años.", "Creó el 'Nuevo Planeta Vegeta' engañando a toda la élite de los Guerreros Z." ],
    "psychology": "Un manipulador frío y vengativo que veía a su propio hijo como un arma de destrucción descartable.",
    "weaknesses": "Si el dispositivo de control mental se rompe o la furia de Broly lo sobrepasa, queda completamente indefenso ante su fuerza."
  },
  // 6. ANDROIDE 18 (FUTURO)
  {
    "id": "androide-18-futuro-l-nea-temporal-futura-419",
    "name": "Androide 18 (Línea del Futuro)",
    "alias": "La Asesina Cibernética del Futuro",
    "universe": "Dragon Ball Z",
    "saga": "Un Futuro Diferente: Gohan y Trunks",
    "version": "Línea Temporal Apocalíptica",
    "tier": "Tier 4-C a 4-B | Nivel Estrella Enana a Sistema Solar Menor",
    "ap": "Nivel Estrella Enana (Alto). La contraparte despiadada del futuro alternativo de Trunks. A diferencia de la 18 de la línea del presente, esta versión carece de toda moral o compasión humana. Asesinó a Krilin, Ten Shin Han, Yamcha, Chaos y Vegeta, y junto a 17 torturó y destruyó a la humanidad durante más de 13 años por pura diversión sádica.",
    "range": "Planetario.",
    "speed": { "combat": "FTL+.", "reaction": "FTL+.", "travel": "FTL.", "attack": "Rápida e incesante." },
    "strength": { "striking": "Clase Estrella Enana.", "lifting": "Clase 100+ Toneladas." },
    "durability": "Nivel Estrella Enana. Inmune al dolor y al desgaste biológico.",
    "stamina": "Infinita Absoluta (Reactor de energía eterna del Dr. Gero).",
    "battleIQ": "Sádica y cruel; juega con sus presas atacando en coordinación letal con Androide 17.",
    "haxTags": [ "Energía Infinita Sin Desgaste", "Invisibilidad a la Detección de Ki", "Barrera Androide (Android Barrier)" ],
    "arsenal": {
      "basicAttacks": "Patadas fractura-brazos (como le hizo a Vegeta), ráfagas cortas de dedos.",
      "superAttacks": [
        { "name": "Bala Destructora (Power Blitz)", "desc": "Dispara esferas rosas de Ki de alta velocidad desde la palma.", "cost": "0% Ki" },
        { "name": "Barrera de Energía Androide", "desc": "Crea una cúpula protectora esférica que desvía ataques de Ki masivos.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Sadistic Dance (Danza Sádica Combinada con 17)", "desc": "Rodea al oponente con Androide 17, acribillándolo a quemarropa con cientos de ráfagas simultáneas hasta desintegrarlo (Como asesinaron a Gohan del Futuro bajo la lluvia).", "cost": "Ataque Combinado" }
      ],
      "passives": [
        { "name": "Cero Emisión de Ki", "desc": "Los rastreadores y sentidos extrasensoriales no pueden detectarla.", "cost": "Sigilo Pasivo" }
      ]
    },
    "forms": [ 
      { "id": "18-futuro", "name": "Androide 18 (Futuro)", "stats": "Nivel Estrella Enana. Chaleco vaquero con logo Red Ribbon, falda de mezclilla, mirada psicópata fría." }
    ],
    "feats": [ "Masacró a los Guerreros Z en el futuro.", "Asesinó a Gohan del Futuro en un 2v1 bajo la lluvia torrencial." ],
    "psychology": "Una psicópata aburrida que destruye ciudades enteras como si fuera un videojuego de compras.",
    "weaknesses": "Poder estático: al no entrenar, fue superada y desintegrada fácilmente por Trunks del Futuro al regresar del pasado."
  },
  // 7. MAI (FUTURO)
  {
    "id": "mai-l-nea-temporal-futura-446",
    "name": "Mai (Línea del Futuro)",
    "alias": "La Líder de la Resistencia Humana",
    "universe": "Dragon Ball Super",
    "saga": "Saga de Goku Black",
    "version": "Líder Militar de la Resistencia",
    "tier": "Tier 9-A | Nivel Habitación/Muro con Armamento Especial",
    "ap": "Nivel Muro (Armas Balísticas de Francotirador). La valiente comandante de los últimos supervivientes de la Tierra en el futuro apocalíptico de Trunks. Armada con rifles de francotirador con balas de gas lacrimógeno, cápsulas de humo y proyectiles perforantes de alta energía, lidera emboscadas tácticas contra Goku Black y Zamasu.",
    "range": "Cientos de metros (Rifle de Francotirador).",
    "speed": { "combat": "Humano Atlético.", "reaction": "Humano Pico.", "travel": "En vehículos militares.", "attack": "Disparos precisos." },
    "strength": { "striking": "Clase Humano.", "lifting": "Clase Humano." },
    "durability": "Nivel Humano. Sobrevivió a explosiones residuales y escombros.",
    "stamina": "Muy Alta por temple militar de supervivencia.",
    "battleIQ": "Estratega de guerrilla y supervivencia urbana en un mundo destruido por dioses.",
    "haxTags": [ "Liderazgo Militar de Guerrilla", "Balas de Luz y Fumígenas Antidivinas", "Vínculo Heroico con Trunks" ],
    "arsenal": {
      "basicAttacks": "Disparos con escopetas, pistolas automáticas y combate militar.",
      "superAttacks": [
        { "name": "Granada Fumígena de Distracción", "desc": "Arroja cápsulas de humo denso para cegar a deidades como Goku Black y facilitar rescates.", "cost": "Objeto" }
      ],
      "ultimateAttacks": [
        { "name": "Disparo de Francotirador de Alta Potencia", "desc": "Dispara una bala perforadora de tungsteno directo al pendiente Pothala o rostro del enemigo a kilómetros de distancia.", "cost": "Munición Especial" }
      ],
      "passives": [
        { "name": "Esperanza de la Resistencia", "desc": "Aumenta la moral y la fuerza de voluntad de Trunks del Futuro cuando está presente en combate.", "cost": "Buff de Apoyo" }
      ]
    },
    "forms": [ 
      { "id": "mai-futuro", "name": "Mai del Futuro", "stats": "Nivel Humano / Muro. Gorro militar verde, gabardina verde oliva con parches de la resistencia, rifle de francotirador a la espalda." }
    ],
    "feats": [ "Lideró a los supervivientes terrestres durante el asedio de Goku Black.", "Rescató a Trunks del Futuro arriesgando su propia vida frente a Black." ],
    "psychology": "Una líder militar abnegada, valiente y leal hasta la muerte a su pueblo y a Trunks.",
    "weaknesses": "Físicamente es una humana ordinaria sin Ki sobrehumano."
  },
  // 8. ROCKY WHITE ZEPPELI
  {
    "id": "rocky-white-zeppeli-linaje-zeppeli-915",
    "name": "Rocky White Zeppeli",
    "alias": "El Heredero del Hamon / El Boxeador del Destino",
    "universe": "JoJo's Bizarre Adventure (Linaje Zeppeli)",
    "saga": "Linaje Zeppeli / Universo Expandido",
    "version": "Pico de Maestría (Hamon + Stand Despertado)",
    "tier": "Tier 8-A a 7-B | Nivel Multi-Bloque a Ciudad",
    "ap": "Nivel Ciudad (Overdrive Boxeador + Stand). El descendiente definitivo del noble clan Zeppeli. Combina la respiración del Hamon solar con el boxeo callejero de peso pesado y un Stand de combate cerrado de alta velocidad. Sus puñetazos transmiten ondas de energía solar que desintegran la carne de vampiros y alteran la vibración molecular del rival.",
    "range": "Físico y Ondas de Hamon a través de superficies.",
    "speed": { "combat": "Masivamente FTL+.", "reaction": "Masivamente FTL+.", "travel": "Atlética.", "attack": "Ráfaga de ganchos Overdrive." },
    "strength": { "striking": "Clase Ciudad con Hamon concentrado.", "lifting": "Clase 50+ Toneladas." },
    "durability": "Nivel Ciudad (Reforzado con respiración de Hamon).",
    "stamina": "Muy Alta mientras mantenga el ritmo respiratorio.",
    "battleIQ": "Boxeador profesional y estratega del Hamon; utiliza el terreno y líquidos para transmitir energía.",
    "haxTags": [ "Hamon Solar (Energía de Ondas Vitales)", "Stand de Combate Despertado", "Sunlight Yellow Overdrive de Boxeo", "Destino Trágico del Clan Zeppeli" ],
    "arsenal": {
      "basicAttacks": "Jabs, ganchos al hígado y uppers de boxeo cargados con chispas de Hamon.",
      "superAttacks": [
        { "name": "Zeppeli Cross Counter", "desc": "Recibe un golpe parcial para conectar un derechazo mortal imbuido en Hamon puro.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Ultimate Zeppeli Overdrive: Knockout Solar", "desc": "Canaliza toda la energía de su respiración en una combinación de 10 golpes fulminantes que desintegran a seres oscuros en una explosión de luz dorada.", "cost": "100% Hamon" }
      ],
      "passives": [
        { "name": "El Sacrificio de los Zeppeli", "desc": "Si cae en combate, transfiere todo su Hamon y fuerza vital restante a su aliado más cercano, sanándolo y duplicando sus estadísticas.", "cost": "Legado Final" }
      ]
    },
    "forms": [ 
      { "id": "rocky-base", "name": "Rocky Zeppeli", "stats": "Nivel Multi-Bloque. Físico atlético de boxeador, sombrero a cuadros clásico de los Zeppeli y vendajes en las manos." }
    ],
    "feats": [ "Dominó la respiración de Hamon y despertó su propio Stand en tiempo récord.", "Mantuvo vivo el honor y la llama del sacrificio heroico de la familia Zeppeli." ],
    "psychology": "Valiente, leal, apasionado por el boxeo y dispuesto a dar su vida por sus hermanos de armas sin dudar.",
    "weaknesses": "Si su respiración se ve interrumpida (asfixia o daño en la tráquea), no puede generar Hamon."
  },
  // 9. JOSH (OC HYBRID)
  {
    "id": "josh-oc-hybrid-001",
    "name": "Josh",
    "alias": "El Híbrido Multiversal / Portador del Nexo",
    "universe": "Universo Híbrido (APEX Original)",
    "saga": "Guerra de las Dimensiones",
    "version": "Forma Despertada del Nexo",
    "tier": "Tier 2-C | Nivel Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. Un guerrero híbrido que canaliza simultáneamente el Ki de los Saiyans, la Energía Maldita de los hechiceros y el poder de los Stands. Su técnica 'Nexus Burst' fusiona el Kamehameha con la energía de un Destello Negro (Black Flash) concentrado a escala cósmica.",
    "range": "Multiversal.",
    "speed": { "combat": "Inconmensurable.", "reaction": "Inconmensurable.", "travel": "MFTL+.", "attack": "Golpes con Black Flash continuo." },
    "strength": { "striking": "Clase Multiversal Bajo.", "lifting": "Clase Universal." },
    "durability": "Nivel Multiversal Bajo con Técnica Maldita Inversa y Ki Divino.",
    "stamina": "Infinita en Modo Nexo.",
    "battleIQ": "Estratega multidisciplinario que combina las reglas de diferentes sistemas de poder.",
    "haxTags": [ "Fusión de Ki y Energía Maldita", "Destello Negro Cuántico (Black Flash)", "Adaptación Dimensional Cruzada" ],
    "arsenal": {
      "basicAttacks": "Combos marciales que combinan artes de Jujutsu con velocidad de Ki.",
      "superAttacks": [
        { "name": "Black Flash Kamehameha", "desc": "Carga un rayo de energía azul oscuro que detona con el impacto crítico del Destello Negro multiplicado a la potencia 2.5.", "cost": "25% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Expansión del Nexo Multiversal", "desc": "Despliega un dominio dimensional donde todos los sistemas de poder enemigos (Nen, Ki, Stands) se armonizan y quedan bajo su control.", "cost": "50% Energía" }
      ],
      "passives": [
        { "name": "Ecualización Universal Activa", "desc": "Inmune a ser anulado por reglas específicas de un solo universo.", "cost": "Pasivo Híbrido" }
      ]
    },
    "forms": [ 
      { "id": "josh-base", "name": "Josh (Forma Nexo)", "stats": "Nivel Multiversal Bajo. Aura combinada azul y negra con chispas carmesí de Destello Negro." }
    ],
    "feats": [ "Armonizó tres sistemas de poder dimensionalmente incompatibles en un solo cuerpo.", "Derrotó a invasores dimensionales en la brecha del multiverso." ],
    "psychology": "Curioso, adaptable y con una pasión inagotable por descubrir los límites del combate multiversal.",
    "weaknesses": "Requiere concentración mental constante para mantener el balance entre Ki y Energía Maldita."
  }
];

const filePath = path.resolve(__dirname, '../src/data/characters.js');
let content = fs.readFileSync(filePath, 'utf8');

const prefix = 'export const INITIAL_CHARACTERS = ';
let currentList = eval(content.replace(prefix, ''));
console.log(`Current characters count: ${currentList.length}`);

let updatedCount = 0;
batch27Upgrades.forEach(upgrade => {
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

console.log(`Batch 27 Upgrade Complete. ${updatedCount} characters successfully enhanced.`);
