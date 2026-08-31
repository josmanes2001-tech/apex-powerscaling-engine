/**
 * APEX UNIVERSAL SCOUTER & POWER LEVEL ESTIMATION ENGINE
 * Basado en la Escala Canónica de Niveles de Poder de Dragon Ball (Daizenshuu, Guías Oficiales, DAIMA & VS Battles Wiki)
 * Fórmula Universal: PL = BaseEnergy(Tier) × SpeedFactor × DurabilityMod × HaxBIQMod × FormMultiplier
 */

// Mapeo Canónico exacto de personajes conocidos de DB para máxima fidelidad
export const KNOWN_CANON_DB_LEVELS = [
  // 1. Dragon Ball Clásico & Daimaoh
  { pattern: /rey demonio piccolo|piccolo daimaoh|piccolo daimaho/i, base: 260, max: 330, name: 'Rey Demonio Piccolo' },
  { pattern: /piccolo jr|23.*torneo|23.*tenkaichi/i, base: 366, max: 1050, name: 'Piccolo Jr. (23º Torneo)' },
  { pattern: /^granjero|granjero con escopeta/i, base: 5, name: 'Granjero con escopeta' },
  { pattern: /tortuga|umigame/i, base: 0.1, name: 'Umigame (Tortuga)' },
  { pattern: /goku.*(niño|21.*tenkaichi)/i, base: 80, multiplier: { ssj: 1, oozaru: 10 }, name: 'Goku Niño (21º Torneo)' },
  { pattern: /roshi|jackie/i, base: 180, max: 270, name: 'Maestro Roshi' },
  { pattern: /taopaipai|tao pai/i, base: 117, max: 201, name: 'Tao Pai Pai' },
  { pattern: /kami-sama|kamisama/i, base: 310, name: 'Kami-sama' },
  { pattern: /mr\. popo|popo/i, base: 1070, name: 'Mr. Popo' },

  // 2. Variantes de Piccolo en DBZ, DBS, DAIMA y DBM
  { pattern: /piccolo.*(inicio.*saiyan|raditz|322|408)/i, base: 408, weighted: 322, max: 1480, name: 'Piccolo (Inicio Saga Saiyan / vs Raditz)' },
  { pattern: /piccolo.*(final.*saiyan|nappa|invasi[oó]n saiyan|3500|3\.5k|4k)/i, base: 3500, weighted: 1220, max: 4200, name: 'Piccolo (Final Saga Saiyan / vs Nappa)' },
  { pattern: /piccolo.*(saga saiyan)/i, base: 3500, weighted: 1220, max: 4200, name: 'Piccolo (Saga Saiyan)' },
  { pattern: /piccolo.*(saga namek|nail)/i, base: 1300000, name: 'Piccolo (Fusión con Nail)' },
  { pattern: /piccolo.*(kami|androide|cell)/i, base: 360000000, name: 'Super Namekian Piccolo (Saga Cell)' },
  { pattern: /piccolo.*(buu|finales.*z)/i, base: 800000000, name: 'Piccolo (Saga Buu / Finales Z)' },
  { pattern: /piccolo.*(new hope)/i, base: 158400000000, name: 'Piccolo (New Hope)' },
  { pattern: /orange piccolo|piccolo.*(orange|naranja|superhero|super hero)/i, base: 14000000000000, name: 'Orange Piccolo (DBS Super Hero)' },
  { pattern: /piccolo.*(daima mini|mini)/i, base: 110000000, name: 'Piccolo Mini (DAIMA)' },
  { pattern: /piccolo.*(saga super|dbs)/i, base: 12000000000, name: 'Piccolo (Saga Super)' },

  // 3. Saga Saiyan
  { pattern: /^raditz|\braditz\b(?!.*piccolo)(?!.*goku)/i, base: 1500, max: 1500, oozaru: 15000, name: 'Raditz' },
  { pattern: /saibaman|saibaimen/i, base: 1200, max: 2600, name: 'Saibaman' },
  { pattern: /yamcha.*(saiyan|kaio)/i, base: 1480, name: 'Yamcha (Saga Saiyan)' },
  { pattern: /chaos|chiaotzu/i, base: 660, max: 1980, name: 'Chaos' },
  { pattern: /ten.*shin.*han.*(saiyan|kaio)/i, base: 1830, max: 3450, name: 'Tenshinhan (Saga Saiyan)' },
  { pattern: /krilin.*(saiyan)/i, base: 1770, name: 'Krilin (Saga Saiyan)' },
  { pattern: /gohan.*(niño)/i, base: 1100, rage: 2800, oozaru: 11000, name: 'Gohan Niño' },
  { pattern: /^nappa|\bnappa\b(?!.*piccolo)/i, base: 4600, max: 7200, name: 'Nappa' },
  { pattern: /vegeta.*(llegada|tierra)/i, base: 18000, max: 24000, oozaru: 180000, name: 'Vegeta (Llegada a la Tierra)' },
  { pattern: /goku.*(llegada dbz|saiyan)/i, base: 8618, kaioken1: 13762, kaioken2: 18350, kaioken3: 27525, kaioken4: 36700, name: 'Goku (Saga Saiyan)' },

  // 4. Saga Namek
  { pattern: /^cui|\bcui\b/i, base: 18000, name: 'Cui' },
  { pattern: /^dodoria|\bdodoria\b/i, base: 21000, name: 'Dodoria' },
  { pattern: /^zarbon|\bzarbon\b/i, base: 22000, monster: 33000, name: 'Zarbon' },
  { pattern: /^nail|\bnail\b(?!.*piccolo)/i, base: 42000, name: 'Nail' },
  { pattern: /^guldo|\bguldo\b/i, base: 11500, name: 'Guldo' },
  { pattern: /^burter|\bburter\b/i, base: 43000, name: 'Burter' },
  { pattern: /^jeice|\bjeice\b/i, base: 44000, name: 'Jeice' },
  { pattern: /^recoome|\brecoome\b/i, base: 45000, name: 'Recoome' },
  { pattern: /ginyu/i, base: 120000, name: 'Capitán Ginyu' },
  { pattern: /vegeta.*(namek)/i, base: 385000, max: 490000, name: 'Vegeta (Namek Zenkai)' },
  { pattern: /freezer.*(1.*forma|primera)/i, base: 530000, name: 'Freezer (1ª Forma)' },
  { pattern: /freezer.*(2.*forma|segunda)/i, base: 1100000, name: 'Freezer (2ª Forma)' },
  { pattern: /freezer.*(3.*forma|tercera)/i, base: 2000000, name: 'Freezer (3ª Forma)' },
  { pattern: /freezer.*(final|100%)/i, base: 128000000, name: 'Freezer (Forma Final 100%)' },
  { pattern: /goku.*(namek|super saiyan)/i, base: 3000000, ssj: 150000000, name: 'Goku Super Saiyan (Namek)' },

  // 5. Saga Androides / Cell
  { pattern: /mecha freezer/i, base: 156000000, name: 'Mecha Freezer' },
  { pattern: /trunks.*(futuro.*17|ssj)/i, base: 240000000, ssjGrade3: 2040000000, name: 'Trunks del Futuro SSJ' },
  { pattern: /androide 19/i, base: 100000000, name: 'Androide 19' },
  { pattern: /androide 20|dr\. gero/i, base: 110000000, name: 'Dr. Gero (Androide 20)' },
  { pattern: /androide 17/i, base: 360000000, name: 'Androide 17' },
  { pattern: /androide 18/i, base: 350000000, name: 'Androide 18' },
  { pattern: /androide 16/i, base: 470000000, name: 'Androide 16' },
  { pattern: /cell.*(imperfecto|larva)/i, base: 390000000, max: 470000000, name: 'Cell Imperfecto' },
  { pattern: /cell.*(semi)/i, base: 940000000, name: 'Cell Semiperfecto' },
  { pattern: /cell.*(perfecto)/i, base: 3400000000, name: 'Cell Perfecto' },
  { pattern: /super perfect cell|cell super perfecto/i, base: 5500000000, name: 'Super Perfect Cell' },
  { pattern: /goku.*(cell games|fpssj)/i, base: 2700000000, name: 'Goku Full Power SSJ' },
  { pattern: /gohan.*(cell games|ssj2)/i, base: 2800000000, ssj2: 5600000000, max: 6200000000, name: 'Gohan SSJ2 (Cell Games)' },

  // 6. Saga Buu
  { pattern: /dabura/i, base: 3000000000, name: 'Dabura' },
  { pattern: /majin vegeta/i, base: 7500000000, finalExplosion: 23000000000, name: 'Majin Vegeta SSJ2' },
  { pattern: /goku.*(ssj3|buu)/i, base: 75000000, ssj3: 31200000000, name: 'Goku SSJ3' },
  { pattern: /majin buu.*(gordo|inocente)/i, base: 20000000000, name: 'Majin Buu Gordo' },
  { pattern: /super buu/i, base: 38000000000, name: 'Super Buu' },
  { pattern: /gotenks.*(ssj3)/i, base: 44000000000, name: 'Gotenks SSJ3' },
  { pattern: /gohan.*(místico|ultimate)/i, base: 80000000000, name: 'Gohan Místico / Ultimate' },
  { pattern: /buuhan/i, base: 96000000000, name: 'Super Buu (Gohan Absorbido)' },
  { pattern: /vegetto.*(z|super)/i, base: 100000000000, ssj: 5000000000000, name: 'Super Vegetto (Z)' },
  { pattern: /kid buu/i, base: 32000000000, name: 'Kid Buu' },

  // 7. Super & Películas
  { pattern: /beerus|bills/i, base: 820000000000, max: 8200000000000, name: 'Bills Dios de la Destrucción' },
  { pattern: /whis/i, base: 50000000000000, name: 'Whis' },
  { pattern: /golden freezer/i, base: 639000000000, name: 'Golden Freezer' },
  { pattern: /goku.*(ssg|god)/i, base: 524000000000, name: 'Goku SSG' },
  { pattern: /goku.*(blue|ssb)/i, base: 631000000000, ssbKaioken20: 6900000000000, name: 'Goku SSB' },
  { pattern: /goku.*(ultra instinto|ui)/i, base: 12300000000000, mui: 24600000000000, name: 'Goku Ultra Instinto Completo' },
  { pattern: /vegeta.*(blue evolution|ssbe)/i, base: 6200000000000, name: 'Vegeta Blue Evolution' },
  { pattern: /vegeta.*(ultra ego)/i, base: 24000000000000, name: 'Vegeta Ultra Ego' },
  { pattern: /jiren/i, base: 14000000000000, max: 25000000000000, name: 'Jiren (Máximo Poder)' },
  { pattern: /broly.*(lssj|super)/i, base: 18000000000, wrathful: 630000000000, lssj: 36000000000000, name: 'Broly LSSJ (Super)' },
  { pattern: /gogeta.*(blue)/i, base: 1247000000000000, name: 'Gogeta Blue' },
  { pattern: /gohan beast|gohan bestia/i, base: 77000000000000, name: 'Gohan Beast' },
  { pattern: /cell max/i, base: 22000000000000, name: 'Cell Max' },

  // 8. DAIMA (Compresión Mini ÷10)
  { pattern: /goku.*(daima.*mini|mini)/i, base: 10000000, ssj: 500000000, ssj3: 3000000000, name: 'Goku Mini (DAIMA)' },
  { pattern: /vegeta.*(daima.*mini|mini)/i, base: 9000000, ssj: 450000000, ssj3: 2700000000, name: 'Vegeta Mini (DAIMA)' },
  { pattern: /glorio/i, base: 2500000, name: 'Glorio' },
  { pattern: /gomah/i, base: 232, ojo: 11600000000, gigante: 116000000000, name: 'Rey Gomah' },
  { pattern: /majin duu/i, base: 550000000, full: 1100000000, ssj3: 3300000000, name: 'Majin Duu' },
  { pattern: /tamagami 1/i, base: 1060000000, name: 'Tamagami 1' },

  // 9. GT
  { pattern: /goku.*(ssj4|gt)/i, base: 560000000, ssj4: 2240000000000, name: 'Goku SSJ4 (GT)' },
  { pattern: /vegeta.*(ssj4|gt)/i, base: 550000000, ssj4: 2200000000000, name: 'Vegeta SSJ4 (GT)' },
  { pattern: /gogeta.*(ssj4)/i, base: 440000000000000, name: 'Gogeta SSJ4 (GT)' }
];

/**
 * Mapeo de Energía Base (E_Tier) en Joules / Escala Logarítmica de Ki
 */
export function getBaseEnergyFromTier(tierStr = '') {
  const low = (tierStr || '').toLowerCase();

  // Tier 1 & 0: Trascendente
  if (low.includes('1-a') || low.includes('outer') || low.includes('tier 0') || low.includes('boundless')) {
    return { value: Infinity, label: '∞ Trascendente', joules: 'Infinito 1-A' };
  }
  if (low.includes('1-b') || low.includes('hyper')) {
    return { value: 1e24, label: '1.0 × 10²⁴ Ki', joules: '10^24 Joules' };
  }
  if (low.includes('1-c') || low.includes('multiverso complejo')) {
    return { value: 1e20, label: '1.0 × 10²⁰ Ki', joules: '10^20 Joules' };
  }

  // Tier 2: Multiversal
  if (low.includes('2-a') || low.includes('multiversal+')) {
    return { value: 5e18, label: '5.0 Trillones de Ki', joules: '10^18 Joules' };
  }
  if (low.includes('2-b') || low.includes('multiversal')) {
    return { value: 5e16, label: '50.000 Billones de Ki', joules: '10^16 Joules' };
  }
  if (low.includes('2-c') || low.includes('universal+')) {
    return { value: 1e16, label: '10.000 Billones de Ki', joules: '10^15 Joules' };
  }

  // Tier 3: Cósmico / Universal
  if (low.includes('3-a') || low.includes('universal')) {
    return { value: 2.5e13, label: '25 Billones de Ki', joules: '2.8 × 10^44 J' };
  }
  if (low.includes('3-b') || low.includes('multi-galact')) {
    return { value: 5e12, label: '5 Billones de Ki', joules: '10^42 J' };
  }
  if (low.includes('3-c') || low.includes('galact')) {
    return { value: 1e12, label: '1 Billón de Ki', joules: '10^40 J' };
  }

  // Tier 4: Estelar / Sistema Solar
  if (low.includes('4-a') || low.includes('multi-solar')) {
    return { value: 8e10, label: '80.000.000.000 Ki', joules: '10^36 J' };
  }
  if (low.includes('4-b') || low.includes('solar')) {
    return { value: 5.5e9, label: '5.500.000.000 Ki', joules: '10^34 J' };
  }
  if (low.includes('4-c') || low.includes('estrella') || low.includes('stellar')) {
    return { value: 4.5e8, label: '450.000.000 Ki', joules: '10^32 J' };
  }

  // Tier 5: Planetario / Lunar
  if (low.includes('5-a') || low.includes('planeta grande') || low.includes('enana')) {
    return { value: 1.5e8, label: '150.000.000 Ki', joules: '10^28 J' };
  }
  if (low.includes('5-b') || low.includes('planeta')) {
    return { value: 530000, label: '530.000 Unidades', joules: '10^24 J' };
  }
  if (low.includes('5-c') || low.includes('luna') || low.includes('moon')) {
    return { value: 18000, label: '18.000 Unidades', joules: '10^21 J' };
  }

  // Tier 6: Continente / Isla
  if (low.includes('6-a') || low.includes('continental')) {
    return { value: 8000, label: '8.000 Unidades', joules: '10^18 J' };
  }
  if (low.includes('6-b') || low.includes('país') || low.includes('country')) {
    return { value: 4000, label: '4.000 Unidades', joules: '10^16 J' };
  }
  if (low.includes('6-c') || low.includes('isla') || low.includes('island')) {
    return { value: 1500, label: '1.500 Unidades', joules: '10^14 J' };
  }

  // Tier 7: Montaña / Ciudad
  if (low.includes('7-a') || low.includes('montaña') || low.includes('mountain')) {
    return { value: 800, label: '800 Unidades', joules: '10^12 J' };
  }
  if (low.includes('7-b') || low.includes('ciudad') || low.includes('city')) {
    return { value: 400, label: '400 Unidades', joules: '10^10 J' };
  }
  if (low.includes('7-c') || low.includes('pueblo') || low.includes('town')) {
    return { value: 260, label: '260 Unidades', joules: '10^8 J' };
  }

  // Tier 8: Edificio
  if (low.includes('8-a') || low.includes('multi-edificio')) {
    return { value: 180, label: '180 Unidades', joules: '10^6 J' };
  }
  if (low.includes('8-b') || low.includes('manzana')) {
    return { value: 130, label: '130 Unidades', joules: '10^5 J' };
  }
  if (low.includes('8-c') || low.includes('edificio') || low.includes('building')) {
    return { value: 80, label: '80 Unidades', joules: '10^4 J' };
  }

  // Tier 9: Muro / Sobrehumano
  if (low.includes('9-a') || low.includes('edificio pequeño')) {
    return { value: 40, label: '40 Unidades', joules: '10^3 J' };
  }
  if (low.includes('9-b') || low.includes('muro') || low.includes('wall')) {
    return { value: 25, label: '25 Unidades', joules: '500 J' };
  }
  if (low.includes('9-c') || low.includes('calle') || low.includes('street')) {
    return { value: 15, label: '15 Unidades', joules: '200 J' };
  }

  // Tier 10: Humano
  return { value: 5, label: '5 Unidades (Granjero)', joules: '100 J' };
}

/**
 * Extrae el coeficiente de velocidad M_Speed
 */
export function getSpeedFactor(speedStr = '') {
  const low = (typeof speedStr === 'object' ? (speedStr.combat || speedStr.attack || '') : (speedStr || '')).toLowerCase();
  if (low.includes('omnipresente') || low.includes('irrelevante') || low.includes('inconmensurable') || low.includes('infinita')) return { factor: 5.0, label: 'Infinita/Inconmensurable (x5.0)' };
  if (low.includes('mftl+') || low.includes('masivamente ftl+')) return { factor: 3.5, label: 'MFTL+ (x3.5)' };
  if (low.includes('mftl') || low.includes('masivamente ftl')) return { factor: 2.8, label: 'MFTL (x2.8)' };
  if (low.includes('ftl+') || low.includes('faster than light+')) return { factor: 2.2, label: 'FTL+ (x2.2)' };
  if (low.includes('ftl') || low.includes('lumínica') || low.includes('luz')) return { factor: 1.8, label: 'Velocidad de la Luz (x1.8)' };
  if (low.includes('relativista+') || low.includes('relativistic+')) return { factor: 1.5, label: 'Relativista+ (x1.5)' };
  if (low.includes('relativista') || low.includes('sub-relativista')) return { factor: 1.35, label: 'Sub-Relativista (x1.35)' };
  if (low.includes('hipersónico masivo') || low.includes('hypersonic massive')) return { factor: 1.25, label: 'Hipersónico Masivo (x1.25)' };
  if (low.includes('hipersónico') || low.includes('hypersonic')) return { factor: 1.15, label: 'Hipersónico (x1.15)' };
  if (low.includes('supersónico') || low.includes('supersonic')) return { factor: 1.05, label: 'Supersónico (x1.05)' };
  return { factor: 1.0, label: 'Estándar (x1.0)' };
}

/**
 * Extrae el coeficiente de durabilidad y regeneración M_Durability
 */
export function getDurabilityFactor(durabilityStr = '', haxTags = []) {
  const low = (durabilityStr || '').toLowerCase();
  let factor = 1.0;
  let reasons = [];

  if (low.includes('inmortal') || low.includes('invulnerable') || low.includes('conceptual')) {
    factor += 0.4;
    reasons.push('Inmortalidad/Invulnerabilidad (+40%)');
  }
  if (haxTags.some(h => h.toLowerCase().includes('regeneración') || h.toLowerCase().includes('regeneracion'))) {
    factor += 0.25;
    reasons.push('Regeneración Acelerada (+25%)');
  }
  if (low.includes('adaptación') || low.includes('reactiva')) {
    factor += 0.2;
    reasons.push('Adaptación (+20%)');
  }
  return { factor: Math.min(2.0, factor), label: reasons.length > 0 ? reasons.join(', ') : 'Resistencia Estándar (x1.0)' };
}

/**
 * Extrae el coeficiente de Hax y Battle IQ
 */
export function getHaxBiqFactor(battleIQStr = '', haxTags = []) {
  const low = (battleIQStr || '').toLowerCase();
  let factor = 1.0;

  // Battle IQ
  if (low.includes('genio') || low.includes('maestro') || low.includes('absoluto') || low.includes('omnisciente')) {
    factor += 0.3;
  } else if (low.includes('alto') || low.includes('veterano') || low.includes('experto')) {
    factor += 0.15;
  }

  // Hax Tag Count
  const count = (haxTags || []).length;
  if (count >= 8) factor += 0.4;
  else if (count >= 4) factor += 0.25;
  else if (count >= 1) factor += 0.1;

  return { factor: Math.min(2.2, factor), label: 'Hax (' + count + ') + IQ (' + factor.toFixed(2) + 'x)' };
}

/**
 * DESGLOSE COMPLETO DE LA FÓRMULA MATEMÁTICA DE POWER SCALING
 */
export function getPowerLevelFormulaBreakdown(character, activeFormId) {
  if (!character) return null;

  const forms = character.forms || [];
  const activeForm = forms.find(f => f.id === activeFormId) || forms[0] || {};
  const formName = (activeForm.name || 'Base').toLowerCase();
  const formMultiplierStr = activeForm.multiplier || '';

  // 1. Energía Base por Tier
  const baseEnergy = getBaseEnergyFromTier(character.tier);

  // 2. Modificador de Velocidad
  const speed = getSpeedFactor(character.speed);

  // 3. Modificador de Durabilidad & Regeneración
  const durability = getDurabilityFactor(character.durability, character.haxTags);

  // 4. Modificador de Hax & Battle IQ
  const haxBiq = getHaxBiqFactor(character.battleIQ, character.haxTags);

  // 5. Multiplicador de Forma
  let formMult = 1.0;
  let formLabel = 'Forma Base (x1.0)';

  if (formName.includes('oozaru') || formName.includes('mono')) {
    formMult = 10;
    formLabel = 'Oozaru (x10)';
  } else if (formName.includes('kaioken x4') || formName.includes('kaio-ken x4')) {
    formMult = 4;
    formLabel = 'Kaiō-ken x4 (x4)';
  } else if (formName.includes('kaioken x3') || formName.includes('kaio-ken x3')) {
    formMult = 3;
    formLabel = 'Kaiō-ken x3 (x3)';
  } else if (formName.includes('kaioken x2') || formName.includes('kaio-ken x2')) {
    formMult = 2;
    formLabel = 'Kaiō-ken x2 (x2)';
  } else if (formName.includes('ssj3') || formName.includes('super saiyan 3')) {
    formMult = 400;
    formLabel = 'Super Saiyan 3 (x400)';
  } else if (formName.includes('ssj2') || formName.includes('super saiyan 2')) {
    formMult = 100;
    formLabel = 'Super Saiyan 2 (x100)';
  } else if (formName.includes('ssj') || formName.includes('super saiyan')) {
    formMult = 50;
    formLabel = 'Super Saiyan (x50)';
  } else if (formName.includes('beast') || formName.includes('bestia')) {
    formMult = 1000000;
    formLabel = 'Gohan Beast (x1,000,000)';
  } else if (formName.includes('daima mini') || formName.includes('mini') || /\bdaima\b/i.test(formName)) {
    formMult = 0.1;
    formLabel = 'Compresión DAIMA (÷10)';
  } else if (/([0-9\.]+)\s*x/i.test(formMultiplierStr)) {
    const m = parseFloat(formMultiplierStr.match(/([0-9\.]+)\s*x/i)[1]);
    if (!isNaN(m) && m > 0) {
      formMult = m;
      formLabel = 'Boost Especial (' + m + 'x)';
    }
  }

  // Comprobar si hay override estático canónico
  const fullName = ((character.name || '') + ' ' + (character.saga || '')).toLowerCase();
  let canonOverride = null;
  for (const item of KNOWN_CANON_DB_LEVELS) {
    if (item.pattern.test(fullName)) {
      canonOverride = item;
      break;
    }
  }

  let finalVal = 0;
  if (canonOverride && !canonOverride.calculatedOnly) {
    finalVal = canonOverride.base;
    if (formMult > 1) finalVal = Math.round(finalVal * formMult);
    else if (formMult < 1) finalVal = Math.round(finalVal * formMult);
  } else {
    if (baseEnergy.value === Infinity) {
      finalVal = Infinity;
    } else {
      finalVal = Math.round(baseEnergy.value * speed.factor * durability.factor * haxBiq.factor * formMult);
    }
  }

  // Encontrar personaje canónico DB más cercano en poder
  let closestDb = KNOWN_CANON_DB_LEVELS[0];
  let minDiff = Infinity;
  for (const dbChar of KNOWN_CANON_DB_LEVELS) {
    const diff = Math.abs(dbChar.base - (finalVal === Infinity ? 1e20 : finalVal));
    if (diff < minDiff) {
      minDiff = diff;
      closestDb = dbChar;
    }
  }

  const scouter = formatScouterResult(finalVal, character.tier);

  return {
    characterName: character.name,
    activeFormName: activeForm.name || 'Forma Base',
    tier: character.tier,
    baseEnergyValue: baseEnergy.value,
    speedFactor: speed.factor,
    speedLabel: speed.label,
    durabilityFactor: durability.factor,
    durabilityLabel: durability.label,
    haxBiqFactor: haxBiq.factor,
    haxBiqLabel: haxBiq.label,
    formMultiplier: formMult,
    formLabel: formLabel,
    finalPowerLevel: finalVal,
    formattedKi: scouter.formatted,
    rank: scouter.rank,
    isOverload: scouter.isOverload,
    formulaExpression: 'PL = ' + baseEnergy.value.toLocaleString() + ' [Tier] × ' + speed.factor + ' [Vel.] × ' + durability.factor.toFixed(2) + ' [Def.] × ' + haxBiq.factor.toFixed(2) + ' [Hax/IQ] × ' + formMult + ' [Forma] = ' + scouter.formatted,
    closestDbComparison: closestDb ? (closestDb.name + ' (' + closestDb.base.toLocaleString() + ' Ki)') : 'Desconocido'
  };
}

/**
 * Calcula y formatea el Nivel de Poder / Scouter de un personaje y su forma activa
 */
export function calculateScouterReading(character, activeFormId) {
  const breakdown = getPowerLevelFormulaBreakdown(character, activeFormId);
  if (!breakdown) return { rawValue: 0, formatted: '0', rank: 'Desconocido', isOverload: false };
  return formatScouterResult(breakdown.finalPowerLevel, character?.tier);
}

function formatScouterResult(num, tierFallback) {
  if (num === Infinity || isNaN(num) || num > 1e25) {
    return {
      rawValue: 999999999999999,
      formatted: '∞ TRASCENDENTE',
      numberDisplay: '999,999,999,999+',
      rank: 'DEIDAD / OMNIPRESENTE',
      isOverload: true,
      color: 'text-fuchsia-400'
    };
  }

  let numberDisplay = num.toLocaleString('es-ES');
  let formatted = numberDisplay + ' Ki';
  let rank = 'GUERRERO';
  let isOverload = num >= 1000000000000; // >= 1 Trillón explota scouter convencional

  if (num >= 1e12) {
    formatted = (num / 1e12).toFixed(2) + ' Billones de Ki';
    rank = 'RANGO DIOS DE LA DESTRUCCIÓN';
  } else if (num >= 1e9) {
    formatted = (num / 1e9).toFixed(2) + ' Mil Millones de Ki';
    rank = 'AMENAZA CÓSMICA / CELL & BUU';
  } else if (num >= 1e6) {
    formatted = (num / 1e6).toFixed(2) + ' Millones de Ki';
    rank = 'EMPERADOR GALÁCTICO / SUPER SAIYAN';
  } else if (num >= 18000) {
    formatted = numberDisplay + ' Unidades';
    rank = 'DESTRUCTOR PLANETARIO / ÉLITE SAIYAN';
  } else if (num >= 1000) {
    formatted = numberDisplay + ' Unidades';
    rank = 'GUERRERO DE ALTO RANGO';
  } else {
    formatted = numberDisplay + ' Unidades';
    rank = 'RANGO TERRESTRE';
  }

  return {
    rawValue: num,
    formatted,
    numberDisplay,
    rank,
    isOverload,
    color: isOverload ? 'text-red-400' : num >= 1e6 ? 'text-amber-400' : 'text-emerald-400'
  };
}
