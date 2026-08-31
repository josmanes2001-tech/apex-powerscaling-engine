const fs = require('fs');
const path = require('path');

const batch10Upgrades = [
  // 1. PICCOLO KAMI (SAGA CELL)
  {
    "id": "piccolo-saga-cell-buu-saga-androides-946",
    "name": "Piccolo",
    "alias": "El Super Namekiano",
    "universe": "Dragon Ball Z",
    "saga": "Saga Androides / Cell",
    "version": "Fusión con Kami-Sama",
    "tier": "Tier 4-C | Nivel Estrella Enana",
    "ap": "Nivel Estrella Enana. Tras fusionarse con Kami-Sama y volver a ser el Namekiano sin nombre original, el poder de Piccolo explotó drásticamente, superando al Super Saiyajin ordinario (Vegeta/Goku enfermos). En este estado era completamente igual al Androide 17 y humilló a Cell Imperfecto en su primer encuentro.",
    "range": "Planetario mediante Granadas de Luz.",
    "speed": { "combat": "FTL.", "reaction": "FTL.", "travel": "FTL.", "attack": "Veloz, dominó a Androide 17 en agilidad táctica." },
    "strength": { "striking": "Clase Estrella Enana.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Estrella Enana. Recibió golpes directos de 17 y un ataque letal al cuello de Cell Imperfecto que logró resistir lo suficiente para huir o regenerarse.",
    "stamina": "Muy Alta, pero inferior a la energía infinita de los Androides.",
    "battleIQ": "El mejor táctico de los Guerreros Z. Extrajo información crucial de Cell fingiendo debilidad. Usa el terreno para colocar trampas.",
    "haxTags": [ "Regeneración Namekiana Avanzada", "Magia de Kami (Creación de Ropa)", "Gigantificación (Rara vez usada)" ],
    "arsenal": {
      "basicAttacks": "Golpes letales de precisión, estiramiento de extremidades, bloqueos firmes.",
      "superAttacks": [
        { "name": "Makankosappo", "desc": "Su ataque perforante clásico, ahora disparado mucho más rápido.", "cost": "20% Ki" },
        { "name": "Onda Explosiva (Demoníaca)", "desc": "Libera Ki de todo su cuerpo para empujar a enemigos múltiples o salir de un agarre.", "cost": "10% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Granada Infernal (Hellzone Grenade)", "desc": "Piccolo dispara cientos de ráfagas erráticas que parecen fallar, pero quedan suspendidas en el aire rodeando al enemigo. Luego baja los brazos bruscamente, haciendo que todas impacten a la vez en un punto muerto sin escape.", "cost": "45% Ki" }
      ],
      "passives": [
        { "name": "Sabiduría de Dios", "desc": "Su conexión con Kami-sama le permite sentir intenciones malignas y entender la situación global del planeta Tierra instantáneamente.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "piccolo-kami", "name": "Super Namekiano", "stats": "Nivel Estrella Enana. Sin pesas (Capa y turbante arrojados). Físico imponente." } ],
    "feats": [
      "Le arrancó un brazo al Androide 20 (Gero) de un golpe.",
      "Empató con el Androide 17 obligándolo a ir en serio.",
      "Humilló la versión imperfecta inicial de Cell."
    ],
    "psychology": "Sabio, frío y paternal. Ha superado completamente su fase demoníaca, asimilando la bondad de Kami, pero manteniendo la agresividad en combate para asegurar la paz.",
    "weaknesses": "Regenerarse de heridas mayores le drena muchísima energía (Ki). Vulnerable a ataques que desintegren su cabeza."
  },
  // 2. MECHA FREEZER
  {
    "id": "mecha-freezer-saga-androides-514",
    "name": "Mecha Freezer",
    "alias": "El Emperador Cyborg",
    "universe": "Dragon Ball Z",
    "saga": "Saga Androides (Llegada)",
    "version": "Renacimiento Cibernético",
    "tier": "Tier 4-B | Nivel Estrella Enana (Alta)",
    "ap": "Nivel Estrella Enana Alta. Reconstruido con partes robóticas, su poder superaba al de su 100% en Namek de forma relajada. Estaba seguro de poder matar al Super Saiyajin original de Goku junto con su padre, pero subestimó trágicamente el poder de un SSJ mucho más entrenado (Trunks del Futuro).",
    "range": "Planetario a Sistema Solar Menor (Supernova).",
    "speed": { "combat": "FTL.", "reaction": "FTL.", "travel": "Viaje Espacial.", "attack": "Rayos casi instantáneos." },
    "strength": { "striking": "Clase Estrella Enana.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Estrella Enana (Partes mecánicas). Irónicamente fue cortado como mantequilla por la espada de Trunks canalizando Ki.",
    "stamina": "Muy Alta. La tecnología estabilizó la pérdida rápida de Ki que sufría al 100%.",
    "battleIQ": "Arrogante e impaciente. Su trauma con Goku lo ciega de rabia.",
    "haxTags": [ "Fisiología Cibernética", "Sobrevivencia en el Vacío Absoluto" ],
    "arsenal": {
      "basicAttacks": "Cortes con la mano robótica y latigazos de cola robótica.",
      "superAttacks": [
        { "name": "Death Beam Continuo", "desc": "Dispara decenas de rayos letales por los dedos de su mano cibernética para perforar armaduras.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Supernova Vengativa", "desc": "Una bola de energía colosal 10 veces más grande que la de Namek. Intentó volar a Trunks y al planeta con ella sin avisar.", "cost": "50% Ki" }
      ],
      "passives": [
        { "name": "Trauma del Mono", "desc": "Al enfrentarse a un Super Saiyan de cabello dorado, entra en pánico subconsciente y lanza todo su poder desordenadamente, bajando su precisión táctica al 0%.", "cost": "Debuff psicológico" }
      ]
    },
    "forms": [ { "id": "mecha-freezer-base", "name": "Forma Cyborg", "stats": "Nivel Estrella Enana Alta. Mitad de la cara metálica, brazo izquierdo y torso de acero alienígena, cola robótica." } ],
    "feats": [
      "Sobrevivió a la explosión de Namek mutilado.",
      "Viajó a la Tierra con la intención de torturar a los amigos de Goku."
    ],
    "psychology": "Hervido en resentimiento. Odia a Goku más que a cualquier otra cosa en el universo y sufre de un complejo de superioridad dañado irreversiblemente.",
    "weaknesses": "Exceso de confianza que se convierte en pánico. Su cuerpo metálico puede ser rebanado por acero reforzado con Ki Saiyan alto."
  },
  // 3. CUI
  {
    "id": "cui-saga-namek-132",
    "name": "Cui",
    "alias": "Rival Caído de Vegeta",
    "universe": "Dragon Ball Z",
    "saga": "Saga Namek",
    "version": "Soldado de Élite",
    "tier": "Tier 5-A | Nivel Planeta",
    "ap": "Nivel Planeta. Con un nivel oficial de 18,000 unidades, Cui era exactamente igual a Vegeta en su llegada a la Tierra. Capaz de destruir planetas fácilmente y liderar purgas masivas para el ejército de Freezer.",
    "range": "Superficie planetaria.",
    "speed": { "combat": "Relativista.", "reaction": "Relativista.", "travel": "Sub-relativista.", "attack": "Veloz." },
    "strength": { "striking": "Clase Planetaria.", "lifting": "Clase Luna." },
    "durability": "Nivel Planeta. Murió instantáneamente al recibir un ataque de 24,000 de AP.",
    "stamina": "Media.",
    "battleIQ": "Cobarde tramposo. Finge que Freezer está detrás del enemigo para atacar a traición.",
    "haxTags": [ "Trucos Sucios" ],
    "arsenal": {
      "basicAttacks": "Golpes arrogantes y ráfagas simples de ki.",
      "superAttacks": [
        { "name": "Ráfaga Desesperada", "desc": "Lanza decenas de balas de ki cuando entra en pánico.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "¡Mira, es Freezer!", "desc": "Grita señalando detrás del enemigo. Si este voltea, le lanza un poderoso cañón energético rojo a quemarropa.", "cost": "20% Ki" }
      ],
      "passives": [
        { "name": "Soberbia del Scouter", "desc": "Confía 100% en las máquinas. Si su scouter explota por una subida de ki irreal, se queda paralizado por el miedo un turno entero.", "cost": "Debuff psicológico" }
      ]
    },
    "forms": [ { "id": "cui-base", "name": "Soldado Élite", "stats": "Nivel Planeta. Alienígena morado escamoso con aletas en las mejillas, armadura de Freezer." } ],
    "feats": [
      "Sirvió como rival de Vegeta durante años antes del zenkai."
    ],
    "psychology": "Un clásico bravucón, arrogante cuando tiene ventaja y patético cuando es superado. Se creía mejor que Vegeta.",
    "weaknesses": "Total pánico si pierde la superioridad."
  },
  // 4. SOLDADOS DE FREEZER (APPULE / RASPBERRY)
  {
    "id": "soldados-de-freezer-saga-namek-793",
    "name": "Soldados de Freezer",
    "alias": "Carne de Cañón Galáctica",
    "universe": "Dragon Ball Z / Super",
    "saga": "Namek / Resurrección de F",
    "version": "Soldado Raso Promedio",
    "tier": "Tier 7-B a 5-C | Nivel Ciudad a Lunar",
    "ap": "Nivel Lunar. Soldados básicos equipados con armaduras y cañones bláster. Son más débiles que Raditz en muchos casos, pero vienen en cantidades industriales (decenas de miles).",
    "range": "Corta a media distancia (Blásters).",
    "speed": { "combat": "Hipersónica.", "reaction": "Hipersónica.", "travel": "Supersónica (En vuelo o motos flotantes).", "attack": "Disparos rápidos." },
    "strength": { "striking": "Clase Ciudad.", "lifting": "Clase Toneladas." },
    "durability": "Nivel Ciudad. Mueren a puñetazos de humanos como Krilin o Yamcha sin usar ki letal.",
    "stamina": "Baja.",
    "battleIQ": "Siguen órdenes de grupo; si pierden al líder, huyen despavoridos.",
    "haxTags": [ "Trabajo de Enjambre", "Blásters de Plasma" ],
    "arsenal": {
      "basicAttacks": "Disparos con armas en los brazos, golpes torpes.",
      "superAttacks": [
        { "name": "Fuego de Cobertura", "desc": "Disparan todos al mismo tiempo.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Llamar al Líder", "desc": "Lloran y suplican por ayuda de un élite.", "cost": "Desesperación" }
      ],
      "passives": [
        { "name": "Carne de Cañón", "desc": "Reciben 300% de daño extra de técnicas de área masivas (Kikoho, Masenko, Barridos).", "cost": "Debuff" }
      ]
    },
    "forms": [ { "id": "soldado-raso", "name": "Recluta", "stats": "Nivel Lunar (Máximo). Varias razas alienígenas con armadura blanca y Scouters." } ],
    "feats": [
      "Invasores de planetas pacíficos y sin ki."
    ],
    "psychology": "Matones cobardes obligados a servir por el terror que le tienen a Freezer.",
    "weaknesses": "Poder insignificante frente a guerreros."
  },
  // 5. PAN (GT)
  {
    "id": "pan-saga-buu-780",
    "name": "Pan",
    "alias": "La Nieta Aventurera",
    "universe": "Dragon Ball GT",
    "saga": "El Gran Viaje / Dragones Oscuros",
    "version": "Niña (10 años)",
    "tier": "Tier 4-C | Nivel Estrella Enana (Bajo)",
    "ap": "Nivel Estrella Enana. Hija de Gohan y Videl. A los 4 años le dio la vuelta al mundo volando y derrotó a Goten (jugando) en el torneo. En GT, tiene un poder asombroso para no ser Super Saiyajin, destrozando máquinas alienígenas y reteniendo a Dragones Oscuros como Naturon Shenron o Rage Shenron con sus tácticas ágiles.",
    "range": "Montañas.",
    "speed": { "combat": "FTL.", "reaction": "FTL.", "travel": "Supersónica.", "attack": "Veloz." },
    "strength": { "striking": "Clase Estrella Enana.", "lifting": "Clase Montañas." },
    "durability": "Nivel Estrella Enana. Fue abofeteada y herida por todos los jefes mayores de GT pero nunca murió durante la trama principal.",
    "stamina": "Media. Llora si la situación es demasiado oscura.",
    "battleIQ": "Luchadora talentosa pero impulsiva e infantil. Cae en trampas emocionales fácilmente.",
    "haxTags": [ "Genética 1/4 Saiyan", "Agilidad Externa" ],
    "arsenal": {
      "basicAttacks": "Artes marciales mixtas de su abuelo Satán y su madre Videl perfeccionadas por Ki Saiyan.",
      "superAttacks": [
        { "name": "Kamehameha", "desc": "Una versión menor del ataque clásico heredado de Goku.", "cost": "15% Ki" },
        { "name": "Golpe de Doncella", "desc": "Aluvión de patadas rápidas.", "cost": "10% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Danza Salvaje", "desc": "Se lanza de cabeza envolviéndose en Ki y taladrando al enemigo.", "cost": "25% Ki" }
      ],
      "passives": [
        { "name": "Motivación del Abuelo", "desc": "Si está en peligro, el poder de ataque de Goku (GT) se multiplica x2 por la ira de protegerla.", "cost": "Pasivo de Apoyo" }
      ]
    },
    "forms": [ { "id": "pan-gt", "name": "Híbrida Saiyan", "stats": "Nivel Estrella Enana (Bajo). Pañuelo naranja, mochila, camiseta roja." } ],
    "feats": [
      "Sobrevivió a los peligros del multiverso viajando con Goku y Trunks.",
      "Derrotó a decenas de soldados del General Rilldo sola."
    ],
    "psychology": "Rebelde, marimacho y mandona. Tiene un temperamento fuerte heredado de Chi-Chi y Videl, pero adora a su abuelo Goku (Niño) incondicionalmente.",
    "weaknesses": "Falta de una transformación (SSJ) que eleve su poder, lo que la relega al papel de damisela en aprietos frente a los Villanos Tier 3-C."
  },
  // 6. UUB (FINAL DE Z / GT)
  {
    "id": "uub-saga-buu-276",
    "name": "Uub",
    "alias": "La Reencarnación de la Majia Pura",
    "universe": "Dragon Ball Z / GT",
    "saga": "Final de Z / Baby",
    "version": "Uub Entrenado (Antes de Majuub)",
    "tier": "Tier 4-B | Nivel Sistema Solar",
    "ap": "Nivel Sistema Solar. La reencarnación humana de Kid Buu. Al final de Z, con 10 años, demostró tener la fuerza suficiente (latente y descontrolada) para forzar a Goku Base a emocionarse y luchar. En GT, tras 10 años de entrenamiento con Goku en la cámara del tiempo, es el guerrero humano más fuerte del universo por un margen brutal.",
    "range": "Planetario.",
    "speed": { "combat": "MFTL+.", "reaction": "MFTL+.", "travel": "MFTL+.", "attack": "Velocidad lumínica natural." },
    "strength": { "striking": "Clase Sistema Solar.", "lifting": "Clase Estelar." },
    "durability": "Nivel Sistema Solar. Humano normal en apariencia, pero resistente a golpes nivel deidad gracias a su alma.",
    "stamina": "Muy Alta. Entrenado por Goku para perfeccionar su respiración marcial.",
    "battleIQ": "Talento en bruto perfeccionado por Goku. Aún ingenuo frente a villanos manipuladores (como Baby), pero con un corazón noble.",
    "haxTags": [ "Potencial Majin Latente", "Grito Desgarrador", "Magia Oculta (Sin Despertar)" ],
    "arsenal": {
      "basicAttacks": "Golpes de tortuga y artes marciales de aldea adaptadas, fluidas y acrobáticas.",
      "superAttacks": [
        { "name": "Kamehameha", "desc": "Enseñado por Goku, lo usa con un poder oscuro/rosa residual.", "cost": "20% Ki" },
        { "name": "Ráfaga Meteórica (Meteo Smash)", "desc": "Combo físico bestial donde arrincona al enemigo en el aire y lo remata contra el suelo.", "cost": "25% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Super Grito Majin (Inconsciente)", "desc": "Libera un grito supersónico que rompe barreras mágicas o Ki usando pura rabia, evocando a su vida pasada.", "cost": "40% Ki" }
      ],
      "passives": [
        { "name": "Resurgir del Monstruo", "desc": "Si su HP cae al 10%, su poder de ataque se dispara al nivel de Kid Buu momentáneamente.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "uub-base", "name": "Humano Reencarnado", "stats": "Nivel Sistema Solar. Joven moreno de piel oscura, dogi verde (Fin de Z) o dogi de artes marciales naranja (GT)." } ],
    "feats": [
      "Combatió a Baby Vegeta en Super Saiyan demostrando un nivel absurdo de crecimiento.",
      "Logró rasguñar a Goku en su torneo del fin de Z sin tener ningún conocimiento formal de Ki."
    ],
    "psychology": "Tímido, amable y preocupado por su familia en su aldea. Adora a Goku como un padre/maestro e idolatra el estilo del bien.",
    "weaknesses": "Falta de malicia y experiencia en batallas de la muerte contra seres sádicos. Dudó al rematar a Baby porque estaba en el cuerpo de Vegeta, lo que le costó el combate (antes de fusionarse con Majin Buu)."
  },
  // 7. MAJUUB
  {
    "id": "majuub-dragon-ball-gt-859",
    "name": "Majuub (Uub Fusión)",
    "alias": "El Humano Majin",
    "universe": "Dragon Ball GT",
    "saga": "Super 17 / Baby",
    "version": "Asimilado con Majin Buu Gordo",
    "tier": "Tier 3-C | Nivel Galaxia a Multi-Galaxia",
    "ap": "Nivel Multi-Galaxia. Tras asimilar los restos del Majin Buu Gordo y reclamar el 100% del poder original divido del monstruo, Majuub escala a un nivel altísimo. Luchó de tú a tú contra Baby Vegeta (Oozaru Dorado) internamente y contra Super 17, siendo la última línea de defensa humana.",
    "range": "Multi-Galáctico (Ráfagas Majin).",
    "speed": { "combat": "Inconmensurable.", "reaction": "Inconmensurable.", "travel": "Inconmensurable.", "attack": "Rayo transmutador veloz." },
    "strength": { "striking": "Clase Galaxia.", "lifting": "Clase Estelar Fuerte." },
    "durability": "Nivel Multi-Galaxia. Combina la resistencia humana con la elasticidad y magia regenerativa menor de Majin Buu.",
    "stamina": "Monstruosa. Prácticamente inagotable.",
    "battleIQ": "Añadió la experiencia mística de Buu a su técnica perfecta de Goku. Sabe usar trucos de soporte como ser comido voluntariamente.",
    "haxTags": [ "Magia de Transmutación (Convertir en Chocolate/Dulces)", "Regeneración Parcial (Elasticidad)", "Inmunidad al Veneno Interno" ],
    "arsenal": {
      "basicAttacks": "Golpes elásticos extendiendo sus brazos, patadas explosivas rosas.",
      "superAttacks": [
        { "name": "Rayo de Transmutación", "desc": "Dispara el rayo mágico del dedo índice convirtiendo a oponentes de AP inferior en chocolate al instante. (Incluso si rebotaba y le daba a él, podía recuperar su forma a voluntad).", "cost": "20% Ki Mágico" },
        { "name": "Aliento de Rayos", "desc": "Dispara ráfagas continuas desde la boca.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Flecha Relámpago (Lightning Arrow)", "desc": "Majuub crea cientos de flechas de ki rosa brillante y las arroja como una lluvia ineludible (Técnica usada contra Super 17).", "cost": "50% Ki" }
      ],
      "passives": [
        { "name": "Elasticidad Majin", "desc": "Inmune a daños de fractura ósea contundente; su cuerpo absorbe impactos como goma.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "majuub", "name": "Majuub", "stats": "Nivel Multi-Galaxia. Dogi de combate negro con toques dorados, chaleco Majin de Buu. Aura rosa vibrante." } ],
    "feats": [
      "Incomodó internamente y paralizó a Baby Oozaru, permitiendo a Goku SSJ4 ganar la batalla.",
      "Mantuvo a raya a Super 17 (que destrozaba galaxias con la mirada) durante varios minutos cruciales."
    ],
    "psychology": "Mucho más seguro de sí mismo que antes de la fusión. Tiene la bondad de Uub sumada al espíritu protector de Buu hacia Mr. Satán.",
    "weaknesses": "A pesar de todo su poder, fue superado por los villanos Tier 3-C superiores (Omega, Baby Oozaru, Super 17)."
  },
  // 8. GOGETA (SSJ - FUSION REBORN TOEI)
  {
    "id": "gogeta-pel-culas-dbz-toei-800",
    "name": "Gogeta (Z)",
    "alias": "El Guerrero Definitivo",
    "universe": "Dragon Ball Z (Toei)",
    "saga": "El Renacer de la Fusión",
    "version": "Super Saiyan (Fusión Metamoru Perfecta)",
    "tier": "Tier 3-A | Nivel Universal Bajo",
    "ap": "Nivel Universal Bajo (Macrocosmos Toei). Janemba había alterado las leyes de la física y desdibujado el paraíso, el infierno y el mundo vivo con su sola presencia. Gogeta aparece y, en exactamente un minuto, le asesta 3 rodillazos y un castigador de almas sin pestañear, borrando al demonio universal de la existencia. Es el pico de poder absoluto de las películas clásicas de DBZ.",
    "range": "Universal mediante Purificación de Almas.",
    "speed": { "combat": "Inconmensurable.", "reaction": "Inconmensurable.", "travel": "Inconmensurable.", "attack": "Velocidad estática (Se mueve y golpea sin que haya animación de tránsito)." },
    "strength": { "striking": "Clase Universal Bajo.", "lifting": "Clase Estelar Máxima." },
    "durability": "Nivel Universal Bajo. Recibió un puñetazo directo de Janemba (que cortaba dimensiones) a la cara, y Gogeta ni siquiera parpadeó, ignorando el daño al 100%.",
    "stamina": "Infinita (Limitada solo al tiempo de la Fusión de 30 mins).",
    "battleIQ": "Totalmente sereno y letal. A diferencia de Vegetto, Gogeta (Z) no habla, no se burla y no juega. Actúa como un verdugo instantáneo.",
    "haxTags": [ "Purificación de Energía Maligna (Polvo Estelar)", "Fusión Metamoru Inviolable", "Aura Divina Terrestre" ],
    "arsenal": {
      "basicAttacks": "Golpes invisibles, rodillazos a la nuca, castigo de pura inercia paralizante.",
      "superAttacks": [
        { "name": "Lluvia de Meteoros Invisibles", "desc": "Se queda quieto y el enemigo recibe una cadena de cientos de golpes contundentes de la nada.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Castigador de Almas (Stardust Breaker)", "desc": "Crea una pequeña orbe de polvo estelar arcoíris. La arroja y al contacto disuelve por completo toda la maldad en el cuerpo de la víctima. Si el ser es pura maldad (como Janemba), se evapora en brillos desapareciendo de la existencia. Si tiene un núcleo bueno, se purifica.", "cost": "50% Ki" }
      ],
      "passives": [
        { "name": "Firmeza de Justicia", "desc": "Ignora la armadura, habilidades pasivas y regeneración de oponentes de naturaleza Demoníaca/Maligna (El daño es Absoluto).", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "gogeta-ssj-z", "name": "Super Saiyan Fusion", "stats": "Nivel Universal Bajo. Chaleco Metamoru, aura dorada pura resplandeciente (brillando en la oscuridad del infierno), rostro de Goku con los ojos afilados de Vegeta." } ],
    "feats": [
      "Ignoró el daño cósmico de Super Janemba con la cara seria.",
      "Purificó el infierno entero restaurando la realidad a su estado normal con un solo ataque."
    ],
    "psychology": "La mezcla perfecta del pragmatismo marcial. Solo tiene un objetivo: eliminar la amenaza. Su única sonrisa se da cuando el enemigo ha sido purificado y el peligro acabó.",
    "weaknesses": "Límite de tiempo estricto de 30 minutos (Menor si gasta energía exagerada, aunque en Z esto no le pasó)."
  },
  // 9. GOGETA SSJ4 (GT)
  {
    "id": "gogeta-dragon-ball-gt-258",
    "name": "Gogeta (GT)",
    "alias": "El Saiyan Más Fuerte de la Historia (Era GT)",
    "universe": "Dragon Ball GT",
    "saga": "Dragones Oscuros",
    "version": "Super Saiyan 4",
    "tier": "Tier 3-A a 2-C | Nivel Universal a Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. La máxima deidad del universo GT. Su poder era tan masivo que Omega Shenron (quien amenazaba con destruir el Macrocosmos completo con su karma negativo) ni siquiera podía ver a Gogeta moverse. Un solo Big Bang Kamehameha casi purifica a Omega, y podía limpiar la atmósfera podrida de la Tierra de una sola patada o parpadeo.",
    "range": "Multiversal (Aura Positiva purificadora).",
    "speed": { "combat": "Inconmensurable+. Demostró patear a Omega 3 veces antes de que siquiera se diera cuenta, y su velocidad rompía las leyes visuales.", "reaction": "Inconmensurable+.", "travel": "Instantánea.", "attack": "Ciega a nivel cósmico." },
    "strength": { "striking": "Clase Multiversal Bajo. Con solo inflar el pecho empujaba a Omega al suelo.", "lifting": "Clase Universal." },
    "durability": "Nivel Multiversal Bajo. Los ataques definitivos de Omega Shenron rebotaban en él como si fueran aire.",
    "stamina": "Crítica. El poder de SSJ4 combinado con la danza Metamoru consume los 30 minutos en solo 10 minutos (o menos si usa un poder masivo).",
    "battleIQ": "Arrogante en extremo (A diferencia del Gogeta Z). Su personalidad emulaba a un Vegetto inmaduro, burlandose de Omega en lugar de matarlo al instante, porque su plan real era forzar a Omega a lanzar su técnica máxima de karma negativo para devolvérsela convertida en energía positiva purificadora y salvar la Tierra antes de matarlo.",
    "haxTags": [ "Conversión de Karma Negativo a Positivo", "Purificación Atmosférica", "Daño Falso (Burlas Místicas)" ],
    "arsenal": {
      "basicAttacks": "Golpes con los ojos (pura presión de Ki), cruzar los brazos y patear tan rápido que parece que no se movió.",
      "superAttacks": [
        { "name": "Cañón de Confetis (Bluff Kamehameha)", "desc": "Carga un ataque que parece apocalíptico, pero en lugar de energía dispara confeti y serpentinas a la cara del enemigo humillándolo mentalmente (-100% de moral).", "cost": "0% Ki" },
        { "name": "Castigador de Almas / Rompedor de Polvo Estelar", "desc": "Variante rápida de Z para hacer un daño constante.", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Big Bang Kamehameha x100", "desc": "Su ataque definitivo (Aunque en canon nunca llegó a lanzar el x100 completo antes de separarse, la versión x1 estándar fue suficiente para forzar a Omega a escupir las esferas del dragón). El haz azul más destructivo de todo el universo.", "cost": "80% Ki / Reduce tiempo de fusión a 0" }
      ],
      "passives": [
        { "name": "Aura Positiva Suprema", "desc": "Cualquier daño mágico oscuro, maldición, veneno místico o karma negativo que se le arroje, él lo patea convirtiéndolo en curación y energía pura para el ecosistema.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "gogeta-ssj4", "name": "Super Saiyan 4", "stats": "Nivel Multiversal Bajo. Pelaje rojo rubí, cabello escarlata salvaje, pupilas azules celestes. Inmensamente imponente." } ],
    "feats": [
      "Jugó al gato y al ratón con el destructor del Macrocosmos como si fuera un insecto.",
      "Purificó el Karma negativo acumulado por siglos en el Planeta Tierra con una patada de retroceso."
    ],
    "psychology": "Confiado, alegre y excesivamente burlón. Planeó limpiar el mundo antes de rematar a Omega, pero calculó terriblemente mal el consumo de energía de la fusión en esa forma y pagó caro su error.",
    "weaknesses": "Límite de tiempo minúsculo (10 minutos reales). Arrogancia táctica temporal que lleva al des-fusionamiento en el peor momento posible."
  },
  // 10. NUOVA SHENRON (4 ESTRELLAS)
  {
    "id": "nuova-shenron-dragon-ball-gt-786",
    "name": "Nuova Shenron",
    "alias": "Dragón de las Cuatro Estrellas / El Sol",
    "universe": "Dragon Ball GT",
    "saga": "Dragones Oscuros",
    "version": "Nacido del deseo del Rey Piccolo",
    "tier": "Tier 3-C | Nivel Galaxia a Multi-Galaxia",
    "ap": "Nivel Galaxia. El Dragón con el corazón más puro de los 7. Su poder ígneo emula la temperatura del núcleo solar (6,000 a 15,000 millones de grados Celsius). Fue el único capaz de luchar con total honor a la par de Goku SSJ4 (sin ceguera).",
    "range": "Sistema Solar (Aura de Calor).",
    "speed": { "combat": "Inconmensurable.", "reaction": "Inconmensurable.", "travel": "MFTL+.", "attack": "Velocidad de la luz (Plasmática)." },
    "strength": { "striking": "Clase Galaxia. Sus golpes derriten cualquier armadura.", "lifting": "Clase Estelar." },
    "durability": "Nivel Galaxia. Blindaje dorado que resistió ataques del SSJ4 sin mayor problema.",
    "stamina": "Muy Alta. Solo pierde energía si usa ataques suicidas.",
    "battleIQ": "Honorable y estoico. Es el Piccolo/Hit de GT. Rechaza luchar sucio y detesta herir a personas que no están involucradas o están ciegas.",
    "haxTags": [ "Manipulación Térmica Absoluta (Aura del Sol)", "Lentes Solares Místicos" ],
    "arsenal": {
      "basicAttacks": "Golpes marciales impecables con puños en llamas amarillas intensas.",
      "superAttacks": [
        { "name": "Cañón de Fuego Solar", "desc": "Dispara ráfagas que funden continentes al instante.", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Explosión Nova (Infierno de 6000 Grados)", "desc": "Se encierra junto al oponente en una esfera de fuego hiper-solar y provoca una detonación interna de calor absoluto.", "cost": "50% Ki" },
        { "name": "Lente de Aumento", "desc": "Usa una lente óptica para amplificar la luz del sol en un rayo quirúrgico devastador.", "cost": "25% Ki" }
      ],
      "passives": [
        { "name": "Aura Intocable", "desc": "El contacto físico quema gravemente. Todo ataque físico que conecte contra él causa daño de retorno por quemadura al enemigo (salvo que esté protegido por Ki cósmico).", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "nuova-base", "name": "Dragón Dorado", "stats": "Nivel Galaxia. Forma esbelta, piel dorada brillante (rompe su cascarón rojo inicial), honorable." } ],
    "feats": [
      "Salvó a Goku de Eis Shenron sacrificando su ventaja táctica.",
      "Luchó contra Omega Shenron sabiendo que era un ataque suicida, buscando fundir las energías positivas y negativas de la esfera para destruirlo."
    ],
    "psychology": "Un caballero marcial leal al honor y a la esfera de 4 estrellas (heredando los sentimientos pacíficos de Goku hacia su abuelo). Desprecia a su hermano Eis por tramposo.",
    "weaknesses": "Vulnerable al frío absoluto de Eis, y su honor y compasión lo vuelve presa fácil de los trucos ruines de Omega Shenron."
  },
  // 11. EIS SHENRON (3 ESTRELLAS)
  {
    "id": "eis-shenron-dragon-ball-gt-308",
    "name": "Eis Shenron",
    "alias": "Dragón de las Tres Estrellas / El Invierno Eterno",
    "universe": "Dragon Ball GT",
    "saga": "Dragones Oscuros",
    "version": "Nacido de borrar memorias en DB",
    "tier": "Tier 3-C | Nivel Galaxia",
    "ap": "Nivel Galaxia. El hermano gemelo de Nuova. Mientras Nuova es fuego puro y honorable, Eis es frío cósmico y la escoria del universo. Su poder se basa en congelar instantáneamente oponentes y usar rehenes ciegos para obtener la victoria a cualquier precio.",
    "range": "Planetario (Tormenta Cósmica).",
    "speed": { "combat": "Inconmensurable.", "reaction": "Inconmensurable.", "travel": "MFTL+.", "attack": "Rayos bajo cero." },
    "strength": { "striking": "Clase Galaxia.", "lifting": "Clase Estelar." },
    "durability": "Nivel Galaxia. Caparazón de hielo duro.",
    "stamina": "Media. Su cobardía lo hace huir si es herido.",
    "battleIQ": "Tramposo y cobarde. Cegó a Goku lanzando ráfagas a los ojos a traición y usó a Pan y a su propio hermano como escudos de carne.",
    "haxTags": [ "Cero Absoluto (Congelamiento Celular)", "Ceguera Permanente de Hielo" ],
    "arsenal": {
      "basicAttacks": "Golpes rodeados de nitrógeno líquido. Patear por la espalda.",
      "superAttacks": [
        { "name": "Rayo Congelante Ineludible", "desc": "Un destello ocular o rayo del dedo que convierte al enemigo en hielo cósmico (bloqueando su Ki o paralizando extremidades).", "cost": "20% Ki" },
        { "name": "Escudo Humano", "desc": "Agarra al aliado más cercano del enemigo y lo usa para bloquear ataques letales.", "cost": "Táctica Pasiva" }
      ],
      "ultimateAttacks": [
        { "name": "Ceguera Helada (Garras Ocultas)", "desc": "Esconde garras de hielo puro y corta el rostro del enemigo rasgándole los globos oculares (Cegó a Goku SSJ4 temporalmente).", "cost": "30% Ki / Debuff Permanente" }
      ],
      "passives": [
        { "name": "Maldad Inherente", "desc": "Ignora las reglas del combate. Finge rendirse para ganar la oportunidad de apuñalar a traición.", "cost": "Pasivo táctico" }
      ]
    },
    "forms": [ { "id": "eis-base", "name": "Dragón Azul Cobarde", "stats": "Nivel Galaxia. Forma idéntica a Nuova pero color azul celeste de hielo puro." } ],
    "feats": [
      "Inutilizó casi por completo el cuerpo y vista del guerrero más fuerte del universo temporalmente."
    ],
    "psychology": "Vil, deshonesto y cruel. Cree que el honor de su hermano Nuova es basura y que los fuertes solo usan la traición para gobernar.",
    "weaknesses": "Al luchar de frente sin trucos, Goku (Ciego y guiándose por el olor) lo humilló y destrozó de un solo Golpe de Dragón (Ryuken)."
  },
  // 12. VEGETTO (Z / BASE & SSJ)
  {
    "id": "vegetto-base-saga-buu-120",
    "name": "Vegetto (Saga Buu)",
    "alias": "El Guerrero Pothala Supremo / Super Vegetto",
    "universe": "Dragon Ball Z",
    "saga": "Saga de Buu",
    "version": "Super Saiyan (Pothala Fusion)",
    "tier": "Tier 3-B | Nivel Multi-Galaxia",
    "ap": "Nivel Multi-Galaxia. La unión divina de los rivales eternos. Super Vegetto era la barrera absoluta de Z. Tan ridículamente superior a Super Buu (Gohan Absorbido, quien ya era destructor cósmico) que peleó usando literalmente solo los pies cruzados de brazos, recibiendo Kamehamehas con la frente sin sudar. Buu gritando y abriendo portales dimensionales fue resuelto por Vegetto de un solo puñetazo al aire.",
    "range": "Multi-Galáctico (Espada de Espíritu).",
    "speed": { "combat": "Inconmensurable.", "reaction": "Inconmensurable.", "travel": "Instantáneo (Shunkanido).", "attack": "Insuperable para la época." },
    "strength": { "striking": "Clase Multi-Galaxia. Literalmente desfiguraba la cara del villano más fuerte de Z usando solo la puntera de sus botas.", "lifting": "Clase Universal." },
    "durability": "Nivel Multi-Galaxia. Una muralla. Incluso al ser convertido en un caramelo de café (por la magia transmutadora), conservó el 100% de sus estadísticas y le dio una paliza a Buu siendo un caramelo, humillándolo aún más.",
    "stamina": "Infinita en percepción. Al ser una Fusión Pothala en Z (Se creía permanente), apenas usaba una fracción de su ki real.",
    "battleIQ": "El intelecto combinado de Goku y Vegeta. Lo que parecía arrogancia infantil era un plan calculado: Humillar a Buu hasta forzarlo a absorberlo desesperadamente, manteniendo una barrera para rescatar a Gohan y los demás del interior del monstruo.",
    "haxTags": [ "Fusión Pothala", "Inmunidad Total a Transmutación (Caramelo Peleonero)", "Barrera de Energía Penetrante", "Espada Espiritual Pura" ],
    "arsenal": {
      "basicAttacks": "Golpes secos con las piernas, bloqueos con los brazos cruzados, burlas crueles ('¿Eso es todo lo que puede hacer el gran monstruo?').",
      "superAttacks": [
        { "name": "Big Bang Attack / Kamehameha", "desc": "Variantes mejoradas casuales disparadas para desviar ráfagas inmensas de Buu.", "cost": "10% Ki" },
        { "name": "Espada de Espíritu Estelar (Spirit Sword)", "desc": "Crea una hoja de Ki amarilla desde su mano que puede extenderse kilómetros, empalando a Buu, levantándolo y quemándolo internamente, para luego rebanarlo en pedazos.", "cost": "30% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Final Kamehameha", "desc": "Carga la pose del Final Flash y la fusiona con la del Kamehameha. Una esfera de energía amarilla rodeada de electricidad azul masiva que borra la materia y rompe el velo dimensional. (Aunque lo usó más en Super, se asume su conocimiento en Z).", "cost": "60% Ki" }
      ],
      "passives": [
        { "name": "Presión Divina Inquebrantable", "desc": "Las magias de debuff (como la transformación en chocolate) fallan en afectar sus atributos, volviéndose un objeto volador de poder Multi-Galáctico imposible de tocar.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [
      { "id": "vegetto-base-z", "name": "Vegetto Base", "stats": "Nivel Galaxia. Ya en estado base era superior a Buuhan." },
      { "id": "super-vegetto", "name": "Super Vegetto", "stats": "Nivel Multi-Galaxia. Super Saiyan puro, aura chispeante majestuosa. Inigualable." }
    ],
    "feats": [
      "No sufrió absolutamente ningún daño en toda su pelea contra Buuhan (el mayor monstruo de Z).",
      "Peleó, hirió y destrozó a un Dios Oscuro siendo del tamaño de un confite.",
      "Detuvo una grieta dimensional con un solo golpe seco (Kiai)."
    ],
    "psychology": "Dominante, carismático y estratega brillante disfrazado de bufón arrogante. Disfruta empujar al límite la psicología de su oponente hasta volverlo loco de frustración.",
    "weaknesses": "El ambiente del estómago de Buu desactivó temporalmente el estado divino/mágico de los pendientes, separando a Goku y Vegeta (Retcon en DBS: Límite de 1 hora por no ser Kaioshins)."
  }
];

const filePath = path.resolve(__dirname, '../src/data/characters.js');
let content = fs.readFileSync(filePath, 'utf8');

const prefix = 'export const INITIAL_CHARACTERS = ';
const currentList = eval(content.replace(prefix, ''));
console.log(`Current characters count: ${currentList.length}`);

let updatedCount = 0;
batch10Upgrades.forEach(upgrade => {
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

console.log(`Batch 10 Upgrade Complete. ${updatedCount} characters successfully enhanced.`);
