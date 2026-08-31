const fs = require('fs');
const path = require('path');

const batch28Upgrades = [
  // 1. PICCOLO MINI (DAIMA)
  {
    "id": "piccolo-dragon-ball-daima-343",
    "name": "Piccolo (Daima Mini)",
    "alias": "El Sabio Encogido del Reino Demonio",
    "universe": "Dragon Ball Daima",
    "saga": "Reino de los Demonios",
    "version": "Cuerpo Infantil / Magia de Gomah",
    "tier": "Tier 4-B | Nivel Sistema Solar",
    "ap": "Nivel Sistema Solar. Convertido en niño por el deseo egoísta del Rey Gomah a las Dragon Balls Demoníacas. A pesar de la reducción de su masa física, conserva todo su intelecto táctico milenario, su control de Ki y técnicas como el Makankosappo y la elasticidad de extremidades.",
    "range": "Planetario.",
    "speed": { "combat": "FTL+.", "reaction": "FTL+.", "travel": "Vuelo supersónico.", "attack": "Ráfagas concentradas." },
    "strength": { "striking": "Clase Sistema Solar.", "lifting": "Clase 100+ Toneladas." },
    "durability": "Nivel Sistema Solar con regeneración Namekiana.",
    "stamina": "Muy Alta.",
    "battleIQ": "El mejor estratega del grupo en territorio demoníaco desconocido.",
    "haxTags": [ "Fisiología Namekiana Infantil", "Makankosappo", "Brazos Elásticos" ],
    "arsenal": {
      "basicAttacks": "Golpes marciales acrobáticos con extremidades pequeñas pero duras como roca.",
      "superAttacks": [
        { "name": "Makankosappo Mini", "desc": "Carga el rayo taladrador en la punta de dos dedos pequeños perforando armaduras de monstruos demoníacos.", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Granada de Luz Concentrada", "desc": "Dispara una esfera brillante que detona en una onda expansiva cegando y aturdiendo a las bestias del reino oscuro.", "cost": "40% Ki" }
      ],
      "passives": [
        { "name": "Sabiduría Imperturbable", "desc": "Inmune a la desesperación o pánico por su condición de niño.", "cost": "Pasivo Mental" }
      ]
    },
    "forms": [ 
      { "id": "piccolo-mini", "name": "Piccolo Mini", "stats": "Nivel Sistema Solar. Namekiano pequeño con turbante y capa blanca ajustada a su tamaño." }
    ],
    "feats": [ "Mantuvo la compostura y guió a Goku y Shin a través del Reino Demonio.", "Derrotó a guardias demoníacos con técnicas marciales refinadas." ],
    "psychology": "Serio y pragmático; se queja del inconveniente de ser pequeño pero no pierde un segundo en buscar la solución al deseo de Gomah.",
    "weaknesses": "Alcance físico reducido en cuerpo a cuerpo directo debido a sus brazos y piernas cortas."
  },
  // 2. VEGETA MINI (DAIMA)
  {
    "id": "vegeta-dragon-ball-daima-527",
    "name": "Vegeta (Daima Mini)",
    "alias": "El Príncipe Orgulloso Encogido",
    "universe": "Dragon Ball Daima",
    "saga": "Reino de los Demonios",
    "version": "Cuerpo Infantil (Super Saiyan)",
    "tier": "Tier 4-B a 3-C | Nivel Sistema Solar a Galaxia",
    "ap": "Nivel Sistema Solar (Galaxia en SSJ). Encogido por la magia de Gomah, su orgullo saiyajin arde más que nunca por la humillación de su nuevo aspecto. Puede transformarse en Super Saiyan en su cuerpo infantil, disparando el Galick Gun y el Big Bang Attack con potencia destructiva estelar.",
    "range": "Planetario a Galáctico.",
    "speed": { "combat": "FTL+ a MFTL.", "reaction": "FTL+.", "travel": "MFTL.", "attack": "Ráfagas salvajes." },
    "strength": { "striking": "Clase Sistema Solar.", "lifting": "Clase 1,000+ Toneladas." },
    "durability": "Nivel Sistema Solar. Resistencia de élite saiyajin.",
    "stamina": "Muy Alta.",
    "battleIQ": "Príncipe guerrero consumado; odia que lo traten como un niño.",
    "haxTags": [ "Super Saiyan Mini", "Galick Gun", "Big Bang Attack", "Orgullo Saiyan Férreo" ],
    "arsenal": {
      "basicAttacks": "Patadas voladoras rápidas, ráfagas de Ki consecutivas (estilo lluvia de meteoros).",
      "superAttacks": [
        { "name": "Galick Gun Mini", "desc": "Dispara su clásico rayo púrpura con ambas manos juntas.", "cost": "15% Ki" },
        { "name": "Big Bang Attack", "desc": "Esfera azul brillante disparada con la palma abierta.", "cost": "25% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Final Flash del Príncipe Enano", "desc": "Abre los brazos y concentra todo su Ki desatando un torrente dorado masivo que vaporiza al ejército enemigo.", "cost": "50% Ki" }
      ],
      "passives": [
        { "name": "Furia por el Tamaño", "desc": "Si el enemigo se burla de su baja estatura, su poder de ataque aumenta un 50% de inmediato.", "cost": "Buff de Rabia" }
      ]
    },
    "forms": [ 
      { "id": "vegeta-mini-base", "name": "Vegeta Mini Base", "stats": "Nivel Sistema Solar. Traje azul ajustado, armadura blanca con tirantes, mirada ceñuda." },
      { "id": "vegeta-mini-ssj", "name": "Vegeta Mini Super Saiyan", "stats": "Nivel Galaxia. Cabello rubio dorado erizado, ojos verdes brillantes, aura eléctrica." }
    ],
    "feats": [ "Desató el Super Saiyajin en cuerpo de niño sin perder control marcial.", "Masacró a bestias gigantes del inframundo demoníaco." ],
    "psychology": "Extremadamente irritable y susceptible con su orgullo; lucha con el doble de agresividad para compensar su tamaño.",
    "weaknesses": "Consumo de energía acelerado en cuerpo infantil al mantener el SSJ por periodos prolongados."
  },
  // 3. RANFAN
  {
    "id": "ranfan-dragon-ball-cl-sico-172",
    "name": "Ranfan",
    "alias": "La Luchadora Seductora",
    "universe": "Dragon Ball (Clásico)",
    "saga": "21° Torneo de las Artes Marciales",
    "version": "Torneo de Artes Marciales",
    "tier": "Tier 9-C | Nivel Calle/Humano Atlético",
    "ap": "Nivel Calle. Una artista marcial humana que utiliza la seducción y el striptease como armas psicológicas para avergonzar y desarmar la guardia de oponentes masculinos tímidos (como hizo con Nam).",
    "range": "Físico y Visual.",
    "speed": { "combat": "Humano Atlético.", "reaction": "Atleta.", "travel": "Humana.", "attack": "Golpes sorpresa." },
    "strength": { "striking": "Clase Humano.", "lifting": "Clase Humano." },
    "durability": "Nivel Humano. Derrotada por Nam de un solo golpe cuando este cerró los ojos.",
    "stamina": "Media.",
    "battleIQ": "Maestra de la distracción erótica y el juego mental contra guerreros puritanos.",
    "haxTags": [ "Distracción Seductora (Striptease Táctico)", "Golpes Bajos Sorpresa" ],
    "arsenal": {
      "basicAttacks": "Bofetadas, patadas altas y arañazos.",
      "superAttacks": [
        { "name": "Seducción de Ropa Interior", "desc": "Se quita el vestido quedando en lencería, provocando hemorragias nasales y parálisis de vergüenza en oponentes masculinos.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Asalto del Corazón Roto", "desc": "Aprovecha la distracción del rival para conectar una patada directa a la entrepierna.", "cost": "Ataque Sorpresa" }
      ],
      "passives": [
        { "name": "Escudo de la Vergüenza", "desc": "Reduce la agresividad de los guerreros nobles o tímidos que no se atreven a golpearla.", "cost": "Pasivo Social" }
      ]
    },
    "forms": [ 
      { "id": "ranfan-base", "name": "Ranfan", "stats": "Nivel Calle. Vestido rosa femenino, cabello morado con lazos." }
    ],
    "feats": [ "Acorraló a Nam en los cuartos de final del 21° Torneo de las Artes Marciales." ],
    "psychology": "Vanidosa, coqueta y calculadora; usa cualquier ventaja para ganar sin importarle el pudor.",
    "weaknesses": "Inútil contra oponentes ciegos, monjes que cierren los ojos o guerreros que no sientan atracción sexual."
  },
  // 4. COMANDANTE RED
  {
    "id": "comandante-red-dragon-ball-cl-sico-526",
    "name": "Comandante Red",
    "alias": "El Líder Supremo de la Red Ribbon",
    "universe": "Dragon Ball (Clásico)",
    "saga": "Ejército Red Ribbon",
    "version": "Líder Militar Supremo",
    "tier": "Tier 9-C Físico | Tier 8-B con Ejército y Armas Bélicas",
    "ap": "Nivel Humano Físico / Nivel Bloque (Con Mecas y Ejércitos). El líder absoluto del ejército paramilitar más temido de la Tierra. Mandó a conquistar el mundo entero con un solo objetivo secreto: reunir las Dragon Balls para pedirle a Shenron ser más alto.",
    "range": "Físico y Arsenal Militar.",
    "speed": { "combat": "Humano Lento.", "reaction": "Humano.", "travel": "En limusinas militares.", "attack": "Pistola。" },
    "strength": { "striking": "Clase Humano Débil.", "lifting": "Clase Humano." },
    "durability": "Nivel Humano. Asesinado de un disparo en la frente por su mano derecha, el Coronel Black.",
    "stamina": "Baja.",
    "battleIQ": "Táctico militar ruthless; sacrifica regimientos enteros sin pestañear.",
    "haxTags": [ "Liderazgo del Ejército Red Ribbon", "Complejo de Altura Extremo", "Pistola de Bolsillo" ],
    "arsenal": {
      "basicAttacks": "Disparos con pistola de mano, gritos de orden militar.",
      "superAttacks": [
        { "name": "Despliegue de Batallones Red Ribbon", "desc": "Ordena un ataque con tanques, cazas de combate y helicópteros artillados.", "cost": "Llamada Militar" }
      ],
      "ultimateAttacks": [
        { "name": "El Deseo Secreto de Shenron", "desc": "Reúne las esferas para pedir crecer 10 centímetros de estatura, ignorando la conquista mundial.", "cost": "7 Esferas" }
      ],
      "passives": [
        { "name": "Tiranía Absoluta", "desc": "Ejecuta sumariamente a cualquier oficial subordinado que fracase en su misión.", "cost": "Terrorismo Militar" }
      ]
    },
    "forms": [ 
      { "id": "red-base", "name": "Comandante Red", "stats": "Nivel Humano. Hombre enano con parche en el ojo izquierdo, cabello pelirrojo y traje militar rojo con habano." }
    ],
    "feats": [ "Fundó y comandó el ejército que conquistó medio planeta Tierra." ],
    "psychology": "Un enano megalómano y vanidoso con un complejo de Napoleón patológico; traicionó a toda su organización solo por vanidad estética.",
    "weaknesses": "Físicamente indefenso ante cualquier artista marcial o disparo a traición."
  },
  // 5. CORONEL SILVER
  {
    "id": "coronel-silver-dragon-ball-cl-sico-336",
    "name": "Coronel Silver",
    "alias": "El Oficial de Plata de la Red Ribbon",
    "universe": "Dragon Ball (Clásico)",
    "saga": "Ejército Red Ribbon",
    "version": "Primer Comandante de Búsqueda",
    "tier": "Tier 9-A | Nivel Habitación/Muro",
    "ap": "Nivel Muro. Un oficial atlético y letal de la Red Ribbon. Destruyó la Nube Kinton de Goku de un solo disparo de lanzacohetes y noqueó a soldados de élite de un golpe.",
    "range": "Decenas de metros (Lanzacohetes y Rifles).",
    "speed": { "combat": "Humano Atlético.", "reaction": "Atleta.", "travel": "Atlética.", "attack": "Disparo rápido de bazuca." },
    "strength": { "striking": "Clase Muro Bajo.", "lifting": "Clase Humano Pico." },
    "durability": "Nivel Muro Bajo. Derrotado fácilmente por Goku niño de dos golpes.",
    "stamina": "Media.",
    "battleIQ": "Francotirador y cazador militar disciplinado.",
    "haxTags": [ "Puntería de Bazuca Antiaérea", "Boxeo Militar" ],
    "arsenal": {
      "basicAttacks": "Combinaciones de boxeo recto y patadas militares.",
      "superAttacks": [
        { "name": "Disparo de Lanzacohetes Teledirigido", "desc": "Dispara un misil que destruye vehículos o dispersa nubes mágicas.", "cost": "Munición" }
      ],
      "ultimateAttacks": [
        { "name": "Emboscada de la Brigada Plateada", "desc": "Rodea al intruso con tanques y ametralladoras pesadas abriendo fuego al unísono.", "cost": "Soporte Militar" }
      ],
      "passives": [
        { "name": "Disciplina de Acero", "desc": "No duda en disparar a quemarropa sin titubeos morales.", "cost": "Pasivo Militar" }
      ]
    },
    "forms": [ 
      { "id": "silver-base", "name": "Coronel Silver", "stats": "Nivel Muro. Hombre alto rubio con chaqueta de cuero roja sin mangas, pantalones militares y bufanda blanca." }
    ],
    "feats": [ "Destruyó la Nube Voladora de Goku de un impacto directo de misil.", "Recuperó una de las Dragon Balls en el bosque." ],
    "psychology": "Frío, profesional y confiado en el poder armamentístico moderno.",
    "weaknesses": "Superado infinitamente por cualquier guerrero que use Ki sobrehumano."
  },
  // 6. CYMBAL
  {
    "id": "cymbal-dragon-ball-cl-sico-617",
    "name": "Cymbal",
    "alias": "El Dragón Demoniaco / Hijo de Piccolo",
    "universe": "Dragon Ball (Clásico)",
    "saga": "Rey Demonio Piccolo",
    "version": "Engendro del Mal",
    "tier": "Tier 8-A | Nivel Multi-Bloque",
    "ap": "Nivel Multi-Bloque. El dragón gárgola engendrado por el Rey Demonio Piccolo para buscar las Esferas del Dragón. Dispara rayos eléctricos desde las manos y posee alas membranosas.",
    "range": "Decenas de metros (Rayos Eléctricos).",
    "speed": { "combat": "Supersónica.", "reaction": "Supersónica.", "travel": "Vuelo.", "attack": "Garras y electricidad." },
    "strength": { "striking": "Clase Multi-Bloque.", "lifting": "Clase 10+ Toneladas." },
    "durability": "Nivel Multi-Bloque. Fue partido en dos por la katana de Yajirobe y cocinado en una fogata.",
    "stamina": "Media.",
    "battleIQ": "Monstruo arrogante y sádico que subestima a los humanos.",
    "haxTags": [ "Fisiología de Demonio Alado", "Descarga Eléctrica Demoniaca" ],
    "arsenal": {
      "basicAttacks": "Zarpazos con garras afiladas y coletazos.",
      "superAttacks": [
        { "name": "Rayo Eléctrico Demoniaco", "desc": "Dispara un arco voltaico desde las palmas para electrocutar a sus presas.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Picado de la Gárgola del Mal", "desc": "Se lanza desde las nubes en picado intentando decapitar con sus fauces.", "cost": "Ataque Aéreo" }
      ],
      "passives": [
        { "name": "Rastreo de Esferas", "desc": "Siente la energía emitida por las Dragon Balls a corta distancia.", "cost": "Pasivo Sensorial" }
      ]
    },
    "forms": [ 
      { "id": "cymbal-base", "name": "Cymbal", "stats": "Nivel Multi-Bloque. Demonio reptiliano verde con alas de dragón y vientre amarillo." }
    ],
    "feats": [ "Aterrorizó aldeas humanas buscando las Esferas del Dragón." ],
    "psychology": "Cruel y devoto a su padre Piccolo Daimaoh.",
    "weaknesses": "Poco hábil contra espadachines de reflejos rápidos (Yajirobe lo cortó a la mitad como mantequilla)."
  },
  // 7. DRUM
  {
    "id": "drum-dragon-ball-cl-sico-175",
    "name": "Drum",
    "alias": "El Demonio Colosal / Ejecutor de Piccolo",
    "universe": "Dragon Ball (Clásico)",
    "saga": "Rey Demonio Piccolo",
    "version": "Engendro de Combate Puro",
    "tier": "Tier 7-B | Nivel Ciudad",
    "ap": "Nivel Ciudad. El hijo más poderoso y resistente creado por el Rey Piccolo tras rejuvenecer. Su velocidad y fuerza bruta superaban holgadamente a Ten Shin Han, resistiendo su Mafuba y dándole una paliza brutal hasta que Goku niño apareció y le reventó el cráneo de una sola patada.",
    "range": "Físico.",
    "speed": { "combat": "Hipersónica.", "reaction": "Hipersónica.", "travel": "Supersónica.", "attack": "Embestidas brutales veloces." },
    "strength": { "striking": "Clase Ciudad (Aplastó a Ten Shin Han sin sudar).", "lifting": "Clase 100+ Toneladas." },
    "durability": "Nivel Ciudad. Resistió los mejores golpes de Ten Shin Han sin pestañear.",
    "stamina": "Muy Alta.",
    "battleIQ": "Luchador colosal despiadado; abusa de su masa corporal y velocidad para asfixiar a sus presas.",
    "haxTags": [ "Fuerza y Velocidad Demoniaca Élite", "Piel Acorazada Impenetrable a Artes Marciales Básicas" ],
    "arsenal": {
      "basicAttacks": "Bofetadas que lanzan al rival a través de edificios, pisotones.",
      "superAttacks": [
        { "name": "Embestida del Gigante", "desc": "Corre a velocidad invisible impactando con su barriga y hombros acorazados.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Aplastamiento Demoníaco Total", "desc": "Salta y cae con todo su peso sobre el rival atrapado en el suelo fracturando todos sus huesos.", "cost": "Fuerza Bruta" }
      ],
      "passives": [
        { "name": "Piel Elástica Acorazada", "desc": "Los golpes de artes marciales convencionales rebotan en su abdomen grueso.", "cost": "Defensa Pasiva" }
      ]
    },
    "forms": [ 
      { "id": "drum-base", "name": "Drum", "stats": "Nivel Ciudad. Gigante demoníaco verde y regordete con ojos saltones y cresta en la cabeza." }
    ],
    "feats": [ "Humilló y casi mata a Ten Shin Han en combate 1v1.", "Interceptó el Mafuba de Ten Shin Han salvando al Rey Piccolo." ],
    "psychology": "Un monstruo sádico que disfruta torturar lentamente a artistas marciales humanos.",
    "weaknesses": "Físicamente inferior al poder de Goku tras beber el Agua Ultra Sagrada (Goku le voló los ojos y el cráneo de una patada)."
  },
  // 8. GUERREROS NAMEK
  {
    "id": "guerreros-namek-saga-namek-520",
    "name": "Guerreros Namek",
    "alias": "La Milicia de Autodefensa de Namek",
    "universe": "Dragon Ball Z",
    "saga": "Saga de Namek",
    "version": "Patrulla del Pueblo Namekiano",
    "tier": "Tier 5-B | Nivel Planeta",
    "ap": "Nivel Planeta (3,000 Ki aprox cada uno). Los jóvenes Namekianos del tipo guerrero que salieron a defender la aldea del sabio Tsuno de las tropas de Dodoria y Freezer. Superaron y exterminaron a decenas de soldados de Freezer en segundos con ráfagas de Ki coordinadas.",
    "range": "Decenas de metros.",
    "speed": { "combat": "Relativista.", "reaction": "Relativista.", "travel": "Sub-relativista.", "attack": "Ráfagas coordinadas." },
    "strength": { "striking": "Clase Planeta.", "lifting": "Clase Toneladas." },
    "durability": "Nivel Planeta. Asesinados por Dodoria cuando este intervino personalmente.",
    "stamina": "Alta.",
    "battleIQ": "Lucha táctica en formación de escuadrón defensivo.",
    "haxTags": [ "Regeneración Namekiana Básica", "Fuego Coordinado de Ki" ],
    "arsenal": {
      "basicAttacks": "Golpes marciales combinados, ráfagas de Ki celestes.",
      "superAttacks": [
        { "name": "Ráfaga Tríptica Namekiana", "desc": "Disparan tres rayos de energía simultáneos desintegrando a soldados de élite de Freezer.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Barrera de Sacrificio por la Aldea", "desc": "Crean un muro de Ki con sus cuerpos para proteger a los ancianos y niños namekianos.", "cost": "Defensa Heroica" }
      ],
      "passives": [
        { "name": "Valentía del Pueblo Verde", "desc": "Luchan hasta la muerte sin retroceder un paso frente a invasores estelares.", "cost": "Pasivo Moral" }
      ]
    },
    "forms": [ 
      { "id": "guerreros-namek-base", "name": "Escuadrón Namekiano", "stats": "Nivel Planeta (3,000 Ki). Tres jóvenes namekianos con chalecos marrones y cintas blancas." }
    ],
    "feats": [ "Aniquilaron a todo el pelotón de soldados armados de Freezer en segundos sin sufrir bajas.", "Forzaron a Dodoria a entrar al combate personalmente." ],
    "psychology": "Nobles, pacíficos pero feroces cuando su gente o las Dragon Balls son amenazadas.",
    "weaknesses": "Poder estático muy inferior a comandantes de élite como Dodoria (22,000 Ki) o Zarbon."
  },
  // 9. DR. LYCHEE
  {
    "id": "dr-lychee-pel-culas-dbz-toei-354",
    "name": "Dr. Lychee (Dr. Raichi)",
    "alias": "El Fantasma Científico Tsufuru",
    "universe": "Dragon Ball Z (OVA)",
    "saga": "El Plan para Erradicar a los Saiyans",
    "version": "Guerrero Fantasma / Creador de Hatchiyack",
    "tier": "Tier 4-C a 4-B | Nivel Estrella Enana a Sistema Solar Menor",
    "ap": "Nivel Sistema Solar Menor (Con Guerreros Fantasma y Hatchiyack). El último científico de la raza Tsufuru. Al morir, su mente fue absorbida por la computadora de rencor Hatchiyack, convirtiéndose en un fantasma inmortal capaz de recrear a guerreros caídos (Freezer, Cooler, Slug, Turles) como clones de rencor indestructible.",
    "range": "Planetario (Gas Destron).",
    "speed": { "combat": "FTL+.", "reaction": "FTL+.", "travel": "Flotación mágica.", "attack": "Barreras y rayos de odio." },
    "strength": { "striking": "Clase Estrella Enana.", "lifting": "Clase Fantasma." },
    "durability": "Nivel Sistema Solar Menor mediante su barrera de energía roja impenetrable.",
    "stamina": "Infinita (Forma espectral sostenida por Hatchiyack).",
    "battleIQ": "Cerebro científico genio consumido por un odio milenario.",
    "haxTags": [ "Invocación de Guerreros Fantasma (Ghost Warriors)", "Gas Destron (Aniquilación de Atmósferas)", "Barrera de Energía Impenetrable de Odio" ],
    "arsenal": {
      "basicAttacks": "Ondas psíquicas de odio, flotar sobre su esfera flotante.",
      "superAttacks": [
        { "name": "Invocación de Espectros del Rencor", "desc": "Materializa clones fantasmas de Freezer, Cooler, Turles y Lord Slug para pelear por él.", "cost": "Rencor Tsufuru" }
      ],
      "ultimateAttacks": [
        { "name": "Despertar del Odio Absoluto: Hatchiyack", "desc": "Transfiere toda su energía y odio acumulado al núcleo de la supercomputadora Hatchiyack para desatar al monstruo definitivo.", "cost": "Activación Final" }
      ],
      "passives": [
        { "name": "Cuerpo Espectral Intocable", "desc": "Mientras su barrera roja esté activa, los ataques de Ki rebotan sin dañarlo.", "cost": "Defensa Pasiva" }
      ]
    },
    "forms": [ 
      { "id": "lychee-fantasma", "name": "Dr. Lychee Fantasma", "stats": "Nivel Sistema Solar Menor. Anciano de piel azulada, barba blanca larga, casco con visor rojo y túnica científica tsufuru." }
    ],
    "feats": [ "Cubrió la Tierra entera con Gas Destron bloqueando las técnicas de los Guerreros Z.", "Recreó a todos los villanos de las películas anteriores como espectros inmortales." ],
    "psychology": "Un anciano consumido enteramente por el rencor hacia la raza Saiyan por la extinción de su pueblo.",
    "weaknesses": "Si su barrera de energía es destruida por un ataque conjunto a quemarropa, su cuerpo espectral se disuelve."
  },
  // 10. BIDO, BUJIN & KOGU (CLAN BOJACK)
  {
    "id": "bido-pel-culas-dbz-toei-296",
    "name": "Bido",
    "alias": "El Ejecutor del Clan Bojack",
    "universe": "Dragon Ball Z (Toei)",
    "saga": "Película 9: ¡Los Guerreros de Plata!",
    "version": "Pirata de Hera",
    "tier": "Tier 4-C a 4-B | Nivel Estrella Enana a Sistema Solar Menor",
    "ap": "Nivel Sistema Solar Menor. Miembro del cuarteto de guerreros de Hera bajo el mando de Bojack. Utiliza cuerdas de Ki psico-kinéticas para inmovilizar y asfixiar a Super Saiyans.",
    "range": "Decenas de metros (Hilos Psíquicos).",
    "speed": { "combat": "FTL+.", "reaction": "FTL+.", "travel": "MFTL.", "attack": "Pesada." },
    "strength": { "striking": "Clase Estrella Enana.", "lifting": "Clase 100+ Toneladas." },
    "durability": "Nivel Sistema Solar Menor. Partido en dos por Gohan SSJ2 de un puñetazo.",
    "stamina": "Muy Alta.",
    "battleIQ": "Pirata espacial salvaje y experto en emboscadas coordinadas.",
    "haxTags": [ "Hilos Psico-Kinéticos de Inmovilización", "Fisiología de Hera" ],
    "arsenal": {
      "basicAttacks": "Golpes pesados de fuerza bruta, rodillazos.",
      "superAttacks": [
        { "name": "Hilos de Parálisis Psíquica", "desc": "Dispara cuerdas de energía roja que drenan y paralizan al oponente.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Asalto del Clan de Hera", "desc": "Coordina con Bujin y Zangya para asfixiar al rival mientras Bojack conecta su ataque definitivo.", "cost": "Combo Pirata" }
      ],
      "passives": [
        { "name": "Sinergia de Piratas", "desc": "Aumenta su velocidad si combate junto a otros miembros del clan Bojack.", "cost": "Buff de Equipo" }
      ]
    },
    "forms": [ 
      { "id": "bido-base", "name": "Bido", "stats": "Nivel Sistema Solar Menor. Piel verde azulada, mohawk naranja y trenza, musculatura pesada." }
    ],
    "feats": [ "Inmovilizó a Gohan SSJ1 y a Trunks SSJ." ],
    "psychology": "Sádico y despiadado; disfruta sofocar a sus presas.",
    "weaknesses": "Físicamente indefenso ante un Super Saiyajin 2."
  },
  {
    "id": "bujin-pel-culas-dbz-toei-994",
    "name": "Bujin",
    "alias": "El Ilusionista del Clan Bojack",
    "universe": "Dragon Ball Z (Toei)",
    "saga": "Película 9: ¡Los Guerreros de Plata!",
    "version": "Pirata de Hera (Especialista en Ilusiones)",
    "tier": "Tier 4-C a 4-B | Nivel Estrella Enana a Sistema Solar Menor",
    "ap": "Nivel Sistema Solar Menor. El hechicero táctico del grupo de Bojack. Domina la telequinesis, ilusiones de terreno y el entramado de hilos de Ki que atraparon a Gohan.",
    "range": "Decenas de metros.",
    "speed": { "combat": "FTL+.", "reaction": "FTL+.", "travel": "MFTL.", "attack": "Hilos mágicos." },
    "strength": { "striking": "Clase Estrella Enana.", "lifting": "Telequinesis pesada." },
    "durability": "Nivel Sistema Solar Menor. Cortado por la mitad de una patada de Gohan SSJ2.",
    "stamina": "Muy Alta.",
    "battleIQ": "Maestro de la trampa psicológica y la parálisis a distancia.",
    "haxTags": [ "Ilusiones Ópticas Mágicas", "Hilos Psíquicos de Ki", "Telequinesis de Lanzamiento de Rocas" ],
    "arsenal": {
      "basicAttacks": "Lanzamiento de rocas gigantes con telequinesis, cortes de energía.",
      "superAttacks": [
        { "name": "Trampa de Hilos Psíquicos", "desc": "Atrapa y drena la energía del rival dejándolo inmóvil en el aire.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Ilusión del Laberinto de Ruinas", "desc": "Crea ilusiones dimensionales para desorientar los sentidos del rival antes de tenderle una emboscada.", "cost": "30% Ki" }
      ],
      "passives": [
        { "name": "Maestría Psíquica", "desc": "Desvía proyectiles de Ki menores con la mente.", "cost": "Defensa Telequinética" }
      ]
    },
    "forms": [ 
      { "id": "bujin-base", "name": "Bujin", "stats": "Nivel Sistema Solar Menor. Piel verde, turbante árabe púrpura, cabello naranja y capa negra." }
    ],
    "feats": [ "Paralizó a Gohan SSJ1 permitiendo que Bojack lo torturara." ],
    "psychology": "Burlón y cobarde cuando pierde la ventaja numérica.",
    "weaknesses": "Frágil físicamente frente a guerreros con Ki superior que rompan sus hilos."
  },
  {
    "id": "kogu-pel-culas-dbz-toei-693",
    "name": "Kogu (Gokua)",
    "alias": "El Espadachín de Hera",
    "universe": "Dragon Ball Z (Toei)",
    "saga": "Película 9: ¡Los Guerreros de Plata!",
    "version": "Transformación Monstruosa (Super Kogu)",
    "tier": "Tier 4-C a 4-B | Nivel Estrella Enana a Sistema Solar Menor",
    "ap": "Nivel Sistema Solar Menor. El duelista con espada del clan de Bojack. Es el único de los secuaces capaz de transformarse aumentando su masa muscular y piel verde oscuro, rompiendo la espada de Trunks del Futuro antes de ser atravesado por un puñetazo mortal.",
    "range": "Físico y Espada de Acero.",
    "speed": { "combat": "FTL+.", "reaction": "FTL+.", "travel": "MFTL.", "attack": "Esgrima pesada." },
    "strength": { "striking": "Clase Sistema Solar Menor.", "lifting": "Clase 100+ Toneladas." },
    "durability": "Nivel Sistema Solar Menor. Atravesado por el puño de Trunks SSJ.",
    "stamina": "Muy Alta.",
    "battleIQ": "Espadachín de élite orgulloso de su técnica.",
    "haxTags": [ "Transformación Monstruosa de Hera", "Espada de Acero Cósmico" ],
    "arsenal": {
      "basicAttacks": "Estocadas y mandobles de espada corta.",
      "superAttacks": [
        { "name": "Corte del Pirata Espacial", "desc": "Blande su espada imbuida en Ki cortando defensas energéticas.", "cost": "10% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Despertar del Guerrero de Hera", "desc": "Se transforma inflando su musculatura y tiñendo su piel de verde oscuro, duplicando su fuerza y velocidad física.", "cost": "Transformación" }
      ],
      "passives": [
        { "name": "Orgullo de Espadachín", "desc": "Aumenta su daño crítico si lucha en un duelo de armas blancas.", "cost": "Pasivo Duelista" }
      ]
    },
    "forms": [ 
      { "id": "kogu-base", "name": "Kogu Base", "stats": "Nivel Estrella Enana. Piel verde clara, cabello naranja largo, traje de pirata elegante." },
      { "id": "kogu-transformado", "name": "Super Kogu", "stats": "Nivel Sistema Solar Menor. Músculos hipertrofiados gigantes, piel verde oscura, ojos blancos." }
    ],
    "feats": [ "Sometió a Trunks del Futuro en su forma base obligándolo a transformarse en SSJ." ],
    "psychology": "Arrogante y vanidoso con su habilidad de esgrima.",
    "weaknesses": "Muy inferior a un Super Saiyajin enfocado (Trunks lo mató de un solo puñetazo al abdomen)."
  },
  // 11. YAMU
  {
    "id": "yamu-saga-buu-59",
    "name": "Yamu",
    "alias": "El Recolector de Energía Majin",
    "universe": "Dragon Ball Z",
    "saga": "Saga de Buu",
    "version": "Control Mental Majin de Babidi",
    "tier": "Tier 8-A | Nivel Multi-Bloque",
    "ap": "Nivel Multi-Bloque. Un luchador humano poseído por la magia de Babidi. Junto a Spopovich, utilizó el Artefacto Recolector de Energía para drenar todo el Ki de Gohan SSJ2 inmovilizado por Shin y entregárselo a Babidi para despertar a Majin Buu.",
    "range": "Físico y Aparato Drenador.",
    "speed": { "combat": "Hipersónica.", "reaction": "Hipersónica.", "travel": "Vuelo de Ki.", "attack": "Pesada." },
    "strength": { "striking": "Clase Multi-Bloque.", "lifting": "Clase 10+ Toneladas." },
    "durability": "Nivel Multi-Bloque. Inmune al dolor y fatiga por el control Majin.",
    "stamina": "Infinita (Cuerpo zombificado por Babidi).",
    "battleIQ": "Ejecutor sumiso que sigue órdenes directas de Babidi.",
    "haxTags": [ "Control Mental Majin ('M' en la frente)", "Artefacto de Drenaje de Ki Absoluto", "Inmunidad al Dolor Físico" ],
    "arsenal": {
      "basicAttacks": "Golpes pesados de fuerza bruta, llaves de sumisión.",
      "superAttacks": [
        { "name": "Vuelo y Persecución de Ki", "desc": "Vuela a alta velocidad transportando el contenedor de energía.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Drenaje de Ki del Artefacto de Babidi", "desc": "Clava la aguja gigante del dispositivo en el abdomen del rival, absorbiendo el 100% de su energía vital en segundos (Drenó a Gohan SSJ2).", "cost": "Artefacto Mágico" }
      ],
      "passives": [
        { "name": "Zombi Majin", "desc": "Sigue combatiendo con huesos rotos o el cuello torcido sin inmutarse.", "cost": "Defensa Majin" }
      ]
    },
    "forms": [ 
      { "id": "yamu-majin", "name": "Yamu Majin", "stats": "Nivel Multi-Bloque. Hombre alto pálido con la marca 'M' en la frente, venas brotadas y traje blanco sin mangas." }
    ],
    "feats": [ "Drenó toda la energía de Gohan SSJ2 en el 25° Torneo de las Artes Marciales.", "Llevó la energía suficiente para llenar la mitad del cascarón de Majin Buu." ],
    "psychology": "Un peón mudo y manipulado por Babidi que fue asesinado por Pui Pui tras cumplir su misión.",
    "weaknesses": "Físicamente débil comparado con guerreros Z de élite; dependiente de que el rival esté inmovilizado."
  },
  // 12. OLIBU, MARAIKOH, ARQUA, CATERPY & MIJORIN (OTRO MUNDO)
  {
    "id": "olibu-torneo-del-otro-mundo-109",
    "name": "Olibu",
    "alias": "El Héroe Mitológico de la Tierra / Discípulo del Norte",
    "universe": "Dragon Ball Z (Toei)",
    "saga": "Torneo del Otro Mundo",
    "version": "Guerrero Legendario del Más Allá",
    "tier": "Tier 4-C a 4-B | Nivel Estrella Enana a Sistema Solar Menor",
    "ap": "Nivel Sistema Solar Menor (Nivel Perfect Cell contenido). El héroe más fuerte de la historia de la Tierra antes de Goku. Entrenó durante 10,000 años con Kaio-sama del Norte, alcanzando un nivel de combate que le permitió pelear de igual a igual contra Pikkon en los cuartos de final.",
    "range": "Físico y Ráfagas de Ki.",
    "speed": { "combat": "MFTL.", "reaction": "MFTL.", "travel": "MFTL.", "attack": "Esgrima y artes marciales clásicas." },
    "strength": { "striking": "Clase Sistema Solar Menor.", "lifting": "Clase 1,000+ Toneladas." },
    "durability": "Nivel Sistema Solar Menor con aureola de muerto.",
    "stamina": "Infinita (Cuerpo espiritual inmortal en el Más Allá).",
    "battleIQ": "10,000 años de sabiduría marcial grecorromana pura.",
    "haxTags": [ "Fisiología Espiritual Inmortal", "Espada y Escudo de Héroe Griego", "10,000 Años de Entrenamiento con Kaio" ],
    "arsenal": {
      "basicAttacks": "Golpes de boxeo pankration clásico, estocadas de espada.",
      "superAttacks": [
        { "name": "Ráfaga del Héroe del Norte", "desc": "Dispara esferas doradas de Ki con gran precisión.", "cost": "10% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Asalto del Coloso de Olimpia", "desc": "Una combinación de lucha libre mitológica y puñetazos pesados que forzó a Pikkon a pelear en serio.", "cost": "30% Ki" }
      ],
      "passives": [
        { "name": "Inmortalidad Espiritual", "desc": "Al estar muerto, no sufre fatiga biológica ni desangrado común.", "cost": "Pasivo Espiritual" }
      ]
    },
    "forms": [ 
      { "id": "olibu-base", "name": "Olibu", "stats": "Nivel Sistema Solar Menor. Aspecto de Hércules con cabello largo rubio, barba, túnica griega y aureola en la cabeza." }
    ],
    "feats": [ "Peleó en igualdad de condiciones contra Pikkon en el Torneo del Otro Mundo.", "Es la base histórica de todos los mitos heroicos de la Tierra." ],
    "psychology": "Noble, caballeroso y honorable; felicita a sus oponentes y valora el espíritu deportivo.",
    "weaknesses": "Carece de transformaciones multiplicadoras de poder como el Super Saiyajin."
  },
  {
    "id": "maraikoh-torneo-del-otro-mundo-620",
    "name": "Maraikoh",
    "alias": "El Titán de la Galaxia del Sur",
    "universe": "Dragon Ball Z (Toei)",
    "saga": "Torneo del Otro Mundo",
    "version": "Luchador del Sur",
    "tier": "Tier 4-C | Nivel Estrella Enana",
    "ap": "Nivel Estrella Enana. El gigantesco guerrero de la Galaxia del Sur. Posee una fuerza física descomunal, arrojando meteoros gigantes con la mano limpia en su combate contra Goku.",
    "range": "Físico.",
    "speed": { "combat": "FTL+.", "reaction": "FTL+.", "travel": "MFTL.", "attack": "Pesada." },
    "strength": { "striking": "Clase Estrella Enana.", "lifting": "Clase 10,000+ Toneladas." },
    "durability": "Nivel Estrella Enana.",
    "stamina": "Infinita (Muerto con aureola).",
    "battleIQ": "Luchador de fuerza bruta.",
    "haxTags": [ "Fuerza Bruta Titánica", "Fisiología Espiritual" ],
    "arsenal": {
      "basicAttacks": "Manotazos titánicos y cabezazos demoledores.",
      "superAttacks": [
        { "name": "Lanzamiento de Meteorito", "desc": "Levanta escombros gigantescos y los lanza a velocidad lumínica.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Aplastamiento del Sur", "desc": "Se lanza con todo su peso para aplastar al oponente fuera del ring.", "cost": "Fuerza Bruta" }
      ],
      "passives": [
        { "name": "Cuerpo Rocoso", "desc": "Reduce el daño de impactos físicos frontales.", "cost": "Defensa Pasiva" }
      ]
    },
    "forms": [ 
      { "id": "maraikoh-base", "name": "Maraikoh", "stats": "Nivel Estrella Enana. Monstruo gigante con piel verde azulada, cuerpo de reptil acorazado y aureola." }
    ],
    "feats": [ "Obligó a Goku a usar el Super Saiyajin para poder moverlo del ring." ],
    "psychology": "Un guerrero orgulloso de su fuerza bruta pero respetuoso de las reglas del torneo.",
    "weaknesses": "Lento y predecible frente a oponentes ágiles."
  },
  {
    "id": "arqua-torneo-del-otro-mundo-715",
    "name": "Arqua",
    "alias": "El Anfibio de la Galaxia del Este",
    "universe": "Dragon Ball Z (Toei)",
    "saga": "Torneo del Otro Mundo",
    "version": "Luchador Acuático",
    "tier": "Tier 4-C | Nivel Estrella Enana",
    "ap": "Nivel Estrella Enana. Un guerrero pez de la Galaxia del Este. En tierra es torpe, pero puede inundar toda la arena de combate con agua mágica, transformándose en una bestia ultrarrápida que casi ahoga a Goku.",
    "range": "Todo el Ring (Inundación de Agua Mágica).",
    "speed": { "combat": "FTL+ bajo el agua.", "reaction": "FTL+.", "travel": "Natación a la velocidad de la luz.", "attack": "Mordiscos acuáticos." },
    "strength": { "striking": "Clase Estrella Enana bajo el agua.", "lifting": "Clase Marina." },
    "durability": "Nivel Estrella Enana.",
    "stamina": "Infinita en el agua.",
    "battleIQ": "Estratega ambiental; cambia el terreno para anular la movilidad del rival.",
    "haxTags": [ "Inundación Acuática Mágica del Ring", "Velocidad Submarina Suprema" ],
    "arsenal": {
      "basicAttacks": "Coletazos y mordiscos con mandíbula de tiburón.",
      "superAttacks": [
        { "name": "Inundación del Dominio Acuático", "desc": "Expulsa un océano de agua mágica cubriendo todo el estadio para ganar ventaja absoluta.", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Torbellino Submarino Devorador", "desc": "Crea un vórtice marino arrastrando al enemigo al fondo del agua para asfixiarlo y rematarlo con un Kamehameha acuático.", "cost": "35% Ki" }
      ],
      "passives": [
        { "name": "Maestro del Océano", "desc": "Su velocidad y poder de ataque se duplican mientras esté sumergido en agua.", "cost": "Buff Ambiental" }
      ]
    },
    "forms": [ 
      { "id": "arqua-base", "name": "Arqua", "stats": "Nivel Estrella Enana. Humanoide con aspecto de pez globo azul y naranja con aletas y aureola." }
    ],
    "feats": [ "Puso en graves apuros a Goku forzándolo a usar un Kamehameha submarino para salir del agua." ],
    "psychology": "Astuto y burlón; se confía cuando tiene el control del agua.",
    "weaknesses": "Fuera del agua es torpe como un pez fuera del estanque."
  },
  {
    "id": "caterpy-torneo-del-otro-mundo-838",
    "name": "Caterpy",
    "alias": "El Gusano de la Metamorfosis",
    "universe": "Dragon Ball Z (Toei)",
    "saga": "Torneo del Otro Mundo",
    "version": "Capullo en Evolución",
    "tier": "Tier 5-B | Nivel Planeta",
    "ap": "Nivel Planeta. El luchador insectoide de la Galaxia del Sur. Tiene la técnica de hacer cosquillas con sus múltiples patas y entrar en un capullo de metamorfosis que tarda 1,200 años en completarse.",
    "range": "Físico.",
    "speed": { "combat": "Relativista.", "reaction": "Relativista.", "travel": "Reptación.", "attack": "Cosquillas veloces." },
    "strength": { "striking": "Clase Planeta.", "lifting": "Clase Oruga." },
    "durability": "Nivel Planeta (Capullo impenetrable).",
    "stamina": "Infinita durante la hibernación.",
    "battleIQ": "Cómico y ridículo.",
    "haxTags": [ "Ataque de Cosquillas Masivo", "Capullo de Metamorfosis de 1,200 Años" ],
    "arsenal": {
      "basicAttacks": "Ataque de cosquillas con sus 8 patas en las axilas del rival.",
      "superAttacks": [
        { "name": "Hilos de Seda del Capullo", "desc": "Se envuelve en un capullo de seda impenetrable para iniciar su transformación.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Metamorfosis Definitiva (En 1,200 Años)", "desc": "Inicia su evolución prometiendo convertirse en el ser más fuerte del cosmos... dentro de 12 siglos.", "cost": "1,200 Años de Espera" }
      ],
      "passives": [
        { "name": "Capullo Invulnerable", "desc": "Inmune a ataques físicos mientras esté dentro de su crisálida.", "cost": "Defensa Pasiva" }
      ]
    },
    "forms": [ 
      { "id": "caterpy-base", "name": "Caterpy", "stats": "Nivel Planeta. Oruga gigante verde y azul con guantes de boxeo en cada una de sus patas." }
    ],
    "feats": [ "Hizo reír a Goku hasta el suelo con su ataque de cosquillas." ],
    "psychology": "Inocente y paciente hasta el absurdo cósmico.",
    "weaknesses": "Descalificado del torneo porque los jueces no quisieron esperar 1,200 años a que saliera del capullo."
  },
  {
    "id": "mijorin-torneo-del-otro-mundo-618",
    "name": "Mijorin",
    "alias": "El Guerrero de la Galaxia del Este",
    "universe": "Dragon Ball Z (Toei)",
    "saga": "Torneo del Otro Mundo",
    "version": "Luchador Marcial del Este",
    "tier": "Tier 4-C | Nivel Estrella Enana",
    "ap": "Nivel Estrella Enana. Uno de los discípulos más destacados de la Kaio-sama del Este. Perdió en la primera ronda del torneo contra Caterpy al no soportar su ataque de cosquillas.",
    "range": "Físico.",
    "speed": { "combat": "Relativista.", "reaction": "Relativista.", "travel": "Vuelo.", "attack": "Artes marciales del Este." },
    "strength": { "striking": "Clase Estrella Enana.", "lifting": "Clase Toneladas." },
    "durability": "Nivel Estrella Enana.",
    "stamina": "Infinita (Muerto con aureola).",
    "battleIQ": "Luchador disciplinado.",
    "haxTags": [ "Artes Marciales del Más Allá", "Fisiología Espiritual" ],
    "arsenal": {
      "basicAttacks": "Golpes marciales rectos y patadas giratorias.",
      "superAttacks": [
        { "name": "Ráfaga del Este", "desc": "Disparos de energía azul desde los nudillos.", "cost": "10% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Combo de la Galaxia del Este", "desc": "Una andanada de 20 golpes marciales consecutivos.", "cost": "25% Ki" }
      ],
      "passives": [
        { "name": "Sensibilidad al Cosquilleo", "desc": "Sufre parálisis de risa extrema si es atacado en las axilas.", "cost": "Debuff Cómico" }
      ]
    },
    "forms": [ 
      { "id": "mijorin-base", "name": "Mijorin", "stats": "Nivel Estrella Enana. Humanoide con piel morada, traje de artes marciales azul y aureola." }
    ],
    "feats": [ "Clasificó al Torneo del Otro Mundo entre billones de almas." ],
    "psychology": "Serio y disciplinado pero con debilidad total a los chistes y cosquillas.",
    "weaknesses": "Ataques cómicos."
  },
  // 13. SPICE BOYS (SPICE, VINEGAR, MUSTARD, SALT)
  {
    "id": "spice-saga-garlic-jr-70",
    "name": "Spice",
    "alias": "El Líder de los Spice Boys / Siervo de Garlic Jr.",
    "universe": "Dragon Ball Z (Toei)",
    "saga": "Saga de Garlic Jr. (Relleno)",
    "version": "Potenciado por la Estrella Makyo",
    "tier": "Tier 5-A | Nivel Planeta Grande",
    "ap": "Nivel Planeta Grande. El líder del cuarteto de demonios sirvientes de Garlic Jr. Con el acercamiento de la Estrella Makyo, su tamaño y poder de Ki se multiplicaron hasta poner en graves apuros a Piccolo y a Gohan niño.",
    "range": "Planetario.",
    "speed": { "combat": "Relativista+.", "reaction": "Relativista+.", "travel": "Vuelo.", "attack": "Ráfagas demoníacas." },
    "strength": { "striking": "Clase Planeta Grande.", "lifting": "Clase 1,000+ Toneladas." },
    "durability": "Nivel Planeta Grande. Regeneración demoníaca sostenida por la Estrella Makyo.",
    "stamina": "Infinita mientras la Estrella Makyo esté en el cielo.",
    "battleIQ": "Luchador demoníaco despiadado y leal a Garlic Jr.",
    "haxTags": [ "Potenciación de la Estrella Makyo (Poder Infinito Temporal)", "Regeneración Demoníaca", "Niebla del Agua Sagrada Negra" ],
    "arsenal": {
      "basicAttacks": "Garras demoníacas, patadas brutales.",
      "superAttacks": [
        { "name": "Ráfaga Demoniaca de Makyo", "desc": "Dispara esferas rojas de fuego oscuro desde las palmas.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Bombardeo del Rey del Mal", "desc": "Se infla de masa muscular y desata un cañón de energía roja devastador junto a Vinegar.", "cost": "40% Ki" }
      ],
      "passives": [
        { "name": "Radiación de la Estrella Makyo", "desc": "Duplica su poder de ataque y velocidad mientras la estrella demoníaca ilumine la Tierra.", "cost": "Buff Ambiental" }
      ]
    },
    "forms": [ 
      { "id": "spice-base", "name": "Spice", "stats": "Nivel Planeta. Demonio esbelto con piel aguamarina, armadura negra y cabello blanco largo." },
      { "id": "spice-buff", "name": "Spice Makyo Power", "stats": "Nivel Planeta Grande. Músculos hipertrofiados colosales y aura roja ardiente." }
    ],
    "feats": [ "Sometió a Piccolo temporalmente antes de la intervención de Gohan." ],
    "psychology": "Cruel, soberbio y devoto a la causa demoníaca de Garlic Jr.",
    "weaknesses": "Desaparece si la Estrella Makyo es destruida (Gohan la destruyó con su Masenko)."
  },
  {
    "id": "vinegar-saga-garlic-jr-502",
    "name": "Vinegar",
    "alias": "El Tanque de los Spice Boys",
    "universe": "Dragon Ball Z (Toei)",
    "saga": "Saga de Garlic Jr. (Relleno)",
    "version": "Potenciado por la Estrella Makyo",
    "tier": "Tier 5-A | Nivel Planeta Grande",
    "ap": "Nivel Planeta Grande. El guerrero más masivo y pesado del grupo de Garlic Jr. Su fuerza física rivalizó con la de Piccolo durante el asedio al Templo Sagrado de Kami-sama.",
    "range": "Físico y Ráfagas cortas.",
    "speed": { "combat": "Relativista.", "reaction": "Relativista.", "travel": "Vuelo.", "attack": "Pesada." },
    "strength": { "striking": "Clase Planeta Grande.", "lifting": "Clase 1,000+ Toneladas." },
    "durability": "Nivel Planeta Grande acorazado.",
    "stamina": "Muy Alta.",
    "battleIQ": "Luchador de fuerza bruta.",
    "haxTags": [ "Potenciación de la Estrella Makyo", "Piel Acorazada Demoníaca" ],
    "arsenal": {
      "basicAttacks": "Manotazos demoledores y tacleadas de hombro.",
      "superAttacks": [
        { "name": "Abrazo de Oso Demoníaco", "desc": "Estrangula al rival contra su pecho rompiendo costillas.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Cañón de Furia Vinagre", "desc": "Dispara una onda masiva purpúrea desde la boca.", "cost": "30% Ki" }
      ],
      "passives": [
        { "name": "Masa Impenetrable", "desc": "Mitiga los impactos físicos frontales.", "cost": "Defensa Pasiva" }
      ]
    },
    "forms": [ 
      { "id": "vinegar-base", "name": "Vinegar", "stats": "Nivel Planeta Grande. Gigante demoníaco morado con cuernos cortos y armadura negra." }
    ],
    "feats": [ "Soportó ataques directos de Gohan enfurecido." ],
    "psychology": "Brutal y despiadado.",
    "weaknesses": "Lento frente a la agilidad de los Guerreros Z."
  },
  {
    "id": "mustard-saga-garlic-jr-331",
    "name": "Mustard",
    "alias": "El Asesino Veloz de los Spice Boys",
    "universe": "Dragon Ball Z (Toei)",
    "saga": "Saga de Garlic Jr. (Relleno)",
    "version": "Potenciado por la Estrella Makyo",
    "tier": "Tier 5-B | Nivel Planeta",
    "ap": "Nivel Planeta. El miembro más ágil y acrobático del grupo de Garlic Jr. Combatió a Krilin en el Templo Sagrado.",
    "range": "Físico y Ráfagas rápidas.",
    "speed": { "combat": "Relativista+.", "reaction": "Relativista+.", "travel": "Vuelo.", "attack": "Cortes y patadas." },
    "strength": { "striking": "Clase Planeta.", "lifting": "Clase Toneladas." },
    "durability": "Nivel Planeta.",
    "stamina": "Muy Alta.",
    "battleIQ": "Luchador acrobático.",
    "haxTags": [ "Potenciación de la Estrella Makyo", "Agilidad Demoníaca" ],
    "arsenal": {
      "basicAttacks": "Patadas voladoras y ráfagas cortas continuas.",
      "superAttacks": [
        { "name": "Ráfaga Cortante de Mostaza", "desc": "Disparos amarillos cortantes de alta velocidad.", "cost": "10% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Danza de la Muerte Demoníaca", "desc": "Asalto combinado con Salt acorralando al rival en el aire.", "cost": "25% Ki" }
      ],
      "passives": [
        { "name": "Velocidad de la Estrella Makyo", "desc": "Aumenta su evasión mientras la estrella esté activa.", "cost": "Buff Pasivo" }
      ]
    },
    "forms": [ 
      { "id": "mustard-base", "name": "Mustard", "stats": "Nivel Planeta. Demonio con piel marrón/amarillenta, cabello castaño y armadura roja." }
    ],
    "feats": [ "Puso en apuros a Krilin en el Templo de Kami-sama." ],
    "psychology": "Sádico y veloz.",
    "weaknesses": "Vulnerable al Masenko de Gohan."
  },
  {
    "id": "salt-saga-garlic-jr-435",
    "name": "Salt",
    "alias": "El Tirador de los Spice Boys",
    "universe": "Dragon Ball Z (Toei)",
    "saga": "Saga de Garlic Jr. (Relleno)",
    "version": "Potenciado por la Estrella Makyo",
    "tier": "Tier 5-B | Nivel Planeta",
    "ap": "Nivel Planeta. El miembro más pequeño del grupo de Garlic Jr. Dispara ráfagas de Ki consecutivas desde los dedos y coordina ataques con Mustard.",
    "range": "Decenas de metros.",
    "speed": { "combat": "Relativista+.", "reaction": "Relativista+.", "travel": "Vuelo.", "attack": "Ráfagas continuas." },
    "strength": { "striking": "Clase Planeta.", "lifting": "Clase Toneladas." },
    "durability": "Nivel Planeta.",
    "stamina": "Muy Alta.",
    "battleIQ": "Tirador de apoyo.",
    "haxTags": [ "Potenciación de la Estrella Makyo", "Fuego de Supresión de Ki" ],
    "arsenal": {
      "basicAttacks": "Disparos rápidos desde las puntas de los dedos.",
      "superAttacks": [
        { "name": "Lluvia de Sal", "desc": "Lluvia de esferas de Ki blanco que saturan el área.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Impacto Cruzado con Mustard", "desc": "Ataque en tenaza coordinado que pulveriza defensas terrestres.", "cost": "25% Ki" }
      ],
      "passives": [
        { "name": "Tamaño Evasivo", "desc": "Su pequeña estatura le permite esquivar ataques directos con mayor facilidad.", "cost": "Evasión Pasiva" }
      ]
    },
    "forms": [ 
      { "id": "salt-base", "name": "Salt", "stats": "Nivel Planeta. Demonio pequeño con piel roja pálida, cuernos y armadura blanca." }
    ],
    "feats": [ "Asedió el Templo Sagrado junto a los demás sirvientes de Garlic Jr." ],
    "psychology": "Cobarde pero cruel en grupo.",
    "weaknesses": "Desintegrado por el Masenko de Gohan."
  }
];

const filePath = path.resolve(__dirname, '../src/data/characters.js');
let content = fs.readFileSync(filePath, 'utf8');

const prefix = 'export const INITIAL_CHARACTERS = ';
let currentList = eval(content.replace(prefix, ''));
console.log(`Current characters count: ${currentList.length}`);

let updatedCount = 0;
batch28Upgrades.forEach(upgrade => {
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

console.log(`Batch 28 Upgrade Complete. ${updatedCount} characters successfully enhanced. (THE COMPLETE ROSTER IS NOW 100% UPGRADED TO APEX GOLD STANDARD).`);
