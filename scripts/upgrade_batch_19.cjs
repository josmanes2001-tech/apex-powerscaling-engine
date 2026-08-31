const fs = require('fs');
const path = require('path');

const batch19Upgrades = [
  // 1. BLACK FRIEZA
  {
    "id": "black-frieza-dbs-manga-bf001",
    "name": "Black Frieza",
    "alias": "El Emperador Definitivo del Multiverso",
    "universe": "Dragon Ball Super (Manga)",
    "saga": "Saga de Granolah",
    "version": "Entrenamiento de 10 Años en la Habitación del Tiempo",
    "tier": "Tier 2-C a 2-B | Nivel Multiversal",
    "ap": "Nivel Multiversal. Tras entrenar el equivalente a 10 años en una dimensión de bolsillo fuera del continuo espacio-temporal, Freezer desbloqueó una forma que supera con creces el poder de los Dioses de la Destrucción. Asesinó a Gas en su forma zombi definitiva de un solo golpe con la mano desnuda, y noqueó simultáneamente a Goku Ultra Instinto Verdadero y Vegeta Ultra Ego de un solo golpe al estómago cada uno sin recibir un solo rasguño.",
    "range": "Multiversal.",
    "speed": { "combat": "Inconmensurable+.", "reaction": "Inconmensurable+.", "travel": "MFTL+.", "attack": "Instantáneo (Supera el UI en velocidad pura)." },
    "strength": { "striking": "Clase Multiversal.", "lifting": "Clase Multiversal." },
    "durability": "Nivel Multiversal. Intocable para mortales y deidades inferiores.",
    "stamina": "Perfecta (A diferencia de Golden Frieza, dominó la forma sin desgaste).",
    "battleIQ": "Tirano absoluto, frío, metódico y sádico; ahora respaldado por el poder más absurdo del Universo 7.",
    "haxTags": [ "Forma Black Frieza (Sin desgaste)", "Superación del Ki Divino", "Telequinesis Cósmica", "Ejecución Instantánea" ],
    "arsenal": {
      "basicAttacks": "Golpes simples al estómago con una sola mano que noquean seres en Ultra Instinto/Ego.",
      "superAttacks": [
        { "name": "Death Beam Negro", "desc": "Un rayo negro y púrpura de energía concentrada que perfora y vaporiza deidades sin esfuerzo.", "cost": "10% Ki" },
        { "name": "Death Ball Cósmica", "desc": "Una esfera masiva negra con rayos dorados capaz de desintegrar cúmulos estelares.", "cost": "25% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Juicio del Emperador Negro", "desc": "Atraviesa al oponente a velocidad trascendental, arranca su núcleo vital y remata con una explosión omnidireccional de Ki oscuro (Como hizo con Gas).", "cost": "40% Ki" }
      ],
      "passives": [
        { "name": "Dominio de la Habitación del Tiempo", "desc": "Inmune a técnicas de ilusión, parálisis temporal y desgaste de Ki.", "cost": "Maestría Absoluta" }
      ]
    },
    "forms": [ 
      { "id": "frieza-final", "name": "Forma Final (Blanca)", "stats": "Nivel Universal+. Su base pulida tras 10 años de meditación." },
      { "id": "black-frieza", "name": "Black Frieza", "stats": "Nivel Multiversal. Piel negra brillante en torso y extremidades, rostro y hombros morados. Poder supremo." }
    ],
    "feats": [ "Noqueó de un solo golpe a Goku Ultra Instinto y a Vegeta Ultra Ego al mismo tiempo.", "Asesinó a Gas (quien era el ser más fuerte del universo según las Dragon Balls) en un segundo." ],
    "psychology": "Arrogancia respaldada por hechos irrefutables. Ya no se precipita; perdona la vida a Goku y Vegeta solo para demostrarles que están a años luz de alcanzarlo.",
    "weaknesses": "Hasta la fecha en el manga, no ha mostrado debilidades físicas conocidas."
  },
  // 2. GRANOLAH
  {
    "id": "granola-dragon-ball-super-812",
    "name": "Granolah",
    "alias": "El Último Cereliano / El Mejor Francotirador",
    "universe": "Dragon Ball Super (Manga)",
    "saga": "Saga de Granolah",
    "version": "Deseo de Toronbo (Sacrificio de Vida)",
    "tier": "Tier 2-C | Nivel Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. Tras sacrificar 150 años de su esperanza de vida a cambio de convertirse en el guerrero más fuerte del universo mediante las Esferas de Cereal. Su ojo derecho evolucionado le permite ver el flujo sanguíneo, los puntos de presión y las debilidades del Ki en tiempo real, noqueando a Goku Ultra Instinto Señal de un solo golpe a un punto vital.",
    "range": "Francotirador Interplanetario (Rayos de Ki a kilómetros de distancia con precisión milimétrica).",
    "speed": { "combat": "Inconmensurable.", "reaction": "Inconmensurable (Ojo Cereliano dual).", "travel": "MFTL+ (Shunkanido instantáneo).", "attack": "Disparos de francotirador a la velocidad de la luz." },
    "strength": { "striking": "Clase Multiversal Bajo.", "lifting": "Clase Universal." },
    "durability": "Nivel Multiversal Bajo. Peleó al límite contra Vegeta Ultra Ego soportando una paliza colosal.",
    "stamina": "Muy Alta, pero su vida biológica está reducida a solo 3 años.",
    "battleIQ": "Francotirador de élite y cazador táctico. Explota los puntos vitales del oponente con dos dedos.",
    "haxTags": [ "Ojo Cereliano (Visión de Puntos Vitales / Flujo de Ki)", "Ataque a Puntos de Presión", "Teletransportación Instantánea Múltiple" ],
    "arsenal": {
      "basicAttacks": "Golpes con dos dedos a arterias y puntos de Ki, disparos precisos con los dedos como pistolas.",
      "superAttacks": [
        { "name": "Disparo de Francotirador Cereliano", "desc": "Dispara un rayo de Ki hiperfino y concentrado directo al corazón o nuca del enemigo a kilómetros de distancia.", "cost": "15% Ki" },
        { "name": "Ráfaga de Clones de Ki", "desc": "Crea una proyección de sí mismo que posee el 50% de su poder real mientras él combate oculto a distancia.", "cost": "30% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Impacto Vital Definitivo (Ambos Ojos Despertados)", "desc": "Despierta el segundo ojo Cereliano, esquiva el ataque definitivo del oponente y clava sus dedos en el punto ciego del Ki, liberando una detonación interna que destruye los órganos vitales.", "cost": "50% Ki" }
      ],
      "passives": [
        { "name": "Visión Anatómica", "desc": "Ignora el 50% de la durabilidad convencional del oponente al impactar directamente en puntos de presión vitales.", "cost": "Pasivo táctico" }
      ]
    },
    "forms": [ 
      { "id": "granola-base", "name": "Cereliano (Un Ojo)", "stats": "Nivel Multiversal Bajo. Cabello verde, parche táctico en el ojo derecho, ropa de cazarrecompensas." },
      { "id": "granola-dual", "name": "Cereliano (Doble Ojo Despertado)", "stats": "Nivel Multiversal Bajo (Pico). Ambos ojos rojos brillantes con símbolos Cerelianos, poder al 100%." }
    ],
    "feats": [ "Noqueó a Goku Ultra Instinto Señal de un solo golpe al punto vital.", "Llevó a Vegeta Ultra Ego a su límite absoluto." ],
    "psychology": "Motivado inicialmente por una venganza ciega contra los Saiyans y Freezer por la extinción de su pueblo; luego se alía con Goku y Vegeta al descubrir la verdad sobre Bardock.",
    "weaknesses": "Esperanza de vida artificialmente acortada; puede ser abrumado por guerreros cuyo Ki evolucione en pleno combate (como Vegeta Ultra Ego o Gas)."
  },
  // 3. ANILAZA
  {
    "id": "anilaza-dragon-ball-super-645",
    "name": "Anilaza",
    "alias": "El Monstruo de Fusión Mecánica del Universo 3",
    "universe": "Dragon Ball Super",
    "saga": "Torneo del Poder",
    "version": "Fusión Cuádruple de Robots",
    "tier": "Tier 2-C | Nivel Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. La carta del triunfo del Universo 3. Una fusión colosal de los científicos robóticos y androides (Paparoni, Koichiarator, etc). Su poder bruto forzó una alianza de 5 guerreros al máximo poder (Goku SSJ Blue, Vegeta SSJ Blue, Gohan Definitivo, Freezer Golden y Androide 17) para repeler su ataque final.",
    "range": "Multiversal (Deformación del espacio mediante portales de puñetazos).",
    "speed": { "combat": "Inconmensurable (Reflejos por ecolocalización).", "reaction": "Inconmensurable.", "travel": "Pesada (Kaiju gigante).", "attack": "Puñetazos a través de portales dimensionales." },
    "strength": { "striking": "Clase Multiversal Bajo.", "lifting": "Clase Multiversal." },
    "durability": "Nivel Multiversal Bajo. Resistió ataques combinados simultáneos de 5 guerreros divinos.",
    "stamina": "Infinita (Reactor biomecánico).",
    "battleIQ": "Bestial / Computarizado; usa radares sónicos en sus orejas para anticipar ataques desde cualquier dirección.",
    "haxTags": [ "Ecolocalización Sónica Total", "Warp Punch (Puñetazos Dimensionales)", "Reactor en la Frente" ],
    "arsenal": {
      "basicAttacks": "Manotazos gigantescos, coletazos que barren arenas completas.",
      "superAttacks": [
        { "name": "Warp Punch (Puño Dimensional)", "desc": "Abre portales en el espacio y dispara sus puños a través de ellos, golpeando al enemigo desde ángulos imposibles.", "cost": "15% Ki" },
        { "name": "Láser Bucal Gigante", "desc": "Dispara un rayo rojo masivo desde su boca capaz de desintegrar la plataforma.", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Esfera de Destrucción Cuádruple", "desc": "Reúne toda la energía del reactor en una bola de Ki colosal que amenaza con empujar fuera del ring o vaporizar a todo el equipo contrario.", "cost": "60% Ki Reactor" }
      ],
      "passives": [
        { "name": "Radar de Ecolocalización", "desc": "Detecta cualquier perturbación en el aire con sus orejas biónicas, anulando el factor sorpresa del enemigo.", "cost": "Defensa pasiva" }
      ]
    },
    "forms": [ 
      { "id": "anilaza-kaiju", "name": "Anilaza", "stats": "Nivel Multiversal Bajo. Kaiju colosal morado y blanco, alas mecánicas, reactor rojo brillante en la frente." }
    ],
    "feats": [ "Sometió y casi expulsa del ring a Goku, Vegeta, Gohan, Freezer y 17 a la vez.", "Se comió a Androide 18 (quien tuvo que ser rescatada por 17)." ],
    "psychology": "Monstruo cibernético sin habla; opera con puro instinto de supervivencia y órdenes militares destructivas.",
    "weaknesses": "El reactor de energía en su frente es su núcleo vital; si se rompe (como hizo Androide 17 con su barrera), su poder colapsa."
  },
  // 4. GAMMA 1
  {
    "id": "gamma-1-dragon-ball-super-885",
    "name": "Gamma 1",
    "alias": "El Androide de la Justicia #1",
    "universe": "Dragon Ball Super",
    "saga": "Super Hero",
    "version": "Androide Red Ribbon de Nueva Generación",
    "tier": "Tier 2-C | Nivel Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. Creado por el Dr. Hedo. Según Piccolo, su poder base rivaliza con el de Goku y Vegeta en Super Saiyan Blue (era Moro). Combatió de tú a tú contra Gohan Definitivo y demostró una durabilidad mecánica absurda.",
    "range": "Planetario (Pistola de Rayos Láser).",
    "speed": { "combat": "Inconmensurable.", "reaction": "Inconmensurable.", "travel": "MFTL+.", "attack": "Precisión quirúrgica." },
    "strength": { "striking": "Clase Multiversal Bajo.", "lifting": "Clase Universal." },
    "durability": "Nivel Multiversal Bajo. Cuerpo de aleación ultra-avanzada inmune al desgaste biológico.",
    "stamina": "Infinita (Batería interna del Dr. Hedo).",
    "battleIQ": "Serio, disciplinado y calculador. Analiza los patrones marciales del rival y los contrarresta.",
    "haxTags": [ "Androide de Ki Infinito", "Pistola Láser de la Justicia", "Capa Deflectora de Ki" ],
    "arsenal": {
      "basicAttacks": "Golpes acrobáticos de superhéroe con onomatopeyas visuales (¡POW!, ¡BAM!).",
      "superAttacks": [
        { "name": "Disparo Láser de Precisión", "desc": "Dispara su pistola de rayos con potencia modulable, desde aturdimiento hasta perforación letal.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Justice Strike Definitivo", "desc": "Se lanza en picado envuelto en una barrera de energía roja formando un escudo impenetrable que impacta como un meteorito.", "cost": "30% Batería" }
      ],
      "passives": [
        { "name": "Protocolo de Héroe", "desc": "Su resistencia moral aumenta si cree que está protegiendo a los inocentes.", "cost": "Pasivo ético" }
      ]
    },
    "forms": [ 
      { "id": "gamma-1-base", "name": "Gamma 1", "stats": "Nivel Multiversal Bajo. Traje militar azul con capa roja, una sola aleta en la cabeza, número 1 en el pecho." }
    ],
    "feats": [ "Peleó en total igualdad de condiciones contra Gohan Definitivo.", "Sobrevivió a la batalla contra Cell Max y ayudó en el contraataque." ],
    "psychology": "Noble pero engañado inicialmente por Magenta; cree ciegamente en ser un héroe de la justicia que defiende al mundo de los 'monstruos alienígenas' (Guerreros Z).",
    "weaknesses": "Le cuesta adaptarse a explosiones de furia irracional que superen sus modelos de cálculo (como Gohan enfadado)."
  },
  // 5. GAMMA 2
  {
    "id": "gamma-2-dragon-ball-super-446",
    "name": "Gamma 2",
    "alias": "El Androide de la Justicia #2 / El Héroe del Sacrificio",
    "universe": "Dragon Ball Super",
    "saga": "Super Hero",
    "version": "Androide Red Ribbon de Nueva Generación",
    "tier": "Tier 2-C | Nivel Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. El gemelo más extrovertido creado por el Dr. Hedo. Derrotó a Piccolo en su forma base con facilidad. En la batalla final contra Cell Max, realizó un ataque suicida en picado desde la estratosfera que destruyó el brazo izquierdo del titán monstruoso a costa de su propia vida.",
    "range": "Planetario.",
    "speed": { "combat": "Inconmensurable.", "reaction": "Inconmensurable.", "travel": "MFTL+.", "attack": "Rápido y teatral." },
    "strength": { "striking": "Clase Multiversal Bajo.", "lifting": "Clase Universal." },
    "durability": "Nivel Multiversal Bajo. Murió tras gastar el 100% de su energía en su ataque final.",
    "stamina": "Infinita hasta que sobrecarga su reactor para el ataque final.",
    "battleIQ": "Teatral y juguetón pero con un heroísmo intrínseco insuperable.",
    "haxTags": [ "Androide de Ki Infinito", "Ataque Suicida Estratosférico", "Pose de Superhéroe" ],
    "arsenal": {
      "basicAttacks": "Patadas voladoras con poses teatrales y efectos de sonido cómicos.",
      "superAttacks": [
        { "name": "Ráfaga de Pistola Doble", "desc": "Disparos continuos acrobáticos desde el aire.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Core Destruction / Ataque Máximo de Sacrificio", "desc": "Vuela a la órbita terrestre, sobrecarga su reactor nuclear al 300% y cae en picado a la velocidad de la luz como un cometa azul para inmolarse sobre el enemigo (Cercenó el brazo de Cell Max).", "cost": "100% Energía / Muerte" }
      ],
      "passives": [
        { "name": "Alma de Superhéroe", "desc": "Nunca huye de una batalla si hay vidas inocentes en peligro.", "cost": "Heroísmo Absoluto" }
      ]
    },
    "forms": [ 
      { "id": "gamma-2-base", "name": "Gamma 2", "stats": "Nivel Multiversal Bajo. Traje militar azul con capa azul, dos aletas en la cabeza, número 2 en el pecho." }
    ],
    "feats": [ "Derrotó a Piccolo Base sin recibir un rasguño.", "Destruyó el brazo invulnerable de Cell Max sacrificando su propia existencia." ],
    "psychology": "Alegre, infantil, apasionado por las poses de superhéroe y con un sentido del sacrificio puro.",
    "weaknesses": "Su sobrecarga de reactor destruye su propio cuerpo."
  },
  // 6. BASIL
  {
    "id": "basil-dragon-ball-super-757",
    "name": "Basil",
    "alias": "El Lobo Pateador / Trío del Peligro",
    "universe": "Dragon Ball Super",
    "saga": "Torneo de Exhibición / Torneo del Poder",
    "version": "Dopaje de Fruta Mágica",
    "tier": "Tier 3-A | Nivel Universal Bajo",
    "ap": "Nivel Universal Bajo. El hermano menor del Trío del Peligro del Universo 9. Solo pelea usando sus piernas. Al consumir la fruta mágica de su Dios de la Destrucción (Sidra), sus músculos se inflaron y su Ki aumentó hasta presionar a Majin Buu Gordo.",
    "range": "Planetario (Ráfagas desde los pies).",
    "speed": { "combat": "MFTL.", "reaction": "MFTL.", "travel": "MFTL.", "attack": "Ráfagas de patadas incesantes." },
    "strength": { "striking": "Clase Universal Bajo.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Universal Bajo. Resistió varios golpes de Majin Buu.",
    "stamina": "Media (La droga mágica desgasta su cuerpo).",
    "battleIQ": "Luchador agresivo y callejero que abruma con velocidad de piernas.",
    "haxTags": [ "Estilo Solo Piernas", "Potenciador de Fruta Mágica", "Triangle Danger" ],
    "arsenal": {
      "basicAttacks": "Patadas hacha, barridos acrobáticos, patadas de tijera.",
      "superAttacks": [
        { "name": "Shining Blaster", "desc": "Dispara esferas rojas explosivas de Ki directamente desde sus botas con cada patada.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Dopaje de Fruta Roja", "desc": "Come la fruta prohibida de Sidra, aumentando su tamaño y poder de ataque un 200% temporalmente.", "cost": "Consumible" }
      ],
      "passives": [
        { "name": "Pies de Acero", "desc": "Sus piernas están tan endurecidas que desvían ataques cortantes menores.", "cost": "Defensa física" }
      ]
    },
    "forms": [ 
      { "id": "basil-base", "name": "Lobo Rojo", "stats": "Nivel Universal Bajo. Capa andrajosa, pelaje rojo, cuerpo ágil." },
      { "id": "basil-buff", "name": "Modo Drogado", "stats": "Nivel Universal Bajo (Alto). Músculos gigantes, ojos rojos inyectados en sangre." }
    ],
    "feats": [ "Soportó una intensa pelea contra Majin Buu.", "Formó el Triangle Danger que puso en apuros a Goku y Vegeta." ],
    "psychology": "Sádico y burlón; se ríe a carcajadas cuando patea a sus oponentes en el suelo.",
    "weaknesses": "Cero uso de las manos (no sabe golpear con los puños); bajón de energía al terminar el efecto de la fruta."
  },
  // 7. LAVENDER
  {
    "id": "lavender-dragon-ball-super-460",
    "name": "Lavender",
    "alias": "El Lobo Venenoso / Trío del Peligro",
    "universe": "Dragon Ball Super",
    "saga": "Torneo de Exhibición / Torneo del Poder",
    "version": "Veneno Físico y de Ki",
    "tier": "Tier 3-A | Nivel Universal Bajo",
    "ap": "Nivel Universal Bajo. El hermano mediano del Trío del Peligro. Su cuerpo segrega un veneno negro que corrompe la carne, quema la piel y ciega la vista. Dejó ciego a Gohan Definitivo y casi lo mata de intoxicación celular durante el torneo de exhibición.",
    "range": "Físico y Aliento Venenoso.",
    "speed": { "combat": "MFTL.", "reaction": "MFTL.", "travel": "MFTL.", "attack": "Golpes impredecibles." },
    "strength": { "striking": "Clase Universal Bajo.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Universal Bajo. Empató con Gohan en el combate de exhibición.",
    "stamina": "Muy Alta (Inmune a su propio veneno).",
    "battleIQ": "Peleador sucio y rastrero; busca untar veneno en los ojos y heridas del rival.",
    "haxTags": [ "Veneno Corrosivo Celular", "Niebla Tóxica", "Inmunidad a Toxinas" ],
    "arsenal": {
      "basicAttacks": "Garras untadas de veneno negro, mordiscos.",
      "superAttacks": [
        { "name": "Aliento de Veneno (Poison Breath)", "desc": "Sopla una nube de gas negro que ciega y sofoca los pulmones del enemigo.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Golpe de Necrosis Letal", "desc": "Inyecta una dosis masiva de toxina en el torrente sanguíneo del oponente, reduciendo su HP y velocidad un 10% por turno.", "cost": "30% Ki" }
      ],
      "passives": [
        { "name": "Toxina Incurable en Combate", "desc": "El veneno no desaparece con el tiempo; obliga al rival a quemar todo su Ki para contener la infección (como hizo Gohan).", "cost": "Debuff Permanente" }
      ]
    },
    "forms": [ 
      { "id": "lavender-base", "name": "Lobo Venenoso", "stats": "Nivel Universal Bajo. Pelaje amarillento andrajoso, jorobado, baba negra en la boca." }
    ],
    "feats": [ "Dejó completamente ciego a Gohan y forzó un empate por doble K.O.", "Contaminó el Ki de múltiples guerreros en el Torneo del Poder." ],
    "psychology": "Deforme y psicópata; disfruta viendo a sus víctimas retorcerse de dolor por el veneno.",
    "weaknesses": "Guerreros que luchen sintiendo las corrientes de aire (como Gohan ciego) pueden predecir sus movimientos y noquearlo."
  },
  // 8. GLORIO
  {
    "id": "glorio-dragon-ball-daima-186",
    "name": "Glorio",
    "alias": "El Pistolero del Reino Demoníaco",
    "universe": "Dragon Ball Daima",
    "saga": "Reino de los Demonios",
    "version": "Piloto y Cazarrecompensas",
    "tier": "Tier 7-B a 5-C | Nivel Ciudad a Lunar",
    "ap": "Nivel Ciudad a Lunar. Un hábil pistolero demoníaco del Tercer Mundo Demoníaco. Piloto experto de naves y tirador letal con armas de magia oscura, que acompaña a Goku Mini en su viaje para revertir el deseo del Rey Gomah.",
    "range": "Decenas de metros (Pistolas de Magia Oscura).",
    "speed": { "combat": "Hipersónica+.", "reaction": "Hipersónica+.", "travel": "En Nave Espacial Demoníaca.", "attack": "Disparos relámpago." },
    "strength": { "striking": "Clase Ciudad.", "lifting": "Clase Toneladas." },
    "durability": "Nivel Ciudad. Fisiología demoníaca resistente a climas extremos.",
    "stamina": "Alta.",
    "battleIQ": "Cazador astuto y pragmático; conoce a la perfección las leyes y peligros del Reino Demonio.",
    "haxTags": [ "Fisiología Demoníaca", "Pistolas de Rayos Mágicos", "Piloto de Élite" ],
    "arsenal": {
      "basicAttacks": "Disparos duales de pistola, patadas tácticas.",
      "superAttacks": [
        { "name": "Disparo Perforador Demoníaco", "desc": "Dispara una bala de Ki mágico comprimido que atraviesa armaduras biónicas.", "cost": "10% Ki Mágico" }
      ],
      "ultimateAttacks": [
        { "name": "Fuego Cruzado de Cazarrecompensas", "desc": "Despliega trampas mágicas y dispara en abanico continuo derribando monstruos gigantes.", "cost": "30% Ki" }
      ],
      "passives": [
        { "name": "Navegador del Reino Oscuro", "desc": "Inmune a la desorientación y a las ilusiones mágicas del Reino de los Demonios.", "cost": "Pasivo geográfico" }
      ]
    },
    "forms": [ 
      { "id": "glorio-base", "name": "Glorio", "stats": "Nivel Ciudad. Piel azulada, orejas puntiagudas demoníacas, abrigo marrón y pistolas enfundadas." }
    ],
    "feats": [ "Guió a Goku a través de los mundos demoníacos desconocidos.", "Derribó monstruos gigantescos con disparos quirúrgicos." ],
    "psychology": "Reservado, misterioso y desconfiado, pero con un código de honor profesional inquebrantable.",
    "weaknesses": "Poder destructivo limitado frente a guerreros divinos o Saiyans adultos."
  },
  // 9. PANZY
  {
    "id": "panzy-dragon-ball-daima-138",
    "name": "Panzy",
    "alias": "La Princesa Mecánica de los Demonios",
    "universe": "Dragon Ball Daima",
    "saga": "Reino de los Demonios",
    "version": "Ingeniera Demoníaca",
    "tier": "Tier 8-A | Nivel Multi-Bloque",
    "ap": "Nivel Multi-Bloque (Con armas y gadgets mecánicos). La rebelde hija del Rey del Segundo Mundo Demonio. Es una genio de la mecánica capaz de reparar y modificar naves y armas demoníacas sobre la marcha.",
    "range": "Físico y Gadgets.",
    "speed": { "combat": "Supersónica.", "reaction": "Supersónica.", "travel": "En vehículos modificados.", "attack": "Herramientas pesadas." },
    "strength": { "striking": "Clase Muro.", "lifting": "Clase Humano Pico." },
    "durability": "Nivel Multi-Bloque (Con armaduras).",
    "stamina": "Media.",
    "battleIQ": "Genio de la ingeniería y resolución de puzzles mecánicos bajo fuego enemigo.",
    "haxTags": [ "Genio de la Mecánica Demoníaca", "Gadgets de Soporte" ],
    "arsenal": {
      "basicAttacks": "Golpes con llaves inglesas gigantes, disparos con armas de perdigones mágicos.",
      "superAttacks": [
        { "name": "Bomba de Humo y Chispas", "desc": "Arroja un artefacto que ciega y desactiva radares enemigos.", "cost": "Gadget" }
      ],
      "ultimateAttacks": [
        { "name": "Reparación Relámpago", "desc": "Repara al 100% las armas o naves de su equipo en medio del combate.", "cost": "Soporte Técnico" }
      ],
      "passives": [
        { "name": "Espíritu Rebelde", "desc": "Inmune a la intimidación de tiranos o demonios mayores.", "cost": "Pasivo psicológico" }
      ]
    },
    "forms": [ 
      { "id": "panzy-base", "name": "Panzy", "stats": "Nivel Multi-Bloque. Pequeña demonio con cuernos pequeños, gafas de soldador y mochila de herramientas." }
    ],
    "feats": [ "Reparó la nave de Goku y Glorio en territorio hostil.", "Desafió abiertamente la tiranía de su propio padre." ],
    "psychology": "Enérgica, valiente, habladora y apasionada por la tecnología y la libertad.",
    "weaknesses": "Físicamente vulnerable sin sus herramientas o vehículos de apoyo."
  },
  // 10. TAMAGAMI NÚMERO 1
  {
    "id": "tamagami-n-mero-1-dragon-ball-daima-763",
    "name": "Tamagami Número 1",
    "alias": "El Guardián de la Esfera Demoníaca",
    "universe": "Dragon Ball Daima",
    "saga": "Reino de los Demonios",
    "version": "Guardián de las Dragon Balls Oscuras",
    "tier": "Tier 4-B | Nivel Sistema Solar",
    "ap": "Nivel Sistema Solar. Uno de los autómatas mágicos creados por el Gran Maestro Neva para proteger las Esferas del Dragón del Reino Demonio. Su fuerza física y resistencia mágica superan holgadamente el poder de Goku SSJ infantil.",
    "range": "Físico y Espadas de Magia Antigua.",
    "speed": { "combat": "MFTL.", "reaction": "MFTL.", "travel": "MFTL.", "attack": "Pesada y perfecta." },
    "strength": { "striking": "Clase Sistema Solar.", "lifting": "Clase Estelar." },
    "durability": "Nivel Sistema Solar. Blindaje de roca mágica ancestral indestructible para golpes normales.",
    "stamina": "Infinita (Autómata mágico).",
    "battleIQ": "Programación de guardia marcial milenaria perfecta; no comete errores de postura.",
    "haxTags": [ "Autómata Mágico Ancestral", "Espada del Guardián", "Inmunidad al Dolor" ],
    "arsenal": {
      "basicAttacks": "Mandobles con espadas dobles gigantes, pisotones sísmicos.",
      "superAttacks": [
        { "name": "Corte de Ruptura Mágica", "desc": "Blande su espada liberando una ola cortante de energía azul que parte montañas en dos.", "cost": "15% Ki Mágico" }
      ],
      "ultimateAttacks": [
        { "name": "Juicio del Guardián de la Esfera", "desc": "Clava su espada en el suelo desatando una red de pilares de luz mágica que atrapan y aplastan al intruso.", "cost": "40% Magia" }
      ],
      "passives": [
        { "name": "Voto de Protección", "desc": "Su armadura se endurece un 100% si el oponente intenta tocar la Esfera del Dragón que custodia.", "cost": "Defensa de Guardián" }
      ]
    },
    "forms": [ 
      { "id": "tamagami-1", "name": "Tamagami #1", "stats": "Nivel Sistema Solar. Gigante de armadura azul/dorada, casco con cuernos y espada ceremonial." }
    ],
    "feats": [ "Soportó los golpes de Goku con el Báculo Sagrado sin retroceder.", "Ha custodiado la esfera durante milenios sin ser derrotado." ],
    "psychology": "Constructo sin emociones; cumple su programación de proteger las esferas de los mortales indignos.",
    "weaknesses": "Patrones de ataque predecibles de centinela; puede ser engañado con acrobacias a alta velocidad."
  },
  // 11. MAJIN KUU
  {
    "id": "majin-kuu-dragon-ball-daima-936",
    "name": "Majin Kuu",
    "alias": "El Monstruo de Gas / Siervo del Rey Gomah",
    "universe": "Dragon Ball Daima",
    "saga": "Reino de los Demonios",
    "version": "Entidad Gaseosa / Biomecánica",
    "tier": "Tier 5-A | Nivel Planeta Grande",
    "ap": "Nivel Planeta Grande. Una criatura mágica del reino demoníaco con un cuerpo maleable y gaseoso. Puede regenerar su cuerpo a voluntad y disparar miasma corruptor que debilita a sus enemigos.",
    "range": "Decenas de metros (Niebla Corrosiva).",
    "speed": { "combat": "Relativista.", "reaction": "Relativista.", "travel": "Flotación rápida.", "attack": "Amorfo." },
    "strength": { "striking": "Clase Planeta.", "lifting": "Clase Gas/Amorfo." },
    "durability": "Nivel Planeta Grande. Su cuerpo de gas denso absorbe y dispersa ataques contundentes.",
    "stamina": "Infinita.",
    "battleIQ": "Astuto, ataca disolviéndose en el entorno.",
    "haxTags": [ "Fisiología Gaseosa / Amorfa", "Regeneración Mágica", "Miasma Demoníaco" ],
    "arsenal": {
      "basicAttacks": "Tentáculos de gas comprimido, golpes elásticos.",
      "superAttacks": [
        { "name": "Bomba de Miasma Oscuro", "desc": "Dispara proyectiles viscosos que envenenan y reducen el Ki del rival.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Envoltura Asfixiante", "desc": "Se disuelve completamente y envuelve al oponente en una nube de gas sofocante que drena su vitalidad segundo a segundo.", "cost": "35% Magia" }
      ],
      "passives": [
        { "name": "Intangibilidad Parcial", "desc": "Los ataques físicos cortantes pasan a través de su cuerpo sin hacerle daño.", "cost": "Pasivo defensivo" }
      ]
    },
    "forms": [ 
      { "id": "kuu-base", "name": "Majin Kuu", "stats": "Nivel Planeta Grande. Monstruo gelatinoso de color púrpura oscuro con ojos brillantes y boca demoníaca." }
    ],
    "feats": [ "Sometió a batallones enteros del reino demoníaco.", "Retuvo a guerreros experimentados con su miasma corruptor." ],
    "psychology": "Siniestro y glotón; disfruta sofocar a sus enemigos y alimentarse de su miedo.",
    "weaknesses": "Vulnerable a ataques de calor extremo o ráfagas de viento colosales que dispersen su masa gaseosa."
  },
  // 12. MONAKA
  {
    "id": "monaka-dragon-ball-super-955",
    "name": "Monaka",
    "alias": "El Gran Repartidor Galáctico / El 'As' de Beerus",
    "universe": "Dragon Ball Super",
    "saga": "Torneo U6 vs U7",
    "version": "Humanoide Alienígena (Repartidor)",
    "tier": "Tier 10-B | Nivel Humano Promedio (Nivel Dios del Bluff)",
    "ap": "Nivel Humano Promedio (Pezones Gigantes). El repartidor cósmico que Beerus usó como mentira piadosa para motivar a Goku a entrenar más duro. No tiene poder marcial alguno y se desmaya de miedo ante un Kamehameha, pero 'derrotó' a Hit en la final del torneo cuando Hit fingió recibir su puñetazo flojo y se tiró del ring a propósito.",
    "range": "Cuerpo a cuerpo (Centímetros).",
    "speed": { "combat": "Humano Lento.", "reaction": "Pésima (Se desmaya).", "travel": "En Camión Espacial de Reparto.", "attack": "Puñetazo tembloroso." },
    "strength": { "striking": "Clase Humano Débil.", "lifting": "Clase Paquete Postal." },
    "durability": "Nivel Humano. Recibió un golpe casual de Goku en la cara y sobrevivió llorando de dolor.",
    "stamina": "Baja (Se hiperventila con la adrenalina).",
    "battleIQ": "Nulo en combate. Maestro absoluto en logística de paquetería galáctica y entregas a tiempo.",
    "haxTags": [ "El Gran Engaño de Beerus", "Pezones Gigantes Legendarios", "Suerte Cósmica Inexplicable" ],
    "arsenal": {
      "basicAttacks": "Temblar de miedo con los ojos en blanco.",
      "superAttacks": [
        { "name": "Entrega Express Galáctica", "desc": "Llega con una caja de encomienda distrayendo a Dioses de la Destrucción.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "El Puñetazo Legendario (El Bluff de Hit)", "desc": "Cierra los ojos y da un puñetazo débil y tembloroso. Si el oponente tiene código de honor (como Hit), fingirá un daño colosal y saldrá volando fuera de la arena regalándole la victoria.", "cost": "100% Suerte" }
      ],
      "passives": [
        { "name": "Ilusión de Fuerza Absoluta", "desc": "Goku cree genuinamente que Monaka es más fuerte que él y que Beerus, negándose a atacarlo en serio para no 'destruir el universo'.", "cost": "Escudo psicológico" }
      ]
    },
    "forms": [ 
      { "id": "monaka-base", "name": "Monaka", "stats": "Poder 3. Pequeño extraterrestre rojo con cuernos, pezones gigantes y uniforme verde de paquetería." }
    ],
    "feats": [ "Soportó un puñetazo directo de Goku en la cara sin morir (Goku se contuvo).", "Campeón oficial del Torneo de los Universos 6 y 7 tras 'noquear' a Hit." ],
    "psychology": "Un pobre repartidor asalariado aterrorizado de estar rodeado de dioses y monstruos que pueden destruir universos.",
    "weaknesses": "Literalmente cualquier cosa en el multiverso; no sabe pelear."
  }
];

const filePath = path.resolve(__dirname, '../src/data/characters.js');
let content = fs.readFileSync(filePath, 'utf8');

const prefix = 'export const INITIAL_CHARACTERS = ';
let currentList = eval(content.replace(prefix, ''));
console.log(`Current characters count: ${currentList.length}`);

let updatedCount = 0;
batch19Upgrades.forEach(upgrade => {
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

console.log(`Batch 19 Upgrade Complete. ${updatedCount} characters successfully enhanced. (DBS Manga, Daima & Super Heroes).`);
