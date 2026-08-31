const fs = require('fs');
const path = require('path');

const batch14Upgrades = [
  // 1. KEFLA (PATCH FORMS)
  {
    "id": "kefla-dragon-ball-super-199",
    "name": "Kefla",
    "alias": "La Fusión Imparable del U6",
    "universe": "Dragon Ball Super",
    "saga": "Torneo del Poder",
    "version": "Fusión Pothala (Caulifla + Kale)",
    "tier": "Tier 2-C | Nivel Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. La unión Pothala entre el talento crudo de Caulifla y el poder infinito del Super Saiyan Legendario de Kale creó un monstruo capaz de rivalizar con la Genkidama de Goku y empujarlo a despertar el Ultra Instinto Señal. En SSJ2, su energía era suficiente para borrar universos si no se contenía.",
    "range": "Multiversal (Láseres omnidireccionales).",
    "speed": { "combat": "Inconmensurable.", "reaction": "Inconmensurable.", "travel": "MFTL+.", "attack": "Rayos lumínicos caóticos." },
    "strength": { "striking": "Clase Multiversal Bajo.", "lifting": "Clase Universal." },
    "durability": "Nivel Multiversal Bajo. Soportó golpes de Goku UI Señal antes de caer por un impacto directo masivo a quemarropa (Kamehameha Deslizante).",
    "stamina": "Muy Alta. Sin embargo, su propio poder abrumador amenazaba con romper los pendientes Pothala si se excedía.",
    "battleIQ": "Combate puramente instintivo y salvaje, dominado por la arrogancia de Caulifla.",
    "haxTags": [ "Fusión Pothala Saiyan", "Energía Legendaria (Verde/Roja)", "Adaptación Inmediata" ],
    "arsenal": {
      "basicAttacks": "Ráfagas salvajes y patadas de pura fuerza bruta sin técnica refinada.",
      "superAttacks": [
        { "name": "Fist Cannonball", "desc": "Dispara esferas de energía verde rodeadas de rojo desde los puños.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Gigantic Burst (Arma Definitiva)", "desc": "Libera láseres cortantes en todas direcciones indiscriminadamente. Concentra la energía en un láser colosal doble (Rojo/Verde) capaz de eliminar a guerreros divinos de un impacto directo.", "cost": "60% Ki" }
      ],
      "passives": [
        { "name": "Sinergia de la Locura", "desc": "Mientras más se emociona en el combate, su Ki sube exponencialmente sin límite visible.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ 
      { "id": "kefla-base", "name": "Kefla Base", "stats": "Nivel Universal+. Cabello negro en punta, superando al SSJ God de Goku." },
      { "id": "kefla-ssj1", "name": "Super Saiyan 1", "stats": "Nivel Multiversal Bajo (Menor). Cabello verde/dorado, superando al SSJ Blue." },
      { "id": "kefla-ssj2", "name": "Super Saiyan 2", "stats": "Nivel Multiversal Bajo. Rayos verdes y rojos intensos, su pico máximo capaz de matar a Goku UI con un roce." }
    ],
    "feats": [ "Forzó el despertar del Ultra Instinto en Goku.", "Vaporizó gran parte de la arena de Katchin con sus láseres pasivos." ],
    "psychology": "Sumamente arrogante, amante del fragor de la batalla. Se siente intocable y disfruta probar su poder abrumador.",
    "weaknesses": "Carencia total de refinamiento marcial, lo que la hace presa fácil para evasores perfectos (UI)."
  },
  // 2. CAULIFLA
  {
    "id": "caulifla-dragon-ball-super-537",
    "name": "Caulifla",
    "alias": "La Pandillera Prodigio",
    "universe": "Dragon Ball Super",
    "saga": "Torneo del Poder",
    "version": "Líder Saiyan del Universo 6",
    "tier": "Tier 3-A | Nivel Universal",
    "ap": "Nivel Universal. Una prodigio natural absurda que aprendió el Super Saiyajin solo con sentir un cosquilleo en la espalda, y el SSJ2 instantes después. Aunque su poder bruto es ligeramente inferior al de Cabba y Goku al principio, su ritmo de aprendizaje en batalla es aterrador.",
    "range": "Planetario.",
    "speed": { "combat": "MFTL+.", "reaction": "MFTL+.", "travel": "MFTL+.", "attack": "Veloz." },
    "strength": { "striking": "Clase Universal.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Universal. Sumamente resistente, peleó cansada contra guerreros del Universo 4 y Goku.",
    "stamina": "Media-Alta.",
    "battleIQ": "Luchadora callejera brillante. Aprende técnicas con solo verlas una vez.",
    "haxTags": [ "Crecimiento Exponencial", "Combatiente Callejera" ],
    "arsenal": {
      "basicAttacks": "Golpes pandilleros, patadas en salto, ataques sucios si es necesario.",
      "superAttacks": [
        { "name": "Energy Fist", "desc": "Un puñetazo cubierto de Ki rojo concentrado.", "cost": "10% Ki" },
        { "name": "Crush Cannon", "desc": "Carga y dispara múltiples ráfagas rojas simultáneas.", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Impacto Combinado U6", "desc": "Realiza un asalto sincronizado junto a Kale para abrumar al enemigo.", "cost": "30% Ki" }
      ],
      "passives": [
        { "name": "Genio Saiyan", "desc": "Copia ataques físicos simples del enemigo en el turno posterior a verlos.", "cost": "Pasivo táctico" }
      ]
    },
    "forms": [ 
      { "id": "caulifla-base", "name": "Saiyan Base", "stats": "Nivel Estrella Enana a Universal. Cabello desordenado, top magenta, pantalones anchos." },
      { "id": "caulifla-ssj1", "name": "Super Saiyan 1", "stats": "Nivel Universal. Cabello dorado, aura salvaje." },
      { "id": "caulifla-ssj2", "name": "Super Saiyan 2", "stats": "Nivel Universal+. Electricidad azul, pico de poder." },
      { "id": "caulifla-grade3", "name": "SSJ Tercer Grado", "stats": "Nivel Universal+. Muy musculosa pero lenta (Lo descartó al instante por consejo de Goku)." }
    ],
    "feats": [ "Desbloqueó el SSJ2 en tiempo récord sin entrenamiento divino.", "Combatió a la par con Goku Base/SSJ2 a pesar del agotamiento." ],
    "psychology": "Una macarra orgullosa pero que protege a sus seres queridos (Especialmente a Kale). Ve a Goku como un rival a superar.",
    "weaknesses": "Falta de experiencia contra guerreros de élite milenarios; se confía rápido."
  },
  // 3. KALE
  {
    "id": "kale-dragon-ball-super-934",
    "name": "Kale",
    "alias": "El Demonio del Universo 6",
    "universe": "Dragon Ball Super",
    "saga": "Torneo del Poder",
    "version": "Super Saiyan Legendario",
    "tier": "Tier 3-A a 2-C | Nivel Universal a Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. La contraparte de Broly en el Universo 6. En su estado Berserker, su Ki verde destrozó la arena, caminó a través de un Kamehameha de Goku SSJ Blue y barrió con decenas de competidores simultáneamente. Al controlarlo, su poder se refina perdiendo letalidad ciega pero ganando precisión cooperativa.",
    "range": "Universal.",
    "speed": { "combat": "MFTL+.", "reaction": "MFTL+.", "travel": "MFTL+.", "attack": "Pesada pero implacable." },
    "strength": { "striking": "Clase Multiversal Bajo.", "lifting": "Clase Universal." },
    "durability": "Nivel Multiversal Bajo. (Caminó a través de un ataque divino de Goku).",
    "stamina": "Muy Alta, pero si pierde el control, su Ki se desborda y la agota mentalmente.",
    "battleIQ": "Sumisa y miedosa en base; un monstruo rabioso en Berserker; luchadora competente en estado controlado.",
    "haxTags": [ "Ki Legendario Mutante", "Furia Incontrolable", "Invulnerabilidad Pasiva (Berserker)" ],
    "arsenal": {
      "basicAttacks": "Agarres aplasta-cráneos, lanzar a los enemigos como muñecos de trapo.",
      "superAttacks": [
        { "name": "Resplandor Meteorológico", "desc": "Dispara cientos de bolas verdes omnidireccionales.", "cost": "25% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Blaster Gigante Legendario", "desc": "Dispara una inmensa esfera o rayo verde fosforescente capaz de eliminar guerreros Tier 3-A de un golpe.", "cost": "50% Ki" }
      ],
      "passives": [
        { "name": "Ira por Caulifla", "desc": "Si Caulifla es dañada o alguien la insulta, Kale entra en modo Berserker forzado multiplicando sus stats.", "cost": "Pasivo continuo" }
      ]
    },
    "forms": [ 
      { "id": "kale-base", "name": "Saiyan Base", "stats": "Nivel Ciudad a Universal (Oculto). Tímida, cabello atado, top rojo." },
      { "id": "kale-berserk", "name": "SSJ Berserker", "stats": "Nivel Multiversal Bajo. Gigante hipermusculosa, ojos blancos, pelo verde neón." },
      { "id": "kale-controlada", "name": "SSJ Controlado (True)", "stats": "Nivel Universal+. Más delgada que el Berserker, pupilas visibles, aura verde amarillenta." }
    ],
    "feats": [ "Soportó y atravesó un Kamehameha de Goku SSJ Blue.", "Aplastó el orgullo de guerreros como Freezer o Magetta temporalmente." ],
    "psychology": "Dependencia emocional extrema hacia Caulifla. Tímida hasta el extremo patológico, pero esconde celos destructivos.",
    "weaknesses": "Jiren la noqueó de un solo golpe cuando estaba en Berserker. Su falta de confianza la limita terriblemente en estado base."
  },
  // 4. TOPPO
  {
    "id": "toppo-dragon-ball-super-961",
    "name": "Toppo",
    "alias": "El Líder de las Tropas del Orgullo",
    "universe": "Dragon Ball Super",
    "saga": "Torneo del Poder",
    "version": "Dios de la Destrucción",
    "tier": "Tier 2-C | Nivel Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. Como candidato a Dios de la Destrucción del Universo 11, Toppo domina el Ki divino. En su modo base, lucha a la par de Goku Blue y Vegeta Blue. Al descartar su 'Justicia' y aceptar el Hakai, se envuelve en un manto de destrucción absoluta, destrozando a Freezer Golden y partiendo en dos el estadio de Katchin.",
    "range": "Multiversal (Hakai).",
    "speed": { "combat": "Inconmensurable.", "reaction": "Inconmensurable.", "travel": "MFTL+.", "attack": "Veloz para su tamaño." },
    "strength": { "striking": "Clase Multiversal Bajo.", "lifting": "Clase Universal." },
    "durability": "Nivel Multiversal Bajo. Su Aura de Hakai desintegra ataques menores antes de que lo toquen.",
    "stamina": "Muy Alta.",
    "battleIQ": "Luchador veterano, agarres ortopédicos de sumisión ineludibles.",
    "haxTags": [ "Aura de Hakai Defensiva", "Luxación Articular (Sumisión)" ],
    "arsenal": {
      "basicAttacks": "Justice Flash, Justice Rear Naked Choke, patadas pesadas.",
      "superAttacks": [
        { "name": "Justice Flash", "desc": "Dispara cientos de rayos desde los dedos de sus manos.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Hakai (Destrucción)", "desc": "Reúne energía púrpura divina y la arroja, borrando de la existencia a todo lo que toque y alterando el color del universo mismo. Si no te mata, te incapacita permanentemente.", "cost": "50% Ki Divino" }
      ],
      "passives": [
        { "name": "Manto de la Destrucción", "desc": "Los ataques de Ki que no contengan Ki Divino superior son borrados automáticamente al entrar en contacto con su cuerpo.", "cost": "Defensa Absoluta" }
      ]
    },
    "forms": [ 
      { "id": "toppo-base", "name": "Líder de la Justicia", "stats": "Nivel Universal+. Traje rojo y negro, bigote imponente, aura divina roja." },
      { "id": "toppo-hakaishin", "name": "Modo Dios de la Destrucción", "stats": "Nivel Multiversal Bajo. Piel morada oscura, sin camisa, ojos y símbolos divinos púrpuras, aura Hakai perpetua." }
    ],
    "feats": [ "Sobrevivió al Final Explosion de Vegeta Blue Evolution.", "Sometió a Freezer Golden sin esfuerzo en su modo Dios." ],
    "psychology": "Totalmente devoto a la Justicia y la paz, pero la desesperación por la supervivencia de su universo lo obligó a abandonar sus ideales, convirtiéndose en un destructor frío.",
    "weaknesses": "El Aura de Hakai puede ser sobrepasada por fuerza bruta masivamente superior (Como el ataque final de Vegeta con toda su alma)."
  },
  // 5. FREEZER (SAGA NAMEK) - PATCH FORMS
  {
    "id": "freezer-saga-namek-saga-namek-167",
    "name": "Freezer (Saga Namek)",
    "alias": "El Emperador del Mal",
    "universe": "Dragon Ball Z",
    "saga": "Saga de Namek",
    "version": "100% de Poder / Todas las Formas",
    "tier": "Tier 4-C | Nivel Estrella Enana",
    "ap": "Nivel Estrella Enana. El terror galáctico que exterminó a los Saiyans. En su primera forma, con un poder de 530,000, evaporó el planeta Vegeta. Sus transformaciones sucesivas multiplicaban su poder geométricamente, siendo el tirano indiscutible del universo hasta la aparición del Super Saiyajin legendario.",
    "range": "Sistema Solar Menor (Supernova).",
    "speed": { "combat": "FTL.", "reaction": "FTL.", "travel": "MFTL (Naves).", "attack": "Rayos letales instantáneos." },
    "strength": { "striking": "Clase Estrella Enana.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Estrella Enana. Capacidad increíble para sobrevivir desmembramientos, vacío del espacio, y la explosión de un planeta.",
    "stamina": "Muy Alta en base; Drenaje Crítico en 100%.",
    "battleIQ": "Confiado, cruel, sádico. Solo pelea en serio si su vida peligra o su orgullo es herido de gravedad.",
    "haxTags": [ "Supervivencia en el Vacío", "Telequinesis Fina", "Discos Perseguidores Cortantes" ],
    "arsenal": {
      "basicAttacks": "Golpes con la cola, tortura física (cuernos), patadas asfixiantes.",
      "superAttacks": [
        { "name": "Death Beam", "desc": "Rayo púrpura lanzado del dedo, tan rápido que Piccolo no lo pudo ver.", "cost": "10% Ki" },
        { "name": "Tsuiseki Kienzan", "desc": "Discos de Ki morado que persiguen térmicamente al enemigo, capaces de cortar incluso entidades más fuertes que él.", "cost": "20% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Death Ball / Supernova", "desc": "Esfera colosal de fuego capaz de destruir el núcleo de un planeta al instante o con retraso.", "cost": "50% Ki" }
      ],
      "passives": [
        { "name": "Sadismo Imperial", "desc": "Juega con su comida; su AP aumenta mientras el enemigo esté asustado, pero si es herido de gravedad, pierde el control emocional.", "cost": "Pasivo psicológico" }
      ]
    },
    "forms": [ 
      { "id": "frieza-1", "name": "Primera Forma", "stats": "Nivel Planeta+. Pequeño, cuernos lisos, montado en silla flotante. (530,000 AP)" },
      { "id": "frieza-2", "name": "Segunda Forma", "stats": "Nivel Estrella. Gigante, cuernos de toro, brutalidad física. (+1,000,000 AP)" },
      { "id": "frieza-3", "name": "Tercera Forma", "stats": "Nivel Estrella Alto. Cabeza alargada alienígena, velocidad extrema y spam de rayos." },
      { "id": "frieza-4", "name": "Forma Final", "stats": "Nivel Estrella Enana. Pequeño y liso, blanco y morado. Terrorífico." },
      { "id": "frieza-100", "name": "100% de Poder", "stats": "Nivel Estrella Enana Alto. Músculos hipertrofiados, consume energía rápidamente." }
    ],
    "feats": [ "Sobrevivió a la explosión del Planeta Namek partido a la mitad y sin energía.", "Humilló a Vegeta, Gohan, Krilin y Piccolo seguidos." ],
    "psychology": "Cree genuinamente que es el ser más perfecto del universo, intolerante a cualquier tipo de rebelión, tratando a las vidas ajenas como basura descartable.",
    "weaknesses": "Arrogancia ciega. Su forma del 100% quema Ki de forma insostenible en batallas largas."
  },
  // 6. SUPER BUU (PATCH FORMS)
  {
    "id": "super-buu-saga-buu-69",
    "name": "Super Buu",
    "alias": "El Monstruo Rosa Definitivo",
    "universe": "Dragon Ball Z",
    "saga": "Saga de Buu",
    "version": "Absorciones (Gohan, Gotenks, Piccolo)",
    "tier": "Tier 3-C | Nivel Galaxia a Multi-Galaxia",
    "ap": "Nivel Galaxia a Multi-Galaxia. La encarnación más letal y calculadora del Majin de DBZ (antes de Kid Buu puro). Tras asimilar a Gohan Definitivo (Buuhan), se convirtió en un monstruo capaz de desgarrar las dimensiones del universo gritando, siendo el antagonista más poderoso de toda la obra original (solo superado por Vegetto).",
    "range": "Galáctico a Universal (Grito dimensional).",
    "speed": { "combat": "MFTL+.", "reaction": "MFTL+.", "travel": "Instantáneo (Shunkanido copiado).", "attack": "Veloz." },
    "strength": { "striking": "Clase Galaxia.", "lifting": "Clase Estelar." },
    "durability": "Nivel Galaxia. Sumado a regeneración a nivel atómico-mágico casi instantánea.",
    "stamina": "Infinita Absoluta.",
    "battleIQ": "Extremadamente inteligente y manipulador; asimiló el cerebro estratégico de Piccolo y el talento de los Saiyans.",
    "haxTags": [ "Absorción Biológica Mágica", "Grito Rasga-Dimensiones", "Regeneración Total" ],
    "arsenal": {
      "basicAttacks": "Extensión de brazos y antena, ataques mágicos combinados con el Kamehameha o el Masenko.",
      "superAttacks": [
        { "name": "Rayo Transmutador (Candy Beam)", "desc": "Dispara magia rosa que convierte materia o personas en dulces/café.", "cost": "20% Ki Mágico" },
        { "name": "Super Kamikaze Ghost Attack", "desc": "Versión robada de Gotenks, pero combinada con Kamehamehas.", "cost": "25% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Vice Shout (Destrucción Dimensional)", "desc": "Grita con todo su poder enfurecido rasgando el tejido del universo, amenazando con aplastar todo el macrocosmos bajo dimensiones alternas cayendo unas sobre otras.", "cost": "70% Ki" }
      ],
      "passives": [
        { "name": "Asimilación Táctica", "desc": "Puede separar partes de su cuerpo viscoso para atrapar al enemigo por la espalda y absorberlo, sumando sus Stats a los suyos.", "cost": "Pasivo táctico" }
      ]
    },
    "forms": [ 
      { "id": "super-buu-base", "name": "Super Buu (Base)", "stats": "Nivel Galaxia. Supera a SSJ3 Goku pero inferior a Gohan. Musculoso, alto, sin chaleco." },
      { "id": "buutenks", "name": "Buutenks", "stats": "Nivel Multi-Galaxia Menor. Absorbió a Gotenks SSJ3 y Piccolo. Usa chaleco Metamoru." },
      { "id": "buuccolo", "name": "Buuccolo", "stats": "Nivel Galaxia. Se acabó la fusión de Gotenks en su interior; viste la capa de Piccolo. Muy inteligente pero más débil." },
      { "id": "buuhan", "name": "Buuhan", "stats": "Nivel Multi-Galaxia. Absorbió a Gohan Definitivo. Viste dogi rojo de Goku. El pico absoluto de su poder en Z." }
    ],
    "feats": [ "Abrió un portal en el Salón del Espíritu y el Tiempo gritando.", "Llevó el universo entero al borde del colapso dimensional." ],
    "psychology": "Sádico, impaciente y sumamente inteligente. Le encanta humillar a sus oponentes con el poder robado, pero pierde los estribos fácilmente si alguien es más fuerte (Vegetto).",
    "weaknesses": "Las absorciones son temporales si las víctimas son liberadas de los capullos en su interior."
  },
  // 7. CELL (SAGA ANDROIDES) - PATCH FORMS
  {
    "id": "cell-saga-androides-98",
    "name": "Cell",
    "alias": "El Bio-Androide Perfecto",
    "universe": "Dragon Ball Z",
    "saga": "Saga Androides",
    "version": "Evolución Completa",
    "tier": "Tier 4-B | Nivel Sistema Solar",
    "ap": "Nivel Sistema Solar. La creación culmen del Dr. Gero. Contiene células de Goku, Vegeta, Piccolo, Freezer y King Cold. En su forma Super Perfecta, su Kamehameha Solar amenazaba con vaporizar todo el sistema solar, forzando a Gohan SSJ2 a superarlo en un choque legendario.",
    "range": "Sistema Solar.",
    "speed": { "combat": "MFTL+.", "reaction": "MFTL+.", "travel": "Shunkanido.", "attack": "Elegante y veloz." },
    "strength": { "striking": "Clase Sistema Solar.", "lifting": "Clase Estelar." },
    "durability": "Nivel Sistema Solar. Regeneración de Namekian, núcleo en la cabeza (retcon: cualquier célula).",
    "stamina": "Muy Alta. Usa células Androide para estabilizar el consumo.",
    "battleIQ": "El combatiente perfecto. Domina las técnicas de Z de forma innata y no tiene puntos ciegos tácticos.",
    "haxTags": [ "Regeneración Celular", "Zenkai Saiyan", "Absorción Biológica", "Shunkanido" ],
    "arsenal": {
      "basicAttacks": "Copia perfecta de los estilos marciales de Goku, Vegeta, y Freezer.",
      "superAttacks": [
        { "name": "Makankosappo / Kienzan", "desc": "Técnicas heredadas, usadas con mayor eficiencia y velocidad.", "cost": "15% Ki" },
        { "name": "Death Beam", "desc": "Rayo rápido de Freezer, usado para asesinar a Trunks.", "cost": "10% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Kamehameha Solar (Super Perfecto)", "desc": "Canaliza todo su poder Zenkai en una onda que asegura destruir todo el Sistema Solar si no es repelida por una fuerza superior.", "cost": "60% Ki" }
      ],
      "passives": [
        { "name": "Zenkai Inmortal", "desc": "Si se regenera desde el borde de la muerte (núcleo celular), su poder se multiplica y gana aura SSJ2.", "cost": "Buff Pasivo" }
      ]
    },
    "forms": [ 
      { "id": "cell-imperfecto", "name": "Cell Imperfecto", "stats": "Nivel Estrella Enana. Aspecto de insecto reptiliano, usa su cola para beber humanos." },
      { "id": "cell-semi", "name": "Cell Semi-Perfecto", "stats": "Nivel Estrella Enana Alta. Absorbió a 17. Muy musculoso, rostro más humanoide." },
      { "id": "cell-perfecto", "name": "Cell Perfecto", "stats": "Nivel Sistema Solar Menor. Absorbió a 18. Rostro pulido, elegante, intocable para Vegeta." },
      { "id": "cell-super-perfecto", "name": "Cell Super Perfecto", "stats": "Nivel Sistema Solar. Zenkai tras su suicidio. Electricidad en el aura, poder máximo." }
    ],
    "feats": [ "Humilló a Vegeta Super Saiyan y a Trunks SSJ de tercer grado.", "Sobrevivió a la auto-destrucción total y regresó aún más fuerte." ],
    "psychology": "Narcisista supremo. No quiere conquistar el universo, solo quiere aterrorizar y demostrar que es la existencia perfecta probando su poder en un torneo.",
    "weaknesses": "Ego desmedido que lo llevó a enfurecer a Gohan innecesariamente y sellar su propia muerte."
  },
  // 8. FROST (PATCH FORMS)
  {
    "id": "frost-dragon-ball-super-662",
    "name": "Frost",
    "alias": "El Falso Salvador del Universo 6",
    "universe": "Dragon Ball Super",
    "saga": "Torneo U6 vs U7",
    "version": "Emperador Pirata",
    "tier": "Tier 3-A | Nivel Universal (Bajo)",
    "ap": "Nivel Universal Bajo. Es la contraparte de Freezer en el U6, pero su poder está un poco por debajo del de Freezer Dorado/Final post-entrenamiento. Usa trampas venenosas para derrotar a oponentes mucho más fuertes que él, como Goku SSJ1 o Piccolo, ganando por suciedad.",
    "range": "Planetario.",
    "speed": { "combat": "MFTL.", "reaction": "MFTL.", "travel": "MFTL.", "attack": "Rápido." },
    "strength": { "striking": "Clase Universal Bajo.", "lifting": "Clase Planetaria." },
    "durability": "Nivel Universal Bajo. Poca tolerancia al dolor; Hit y Vegeta lo vencieron de un solo golpe.",
    "stamina": "Media.",
    "battleIQ": "Maestro del engaño. Simula ser un filántropo pacifista mientras oculta armas letales.",
    "haxTags": [ "Veneno Adormecedor Ilegal", "Ilusión Social" ],
    "arsenal": {
      "basicAttacks": "Técnicas idénticas a las de Freezer pero con nombres 'heróicos'.",
      "superAttacks": [
        { "name": "Death Beam (Rayo Secreto)", "desc": "Disparos rápidos a las piernas o brazos para mermar movilidad.", "cost": "10% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Aguja Venenosa (Aguijón Sorpresa)", "desc": "Pincha al rival con una aguja oculta en su muñeca que inyecta una toxina que nubla la vista y debilita el cuerpo en segundos, forzando la derrota de Dioses si están descuidados.", "cost": "0% Ki (Objeto ilegal)" }
      ],
      "passives": [
        { "name": "Actor Experto", "desc": "Engaña al oponente para que baje la guardia y reciba daño crítico.", "cost": "Pasivo táctico" }
      ]
    },
    "forms": [ 
      { "id": "frost-1", "name": "Primera Forma", "stats": "Nivel Universal Bajo. Idéntico a Freezer 1, pero colores azules, modales exquisitos." },
      { "id": "frost-3", "name": "Forma Asalto (Tercera)", "stats": "Nivel Universal Bajo. Cuernos, brutal, la usa para someter planetas rebeldes en secreto." },
      { "id": "frost-final", "name": "Forma Final", "stats": "Nivel Universal Bajo. Aspecto liso de combate." },
      { "id": "frost-100", "name": "100% de Poder", "stats": "Nivel Universal Bajo. Musculoso pero inestable, desgasta energía brutalmente." }
    ],
    "feats": [ "Logró eliminar del ring a Goku Base/SSJ y a Piccolo mediante veneno." ],
    "psychology": "Un pirata espacial narcisista que crea guerras en secreto para detenerlas públicamente y ser aclamado como el héroe salvador, vendiendo los planetas devastados.",
    "weaknesses": "Falta de honor, tolerancia nula al dolor, humillado fácilmente por poder abrumador (Hit/Vegeta/Freezer)."
  },
  // 9. GOKU BLACK (PATCH FORMS)
  {
    "id": "goku-black-l-nea-temporal-futura-209",
    "name": "Goku Black (Zamasu)",
    "alias": "El Dios Falso",
    "universe": "Dragon Ball Super",
    "saga": "Trunks del Futuro",
    "version": "Zamasu en el Cuerpo de Goku",
    "tier": "Tier 2-C | Nivel Multiversal Bajo",
    "ap": "Nivel Multiversal Bajo. El aprendiz de Kaioshin que robó el cuerpo de Goku de otra línea temporal. Combina el Zenkai ilimitado de un cuerpo Saiyan con la mente demente y magia divina de un dios. En su forma Super Saiyan Rosé, destrozó a Vegeta Blue y Goku Blue con facilidad, manipulando el espacio-tiempo con su Guadaña.",
    "range": "Multiversal (Brechas Dimensionales).",
    "speed": { "combat": "Inconmensurable.", "reaction": "Inconmensurable.", "travel": "Instantáneo (Shunkanido Oscuro).", "attack": "Ciega." },
    "strength": { "striking": "Clase Multiversal Bajo.", "lifting": "Clase Universal." },
    "durability": "Nivel Multiversal Bajo. Cada golpe que recibe nutre su Zenkai oscuro.",
    "stamina": "Muy Alta. Su ki divino parece retroalimentarse.",
    "battleIQ": "Lucha con la elegancia de un Dios, pero es sádico. Sabe explotar la furia del rival.",
    "haxTags": [ "Zenkai Continuo del Dolor", "Espada y Guadaña Divina de Ki", "Clones Temporales" ],
    "arsenal": {
      "basicAttacks": "Golpes letales refinados y cortes de energía a la garganta.",
      "superAttacks": [
        { "name": "Espada de Ki Rosé (Azure Dragon Sword)", "desc": "Crea una espada de energía en su mano que perfora la carne y bloquea puños divinos.", "cost": "15% Ki Divino" },
        { "name": "Kamehameha Oscuro (Black Kamehameha)", "desc": "Versión púrpura y negra, superior en poder base al estándar.", "cost": "25% Ki Divino" }
      ],
      "ultimateAttacks": [
        { "name": "Guadaña de la Pena (Sickle of Sorrow)", "desc": "Crea una inmensa guadaña rosada. Al blandirla, rasga el espacio-tiempo, creando una grieta dimensional de la que emergen clones infinitos e inmortales de Black hechos de humo/ki.", "cost": "50% Ki Divino" }
      ],
      "passives": [
        { "name": "Dolor Exquisito", "desc": "Cada golpe directo que recibe aumenta permanentemente su Poder de Ataque, fusionando mejor su alma al cuerpo Saiyan.", "cost": "Zenkai Pasivo" }
      ]
    },
    "forms": [ 
      { "id": "black-base", "name": "Estado Base", "stats": "Nivel Universal. Supera al SSJ3 y rivaliza temporalmente con el God en sus primeras fases." },
      { "id": "black-ssj", "name": "Super Saiyan (Manga)", "stats": "Nivel Universal+. Pelo dorado, aura eléctrica. Usado antes del Rosé en el manga." },
      { "id": "black-rose", "name": "Super Saiyan Rosé", "stats": "Nivel Multiversal Bajo. Pelo rosa pastel divino. Variante del Blue al tener alma real de deidad." },
      { "id": "black-guadaña", "name": "Rosé (Guadaña)", "stats": "Nivel Multiversal Bajo+. Máximo poder manipulando fisuras dimensionales." }
    ],
    "feats": [ "Perforó el pecho de Vegeta Super Saiyan Blue.", "Creó fisuras dimensionales que incluso él mismo no entendía." ],
    "psychology": "Hipócrita absoluto. Desprecia a los mortales llamándolos inmundos, pero disfruta perversamente usar el cuerpo mortal supremo (Goku) para asesinarlos.",
    "weaknesses": "Arrogancia narcisista; si es abrumado físicamente sin dejarle tiempo a evolucionar, sufre daño letal."
  },
  // 10. RIBRIANNE (PATCH FORMS)
  {
    "id": "ribrianne-dragon-ball-super-396",
    "name": "Ribrianne",
    "alias": "La Guerrera del Amor",
    "universe": "Dragon Ball Super",
    "saga": "Torneo del Poder",
    "version": "Kamikaze Fireballs (U2)",
    "tier": "Tier 3-A | Nivel Universal",
    "ap": "Nivel Universal. La líder indiscutible del Universo 2. Su poder proviene de las emociones del amor. Aunque cómica en apariencia, su poder real forzó a Vegeta SSJ1 y Android 18 a tomarla en serio, soportando sus ataques de poder bruto. En modo Super Ribrianne Gigante o Alas de Amor, iguala la fuerza de un guerrero élite.",
    "range": "Planetario.",
    "speed": { "combat": "MFTL.", "reaction": "MFTL.", "travel": "MFTL.", "attack": "Veloz (Rodamientos mágicos)." },
    "strength": { "striking": "Clase Universal.", "lifting": "Clase Universal (Gigante)." },
    "durability": "Nivel Universal. Capa de grasa/amor que amortigua golpes físicos de Vegeta.",
    "stamina": "Muy Alta. Se retroalimenta del apoyo de su universo.",
    "battleIQ": "Cree ciegamente que el 'amor' lo soluciona todo; se vuelve loca de rabia si ofenden la belleza.",
    "haxTags": [ "Magia Emocional", "Gigantificación", "Ataque Fragancia (Lavado Cerebral Menor)" ],
    "arsenal": {
      "basicAttacks": "Puñetazos de amor, embestidas rodantes como bola de cañón.",
      "superAttacks": [
        { "name": "Pretty Cannon", "desc": "Dispara corazones de energía rosada explosivos.", "cost": "15% Ki Mágico" },
        { "name": "Light of Love", "desc": "Dispara flechas que liberan un aroma cautivador, mareando a oponentes masculinos.", "cost": "10% Ki Mágico" }
      ],
      "ultimateAttacks": [
        { "name": "Super Ribrianne (Amor Máximo)", "desc": "Recibe el Ki de amor de todo su universo, volviéndose un avatar colosal (Kaiju de Amor) para golpear físicamente con puños gigantescos.", "cost": "50% Ki" }
      ],
      "passives": [
        { "name": "Belleza Subjetiva", "desc": "Es inmune a ataques psicológicos de seducción de oponentes menos 'hermosos' según su propio criterio loco.", "cost": "Pasivo defensivo" }
      ]
    },
    "forms": [ 
      { "id": "brianne-base", "name": "Brianne de Chateau", "stats": "Nivel Humano/Ciudad. Chica humana delgada, de pelo verde, aspecto idol." },
      { "id": "ribrianne", "name": "Ribrianne", "stats": "Nivel Universal. Chica mágica regordeta teletubbie, ropas rosas." },
      { "id": "super-ribrianne", "name": "Super Ribrianne", "stats": "Nivel Universal+. Alas de mariposa, gigante." }
    ],
    "feats": [ "Soportó una intensa pelea contra Androide 18 y Vegeta." ],
    "psychology": "Delirante; cree que su forma redonda es la cumbre de la belleza universal y considera feos a seres como Krilin o Androide 18.",
    "weaknesses": "Desequilibrio mental. Si dudan de su belleza o destruyen su ideología, se desmoraliza completamente."
  },
  // 11. BERGAMO (PATCH FORMS)
  {
    "id": "bergamo-dragon-ball-super-963",
    "name": "Bergamo",
    "alias": "Bergamo el Aplastador",
    "universe": "Dragon Ball Super",
    "saga": "Torneo de Exhibición / Poder",
    "version": "Trío del Peligro (Universo 9)",
    "tier": "Tier 3-A | Nivel Universal",
    "ap": "Nivel Universal. El hermano mayor de los lobos del U9. Su poder base es nivel SSJ1/SSJ2, pero su habilidad pasiva es monstruosa: absorbe el poder de los golpes enemigos y los convierte en su propio poder, aumentando su tamaño y fuerza de manera pasiva hasta rivalizar temporalmente con el SSJ Blue.",
    "range": "Universal (Triángulo de Peligro).",
    "speed": { "combat": "MFTL.", "reaction": "MFTL.", "travel": "MFTL.", "attack": "Lenta si está gigante." },
    "strength": { "striking": "Clase Universal (Escala con daño).", "lifting": "Clase Planetaria." },
    "durability": "Nivel Universal. Su principal virtud; absorbe el dolor de golpes directos (aunque sufre daños internos acumulativos).",
    "stamina": "Media. Su propio crecimiento destruye su resistencia pasivamente.",
    "battleIQ": "Lobo astuto, engaña a la deidad para ganarse simpatía táctica, lucha en equipo (Triangle Danger).",
    "haxTags": [ "Absorción de Energía Kinética", "Gigantificación Pasiva" ],
    "arsenal": {
      "basicAttacks": "Zarpazos, patadas pesadas, mordiscos en equipo.",
      "superAttacks": [
        { "name": "Wolfgang Penetrator", "desc": "Su ataque personal, dispara una ráfaga aullante roja/azul letal desde sus manos.", "cost": "20% Ki" },
        { "name": "Triangle Danger Beam", "desc": "Un ataque conjunto en triángulo con Basil y Lavender.", "cost": "30% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Bergamo Aplastador (Devolución Total)", "desc": "Tras absorber enormes cantidades de daño, lanza todo ese daño multiplicado en una inmensa esfera de Ki (Rivalizó con el Kamehameha SSJ Blue + Kaio-ken de Goku).", "cost": "Toda la energía absorbida" }
      ],
      "passives": [
        { "name": "Crecimiento del Dolor", "desc": "Gana un % de daño y tamaño extra por cada golpe físico o de ki directo que soporte sin cubrirse.", "cost": "Buff / Debuff (Blanco fácil)" }
      ]
    },
    "forms": [ 
      { "id": "bergamo-base", "name": "Base Humanoide Lobo", "stats": "Nivel Universal Bajo. Bufanda roja, cuerpo alto esbelto." },
      { "id": "bergamo-gigante", "name": "Bergamo Gigante", "stats": "Nivel Universal. Lobo colosal del tamaño del estadio (Kaiju) alimentado de puro castigo enemigo." }
    ],
    "feats": [ "Soportó golpes divinos de Goku Blue, absorbiéndolos para crecer." ],
    "psychology": "Detesta profundamente al Universo 7, creyendo que Goku es el villano absoluto que ha condenado a todos los universos por puro capricho.",
    "weaknesses": "Límite biológico; si absorbe daño que exceda por mucho su capacidad de almacenamiento (Como el SSB Kaio-ken x10), revienta."
  },
  // 12. MAJIN BUU GORDO (PATCH FORMS)
  {
    "id": "majin-buu-gordo-saga-buu-604",
    "name": "Majin Buu (Gordo)",
    "alias": "El Monstruo Inocente",
    "universe": "Dragon Ball Z / Super",
    "saga": "Saga de Buu / DBS",
    "version": "Liberado / Post-Separación",
    "tier": "Tier 3-C a 3-A | Nivel Galaxia (Universal en Super)",
    "ap": "Nivel Galaxia. El Majin Buu original tras absorber al Sagrado Kaioshin (volviéndose gordo e infantil). Jugó con Vegeta Majin y Gohan, siendo imparable para el Tier 4. En Super, su poder y habilidades se pulen si entrena (Shape-up Buu).",
    "range": "Galáctico a Universal.",
    "speed": { "combat": "Inconmensurable.", "reaction": "Inconmensurable.", "travel": "MFTL+.", "attack": "Gag impredecible." },
    "strength": { "striking": "Clase Galaxia.", "lifting": "Clase Estelar." },
    "durability": "Absoluta (Magia Regenerativa). Recibe daños fatales, se hace agujeros, vuela en mil pedazos, pero se pega y regenera sin apenas perder vida real.",
    "stamina": "Casi Infinita (Aunque puede quedarse dormido si se aburre).",
    "battleIQ": "Imita ataques como el Kamehameha con verlos 1 vez. No usa tácticas racionales, pelea estirándose como chicle o desmembrándose él mismo para atrapar rivales.",
    "haxTags": [ "Transmutación de Dulces", "Elasticidad Majin", "Regeneración Celular-Mágica" ],
    "arsenal": {
      "basicAttacks": "Estira sus brazos, usa su propia barriga para rebotar ataques, explota vapor de los agujeros de su cabeza.",
      "superAttacks": [
        { "name": "Rayo Convertidor (Candy Beam)", "desc": "Dispara desde la antena magia rosa convirtiendo al enemigo en chocolate/galleta para comérselo.", "cost": "20% Ki Mágico" },
        { "name": "Kamehameha Rosado", "desc": "Copiado de Goku SSJ3 al instante.", "cost": "15% Ki" }
      ],
      "ultimateAttacks": [
        { "name": "Explosión Majin de Ira (Angry Explosion)", "desc": "Se enoja inmensamente, expulsando vapor púrpura, cargando Ki, y luego explota destruyendo todo el terreno en una tormenta rosa de nivel Galáctico (Técnica usada contra Vegeta).", "cost": "50% Ki" }
      ],
      "passives": [
        { "name": "Inmunidad Inocente", "desc": "Las heridas físicas convencionales no le hacen nada de daño al HP, simplemente rebotan o se regeneran pasivamente en su turno.", "cost": "Regeneración Infinita" }
      ]
    },
    "forms": [ 
      { "id": "buu-gordo", "name": "Majin Buu (Gordo)", "stats": "Nivel Galaxia. Gordinflón, chaleco negro y amarillo, capa violeta." },
      { "id": "buu-maldad", "name": "Evil Buu (Flaco)", "stats": "Nivel Galaxia Alto. Encarnación de la pura maldad que expulsó; gris, delgado y esquelético." },
      { "id": "mr-buu", "name": "Mr. Buu (Aliado)", "stats": "Nivel Galaxia Bajo. Buu gordo bueno tras la expulsión de su maldad. Se quedó con menos Ki base." },
      { "id": "shape-up-buu", "name": "Fit Buu (DBS)", "stats": "Nivel Universal Bajo. Buu gordo que entrenó hasta quedar musculoso y esbelto (antes del Torneo del Poder), ganando velocidad absurda." }
    ],
    "feats": [ "Sometió a Majin Vegeta a pesar de su ataque suicida.", "Mantuvo a raya a Kid Buu para salvar a Vegeta." ],
    "psychology": "Un niño gigante sin nociones de moralidad humana al principio. Cambia drásticamente tras conocer a Mr. Satán y a un perrito (Bee), volviéndose defensor puro de su familia.",
    "weaknesses": "Se duerme repentinamente (Siesta Majin de varios días). Pierde poder bruto real al dividir su maldad."
  }
];

const filePath = path.resolve(__dirname, '../src/data/characters.js');
let content = fs.readFileSync(filePath, 'utf8');

const prefix = 'export const INITIAL_CHARACTERS = ';
const currentList = eval(content.replace(prefix, ''));
console.log(`Current characters count: ${currentList.length}`);

let updatedCount = 0;
batch14Upgrades.forEach(upgrade => {
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

console.log(`Batch 14 Upgrade Complete. ${updatedCount} characters successfully enhanced. MULTIPLE FORMS PATCHED.`);
