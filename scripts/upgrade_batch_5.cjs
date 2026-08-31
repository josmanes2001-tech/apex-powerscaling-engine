const fs = require('fs');
const path = require('path');

const batch5Upgrades = [
  // 1. MORO (DBS)
  {
    "id": "moro-dragon-ball-super-496",
    "name": "Moro",
    "alias": "El Devorador de Planetas",
    "universe": "Dragon Ball Super",
    "saga": "El Prisionero de la Patrulla Galáctica",
    "version": "Absorción de 7-3 (Copia de Habilidades) / Moro Ángel",
    "tier": "Tier 2-C | Nivel Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. Tras asimilar el cuerpo de Merus (Ángel en entrenamiento), Moro obtiene acceso al Ultra Instinto y un poder destructivo angelical. Su cuerpo mortal no soportaba el límite y terminó fusionándose con la Tierra misma, amenazando con explotar y llevarse toda la galaxia si era destruido mal, con su Ki hinchándose a niveles multiversales descontrolados.",
    "range": "Multi-Galáctico (Absorción Pasiva) a Universal.",
    "speed": {
      "combat": "Inconmensurable. Igualó la velocidad del Ultra Instinto de Goku durante un corto período.",
      "reaction": "Inconmensurable (Con UI copiado).",
      "travel": "MFTL+ / Desplazamiento mágico intergaláctico.",
      "attack": "Velocidad lumínica mágica."
    },
    "strength": { "striking": "Clase Multiversal Bajo.", "lifting": "Clase Universal." },
    "durability": "Nivel Multiversal Bajo. Su fusión con la Tierra lo volvió prácticamente inatacable por medios convencionales que no destruyeran el planeta entero.",
    "stamina": "Absurda. Roba energía a todos los seres vivos del universo pasivamente.",
    "battleIQ": "Hechicero Milenario Maquiavélico. Utiliza engaños, copias de habilidades y magia arcana para incapacitar a guerreros de fuerza superior.",
    "haxTags": [
      "Absorción Vital Planetaria (Drenaje de Ki)",
      "Copia Perfecta de Habilidades (Cuello de 7-3)",
      "Ultra Instinto Artificial",
      "Magia Arcana (Ilusiones, Lava, Elementos)",
      "Fusión Planetaria"
    ],
    "arsenal": {
      "basicAttacks": "Golpes imbuidos con magia perforante. Engaños ilusorios y manipulación de energía volcánica.",
      "superAttacks": [
        { "name": "Drenaje Estelar", "desc": "Abre la boca y roba pasivamente la energía de todos los seres orgánicos y planetas de la región, dejándolos muertos y secos.", "cost": "0% Ki (Absorbe Ki)" },
        { "name": "Copia de Habilidad (7-3)", "desc": "Al tocar la nuca de un oponente, copia TODAS sus habilidades y transformaciones (incluyendo poderes angelicales) por 30 minutos.", "cost": "10% Magia" }
      ],
      "ultimateAttacks": [
        { "name": "Bomba Galáctica (Fusión Planetaria)", "desc": "Al fundirse con la Tierra, Moro hincha su Ki divino sin control. Si es golpeado críticamente sin ser destruido el cristal de su cabeza, explotará aniquilando la galaxia completa y todo el sistema planetario.", "cost": "100% HP" }
      ],
      "passives": [
        { "name": "Devorador Constante", "desc": "Drena pasivamente 10% del HP y KI del adversario cada turno, restaurando los suyos propios.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "moro-angel", "name": "Moro 7-3 (Ángel / Tierra)", "stats": "Nivel Multiversal Bajo. Cristal en la frente, aspecto demonio cabra-humanoide, inestable." } ],
    "feats": [
      "Derrotó a Goku Blue y Vegeta Blue fácilmente al robarles el Ki sin que se dieran cuenta.",
      "Asimiló a 7-3 y derrotó a Gohan, Piccolo, Androides, Vegeta y Goku simultáneamente.",
      "Casi destruye la Vía Láctea entera por sobrecarga de poder divino."
    ],
    "psychology": "Megalomaniaco consumido por el hambre de poder y vida. Ve a los seres mortales y planetas únicamente como 'comida'. Desesperado por sobrevivir.",
    "weaknesses": "Sobrecarga de poder. Su cuerpo biológico mortal no está diseñado para soportar el Ki de un Ángel, hinchándose y perdiendo la razón/movilidad si lo retiene mucho tiempo. La Fisión de Espíritu lo contrarresta."
  },
  // 2. GAS (DBS)
  {
    "id": "gas-dragon-ball-super-973",
    "name": "Gas",
    "alias": "El Sicario de los Heeter",
    "universe": "Dragon Ball Super",
    "saga": "Granolah",
    "version": "Forma Anciano Desatado (Deseo de las Esferas)",
    "tier": "Tier 2-C | Nivel Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. Elec pidió un deseo para convertir a Gas en 'El más fuerte del Universo', sacrificando casi toda la esperanza de vida biológica del guerrero. En esta forma anciana pero monstruosamente musculosa, Gas vapulea a Granolah, al Ultra Ego de Vegeta y al Ultra Instinto Verdadero de Goku usando constructos de armas cósmicas y pura fuerza bruta letal.",
    "range": "Universal mediante telequinesis y lanzas de Ki gigantes.",
    "speed": {
      "combat": "Inconmensurable. Era el guerrero más veloz del macrocosmos (antes de que Black Freezer apareciera).",
      "reaction": "Inconmensurable.",
      "travel": "MFTL+ y Teletransportación.",
      "attack": "Golpes instantáneos."
    },
    "strength": { "striking": "Clase Multiversal Bajo. Rompe huesos de dioses y rompe armaduras divinas con simples mazazos de Ki.", "lifting": "Clase Universal." },
    "durability": "Nivel Multiversal Bajo. Carece de instinto de supervivencia; su cuerpo se niega a morir porque Elec se lo ordena, luchando literalmente sin piel o con el rostro esquelético.",
    "stamina": "Artificialmente Ilimitada (Deseo Shenlong). Sigue moviéndose aun cuando su cuerpo biológico está clínicamente muerto y putrefacto por el esfuerzo.",
    "battleIQ": "Sicario leal pero emocionalmente inestable. Depende enteramente de las órdenes de Elec.",
    "haxTags": [
      "Materialización de Armas de Ki Absolutas (Mazas, Escudos, Espadas)",
      "Deseo de Insuperabilidad Condicionada",
      "Estado Zombi (Ignora daño letal biológico)"
    ],
    "arsenal": {
      "basicAttacks": "Crea armas de Ki verde/azul sobre la marcha (picos, cadenas, mazos) y las usa de forma devastadora y violenta.",
      "superAttacks": [
        { "name": "Lluvia de Hierro Cósmico", "desc": "Materializa cientos de lanzas y escudos gigantes sobre el oponente, aplastándolo bajo su peso hiper-denso.", "cost": "15% Ki" },
        { "name": "Teletransportación Forzada", "desc": "No solo se teletransporta él, sino que teletransporta al adversario directamente a la trayectoria de sus puños sin necesidad de tocarlo.", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Furia del Moribundo", "desc": "Gas se arranca sus propias restricciones y condensa toda su vida restante en sus extremidades. Lanza un combo de mutilación absoluta que desgarra al rival, dejando a Gas más esquelético.", "cost": "30% Ki / Reduce Max HP" }
      ],
      "passives": [
        { "name": "Condena de Vida", "desc": "Gas ignora las debilidades o penalizaciones por bajo HP. Mientras más bajo sea su HP, más rápido y letal ataca, pero al llegar a 0 se vuelve polvo instantáneamente.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "gas-anciano", "name": "Forma Máxima (Zombi)", "stats": "Nivel Multiversal Bajo. Demacrado, esquelético, sin pupila, puramente mantenido vivo por el deseo del dragón." } ],
    "feats": [
      "Venció a Granolah destrozando ambos de sus ojos.",
      "Aguantó los asaltos de Goku UI y Vegeta UE simultáneamente, forzando a Goku a crear un Avatar de Ki de emergencia.",
      "Peleó siendo literalmente un cadáver reanimado por magia."
    ],
    "psychology": "Profundamente aterrorizado de Elec y de fracasar. Un guerrero infantil atrapado en el cuerpo de una bestia moribunda. Pelea por pura obediencia, sufriendo en cada momento.",
    "weaknesses": "Vida extremadamente corta, manipulable psicológicamente si se le separa de Elec, e instantáneamente aniquilado por alguien con un poder base superior (Black Freezer)."
  },
  // 3. GRANOLAH
  {
    "id": "granolah-peak-dbs-manga-gr001",
    "name": "Granolah",
    "alias": "El Último Cereliano / El Más Fuerte",
    "universe": "Dragon Ball Super",
    "saga": "Granolah",
    "version": "Ojos Rojos Evolucionados (Poder Completo)",
    "tier": "Tier 2-C | Nivel Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. Tras usar las esferas del dragón de Trombo para ser el más fuerte del universo a cambio de dejarle solo 3 años de vida, Granolah adquiere un nivel demencial. Como francotirador, su AP es el más letal en daño localizado: con dos dedos puede asestar puntos vitales con precisión microscópica que noquean al Ultra Instinto y apagan el Ultra Ego, ignorando defensas.",
    "range": "Físico y de precisión interplanetaria con Sniper Ki.",
    "speed": {
      "combat": "Inconmensurable. Evadió golpes de Goku UI y Vegeta a corta distancia con perfecta eficiencia.",
      "reaction": "Inconmensurable (Ojo Derecho e Izquierdo despiertos).",
      "travel": "MFTL+ / Shunkanido fluido.",
      "attack": "Tiros de francotirador trans-lumínicos indetectables."
    },
    "strength": { "striking": "Clase Multiversal Bajo.", "lifting": "Clase Universal." },
    "durability": "Nivel Multiversal Bajo. Entrenado pero propenso al daño directo masivo si su oponente iguala su poder, ya que no es un experto en absorber impactos como Vegeta.",
    "stamina": "Baja en batallas de largo aliento. Su poder quema su ya de por sí mermada expectativa de vida.",
    "battleIQ": "Francotirador Estratégico Excepcional. Evita confrontaciones innecesarias, buscando siempre el tiro único a la yugular, nuca o centro nervioso.",
    "haxTags": [
      "Ojo Cereliano (Visión de Puntos Vitales)",
      "Hakai Menor (Copiado/Simulado)",
      "Clonación de Ki Autónomo",
      "Tiro Letal de Precisión"
    ],
    "arsenal": {
      "basicAttacks": "Disparos con dos dedos desde los bolsillos. Pelea manteniendo las manos guardadas.",
      "superAttacks": [
        { "name": "Bala de Presión Vital", "desc": "Un destello rojo-amarillento mínimo e indetectable que golpea los centros nerviosos del enemigo, aturdiéndolo por completo o rompiéndole su transformación.", "cost": "10% Ki" },
        { "name": "Ráfaga de Francotirador", "desc": "Usa ambos ojos rojos para apuntar desde la estratósfera, disparando flechas de Ki hiper-comprimido.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Juicio del Cereliano (100% Vida)", "desc": "Granolah acumula todo su poder, consumiendo meses de su vida en segundos, para disparar una orbe devastadora que mezcla precisión absoluta y poder de destrucción estelar.", "cost": "60% Ki / Reduce Max HP" }
      ],
      "passives": [
        { "name": "Visión de Sangre Cereliana", "desc": "Sus golpes siempre son Críticos (ignorando gran parte del Armor/Defensa del rival) gracias a su conocimiento perfecto de la anatomía enemiga.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "granolah-ojos-rojos", "name": "Ojos Cerelianos Despertados", "stats": "Nivel Multiversal Bajo. Ojos completamente rojos, cabello verde brillante, precisión divina." } ],
    "feats": [
      "Noqueó de un solo golpe a Goku UI (estado perfecto retenido) golpeando su nuca.",
      "Peleó simultáneamente a la par de Vegeta Ultra Ego y Goku Blue.",
      "Logró destruir las extremidades armadas de Gas en su máximo estado antes de quedar ciego."
    ],
    "psychology": "Vengativo pero noble en el fondo. Ciego por el odio a Freezer y los Saiyans, dispuesto a sacrificar su existencia entera por su vendetta personal.",
    "weaknesses": "Falta de experiencia de combate cuerpo a cuerpo rústico (fue sorprendido por los estilos salvajes de Vegeta y Gas). Su poder es artificial y carece del callo de la batalla."
  },
  // 4. TOPPO (HAKAISHIN)
  {
    "id": "toppo-dragon-ball-super-140",
    "name": "Toppo",
    "alias": "Líder de las Tropas del Orgullo / Dios de la Destrucción Electo",
    "universe": "Dragon Ball Super",
    "saga": "Torneo del Poder",
    "version": "Modo Dios de la Destrucción (Hakaishin)",
    "tier": "Tier 2-C | Nivel Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. Al abandonar sus principios de 'Justicia' y aceptar el rol del Dios de la Destrucción del Universo 11, Toppo gana acceso total a la Energía Hakai. Un toque suyo borra la materia e invalida las leyes de la física, partiendo a la mitad el infinito escenario del Torneo del Poder con suma facilidad.",
    "range": "Multi-Galáctico a Universal (Ondas Hakai).",
    "speed": {
      "combat": "Inconmensurable. Mantuvo a raya a Androide 17 y Gohan y arrinconó a Freezer Golden destrozándolo físicamente.",
      "reaction": "Inconmensurable.",
      "travel": "MFTL+.",
      "attack": "Velocidad inmediata de borrado (Hakai)."
    },
    "strength": { "striking": "Clase Multiversal Bajo. Fracturó todos los huesos del torso de Freezer Dorado de una palmada y un pisotón.", "lifting": "Clase Universal." },
    "durability": "Nivel Multiversal Bajo. Rodeado permanentemente por una armadura de Energía de Destrucción pura. Cualquier ataque inferior al nivel de un Dios simplemente se desvanece al tocarlo.",
    "stamina": "Muy Alta. La forma divina canaliza la energía eficientemente.",
    "battleIQ": "Experimentado y letal. En este modo pierde toda ética, usando la aniquilación pura en lugar de técnicas acrobáticas.",
    "haxTags": [
      "Armadura de Hakai Absoluta (Aura de Destrucción)",
      "Borrado Existencial",
      "Rompimiento de Barreras Conceptuales"
    ],
    "arsenal": {
      "basicAttacks": "Golpes pesados contundentes impregnados de energía púrpura destructiva.",
      "superAttacks": [
        { "name": "Justice Flash (Destrucción)", "desc": "Dispara cientos de láseres de Hakai desde sus dedos, evaporando todo lo que tocan en la arena.", "cost": "15% Ki" },
        { "name": "Esfera de Destrucción Masiva", "desc": "Crea soles púrpuras en el aire y los arroja para desintegrar a escala planetaria.", "cost": "25% Ki Divino" }
      ],
      "ultimateAttacks": [
        { "name": "Hakai (Borrado Total)", "desc": "Reúne todo su poder destructivo en sus inmensas manos para engullir al enemigo en una dimensión de pura aniquilación, sin dejar siquiera polvo astral.", "cost": "60% Ki Divino" }
      ],
      "passives": [
        { "name": "Escudo de la Destrucción", "desc": "Anula el 100% de daño de ráfagas Ki que no contengan Ki Divino avanzado o un AP equivalente al Tier 2-C. Los enemigos que lo tocan físicamente sufren daño por fricción Hakai.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "toppo-hakaishin", "name": "Modo Dios de la Destrucción", "stats": "Nivel Multiversal Bajo. Símbolo del U11 en el torso, aura púrpura profunda, ojos violeta, corpulento." } ],
    "feats": [
      "Hizo pedazos a Golden Freezer, humillándolo por completo al nivel de basura.",
      "Atravesó las barreras infinitas de Androide 17.",
      "Luchó contra SSJ Blue Evolution Vegeta, forzando a Vegeta a sacrificarse con una Explosión Final para derrotarlo."
    ],
    "psychology": "Destrozado internamente. Ha traicionado sus ideales de justicia y camaradería a cambio de la supervivencia de su universo, refugiándose en el pragmatismo frío y la destrucción pura.",
    "weaknesses": "Ataques de área masivos impulsados por emociones que logren traspasar la barrera del Hakai (como el Final Explosion de Vegeta). Tiempo de recarga entre lanzamientos pesados de Hakai."
  },
  // 5. KEFLA
  {
    "id": "kefla-dragon-ball-super-104",
    "name": "Kefla",
    "alias": "La Fusión del Universo 6",
    "universe": "Dragon Ball Super",
    "saga": "Torneo del Poder",
    "version": "Super Saiyan 2",
    "tier": "Tier 3-A a 2-C | Nivel Universal a Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. La fusión Pothala de Kale (Saiyajin Mutante Legendaria) y Caulifla (Prodigio). Su poder es una anomalía que escala vertiginosamente. En SSJ2, su nivel bruto obligó a Goku a activar el Ultra Instinto Señal, ya que un solo golpe de sus ráfagas láser cósmicas era capaz de matarlo, incluso bloqueando.",
    "range": "Universal (Rayos láser aleatorios destructores).",
    "speed": {
      "combat": "Inconmensurable. Empujó a Goku Blue Kaio-ken a la defensiva.",
      "reaction": "Inconmensurable.",
      "travel": "MFTL+.",
      "attack": "Láseres omnidireccionales MFTL+."
    },
    "strength": { "striking": "Clase Universal. Acierta patadas brutales capaces de aturdir al SSJ Blue.", "lifting": "Clase Estelar." },
    "durability": "Nivel Universal. Resistencia absurda gracias a la sangre de Kale combinada con la magia de los pendientes.",
    "stamina": "Muy Alta. La emoción de la batalla alimenta su Ki ilimitadamente como un berserker controlado.",
    "battleIQ": "Agresiva, instintiva y confiada. Lucha como una pandillera cósmica, con poca técnica pulida pero un talento natural espeluznante.",
    "haxTags": [ "Fusión Pothala Mágica", "Mutación Saiyan Legendaria", "Proyección Láser Omnidireccional", "Evolución Rápida en Combate" ],
    "arsenal": {
      "basicAttacks": "Patadas voladoras, ráfagas rojas y verdes, y burlas constantes.",
      "superAttacks": [
        { "name": "Onda de Choque de Ki (Fist Cannon)", "desc": "Disparos rojos masivos lanzados como ráfagas de boxeo.", "cost": "15% Ki" },
        { "name": "Láseres de la Perdición", "desc": "Empieza a expulsar de su cuerpo cientos de láseres rojo-verdes finos que cortan el acero Katchin como mantequilla, abarcando toda la arena.", "cost": "25% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Estallido Gigante Final (Gigantic Burst)", "desc": "Reúne toda su energía mutante y la de Caulifla en dos esferas rojas masivas con rayos verdes, lanzándolas en un doble pilar devastador ineludible frontalmente.", "cost": "70% Ki" }
      ],
      "passives": [
        { "name": "Emoción de la Batalla", "desc": "Cuanto más poderoso es el enemigo, más crece pasivamente el Ki de Kefla durante el combate, escalando sin tope aparente.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "kefla-ssj2", "name": "Super Saiyan 2", "stats": "Nivel Multiversal Bajo. Pelo erizado verde limón, electricidad, músculos compactos y actitud pandillera." } ],
    "feats": [
      "Vapuleó a Goku SSJ God y se enfrentó a su SSJ Blue Kaio-ken de tú a tú.",
      "Despertó el Ultra Instinto de Goku por pura presión de poder letal.",
      "Casi elimina a Goku de no ser por el Kamehameha deslizante del UI."
    ],
    "psychology": "Cree ser absolutamente intocable e invencible. Disfruta genuinamente aplastar oponentes fuertes. Se enfurece rápidamente si siente que es humillada en esquivas.",
    "weaknesses": "Carece de disciplina y estrategia profunda. Ataca linealmente y de frente, haciéndola un blanco enorme para contraataques evasivos (Como el Ultra Instinto)."
  },
  // 6. BROLY (DBZ TOEI)
  {
    "id": "broly-dbz-pel-culas-dbz-toei-822",
    "name": "Broly (Clásico)",
    "alias": "El Super Saiyajin Legendario Original",
    "universe": "Dragon Ball Z (Películas Toei)",
    "saga": "El Regreso del Guerrero Legendario",
    "version": "LSSJ (Restaurado/Zenkai)",
    "tier": "Tier 4-B | Nivel Sistema Solar",
    "ap": "Nivel Sistema Solar. Como la encarnación del demonio Saiyan en las películas de Toei, su Ki aumenta literalmente hasta rebosar por sus poros de forma incontrolable. En su segunda película, tras el Zenkai de haber sido partido a la mitad, obligó a Gohan SSJ2 adulto (Toei scale) a ser masacrado sin piedad. Un solo Omega Blaster podía volatilizar la Tierra y gran parte del sistema.",
    "range": "Planetario a Sistema Solar.",
    "speed": {
      "combat": "Masivamente FTL. Su tamaño gigante no merma su velocidad, interceptando a Gohan SSJ2 en pleno vuelo.",
      "reaction": "MFTL.",
      "travel": "MFTL (Viaja entre galaxias destruyéndolas progresivamente).",
      "attack": "Lluvia lumínica."
    },
    "strength": { "striking": "Clase Sistema Solar. Aplasta cabezas de Super Saiyajines con una mano, rompe costillas solo pisando.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Sistema Solar. Un tanque de carne inmune al dolor físico; un Kamehameha de frente no le mueve ni el cabello.",
    "stamina": "Infinita Absoluta. De hecho, tiene EXCESO de Stamina. Necesita lanzar ataques esporádicamente o su cuerpo colapsaría por la sobrecarga de energía verde.",
    "battleIQ": "Ninguno. Una bestia sádica que pelea disfrutando el daño contundente.",
    "haxTags": [ "Fuerza Bruta Irreductible", "Sobrecarga de Ki Constante", "Escudo Biológico de Ki Verde", "Zenkai Mítico" ],
    "arsenal": {
      "basicAttacks": "Lariat (Tacleadas de brazo extendido), Pisotones a la espalda, Arrojar enemigos contra paredes de roca y reírselles.",
      "superAttacks": [
        { "name": "Eraser Cannon (Cañón Borrador)", "desc": "Una bola pequeña y condensada que dispara como una bala desde el pecho o la mano, explotando con fuerza planetaria.", "cost": "5% Ki (Debe gastar Ki para no estallar)" },
        { "name": "Lluvia Trampa (Trap Shooter)", "desc": "Arrastra la mano lanzando decenas de proyectiles verdes persiguiendo al enemigo.", "cost": "10% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Omega Blaster (Meteoro Gigante)", "desc": "Comienza como una orbe verde pequeña que se expande a proporciones masivas. Devora Kamehamehas, y si toca el núcleo de un astro, desintegra la región espacial entera.", "cost": "40% Ki" }
      ],
      "passives": [
        { "name": "Monstruosidad Indomable", "desc": "Inmune al stun/parálisis de impactos físicos. Los golpes inferiores a Nivel 4-B le hacen daño 0.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "lssj-z", "name": "Super Saiyan Legendario", "stats": "Nivel Sistema Solar. 3 Metros de altura, pelo verde esmeralda, músculos deformes, ojos blancos." } ],
    "feats": [
      "Destruyó la Galaxia del Sur progresivamente.",
      "Vapuleó a Goku, Vegeta, Gohan, Trunks y Piccolo simultáneamente en Nueva Vegeta.",
      "Forzó el Kamehameha Familiar de Goku, Gohan y Goten apoyado con distracción de Trunks para enviarlo al Sol."
    ],
    "psychology": "Un sádico desquiciado, riendo maníacamente mientras masacra. Su única motivación es un odio irracional y psicótico hacia la sangre de Kakarotto.",
    "weaknesses": "Dependencia excesiva a ataques frontales. Una fuerza/milagro superior purificador (Kamehameha conjunto al Sol) puede derretir su factor regenerativo."
  },
  // 7. ANDROIDE 16
  {
    "id": "androide-16-saga-androides-313",
    "name": "Androide 16",
    "alias": "El Pacifista Cibernético",
    "universe": "Dragon Ball Z",
    "saga": "Saga Androides",
    "version": "100% Mecánico / Máximo Poder",
    "tier": "Tier 4-C | Nivel Estrella Enana",
    "ap": "Nivel Estrella Enana. Al ser un androide completamente mecánico (sin base humana como 17 y 18), 16 fue diseñado con un chasis y armamento pesado superior. Estaba a la par con Cell Imperfecto (Tras absorber humanos) y era inmensamente superior al Super Saiyajin original de Vegeta y Trunks.",
    "range": "Planetario mediante el Hell's Flash.",
    "speed": {
      "combat": "FTL. Sorprendió a Cell Imperfecto agarrándolo en pleno vuelo.",
      "reaction": "FTL.",
      "travel": "FTL.",
      "attack": "Velocidad lumínica (Rayo infernal)."
    },
    "strength": { "striking": "Clase Estrella Enana. Arrancó la cola de Cell con sus propias manos.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Estrella Enana. Chasis blindado. Carece de dolor al no tener sistema nervioso biológico. Sobrevive como cabeza desprendida temporalmente.",
    "stamina": "Infinita Absoluta. Motor de movimiento perpetuo interno.",
    "battleIQ": "Tranquilo y Analítico. Solo interviene si Goku está cerca o la naturaleza corre peligro. Usa agarres de sumo.",
    "haxTags": [ "Fisiología 100% Robótica (Inmune a dolor, venenos, Ki)", "Sensor de Radáres (No necesita sentir Ki)", "Bomba Suicida Integrada" ],
    "arsenal": {
      "basicAttacks": "Abrazos de oso aplastantes, lanzamientos de yudo y puñetazos tipo martillo neumático.",
      "superAttacks": [
        { "name": "Puño Cohete (Rocket Punch)", "desc": "Dispara sus manos mecánicamente para golpear enemigos a distancia con fuerza demoledora.", "cost": "0% Ki" },
        { "name": "Láser de Ojos", "desc": "Rayos precisos pero no letales para repeler.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Hell's Flash (Destello Infernal)", "desc": "Arranca ambos de sus antebrazos e inserta sus cañones en el suelo (o directo al enemigo). Libera una llamarada amarilla colosal impulsada por motores internos, devastando todo frente a él y sacudiendo islas enteras.", "cost": "0% Ki" },
        { "name": "Autodestrucción de Gero", "desc": "Detona la bomba oculta en su pecho, garantizando la destrucción de un radio del tamaño de un pequeño planeta, borrando a seres como Cell Perfecto si están a quemarropa.", "cost": "Muerte" }
      ],
      "passives": [
        { "name": "Blindaje Puro", "desc": "Es inmune al daño por corte biológico o asfixia.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "androide-16-base", "name": "Modelo 16", "stats": "Nivel Estrella Enana. Aspecto robusto, armadura verde, mirada gentil pero imponente." } ],
    "feats": [
      "Derribó a Cell Imperfecto con tremenda facilidad y le arrancó la cola.",
      "Mantuvo su cabeza viva lo suficiente para darle a Gohan el consejo que desató su furia SSJ2.",
      "Soportó un golpe directo en la cabeza por parte de Cell Perfecto sin desintegrarse."
    ],
    "psychology": "Ama los pájaros, la naturaleza y la paz. Lucha únicamente para defender a la vida y a los que no pueden defenderse, aunque tiene una subrutina estricta ordenando asesinar a Goku (la cual abandona eventualmente).",
    "weaknesses": "Totalmente destruido por seres de nivel Sistema Solar. Si le extraen la bomba, pierde su mejor carta táctica."
  },
  // 8. FREEZER NAMEK (100%)
  {
    "id": "freezer-saga-namek-saga-namek-167",
    "name": "Freezer (Saga Namek)",
    "alias": "El Emperador del Mal",
    "universe": "Dragon Ball Z",
    "saga": "Saga Namek",
    "version": "Forma Final 100% de Poder",
    "tier": "Tier 4-B | Nivel Estrella Enana a Estrella",
    "ap": "Nivel Estrella Enana a Estrella (al 100%). En su cúspide en Namek, el poder tiránico de Freezer humilló por completo al Vegeta Príncipe, a Piccolo asimilado con Nail y resistió la Genkidama Universal de Goku. En su 100%, estaba a la par del Goku Super Saiyajin Legendario durante los primeros minutos de combate.",
    "range": "Planetario (Discos y Supernova).",
    "speed": {
      "combat": "Masivamente Relativista a FTL.",
      "reaction": "Relativista a FTL.",
      "travel": "Desplazamiento Espacial.",
      "attack": "Ataques de corte instantáneos."
    },
    "strength": { "striking": "Clase Estrella Enana. Somete con facilidad física rompiendo columnas con sus puños al máximo poder.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Estrella. Su rasgo más absurdo; puede sobrevivir sin la mitad inferior de su cuerpo, sin un brazo y con la cabeza aplastada en el vacío del espacio sin morir.",
    "stamina": "Muy Baja al 100% de poder. Sus músculos se hipertrofian y drena rápidamente su energía en 5 minutos.",
    "battleIQ": "Instinto asesino brillante pero manchado de terror puro al sentirse acorralado.",
    "haxTags": [ "Fisiología de Supervivencia Espacial Absoluta", "Telequinesis Mística (Lanza montañas)", "Discos Perforantes (Kienzan Autoguiado)" ],
    "arsenal": {
      "basicAttacks": "Golpes elegantes a puntos mortales, usar su cola para asfixiar, pisotear cráneos de oponentes derribados.",
      "superAttacks": [
        { "name": "Death Beam", "desc": "El infame rayo que mató a Vegeta y atravesó a Piccolo. Viaja demasiado rápido para que los ojos mortales lo sigan.", "cost": "5% Ki" },
        { "name": "Kienzan Destructor Dual (Death Saucer)", "desc": "Crea dos discos morados que cortan lo que sea y persiguen térmicamente al rival hasta que Freezer los desactive.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Supernova / Bola de la Muerte (Death Ball)", "desc": "Una esfera de tamaño de un sol enano capaz de perforar hasta el núcleo del planeta y hacerlo estallar en minutos.", "cost": "40% Ki" }
      ],
      "passives": [
        { "name": "Aura de Pánico", "desc": "Inmoviliza temporalmente de terror a oponentes de voluntad débil con su mera risa y presencia sádica.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "freezer-100", "name": "100% de Poder", "stats": "Nivel Estrella Enana Alta. Músculos hipertrofiados grotescos, venas a punto de estallar, mirada de pura desesperación asesina." } ],
    "feats": [
      "Asesinó a Dende, Krillin y Vegeta en cuestión de minutos.",
      "Sobrevivió a la Gran Genkidama que hundió parte del planeta.",
      "Sobrevivió al corte de sus propios discos y al Kamehameha iracundo de Goku en la explosión de Namek."
    ],
    "psychology": "Un tirano clasista acostumbrado a dominar con un dedo. Cuando Goku supera su poder, su mente se quiebra en un estado de pánico, negación y furia errática, cometiendo errores suicidas.",
    "weaknesses": "El 100% de poder drena su Ki vertiginosamente, haciéndolo inútil en un combate prolongado superior a 5 minutos. Si entra en pánico, pierde precisión técnica."
  },
  // 9. CAPITÁN GINYU
  {
    "id": "captain-ginyu-saga-namek-524",
    "name": "Capitán Ginyu",
    "alias": "El Líder de las Fuerzas Especiales",
    "universe": "Dragon Ball Z",
    "saga": "Saga Namek",
    "version": "Cuerpo Mutante Original",
    "tier": "Tier 5-B | Nivel Planetario",
    "ap": "Nivel Planetario. Con un nivel de poder de 120,000 en Namek, el Capitán Ginyu era el soldado más fuerte del imperio de Freezer. Un solo ataque suyo bastaría para obliterar el núcleo de la Tierra sin despeinarse. Pudo darle una buena pelea al Goku recién llegado a Namek.",
    "range": "Planetario.",
    "speed": { "combat": "Relativista.", "reaction": "Relativista.", "travel": "Relativista.", "attack": "Alta velocidad." },
    "strength": { "striking": "Clase Planetaria.", "lifting": "Clase Luna." },
    "durability": "Nivel Planetario. Muy resistente y dispuesto a mutilar su propio cuerpo para ganar ventajas tácticas.",
    "stamina": "Muy Alta. Curtido en cientos de misiones planetarias.",
    "battleIQ": "Táctico Leal, estricto con los códigos marciales y de espectáculo de sus poses, pero pragmático a la hora de sobrevivir.",
    "haxTags": [ "Transferencia de Cuerpo (Body Change)", "Telequinesis de Paralización Menor" ],
    "arsenal": {
      "basicAttacks": "Golpes de boxeo militarizados. Usa poses para distraer o intimidar.",
      "superAttacks": [
        { "name": "Triturador de Vía Láctea (Milky Cannon)", "desc": "Onda de ki morada masiva que arroja como si fuera un pase de rugby, explosiva al impacto.", "cost": "20% Ki" },
        { "name": "Autolesión Táctica", "desc": "Perfora su propio pecho con la mano para asegurarse de que su próximo movimiento sea letalmente injusto.", "cost": "25% HP" }
      ],
      "ultimateAttacks": [
        { "name": "Cambio de Cuerpo (Body Change)", "desc": "Grita '¡Cambio!', disparando un rayo blanco de su boca que traslada su alma al cuerpo de su oponente y viceversa. Conserva la fuerza física bruta del cuerpo, pero pierde acceso a técnicas exclusivas hasta asimilarlas.", "cost": "Mágico / Condicional" }
      ],
      "passives": [
        { "name": "Poses Especiales", "desc": "Incrementan la moral propia y pueden desconcertar a rivales serios, dándole una leve ventaja de iniciativa.", "cost": "Pasivo táctico" }
      ]
    },
    "forms": [ { "id": "ginyu-base", "name": "Cuerpo Mutante Principal", "stats": "Nivel Planetario. Piel púrpura, cuernos oscuros. Poses ridículamente ostentosas." } ],
    "feats": [
      "Rivalizó contra el nivel base / Kaio-ken x1 de Goku.",
      "Le robó el cuerpo a Goku obligando a Gohan, Krillin y Vegeta a tener que aliarse desesperadamente.",
      "Sobrevivió transformado en sapo durante décadas."
    ],
    "psychology": "Sumamente leal a Freezer (el único ser al que respeta más que a sí mismo). Ama a sus subordinados y se enfurece si irrespetan sus poses.",
    "weaknesses": "El Cambio de Cuerpo puede ser interceptado lanzando a un ser menor (como una rana) en su trayectoria. No puede sacar el poder total del cuerpo robado inmediatamente si requiere control de Ki espiritual (Kaio-ken, etc)."
  },
  // 10. RADITZ Z
  {
    "id": "raditz-saga-saiyan-640",
    "name": "Raditz",
    "alias": "El Guerrero de Clase Baja",
    "universe": "Dragon Ball Z",
    "saga": "Saga Saiyan",
    "version": "Invasión a la Tierra",
    "tier": "Tier 5-C | Nivel Lunar a Planeta Pequeño",
    "ap": "Nivel Lunar (Bajo) a Planeta Pequeño. Con un nivel de 1,500 unidades, Raditz era un monstruo absoluto para la Tierra. Obligó a Piccolo (destructor de la luna casual) y a Goku a realizar un 2 contra 1 desesperado donde todos sus ataques mortales rebotaban contra su armadura o eran evadidos.",
    "range": "Múltiples montañas a Lunar.",
    "speed": { "combat": "Sub-relativista. Más rápido que la percepción de Goku (Post-Torneo 23).", "reaction": "Sub-relativista.", "travel": "Supersónica a Hipersónica.", "attack": "Extremadamente rápida de corta distancia." },
    "strength": { "striking": "Clase Lunar (Aplastaba a los terrícolas).", "lifting": "Clase Montañas." },
    "durability": "Nivel Lunar. Sobrevivió un choque directo del Kamehameha, pero vulnerable a cortes o taladros ki concentrados (Makankosappo).",
    "stamina": "Alta (Raza Saiyan guerrera).",
    "battleIQ": "Cobarde pero pragmático. Usa trucos sucios sin honor.",
    "haxTags": [ "Fisiología Saiyan", "Radar Scouter Analítico" ],
    "arsenal": {
      "basicAttacks": "Golpes a traición, codazos por la espalda y patadas al mentón.",
      "superAttacks": [
        { "name": "Double Sunday", "desc": "Dispara dos enormes rayos rosados levantando ambos brazos. Fue capaz de contrarrestar el Kamehameha de Goku sin esfuerzo.", "cost": "15% Ki" },
        { "name": "Saturday Crash", "desc": "Bola de energía paralizante lanzada con una mano.", "cost": "10% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Begging Trick (Súplica Falsa)", "desc": "Raditz implora piedad llorando sobre sus rodillas. Cuando el enemigo baja la defensa y el Ki, lanza un golpe traicionero a matar.", "cost": "Táctica" }
      ],
      "passives": [
        { "name": "Cola Débil", "desc": "Si alguien le agarra fuertemente de la cola, todo su poder (AP/Defensa) cae instantáneamente a cero y queda paralizado del dolor.", "cost": "Debilidad extrema" }
      ]
    },
    "forms": [ { "id": "raditz-z", "name": "Guerrero Saiyan Base", "stats": "Nivel Lunar. Armadura Saiyan, Scouter, melena inmensa negra." } ],
    "feats": [
      "Atrapó balas de rifle como si fueran polvo.",
      "Dejó KO a Krillin de un solo latigazo de su cola.",
      "Obligó al mayor sacrificio de la época, requiriendo que Goku muriera para poder retenerlo a duras penas."
    ],
    "psychology": "Cobarde, rastrero, dispuesto a rogar por su vida y traicionar a su propio hermano segundos después. Se enorgullece de su raza pero huye ante seres más fuertes.",
    "weaknesses": "Cola sensible, arrogancia excesiva y dependencia total de lo que dice su Scouter, incapaz de entender el control del Ki espiritual (Ocultar el Ki)."
  }
];

const filePath = path.resolve(__dirname, '../src/data/characters.js');
let content = fs.readFileSync(filePath, 'utf8');

const prefix = 'export const INITIAL_CHARACTERS = ';
const currentList = eval(content.replace(prefix, ''));
console.log(`Current characters count: ${currentList.length}`);

let updatedCount = 0;
batch5Upgrades.forEach(upgrade => {
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

console.log(`Batch 5 Upgrade Complete. ${updatedCount} characters successfully enhanced.`);
