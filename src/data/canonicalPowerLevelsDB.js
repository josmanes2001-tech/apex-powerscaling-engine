/**
 * APEX POWER SCALING ENGINE — TABLA CANÓNICA DEFINITIVA DE PODER DRAGON BALL
 * Fusión optimizada de Guías Oficiales, Daizenshuu y Escala Maestra APEX (500+ registros)
 */

export const MULTIPLICADORES_CANONICOS = {
  // Técnicas de Amplificación
  'kaioken_x1': 1.5,
  'kaioken_x2': 2.0,
  'kaioken_x3': 3.0,
  'kaioken_x4': 4.0,
  'kaioken_x10': 10.0,
  'kaioken_x20': 20.0,
  'oozaru': 10.0,
  
  // Super Saiyan Clásico Z
  'false_ssj': 25.0,
  'ssj1': 50.0,
  'ssj_grade_2': 62.5,
  'ssj_grade_3': 100.0,
  'ssj_mastered': 50.0,
  'ssj2': 100.0,
  'ssj3': 400.0,
  'ssj4': 4000.0,

  // Transformaciones Divinas Super
  'saiyan_beyond_god': 3200.0,
  'ssg': 6400.0,
  'ssb': 7700.0,
  'ssb_kaioken_x20': 84700.0,
  'ssbe': 77000.0,
  'ssj_rage': 3700.0,
  'ui_sign': 150000.0,
  'ui_mastered': 300000.0,

  // Híbridos y Especiales
  'gohan_ultimate': 800.0,
  'gohan_beast': 1000000.0,
  'orange_piccolo': 10000.0,
  'piccolo_gigante': 2.0,
  'ssj_c': 200.0,
  'ssj_c2': 600.0,
  'lssj': 2000.0,
  'ikari_wrathful': 35.0,
  'golden_freezer': 100000.0,

  // Fusiones (Fórmulas: (A + B) * Mult)
  'potara_vegetto': 1120.0,
  'potara_kibito': 5.5,
  'metamoru_gotenks': 5.7,
  'metamoru_gogeta': 1000.0,

  // Especiales
  'makankosappo': 3.5,
  'neo_kikoho': 1100.0,
  'daima_mini_compression': 0.1
};

export const CANONICAL_DB_POWER_LEVELS = {
  // ── DRAGON BALL CLÁSICO ──────────────────────────────────────
  'goku-nino-inicio': { name: 'Son Goku (Niño Inicio)', ki: 10, tier: '9-C' },
  'goku-nino-post-roshi': { name: 'Son Goku (Post-Entrenamiento Tortuga)', ki: 12, tier: '9-C' },
  'goku-nino-21-torneo': { name: 'Son Goku (21º Torneo)', ki: 80, tier: '9-B' },
  'goku-oozaru-21': { name: 'Son Goku (Oozaru 21º Torneo)', ki: 800, tier: '8-C' },
  'roshi-reprimido': { name: 'Maestro Roshi (Reprimido)', ki: 83, tier: '9-B' },
  'roshi-serio': { name: 'Maestro Roshi (Serio)', ki: 180, tier: '9-A' },
  'roshi-max-power': { name: 'Maestro Roshi (Poder Máximo)', ki: 216, tier: '8-C' },
  'roshi-kamehameha-max': { name: 'Maestro Roshi (Kamehameha Máximo)', ki: 270, tier: '8-C' },
  'krilin-nino-21': { name: 'Krilin (21º Torneo)', ki: 87, tier: '9-B' },
  'yamcha-inicio': { name: 'Yamcha (Inicio Serie)', ki: 13, tier: '9-C' },
  'yamcha-21': { name: 'Yamcha (21º Torneo)', ki: 73, tier: '9-B' },
  'nam': { name: 'Nam (Luchador del Desierto)', ki: 26, tier: '9-A' },
  'ranfan': { name: 'Ranfan', ki: 8, tier: '10-A' },
  'giran': { name: 'Giran', ki: 29, tier: '9-A' },
  'bacterian': { name: 'Bacterian', ki: 14, tier: '9-C' },
  'bulma': { name: 'Bulma', ki: 4, tier: '10-C' },
  'tortuga-roshi': { name: 'Tortuga', ki: 0.1, tier: '10-C' },
  'gyumao': { name: 'Gyumao / Ox-King', ki: 73, tier: '9-B' },
  'chichi-nina': { name: 'Chichi (Niña)', ki: 8, tier: '10-A' },

  // Red Ribbon
  'goku-post-21': { name: 'Son Goku (Post-21º Torneo Base)', ki: 130, tier: '9-A' },
  'goku-post-agua-sagrada': { name: 'Son Goku (Post-Agua Sagrada)', ki: 145, tier: '9-A' },
  'goku-vs-taopaipai': { name: 'Son Goku (vs Tao Pai Pai)', ki: 165, tier: '9-A' },
  'taopaipai': { name: 'Tao Pai Pai (Mercenario)', ki: 117, tier: '9-A' },
  'taopaipai-cyborg': { name: 'Cyborg Tao Pai Pai', ki: 201, tier: '8-C' },
  'comandante-red': { name: 'Comandante Red', ki: 88, tier: '9-B' },
  'coronel-silver': { name: 'Coronel Silver', ki: 82, tier: '9-B' },
  'general-blue': { name: 'General Blue', ki: 115, tier: '9-A' },
  'mayor-metallitron': { name: 'Mayor Metallitron', ki: 94, tier: '9-A' },
  'androide-8': { name: 'Androide 8 (Octavio)', ki: 91, tier: '8-B' },
  'coronel-murasaki': { name: 'Coronel Murasaki', ki: 67, tier: '9-B' },
  'bora': { name: 'Bora', ki: 23, tier: '9-A' },

  // 22º Torneo & Rey Piccolo
  'goku-22-torneo': { name: 'Son Goku (22º Torneo 15 años)', ki: 185, tier: '9-A' },
  'tenshinhan-22': { name: 'Ten Shin Han (22º Torneo)', ki: 240, tier: '8-C' },
  'krilin-22': { name: 'Krilin (22º Torneo)', ki: 200, tier: '8-C' },
  'yamcha-22': { name: 'Yamcha (22º Torneo)', ki: 172, tier: '9-A' },
  'piccolo-daimaoh-viejo': { name: 'Rey Piccolo (Viejo Poder Completo)', ki: 240, tier: '8-C' },
  'piccolo-daimaoh-joven': { name: 'Rey Piccolo (Juventud Restaurada)', ki: 270, tier: '8-B' },
  'piccolo-daimaoh-blast': { name: 'Rey Piccolo (Blast Máximo)', ki: 330, tier: '8-A' },
  'goku-post-agua-ultra': { name: 'Son Goku (Post-Agua Ultra Divina)', ki: 290, tier: '8-A' },
  'tambourine': { name: 'Tambourine', ki: 154, tier: '9-A' },
  'cymbal': { name: 'Cymbal', ki: 148, tier: '9-A' },
  'drum': { name: 'Drum', ki: 182, tier: '9-A' },
  'yajirobe-inicio': { name: 'Yajirobe (Inicio)', ki: 138, tier: '9-A' },
  'kami-sama': { name: 'Kami-sama', ki: 310, tier: '8-A' },
  'mr-popo': { name: 'Mr. Popo', ki: 1040, tier: '8-A' },

  // 23º Torneo
  'goku-23-torneo': { name: 'Son Goku (23º Torneo 18 años)', ki: 370, tier: '8-A' },
  'goku-23-kamehameha': { name: 'Son Goku (Super Kamehameha 23º)', ki: 480, tier: 'Low 7-C' },
  'piccolo-jr-23': { name: 'Piccolo Jr. (23º Torneo Base)', ki: 366, tier: '8-A' },
  'piccolo-jr-23-gigante': { name: 'Piccolo Jr. (Gigantificación 23º)', ki: 732, tier: '7-C' },
  'chichi-23': { name: 'Chichi (23º Torneo Adulta)', ki: 130, tier: '9-A' },

  // ── SAGA SAIYAJIN (DBZ) ──────────────────────────────────────
  'granjero-escopeta': { name: 'Granjero con Escopeta', ki: 5, tier: '10-C' },
  'raditz': { name: 'Raditz', ki: 1300, tier: 'Low 7-B' },
  'raditz-oozaru': { name: 'Raditz (Oozaru)', ki: 13000, tier: '7-A' },
  'goku-llegada-raditz': { name: 'Son Goku (Inicio Z Sin Peso)', ki: 416, tier: '8-A' },
  'piccolo-llegada-raditz': { name: 'Piccolo (Inicio Z Sin Peso)', ki: 408, tier: '8-A' },
  'piccolo-makankosappo-raditz': { name: 'Piccolo (Makankosappo vs Raditz)', ki: 1480, tier: '7-B' },
  'gohan-4-anos-rage': { name: 'Son Gohan (4 años Furia vs Raditz)', ki: 1485, tier: '7-B' },
  
  // Batalla vs Nappa y Vegeta
  'saibaman': { name: 'Saibaman', ki: 1200, tier: 'Low 7-B' },
  'yamcha-saiyan': { name: 'Yamcha (Saga Saiyan)', ki: 1480, tier: '7-B' },
  'chaos-saiyan': { name: 'Chaos (Saga Saiyan)', ki: 660, tier: 'Low 7-C' },
  'tenshinhan-saiyan': { name: 'Ten Shin Han (Saga Saiyan)', ki: 1830, tier: '7-B' },
  'krilin-saiyan': { name: 'Krilin (Saga Saiyan)', ki: 1770, tier: '7-B' },
  'piccolo-saiyan': { name: 'Piccolo (Saga Saiyan)', ki: 3000, tier: '7-A' },
  'gohan-saiyan-base': { name: 'Son Gohan (Saga Saiyan Post-Piccolo)', ki: 1100, tier: 'Low 7-B' },
  'gohan-saiyan-rage': { name: 'Son Gohan (Saga Saiyan Furia)', ki: 2800, tier: '7-A' },
  'nappa-base': { name: 'Nappa (Reprimido)', ki: 4600, tier: '7-A' },
  'nappa-full-power': { name: 'Nappa (Poder Completo)', ki: 5500, tier: 'High 7-A' },
  'goku-saiyan-base': { name: 'Son Goku (Saga Saiyan Base)', ki: 8618, tier: '5-C' },
  'goku-kaioken-x1': { name: 'Son Goku (Kaio-ken x1)', ki: 12927, tier: '5-C' },
  'goku-kaioken-x2': { name: 'Son Goku (Kaio-ken x2)', ki: 17236, tier: '5-C' },
  'goku-kaioken-x3': { name: 'Son Goku (Kaio-ken x3 vs Vegeta)', ki: 25854, tier: 'Low 5-B' },
  'goku-kaioken-x4': { name: 'Son Goku (Kaio-ken x4 Choque Galick Gun)', ki: 34472, tier: '5-B' },
  'vegeta-saiyan-base': { name: 'Vegeta (Saga Saiyan Poder Completo)', ki: 18000, tier: '5-A' },
  'vegeta-galick-gun': { name: 'Vegeta (Galick Gun Máximo)', ki: 24000, tier: '5-A' },
  'vegeta-oozaru': { name: 'Vegeta (Oozaru)', ki: 180000, tier: 'High 5-A' },
  'kaio-sama': { name: 'Kaio-sama del Norte', ki: 3600, tier: '7-A' },

  // ── SAGA NAMEK / FREEZER ─────────────────────────────────────
  'cui': { name: 'Cui', ki: 18000, tier: '5-A' },
  'dodoria': { name: 'Dodoria', ki: 21000, tier: '5-A' },
  'zarbon-base': { name: 'Zarbon (Base)', ki: 22000, tier: '5-A' },
  'zarbon-monstruo': { name: 'Zarbon (Monstruo Transformado)', ki: 33000, tier: 'High 5-A' },
  'vegeta-namek-1': { name: 'Vegeta (Llegada Namek Zenkai 1)', ki: 24000, tier: '5-A' },
  'vegeta-namek-2': { name: 'Vegeta (Post-Zarbon Zenkai 2)', ki: 37000, tier: 'High 5-A' },
  'vegeta-namek-3': { name: 'Vegeta (Post-Recoome Zenkai 3)', ki: 385000, tier: 'High 5-A' },
  'vegeta-namek-4': { name: 'Vegeta (Post-Dende vs Freezer Final)', ki: 490000, tier: 'High 5-A' },
  
  // Fuerzas Ginyu
  'guldo': { name: 'Guldo', ki: 11500, tier: '5-C' },
  'recoome': { name: 'Recoome', ki: 45000, tier: 'High 5-A' },
  'burter': { name: 'Burter', ki: 43000, tier: 'High 5-A' },
  'jeice': { name: 'Jeice', ki: 44000, tier: 'High 5-A' },
  'capitan-ginyu': { name: 'Capitán Ginyu', ki: 120000, tier: 'High 5-A' },
  'nail': { name: 'Nail (Guerrero Élite Namek)', ki: 42000, tier: 'High 5-A' },
  'guru': { name: 'Gran Patriarca Guru', ki: 1220, tier: 'Low 7-B' },
  'gohan-namek-guru': { name: 'Son Gohan (Post-Guru)', ki: 19000, tier: '5-A' },
  'krilin-namek-guru': { name: 'Krilin (Post-Guru)', ki: 20000, tier: '5-A' },

  // Goku Namek
  'goku-namek-base': { name: 'Son Goku (Llegada Namek Base)', ki: 90000, tier: 'High 5-A' },
  'goku-namek-kaioken-x2': { name: 'Son Goku (Namek Kaio-ken x2)', ki: 180000, tier: 'High 5-A' },
  'goku-namek-kaioken-x10': { name: 'Son Goku (Namek Kaio-ken x10)', ki: 900000, tier: 'Low 4-C' },

  // Freezer Formas
  'freezer-1-forma': { name: 'Freezer (1ª Forma)', ki: 530000, tier: 'Low 4-C' },
  'freezer-2-forma': { name: 'Freezer (2ª Forma)', ki: 1100000, tier: '4-C' },
  'freezer-3-forma': { name: 'Freezer (3ª Forma)', ki: 2000000, tier: 'High 4-C' },
  'freezer-final-50': { name: 'Freezer (Forma Final 50%)', ki: 64000000, tier: '4-B' },
  'freezer-final-100': { name: 'Freezer (Forma Final 100%)', ki: 128000000, tier: '4-B' },
  
  // Piccolo & Goku Clímax
  'piccolo-fusion-nail': { name: 'Piccolo (Fusión con Nail)', ki: 1300000, tier: '4-C' },
  'goku-freezer-zenkai': { name: 'Son Goku (Post-Tanque Zenkai Masivo Base)', ki: 3000000, tier: 'High 4-C' },
  'goku-freezer-kaioken-x10': { name: 'Son Goku (Kaio-ken x10 vs Freezer)', ki: 30000000, tier: '4-B' },
  'goku-freezer-kaioken-x20': { name: 'Son Goku (Kaio-ken x20 vs Freezer)', ki: 60000000, tier: '4-B' },
  'goku-ssj-legendario-namek': { name: 'Son Goku (Super Saiyan 1 Namek)', ki: 150000000, tier: '4-A' },

  // ── SAGA ANDROIDES Y CELL ────────────────────────────────────
  'mecha-freezer': { name: 'Mecha Freezer', ki: 156000000, tier: '4-A' },
  'king-cold': { name: 'Rey Cold', ki: 3500000, tier: 'High 4-C' },
  'trunks-futuro-ssj1': { name: 'Trunks del Futuro (SSJ1 vs Freezer)', ki: 240000000, tier: '4-A' },
  'goku-regreso-tierra-base': { name: 'Son Goku (Regreso a Tierra Base)', ki: 5000000, tier: 'High 4-C' },
  'goku-regreso-tierra-ssj': { name: 'Son Goku (Regreso a Tierra SSJ1)', ki: 250000000, tier: '4-A' },
  
  'androide-19': { name: 'Androide 19', ki: 100000000, tier: '4-B' },
  'dr-gero-a20': { name: 'Androide 20 (Dr. Gero)', ki: 110000000, tier: '4-B' },
  'androide-17-z': { name: 'Androide 17 (Z)', ki: 360000000, tier: '4-A' },
  'androide-18-z': { name: 'Androide 18 (Z)', ki: 350000000, tier: '4-A' },
  'androide-16': { name: 'Androide 16', ki: 470000000, tier: '4-A' },
  'piccolo-fusion-kami': { name: 'Piccolo (Super Namekiano Fusión Kami)', ki: 360000000, tier: '4-A' },
  
  'cell-imperfecto': { name: 'Cell Imperfecto (Post-Absorber Humanos)', ki: 470000000, tier: '4-A' },
  'vegeta-post-rosat-ssj-g2': { name: 'Super Vegeta (SSJ Grade 2)', ki: 1281250000, tier: '3-C' },
  'trunks-ussj-grade-3': { name: 'Trunks del Futuro (Ultra SSJ Grade 3)', ki: 2040000000, tier: '3-C' },
  'cell-semiperfecto': { name: 'Cell Semi-Perfecto', ki: 940000000, tier: '4-A' },
  'cell-perfecto-cell-games': { name: 'Cell Perfecto (Cell Games)', ki: 3400000000, tier: '3-B' },
  
  'goku-ssj-mastered-cell': { name: 'Son Goku (SSJ Mastered Cell Games)', ki: 2700000000, tier: '3-B' },
  'gohan-ssj-mastered-cell': { name: 'Son Gohan (SSJ Mastered Cell Games)', ki: 2800000000, tier: '3-B' },
  'gohan-ssj2-cell-games': { name: 'Son Gohan (Super Saiyan 2 vs Cell)', ki: 5600000000, tier: '3-A' },
  'cell-jr': { name: 'Cell Jr.', ki: 1700000000, tier: '3-C' },
  'super-perfect-cell': { name: 'Super Perfect Cell', ki: 5500000000, tier: '3-A' },

  // ── SAGA MAJIN BUU ──────────────────────────────────────────
  'goku-buu-base': { name: 'Son Goku (Saga Buu Base)', ki: 75000000, tier: '4-B' },
  'goku-buu-ssj': { name: 'Son Goku (Saga Buu SSJ1)', ki: 3750000000, tier: '3-B' },
  'goku-buu-ssj2': { name: 'Son Goku (Saga Buu SSJ2)', ki: 7500000000, tier: '3-A' },
  'goku-buu-ssj3': { name: 'Son Goku (Saga Buu SSJ3)', ki: 31200000000, tier: 'High 3-A' },
  
  'vegeta-buu-base': { name: 'Vegeta (Saga Buu Base)', ki: 70000000, tier: '4-B' },
  'vegeta-buu-ssj': { name: 'Vegeta (Saga Buu SSJ1)', ki: 3500000000, tier: '3-B' },
  'vegeta-buu-ssj2': { name: 'Vegeta (Saga Buu SSJ2)', ki: 7000000000, tier: '3-A' },
  'majin-vegeta-ssj2': { name: 'Majin Vegeta (SSJ2 Marca Babidi)', ki: 7500000000, tier: '3-A' },
  
  'dabura': { name: 'Dabura (Rey Demonio)', ki: 3000000000, tier: '3-B' },
  'majin-buu-gordo': { name: 'Majin Buu (Gordo Poder Completo)', ki: 20000000000, tier: '3-A' },
  'super-buu': { name: 'Super Buu', ki: 38000000000, tier: 'High 3-A' },
  'gotenks-ssj3': { name: 'Gotenks (SSJ3)', ki: 44000000000, tier: 'High 3-A' },
  'gohan-mistico': { name: 'Son Gohan (Místico / Definitivo)', ki: 80000000000, tier: 'High 3-A' },
  'buutenks': { name: 'Buutenks (Super Buu Gotenks absorbido)', ki: 83000000000, tier: 'High 3-A' },
  'buuhan': { name: 'Buuhan (Super Buu Gohan absorbido)', ki: 96000000000, tier: 'High 3-A' },
  'super-vegetto-ssj': { name: 'Super Vegetto (SSJ1)', ki: 5000000000000, tier: 'Low 2-C' },
  'kid-buu': { name: 'Kid Buu (Forma Original Pura)', ki: 32000000000, tier: 'High 3-A' },
  'genkidama-universal': { name: 'Super Genki Dama (vs Kid Buu)', ki: 320000000000, tier: 'Low 2-C' },

  // ── DRAGON BALL SUPER ───────────────────────────────────────
  'beerus-dormido': { name: 'Beerus (Suprimido Extremo)', ki: 50000000000, tier: 'High 3-A' },
  'beerus-serio-goku': { name: 'Beerus (vs Goku SSG ~10%)', ki: 820000000000, tier: 'Low 2-C' },
  'beerus-full-power': { name: 'Beerus (Poder Completo Estimado)', ki: 8200000000000, tier: '2-C' },
  'goku-ssg': { name: 'Son Goku (Super Saiyan God / Rojo)', ki: 524000000000, tier: 'Low 2-C' },
  'goku-ssb': { name: 'Son Goku (Super Saiyan Blue / SSGSS)', ki: 631000000000, tier: 'Low 2-C' },
  'golden-freezer': { name: 'Golden Freezer (Resurrección)', ki: 639000000000, tier: 'Low 2-C' },
  'goku-ssb-kaioken-x20': { name: 'Son Goku (SSB Kaio-ken x20)', ki: 6900000000000, tier: '2-C' },
  'vegeta-ssbe': { name: 'Vegeta (SSB Evolution)', ki: 6200000000000, tier: '2-C' },
  'hit': { name: 'Hit (Asesino U6)', ki: 5000000000000, tier: '2-C' },
  'jiren-full-power': { name: 'Jiren (Límite Roto Full Power)', ki: 21000000000000, tier: '2-C' },
  'toppo-hakaishin': { name: 'Toppo (Modo Dios de la Destrucción)', ki: 8500000000000, tier: '2-C' },
  'goku-ui-signo': { name: 'Son Goku (Ultra Instinto Signo)', ki: 12300000000000, tier: '2-C' },
  'goku-ui-perfecto': { name: 'Son Goku (Ultra Instinto Perfecto)', ki: 24600000000000, tier: '2-C' },
  
  // Super Hero
  'orange-piccolo': { name: 'Orange Piccolo', ki: 14000000000000, tier: '2-C' },
  'cell-max': { name: 'Cell Max', ki: 22000000000000, tier: '2-C' },
  'gohan-beast': { name: 'Son Gohan (Gohan Beast)', ki: 77000000000000, tier: '2-B' },
  'broly-dbs-lssj': { name: 'Broly Super (Full Power LSSJ)', ki: 36000000000000, tier: '2-C' },
  'gogeta-blue': { name: 'Gogeta Blue (DBS Broly)', ki: 1247000000000000, tier: '2-B' },

  // ── DRAGON BALL DAIMA ───────────────────────────────────────
  'goku-mini-base': { name: 'Son Goku Mini (Base Daima)', ki: 10000000, tier: '4-B' },
  'goku-mini-ssj': { name: 'Son Goku Mini (SSJ Daima)', ki: 500000000, tier: '4-A' },
  'goku-mini-ssj2': { name: 'Son Goku Mini (SSJ2 Daima)', ki: 1000000000, tier: '3-C' },
  'goku-mini-ssj3': { name: 'Son Goku Mini (SSJ3 Daima)', ki: 3000000000, tier: '3-B' },
  'vegeta-mini-base': { name: 'Vegeta Mini (Base Daima)', ki: 9000000, tier: '4-B' },
  'vegeta-mini-ssj': { name: 'Vegeta Mini (SSJ Daima)', ki: 450000000, tier: '4-A' },
  'glorio': { name: 'Glorio', ki: 2500000, tier: 'High 4-C' },
  'gomah-base': { name: 'Gomah (Base)', ki: 232, tier: '8-B' },
  'gomah-tercer-ojo': { name: 'Gomah (Tercer Ojo Gigante)', ki: 116000000000, tier: 'High 3-A' },
  'tamagami-1': { name: 'Tamagami Número 1', ki: 1060000000, tier: '3-C' },
  'dabura-joven-daima': { name: 'Dabura Joven (Pre-Babidi)', ki: 714000000, tier: '4-A' }
};
