const fs = require('fs');
const path = require('path');

const newCharacters = [
  {
    "id": "krillin-new-hope",
    "name": "Krillin (Dragon Ball New Hope)",
    "alias": "El Último Guerrero Z / El Maestro de la Esperanza",
    "universe": "Dragon Ball New Hope (Fan Manga)",
    "saga": "Saga de Cell Hiper Perfecto",
    "version": "Post-Entrenamiento Habitación del Tiempo y del Más Allá",
    "tier": "Tier 3-C a 3-B | Nivel Galaxia a Multi-Galaxia",
    "ap": "Nivel Galaxia a Multi-Galaxia. Al retirarse el condensador de Ki y acceder al Kaio-ken potenciado por su control perfecto de energía, su poder de ataque sobrepasó con creces el de Cell Hiper Perfecto (quien superaba con holgura a Goten SSJ2 y amenazaba galaxias enteras). Pudo desintegrar cada célula de Cell y anular colisiones de energía cósmicas.",
    "range": "Cuerpo a cuerpo estándar. De rango planetario a intergaláctico mediante proyecciones de Ki denso, Kienzan y Super Kamehameha.",
    "speed": {
      "combat": "Masivamente FTL+ (MFTL+). Con el Kaio-ken activo y sin condensador, sus ráfagas de golpes y desplazamientos superan la capacidad de percepción y reacción de seres de nivel SSJ2 y bio-androides evolucionados.",
      "reaction": "Masivamente FTL+. Reflejos perfeccionados por décadas de supervivencia y entrenamiento marcial extremo; lee el flujo del Ki y anticipa trayectorias a quemarropa.",
      "travel": "Masivamente FTL. Capacidad de cruzar órbitas planetarias y campos estelares a velocidades relativistas extremas mediante vuelo con Ki.",
      "attack": "Velocidad lumínica a hiper-lumínica. Sus técnicas como el Kienzan múltiple y el Kamehameha alcanzan a sus objetivos en fracciones imperceptibles de segundo."
    },
    "strength": {
      "striking": "Class Multi-Galactic. Sus impactos físicos fracturan corazas bio-androides ultra densas y disipan ondas de choque capaces de pulverizar cuerpos celestes.",
      "lifting": "Class G a Multi-Stellar. Fuerza física masiva amplificada por el flujo del Kaio-ken sobre su estructura muscular."
    },
    "durability": "Nivel Galaxia a Multi-Galaxia. Su cuerpo humano fue condicionado al límite absoluto mediante gravedad extrema y control interno de Ki, resistiendo ráfagas directas de Cell Hiper Perfecto sin sufrir roturas críticas.",
    "stamina": "Casi Ilimitada en combate estándar; Alta con Kaio-ken. Gracias a su pulido control del Ki, redujo el desgaste biológico y el estrés muscular del Kaio-ken tradicional a niveles mínimos.",
    "battleIQ": "Maestro Táctico Supremo. Es el estratega definitivo de la Tierra. Combina la veteranía de la Escuela Tortuga, las enseñanzas de Kaio-sama y un pragmatismo implacable forjado tras la caída de Goku, Vegeta y Gohan.",
    "haxTags": [
      "Manipulación y Control Avanzado de Ki",
      "Amplificación de Estadísticas (vía Kaio-ken)",
      "Limit Break (Retirada del Condensador de Ki)",
      "Manipulación de Energía Vital (Genki)",
      "Percepción Extrasensorial y Lectura de Ki Cósmica",
      "Durabilidad Negada / Corte Molecular (vía Kienzan)",
      "Desintegración Celular (vía Kamehameha)",
      "Inducción de Ceguera / Distracción Sensorial (vía Taiyoken)"
    ],
    "arsenal": {
      "basicAttacks": "Combina el estilo clásico de la Escuela Tortuga con golpes letales directos a puntos de presión, bloqueos cinéticos y ráfagas continuas de Ki dirigidas mentalmente.",
      "superAttacks": [
        {
          "name": "Kaio-ken (Multiplicador Adaptativo)",
          "desc": "Técnica de Kaio-sama que multiplica instantáneamente el Ki, la fuerza, la velocidad y los reflejos mediante un aura carmesí ardiente.",
          "cost": "15% - 30% Ki continuo / Desgaste físico gradual"
        },
        {
          "name": "Kienzan Hexa-Dispersión",
          "desc": "Múltiples discos de Ki hiper-comprimido con bordes de densidad infinita, capaces de rastrear al oponente y cortar materia independientemente de la durabilidad del rival.",
          "cost": "15% Ki"
        },
        {
          "name": "Taiyoken Definitivo",
          "desc": "Emisión masiva de luz y calor que no solo ciega temporalmente, sino que satura la percepción sensorial y la lectura de Ki del adversario.",
          "cost": "5% Ki"
        },
        {
          "name": "Super Kamehameha Kaio-ken",
          "desc": "Concentración masiva de energía azul imbuida con el flujo carmesí del Kaio-ken, desatando un rayo con potencia suficiente para perforar núcleos estelares.",
          "cost": "35% Ki"
        },
        {
          "name": "Genkidama Compacta",
          "desc": "Esfera concentrada de energía vital pura absorbida de la naturaleza y el entorno para asestar un golpe letal a seres de naturaleza maligna.",
          "cost": "50% Ki / Tiempo de canalización"
        }
      ],
      "ultimateAttacks": [
        {
          "name": "Kamehameha Desintegrador Divino",
          "desc": "Ráfaga final a máxima potencia sin limitadores. Una columna colosal de energía que erradica por completo la materia a nivel atómico y anula cualquier factor de regeneración celular como el de Cell o Majin Buu.",
          "cost": "80% Ki / Extenuación muscular"
        }
      ],
      "passives": [
        {
          "name": "Maestría del Kaio-ken",
          "desc": "A diferencia de su aplicación temprana en la saga Saiyajin, Krillin ha refinado el flujo del Ki para soportar multiplicadores elevados sin reventar sus vasos sanguíneos ni colapsar sus órganos.",
          "cost": "Pasivo continuo"
        },
        {
          "name": "Condensación de Presión de Ki",
          "desc": "Permite mantener un Ki colosal comprimido en un volumen pequeño, ocultando su verdadera fuerza destructiva hasta el momento del impacto.",
          "cost": "Pasivo continuo"
        },
        {
          "name": "Voluntad del Último Defensor",
          "desc": "Inmunidad total al pánico, intimidación y parálisis por miedo. Su concentración y reflejos aumentan cuando el destino de la Tierra y sus alumnos está en riesgo directo.",
          "cost": "Pasivo continuo"
        }
      ]
    },
    "forms": [
      {
        "id": "base-condensador",
        "name": "Forma Base (Con Condensador Limitador)",
        "stats": "Nivel Multi-Solar System. Oculta su auténtica magnitud destructiva; suficiente para someter con soltura a Goten en Super Saiyajin."
      },
      {
        "id": "base-sin-condensador",
        "name": "Poder Liberado (Sin Condensador)",
        "stats": "Nivel Galaxia. Todo su Ki contenido se libera, aumentando exponencialmente su velocidad, resistencia e impacto físico por encima de un SSJ2 ordinario."
      },
      {
        "id": "kaio-ken-liberado",
        "name": "Kaio-ken al Máximo Poder (Sin Limitador)",
        "stats": "Nivel Multi-Galaxia. Multiplicador crítico sobre su poder liberado. Cubierto de un aura roja densa, supera con facilidad a Cell Hiper Perfecto y anula sus mejores técnicas."
      }
    ],
    "feats": [
      "Noqueó y dominó con extrema facilidad a Goten de 13 años transformado en Super Saiyajin durante su sesión de entrenamiento.",
      "Resistió la embestida a matar de Cell Hiper Perfecto sin ceder terreno.",
      "Activó el Kaio-ken tras retirarse el condensador, abrumando físicamente y superando en velocidad a un bio-androide que amenazaba con erradicar galaxias.",
      "Repelió el Kamehameha definitivo de Cell Hiper Perfecto y destruyó su núcleo por completo, salvando a Goten y al planeta."
    ],
    "psychology": "Mentor estoico, despiadado contra enemigos y extremadamente protector con los nuevos reclutas como Goten. No alarga las peleas por orgullo marcial ni concede segundas oportunidades a amenazas globales.",
    "weaknesses": "Fisiología humana base: depende del oxígeno para vivir, no puede sobrevivir en el vacío absoluto del espacio sin una burbuja de Ki protectora y el uso del Kaio-ken en multiplicadores desmedidos puede provocar microdesgarros musculares tras finalizar la batalla."
  },
  {
    "id": "cell-hiper-perfecto-new-hope",
    "name": "Cell Hiper Perfecto (Dragon Ball New Hope)",
    "alias": "La Creación Definitiva del Dr. Gero / El Terror Renacido",
    "universe": "Dragon Ball New Hope (Fan Manga)",
    "saga": "Saga de Cell Hiper Perfecto",
    "version": "Forma Hiper Evolucionada",
    "tier": "Tier 3-C | Nivel Galaxia",
    "ap": "Nivel Galaxia. Resucitado y mutado genéticamente con células optimizadas de los guerreros caídos. Superó con facilidad el poder del Super Saiyajin 2 de Goten y amenazó con devorar galaxias enteras.",
    "range": "Multi-planetario a Intergaláctico mediante ráfagas de Ki y Rayos de la Muerte.",
    "speed": {
      "combat": "MFTL+. Capaz de blitzear a Goten SSJ2 y reaccionar a múltiples Kienzans simultáneos.",
      "reaction": "MFTL+. Percepción sensorial mejorada por células de Namek y Saiyan.",
      "travel": "MFTL.",
      "attack": "Velocidad lumínica a hiper-lumínica."
    },
    "strength": {
      "striking": "Clase Galáctica. Sus impactos desintegran placas tectónicas y perforan barreras de Ki avanzadas.",
      "lifting": "Clase Multi-Estelar."
    },
    "durability": "Nivel Galaxia. Coraza biomecánica ultra densa combinada con regeneración celular instantánea de nivel atómico.",
    "stamina": "Casi Ilimitada debido a su naturaleza bio-androide.",
    "battleIQ": "Genio Táctico Arrogante. Posee los recuerdos y estilos marciales de Goku, Vegeta, Piccolo y Freezer.",
    "haxTags": [
      "Regeneración Celular Molecular",
      "Evolución Reactiva / Zenkai Instantáneo",
      "Absorción Biológica y de Ki",
      "Copia de Técnicas Instantánea",
      "Supervivencia en el Vacío Espacial"
    ],
    "arsenal": {
      "basicAttacks": "Golpes cortantes con la cola, ráfagas de Ki concentradas y combos brutales de artes marciales mixtas.",
      "superAttacks": [
        {
          "name": "Death Beam Hiper Concentrado",
          "desc": "Rayo carmesí de penetración infinita que atraviesa estrellas y corazas de Ki sin perder impulso.",
          "cost": "10% Ki"
        },
        {
          "name": "Kamehameha Hiper Solar",
          "desc": "Onda de energía colosal capaz de erradicar sistemas estelares enteros de un solo impacto.",
          "cost": "30% Ki"
        }
      ],
      "ultimateAttacks": [
        {
          "name": "Auto-Destrucción Hiper Galáctica",
          "desc": "Detonación total de su núcleo biológico generando una supernova que borra el cuadrante estelar.",
          "cost": "100% Ki / Muerte temporal (Regenera de una célula)"
        }
      ],
      "passives": [
        {
          "name": "Núcleo de Regeneración Atómica",
          "desc": "Mientras una sola célula de su núcleo central sobreviva, puede regenerar su cuerpo entero con un Zenkai adicional.",
          "cost": "Pasivo continuo"
        }
      ]
    },
    "forms": [
      {
        "id": "cell-hiper-perfecto",
        "name": "Forma Hiper Perfecta",
        "stats": "Nivel Galaxia. Aura eléctrica densa con destellos morados y negros."
      }
    ],
    "feats": [
      "Humilló y dejó al borde de la muerte a Goten transformado en Super Saiyajin 2.",
      "Resistió múltiples técnicas combinadas de los Guerreros Z sobrevivientes antes de enfrentar a Krillin liberado."
    ],
    "psychology": "Egocéntrico, sádico y obsesionado con demostrar su perfección biológica absoluta ante cualquier ser vivo.",
    "weaknesses": "Arrogancia extrema; subestima a los humanos corrientes como Krillin, lo que causa su destrucción definitiva."
  },
  {
    "id": "vegeta-kaioken-brokoly",
    "name": "Vegeta (Maestro del Kaio-ken)",
    "alias": "El Príncipe Escarlata / El Orgullo Sobrecargado",
    "universe": "Brokoly350 (What If)",
    "saga": "Saga de Namek / Androides (Línea Alterna)",
    "version": "Post-Entrenamiento Gravitatorio Extremo",
    "tier": "Tier 4-B a 4-A | Nivel Sistema Solar a Multi-Sistema Solar",
    "ap": "Nivel Multi-Sistema Solar. Al combinar su estado base mutado por la gravedad extrema con un Kaio-ken x20 perfecto, sus ataques de energía desintegran estrellas enanas. Su hibridación del Kaio-ken con la fase Super Saiyan (SSJ Kaio-ken) rompe los límites del AP convencional, permitiéndole someter a la forma final de Cell con fuerza bruta.",
    "range": "Cuerpo a cuerpo letal. Alcance estelar y multi-planetario mediante ráfagas de Ki focalizadas como el Galick Ho y el Final Flash.",
    "speed": {
      "combat": "Masivamente FTL (MFTL). El Kaio-ken fuerza sus sinapsis y sistema nervioso, otorgándole una velocidad de golpeo imperceptible incluso para bio-androides o demonios del frío.",
      "reaction": "Masivamente FTL. Sus reflejos reaccionan al daño celular antes de que se registre en su cerebro, moviéndose por puro instinto agresivo.",
      "travel": "MFTL. Capaz de cruzar distancias interplanetarias dejando una estela de plasma rojo y dorado fundiendo el oxígeno a su paso.",
      "attack": "Velocidad lumínica. Sus ataques de Ki son instantáneos al eliminar los tiempos de recarga gracias a su brutal asimilación del Kaio-ken."
    },
    "strength": {
      "striking": "Clase Multi-Estelar. Sus puños cubiertos de aura carmesí generan micro-singularidades al impactar, fracturando el espacio físico y triturando armaduras biológicas perfectas.",
      "lifting": "Clase Estelar. Incrementada exponencialmente según el multiplicador activo del Kaio-ken."
    },
    "durability": "Nivel Sistema Solar. Aunque su cuerpo sufre un estrés colosal, la terquedad y el orgullo de Vegeta actúan como una armadura mental que le permite seguir luchando con músculos desgarrados y huesos fracturados.",
    "stamina": "Extremadamente Volátil. En combate normal es inagotable, pero el uso prolongado del Super Saiyan Kaio-ken evapora su vitalidad, limitándolo a combates de ráfaga hiper-agresivos.",
    "battleIQ": "Genio Militar Despiadado. A diferencia de Goku, Vegeta usa el Kaio-ken para matar rápido y sin piedad. Optimiza los multiplicadores apagándolos en microsegundos para evadir ataques y encendiéndolos al máximo en el momento del impacto para ahorrar Ki.",
    "haxTags": [
      "Amplificación de Estadísticas Instantánea",
      "Control de Ki Sangriento (Combustión de Ki)",
      "Anulación de Durabilidad (vía Concentración en Puntos Vitales)",
      "Resistencia Inducida por Ira/Orgullo"
    ],
    "arsenal": {
      "basicAttacks": "Golpes a los nervios y articulaciones para incapacitar rápido. Lluvia de ráfagas Ki (Luces de fuegos artificiales) potenciadas para derretir el terreno.",
      "superAttacks": [
        {
          "name": "Kaio-ken Flash (Transición de Fase)",
          "desc": "Activa un multiplicador altísimo (x50) durante apenas 0.1 segundos justos antes de recibir un golpe letal o asestar uno, maximizando el daño y minimizando el retroceso biológico.",
          "cost": "10% Ki / Daño muscular leve"
        },
        {
          "name": "Galick Ho Carmesí",
          "desc": "Un Galick Ho imbuido en la llama del Kaio-ken. El aura morada se fusiona con la roja creando un torrente de plasma hiperdenso que perfora y no explota hasta atravesar el núcleo del objetivo.",
          "cost": "20% Ki"
        },
        {
          "name": "Fuegos Artificiales Sangrientos",
          "desc": "Agarrar al oponente y descargar el aura del Kaio-ken directamente en su interior, haciéndolo estallar desde dentro hacia afuera.",
          "cost": "15% Ki"
        }
      ],
      "ultimateAttacks": [
        {
          "name": "Final Flash Super Saiyan Kaio-ken x20",
          "desc": "Su técnica suicida definitiva. Combina el multiplicador máximo del Kaio-ken con el Super Saiyan. El ataque genera tal calor que carboniza el propio cuerpo de Vegeta mientras desata un haz capaz de borrar galaxias enanas del mapa estelar.",
          "cost": "90% Ki / Daño masivo autoinfligido / Desgarro de vasos sanguíneos"
        }
      ],
      "passives": [
        {
          "name": "Orgullo Escarlata",
          "desc": "A menor porcentaje de salud, mayor estabilidad adquiere su Kaio-ken. El dolor físico se traduce directamente en combustible para su Ki.",
          "cost": "Pasivo continuo"
        }
      ]
    },
    "forms": [
      {
        "id": "base-kaioken",
        "name": "Forma Base (Kaio-ken x10 - x20)",
        "stats": "Nivel Estrella Grande a Sistema Solar. Aura carmesí densa."
      },
      {
        "id": "ssj-kaioken",
        "name": "Super Saiyan Kaio-ken",
        "stats": "Nivel Multi-Sistema Solar. Aura doble (dorada interna, roja externa). Inestable pero devastadoramente poderoso."
      }
    ],
    "feats": [
      "Vaporizó la 3ra forma de Freezer con un Galick Ho Kaio-ken x10.",
      "Destruyó el núcleo celular perfecto usando ráfagas intermitentes de Kaio-ken x20 combinadas con el Super Saiyan, sufriendo daño crítico pero venciendo."
    ],
    "psychology": "Arrogante, letal y calculador. Desprecia a los rivales que juegan con su comida. Si ve una apertura, usará todo su poder para asesinar al enemigo en el primer segundo del combate.",
    "weaknesses": "El daño biomecánico del Super Saiyan Kaio-ken es real; si el combate se alarga más de 5 minutos en ese estado, su cuerpo colapsará por necrosis y fallo cardíaco masivo."
  },
  {
    "id": "bardock-superviviente-brokoly",
    "name": "Bardock (El Superviviente del Destino)",
    "alias": "El Padre de la Esperanza Saiyan / El Guerrero del Futuro Visto",
    "universe": "Brokoly350 (What If)",
    "saga": "Saga de Freezer / Androides (Línea Alterna)",
    "version": "Superviviente con Premonición Dominada",
    "tier": "Tier 4-B | Nivel Sistema Solar",
    "ap": "Nivel Sistema Solar. Al sobrevivir a la supernova de Freezer y acumular Zenkais extremos en mundos hostiles, su poder base rivaliza con los Super Saiyans de élite. En Super Saiyan 2 supera la barrera cósmica de los tiranos espaciales.",
    "range": "Interplanetario mediante el Final Spirit Cannon y ráfagas de Ki.",
    "speed": {
      "combat": "MFTL. Reflejos optimizados por sus visiones del futuro.",
      "reaction": "MFTL+ (Precognitiva). Anticipa fintas y ataques antes de que el rival los inicie.",
      "travel": "MFTL.",
      "attack": "Velocidad lumínica."
    },
    "strength": {
      "striking": "Clase Multi-Estelar. Golpes brutales de combate callejero saiyan.",
      "lifting": "Clase Estelar."
    },
    "durability": "Nivel Sistema Solar. Cuerpo curtido por cientos de batallas al borde de la muerte.",
    "stamina": "Monstruosa; no se rinde ante heridas críticas.",
    "battleIQ": "Veterano de Guerra y Estratega Premonitorio. Utiliza el conocimiento anticipado del futuro para tender emboscadas letales.",
    "haxTags": [
      "Precognición / Clarividencia Táctica en Combate",
      "Zenkai Acumulativo Masivo",
      "Manipulación de Energía Espiritual",
      "Resistencia a la Manipulación Mental"
    ],
    "arsenal": {
      "basicAttacks": "Cabezazos, patadas a la garganta, codazos a la mandíbula y ráfagas de Ki a quemarropa.",
      "superAttacks": [
        {
          "name": "Riot Javelin Carmesí",
          "desc": "Lanza de energía espiritual condensada que perfora las barreras más densas.",
          "cost": "15% Ki"
        },
        {
          "name": "Gatling Ki del Escuadrón",
          "desc": "Descarga de ráfagas múltiples disparadas con la memoria y voluntad de sus camaradas caídos.",
          "cost": "20% Ki"
        }
      ],
      "ultimateAttacks": [
        {
          "name": "Final Spirit Cannon de la Raza Extinta",
          "desc": "Esfera cósmica de energía concentrada con todo el rencor y esperanza del Planeta Vegeta.",
          "cost": "60% Ki"
        }
      ],
      "passives": [
        {
          "name": "Ojo del Destino",
          "desc": "Probabilidad alta de esquivar o mitigar el daño de cualquier ataque fatal prediciendo la trayectoria.",
          "cost": "Pasivo continuo"
        }
      ]
    },
    "forms": [
      {
        "id": "bardock-base",
        "name": "Forma Base (Zenkai Máximo)",
        "stats": "Nivel Estrella Grande."
      },
      {
        "id": "bardock-ssj2",
        "name": "Super Saiyan 2",
        "stats": "Nivel Sistema Solar. Melena erizada con rayos dorados y pañuelo ensangrentado."
      }
    ],
    "feats": [
      "Sobrevivió a la destrucción del Planeta Vegeta y aniquiló ejércitos de élite de Freezer.",
      "Despertó el Super Saiyan 2 durante su revancha contra el Imperio del Frío."
    ],
    "psychology": "Guerrero pragmático, serio y protector de su linaje. No busca fama, solo asegurar la supervivencia de su raza.",
    "weaknesses": "Las visiones involuntarias pueden causarle jaquecas breves durante combates de tensión extrema."
  },
  {
    "id": "saibaman-mutante-brokoly",
    "name": "Saibaman (El Superviviente Evolutivo)",
    "alias": "El Bio-Guerrero de la Tierra / Rey Saibaman",
    "universe": "Brokoly350 (What If)",
    "saga": "Saga Saiyan a Androides (Línea Alterna)",
    "version": "Bio-Mutación Terrestre Completa",
    "tier": "Tier 5-A a 4-C | Nivel Planeta Grande a Estrella Enana",
    "ap": "Nivel Planeta Grande a Estrella Enana. Al absorber nutrientes, radiación y aprender artes marciales en la Tierra sin autodestruirse, evolucionó hasta superar la fuerza de los guerreros de Freezer.",
    "range": "Cuerpo a cuerpo y medio alcance con chorros de ácido y esporas.",
    "speed": {
      "combat": "FTL+. Movimientos impredecibles y acrobáticos.",
      "reaction": "FTL+.",
      "travel": "FTL.",
      "attack": "Velocidad sónica a lumínica."
    },
    "strength": {
      "striking": "Clase Planetaria. Garras capaces de desgarrar armaduras de combate saiyan.",
      "lifting": "Clase Multi-Continental."
    },
    "durability": "Nivel Planeta Grande. Estructura vegetal flexible que amortigua impactos contundentes.",
    "stamina": "Infinita mientras tenga acceso a luz solar y tierra rica en nutrientes.",
    "battleIQ": "Astuto y Salvaje. Aprende técnicas observando a sus adversarios.",
    "haxTags": [
      "Regeneración Clorofílica",
      "Secreción de Ácido Molecular",
      "Clonación de Esporas",
      "Bomba de Ki No-Suicida"
    ],
    "arsenal": {
      "basicAttacks": "Zarpazos venenosos, mordeduras a articulaciones y saltos sorpresa.",
      "superAttacks": [
        {
          "name": "Chorro de Ácido Corrosivo Máximo",
          "desc": "Ácido concentrado que disuelve corazas de Ki y tejido biológico en segundos.",
          "cost": "10% Ki"
        },
        {
          "name": "Bomba Táctica de Esporas",
          "desc": "Detonación de Ki concentrado en su pecho que repele y aturde sin autodestruir su cuerpo.",
          "cost": "25% Ki"
        }
      ],
      "ultimateAttacks": [
        {
          "name": "Enjambre del Rey Saiba",
          "desc": "Invoca clones bio-mutantes que inmovilizan al rival y detonan simultáneamente ráfagas de ácido.",
          "cost": "50% Ki"
        }
      ],
      "passives": [
        {
          "name": "Fotosíntesis de Combate",
          "desc": "Regenera 5% de HP cada fase si el escenario tiene luz solar o terreno natural.",
          "cost": "Pasivo continuo"
        }
      ]
    },
    "forms": [
      {
        "id": "saiba-base",
        "name": "Saibaman Consciente",
        "stats": "Nivel Continental."
      },
      {
        "id": "saiba-rey",
        "name": "Rey Saibaman Mutante",
        "stats": "Nivel Planeta Grande a Estrella Enana."
      }
    ],
    "feats": [
      "Sobrevivió en la Tierra y asimiló el conocimiento marcial de los Guerreros Z.",
      "Desarrolló técnicas de Ki avanzadas sin necesidad de sacrificarse."
    ],
    "psychology": "Superviviente nato, cauto y oportunista. Huye si está en desventaja y ataca con saña cuando el enemigo se confía.",
    "weaknesses": "Sensible a ataques de fuego y calor extremo que deshidratan su biología vegetal."
  },
  {
    "id": "kakarotto-db-after",
    "name": "Kakarotto (El Saiyajin Original)",
    "alias": "Goku Corrompido / El Demonio de Clase Baja",
    "universe": "Dragon Ball After (Fan Manga de Young Jijii)",
    "saga": "Saga del Regreso del Saiyajin",
    "version": "Post-Golpe en la Cabeza (Amnesia Revertida)",
    "tier": "Tier 3-A | Nivel Universal",
    "ap": "Nivel Universal. Mantiene el poder de Goku Post-Buu (capaz de rivalizar con deidades y sacudir el macrocosmos) pero desprovisto de cualquier restricción moral o piedad. Al no contenerse, sus impactos amenazan el tejido mismo del universo vivo y del otro mundo.",
    "range": "Multi-Galáctico a Universal mediante proyecciones de Ki y Kamehameha oscuro.",
    "speed": {
      "combat": "Inconmensurablemente rápida. Su instinto asesino puro le permite reaccionar con brutalidad, superando los bloqueos mentales de Goku.",
      "reaction": "MFTL+ / Casi Instantánea. Se mueve como una bestia salvaje e impredecible.",
      "travel": "MFTL+ y Teletransportación Instantánea.",
      "attack": "MFTL+. Sus ráfagas y técnicas se ejecutan a quemarropa sin advertencia."
    },
    "strength": {
      "striking": "Clase Universal. Sus golpes físicos, libres de piedad, resquebrajan barreras de Ki puro y destrozan extremidades al impacto.",
      "lifting": "Clase Universal."
    },
    "durability": "Nivel Universal. Tolera ataques críticos de Gohan Definitivo y Vegeta SSJ3 mientras ríe a carcajadas. Siente placer en el dolor físico.",
    "stamina": "Monstruosa. Su sed de sangre lo mantiene de pie mucho después de que su Ki debería haberse agotado. Usa la adrenalina del asesinato como sustento.",
    "battleIQ": "Instinto Depredador Supremo. Ha perdido la pureza táctica marcial de Goku, pero ha ganado un salvajismo táctico: ataca puntos vitales, ojos, garganta y articulaciones.",
    "haxTags": [
      "Inmunidad a la Manipulación Empática",
      "Teletransportación Espacial (Shunkan Ido)",
      "Copia Instintiva de Técnicas",
      "Manipulación de Energía Destructiva",
      "Locura de Batalla (Battle Frenzy)"
    ],
    "arsenal": {
      "basicAttacks": "Golpes a traición, desmembramientos, rodillazos a la espina dorsal, pisotones a la cabeza de enemigos caídos.",
      "superAttacks": [
        {
          "name": "Kamehameha Maligno (Corrupto)",
          "desc": "Versión retorcida del clásico ataque. El Ki se vuelve errático y cortante, diseñado para desintegrar lentamente causando el máximo sufrimiento.",
          "cost": "15% Ki"
        },
        {
          "name": "Shunkan Ido Asesino",
          "desc": "Se teletransporta directamente al punto ciego del rival con un ataque físico ya cargado, apuntando a la nuca o la médula.",
          "cost": "5% Ki"
        }
      ],
      "ultimateAttacks": [
        {
          "name": "Puño del Dragón Sangriento (Super Saiyajin 3)",
          "desc": "Un dragón dorado corrompido por Ki sombrío que no solo atraviesa al oponente, sino que detona en su interior, erradicando su energía vital.",
          "cost": "60% Ki"
        }
      ],
      "passives": [
        {
          "name": "Reversión Primordial",
          "desc": "Cero moralidad. Es inmune a las súplicas o distracciones verbales. Cualquier intento de 'hablarle' le otorga un ataque de oportunidad crítico.",
          "cost": "Pasivo continuo"
        }
      ]
    },
    "forms": [
      {
        "id": "kakarotto-base",
        "name": "Kakarotto Base / Super Saiyajin",
        "stats": "Nivel Multi-Galáctico a Universal. Sádico y burlón."
      },
      {
        "id": "kakarotto-ssj3",
        "name": "Kakarotto Super Saiyajin 3",
        "stats": "Nivel Universal+. Aura eléctrica violenta, mirada demente, poder absoluto destructivo."
      }
    ],
    "feats": [
      "Rompió el brazo y torturó a su propio hijo (Gohan Definitivo) sin pestañear.",
      "Dominó a Vegeta y llevó a la Tierra al borde del apocalipsis mediante puro terror psicológico y fuerza abrumadora."
    ],
    "psychology": "Un sádico absoluto que disfruta humillando y destruyendo a aquellos que alguna vez consideró amigos o familia.",
    "weaknesses": "Exceso de confianza crónico y deseo de prolongar el sufrimiento de su rival."
  },
  {
    "id": "son-bra-dbm",
    "name": "Son Bra (Universo 16)",
    "alias": "La Hija de Vegetto / La Saiyajin Perfecta",
    "universe": "Dragon Ball Multiverse (Fan Manga)",
    "saga": "Torneo Multiversal / Rebelión de Babidi",
    "version": "Forma Majin Controlada / Post-Rebelión",
    "tier": "Tier 3-A a Low 2-C | Nivel Universal a Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. Hija biológica directa de la fusión Potara (Vegetto). Su potencial mutante sobrepasa a cualquier híbrido conocido. En Super Saiyan 2 (especialmente bajo el control Majin), su AP puede cortar en pedazos a seres como Cold Ginyu, Gohan Definitivo y picotear la barrera del espacio-tiempo de Vegetto.",
    "range": "Universal. Sus cortes de energía (Energy Blades) pueden seccionar planetas por la mitad, y su teletransportación amplía su rango de alcance.",
    "speed": {
      "combat": "Velocidad Inconmensurable. Humilló simultáneamente a dos Gohan Definitivos, un Piccolo y varios Namekianos de élite.",
      "reaction": "Inconmensurable. Combina reflejos híbridos perfectos con la capacidad mental táctica heredada de Vegetto.",
      "travel": "Teletransportación MFTL+.",
      "attack": "Cortes instantáneos que rasgan la matriz del espacio."
    },
    "strength": {
      "striking": "Clase Universal a Multiversal Bajo. Parte por la mitad armaduras de Katchin e ignora escudos de energía mágica.",
      "lifting": "Clase Universal."
    },
    "durability": "Nivel Universal. Soportó tajos mortales de Ki y ondas de desintegración a quemarropa.",
    "stamina": "Absurda. Especialmente en estado Majin, no siente dolor y su fatiga física es ignorada por su locura mental.",
    "battleIQ": "Prodigio Inestable. Conoce todas las técnicas de Vegetto y las combina con una letalidad absoluta.",
    "haxTags": [
      "Creación de Armas de Energía (Espadas de Ki / Guadañas)",
      "Teletransportación Dimensional",
      "Clonación de Imágenes Residuales Sólidas",
      "Regeneración (Vía Magia Majin / Senzus Rápida)",
      "Resistencia a Magia de Bajo Nivel"
    ],
    "arsenal": {
      "basicAttacks": "Cortes con espadas de energía purpúrea en ambas manos, decapitaciones limpias y bloqueos de ataques cósmicos con una mano.",
      "superAttacks": [
        {
          "name": "Hoja de Energía Doble (Vegetto Sword)",
          "desc": "Extiende filos de Ki desde sus manos que pueden cortar casi cualquier materia del multiverso.",
          "cost": "5% Ki"
        },
        {
          "name": "Teletransportación Defensiva-Ofensiva",
          "desc": "Se mueve entre el espacio-tiempo de manera fluida, materializándose en la espalda del objetivo.",
          "cost": "10% Ki"
        }
      ],
      "ultimateAttacks": [
        {
          "name": "Masacre Majin (Zafarrancho de Combate)",
          "desc": "Uso de múltiples clones, teletransportación y escudos de Ki para aniquilar a equipos enteros.",
          "cost": "60% Ki"
        }
      ],
      "passives": [
        {
          "name": "Sangre de la Fusión",
          "desc": "Reserva de Ki y potencial de crecimiento virtualmente ilimitados.",
          "cost": "Pasivo continuo"
        }
      ]
    },
    "forms": [
      {
        "id": "bra-base",
        "name": "Son Bra (Forma Base / SSJ1)",
        "stats": "Nivel Multi-Galáctico."
      },
      {
        "id": "bra-majin-ssj2",
        "name": "Majin Bra (Super Saiyan 2)",
        "stats": "Nivel Universal a Multiversal Bajo. Poder absoluto destructivo."
      }
    ],
    "feats": [
      "Aniquiló a dos versiones de Gohan Definitivo simultáneamente en un combate táctico asimétrico.",
      "Cortó a la mitad a Cold Ginyu y humilló a Cell."
    ],
    "psychology": "Un complejo de superioridad masivo ocultando un miedo profundo a perder el control.",
    "weaknesses": "Inestabilidad emocional severa si es acorralada psicológicamente."
  },
  {
    "id": "gast-carcolh-dbm",
    "name": "Gast Carcolh (Universo 7)",
    "alias": "El Super Namekiano / La Encarnación de Namek",
    "universe": "Dragon Ball Multiverse (Fan Manga)",
    "saga": "Torneo Multiversal (Universo 7)",
    "version": "Actual / Estado Base Permanente",
    "tier": "Tier 3-A | Nivel Universal",
    "ap": "Nivel Universal. Es la asimilación literal de toda la población del planeta Namek. Su poder crudo humilló al Cell Jr. y a King Cold, y su potencial se combina con magia divina.",
    "range": "Físicamente Multi-Galáctico. Sus habilidades mágicas (Hax) tienen rango y efecto a nivel universal.",
    "speed": {
      "combat": "Inconmensurable. Bloqueó asaltos de Bra SSJ2 y Raichi sin esfuerzo aparente.",
      "reaction": "MFTL+. Sus percepciones mágicas le advierten de alteraciones espacio-temporales.",
      "travel": "Teletransportación Mística.",
      "attack": "Sus hechizos de anulación de energía son instantáneos."
    },
    "strength": {
      "striking": "Clase Universal. Aplastó a monstruos hipertrofiados con un solo brazo.",
      "lifting": "Clase Universal mediante Telequinesis de nivel deidad."
    },
    "durability": "Nivel Universal+. Reforzada por escudos mágicos inquebrantables y regeneración namekiana suprema.",
    "stamina": "Infinita al tener las almas de millones de Namekianos.",
    "battleIQ": "Omnisciente Táctico. Posee la sabiduría colectiva de toda una raza.",
    "haxTags": [
      "Supresión de Energía / Anulación de Habilidades y Magia",
      "Magia Namekiana de Clase Deidad",
      "Regeneración Celular Instantánea",
      "Telequinesis Absoluta",
      "Sanación y Creación"
    ],
    "arsenal": {
      "basicAttacks": "Combate minimalista. Bloqueos con un dedo y golpes de precisión que paralizan el Ki.",
      "superAttacks": [
        {
          "name": "Barrera Mística / Campo Anti-Magia",
          "desc": "Erige un campo donde toda transformación, magia o tecnología es anulada.",
          "cost": "Mínimo Ki"
        },
        {
          "name": "Vínculo Somático (Parálisis)",
          "desc": "Paraliza por completo el cuerpo y la energía de un enemigo (inmovilizó a Zen Buu).",
          "cost": "15% Ki"
        }
      ],
      "ultimateAttacks": [
        {
          "name": "Milagro de Nail y Kami",
          "desc": "Usa el 100% de su magia para sanar realidades o sellar permanentemente a amenazas cósmicas.",
          "cost": "70% Ki"
        }
      ],
      "passives": [
        {
          "name": "Asimilación Perfecta",
          "desc": "Inmunidad total al control mental, lectura mental o daño al alma.",
          "cost": "Pasivo continuo"
        }
      ]
    },
    "forms": [
      {
        "id": "gast-base",
        "name": "Estado Único (Gast Carcolh)",
        "stats": "El guerrero definitivo de Namek."
      }
    ],
    "feats": [
      "Inmovilizó por completo a Zen Buu (Universo 4) usando una técnica de supresión mágica.",
      "Aniquiló a todo el imperio de Freezer, Cooler y King Cold él solo."
    ],
    "psychology": "Pacífico, melancólico pero implacable ante amenazas cósmicas.",
    "weaknesses": "Renuente a usar fuerza letal excesiva si cree que el oponente puede ser redimido."
  },
  {
    "id": "zen-buu-dbm",
    "name": "Hyper Buu (Zen Buu - Universo 4)",
    "alias": "El Dios del Universo 4 / El Ser Omnipotente",
    "universe": "Dragon Ball Multiverse (Fan Manga)",
    "saga": "Torneo Multiversal (Universo 4)",
    "version": "Buu Omniasimilado",
    "tier": "Low 2-C a 2-B | Nivel Multiversal Bajo a Multiversal",
    "ap": "Multiversal Bajo. Ha absorbido a TODO ser con poder o inteligencia en su universo (Gohan, Goku, Vegeta, Piccolo, Bulma, etc.). Su poder destructivo e intelecto son incalculables.",
    "range": "Omnipresencia en el campo de batalla, Rango Universal mediante su magia.",
    "speed": {
      "combat": "Inconmensurable. Pelea contra múltiples combatientes de élite simultáneamente.",
      "reaction": "Precognitiva / Instantánea.",
      "travel": "Teletransportación multiversal (Kaikai).",
      "attack": "Ataques interdimensionales."
    },
    "strength": {
      "striking": "Clase Multiversal Bajo.",
      "lifting": "Ilimitada (vía Telequinesis Suprema)."
    },
    "durability": "Regeneración Paradójica (Inmortal). Requiere borrar cada átomo de su cuerpo esparcido en dimensiones.",
    "stamina": "Infinita y eterna.",
    "battleIQ": "Inteligencia Divina Absoluta combinando a los mayores sabios del cosmos.",
    "haxTags": [
      "Magia y Alteración de la Realidad de Nivel Dios",
      "Regeneración Molecular e Interdimensional",
      "Omnisciencia Práctica y Telepatía Global",
      "Asimilación / Absorción de Enemigos",
      "Creación de Materia Ex Nihilo"
    ],
    "arsenal": {
      "basicAttacks": "Uso de tentáculos, regeneración ofensiva, copias moleculares y ataques físicos impredecibles.",
      "superAttacks": [
        {
          "name": "Transmutación Sub-atómica",
          "desc": "Dispara rayos que convierten al rival en cualquier materia inerte.",
          "cost": "Insignificante"
        },
        {
          "name": "Clonación Polimórfica",
          "desc": "Crea miles de avatares perfectos de sí mismo para abrumar dimensiones enteras.",
          "cost": "Mínimo Ki"
        }
      ],
      "ultimateAttacks": [
        {
          "name": "Asimilación Cósmica Total",
          "desc": "Expande su cuerpo gelatinoso como un tsunami que cubre galaxias enteras absorbiendo todo a su paso.",
          "cost": "Secreto"
        }
      ],
      "passives": [
        {
          "name": "División de Conciencia",
          "desc": "Partes minúsculas de su ser rondan por todas partes, permitiendo resucitar de una mota de polvo.",
          "cost": "Pasivo continuo"
        }
      ]
    },
    "forms": [
      {
        "id": "zen-buu-base",
        "name": "Zen Buu (Forma Divina Pura)",
        "stats": "Nivel Multiversal Bajo."
      }
    ],
    "feats": [
      "Mantuvo a raya a todo el torneo Multiversal y hackeó la tecnología Varga.",
      "Poseía armaduras y hechizos ocultos dentro de los cuerpos de los guerreros del torneo."
    ],
    "psychology": "Un hedonista cósmico que solo busca entretenimiento y retos intelectuales.",
    "weaknesses": "Su arrogancia y deseo de diversión; vulnerable a sellados mágicos arcanos de alto rango."
  },
  {
    "id": "vegeta-hakaishin-kakumei",
    "name": "Vegeta (Ruta del Dios de la Destrucción)",
    "alias": "El Hakaishin en Formación",
    "universe": "Dragon Ball Kakumei (Fan Manga)",
    "saga": "Rebelión del Universo 0 / Entrenamiento Divino",
    "version": "Post-Entrenamiento con Vados en el Universo 6",
    "tier": "Tier 2-C | Nivel Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. En DB Kakumei, Vegeta perfecciona el Ki de la destrucción y viaja al Universo 6 para continuar su ruta como aspirante a Dios de la Destrucción. Su dominio del Hakai y el Ultra Ego le permite borrar galaxias rebeldes y amenazas divinas.",
    "range": "Multi-Galáctico a Universal.",
    "speed": {
      "combat": "Inconmensurable. Se mueve a través de micro-fracturas espaciales.",
      "reaction": "Inconmensurable.",
      "travel": "Teletransportación MFTL+.",
      "attack": "Hakai instantáneo."
    },
    "strength": {
      "striking": "Clase Universal+. Rompe dimensiones espejo con puños infundidos en Hakai.",
      "lifting": "Clase Universal."
    },
    "durability": "Nivel Multiversal Bajo. Convierte ataques destructivos en estímulos de poder.",
    "stamina": "Muy Alta con energía divina.",
    "battleIQ": "Gran Maestro Marcial Divino con destrucción quirúrgica calculada.",
    "haxTags": [
      "Borrado Existencial (Hakai)",
      "Manipulación de Ki Divino (Destrucción)",
      "Anulación de Regeneración / Inmortalidad",
      "Evolución Reactiva por Daño (Ultra Ego)"
    ],
    "arsenal": {
      "basicAttacks": "Golpes letales donde cada impacto desgarra el alma y la materia.",
      "superAttacks": [
        {
          "name": "Aura Hakai (Escudo de Destrucción)",
          "desc": "Campo pasivo de energía morada que desintegra cualquier ataque entrante.",
          "cost": "10% Ki Divino"
        },
        {
          "name": "Hakai Focalizado",
          "desc": "Borra al objetivo anulando cualquier intento de regeneración mágica.",
          "cost": "30% Ki Divino"
        }
      ],
      "ultimateAttacks": [
        {
          "name": "Juicio del Hakaishin: Big Bang Borrado",
          "desc": "Esfera pura de Destrucción que crea un vacío absoluto al detonar.",
          "cost": "75% Ki Divino"
        }
      ],
      "passives": [
        {
          "name": "Ego Trascendental (Ultra Ego Perfeccionado)",
          "desc": "El daño recibido nutre el ansia de destrucción aumentando su AP.",
          "cost": "Pasivo Continuo"
        }
      ]
    },
    "forms": [
      {
        "id": "vegeta-blue-evolved-kakumei",
        "name": "Super Saiyan Blue Evolution",
        "stats": "Nivel Universal+."
      },
      {
        "id": "vegeta-hakaishin-ultra-ego",
        "name": "Doctrina del Dios de la Destrucción (Ultra Ego)",
        "stats": "Nivel Multiversal Bajo."
      }
    ],
    "feats": [
      "Resistió la gravedad y hostilidad de la dimensión de castigo.",
      "Destrozó a soldados de élite del resucitado Universo 0 con solo la presión de su Ki divino."
    ],
    "psychology": "Regio, autoritario e implacable con orgullo de Dios de la Destrucción.",
    "weaknesses": "El daño absorbido por el Ultra Ego exige resistencia biológica límite."
  },
  {
    "id": "goku-universo-cero-kakumei",
    "name": "Son Goku (Prisionero del Universo 0)",
    "alias": "El Guerrero Sellado / El Rompe-Realidades",
    "universe": "Dragon Ball Kakumei (Fan Manga)",
    "saga": "Saga del Universo Cero",
    "version": "Entrenamiento en la Dimensión del Vacío y Cadenas Divinas",
    "tier": "Tier 2-C a 2-B | Nivel Multiversal Bajo a Multiversal",
    "ap": "Nivel Multiversal. Sellado en el Universo 0 para evitar el colapso cósmico tras el Torneo del Poder. Forzado a combatir entidades primordiales y dioses sellados mientras carga con limitadores angelicales, perfeccionando el Ultra Instinto a un nivel trascendental.",
    "range": "Universal a Multiversal mediante ondas de choque de Ultra Instinto.",
    "speed": {
      "combat": "Inconmensurablemente rápida. Movimiento subconsciente instantáneo.",
      "reaction": "Inconmensurable (Doctrina Egoísta Suprema).",
      "travel": "MFTL+ / Desplazamiento Instantáneo entre dimensiones.",
      "attack": "Impactos etéreos que no viajan en el tiempo."
    },
    "strength": {
      "striking": "Clase Multiversal. Sus puños agitan la estructura del multiverso sellado.",
      "lifting": "Clase Universal+."
    },
    "durability": "Nivel Multiversal. Su cuerpo fluye con el daño, dispersando cualquier ataque que no sea de grado cósmico supremo.",
    "stamina": "Extrema gracias al control respiratorio del Ultra Instinto.",
    "battleIQ": "Dios Marcial Supremo. Reacciona y contrarresta antes de que el adversario formule su pensamiento.",
    "haxTags": [
      "Ultra Instinto Autónomo Trascendental",
      "Percepción Espacio-Temporal Inmunitaria",
      "Dispersión Cinética y de Energía",
      "Avatar de Ki Gigante",
      "Anulación de Técnicas Divinas"
    ],
    "arsenal": {
      "basicAttacks": "Golpes de viento y presión invisible. Fintas automáticas que dejan al rival golpeando el aire.",
      "superAttacks": [
        {
          "name": "Kamehameha del Juicio Plateado",
          "desc": "Onda de Ki blanco plateado que ignora defensas mágicas y purifica la corrupción del Universo 0.",
          "cost": "25% Ki"
        },
        {
          "name": "Golpe del Vacío Supremo",
          "desc": "Impacto a quemarropa que genera una onda expansiva dentro del cuerpo del rival.",
          "cost": "15% Ki"
        }
      ],
      "ultimateAttacks": [
        {
          "name": "Manifestación del Titán Plateado (Avatar Cósmico)",
          "desc": "Crea una proyección gigante de Ki de Ultra Instinto para someter a deidades colosales del Universo 0.",
          "cost": "70% Ki"
        }
      ],
      "passives": [
        {
          "name": "Fluidez del Vacío",
          "desc": "Esquiva automáticamente el 80% de los ataques físicos si su stamina supera el 20%.",
          "cost": "Pasivo continuo"
        }
      ]
    },
    "forms": [
      {
        "id": "goku-ui-preso",
        "name": "Ultra Instinto con Cadenas Divinas",
        "stats": "Nivel Multiversal Bajo."
      },
      {
        "id": "goku-ui-pleno-kakumei",
        "name": "Ultra Instinto Trascendental (Sin Limitadores)",
        "stats": "Nivel Multiversal."
      }
    ],
    "feats": [
      "Sobrevivió y dominó el ambiente hostil del Universo 0 mientras estaba encadenado.",
      "Venció a monstruosidades que los dioses de la destrucción temían enfrentar."
    ],
    "psychology": "Tranquilo, concentrado y con una comprensión casi zen del flujo de la energía universal.",
    "weaknesses": "El mantenimiento prolongado del Ultra Instinto Trascendental sigue imponiendo un desgaste sobre su cuerpo mortal si recibe impactos directos."
  }
];

const filePath = path.join(__dirname, '../src/data/characters.js');
let content = fs.readFileSync(filePath, 'utf8');

// Load current characters array
const prefix = 'export const INITIAL_CHARACTERS = ';
if (!content.startsWith(prefix)) {
  console.error('Unexpected characters.js file format');
  process.exit(1);
}

const currentList = eval(content.replace(prefix, ''));
console.log(`Current characters count: ${currentList.length}`);

// Add new characters (avoid duplicate IDs)
const existingIds = new Set(currentList.map(c => c.id));
let added = 0;

for (const nc of newCharacters) {
  if (!existingIds.has(nc.id)) {
    currentList.push(nc);
    existingIds.add(nc.id);
    added++;
  } else {
    // update existing
    const idx = currentList.findIndex(c => c.id === nc.id);
    currentList[idx] = nc;
    console.log(`Updated character: ${nc.name}`);
  }
}

console.log(`Added ${added} new characters. Total: ${currentList.length}`);

const output = `// APEX Engine — Base de Datos de Personajes Estructurada (VS Battles Tier System)\n// Total fichas deduplicadas y normalizadas\n\nexport const INITIAL_CHARACTERS = ${JSON.stringify(currentList, null, 2)};\n`;

fs.writeFileSync(filePath, output, 'utf8');
console.log('Successfully updated src/data/characters.js');
