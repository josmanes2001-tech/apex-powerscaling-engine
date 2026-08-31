const fs = require('fs');
const path = require('path');

const batch11Upgrades = [
  // 1. CELL HIPER PERFECTO (NEW HOPE)
  {
    "id": "cell-hiper-perfecto-new-hope",
    "name": "Cell (Hiper Perfecto)",
    "alias": "El Bio-Androide Definitivo",
    "universe": "Dragon Ball New Hope (Fan Manga)",
    "saga": "Saga de Cell Hiper Perfecto",
    "version": "Zen-Kai Supremo (10 Años de Entrenamiento)",
    "tier": "Tier 3-C a 3-B | Nivel Galaxia a Multi-Galaxia",
    "ap": "Nivel Galaxia a Multi-Galaxia. En esta línea temporal, Gohan SSJ2 no lo mató sino que falló, dejando a Cell vivo. Tras 10 años, Cell ha pulido sus células al límite, despertando el SSJ2 y SSJ3 propio de su ADN Saiyan junto al poder de Freezer, superando absurdamente a guerreros como Goten SSJ2 adulto y Trunks. Su poder es un híbrido perfecto que amenazaba el cosmos entero.",
    "range": "Multi-Galáctico (Kamehameha Perfecto).",
    "speed": { "combat": "Inconmensurable.", "reaction": "Inconmensurable.", "travel": "Instantáneo (Shunkanido perfeccionado).", "attack": "Veloz como un SSJ3." },
    "strength": { "striking": "Clase Multi-Galaxia.", "lifting": "Clase Universal." },
    "durability": "Nivel Multi-Galaxia. Núcleo prácticamente indestructible y factor de regeneración superior al de Namek por haber asimilado células Majin (retcon) o mejoras de Piccolo al extremo.",
    "stamina": "Infinita Absoluta. Combina la resistencia infinita de los Androides con el Zenkai Saiyan.",
    "battleIQ": "El intelecto combinado de todos los guerreros del universo, pulido por 10 años de meditación y perfeccionamiento táctico. Sin los errores de arrogancia que cometió en los Cell Games originales.",
    "haxTags": [ "Regeneración Celular Suprema", "Evolución Reactiva (Zenkai Constante)", "Absorción Biológica (Por la cola)", "Ki Infinito" ],
    "arsenal": {
      "basicAttacks": "Artes marciales impecables que mezclan el estilo de Goku, Vegeta y Piccolo a la perfección.",
      "superAttacks": [
        { "name": "Makankosappo Oscuro", "desc": "Dispara el rayo perforante con una velocidad lumínica sin necesidad de cargar.", "cost": "10% Ki" },
        { "name": "Kienzan Destructor Dual", "desc": "Lanza dos discos que persiguen térmicamente al rival eternamente.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Kamehameha Hiper Perfecto", "desc": "Carga la energía del sistema solar entero en sus manos, disparando una onda azul y negra que disuelve la materia y el espacio a su paso, imparable si no se tiene un AP divinamente superior.", "cost": "45% Ki" }
      ],
      "passives": [
        { "name": "Perfección Absoluta", "desc": "Al inicio del combate, reduce las estadísticas de ataque de oponentes intimidados por su presencia abrumadora (-20% Defensa rival).", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "cell-hiper", "name": "Forma Hiper Perfecta", "stats": "Nivel Multi-Galaxia. Aura eléctrica extrema (SSJ3 simulado), caparazón ligeramente más oscuro, más alto y esbelto." } ],
    "feats": [
      "Sobrevivió a los Cell Games y masacró a todos los Guerreros Z restantes con el paso de los años.",
      "Humilló a Goten SSJ2 adulto sin esfuerzo."
    ],
    "psychology": "Narcisista, sádico, pero frío e inmensamente más inteligente que en su juventud. Disfruta de la desesperación, pero ya no subestima a nadie para no repetir su error con Gohan.",
    "weaknesses": "Destrucción total a nivel celular en un solo ataque masivo que supere con creces su propio Kamehameha (Como el Kikoho Kaio-ken de Krillin)."
  },
  // 2. TENSHINHAN (NEW HOPE)
  {
    "id": "tenshinhan-new-hope",
    "name": "Tenshinhan (New Hope)",
    "alias": "El Guardián Caído",
    "universe": "Dragon Ball New Hope (Fan Manga)",
    "saga": "Saga de Supervivencia",
    "version": "Humano Veterano",
    "tier": "Tier 4-B | Nivel Sistema Solar",
    "ap": "Nivel Sistema Solar. En este futuro apocalíptico, Ten Shin Han es uno de los pocos defensores que quedan. Su cuerpo ha sido llevado al límite. Su Kikoho es más poderoso que nunca, pero su uso lo acerca cada vez más a la muerte segura debido al estrés celular de pelear contra un Cell Hiper Perfecto.",
    "range": "Sistema Solar (Shin Kikoho).",
    "speed": { "combat": "MFTL.", "reaction": "MFTL.", "travel": "FTL.", "attack": "Veloz." },
    "strength": { "striking": "Clase Sistema Solar.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Sistema Solar. Cicatrices en su cuerpo, aguantando dolor crónico.",
    "stamina": "Crítica. Pelea en el límite del colapso.",
    "battleIQ": "Maestro veterano, no duda en sacrificar su vida.",
    "haxTags": [ "Kikoho Letal Definitivo" ],
    "arsenal": {
      "basicAttacks": "Golpes del estilo grulla endurecidos por años de guerras perdidas.",
      "superAttacks": [
        { "name": "Dodonpa Perforador", "desc": "Variante más letal.", "cost": "10% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Kikoho de la Esperanza (Despedida)", "desc": "Su último disparo, quemando el 100% de su Ki y su Vida para abrir una brecha para Krillin o Goten.", "cost": "Muerte" }
      ],
      "passives": [
        { "name": "Resolución del Veterano", "desc": "No cede al miedo, ignorando penalizaciones morales.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "ten-new-hope", "name": "Veterano de la Muerte", "stats": "Nivel Sistema Solar. Ropa rota, cicatrices, expresión dura." } ],
    "feats": [
      "Protegió a los restos de la humanidad arriesgando su vida a diario."
    ],
    "psychology": "Acepta su muerte con honor, solo le importa dejar un legado.",
    "weaknesses": "Su cuerpo está destruyéndose a sí mismo al forzar poder contra entidades de clase Galaxia."
  },
  // 3. PICCOLO (NEW HOPE)
  {
    "id": "piccolo-new-hope",
    "name": "Piccolo (New Hope)",
    "alias": "El Sabio Namekiano",
    "universe": "Dragon Ball New Hope (Fan Manga)",
    "saga": "Supervivencia",
    "version": "Maestro Desesperado",
    "tier": "Tier 4-B | Nivel Sistema Solar",
    "ap": "Nivel Sistema Solar (Alto). Piccolo ha continuado entrenando, siendo la figura paterna de Goten tras la muerte de Goku y Gohan. Su Makankosappo puede dañar levemente a Cell Hiper Perfecto, pero la diferencia de poder bruto es abismal.",
    "range": "Planetario.",
    "speed": { "combat": "MFTL.", "reaction": "MFTL.", "travel": "MFTL.", "attack": "Veloz." },
    "strength": { "striking": "Clase Sistema Solar.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Sistema Solar. Regeneración obstaculizada por la falta de energía ambiental y desgaste.",
    "stamina": "Alta.",
    "battleIQ": "El mejor estratega que queda vivo, coordina a Goten, Trunks y Krillin.",
    "haxTags": [ "Regeneración", "Magia Namekiana" ],
    "arsenal": {
      "basicAttacks": "Combate Namekiano fluido.",
      "superAttacks": [
        { "name": "Makankosappo Continuo", "desc": "Dispara múltiples ráfagas perforantes en lugar de una sola.", "cost": "25% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Escudo del Maestro", "desc": "Se lanza a absorber un ataque letal destinado a Goten o Trunks, perdiendo toda su vida en el proceso.", "cost": "Muerte / Heroísmo" }
      ],
      "passives": [
        { "name": "Mente Maestra", "desc": "Otorga +10% de Evasión pasiva a todos los aliados presentes.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "piccolo-nh", "name": "Maestro Namekiano", "stats": "Nivel Sistema Solar Alto. Capa dañada, mirada perpetuamente preocupada." } ],
    "feats": [
      "Entrenó a Goten para alcanzar el SSJ2.",
      "Mantuvo oculta a la población humana de Cell durante años."
    ],
    "psychology": "Carga con el peso de la muerte de Gohan, sintiéndose culpable. Hará lo que sea por asegurar el futuro de Goten.",
    "weaknesses": "Al estar vinculado a Kami, si él muere, las esferas del dragón se pierden definitivamente (lo que hace que no deba arriesgarse demasiado, aunque lo hará por amor)."
  },
  // 4. VEGETTO (DBM U16)
  {
    "id": "vegetto-dbm",
    "name": "Vegetto (Universo 16)",
    "alias": "El Dios Invencible / El Padre Tiránico",
    "universe": "Dragon Ball Multiverse (Fan Manga)",
    "saga": "Torneo Multiversal",
    "version": "Vegetto Permanente (SSJ1, 2 y 3)",
    "tier": "Tier 3-A a 2-C | Nivel Universal a Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. En el Universo 16, la fusión Pothala jamás se deshizo en el estómago de Buu. Vegetto ha vivido décadas como un Dios inalcanzable, entrenando a Bra y sintiendo el vacío absoluto del poder. En SSJ3, su poder aplasta galaxias pasivamente, rivalizando con Gast Carcolh y Zen Buu, pero sufriendo de inestabilidad mental y agotamiento extremo.",
    "range": "Multiversal (En SSJ3).",
    "speed": { "combat": "Inconmensurable+.", "reaction": "Inconmensurable+.", "travel": "Instantáneo.", "attack": "Absoluta." },
    "strength": { "striking": "Clase Multiversal Bajo.", "lifting": "Clase Universal." },
    "durability": "Nivel Multiversal Bajo. Literalmente intocable para el 99% del roster del torneo multiversal.",
    "stamina": "Muy Baja en SSJ3. Su cuerpo sufre un colapso inminente si mantiene el SSJ3 más de unos minutos. Alta en SSJ2.",
    "battleIQ": "Años luz por delante de todos. Combina magia de teletransportación con Ki puro.",
    "haxTags": [ "Técnicas de Fusión Definitivas", "Desgarro Dimensional", "Final Dragon Flash" ],
    "arsenal": {
      "basicAttacks": "Artes marciales intocables. Pelea con los brazos cruzados en base.",
      "superAttacks": [
        { "name": "Big Bang Kamehameha Espiritual", "desc": "Un ataque colosal a una mano.", "cost": "20% Ki" },
        { "name": "Espada de Espíritu Divina", "desc": "Corta la realidad y oponentes inmortales.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Final Dragon Flash (SSJ3)", "desc": "Su técnica magna en DB Multiverse, capaz de borrar a Broly Legendario de Universo 20 empujándolo al Sol o aniquilando a cualquier oponente en un destello de luz absoluta.", "cost": "60% Ki / Reduce tiempo de uso a 0" }
      ],
      "passives": [
        { "name": "Superioridad Divina", "desc": "En base y SSJ1 es prácticamente inmune al cansancio.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [
      { "id": "vegetto-ssj3-dbm", "name": "Vegetto SSJ3", "stats": "Nivel Multiversal Bajo. Cabello largo rubio, electricidad violenta, mirada desquiciada por el poder." }
    ],
    "feats": [
      "Derrotó a Broly del U20 (cuyo poder escalaba infinitamente).",
      "Mantuvo a raya a Zen Buu temporalmente."
    ],
    "psychology": "Sufre del 'Complejo de Dios'. Está aburrido, frustrado por no tener rival y aterrorizado de sí mismo o de su hija Bra. Si pierde el control, amenaza con matar a su propia familia para mantener el orden, demostrando un lado tiránico nacido de la fusión perpetua.",
    "weaknesses": "Inestabilidad mental (miedo a su hija Bra y a sí mismo). El SSJ3 drena su vitalidad masivamente."
  },
  // 5. SON BRA (DBM U16)
  {
    "id": "son-bra-dbm",
    "name": "Son Bra (Universo 16)",
    "alias": "La Princesa de la Destrucción",
    "universe": "Dragon Ball Multiverse (Fan Manga)",
    "saga": "Torneo Multiversal / Rebelión de Babidi",
    "version": "Super Saiyan 2 (Controlado / Majin)",
    "tier": "Tier 3-A | Nivel Universal",
    "ap": "Nivel Universal. La hija biológica de Vegetto y Bulma (Teniendo la sangre fusionada de Goku y Vegeta). Nació con un poder base absurdo que supera al de Gohan Definitivo. En SSJ2 Majin, masacró a casi todos los héroes de los universos del torneo ella sola (Gohan U16, Gohan U18, Cell U17, Piccolos).",
    "range": "Universal.",
    "speed": { "combat": "MFTL+.", "reaction": "MFTL+.", "travel": "Instantánea (Teletransporte).", "attack": "Ciega." },
    "strength": { "striking": "Clase Universal.", "lifting": "Clase Estelar." },
    "durability": "Nivel Universal. Resistió ataques combinados de dos Gohans y Cell a la vez, regenerándose parcialmente con semillas Senzu robadas.",
    "stamina": "Muy Alta, pero su mente es inestable.",
    "battleIQ": "Heredó el genio táctico de Vegetto, pero es inmensamente inmadura, cayendo en provocaciones y perdiendo el control.",
    "haxTags": [ "Magia de Teletransportación Constante", "Hojas de Ki (Cortes limpios)", "Marca Majin (Opcional)" ],
    "arsenal": {
      "basicAttacks": "Golpes elegantes y crueles, uso de sables de energía cortos para mutilar.",
      "superAttacks": [
        { "name": "Kienzan Múltiple", "desc": "Dispara cientos de discos de corte.", "cost": "15% Ki" },
        { "name": "Teletransportación a quemarropa", "desc": "Se mueve detrás del enemigo para decapitarlo con sables de Ki.", "cost": "10% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Colapso del Universo (Ráfaga Definitiva)", "desc": "Dispara un Big Bang Kamehameha heredado a máxima potencia, capaz de desintegrar el escudo del estadio y a múltiples oponentes Tier 4 de un golpe.", "cost": "50% Ki" }
      ],
      "passives": [
        { "name": "Trauma y Rabia", "desc": "Si su vida baja mucho, su ataque físico sube drásticamente (Zen-kai instantáneo).", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [
      { "id": "bra-majin-ssj2", "name": "Majin Bra SSJ2", "stats": "Nivel Universal. Sello 'M' en la frente, mirada psicópata sádica, electricidad azul." }
    ],
    "feats": [
      "Sobrevivió al ataque conjunto más grande de DB Multiverse.",
      "Partió en dos a Cell (U17) y decapitó a Gohan."
    ],
    "psychology": "Acomplejada por las expectativas de su padre (Vegetto), aterrorizada de que él la asesine si se vuelve malvada. Esto la llevó a quebrarse y ser controlada por Babidi, liberando todo su resentimiento oculto.",
    "weaknesses": "Inestabilidad emocional crítica. Si la presionan moralmente (Como hizo Bra del U18), se quiebra a llorar rompiendo el control mental."
  },
  // 6. GAST CARCOLH (DBM U7)
  {
    "id": "gast-carcolh-dbm",
    "name": "Gast Carcolh",
    "alias": "El Super Namekiano Único",
    "universe": "Dragon Ball Multiverse (Fan Manga)",
    "saga": "Torneo Multiversal",
    "version": "Namekiano Supremo (Fusión de toda la raza)",
    "tier": "Tier 3-B a 3-A | Nivel Multi-Galaxia a Universal",
    "ap": "Nivel Universal (Mediante Magia/Hax). En el U7, para detener a Freezer, Nail se asimiló con TODOS los Namekianos vivos (incluyendo al Gran Patriarca, Kami, Piccolo, etc). Creando al Namekiano Definitivo. Con cientos de años de sabiduría, su poder bruto rivaliza con Vegetto SSJ1/SSJ2, y su magia oscura/creativa puede paralizar a Zen Buu y borrar maldiciones.",
    "range": "Universal (Magia).",
    "speed": { "combat": "Inconmensurable.", "reaction": "Inconmensurable.", "travel": "MFTL+.", "attack": "Veloz." },
    "strength": { "striking": "Clase Multi-Galaxia.", "lifting": "Clase Estelar." },
    "durability": "Nivel Multi-Galaxia. Regeneración absoluta respaldada por magia curativa.",
    "stamina": "Infinita (La asimilación masiva le otorga reservas casi cósmicas).",
    "battleIQ": "Sabiduría Absoluta. Posee las memorias y genios tácticos de miles de Namekianos, desde guerreros hasta hechiceros antiguos.",
    "haxTags": [ "Magia Selladora Definitiva", "Anulación de Magia (Deshizo Majin)", "Regeneración y Telepatía Suprema" ],
    "arsenal": {
      "basicAttacks": "Golpes pesados y calmados con brazos extendidos.",
      "superAttacks": [
        { "name": "Barrera Reflejante Namekiana", "desc": "Crea una cúpula que devuelve ataques cósmicos al 100% de su potencia.", "cost": "20% Ki Mágico" },
        { "name": "Makankosappo Ancestral", "desc": "Corte de energía perforador masivo.", "cost": "25% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Sello Supremo Namekiano", "desc": "Usa una magia antigua para encapsular y paralizar por completo a seres divinos como Zen Buu, reduciéndolos a esferas inofensivas sin usar Ki destructivo.", "cost": "50% Magia" }
      ],
      "passives": [
        { "name": "Inmunidad Mágica", "desc": "Es inmune al control mental, posesiones, absorciones o transformaciones (Candy Beam).", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "gast-base", "name": "Gast Carcolh", "stats": "Nivel Universal. Extremadamente alto (más de 3 metros), aspecto solemne, capa blanca pesada." } ],
    "feats": [
      "Derrotó a Freezer, Cooler, King Cold y Cell en su universo fácilmente.",
      "Logró atrapar y sellar a Zen Buu cuando amenazaba todo el torneo.",
      "Rompió el sello de Majin Raichi solo con hablar."
    ],
    "psychology": "Sumamente sabio, pacífico pero triste. Su único deseo es usar las esferas para des-fusionarse y revivir a su pueblo, sintiendo la soledad de ser el último Namekiano de su universo.",
    "weaknesses": "Carece de transformaciones para multiplicar su poder bruto; depende de la magia. Limitado emocionalmente por su deseo egoísta de no estar solo."
  },
  // 7. ZEN BUU (DBM U4)
  {
    "id": "zen-buu-dbm",
    "name": "Hyper Buu (Zen Buu)",
    "alias": "El Dios de la Asimilación",
    "universe": "Dragon Ball Multiverse (Fan Manga)",
    "saga": "Torneo Multiversal",
    "version": "Absorción Total (Universo 4)",
    "tier": "Tier 3-A a 2-C | Nivel Universal a Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo (Con Hax Cósmico). En el U4, Buu absorbió a Vegetto, Gohan, Gotenks, Piccolo, Bulma, Kibitoshin y prácticamente todo ser vivo y tecnológico útil en el universo. Es omnisciente, omnipresente en su universo, maestro de toda magia, ciencia y arte marcial. Su cuerpo está compuesto de nanomáquinas y tejido mágico. Juega con el tejido de la realidad misma.",
    "range": "Multiversal (Teletransportación de materia y absorción dimensional).",
    "speed": { "combat": "Inconmensurable+.", "reaction": "Omnipresente local.", "travel": "Instantánea.", "attack": "Ilimitada." },
    "strength": { "striking": "Clase Universal.", "lifting": "Clase Universal." },
    "durability": "Absoluta (Regeneración Omnipresente). Para matarlo, hay que erradicar cada partícula de su ser en todo el cosmos a la vez.",
    "stamina": "Infinita Absoluta.",
    "battleIQ": "Insuperable. Combina la mente de Vegetto, Bulma, y Piccolo con millones de años de experiencia al absorber incontables razas alienígenas avanzadas.",
    "haxTags": [ "Omnisciencia Parcial", "Magia y Ciencia Absoluta", "Absorción Cuántica", "Inmortalidad Biológica" ],
    "arsenal": {
      "basicAttacks": "Crea brazos en el aire, manipula la materia para golpear al enemigo desde dentro de su cuerpo.",
      "superAttacks": [
        { "name": "Clonación Perfecta", "desc": "Crea miles de clones con el poder de Super Buu Gohan.", "cost": "0% Ki" },
        { "name": "Transmutación Tecnológica", "desc": "Transforma el entorno en armas tecnológicas o caramelo.", "cost": "10% Magia" }
      ],
      "ultimateAttacks": [
        { "name": "Absorción Multiversal (Prisión)", "desc": "Envuelve todo el estadio y asteroides en su tejido rosa, asimilando a todos los dioses y mortales presentes a la vez.", "cost": "Magia Extrema" }
      ],
      "passives": [
        { "name": "Entidad Omnipresente", "desc": "Al recibir daño letal, revela que el cuerpo golpeado era un clon de un dedo; su verdadero ser está en otra dimensión u oculto en el estadio.", "cost": "Inmortalidad de Gameplay" }
      ]
    },
    "forms": [ { "id": "zen-buu", "name": "Zen Buu (U4)", "stats": "Nivel Multiversal Bajo. Aspecto de Buuhan pero con ropa fina, sin antena (la oculta a veces), sonrisa arrogante absoluta." } ],
    "feats": [
      "Tomó el control del torneo entero y absorbió armas de dioses.",
      "Posee la respuesta a todos los males y curas del universo."
    ],
    "psychology": "Bored God. Está tan sumamente aburrido de ser perfecto y todopoderoso que participa y causa caos solo por diversión y para ver cómo reaccionan las almas menores. Es un ser neutral (ni bueno ni malo), motivado por la curiosidad cósmica.",
    "weaknesses": "Magia antigua de sellado absoluto (Como la de Gast Carcolh) que paraliza su núcleo, y su propia arrogancia de dejarse golpear por diversión."
  },
  // 8. CELL (DBM U17)
  {
    "id": "cell-dbm",
    "name": "Cell (Universo 17)",
    "alias": "El Bio-Androide Triunfante",
    "universe": "Dragon Ball Multiverse (Fan Manga)",
    "saga": "Torneo Multiversal",
    "version": "Cell Perfeccionado (Post-Cell Games)",
    "tier": "Tier 4-B a 3-C | Nivel Sistema Solar a Galaxia",
    "ap": "Nivel Galaxia (En apuros). En el U17, Cell mató a Gohan en el choque de Kamehamehas. A lo largo de los años no ha entrenado físicamente, pero mentalmente perfeccionó su cuerpo. Generó Células de Cell Jrs internas que lo regeneran, y su zenkai final tras la paliza de Majin Bra lo empujó a niveles de poder similares a Vegetto SSJ1/Gohan Definitivo.",
    "range": "Multi-Galáctico (Kamehameha Perfecto).",
    "speed": { "combat": "MFTL+.", "reaction": "MFTL+.", "travel": "MFTL+.", "attack": "Veloz." },
    "strength": { "striking": "Clase Galaxia.", "lifting": "Clase Estelar." },
    "durability": "Nivel Galaxia. Núcleo desplazable y factor de regeneración mejorado inmensamente.",
    "stamina": "Muy Alta.",
    "battleIQ": "Brillante, observador pasivo y manipulador.",
    "haxTags": [ "Núcleo Movible", "Ocultamiento de Poder", "Generación de Cell Jrs Secretos" ],
    "arsenal": {
      "basicAttacks": "Golpes letales refinados y teletransportación.",
      "superAttacks": [
        { "name": "Barrera Perfecta Mejorada", "desc": "Cúpula impenetrable que resiste golpes de guerreros Tier 3.", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Renacimiento Zenkai (Desesperación)", "desc": "Se auto-destruye el cuerpo (dejando el núcleo oculto en el suelo) para regenerarse en el siguiente turno con sus Stats multiplicados x2 (Zenkai forzado).", "cost": "99% HP" }
      ],
      "passives": [
        { "name": "Ilusión de Debilidad", "desc": "Esconde su verdadero límite. El enemigo gasta Ki atacando a un Cell que se contiene pasivamente.", "cost": "Pasivo táctico" }
      ]
    },
    "forms": [ { "id": "cell-dbm", "name": "Perfección Absoluta", "stats": "Nivel Galaxia. Mismo aspecto que Cell Super Perfecto, mirada confiada, postura elegante." } ],
    "feats": [
      "Derrotó a Dabra, Bojack e Hirudegarn en el torneo.",
      "Sobrevivió ser partido por la mitad por Majin Bra y logró regenerarse con un Zenkai enorme."
    ],
    "psychology": "Sigue siendo narcisista, pero ha madurado táctica y emocionalmente. Aprecia el buen combate, respeta a guerreros fuertes y detesta la histeria de Bra o la debilidad.",
    "weaknesses": "A pesar de sus mejoras, es opacado brutalmente por los monstruos Tier 3 de Multiverse (Bra, Vegetto, Gast). Su arrogancia le hizo casi morir definitivamente."
  },
  // 9. DR. RAICHI (DBM U3)
  {
    "id": "raichi-dbm",
    "name": "Dr. Raichi",
    "alias": "El Fantasma Tsufuru",
    "universe": "Dragon Ball Multiverse (Fan Manga)",
    "saga": "Torneo Multiversal",
    "version": "Máquina de Odio (Hatchiyack)",
    "tier": "Tier 3-A | Nivel Universal (A través de Fantasmas)",
    "ap": "Nivel Universal. Raichi es un fantasma creado por la máquina Tsufuru. En DBM, usa la energía de odio de todos los seres asesinados por los Saiyans para invocar 'Fantasmas' perfectos que poseen el Ki y habilidades de los originales al morir, incluyendo a Broly Legendario, Cell, Freezer y Vegeta (Rey). Y si acorralan a Raichi, la máquina se vuelve Hatchiyack (Fusión de Odio).",
    "range": "Físico y Dimensional.",
    "speed": { "combat": "Baja (Cuerpo base).", "reaction": "Baja.", "travel": "Levitación.", "attack": "Velocidad de Invocación." },
    "strength": { "striking": "Clase Humano.", "lifting": "Clase Humano." },
    "durability": "Nivel Universal (Protegido por su Esfera Energética invulnerable a casi todo).",
    "stamina": "Infinita (Máquina).",
    "battleIQ": "Maestro táctico que analiza al enemigo y le envía a los fantasmas que sean su peor counter emocional o físico.",
    "haxTags": [ "Invocación de Fantasmas Letales (Mismos Stats que el real)", "Escudo Impenetrable Absoluto", "Transformación Definitiva (Hatchiyack)" ],
    "arsenal": {
      "basicAttacks": "Invocación pasiva de guerreros. Él no pelea.",
      "superAttacks": [
        { "name": "Ejército de Fantasmas", "desc": "Invoca a Broly, Cell, Tigh, Freezer, etc. (Todos a su máximo poder).", "cost": "20% Máquina Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Despertar de Hatchiyack", "desc": "Cuando la barrera de Raichi se rompe, la máquina absorbe el odio y se transforma en Hatchiyack, un androide biológico masivo con poder de nivel Vegeto SSJ1/SSJ2 capaz de lanzar el Cañón de Revancha.", "cost": "Al morir Raichi" }
      ],
      "passives": [
        { "name": "Escudo de Odio", "desc": "Mientras haya fantasmas vivos en la arena, Raichi es 100% inmune a todo daño.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [
      { "id": "raichi-base", "name": "Dr. Raichi", "stats": "Nivel Débil, pero con escudos de nivel Dios. Viaja en orbe flotante." },
      { "id": "hatchiyack-dbm", "name": "Hatchiyack", "stats": "Nivel Universal. Super-androide rojo y verde, poder colosal." }
    ],
    "feats": [
      "Derrotó a Vegeta del U13 humillándolo con su propio orgullo y fantasmas.",
      "Llevó al límite a Gast Carcolh obligándolo a usar magia definitiva para detener a Hatchiyack."
    ],
    "psychology": "Un racista absoluto y genocida rencoroso. Odia a todos los Saiyans y considera que su exterminio justifica cualquier atrocidad.",
    "weaknesses": "Si la máquina orbe es destruida por una fuerza divinamente superior antes de cargar a Hatchiyack, muere. Limitado al odio de los caídos."
  },
  // 10. VEGETA HAKAISHIN (KAKUMEI)
  {
    "id": "vegeta-hakaishin-kakumei",
    "name": "Vegeta (Hakaishin)",
    "alias": "El Dios de la Destrucción del Universo 7",
    "universe": "Dragon Ball Kakumei (Fan Manga)",
    "saga": "Rebelión de los Universos Borrados",
    "version": "Ruta de la Destrucción Absoluta (Ultra Ego Perfeccionado)",
    "tier": "Tier 2-C | Nivel Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo (Alto). En Kakumei, Vegeta asume plenamente su entrenamiento como Dios de la Destrucción. Combina el Hakai refinado con el estado Ultra Ego. Sus golpes literalmente fisuran la tela del universo, borrando y desintegrando deidades antiguas del Universo 0. Puede destruir dimensiones con solo mirar.",
    "range": "Universal a Multiversal (Hakai).",
    "speed": { "combat": "Inconmensurable.", "reaction": "Inconmensurable.", "travel": "MFTL+.", "attack": "Velocidad luz divina." },
    "strength": { "striking": "Clase Multiversal Bajo.", "lifting": "Clase Universal." },
    "durability": "Nivel Multiversal Bajo. El Ultra Ego convierte el daño letal en motivación y poder de ataque de forma pasiva.",
    "stamina": "Muy Alta. Ha superado los límites mortales del dolor.",
    "battleIQ": "Príncipe y Dios táctico. No comete los errores de arrogancia clásica; si su oponente es una amenaza divina, va a borrarlo sin pestañear.",
    "haxTags": [ "Hakai (Borrado Existencial Absoluto)", "Aura de Destrucción", "Absorción de Daño (Ultra Ego)" ],
    "arsenal": {
      "basicAttacks": "Golpes envueltos en energía púrpura destructora, arrancando extremidades y quemando la regeneración celular.",
      "superAttacks": [
        { "name": "Esferas de la Destrucción", "desc": "Arroja soles púrpuras de Hakai.", "cost": "20% Ki Divino" }
      ],
      "ultimateAttacks": [
        { "name": "Ejecución del Hakaishin (Hakai Final)", "desc": "Pone su mano frente al enemigo pronunciando 'Hakai'. Reduce a cero absoluto la existencia espiritual y física del rival (Inmune a la regeneración de Tier 2-C para abajo).", "cost": "60% Ki Divino" }
      ],
      "passives": [
        { "name": "Ultra Ego", "desc": "Mientras más HP pierde, más aumenta pasivamente su Poder de Ataque Físico y Mágico.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "vegeta-hakaishin", "name": "Ultra Ego / Hakaishin", "stats": "Nivel Multiversal Bajo. Sin cejas, cabello púrpura, pendiente de aprendiz/dios en la oreja, aura de fuego violeta." } ],
    "feats": [
      "Derrotó y dominó a deidades del Universo Cero primigenio.",
      "Alcanzó el estatus oficial de sucesor de Beerus."
    ],
    "psychology": "Dejó atrás su pasado tormentoso para aceptar su naturaleza Saiyan y Destructora en armonía. Es un juez implacable del cosmos, feroz pero justo.",
    "weaknesses": "El daño acumulado del Ultra Ego no lo cura; si recibe un ataque que borre su cuerpo de un golpe, morirá sin aprovechar el buff."
  },
  // 11. GOKU UNIVERSO 0 (KAKUMEI)
  {
    "id": "goku-universo-cero-kakumei",
    "name": "Son Goku (Universo Cero)",
    "alias": "El Prisionero de los Dioses / Dominador de Reinos",
    "universe": "Dragon Ball Kakumei (Fan Manga)",
    "saga": "El Reino Cero",
    "version": "Ultra Instinto Verdadero Atrapado",
    "tier": "Tier 2-C | Nivel Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo (Alto). Atrapado en el implacable Universo 0 (Universo primigenio con gravedad, clima y bestias que matan a dioses con respirar), Goku ha forjado su cuerpo a un nivel primitivo demencial. Mezcla el Ultra Instinto con el combate bruto de supervivencia, despedazando ángeles caídos y titanes de la creación antigua con técnicas crudas.",
    "range": "Físico y Universal (Proyecciones de UI).",
    "speed": { "combat": "Inconmensurable+.", "reaction": "Inconmensurable+ (UI Pasivo).", "travel": "MFTL+.", "attack": "Evasión y precisión divina absolutas." },
    "strength": { "striking": "Clase Multiversal Bajo. Aplasta armaduras divinas del U0 con sus nudillos pelados.", "lifting": "Clase Multiversal (Adaptado a gravedad primigenia)." },
    "durability": "Nivel Multiversal Bajo. Ha aprendido a usar el UI no solo para evadir, sino para endurecer su cuerpo al impacto inevitable en entornos de alta presión cósmica.",
    "stamina": "Media-Alta (El entorno es extremo).",
    "battleIQ": "El superviviente definitivo. Lucha usando su entorno hostil a su favor.",
    "haxTags": [ "Ultra Instinto Perfecto Activo", "Avatar de Ki Gigante", "Resistencia Primigenia" ],
    "arsenal": {
      "basicAttacks": "Golpes fluidos que no piensan, contragolpes letales directos a la yugular o puntos débiles del Ki.",
      "superAttacks": [
        { "name": "Kamehameha Instintivo", "desc": "Dispara ráfagas guiadas mientras esquiva acrobáticamente en el aire.", "cost": "20% Ki Divino" }
      ],
      "ultimateAttacks": [
        { "name": "Avatar del Dragón / UI Susanoo", "desc": "Proyecta una versión gigante espectral de sí mismo hecha de puro Ki galáctico para aplastar o luchar contra Kaijus celestiales.", "cost": "70% Ki Divino" }
      ],
      "passives": [
        { "name": "Evasión Divina Absoluta", "desc": "Evade pasivamente el 80% de los ataques físicos directos de oponentes de Tier inferior o igual.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "goku-u0", "name": "Superviviente Blanco", "stats": "Nivel Multiversal Bajo. Cabello plateado (UI), ropas rasgadas casi al completo, aspecto salvaje y magullado, ojos fríos divinos." } ],
    "feats": [
      "Sobrevive diariamente en el Universo Cero luchando contra las Bestias de la Creación y Ángeles Primordiales.",
      "Perfeccionó el uso del UI como su estado natural de supervivencia."
    ],
    "psychology": "Aislado y enfocado puramente en sobrevivir para volver con su familia y universo. Ha perdido gran parte de su actitud juguetona, peleando a matar por pura necesidad.",
    "weaknesses": "El entorno lo desgasta (si pelea en el U0). Si es atrapado por manipulación de espacio-tiempo superior a la de los Ángeles, no puede evadirlo."
  },
  // 12. GOHAN (KAKUMEI)
  {
    "id": "gohan-kakumei",
    "name": "Gohan (Heredero del U11)",
    "alias": "El Dios de la Justicia / El Supremo Híbrido",
    "universe": "Dragon Ball Kakumei (Fan Manga)",
    "saga": "Entrenamiento de los Universos",
    "version": "Forma Bestia / Deidad de la Justicia",
    "tier": "Tier 2-C | Nivel Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. Entrenado por Vermouth (Dios Destructor) y Jiren en el Universo 11, Gohan despierta un poder que supera el estado Definitivo puro, absorbiendo los conceptos de la Justicia y el Hakai para combinarlos con su Forma Bestia, volviéndose el pilar de defensa absoluto del multiverso con golpes físicos que sacuden dimensiones.",
    "range": "Universal.",
    "speed": { "combat": "Inconmensurable.", "reaction": "Inconmensurable.", "travel": "MFTL+.", "attack": "Veloz." },
    "strength": { "striking": "Clase Multiversal Bajo.", "lifting": "Clase Universal." },
    "durability": "Nivel Multiversal Bajo. Bloquea energía de dioses de destrucción con una sola mano.",
    "stamina": "Muy Alta. Disciplina marcial total heredada de las Tropas del Orgullo.",
    "battleIQ": "Líder natural, académico de la guerra. Analiza y desmantela las técnicas del enemigo metódicamente.",
    "haxTags": [ "Fuerza Bruta Irreductible (Beast)", "Armadura de Justicia (Hakai blanco)" ],
    "arsenal": {
      "basicAttacks": "Golpes de impacto masivo, paradas con brazos en cruz que generan ondas de choque defensivas.",
      "superAttacks": [
        { "name": "Masenko de Justicia Divina", "desc": "Un Masenko envuelto en aura de los Dioses.", "cost": "20% Ki Divino" }
      ],
      "ultimateAttacks": [
        { "name": "Makankosappo Bestial Divino", "desc": "Un rayo rojo y blanco que concentra toda la furia de su raza y la rectitud del U11, perforando armaduras divinas o cuerpos cósmicos.", "cost": "50% Ki Divino" }
      ],
      "passives": [
        { "name": "Defensor del Débil", "desc": "Su defensa se multiplica si está protegiendo a aliados o combatiendo a oponentes de naturaleza puramente maligna.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "gohan-beast-kakumei", "name": "Forma Hakaishin Bestia", "stats": "Nivel Multiversal Bajo. Pelo blanco erizado larguísimo, ojos rojos de furia divina, uniforme de las Tropas del Orgullo o Dogi Rojo." } ],
    "feats": [
      "Superó las expectativas de Vermouth y Margarita, volviéndose un candidato a Hakaishin del U11.",
      "Destrozó a combatientes de élite de universos resucitados con simples ráfagas."
    ],
    "psychology": "Serio, enfocado y resolutivo. Ha dejado de lado su rechazo a la lucha, aceptando su rol como el guerrero más grande de su generación para proteger la paz absoluta a costa de su propia humanidad.",
    "weaknesses": "Si la lucha carece de un propósito moral fuerte, no pelea a su máximo potencial de furia."
  }
];

const filePath = path.resolve(__dirname, '../src/data/characters.js');
let content = fs.readFileSync(filePath, 'utf8');

const prefix = 'export const INITIAL_CHARACTERS = ';
const currentList = eval(content.replace(prefix, ''));
console.log(`Current characters count: ${currentList.length}`);

let updatedCount = 0;
batch11Upgrades.forEach(upgrade => {
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

console.log(`Batch 11 Upgrade Complete. ${updatedCount} characters successfully enhanced.`);
