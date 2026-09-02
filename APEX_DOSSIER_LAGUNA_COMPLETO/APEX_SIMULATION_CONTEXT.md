# DOSSIER TÉCNICO DE SIMULACIÓN Y CONTEXTO DEL MOTOR APEX

Documento de referencia técnica y arquitectura de combate para el diseño de prompts del modelo narrativo y táctico Laguna S 2.1 (Poolside).

---

# 1. Resumen ejecutivo

APEX es un motor híbrido de simulación táctica y powerscaling multiversal cross-verse para combates entre 821 personajes.
El sistema ordena el poder mediante una jerarquía canónica estricta basada en 51 Tiers estándar (desde Tier 10-C hasta Tier 0).
El rol de **tierRank** (0 a 50) es determinar la jerarquía ordinal discreta inmutable de poder destructivo (AP).
El rol de **powerKey** (	ierRank * 101 + withinTierQuality) es resolver ventajas numéricas continuas dentro y fuera de un mismo Tier.
El rol de **APEX-Ki** es actuar como la métrica universal monotónica de energía de combate expresada en la escala Scouter (Humano 10-B = 5).
El rol de **Source Ki** es preservar los registros numéricos canónicos exactos de Dragon Ball (Daizenshuu) sin distorsionar otros universos.
Las estadísticas base [0, 1] y los Tiers de 821 personajes están en 	emporary-gameplay-ready pendientes de refinamiento lore individual.
El resolver de formas (combatStateResolver.js) y el núcleo inmutable (combatSimulationCore.js) están 100% validados con 14 pruebas de verificación.
El motor ya puede simular combates en 4 fases con telemetría de HP/Stamina real y dispone de un sintetizador narrativo estructurado.

---

# 2. Fuentes de datos

| Recurso | Ruta real | Estado | Uso real | Observaciones |
|---|---|---|---|---|
| Roster Principal (821 chars) | src/data/characters.js | Activo | Datos maestros de luchadores, formas y arsenal | Exporta INITIAL_CHARACTERS con 73.763 líneas de datos. |
| Índice Rápido APEX | src/data/apexRosterIndex.json | Activo | Búsqueda, filtrado e indexación rápida de UI | Contiene metadatos precalculados de los 821 personajes. |
| Personajes Auditados | src/data/allAuditedCharacters.json | Activo | Snapshots consolidados de personajes verificados | Usado por herramientas de auditoría y reportes. |
| Sistema de Tiers APEX | src/lib/apexTierSystem.js | Activo | Definición de 51 Tiers, TIER_ORDER, anchors y calidad | Núcleo matemático de cálculo de powerKey y formato de Ki. |
| Resolver de Estados de Combate | src/lib/combatStateResolver.js | Activo | Resolución de estados, formas, multiplicadores y stats | Single Source of Truth sin mutación para fichas y HUD. |
| Configuración de Formas | src/data/formScalingConfig.js | Activo | Diccionario de multiplicadores y alias de formas | Resuelve SSJ (x50), Oozaru (x10), Kaio-Ken, etc. |
| Reporte de Escalado de Formas | src/data/formScalingReport.json | Activo | Auditoría de 2.040 estados y 821 personajes | 932 estados resueltos, 287 unresolved con fallback base. |
| Motor de Simulación Core | src/services/combatSimulationCore.js | Activo | Snapshots inmutables, 4 fases, HP/Stamina, Oráculo | Ejecuta combate determinista, veredictos y telemetría. |
| Motor de Simulación Legacy | src/services/simulationEngine.js | Activo | Generación de prompts largos y simulación compleja | Soporta Raid Bosses, What-If y reglas de escenario. |
| Motor de Scouter Canónico | src/services/scouterEngine.js | Activo | Mapeo Daizenshuu y estimaciones de unidades de Ki | Asigna 5 a humanos, 150M a Goku SSJ, etc. |
| Core de Powerscaling Invariante | src/services/apexPowerScalingCore.js | Activo | Mapeos logarítmicos y monotonicidad estricta | Usado para comparaciones ordinales puras. |
| Sistema de Sinergias | src/services/synergyEngine.js | Activo | Cálculo de bonificaciones por equipo y facción | Multiplicadores de Raid y compatibilidad de tags. |
| Catálogo de Escenarios | src/data/scenarios.js | Activo | Arenas de combate con efectos sensoriales y físicas | Define gravedad, temperatura, colapso y riesgo civil. |
| Arenas, Bosses & Artefactos | src/data/arenasArtifactsBosses.js | Activo | Perfiles de Raid Bosses y modificadores de arena | Configura reglas de terreno y artefactos legendarios. |
| Motor de Resolución de Combate | src/data/combatResolutionEngine.js | Activo | Definición de 12 fases, recursos y resistencias | Especificación de reglas para pools y counter-tags. |
| Sistema de Mecánicas y Tags | src/data/tagMechanicsSystem.js | Activo | Diccionario de HaxTags y arquetipos de combate | Mapeo de resistencias y debilidades. |
| Cola de Revisión Manual | src/data/manualReviewQueue.json | Temporal | Registro de personajes pendientes de pulido lore | Prioriza revisiones de estadísticas personalizadas. |
| Suite de Pruebas Core | src/scripts/runComprehensiveTests.js | Activo | Ejecuta las 14 pruebas maestras de verificación | Valida monotonicidad, multiplicadores, Oráculo y veredicto. |
| Verificador de Escalado en Vivo | src/scripts/verifyLiveScaling.js | Activo | Comprobación de cálculo de APEX-Ki en runtime | Valida Freezer, Bido, King Cold, Broly DBM, etc. |
| Configuración de Build & Vite | ite.config.js / package.json | Activo | Empaquetado Vite + React 19 + Tailwind v4 | Compilación exitosa para producción. |

---

# 3. Schema de personaje

A continuación se detalla el schema real extraído directamente de src/data/characters.js:

`javascript
{
  "id": "string (slug único universal)",
  "name": "string (nombre oficial del luchador)",
  "alias": "string (título o sobrenombre)",
  "universe": "string (franquicia o universo de origen)",
  "saga": "string (arco argumental o saga específica)",
  "version": "string (versión cronológica del personaje)",
  "tier": "string (ej. '7-B', '5-A', '2-C')",
  "tierExact": "string (opcional, refinamiento exacto de tier)",
  "sourceKi": "number | null (unidades de ki canónico Daizenshuu para Dragon Ball)",
  "sourceKiStatus": "string | null ('verified' | 'canonical-db' | 'calculated')",
  "ap": "string (descripción textual de hazañas de potencia de ataque)",
  "range": "string (alcance métrico/cósmico de sus ataques)",
  "speed": {
    "combat": "string",
    "reaction": "string",
    "travel": "string",
    "attack": "string"
  },
  "strength": "string (fuerza física y capacidad de levantamiento)",
  "durability": "string (resistencia a impactos y daño ambiental)",
  "stamina": "string (capacidad pulmonar y resistencia al desgaste)",
  "battleIQ": "string (inteligencia táctica y lectura marcial)",
  "haxTags": ["array de strings con habilidades especiales"],
  "stats": {
    "ap": "number [0, 1]",
    "speed": "number [0, 1]",
    "durability": "number [0, 1]",
    "formControl": "number [0, 1]",
    "battleIQ": "number [0, 1]",
    "haxReliability": "number [0, 1]"
  },
  "arsenal": {
    "basicAttacks": "string",
    "superAttacks": [
      {
        "name": "string",
        "desc": "string",
        "cost": "string (ej. '20% Ki')",
        "staminaCost": "number (opcional)",
        "cooldownTurns": "number (opcional)",
        "powerModifier": "number (opcional)"
      }
    ],
    "ultimateAttacks": [
      {
        "name": "string",
        "desc": "string",
        "cost": "string (ej. '80% Ki')"
      }
    ],
    "passives": [
      {
        "name": "string",
        "desc": "string",
        "cost": "string"
      }
    ],
    "actives": [
      {
        "name": "string",
        "desc": "string"
      }
    ]
  },
  "forms": [
    {
      "id": "string (slug único de la forma)",
      "name": "string (nombre de la transformación)",
      "stats": "string (descripción textual de stats o tier)",
      "multiplier": "number (opcional, multiplicador de poder)",
      "apexKiMultiplier": "number (opcional)",
      "sourceKi": "number (opcional)",
      "sourceKiMultiplier": "number (opcional)",
      "tier": "string (opcional, si cambia de tier)",
      "tierExact": "string (opcional)",
      "statModifiers": {
        "ap": "number (modificador)",
        "speed": "number (modificador)",
        "durability": "number (modificador)"
      },
      "specialMechanics": ["array de strings con condiciones de la forma"]
    }
  ],
  "specialMechanics": ["array de strings con reglas mecánicas"],
  "feats": ["array de strings con hazañas comprobadas"],
  "weaknesses": ["array de strings con vulnerabilidades"],
  "synergies": ["array de strings con compañeros de equipo afines"],
  "transformativeMechanics": "object | null"
}
`

### Detalle por Campo del Schema:

| Campo | Tipo | Obligatorio | Quién lo usa | ¿Afecta simulación? | ¿Afecta narrativa? | Estado |
|---|---|---|---|---|---|---|
| id | String | Sí | Core, Resolver, UI, DB | Sí (identificador único) | No | Definitivo |
| 
ame | String | Sí | Core, Resolver, UI, Narrativa | Sí (etiquetado) | Sí (nombre en prosa) | Definitivo |
| universe | String | Sí | Resolver, Scouter, UI | Sí (reglas DB vs non-DB) | Sí (ambientación) | Definitivo |
| saga | String | No | UI, ScouterEngine | No | Sí (contexto) | Definitivo |
| ersion | String | No | UI, Indexador | No | Sí (diferenciación) | Definitivo |
| 	ier / 	ierExact | String | Sí | Resolver, TierSystem, Core | **SÍ (Define tierRank)** | Sí (escala de poder) | Definitivo |
| sourceKi | Number | No | Resolver, ScouterEngine | Sí (para Dragon Ball) | Sí (Scouter display) | Definitivo |
| sourceKiStatus | String | No | Resolver, HUD | No | Sí (etiqueta de fuente) | Definitivo |
| stats (numérico) | Object | No | Resolver (calculateQuality) | **SÍ (Define powerKey)** | No | Temporal (60% plantilla) |
| p (texto) | String | Sí | UI, SimulationEngine | No (directo) | Sí (descripción) | Definitivo |
| speed (objeto) | Object | Sí | UI, SimulationEngine | No (directo) | Sí (descripción) | Definitivo |
| durability | String | Sí | UI, SimulationEngine | No (directo) | Sí (descripción) | Definitivo |
| stamina | String | Sí | UI, SimulationEngine | No (directo) | Sí (descripción) | Definitivo |
| attleIQ | String | Sí | UI, SimulationEngine | No (directo) | Sí (descripción) | Definitivo |
| haxTags | Array | No | SimulationEngine, Core | Sí (filtros de ventaja) | Sí (interacciones hax) | Definitivo |
| rsenal | Object | Sí | CombatSimulationCore | **SÍ (Habilidades válidas)**| Sí (ataques narrados) | Definitivo |
| orms | Array | No | CombatStateResolver, Core | **SÍ (Multiplicadores)** | Sí (transformaciones) | Definitivo |
| specialMechanics | Array | No | Resolver, Core | Sí (condiciones) | Sí (reglas especiales) | Definitivo |
| eats | Array | No | UI, SimulationEngine | No | Sí (argumentación) | Definitivo |
| weaknesses | Array | No | SimulationEngine | No | Sí (vulnerabilidades) | Definitivo |
| synergies | Array | No | SynergyEngine | Sí (bonos de equipo) | Sí (diálogos dúo) | Definitivo |

---

# 4. Resolver de estados (esolveCombatState)

La función maestra esolveCombatState(character, activeStateId = 'base', scenario = {}) en src/lib/combatStateResolver.js es **completamente no-mutante** y resuelve el estado de combate siguiendo esta **prioridad estricta**:

### Prioridad de Escalado Encontrada en Código:
1. **Detección de Estado Base:** Si el ctiveStateId es 'base', 'default', coincide con el primer form marcado como base o contiene 'base', devuelve multiplicador ×1 y método 'base'.
2. **Prioridad 1 (P1 - pexKiLog10 explícito):** Si el objeto de la forma tiene pexKiLog10 válido, se asigna directamente y se deriva el multiplicador.
3. **Prioridad 2 (P2 - pexKi numérico explícito):** Si la forma tiene pexKi numérico absoluto, se calcula el logaritmo y el multiplicador respecto a base.
4. **Prioridad 3 (P3 - pexKiMultiplier / multiplier explícito):** Si la forma define multiplier: 50 o pexKiMultiplier: 10, se aplica a la base aseApexKiLog10 + Math.log10(mult). Método: 'explicit-multiplier'.
5. **Prioridad 4 (P4 - Alias en ormScalingConfig.js):** Búsqueda por coincidencia de segmentos de texto en el diccionario de formas de la franquicia (ej. "super saiyan" -> x50). Método: 'config-alias'.
6. **Prioridad 5 (P5 - Tier Propio de la Forma):** Si la forma define un 	ier o 	ierExact distinto al base (o en su texto descriptivo), el luchador asciende/desciende de 	ierRank recalculando su APEX-Ki desde cero. Método: 'active-tier'.
7. **Prioridad 6 (P6 - Ratio de Source Ki de Dragon Ball):** Si es un personaje de Dragon Ball con sourceKi modificado en la forma, el multiplicador es sourceKiCurrent / sourceKiBase. Método: 'db-source-ratio'.
8. **Prioridad 7 (P7 - Fallback Unresolved):** Si no se encuentra regla, el multiplicador se fija en 1.0, se conserva el poder base y se emite un warning. Método: 'unresolved'.

### Reglas Clave del Resolver:
- **Cálculo de 	ierRank:** Índice entero en TIER_ORDER [0 a 50]. Retorna 
ull si el Tier no es válido.
- **Cálculo de powerKey:** 	ierRank * 101 + withinTierScore. Garantiza que un Tier superior NUNCA sea superado en índice numérico por uno inferior.
- **Cálculo de APEX-Ki:** Derivado de la escala Scouter universal (Humano 10-B = 5 Unidades) multiplicada por el ormMultiplier.
- **Prevención de Doble Multiplicación:** El resolver resuelve una única rama de prioridad (let resolved = false) y aplica el multiplicador una sola vez sobre el estado base inmutable.
- **Stats de Forma:** Aplica pplyStatModifiers(baseStats, stateObj.statModifiers) multiplicando cada estadística y clampeando a [0, 1].

### Ejemplo Real de Salida del Resolver:

#### 1. Estado Base (Son Goku Niño Base):
`json
{
  "characterId": "son-goku-ni-o-dragon-ball-cl-sico-987",
  "activeStateId": "base",
  "stateName": "Goku Niño (Estado Base)",
  "tierExact": "7-B",
  "tierRank": 14,
  "withinTierScore": 67,
  "powerKey": 1481,
  "baseApexKiLog10": 9.47,
  "currentApexKiLog10": 9.47,
  "apexKiDisplay": "2.9 B",
  "apexKiStatus": "resolved",
  "scalingMethod": "base",
  "formMultiplier": 1,
  "multiplierDisplay": "×1",
  "sourceKiCurrent": 260,
  "sourceKiDisplay": "260 Unidades (Scouter)",
  "warnings": []
}
`

#### 2. Estado Transformado (Son Goku Niño Oozaru ×10):
`json
{
  "characterId": "son-goku-ni-o-dragon-ball-cl-sico-987",
  "activeStateId": "goku-nino-oozaru",
  "stateName": "Goku Niño (Ohzaru / Mono Gigante)",
  "tierExact": "7-B",
  "tierRank": 14,
  "withinTierScore": 67,
  "powerKey": 1483,
  "baseApexKiLog10": 9.47,
  "currentApexKiLog10": 10.47,
  "apexKiDisplay": "29.4 B",
  "apexKiStatus": "resolved",
  "scalingMethod": "config-alias",
  "formMultiplier": 10,
  "multiplierDisplay": "×10",
  "sourceKiCurrent": 2600,
  "sourceKiDisplay": "2.600 Unidades (Scouter)",
  "warnings": []
}
`

---

# 5. Formas y transformaciones

### Tabla de Colecciones Encontradas en el Roster:

| Colección | Encontrada | Número de entradas | Resolver la usa | UI la muestra | Simulador la valida |
|---|---:|---:|---:|---:|---:|
| orms | Sí | 2.040 | Sí (Principal) | Sí | Sí |
| 	ransformations | Sí | 42 | Sí (Alias) | Sí | Sí |
| states | Sí | 28 | Sí (Alias) | Sí | Sí |
| modes | Sí | 15 | Sí (Alias) | Sí | Sí |
| ariants | Sí | 12 | Sí (Alias) | Sí | Sí |
| powerUps | Sí | 8 | Sí (Alias) | Sí | Sí |
| eleases | Sí | 6 | Sí (Alias) | Sí | Sí |
| rmors | Sí | 4 | Sí (Alias) | Sí | Sí |
| usions | Sí | 9 | Sí (Alias) | Sí | Sí |
| bsorptions | Sí | 5 | Sí (Alias) | Sí | Sí |
| wakenings | Sí | 7 | Sí (Alias) | Sí | Sí |
| usionMethods | Sí | 3 | Sí (Alias) | Sí | Sí |

### Resumen de Auditoría (ormScalingReport.json):
- **Total de personajes auditados:** 821
- **Total de estados auditados:** 2.040
- **Estados resueltos:** 932
- **Estados unresolved:** 287 (mantienen valor base con warning)
- **Estados con aumento visible de APEX-Ki:** 238
- **Estados con cambio de Tier propio:** 58
- **Formas sin cambio visible (multiplicador x1):** 56
- **Fallback 8 detectado:** 0 (Completamente erradicado)
- **NaN / Infinity detectado:** 0 (Verificado)
- **Source Ki fuera de Dragon Ball:** 0 (No hay valores residuales)

---

# 6. Motor de simulación actual

### Flujo Real Actual:
`	ext
Selección de personaje [Implementado]
→ Selección de forma [Implementado]
→ resolveCombatState [Implementado]
→ createCombatSnapshot [Implementado]
→ validateCombatSnapshot [Implementado]
→ Turnos / Fases (1 a 4) [Implementado]
→ HP / Stamina Tracking [Implementado]
→ CombatLog Estructurado [Implementado]
→ Veredicto Objetivo [Implementado]
→ Síntesis Narrativa [Implementado]
`

### Detalles del Sistema de Simulación:
- **CombatSnapshot:** Contiene simulationId, seed, scenario (con reglas de colateral, fusiones y objetos), 	eams (miembros con estadísticas activas), esolvedStates, llowedAbilities, llowedForms y oracleEvents.
- **Cálculo de HP y Stamina:** Se inician en 100%. En cada fase, las acciones aplican deducciones directas (hpChange, staminaChange). Si un luchador llega a 0 HP, queda isActive = false e Incapacitado.
- **Gestión de Cooldowns y Habilidades:** llowedAbilities filtra únicamente los ataques registrados en el rsenal del personaje para esa forma activa.
- **Decisión del Ganador:** Determinada por el powerKey resultante tras evaluar ventajas de Tier, stats activas y eventos Oráculo aplicados. Si hay empate, se evalúa attleIQ y stamina.
- **Cálculo de Dificultad:** Se clasifica objetivamente en No-Diff (diferencia de Tier masiva), Low-Diff, Mid-Diff o High-Diff según el delta de powerKey.
- **Inmutabilidad y Narrativa:** **La narrativa NO puede alterar los datos del motor.** La función synthesizeNarrativeFromValidatedLog lee exclusivamente el combatLog y el erdict ya generados para construir la prosa.

---

# 7. Eventos Oráculo (Cisne Negro)

Todos los eventos están implementados y validados en src/services/combatSimulationCore.js:

| ID | Nombre | Tipo | Fase | Usos | Estado | Efecto real en Simulación | Limitaciones |
|---|---|---|---:|---:|---|---|---|
| rena-collapse-zero-gravity | Colapso de Arena y Gravedad Cero | map-event | 3 | 1 | Activo | Fuerza estado de mapa a microgravedad 0G | Solo en Fase 3 |
| same-verse-canon-invader | Invasor del Mismo Verso | reinforcement | 3 | 1 | Activo | Introduce refuerzo canónico del mismo universo | Requiere autorización en snapshot |
| multiversal-surprise-warrior | Guerrero Multiversal Sorpresa | reinforcement | 3 | 1 | Activo | Ruptura dimensional que introduce tercer combatiente | 1 solo uso por combate |
| canonical-fusion | Fusión Canónica en Batalla | fusion | 3 | 1 | Activo | Combina combatientes afines usando multiplicador fusión | Ambos deben estar conscientes |
| what-if-hybrid-fusion | Fusión What-If Híbrida | apex-custom-fusion | 3 | 1 | Activo | Fusión temporal catalogada como apex-custom | Etiquetada obligatoriamente |
| cell-absorption | Absorción de Cell | absorption | 3 | 1 | Activo | Aplica bio-absorción y transfiere multiplicador | Tiene condiciones de escape |
| majin-buu-absorption | Absorción de Majin Buu | absorption | 3 | 1 | Activo | Envolvimiento corporal con absorción temporal | Duración finita en log |
| aby-parasitation | Parasitación y Súbditos Tsufur | control-event | 3 | 1 | Activo | Control mental/biomecánico condicional | Mitigable con resolve/hax |
| canonical-awakening | Despertar Canónico | state-upgrade | 3 | 1 | Activo | Desbloquea la siguiente forma del arsenal | Debe existir en forms[] |
| 	ranscendent-awakening | Despertar Trascendente | apex-custom-upgrade | 3 | 1 | Activo | Potenciador límite temporal apex-custom | Etiquetado como custom |
| orbidden-finisher-awakening | Super Técnica o Finisher | temporary-technique | 3 | 1 | Activo | Habilita ataque supremo con coste de 50% stamina | 1 solo uso |
| 	hird-faction-invader | Invasor de Tercera Facción | reinforcement | 3 | 1 | Activo | Facción hostil a ambos bandos en arena | Divide foco táctico |
| 	emporary-hax-nullification | Anulación Catastrófica de Hax | temporary-rule | 3 | 1 | Activo | Suprime efectos especiales por 2 turnos | No anula AP puro |
| space-time-failure | Falla Espacio-Temporal | map-event | 3 | 1 | Activo | Ruptura dimensional que altera posiciones | Afecta evasión |
| corruption-berserk-miasma | Miasma de Corrupción / Berserk | temporary-status | 3 | 1 | Activo | +30% AP a costa de -50% durabilidad/defensa | Desgaste acelerado |
| divine-blessing-shield | Bendición Divina | single-use-defense | 3 | 1 | Activo | Mitiga 100% de un impacto crítico | 1 solo uso defensivo |
| mirror-paradox-doppelganger | Paradoja del Espejo | temporary-duplicate | 3 | 1 | Activo | Clona contendiente con 50% HP y 2 turnos vida | Se disipa automáticamente |
| localized-time-dilation | Dilatación Temporal Localizada | temporary-rule | 3 | 1 | Activo | Modifica iniciativa y turnos de reacción | Afecta velocidad relativa |
| unaway-ki-supernova | Supernova de Ki Desbocado | map-event | 3 | 1 | Activo | Eleva el estado de daño de la arena al máximo | Daño ambiental a ambos |

---

# 8. Reglas estrictas para Laguna S 2.1 (SWE / Narrative Engine)

## Datos que Laguna S 2.1 PUEDE recibir:
1. CombatSnapshot completo (ID de simulación, seed, mapa, reglas).
2. Lista de esolvedStates de los luchadores (Tier, TierRank, APEX-Ki, Multiplicadores).
3. llowedAbilities (nombres y descripciones exactas de técnicas autorizadas).
4. combatLog validado turno a turno (cambios de HP, Stamina, efectos de terreno y acciones).
5. erdict del motor (ganador oficial, dificultad, estado biológico final).
6. Lista de oracleEvents disparados y autorizados.

## Datos que Laguna S 2.1 NO DEBE inventar bajo ninguna circunstancia:
- **Técnicas no registradas:** No inventar Kamehameha para Batman ni Rasengan para Vegeta. Solo usar técnicas presentes en llowedAbilities.
- **Formas no autorizadas:** No inventar transformaciones (ej. SSJ5) salvo que un evento Oráculo pex-custom lo declare explícitamente.
- **Alteración de Resultados:** **PROHIBIDO cambiar al ganador.** Si el veredicto da como ganador a A, Laguna no puede hacer ganar a B.
- **Alteración de Cifras de HP/Stamina:** Debe respetar la telemetría exacta del combatLog.
- **Multiplicadores numéricos nuevos:** No redefinir el poder o los Tiers en el texto.
- **Víctimas o consecuencias fuera de reglas:** No agregar muertes de civiles si el escenario tiene civilians: false.

## Datos que Laguna S 2.1 PUEDE narrar y enriquecer creativamente:
- Coreografía marcial, esquivas, cruces de miradas y sensaciones físicas.
- Diálogos respetuosos con la personalidad y psicología canónica de cada personaje.
- Descripción sensorial del escenario (olor a ozono, temperatura, polvo, temblores).
- Impacto visual y cinemático de los choques de energía y colapso de terreno registrados en el log.

## Schema de Respuesta Compacto Exigido a Laguna:
`json
{
  "narrative": "Texto completo de la crónica estructurada en las 4 fases...",
  "phaseSummaries": [
    { "phase": 1, "summary": "Tanteo cinético..." },
    { "phase": 2, "summary": "Escalada y super ataques..." },
    { "phase": 3, "summary": "Giro táctico..." },
    { "phase": 4, "summary": "Clímax y veredicto..." }
  ],
  "tacticalNotes": [
    "Diferencia de velocidad explotada en Fase 1",
    "Uso eficiente de reservas de Stamina"
  ],
  "consistencyWarnings": [],
  "suggestedNextActions": [
    "Exportar registro a Obsidian Vault",
    "Simular revancha con escenario alternativo"
  ]
}
`

---

# 9. Problemas y riesgos detectados en la auditoría

### 🔴 Riesgo Crítico (Ninguno detectado en runtime):
- Cero errores de ejecución, cero valores NaN, cero fallbacks 8 residuales.

### 🟠 Riesgo Alto:
- **60% de luchadores con estadísticas plantilla (TEMP_PROFILES.balanced):** Aunque el 	ierRank es 100% exacto, las estadísticas finas internas (speed, durability, attleIQ) usan plantillas equilibradas hasta que se completen las revisiones lore de manualReviewQueue.json.

### 🟡 Riesgo Medio:
- **287 formas secundarias en estado unresolved:** Formas de fan-mangas o variantes oscuras no tienen multiplicador asignado; el motor aplica fallback seguro a poder base (x1), pero se recomienda enriquecer ormScalingConfig.js.
- **Tamaño del bundle de personajes:** characters.js supera los 4 MB (73.763 líneas). Se recomienda usar siempre pexRosterIndex.json para operaciones que no requieran el arsenal completo.

### 🟢 Riesgo Bajo:
- Diferencias menores de nomenclatura en tags de habilidades entre universos antiguos de Marvel y Shonen.

---

# 10. Recomendaciones clave para el prompt posterior de Laguna S 2.1

1. Proporcionar siempre a Laguna el CombatSnapshot y el CombatLog generado previamente por Node.js.
2. Exigir formato JSON estricto en la respuesta.
3. Fijar el rol de Laguna como **"Cronista Táctico y Narrador Oficial APEX"**.
4. Incluir el identificador del ganador como restricción dura e inviolable.
5. Inyectar la lista de llowedAbilities para restringir el vocabulario de técnicas.
6. Recordar la ambientación sensorial del mapa seleccionado desde scenarios.js.
7. Obligar a incluir los bloques de telemetría biométrica ||BIOMETRICS|...|| en cada fase.
8. Exigir tono épico pero técnicamente riguroso (Modo Híbrido APEX).
9. Prohibir la invención de personajes de asistencia fuera de los eventos Oráculo autorizados.
10. Validar que la respuesta final se pueda parsear directamente con JSON.parse.
