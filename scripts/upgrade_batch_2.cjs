const fs = require('fs');
const path = require('path');

const batch2Upgrades = [
  // 1. BEERUS
  {
    "id": "beerus-dragon-ball-super-16",
    "name": "Beerus",
    "alias": "Dios de la Destrucción del Universo 7",
    "universe": "Dragon Ball Super",
    "saga": "La Batalla de los Dioses / Granolah",
    "version": "100% de Poder / Hakai Shin",
    "tier": "Tier 2-C | Nivel Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. Como el pináculo de la destrucción del U7, un estornudo o un toque descuidado de Beerus puede pulverizar sistemas solares enteros. Luchando en serio, el impacto pasivo de sus golpes hace temblar la macroestructura del universo. Su dominio del Hakai borra de la existencia cualquier forma de materia o alma por igual.",
    "range": "Físico a Multiversal Bajo (La onda expansiva de su aura puede destruir realidades conectadas).",
    "speed": {
      "combat": "Inconmensurable. Capaz de humillar a Goku SSJ3 en un instante y reaccionar a múltiples Dioses de la Destrucción simultáneamente.",
      "reaction": "Inconmensurable. Posee un Ultra Instinto imperfecto que le permite esquivar ataques por reflejo instintivo automático.",
      "travel": "MFTL+ en viajes espaciales cortos, aunque usa a Whis para moverse entre galaxias.",
      "attack": "Ráfagas Hakai y sellos a velocidad trans-lumínica."
    },
    "strength": { "striking": "Clase Multiversal Bajo. Destruye planetas a la mitad golpeando la mesa con una uña.", "lifting": "Clase Universal." },
    "durability": "Nivel Multiversal Bajo. Inmune a la magia mortal, los venenos, el vacío absoluto y la manipulación de energía inferior a su rango divino.",
    "stamina": "Extremadamente Alta, aunque sufre somnolencia constante debido a sus ciclos biológicos milenarios de sueño.",
    "battleIQ": "Maestro Supremo de Combate. Millones de años de experiencia marcial, aunque suele luchar de forma perezosa hasta que se enfurece.",
    "haxTags": [
      "Borrado Existencial (Hakai)",
      "Ultra Instinto (Imperfecto)",
      "Inmunidad a Magia y Manipulación del Alma",
      "Manipulación de Gravedad / Esferas de Destrucción",
      "Sellado Divino"
    ],
    "arsenal": {
      "basicAttacks": "Manotazos, piques en los ojos, golpes de frente y patadas desganadas que rompen planetas.",
      "superAttacks": [
        { "name": "Orbe de la Destrucción", "desc": "Una esfera masiva parecida a un sol ardiente que desintegra cualquier estructura material al entrar en contacto.", "cost": "20% Ki" },
        { "name": "Hakai (Borrado)", "desc": "Extendiendo su mano y pronunciando la palabra, borra por completo al rival de la existencia material y espiritual.", "cost": "30% Ki Divino" }
      ],
      "ultimateAttacks": [
        { "name": "Furia del Dios de la Destrucción", "desc": "Desata una lluvia de aura violeta que disuelve toda forma de ataque entrante y aniquila un radio universal a su alrededor.", "cost": "70% Ki Divino" }
      ],
      "passives": [
        { "name": "Inmunidad Jerárquica", "desc": "Ningún ataque de seres por debajo de Tier 2-C que no posean Ki divino puro le causa más del 5% de daño base.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [
      { "id": "beerus-base", "name": "Estado Base (Perezoso)", "stats": "Nivel Universal+. Invulnerable al daño físico convencional." },
      { "id": "beerus-hakaishin", "name": "Aura Hakai (Furia al 100%)", "stats": "Nivel Multiversal Bajo. Envuelto en energía violeta destructiva; uso pleno de UI imperfecto." }
    ],
    "feats": [
      "Derrotó a casi todos los demás Dioses de la Destrucción simultáneamente en el torneo de exhibición manga.",
      "Borró a Zamasu del presente sin pestañear a pesar de su inmortalidad en desarrollo.",
      "Sometió a Goku y Vegeta sin apenas esfuerzo repetidas veces durante el entrenamiento."
    ],
    "psychology": "Caprichoso, irascible, perezoso y glotón. No actúa por el bien o el mal, sino por equilibrio cósmico y su propio aburrimiento. Su furia es letal.",
    "weaknesses": "Su vínculo de vida con el Kaioshin del Universo 7 (Shin); si Shin muere, Beerus muere instantáneamente. Demasiado confiado a veces."
  },
  // 2. WHIS
  {
    "id": "whis-dragon-ball-super-824",
    "name": "Whis",
    "alias": "Ángel del Universo 7 / Maestro de la Destrucción",
    "universe": "Dragon Ball Super",
    "saga": "Todas",
    "version": "Ángel Guía",
    "tier": "Tier 2-B | Nivel Multiversal",
    "ap": "Nivel Multiversal. Como Ángel, su nivel de existencia y poder está astronómicamente por encima de los Dioses de la Destrucción. Noquea a Beerus con un golpe casual en el cuello. Su manejo del Ultra Instinto es perpetuo e impecable, dictando que su ataque es tan infinito como su defensa, si es que tiene permitido atacar.",
    "range": "Multiversal (puede monitorear y viajar entre universos).",
    "speed": {
      "combat": "Inconmensurable. Nadie en el Universo 7 ha logrado rozarlo en combate cuerpo a cuerpo.",
      "reaction": "Inconmensurable+. Posee el Ultra Instinto Absoluto/Pasivo siempre activo.",
      "travel": "Inconmensurable (Desplazamiento a través del vacío multiversal con su Báculo).",
      "attack": "Ataques lumínicos, etéreos o temporales instántaneos."
    },
    "strength": { "striking": "Clase Multiversal.", "lifting": "Incalculable." },
    "durability": "Nivel Multiversal. Escudo angélico impenetrable; su biología no procesa el desgaste.",
    "stamina": "Infinita.",
    "battleIQ": "El intelecto marcial supremo del Universo 7. Literalmente sabe la solución a cualquier técnica, pose o defecto en tiempo real.",
    "haxTags": [
      "Ultra Instinto Absoluto",
      "Retroceso Temporal (3 Minutos)",
      "Creación y Manipulación de Materia",
      "Curación y Resurrección Menor",
      "Inmunidad Absoluta a Hakai / Magia"
    ],
    "arsenal": {
      "basicAttacks": "Esquivas sutiles y golpes paralizantes en puntos de presión nerviosos con dos dedos o el báculo.",
      "superAttacks": [
        { "name": "Rayo Restrictivo", "desc": "Lanza un lazo de Ki impenetrable y eterno que paraliza por completo a seres divinos.", "cost": "0% Ki" },
        { "name": "Toque de Anulación", "desc": "Con solo rozar un ataque (Kamehameha, Supernova), lo borra conceptualmente convirtiéndolo en luz inofensiva.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Retroceso del Tiempo", "desc": "Retrocede el flujo cronológico del universo local en 3 minutos para anular el daño o evitar una catástrofe.", "cost": "Prohibición temporal de uso post-activación" }
      ],
      "passives": [
        { "name": "Ley Angélica Neutral", "desc": "Su evasión siempre es perfecta. Pero como Ángel, tiene prohibido matar o luchar seriamente bajo la pena de ser erradicado por el Daishinkan.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "whis-base", "name": "Ángel Guía (Poder Base)", "stats": "Nivel Multiversal. Aura de calma inquebrantable." } ],
    "feats": [
      "Dejó inconsciente a Beerus de un solo golpe al cuello.",
      "Esquivó los asaltos combinados de Goku y Vegeta simultáneamente sin derramar su comida.",
      "Retrocedió el tiempo para evitar la destrucción de la Tierra a manos de Freezer."
    ],
    "psychology": "Extremadamente educado, afeminado, gourmet, amante de la comida terrestre. Siempre habla con condescendencia amistosa.",
    "weaknesses": "Leyes de los Ángeles: no puede tomar partido de forma activa en el combate ni matar a nadie, reduciendo su participación real a dar consejo."
  },
  // 3. ORANGE PICCOLO
  {
    "id": "piccolo-orange-dbs-hero-po001",
    "name": "Piccolo (Orange Namekian)",
    "alias": "El Símbolo Demoníaco / Guerrero Despertado",
    "universe": "Dragon Ball Super",
    "saga": "Super Hero",
    "version": "Potencial Liberado (Shenron)",
    "tier": "Tier 2-C | Nivel Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. Tras pedir a Shenron que libere su potencial y recibir el 'Plus Extra', la fisiología de Piccolo muta. Su fuerza bruta y resistencia en estado Naranja compiten a la par con Goku y Vegeta post-Torneo del Poder, y le permitieron enfrentar cuerpo a cuerpo al titánico Cell Max, aguantando la mayor parte de la paliza.",
    "range": "Físico, Inter-planetario con ráfagas.",
    "speed": {
      "combat": "Inconmensurable.",
      "reaction": "Inconmensurable.",
      "travel": "MFTL+.",
      "attack": "Velocidad MFTL+."
    },
    "strength": { "striking": "Clase Multiversal Bajo. Capaz de arrancar extremidades y detener puñetazos gigantes de Cell Max en seco.", "lifting": "Clase Universal." },
    "durability": "Nivel Multiversal Bajo. Piel endurecida similar a acero divino. Sobrevivió el asalto continuo del bio-androide más violento creado en la Tierra.",
    "stamina": "Muy Alta. La transformación agota Ki pero su regeneración innata compensa parte del trauma físico.",
    "battleIQ": "Estratega Genial, el cerebro de la victoria. Piccolo no tiene los malos hábitos de Goku o Vegeta (como jugar con su comida o bajar la guardia).",
    "haxTags": [ "Fisiología Orange (Cuerpo Endurecido)", "Magia de Creación (Materialización)", "Gigantificación Namekiana", "Regeneración Celular" ],
    "arsenal": {
      "basicAttacks": "Golpes letales con peso colosal, codazos devastadores y presas brutales para romper cuellos.",
      "superAttacks": [
        { "name": "Granada Infernal Naranja", "desc": "Cientos de bolas de ki que rodean al enemigo detonan con la potencia combinada de docenas de supernovas.", "cost": "25% Ki" },
        { "name": "Makankosappo (Flash Místico)", "desc": "Rayo en espiral hiper penetrante, ejecutado en fracciones del tiempo original gracias a su control Ki absoluto.", "cost": "30% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Dominio de Shenron (Gigantificación)", "desc": "Aumenta su tamaño a proporciones kaiju para luchar en igualdad de condiciones de masa, aplastando y asfixiando rivales cósmicos.", "cost": "60% Ki" }
      ],
      "passives": [
        { "name": "Vínculo de Dios", "desc": "Si Kami y Nail vibran en él, Piccolo goza de inmunidad pasiva a lectura/manipulación mental y no posee puntos ciegos en su campo de batalla.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "piccolo-orange", "name": "Orange Piccolo", "stats": "Nivel Multiversal Bajo. Piel naranja, cuerpo robusto, símbolo del orgullo Namek." } ],
    "feats": [
      "Sobrevivió y retuvo físicamente a Cell Max gigante.",
      "Noqueó a Gamma 2 de un solo golpe (quien estaba a nivel SSJ Blue).",
      "Actuó como escudo humano irrompible para Gohan Bestia."
    ],
    "psychology": "Orgulloso, estoico y ferozmente protector (como un abuelo o padre de la familia Son). Lucha pensando 10 pasos por delante.",
    "weaknesses": "La gigantificación lo vuelve un blanco fácil. Su poder de ataque a larga distancia (AP) puro es levemente menor a Goku o Gohan Bestia, destacando más en defensa."
  },
  // 4. TRUNKS DEL FUTURO (DBS)
  {
    "id": "trunks-del-futuro-saga-super-dragon-ball-super-626",
    "name": "Trunks del Futuro (Saga Super)",
    "alias": "El Héroe Definitivo / Guerrero de la Esperanza",
    "universe": "Dragon Ball Super",
    "saga": "Goku Black",
    "version": "Super Saiyan Rage / Genki-Dama Sword",
    "tier": "Tier 3-A a 2-C | Nivel Universal a Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo (Con Espada Genki). En estado de Ira (Super Saiyan Rage), su poder escala milagrosamente hasta poder luchar contra Black Goku y Zamasu. Al combinar su KI con la Genkidama de los supervivientes, su espada absorbe energía divina capaz de fracturar a Fused Zamasu, cuya esencia corrupta era inmortal.",
    "range": "Planetario, con cortes de Espada a rango Cósmico-Dimensional.",
    "speed": {
      "combat": "Inconmensurable (En Rage). Logró bloquear asaltos conjuntos de Zamasu y Black.",
      "reaction": "Inconmensurable.",
      "travel": "MFTL+.",
      "attack": "Cortes instantáneos hiper-lumínicos."
    },
    "strength": { "striking": "Clase Universal+. Capaz de romper y repeler ataques de Ki divino de oponentes más fuertes.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Universal+. Sobrevive repetidas palizas mortales de Zamasu Fusión; la energía de la humanidad lo sostiene.",
    "stamina": "Muy Alta. Curtido por una vida de supervivencia y guerra.",
    "battleIQ": "Pragmático y táctico, Trunks no juega con sus oponentes. Si tiene oportunidad, los mata inmediatamente.",
    "haxTags": [ "Fuerza de la Ira (Limit Break)", "Absorción Genki (Espada de Esperanza)", "Curación Básica (Aprendiz Kaioshin)", "Resistencia Psicológica Extrema" ],
    "arsenal": {
      "basicAttacks": "Estilo de esgrima rápido y brutal combinado con patadas cortas.",
      "superAttacks": [
        { "name": "Galick Gun Padre e Hijo", "desc": "Un torrente morado impulsado por el vínculo emocional. Puede contener temporalmente bolas destructoras a nivel estelar.", "cost": "20% Ki" },
        { "name": "Destello Final (Final Flash)", "desc": "Técnica heredada de Vegeta, usada a quemarropa.", "cost": "25% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Espada de la Esperanza (Sword of Hope)", "desc": "Su espada rota canaliza una enorme Genki-Dama de los supervivientes de la Tierra. Esta hoja de luz divina fractura y corta la inmortalidad misma, borrando el cuerpo físico del enemigo.", "cost": "80% Ki / Apoyo Externo" }
      ],
      "passives": [
        { "name": "Alma Inquebrantable", "desc": "El terror o los ataques mentales que causan desesperación no le afectan; al contrario, alimentan su Ira incrementando su poder base.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [
      { "id": "trunks-dbs-ssj2", "name": "Super Saiyan 2", "stats": "Nivel Multi-Galáctico. Su SSJ2 equivale casi al SSJ3 de Goku." },
      { "id": "trunks-dbs-rage", "name": "Super Saiyan Rage", "stats": "Nivel Multiversal Bajo. Pupilas blancas, aura mixta dorada y azul divina. El poder del trauma." }
    ],
    "feats": [
      "Cortó a la mitad el cuerpo inmortal de Zamasu Fusión.",
      "Sobrevivió durante años evadiendo a Black Goku sin recursos.",
      "Luchó mano a mano repeliendo el Kamehameha Oscuro a máximo nivel de Black."
    ],
    "psychology": "Serio, estresado, noble. Es el arquetipo de héroe trágico que actúa sin vacilación para proteger lo poco que le queda.",
    "weaknesses": "Carece del entrenamiento técnico puro en Ki Divino de Goku o Vegeta, dependiendo fuertemente de aumentos emocionales y ayuda ajena (Genkidama)."
  },
  // 5. HIT
  {
    "id": "hit-dragon-ball-super-450",
    "name": "Hit",
    "alias": "El Sicario Infalible del Universo 6",
    "universe": "Dragon Ball Super",
    "saga": "Torneo U6 vs U7 / Torneo del Poder",
    "version": "Torneo del Poder / Desarrollo Puro",
    "tier": "Tier 3-A a 2-C | Nivel Universal+",
    "ap": "Nivel Universal+. El legendario asesino de mil años. En lugar de poder bruto destructivo, su AP recae enteramente en el daño localizado de precisión. Sus golpes invisibles paralizan los nervios, el corazón y el flujo de Ki con impactos de escala universal, sin malgastar energía en el entorno.",
    "range": "Físico (Melee) e Intangible/Dimensional con ondas de choque.",
    "speed": {
      "combat": "Inconmensurable (Gracias a manipulación temporal).",
      "reaction": "Inconmensurable.",
      "travel": "MFTL+.",
      "attack": "Ataques de Salto Temporal instantáneos (Time-Skip)."
    },
    "strength": { "striking": "Clase Universal. Su fuerza física pura es letal solo por donde aterriza el golpe (puntos vitales).", "lifting": "Clase Estelar." },
    "durability": "Nivel Universal+. Puede adaptar su cuerpo y ocultarse temporalmente en su propia dimensión paralela, evadiendo ataques letales (Intangibilidad).",
    "stamina": "Muy Alta. Extremadamente eficiente con su gasto calórico.",
    "battleIQ": "Asesino Maestro. Su mente calcula probabilidades matemáticas de evasión y puntos vitales en milisegundos. Siempre está en control emocional.",
    "haxTags": [
      "Manipulación del Tiempo (Time-Skip)",
      "Intangibilidad / Dimensión de Bolsillo",
      "Prisión del Tiempo (Time Cage)",
      "Golpes Asesinos Invisibles (Ki Paralizante)"
    ],
    "arsenal": {
      "basicAttacks": "Golpes con nudillos ocultos en los bolsillos que cruzan la barrera dimensional y golpean el corazón sin contacto físico.",
      "superAttacks": [
        { "name": "Salto Temporal (Flash de Asesinato)", "desc": "Detiene el tiempo por décimas de segundo, propinando ráfagas de golpes letales a las costillas, ojos o cuello, volviendo al tiempo real para que el enemigo reciba el daño súbito.", "cost": "15% Ki" },
        { "name": "Golpe de Onda Invisible", "desc": "Un destello de ki oscuro y morado que atraviesa cualquier armadura o Ki defensivo y choca directamente contra los órganos internos.", "cost": "10% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Cárcel del Tiempo (Time Cage)", "desc": "Inyecta su propio ki temporal en el adversario, encerrándolo en un bucle congelado donde Hit tiene control absoluto. Incluso paralizó momentáneamente a Jiren.", "cost": "60% Ki" }
      ],
      "passives": [
        { "name": "Evolución Rápida de Sicario", "desc": "Hit mejora su Salto Temporal en medio del combate pasivamente si su oponente logra igualar su nivel base, ampliando su control dimensional.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "hit-base", "name": "Estado Base (Asesino)", "stats": "Nivel Universal+. Manos en los bolsillos, postura letal y silenciosa." } ],
    "feats": [
      "Paralizó el corazón de Goku y lo 'mató' temporalmente en la Tierra.",
      "Encerró a Jiren en la Prisión Temporal y casi lo desestabiliza.",
      "Obligó a Goku a inventar la combinación SSJ Blue + Kaio-ken x10."
    ],
    "psychology": "Un profesional absoluto de sangre fría. No tiene malicia, es simplemente un trabajo. Mantiene un aura de elegancia sobria y respeta a los rivales tácticos.",
    "weaknesses": "Vulnerable si el enemigo posee un Ki abismalmente superior (Tier 2-C alto), ya que su Time-Skip se fractura al lidiar con presiones cósmicas excesivas (Jiren, Goku Blue Kaio-ken x20)."
  },
  // 6. OMEGA SHENRON (GT)
  {
    "id": "omega-shenron-dragon-ball-gt-904",
    "name": "Super Yi Xing Long (Omega Shenron)",
    "alias": "El Dragón Supremo de 1 Estrella / Energía Negativa Absoluta",
    "universe": "Dragon Ball GT",
    "saga": "Dragones Oscuros",
    "version": "Con las 7 Bolas del Dragón absorbidas",
    "tier": "Tier 3-B a 3-A | Nivel Multi-Galáctico a Universal",
    "ap": "Nivel Universal. Como encarnación de toda la energía negativa acumulada por los deseos a las esferas del Dragón. Omega Shenron condensa el poder de los 7 dragones en su propio cuerpo. Su Karma Ball o ataques pasivos amenazaban con pudrir gradualmente el universo mortal, el más allá y el reino Kaioshin con mera corrupción.",
    "range": "Universal mediante expansión pasiva de Karma Negativo.",
    "speed": {
      "combat": "MFTL+. Bloqueaba sin mirar golpes de SSJ4 Goku y Vegeta.",
      "reaction": "MFTL+.",
      "travel": "MFTL+ / Desplazamiento elemental (Viento, rayo).",
      "attack": "Velocidad lumínica absoluta."
    },
    "strength": { "striking": "Clase Universal. Acierta golpes demoledores capaces de noquear a guerreros SSJ4.", "lifting": "Clase Galáctica." },
    "durability": "Nivel Universal. Inmortalidad regenerativa por pura magia oscura y los elementos de los demás dragones.",
    "stamina": "Infinita, se alimenta de la desesperación cósmica y la contaminación de las Dragon Balls.",
    "battleIQ": "Sumamente arrogante y destructivo. Carece de artes marciales finas, basándose en superioridad monstruosa pura.",
    "haxTags": [
      "Manipulación Elemental Absoluta (Fuego, Hielo, Viento, Rayo, Tierra)",
      "Corrupción Cósmica Negativa (Veneno/Putrefacción Ambiental)",
      "Regeneración Extrema",
      "Perforación Óptima (Espinas letales)"
    ],
    "arsenal": {
      "basicAttacks": "Golpes brutales extendiendo espinas letales de su cuerpo y lanzando ráfagas combinadas de hielo/fuego.",
      "superAttacks": [
        { "name": "Lanzamiento de Espinas Demoniacas", "desc": "Dispara desde su espalda espinas cargadas de energía negativa que empalan e inyectan veneno cósmico, corrompiendo la víctima.", "cost": "15% Ki" },
        { "name": "Tornado de Fuego / Hielo", "desc": "Usa los poderes de Nova y Eis Shenron simultáneamente para atrapar y asfixiar al enemigo.", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Bola de Energía Negativa (Karma Ball)", "desc": "Reúne toda la corrupción, muerte y negatividad del universo en una inmensa bola negra y rojiza con la densidad suficiente para erradicar sistemas estelares enteros de un golpe.", "cost": "75% Ki" }
      ],
      "passives": [
        { "name": "Presencia de la Ruina", "desc": "Su simple aura reduce pasivamente los atributos del oponente por pudrición e interfiere con la capacidad de teletransportación y curación divina.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "omega-shenron-base", "name": "Omega Shenron (7 Esferas)", "stats": "Nivel Universal. Cuerpo blanco, espinas monstruosas, las 7 esferas incrustadas en su pecho." } ],
    "feats": [
      "Noqueó simultáneamente a Vegeta SSJ4, Gohan, Trunks y Goten, Majuub.",
      "Casi elimina el universo y el mundo Kaioshin entero mediante degradación de energía oscura.",
      "Sobrevivió el Big Bang Kamehameha de SSJ4 Gogeta absorbiendo la onda (y regenerándose)."
    ],
    "psychology": "Crueldad pura, sádico, la antítesis a los milagros. Desprecia a Goku y cree que los humanos merecen extinguirse por su avaricia en el uso de los deseos.",
    "weaknesses": "Vulnerabilidad a Ki puro purificador extremo (Kamehameha del Big Bang / Genkidama Universal) y si recibe suficiente daño rápido, regurgitará las esferas perdiendo niveles de poder."
  },
  // 7. JANEMBA
  {
    "id": "janemba-gordo-pel-culas-dbz-toei-542",
    "name": "Super Janemba",
    "alias": "El Demonio de las Dimensiones / Mal Encarnado",
    "universe": "Dragon Ball Z (Películas Toei)",
    "saga": "El Renacer de la Fusión",
    "version": "Transformación Perfecta (Super Janemba)",
    "tier": "Tier 3-B a 3-A | Nivel Multi-Galáctico a Universal",
    "ap": "Nivel Universal. La encarnación cristalizada de toda la maldad purgada en el Otro Mundo. Su simple existencia deformó por completo las leyes de la física y la realidad tanto en el Paraíso como en la Tierra, alterando el espacio-tiempo de todo el universo mortal. Golpea a Goku SSJ3 al borde de la muerte sin sudar.",
    "range": "Omnipresente a nivel de alteración de Realidad Dimensional.",
    "speed": {
      "combat": "Inconmensurable (Desmonta su propio cuerpo).",
      "reaction": "Inconmensurable.",
      "travel": "Manipulación Espacial (Desplazamiento Cuántico instantáneo).",
      "attack": "Cortes Dimensionales lumínicos."
    },
    "strength": { "striking": "Clase Galáctica.", "lifting": "Incalculable (Usa telequinesis)." },
    "durability": "Nivel Universal. Su cuerpo se disuelve en bloques geométricos ante ataques contundentes para evadir el daño y recomponerse detrás del adversario.",
    "stamina": "Infinita, nutrida de la maldad del infierno.",
    "battleIQ": "Caótico e Instintivo. No tiene un estilo de lucha formal; ataca deformando la materia a su alrededor (convirtiendo rocas en espadas).",
    "haxTags": [
      "Warp Espacio-Temporal y Dimensional (Bunkai Teleport)",
      "Creación y Alteración de la Materia",
      "Extensión Mágica de Extremidades",
      "Espejismo y Clonación"
    ],
    "arsenal": {
      "basicAttacks": "Golpes extendiendo sus extremidades por portales y patadas con zapatos de diablo. Cambia la densidad de los objetos.",
      "superAttacks": [
        { "name": "Lluvia de Agujas Dimensional (Rakshasa Claw)", "desc": "Arañazos al aire que rasgan la realidad y golpean al oponente desde cientos de portales ciegos invisibles.", "cost": "20% Ki" },
        { "name": "Teletransportación Bunkai", "desc": "Su cuerpo se divide en pequeños cubos y se transporta instantáneamente anulando bloqueos o escudos enemigos.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Espada de la Realidad (Dimension Sword)", "desc": "Transforma un objeto inofensivo en una espada de Ki diabólica. Un solo tajo rompe las barreras dimensionales y rebana materia impenetrable sin contacto directo.", "cost": "50% Ki" }
      ],
      "passives": [
        { "name": "Manto del Inframundo", "desc": "Inmune a ataques que usen fuego o energía destructiva básica. El escenario del combate muta gradualmente en formas surrealistas que lo favorecen.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "super-janemba", "name": "Super Janemba", "stats": "Nivel Universal. Forma roja y púrpura. Cruel, letal y silencioso." } ],
    "feats": [
      "Derrotó a Goku SSJ3 con facilidad extrema obligándolo a escapar.",
      "Altera la vida y muerte, reviviendo a todos los muertos de la Tierra de forma casual.",
      "Sobrevivió y superó los ataques iniciales de la Fusión de Goku y Vegeta antes de que estos se lo tomasen en serio."
    ],
    "psychology": "Una bestia sin palabras pero consciente. Lucha por el puro placer instintivo del caos y la aniquilación de la pureza.",
    "weaknesses": "Los insultos y ofensas verbales puras dañan su estructura cósmica/astral temporalmente (rompen su barrera). Solo vulnerable a un golpe infundido en Ki que purifique la energía (Stardust Breaker de Gogeta)."
  },
  // 8. COOLER
  {
    "id": "lord-cooler-pel-culas-dbz-toei-792",
    "name": "Cooler",
    "alias": "Lord Cooler / El Hermano de Freezer",
    "universe": "Dragon Ball Z (Películas Toei)",
    "saga": "La Venganza de Cooler",
    "version": "Forma Final Extrema (5ta Forma)",
    "tier": "Tier 4-B | Nivel Sistema Solar Menor",
    "ap": "Nivel Estrella a Sistema Solar Menor. Como hermano mayor de Freezer, su biología evolucionó desarrollando una transformación adicional oculta. En esta 5ta Forma, su poder humilló completamente a Goku en estado Base y soportó sin inmutarse el Kamehameha del Super Saiyan con la pura intención física y su Supernova supera por mucho a la de su hermano.",
    "range": "Estelar mediante su Death Ball gigante.",
    "speed": {
      "combat": "Masivamente FTL (MFTL). Podía abalanzarse atravesando ráfagas completas sin perder inercia.",
      "reaction": "MFTL.",
      "travel": "Desplazamiento Espacial MFTL+.",
      "attack": "Lumínica."
    },
    "strength": { "striking": "Clase Estrella Grande.", "lifting": "Clase G a Planetario." },
    "durability": "Nivel Sistema Solar Menor. Atravesó un Kamehameha de Goku SSJ usando fuerza bruta sin desintegrarse; fue necesario lanzarlo directamente al Sol para sobrecalentarlo.",
    "stamina": "Muy Alta. Su forma no consume Ki tan drásticamente como el 100% de Freezer en Namek.",
    "battleIQ": "Implacable, silencioso y profesional. No deja a nadie vivo para que cause problemas a futuro (a diferencia de la arrogancia de Freezer).",
    "haxTags": [ "Mutación de Armadura Biológica Extrema", "Rayo de Desintegración", "Vuelo Espacial" ],
    "arsenal": {
      "basicAttacks": "Golpes a puño cerrado estilo mazo y tacleadas de hombro demoledoras.",
      "superAttacks": [
        { "name": "Rayo Perforante de Ojos", "desc": "Rayos disparados desde sus retinas con inmensa penetración de armadura.", "cost": "10% Ki" },
        { "name": "Carga Devastadora", "desc": "Vuela directo hacia el enemigo envuelto en Ki morado a prueba de ráfagas para chocar de frente.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Supernova de la Venganza", "desc": "Crea y empuja una esfera masiva del tamaño de un pequeño planeta que aniquila sistemas estelares.", "cost": "60% Ki" }
      ],
      "passives": [
        { "name": "Mascara Bio-Metálica", "desc": "Reduce enormemente el daño (Buff pasivo de defensa) de ataques contundentes en el cuello o cara.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "cooler-forma-final", "name": "5ta Forma (Forma Final)", "stats": "Nivel Estrella Grande. Armadura blanca con cuernos, máscara facial retráctil." } ],
    "feats": [
      "Derrotó a Goku estado base/Kaio-ken destrozándolo psicológicamente.",
      "Sobrevivió el empuje al Sol antes de fusionarse con la Estrella Gete.",
      "Nunca menosprecia al rival (intentó matar a Gohan niño sin pensarlo)."
    ],
    "psychology": "Frío y metódico. Carece de la personalidad histriónica de Freezer; Cooler es un soldado disciplinado pero despiadado que arregla los cabos sueltos personalmente.",
    "weaknesses": "Vulnerable al calor/daño que supere con creces la resistencia de su biológica estelar pura (el Sol)."
  },
  // 9. BOJACK
  {
    "id": "bojack-pel-culas-dbz-toei-695",
    "name": "Bojack",
    "alias": "El Pirata Galáctico Demonio",
    "universe": "Dragon Ball Z (Películas Toei)",
    "saga": "¡La Galaxia corre peligro!",
    "version": "Transformación Full Power",
    "tier": "Tier 4-B | Nivel Sistema Solar",
    "ap": "Nivel Sistema Solar. Este pirata espacial demonio estaba sellado en una estrella por los Kaios. Tras romperse el sello, su poder abrumó a Gohan SSJ Full Power, Vegeta SSJ y Trunks SSJ a la vez. En su estado de máximo poder masacró a los Guerreros Z combinando pura brutalidad verde oscuro y la ayuda de su tripulación.",
    "range": "Planetario mediante hilos cósmicos y ráfagas Ki.",
    "speed": {
      "combat": "Masivamente FTL.",
      "reaction": "MFTL.",
      "travel": "MFTL.",
      "attack": "Alta velocidad usando tácticas de emboscada psíquica/trampas."
    },
    "strength": { "striking": "Clase Sistema Solar.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Sistema Solar. Soporta puñetazos de Gohan Místico/SSJ2 en su abdomen... pero finalmente muere si su oponente supera ese Tier holgadamente.",
    "stamina": "Muy Alta. Guerrero demonio curtido en saqueos milenarios.",
    "battleIQ": "Astuto, oportunista y sucio. Usa siempre tácticas de estrangulamiento y rehenes para asegurar su victoria.",
    "haxTags": [
      "Hilos Psico-Telequinéticos (Trampas Inmovilizadoras)",
      "Tácticas Sucias Colectivas",
      "Magia Demonio Espacial"
    ],
    "arsenal": {
      "basicAttacks": "Golpes masivos con garras, estrangulamientos y abrazos de oso que rompen columnas.",
      "superAttacks": [
        { "name": "Bala Asesina Galáctica (Galactic Buster)", "desc": "Dispara desde la palma una esfera verde altamente concentrada diseñada para taladrar armaduras de Ki.", "cost": "20% Ki" },
        { "name": "Hilos Asfixiantes (con Tripulación)", "desc": "Un asalto telequinético que ata e inmoviliza a oponentes de la talla de Gohan, succionando su energía gradualmente.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Tirano del Cosmos (Grand Smasher)", "desc": "Acumula toda su furia demoníaca verde en ambos brazos y dispara una ola masiva que pulveriza la materia a escala planetaria.", "cost": "70% Ki" }
      ],
      "passives": [
        { "name": "Crueldad de Pirata", "desc": "Obtiene un buff de daño en un 20% si el adversario está previamente herido, paralizado o distraído.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "bojack-full", "name": "Forma Máxima (100% de Poder)", "stats": "Nivel Sistema Solar. Piel verde lima, pelo rojo alzado, cicatrices y camisa destrozada." } ],
    "feats": [
      "Derrotó a Vegeta SSJ con increíble facilidad estrangulándolo.",
      "Asesinó a sus propios camaradas solo para usar su cadáver como escudo y ganar una ventaja de milisegundos contra Gohan."
    ],
    "psychology": "Totalmente amoral, sediento de riquezas, saqueos y destrucción. No tiene lealtad ni por su propia raza.",
    "weaknesses": "Arrogante; no tiene resistencia contra ataques perforantes supremos de nivel 4-B o 4-A (Fue asesinado por un golpe perforante del SSJ2 de Gohan)."
  }
];

const filePath = path.resolve(__dirname, '../src/data/characters.js');
let content = fs.readFileSync(filePath, 'utf8');

const prefix = 'export const INITIAL_CHARACTERS = ';
const currentList = eval(content.replace(prefix, ''));
console.log(`Current characters count: ${currentList.length}`);

let updatedCount = 0;
batch2Upgrades.forEach(upgrade => {
  // Try to find exact ID first
  let index = currentList.findIndex(c => c.id === upgrade.id);
  // If not found, use a custom search based on original IDs provided or name matching
  if (index === -1) {
      if (upgrade.name === 'Super Yi Xing Long (Omega Shenron)') {
          index = currentList.findIndex(c => c.id.includes('omega-shenron-dragon-ball-gt'));
      } else if (upgrade.name === 'Super Janemba') {
          index = currentList.findIndex(c => c.id.includes('janemba'));
      }
  }

  if (index !== -1) {
    currentList[index] = upgrade; // Overwrite
    updatedCount++;
    console.log(`Upgraded: ${upgrade.name} (${upgrade.id})`);
  } else {
    // If absolutely not found, we just push it as a new character (unlikely to happen since we mapped IDs, but a safe fallback)
    currentList.push(upgrade);
    updatedCount++;
    console.log(`Added as New: ${upgrade.name} (${upgrade.id})`);
  }
});

const output = "// APEX Engine — Base de Datos de Personajes Estructurada (VS Battles Tier System)\\n// Total fichas deduplicadas y normalizadas\\n\\nexport const INITIAL_CHARACTERS = " + JSON.stringify(currentList, null, 2) + ";\\n";
fs.writeFileSync(filePath, output.replace(/\\n/g, '\n'), 'utf8');

console.log(`Batch 2 Upgrade Complete. ${updatedCount} characters successfully enhanced.`);
