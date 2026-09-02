import fs from 'fs';

const content = `/**
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

export const APEX_KI_LOG10_ANCHORS = {
  "10-C": 0.5, "10-B": 1.0, "10-A": 1.5,
  "9-C": 2.0, "9-B": 2.6, "9-A": 3.2,
  "8-C": 4.0, "High 8-C": 4.6, "8-B": 5.3, "8-A": 6.0,
  "Low 7-C": 6.6, "7-C": 7.3, "High 7-C": 8.0, "Low 7-B": 8.7, "7-B": 9.4, "7-A": 10.2, "High 7-A": 11.0,
  "6-C": 12.0, "High 6-C": 13.0, "Low 6-B": 14.0, "6-B": 15.0, "High 6-B": 16.0, "6-A": 17.0, "High 6-A": 18.0,
  "5-C": 19.5, "Low 5-B": 21.0, "5-B": 22.5, "5-A": 24.0, "High 5-A": 25.5,
  "Low 4-C": 27.0, "4-C": 28.5, "High 4-C": 30.0, "4-B": 32.0, "4-A": 34.5,
  "3-C": 37.0, "3-B": 40.0, "3-A": 43.0, "High 3-A": 46.0,
  "Low 2-C": 50.0, "2-C": 54.0, "2-B": 58.0, "2-A": 62.0,
  "Low 1-C": 68.0, "1-C": 74.0, "High 1-C": 80.0, "1-B": 90.0, "High 1-B": 100.0,
  "Low 1-A": 120.0, "1-A": 140.0, "High 1-A": 160.0, "0": 200.0
};

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
 * Obtiene el log10 ancla de un tier
 */
export function getTierLog10(tierExact) {
  if (!tierExact) return 1.0;
  const clean = String(tierExact).replace(/^Tier\s+/i, '').trim();
  return APEX_KI_LOG10_ANCHORS[clean] ?? 1.0;
}

/**
 * Calcula el baseApexKiLog10 combinando tier y withinTierScore (0..100)
 */
export function getBaseApexKiLog10(tierExact, withinTierScore = 50) {
  const baseAnchor = getTierLog10(tierExact);
  const scoreOffset = ((Number(withinTierScore) || 50) - 50) / 100 * 0.4;
  return baseAnchor + scoreOffset;
}

/**
 * Formatea un valor log10 a un texto visible amigable y preciso
 */
export function formatApexKiFromLog10(log10Val, tierExact = '') {
  if (log10Val === null || log10Val === undefined || isNaN(log10Val)) return "—";
  if (log10Val <= 0) return "1.0 APEX-Ki";

  if (log10Val >= 100) {
    return \`10^\${log10Val.toFixed(1)} ∞-Ki\`;
  }
  if (log10Val >= 36) {
    const exp = Math.floor(log10Val);
    const mantissa = Math.pow(10, log10Val - exp);
    return \`\${mantissa.toFixed(2)}e+\${exp} APEX-Ki\`;
  }

  const rawVal = Math.pow(10, log10Val);
  return formatApexKi(rawVal);
}

/**
 * Formateador de números positivos para APEX-Ki con sufijos estándar
 */
export function formatApexKi(value) {
  if (value === null || value === undefined || isNaN(value) || value < 0) return "—";
  if (value === Infinity) return "∞ APEX-Ki";

  const num = Number(value);
  if (num < 1000) return \`\${num >= 10 ? Math.round(num) : num.toFixed(1)} APEX-Ki\`;

  const suffixes = [
    { threshold: 1e33, suffix: "Dc" },
    { threshold: 1e30, suffix: "Nn" },
    { threshold: 1e27, suffix: "Oc" },
    { threshold: 1e24, suffix: "Sp" },
    { threshold: 1e21, suffix: "Sx" },
    { threshold: 1e18, suffix: "Qi" },
    { threshold: 1e15, suffix: "Qa" },
    { threshold: 1e12, suffix: "T" },
    { threshold: 1e9, suffix: "B" },
    { threshold: 1e6, suffix: "M" },
    { threshold: 1e3, suffix: "K" }
  ];

  for (const s of suffixes) {
    if (num >= s.threshold) {
      const val = num / s.threshold;
      return \`\${val >= 100 ? val.toFixed(1) : val.toFixed(2)} \${s.suffix}\`;
    }
  }

  return \`\${num.toFixed(0)} APEX-Ki\`;
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
      powerBand: tierExact ? \`\${tierExact} · N/A\` : 'Unknown'
    };
  }

  const withinTierScore = Math.max(0, Math.min(100, Math.round(quality * 100)));
  const powerKey = tierRank * 101 + withinTierScore;
  const apexScore = \`\${tierRank}.\${String(withinTierScore).padStart(2, "0")}\`;
  const powerBand = \`\${tierExact} · \${withinTierScore}/100\`;

  return {
    withinTierScore,
    powerKey,
    apexScore,
    powerBand
  };
}
`;

fs.writeFileSync('src/lib/apexTierSystem.js', content, 'utf8');
console.log('src/lib/apexTierSystem.js updated successfully!');
