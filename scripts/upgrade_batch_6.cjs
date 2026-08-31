const fs = require('fs');
const path = require('path');

const batch6Upgrades = [
  // 1. CELL MAX
  {
    "id": "cell-max-dragon-ball-super-993",
    "name": "Cell Max",
    "alias": "La Falsa Deidad de la Destrucción / El Error de Hedo",
    "universe": "Dragon Ball Super",
    "saga": "Super Hero",
    "version": "Modelo Incompleto de la Red Ribbon",
    "tier": "Tier 2-C | Nivel Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. A pesar de haber despertado sin mente y ser puramente bestial, su enorme poder lo sitúa peligrosamente por encima de los niveles de Broly. Requirió los esfuerzos combinados de Gohan Beast, Orange Piccolo y los Gammas solo para perforar su blindaje y rematarlo. Su grito inicial levantó huracanes que alteraron el ecosistema de la región.",
    "range": "Planetario mediante Super Láser.",
    "speed": {
      "combat": "Inconmensurable. Extremadamente rápido a pesar de ser gigantesco.",
      "reaction": "Inconmensurable.",
      "travel": "MFTL+.",
      "attack": "Golpes fulminantes MFTL+."
    },
    "strength": { "striking": "Clase Multiversal Bajo. Con un solo manotazo arrancó el brazo reforzado de Orange Piccolo (Gigante).", "lifting": "Clase Estelar." },
    "durability": "Nivel Multiversal Bajo. Su piel es más dura que el Katchin, haciéndole invulnerable al 99% de los ataques convencionales del universo, a excepción de su punto débil obvio en la cabeza.",
    "stamina": "Muy Alta. Carece de células de regeneración completas, pero su motor Ki infinito mantiene sus escudos altos.",
    "battleIQ": "Nulo. Es literalmente un monstruo kaiju furioso y descontrolado atacando a todo lo que se mueve.",
    "haxTags": [
      "Fisiología Kaiju Extrema",
      "Inmunidad Térmica y a Venenos",
      "Cañón de Boca de Energía Masiva"
    ],
    "arsenal": {
      "basicAttacks": "Manotazos sísmicos, aplastamiento, coletazos pesados.",
      "superAttacks": [
        { "name": "Bala de Rayos Caótica", "desc": "Dispara cientos de rayos desde todo su cuerpo (alas, pecho) al azar devastando toda la zona.", "cost": "0% Ki" },
        { "name": "Láser de los Ojos", "desc": "Un barrido con la mirada que corta montañas a la mitad.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Esfera Final Desastrosa", "desc": "Acumula todo su poder destructivo en la boca, disparando un pilar de Ki oscuro que erradica por completo la materia celular a nivel subatómico.", "cost": "80% Ki" }
      ],
      "passives": [
        { "name": "Coraza Inquebrantable", "desc": "Ignora todo daño que no provenga de ataques de nivel 2-C o superior (Si el AP del enemigo es menor a Multiversal Bajo, recibe 0 de daño, salvo en su punto débil).", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "cell-max-base", "name": "Kaiju Incompleto", "stats": "Nivel Multiversal Bajo. Piel roja, partes mecánicas visibles, grito demoníaco." } ],
    "feats": [
      "Obligó al sacrificio del Gamma 2 (quien usó toda su energía vital de nivel Blue) y ni siquiera murió de ese impacto.",
      "Mutiló a Orange Piccolo (Gigante).",
      "Aguantó los ataques continuos de múltiples élites Z a la vez."
    ],
    "psychology": "Rabia ciega, dolor y furia. Hedo lo activó antes del lavado de cerebro necesario, por lo que actúa puramente por instinto agresivo sin estrategia.",
    "weaknesses": "Punto débil crítico, estructural y obvio en la coronilla de su cabeza; si recibe un impacto de AP monstruoso (Makankosappo de Beast Gohan) en ese punto, explota irremediablemente."
  },
  // 2. DYSPO
  {
    "id": "dyspo-dragon-ball-super-188",
    "name": "Dyspo",
    "alias": "El Guerrero de la Velocidad Sónica",
    "universe": "Dragon Ball Super",
    "saga": "Torneo del Poder",
    "version": "Modo de Velocidad Súper Máxima Light Bullet",
    "tier": "Tier 3-A | Nivel Universal",
    "ap": "Nivel Universal. Aunque carece del poder bruto aplastante de Toppo o Jiren, su velocidad absurda aumenta exponencialmente la fuerza de sus impactos. Golpear a un oponente a millones de veces la velocidad de la luz convierte simples patadas en misiles destructivos. Pudo humillar a Hit forzando a Goku God a intervenir, y dominó a Freezer Golden usando solo velocidad.",
    "range": "Físico (Combate cerrado) a través de grandes distancias instantáneas.",
    "speed": {
      "combat": "MFTL+ / Superior a la Luz Máxima. Multiplica su velocidad miles de veces instantáneamente.",
      "reaction": "Inconmensurable. Escuchó la tensión muscular de Hit antes de que activara el salto temporal.",
      "travel": "Inconmensurable.",
      "attack": "Velocidad absoluta extrema."
    },
    "strength": { "striking": "Clase Universal. A mayor velocidad de choque, mayor daño.", "lifting": "Clase Planetaria (Menos fuerte en este aspecto)." },
    "durability": "Nivel Universal. Es su stat más débil; si logran atraparlo de lleno, sufre mucho el daño directo (como con Gohan).",
    "stamina": "Muy Alta. Su metabolismo quema energía muy rápido en modo Súper Máximo.",
    "battleIQ": "Arrogante pero hábil. Depende al 90% de su instinto y velocidad auditiva, careciendo de defensas sólidas.",
    "haxTags": [
      "Audición de Frecuencia Muscular",
      "Aceleración Lineal Imposible",
      "Desplazamiento Residual (Ilusiones de velocidad)"
    ],
    "arsenal": {
      "basicAttacks": "Golpes relámpago incesantes. Da 10,000 puñetazos por segundo.",
      "superAttacks": [
        { "name": "Double Cannon Crush", "desc": "Dispara ráfagas duales desde las manos tras rodear al enemigo a alta velocidad.", "cost": "15% Ki" },
        { "name": "Bala de Luz (Light Bullet)", "desc": "Acelera su cuerpo en línea recta superando las leyes cinéticas para embestir.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Modo de Velocidad Súper Máxima Sónica", "desc": "Su aura se vuelve púrpura intenso. Anula por completo cualquier ventaja de velocidad enemiga, volviéndose intocable para seres como Freezer Golden o Gohan Definitivo si el espacio es abierto.", "cost": "40% Ki" }
      ],
      "passives": [
        { "name": "Oído Sónico (Counter Pasivo)", "desc": "Si el enemigo tensa un músculo, Dyspo lo escucha e intercepta el ataque, anulando habilidades temporales sutiles como el Time Skip.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "dyspo-super-speed", "name": "Velocidad Máxima (Light Bullet)", "stats": "Nivel Universal. Aura violácea, aspecto parecido a un conejo de Dios de la Destrucción." } ],
    "feats": [
      "Rompió el Salto Temporal de Hit repetidas veces usando solo sus oídos.",
      "Superó completamente la velocidad de Golden Freezer obligándolo a formar una alianza con Gohan.",
      "Evadió casi la totalidad de los ataques frontales del Universo 7."
    ],
    "psychology": "Orgulloso soldado de la justicia, pero peca de exceso de confianza. Se jacta de ser el ser más rápido del multiverso y se siente ofendido si alguien logra atraparlo.",
    "weaknesses": "Líneas rectas. En su Modo de Velocidad Máxima, es tan veloz que no puede cambiar de dirección fácilmente. Si es acorralado en una caja de Ki (como hicieron Gohan y Freezer), pierde toda su ventaja, ya que su defensa cuerpo a cuerpo estacionaria es frágil."
  },
  // 3. FROST
  {
    "id": "frost-dragon-ball-super-602",
    "name": "Frost",
    "alias": "El Falso Salvador del Universo 6",
    "universe": "Dragon সুপার (Super)",
    "saga": "Torneo U6 vs U7",
    "version": "Forma Final",
    "tier": "Tier 3-A | Nivel Universal",
    "ap": "Nivel Universal. A pesar de verse y luchar igual que Freezer, Frost depende mucho más del juego sucio. Su poder en Forma Final era superior a Piccolo y competía contra Goku estado Base / SSJ (contenido). Su AP letal proviene de sus agujas venenosas ilegales que pueden abatir hasta dioses momentáneamente.",
    "range": "Físico a Planetario.",
    "speed": { "combat": "MFTL+.", "reaction": "MFTL+.", "travel": "MFTL+.", "attack": "Tiros de veneno instantáneos." },
    "strength": { "striking": "Clase Universal.", "lifting": "Clase Estelar." },
    "durability": "Nivel Universal. Soportó golpes de Goku y Vegeta, pero su aguante es inferior al Freezer Dorado.",
    "stamina": "Moderada. Se agota muy rápido si lo arrinconan.",
    "battleIQ": "Manipulador astuto. Finge ser bueno y bondadoso, pero es el jefe de la mafia pirata espacial del U6, ganando combates drogando a los oponentes.",
    "haxTags": [ "Agujas de Parálisis/Sueño (Ilegales)", "Ilusión de Moralidad (Manipulación emocional)" ],
    "arsenal": {
      "basicAttacks": "Golpes calcados del estilo de Freezer, pero con una postura menos refinada.",
      "superAttacks": [
        { "name": "Chaos Beam", "desc": "El equivalente al Death Beam de Freezer, aunque ligeramente menos potente.", "cost": "10% Ki" },
        { "name": "Golpe Venenoso (Aguja Oculta)", "desc": "Al bloquear o dar un puñetazo, inyecta toxinas mortales mediante agujas en sus muñecas que marean instantáneamente a guerreros Tier 2-C o inferiores, bajándoles su Defensa y Precisión al 0%.", "cost": "Ilegal/Táctica" }
      ],
      "ultimateAttacks": [
        { "name": "Bomba Mortal del Universo 6", "desc": "Lanza una esfera destructiva masiva roja con el objetivo de matar, revelando su naturaleza vil.", "cost": "50% Ki" }
      ],
      "passives": [
        { "name": "Carisma del Falso Héroe", "desc": "Al inicio del combate, el rival no ataca a matar (a menos que conozca sus crímenes) debido a su aspecto heroico pacífico, dándole el primer golpe libre.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "frost-forma-final", "name": "Forma Final (Verdadera)", "stats": "Nivel Universal. Idéntico a Freezer final pero blanco y azul." } ],
    "feats": [
      "Derrotó a Goku SSJ (con trampa).",
      "Derrotó a Piccolo (con trampa).",
      "Sobrevivió un ataque de furia de Vegeta SSJ."
    ],
    "psychology": "Mentiroso compulsivo y ruin. Vende planetas arruinados por las guerras que él mismo empieza, para luego ser aclamado como el pacifista que detuvo dichas guerras. Extremadamente cobarde frente a amenazas reales como Freezer o Hit.",
    "weaknesses": "Fuerza y resistencia pobres frente a élites de verdad. Total cobardía; Vegeta y Freezer lo humillaron con un solo ataque en su máxima forma."
  },
  // 4. CABBA
  {
    "id": "cabba-dragon-ball-super-566",
    "name": "Cabba",
    "alias": "El Orgullo de Sadala",
    "universe": "Dragon Ball Super",
    "saga": "Torneo del Universo 6 / Torneo del Poder",
    "version": "Super Saiyan 2",
    "tier": "Tier 3-A | Nivel Universal",
    "ap": "Nivel Universal. Un joven prodigio de los Saiyajin del U6. A pesar de ser delgado, su poder base en su primer torneo equiparaba increíblemente al nivel base de Vegeta (post-saga Buu, lo cual es inmenso). Al alcanzar el SSJ2, sus ataques son contundentes, derribando guerreros de choque y soportando daños formidables por su maestro.",
    "range": "Planetario.",
    "speed": { "combat": "MFTL+.", "reaction": "MFTL+.", "travel": "MFTL+.", "attack": "Golpes en ráfaga rápida." },
    "strength": { "striking": "Clase Universal.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Universal. Soporta palizas brutales de Vegeta y Golden Freezer negándose a caer por respeto a su honor.",
    "stamina": "Muy Alta. Demostró una perseverancia asombrosa.",
    "battleIQ": "Estilo militar formal. Lucha como un soldado del escuadrón de defensa.",
    "haxTags": [ "Estilo de Combate Espejo (Como Vegeta)", "Evolución por Traición/Furia" ],
    "arsenal": {
      "basicAttacks": "Golpes y patadas firmes y rectos, propios de una guardia militar estricta.",
      "superAttacks": [
        { "name": "Cañón Galick (Galick Gun)", "desc": "Adoptando la misma pose que Vegeta, dispara una ola púrpura idéntica en ejecución y potencia.", "cost": "20% Ki" },
        { "name": "Lluvia de Ataques Rápidos", "desc": "Docenas de ráfagas amarillas consecutivas.", "cost": "10% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Impacto Orgullo de Sadala (SSJ2 Rush)", "desc": "En un estallido de ira y honor por las enseñanzas de Vegeta, Cabba descarga toda su Ki en un asalto suicida frontal rematado por un cañón gigante, rompiendo defensas enemigas endurecidas.", "cost": "60% Ki" }
      ],
      "passives": [
        { "name": "Promesa al Maestro", "desc": "Su resistencia y poder de ataque aumentan críticamente cuando está al borde de la eliminación o si insultan a su rey y a su maestro.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "cabba-ssj2", "name": "Super Saiyan 2", "stats": "Nivel Universal. Físico muy delgado, electricidad azul, mirada endurecida de guerrero fiero." } ],
    "feats": [
      "Igualó a Vegeta Base en su estado Base original.",
      "Eliminó a Monna (U4) tras despertar el SSJ2.",
      "Absorbió el impacto psicológico del estilo duro de Vegeta."
    ],
    "psychology": "Noble, puro de corazón y defensor de la paz (irónicamente la antítesis de un Saiyan del U7). Respeta a Vegeta como a un Dios y está dispuesto a morir para no decepcionarlo.",
    "weaknesses": "Le falta músculo y malicia en el combate real cuerpo a cuerpo; se frustra si su oponente es mucho más fuerte (Freezer)."
  },
  // 5. MAGETTA
  {
    "id": "magetta-dragon-ball-super-287",
    "name": "Auta Magetta",
    "alias": "El Metalman",
    "universe": "Dragon Ball Super",
    "saga": "Torneo del Universo 6",
    "version": "Guerrero Robótico Extraterrestre",
    "tier": "Tier 3-A | Nivel Universal",
    "ap": "Nivel Universal. Pertenece a una raza de Metalmen indestructible. Su potencia destructiva proviene del aumento hiperbárico de la temperatura y su mazo físico. Obligó a Vegeta Super Saiyan a luchar en serio por asfixia y temperatura, soportando ráfagas a máximo nivel como Final Flash sin un rasguño exterior.",
    "range": "Montañas a Planetario por lava ardiente.",
    "speed": { "combat": "FTL.", "reaction": "FTL.", "travel": "Sub-relativista.", "attack": "Velocidad decente, pero pesado." },
    "strength": { "striking": "Clase Universal. Sus puños mecánicos levantaban la plataforma Katchin.", "lifting": "Clase Estelar (Absurdamente pesado)." },
    "durability": "Nivel Universal+. Su blindaje supera por mucho la piel de Saiyan; Vegeta literalmete se dañó las manos golpeándolo en SSJ. Piel imbatible.",
    "stamina": "Infinita, se nutre de lava y calor.",
    "battleIQ": "Tosco. Lanza puñetazos de molino sin técnica fina.",
    "haxTags": [ "Fisiología Invulnerable (Metalman)", "Modificación de Escenario (Horno)", "Saliva de Magma Mística" ],
    "arsenal": {
      "basicAttacks": "Golpes pesados de robot, giro como peonza de metal, escupir magma ardiente para limitar el movimiento del rival.",
      "superAttacks": [
        { "name": "Tornado de Lava", "desc": "Gira sobre sí mismo mientras dispara lava hirviente por todo el escenario.", "cost": "0% Ki (Consume Lava)" },
        { "name": "Sartén Ardiente (Golpe)", "desc": "Golpea el suelo con fuerza sísmica para elevar rocas o destruir escudos.", "cost": "10% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Cámara de Calor Extremo (Horno Pasivo)", "desc": "Eleva la temperatura del escenario miles de grados quemando el aire. Los oponentes pierden HP pasivamente por asfixia y se desmayan.", "cost": "Efecto Pasivo Condicional" }
      ],
      "passives": [
        { "name": "Defensa de Acero Absoluto", "desc": "Reducción de daño físico de golpes contundentes en un 99%.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "magetta-base", "name": "Metalman Base", "stats": "Nivel Universal. Robot gigantesco, cabeza de chimenea humeante, peso sobre las 1000 toneladas." } ],
    "feats": [
      "No sufrió ningún rasguño frente al Final Flash de Vegeta SSJ.",
      "Luchó junto a Frost formando una fortaleza inamovible.",
      "Casi elimina a Vegeta por pura asfixia térmica."
    ],
    "psychology": "Silencioso (solo hace ruidos de bocina), pero es un ser extremadamente frágil a nivel emocional.",
    "weaknesses": "Corazón de cristal (Debilidad extrema); si le insultan y escucha algo ofensivo (Ej: 'Pedazo de hojalata'), se desmorona a llorar y pierde toda voluntad de pelear perdiendo la batalla al instante."
  },
  // 6. BOTAMO
  {
    "id": "botamo-dragon-ball-super-999",
    "name": "Botamo",
    "alias": "El Oso Inmune",
    "universe": "Dragon Ball Super",
    "saga": "Torneo del Universo 6",
    "version": "Gladiador de Absorción",
    "tier": "Tier 4-A | Nivel Multi-Sistema Solar a Universal (Defensa)",
    "ap": "Nivel Sistema Solar+. No es particularmente fuerte en AP ofensivo, pero tiene una condición física especial. Su masa de cuerpo blando traslada todos los ataques a una dimensión de bolsillo o los anula por completo, forzando a sus oponentes a buscar otras formas de vencerlo.",
    "range": "Cuerpo a cuerpo y rayos por la boca.",
    "speed": { "combat": "FTL.", "reaction": "FTL.", "travel": "FTL.", "attack": "Regular." },
    "strength": { "striking": "Clase Sistema Solar.", "lifting": "Clase Planetaria." },
    "durability": "Absoluta (Condicional). Es inmune al daño físico, ráfagas, ki y energía. Todo rebota inofensivamente en su barriga.",
    "stamina": "Muy Alta. Carece de desgaste si no le hacen daño.",
    "battleIQ": "Holgazán, confía demasiado en su inmunidad.",
    "haxTags": [ "Redirección Espacial de Daño (Barriga Mística)", "Inmunidad Total al Ki y Golpes" ],
    "arsenal": {
      "basicAttacks": "Golpes de rebote, placajes saltando y cayendo encima del rival con su peso pesado.",
      "superAttacks": [
        { "name": "Bala Botamo (Boca)", "desc": "Dispara pequeñas ráfagas amarillas y precisas por la boca o las orejas.", "cost": "5% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Placaje Inmune Absoluto", "desc": "Camina lentamente hacia el enemigo absorbiendo el 100% del daño del Kamehameha, y los atropella.", "cost": "0% Ki" }
      ],
      "passives": [
        { "name": "Rebote a otra Dimensión", "desc": "El daño recibido es 0 sin importar la fuerza del ataque (a menos que el rival sea Tier 2-C o superior puro). Todo daño se anula por su piel resbaladiza.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "botamo-base", "name": "Oso de Goma Amarillo", "stats": "Nivel Sistema Solar. Físico esférico, cuerpo liso y sudoroso amarillo." } ],
    "feats": [
      "Inmunizó por completo todos los ataques base de Goku, sus patadas y Kamehameha.",
      "Sobrevivió al torneo entero del universo 6 sin recibir un solo hematoma."
    ],
    "psychology": "Totalmente arrogante sobre su poder. Se queda quieto esperando los ataques para reírse. Es perezoso y carece de agresividad marcial.",
    "weaknesses": "Inmunidad física inútil contra Agarres/Lanzamientos (Grapples). Si lo agarran de un brazo y piernas y lo tiran fuera del ring/área, pierde, ya que sus pies no tocan el suelo."
  },
  // 7. NAPPA
  {
    "id": "nappa-saga-saiyan-462",
    "name": "Nappa",
    "alias": "El General Saiyan Calvo",
    "universe": "Dragon Ball Z",
    "saga": "Saga Saiyan",
    "version": "Invasión Terrestre",
    "tier": "Tier 5-C | Nivel Planeta Pequeño",
    "ap": "Nivel Planeta Pequeño. Con un nivel de 4,000 unidades (subiendo temporalmente en ira), Nappa fue una muralla impenetrable para los mejores artistas marciales de la Tierra (Piccolo, Krillin, Tenshinhan, Yamcha). Con levantar dos dedos arrasó la Capital del Este completa, transformándola en un abismo liso.",
    "range": "Superficie Planetaria a Planeta Pequeño.",
    "speed": { "combat": "Sub-relativista. Reaccionaba a los rápidos ataques de Piccolo y Krillin.", "reaction": "Sub-relativista.", "travel": "Hipersónica.", "attack": "Velocidad explosiva física." },
    "strength": { "striking": "Clase Planeta Pequeño (Destrozó un brazo a Tenshinhan de un puñetazo limpio, mutiló a Piccolo).", "lifting": "Clase Montañas." },
    "durability": "Nivel Planeta Pequeño. Piel durísima, soportó el Kikoho y el ataque suicida de Chaoz casi sin daños.",
    "stamina": "Muy Alta. Pelea por horas desatando Ki y masacrando humanos sin sudar.",
    "battleIQ": "Bruto y Descuidado. Pierde los estribos fácilmente e ignora las tácticas; si no fuera por Vegeta dándole órdenes, habría caído en el Kienzan de Krillin.",
    "haxTags": [ "Explosión Volcánica (Levantar dos dedos)", "Oozaru (Implícito pero inactivo)" ],
    "arsenal": {
      "basicAttacks": "Golpes a puño cerrado estilo rompecráneos, pisotones y placajes violentos usando su masa muscular.",
      "superAttacks": [
        { "name": "Tormenta Volcánica (Giant Storm)", "desc": "Levanta dos dedos hacia arriba, haciendo detonar todo el terreno debajo y alrededor de los enemigos.", "cost": "25% Ki" },
        { "name": "Cañón Rompe-Venas (Break Cannon)", "desc": "Un potente disparo desde la boca a quemarropa.", "cost": "30% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Tacleada Asesina (DX Bomber)", "desc": "Envuelve todo su inmenso brazo derecho en un aura amarilla para propinar un golpe directo (el que mató a Piccolo).", "cost": "45% Ki" }
      ],
      "passives": [
        { "name": "Sed de Sangre Saiyan", "desc": "Se ríe del daño menor e ignora ataques contundentes débiles.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "nappa-base", "name": "Comandante Saiyan Base", "stats": "Nivel Planeta Pequeño. Calvo, bigote, inmensamente musculoso, armadura destruida." } ],
    "feats": [
      "Eliminó indirectamente y directamente a la mitad de los Guerreros Z en un solo día.",
      "Resistió ileso la explosión de Chaoz y el Kikoho a quemarropa de Tenshinhan."
    ],
    "psychology": "Matón sádico de manual. Goza sembrando pánico, aplastando esperanzas y destruyendo ciudades solo por 'calentar'. Subestima a todo aquel con un nivel de poder inferior a Vegeta.",
    "weaknesses": "Ira ciega; es torpe y lento en reacción cuando se enfrenta a tácticas sorpresa. Sumisión absoluta e infantil al poder de Vegeta."
  },
  // 8. SAIBAMAN
  {
    "id": "saibaman-saga-saiyan-791",
    "name": "Saibaman",
    "alias": "Arma Biológica Saiyan",
    "universe": "Dragon Ball Z",
    "saga": "Saga Saiyan",
    "version": "Lote Terrestre (Nivel 1200)",
    "tier": "Tier 5-C | Nivel Lunar",
    "ap": "Nivel Lunar (Bajo). A pesar de su apariencia frágil de monstruo de lodo, Vegeta y Nappa aseguran que cada Saibaman posee el mismo poder y velocidad base que Raditz. Son soldados desechables, cultivables, creados por biotecnología espacial.",
    "range": "Montañas a Lunar.",
    "speed": { "combat": "Sub-relativista (A la par del nivel Raditz).", "reaction": "Sub-relativista.", "travel": "Hipersónico.", "attack": "Saltos rápidos." },
    "strength": { "striking": "Clase Lunar (Daños considerables a los humanos y Namekianos de la época).", "lifting": "Clase Base Terrestre Múltiple." },
    "durability": "Nivel Lunar. Fueron borrados de la existencia por ráfagas intensas (Krilin), demostrando baja durabilidad relativa.",
    "stamina": "Moderada. Suelen luchar de forma instintiva e inmolándose antes de cansarse.",
    "battleIQ": "Bajo, inteligencia animal. Siguen órdenes básicas pero actúan salvajemente.",
    "haxTags": [ "Fisiología Botánica/Alienígena", "Auto-Destrucción Letal", "Secreción de Ácido" ],
    "arsenal": {
      "basicAttacks": "Saltos ferales, arañazos y agarres de extremidades a la cabeza.",
      "superAttacks": [
        { "name": "Ácido Craneal", "desc": "Abre la ranura en su cráneo para disparar un líquido altamente corrosivo a la cara del oponente.", "cost": "0% Ki" },
        { "name": "Agarrón Mortal", "desc": "Abrazo por la espalda, bloqueando extremidades.", "cost": "0% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Kamikaze (Abrazo Explosivo)", "desc": "Tras adherirse firmemente al pecho o espalda de la víctima, concentra toda su energía interna en un microsegundo provocando una detonación suicida nivel lunar masiva. (Técnica letal para Yamcha).", "cost": "Muerte" }
      ],
      "passives": [
        { "name": "Mentalidad de Enjambre", "desc": "Sin dolor psicológico ni miedo a morir. Cumplen órdenes al pie de la letra.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "saibaman-base", "name": "Guerrero Semilla", "stats": "Nivel Lunar. Verde, ojos saltones rojos, cabeza surcada, baja estatura." } ],
    "feats": [
      "Equipararon el nivel de los Guerreros Z tras entrenar con Kami.",
      "Asesinaron a Yamcha, borrando su exceso de confianza para siempre."
    ],
    "psychology": "Bestias sin remordimientos, ríen chirriando y no poseen emociones reales.",
    "weaknesses": "Vulnerables a daños en área (Scatter Blast). No piensan por sí mismos ni improvisan."
  },
  // 9. ANDROIDE 19
  {
    "id": "androide-19-saga-androides-393",
    "name": "Androide 19",
    "alias": "El Muñeco Chupasangre / Modelo Absorción",
    "universe": "Dragon Ball Z",
    "saga": "Saga Androides",
    "version": "Completamente Mecánico (Modelo Gero)",
    "tier": "Tier 4-C | Nivel Estrella Enana",
    "ap": "Nivel Estrella Enana. Un robot obeso, pálido y grotesco creado por el Dr. Gero. A diferencia de 17 o 18, carece de energía infinita, dependiendo por completo de absorber Ki por las palmas de sus manos. Supera por mucho al Freezer de Namek al principio, dominando momentáneamente a un Goku SSJ que estaba sufriendo la enfermedad del corazón.",
    "range": "Planetario mediante absorción a corta y larga distancia.",
    "speed": { "combat": "FTL.", "reaction": "FTL.", "travel": "Sub-relativista.", "attack": "Velocidad de absorción inmediata al contacto." },
    "strength": { "striking": "Clase Estrella Enana.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Estrella Enana. Acero y blindaje sintético; carece de miedo y dolor.",
    "stamina": "Muy Alta... condicionada a que siga absorbiendo Ki.",
    "battleIQ": "Programación calculadora pero limitada; si no puede absorber Ki o le rompen las manos entra en pánico subrutinario.",
    "haxTags": [ "Absorción de Ki y Vigor (Sifón Palmar)", "Fisiología Sintética Invulnerable a Gases/Venenos", "Ojo Láser Biónico" ],
    "arsenal": {
      "basicAttacks": "Golpes torpes pero inmensamente pesados, agarres del cuello.",
      "superAttacks": [
        { "name": "Rayo Óptico Destructor", "desc": "Dispara rayos láser precisos con los ojos para incendiar ciudades o cegar.", "cost": "5% Ki" },
        { "name": "Absorción de Ráfagas", "desc": "Pone las palmas al frente y traga literalmente cualquier ataque directo basado en KI (Kamehameha), convirtiéndolo en energía para él.", "cost": "0% Ki (Absorbe)" }
      ],
      "ultimateAttacks": [
        { "name": "Abrazo de la Agonía (Drenaje Vital)", "desc": "Clava sus nodos de las palmas en la piel del adversario inmovilizado y le succiona progresivamente todo el Ki hasta dejarlo inconsciente o muerto.", "cost": "0% Ki (Drena)" }
      ],
      "passives": [
        { "name": "Ausencia de Ki", "desc": "El radar de sentido de Ki orgánico es inútil para predecir sus ataques.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ { "id": "androide-19-base", "name": "Modelo 19 (Mecánico)", "stats": "Nivel Estrella Enana. Gordo, aspecto de payaso robótico, sin emociones humanas." } ],
    "feats": [
      "Derrotó a Goku Super Saiyajin (con la ayuda clave del virus del corazón).",
      "Absorbió el Kamehameha de Goku SSJ sin daños.",
      "Destruyó una ciudad entera con solo mover los ojos."
    ],
    "psychology": "Un sirviente fiel hasta la tumba de Gero. Su voz es robótica y escalofriante, y ríe cuando succiona la vida ajena, aunque experimentó algo similar al 'terror' genuino cuando Vegeta le arrancó las manos.",
    "weaknesses": "Dependencia absoluta a los pequeños cristales rojos de sus palmas. Si Vegeta le arranca las manos o es abrumado físicamente sin ataques Ki (Big Bang Attack directo tras debilitarlo), se vuelve inútil."
  },
  // 10. MAESTRO ROSHI
  {
    "id": "maestro-roshi-jackie-chun-dragon-ball-cl-sico-224",
    "name": "Maestro Roshi",
    "alias": "Dios de las Artes Marciales (Muten Roshi) / Jackie Chun",
    "universe": "Dragon Ball (Clásico a Super)",
    "saga": "Supervivencia Universal / Clásica",
    "version": "Torneo del Poder (Experiencia Máxima)",
    "tier": "Tier 4-C a 3-A | Nivel Estrella Enana (Super)",
    "ap": "Nivel Estrella Enana a Universal Bajo (Con técnicas Hax). Aunque es de los seres más débiles en fuerza bruta o poder base en DBS, Roshi compensa esto con la cúspide marcial técnica del universo mortal. Fue capaz de esquivar golpes del mismísimo Jiren gracias a su pseudo-Ultra Instinto, e inmovilizó o echó a múltiples combatientes de nivel estelar engañándolos y atrapándolos.",
    "range": "Planetario (Kamehameha Original) / Hax Dimensional (Mafuba).",
    "speed": {
      "combat": "Masivamente FTL (Reacción Pura y Evasión por lectura muscular).",
      "reaction": "Inconmensurable (Contra Jiren temporalmente).",
      "travel": "Hipersónica.",
      "attack": "Veloz por anticipación."
    },
    "strength": { "striking": "Clase Montañas a Lunar.", "lifting": "Clase Lunar (100% de Poder)." },
    "durability": "Nivel Montañas. Extremadamente frágil para las ligas mayores de DBZ/Super. Si recibe un golpe directo contundente, sus huesos colapsan o se desmaya (o muere de paro cardiaco).",
    "stamina": "Alta (Mortalmente Alta). Usa su energía de forma perfecta pero su viejo corazón tiene un límite biológico fatal.",
    "battleIQ": "El Maestro Definitivo (Junto a Whis). Su conocimiento del combate no se basa en Ki o raza, sino en leer al oponente antes de que se mueva. Un genio vivo de la técnica de los 360 grados marciales.",
    "haxTags": [
      "Lectura Corporal y Evasión Automática (Pseudo UI)",
      "Sellado Mágico Absoluto (Mafuba)",
      "Hipnosis Inducida",
      "Hipertrofia Muscular Controlada (Máximo Poder)"
    ],
    "arsenal": {
      "basicAttacks": "Golpes suaves que redireccionan la inercia enemiga (Tai Chi), parálisis de articulaciones, hipnosis al mirar el pecho o los ojos.",
      "superAttacks": [
        { "name": "Kamehameha Original (100%)", "desc": "Se convierte en un gigante hipermusculado y desata su icónica onda para destruir el terreno. Coste fatal al cuerpo.", "cost": "80% Ki / Daño por Desgaste" },
        { "name": "Rayo Sorpresa (Bankoku Bikkuri Sho)", "desc": "Paraliza y electrocuta internamente al enemigo transformando Ki en miles de voltios sostenidos.", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Mafuba (Oleada de Contención del Mal)", "desc": "Roshi crea un torbellino verde que atrapa de forma infalible y permanente el alma y cuerpo del enemigo (sin importar cuán divinamente poderoso sea), encerrándolo en un termo o botella minúscula sellada.", "cost": "99% HP / Riesgo de Muerte Súbita Cardiaca" }
      ],
      "passives": [
        { "name": "Maestría sobre el Poder Músculo/Mente", "desc": "Su pasiva ignora parcialmente la diferencia de Estadísticas Base; mientras el oponente use estilos de combate físicos convencionales, Roshi puede esquivarlo y someterlo temporalmente.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [
      { "id": "roshi-base", "name": "Anciano Marcial", "stats": "Nivel Ciudad+. Gafas de sol, caparazón de tortuga." },
      { "id": "roshi-max", "name": "100% (Super Musculoso)", "stats": "Nivel Estrella Enana. Hipertrofia gigante." }
    ],
    "feats": [
      "Destruyó la Luna de un solo Kamehameha en los inicios de DB.",
      "Logró esquivar múltiples asaltos directos de Jiren (El mortal más fuerte) antes de caer por puro desgaste de edad.",
      "Eliminó a varios combatientes de élite en el Torneo del Poder mediante pura inteligencia y el uso del Mafuba (Ganos, Dercori)."
    ],
    "psychology": "Un viejo pervertido el 90% del tiempo, pero en batalla recobra la sabiduría de un dios. Tras purgar sus deseos mundanos temporalmente, alcanza el zen absoluto y se despide filosóficamente de Goku y Krillin pidiéndoles que no dejen de avanzar.",
    "weaknesses": "El envejecimiento biológico, la fragilidad corporal y el desgaste extremo del Mafuba y el 100% que lo acercan invariablemente a la muerte cardiaca. Su perversión si no la ha 'purgado' mediante meditación antes del torneo."
  }
];

const filePath = path.resolve(__dirname, '../src/data/characters.js');
let content = fs.readFileSync(filePath, 'utf8');

const prefix = 'export const INITIAL_CHARACTERS = ';
const currentList = eval(content.replace(prefix, ''));
console.log(`Current characters count: ${currentList.length}`);

let updatedCount = 0;
batch6Upgrades.forEach(upgrade => {
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

console.log(`Batch 6 Upgrade Complete. ${updatedCount} characters successfully enhanced.`);
