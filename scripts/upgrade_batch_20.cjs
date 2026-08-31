const fs = require('fs');
const path = require('path');

const batch20Upgrades = [
  // 1. GOJO SATORU
  {
    "id": "gojo-satoru-jjk-peak-gs001",
    "name": "Gojo Satoru",
    "alias": "El Hechicero Más Fuerte de la Era Moderna",
    "universe": "Jujutsu Kaisen",
    "saga": "Incidente de Shibuya / Batalla de Shinjuku",
    "version": "Pico de Poder (Seis Ojos + Ilimitado)",
    "tier": "Tier 7-A a 6-C | Nivel Montaña a Isla",
    "ap": "Nivel Isla (Púrpura Hueco 200%). Su técnica Ilimitada manipula el concepto matemático del infinito a nivel atómico. Con Azul atrae el espacio como un agujero negro, con Rojo repele con el doble de fuerza, y con Púrpura Hueco fusiona ambos creando una masa virtual que borra y colapsa la materia a su paso. Su Expansión de Dominio sobrecarga cerebros con información infinita.",
    "range": "Varios kilómetros (Púrpura a distancia y Dominio).",
    "speed": { "combat": "Hipersónica+ a Masivamente Hipersónica (Teletransporte espacial).", "reaction": "Masivamente Hipersónica (Seis Ojos).", "travel": "Instantáneo (Compresión de espacio).", "attack": "Velocidad de onda espacial." },
    "strength": { "striking": "Clase Montaña (Puñetazos reforzados con Azul que desgarran órganos internos).", "lifting": "Clase 100+ Toneladas." },
    "durability": "Intocable (Infinito Pasivo). Los ataques enemigos se ralentizan infinitamente antes de tocar su piel.",
    "stamina": "Infinita de forma práctica (Los Seis Ojos reducen el gasto de Energía Maldita a un nivel infinitesimal).",
    "battleIQ": "Genio prodigio absoluto; improvisa reactivaciones de Dominio destruyendo y curando su propia corteza cerebral con Técnica Maldita Inversa.",
    "haxTags": [ "Infinito Pasivo (Filtro Automático a Nivel Atómico)", "Seis Ojos (Visión Cuántica de Energía)", "Púrpura Hueco (Masa Virtual)", "Expansión de Dominio: Vacío Inconmensurable (Parálisis Cerebral Infinita)" ],
    "arsenal": {
      "basicAttacks": "Golpes cuerpo a cuerpo imbuidos en Azul que absorben y atraen el cuerpo del rival a los nudillos.",
      "superAttacks": [
        { "name": "Azul (Rotación Hacia Adelante)", "desc": "Crea un vacío espacial que succiona edificios y oponentes con fuerza gravitacional masiva.", "cost": "5% Energía" },
        { "name": "Rojo (Rotación Inversa)", "desc": "Genera una divergencia espacial que expulsa una onda de choque expansiva de doble potencia.", "cost": "10% Energía" }
      ],
      "ultimateAttacks": [
        { "name": "Púrpura Hueco (Masa Virtual Colapsante)", "desc": "Colisiona el Azul y el Rojo creando una singularidad de masa imaginaria que arrasa y desintegra todo en su trayectoria.", "cost": "30% Energía" },
        { "name": "Expansión de Dominio: Vacío Inconmensurable (Muryokusho)", "desc": "Encierra al objetivo en el interior del Ilimitado, inundando su cerebro con estímulos e información infinitos en 0.2 segundos, dejándolo en estado vegetativo completo.", "cost": "40% Energía" }
      ],
      "passives": [
        { "name": "Barrera del Infinito", "desc": "Ningún ataque físico, proyectil o ráfaga de Ki/Energía sin propiedades de anulación espacial o corte de existencia puede tocar su cuerpo.", "cost": "Defensa Pasiva Absoluta" },
        { "name": "Técnica Maldita Inversa Automática", "desc": "Regenera extremidades amputadas y fatiga cerebral en tiempo real de forma pasiva.", "cost": "Regeneración Continua" }
      ]
    },
    "forms": [ 
      { "id": "gojo-profesor", "name": "Gojo Satoru (Venda/Gafas)", "stats": "Nivel Montaña. Traje negro de Jujutsu High, venda en los ojos, actitud arrogante y relajada." },
      { "id": "gojo-shinjuku", "name": "Gojo (Ojos Descubiertos / Pico)", "stats": "Nivel Isla. Camiseta ajustada negra, mirada azul celestial profunda, 100% enfocado en matar." }
    ],
    "feats": [ "Sometió a Sukuna en combate cuerpo a cuerpo durante la Batalla de Shinjuku.", "Activó una Expansión de Dominio de 0.2 segundos que neutralizó a cientos de humanos y maldiciones de grado especial." ],
    "psychology": "El pináculo de la soledad en la cima; arrogante, bromista y protector de sus alumnos, pero con una sed insaciable de un rival digno.",
    "weaknesses": "Ataques que corten el espacio mismo (como el Corte que Divide el Mundo de Sukuna), anulación de técnicas (Lanza Celestial Invertida / Dominio Simple) y sellos dimensionales específicos (Prisión Confinadora)."
  },
  // 2. RYOMEN SUKUNA
  {
    "id": "sukuna-ryomen-jjk-20sellos-s001",
    "name": "Ryomen Sukuna",
    "alias": "El Rey de las Maldiciones / La Calamidad",
    "universe": "Jujutsu Kaisen",
    "saga": "Era Heian / Batalla de Shinjuku",
    "version": "Forma Verdadera (4 Brazos / 20 Dedos)",
    "tier": "Tier 7-A a 6-C | Nivel Montaña a Isla",
    "ap": "Nivel Isla (Corte Espacial / Fuga). El ser más temido en la historia del Jujutsu. Domina el Desmantelar (cortes continuos a materia inanimada) y Hender (cortes adaptados a la resistencia del objetivo). Tras adaptar la técnica de Mahoraga, aprendió el 'Corte que Divide el Mundo' (World Cutting Slash), un tajo que corta el propio tejido del espacio y la existencia ignorando la durabilidad.",
    "range": "Cientos de metros a Kilómetros (Santuario Malevolente de 200m de radio sin barrera).",
    "speed": { "combat": "Masivamente Hipersónica.", "reaction": "Masivamente Hipersónica.", "travel": "Masivamente Hipersónica.", "attack": "Cortes invisibles a la velocidad del sonido/luz." },
    "strength": { "striking": "Clase Montaña (4 brazos reforzados con Energía Maldita bruta).", "lifting": "Clase 100+ Toneladas." },
    "durability": "Nivel Isla. Regeneración extrema con Técnica Maldita Inversa, capaz de sobrevivir sin corazón biológico latiendo.",
    "stamina": "Inmensa (Posee más del doble de energía maldita que Yuta Okkotsu).",
    "battleIQ": "El mayor genio marcial de la historia; aprende técnicas divinas con solo verlas una vez.",
    "haxTags": [ "Corte que Divide el Mundo (Ignora Durabilidad / Corta el Espacio)", "Expansión de Dominio Abierta: Santuario Malevolente", "Llamas Divinas: Fuga (Flecha de Fuego Termobárica)", "Cuerpo Verdadero de 4 Brazos y 2 Bocas" ],
    "arsenal": {
      "basicAttacks": "Cortes invisibles a distancia, combate de 4 brazos bloqueando y contraatacando simultáneamente.",
      "superAttacks": [
        { "name": "Desmantelar y Hender", "desc": "Lanza tajos invisibles que seccionan extremidades y se adaptan a la dureza del rival.", "cost": "5% Energía" },
        { "name": "Flecha de Fuego (Fuga / Horno)", "desc": "Tras saturar el aire con polvo cortado por su Dominio, abre una caja negra y dispara una flecha de fuego que causa una explosión termobárica masiva que calcina ciudades.", "cost": "25% Energía" }
      ],
      "ultimateAttacks": [
        { "name": "Expansión de Dominio: Santuario Malevolente (Fukuma Mizushi)", "desc": "Dominio divino sin barrera que se extiende hasta 200 metros a la redonda, sometiendo a todo lo que esté dentro a una tormenta incesante de miles de cortes por segundo.", "cost": "35% Energía" },
        { "name": "Corte que Corta el Mundo (World Slash)", "desc": "Amplía el objetivo de su técnica para cortar el espacio mismo donde existe el rival, partiendo en dos a seres invulnerables (como Gojo Satoru).", "cost": "45% Energía (Requiere Canto y Posición de Manos)" }
      ],
      "passives": [
        { "name": "Fisiología Heian Perfecta", "desc": "Sus 4 brazos le permiten realizar posiciones de manos y sus 2 bocas recitar cánticos continuamente sin interrumpir su respiración marcial.", "cost": "Buff Pasivo Marcial" },
        { "name": "Resistencia a Estados Alterados", "desc": "Inmune a venenos y toxinas de grado especial (es el Rey de los Venenos).", "cost": "Inmunidad Pasiva" }
      ]
    },
    "forms": [ 
      { "id": "sukuna-megumi", "name": "Sukuna (Cuerpo de Megumi)", "stats": "Nivel Montaña. Pelo oscuro desordenado, tatuajes negros, usa las Diez Sombras y a Mahoraga." },
      { "id": "sukuna-heian", "name": "Forma Verdadera (Era Heian)", "stats": "Nivel Isla. 4 brazos, 2 bocas, máscara ósea en el lado derecho, físico colosal imponente." }
    ],
    "feats": [ "Derrotó y partió en dos a Gojo Satoru.", "Aniquiló a Mahoraga y a Jogo en Shibuya arrasando distritos enteros." ],
    "psychology": "Un hedonista absoluto de la violencia; vive según su propio placer, devorando y destruyendo a quien se cruce en su camino sin el menor remordimiento moral.",
    "weaknesses": "Ataques que golpeen directamente la barrera entre su alma y el cuerpo del anfitrión (como los golpes de Yuji Itadori) o la Escalera de Jacob."
  },
  // 3. GIORNO GIOVANNA (GER)
  {
    "id": "giorno-giovanna-ger-jojo-gg001",
    "name": "Giorno Giovanna (GER)",
    "alias": "El Jefe de Passione / Portador del Réquiem",
    "universe": "JoJo's Bizarre Adventure: Golden Wind",
    "saga": "Vento Aureo",
    "version": "Gold Experience Requiem (Flecha de la Dominación)",
    "tier": "Tier 8-C Físico | Tier 2-C Hax Causal / Trascendental",
    "ap": "Nivel Multi-Bloque Físico / Nivel Multiversal Bajo (Hax de Causalidad). Su Stand atravesado por la Flecha Réquiem opera más allá del flujo temporal y dimensional. Su habilidad suprema 'Retorno a Cero' (Return to Zero) anula cualquier acción, voluntad o ataque enemigo antes de que suceda, revirtiendo la causa y el efecto. Aquel asesinado por GER entra en un bucle de muerte infinita eterna.",
    "range": "Físico / Trascendental a escala de la realidad.",
    "speed": { "combat": "Inconmensurable (Se mueve y habla dentro del tiempo borrado de King Crimson).", "reaction": "Inconmensurable.", "travel": "Humana.", "attack": "Ráfaga de golpes relámpago (Muda Muda)." },
    "strength": { "striking": "Clase Muro a Multi-Bloque (Dispara piedras a velocidad de bala capaces de destrozar edificios).", "lifting": "Clase Stand Sobrehumana." },
    "durability": "Invulnerable mediante anulación de daño causal.",
    "stamina": "Infinita (El Stand tiene voluntad propia autónoma).",
    "battleIQ": "Heredero de la brillantez estratégica de DIO y Jonathan Joestar; GER además posee consciencia cósmica independiente.",
    "haxTags": [ "Retorno a Cero (Return to Zero - Anulación Causal Absoluta)", "Bucle de Muerte Infinita", "Creación de Vida Orgánica y Reflejo de Daño" ],
    "arsenal": {
      "basicAttacks": "Ráfagas continuas de puñetazos gritando '¡MUDA MUDA MUDA!' que distorsionan la materia.",
      "superAttacks": [
        { "name": "Disparo de Piedra Viva", "desc": "Arroja un escombro imbuido de vida que atraviesa la mano del oponente y se convierte en un enjambre de escorpiones o avispas.", "cost": "0% Stand" }
      ],
      "ultimateAttacks": [
        { "name": "Retorno a Cero (Return to Zero)", "desc": "Anula por completo la causa y el efecto de cualquier ataque, habilidad divina o alteración del tiempo dirigida contra Giorno, devolviendo el estado del universo a 'Cero'.", "cost": "Defensa Causal Automática" },
        { "name": "Bucle de Muerte Infinita (Infinite Death Loop)", "desc": "Condena al oponente derrotado a morir eternamente en infinitas realidades y escenarios paralelos sin llegar jamás a la verdad de la muerte real (Como hizo con Diavolo).", "cost": "Condena Eterna" }
      ],
      "passives": [
        { "name": "Autonomía del Réquiem", "desc": "GER actúa de forma automática e independiente de la consciencia de Giorno, protegiéndolo incluso si Giorno no es consciente del ataque enemigo.", "cost": "Pasivo Defensivo Absoluto" }
      ]
    },
    "forms": [ 
      { "id": "giorno-ge", "name": "Gold Experience (Base)", "stats": "Nivel Multi-Bloque. Stand dorado clásico con mariquitas." },
      { "id": "giorno-ger", "name": "Gold Experience Requiem", "stats": "Nivel Causal Trascendental. Stand estilizado con la flecha incrustada en la frente y ojos cósmicos." }
    ],
    "feats": [ "Anuló el borrado de tiempo y la premonición absoluta de King Crimson como si nunca hubieran ocurrido.", "Condenó a Diavolo a un bucle de muertes infinitas sin fin." ],
    "psychology": "Un joven de convicción dorada inquebrantable; despiadado con los criminales que traicionan su confianza pero bondadoso con sus compañeros.",
    "weaknesses": "Su poder físico bruto destructivo (sin contar el hax de Réquiem) es comparable al de un Stand de combate estándar."
  },
  // 4. ENRICO PUCCI (MADE IN HEAVEN)
  {
    "id": "pucci-made-in-heaven-jojo-pm001",
    "name": "Enrico Pucci (Made in Heaven)",
    "alias": "El Mensajero del Destino / El Alcanzador del Cielo",
    "universe": "JoJo's Bizarre Adventure: Stone Ocean",
    "saga": "Stone Ocean",
    "version": "Made in Heaven (Aceleración Universal del Tiempo)",
    "tier": "Tier 8-C Físico | Tier 2-C a 2-A Nivel Multiversal (Reinicio Cósmico)",
    "ap": "Nivel Multi-Bloque Físico / Nivel Universal a Multiversal (Aceleración del Tiempo). Tras fusionar el Alma de DIO, el bebé verde y la gravedad de Cabo Cañaveral, despertó Made in Heaven. Puede acelerar el tiempo de todo el universo entero a velocidades infinitas, mientras él es el único ser vivo que se mueve a la par de dicha aceleración, logrando reiniciar el universo completo.",
    "range": "Universal a Multiversal.",
    "speed": { "combat": "Infinita a Inconmensurable (Acelera continuamente hasta el infinito).", "reaction": "Infinita.", "travel": "Infinita (Recorre continentes en segundos).", "attack": "Cortes a velocidad infinita que decapitan antes de que los ojos procesen la luz." },
    "strength": { "striking": "Clase Muro a Multi-Bloque (Aumentada brutalmente por la velocidad cinética infinita).", "lifting": "Clase Stand." },
    "durability": "Nivel Humano/Stand (Vulnerable a ataques que logren impactarlo físicamente).",
    "stamina": "Infinita mientras el universo se acelera.",
    "battleIQ": "Fanático calculador y estratega religioso; explota el amor paternal de Jotaro para evadir la detención del tiempo.",
    "haxTags": [ "Aceleración Temporal Infinita", "Reinicio del Universo (Nuevo Ciclo del Destino)", "Inmunidad al Destino" ],
    "arsenal": {
      "basicAttacks": "Cortes quirúrgicos con las manos a velocidad lumínica acelerada.",
      "superAttacks": [
        { "name": "Tajo Invisible de Aceleración", "desc": "Pasa al lado del enemigo cortándole el cuello antes de que su cerebro emita el impulso nervioso de reacción.", "cost": "0% Stand" }
      ],
      "ultimateAttacks": [
        { "name": "Reinicio Universal (El Fin del Tiempo)", "desc": "Acelera el cosmos hasta el fin del universo y la creación de un nuevo Big Bang, creando un nuevo mundo donde todos los humanos conocen su destino de antemano.", "cost": "Aceleración Máxima" }
      ],
      "passives": [
        { "name": "Velocidad Trascendental", "desc": "Reduce la duración relativa de técnicas de detención temporal (como Star Platinum: The World) a fracciones de segundo inutilizables.", "cost": "Counter Temporal" }
      ]
    },
    "forms": [ 
      { "id": "pucci-whitesnake", "name": "Whitesnake", "stats": "Nivel Muro. Stand de extracción de discos de memoria y Stands." },
      { "id": "pucci-cmoon", "name": "C-Moon", "stats": "Nivel Ciudad. Manipulación de gravedad y volteo de materia." },
      { "id": "pucci-mih", "name": "Made in Heaven", "stats": "Nivel Infinito / Universal. Híbrido humano-caballo alado, velocidad cósmica." }
    ],
    "feats": [ "Asesinó a Jotaro Kujo, Jolyne Cujoh, Anasui, Ermes y Weather Report.", "Reinició el universo de JoJo por completo." ],
    "psychology": "Un sacerdote fanático que cree genuinamente que llevar a la humanidad a conocer su destino es el verdadero significado de la 'Felicidad'.",
    "weaknesses": "Si se altera la composición química del aire a su alrededor (como el 100% de oxígeno puro de Emporio/Weather Report), la aceleración de su respiración lo envenena en segundos."
  },
  // 5. MUZAN KIBUTSUJI
  {
    "id": "muzan-kibutsuji-kny-901",
    "name": "Muzan Kibutsuji",
    "alias": "El Rey de los Demonios / El Progenitor",
    "universe": "Demon Slayer (Kimetsu no Yaiba)",
    "saga": "Fortaleza Dimensional Infinita / Cuenta Regresiva",
    "version": "Forma de Combate Final",
    "tier": "Tier 7-B | Nivel Ciudad",
    "ap": "Nivel Ciudad. El primer demonio y creador de todos los demás. Posee 7 corazones y 5 cerebros que cambian de posición continuamente. Sus látigos espinales y tentáculos con bocas cortan edificios a la velocidad del sonido y liberan sangre con toxinas celulares que destruyen los órganos en segundos.",
    "range": "Decenas de metros (Látigos espinales y ondas de choque).",
    "speed": { "combat": "Masivamente Hipersónica.", "reaction": "Masivamente Hipersónica.", "travel": "Hipersónica.", "attack": "Tormenta de látigos invisibles al ojo humano." },
    "strength": { "striking": "Clase Ciudad.", "lifting": "Clase 100+ Toneladas." },
    "durability": "Nivel Ciudad. Regeneración instantánea a nivel molecular (Las decapitaciones ordinarias no tienen ningún efecto sobre él).",
    "stamina": "Infinita durante la noche.",
    "battleIQ": "Milenio de experiencia en supervivencia despiadada y manipulación biológica.",
    "haxTags": [ "Regeneración Instantánea Extrema", "Sangre Venenosa Celular", "7 Corazones y 5 Cerebros Móviles", "Onda de Choque Neuronal" ],
    "arsenal": {
      "basicAttacks": "Látigos de carne con púas desde la espalda y muslos que cortan a cientos de metros por segundo.",
      "superAttacks": [
        { "name": "Onda de Choque de Espasmo Neuronal", "desc": "Libera un grito masivo con forma de boca gigante que destruye el sistema nervioso de los cazadores a su alrededor provocando convulsiones.", "cost": "15% Energía" }
      ],
      "ultimateAttacks": [
        { "name": "Infusión de Sangre Asesina", "desc": "Inyecta una sobredosis de su propia sangre demoníaca en las heridas del rival, disolviendo sus órganos a nivel celular en cuestión de segundos si no posee resistencia a toxinas.", "cost": "25% Sangre" }
      ],
      "passives": [
        { "name": "Regeneración Celular Sin Retraso", "desc": "Las heridas de armas cortantes normales sanan en el mismo instante en que la hoja atraviesa su carne.", "cost": "Pasivo Regenerativo" }
      ]
    },
    "forms": [ 
      { "id": "muzan-elegante", "name": "Disfraz Humano", "stats": "Nivel Multi-Bloque. Traje victoriano con sombrero blanco." },
      { "id": "muzan-combate", "name": "Forma de Combate Final", "stats": "Nivel Ciudad. Cabello blanco largo, bocas con colmillos en el torso y extremidades, látigos espinales." },
      { "id": "muzan-bebe", "name": "Armadura de Bebé Gigante", "stats": "Nivel Ciudad. Monstruosa masa de carne gigante para protegerse del sol." }
    ],
    "feats": [ "Sometió a todos los Pilares supervivientes y a Tanjiro a la vez durante horas.", "Sobrevivió a la explosión de la mansión Ubuyashiki y a 4 venenos combinados de Tamayo." ],
    "psychology": "Un cobarde narcisista con complejo de calamidad natural; cree ser comparable a un terremoto o una inundación y desprecia a los humanos que buscan venganza.",
    "weaknesses": "Luz solar directa (lo desintegra por completo), espadas Nichirin Carmesí y la Respiración Solar pura de Yoriichi."
  },
  // 6. YORIICHI TSUGIKUNI
  {
    "id": "yoriichi-tsugikuni-kny-902",
    "name": "Yoriichi Tsugikuni",
    "alias": "El Creador de la Respiración Solar / El Cazador Inalcanzable",
    "universe": "Demon Slayer (Kimetsu no Yaiba)",
    "saga": "Era Sengoku (Flashbacks)",
    "version": "Pico de Poder Marcial",
    "tier": "Tier 7-B | Nivel Ciudad",
    "ap": "Nivel Ciudad. El ser más talentoso y perfecto en la historia del combate con espada de su mundo. Nació con la Marca del Cazador permanente y acceso continuo al 'Mundo Transparente'. Superó a Muzan Kibutsuji cortándole 1,500 partes del cuerpo en un solo segundo sin recibir un solo rasguño.",
    "range": "Rango de Katana y Cortes Solares.",
    "speed": { "combat": "Masivamente Hipersónica+.", "reaction": "Masivamente Hipersónica+.", "travel": "Hipersónica.", "attack": "Velocidad de espada celestial inalcanzable." },
    "strength": { "striking": "Clase Ciudad.", "lifting": "Clase Humano Pico." },
    "durability": "Nivel Multi-Bloque (Físico humano), pero prácticamente intocable.",
    "stamina": "Infinita (Respiración de Concentración Total constante sin esfuerzo).",
    "battleIQ": "El espadachín supremo; ve los órganos, huesos y flujo sanguíneo de su oponente con el Mundo Transparente.",
    "haxTags": [ "Respiración Solar Pura (Quema Celular Permanente)", "Mundo Transparente (Visión Rayos X Anatómica)", "Estado Desinteresado (Cero Sed de Sangre)", "Espada Nichirin Carmesí Permanente" ],
    "arsenal": {
      "basicAttacks": "Esgrima perfecta sin movimientos innecesarios.",
      "superAttacks": [
        { "name": "Respiración Solar: Sol Ardiente", "desc": "Desata una danza de tajos circulares de fuego puro que queman la carne demoníaca impidiendo su regeneración.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Forma Decimotercera de la Respiración Solar", "desc": "Encadena las 12 posturas de la Respiración Solar en un ciclo continuo e infinito, realizando 1,500 cortes de precisión absoluta en los 7 corazones y 5 cerebros de Muzan en 1 segundo.", "cost": "Maestría Absoluta" }
      ],
      "passives": [
        { "name": "Estado Desinteresado", "desc": "Suprime toda emoción, intención asesina o espíritu de lucha; los sentidos de detección extrasensorial del enemigo son completamente ciegos a su presencia.", "cost": "Pasivo Espiritual" },
        { "name": "Inmunidad a la Maldición de la Marca", "desc": "Vivió hasta los 85 años de edad superando el límite de muerte de los 25 años de los portadores de la Marca.", "cost": "Milagro Fisiológico" }
      ]
    },
    "forms": [ 
      { "id": "yoriichi-joven", "name": "Yoriichi (Pico Sengoku)", "stats": "Nivel Ciudad. Kimono rojo sobre túnica negra, pendientes Hanafuda, cabello negro largo atado." },
      { "id": "yoriichi-anciano", "name": "Yoriichi Anciano (85 Años)", "stats": "Nivel Ciudad. Mismo poder letal; casi parte por la mitad a Kokushibo de un solo tajo antes de morir de pie por vejez." }
    ],
    "feats": [ "Dejó a Muzan al borde de la muerte y traumatizado por siglos con un solo asalto de 1 segundo.", "Casi decapita a la Luna Superior 1 (Kokushibo) teniendo 85 años de edad." ],
    "psychology": "Un hombre humilde, melancólico y profundamente pacífico que consideraba que su talento era solo un instrumento para erradicar el mal del mundo.",
    "weaknesses": "Posee un cuerpo biológico humano; falleció pacíficamente de vejez."
  },
  // 7. DENJI (CHAINSAW MAN)
  {
    "id": "denji-csm-903",
    "name": "Denji (Chainsaw Man)",
    "alias": "El Demonio Motosierra / El Héroe del Infierno",
    "universe": "Chainsaw Man",
    "saga": "Parte 1 / Parte 2",
    "version": "Forma Verdadera (Pochita / Héroe del Infierno)",
    "tier": "Tier 7-B a 7-A | Nivel Ciudad a Montaña",
    "ap": "Nivel Montaña (Pochita Forma Completa). Como híbrido es capaz de cortar demonios masivos, pero en su forma verdadera como el Demonio Motosierra original (Pochita), su poder trasciende las leyes de la realidad: cualquier demonio o concepto que devore es completamente borrado de la existencia y del pasado histórico del universo.",
    "range": "Físico y Cadenas de Motosierra a cientos de metros.",
    "speed": { "combat": "Masivamente Hipersónica.", "reaction": "Masivamente Hipersónica.", "travel": "Masivamente Hipersónica (Se lanzó desde el espacio de vuelta a la Tierra).", "attack": "Desmembramiento incesante." },
    "strength": { "striking": "Clase Montaña.", "lifting": "Clase 1,000+ Toneladas (Lanzó su propio corazón desde la estratosfera).", },
    "durability": "Nivel Montaña. Regeneración instantánea ilimitada mientras beba sangre.",
    "stamina": "Infinita (Tira de la cuerda de su pecho para reiniciar su motor).",
    "battleIQ": "Peleador salvaje e impredecible; recurre a prenderse fuego a sí mismo para anular la oscuridad de Santa Claus.",
    "haxTags": [ "Borrado Conceptual de la Existencia (Al Devorar)", "Inmortalidad Híbrida (Reinicio por Cuerda)", "Cadenas de Intestinos de Motosierra" ],
    "arsenal": {
      "basicAttacks": "Cortes brutales con motosierras en cabeza y brazos, patadas con sierras en las piernas.",
      "superAttacks": [
        { "name": "Lanzamiento de Cadena Espinal", "desc": "Dispara sus cadenas de motosierra para enganchar enemigos a distancia y partirlos por la mitad.", "cost": "0% Sangre" }
      ],
      "ultimateAttacks": [
        { "name": "Devoración Conceptual del Demonio", "desc": "Se come el cuerpo del oponente; si es un demonio o entidad conceptual, su nombre y concepto son borrados de toda la historia del universo (Como borró a los Nazis, el SIDA y las 4 alternativas a la muerte).", "cost": "Borrado Existencial" }
      ],
      "passives": [
        { "name": "Motor de Sangre Infinito", "desc": "Mientras ingiera sangre del rival o de aliados, sana cualquier daño letal instantáneamente.", "cost": "Regeneración por Sangre" }
      ]
    },
    "forms": [ 
      { "id": "denji-hibrido", "name": "Denji Motosierra", "stats": "Nivel Multi-Bloque a Ciudad. Cabeza de motosierra clásica, camisa blanca y corbata rota." },
      { "id": "pochita-heroe", "name": "Héroe del Infierno (Pochita)", "stats": "Nivel Montaña. Cuatro brazos con motosierras gigantes, bufanda hecha con sus propios intestinos, armadura demoníaca negra." }
    ],
    "feats": [ "Devoró y borró múltiples conceptos fundamentales de la existencia.", "Sobrevivió en el espacio exterior, se arrancó el corazón y lo lanzó de vuelta a la Tierra para regenerarse entero en la atmósfera." ],
    "psychology": "Motivado por deseos simples (comer pan con mermelada, afecto femenino), pero con una resistencia al dolor y una locura que aterroriza a los propios demonios.",
    "weaknesses": "Si se queda sin sangre en su organismo y no puede tirar de su cuerda, queda temporalmente inerte."
  },
  // 8. MAKIMA
  {
    "id": "makima-csm-904",
    "name": "Makima",
    "alias": "El Demonio del Control",
    "universe": "Chainsaw Man",
    "saga": "Parte 1 (Saga de Seguridad Pública)",
    "version": "Demonio del Control (Poder Pleno)",
    "tier": "Tier 7-B a 7-A | Nivel Ciudad a Montaña",
    "ap": "Nivel Montaña (Fuerza de Control y Disparos 'Bang'). Es uno de los Cuatro Jinetes del Apocalipsis. Puede controlar absolutamente a cualquier ser que ella considere inferior a sí misma. Su contrato con el Primer Ministro de Japón redirige cualquier daño mortal que ella sufra a ciudadanos japoneses al azar en forma de accidentes o enfermedades.",
    "range": "Intercontinental (Disparos y rituales de aplastamiento a miles de kilómetros).",
    "speed": { "combat": "Masivamente Hipersónica.", "reaction": "Masivamente Hipersónica.", "travel": "Teletransporte mediante ratas/pájaros.", "attack": "Fuerza invisible instantánea." },
    "strength": { "striking": "Clase Ciudad.", "lifting": "Clase 100+ Toneladas." },
    "durability": "Nivel Ciudad / Inmortalidad por Contrato de 126 Millones de Vidas Japonesas.",
    "stamina": "Infinita mientras queden ciudadanos vivos.",
    "battleIQ": "Manipuladora maquiavélica suprema; orquesta eventos políticos y tragedias con meses de anticipación.",
    "haxTags": [ "Control Mental Absoluto (De seres que considere inferiores)", "Contrato con el Primer Ministro (Redirección de Daño Mortal)", "Disparo Invisible 'Bang'", "Ritual de Aplastamiento a Distancia" ],
    "arsenal": {
      "basicAttacks": "Golpes simples con la mano abierta, miradas de intimidación.",
      "superAttacks": [
        { "name": "Disparo 'Bang'", "desc": "Apunta con el dedo índice y pronuncia 'Bang', disparando una onda cinética masiva que mandó a Chainsaw Man al espacio exterior.", "cost": "0% Energía" },
        { "name": "Ritual del Santuario", "desc": "Sacrifica criminales pronunciando el nombre del enemigo para aplastarlo a distancia intercontinental como una prensa hidráulica invisible.", "cost": "1 Sacrificio Humano" }
      ],
      "ultimateAttacks": [
        { "name": "Cadena de Dominación Absoluta", "desc": "Dispara cadenas desde su vientre hacia los cerebros de los caídos, tomando el control total de sus Stands, Demonios o Técnicas para usarlos como sus marionetas.", "cost": "Control Mental" }
      ],
      "passives": [
        { "name": "Contrato de Inmortalidad Nacional", "desc": "Cualquier ataque fatal que reciba es transferido instantáneamente a un ciudadano de Japón al azar, haciéndola revivir al instante hasta 126 millones de veces.", "cost": "Redirección de Daño" }
      ]
    },
    "forms": [ 
      { "id": "makima-base", "name": "Líder de Seguridad Pública", "stats": "Nivel Montaña. Traje formal negro, camisa blanca, cabello trenzado rojizo y ojos dorados con anillos concéntricos." }
    ],
    "feats": [ "Sometió al Demonio Pistola en segundos.", "Manipuló a toda la división de cazadores y doblegó a híbridos legendarios." ],
    "psychology": "Una deidad controladora y distante que anhela desesperadamente una relación de igualdad y afecto verdadero que su propia naturaleza le impide tener.",
    "weaknesses": "Ataques que no nazcan de la hostilidad o el rencor asesino (como Denji devorándola por amor culinario, lo que evitó la activación de su contrato)."
  },
  // 9. TOJI FUSHIGURO
  {
    "id": "toji-fushiguro",
    "name": "Toji Fushiguro",
    "alias": "El Asesino de Hechiceros / La Restricción Celestial",
    "universe": "Jujutsu Kaisen",
    "saga": "Pasado de Gojo (Inventario Oculto) / Shibuya",
    "version": "Pico de Restricción Celestial",
    "tier": "Tier 8-A a 7-B | Nivel Multi-Bloque a Ciudad",
    "ap": "Nivel Ciudad (Con Arsenal Grado Especial). Posee una Restricción Celestial absoluta a cambio de cero Energía Maldita, otorgándole un cuerpo físico sobrehumano que supera a las maldiciones de Grado Especial. Derrotó a Gojo Satoru joven y a Suguru Geto gracias a su armamento táctico de anulación de técnicas.",
    "range": "Físico y Armas de Media Distancia (Cadena de Mil Millas).",
    "speed": { "combat": "Masivamente Hipersónica.", "reaction": "Masivamente Hipersónica (Sentidos agudizados al nivel de ver el aire).", "travel": "Masivamente Hipersónica (Corre sobre el agua).", "attack": "Esgrima quirúrgica mortal." },
    "strength": { "striking": "Clase Ciudad (Parte maldiciones gigantes de un golpe con Nube Itinerante).", "lifting": "Clase 100+ Toneladas." },
    "durability": "Nivel Ciudad. Resistencia muscular extrema e inmunidad natural a venenos.",
    "stamina": "Muy Alta (Cuerpo atlético perfecto que no genera fatiga común).",
    "battleIQ": "El mejor cazador y asesino táctico de su mundo; planifica emboscadas de desgaste durante días.",
    "haxTags": [ "Restricción Celestial (Cero Energía Maldita / Invisible a Barreras)", "Lanza Celestial Invertida (Anulación Forzada de Técnicas)", "Espada de Alma Partida (Ignora Durabilidad / Daño Directo al Alma)" ],
    "arsenal": {
      "basicAttacks": "Golpes con nudillos y dagas militares a puntos ciegos.",
      "superAttacks": [
        { "name": "Lanza Celestial Invertida (Inverted Spear of Heaven)", "desc": "Daga de dos puntas que desactiva y cancela cualquier técnica maldita al entrar en contacto con ella (Atravesó el Infinito de Gojo).", "cost": "0% Energía" },
        { "name": "Nube Itinerante (Playful Cloud)", "desc": "Bastón de tres secciones que golpea con pura fuerza bruta física multiplicada.", "cost": "0% Energía" }
      ],
      "ultimateAttacks": [
        { "name": "Espada de Alma Partida (Split Soul Katana)", "desc": "Ignora la durabilidad física convencional y corta directamente el contorno del alma del enemigo, causando heridas irrecuperables para la regeneración normal.", "cost": "0% Energía" }
      ],
      "passives": [
        { "name": "Invisibilidad Táctica", "desc": "Al no poseer Energía Maldita, los radares mágicos y Expansiones de Dominio no pueden fijarlo como objetivo.", "cost": "Inmunidad a Dominios" }
      ]
    },
    "forms": [ 
      { "id": "toji-asesino", "name": "Asesino de Hechiceros", "stats": "Nivel Ciudad. Camiseta negra ajustada, pantalones blancos anchos, gusano maldito inventario en el torso." }
    ],
    "feats": [ "Apuñaló en la garganta y casi asesina a Gojo Satoru joven.", "Masacró a Dagon dentro de su propio Dominio sin recibir daño." ],
    "psychology": "Pragmático, cínico y desapegado del mundo que lo discriminó por no tener energía; solo pelea por dinero o por puro instinto carnívoro.",
    "weaknesses": "Cuerpo humano vulnerable a desintegración molecular (como el Púrpura Hueco de Gojo despierto)."
  },
  // 10. YUTA OKKOTSU
  {
    "id": "yuta-okkotsu-jjk-peak-yo001",
    "name": "Yuta Okkotsu",
    "alias": "El Sucesor Prodigio / La Reina de las Maldiciones",
    "universe": "Jujutsu Kaisen",
    "saga": "Jujutsu Kaisen 0 / Batalla de Shinjuku",
    "version": "Pico Adulto (Rika Totalmente Manifestada)",
    "tier": "Tier 7-A | Nivel Montaña",
    "ap": "Nivel Montaña. El hechicero con la mayor reserva de Energía Maldita después de Sukuna. Acompañado por el espíritu de Rika, puede copiar y utilizar cualquier Técnica Maldita tras cumplir condiciones de absorción (como Discurso Maldito, Manipulación del Espacio, Rayo de Dhruv y Escalera de Jacob).",
    "range": "Cientos de metros (Expansión de Dominio y Réquiem de Jacob).",
    "speed": { "combat": "Masivamente Hipersónica.", "reaction": "Masivamente Hipersónica.", "travel": "Hipersónica.", "attack": "Cortes de Katana imbuidos en energía desbordante." },
    "strength": { "striking": "Clase Montaña.", "lifting": "Clase 100+ Toneladas." },
    "durability": "Nivel Montaña. Regeneración instantánea de Técnica Maldita Inversa continua.",
    "stamina": "Inmensa (5 minutos de manifestación total de Rika con energía ilimitada).",
    "battleIQ": "Luchador adaptable y feroz; no duda en utilizar técnicas sucias si es necesario para ganar.",
    "haxTags": [ "Copia de Técnicas Malditas Ilimitada", "Manifestación Total de Rika (Reina de las Maldiciones)", "Expansión de Dominio: Amor Auténtico y Mutuo", "Escalera de Jacob (Purificación / Borrado de Técnicas)" ],
    "arsenal": {
      "basicAttacks": "Esgrima pesada reforzada con un manto masivo de energía.",
      "superAttacks": [
        { "name": "Discurso Maldito ('¡Muérete!')", "desc": "Imprime palabras de orden absoluta forzando al oponente a detenerse o dañarse.", "cost": "10% Energía" },
        { "name": "Rotura de Espacio (Sky Manipulation)", "desc": "Agarra el espacio como si fuera tela para desviar ataques y conectar golpes a puntos ciegos.", "cost": "15% Energía" }
      ],
      "ultimateAttacks": [
        { "name": "Expansión de Dominio: Amor Auténtico y Mutuo", "desc": "Llena el terreno con espadas infinitas, cada una conteniendo una de las técnicas malditas que ha copiado en su vida, aplicándolas con impacto seguro.", "cost": "40% Energía" },
        { "name": "Escalera de Jacob (Jacob's Ladder)", "desc": "Invoca un pilar de luz divina que anula, disuelve y extingue cualquier Técnica Maldita, posesión o magia enemiga.", "cost": "50% Energía" }
      ],
      "passives": [
        { "name": "Rika: Guardiana Incondicional", "desc": "Rika bloquea ataques sorpresa por la espalda y suministra armas y energía maldita inagotable durante 5 minutos.", "cost": "Soporte Autónomo" }
      ]
    },
    "forms": [ 
      { "id": "yuta-base", "name": "Yuta (Katana)", "stats": "Nivel Montaña Bajo. Uniforme blanco de hechicero especial, anillo en el dedo." },
      { "id": "yuta-rika-full", "name": "Conexión Total con Rika", "stats": "Nivel Montaña. Rika monstruosa emerge a su espalda, ojos brillantes, acceso a todo el arsenal copiado." }
    ],
    "feats": [ "Derrotó a Suguru Geto en Jujutsu Kaisen 0.", "Cortó la cabeza de Kenjaku en una emboscada perfecta y acorraló a Sukuna dentro de su Dominio." ],
    "psychology": "Tímido y bondadoso, pero absolutamente implacable y despiadado cuando se trata de proteger a sus amigos.",
    "weaknesses": "La manifestación completa de Rika y el acceso a todas sus técnicas copiadas dura un límite estricto de 5 minutos consecutivos."
  },
  // 11. TANJIRO KAMADO
  {
    "id": "tanjiro-kamado",
    "name": "Tanjiro Kamado",
    "alias": "El Heredero del Sol / El Cazador Bondadoso",
    "universe": "Demon Slayer (Kimetsu no Yaiba)",
    "saga": "Fortaleza Dimensional Infinita / Cuenta Regresiva",
    "version": "Danza del Dios del Fuego / Mundo Transparente",
    "tier": "Tier 7-B | Nivel Ciudad",
    "ap": "Nivel Ciudad. El protagonista que perfeccionó la Danza del Dios del Fuego (Hinokami Kagura) hasta reconectarla con la Respiración Solar original. Despertó la Marca del Cazador, la Espada Roja Carmesí y el Mundo Transparente, combatiendo directamente a Akaza y a Muzan Kibutsuji.",
    "range": "Rango de Espada.",
    "speed": { "combat": "Masivamente Hipersónica.", "reaction": "Masivamente Hipersónica (Olfato extraordinario + Mundo Transparente).", "travel": "Hipersónica.", "attack": "Danza solar incesante." },
    "strength": { "striking": "Clase Ciudad.", "lifting": "Clase 10+ Toneladas." },
    "durability": "Nivel Ciudad. Resistencia heroica contra el veneno y heridas mortales.",
    "stamina": "Muy Alta mediante Respiración de Concentración Total constante.",
    "battleIQ": "Analítico e intuitivo; huele el 'hilo de apertura' que le muestra el instante exacto para decapitar al rival.",
    "haxTags": [ "Respiración Solar (Hinokami Kagura)", "Olfato Sobrenatural (Hilo de Apertura)", "Mundo Transparente y Estado Desinteresado", "Espada Carmesí Ardiente" ],
    "arsenal": {
      "basicAttacks": "Cortes de espada fluidos combinando Respiración de Agua y Solar.",
      "superAttacks": [
        { "name": "Sol Abrasador (Enbu)", "desc": "Tajo flamígero de alta velocidad que corta y quema la carne.", "cost": "0% Ki" },
        { "name": "Halo Solar del Dragón", "desc": "Se mueve como un dragón de fuego decapitando múltiples enemigos en cadena.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Danza del Dios del Fuego: Ciclo de las 12 Posturas", "desc": "Ejecuta las doce formas en un ciclo continuo sin fin para desgastar la regeneración de deidades demoníacas.", "cost": "Maestría de Respiración" }
      ],
      "passives": [
        { "name": "El Hilo de Apertura", "desc": "Su olfato detecta el momento exacto en que la guardia del rival se abre, trazando una línea visual hacia su punto débil.", "cost": "Pasivo Sensorial" }
      ]
    },
    "forms": [ 
      { "id": "tanjiro-cazador", "name": "Tanjiro Cazador", "stats": "Nivel Multi-Bloque. Haori a cuadros verdes y negros, pendientes Hanafuda, cicatriz en la frente." },
      { "id": "tanjiro-solar", "name": "Despertar Solar (Pico)", "stats": "Nivel Ciudad. Marca en forma de llama en la frente, espada carmesí brillante." }
    ],
    "feats": [ "Decapitó a Akaza (Luna Superior 3) usando el Estado Desinteresado.", "Mantuvo a raya a Muzan durante la noche hasta el amanecer." ],
    "psychology": "Puro de corazón, compasivo incluso con los demonios que asesina, pero con una determinación de hierro inquebrantable.",
    "weaknesses": "Cuerpo humano sujeto a fatiga y desangrado si la batalla se extiende sin descanso."
  },
  // 12. KOKUSHIBO
  {
    "id": "kokushibo",
    "name": "Kokushibo",
    "alias": "La Luna Superior Uno / Michikatsu Tsugikuni",
    "universe": "Demon Slayer (Kimetsu no Yaiba)",
    "saga": "Fortaleza Dimensional Infinita",
    "version": "Luna Superior Uno (Espada de Carne de Seis Ojos)",
    "tier": "Tier 7-B | Nivel Ciudad",
    "ap": "Nivel Ciudad. El hermano gemelo de Yoriichi y el demonio más poderoso al servicio de Muzan. Durante casi 500 años perfeccionó la Respiración de la Luna combinada con su Arte Demoníaco de Sangre, creando lunas crecientes cortantes caóticas con cada tajo de su espada de carne viva.",
    "range": "Decenas de metros (Cortes de Luna Creciente).",
    "speed": { "combat": "Masivamente Hipersónica+.", "reaction": "Masivamente Hipersónica+ (Seis ojos con Mundo Transparente).", "travel": "Hipersónica.", "attack": "Tempestad de cortes de luna caóticos." },
    "strength": { "striking": "Clase Ciudad.", "lifting": "Clase 50+ Toneladas." },
    "durability": "Nivel Ciudad. Regeneración instantánea incluso tras ser decapitado por espadas Nichirin.",
    "stamina": "Infinita durante la noche.",
    "battleIQ": "Siglos de maestría como samurái legendario; no posee puntos ciegos gracias a sus seis ojos.",
    "haxTags": [ "Respiración de la Luna (16 Posturas)", "Espada de Carne Regenerativa", "Seis Ojos (Mundo Transparente Continuo)", "Superación de la Decapitación" ],
    "arsenal": {
      "basicAttacks": "Desenvaine ultrarrápido (Iaijutsu) acompañado de lunas cortantes.",
      "superAttacks": [
        { "name": "Luna Llena Catastrófica (Postura 14)", "desc": "Blande su espada gigante desatando un vórtice de tajos y lunas gigantes que arrasa toda la habitación.", "cost": "15% Energía" }
      ],
      "ultimateAttacks": [
        { "name": "Transformación Monstruosa (Espada Larga de Carne)", "desc": "Extiende cuchillas orgánicas desde todo su cuerpo y alarga su katana convirtiéndola en una guadaña dentada gigante de alcance devastador.", "cost": "30% Sangre" }
      ],
      "passives": [
        { "name": "Seis Ojos de Percepción", "desc": "Predice cada contracción muscular y movimiento del oponente en tiempo real.", "cost": "Visión Perfecta" }
      ]
    },
    "forms": [ 
      { "id": "kokushibo-samurai", "name": "Luna Superior Uno", "stats": "Nivel Ciudad. Kimono púrpura, seis ojos rojos con kanjis de Rango Superior 1, katana de carne en la cintura." },
      { "id": "kokushibo-monstruo", "name": "Forma Monstruosa Desesperada", "stats": "Nivel Ciudad (Alto). Aspecto grotesco con cuernos, aguijones espinales y colmillos." }
    ],
    "feats": [ "Derrotó a Gyomei, Sanemi, Muichiro y Genya simultáneamente en su batalla final.", "Regeneró su propia cabeza tras ser decapitado por dos Pilares con espadas rojas." ],
    "psychology": "Consumido por una envidia y complejo de inferioridad eterno hacia su hermano Yoriichi; eligió convertirse en demonio solo para evitar envejecer y morir.",
    "weaknesses": "Luz solar y la crisis existencial al verse convertido en un monstruo feo que traicionó el camino del samurái."
  }
];

const filePath = path.resolve(__dirname, '../src/data/characters.js');
let content = fs.readFileSync(filePath, 'utf8');

const prefix = 'export const INITIAL_CHARACTERS = ';
let currentList = eval(content.replace(prefix, ''));
console.log(`Current characters count: ${currentList.length}`);

let updatedCount = 0;
batch20Upgrades.forEach(upgrade => {
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

console.log(`Batch 20 Upgrade Complete. ${updatedCount} characters successfully enhanced. (JJK, Demon Slayer, Chainsaw Man, JoJo).`);
