# APEX Engine Automatic Deployment Protocol

Every agent assisting with this repository MUST automatically:
1. Run 
pm run build to compile the production bundle.
2. Commit and push all changes to GitHub (git push origin main).
3. Ensure Vercel production deployment is synchronized so https://apex-engine-six.vercel.app/ is always identical to localhost without the user having to ask.



## 🛡️ REGLA CONSTITUCIONAL V22: BASE OFICIAL INALTERABLE
1. El archivo `ROSTER_NIVELES_PODER_CORREGIDO_V22.json` (769 personajes consolidados tras 68 parches aprobados) rige como la **base oficial e inalterable** del APEX Engine en local y producción (Vercel).
2. Queda estrictamente prohibido alterar tiers, Ki numérico, multiplicadores, forms, universe, franchise o IDs de esta base.
3. `APEX_NEEDS_REVIEW_BACKLOG_V22.json` se utiliza EXCLUSIVAMENTE para advertir que una ficha posee una incidencia pendiente de revisión editorial, nunca para aplicar modificaciones arbitrarias o no aprobadas.
4. Si un combate, equipo, sinergia o ficha necesita interpretar un registro de needsReview:
   - Conserva el dato persistente del Roster V22.
   - Explica la limitación de la ficha.
   - No inventes correcciones.
   - No alteres el dato persistente.
5. Toda futura ficha, personaje o variante deberá integrarse respetando esta base inalterable y la especificación de APEX.
