/**
 * APEX SCOUTER & POWER LEVEL ESTIMATION ENGINE
 * Basado en la Escala Canónica de Niveles de Poder de Dragon Ball (Daizenshuu, Guías Oficiales, DAIMA & VS Battles Wiki)
 */

// Mapeo Canónico exacto de personajes conocidos de DB para máxima fidelidad
const KNOWN_CANON_DB_LEVELS = [
  // Clásico
  { pattern: /granjero/i, base: 5 },
  { pattern: /tortuga/i, base: 0.1 },
  { pattern: /goku.*(niño|21.*tenkaichi)/i, base: 80, multiplier: { ssj: 1, oozaru: 10 } },
  { pattern: /roshi|jackie/i, base: 180, max: 270 },
  { pattern: /taopaipai|tao pai/i, base: 117, max: 201 },
  { pattern: /piccolo daima|rey demonio piccolo/i, base: 260, max: 330 },
  { pattern: /kami-sama|kamisama/i, base: 310 },
  { pattern: /mr\. popo|popo/i, base: 1070 },
  { pattern: /piccolo jr|23.*tenkaichi/i, base: 366, max: 1050 },

  // Saga Saiyan
  { pattern: /raditz/i, base: 1300, max: 1500, oozaru: 13000 },
  { pattern: /saibaman|saibaimen/i, base: 1200, max: 2600 },
  { pattern: /yamcha.*(saiyan|kaio)/i, base: 1480 },
  { pattern: /chaos|chiaotzu/i, base: 660, max: 1980 },
  { pattern: /ten.*shin.*han.*(saiyan|kaio)/i, base: 1830, max: 3450 },
  { pattern: /krilin.*(saiyan)/i, base: 1770 },
  { pattern: /piccolo.*(saiyan|raditz|nappa)/i, base: 408, weighted: 322, max: 1480, trained: 3000 },
  { pattern: /gohan.*(niño)/i, base: 1100, rage: 2800, oozaru: 11000 },
  { pattern: /nappa/i, base: 4600, max: 7200 },
  { pattern: /vegeta.*(llegada|tierra)/i, base: 18000, max: 24000, oozaru: 180000 },
  { pattern: /goku.*(llegada dbz|saiyan)/i, base: 8618, kaioken1: 13762, kaioken2: 18350, kaioken3: 27525, kaioken4: 36700 },

  // Saga Namek
  { pattern: /cui/i, base: 18000 },
  { pattern: /dodoria/i, base: 21000 },
  { pattern: /zarbon/i, base: 22000, monster: 33000 },
  { pattern: /nail/i, base: 42000 },
  { pattern: /guldo/i, base: 11500 },
  { pattern: /burter/i, base: 43000 },
  { pattern: /jeice/i, base: 44000 },
  { pattern: /recoome/i, base: 45000 },
  { pattern: /ginyu/i, base: 120000 },
  { pattern: /vegeta.*(namek)/i, base: 385000, max: 490000 },
  { pattern: /piccolo.*(namek|nail)/i, base: 1300000 },
  { pattern: /freezer.*(1.*forma|primera)/i, base: 530000 },
  { pattern: /freezer.*(2.*forma|segunda)/i, base: 1100000 },
  { pattern: /freezer.*(3.*forma|tercera)/i, base: 2000000 },
  { pattern: /freezer.*(final|100%)/i, base: 128000000 },
  { pattern: /goku.*(namek|super saiyan)/i, base: 3000000, ssj: 150000000 },

  // Saga Androides / Cell
  { pattern: /mecha freezer/i, base: 156000000 },
  { pattern: /trunks.*(futuro.*17|ssj)/i, base: 240000000, ssjGrade3: 2040000000 },
  { pattern: /androide 19/i, base: 100000000 },
  { pattern: /androide 20|dr\. gero/i, base: 110000000 },
  { pattern: /androide 17/i, base: 360000000 },
  { pattern: /androide 18/i, base: 350000000 },
  { pattern: /androide 16/i, base: 470000000 },
  { pattern: /piccolo.*(kami|androides)/i, base: 360000000, postRosat: 720000000 },
  { pattern: /cell.*(imperfecto|larva)/i, base: 390000000, max: 470000000 },
  { pattern: /cell.*(semi)/i, base: 940000000 },
  { pattern: /cell.*(perfecto)/i, base: 3400000000 },
  { pattern: /super perfect cell|cell super perfecto/i, base: 5500000000 },
  { pattern: /goku.*(cell games|fpssj)/i, base: 2700000000 },
  { pattern: /gohan.*(cell games|ssj2)/i, base: 2800000000, ssj2: 5600000000, max: 6200000000 },

  // Saga Buu
  { pattern: /dabura/i, base: 3000000000 },
  { pattern: /majin vegeta/i, base: 7500000000, finalExplosion: 23000000000 },
  { pattern: /goku.*(ssj3|buu)/i, base: 75000000, ssj3: 31200000000 },
  { pattern: /majin buu.*(gordo|inocente)/i, base: 20000000000 },
  { pattern: /super buu/i, base: 38000000000 },
  { pattern: /gotenks.*(ssj3)/i, base: 44000000000 },
  { pattern: /gohan.*(místico|ultimate)/i, base: 80000000000 },
  { pattern: /buuhan/i, base: 96000000000 },
  { pattern: /vegetto.*(z|super)/i, base: 100000000000, ssj: 5000000000000 },
  { pattern: /kid buu/i, base: 32000000000 },
  { pattern: /genkidama universal/i, base: 320000000000 },

  // Super & Películas
  { pattern: /beerus|bills/i, base: 820000000000, max: 8200000000000 },
  { pattern: /whis/i, base: 50000000000000 },
  { pattern: /golden freezer/i, base: 639000000000 },
  { pattern: /goku.*(ssg|god)/i, base: 524000000000 },
  { pattern: /goku.*(blue|ssb)/i, base: 631000000000, ssbKaioken20: 6900000000000 },
  { pattern: /goku.*(ultra instinto|ui)/i, base: 12300000000000, mui: 24600000000000 },
  { pattern: /vegeta.*(blue evolution|ssbe)/i, base: 6200000000000 },
  { pattern: /vegeta.*(ultra ego)/i, base: 24000000000000 },
  { pattern: /jiren/i, base: 14000000000000, max: 25000000000000 },
  { pattern: /broly.*(lssj|super)/i, base: 18000000000, wrathful: 630000000000, lssj: 36000000000000 },
  { pattern: /gogeta.*(blue)/i, base: 1247000000000000 },
  { pattern: /gohan beast|gohan bestia/i, base: 77000000000000 },
  { pattern: /orange piccolo|piccolo naranja/i, base: 14000000000000 },
  { pattern: /cell max/i, base: 22000000000000 },

  // DAIMA (Compresión Mini ÷10)
  { pattern: /goku.*(daima|mini)/i, base: 10000000, ssj: 500000000, ssj3: 3000000000 },
  { pattern: /vegeta.*(daima|mini)/i, base: 9000000, ssj: 450000000, ssj3: 2700000000 },
  { pattern: /piccolo.*(daima|mini)/i, base: 110000000, full: 1100000000 },
  { pattern: /glorio/i, base: 2500000 },
  { pattern: /gomah/i, base: 232, ojo: 11600000000, gigante: 116000000000 },
  { pattern: /majin duu/i, base: 550000000, full: 1100000000, ssj3: 3300000000 },
  { pattern: /tamagami 1/i, base: 1060000000 },
  { pattern: /tamagami 2/i, base: 920000000 },
  { pattern: /tamagami 3/i, base: 750000000 },

  // GT
  { pattern: /goku.*(ssj4|gt)/i, base: 560000000, ssj4: 2240000000000 },
  { pattern: /vegeta.*(ssj4|gt)/i, base: 550000000, ssj4: 2200000000000 },
  { pattern: /baby vegeta.*(golden oozaru)/i, base: 1450000000000 },
  { pattern: /super 17/i, base: 420000000000, absorbed: 3000000000000 },
  { pattern: /syn shenron|omega shenron/i, base: 2500000000000, omega: 7100000000000 },
  { pattern: /gogeta.*(ssj4)/i, base: 440000000000000 }
];

/**
 * Convierte cualquier Tier de VS Battles en un estimado calibrado de Ki/Power Level
 */
export function tierToPowerLevelUnits(tierStr = '') {
  const low = tierStr.toLowerCase();

  // Tier 1 & 0: Trascendente
  if (low.includes('1-a') || low.includes('outer') || low.includes('tier 0') || low.includes('boundless') || low.includes('infinitesimal')) {
    return { value: Infinity, label: '∞ TRASCENDENTE', rank: 'DEIDAD OMNIPOTENTE (EXPLOSIÓN DE SCOUTER)', isOverload: true };
  }
  if (low.includes('1-b') || low.includes('hyper')) {
    return { value: 1e24, label: '1.0 × 10²⁴ Ki', rank: 'HIPERVERSAL / DIMENSIONAL', isOverload: true };
  }
  if (low.includes('1-c') || low.includes('multiverso complejo')) {
    return { value: 1e20, label: '1.0 × 10²⁰ Ki', rank: 'MULTIVERSO COMPLEJO', isOverload: true };
  }

  // Tier 2: Multiversal
  if (low.includes('2-a') || low.includes('multiversal+')) {
    return { value: 5e18, label: '5.0 Trillones de Ki', rank: 'AMENAZA MULTIVERSAL INFINITA', isOverload: true };
  }
  if (low.includes('2-b') || low.includes('multiversal')) {
    return { value: 5e16, label: '50.000 Billones de Ki', rank: 'DESTRUCTOR MULTIVERSAL', isOverload: true };
  }
  if (low.includes('2-c') || low.includes('universal+')) {
    return { value: 1e16, label: '10.000 Billones de Ki', rank: 'ALTERADOR ESPACIO-TIEMPO 4D', isOverload: true };
  }

  // Tier 3: Cósmico / Universal
  if (low.includes('3-a') || low.includes('universal')) {
    return { value: 2.5e13, label: '25.000.000.000.000 (25 Billones)', rank: 'DESTRUCTOR UNIVERSAL (RANGO GOD)', isOverload: true };
  }
  if (low.includes('3-b') || low.includes('multi-galact')) {
    return { value: 5e12, label: '5.000.000.000.000 (5 Billones)', rank: 'ANIKILADOR MULTI-GALÁCTICO', isOverload: true };
  }
  if (low.includes('3-c') || low.includes('galact')) {
    return { value: 1e12, label: '1.000.000.000.000 (1 Billón)', rank: 'ANIKILADOR GALÁCTICO', isOverload: true };
  }

  // Tier 4: Estelar / Sistema Solar
  if (low.includes('4-a') || low.includes('multi-solar')) {
    return { value: 8e10, label: '80.000.000.000 (80 Mil Millones)', rank: 'EMPERADOR CÓSMICO (RANGO BUU)' };
  }
  if (low.includes('4-b') || low.includes('solar')) {
    return { value: 5.5e9, label: '5.500.000.000 (5.5 Mil Millones)', rank: 'DESTRUCTOR SISTEMA SOLAR (CELL/SSJ2)' };
  }
  if (low.includes('4-c') || low.includes('estrella') || low.includes('stellar')) {
    return { value: 4.5e8, label: '450.000.000 (450 Millones)', rank: 'SUPER GUERRERO ANDROIDE' };
  }

  // Tier 5: Planetario / Lunar
  if (low.includes('5-a') || low.includes('planeta grande') || low.includes('enana')) {
    return { value: 1.5e8, label: '150.000.000 (150 Millones)', rank: 'SUPER SAIYAN / EMPERADOR FREEZER' };
  }
  if (low.includes('5-b') || low.includes('planeta')) {
    return { value: 530000, label: '530.000 Unidades', rank: 'DESTRUCTOR PLANETARIO' };
  }
  if (low.includes('5-c') || low.includes('luna') || low.includes('moon')) {
    return { value: 18000, label: '18.000 Unidades', rank: 'ÉLITE SAIYAN / ROMPE-LUNAS' };
  }

  // Tier 6: Continente / Isla
  if (low.includes('6-a') || low.includes('continental')) {
    return { value: 8000, label: '8.000 Unidades', rank: 'GUERRERO Z DE ÉLITE' };
  }
  if (low.includes('6-b') || low.includes('país') || low.includes('country')) {
    return { value: 4000, label: '4.000 Unidades', rank: 'COMANDANTE SAIYAN (RANGO NAPPA)' };
  }
  if (low.includes('6-c') || low.includes('isla') || low.includes('island')) {
    return { value: 1500, label: '1.500 Unidades', rank: 'SAIBAMAN / RADITZ' };
  }

  // Tier 7: Montaña / Ciudad
  if (low.includes('7-a') || low.includes('montaña') || low.includes('mountain')) {
    return { value: 800, label: '800 Unidades', rank: 'MAESTRO DE ARTES MARCIALES AVANZADO' };
  }
  if (low.includes('7-b') || low.includes('ciudad') || low.includes('city')) {
    return { value: 400, label: '400 Unidades', rank: 'EXPERTO EN KI / SAGA 23º TB' };
  }
  if (low.includes('7-c') || low.includes('pueblo') || low.includes('town')) {
    return { value: 260, label: '260 Unidades', rank: 'RANGO REY DEMONIO PICCOLO' };
  }

  // Tier 8: Edificio
  if (low.includes('8-a') || low.includes('multi-edificio')) {
    return { value: 180, label: '180 Unidades', rank: 'MAESTRO ROSHI (MÁXIMO PODER)' };
  }
  if (low.includes('8-b') || low.includes('manzana')) {
    return { value: 130, label: '130 Unidades', rank: 'LUCHADOR TENKAICHI BUDOKAI' };
  }
  if (low.includes('8-c') || low.includes('edificio') || low.includes('building')) {
    return { value: 80, label: '80 Unidades', rank: 'GOKU NIÑO (21º TORNEO)' };
  }

  // Tier 9: Muro / Sobrehumano
  if (low.includes('9-a') || low.includes('edificio pequeño')) {
    return { value: 40, label: '40 Unidades', rank: 'SUPERHUMANO DE COMBATE' };
  }
  if (low.includes('9-b') || low.includes('muro') || low.includes('wall')) {
    return { value: 25, label: '25 Unidades', rank: 'ARTISTA MARCIAL DE ÉLITE' };
  }
  if (low.includes('9-c') || low.includes('calle') || low.includes('street')) {
    return { value: 15, label: '15 Unidades', rank: 'ATLETA SOBREHUMANO' };
  }

  // Tier 10: Humano
  return { value: 5, label: '5 Unidades (Granjero)', rank: 'HUMANO PROMEDIO' };
}

/**
 * Calcula y formatea el Nivel de Poder / Scouter de un personaje y su forma activa
 */
export function calculateScouterReading(character, activeFormId) {
  if (!character) return { rawValue: 0, formatted: '0', rank: 'Desconocido', isOverload: false };

  const name = character.name || '';
  const alias = character.alias || '';
  const fullName = `${name} ${alias}`.toLowerCase();
  const forms = character.forms || [];
  const activeForm = forms.find(f => f.id === activeFormId) || forms[0] || {};
  const formName = (activeForm.name || '').toLowerCase();
  const formMultiplier = activeForm.multiplier || '';

  // 1. Verificar si hay coincidencia directa con la Base Canónica DB
  for (const item of KNOWN_CANON_DB_LEVELS) {
    if (item.pattern.test(fullName)) {
      let val = item.base;

      // Evaluar formas y multiplicadores específicos
      if (formName.includes('oozaru') || formName.includes('simio') || formName.includes('mono')) {
        val = item.oozaru || val * 10;
      } else if (formName.includes('kaioken x4') || formName.includes('kaio-ken x4')) {
        val = item.kaioken4 || val * 4;
      } else if (formName.includes('kaioken x3') || formName.includes('kaio-ken x3')) {
        val = item.kaioken3 || val * 3;
      } else if (formName.includes('kaioken x2') || formName.includes('kaio-ken x2')) {
        val = item.kaioken2 || val * 2;
      } else if (formName.includes('kaioken') || formName.includes('kaio-ken')) {
        val = item.kaioken1 || val * 1.5;
      } else if (formName.includes('makankosappo') || formName.includes('cargado')) {
        val = item.max || val * 3.6;
      } else if (formName.includes('sin peso') || formName.includes('sin ropa')) {
        val = item.base || 408;
      } else if (formName.includes('ropa pesada') || formName.includes('con peso')) {
        val = item.weighted || 322;
      } else if (formName.includes('ssj3') || formName.includes('super saiyan 3')) {
        val = item.ssj3 || val * 400;
      } else if (formName.includes('ssj2') || formName.includes('super saiyan 2')) {
        val = item.ssj2 || val * 100;
      } else if (formName.includes('ssj') || formName.includes('super saiyan')) {
        val = item.ssj || val * 50;
      } else if (formName.includes('ultra instinto') || formName.includes('mui')) {
        val = item.mui || 24600000000000;
      } else if (formName.includes('beast') || formName.includes('bestia')) {
        val = 77000000000000;
      } else if (formName.includes('orange') || formName.includes('naranja')) {
        val = 14000000000000;
      }

      // Si tiene multiplicador textual explícito tipo "x50" o "2.5x"
      if (/([0-9\.]+)\s*x/i.test(formMultiplier)) {
        const mult = parseFloat(formMultiplier.match(/([0-9\.]+)\s*x/i)[1]);
        if (!isNaN(mult) && mult > 1 && !formName.includes('base')) {
          val = Math.round(item.base * mult);
        }
      }

      return formatScouterResult(val, character.tier);
    }
  }

  // 2. Si no es un personaje con dato canónico estático, convertir su Tier a unidades de Ki
  const tierResult = tierToPowerLevelUnits(character.tier);
  let finalVal = tierResult.value;

  // Aplicar multiplicadores de formas
  if (/([0-9\.]+)\s*x/i.test(formMultiplier) && finalVal !== Infinity) {
    const mult = parseFloat(formMultiplier.match(/([0-9\.]+)\s*x/i)[1]);
    if (!isNaN(mult) && mult > 1) {
      finalVal = finalVal * mult;
    }
  }

  return formatScouterResult(finalVal, character.tier);
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
  let formatted = `${numberDisplay} Ki`;
  let rank = 'GUERRERO';
  let isOverload = num >= 1000000000000; // >= 1 Trillón explota scouter convencional

  if (num >= 1e12) {
    formatted = `${(num / 1e12).toFixed(2)} Billones de Ki`;
    rank = 'RANGO DIOS DE LA DESTRUCCIÓN';
  } else if (num >= 1e9) {
    formatted = `${(num / 1e9).toFixed(2)} Mil Millones de Ki`;
    rank = 'AMENAZA CÓSMICA / CELL & BUU';
  } else if (num >= 1e6) {
    formatted = `${(num / 1e6).toFixed(2)} Millones de Ki`;
    rank = 'EMPERADOR GALÁCTICO / SUPER SAIYAN';
  } else if (num >= 18000) {
    formatted = `${numberDisplay} Unidades`;
    rank = 'DESTRUCTOR PLANETARIO / ÉLITE SAIYAN';
  } else if (num >= 1000) {
    formatted = `${numberDisplay} Unidades`;
    rank = 'GUERRERO DE ALTO RANGO';
  } else {
    formatted = `${numberDisplay} Unidades`;
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
