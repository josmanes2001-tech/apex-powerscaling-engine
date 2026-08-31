const fs = require('fs');
const path = require('path');

const batch13Upgrades = [
  // 1. TAO PAI PAI
  {
    "id": "tao-pai-pai-dragon-ball-cl-sico-369",
    "name": "Tao Pai Pai",
    "alias": "El Asesino Más Famoso del Mundo",
    "universe": "Dragon Ball (Clásico)",
    "saga": "Red Ribbon",
    "version": "Humano Normal (Pre-Cyborg)",
    "tier": "Tier 7-B | Nivel Ciudad",
    "ap": "Nivel Ciudad. En la era clásica, Tao Pai Pai era un monstruo absoluto para los humanos ordinarios. Podía matar generales con la lengua y lanzar troncos de árboles a miles de kilómetros para usarlos como medio de transporte. Superaba por completo al Goku pre-entrenamiento de Karin.",
    "range": "Decenas de metros (Dodonpa).",
    "speed": { "combat": "Hipersónica.", "reaction": "Hipersónica.", "travel": "Hipersónica (Viajando sobre troncos arrojados).", "attack": "Veloz." },
    "strength": { "striking": "Clase Ciudad.", "lifting": "Clase Toneladas (Arranca pilares de piedra)." },
    "durability": "Nivel Ciudad. Resistió su propia granada a quemarropa, aunque lo dejó mutilado obligando su reconstrucción cyborg.",
    "stamina": "Muy Alta. Asesino metódico que no se cansa con facilidad.",
    "battleIQ": "Maestro de las artes marciales letales y tácticas de asesinato sucias. Usa armas ocultas.",
    "haxTags": [ "Dodonpa Perforador", "Uso de Armas (Espadas/Granadas)" ],
    "arsenal": {
      "basicAttacks": "Golpes a puntos vitales (cuello, sienes), ataques con la trenza de su cabello.",
      "superAttacks": [
        { "name": "Dodonpa", "desc": "Un rayo de Ki hiperconcentrado disparado desde el dedo índice que perfora y quema internamente.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Estocada Furtiva", "desc": "Saca una espada de cápsula o usa una granada tras fingir rendirse para matar a traición.", "cost": "0% Ki (Objeto)" }
      ],
      "passives": [
        { "name": "Orgullo de Asesino", "desc": "Otorga daño extra si ataca al enemigo por la espalda.", "cost": "Pasivo táctico" }
      ]
    },
    "forms": [ 
      { "id": "taopaipai-base", "name": "Asesino Humano", "stats": "Nivel Ciudad. Túnica rosa con 'Kill You!' escrito en la espalda, trenza negra, mirada fría." },
      { "id": "taopaipai-cyborg", "name": "Cyborg Tao", "stats": "Nivel Ciudad (Alto). Brazo robótico con hoja retráctil y super Dodonpa." }
    ],
    "feats": [ "Mató al General Blue usando solo su lengua.", "Casi asesina a Goku niño deteniendo un Kamehameha con las manos desnudas." ],
    "psychology": "Un profesional del asesinato arrogante y cruel, que mata por placer o dinero sin la menor moralidad.",
    "weaknesses": "Confía demasiado en trucos baratos si es superado marcialmente."
  },
  // 2. GENERAL BLUE
  {
    "id": "general-blue-dragon-ball-cl-sico-650",
    "name": "General Blue",
    "alias": "El Oficial Implacable de la Red Ribbon",
    "universe": "Dragon Ball (Clásico)",
    "saga": "Ejército Red Ribbon",
    "version": "Humano Mutante (Poderes Psíquicos)",
    "tier": "Tier 8-A | Nivel Multi-Bloque de Ciudad",
    "ap": "Nivel Multi-Bloque de Ciudad. El general más competente y letal de la Red Ribbon en combate cuerpo a cuerpo y habilidades especiales. Su poder físico era suficiente para rivalizar y superar temporalmente a Krilin y herir a Goku niño, pero su verdadero peligro residía en sus poderes psíquicos paralizantes.",
    "range": "Físico y Visión Paralizante (Varios metros).",
    "speed": { "combat": "Supersónica.", "reaction": "Supersónica.", "travel": "Atlética.", "attack": "Psíquica instantánea." },
    "strength": { "striking": "Clase Multi-Bloque.", "lifting": "Clase Humano Pico." },
    "durability": "Nivel Multi-Bloque. Resistió una electrocución de un pez gigante y choques de aeronaves.",
    "stamina": "Alta. Obsesivo en sus misiones de búsqueda.",
    "battleIQ": "Táctico militar experto, rastreador y manipulador.",
    "haxTags": [ "Telequinesis Defensiva", "Parálisis Psíquica Absoluta" ],
    "arsenal": {
      "basicAttacks": "Artes marciales militares precisas y golpes contundentes.",
      "superAttacks": [
        { "name": "Armas de Fuego Militares", "desc": "Uso de escopetas o misiles tácticos portátiles.", "cost": "Munición" }
      ],
      "ultimateAttacks": [
        { "name": "Ojos Psíquicos (Parálisis)", "desc": "Concentra su energía mental a través de sus ojos azules, paralizando por completo el cuerpo de su oponente independientemente de su fuerza física (sometió a Goku niño así).", "cost": "20% Ki Mental" }
      ],
      "passives": [
        { "name": "Perfeccionismo Militar", "desc": "No tolera el fracaso; su AP sube si su uniforme se ensucia o rasga.", "cost": "Buff de Ira" }
      ]
    },
    "forms": [ { "id": "general-blue", "name": "Oficial Red Ribbon", "stats": "Nivel Multi-Bloque. Uniforme militar nazi-inspirado pulcro, rubio, mirada penetrante." } ],
    "feats": [ "Paralizó a Goku y Krilin casi asesinándolos si no fuera por interferencias externas.", "Sobrevivió a múltiples accidentes mortales durante persecuciones." ],
    "psychology": "Narcisista, vanidoso e intolerante a la suciedad. Extremadamente leal al Ejército Red Ribbon hasta que lo traicionaron.",
    "weaknesses": "Fobia extrema a los ratones, insectos y mujeres; se paraliza de asco, rompiendo sus técnicas psíquicas."
  },
  // 3. GARLIC JR
  {
    "id": "garlic-jr-saga-garlic-jr-47",
    "name": "Garlic Jr.",
    "alias": "El Demonio Inmortal",
    "universe": "Dragon Ball Z (Toei)",
    "saga": "Película 1 / Saga Garlic",
    "version": "Inmortal Mágico (Tras deseo de Shenron)",
    "tier": "Tier 5-B a 4-C | Nivel Planeta a Estrella Enana",
    "ap": "Nivel Planeta (Estrella enana bajo la Zona Muerta). Garlic Jr. es físicamente débil comparado con los villanos Z, pero logró lo que Freezer y Vegeta no: la vida eterna absoluta. En su forma musculosa puede combatir contra Goku y Piccolo (pre-Raditz), y en el relleno de anime rivaliza con Piccolo asimilado con Nail gracias al buff de la Estrella Makyo.",
    "range": "Dimensional (Zona Muerta).",
    "speed": { "combat": "Sub-relativista.", "reaction": "Sub-relativista.", "travel": "FTL.", "attack": "Ráfagas rápidas." },
    "strength": { "striking": "Clase Planeta.", "lifting": "Clase Luna." },
    "durability": "Absoluta (Inmortalidad verdadera). Literalmente no puede morir; si lo desintegran, se regenera al instante sin coste de Ki.",
    "stamina": "Infinita (Por la inmortalidad).",
    "battleIQ": "Confiado y megalómano, pero comete el error fatal de abrir portales que no puede controlar si es superado en fuerza de empuje.",
    "haxTags": [ "Inmortalidad Absoluta (Deseo del Dragón)", "Magia Demoníaca", "Apertura de la Zona Muerta" ],
    "arsenal": {
      "basicAttacks": "Golpes pesados en su forma gigante.",
      "superAttacks": [
        { "name": "Impacto de Muerte", "desc": "Rayos púrpuras continuos desde sus manos.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Dead Zone (Zona Muerta)", "desc": "Abre un vórtice dimensional negro que succiona todo a su alrededor enviándolo a una dimensión de vacío eterno de la que no se puede escapar sin magia nivel Dios.", "cost": "50% Ki" }
      ],
      "passives": [
        { "name": "Regeneración Inmortal", "desc": "Ignora cualquier ataque de muerte instantánea o borrado existencial menor, curándose al 100% de HP de forma pasiva tras recibir un combo fatal.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ 
      { "id": "garlic-base", "name": "Forma Base", "stats": "Nivel Planeta Menor. Pequeño ser azul demoníaco." },
      { "id": "garlic-full", "name": "Forma Super Gigante", "stats": "Nivel Planeta. Músculos hiper-inflados, colmillos gigantes, aura oscura." }
    ],
    "feats": [ "Consiguió la vida eterna pidiéndosela a Shenron con éxito.", "Sobrevivió en el vacío de la Zona Muerta eternamente." ],
    "psychology": "Desea vengar a su padre y convertirse en el Dios supremo de la Tierra reemplazando a Kami.",
    "weaknesses": "A pesar de ser inmortal, su poder de empuje es bajo; puede ser empujado a su propia Zona Muerta y quedar atrapado para siempre."
  },
  // 4. LORD SLUG
  {
    "id": "lord-slug-pel-culas-dbz-toei-952",
    "name": "Lord Slug",
    "alias": "El Super Namekiano Maligno",
    "universe": "Dragon Ball Z (Toei)",
    "saga": "Película: Lord Slug",
    "version": "Juventud Restaurada",
    "tier": "Tier 4-C | Nivel Estrella Enana",
    "ap": "Nivel Estrella Enana. Slug es un Namekiano puro corrompido por la maldad total, que recuperó su juventud con las esferas. Su poder base masacraba a Goku usando el Kaio-Ken, requiriendo el estado Pseudo Super Saiyan para herirlo.",
    "range": "Planetario.",
    "speed": { "combat": "FTL.", "reaction": "FTL.", "travel": "FTL.", "attack": "Golpes elásticos ineludibles." },
    "strength": { "striking": "Clase Estrella Enana.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Estrella Enana. Regeneración Namekiana sumada a juventud eterna.",
    "stamina": "Muy Alta.",
    "battleIQ": "Brutal y autoritario. Conquista planetas congelándolos para su comodidad.",
    "haxTags": [ "Gigantificación", "Regeneración Namekiana", "Elasticidad de Miembros" ],
    "arsenal": {
      "basicAttacks": "Brazos que se estiran kilómetros para aplastar o atrapar al enemigo.",
      "superAttacks": [
        { "name": "Láser Óptico Múltiple", "desc": "Dispara rayos de sus ojos de forma continua para barrer ciudades.", "cost": "10% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Forma Gigante (Super Namek)", "desc": "Crece al tamaño de una montaña, multiplicando su fuerza bruta y AP inmensamente, aplastando literalmente oponentes pequeños bajo sus pies.", "cost": "30% Ki" }
      ],
      "passives": [
        { "name": "Aura de Congelación", "desc": "Enfría pasivamente el entorno, ralentizando a oponentes no abrigados.", "cost": "Pasivo táctico" }
      ]
    },
    "forms": [ 
      { "id": "slug-joven", "name": "Slug Joven", "stats": "Nivel Estrella Enana. Namekiano imponente con armadura imperial." },
      { "id": "slug-gigante", "name": "Slug Gigante", "stats": "Nivel Estrella Enana Alto. Tamaño colosal, fuerza bruta abrumadora." }
    ],
    "feats": [ "Sometió a la Tierra entera bajo hielo en horas.", "Sobrevivió a los golpes de un Pseudo Super Saiyan." ],
    "psychology": "Tirano galáctico que comparte el ego de Freezer y la crueldad del Rey Piccolo, temiendo solo envejecer.",
    "weaknesses": "Vulnerabilidad biológica Namekiana a los sonidos extremadamente agudos (silbidos), que paralizan su sistema nervioso en forma gigante."
  },
  // 5. ANDROIDE 13
  {
    "id": "androide-13-base-pel-culas-dbz-toei-646",
    "name": "Androide 13",
    "alias": "La Máquina Definitiva de Odio",
    "universe": "Dragon Ball Z (Toei)",
    "saga": "Película: Los 3 Grandes Super Saiyans",
    "version": "Super Androide 13",
    "tier": "Tier 4-B | Nivel Sistema Solar Menor",
    "ap": "Nivel Sistema Solar Menor. Tras absorber los componentes y chips de los destruidos Androide 14 y 15, el Androide 13 se transforma en un monstruo imparable. Su poder superaba holgadamente al de tres Super Saiyans (Goku, Vegeta y Trunks) y a Piccolo asimilado juntos, destrozándolos físicamente.",
    "range": "Planetario.",
    "speed": { "combat": "MFTL.", "reaction": "MFTL.", "travel": "MFTL.", "attack": "Veloz y pesado." },
    "strength": { "striking": "Clase Sistema Solar. Rompía espadas (de Trunks) y huesos con los nudillos.", "lifting": "Clase Estelar." },
    "durability": "Nivel Sistema Solar. Absoluta inmunidad al dolor; la espada de Trunks SSJ se rompió al tocar su cuello sin dejar un rasguño.",
    "stamina": "Infinita (Generador continuo).",
    "battleIQ": "Programado con un solo propósito letal, pero combate con la precisión calculada de una supercomputadora.",
    "haxTags": [ "Fusión Mecánica de Componentes", "Ki Infinito", "Rastreo de Datos Perfectos" ],
    "arsenal": {
      "basicAttacks": "Golpes letales al entrepierna (a Goku) y martillazos dobles a la columna vertebral.",
      "superAttacks": [
        { "name": "SS Deadly Bomber", "desc": "Una bola de energía roja guiada que sigue a su objetivo eternamente hasta hacerlo polvo. (Destruiría la mitad de la Tierra si impacta).", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Embestida del Cyborg Supremo", "desc": "Atraviesa todos los ataques de Ki menores caminando hacia el enemigo, para agarrarlo de la cabeza y aplastarla.", "cost": "0% Ki" }
      ],
      "passives": [
        { "name": "Coraza Inquebrantable", "desc": "Ignora armas físicas y ataques cortantes. Su defensa se basa en dureza material, inmune al Kienzan y espadas de Ki.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ 
      { "id": "13-base", "name": "Cyborg Base", "stats": "Nivel Estrella Enana. Camionero con gorra Red Ribbon, actitud ruda sureña." },
      { "id": "super-13", "name": "Super Androide 13", "stats": "Nivel Sistema Solar Menor. Piel azul masiva, cabello naranja en punta, sin pupilas, musculatura gigante." }
    ],
    "feats": [ "Soportó ataques simultáneos de 4 guerreros nivel SSJ1 y salió ileso.", "Rastreo ineludible forzando a Goku a absorber la Genkidama para ganar." ],
    "psychology": "Como 'Super 13', pierde su personalidad habladora y se convierte en una máquina muda de matar enfocada puramente en asesinar a Goku.",
    "weaknesses": "Vulnerable al daño de pureza extrema (La energía de una Genkidama absorbida disolvió sus partes mecánicas)."
  },
  // 6. ANDROIDE 14
  {
    "id": "androide-14-pel-culas-dbz-toei-392",
    "name": "Androide 14",
    "alias": "La Muralla de la Red Ribbon",
    "universe": "Dragon Ball Z (Toei)",
    "saga": "Película: Los 3 Grandes Super Saiyans",
    "version": "Modelo Básico",
    "tier": "Tier 4-C | Nivel Estrella Enana",
    "ap": "Nivel Estrella Enana. Androide silencioso creado por la computadora de Gero. Su poder físico es inmenso, logrando detener la espada de Trunks del Futuro SSJ con dos dedos y lanzando golpes de presión increíbles.",
    "range": "Físico y explosiones cortas.",
    "speed": { "combat": "FTL.", "reaction": "FTL.", "travel": "Supersónica.", "attack": "Pesado pero preciso." },
    "strength": { "striking": "Clase Estrella Enana.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Estrella Enana. Fue decapitado por el ataque definitivo de Trunks.",
    "stamina": "Infinita.",
    "battleIQ": "Programación básica de asesino; prioriza la defensa y contraataques físicos.",
    "haxTags": [ "Fuerza Bruta Pura", "Asimilación (Parte de Super 13)" ],
    "arsenal": {
      "basicAttacks": "Golpes y agarres de lucha libre.",
      "superAttacks": [
        { "name": "Barrera de Hombro", "desc": "Carga contra el enemigo derribándolo como un bulldozer.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Combo Letal (Con Androide 15)", "desc": "Ataques combinados sofocando al rival.", "cost": "0% Ki" }
      ],
      "passives": [
        { "name": "Chip Dual", "desc": "Al morir, su chip y batería flotan al Androide 13 para potenciarlo.", "cost": "Muerte" }
      ]
    },
    "forms": [ { "id": "14-base", "name": "Cyborg Pesado", "stats": "Nivel Estrella Enana. Piel grisácea, trenza negra de guerrero tribal, falda verde, enorme masa muscular." } ],
    "feats": [ "Sobrevivió un asalto frontal de Trunks SSJ." ],
    "psychology": "No habla (salvo gritar 'Goku'). Es una máquina fría.",
    "weaknesses": "Falta de agilidad ante técnicas acrobáticas letales de Ki enfocado."
  },
  // 7. ANDROIDE 15
  {
    "id": "androide-15-pel-culas-dbz-toei-547",
    "name": "Androide 15",
    "alias": "El Sicario Elegante",
    "universe": "Dragon Ball Z (Toei)",
    "saga": "Película: Los 3 Grandes Super Saiyans",
    "version": "Modelo Básico",
    "tier": "Tier 4-C | Nivel Estrella Enana",
    "ap": "Nivel Estrella Enana. Un androide pequeño y extravagante que peleó de tú a tú con Vegeta SSJ, logrando noquear al príncipe saiyajin de un gancho limpio al estómago y esquivando todos sus ataques iniciales.",
    "range": "Físico y ráfagas concentradas.",
    "speed": { "combat": "FTL+ (En evasión).", "reaction": "FTL+.", "travel": "Supersónica.", "attack": "Golpes quirúrgicos rápidos." },
    "strength": { "striking": "Clase Estrella Enana.", "lifting": "Clase Montañas." },
    "durability": "Nivel Estrella Enana. Su pequeña estatura le permitía evadir; murió por un golpe directo de Vegeta.",
    "stamina": "Infinita.",
    "battleIQ": "Programación evasiva. Usa gafas que calculan el ritmo cardíaco y golpes del enemigo para esquivarlos milimétricamente.",
    "haxTags": [ "Evasión Computarizada", "Bebida Energética Oculta" ],
    "arsenal": {
      "basicAttacks": "Ganchos al hígado, patadas bajas.",
      "superAttacks": [
        { "name": "Ráfaga de Ki Púrpura", "desc": "Disparos letales guiados.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Gancho Asesino (Assassin Uppercut)", "desc": "Se sumerge bajo la guardia enemiga y lanza un gancho capaz de derribar Super Saiyajins.", "cost": "0% Ki" }
      ],
      "passives": [
        { "name": "Chip Dual", "desc": "Al morir, potencia al Androide 13.", "cost": "Muerte" }
      ]
    },
    "forms": [ { "id": "15-base", "name": "Cyborg Asesino", "stats": "Nivel Estrella Enana. Piel morada oscura, estatura baja, gafas de sol, sombrero y abrigo ostentoso. Bebe licor de cantimplora (refrigerante)." } ],
    "feats": [ "Humilló a Vegeta SSJ durante el inicio de su combate." ],
    "psychology": "Confianzudo, se burla pasivamente del enemigo esquivando todo sin quitarse el sombrero.",
    "weaknesses": "Al frustrar a un oponente más salvaje (Vegeta enojado), su computadora falla en calcular la fuerza bruta improvisada, siendo decapitado."
  },
  // 8. HIRUDEGARN
  {
    "id": "hirudegarn-pel-culas-dbz-toei-805",
    "name": "Hirudegarn",
    "alias": "El Fantasma Demonio",
    "universe": "Dragon大 Z (Toei)",
    "saga": "Película: El Ataque del Dragón",
    "version": "Forma Verdadera / Completa",
    "tier": "Tier 4-B a 4-A | Nivel Sistema Solar a Multi-Sistema Solar",
    "ap": "Nivel Multi-Sistema Solar (Comparativo a SSJ3 post-Buu). Hirudegarn es una bestia mística creada a partir de hechicería oscura de la raza Kashvar. En su forma alada perfecta, destrozó a Gohan Definitivo, Gotenks SSJ3 y Vegeta SSJ2 de uno o dos golpes con pura fuerza física arrasadora.",
    "range": "Físico (Montañas) y Sistema Solar (Llamas de la Boca).",
    "speed": { "combat": "Inconmensurable.", "reaction": "Inconmensurable.", "travel": "Instantáneo (Teletransporte Fantasmal).", "attack": "Sorpresivo." },
    "strength": { "striking": "Clase Multi-Sistema Solar.", "lifting": "Clase Estelar." },
    "durability": "Nivel Multi-Sistema Solar. Intangible la mayoría del tiempo. Solo es sólido cuando ataca, volviendo los contraataques inútiles.",
    "stamina": "Infinita Absoluta.",
    "battleIQ": "Bestial. Lucha como un insecto gigante cazador; se teletransporta, ataca y se vuelve humo antes de recibir daño.",
    "haxTags": [ "Intangibilidad Pasiva", "Teletransporte de Humo Oscuro", "Fuego del Alma (Atraviesa defensas Ki)" ],
    "arsenal": {
      "basicAttacks": "Coletazos y puñetazos que derrumban ciudades enteras.",
      "superAttacks": [
        { "name": "Aliento de Dragón Oscuro", "desc": "Incinera la ciudad con llamas espirituales que no pueden bloquearse fácilmente con barreras Ki.", "cost": "20% Ki Mágico" }
      ],
      "ultimateAttacks": [
        { "name": "Aplastamiento Fantasmal", "desc": "Aparece encima del oponente aplastándolo, y al instante se vuelve intangible dejando al enemigo enterrado.", "cost": "40% Magia" }
      ],
      "passives": [
        { "name": "Inmunidad Sombría", "desc": "Evade el 100% de ataques a menos que sea atacado en el milisegundo exacto en que él intenta hacer daño (Ventana de debilidad).", "cost": "Pasivo defensivo" }
      ]
    },
    "forms": [ 
      { "id": "hirudegarn-mitad", "name": "Forma Mitad", "stats": "Nivel Sistema Solar. Esqueleto con insecto." },
      { "id": "hirudegarn-perfecto", "name": "Bestia Alada", "stats": "Nivel Multi-Sistema Solar. Kaiju dorado/gris, con alas y caparazón demoníaco." }
    ],
    "feats": [ "Barrió el suelo con el roster completo de Z (Gohan Definitivo incluido).", "Destruyó la sociedad de Konats en horas." ],
    "psychology": "Una fuerza de destrucción descerebrada, alimentada puramente por instinto y maldad.",
    "weaknesses": "Vulnerabilidad a los sonidos de la ocarina de Tapion y se vuelve sólido (vulnerable) justo cuando ataca."
  },
  // 9. TAPION
  {
    "id": "tapion-pel-culas-dbz-toei-767",
    "name": "Tapion",
    "alias": "El Héroe de Konats",
    "universe": "Dragon Ball Z (Toei)",
    "saga": "Película: El Ataque del Dragón",
    "version": "Espadachín Legendario (Maldito)",
    "tier": "Tier 7-B | Nivel Ciudad (Con Hax Sellador Cósmico)",
    "ap": "Nivel Ciudad a Montaña. Físicamente, Tapion es un guerrero noble capaz de enfrentarse a soldados menores o demonios, pero su fuerza radica en su Ocarina Mágica, capaz de controlar, debilitar y sellar monstruos de nivel Multi-Sistema Solar (como Hirudegarn).",
    "range": "Alcance de sonido (Ocarina).",
    "speed": { "combat": "Supersónica.", "reaction": "Hipersónica.", "travel": "Atlética.", "attack": "Rápida (Esgrima)." },
    "strength": { "striking": "Clase Montaña.", "lifting": "Clase Fuerte." },
    "durability": "Nivel Montaña. Sobrevivió a estar cerca del fuego de Hirudegarn.",
    "stamina": "Muy Alta. Puede resistir no dormir durante meses para evitar que la bestia se libere de su cuerpo.",
    "battleIQ": "Héroe trágico. Prepara sellos y usa magia antigua para dar ventaja a los verdaderos guerreros físicos.",
    "haxTags": [ "Ocarina Sagrada (Parálisis Demoníaca)", "Espada Legendaria", "Sello de Alma Humana" ],
    "arsenal": {
      "basicAttacks": "Cortes con la espada legendaria (que luego hereda Trunks).",
      "superAttacks": [
        { "name": "Melodía del Héroe", "desc": "Toca la ocarina, debilitando la intangibilidad y poder ofensivo de demonios en un área masiva, forzándolos a la forma sólida.", "cost": "10% Ki Mágico" }
      ],
      "ultimateAttacks": [
        { "name": "Sacrificio de Konats (Sello Final)", "desc": "Atrae todo el cuerpo de un Demonio Mayor al interior de sí mismo y suplica que un aliado lo asesine con la espada para matar al demonio junto a él.", "cost": "Heroísmo / Muerte" }
      ],
      "passives": [
        { "name": "Voluntad Inquebrantable", "desc": "Inmune al control mental e insomnio.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "tapion-base", "name": "Héroe Mítico", "stats": "Nivel Montaña. Ropa naranja/roja, mohawk rojo, espada a la espalda, mirada triste." } ],
    "feats": [ "Contuvo la mitad de Hirudegarn durante milenios.", "Soportó el cansancio de meses de insomnio para proteger a la Tierra." ],
    "psychology": "Un caballero trágico. Se aleja de las personas para protegerlas de su maldición y carga la culpa de la muerte de su hermano menor.",
    "weaknesses": "Falta de poder destructivo puro; depende del apoyo y sacrificio."
  },
  // 10. CHAMPA
  {
    "id": "champa-dragon-ball-super-179",
    "name": "Champa",
    "alias": "Dios de la Destrucción del Universo 6",
    "universe": "Dragon Ball Super",
    "saga": "Torneo U6 vs U7",
    "version": "Hakaishin (Con sobrepeso)",
    "tier": "Tier 2-C | Nivel Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. Hermano gemelo de Beerus. Posee la energía Hakai capaz de borrar galaxias enteras en segundos. Sin embargo, su pésima forma física y falta de entrenamiento lo hacen el más débil (o al menos el de peor resistencia) de todos los dioses de la destrucción, cansándose tras cruzar un par de golpes con su hermano.",
    "range": "Multiversal.",
    "speed": { "combat": "Inconmensurable.", "reaction": "Inconmensurable.", "travel": "MFTL+.", "attack": "Veloz, pero se agita rápido." },
    "strength": { "striking": "Clase Multiversal Bajo.", "lifting": "Clase Universal." },
    "durability": "Nivel Multiversal Bajo.",
    "stamina": "Baja. Se ahoga y necesita descansos si usa poder bruto.",
    "battleIQ": "Infantil, tramposo, prefiere que otros luchen por él e interrumpe las reglas a su favor.",
    "haxTags": [ "Hakai (Borrado Existencial)", "Aura de Dios de la Destrucción" ],
    "arsenal": {
      "basicAttacks": "Golpes pesados pero torpes.",
      "superAttacks": [
        { "name": "Grito de Destrucción", "desc": "Un grito que evapora planetas cercanos.", "cost": "15% Ki Divino" }
      ],
      "ultimateAttacks": [
        { "name": "Esfera de la Destrucción (Hakai Ball)", "desc": "Arroja una bola de fuego púrpura que aniquila lo que toca, amenazando con destruir ambos universos al chocar con la de Beerus.", "cost": "50% Ki Divino" }
      ],
      "passives": [
        { "name": "Fatiga del Perezoso", "desc": "Si el combate se alarga más de 5 turnos, sus estadísticas de velocidad caen un 50%.", "cost": "Debuff Físico" }
      ]
    },
    "forms": [ { "id": "champa-base", "name": "Dios de la Destrucción", "stats": "Nivel Multiversal Bajo. Gato morado obeso, ropas egipcias rojas y doradas." } ],
    "feats": [ "Destruyó planetas por mero capricho.", "Sus choques físicos con Beerus amenazaban con destruir los Universos 6 y 7." ],
    "psychology": "Un goloso envidioso, tramposo y cobarde frente a entidades superiores (Zeno/Ángeles), pero profundamente apegado en secreto a su hermano Beerus.",
    "weaknesses": "Falta total de resistencia cardiovascular y vulnerabilidad a engaños culinarios."
  },
  // 11. VADOS
  {
    "id": "vados-dragon-ball-super-918",
    "name": "Vados",
    "alias": "El Ángel del Universo 6",
    "universe": "Dragon Ball Super",
    "saga": "Torneo U6 vs U7",
    "version": "Ángel Guía",
    "tier": "Tier 2-B | Nivel Multiversal",
    "ap": "Nivel Multiversal. Hermana mayor de Whis y guía de Champa. Su poder es inmensurablemente mayor que el de cualquier Dios de la Destrucción. Domina el Ultra Instinto pasivo perfecto, creación y destrucción de materia y manipulación temporal. Afirma ser un poco más fuerte que Whis (aunque este dice haber entrenado desde la última vez que compitieron).",
    "range": "Multiversal a través de todo el tejido cósmico.",
    "speed": { "combat": "Inconmensurable+ (UI Perfecto).", "reaction": "Inconmensurable+.", "travel": "MFTL+ extrema (Viaja entre universos en horas).", "attack": "Absoluta." },
    "strength": { "striking": "Clase Multiversal.", "lifting": "Clase Multiversal." },
    "durability": "Nivel Multiversal. Intocable para mortales y dioses.",
    "stamina": "Infinita Absoluta.",
    "battleIQ": "Omnisciente. Observadora, irónica y calculadora.",
    "haxTags": [ "Ultra Instinto Perfecto Permanente", "Manipulación de Tiempo (Reversión)", "Magia Angelical Absoluta", "Proyección Holográfica Múltiple" ],
    "arsenal": {
      "basicAttacks": "Pequeños toques en el cuello que noquean dioses instantáneamente.",
      "superAttacks": [
        { "name": "Reconstrucción Material", "desc": "Crea arenas de combate o escudos invulnerables del tamaño de lunas con solo mover el báculo.", "cost": "0% Magia" }
      ],
      "ultimateAttacks": [
        { "name": "Ley Angelical (Neutralidad)", "desc": "Los ángeles no pelean en serio, pero si rompen las leyes pueden desviar ataques que borrarían universos con un simple toque o retroceder el tiempo 3 minutos exactos.", "cost": "Uso de Báculo" }
      ],
      "passives": [
        { "name": "Intocabilidad Divina", "desc": "Esquiva automática de todo ataque de Tiers inferiores a 2-B.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "vados-base", "name": "Ángel Guía", "stats": "Nivel Multiversal. Alta, piel celeste, cabello blanco atado atrás, báculo sagrado flotante, túnica verde." } ],
    "feats": [ "Noqueó a Champa enfurecido de un simple toque limpio en la nuca.", "Transportó las Super Dragon Balls (del tamaño de planetas) sin esfuerzo." ],
    "psychology": "Burlona, sutilmente sádica con la gordura de Champa. Se divierte con las reacciones dramáticas de su Dios, pero actúa con extrema compostura divina.",
    "weaknesses": "Regla de los Ángeles: Si combate a muerte en un conflicto mortal por voluntad propia, su existencia será erradicada por las leyes del Gran Sacerdote."
  },
  // 12. BARDOCK
  {
    "id": "bardock-dragon-ball-super-194",
    "name": "Bardock",
    "alias": "El Padre de Kakarotto",
    "universe": "Dragon Ball (Super / Z)",
    "saga": "El Último Combate / Granolah",
    "version": "Líder de Escuadrón / Supervivencia",
    "tier": "Tier 5-B a 5-A | Nivel Planeta",
    "ap": "Nivel Planeta (Alto para un Clase Baja). En la continuidad de Super, demostró poder derrotar a Gas (del ejército de Heeter) empujando sus límites evolutivos. En Z, con un poder de casi 10,000, eliminó sin piedad a decenas de soldados de Freezer él solo, pero no pudo frenar la Supernova del Emperador.",
    "range": "Superficie Planetaria.",
    "speed": { "combat": "Relativista.", "reaction": "Relativista (Aumentada por premoniciones en Z).", "travel": "Sub-relativista.", "attack": "Veloz." },
    "strength": { "striking": "Clase Planeta.", "lifting": "Clase Luna." },
    "durability": "Nivel Planeta. Soportó el castigo cósmico y voló al espacio aún herido de muerte.",
    "stamina": "Muy Alta. Dispuesto a morir luchando.",
    "battleIQ": "Veterano de purgas estelares. Inteligencia militar, sabe identificar el patrón enemigo instintivamente.",
    "haxTags": [ "Fuerza de Voluntad Absoluta", "Evolución Reactiva Constante (DBS)", "Visiones del Futuro (DBZ)" ],
    "arsenal": {
      "basicAttacks": "Golpes militares, patadas rodilla-tórax brutales.",
      "superAttacks": [
        { "name": "Jabalina Conmocionadora (Riot Javelin)", "desc": "Esfera azul pulsante lanzada como una bola curva letal.", "cost": "20% Ki" },
        { "name": "Espíritu Saiyan (Combo Rush)", "desc": "Carga frontal encajando decenas de golpes cerrados y rodillazos.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Cañón Espiritual Final (Final Spirit Cannon)", "desc": "El ataque desesperado y concentrado con una sola mano azul turquesa. Usado para intentar detener la Supernova de Freezer (o vencer a Gas en DBS).", "cost": "50% Ki" }
      ],
      "passives": [
        { "name": "Visión de la Caída", "desc": "Si recibe daño crítico, tiene la oportunidad pasiva de evadir el siguiente ataque fatal por una premonición.", "cost": "Pasivo táctico" }
      ]
    },
    "forms": [ 
      { "id": "bardock-base", "name": "Clase Baja", "stats": "Nivel Planeta. Armadura Saiyan verde con hombreras rasgadas, cinta roja empapada en sangre de Toma, cicatriz en la mejilla." },
      { "id": "bardock-oozaru", "name": "Oozaru", "stats": "Nivel Planeta Grande. Multiplica su poder y letalidad, perdiendo agilidad." }
    ],
    "feats": [ "Venció a Gas en el planeta Cereal forzando una evolución Saiyan en pleno combate.", "Cargó contra el ejército entero de Freezer, venciendo a la primera línea antes de caer." ],
    "psychology": "Un guerrero orgulloso, brutal pero con un sentido de protección atípico para los Saiyans hacia su esposa Gine y su hijo Kakarotto (en DBS). En DBZ, un héroe rebelde que abraza su muerte viendo el futuro de Goku.",
    "weaknesses": "Poder neto abismalmente inferior a los demonios del frío."
  }
];

const filePath = path.resolve(__dirname, '../src/data/characters.js');
let content = fs.readFileSync(filePath, 'utf8');

const prefix = 'export const INITIAL_CHARACTERS = ';
const currentList = eval(content.replace(prefix, ''));
console.log(`Current characters count: ${currentList.length}`);

let updatedCount = 0;
batch13Upgrades.forEach(upgrade => {
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

console.log(`Batch 13 Upgrade Complete. ${updatedCount} characters successfully enhanced.`);
