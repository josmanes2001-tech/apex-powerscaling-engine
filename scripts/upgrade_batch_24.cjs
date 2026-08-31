const fs = require('fs');
const path = require('path');

const batch24Upgrades = [
  // 1. SPIDER-MAN
  {
    "id": "spider-man",
    "name": "Spider-Man (Peter Parker)",
    "alias": "El Hombre Araña / El Amistoso Vecino",
    "universe": "Marvel Comics",
    "saga": "Tierra-616",
    "version": "Pico Humano Mejorado (Sentido Arácnido)",
    "tier": "Tier 8-A a 7-B | Nivel Multi-Bloque a Ciudad",
    "ap": "Nivel Multi-Bloque (Fuerza de Impacto). Posee la fuerza proporcional de una araña capaz de levantar trenes subterráneos (50+ toneladas) y noquear a dinosaurios gigantes. Su Sentido Arácnido es precognitivo, alertándolo milisegundos antes de cualquier peligro, lo que le permite esquivar balas, rayos de luz y ataques sorpresa.",
    "range": "Decenas de metros (Lanza-Telarañas de alta resistencia).",
    "speed": { "combat": "Masivamente Hipersónica.", "reaction": "Masivamente Hipersónica (Sentido Arácnido Precognitivo).", "travel": "Supersónica (Balanceo con telarañas).", "attack": "Acrobacias continuas." },
    "strength": { "striking": "Clase Multi-Bloque.", "lifting": "Clase 50+ Toneladas." },
    "durability": "Nivel Multi-Bloque. Ha sobrevivido a palizas de Rhino, Juggernaut y explosiones de granadas de calabaza a quemarropa.",
    "stamina": "Muy Alta (Metabolismo sobrehumano resistente a toxinas).",
    "battleIQ": "Genio científico a la par de Tony Stark y Reed Richards; improvisa soluciones químicas y tácticas en segundos.",
    "haxTags": [ "Sentido Arácnido Precognitivo", "Telaraña Fluida Ultra-Resistente (Resistencia superior al acero)", "Adherencia a Superficies Molecular", "Agilidad Acrobática Inigualable" ],
    "arsenal": {
      "basicAttacks": "Golpes acrobáticos de 'Way of the Spider', patadas voladoras desde paredes.",
      "superAttacks": [
        { "name": "Impact Webbing (Disparo de Red Masiva)", "desc": "Dispara cartuchos de fluido arácnido que inmovilizan camiones o enemigos en un capullo elástico.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Maximum Spider / Asalto Acrobático Total", "desc": "Atrapa al rival en una red gigante suspendida en el aire y rebota en todas las esquinas conectando decenas de patadas con toda su fuerza sobrehumana.", "cost": "Impacto Máximo" }
      ],
      "passives": [
        { "name": "Sentido Arácnido Infalible", "desc": "Esquiva automáticamente ataques provenientes de puntos ciegos o de oponentes invisibles.", "cost": "Evasión Pasiva" }
      ]
    },
    "forms": [ 
      { "id": "spidey-clasico", "name": "Spider-Man Clásico", "stats": "Nivel Multi-Bloque. Traje rojo y azul icónico de spandex con telarañas negras." },
      { "id": "spidey-simbionte", "name": "Traje Negro (Simbionte)", "stats": "Nivel Ciudad. Traje alienígena negro que genera telaraña biológica infinita y multiplica su fuerza." }
    ],
    "feats": [ "Sostuvo un puente entero de Nueva York y levantó escombros de miles de toneladas de un edificio colapsado sobre su espalda.", "Derrotó a los Seis Siniestros él solo en múltiples ocasiones." ],
    "psychology": "El epítome del héroe que nunca se rinde: 'Un gran poder conlleva una gran responsabilidad'. Usa el humor y las bromas constantes para ocultar su terror y desestabilizar al enemigo.",
    "weaknesses": "Cuerpo humano biológico susceptible a armas de filo y balas directas si su sentido arácnido es sobrecargado con estímulos excesivos."
  },
  // 2. FUNNY VALENTINE
  {
    "id": "funny-valentine",
    "name": "Funny Valentine",
    "alias": "El 23° Presidente de los Estados Unidos",
    "universe": "JoJo's Bizarre Adventure: Steel Ball Run",
    "saga": "Steel Ball Run (Parte 7)",
    "version": "Dirty Deeds Done Dirt Cheap (D4C: Love Train)",
    "tier": "Tier 8-C Físico | Tier 2-C a 2-A Hax Multiversal",
    "ap": "Nivel Multi-Bloque Físico / Nivel Multiversal (Aniquilación de Materia y Love Train). Su Stand D4C le permite viajar entre infinitas dimensiones paralelas colocándose entre dos objetos. Si trae a un clon dimensional de su oponente y ambos se tocan, son atraídos como imanes y se aniquilan instantáneamente a nivel atómico (Regla de esponjas de Menger). Con Love Train, crea una barrera dimensional que desvía toda la desgracia del mundo.",
    "range": "Multiversal / Interdimensional.",
    "speed": { "combat": "Masivamente FTL+.", "reaction": "Masivamente FTL+.", "travel": "Instantáneo entre universos paralelos.", "attack": "Tiroteo y aniquilación de clones." },
    "strength": { "striking": "Clase Multi-Bloque (D4C arranca extremidades de un golpe).", "lifting": "Clase Stand." },
    "durability": "Invulnerable con Love Train (Toda herida o ataque fatal es redirigido a otra persona en cualquier parte de la Tierra).",
    "stamina": "Infinita (Si es herido de muerte, salta a otra dimensión y transfiere a D4C y su conciencia a un Valentine alternativo sano).",
    "battleIQ": "Patriota brillante y orador maestro; explota las reglas dimensionales para emboscar con infinitos clones.",
    "haxTags": [ "D4C (Viaje Dimensional Infinito y Transferencia de Conciencia)", "Aniquilación por Contacto de Clones (Colapso Atómico)", "D4C: Love Train (Redirección de la Desgracia Cósmica)" ],
    "arsenal": {
      "basicAttacks": "Disparos con revólver Colt, golpes contundentes de D4C.",
      "superAttacks": [
        { "name": "Contacto de Dobles (Aniquilación de Clones)", "desc": "Arrastra a un duplicado del oponente desde un universo paralelo; al tocarse, ambos colapsan y son borrados en una explosión de partículas.", "cost": "Salto Dimensional" }
      ],
      "ultimateAttacks": [
        { "name": "D4C: Love Train (La Brecha de Luz Sagrada)", "desc": "Se oculta dentro de la barrera de luz dimensional del Cadáver Sagrado; cualquier ataque o daño recibido es desviado como 'desgracia' hacia ciudadanos al azar en todo el planeta.", "cost": "Barrera Sagrada" }
      ],
      "passives": [
        { "name": "Transferencia de Alma Eterna", "desc": "Si recibe daño fatal, pasa su Stand a otro Valentine de un universo paralelo conservando todos sus recuerdos y plan.", "cost": "Inmortalidad por Reemplazo" }
      ]
    },
    "forms": [ 
      { "id": "valentine-gordo", "name": "Valentine (Inicio de la Carrera)", "stats": "Nivel Muro. Aspecto regordete y bajo." },
      { "id": "valentine-atletico", "name": "Valentine Renacido (Pico)", "stats": "Nivel Multi-Bloque / Multiversal. Alto, musculoso, cabello rubio largo con rizos cilíndricos, traje rosa." }
    ],
    "feats": [ "Sometió a Diego Brando, Hot Pants y Gyro Zeppeli.", "Sobrevivió a docenas de muertes transfiriendo a D4C entre universos paralelos." ],
    "psychology": "Un patriota con una convicción absoluta: 'Mis acciones no tienen ni un ápice de maldad; todo es por el bien de mi país'.",
    "weaknesses": "El Giro Infinito (Super Spin / Tusk Act 4) de Johnny Joestar, el cual atraviesa las barreras dimensionales de Love Train y persigue su alma a través de todos los universos infinitos."
  },
  // 3. JOHNNY JOESTAR
  {
    "id": "johnny-joestar",
    "name": "Johnny Joestar",
    "alias": "El Jinete del Giro Infinito",
    "universe": "JoJo's Bizarre Adventure: Steel Ball Run",
    "saga": "Steel Ball Run (Parte 7)",
    "version": "Pico de Poder (Tusk Act 4 / Super Spin a Caballo)",
    "tier": "Tier 8-C Físico | Tier 2-C a 2-A Hax del Giro Infinito",
    "ap": "Nivel Multi-Bloque Físico / Nivel Multiversal (Giro Infinito). Con el poder del Giro Dorado montando a su caballo Slow Dancer, desbloqueó 'Tusk Act 4'. Su disparo de uña con Giro Infinito manipula la gravedad y atraviesa las barreras interdimensionales de Love Train, forzando a cada célula del oponente a girar infinitamente hacia un punto cero de la realidad.",
    "range": "Decenas de metros (Disparo de Uñas) / Interdimensional.",
    "speed": { "combat": "Masivamente FTL+.", "reaction": "Masivamente FTL+.", "travel": "A Caballo (Slow Dancer).", "attack": "Uñas giratorias a alta velocidad." },
    "strength": { "striking": "Clase Multiversal con Tusk Act 4 (Capaz de abrir brechas dimensionales con las manos).", "lifting": "Clase Stand." },
    "durability": "Nivel Humano parapléjico (Físico), pero Tusk Act 4 protege su cuerpo.",
    "stamina": "Muy Alta por determinación oscura.",
    "battleIQ": "Jinete prodigio con 'ojos de asesino'; calcula las proporciones del rectángulo dorado de la naturaleza sobre la marcha.",
    "haxTags": [ "Tusk Act 4 (Giro Infinito Trascendental)", "Apertura de Brechas Dimensionales", "Agujeros de Gusano en Espacio Físico" ],
    "arsenal": {
      "basicAttacks": "Disparos de uñas rotatorias desde los dedos (Act 1 a Act 3).",
      "superAttacks": [
        { "name": "Agujeros de Giro Espacial (Act 3)", "desc": "Se dispara a sí mismo para viajar a través de los agujeros dimensionales dejados por sus uñas en el suelo.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Tusk Act 4: El Giro Infinito (Golden Spin)", "desc": "Dispara una uña imbuida con la rotación infinita de la gravedad; el Stand Tusk Act 4 rompe defensas dimensionales y golpea al oponente atrapándolo en una rotación infinita que lo desintegra a nivel celular eternamente.", "cost": "Giro a Caballo Perfecto" }
      ],
      "passives": [
        { "name": "Determinación Oscura", "desc": "Si está acorralado, sus ojos brillan con una llama asesina que ignora la compasión y prioriza matar al objetivo.", "cost": "Pasivo psicológico" }
      ]
    },
    "forms": [ 
      { "id": "johnny-act1", "name": "Johnny (Tusk Act 1-3)", "stats": "Nivel Multi-Bloque. Parapléjico en silla de montar, gorro azul con herradura." },
      { "id": "johnny-act4", "name": "Johnny (Tusk Act 4 / Despertar)", "stats": "Nivel Infinito / Multiversal. Tusk gigante rosa emerge, capaz de ponerse de pie." }
    ],
    "feats": [ "Atravesó la barrera invulnerable de D4C: Love Train y aniquiló a Funny Valentine.", "Persiguió a Valentine a través de dimensiones infinitas con el Giro." ],
    "psychology": "Comenzó como un ex-jinete caído y arrogante pero maduró hacia una búsqueda espiritual de redención personal ('Llegar a cero').",
    "weaknesses": "Necesita a su caballo (Slow Dancer) para alcanzar la postura perfecta del Giro Infinito de Act 4."
  },
  // 4. GRAN REGENTE THRAGG
  {
    "id": "thragg",
    "name": "Gran Regente Thragg",
    "alias": "El Líder Supremo del Imperio Viltrumita",
    "universe": "Invincible",
    "saga": "Guerra Viltrumita / El Fin de Todo",
    "version": "Pico Supremo (Milenios de Entrenamiento)",
    "tier": "Tier 5-B a 5-A | Nivel Planeta Grande (Pico del Verso)",
    "ap": "Nivel Planeta Grande. El guerrero más poderoso de toda la raza Viltrumita durante miles de años. Entrenó desde su nacimiento para ser la máquina de combate perfecta. Decapitó a Thaedus con un solo manotazo, partió a Omni-Man por la mitad con las manos desnudas y combatió a Battle Beast durante días enteros destripados en un planeta en ruinas.",
    "range": "Físico e interplanetario.",
    "speed": { "combat": "Masivamente FTL+.", "reaction": "Masivamente FTL+.", "travel": "MFTL+.", "attack": "Desmembramiento instantáneo." },
    "strength": { "striking": "Clase Planeta Grande (El mayor poder de choque físico de Invincible).", "lifting": "Clase Billones de Toneladas." },
    "durability": "Nivel Planeta Grande. Sobrevivió a ser destripado por Battle Beast y siguió luchando durante días.",
    "stamina": "Monstruosa (Combatió ininterrumpidamente durante 6 días seguidos con el estómago abierto).",
    "battleIQ": "El mayor estratega y duelista de Viltrum; no comete errores técnicos en combate.",
    "haxTags": [ "Fisiología Viltrumita Suprema", "Liderazgo del Imperio", "Fuerza Física Absoluta del Verso" ],
    "arsenal": {
      "basicAttacks": "Golpes con el canto de la mano capaces de cortar espinas dorsales viltrumitas.",
      "superAttacks": [
        { "name": "Decapitación Imperial", "desc": "Carga a velocidad extrema arrancando la cabeza del oponente de un solo tajo limpio.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Desgarro del Tirano", "desc": "Atraviesa el torso del rival con ambos brazos y lo parte en dos verticalmente (Como hizo con Omni-Man).", "cost": "Fuerza Bruta Total" }
      ],
      "passives": [
        { "name": "El Pináculo de Viltrum", "desc": "Su densidad muscular y fuerza bruta superan a cualquier otro viltrumita puro de su era.", "cost": "Pasivo Genético" }
      ]
    },
    "forms": [ 
      { "id": "thragg-regente", "name": "Gran Regente Thragg", "stats": "Nivel Planeta Grande. Manto rojo imperial sobre armadura blanca, bigote espeso, cicatrices de batalla." }
    ],
    "feats": [ "Mató a Thaedus de un golpe.", "Derrotó y mató a Battle Beast en un duelo a muerte de varios días.", "Partió en dos a Omni-Man." ],
    "psychology": "Un tirano eugenésico absoluto y fanático de la pureza y supremacía de Viltrum.",
    "weaknesses": "Calor estelar del núcleo solar (Murió calcinado y desmembrado por Mark Grayson en el Sol)."
  },
  // 5. BATTLE BEAST
  {
    "id": "battle-beast",
    "name": "Battle Beast (Thokk)",
    "alias": "La Bestia de Batalla / El Guerrero Indomable",
    "universe": "Invincible",
    "saga": "Guerra Viltrumita",
    "version": "Pico de Combate (Armamento Maza y Espadas)",
    "tier": "Tier 5-B a 5-A | Nivel Planeta Grande",
    "ap": "Nivel Planeta Grande. Un león humanoide cósmico que vive exclusivamente por y para la gloria del combate a muerte. Es el único ser en el universo capaz de igualar al Gran Regente Thragg en un duelo cuerpo a cuerpo directo. Se auto-mutiló destripándose el vientre solo para que su pelea con Thragg fuera justa.",
    "range": "Físico y Armas Pesadas.",
    "speed": { "combat": "Masivamente FTL+.", "reaction": "Masivamente FTL+.", "travel": "MFTL+.", "attack": "Mandobles brutales." },
    "strength": { "striking": "Clase Planeta Grande.", "lifting": "Clase Billones de Toneladas." },
    "durability": "Nivel Planeta Grande. Peleó durante días con los intestinos colgando en un planeta hostil.",
    "stamina": "Infinita por adicción al combate.",
    "battleIQ": "El mayor duelista con armas blancas de la galaxia; no siente miedo ni duda jamás.",
    "haxTags": [ "Fuerza y Ferocidad Indomable", "Armas Forjadas en Acero Cósmico", "Inmunidad al Dolor Psicológico" ],
    "arsenal": {
      "basicAttacks": "Mordiscos desgarradores de mandíbula leona, mandobles con su hacha y maza cósmica.",
      "superAttacks": [
        { "name": "Tajo Descuartizador", "desc": "Blande su espada gigante cortando la piel impenetrable de los viltrumitas.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Frenesí de Sangre y Gloria", "desc": "Entra en un éxtasis berserker despedazando carne, huesos y órganos del enemigo sin retroceder un solo paso.", "cost": "Adrenalina Máxima" }
      ],
      "passives": [
        { "name": "Código de Honor del Guerrero", "desc": "Si su oponente sufre una desventaja injusta, se mutila a sí mismo para nivelar el campo de batalla.", "cost": "Honor Absoluto" }
      ]
    },
    "forms": [ 
      { "id": "battlebeast-base", "name": "Battle Beast", "stats": "Nivel Planeta Grande. Físico colosal con cabeza de león blanco, melena salvaje y armadura tribal dorada." }
    ],
    "feats": [ "Humilló a Invincible, Monster Girl y Black Samson en su primera aparición en la Tierra.", "Llevó a Thragg al borde de la muerte en una batalla épica de 6 días." ],
    "psychology": "Un adicto glorioso al combate; no le interesa la conquista ni el dinero, solo busca morir o triunfar contra el ser más fuerte del universo.",
    "weaknesses": "Su propio código de honor (se infligió una herida mortal a sí mismo para igualar a Thragg)."
  },
  // 6. KINJI HAKARI
  {
    "id": "kinji-hakari",
    "name": "Kinji Hakari",
    "alias": "El Apostador Empedernido / El Hechicero Inmortal",
    "universe": "Jujutsu Kaisen",
    "saga": "Juego del Sacrificio (Culling Game)",
    "version": "Pico de Poder (Jackpot Infinito)",
    "tier": "Tier 7-B a 7-A | Nivel Ciudad a Montaña",
    "ap": "Nivel Montaña (Jackpot). Con su Expansión de Dominio basada en el Pachinko (Idle Death Gamble), al acertar el 'Jackpot' obtiene Energía Maldita infinita durante exactamente 4 minutos y 11 segundos. Durante este período, su cuerpo realiza Técnica Maldita Inversa de forma refleja automática, otorgándole inmortalidad absoluta mientras suena su música de fondo.",
    "range": "Físico y Expansión de Dominio.",
    "speed": { "combat": "Masivamente Hipersónica.", "reaction": "Masivamente Hipersónica.", "travel": "Hipersónica.", "attack": "Puñetazos ásperos y contundentes." },
    "strength": { "striking": "Clase Montaña durante el Jackpot.", "lifting": "Clase 100+ Toneladas." },
    "durability": "Inmortal / Regeneración Infinita Automática durante 4 minutos y 11 segundos.",
    "stamina": "Infinita durante el Jackpot (y puede encadenar dominios indefinidamente si tiene suerte).",
    "battleIQ": "Apostador nato; manipula probabilidades y resiste ataques mortales para conectar su siguiente ronda.",
    "haxTags": [ "Jackpot de 4 Minutos y 11 Segundos (Energía Maldita Infinita)", "Regeneración Automática Refleja Inmortal", "Expansión de Dominio: Apuesta Mortal Inactiva", "Energía Maldita Áspera (Sensación de Lija Cortante)" ],
    "arsenal": {
      "basicAttacks": "Puñetazos con energía áspera que raspa la piel como papel de lija, puertas de tren y dados de pachinko.",
      "superAttacks": [
        { "name": "Puertas de Vagón de Tren", "desc": "Invoca puertas metálicas que aprisionan y cortan al rival a distancia.", "cost": "5% Energía" }
      ],
      "ultimateAttacks": [
        { "name": "Expansión de Dominio: Idle Death Gamble (Zasatto)", "desc": "Inicia un juego de ruleta Pachinko con reglas automáticas; al obtener 3 números iguales desata el estado de Jackpot Inmortal.", "cost": "30% Energía" }
      ],
      "passives": [
        { "name": "Inmortalidad del Jackpot", "desc": "Durante 4 minutos y 11 segundos, cualquier herida (incluso la destrucción del cerebro o veneno) se regenera de forma refleja instantánea sin gasto de energía.", "cost": "Regeneración Refleja Automática" }
      ]
    },
    "forms": [ 
      { "id": "hakari-base", "name": "Hakari (Base)", "stats": "Nivel Multi-Bloque. Abrigo de piel blanco, cabello rubio rapado, mirada pícara." },
      { "id": "hakari-jackpot", "name": "Modo Jackpot (4:11)", "stats": "Nivel Montaña. Aura desbordante de energía infinita dorada, música de anime sonando en el aire." }
    ],
    "feats": [ "Sobrevivió a que Hajime Kashimo le volara la mitad del torso y le hiciera explotar la cabeza dentro del agua.", "Derrotó a Kashimo encadenando múltiples Jackpots consecutivos." ],
    "psychology": "Vive por la 'Fiebre' de la adrenalina y la apuesta; confía ciegamente en su suerte cósmica para salir victorioso.",
    "weaknesses": "La ventana de vulnerabilidad entre el final de un Jackpot (cuando se apagan los 4:11) y la activación de su siguiente Dominio."
  }
];

const filePath = path.resolve(__dirname, '../src/data/characters.js');
let content = fs.readFileSync(filePath, 'utf8');

const prefix = 'export const INITIAL_CHARACTERS = ';
let currentList = eval(content.replace(prefix, ''));
console.log(`Current characters count: ${currentList.length}`);

let updatedCount = 0;
batch24Upgrades.forEach(upgrade => {
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

console.log(`Batch 24 Upgrade Complete. ${updatedCount} characters successfully enhanced.`);
