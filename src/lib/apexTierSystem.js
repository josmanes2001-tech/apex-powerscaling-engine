/**
 * APEX Tier System & Lightweight Mathematical Index Core
 * No BigInt, no giant numbers, no floating point precision artifacts.
 */

export const TIER_ORDER = [
  "10-C", "10-B", "10-A",
  "9-C", "9-B", "9-A",
  "8-C", "High 8-C", "8-B", "8-A",
  "Low 7-C", "7-C", "High 7-C", "Low 7-B", "7-B", "7-A", "High 7-A",
  "6-C", "High 6-C", "Low 6-B", "6-B", "High 6-B", "6-A", "High 6-A",
  "5-C", "Low 5-B", "5-B", "5-A", "High 5-A",
  "Low 4-C", "4-C", "High 4-C", "4-B", "4-A",
  "3-C", "3-B", "3-A", "High 3-A",
  "Low 2-C", "2-C", "2-B", "2-A",
  "Low 1-C", "1-C", "High 1-C", "1-B", "High 1-B",
  "Low 1-A", "1-A", "High 1-A", "0"
];

export const TEMP_PROFILES = {
  martialArtist: { ap: 0.70, speed: 0.72, durability: 0.68, formControl: 0.65, battleIQ: 0.82, haxReliability: 0.15 },
  brute: { ap: 0.82, speed: 0.58, durability: 0.84, formControl: 0.58, battleIQ: 0.52, haxReliability: 0.10 },
  speedster: { ap: 0.62, speed: 0.90, durability: 0.60, formControl: 0.72, battleIQ: 0.70, haxReliability: 0.22 },
  strategist: { ap: 0.56, speed: 0.62, durability: 0.55, formControl: 0.72, battleIQ: 0.92, haxReliability: 0.48 },
  energyFighter: { ap: 0.78, speed: 0.76, durability: 0.72, formControl: 0.78, battleIQ: 0.72, haxReliability: 0.34 },
  haxSpecialist: { ap: 0.52, speed: 0.66, durability: 0.56, formControl: 0.74, battleIQ: 0.80, haxReliability: 0.80 },
  tank: { ap: 0.74, speed: 0.50, durability: 0.90, formControl: 0.65, battleIQ: 0.60, haxReliability: 0.18 },
  balanced: { ap: 0.68, speed: 0.68, durability: 0.68, formControl: 0.68, battleIQ: 0.68, haxReliability: 0.25 }
};

/**
 * Normaliza y obtiene el índice del tier dentro de TIER_ORDER
 */
export function getTierRank(tierExact) {
  if (!tierExact) return null;
  const clean = String(tierExact).replace(/^Tier\s+/i, '').trim();
  const index = TIER_ORDER.indexOf(clean);
  return index >= 0 ? index : null;
}

/**
 * Calcula la calidad interna ponderada a partir de estadísticas [0..1]
 */
export function calculateQuality(stats = {}) {
  const ap = typeof stats.ap === 'number' ? stats.ap : 0.5;
  const speed = typeof stats.speed === 'number' ? stats.speed : 0.5;
  const durability = typeof stats.durability === 'number' ? stats.durability : 0.5;
  const formControl = typeof stats.formControl === 'number' ? stats.formControl : 0.5;
  const battleIQ = typeof stats.battleIQ === 'number' ? stats.battleIQ : 0.5;
  const haxReliability = typeof stats.haxReliability === 'number' ? stats.haxReliability : 0.5;

  return (
    0.62 * ap +
    0.12 * speed +
    0.12 * durability +
    0.06 * formControl +
    0.05 * battleIQ +
    0.03 * haxReliability
  );
}

/**
 * Calcula withinTierScore, powerKey y apexScore a partir de tierRank y quality
 */
export function calculateScores(tierRank, quality, tierExact) {
  if (tierRank === null || tierRank === undefined) {
    return {
      withinTierScore: null,
      powerKey: null,
      apexScore: null,
      powerBand: tierExact ? `${tierExact} · N/A` : 'Unknown'
    };
  }

  const withinTierScore = Math.max(0, Math.min(100, Math.round(quality * 100)));
  const powerKey = tierRank * 101 + withinTierScore;
  const apexScore = `${tierRank}.${String(withinTierScore).padStart(2, "0")}`;
  const powerBand = `${tierExact} · ${withinTierScore}/100`;

  return {
    withinTierScore,
    powerKey,
    apexScore,
    powerBand
  };
}
