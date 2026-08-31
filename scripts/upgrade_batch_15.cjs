const fs = require('fs');
const path = require('path');

const batch15Upgrades = [
  // 1. JIREN (PATCH FORMS)
  {
    "id": "jiren-dragon-ball-super-983",
    "name": "Jiren",
    "alias": "El Gris / El Mortal Más Fuerte",
    "universe": "Dragon Ball Super",
    "saga": "Torneo del Poder",
    "version": "Limit Breaker (Trauma Desatado)",
    "tier": "Tier 2-C | Nivel Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo (Alto). Jiren es una anomalía mortal; su poder bruto supera al de su propio Dios de la Destrucción (Belmod). Durante casi todo el torneo se contuvo inmensamente, frenando golpes cósmicos solo con la mirada. Al verse acorralado por el Ultra Instinto Perfecto de Goku, Jiren rompe sus límites por puro trauma, envolviéndose en un aura flamígera masiva capaz de rivalizar con la doctrina egoísta de los ángeles.",
    "range": "Multiversal (Aura de Calor/Ojos).",
    "speed": { "combat": "Inconmensurable+.", "reaction": "Inconmensurable+.", "travel": "MFTL+.", "attack": "Trascendental." },
    "strength": { "striking": "Clase Multiversal Bajo. Rompe el tejido del espacio-tiempo pasivamente al caminar o dar un puñetazo.", "lifting": "Clase Multiversal." },
    "durability": "Nivel Multiversal Bajo. Resistió ataques directos del UI Perfecto repetidas veces antes de caer por agotamiento mental y físico conjunto.",
    "stamina": "Absurda, pero sufre desgaste rápido si es forzado a pelear a 100% durante mucho tiempo.",
    "battleIQ": "Lucha sin florituras. Mínimo movimiento para máximo resultado. No obstante, es fácil de desequilibrar emocionalmente si su ideología sobre la 'fuerza absoluta' se cuestiona.",
    "haxTags": [ "Barrera de Ki Pasiva (Ojos)", "Fuerza Trascendental" ],
    "arsenal": {
      "basicAttacks": "Golpes simples, rechazar ataques con la mirada (presión de Ki invisible).",
      "superAttacks": [
        { "name": "Impacto de Poder", "desc": "Lanza una esfera roja/naranja que se comprime y explota violentamente al chocar.", "cost": "10% Ki" },
        { "name": "Ráfaga Invisible", "desc": "Cientos de golpes dados tan rápido que el enemigo solo ve los impactos en el aire.", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Omegaheat Magnetron (Furia Final)", "desc": "Acumula toda su frustración en una llamarada colosal roja que rivaliza con el Kamehameha del UI, siendo el ataque de Ki puro más bestial de los mortales.", "cost": "60% Ki" }
      ],
      "passives": [
        { "name": "Muro del Absoluto", "desc": "En formas Base/Contenido, los ataques de poder inferior a Tier 2-C rebotan automáticamente sin hacer daño (Escudo visual).", "cost": "Defensa Pasiva" }
      ]
    },
    "forms": [ 
      { "id": "jiren-contenido", "name": "Base (Contenido)", "stats": "Nivel Universal+. Aura sutil, ni se mueve para pelear, medita." },
      { "id": "jiren-100", "name": "Full Power", "stats": "Nivel Multiversal Bajo. Músculos hinchados, aura roja inmensa, supera al UI Señal." },
      { "id": "jiren-limit-breaker", "name": "Limit Breaker", "stats": "Nivel Multiversal Bajo (Alto). Sin camisa, quemaduras, aura flamígera caótica desbordada por la rabia." }
    ],
    "feats": [ "Sometió a Goku, Vegeta, Freezer y 17 a la vez con mínimo esfuerzo.", "Salió de una prisión temporal de Hit a pura fuerza física." ],
    "psychology": "Un hombre destrozado por su pasado, que cree que solo el poder puro y la soledad traen verdadera justicia. Aprende el valor del compañerismo al caer derrotado.",
    "weaknesses": "Inestabilidad emocional si es empujado al límite; si hieren su orgullo ideológico, gasta Ki salvajemente."
  },
  // 2. HIT (PATCH FORMS)
  {
    "id": "hit-dragon-ball-super-450",
    "name": "Hit",
    "alias": "El Asesino Legendario del Universo 6",
    "universe": "Dragon Ball Super",
    "saga": "Torneo del Poder / U6",
    "version": "Modo Asesinato Puro (Despertado)",
    "tier": "Tier 3-A | Nivel Universal",
    "ap": "Nivel Universal. El asesino milenario infalible. Su poder destructivo bruto no rivaliza con el de Goku SSJ Blue o Jiren, pero no lo necesita. Las técnicas de Hit ignoran la durabilidad convencional, atacando órganos vitales o deteniendo el corazón a través del tejido del espacio-tiempo, siendo una amenaza letal incluso para guerreros superiores a él.",
    "range": "Físico y Dimensional (Ráfagas invisibles a corta distancia).",
    "speed": { "combat": "Inconmensurable (Salto Temporal).", "reaction": "Inconmensurable.", "travel": "MFTL+.", "attack": "Intocable." },
    "strength": { "striking": "Clase Universal (Por ataques a puntos débiles).", "lifting": "Clase Estelar." },
    "durability": "Nivel Universal. Puede almacenar el tiempo que salta para crear una dimensión paralela donde los ataques físicos pasan a través de él (Intangibilidad).",
    "stamina": "Muy Alta. Asesino metódico.",
    "battleIQ": "Analítico, frío, aprende durante el combate adaptando su Salto Temporal sobre la marcha.",
    "haxTags": [ "Salto Temporal (Time Skip)", "Intangibilidad Dimensional", "Golpes de Presión de Corazón", "Prisión de Tiempo" ],
    "arsenal": {
      "basicAttacks": "Golpes invisibles precisos al hígado, cuello y corazón usando su salto temporal.",
      "superAttacks": [
        { "name": "Golpe de Choque Temporal (Flash Fist Crush)", "desc": "Lanza un puñetazo al vacío. La onda atraviesa el espacio y golpea al oponente a distancia como un proyectil invisible e imparable.", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Jaula de Tiempo (Time Prison)", "desc": "Atrapa al enemigo en un bloque de espacio-tiempo estancado. Inmovilizó a Jiren por completo durante valiosos segundos, sacrificando toda su energía y presencia ofensiva para mantenerlo.", "cost": "60% Ki" }
      ],
      "passives": [
        { "name": "Evolución Temporal", "desc": "Si un enemigo contrarresta su Salto Temporal, Hit alarga la duración de 0.1 a 0.2, y hasta 0.5 segundos instantáneamente.", "cost": "Adaptación Continua" }
      ]
    },
    "forms": [ 
      { "id": "hit-torneo", "name": "Estado Base (Contenido)", "stats": "Nivel Universal. Lucha con reglas de torneo, sin dar golpes letales." },
      { "id": "hit-asesino", "name": "Modo Asesinato (Despertado)", "stats": "Nivel Universal. Aura lila oscura, usa técnicas prohibidas directas al corazón (Como cuando fingió matar a Goku)." }
    ],
    "feats": [ "Obligó a Goku a inventar el SSJ Blue Kaio-ken x10.", "Detuvo el corazón de Goku con un solo golpe invisible.", "Paralizó a Jiren temporalmente." ],
    "psychology": "Un profesional absoluto de las sombras. Encuentra respeto por aquellos que le hacen usar su 100%, como Goku, desarrollando una rivalidad amistosa no hablada.",
    "weaknesses": "Guerreros que predigan sus saltos o cuyo poder bruto sea tan absurdo que 'rompa' el tiempo (Como Jiren o Goku Blue Kaio-ken)."
  },
  // 3. BROLY DBS (PATCH FORMS)
  {
    "id": "broly-dbs-dragon-ball-super-172",
    "name": "Broly (DBS)",
    "alias": "El Mutante Solitario",
    "universe": "Dragon Ball Super",
    "saga": "Película: Broly",
    "version": "Full Power Super Saiyan (SSJ Máximo)",
    "tier": "Tier 3-A a 2-C | Nivel Universal a Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. El guerrero con mayor potencial de aprendizaje del Universo 7. Empezó luchando a nivel Base contra Vegeta Base, y en menos de una hora adaptó su poder bruto hasta destrozar a Goku y Vegeta en SSJ Blue, requiriendo la fusión Gogeta Blue para poder ser detenido. Su Forma Full Power rompió la dimensión física solo al chocar ataques.",
    "range": "Universal (Lluvia de ráfagas).",
    "speed": { "combat": "MFTL+ a Inconmensurable.", "reaction": "MFTL+.", "travel": "MFTL+.", "attack": "Abrumadoramente rápido para su tamaño." },
    "strength": { "striking": "Clase Multiversal Bajo.", "lifting": "Clase Universal." },
    "durability": "Nivel Multiversal Bajo. Resistió una paliza sin precedentes de Gogeta Blue antes de casi morir por un Kamehameha definitivo.",
    "stamina": "Infinita Absoluta (Mientras mantenga el estado de furia).",
    "battleIQ": "Primitivo. Al perder el control, no esquiva; confía 100% en tanquear ataques y golpear más fuerte.",
    "haxTags": [ "Adaptación Instantánea de Ki", "Poder Oozaru en forma Humana (Ikari)", "Zenkai Múltiple" ],
    "arsenal": {
      "basicAttacks": "Agarres aplasta-cabezas, arrastrar al enemigo por montañas de hielo, golpizas.",
      "superAttacks": [
        { "name": "Eraser Cannon Gigante", "desc": "Dispara esferas verdes letales desde la palma.", "cost": "15% Ki" },
        { "name": "Lluvia de Meteoros (Omega Blaster)", "desc": "Lanza cientos de ráfagas aleatorias que pulverizan el escenario.", "cost": "30% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Aliento de Gigante (Gigantic Roar)", "desc": "Abre la boca y dispara un pilar de Ki verde masivo que rasga la tierra hasta el magma, técnica icónica con la que casi desintegra a Frieza Golden.", "cost": "50% Ki" }
      ],
      "passives": [
        { "name": "Furia Ciega", "desc": "Si recibe ataques letales, en lugar de sufrir daño real, entra en un estado ininterrumpible y ataca instantáneamente al rival.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ 
      { "id": "broly-base-dbs", "name": "Broly Base", "stats": "Nivel Universal. Ropa alienígena, oreja de Bah. Aprende a pelear en minutos." },
      { "id": "broly-ikari", "name": "Estado Iracundo (Ikari)", "stats": "Nivel Universal+. Ojos amarillos, cabello puntiagudo negro. Posee el x10 del Oozaru en base, superando al God." },
      { "id": "broly-ssj-dbs", "name": "Super Saiyan", "stats": "Nivel Multiversal Bajo (Menor). Cabello dorado. Desatado por la muerte de su padre, supera al SSJ Blue y a Freezer Golden." },
      { "id": "broly-full-power", "name": "Super Saiyan Full Power", "stats": "Nivel Multiversal Bajo. Gigantesco, cabello verde, sin pupilas. Fuerza destructiva pura comparable a Jiren." }
    ],
    "feats": [ "Aguantó el asalto de Gogeta Blue repetidas veces.", "Le dio una paliza de 1 hora seguida a Golden Frieza ininterrumpidamente." ],
    "psychology": "Un chico puro y gentil que fue criado como arma de venganza por su padre. No quiere lastimar a nadie, pero al usar su poder pierde completamente la mente.",
    "weaknesses": "Combate predecible y salvaje; sin técnica, un oponente marcial superior (como Gogeta) lo usa de saco de boxeo."
  },
  // 4. VEGETTO BLUE (SAGA SUPER - PATCH FORMS)
  {
    "id": "vegetto-blue-dragon-ball-super-79",
    "name": "Vegetto (Saga Super)",
    "alias": "La Unión Divina Suprema",
    "universe": "Dragon Ball Super",
    "saga": "Trunks del Futuro / Torneo Poder (Concepto)",
    "version": "Super Saiyan Blue",
    "tier": "Tier 2-C | Nivel Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo (Extremo). En la saga de Black, Zamasu Fusión era una deidad inmortal capaz de corromper universos. Vegetto Blue apareció y, en poder bruto, lo humilló y desmembró con facilidad pasmosa (sobre todo en el manga). Su Final Kamehameha es uno de los ataques más absurdamente potentes del multiverso.",
    "range": "Multiversal (Final Kamehameha).",
    "speed": { "combat": "Inconmensurable+.", "reaction": "Inconmensurable+.", "travel": "Instantáneo.", "attack": "Ciega." },
    "strength": { "striking": "Clase Multiversal Bajo.", "lifting": "Clase Multiversal." },
    "durability": "Nivel Multiversal Bajo. Resistió el rayo absoluto de Zamasu sin pestañear (Manga).",
    "stamina": "Muy Baja. El poder del Blue agota el tiempo límite de los Pothala en menos de 5 minutos reales.",
    "battleIQ": "Perfecto. Burla al enemigo y va directo a matar cuando debe (su arrogancia en Super es más estratégica que en Z).",
    "haxTags": [ "Fusión Pothala (Límite Mortal de 1 Hora/Reducido)", "Espada de Espíritu Divina", "Inmunidad a Corrupción" ],
    "arsenal": {
      "basicAttacks": "Golpes pesados sin siquiera esforzarse, bloqueos perfectos cruzado de brazos.",
      "superAttacks": [
        { "name": "Espada de Espíritu (Spirit Sword Blue)", "desc": "Corta la inmortalidad temporalmente o secciona extremidades divinas en instantes.", "cost": "20% Ki Divino" },
        { "name": "Big Bang Attack", "desc": "Variante rápida.", "cost": "10% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Final Kamehameha", "desc": "Su técnica magna suprema, disparando una onda que mezcla toda su aura. El poder era tan inmenso que (en el anime) agotó instantáneamente la fusión al dispararlo.", "cost": "80% Ki Divino / Desfusión" }
      ],
      "passives": [
        { "name": "Inmunidad a la Maldición Inmortal", "desc": "Sus golpes físicos o Ki dañan severamente la materia oscura/inmortal (como la mitad corrompida de Zamasu).", "cost": "Pasivo táctico" }
      ]
    },
    "forms": [ 
      { "id": "vegetto-base-dbs", "name": "Vegetto Base", "stats": "Nivel Universal+ (Manga). Suficiente para presionar a deidades menores." },
      { "id": "vegetto-ssj-dbs", "name": "Super Saiyan", "stats": "Nivel Multiversal Bajo (Menor)." },
      { "id": "vegetto-blue", "name": "Super Saiyan Blue", "stats": "Nivel Multiversal Bajo. Aura divina azul brillante inigualable, confianza absoluta." }
    ],
    "feats": [ "Arrancó el brazo de Zamasu Dios Inmortal.", "Lanzó el Final Kamehameha más destructivo registrado antes del Torneo del Poder." ],
    "psychology": "Más enfocado que en Z, sabe que no puede jugar por el límite de tiempo y se desespera al final para asegurar el remate.",
    "weaknesses": "Retcon estricto: Una fusión mortal Pothala dura 1 hora. Si usa un ataque colosal de Ki Divino (Final Kamehameha), se des-fusiona inmediatamente."
  },
  // 5. GOGETA BLUE (PATCH FORMS)
  {
    "id": "gogeta-blue-dragon-ball-super-456",
    "name": "Gogeta (Saga Super)",
    "alias": "La Fusión Metamoru Definitiva",
    "universe": "Dragon Ball Super",
    "saga": "Película: Broly",
    "version": "Super Saiyan Blue",
    "tier": "Tier 2-C | Nivel Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo (Extremo). El pináculo de la danza de la fusión moderna. Tras fallar dos veces y esperar una hora, Gogeta apareció y desmanteló por completo al Super Saiyan Full Power de Broly. A diferencia de Vegetto, el SSJ Blue de Gogeta no acortó los 30 minutos de la técnica, permitiéndole pelear y lanzar ataques destructores de dimensiones a voluntad.",
    "range": "Multiversal (Castigador de Almas, Meteor Explosion).",
    "speed": { "combat": "Inconmensurable+.", "reaction": "Inconmensurable+.", "travel": "Instantáneo.", "attack": "Perfección coreográfica." },
    "strength": { "striking": "Clase Multiversal Bajo.", "lifting": "Clase Multiversal." },
    "durability": "Nivel Multiversal Bajo. Ni un solo rasguño en todo el combate contra Broly FP.",
    "stamina": "Fija en 30 minutos, pero estable y letal.",
    "battleIQ": "Pragmatismo absoluto de Gogeta combinado con la emoción guerrera de Goku. No habla, solo aniquila.",
    "haxTags": [ "Fusión Metamoru Estable (30 mins reales)", "Lluvia de Polvo Estelar", "Ruptura Dimensional Activa" ],
    "arsenal": {
      "basicAttacks": "Golpes fluidos que parecen danzas, bloqueo de embestidas con una mano.",
      "superAttacks": [
        { "name": "Stardust Fall (Lluvia de Polvo Estelar)", "desc": "Arroja cientos de ráfagas azules como una cascada ineludible que entierran al rival.", "cost": "25% Ki Divino" },
        { "name": "Castigador de Almas (Stardust Breaker)", "desc": "Su clásica esfera arcoíris. Aunque Broly no era 'maligno' para que lo desintegrara, el poder físico explosivo del ataque le causó daño crítico.", "cost": "30% Ki Divino" }
      ],
      "ultimateAttacks": [
        { "name": "Meteor Explosion (Estallido de Ki Interno) + Kamehameha", "desc": "Atraviesa al rival, libera una torre de fuego azul desde el suelo empujando a Broly a las estrellas, y remata con un Ultimate Kamehameha diseñado a matar al 100%.", "cost": "60% Ki Divino" }
      ],
      "passives": [
        { "name": "Fluidez Intocable", "desc": "Esquiva y bloquea pasivamente los ataques de fuerza bruta ciega devolviendo el doble de daño (Counter perfecto de Berserkers).", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ 
      { "id": "gogeta-base-dbs", "name": "Gogeta Base", "stats": "Nivel Universal+. Evadió todos los ataques de Broly SSJ sin sudar." },
      { "id": "gogeta-ssj-dbs", "name": "Super Saiyan", "stats": "Nivel Multiversal Bajo (Menor). Aura dorada masiva." },
      { "id": "gogeta-blue-dbs", "name": "Super Saiyan Blue", "stats": "Nivel Multiversal Bajo. Aura divina hiper-luminosa." }
    ],
    "feats": [ "Atravesó dimensiones paralelas peleando contra Broly.", "Dominó de principio a fin a un mutante que humilló al SSJ Blue y Frieza Golden." ],
    "psychology": "Mucho más sádico de lo que parece; al ver que Broly iba a destruir la Tierra si no lo frenaba, sonrió y cargó el Kamehameha con pura intención de matarlo, demostrando el pragmatismo frío de Vegeta.",
    "weaknesses": "Límite de tiempo estricto de 30 minutos de la Danza."
  },
  // 6. ORANGE PICCOLO (PATCH FORMS)
  {
    "id": "piccolo-orange-dbs-hero-po001",
    "name": "Piccolo",
    "alias": "El Namekiano Anaranjado",
    "universe": "Dragon Ball Super",
    "saga": "Super Hero",
    "version": "Forma Naranja (Deseo Potenciado)",
    "tier": "Tier 2-C | Nivel Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. Al pedirle a Shenron liberar su potencial oculto, el dragón incluyó un 'bonus'. El Piccolo Naranja (Orange Piccolo) escala al nivel de Goku Blue / Goku UI Señal según Toriyama. Sometió a Gamma 2 de un solo puñetazo, quien estaba al nivel de Goku/Vegeta en la saga de Moro, y combatió cuerpo a cuerpo contra el colosal Cell Max.",
    "range": "Planetario.",
    "speed": { "combat": "Inconmensurable.", "reaction": "Inconmensurable.", "travel": "MFTL+.", "attack": "Pesada y destructiva." },
    "strength": { "striking": "Clase Multiversal Bajo.", "lifting": "Clase Multiversal (Forma Gigante)." },
    "durability": "Nivel Multiversal Bajo. Su piel naranja se vuelve gruesa como el acero cósmico, ignorando por completo los ataques desesperados de Gamma 2.",
    "stamina": "Muy Alta. Usa la energía latente Namekiana antigua.",
    "battleIQ": "El mejor cerebro táctico de los Guerreros Z, guiando a Gohan en la batalla.",
    "haxTags": [ "Bonus del Dragón (Piel Naranja)", "Gigantificación Divina", "Regeneración Avanzada" ],
    "arsenal": {
      "basicAttacks": "Manotazos pesados que tiran oponentes al suelo, rodillazos.",
      "superAttacks": [
        { "name": "Brazos Elásticos Múltiples", "desc": "Atrapa extremidades gigantes (como Cell Max) para inmovilizarlas.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Apoyo Definitivo (Sacrificio Namekiano)", "desc": "Se lanza en su forma gigante para inmovilizar al enemigo jefe absoluto por un turno completo, recibiendo daño letal mientras Gohan prepara el Makankosappo.", "cost": "90% HP" }
      ],
      "passives": [
        { "name": "Piel del Árbol de Ajisa", "desc": "Absorbe pasivamente el daño de ataques físicos menores sin retroceder ni un milímetro.", "cost": "Pasivo defensivo" }
      ]
    },
    "forms": [ 
      { "id": "piccolo-dbs-base", "name": "Piccolo Base", "stats": "Nivel Sistema Solar. Su poder estancado antes del deseo." },
      { "id": "piccolo-potencial", "name": "Potencial Desatado (Ultimate)", "stats": "Nivel Universal+. Piel verde lima lisa, sin arrugas, superior a Gohan Místico antiguo." },
      { "id": "piccolo-orange", "name": "Orange Piccolo", "stats": "Nivel Multiversal Bajo. Piel naranja gruesa, musculatura monstruosa, mandíbula cuadrada, ojos rojos." },
      { "id": "piccolo-orange-giant", "name": "Orange Piccolo Gigante", "stats": "Nivel Multiversal Bajo (Alto en fuerza física). Tamaño Kaiju para enfrentar a Cell Max." }
    ],
    "feats": [ "Ignoró el puñetazo al máximo poder de Gamma 2 (Nivel God/Blue).", "Detuvo a Cell Max con vida el tiempo suficiente para Gohan Bestia." ],
    "psychology": "El verdadero padre/abuelo del equipo. Ha dejado de lado su orgullo Namekiano para hacer cualquier cosa (incluso infiltrarse o pedir deseos mágicos) por proteger a la familia de Gohan y a Pan.",
    "weaknesses": "Su velocidad y maniobrabilidad bajan mucho en forma gigante."
  },
  // 7. TRUNKS DEL FUTURO (DBS) (PATCH FORMS)
  {
    "id": "trunks-del-futuro-saga-super-dragon-ball-super-626",
    "name": "Trunks del Futuro",
    "alias": "El Salvador del Futuro",
    "universe": "Dragon Ball Super",
    "saga": "Saga de Goku Black",
    "version": "Super Saiyan Rage / Espada de la Esperanza",
    "tier": "Tier 3-A a 2-C | Nivel Universal a Multiversal Bajo",
    "ap": "Nivel Universal (Rage). Llevado al límite por la desesperación de ver su mundo destruido de nuevo por Zamasu y Black, Trunks absorbió poder divino residual rompiendo la barrera del SSJ2. En su forma 'Ira' (Rage), luchó simultáneamente contra Black Rosé y Zamasu Inmortal, aguantando embates que mataban a Dioses. Su técnica final corta seres inmortales reuniendo la energía de los supervivientes.",
    "range": "Universal (Final Flash).",
    "speed": { "combat": "Inconmensurable.", "reaction": "Inconmensurable.", "travel": "MFTL+.", "attack": "Cortes implacables." },
    "strength": { "striking": "Clase Universal.", "lifting": "Clase Estelar." },
    "durability": "Nivel Multiversal Bajo. Resistió palizas de dioses con regeneración por puras ganas de no morir y salvar a Mai.",
    "stamina": "Heroica. Pelea herido, cansado y sin Ki durante días enteros.",
    "battleIQ": "Pragmático. No juega con sus enemigos, va a matarlos (a diferencia de Goku y Vegeta).",
    "haxTags": [ "Mutación de Furia (Rage Form)", "Espada de la Esperanza (Genkidama Cortante)", "Mafuba Robado" ],
    "arsenal": {
      "basicAttacks": "Cortes desesperados de espada pesada, ráfagas cortas cuerpo a cuerpo.",
      "superAttacks": [
        { "name": "Galick Gun Padre e Hijo", "desc": "Dispara el ataque junto a Vegeta para repeler ráfagas de dioses.", "cost": "20% Ki" },
        { "name": "Mafuba (Sellado)", "desc": "Copió la técnica con solo verla un par de veces en un video, sellando temporalmente a Zamasu Inmortal.", "cost": "15% Ki (Requiere Jarra)" }
      ],
      "ultimateAttacks": [
        { "name": "Espada de la Esperanza", "desc": "El remanente de la espada rota se recubre con la energía vital de todos los seres humanos supervivientes del planeta Tierra y el Ki de Goku/Vegeta. Un sable luminoso azul masivo que parte por la mitad (verticalmente) a la Fusión de Zamasu Dios.", "cost": "Todo el Ki de los Humanos" }
      ],
      "passives": [
        { "name": "Defensor del Pueblo", "desc": "Su resistencia y AP suben por cada aliado caído o sufriendo en su línea temporal.", "cost": "Buff Pasivo de Héroe" }
      ]
    },
    "forms": [ 
      { "id": "trunks-base-dbs", "name": "Estado Base", "stats": "Nivel Sistema Solar. Ropa rota, bufanda roja." },
      { "id": "trunks-ssj2-dbs", "name": "Super Saiyan 2", "stats": "Nivel Universal. Llevó su SSJ2 al máximo, rivalizando con Goku SSJ3 al instante." },
      { "id": "trunks-rage", "name": "Super Saiyan Rage (Ira)", "stats": "Nivel Universal Alto. Pelo rubio erizado como SSJ2, pupilas desaparecidas temporalmente, aura azul divina recubriendo el aura dorada Saiyan." }
    ],
    "feats": [ "Partió en dos a la Fusión de Zamasu mutado.", "Entrenó en soledad logrando un nivel paralelo al Ki divino." ],
    "psychology": "Un hombre atormentado con estrés postraumático severo (PTSD). Lucha por una paz que siempre le arrebatan de las manos. Su bondad es su mayor fortaleza.",
    "weaknesses": "Dependencia emocional hacia los supervivientes. La Espada de la Esperanza requiere tiempo y donación pasiva de energía."
  },
  // 8. ZAMASU INMORTAL (PATCH FORMS)
  {
    "id": "zamasu-l-nea-temporal-futura-736",
    "name": "Zamasu (Futuro)",
    "alias": "El Dios Inmortal / El Juicio de la Justicia",
    "universe": "Dragon Ball Super",
    "saga": "Saga de Goku Black",
    "version": "Zamasu Inmortal / Fusión Zamasu",
    "tier": "Tier 3-A a 2-C | Nivel Universal a Multiversal Bajo",
    "ap": "Nivel Universal (Solo) a Multiversal Bajo (Fusión). Zamasu robó las Super Dragon Balls para hacerse totalmente inmortal. Físicamente es el más débil de la saga, pero su inmortalidad lo hace el tanque supremo. Al fusionarse con Goku Black, nace Zamasu Fusionado, un Dios Absoluto capaz de corromper universos, pero cuya inmortalidad queda corrompida por la sangre mortal del cuerpo de Black.",
    "range": "Universal a Multiversal.",
    "speed": { "combat": "MFTL.", "reaction": "MFTL.", "travel": "MFTL+.", "attack": "Veloz." },
    "strength": { "striking": "Clase Universal.", "lifting": "Clase Estelar." },
    "durability": "Absoluta (Inmortal Zamasu) a Multiversal Bajo Corrompido (Fusión). Regenera heridas mortales en un segundo.",
    "stamina": "Infinita Absoluta.",
    "battleIQ": "Combate como un escudero de Black, sabiendo que no puede morir y recibiendo ataques por la espalda para contraatacar. Fusionado se vuelve un ególatra suicida.",
    "haxTags": [ "Inmortalidad Verdadera (Super Shenron)", "Láseres de la Justicia (Juicio)", "Fusión Pothala Semi-Inmortal", "Aura Divina (Halo)" ],
    "arsenal": {
      "basicAttacks": "Hojas de Ki púrpura que actúan como cuchillas de mano.",
      "superAttacks": [
        { "name": "Hoja del Juicio", "desc": "Cientos de lanzas de fuego rojo/rosa que persiguen al enemigo.", "cost": "20% Ki Divino" },
        { "name": "Luz de la Absolución", "desc": "Rayo masivo púrpura desde el Halo divino en su espalda.", "cost": "30% Ki Divino" }
      ],
      "ultimateAttacks": [
        { "name": "Ira Divina (Holy Wrath)", "desc": "Fusionado, concentra un sol colosal que destruye todo en el planeta, rivalizando contra el Galick Gun Padre e Hijo.", "cost": "60% Ki Divino" }
      ],
      "passives": [
        { "name": "Regeneración / Mutación", "desc": "Base: Regenera 100% de daño siempre. Fusionado: Al recibir daño letal, su mitad mortal muere, pudriendo su brazo y cara y transformándolo en un monstruo gigante inestable.", "cost": "Mecánica de Inmortalidad" }
      ]
    },
    "forms": [ 
      { "id": "zamasu-inmortal", "name": "Zamasu (Inmortal)", "stats": "Nivel Universal (Bajo). Aspecto Kaioshin verde clásico, arrogancia pura, sirve como tanque infinito." },
      { "id": "zamasu-fusionado", "name": "Fusión Zamasu", "stats": "Nivel Multiversal Bajo. Halo de luz blanca, cabello blanco en punta, divinidad y fuerza bruta combinada." },
      { "id": "zamasu-mutado", "name": "Zamasu (Mitad Corrupta)", "stats": "Nivel Multiversal Bajo. Brazo morado gigante, cara derretida por el Kamehameha de Goku. Fuerza colosal pero lento." }
    ],
    "feats": [ "Soportó ataques letales ininterrumpidos y atravesó a Goku.", "Al morir físicamente, se convirtió en el mismísimo universo y líneas de tiempo (Infinite Zamasu)." ],
    "psychology": "Narcisista genocida, acomplejado, llora de emoción alabar su propia belleza y concepto retorcido de 'justicia'. Un villano profundamente loco.",
    "weaknesses": "El Mafuba (Sellado). Su fusión con un mortal lo hizo vulnerable al daño letal (Paradoja mortal)."
  },
  // 9. MAESTRO ROSHI (PATCH FORMS)
  {
    "id": "maestro-roshi-jackie-chun-dragon-ball-cl-sico-224",
    "name": "Maestro Roshi",
    "alias": "El Dios de las Artes Marciales / Jackie Chun",
    "universe": "Dragon Ball (Clásico / Super)",
    "saga": "Clásico / Torneo del Poder",
    "version": "Maestro Veterano",
    "tier": "Tier 5-C a 4-C | Nivel Lunar a Estrella Enana (Por técnicas de Super)",
    "ap": "Nivel Lunar (Físico) a Estrella Enana (Técnicas/Hax). El maestro original. En Super, Roshi demostró que la experiencia, las técnicas raras y esquivar pacíficamente superan a la fuerza bruta. Humilló a varios enemigos del U4 usando ilusiones, sellos (Mafuba) y un 'Pseudo-Ultra Instinto' que le permitió esquivar ataques de Jiren temporalmente (en el manga).",
    "range": "Físico y Dimensional (Mafuba).",
    "speed": { "combat": "FTL (Por lectura corporal y engaños).", "reaction": "MFTL (Pseudo-UI).", "travel": "Atlética.", "attack": "Técnica fluida." },
    "strength": { "striking": "Clase Ciudad a Lunar (Max Power).", "lifting": "Clase Fuerte." },
    "durability": "Nivel Lunar. Extremadamente frágil en DBS frente a Dioses, compensando esto sin recibir golpes.",
    "stamina": "Muy Baja por la vejez; usar técnicas le cuesta fuerza vital o le da paros cardíacos.",
    "battleIQ": "Supremo. Entiende la base de las artes marciales mejor que los dioses. 300 años de experiencia.",
    "haxTags": [ "Mafuba (Sellado Absoluto)", "Hipnosis / Ilusiones de Trueno", "Movimiento Subconsciente (Manga)", "Kamehameha Máximo" ],
    "arsenal": {
      "basicAttacks": "Golpes de grulla y tortuga, uso de bastón, leer la respiración del enemigo.",
      "superAttacks": [
        { "name": "Técnica del Banco / Hipnosis", "desc": "Crea ilusiones de sí mismo o duerme al oponente cantando o moviendo sus manos.", "cost": "10% Ki Mágico" },
        { "name": "Mafuba (Oleada de Contención del Mal)", "desc": "Atrapa a oponentes (Incluso los inmortales o más fuertes como Frost o Vegeta SSB) en un frasco, sellándolos eternamente. Puede causarle la muerte por sobreesfuerzo.", "cost": "60% Vida/Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Max Power Kamehameha", "desc": "Se infla de esteroides naturales a un tamaño musculoso enorme y dispara el Kamehameha que destruyó la Luna en Dragon Ball clásico.", "cost": "50% Ki" }
      ],
      "passives": [
        { "name": "Paz Mental (Manga)", "desc": "Esquiva automáticamente múltiples ataques de enemigos Tier superior al leer las contracciones de su Ki puro sin pensar, simulando el Ultra Instinto.", "cost": "Pasivo temporal" }
      ]
    },
    "forms": [ 
      { "id": "roshi-base", "name": "Viejo Maestro", "stats": "Nivel Multi-Bloque a Ciudad. Viejo verde, caparazón tortuga, bastón, gafas de sol." },
      { "id": "roshi-max", "name": "Max Power (100%)", "stats": "Nivel Lunar. Músculos hiper-inflados, rompe su camiseta. Uso para Kamehamehas destructivos." }
    ],
    "feats": [ "Sometió y derrotó a 3 guerreros del U4 él solo.", "Esquivó puñetazos de Jiren (Manga) para darle una lección a Goku.", "Sobrevivió a usar el Mafuba múltiples veces a pesar de la vejez." ],
    "psychology": "Un pervertido gracioso que en los momentos críticos se convierte en la mayor voz de sabiduría y heroísmo del universo entero.",
    "weaknesses": "Fragilidad física extrema; problemas cardíacos por la edad; debilidad crónica por revistas de mujeres hermosas (Aunque lo superó en DBS)."
  },
  // 10. BROLY Z (PATCH FORMS)
  {
    "id": "broly-dbz-pel-culas-dbz-toei-822",
    "name": "Broly (Z)",
    "alias": "El Legendario Super Saiyan",
    "universe": "Dragon Ball Z (Toei)",
    "saga": "Película 8: El Poder Invencible",
    "version": "Forma Legendaria Clásica",
    "tier": "Tier 4-B | Nivel Sistema Solar",
    "ap": "Nivel Sistema Solar. La versión clásica de las películas de los 90. Un mutante sádico cuyo poder de Ki desbordaba su cuerpo pasivamente de forma ilimitada y aumentaba con los minutos. Humilló y jugó con Gohan SSJ1, Trunks SSJ1, Vegeta SSJ1 y Piccolo al mismo tiempo, aplastando sus cabezas y destrozando planetas de una ráfaga por pura diversión.",
    "range": "Sistema Solar (Omega Blaster).",
    "speed": { "combat": "MFTL.", "reaction": "MFTL.", "travel": "MFTL.", "attack": "Pesado y Ciego." },
    "strength": { "striking": "Clase Sistema Solar (Su ropa interior, el infame 'Lariat' destroza costillas de SSJ).", "lifting": "Clase Estelar." },
    "durability": "Nivel Sistema Solar. En esta película los ataques de Vegeta, Goku y Piccolo no lo movían ni un milímetro, tanqueándoselos con la cara y riéndose.",
    "stamina": "Infinita Absoluta. De hecho, tiene el problema inverso: produce demasiado Ki y debe liberarlo mediante explosiones o su cuerpo revienta.",
    "battleIQ": "Sádico puro. No usa tácticas, juega con ellos pisoteando sus cabezas o estampándolos en muros de hielo.",
    "haxTags": [ "Generación de Ki Pasiva Ilimitada", "Inmunidad al Dolor Z", "Furia por el Llanto" ],
    "arsenal": {
      "basicAttacks": "Lariat (Ataque de lazo), arrastrar por paredes, pisotón rompecráneos, agarre por la cara.",
      "superAttacks": [
        { "name": "Eraser Cannon", "desc": "Esferas de Ki verde manzana. Parecen pequeñas pero al lanzarlas destruyen ciudades y planetas enteros con impacto retardado.", "cost": "5% Ki (Le sobra)" }
      ],
      "ultimateAttacks": [
        { "name": "Omega Blaster", "desc": "Crea una pequeña esfera de luz verde que se expande volviéndose un sol colosal radiactivo ineludible que borra el Sistema Sur entero.", "cost": "20% Ki (Debe expulsarlo para no morir)" }
      ],
      "passives": [
        { "name": "Desbordamiento Legendario", "desc": "Recupera todo el Ki gastado instantáneamente; si no lanza ráfagas de vez en cuando, explota por la presión de energía.", "cost": "Pasivo crítico" }
      ]
    },
    "forms": [ 
      { "id": "broly-z-restringido", "name": "SSJ Restringido", "stats": "Nivel Estrella Enana. Pelo azul/morado, corona dorada de control en la frente, mirada perdida, cuerpo esbelto." },
      { "id": "broly-z-lssj", "name": "Legendario Super Saiyan", "stats": "Nivel Sistema Solar. Músculos gigantescos a punto de estallar, pelo amarillo verdoso, sin pupilas, sonrisa maníaca malvada y joyería dorada." }
    ],
    "feats": [ "Tankeo absoluto y literal: Caminó recibiendo el Kamehameha de Goku SSJ a quemarropa sin inmutarse.", "Destruyó la galaxia del Sur él solo a lo largo del tiempo." ],
    "psychology": "Un genocida demente y sádico, traumado por el llanto de Goku de bebé. Disfruta genuinamente torturando y masacrando; carece de toda la bondad de su contraparte de Super.",
    "weaknesses": "Acumular demasiado Ki. Si logran canalizar toda la energía de varios guerreros en un solo golpe crítico milagroso al punto donde concentra el poder (estómago), su propio exceso de Ki lo hace reventar de adentro hacia afuera."
  },
  // 11. KRILIN (PATCH FORMS)
  {
    "id": "krilin-dragon-ball-cl-sico-802",
    "name": "Krilin",
    "alias": "El Terrestre Más Fuerte",
    "universe": "Dragon Ball (Z / Super)",
    "saga": "Supervivencia Universal",
    "version": "Humano Veterano (Despertar del Orgullo)",
    "tier": "Tier 4-C | Nivel Estrella Enana",
    "ap": "Nivel Estrella Enana (En DBS). Krilin superó sus traumas del pasado y, aunque su poder base como humano tiene límites estrictos, su arsenal de técnicas letales y ciegas lo hacen extremadamente peligroso para oponentes confiados. En DBS combatió tácticas sucias de Gohan, detuvo con astucia a guerreros del U4 y usó el Taiyoken x100 para evadir combates directos con monstruos estelares.",
    "range": "Sistema Solar Menor (Kienzan en el espacio).",
    "speed": { "combat": "FTL.", "reaction": "FTL.", "travel": "FTL.", "attack": "Velocidad de técnica engañosa." },
    "strength": { "striking": "Clase Estrella Enana.", "lifting": "Clase Montañas." },
    "durability": "Nivel Estrella Enana. Siempre suele salir herido, su especialidad no es la defensa.",
    "stamina": "Alta. Sabe gestionar bien su respiración gracias al entrenamiento original de Roshi.",
    "battleIQ": "El mejor luchador de soporte del equipo. Usa reflejos de Ki, distracciones visuales y terreno para incapacitar o sacar del ring (en torneos) a oponentes diez veces más fuertes.",
    "haxTags": [ "Kienzan (Corte Físico Definitivo Ignora Defensa)", "Ceguera Absoluta Temporal (Taiyoken)", "Dispersión de Ki" ],
    "arsenal": {
      "basicAttacks": "Golpes básicos humanos complementados con evasivas acrobáticas y engaños de movimiento.",
      "superAttacks": [
        { "name": "Taiyoken x100 (Golpe de Sol)", "desc": "Una luz cegadora tan brillante que no solo bloquea los ojos, sino que cierra los párpados de forma refleja y ciega los sentidos de KI del enemigo durante segundos vitales.", "cost": "15% Ki" },
        { "name": "Kienzan Múltiple", "desc": "Lanza varios discos destructores amarillos que cortan virtualmente CUALQUIER armadura que no posea una brecha dimensional de poder insalvable.", "cost": "25% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Kamehameha Disperso", "desc": "Carga un gran Kamehameha y lo separa en decenas de proyectiles menores que caen como lluvia, ideal para enemigos múltiples o limpiar arena.", "cost": "40% Ki" }
      ],
      "passives": [
        { "name": "Valentía del Débil", "desc": "A pesar de temblar de miedo, nunca huye. Si Androide 18 está cerca o en peligro, su AP y Evasión aumentan dramáticamente.", "cost": "Pasivo táctico" }
      ]
    },
    "forms": [ 
      { "id": "krilin-base", "name": "Monje Policía", "stats": "Nivel Estrella Enana. Traje policial o dogi naranja, pelo rapado o crecido. Físicamente humano estándar superior." },
      { "id": "krilin-no-ego", "name": "Estado de No-Ego (DBS)", "stats": "Nivel Estrella Enana Alto. Supera sus traumas del Bosque del Terror, rodeado de un aura transparente y calmada." }
    ],
    "feats": [ "Sobrevivió en Namek, casi cortó en dos a Nappa y Freezer Segunda Forma.", "Venció a peleadores del Torneo del Poder que superaban el nivel de SSJ1 mediante el uso de olores asquerosos e ingenio." ],
    "psychology": "Un hombre noble, a menudo el alivio cómico por sus muertes pasadas, pero es el mejor amigo de Goku. Extremadamente sensato y realista.",
    "weaknesses": "Trauma latente que a veces lo paraliza al principio de batallas letales; poder bruto ínfimo comparado con los Dioses."
  }
];

const filePath = path.resolve(__dirname, '../src/data/characters.js');
let content = fs.readFileSync(filePath, 'utf8');

const prefix = 'export const INITIAL_CHARACTERS = ';
const currentList = eval(content.replace(prefix, ''));
console.log(`Current characters count: ${currentList.length}`);

let updatedCount = 0;
batch15Upgrades.forEach(upgrade => {
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

console.log(`Batch 15 Upgrade Complete. ${updatedCount} characters successfully enhanced. MULTIPLE FORMS PATCHED FOR DBS ICONS.`);
