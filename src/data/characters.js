export const INITIAL_CHARACTERS = [
  {
    id: "rocky-zeppeli",
    name: "Rocky White Zeppeli",
    alias: "Energy Man / El Tigre Dorado",
    universe: "Linaje Zeppeli / Crossover",
    version: "Prime (35 años - Forma Máxima)",
    tier: "Tier 7-B (City level) / Power Level: 85,000",
    ap: "Nivel Ciudad (Rayos electromagnéticos de 500,000V a 5,000°C; mordida de Apex Predator con 4,500kg de presión combinada con descargas de plasma).",
    range: "Cuerpo a cuerpo hasta 500 metros (EMP)",
    speed: {
      combat: "Supersónico Alto (Mach 4.5)",
      reaction: "Hipersónico (Mach 8 con reflejos de Apex)",
      travel: "Mach 2 en vuelo electromagnético",
      attack: "Velocidad de la Luz (Relámpagos de plasma)"
    },
    strength: {
      striking: "Town Class (8,000 toneladas de impacto)",
      lifting: "Clase M (Carga rascacielos con electromagnetismo)"
    },
    durability: "Nivel Ciudad con escudo electromagnético hexagonal y piel de Apex Predator; resiste explosiones militares directas.",
    stamina: "Alta (2+ horas de combate continuo), pero el uso de Formas Máximas drena el 80% en 10 minutos.",
    battleIQ: "Genio Táctico y Analítico (Planea 5 jugadas por adelantado y explota debilidades anatómicas).",
    haxTags: ["Manipulación Espacial", "Negación de Durabilidad", "Inmunidad Mental", "Adaptación Reactiva"],
    subEntity: {
      name: "Tigre Dorado Ancestral",
      type: "Stand / Manifestación Espiritual",
      stats: "Refleja el daño al portador, otorga sentidos hiperaguzados de Apex Predator."
    },
    arsenal: {
      basicAttacks: "Golpes electromagnéticos imbuídos en plasma a 5,000°C, Barrido de cola animal y zarpazos de 4,500kg de presión.",
      superAttacks: [
        { name: "Descarga EMP Masiva", desc: "Pulso electromagnético de 500m que fríe sistemas nerviosos y anula circuitos/energía.", cost: "15% Energía" },
        { name: "Lanza de Plasma Concentrado", desc: "Rayo perforante térmico capaz de fundir titanio y atravesar defensas densas.", cost: "20% Energía" }
      ],
      ultimateAttacks: [
        { name: "Maximum Coliseum: Savage Throne", desc: "Expansión de Dominio de 300m. Impone 5 Leyes Físicas Absolutas: Anula vuelo ajeno, prohíbe regeneración y duplica el AP de Rocky.", cost: "80% Energía (Vulnerable 5 min al cerrarse)" }
      ],
      passives: [
        { name: "Escudo Hexagonal Electromagnético", desc: "Barrera pasiva automática que dispersa proyectiles y energía cinética." },
        { name: "Mimetismo Animal Autónomo", desc: "Sentidos hiperdesarrollados que detectan vibraciones del aire y feromonas enemigas." }
      ],
      actives: [
        { name: "Eye of the Tiger (Sobrecarga)", desc: "Aumenta la velocidad de reacción a Mach 10 y activa visión térmica/táctica.", cost: "Fatiga visual tras 5 min" }
      ]
    },
    abilities: [
      { name: "Eye of the Tiger (Mimetismo Animal)", desc: "Transformación total, parcial e híbrida en fauna.", limit: "Conflicto de instintos y límite calórico." },
      { name: "Energy Power (Electromagnetismo)", desc: "Electricidad, magnetismo 100 Tesla, EMP de 500m.", limit: "Límite de desgaste físico." },
      { name: "Maximum Coliseum: Savage Throne", desc: "Dominio de 300m, impone 5 Leyes Absolutas.", limit: "Consume 80% de energía, vulnerable 5 min al cerrarse." }
    ],
    forms: [
      { id: "base", name: "Forma Humana Base", stats: "Fuerza 350kg, Sprint 45km/h." },
      { id: "golden-tiger", name: "Golden Tiger Form", stats: "Fuerza 2,500kg, Vuelo Mach 0.5. Modo balanceado." },
      { id: "apex-predator", name: "Apex Predator Form", stats: "Fuerza 8,000kg, Imparable. Límite 12 minutos." },
      { id: "stealth-hunter", name: "Stealth Hunter Form", stats: "Camuflaje 95%, Sigilo perfecto. Límite 15 minutos." },
      { id: "electromagnetic-beast", name: "Electromagnetic Beast Mode", stats: "Poder Máximo Absoluto x1.5 a todo. Límite 8 minutos." }
    ],
    feats: [
      "Venció al Campeón de Fuego y a la Bestia de Sangre en combate a muerte",
      "Soportó la presión gravitacional de una dimensión colapsada",
      "Bloqueó un rayo militar de 2,000,000V usando su escudo hexagonal"
    ],
    psychology: "Mentalidad de depredador calculador. Traga saliva cuando sufre daño crítico; sonríe de forma sádica cuando su rival cae en su trampa.",
    weaknesses: "Agotamiento extremo post-dominio; sobrecarga sensorial animal si el rival genera frecuencias sónicas disruptivas.",
    equipment: "Guanteletes aislantes de aleación de tungsteno."
  },
  {
    id: "broly-hell",
    name: "Broly",
    alias: "Titán del Apocalipsis",
    universe: "Dragon Ball Z (What-If)",
    version: "Torneo del Infierno",
    tier: "Tier 4-A / Power Level: 15,000,000,000",
    ap: "Multi-Sistema Solar (Ki inagotable que desgarra la estructura del Infierno y pulveriza constelaciones enteras).",
    range: "Interestelar / Multi-Sistema Solar",
    speed: {
      combat: "MFTL+ (Masivamente Más Rápido que la Luz)",
      reaction: "MFTL+ (Reacciona a acometidas de múltiples Super Saiyans)",
      travel: "MFTL+ en vuelo estelar",
      attack: "MFTL+ (Ráfagas de energía que cruzan cuadrantes estelares)"
    },
    strength: {
      striking: "Multi-Stellar Class (Quiebra planetas con el impacto de sus puños)",
      lifting: "Clase Stellar (Levanta continentes y masas planetarias con Ki)"
    },
    durability: "Multi-Sistema Solar (Tanquea ataques concentrados de Ki divino sin retroceder un milímetro).",
    stamina: "Infinita (Su Ki y masa muscular se desbordan continuamente mientras aumenta su furia).",
    battleIQ: "Instintivo y Berserker (Cero estrategia convencional, pero reflejos animales perfectos para aplastar rivales).",
    haxTags: ["Adaptación Reactiva", "Negación de Durabilidad"],
    subEntity: null,
    arsenal: {
      basicAttacks: "Embestidas directas con el hombro que quiebran tectónica, pisotones de impacto sísmico y martillazos dobles.",
      superAttacks: [
        { name: "Gigantic Roar", desc: "Haz de Ki masivo disparado desde la boca que pulveriza la materia atómica a su paso.", cost: "5% Ki" },
        { name: "Eraser Cannon", desc: "Esferas de energía verde esmeralda concentradas con radio de detonación planetario.", cost: "2% Ki" }
      ],
      ultimateAttacks: [
        { name: "Omega Blaster Gigante", desc: "Esfera de destrucción nuclear-estelar que crece exponencialmente devorando toda energía rival.", cost: "10% Ki (Peligro de auto-daño si es reflejada con fuerza superior)" }
      ],
      passives: [
        { name: "Desbordamiento de Ki Infinito", desc: "Su poder de ataque y velocidad aumentan continuamente cada segundo de combate." },
        { name: "Barrera Esmeralda Impenetrable", desc: "Escudo esférico de Ki pasivo que desvía ataques de energía menores automáticamente." }
      ],
      actives: [
        { name: "Frenesí Berserker", desc: "Anula la sensación de dolor y otorga invulnerabilidad al aturdimiento físico.", cost: "Pérdida total del raciocinio" }
      ]
    },
    abilities: [
      { name: "Super Saiyan Legendario (LSSJ + Ikari)", desc: "Fusión Oozaru con LSSJ desatado.", limit: "Frenesí berserker." },
      { name: "Omega Blaster Gigante", desc: "Esfera que erradica la materia atómica al expandirse.", limit: "Peligro de auto-daño si es reflejada." }
    ],
    forms: [
      { id: "base", name: "Forma Base (Restringida/Mind Control)", stats: "Poder contenido por la diadema." },
      { id: "ssj-a", name: "Super Saiyan (Type A - Pelo Azul/Morado)", stats: "Transformación incompleta por restricción." },
      { id: "ssj-c", name: "Super Saiyan Legendario (LSSJ - Pelo Verde)", stats: "Poder ilimitado en constante aumento. Destrucción estelar." },
      { id: "ikari-lssj", name: "Fusión Ikari + LSSJ (What-If)", stats: "15 Mil Millones PL. Multiplicador Oozaru x10 sumado al LSSJ." }
    ],
    feats: [
      "Destruyó la Galaxia del Sur en su juventud",
      "Tanqueó un Kamehameha a quemarropa de Goku sin parpadear",
      "Destrozó a 4 Super Saiyans y a Piccolo simultáneamente"
    ],
    psychology: "Ira pura y sadismo instintivo. Sus pupilas se dilatan hasta desaparecer; ríe maniáticamente cuando aplasta cráneos.",
    weaknesses: "Fácil de engañar con ilusiones tácticas si no recibe daño físico; sobrecarga de energía interna si su cuerpo es perforado.",
    equipment: "Collar y brazaletes de control mental (Rotos)."
  },
  {
    id: "cell-ultra",
    name: "Cell",
    alias: "Ultra Perfecto",
    universe: "Dragon Ball Z (What-If)",
    version: "Torneo del Infierno",
    tier: "Tier 4-B / Power Level: 8,200,000,000",
    ap: "Nivel Sistema Solar (Kamehameha Solar con Ki estabilizado y células de dioses de la destrucción).",
    range: "Sistema Solar",
    speed: {
      combat: "MFTL (Masivamente Más Rápido que la Luz)",
      reaction: "MFTL (Reflejos instantáneos perfeccionados)",
      travel: "MFTL en vuelo",
      attack: "MFTL (Teletransportación instantánea y rayos de Ki)"
    },
    strength: {
      striking: "Multi-Planet Class",
      lifting: "Clase Stellar"
    },
    durability: "Nivel Sistema Solar con regeneración celular absoluta desde un solo núcleo.",
    stamina: "Prácticamente ilimitada gracias a la eficiencia energética androide.",
    battleIQ: "Genio de Combate (Posee la memoria genética de Goku, Vegeta, Piccolo y Freezer).",
    haxTags: ["Anulación de Regeneración", "Adaptación Reactiva", "Negación de Durabilidad"],
    subEntity: null,
    arsenal: {
      basicAttacks: "Golpes de artes marciales combinadas de los Guerreros Z, estocadas de cola y ráfagas Ki veloces.",
      superAttacks: [
        { name: "Makankosappo Perfeccionado", desc: "Rayo en espiral perforante que atraviesa barreras y escudos de energía.", cost: "10% Ki" },
        { name: "Kamehameha Instantáneo", desc: "Disparo a máxima potencia teletransportándose a milímetros del pecho rival.", cost: "15% Ki" }
      ],
      ultimateAttacks: [
        { name: "Solar Kamehameha", desc: "Haz colosal de energía vital capaz de desintegrar el Sol y todo su sistema planetario.", cost: "50% Ki" }
      ],
      passives: [
        { name: "Regeneración Celular Namekiana", desc: "Reconstruye extremidades o el cuerpo entero en segundos si el núcleo craneal sigue intacto." },
        { name: "Zenkai Saiyajin Infinito", desc: "Si sobrevive al borde de la muerte, duplica su AP y velocidad de forma permanente." }
      ],
      actives: [
        { name: "Transmisión Instantánea", desc: "Teletransportación a cualquier firma de energía instantáneamente.", cost: "Mínimo" }
      ]
    },
    abilities: [
      { name: "Zenkai Infinito", desc: "Si roza la muerte y se regenera, duplica su poder.", limit: "Debe sobrevivir." },
      { name: "Arsenal Universal", desc: "Kamehameha, Makankosappo, Genki Dama.", limit: "Requiere Ki." },
      { name: "Regeneración Namekiana Perfeccionada", desc: "Se regenera desde un átomo.", limit: "Núcleo craneal destructible." }
    ],
    forms: [
      { id: "imperfect", name: "Forma Imperfecta (1ra Forma)", stats: "Requiere absorción bio-orgánica para escalar poder." },
      { id: "semi-perfect", name: "Forma Semi-Perfecta (Androide 17)", stats: "Aumento masivo de masa muscular y poder." },
      { id: "perfect", name: "Forma Perfecta (Androide 18)", stats: "Estabilidad máxima. Multiplicadores inmensos." },
      { id: "super-perfect", name: "Forma Super Perfecta (Post-Zenkai)", stats: "Aura eléctrica. Equivalente a un SSJ2." },
      { id: "ultra-perfect", name: "Forma Ultra Perfecta (What-If)", stats: "8.2 Mil Millones PL. Evolución sin límites biológicos." }
    ],
    feats: [
      "Amenazó con destruir el Sistema Solar con su Kamehameha",
      "Sobrevivió a su propia autodestrucción y regresó con Zenkai",
      "Derrotó a Goku en los Cell Games"
    ],
    psychology: "Perfeccionismo arrogante. Hace crujir su cuello cuando se aburre; pierde los estribos cuando es superado en técnica.",
    weaknesses: "Arrogancia narcisista; si su núcleo central en la cabeza es vaporizado por completo, no puede regenerarse.",
    equipment: "Ninguno (Cuerpo bio-sintético autosuficiente)."
  },
  {
    id: "gojo-satoru",
    name: "Gojo Satoru",
    alias: "El Hechicero Más Fuerte",
    universe: "Jujutsu Kaisen",
    version: "Adulto / Shinjuku Showdown",
    tier: "Tier 7-A (Mountain level)",
    ap: "Nivel Montaña / Gran Ciudad (Hollow Purple pulveriza la materia a nivel atómico con masa imaginaria).",
    range: "Varios kilómetros / Interdimensional (Vacío)",
    speed: {
      combat: "Masivamente Hipersónico+ (Mach 100+)",
      reaction: "Hipersónico Alto con Seis Ojos (Procesamiento cuántico)",
      travel: "Teletransportación espacial",
      attack: "Instantáneo con Red / Hollow Purple a Mach 50"
    },
    strength: {
      striking: "Large Building Class (Reforzado con Energía Maldita)",
      lifting: "Clase 100"
    },
    durability: "Nivel Ciudad con Técnica Maldita Inversa continua; Intangible gracias al Infinito pasivo.",
    stamina: "Inagotable (El consumo de Energía Maldita de los Seis Ojos es infinitamente cercano a cero).",
    battleIQ: "Genio Supremo de la Hechicería (Control de tiempo, espacio y dominios a nivel molecular).",
    haxTags: ["Manipulación Espacial", "Borrado Existencial", "Inmunidad Mental", "Negación de Durabilidad"],
    subEntity: null,
    arsenal: {
      basicAttacks: "Golpes marciales imbuidos en Energía Maldita divergente con atracción gravitatoria (Blue).",
      superAttacks: [
        { name: "Técnica Maldita Inversa: Rojo (Red)", desc: "Onda de choque repulsiva que duplica la fuerza de Blue y arrasa bosques enteros.", cost: "Bajo" },
        { name: "Lapso de Técnica Maldita: Azul (Blue)", desc: "Crea un vacío en el espacio que absorbe y tritura todo lo que le rodea.", cost: "Mínimo" }
      ],
      ultimateAttacks: [
        { name: "Hollow Purple 200%", desc: "Colisión de Rojo y Azul que genera masa imaginaria, borrando materia a nivel subatómico.", cost: "Requiere ritual y cánticos" },
        { name: "Expansión de Dominio: Vacío Inconmensurable", desc: "Sobrecarga cerebral infinita. Paraliza el sistema nervioso del rival en 0.2 segundos.", cost: "Burnout de técnica temporal tras cerrarse" }
      ],
      passives: [
        { name: "El Infinito (Mugen)", desc: "Paradoja de Aquiles activa 24/7: todo ataque que se le acerque divide su velocidad infinitamente y se detiene." },
        { name: "Los Seis Ojos (Rikugan)", desc: "Visión atómica que reduce el consumo de Energía Maldita a cero y previene la fatiga cerebral." }
      ],
      actives: [
        { name: "Técnica de Maldición Inversa (RCT)", desc: "Regeneración instantánea de extremidades perdidas y reparación cerebral continua.", cost: "Uso continuo" },
        { name: "La Zona (Black Flash)", desc: "Multiplica el poder del impacto por 2.5 y eleva el potencial al 120%.", cost: "Requiere concentración absoluta" }
      ]
    },
    abilities: [
      { name: "Infinito (Limitless)", desc: "Paradoja de Aquiles, el espacio se divide infinitamente.", limit: "Vulnerable a cortes espaciales o anulación de dominio." },
      { name: "Vacío Inconmensurable", desc: "Sobrecarga de información infinita cerebral.", limit: "Burnout de 10 segundos al romperse." },
      { name: "Hollow Purple", desc: "Masa imaginaria que pulveriza a nivel molecular.", limit: "Lento de cargar al 200%." }
    ],
    forms: [
      { id: "student", name: "Estudiante (Pre-Toji)", stats: "Infinito manual, RCT incompleto." },
      { id: "awakened", name: "El Despertar (Post-Toji)", stats: "RCT automático, Infinito pasivo 24/7, Hollow Purple desbloqueado." },
      { id: "adult", name: "Hechicero Grado Especial (Adulto)", stats: "Poder estabilizado y máxima eficiencia de Energía Maldita." },
      { id: "shinjuku", name: "Modo Shinjuku Showdown (Vs Sukuna)", stats: "Black Flash activo, restauración de cerebro con RCT. Rendimiento 120%." },
      { id: "burnout", name: "Limitless Burnout (Post-Dominio)", stats: "Técnica Maldita apagada por sobrecarga, usa combate cuerpo a cuerpo y Simple Domain." }
    ],
    feats: [
      "Activó un Dominio de 0.2 segundos afectando a cientos de humanos sin matarlos",
      "Sobrevivió en el centro de Malevolent Shrine curándose continuamente",
      "Pulverizó a Toji Fushiguro con Hollow Purple"
    ],
    psychology: "Seguridad absoluta y arrogancia jovial. Se baja la venda para revelar sus Seis Ojos solo ante rivales que considera dignos.",
    weaknesses: "Confiarse en exceso; burnout de su Técnica Maldita tras usar Expansión de Dominio.",
    equipment: "Venda para los ojos / Gafas de sol negras."
  }
];
