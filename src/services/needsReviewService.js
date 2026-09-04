/**
 * APEX POWER SCALING — NEEDS_REVIEW BACKLOG SERVICE (V22)
 * 
 * Regla Constitucional de Operación:
 * - NO aplica cambios automáticos a tiers, Ki, multiplicadores, forms, universo ni IDs.
 * - Sirve EXCLUSIVAMENTE para advertir a la UI y a las simulaciones que una ficha
 *   posee una incidencia pendiente de revisión editorial en el Backlog V22.
 * - Si un combate, equipo, sinergia o ficha necesita interpretar un registro de needsReview:
 *   1. Conserva el dato persistente del Roster V22.
 *   2. Explica la limitación de la ficha.
 *   3. No inventa correcciones ni altera los valores persistentes.
 */

import { APEX_NEEDS_REVIEW_BACKLOG } from '../data/apexNeedsReviewBacklog.js';

const issuesMap = new Map();

if (APEX_NEEDS_REVIEW_BACKLOG && APEX_NEEDS_REVIEW_BACKLOG.franchises) {
  APEX_NEEDS_REVIEW_BACKLOG.franchises.forEach(f => {
    f.issues.forEach(issue => {
      const rawIds = issue.recordId ? issue.recordId.split(/[,/]/).map(s => s.trim()) : [];
      rawIds.forEach(id => {
        if (id) {
          if (!issuesMap.has(id)) {
            issuesMap.set(id, []);
          }
          issuesMap.get(id).push({
            franchise: f.franchise,
            severity: issue.severity,
            issueType: issue.issueType,
            affectedFields: issue.affectedFields,
            reason: issue.reason,
            recommendedAction: issue.recommendedAction
          });
        }
      });
    });
  });
}

/**
 * Obtiene las incidencias registradas para un personaje.
 */
export function getCharacterNeedsReviewNotice(characterId) {
  if (!characterId) return null;
  return issuesMap.get(characterId) || null;
}

/**
 * Verifica si un personaje tiene incidencias pendientes en el backlog V22.
 */
export function isCharacterInNeedsReview(characterId) {
  if (!characterId) return false;
  return issuesMap.has(characterId);
}

/**
 * Genera el texto de advertencia para la interfaz de usuario (Modal / Ficha).
 */
export function getNeedsReviewWarningText(characterId) {
  const issues = getCharacterNeedsReviewNotice(characterId);
  if (!issues || issues.length === 0) return null;

  return issues.map(iss => {
    return `[${iss.severity}] ${iss.reason}`;
  }).join(' | ');
}

/**
 * Genera notas de advertencia para la simulación de combate sin alterar el estado persistente.
 */
export function formatNeedsReviewSimulationNotice(characters = []) {
  const notices = [];
  const seen = new Set();

  characters.forEach(c => {
    if (c && c.id && issuesMap.has(c.id) && !seen.has(c.id)) {
      seen.add(c.id);
      const issues = issuesMap.get(c.id);
      issues.forEach(iss => {
        notices.push(`⚠️ AVISO DE CALIBRACIÓN (${c.name}): Ficha con revisión pendiente en APEX Backlog (${iss.issueType} [${iss.severity}]). Motivo: ${iss.reason}. REGLA V22: Se emplean estrictamente sus valores persistentes oficiales sin alteraciones especulativas.`);
      });
    }
  });

  return notices;
}

export default {
  getCharacterNeedsReviewNotice,
  isCharacterInNeedsReview,
  getNeedsReviewWarningText,
  formatNeedsReviewSimulationNotice
};
