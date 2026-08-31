const fs = require('fs');
const path = require('path');

const batch17Upgrades = [
  // 1. YAMCHA
  {
    "id": "yamcha-dragon-ball-cl-sico-865",
    "name": "Yamcha",
    "alias": "El Lobo Solitario / Héroe del Béisbol",
    "universe": "Dragon Ball (Clásico / Z / Super)",
    "saga": "Dragon Ball Original / Saiyan",
    "version": "Terrestre Veterano",
    "tier": "Tier 5-B | Nivel Planeta",
    "ap": "Nivel Planeta (Saga Cell / Buu). Yamcha comenzó como un bandido del desierto y llegó a superar a seres que podían destruir la Tierra en la antigüedad (como el escuadrón Ginyu en el relleno o las fuerzas de Moro). Aunque a menudo es el blanco de las burlas por su mala suerte, su poder bruto supera con creces el de cualquier humano normal o villano clásico.",
    "range": "Físico y explosiones menores (Sokidan).",
    "speed": { "combat": "Relativista.", "reaction": "Relativista.", "travel": "Sub-relativista.", "attack": "Veloz (Estilo Lobo)." },
    "strength": { "striking": "Clase Planeta.", "lifting": "Clase Montaña." },
    "durability": "Nivel Planeta. Suele bajar la guardia (como con el Saibaman o el Dr. Gero), costándole la vida.",
    "stamina": "Media. Acostumbrado a rendirse si la diferencia es abismal.",
    "battleIQ": "Excelente artista marcial terrestre, inventor de técnicas originales (Sokidan) que luego abandona por desmotivación.",
    "haxTags": [ "Control Absoluto de Ki (Sokidan)", "Beisbolista Profesional" ],
    "arsenal": {
      "basicAttacks": "Golpe del Colmillo de Lobo (Wolf Fang Fist): Una ráfaga veloz de golpes de garra y palma simulando los colmillos de un lobo.",
      "superAttacks": [
        { "name": "Kamehameha", "desc": "Versión básica aprendida de Roshi.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Sokidan (Esfera de Ki Controlable)", "desc": "Crea una esfera de Ki concentrada que no explota al instante; puede guiarla con los dedos para golpear al enemigo desde ángulos muertos y hacerla atravesar la tierra repetidas veces.", "cost": "30% Ki" }
      ],
      "passives": [
        { "name": "Mala Suerte Histórica", "desc": "Atrae ataques suicidas u oponentes inmensamente superiores como primer objetivo.", "cost": "Debuff Pasivo" }
      ]
    },
    "forms": [ 
      { "id": "yamcha-bandido", "name": "Bandido del Desierto", "stats": "Nivel Muro. Su época clásica con espada y pelo largo." },
      { "id": "yamcha-z", "name": "Guerrero Z", "stats": "Nivel Planeta. Uniforme naranja, cicatrices en la cara. Máximo potencial marcial." }
    ],
    "feats": [ "Venció a un Saibaman limpiamente antes de que este se inmolara por sorpresa.", "Sobrevivió a ser atravesado por el Dr. Gero el tiempo suficiente para ser curado." ],
    "psychology": "Un playboy retirado que fue superado por los extraterrestres y dioses, aceptando su rol de humano normal para vivir en paz jugando béisbol.",
    "weaknesses": "Exceso de confianza crónico al ganar ventaja; pánico ante mujeres (en su juventud) y dioses."
  },
  // 2. NAM
  {
    "id": "nam-dragon-ball-cl-sico-33",
    "name": "Nam",
    "alias": "El Guerrero del Desierto",
    "universe": "Dragon Ball (Clásico)",
    "saga": "21° Torneo de las Artes Marciales",
    "version": "Humano Devoto",
    "tier": "Tier 9-A | Nivel Habitación/Muro",
    "ap": "Nivel Muro. Un guerrero humano normal pero con un entrenamiento espiritual profundo. Luchó en el Torneo para comprar agua para su aldea en sequía. Estuvo a punto de noquear a Goku niño con su técnica aérea.",
    "range": "Cuerpo a cuerpo.",
    "speed": { "combat": "Humano Pico.", "reaction": "Supersónica (Pudo seguir movimientos básicos).", "travel": "Atleta Olímpico.", "attack": "Descenso veloz." },
    "strength": { "striking": "Clase Muro.", "lifting": "Clase Humano Pico." },
    "durability": "Nivel Muro. Soportó varios golpes de Goku niño.",
    "stamina": "Alta. Impulsado por el deber sagrado hacia su pueblo.",
    "battleIQ": "Luchador táctico estoico. Aprovecha la gravedad y los puntos ciegos.",
    "haxTags": [ "Gravedad como Arma" ],
    "arsenal": {
      "basicAttacks": "Golpes de karate clásicos y llaves de sumisión simples.",
      "superAttacks": [
        { "name": "Golpe de Cruz", "desc": "Corte de karate a la nuca.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Tenkuu Pekeji Ken (Ataque en X en el Cielo)", "desc": "Salta decenas de metros hacia arriba y desciende en picado con los brazos en X, apuntando al cuello del enemigo. El impacto sumado a la gravedad puede romper cuellos humanos fácilmente.", "cost": "Ataque Físico Pesado" }
      ],
      "passives": [
        { "name": "Desesperación del Desierto", "desc": "Lucha sin contenerse si la vida de su aldea depende de ello.", "cost": "Determinación" }
      ]
    },
    "forms": [ 
      { "id": "nam-base", "name": "Nam", "stats": "Nivel Muro. Ropas hindúes blancas, turbante, rostro serio." }
    ],
    "feats": [ "Forzó a Goku a usar estrategia de viento para evitar su ataque en picado.", "Consiguió agua gracias a la bondad de Jackie Chun (Roshi)." ],
    "psychology": "Noble, puro de corazón (Goku podía usar su nube voladora), estoico y sumamente agradecido.",
    "weaknesses": "Solo es un humano con limitaciones físicas normales. Carece de ataques a distancia."
  },
  // 3. GIRAN
  {
    "id": "giran-dragon-ball-cl-sico-697",
    "name": "Giran",
    "alias": "El Monstruo Alado",
    "universe": "Dragon Ball (Clásico)",
    "saga": "21° Torneo de las Artes Marciales",
    "version": "Luchador Monstruo",
    "tier": "Tier 8-C | Nivel Bloque",
    "ap": "Nivel Bloque. Un pterodáctilo/dinosaurio humanoide masivo. Superaba físicamente a Goku niño sin cola. Su saliva paralizante le permitía atrapar a oponentes casi imposibles de inmovilizar.",
    "range": "Físico y Saliva (Pocos metros).",
    "speed": { "combat": "Supersónica.", "reaction": "Supersónica.", "travel": "Atlética (Vuelo torpe).", "attack": "Lento pero pesado." },
    "strength": { "striking": "Clase Bloque. Podía atravesar muros gruesos de un puñetazo.", "lifting": "Clase Tonelada." },
    "durability": "Nivel Bloque. Piel gruesa de reptil.",
    "stamina": "Media.",
    "battleIQ": "Usa trucos sucios; si ve que el rival es demasiado fuerte (como Goku al recuperar su cola y romper su chicle), se rinde cobardemente.",
    "haxTags": [ "Chicle Paralizante Indestructible", "Vuelo" ],
    "arsenal": {
      "basicAttacks": "Golpes de cola, puñetazos brutos.",
      "superAttacks": [
        { "name": "Vuelo de Dinosaurio", "desc": "Usa sus alas para evadir ring-outs.", "cost": "Energía física" }
      ],
      "ultimateAttacks": [
        { "name": "Chicle Feliz (Guru Guru Gum)", "desc": "Escupe una resina púrpura de su garganta que envuelve al rival como cemento elástico secado al instante, inmovilizando incluso a guerreros mucho más fuertes que él.", "cost": "0% Ki" }
      ],
      "passives": [
        { "name": "Intimidación Reptil", "desc": "Asusta a rivales de mente débil antes de pelear.", "cost": "Pasivo táctico" }
      ]
    },
    "forms": [ 
      { "id": "giran-base", "name": "Giran", "stats": "Nivel Bloque. Dinosaurio gordo verde con alas en los brazos." }
    ],
    "feats": [ "Atrapó a Goku niño al punto de casi tirarlo del ring.", "Asesinado por Tambourine y posteriormente revivido." ],
    "psychology": "Bully de escuela; abusa de los más débiles pero se aterroriza frente a monstruos reales.",
    "weaknesses": "Fuerza bruta superior que rompa su resina."
  },
  // 4. BACTERIAN
  {
    "id": "bacterian-dragon-ball-cl-sico-986",
    "name": "Bacterian",
    "alias": "El Hombre Más Asqueroso del Mundo",
    "universe": "Dragon Ball (Clásico)",
    "saga": "21° Torneo de las Artes Marciales",
    "version": "Humano Gigante (Inmundo)",
    "tier": "Tier 9-C | Nivel Calle",
    "ap": "Nivel Calle (Daño Tóxico). Bacterian nunca se ha bañado ni cepillado los dientes desde que nació. Su fuerza es la de un humano gigante, pero su verdadero poder destructivo es el hedor biológico que emana, capaz de desmayar a guerreros marciales solo por respirar cerca de él.",
    "range": "Físico y Nube Tóxica de Hedor (Área chica).",
    "speed": { "combat": "Humano Promedio.", "reaction": "Lenta.", "travel": "Lenta.", "attack": "Pesada." },
    "strength": { "striking": "Clase Muro Bajo.", "lifting": "Clase Oso." },
    "durability": "Nivel Muro. Soportó algunos golpes de Krilin.",
    "stamina": "Media.",
    "battleIQ": "Usa su higiene como arma táctica. Cero artes marciales.",
    "haxTags": [ "Gas Tóxico Biológico (Hedor)", "Ataques de Secreciones" ],
    "arsenal": {
      "basicAttacks": "Golpes torpes, aplastamiento sentándose encima del rival.",
      "superAttacks": [
        { "name": "Flemas y Baba", "desc": "Escupe sobre el rival causando daño moral y asco extremo.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Gas Letal / Toque de Entrepierna", "desc": "Se rasca sus partes íntimas o expulsa gases directamente a la cara del oponente, asfixiando por completo sus sentidos y provocando rendiciones inmediatas.", "cost": "0% Ki" }
      ],
      "passives": [
        { "name": "Aura Putrefacta", "desc": "Cualquier personaje que dependa del sentido del olfato (Goku, Kiba, etc) es neutralizado instantáneamente al luchar contra él.", "cost": "Pasivo Infeccioso" }
      ]
    },
    "forms": [ 
      { "id": "bacterian-base", "name": "Bacterian", "stats": "Nivel Calle. Gigante gordo, ropa interior rasgada, moscas volando alrededor de él pasivamente." }
    ],
    "feats": [ "Sometió a Krilin casi ahogándolo con su olor." ],
    "psychology": "Sádico guarro. Disfruta asfixiando a oponentes puros con sus secreciones.",
    "weaknesses": "Totalmente inútil contra oponentes que carezcan de nariz física (Krilin usó esta epifanía para vencerlo)."
  },
  // 5. ANDROIDE 8 (EIGHTER)
  {
    "id": "androide-8-dragon-ball-cl-sico-704",
    "name": "Androide 8",
    "alias": "Octavio (Eighter)",
    "universe": "Dragon Ball (Clásico)",
    "saga": "Ejército Red Ribbon",
    "version": "Frankenstein Pacifista",
    "tier": "Tier 8-B | Nivel Bloque de Ciudad",
    "ap": "Nivel Bloque de Ciudad. Creado por el Dr. Flappe (y Gero), fue diseñado para destruir todo a su paso, pero nació con un corazón gentil. Cuando se enfada, su fuerza mecánica supera a la del Goku niño de esa época, mandando a volar al Sargento Murasaki y al Mayor Metallitron si se lo propone.",
    "range": "Cuerpo a cuerpo.",
    "speed": { "combat": "Supersónica.", "reaction": "Supersónica.", "travel": "Atlética.", "attack": "Fuerza mecánica lenta." },
    "strength": { "striking": "Clase Bloque. Aboya acero reforzado de un manotazo.", "lifting": "Clase Varias Toneladas." },
    "durability": "Nivel Bloque. Compuesto de acero pesado.",
    "stamina": "Infinita (Androide clásico).",
    "battleIQ": "Odia pelear. Lucha de forma recta y tosca solo para defender a sus amigos.",
    "haxTags": [ "Corazón Puro (Inmune a la Nube Kinton)", "Fuerza Cibernética Pura" ],
    "arsenal": {
      "basicAttacks": "Golpes contundentes, abrazos de oso, tacleadas.",
      "superAttacks": [
        { "name": "Proteger al Amigo", "desc": "Se interpone como escudo humano ignorando el daño.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Puñetazo de la Ira (Eighter Punch)", "desc": "Si alguien lastima a Goku (como el Coronel White), pierde la paciencia y conecta un gancho letal que manda a volar al enemigo kilómetros a través de la pared de la torre.", "cost": "0% Ki" }
      ],
      "passives": [
        { "name": "Pacifismo", "desc": "Se niega a usar ataques letales y no pelea a menos que no tenga otra opción.", "cost": "Debuff psicológico" }
      ]
    },
    "forms": [ 
      { "id": "eighter-base", "name": "Androide 8", "stats": "Nivel Bloque de Ciudad. Aspecto idéntico al Monstruo de Frankenstein, abrigo oscuro, cicatrices en la cabeza." }
    ],
    "feats": [ "Salvó a Goku de una muerte congelada.", "Sobrevivió hasta el final de Dragon Ball Z (Dio energía a la Genkidama)." ],
    "psychology": "Es un gigante amable que rechaza su programación de asesinato. Ve a Goku como su mejor amigo y brújula moral.",
    "weaknesses": "Odia la violencia y tiene una bomba en su pecho (Que fue desactivada posteriormente)."
  },
  // 6. CORONEL MURASAKI
  {
    "id": "coronel-murasaki-dragon-ball-cl-sico-136",
    "name": "Coronel Murasaki",
    "alias": "El Ninja Púrpura",
    "universe": "Dragon Ball (Clásico)",
    "saga": "Ejército Red Ribbon",
    "version": "Ninja del Ejército",
    "tier": "Tier 9-A | Nivel Habitación/Muro",
    "ap": "Nivel Muro. Uno de los protectores de la Muscle Tower. Se cree un ninja maestro, pero en realidad es un ilusionista tramposo. Sus habilidades marciales son inferiores a Goku niño, pero sus trampas ocultas (y sus hermanos gemelos) son molestos.",
    "range": "Físico y lanzamiento de Shurikens (Decenas de metros).",
    "speed": { "combat": "Humano Pico.", "reaction": "Atleta.", "travel": "Atlética.", "attack": "Rápido al lanzar armas." },
    "strength": { "striking": "Clase Humana Pico.", "lifting": "Clase Humano Promedio." },
    "durability": "Nivel Humano. Goku lo sometió empalándolo con el báculo sagrado de forma humillante.",
    "stamina": "Media.",
    "battleIQ": "Usa humo, escondites ridículos, y engaños visuales infantiles (Como esconderse detrás de una bandera que no concuerda con la pared).",
    "haxTags": [ "Trucos Ninja Falsos", "Uso de Hermanos Gemelos" ],
    "arsenal": {
      "basicAttacks": "Cortes de Katana (Que se rompe fácilmente), lanzar Shurikens de estrella.",
      "superAttacks": [
        { "name": "Bumerán Ninja", "desc": "Arma arrojadiza con filo letal.", "cost": "Arma" }
      ],
      "ultimateAttacks": [
        { "name": "Técnica de Clonación (5 Hermanos)", "desc": "Finge hacer un jutsu de clones de sombra, pero en realidad llama a sus 4 hermanos gemelos idénticos para emboscar al oponente en un 5 vs 1.", "cost": "Mentira Absoluta" }
      ],
      "passives": [
        { "name": "Camuflaje Ridículo", "desc": "Se esconde en lugares obvios pero asume que es invisible.", "cost": "Humor" }
      ]
    },
    "forms": [ 
      { "id": "murasaki-base", "name": "Ninja Púrpura", "stats": "Nivel Muro Bajo. Traje ninja morado tradicional." }
    ],
    "feats": [ "Logró confundir a Goku por un par de minutos con sus hermanos.", "Sobrevivió a ser empalado por el Báculo Sagrado en la retaguardia." ],
    "psychology": "Fanfarrón, engañoso y orgulloso de sus artes ninja que son realmente patéticas.",
    "weaknesses": "Incompetencia absoluta y fuerza bruta baja."
  },
  // 7. MAYOR METALLITRON
  {
    "id": "mayor-metallitron-dragon-ball-cl-sico-265",
    "name": "Mayor Metallitron",
    "alias": "El Cyborg Gigante",
    "universe": "Dragon Ball (Clásico)",
    "saga": "Ejército Red Ribbon",
    "version": "Modelo Terminador de la Muscle Tower",
    "tier": "Tier 8-B | Nivel Bloque de Ciudad",
    "ap": "Nivel Bloque de Ciudad. Un homenaje puro a Terminator. Fue el primer oponente en resistir un Kamehameha directo de Goku niño sin morir. Su fuerza física rivalizaba con la de Goku, y podía seguir luchando incluso después de perder la cabeza y ser atravesado.",
    "range": "Físico y ráfagas de misiles (Boca).",
    "speed": { "combat": "Supersónica.", "reaction": "Supersónica.", "travel": "Caminata pesada.", "attack": "Pesada." },
    "strength": { "striking": "Clase Bloque de Ciudad.", "lifting": "Clase 10+ Toneladas." },
    "durability": "Nivel Bloque de Ciudad. Su cuerpo de acero macizo le permitía ignorar daño masivo. Solo perdió porque se le agotaron las baterías (literalmente).",
    "stamina": "Alta (Depende de baterías doble A).",
    "battleIQ": "Programación de guardia; ataca implacablemente como un robot sin sentir dolor.",
    "haxTags": [ "Ausencia de Dolor", "Inmunidad al Empalamiento", "Misil Bucal" ],
    "arsenal": {
      "basicAttacks": "Golpes de puño gigantes, aplastar con botas de acero, usar un tronco de pared como bate.",
      "superAttacks": [
        { "name": "Puño Cohete (Rocket Punch)", "desc": "Dispara su puño de acero como proyectil teledirigido para atravesar al enemigo.", "cost": "Componentes" }
      ],
      "ultimateAttacks": [
        { "name": "Misil Nuclear (Boca)", "desc": "Abre la boca y dispara un misil bélico a quemarropa que destroza pisos enteros.", "cost": "Munición" }
      ],
      "passives": [
        { "name": "Robot Imparable", "desc": "Sigue combatiendo independientemente de haber perdido los brazos o la cabeza, operando por sensores internos de su torso.", "cost": "Pasivo Cibernético" }
      ]
    },
    "forms": [ 
      { "id": "metallitron-base", "name": "Mayor Metallitron", "stats": "Nivel Bloque de Ciudad. Hombre gigante blanco, corte militar, gafas de sol, atuendo militar." }
    ],
    "feats": [ "Soportó el Kamehameha que antes destruyó vehículos pesados.", "Atrapó a Goku por varios minutos forzándolo a pelear al límite." ],
    "psychology": "Máquina muda (solo emite sonidos de robot). Creado puramente para someter a intrusos.",
    "weaknesses": "Baterías AA limitadas; se apagó repentinamente a mitad del combate ganador."
  },
  // 8. REY DEMONIO PICCOLO
  {
    "id": "rey-piccolo-dragon-ball-cl-sico-497",
    "name": "Rey Demonio Piccolo (Daimaoh)",
    "alias": "El Gran Rey del Mal",
    "universe": "Dragon Ball (Clásico)",
    "saga": "Rey Demonio Piccolo",
    "version": "Juventud Restaurada",
    "tier": "Tier 7-B | Nivel Ciudad",
    "ap": "Nivel Ciudad (Alto). La reencarnación de la maldad pura expulsada de Kami-sama. En su forma anciana mató a Shenron de un golpe; al restaurar su juventud, masacró a Goku en su primer encuentro y derrocó a la Tierra entera tomando la capital. Su técnica máxima borraba ciudades del mapa sin esfuerzo.",
    "range": "Nivel Ciudad a Montaña (Ráfagas Explosivas).",
    "speed": { "combat": "Hipersónica+.", "reaction": "Hipersónica+.", "travel": "Supersónica (Vuelo).", "attack": "Veloz." },
    "strength": { "striking": "Clase Ciudad. Un manotazo suyo barría edificios.", "lifting": "Clase Cientos de Toneladas." },
    "durability": "Nivel Ciudad. Solo fue derrotado por el Golpe del Mono Gigante de Goku concentrando todo su Ki en el puño.",
    "stamina": "Muy Alta tras rejuvenecer.",
    "battleIQ": "Sádico y extremadamente calculador. Destruyó las esferas tras usarlas y mató a los guerreros antes del torneo para evitar el Mafuba.",
    "haxTags": [ "Engendrar Demonios (Huevos)", "Regeneración Limitada", "Maldad Pura (Destruye almas al matar)" ],
    "arsenal": {
      "basicAttacks": "Golpes pesados precisos, rayos de los ojos, telequinesis para levitar.",
      "superAttacks": [
        { "name": "Ráfaga Explosiva del Demonio", "desc": "Un rayo lanzado de la mano que aniquiló Ciudad del Este en segundos.", "cost": "20% Ki" },
        { "name": "Incubar Hijos", "desc": "Escupe un huevo por la boca sacrificando Ki y esperanza de vida para crear monstruos leales (Cymbal, Tambourine, Piccolo Jr).", "cost": "30% Ki/Vida" }
      ],
      "ultimateAttacks": [
        { "name": "Bakurikimaha (Onda Explosiva Demoniaca Máxima)", "desc": "Su ataque más poderoso y destructivo, carga energía roja en una mano aguantando el otro brazo; vaporiza kilómetros de tierra firme convirtiéndolo en un cráter abisal.", "cost": "50% Ki" }
      ],
      "passives": [
        { "name": "Vínculo con Kami", "desc": "Si lo matan, Kami-sama muere con él (Y desaparecen las Dragon Balls).", "cost": "Protección Pasiva" }
      ]
    },
    "forms": [ 
      { "id": "piccolo-anciano", "name": "Daimaoh Anciano", "stats": "Nivel Ciudad Menor. Piel arrugada, verde oscuro, se cansa fácilmente." },
      { "id": "piccolo-joven", "name": "Daimaoh Rejuvenecido", "stats": "Nivel Ciudad. Musculoso, pico de poder de DB clásico. Piel verde brillante." }
    ],
    "feats": [ "Asesinó a Shenron.", "Derrotó a Goku y dominó la Tierra instituyendo un día de purga global.", "Murió pero escupió el huevo de su reencarnación (Piccolo/Majunior) antes de explotar." ],
    "psychology": "No tiene matices grises: es el mal encarnado. Disfruta viendo sufrir a la gente pacífica, libera criminales y se autoproclama rey del mundo solo para destruirlo sector por sector.",
    "weaknesses": "Vulnerable al Mafuba y confía demasiado en su superioridad."
  },
  // 9. TAMBOURINE
  {
    "id": "tambourine-dragon-ball-cl-sico-273",
    "name": "Tambourine",
    "alias": "El Asesino Demoniaco",
    "universe": "Dragon Ball (Clásico)",
    "saga": "Rey Demonio Piccolo",
    "version": "Engendro de Piccolo",
    "tier": "Tier 8-A | Nivel Multi-Bloque de Ciudad",
    "ap": "Nivel Multi-Bloque de Ciudad. Creado específicamente por Piccolo para cazar a los artistas marciales del mundo. Superaba con creces al Goku cansado y asesinó brutalmente a Krilin (siendo la primera gran muerte de la serie). Su vuelo libre le daba una ventaja letal en esa época.",
    "range": "Varias decenas de metros (Boca).",
    "speed": { "combat": "Hipersónica.", "reaction": "Hipersónica.", "travel": "Supersónica (Alas aéreas).", "attack": "Ataques de picado." },
    "strength": { "striking": "Clase Bloque de Ciudad.", "lifting": "Clase Tonelada." },
    "durability": "Nivel Bloque de Ciudad. Fue vaporizado instantáneamente por un Kamehameha furioso de Goku recuperado.",
    "stamina": "Alta. Incansable en su misión.",
    "battleIQ": "Lucha como un halcón depredador. Abusa de su capacidad de volar para cazar guerreros que no saben levitar (como Yamcha o Giran).",
    "haxTags": [ "Vuelo Demoniaco", "Anulación del Alma" ],
    "arsenal": {
      "basicAttacks": "Garras afiladas, picados a alta velocidad, puñetazos letales.",
      "superAttacks": [
        { "name": "Láser Bucal Demoniaco", "desc": "Dispara un poderoso rayo de energía purpúrea desde su boca.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Combo de Asesinato (Caza Menor)", "desc": "Somete al enemigo aéreo y patea su cráneo hacia la tierra con fuerza letal (Técnica con la que mató a Krilin de una patada).", "cost": "Ataque físico crítico" }
      ],
      "passives": [
        { "name": "Rastreador", "desc": "Identifica y localiza los rostros y nombres del libro de participantes del Torneo para cazarlos.", "cost": "Pasivo argumental" }
      ]
    },
    "forms": [ 
      { "id": "tambourine-base", "name": "Demonio Mutante", "stats": "Nivel Multi-Bloque. Aspecto de gárgola reptil verde/marrón con alas membranosas grandes." }
    ],
    "feats": [ "Asesinó a Krilin, Giran, Rey Chapa, Pamputt y Bacterian en cuestión de días.", "Destruyó la Nube Voladora (Temporalmente)." ],
    "psychology": "Orgulloso, sádico y servil a su padre Piccolo. Le encanta infundir terror en humanos pacíficos.",
    "weaknesses": "Físicamente muy inferior a Goku al 100% o Yajirobe."
  },
  // 10. MR. POPO
  {
    "id": "mr-popo-dragon-ball-cl-sico-370",
    "name": "Mr. Popo",
    "alias": "El Ayudante Celestial",
    "universe": "Dragon Ball",
    "saga": "Rey Demonio Piccolo / Namek / Buu",
    "version": "Guardián Divino",
    "tier": "Tier 7-B a 5-C | Nivel Ciudad a Lunar (Y resistió hax cósmicos)",
    "ap": "Nivel Lunar (Especulación/Hax). Mr. Popo es un misterio. En la era clásica, bloqueaba Kamehamehas de Goku con el dedo y lo sometía usando puros reflejos y control del Ki (estando años luz por encima del Rey Piccolo). En la saga Buu, retuvo temporalmente los ataques físicos de Goten y Trunks SSJ1 sin despeinarse en el relleno del anime.",
    "range": "Cuerpo a cuerpo y Magia Planetaria.",
    "speed": { "combat": "FTL (Evadiendo SSJs).", "reaction": "MFTL (Instinto puro).", "travel": "Supersónica (Alfombra Mágica).", "attack": "Suave pero certera." },
    "strength": { "striking": "Clase Ciudad+.", "lifting": "Clase Desconocida (Magia)." },
    "durability": "Indeterminada. Ha sobrevivido a casi todo menos al ataque de absorción de Super Buu.",
    "stamina": "Infinita de forma práctica (Lleva milenios vivo y no envejece).",
    "battleIQ": "Maestro supremo de las bases del 'Mui' (Mente vacía). Fue el primero en enseñarle a Goku a calmar el espíritu como agua y ser más rápido que el relámpago.",
    "haxTags": [ "Mente en Blanco (Evasión Perfecta)", "Magia Creadora", "Inmortalidad Biológica" ],
    "arsenal": {
      "basicAttacks": "Golpes sin intención asesina que duelen profundamente; bloqueo con un solo dedo.",
      "superAttacks": [
        { "name": "Alfombra Mágica / Teletransporte Celestial", "desc": "Uso de artefactos mágicos para ir a cualquier parte de la Tierra o planos adyacentes al instante.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Asimilación (Tragar Ki)", "desc": "Abre la boca y, literalmente, se traga ataques de energía devastadores como el Kamehameha sin sufrir indigestión ni daño alguno.", "cost": "Defensa Mágica" }
      ],
      "passives": [
        { "name": "Calma Absoluta (Ausencia de Presencia)", "desc": "Suprime su Ki a cero; es imposible sentirlo, predecirlo o detectarlo con rastreadores. Evade ataques moviéndose sin pensar (Bases del Ultra Instinto).", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ 
      { "id": "mr-popo-base", "name": "Mr. Popo", "stats": "Nivel Desconocido (Mínimo Nivel Ciudad). Genio negro y bajito con turbante blanco y vestimenta oriental mágica." }
    ],
    "feats": [ "Derrotó a Goku (quien acababa de matar a Piccolo Daimaoh) humillándolo sin usar fuerza, solo reflejos y técnica.", "Se tragó un Kamehameha.", "Soportó golpes de Trunks y Goten Super Saiyan." ],
    "psychology": "Leal de por vida a los Guardianes de la Tierra (Kami-sama, Dende). Completamente pacífico, amable y paternal, pero severo y estricto como maestro.",
    "weaknesses": "Jamás usa su poder para ofender o matar, actuando solo de forma defensiva/educativa."
  },
  // 11. GRANJERO CON ESCOPETA
  {
    "id": "granjero-con-escopeta-dragon-ball-cl-sico-331",
    "name": "Granjero con Escopeta",
    "alias": "El Primer Poder de Pelea",
    "universe": "Dragon Ball Z",
    "saga": "Llegada de Raditz",
    "version": "Humano Normal Protegiendo su Cultivo",
    "tier": "Tier 10-A | Nivel Atleta con Arma (Nivel Meme Infinito)",
    "ap": "Nivel Muro (Con escopeta). El legendario primer personaje escaneado por el rastreador en toda la historia de Dragon Ball Z. Su poder oficial es '5'. Aunque fue asesinado (o incapacitado) al instante por Raditz al devolverle la bala, su legado como medida de poder humano es inmortal.",
    "range": "Decenas de metros (Alcance de Escopeta).",
    "speed": { "combat": "Humano Promedio.", "reaction": "Lenta.", "travel": "En Camioneta (Terrestre).", "attack": "Velocidad de bala (Supersónica, pero el arma, no él)." },
    "strength": { "striking": "Clase Humano.", "lifting": "Clase Humano Trabajador (Levanta pacas de heno)." },
    "durability": "Nivel Humano. Cayó al recibir el impacto de su propia bala.",
    "stamina": "Promedio.",
    "battleIQ": "Si ve un meteorito, va a investigar armado. Si un extraterrestre con pelo largo y armadura le gruñe, dispara sin dudar. Valiente o temerario.",
    "haxTags": [ "Poder de Pelea de 5", "El Primer Escaneado", "Meme Legendario" ],
    "arsenal": {
      "basicAttacks": "Mirada de sospecha campirana.",
      "superAttacks": [
        { "name": "Camioneta Pickup", "desc": "Su fiel medio de transporte para llegar al sitio del cráter.", "cost": "Gasolina" }
      ],
      "ultimateAttacks": [
        { "name": "Disparo de Escopeta Calibre 12", "desc": "El legendario disparo que fue atrapado por Raditz. En un humano normal, sería letal.", "cost": "1 Cartucho" }
      ],
      "passives": [
        { "name": "Medidor Base (Scouter=5)", "desc": "Establece el estándar multiversal: 1 Granjero = Poder de 5. (Raditz = 300 Granjeros, Goku SSJ = 30 Millones de Granjeros).", "cost": "Escala Pasiva" }
      ]
    },
    "forms": [ 
      { "id": "granjero-base", "name": "Granjero Enfadado", "stats": "Poder 5. Sombrero de paja, sobrepeso, overol azul, cigarro o rama en la boca, escopeta en mano." }
    ],
    "feats": [ "Se atrevió a dispararle a quemarropa a un invasor espacial Saiyajin Tier 6 sin mostrar miedo." ],
    "psychology": "Solo quiere que lo dejen trabajar su tierra en paz. Extremadamente territorial.",
    "weaknesses": "Literalmente es un tipo normal con una escopeta, el ser más débil con ficha en el Engine."
  }
];

const filePath = path.resolve(__dirname, '../src/data/characters.js');
let content = fs.readFileSync(filePath, 'utf8');

const prefix = 'export const INITIAL_CHARACTERS = ';
let currentList = eval(content.replace(prefix, ''));
console.log(`Current characters count: ${currentList.length}`);

let updatedCount = 0;
batch17Upgrades.forEach(upgrade => {
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

console.log(`Batch 17 Upgrade Complete. ${updatedCount} characters successfully enhanced. (Classic Era + Farmer).`);
