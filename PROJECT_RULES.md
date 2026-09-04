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


## 🔒 PROTOCOLO DE GOBERNANZA Y CONGELACIÓN (V22)
1. **V22 = Baseline Oficial Congelado**:
   - `ROSTER_NIVELES_PODER_CORREGIDO_V22.json` NO se edita in-place bajo ninguna circunstancia.
   - NO se modifica por una IA automáticamente ni por procesos autónomos.
   - NO se cambia por un enriquecimiento normal de habilidades, sinergias o lore.
2. **Procedimiento Estricto de Modificación Futura**:
   - Si en el futuro se aborda o corrige un caso del backlog (`APEX_NEEDS_REVIEW_BACKLOG_V22.json`):
     - V22 se conserva intacto de forma permanente.
     - Se crea una nueva versión incremental numerada (`V23`, etc.) o una rama de revisión aislada.
     - NINGÚN cambio se integra al roster activo ni a producción sin la **aprobación humana explícita previa**.
