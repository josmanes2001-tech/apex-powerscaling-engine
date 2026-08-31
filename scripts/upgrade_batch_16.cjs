const fs = require('fs');
const path = require('path');

const batch16Upgrades = [
  // 1. GOKU GT
  {
    "id": "son-goku-saga-gt-dragon-ball-gt-281",
    "name": "Son Goku (Saga GT)",
    "alias": "El Héroe Definitivo",
    "universe": "Dragon Ball GT",
    "saga": "Baby / Dragones Oscuros",
    "version": "Super Saiyan 4",
    "tier": "Tier 3-A | Nivel Universal",
    "ap": "Nivel Universal. Convertido en niño por Pilaf, su base seguía rivalizando con su SSJ3 de Z. Al recuperar su cola y controlar el poder del Ohzaru Dorado, alcanzó el estado primigenio definitivo: el Super Saiyan 4, multiplicando astronómicamente su poder y restaurando su cuerpo adulto temporalmente durante el combate. Humilló a Super Baby 2 y combatió contra Dragones Universales.",
    "range": "Universal.",
    "speed": { "combat": "MFTL+.", "reaction": "MFTL+.", "travel": "MFTL+ (Shunkanido restaurado en SSJ4).", "attack": "Velocidad salvaje." },
    "strength": { "striking": "Clase Universal.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Universal. Resistencia absurda al daño; el pelaje del SSJ4 absorbe ataques mortales de Ki. Sobrevivió a los rayos letales de Omega Shenron.",
    "stamina": "Muy Alta. El SSJ4 no drena energía a lo bestia como el SSJ3, es un estado de equilibrio perfecto.",
    "battleIQ": "Veterano absoluto; peleó ciego usando sus otros sentidos para derrotar a Eis Shenron.",
    "haxTags": [ "Absorción Pasiva de Ki (SSJ4)", "Milagro Final (Genkidama Universal)" ],
    "arsenal": {
      "basicAttacks": "Golpes pesados de naturaleza Oozaru (Salvajes pero precisos), coletazos y agarres.",
      "superAttacks": [
        { "name": "Kamehameha x10", "desc": "Su ataque firma en GT. Una onda masiva roja capaz de atravesar galaxias y desintegrar a Baby Ohzaru o empujar a Super 17.", "cost": "20% Ki" },
        { "name": "Golpe del Dragón (Ryuken)", "desc": "Materializa un dragón dorado de Ki puro (Shenron físico) que atraviesa al oponente causando daño irrecuperable. Lo usó para atravesar a Omega y Super 17.", "cost": "40% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Super Genkidama Universal", "desc": "Canaliza la energía de todos los seres del universo (pidiendo a Kaio que transmita el mensaje). El ataque final de toda la franquicia GT, borrando a Omega Shenron.", "cost": "Milagro/Inmunidad Total temporal" }
      ],
      "passives": [
        { "name": "Manto Primigenio", "desc": "En SSJ4, los ataques de Ki que ya ha recibido o visto antes no funcionan la segunda vez (Absorbió el ataque de Baby).", "cost": "Inmunidad pasiva" }
      ]
    },
    "forms": [ 
      { "id": "goku-gt-base", "name": "Goku Niño (Base)", "stats": "Nivel Galaxia. Cuerpo de niño, dogi azul, pierde resistencia fácilmente y no puede sostener el SSJ3 mucho tiempo." },
      { "id": "goku-gt-ssj1-3", "name": "Super Saiyan 1, 2 y 3", "stats": "Nivel Multi-Galaxia. Consume demasiada energía en cuerpo infantil." },
      { "id": "goku-gt-ssj4", "name": "Super Saiyan 4", "stats": "Nivel Universal. Cuerpo de adulto, pelaje rojo, cabello negro salvaje, mirada profunda. La cima Saiyan." }
    ],
    "feats": [ "Soportó ataques conjuntos de todos los villanos del infierno.", "Absorbió energía de 4 saiyans para sobrepasar sus límites temporales (Full Power SSJ4)." ],
    "psychology": "Más relajado que en Z, asumiendo su rol como salvador indiscutible del universo y el plano existencial entero, aceptando su destino final.",
    "weaknesses": "Físicamente limitado si se queda en cuerpo de niño; el límite del poder de sus aliados."
  },
  // 2. VEGETA GT
  {
    "id": "vegeta-saga-gt-dragon-ball-gt-851",
    "name": "Vegeta (Saga GT)",
    "alias": "El Príncipe de la Tierra",
    "universe": "Dragon Ball GT",
    "saga": "Baby / Dragones Oscuros",
    "version": "Super Saiyan 4",
    "tier": "Tier 3-A | Nivel Universal",
    "ap": "Nivel Universal. Viviendo décadas en paz, Vegeta maduró por completo asimilándose a la cultura terrestre. Sin embargo, seguía entrenando sin descanso. En la saga final, utilizando la máquina de Rayos Blutz de Bulma, despertó el Super Saiyan 4. Aunque su participación en SSJ4 fue corta y sirvió de apoyo/fusión para Gogeta, demostró poder dañar a Omega Shenron con su Final Shine Attack.",
    "range": "Universal.",
    "speed": { "combat": "MFTL+.", "reaction": "MFTL+.", "travel": "MFTL+.", "attack": "Veloz y letal." },
    "strength": { "striking": "Clase Universal.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Universal. Resistió el empalamiento y la paliza de Omega Shenron por puro orgullo de ganar tiempo para Goku.",
    "stamina": "Muy Alta, pero inducida artificialmente al inicio.",
    "battleIQ": "Pragmatismo total. No duda en sugerir la Fusión, demostrando que dejó completamente atrás su orgullo tóxico.",
    "haxTags": [ "Máquina de Rayos Blutz", "Orgullo Evolucionado" ],
    "arsenal": {
      "basicAttacks": "Cuerpo a cuerpo táctico, ráfagas cortas precisas.",
      "superAttacks": [
        { "name": "Final Flash", "desc": "Su ataque clásico, ahora verde/dorado.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Final Shine Attack (Ataque de Brillo Final)", "desc": "Carga un inmenso rayo de energía verde con una mano y lo lanza con fuerza suficiente para borrar a Super 17 o dañar Dragones. Lo usó en SSJ4 con ambas manos.", "cost": "40% Ki" }
      ],
      "passives": [
        { "name": "Corazón Terrestre", "desc": "Inmune al control mental absoluto si apela a su voluntad; cuando Baby lo poseyó, fue solo porque dejó una brecha biológica.", "cost": "Defensa Psicológica" }
      ]
    },
    "forms": [ 
      { "id": "vegeta-gt-base", "name": "Base GT", "stats": "Nivel Galaxia. Pelo corto, chaqueta de cuero, sin armadura." },
      { "id": "vegeta-gt-ssj", "name": "Super Saiyan 1 y 2", "stats": "Nivel Multi-Galaxia. Fuerte, pero insuficiente ante amenazas supremas." },
      { "id": "vegeta-gt-ssj4", "name": "Super Saiyan 4", "stats": "Nivel Universal. Pelaje escarlata oscuro, pantalones de cuero ajustados (se adaptaron mágicamente), pupilas azules." }
    ],
    "feats": [ "Planteó él mismo la fusión con Goku para salvar el universo.", "Sobrevivió repetidas rondas de tortura de los Dragones para dar tiempo a la Genkidama." ],
    "psychology": "Un padre de familia devoto, que cortó su icónico cabello y viste ropa moderna (incluso tuvo bigote). Ya no envidia a Goku, lo reconoce como su igual y mejor amigo.",
    "weaknesses": "No puede alcanzar el SSJ4 por sí mismo (Requiere a Bulma / Rayos Blutz)."
  },
  // 3. BABY
  {
    "id": "baby-dragon-ball-gt-758",
    "name": "Baby",
    "alias": "El Parásito Tsufuru",
    "universe": "Dragon Ball GT",
    "saga": "Saga Baby",
    "version": "Forma Verdadera / Infante",
    "tier": "Tier 3-C | Nivel Galaxia",
    "ap": "Nivel Galaxia (Potencial). Creado por el rey Tsufuru con un ADN mutante. Su poder destructivo base no es abrumadoramente alto, pero su capacidad para licuarse, infiltrarse por las heridas de oponentes infinitamente más fuertes y dominarlos a nivel genético lo hace una amenaza cataclísmica.",
    "range": "Planetario (Red Parasitaria).",
    "speed": { "combat": "MFTL (como líquido).", "reaction": "MFTL.", "travel": "MFTL.", "attack": "Sorpresiva." },
    "strength": { "striking": "Clase Planeta (Sin huésped).", "lifting": "Baja." },
    "durability": "Nivel Celular. Deben vaporizar cada célula líquida de su ser.",
    "stamina": "Infinita (Roba energía).",
    "battleIQ": "Vengativo y cobarde. No lucha de frente a menos que posea a alguien fuerte.",
    "haxTags": [ "Parasitismo Genético (Control Mental Absoluto)", "Licuefacción", "Huevecillos de Control" ],
    "arsenal": {
      "basicAttacks": "Convertirse en líquido para evadir ataques o asfixiar.",
      "superAttacks": [
        { "name": "Posesión Tsufuru", "desc": "Entra por un corte o por la boca del enemigo, adhiriéndose a su cerebro e impregnando sus células.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Lluvia de Huevos Mutantes", "desc": "Infecta a millones de humanos simultáneamente al esparcir sus micro-huevos, convirtiéndolos en sus esclavos absolutos que le rinden Ki.", "cost": "50% Ki Biológico" }
      ],
      "passives": [
        { "name": "Mutación de Huésped", "desc": "Muta el cuerpo del poseído (como Goten o Gohan) para aumentar su poder base masivamente.", "cost": "Pasivo Infeccioso" }
      ]
    },
    "forms": [ 
      { "id": "baby-infante", "name": "Baby Infante", "stats": "Nivel Sistema Solar. Pequeño cyborg azul plateado." },
      { "id": "baby-mutante", "name": "Baby Adolescente", "stats": "Nivel Galaxia. Tras absorber Ki, se vuelve más alto y arrogante." }
    ],
    "feats": [ "Tomó el control de toda la Tierra y casi toda la raza Saiyan en horas." ],
    "psychology": "Odia a los Saiyans de forma racista y patológica por la aniquilación de su raza en el Planeta Plant. Se cree el rey legítimo del universo.",
    "weaknesses": "Totalmente dependiente de la fuerza del huésped para el combate físico real; vulnerable a vaporización si es expulsado al espacio."
  },
  // 4. SUPER BABY VEGETA
  {
    "id": "baby-vegeta-dragon-ball-gt-510",
    "name": "Super Baby Vegeta",
    "alias": "El Rey Tsufuru-Saiyan",
    "universe": "Dragon Ball GT",
    "saga": "Saga Baby",
    "version": "Super Baby 2 / Ohzaru Dorado",
    "tier": "Tier 3-B | Nivel Multi-Galaxia",
    "ap": "Nivel Multi-Galaxia. Tras poseer a Vegeta y recibir la energía maligna de Goten, Gohan, Trunks y Bulla, Baby mutó el cuerpo de Vegeta a su forma suprema. Humilló por completo a Goku SSJ3 niño y Uub, combinando el poder letal del Final Flash con el genio vengativo Tsufuru. En su forma de Ohzaru Dorado era una bestia de destrucción casi insalvable.",
    "range": "Galáctico a Universal (Revenge Death Ball).",
    "speed": { "combat": "MFTL+.", "reaction": "MFTL+.", "travel": "MFTL+.", "attack": "Implacable." },
    "strength": { "striking": "Clase Multi-Galaxia.", "lifting": "Clase Galaxia (Ohzaru)." },
    "durability": "Nivel Multi-Galaxia. Sin embargo, su Forma Ohzaru dependía de los rayos Blutz inyectados por Bulma poseída.",
    "stamina": "Muy Alta. Absorbe Ki de sus esclavos terrestres constantemente.",
    "battleIQ": "Fusiona el orgullo táctico de Vegeta con la crueldad sádica de un rey tirano.",
    "haxTags": [ "Genkidama Oscura", "Aumento de Poder por Esclavos", "Mutación Física" ],
    "arsenal": {
      "basicAttacks": "Kienzan, Big Bang Attack Oscuro, ráfagas de dedo continuas.",
      "superAttacks": [
        { "name": "Final Flash Oscuro", "desc": "Dispara el clásico ataque de Vegeta pero infundido en energía negativa Tsufuru.", "cost": "20% Ki" },
        { "name": "Super Galick Gun", "desc": "Ataque rápido de Ohzaru Dorado que arrasa ciudades con el aliento/manos.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Bola de Rencor (Revenge Death Ball)", "desc": "Su técnica firma. Levanta las manos y recoge la energía maligna de todos sus esclavos en la Tierra. Una masa negra masiva con rayos rojos que borra todo a su paso.", "cost": "60% Ki Robado" }
      ],
      "passives": [
        { "name": "Parasitismo Supremo", "desc": "Mientras posea a Vegeta, absorbe su fuerza inherente e impide que sea dañado sin matar al anfitrión.", "cost": "Escudo moral" }
      ]
    },
    "forms": [ 
      { "id": "vegeta-baby", "name": "Vegeta Baby", "stats": "Nivel Multi-Galaxia Bajo. Vegeta con marcas rojas en el rostro y pelo blanco." },
      { "id": "super-baby-1", "name": "Super Baby 1", "stats": "Nivel Multi-Galaxia. Hombreras rojas orgánicas, asimila el poder de los Saiyans menores." },
      { "id": "super-baby-2", "name": "Super Baby 2", "stats": "Nivel Multi-Galaxia Alto. Cuerpo cambiado (mallas negras), pelo blanco parado. Venció a Goku SSJ3 y Majuub." },
      { "id": "baby-ohzaru", "name": "Ohzaru Dorado Mutante", "stats": "Nivel Universal Bajo. Mono gigante de pelo dorado, conserva la conciencia táctica de Baby. Combatió a la par con SSJ4." }
    ],
    "feats": [ "Sobrevivió siendo convertido en chocolate por Uub (revirtiendo el hechizo de adentro hacia afuera).", "Humilló a Goku hasta que alcanzó el SSJ4." ],
    "psychology": "Extremadamente sádico, cree justificar sus genocidios con la historia pasada, pero no es más que un tirano racista. Al verse perdedor, ruega por su vida cobardemente.",
    "weaknesses": "Cortarle la cola en estado Ohzaru le hace perder la forma (Regresa a Super Baby 2). Goku lo expulsó forzosamente del cuerpo de Vegeta cortándole la cola y purificando la zona."
  },
  // 5. SUPER 17
  {
    "id": "super-17-dragon-ball-gt-73",
    "name": "Super 17",
    "alias": "El Androide Absoluto",
    "universe": "Dragon Ball GT",
    "saga": "Super 17",
    "version": "Fusión del Infierno",
    "tier": "Tier 3-A | Nivel Universal",
    "ap": "Nivel Universal. La creación definitiva del Dr. Gero y el Dr. Myuu. Al fusionar al 17 original (controlado) con el Androide 17 Infernal, se creó un guerrero que absorbía todo el Ki pasivamente. Sometió fácilmente a todos los guerreros Z terrestres y a Goku SSJ4 (ya que Goku tontamente le lanzó un Kamehameha x10, llenándole el tanque de Ki).",
    "range": "Físico y Absorción Frontal Masiva.",
    "speed": { "combat": "MFTL+.", "reaction": "MFTL+.", "travel": "MFTL+.", "attack": "Letal y metódica." },
    "strength": { "striking": "Clase Universal (Potenciada por Ki Absorbido).", "lifting": "Clase Planetaria." },
    "durability": "Nivel Universal. Virtualmente invulnerable a ataques de Ki debido a su sensor frontal.",
    "stamina": "Infinita (Físicamente Androide).",
    "battleIQ": "Frío, calculador. Deja que el enemigo lance sus mejores ataques de Ki intencionadamente.",
    "haxTags": [ "Absorción de Ki Frontal 100%", "Fusión Cibernética", "Metralleta Letal" ],
    "arsenal": {
      "basicAttacks": "Golpes pesados de nudillos, ráfagas cortantes extendiendo sus brazos.",
      "superAttacks": [
        { "name": "Hell's Storm (Tormenta del Infierno)", "desc": "Desprende sus antebrazos y dispara una lluvia de balas de Ki letal, como metralletas (mató al Dr. Gero con esto).", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Shocking Death Ball (Esfera de Relámpago)", "desc": "Crea una inmensa bola negra de electricidad combinada estirando ambas manos (Similar a un electro-choque cósmico), capaz de noquear a un SSJ4.", "cost": "50% Ki Absorbido" }
      ],
      "passives": [
        { "name": "Absorbedor Perfecto", "desc": "Si cruza sus brazos frente a él, absorbe CUALQUIER ráfaga de Ki (desde un Galick Gun hasta un Kamehameha x10) sumando ese daño a su propio poder bruto.", "cost": "Absorción Activa" }
      ]
    },
    "forms": [ 
      { "id": "super-17", "name": "Super Androide 17", "stats": "Nivel Universal. Altísimo, cabello largo negro suelto, mirada de Androide vacía." }
    ],
    "feats": [ "Soportó y absorbió el Kamehameha x10 de Goku SSJ4 sin inmutarse.", "Venció a Vegeta, Gohan, Trunks, Goten y Majuub simultáneamente." ],
    "psychology": "Controlado por la programación del Dr. Myuu, pero retiene una minúscula chispa del Androide 17 original (Su amor por la 18 y el rechazo a ser un esclavo).",
    "weaknesses": "Al absorber Ki tiene que quedarse totalmente quieto con los brazos cruzados; Goku (ayudado por 18) aprovechó esa ventana de vulnerabilidad (0.5 segundos) para atravesarlo físicamente con el Puño del Dragón."
  },
  // 6. OMEGA SHENRON (MERGED & PATCHED)
  {
    "id": "omega-shenron-dragon-ball-gt-904",
    "name": "Omega Shenron",
    "alias": "El Dios de los Dragones Malignos",
    "universe": "Dragon Ball GT",
    "saga": "Dragones Oscuros",
    "version": "7 Esferas Absorbidas",
    "tier": "Tier 3-A a 2-C | Nivel Universal a Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. El jefe final de todo Dragon Ball GT. Como Syn Shenron (1 Estrella) superó a Goku SSJ4 agotado, pero tras tragar las otras 6 esferas mutó en Omega, asimilando todos los poderes elementales. Su presencia pasiva destrozaba las galaxias pudriendo la energía positiva, y solo pudo ser acorralado por el ridículo poder de Gogeta SSJ4 y aniquilado por la Genkidama de todo el universo.",
    "range": "Universal (Pudrición Negativa).",
    "speed": { "combat": "Inconmensurable.", "reaction": "Inconmensurable.", "travel": "MFTL+.", "attack": "Veloz y Pesado." },
    "strength": { "striking": "Clase Multiversal Bajo (Empaló a Vegeta de un revés).", "lifting": "Clase Galáctica." },
    "durability": "Nivel Multiversal Bajo. Regeneración absoluta a nivel celular gracias a las esferas.",
    "stamina": "Infinita.",
    "battleIQ": "Arrogante, brutal. Uso de habilidades robadas tácticamente (Congelar, luego golpear).",
    "haxTags": [ "Manipulación Elemental (Todos)", "Corrupción de Energía Negativa", "Regeneración Máxima" ],
    "arsenal": {
      "basicAttacks": "Golpes letales con las espinas de su cuerpo, extender sus dedos como estacas venenosas.",
      "superAttacks": [
        { "name": "Láser Óptico de Rayo (Rage Shenron)", "desc": "Dispara el rayo eléctrico de 5 Estrellas para paralizar al enemigo.", "cost": "10% Ki" },
        { "name": "Remolino de Fuego/Hielo (Eis/Nuova)", "desc": "Tormentas de destrucción elemental.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Minus Energy Power Ball (Karma Ball)", "desc": "Condensa toda la energía de destrucción absoluta y putrefacción cósmica en una sola esfera masiva. Borraría el universo si estalla libremente.", "cost": "60% Ki Negativo" }
      ],
      "passives": [
        { "name": "Corrupción Constante", "desc": "Su simple existencia drena la vitalidad y HP pasivo del entorno/enemigos no divinos por intoxicación de Ki.", "cost": "Pasivo Corruptor" }
      ]
    },
    "forms": [ 
      { "id": "syn-shenron", "name": "Syn Shenron (1 Estrella)", "stats": "Nivel Universal. Cuerpo blanco, una sola esfera azul, cuernos enormes. Muy superior al SSJ4 sin Full Power." },
      { "id": "omega-shenron", "name": "Omega Shenron (7 Estrellas)", "stats": "Nivel Multiversal Bajo. Con las 7 esferas en su pecho, espinas gigantes." }
    ],
    "feats": [ "Soportó el Big Bang Kamehameha x100 (Aunque expulsó las esferas) y se regeneró.", "Casi mata a Goku SSJ4 y Vegeta SSJ4 simultáneamente a puros golpes físicos." ],
    "psychology": "Pura maldad concentrada. Desprecia a Goku y cree que la existencia de los mortales es un error por abusar de los dioses.",
    "weaknesses": "Daño mágico-divino positivo abrumador (Kamehameha Big Bang SSJ4, Genkidama Universal) anula su regeneración."
  },
  // 7. NUOVA SHENRON
  {
    "id": "nuova-shenron-dragon-ball-gt-786",
    "name": "Nuova Shenron",
    "alias": "El Dragón del Fuego de 4 Estrellas",
    "universe": "Dragon Ball GT",
    "saga": "Dragones Oscuros",
    "version": "Forma Verdadera (Oro)",
    "tier": "Tier 3-A | Nivel Universal",
    "ap": "Nivel Universal. Nacido del deseo original del Rey Piccolo por juventud, paradójicamente es el único dragón noble. Su cuerpo alcanza los 6000 grados Celsius de base, superando la superficie del sol, volviéndolo intocable en combate cuerpo a cuerpo y tan veloz como Goku SSJ4 (con el que empató en poder bruto antes de ser asesinado por traición).",
    "range": "Planetario (Tormenta Solar).",
    "speed": { "combat": "MFTL+.", "reaction": "MFTL+.", "travel": "MFTL+.", "attack": "Velocidad Solar (Pico de GT)." },
    "strength": { "striking": "Clase Universal.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Universal. Su armadura de calor pasiva desintegra puñetazos o armas menores.",
    "stamina": "Muy Alta. Domina el calor.",
    "battleIQ": "Guerrero marcial noble. Pelea frente a frente, detesta las trampas y respeta a Goku.",
    "haxTags": [ "Fuego Solar (6000 Grados)", "Armadura Térmica Pasiva", "Inmunidad al Calor" ],
    "arsenal": {
      "basicAttacks": "Golpes físicos rápidos envueltos en llamas, quemaduras de tercer grado pasivas.",
      "superAttacks": [
        { "name": "Burst Attack", "desc": "Lanza una esfera de fuego hiper-concentrada rápida y precisa.", "cost": "10% Ki Fuego" }
      ],
      "ultimateAttacks": [
        { "name": "Ataque Espejo (Nova Star)", "desc": "Rodea al enemigo con un sol en miniatura sofocante y luego concentra los rayos en un estallido central (Incapaz de matar intencionadamente a Pan con esto por piedad).", "cost": "40% Ki Fuego" },
        { "name": "Lente de Fuego (Burning Spin)", "desc": "Crea una lente gigantesca de fuego en el cielo para freír el planeta como una hormiga bajo lupa.", "cost": "50% Ki Fuego" }
      ],
      "passives": [
        { "name": "Aura Intocable", "desc": "Quien lo golpea físicamente sin aura divina/SSJ4 se quema las manos y recibe daño de retorno.", "cost": "Defensa Pasiva Térmica" }
      ]
    },
    "forms": [ 
      { "id": "nuova-rojo", "name": "Cáscara Roja", "stats": "Nivel Galaxia. Cuerpo rojo masivo y lento, oculta su verdadero poder." },
      { "id": "nuova-dorado", "name": "Forma Verdadera Dorada", "stats": "Nivel Universal. Al romper la cáscara, se vuelve dorado y ultrarrápido, peleando a la par del SSJ4." }
    ],
    "feats": [ "Peleó en total igualdad de velocidad y fuerza con Goku SSJ4 Full Power.", "Ayudó a Goku a intentar matar a Omega Shenron encerrándolo en fuego." ],
    "psychology": "Noble, orgulloso y con código de honor marcial. Forja una amistad de respeto mutuo con Goku, siendo el portador de la esfera de 4 estrellas (la del Abuelo Gohan).",
    "weaknesses": "Su nobleza (Fue asesinado a traición por Omega Shenron por la espalda). Sus llamas no son efectivas contra su hermano Eis."
  },
  // 8. EIS SHENRON
  {
    "id": "eis-shenron-dragon-ball-gt-308",
    "name": "Eis Shenron",
    "alias": "El Dragón del Hielo de 3 Estrellas",
    "universe": "Dragon Ball GT",
    "saga": "Dragones Oscuros",
    "version": "Forma Verdadera",
    "tier": "Tier 3-A | Nivel Universal",
    "ap": "Nivel Universal. El hermano gemelo malvado de Nuova. Nacido del deseo de borrar la memoria humana del mundo (Saga Buu). Domina el hielo absoluto a cero grados Kelvin. Puede congelar un brazo de Goku SSJ4 en un milisegundo, siendo letal. Sin embargo, recurre a tácticas asquerosas y cobardes como cegar o usar rehenes.",
    "range": "Planetario (Nevada Absoluta).",
    "speed": { "combat": "MFTL.", "reaction": "MFTL.", "travel": "MFTL.", "attack": "Ráfagas congelantes instantáneas." },
    "strength": { "striking": "Clase Universal (Corta extremidades congeladas).", "lifting": "Clase Lunar." },
    "durability": "Nivel Universal. Armadura fría, pero inferior a la de su hermano.",
    "stamina": "Alta.",
    "battleIQ": "Cobarde, rastrero, torturador. Usa escudos humanos (Pan) y ruega por su vida fingiendo rendirse.",
    "haxTags": [ "Congelación Absoluta Cero", "Ceguera Ocular Permanente", "Rehenes / Escudo Humano" ],
    "arsenal": {
      "basicAttacks": "Cortes de garras de hielo, congelar al tacto.",
      "superAttacks": [
        { "name": "Cañón Cero Absoluto", "desc": "Dispara un rayo blanco que congela toda la materia sólida instantáneamente, volviéndola frágil como cristal.", "cost": "20% Ki Hielo" },
        { "name": "Garras Rasgadoras (Ice Ray)", "desc": "Lanza ráfagas a los ojos del rival, congelando y rasgando las retinas de Goku, dejándolo ciego por el resto de la serie de forma permanente (Hasta la cura divina).", "cost": "15% Ki Hielo" }
      ],
      "ultimateAttacks": [
        { "name": "Tormenta Final (Corte Traicionero)", "desc": "Se rinde arrodillado frente al oponente llorando y, cuando este baja la guardia, le rebana la garganta o el pecho con una garra de hielo puro oculta.", "cost": "0% Ki (Ataque sucio)" }
      ],
      "passives": [
        { "name": "Muro Helado", "desc": "Evita daño por ataques de Ki de Fuego comunes al contrarrestar temperaturas.", "cost": "Inmunidad Fuego Menor" }
      ]
    },
    "forms": [ 
      { "id": "eis-base", "name": "Eis Shenron", "stats": "Nivel Universal. Diseño idéntico a Nuova pero en tonos azul hielo y cian." }
    ],
    "feats": [ "Dejó completamente ciego a Goku SSJ4 de un ataque sucio.", "Casi mata a Goku al congelar la ciudad entera y atraparlo en un bloque sólido de 0 Absoluto." ],
    "psychology": "Basura espacial en términos de honor. La antítesis de Nuova. Su cobardía es tan grande que Goku (incluso ciego) lo remató por asco con el Puño del Dragón al ver que seguía haciendo trampa tras ser perdonado.",
    "weaknesses": "Poder bruto inferior al SSJ4 si el enemigo está concentrado y no cae en trampas de rehenes."
  },
  // 9. GOGETA SSJ4
  {
    "id": "gogeta-dragon-ball-gt-258",
    "name": "Gogeta (GT)",
    "alias": "El Salvador Supremo Definitivo",
    "universe": "Dragon Ball GT",
    "saga": "Dragones Oscuros",
    "version": "Super Saiyan 4",
    "tier": "Tier 2-C | Nivel Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo (Alto). La fusión Metamoru de Goku y Vegeta SSJ4. Durante mucho tiempo fue considerado el guerrero más fuerte de toda la historia de Dragon Ball (hasta Super). Su poder era tan insondablemente absurdo comparado con Omega Shenron que podía mandarlo a volar solo con la presión de sus ojos al pestañear, y usar bromas para torturarlo psicológicamente.",
    "range": "Universal a Multiversal.",
    "speed": { "combat": "Inconmensurable+.", "reaction": "Inconmensurable+.", "travel": "Instantáneo.", "attack": "Velocidad Trascendental." },
    "strength": { "striking": "Clase Multiversal Bajo. Rompía cuernos de Omega con el codo sin mirar.", "lifting": "Clase Universal." },
    "durability": "Nivel Multiversal Bajo. Inmune a toda la magia negativa de Omega (De hecho, una de sus patadas purificó el Karma oscuro del mundo).",
    "stamina": "Fija en 10 Minutos reales (El poder del SSJ4 acortó el límite brutalmente).",
    "battleIQ": "Una mezcla letal; finge ser bromista y arrogante para obligar a Omega a usar su ataque final para poder purificar la Tierra.",
    "haxTags": [ "Fusión Metamoru (Límite Crítico: 10 mins)", "Purificación de Energía Negativa", "Velocidad Trascendental" ],
    "arsenal": {
      "basicAttacks": "Pestañeos de aire que envían a volar enemigos, cruce de brazos pasivo de esquiva, confeti.",
      "superAttacks": [
        { "name": "Kamehameha del Bluff (Kamehameha de Broma)", "desc": "Finge cargar su técnica suprema, pero del centro disparan cañones de confeti y serpentinas para humillar por completo al Dios Dragón.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Big Bang Kamehameha x100", "desc": "Su ataque definitivo. Una esfera y haz de luz celestial inmenso. El primer golpe desintegró casi a Omega expulsando las 7 esferas. Cuando iba a dar el segundo (que lo habría borrado), la fusión terminó repentinamente por falta de tiempo.", "cost": "50% Ki Divino-Oozaru / Acorta Fusión a 0" }
      ],
      "passives": [
        { "name": "Aura Purificadora", "desc": "Cualquier ataque de corrupción o energía negativa se invierte o se anula al entrar en contacto con su cuerpo.", "cost": "Inmunidad Absoluta Oscuridad" }
      ]
    },
    "forms": [ 
      { "id": "gogeta-ssj4-gt", "name": "SSJ4 Gogeta", "stats": "Nivel Multiversal Bajo. Pelaje marrón rojizo, cabello carmesí/rojo sangre, ojos azules arrogantes." }
    ],
    "feats": [ "Pateó la Bola de Karma Negativo de Omega hacia el espacio exterior como si fuera una pelota de fútbol, purificándola pasivamente.", "Movimiento tan rápido que no existió frame intermedio ni para Omega." ],
    "psychology": "Totalmente confiado e infalible, pero su exceso de humor tenía un propósito táctico (hacer que Omega lanzara su karma ball). Falló al no calcular que el tiempo se reducía de 30 a 10 minutos.",
    "weaknesses": "Límite de tiempo minúsculo debido a la cantidad obscena de Ki del SSJ4."
  },
  // 10. MAJUUB
  {
    "id": "majuub-dragon-ball-gt-859",
    "name": "Majuub",
    "alias": "La Reencarnación Majin",
    "universe": "Dragon Ball GT",
    "saga": "Baby / Dragones",
    "version": "Uub (Fusionado con Mr. Buu)",
    "tier": "Tier 3-A | Nivel Universal Bajo",
    "ap": "Nivel Universal Bajo. Tras un entrenamiento de 10 años con Goku, Uub era fuerte. Pero en la saga de Baby, Majin Buu gordo se sacrificó y se fusionó en el cuerpo de Uub, restaurando al Majin Buu original (o su contraparte positiva pura) naciendo 'Majuub'. Rivalizó temporalmente contra Super Baby 2 en poder bruto, e intentó transmutarlo en chocolate.",
    "range": "Planetario a Sistema Solar.",
    "speed": { "combat": "MFTL.", "reaction": "MFTL.", "travel": "MFTL.", "attack": "Veloz." },
    "strength": { "striking": "Clase Universal Bajo.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Universal Bajo. Heredó algo de la resistencia celular de Buu, pudiendo ser atacado letalmente y reformarse (limitadamente).",
    "stamina": "Muy Alta.",
    "battleIQ": "Luchador puro heredero de Goku; su táctica suprema fue dejarse tragar por Baby para atacarlo desde adentro.",
    "haxTags": [ "Fusión Mágica Asimilada", "Rayo de Transmutación (Rebote)", "Control Interno de Ki" ],
    "arsenal": {
      "basicAttacks": "Artes marciales rápidas, estiramiento de brazos limitado (como Buu).",
      "superAttacks": [
        { "name": "Relámpago Majin (Majuub Lightning)", "desc": "Carga energía rosa/púrpura intensa desde ambas manos y lanza una tormenta de rayos erráticos.", "cost": "20% Ki Mágico" },
        { "name": "Kamehameha Majin", "desc": "Versión rosada.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Rayo Convertidor / Engaño Estomacal", "desc": "Dispara el rayo para convertir al enemigo en dulce. Si lo rebotan (como hizo Baby) y Majuub es comido, usa esto a su favor para frenar el Ki del oponente expandiéndose en sus tripas (Evitó que Baby Ohzaru masacrara a Goku atacando desde sus intestinos).", "cost": "Estrategia Mágica" }
      ],
      "passives": [
        { "name": "Cuerpo de Goma", "desc": "Mitiga los golpes físicos absorbiéndolos como gelatina si se prepara para el impacto.", "cost": "Defensa Activa" }
      ]
    },
    "forms": [ 
      { "id": "majuub-base", "name": "Majuub", "stats": "Nivel Universal Bajo. Aura rosa, chaleco negro y amarillo estilo Majin, musculatura definida." }
    ],
    "feats": [ "Forzó a Super Baby 2 a esforzarse a fondo.", "Estuvo a punto de ganar desde adentro bloqueando la transformación del Ohzaru." ],
    "psychology": "Un héroe noble, tímido pero determinado, que toma el manto de protector de la Tierra en ausencia de Goku con total responsabilidad.",
    "weaknesses": "Inexperiencia ante hechicería extrema o reflejos de magia negra."
  },
  // 11. PAN GT
  {
    "id": "pan-saga-buu-780",
    "name": "Pan (GT)",
    "alias": "La Nieta de Goku",
    "universe": "Dragon Ball GT",
    "saga": "Búsqueda Galáctica / Dragones",
    "version": "Niña",
    "tier": "Tier 4-C | Nivel Estrella Enana",
    "ap": "Nivel Estrella Enana (Alta). Aunque en la historia es una niña (hija de Gohan), su potencial es enorme, superando pasivamente el nivel base de muchos en el universo temprano. Durante la gira espacial, peleó contra mutantes y soldados galácticos, ayudando a Goku. No logra el Super Saiyan en la serie, pero tiene hax de valentía y furia.",
    "range": "Físico y explosiones menores.",
    "speed": { "combat": "FTL.", "reaction": "FTL.", "travel": "Supersónica.", "attack": "Ágil." },
    "strength": { "striking": "Clase Estrella Enana.", "lifting": "Clase Ciudad." },
    "durability": "Nivel Estrella Enana. Soportó estar en presencia de calor extremo o golpes residuales de Dragones menores.",
    "stamina": "Media. Es una niña y se cansa en peleas largas.",
    "battleIQ": "Impulsiva, rabieta, ataca sin pensar saltando al peligro frontalmente.",
    "haxTags": [ "Potencial Híbrido", "Mochila Espacial de Giru" ],
    "arsenal": {
      "basicAttacks": "Patadas voladoras rápidas, combos de niña enojada, lanzar objetos.",
      "superAttacks": [
        { "name": "Kamehameha Doncella", "desc": "Variante rápida y rosada/naranja, de menos poder que el original pero que se canaliza en 1 segundo.", "cost": "15% Ki" },
        { "name": "Ráfaga de la Doncellita", "desc": "Disparo dual de Ki continuo.", "cost": "10% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Asalto del Torbellino (Maiden's Rage)", "desc": "Se enoja porque alguien hace llorar a su abuelo o lastima a Trunks/Giru, y lanza una andanada de rodillazos, arañazos y explosiones de Ki desordenadas con 300% más fuerza bruta de la normal.", "cost": "30% Ki (Furia)" }
      ],
      "passives": [
        { "name": "Lágrima Milagrosa", "desc": "Si Goku u otro Saiyan mayor (como Vegeta/Gohan) la ve en peligro mortal, sus AP y durabilidad se multiplican pasivamente por rabia (Como cuando Gohan rompió el hielo).", "cost": "Buff Aliado" }
      ]
    },
    "forms": [ 
      { "id": "pan-gt-base", "name": "Pan (GT)", "stats": "Nivel Estrella Enana. Ropa naranja de tomboy, bandana pañuelo, mochila azul." }
    ],
    "feats": [ "Sometió a generales galácticos como Luud (forma base) o mutantes M2 de puñetazos.", "Su llanto hizo que Gohan base rompiera la congelación absoluta de Eis Shenron por puro instinto paterno." ],
    "psychology": "Una pre-adolescente mandona, consentida y terca, pero con el corazón de los Guerreros Z dispuesto a sacrificar su vida por la Tierra y su abuelo Goku.",
    "weaknesses": "Cero control emocional (Llora si se siente inútil). No alcanza el SSJ, por lo que su límite de poder es estricto frente a villanos finales."
  }
];

const filePath = path.resolve(__dirname, '../src/data/characters.js');
let content = fs.readFileSync(filePath, 'utf8');

const prefix = 'export const INITIAL_CHARACTERS = ';
let currentList = eval(content.replace(prefix, ''));
console.log(`Current characters count: ${currentList.length}`);

// Clean up duplicate OS001
const dupIndex = currentList.findIndex(c => c.id === 'omega-shenron-gt-os001');
if(dupIndex !== -1) {
  console.log(`Removing duplicate OS001...`);
  currentList.splice(dupIndex, 1);
}

let updatedCount = 0;
batch16Upgrades.forEach(upgrade => {
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

console.log(`Batch 16 Upgrade Complete. ${updatedCount} characters successfully enhanced. (GT Characters). Removed Duplicate Omega Shenron.`);
