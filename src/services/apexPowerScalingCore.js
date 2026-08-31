/* Apex Power Scaling Engine — invariant PL core
   PL is an ordinal combat index. sourceKi is a separate historical DB field.
*/

export const TIER_ORDER = [
  '10-C','10-B','10-A','9-C','9-B','9-A','8-C','High 8-C','8-B','8-A',
  'Low 7-C','7-C','High 7-C','Low 7-B','7-B','7-A','High 7-A',
  '6-C','High 6-C','Low 6-B','6-B','High 6-B','6-A','High 6-A',
  '5-C','Low 5-B','5-B','5-A','High 5-A','Low 4-C','4-C','High 4-C',
  '4-B','4-A','3-C','3-B','3-A','High 3-A','Low 2-C','2-C','2-B','2-A',
  'Low 1-C','1-C','High 1-C','1-B','High 1-B','Low 1-A','1-A','High 1-A','0'
];

const TIER_INDEX = new Map(TIER_ORDER.map((tier, index) => [tier, index]));
const BAND_BASE = 1_000_000n;
const MIN_QUALITY = 1_000_000n;
const MAX_QUALITY = 1_999_999n;

export function assert(condition, message) {
  if (!condition) throw new Error(`APEX validation: ${message}`);
}

export function normalizeText(value) {
  return String(value ?? '')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export function makeVariantId({ universe, character, continuity, saga, version }) {
  const fields = [universe, character, continuity, saga, version];
  assert(fields.every(Boolean), 'universe, character, continuity, saga and version are mandatory for a variant ID');
  return fields.map(normalizeText).join('--');
}

export function tierIndex(tier) {
  if (!tier) return 0;
  // Limpieza y extracción de sub-tier exacto
  const clean = String(tier).trim().replace(/^Tiers*/i, '');
  // Intentar coincidencia directa
  if (TIER_INDEX.has(clean)) return TIER_INDEX.get(clean);
  
  // Coincidencias de prefijos comunes
  for (const [t, idx] of TIER_INDEX.entries()) {
    if (clean.toLowerCase().startsWith(t.toLowerCase()) || clean.toLowerCase().includes(t.toLowerCase())) {
      return idx;
    }
  }
  
  // Fallback seguro
  const low = clean.toLowerCase();
  if (low.includes('outerversal') || low.includes('1-a')) return TIER_INDEX.get('1-A') ?? 48;
  if (low.includes('hyperversal') || low.includes('1-b')) return TIER_INDEX.get('1-B') ?? 45;
  if (low.includes('complex') || low.includes('1-c')) return TIER_INDEX.get('1-C') ?? 43;
  if (low.includes('multiversal+') || low.includes('2-a')) return TIER_INDEX.get('2-A') ?? 41;
  if (low.includes('multiversal') || low.includes('2-b')) return TIER_INDEX.get('2-B') ?? 40;
  if (low.includes('2-c')) return TIER_INDEX.get('2-C') ?? 39;
  if (low.includes('universal+') || low.includes('low 2-c')) return TIER_INDEX.get('Low 2-C') ?? 38;
  if (low.includes('universal') || low.includes('3-a')) return TIER_INDEX.get('3-A') ?? 36;
  if (low.includes('galact') || low.includes('3-c')) return TIER_INDEX.get('3-C') ?? 34;
  if (low.includes('solar') || low.includes('4-b')) return TIER_INDEX.get('4-B') ?? 32;
  if (low.includes('estelar') || low.includes('4-c')) return TIER_INDEX.get('4-C') ?? 30;
  if (low.includes('planet') || low.includes('5-a')) return TIER_INDEX.get('5-A') ?? 27;
  if (low.includes('luna') || low.includes('5-c')) return TIER_INDEX.get('5-C') ?? 24;
  if (low.includes('contin') || low.includes('6-a')) return TIER_INDEX.get('6-A') ?? 22;
  if (low.includes('ciudad') || low.includes('7-b') || low.includes('7-a')) return TIER_INDEX.get('7-B') ?? 14;
  if (low.includes('edificio') || low.includes('8-c')) return TIER_INDEX.get('8-C') ?? 6;
  
  return 0;
}

export function clamp01(x) {
  if (typeof x !== 'number' || !Number.isFinite(x)) return 0.5;
  return Math.max(0, Math.min(1, x));
}

/* All inputs are normalized in [0, 1]. Hax only measures reliability/usefulness,
   never ontological AP. This keeps a wall-level hax user from becoming cosmic in PL. */
export function withinTierQuality({ ap = 0.5, speed = 0.5, durability = 0.5, form = 0.5, battleIQ = 0.5, haxReliability = 0.5 } = {}) {
  const q =
    0.62 * clamp01(ap) +
    0.12 * clamp01(speed) +
    0.12 * clamp01(durability) +
    0.06 * clamp01(form) +
    0.05 * clamp01(battleIQ) +
    0.03 * clamp01(haxReliability);
  return clamp01(q);
}

/* Exact, sortable and free of JS Number precision loss. The result is an ordinal
   combat index: larger values always mean a higher configured tier/quality. */
export function calculateApexPL(profile) {
  if (!profile) return 0n;
  const tierKey = profile.tierExact || profile.tier || '10-B';
  const rank = tierIndex(tierKey);
  const q = withinTierQuality(profile);
  const quality = MIN_QUALITY + BigInt(Math.round(Number(MAX_QUALITY - MIN_QUALITY) * q));
  return (BAND_BASE ** BigInt(rank)) * quality;
}

export function comparePL(a, b) {
  const pa = calculateApexPL(a);
  const pb = calculateApexPL(b);
  return pa === pb ? 0 : pa > pb ? 1 : -1;
}

/* Hard validation: there cannot be a lower PL for a higher exact tier because every
   tier band is separated by 10^6 while quality is constrained to [1, 1.999999]. */
export function assertMonotonic(a, b) {
  const tierDelta = tierIndex(a.tierExact || a.tier) - tierIndex(b.tierExact || b.tier);
  const plDelta = comparePL(a, b);
  assert(tierDelta === 0 || Math.sign(tierDelta) === plDelta,
    `Tier/PL inversion: ${a.id} (${a.tierExact || a.tier}) vs ${b.id} (${b.tierExact || b.tier})`);
  return true;
}

const TIER_KI_BASE = {
  '10-C': 2, '10-B': 5, '10-A': 10,
  '9-C': 20, '9-B': 40, '9-A': 80,
  '8-C': 120, 'High 8-C': 160, '8-B': 220, '8-A': 300,
  'Low 7-C': 350, '7-C': 420, 'High 7-C': 500, 'Low 7-B': 600, '7-B': 750, '7-A': 1200, 'High 7-A': 1500,
  '6-C': 2500, 'High 6-C': 3500, 'Low 6-B': 5000, '6-B': 7500, 'High 6-B': 10000, '6-A': 14000, 'High 6-A': 16000,
  '5-C': 18000, 'Low 5-B': 100000, '5-B': 530000, '5-A': 18000000, 'High 5-A': 60000000,
  'Low 4-C': 150000000, '4-C': 450000000, 'High 4-C': 1200000000,
  '4-B': 5500000000, '4-A': 80000000000,
  '3-C': 1000000000000, '3-B': 5000000000000, '3-A': 25000000000000, 'High 3-A': 100000000000000,
  'Low 2-C': 1000000000000000, '2-C': 10000000000000000, '2-B': 50000000000000000, '2-A': 500000000000000000,
  'Low 1-C': 1e20, '1-C': 1e21, 'High 1-C': 1e22, '1-B': 1e24, 'High 1-B': 1e25,
  'Low 1-A': 1e27, '1-A': Infinity, 'High 1-A': Infinity, '0': Infinity
};

/**
 * Mapeo de Visualización APEX-Ki (Escala de Ordenación y UI)
 */
export function calculateApexKiEquivalent(profile) {
  if (!profile) return { raw: 0, formatted: '0 Unidades', rank: 'Desconocido' };
  const tierKey = profile.tierExact || profile.tier || '10-B';
  const rank = tierIndex(tierKey);
  const canonicalTier = TIER_ORDER[rank] || '10-B';
  const q = withinTierQuality(profile);
  
  const baseVal = TIER_KI_BASE[canonicalTier] || 100;
  let kiValue = baseVal === Infinity ? Infinity : baseVal * Math.pow(2, q - 0.5);

  // Formato UI amigable
  return formatApexKiDisplay(kiValue, canonicalTier);
}

export function formatApexKiDisplay(num, tierStr = '') {
  if (num === Infinity || isNaN(num) || num > 1e25) {
    return {
      raw: 999999999999999,
      formatted: '∞ TRASCENDENTE',
      numberDisplay: '999,999,999,999+',
      rank: 'DEIDAD / OMNIPRESENTE',
      isOverload: true,
      color: 'text-fuchsia-400'
    };
  }

  let formatted = '';
  let rank = 'GUERRERO';
  let isOverload = num >= 1e12;

  if (num >= 1e15) {
    formatted = (num / 1e15).toFixed(2) + ' Trillones de APEX-Ki';
    rank = 'TRASCENDENCIA MULTIVERSAL';
  } else if (num >= 1e12) {
    formatted = (num / 1e12).toFixed(2) + ' Billones de APEX-Ki';
    rank = 'RANGO DIOS DE LA DESTRUCCIÓN';
  } else if (num >= 1e9) {
    formatted = (num / 1e9).toFixed(2) + ' Mil Millones de APEX-Ki';
    rank = 'AMENAZA CÓSMICA / GALÁCTICA';
  } else if (num >= 1e6) {
    formatted = (num / 1e6).toFixed(2) + ' Millones de APEX-Ki';
    rank = 'EMPERADOR ESTELAR / SUPER SAIYAN';
  } else if (num >= 18000) {
    formatted = Math.round(num).toLocaleString('es-ES') + ' APEX-Ki';
    rank = 'DESTRUCTOR PLANETARIO / ÉLITE';
  } else if (num >= 1000) {
    formatted = Math.round(num).toLocaleString('es-ES') + ' APEX-Ki';
    rank = 'GUERRERO DE ALTO RANGO';
  } else {
    formatted = Math.max(1, Math.round(num)).toLocaleString('es-ES') + ' APEX-Ki';
    rank = 'RANGO TERRESTRE';
  }

  return {
    raw: num,
    formatted,
    rank,
    isOverload,
    color: isOverload ? 'text-red-400' : num >= 1e6 ? 'text-amber-400' : 'text-emerald-400'
  };
}

export function validateFighter(fighter) {
  const required = ['id', 'tierExact'];
  for (const key of required) assert(fighter[key] || fighter.tier, `${key} is required for ${fighter.id ?? 'unknown fighter'}`);
  if (fighter.sourceKi !== null && fighter.sourceKi !== undefined) {
    assert(Number.isFinite(fighter.sourceKi) && fighter.sourceKi > 0, 'sourceKi must be a positive number');
  }
  return true;
}

export class VariantRegistry {
  #byId = new Map();
  #byNaturalKey = new Map();

  register(fighter) {
    validateFighter(fighter);
    assert(!this.#byId.has(fighter.id), `duplicate variant ID: ${fighter.id}`);
    const naturalKey = [fighter.characterKey || fighter.name, fighter.universeKey || fighter.universe, fighter.continuityKey || 'canon', fighter.sagaKey || fighter.saga, fighter.versionKey || 'base']
      .map(normalizeText).join('|');
    assert(!this.#byNaturalKey.has(naturalKey), `duplicate character variant: ${naturalKey}`);
    const saved = structuredClone(fighter);
    this.#byId.set(saved.id, saved);
    this.#byNaturalKey.set(naturalKey, saved.id);
    return saved;
  }

  getExact(id) {
    const fighter = this.#byId.get(id);
    assert(fighter, `unknown ID: ${id}`);
    return structuredClone(fighter);
  }

  has(id) {
    return this.#byId.has(id);
  }

  searchCandidates(text) {
    const q = normalizeText(text);
    return [...this.#byId.values()]
      .filter(x => normalizeText(x.characterKey || x.name).includes(q) || normalizeText(x.id).includes(q))
      .map(structuredClone);
  }
}

export function normalizedLogEnergy(joules, minJ, maxJ) {
  assert(joules > 0 && minJ > 0 && maxJ > minJ, 'invalid energy interval');
  return clamp01((Math.log10(joules) - Math.log10(minJ)) / (Math.log10(maxJ) - Math.log10(minJ)));
}

export function makeCombatProfile({ id, tierExact, ap, speed, durability, form, battleIQ, haxReliability }) {
  const profile = { id, tierExact, ap, speed, durability, form, battleIQ, haxReliability };
  return { ...profile, apexPL: calculateApexPL(profile).toString() };
}
