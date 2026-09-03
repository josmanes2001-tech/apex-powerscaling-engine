# ⚡ APEX Power Scaling Engine — Reglas de Arquitectura & Código

Este documento rige para todos los agentes y desarrolladores que trabajen en este repositorio.

## 1. Arquitectura del Motor
- **Resolutor Único (`src/lib/combatStateResolver.js`)**:
  - Toda forma, transformación, fusión o estado debe resolverse exclusivamente mediante `resolveCombatState(character, stateId, scenario)`.
  - Prioridad de cálculo:
    1. Tier propio de la forma $\rightarrow$ recalcula APEX-Ki desde el nuevo Tier.
    2. Multiplicador de forma por alias en `src/data/formScalingConfig.js`.
    3. Multiplicador textual o `stats` de la forma.
- **Configuración de Multiplicadores (`src/data/formScalingConfig.js`)**:
  - Contiene los multiplicadores por universo (`dragon-ball`, `baki`, `one-piece`, `opm`, etc.).
  - Aliases exactos normalizados.
- **Formateador y Escala (`src/lib/apexTierSystem.js`)**:
  - Rangos logarítmicos de Ki: `getBaseApexKiLog10(tier, qualityScore)`.
  - Formato legible: `formatApexKiFromLog10()` (`K`, `M`, `B`, `T`, `Qd`, `Qn`, `Sx`, `Sp`, `Oc`, `Nn`, `Dc`, etc.).

## 2. Restricciones Críticas
- ❌ **NUNCA usar `BigInt`** en el runtime ni en cálculos de Ki/stats.
- ❌ **NUNCA usar `Infinity` o `NaN`**; siempre retornar valores finitos numéricos y cadenas seguras.
- ❌ **NUNCA usar `fallback 8`** (`sourceKi || 8`, `tier[0] || 8`).
- ❌ **NO renderizar objetos en JSX**: cualquier campo de estadísticas como `form.stats` o `character.ap` puede ser un objeto o una cadena; siempre renderizarlo defensivamente: `typeof stats === 'object' ? (stats.ap || Object.values(stats).join(' | ')) : stats`.

## 3. Reglas de Oro Canónicas de Roster y Formas
- **Exactamente UNA SOLA Forma Base por Ficha**:
  - Toda ficha DEBE tener su Forma Base en el índice 0 del array `forms` con `apexKiMultiplier: 1.0`.
  - NUNCA duplicar la forma base ni crear formas artificiales como "100% Máximo Poder" o "Poder Desatado" en personajes con transformaciones reales (Goku, Vegeta, etc.).
- **Orden Ascendente Estricto de Transformaciones**:
  - Orden cronológico/potencial: Base (1.0x) -> Técnica Menor -> SSJ1 -> SSJ2 -> SSJ3 -> Formas Divinas.
  - Toda forma debe tener `apexKiMultiplier`, `tier` escalado, `staminaDrain` numérico y `stats` descriptivas.
- **Prohibición de Ki de Dragon Ball en otros Universos**:
  - `sourceKi` SOLO está permitido en personajes canónicos de Dragon Ball con registros oficiales del Daizenshuu. Personajes de Marvel, DC, Baki, HxH, etc. NUNCA deben tener `sourceKi`.
- **Cero Números de Punto Flotante Raros**:
  - Prohibidos artefactos como `82500000000000020`. Redondear siempre a cifras significativas limpias.
- **16 Franquicias Oficiales Inmutables**:
  - Mantener siempre agrupado el roster dentro de las 16 franquicias oficiales sin valores `undefined`.

## 4. Estándar Dorado APEX: Especificación Maestra de Ficha Completa
Toda ficha de personaje en APEX Power Scaling debe estructurarse con los siguientes componentes esenciales:

```json
{
  "id": "identificador-kebab-case",
  "name": "Nombre Canónico (Saga o Versión)",
  "alias": "Alias o Epíteto",
  "universe": "Universo Canónico Específico",
  "franchise": "Una de las 16 Franquicias Oficiales",
  "tier": "Tier Principal (ej: 5-A | 2-C Hax)",
  "physicalTier": "Tier de Fuerza/Resistencia Físicas",
  "haxTier": "Tier de Habilidades Especiales/Trascendentes",
  "ap": "Potencia de Ataque descriptiva y en julios/TNT",
  "range": "Alcance efectivo de combate",
  "speed": "Velocidad de combate y reacción (ej: FTL+, Mach 50)",
  "strength": "Fuerza de elevación e impacto",
  "durability": "Resistencia a impactos y daño energético",
  "stamina": "Reserva de resistencia física/energética",
  "battleIQ": "Inteligencia táctica de combate (ej: Genio, Prodigio)",
  "sourceKi": 18000, // SOLO en Dragon Ball con registro oficial; omitir en otros
  "numericStats": {
    "apexKi": 18000,
    "scouterKi": 18000,
    "powerLevel": 18000
  },
  "forms": [
    {
      "id": "forma-base-id",
      "name": "Nombre (Estado Base)",
      "apexKiMultiplier": 1.0,
      "staminaDrain": 0,
      "tier": "Tier Base",
      "stats": "Descripción de límites y capacidades."
    },
    {
      "id": "transformacion-id",
      "name": "Nombre Transformación",
      "apexKiMultiplier": 50.0,
      "staminaDrain": 20,
      "tier": "Tier Escalado",
      "stats": "Incremento de poder y desgaste muscular."
    }
  ],
  "arsenal": {
    "basicAttacks": [
      { "name": "Ataque Básico", "description": "Golpe marcial", "staminaCost": 5 }
    ],
    "superAttacks": [
      { "name": "Técnica Especial", "description": "Ataque de firma con carga", "staminaCost": 25, "counterplay": "Esquiva lateral o barrera" }
    ],
    "ultimateAttacks": [
      { "name": "Técnica Definitiva", "description": "Finisher masivo de alto impacto", "staminaCost": 50, "counterplay": "Interrupción o choque de energía" }
    ],
    "passives": [
      { "name": "Rasgo Biológico", "description": "Adaptación, Zenkai, regeneración" }
    ],
    "specialMechanics": [
      { "name": "Mecánica Hax", "description": "Sellos, distorsión temporal o espacial" }
    ],
    "weaknesses": [
      { "name": "Punto Ciego", "description": "Vulnerabilidad física o psicológica", "counterTags": ["TagVulnerable"] }
    ]
  },
  "synergies": [
    { "targetCharacterId": "id-aliado", "name": "Nombre de Sinergia", "bonus": "Efecto táctico combinado" }
  ],
  "teamCombos": [
    {
      "name": "Nombre del Combo",
      "partner": "Nombre Aliado",
      "phase1_opening": "Ataque inicial desestabilizador",
      "phase2_bridge": "Técnica intermedia de retención o aturdimiento",
      "phase3_finisher": "Impacto definitivo conjunto letal"
    }
  ],
  "combatAIPersonality": "Estilo de combate de la IA (Agresivo, Calculador, Contragolpeador)",
  "environmentalAffinity": "Bonificaciones en terrenos favorables (ej: Gravedad aumentada, Espacio exterior)",
  "provenFeats": ["Hazaña canónica 1 comprobada con número de capítulo o escena"],
  "combatDialogue": {
    "intro": ["Frase inicial de combate"],
    "lowHealth": ["Frase al recibir daño crítico"],
    "victory": ["Frase tras derrotar al rival"]
  },
  "staminaProfile": {
    "basePool": 100,
    "recoveryRate": 5,
    "exhaustionThreshold": 20
  }
}
```

## 5. Comandos de Verificación & Despliegue
- **Validador Canónico Integral**: `node src/scripts/rosterCanonicalValidator.js`
- **Auditoría Nocturna Directa Gemini API**: `node src/scripts/runAutonomousTask.js "full_audit" "all" 1 1000 0 "~google/gemini-flash-lite-latest"`
- **Pruebas Unitarias**: `node src/scripts/runComprehensiveTests.js`
- **Verificación de Multiplicadores en Vivo**: `node src/scripts/verifyLiveScaling.js`
- **Compilación de Producción**: `npm run build`
- **Despliegue a Vercel Producción**: `npx vercel --prod --yes --token $VERCEL_TOKEN`