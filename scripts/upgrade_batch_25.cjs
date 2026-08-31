const fs = require('fs');
const path = require('path');

const batch25Upgrades = [
  // 1. CONQUEST
  {
    "id": "conquest",
    "name": "Conquest",
    "alias": "El Carnicero de Viltrum",
    "universe": "Invincible",
    "saga": "Guerra Viltrumita",
    "version": "Pico de Guerra (Brazo Biónico)",
    "tier": "Tier 5-B a 5-A | Nivel Planeta Grande",
    "ap": "Nivel Planeta Grande. Uno de los ejecutores más antiguos y despiadados de Viltrum. Su fuerza solo está por debajo de Thragg. Destrozó a Mark Grayson rompiéndole casi todos los huesos del cuerpo y masacró a héroes en docenas de mundos.",
    "range": "Físico e Interplanetario.",
    "speed": { "combat": "Masivamente FTL+.", "reaction": "Masivamente FTL+.", "travel": "MFTL+.", "attack": "Salvajismo extremo." },
    "strength": { "striking": "Clase Planeta Grande.", "lifting": "Clase Billones de Toneladas." },
    "durability": "Nivel Planeta Grande. Sobrevivió a que le rompieran el cráneo y le arrancaran la piel de la cara.",
    "stamina": "Monstruosa (No siente dolor por sadomasoquismo de combate).",
    "battleIQ": "Veterano de purgas genocidas; adora el dolor y la resistencia del enemigo.",
    "haxTags": [ "Fisiología Viltrumita Veterana", "Brazo Cibernético", "Resistencia Masoquista al Dolor" ],
    "arsenal": {
      "basicAttacks": "Golpes que desintegran órganos, cabezazos que parten cráneos.",
      "superAttacks": [
        { "name": "Embestida del Carnicero", "desc": "Carga brutal atravesando montañas de un golpe.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Aplastamiento Craneal", "desc": "Agarra la cabeza del enemigo y la estrella repetidamente contra el suelo hasta fracturar la roca madre.", "cost": "Furia" }
      ],
      "passives": [
        { "name": "Éxtasis del Dolor", "desc": "Cuanto más daño sufre, más se ríe y con mayor violencia ataca.", "cost": "Pasivo psicológico" }
      ]
    },
    "forms": [ 
      { "id": "conquest-base", "name": "Conquest", "stats": "Nivel Planeta Grande. Anciano musculoso con un solo ojo, brazo biónico metálico, cicatrices por todo el cuerpo." }
    ],
    "feats": [ "Soportó una andanada de decenas de cabezazos de Invencible al 100% que le destrozaron el rostro.", "Ha conquistado miles de planetas para el Imperio." ],
    "psychology": "Un sádico adicto al combate que odia la diplomacia y solo quiere ver sangrar a sus oponentes.",
    "weaknesses": "Exceso de confianza y falta de cautela; fue asesinado por Mark al ser asfixiado."
  },
  // 2. ATOM EVE
  {
    "id": "atom-eve",
    "name": "Atom Eve (Samantha Eve Wilkins)",
    "alias": "La Manipuladora Subatómica",
    "universe": "Invincible",
    "saga": "El Fin de Todo",
    "version": "Bloqueo Mental Roto (Regeneración / Manipulación Total)",
    "tier": "Tier 7-A a 5-A | Nivel Montaña a Planeta Grande",
    "ap": "Nivel Planeta Grande (Sin Bloqueo Mental). Puede manipular la estructura atómica y molecular de cualquier materia inanimada. Cuando sufre un trauma mortal o agonía, su bloqueo mental genético se desactiva temporalmente, permitiéndole reescribir materia viva, curar a aliados al instante, rejuvenecerse a sí misma y desintegrar la piel de guerreros viltrumitas como Conquest.",
    "range": "Kilómetros a Planetario.",
    "speed": { "combat": "Masivamente FTL+.", "reaction": "Masivamente FTL+.", "travel": "MFTL+ (Vuelo molecular).", "attack": "Transmutación instantánea." },
    "strength": { "striking": "Clase Montaña con constructos.", "lifting": "Manipulación de masa." },
    "durability": "Nivel Planeta Grande mediante escudos de energía molecular densa y resurrección celular.",
    "stamina": "Muy Alta (Quema calorías según la complejidad atómica).",
    "battleIQ": "Genio intuitivo de la química cuántica y la física atómica.",
    "haxTags": [ "Manipulación Molecular y Transmutación de Materia", "Resurrección y Auto-Regeneración Celular", "Escudos de Fuerza Cuántica" ],
    "arsenal": {
      "basicAttacks": "Constructos de energía rosa (martillos, picos, escudos).",
      "superAttacks": [
        { "name": "Transmutación Ambiental", "desc": "Convierte el aire en plomo sólido o el suelo en lava.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Despertar del Bloqueo Subatómico (Ruptura)", "desc": "Al borde de la muerte, desata su poder sobre materia viva: arranca la piel de Conquest a nivel atómico y restaura los cuerpos destrozados de Mark y de ella misma al 100%.", "cost": "Trauma Mortal" }
      ],
      "passives": [
        { "name": "Inmortalidad Biológica", "desc": "Al envejecer o sufrir muerte clínica, su poder reescribe automáticamente sus células rejuveneciéndola a su mejor época física.", "cost": "Inmortalidad Pasiva" }
      ]
    },
    "forms": [ 
      { "id": "eve-base", "name": "Atom Eve", "stats": "Nivel Montaña. Traje rosa con el símbolo del átomo femenino, cabello pelirrojo largo." }
    ],
    "feats": [ "Arrancó toda la carne del torso de Conquest con un solo rayo molecular.", "Resucitó y curó a Mark Grayson de heridas fatales múltiples veces." ],
    "psychology": "Compasiva, inteligente y altruista; usa su poder para reconstruir ciudades y crear comida para los necesitados.",
    "weaknesses": "El bloqueo mental biológico le impide manipular materia viva (humanos/viltrumitas) en circunstancias normales a menos que sufra un shock de muerte inminente."
  },
  // 3. MEGUMI FUSHIGURO
  {
    "id": "megumi-fushiguro",
    "name": "Megumi Fushiguro",
    "alias": "El Usuario de las Diez Sombras / Invocador de Mahoraga",
    "universe": "Jujutsu Kaisen",
    "saga": "Incidente de Shibuya / Culling Game",
    "version": "Pico de Hechicero (Técnica de las Diez Sombras / Mahoraga)",
    "tier": "Tier 8-A a 7-A | Nivel Multi-Bloque a Montaña (Con Mahoraga)",
    "ap": "Nivel Montaña (Con Mahoraga). Heredero de la técnica suprema del clan Zen'in. Invoca shikigamis de sombra como Nue, Perro Divino: Totalidad y Elefante Máximo. Su carta de suicidio definitiva es invocar al 'General Divino Mahoraga', una entidad con la Rueda de la Adaptación que se adapta a cualquier fenómeno o técnica tras recibir un golpe.",
    "range": "Decenas de metros y Dominio Quimera.",
    "speed": { "combat": "Hipersónica.", "reaction": "Hipersónica.", "travel": "Sobre Nue (Vuelo).", "attack": "Garras y Espada de Exterminio de Mahoraga." },
    "strength": { "striking": "Clase Multi-Bloque (Perro Divino) a Clase Montaña (Mahoraga).", "lifting": "Clase 100+ Toneladas." },
    "durability": "Nivel Multi-Bloque (Físico) / Nivel Montaña con adaptación de Mahoraga.",
    "stamina": "Media-Alta.",
    "battleIQ": "Estratega frío; usa las sombras para ocultarse y tender emboscadas.",
    "haxTags": [ "Invocación de Mahoraga (Rueda de la Adaptación Absoluta)", "Técnica de las Diez Sombras", "Expansión de Dominio Incompleta: Jardín de Sombras Quimera" ],
    "arsenal": {
      "basicAttacks": "Golpes con espada corta ocultándose dentro de las sombras del suelo.",
      "superAttacks": [
        { "name": "Perro Divino: Totalidad", "desc": "Shikigami lobuno gigante con garras que perforan maldiciones de grado especial.", "cost": "10% Energía" },
        { "name": "Nue & Elefante Máximo", "desc": "Ataques combinados de electricidad aérea y aplastamiento de torrentes de agua.", "cost": "15% Energía" }
      ],
      "ultimateAttacks": [
        { "name": "Ritual de Exorcismo: General Divino Mahoraga (Makora)", "desc": "Invoca al shikigami incontrolable con la Rueda de las Ocho Espadas; Mahoraga gira la rueda tras cada ataque enemigo, adaptándose a su elemento y volviéndose inmune a esa técnica.", "cost": "Ritual de Suicidio / Todo su Ki" }
      ],
      "passives": [
        { "name": "Adaptación de la Rueda de Mahoraga", "desc": "Mahoraga se vuelve inmune a cualquier ataque que no lo destruya de un solo golpe fulminante.", "cost": "Adaptación Continua" }
      ]
    },
    "forms": [ 
      { "id": "megumi-base", "name": "Megumi Fushiguro", "stats": "Nivel Multi-Bloque. Uniforme negro de Jujutsu High, cabello erizado negro." }
    ],
    "feats": [ "Derrotó a un portador de Dedo de Sukuna con su Dominio incompleto.", "Invocó a Mahoraga forzando a Sukuna a usar el Santuario Malevolente y Fuga para destruirlo." ],
    "psychology": "Melancólico y pragmático; valora la bondad selectiva y está dispuesto a sacrificar su vida invocando a Mahoraga si la situación es desesperada.",
    "weaknesses": "Baja resistencia física comparada con los monstruos de Grado Especial; Mahoraga no distingue aliados de enemigos durante el ritual."
  },
  // 4. KENJAKU / SUGURU GETO
  {
    "id": "suguru-geto",
    "name": "Suguru Geto / Kenjaku",
    "alias": "El Cirujano Milenario / Manipulador de Maldiciones",
    "universe": "Jujutsu Kaisen",
    "saga": "Incidente de Shibuya / Juego del Sacrificio",
    "version": "Kenjaku en el Cuerpo de Geto (Pico Milenario)",
    "tier": "Tier 7-A | Nivel Montaña",
    "ap": "Nivel Montaña (Uzumaki Máximo). Un hechicero de más de 1,000 años que salta entre cuerpos mediante su cerebro maldito. Posee la Manipulación de Espíritus Malditos de Geto (millones de maldiciones absorbidas), la Técnica de Gravedad Antigravitatoria de Kaori Itadori y la Expansión de Dominio abierta 'Útero Profano'.",
    "range": "Kilómetros (Dominio Abierto y Ejército de Maldiciones).",
    "speed": { "combat": "Masivamente Hipersónica.", "reaction": "Masivamente Hipersónica.", "travel": "Sobre Maldiciones Voladoras.", "attack": "Uzumaki a alta potencia." },
    "strength": { "striking": "Clase Montaña.", "lifting": "Clase 100+ Toneladas." },
    "durability": "Nivel Montaña con Técnica Maldita Inversa.",
    "stamina": "Inmensa (Milenio de experiencia en optimización de energía).",
    "battleIQ": "El mayor cerebro criminal y conspirador del universo Jujutsu.",
    "haxTags": [ "Manipulación de Espíritus Malditos (Absorción y Extracción de Técnicas)", "Uzumaki Máximo", "Expansión de Dominio Abierta: Útero Profano (Womb Profusion)", "Antigravedad / Sistema de Gravedad Inversa" ],
    "arsenal": {
      "basicAttacks": "Artes marciales chinas fluidas combinadas con Playful Cloud y maldiciones menores.",
      "superAttacks": [
        { "name": "Sistema Antigravedad Inverso", "desc": "Crea un campo gravitacional masivo en un radio de metros que aplasta al oponente contra el suelo.", "cost": "15% Energía" }
      ],
      "ultimateAttacks": [
        { "name": "Uzumaki Máximo (Extracción de Técnica)", "desc": "Condensa miles de maldiciones en un rayo de energía destructivo que extrae permanentemente la técnica de grado especial de la maldición sacrificada (como la Transfiguración Ociosa de Mahito).", "cost": "35% Energía" },
        { "name": "Expansión de Dominio: Útero Profano", "desc": "Dominio abierto sin barrera formado por un pilar de rostros malditos que aplasta con gravedad e impactos continuos el área circundante.", "cost": "45% Energía" }
      ],
      "passives": [
        { "name": "Salto Cerebral Milenario", "desc": "Su cerebro con dientes salta de cuerpo en cuerpo reteniendo las técnicas de los huéspedes anteriores.", "cost": "Inmortalidad por Transplante" }
      ]
    },
    "forms": [ 
      { "id": "kenjaku-geto", "name": "Kenjaku (Cuerpo de Geto)", "stats": "Nivel Montaña. Túnica budista negra y dorada (Kesa), cicatriz de puntos de sutura en la frente." }
    ],
    "feats": [ "Selló a Gojo Satoru en la Prisión Confinadora en Shibuya.", "Sobrevivió al agujero negro creado por Yuki Tsukumo usando su Técnica Antigravedad." ],
    "psychology": "Un científico loco inmoral impulsado por la pura curiosidad de ver qué ocurre cuando se optimiza la Energía Maldita al límite.",
    "weaknesses": "Vulnerable a ataques sorpresa de desmembramiento a ultra-alta velocidad (Yuta le cortó la cabeza en una emboscada con Takaba)."
  },
  // 5. MAKI ZEN'IN
  {
    "id": "maki-zenin",
    "name": "Maki Zen'in",
    "alias": "El Monstruo de la Restricción / La Reencarnación de Toji",
    "universe": "Jujutsu Kaisen",
    "saga": "Preparación Perfecta / Batalla de Shinjuku",
    "version": "Restricción Celestial Despertada (Cero Energía)",
    "tier": "Tier 8-A a 7-B | Nivel Multi-Bloque a Ciudad",
    "ap": "Nivel Ciudad (Con Espada de Alma Partida). Tras el sacrificio de su hermana Mai, alcanzó la Restricción Celestial completa al igual que Toji Fushiguro. Masacró al clan Zen'in entero ella sola y esquiva ataques físicos percibiendo las diferencias de temperatura y densidad del aire a su alrededor.",
    "range": "Físico y Katana.",
    "speed": { "combat": "Masivamente Hipersónica.", "reaction": "Masivamente Hipersónica (Percepción del aire y sonido).", "travel": "Masivamente Hipersónica.", "attack": "Cortes al alma invisibles." },
    "strength": { "striking": "Clase Ciudad (Lanza a Naoya maldición a Mach 3 de un golpe).", "lifting": "Clase 100+ Toneladas." },
    "durability": "Nivel Ciudad. Cuerpo endurecido capaz de recuperarse de órganos quemados en minutos.",
    "stamina": "Muy Alta.",
    "battleIQ": "Maestra absoluta de armas marciales y combate táctico de supervivencia.",
    "haxTags": [ "Restricción Celestial Absoluta (Invisible a Dominios)", "Espada de Alma Partida (Daño Directo al Alma)", "Percepción de Densidad del Aire (Evasión Tridimensional)" ],
    "arsenal": {
      "basicAttacks": "Golpes letales con manos desnudas y patadas que rompen huesos sobrehumanos.",
      "superAttacks": [
        { "name": "Tajo de Corte Espacial del Alma", "desc": "Blande la réplica de la Espada de Alma Partida seccionando el alma del rival ignorando su blindaje físico.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Asalto del Fantasma Celestial", "desc": "Se mueve a través del aire usándolo como peldaños invisibles, conectando estocadas letales al corazón desde puntos ciegos.", "cost": "Agilidad Pura" }
      ],
      "passives": [
        { "name": "Inmunidad a Barreras y Dominios", "desc": "Al no tener energía maldita, las Expansiones de Dominio no pueden atraparla ni aplicarle ataques de impacto seguro.", "cost": "Inmunidad Pasiva" }
      ]
    },
    "forms": [ 
      { "id": "maki-despierta", "name": "Maki Despertada", "stats": "Nivel Ciudad. Cabello corto negro, cicatrices de quemaduras en todo el cuerpo, abrigo oscuro y Espada de Alma." }
    ],
    "feats": [ "Extinguió a la unidad Hei y a los líderes del Clan Zen'in en una sola noche.", "Atravesó el corazón de Sukuna con una puñalada sorpresa desde atrás." ],
    "psychology": "Fuerte, decidida y liberada del trauma del clan; lucha con una frialdad y ferocidad comparables a un demonio marcial.",
    "weaknesses": "Cuerpo biológico humano; susceptible a impactos masivos de cortes espaciales si no logra esquivarlos."
  },
  // 6. AKAZA
  {
    "id": "akaza",
    "name": "Akaza (Hakuji)",
    "alias": "La Luna Superior Tres / Maestro del Soryu",
    "universe": "Demon Slayer (Kimetsu no Yaiba)",
    "saga": "Tren Infinito / Fortaleza Dimensional",
    "version": "Luna Superior Tres (Agujas de Brújula)",
    "tier": "Tier 7-B | Nivel Ciudad",
    "ap": "Nivel Ciudad. El artista marcial definitivo de los demonios. Su Arte Demoníaco 'Despliegue de Técnica: Aguja de Brújula' detecta el espíritu de combate y la sed de sangre del oponente con precisión milimétrica, dirigiendo sus puñetazos magnéticamente hacia los puntos débiles.",
    "range": "Físico y Ondas de Choque de Puño (Ondas del Vacío a distancia).",
    "speed": { "combat": "Masivamente Hipersónica.", "reaction": "Masivamente Hipersónica (Brújula Magnética).", "travel": "Hipersónica.", "attack": "Cientos de puñetazos por segundo." },
    "strength": { "striking": "Clase Ciudad (Atraviesa el torso de un Pilar con el puño limpio).", "lifting": "Clase 50+ Toneladas." },
    "durability": "Nivel Ciudad. Regeneración instantánea; superó la decapitación por espada Nichirin por pura fuerza de voluntad.",
    "stamina": "Infinita durante la noche.",
    "battleIQ": "Siglos de maestría en artes marciales a puño limpio (Estilo Soryu).",
    "haxTags": [ "Despliegue de Técnica: Aguja de Brújula (Detección de Espíritu de Lucha)", "Ondas de Choque de Puño Vacío", "Superación de la Decapitación" ],
    "arsenal": {
      "basicAttacks": "Ganchos y patadas de artes marciales que liberan ondas de choque azul brillante.",
      "superAttacks": [
        { "name": "Destrucción: Estilo Vacío", "desc": "Lanza cientos de puñetazos al aire que disparan proyectiles cinéticos invisibles a distancia.", "cost": "10% Energía" },
        { "name": "Destrucción: Resplandor del Caos", "desc": "Una ráfaga de golpes a quemarropa que genera una tormenta de impactos omnidireccional.", "cost": "20% Energía" }
      ],
      "ultimateAttacks": [
        { "name": "Destrucción: Mil Hojas del Fin del Mundo", "desc": "Su técnica definitiva; libera cientos de ondas cortantes azules desde cada ángulo aplastando la defensa del enemigo.", "cost": "35% Energía" }
      ],
      "passives": [
        { "name": "Aguja de Brújula", "desc": "Atrae sus puñetazos automáticamente hacia el rival guiándose por su espíritu de lucha; cuanto más fuerte sea el deseo de pelear del enemigo, más precisos y letales son los golpes de Akaza.", "cost": "Tracking Pasivo Magnético" }
      ]
    },
    "forms": [ 
      { "id": "akaza-base", "name": "Luna Superior Tres", "stats": "Nivel Ciudad. Cabello rosa brillante, tatuajes azules en líneas por todo el cuerpo, chaleco corto morado." }
    ],
    "feats": [ "Asesinó a Kyojuro Rengoku (Pilar de la Llama).", "Regeneró su cabeza completa tras ser decapitado por Tanjiro y Giyu." ],
    "psychology": "Respeta profundamente a los guerreros fuertes e intenta convencerlos de volverse demonios; desprecia a los débiles por el trauma infantil de no haber podido salvar a su prometida Koyuki.",
    "weaknesses": "El 'Estado Desinteresado' (cero espíritu de lucha) vuelve inútil su Aguja de Brújula; luz solar directa."
  },
  // 7. GYOMEI HIMEJIMA
  {
    "id": "gyomei-himejima",
    "name": "Gyomei Himejima",
    "alias": "El Pilar de la Roca / El Cazador Más Fuerte",
    "universe": "Demon Slayer (Kimetsu no Yaiba)",
    "saga": "Fortaleza Dimensional Infinita",
    "version": "Pico de Pilar (Marca + Mundo Transparente + Espada Roja)",
    "tier": "Tier 7-B | Nivel Ciudad",
    "ap": "Nivel Ciudad. El Pilar más fuerte de su generación reconocido por Muzan y Kokushibo. A pesar de ser ciego de nacimiento, percibe las vibraciones sonoras y despertó el Mundo Transparente. Blande una gigantesca hacha y un mayal de púas conectados por una cadena indestructible forjada con hierro solar.",
    "range": "Decenas de metros (Arma de Cadena Pesada).",
    "speed": { "combat": "Masivamente Hipersónica.", "reaction": "Masivamente Hipersónica (Ecolocalización + Mundo Transparente).", "travel": "Hipersónica.", "attack": "Pesada y destructiva." },
    "strength": { "striking": "Clase Ciudad (La mayor fuerza física de los Pilares).", "lifting": "Clase 100+ Toneladas (Mueve rocas gigantescas por la montaña con el pecho).", },
    "durability": "Nivel Ciudad. Músculos hiper-densos que resisten ataques cortantes demoníacos.",
    "stamina": "Muy Alta por entrenamiento ascético continuo.",
    "battleIQ": "El líder espiritual y marcial supremo de los Pilares; combina defensa de hierro con ataques aplastantes.",
    "haxTags": [ "Respiración de la Roca (5 Posturas)", "Mayal y Hacha de Cadena Forjadas en Sol Puro", "Mundo Transparente Despertado en Ceguera", "Marca del Cazador de Roca" ],
    "arsenal": {
      "basicAttacks": "Lanzamiento de mayal con púas y cortes de hacha pesada coordinados con la cadena.",
      "superAttacks": [
        { "name": "Respiración de la Roca: Arco de la Hidra", "desc": "Lanza el hacha y el mayal simultáneamente para atrapar y destrozar extremidades demoníacas.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Respiración de la Roca: Piel de Volcán / Aplastamiento Rápido", "desc": "Hace girar el mayal y la cadena a velocidad extrema formando un domo de defensa impenetrable y aplasta la cabeza del rival contra el suelo.", "cost": "Maestría" }
      ],
      "passives": [
        { "name": "Ecolocalización del Rosario", "desc": "Choca las cuentas de su rosario o la cadena para crear un mapa tridimensional perfecto del entorno y los órganos del rival.", "cost": "Visión Perfecta por Sonido" }
      ]
    },
    "forms": [ 
      { "id": "gyomei-base", "name": "Pilar de la Roca", "stats": "Nivel Ciudad. Monje gigante con rosario budista grande, haori verde olivo con kanjis religiosos, ojos blancos ciegos." }
    ],
    "feats": [ "Soportó y desvió los ataques de Kokushibo (Luna 1) mano a mano antes de la llegada de refuerzos.", "Destrozó la cabeza de Muzan de un impacto directo con su mayal con púas." ],
    "psychology": "Un hombre piadoso y melancólico que llora constantemente rezando por las almas de sus aliados y enemigos.",
    "weaknesses": "Cuerpo humano de 27 años; la Marca del Cazador provocó su muerte tras la batalla final contra Muzan."
  },
  // 8. KILLUA ZOLDYCK
  {
    "id": "killua-zoldyck",
    "name": "Killua Zoldyck",
    "alias": "El Asesino del Relámpago / Modo Godspeed",
    "universe": "Hunter x Hunter",
    "saga": "Saga de las Hormigas Quimera / Elecciones",
    "version": "Pico de Poder (Godspeed / Kanmuru)",
    "tier": "Tier 7-B | Nivel Ciudad",
    "ap": "Nivel Ciudad. El prodigio absoluto de la familia de asesinos Zoldyck. Transmuta su aura en electricidad pura. En modo 'Godspeed' (Kanmuru), sus impulsos nerviosos son transmitidos directamente por electricidad evitando el retraso del cerebro, permitiéndole reaccionar y golpear a velocidades sobrehumanas inalcanzables, humillando a guardias reales como Youpi y Pouf.",
    "range": "Físico y Rayos Eléctricos a distancia.",
    "speed": { "combat": "Masivamente Hipersónica+ en Godspeed (Reacción automática de células).", "reaction": "Masivamente Hipersónica+.", "travel": "Hipersónica.", "attack": "Ráfaga de garras y descargas de 100,000 voltios." },
    "strength": { "striking": "Clase Ciudad (Garras que decapitan al instante; abre puertas de 64 toneladas).", "lifting": "Clase 64+ Toneladas." },
    "durability": "Nivel Ciudad. Inmune a la electricidad masiva y a todos los venenos conocidos.",
    "stamina": "Muy Alta (Godspeed consume la carga eléctrica de su aura con rapidez).",
    "battleIQ": "Asesino de sangre fría entrenado desde bebé; calcula probabilidades de escape y muerte al instante.",
    "haxTags": [ "Godspeed: Kanmuru (Velocidad de Relámpago y Reflejo Automático)", "Inmunidad Absoluta a Venenos y Descargas Eléctricas", "Garras de Asesino Desmembradoras", "Yo-yos de 50 Kilos Electrificados" ],
    "arsenal": {
      "basicAttacks": "Transformación de uñas en garras afiladas capaces de arrancar corazones en un segundo.",
      "superAttacks": [
        { "name": "Narukami (Rayo de la Tormenta)", "desc": "Salta en el aire y dispara un rayo eléctrico concentrado que paraliza y quema al enemigo.", "cost": "10% Nen" }
      ],
      "ultimateAttacks": [
        { "name": "Godspeed: Whirlwind (Torbellino de Reacción Automática)", "desc": "Programa su aura eléctrica para responder automáticamente al contacto hostil del enemigo esquivando y contraatacando antes de que la señal llegue a su cerebro.", "cost": "25% Carga Eléctrica" }
      ],
      "passives": [
        { "name": "Paso de Sombra (Rhythm Echo)", "desc": "Crea ilusiones ópticas de sí mismo moviéndose a paso silencioso para confundir los sentidos del rival.", "cost": "Sigilo Pasivo" }
      ]
    },
    "forms": [ 
      { "id": "killua-base", "name": "Killua (Base)", "stats": "Nivel Multi-Bloque. Camiseta azul sobre blanca, cabello blanco en punta, ojos de gato." },
      { "id": "killua-godspeed", "name": "Modo Godspeed (Kanmuru)", "stats": "Nivel Ciudad. Pelo erizado brillando en electricidad azul pura, aura relampagueante continua." }
    ],
    "feats": [ "Le dio una paliza unilateral a Menthuthuyoupi (Guardia Real) dejándolo aturdido.", "Arrancó el corazón de Johness en la Torre de Trampas sin derramar una sola gota de sangre." ],
    "psychology": "Comenzó condicionado por el miedo asesino de su hermano Illumi, pero al quitarse la aguja se convirtió en el protector más devoto de Gon y de su hermana Alluka.",
    "weaknesses": "El modo Godspeed se agota si se queda sin carga eléctrica (requiere recargarse con enchufes o baterías)."
  },
  // 9. GON FREECSS
  {
    "id": "gon-freecss",
    "name": "Gon Freecss",
    "alias": "El Niño Monstruo / Gon Adulto (Restricción Absoluta)",
    "universe": "Hunter x Hunter",
    "saga": "Saga de las Hormigas Quimera",
    "version": "Pico de Juramento y Restricción (Gon Adulto)",
    "tier": "Tier 7-B a 7-A | Nivel Montaña",
    "ap": "Nivel Montaña (Gon Adulto). Al sacrificar todo su potencial futuro, talento, Nen y esperanza de vida por pura desesperación de venganza contra Neferpitou. Su cuerpo envejeció forzosamente décadas hasta su pico físico absoluto. Su poder era comparable al del mismísimo Rey Meruem, destruyendo el cráneo blindado de Neferpitou de dos golpes de Jajanken.",
    "range": "Físico y Jajanken: Papel a distancia.",
    "speed": { "combat": "Masivamente Hipersónica+.", "reaction": "Masivamente Hipersónica+.", "travel": "Hipersónica.", "attack": "Velocidad salvaje abrumadora." },
    "strength": { "striking": "Clase Montaña.", "lifting": "Clase 1,000+ Toneladas." },
    "durability": "Nivel Montaña. Su cuerpo reforzado con aura masiva ignoró los cortes de Terpsichora de Pitou.",
    "stamina": "Infinita durante la transformación (a costa de colapso mortal posterior).",
    "battleIQ": "Instinto animal depredador puro.",
    "haxTags": [ "Juramento y Restricción Absoluta (Poder Equivalente al Rey)", "Jajanken: Piedra (Golpe Masivo Concentrado)", "Jajanken: Tijeras (Espada de Aura Cortante)", "Jajanken: Papel (Disparo de Aura)" ],
    "arsenal": {
      "basicAttacks": "Puñetazos titánicos que generan cráteres tectónicos en el bosque.",
      "superAttacks": [
        { "name": "Jajanken: Tijeras (Corte de Aura)", "desc": "Extiende dos dedos formando una cuchilla de aura que corta extremidades acorazadas.", "cost": "15% Nen" }
      ],
      "ultimateAttacks": [
        { "name": "Jajanken: Piedra Definitivo (Gon Adulto)", "desc": "Carga su puño con una cantidad colosal de Nen y conecta un impacto que pulverizó el bosque y desintegró la cabeza de Neferpitou en una columna de luz dorada.", "cost": "Toda su Fuerza Vital" }
      ],
      "passives": [
        { "name": "Aura de Desesperación Monstruosa", "desc": "Su presencia es tan aterradora que paraliza de miedo instintivo a monstruos y Guardias Reales Quimera.", "cost": "Intimidación de Muerte" }
      ]
    },
    "forms": [ 
      { "id": "gon-nino", "name": "Gon (Base)", "stats": "Nivel Multi-Bloque. Traje verde, mochila, caña de pescar, pelo negro en punta." },
      { "id": "gon-adulto", "name": "Gon Adulto (Transformación)", "stats": "Nivel Montaña. Físico hipertrofiado colosal de 2.5 metros, cabello negro de 5 metros de alto erizado hacia el cielo, mirada muerta." }
    ],
    "feats": [ "Aniquiló por completo a Neferpitou sin recibir daño real.", "Su aura fue sentida a kilómetros de distancia como una fuerza catastrófica." ],
    "psychology": "Un niño puro pero con una mentalidad en blanco y negro aterradoramente extremista: cuando se rompe emocionalmente, no tiene límites de autodestrucción.",
    "weaknesses": "La transformación es un pacto suicida; tras terminar el combate, su cuerpo queda en un estado momificado de descomposición y necrosis espiritual."
  },
  // 10. CHROLLO LUCILFER
  {
    "id": "chrollo-lucilfer",
    "name": "Chrollo Lucilfer",
    "alias": "El Líder de la Brigada Fantasma / Portador del Secreto del Cazador",
    "universe": "Hunter x Hunter",
    "saga": "Ciudad Yorkshin / Guerra de Sucesión",
    "version": "Pico Táctico (Skill Hunter + Marcapáginas)",
    "tier": "Tier 7-B | Nivel Ciudad",
    "ap": "Nivel Ciudad. El líder de la Tropa Fantasma (Genei Ryodan). Su libro 'Skill Hunter' (El Secreto del Cazador) le permite robar y usar cualquier habilidad Nen de otros usuarios tras cumplir 4 condiciones. Con el Marcapáginas puede usar dos habilidades robadas simultáneamente y pelear a dos manos.",
    "range": "Decenas de metros a Kilómetros con habilidades robadas.",
    "speed": { "combat": "Masivamente Hipersónica.", "reaction": "Masivamente Hipersónica.", "travel": "Hipersónica.", "attack": "Cuchillos envenenados y combos de Nen robado." },
    "strength": { "striking": "Clase Multi-Bloque a Ciudad.", "lifting": "Clase 50+ Toneladas." },
    "durability": "Nivel Ciudad con refuerzo de Nen (Ko/Gyo).",
    "stamina": "Muy Alta.",
    "battleIQ": "Uno de los estrategas más brillantes y analíticos del anime; planea escenarios con 100% de probabilidad de victoria antes de entrar al ring.",
    "haxTags": [ "Skill Hunter (Robo y Almacenamiento de Habilidades Nen)", "Double Face (Marcapáginas para uso Dual)", "Galería Falsa (Clonación de Marionetas)", "Sun and Moon (Sellos Explosivos Indestructibles)" ],
    "arsenal": {
      "basicAttacks": "Uso de la Daga Ben's envenenada con toxina paralizante para 0.1 mg por persona.",
      "superAttacks": [
        { "name": "Black Voice (Manipulación por Antena)", "desc": "Clava una antena en el enemigo o marioneta para controlarlo como un videojuego.", "cost": "Habilidad Robada" },
        { "name": "Peces de Interior (Indoor Fish)", "desc": "Invoca peces carnívoros flotantes en habitaciones cerradas que devoran la carne del rival sin que sienta dolor ni sangre hasta que se abra la puerta.", "cost": "Habilidad Robada" }
      ],
      "ultimateAttacks": [
        { "name": "Sun and Moon: Detonación en Cadena", "desc": "Imprime sellos del Sol (+) y la Luna (-) en cientos de marionetas; al tocarse, explotan con potencia devastadora destruyendo arenas completas (Como destrozó a Hisoka).", "cost": "Combo de Habilidades" }
      ],
      "passives": [
        { "name": "Frialdad Nihilista", "desc": "Inmune a la desesperación; no le teme a la muerte propia y valora la supervivencia de la Brigada por encima de sí mismo.", "cost": "Pasivo psicológico" }
      ]
    },
    "forms": [ 
      { "id": "chrollo-base", "name": "Chrollo Lucilfer", "stats": "Nivel Ciudad. Abrigo negro de cuero con la cruz invertida de San Pedro en la espalda, cruz tatuada en la frente, pendientes de esfera azul." }
    ],
    "feats": [ "Combatió simultáneamente contra Silva y Zeno Zoldyck sobreviviendo.", "Derrotó y 'mató' a Hisoka Morow en la Arena del Cielo con una estrategia perfecta." ],
    "psychology": "Un filósofo del crimen carismático y distante; lidera la Brigada como una araña donde la cabeza es intercambiable si el cuerpo sobrevive.",
    "weaknesses": "Si le sellan el libro (como hizo Kurapika con la Cadena del Juicio) queda completamente indefenso a nivel de técnicas avanzadas."
  },
  // 11. HISOKA MOROW
  {
    "id": "hisoka-morow",
    "name": "Hisoka Morow",
    "alias": "El Mago Psicópata / La Goma Bungee",
    "universe": "Hunter x Hunter",
    "saga": "Arena del Cielo / Muerte y Resurrección Post-Chrollo",
    "version": "Pico Resucitado (Nen Post-Mortem / Prótesis de Goma)",
    "tier": "Tier 7-B | Nivel Ciudad",
    "ap": "Nivel Ciudad. El mago asesino más impredecible del mundo. Su habilidad 'Bungee Gum' posee las propiedades de la goma y el chicle simultáneamente, permitiéndole adherirse, repeler y catapultar objetos masivos. Con 'Textura Engañosa' disfraza heridas y objetos. Tras morir contra Chrollo, su Nen Post-Mortem reactivó su corazón y pulmones, volviéndose más letal y sádico.",
    "range": "Decenas de metros (Hilos de Goma Bungee).",
    "speed": { "combat": "Masivamente Hipersónica.", "reaction": "Masivamente Hipersónica.", "travel": "Acrobacias con Goma Bungee.", "attack": "Cartas de póker afiladas como cuchillas de plasma." },
    "strength": { "striking": "Clase Ciudad (Decapita con cartas imbuidas en Shu).", "lifting": "Clase 50+ Toneladas." },
    "durability": "Nivel Ciudad con refuerzo de goma amortiguadora.",
    "stamina": "Infinita por excitación de combate sádico.",
    "battleIQ": "El mayor ilusionista y duelista psicológico; manipula la percepción del rival con trucos de magia sangrientos.",
    "haxTags": [ "Goma Bungee (Propiedades de Goma y Chicle)", "Textura Engañosa (Ilusión Táctil y Visual)", "Nen Post-Mortem (Auto-Resurrección Cardíaca)", "Prótesis Corporales de Goma y Textura" ],
    "arsenal": {
      "basicAttacks": "Lanzamiento de cartas de baraja afiladas con Nen como proyectiles mortales.",
      "superAttacks": [
        { "name": "Bungee Gum Retractil", "desc": "Pega su goma al enemigo sin que se dé cuenta y lo atrae hacia un rodillazo devastador a la barbilla.", "cost": "5% Nen" }
      ],
      "ultimateAttacks": [
        { "name": "Resurrección Post-Mortem: Auto-RCP", "desc": "Programa a su Goma Bungee para masajear y reanimar su corazón y pulmones tras la muerte clínica, resucitándolo más peligroso que antes.", "cost": "Nen Tras la Muerte" }
      ],
      "passives": [
        { "name": "Amortiguación de Impactos", "desc": "Usa la goma para absorber y devolver proyectiles o ataques contundentes como una cama elástica.", "cost": "Defensa Pasiva" }
      ]
    },
    "forms": [ 
      { "id": "hisoka-mago", "name": "Hisoka (Traje de Arlequín)", "stats": "Nivel Multi-Bloque. Maquillaje de lágrima y estrella, cabello fucsia peinado hacia arriba." },
      { "id": "hisoka-resucitado", "name": "Hisoka Post-Mortem", "stats": "Nivel Ciudad. Extremidades reconstruidas con Goma Bungee y Textura Engañosa, sed de sangre pura." }
    ],
    "feats": [ "Derrotó a Gotoh (mayordomo Zoldyck) esquivando miles de monedas supersónicas.", "Resucitó de su propia muerte tras la explosión masiva en la Arena del Cielo." ],
    "psychology": "Un hedonista perverso que solo siente placer en luchar y matar a guerreros que hayan alcanzado su máximo potencial ('frutas maduras').",
    "weaknesses": "Su arrogancia y tendencia a dejar que el oponente prepare sus mejores trampas por pura diversión."
  },
  // 12. SOLDIER BOY
  {
    "id": "soldier-boy",
    "name": "Soldier Boy (Ben)",
    "alias": "El Primer Superhéroe Americano / El Arma Nuclear de Vought",
    "universe": "The Boys",
    "saga": "Temporada 3",
    "version": "Despertar Ruso (Explosión Radioactiva Desintegradora de Compuesto V)",
    "tier": "Tier 7-B | Nivel Ciudad",
    "ap": "Nivel Ciudad. El único superhéroe que rivalizó con Homelander en fuerza física. Tras décadas de experimentos rusos, su cuerpo mutó para emitir una ráfaga nuclear de radiación en su pecho que incinera todo a su paso y quema el Compuesto V de la sangre de los superhéroes, arrebatándoles sus poderes de forma permanente.",
    "range": "Decenas de metros (Ráfaga Nuclear del Pecho).",
    "speed": { "combat": "Hipersónica.", "reaction": "Hipersónica.", "travel": "Atlética.", "attack": "Golpes con escudo de tungsteno." },
    "strength": { "striking": "Clase Ciudad (Golpeó a Homelander hasta sacarle sangre).", "lifting": "Clase 1,000+ Toneladas." },
    "durability": "Nivel Ciudad. Piel y órganos internos invulnerables a cuchillos, balas por la boca y ácido concentrado.",
    "stamina": "Muy Alta (No envejece desde la Segunda Guerra Mundial).",
    "battleIQ": "Veterano de guerra de los años 40; combate cuerpo a cuerpo pesado con escudo.",
    "haxTags": [ "Ráfaga de Radiación Nuclear en el Pecho", "Anulación Definitiva de Súper-Poderes (Quema de Compuesto V)", "Fisiología Invulnerable" ],
    "arsenal": {
      "basicAttacks": "Golpes con su escudo pesado de águila dorada, ganchos de boxeo militar.",
      "superAttacks": [
        { "name": "Escudazo Descalabrante", "desc": "Blande su escudo de tungsteno rompiendo mandíbulas sobrehumanas.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Estallido Nuclear del Pecho", "desc": "Carga una explosión de energía radiactiva roja desde su pecho que arrasa edificios enteros y despoja permanentemente de sus poderes a cualquier superhéroe alcanzado.", "cost": "Carga Radiactiva" }
      ],
      "passives": [
        { "name": "Invulnerabilidad Interna", "desc": "Los científicos rusos le dispararon balas dentro de la garganta y su tejido interno no sufrió ningún daño.", "cost": "Defensa Pasiva" }
      ]
    },
    "forms": [ 
      { "id": "soldierboy-base", "name": "Soldier Boy", "stats": "Nivel Ciudad. Traje militar verde oscuro con estrella dorada, escudo pesado de águila, barba poblada." }
    ],
    "feats": [ "Sometió a Homelander junto a Butcher y Hughie en Herogasm.", "Despojó de sus poderes a Kimiko de una sola explosión en Rusia." ],
    "psychology": "Un hombre machista, rudo y traumatizado de la era de la Segunda Guerra Mundial; desprecia la debilidad y el sentimentalismo.",
    "weaknesses": "Estrés postraumático (PTSD) desencadenado por música rusa de los 80 que le hace perder el control de su reactor de radiación; gas Novichok."
  }
];

const filePath = path.resolve(__dirname, '../src/data/characters.js');
let content = fs.readFileSync(filePath, 'utf8');

const prefix = 'export const INITIAL_CHARACTERS = ';
let currentList = eval(content.replace(prefix, ''));
console.log(`Current characters count: ${currentList.length}`);

let updatedCount = 0;
batch25Upgrades.forEach(upgrade => {
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

console.log(`Batch 25 Upgrade Complete. ${updatedCount} characters successfully enhanced.`);
