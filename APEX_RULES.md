
## 📜 ESPECIFICACIÓN CONSTITUCIONAL: ENRICHMENT DRAFTS (V22)
1. **Baseline Oficial Inalterable**:
   - `ROSTER_NIVELES_PODER_CORREGIDO_V22.json` es el baseline oficial y permanente.
2. **Campos Protegidos Intocables (PROHIBIDO MODIFICAR)**:
   - `id`
   - `franchise`
   - `universe`
   - `saga`
   - `baseTier`
   - `baseKiNumeric`
   - `forms` (nombres de formas, tiers, multiplicadores, kiNumeric, kiFormatted)
   - `tiers`
   - `multiplicadores`
   - `changeLog`
3. **Propósito Exclusivo del Roster**:
   - Fuente única de identidad canónica y escala métrica de poder (patrón de oro).
4. **Campos Permitidos para Mejoras Futuras**:
   - Habilidades y técnicas (`arsenal`)
   - Pasivas biológicas y marciales (`passives`)
   - Hax, counters y resistencias (`haxTags`, `haxProfile`)
   - Debilidades tácticas y fisiológicas (`weaknesses`)
   - Artefactos y equipamiento (`signatureEquipment`, `artifacts`)
   - Sinergias y combos de equipo (`synergies`, `teamCombos`)
   - Estados y mecánicas de combate (`combatStatuses`, `transformativeMechanics`)
   - Datos de simulación (`psychology`, `combatDialogue`, `environmentalAffinity`)
5. **Aislamiento Estricto de Borradores**:
   - Todo contenido nuevo debe guardarse como **enrichment draft** (en `src/data/enrichmentDrafts/` o `rosterEnrichmentPatches.json`).
   - Ningún borrador altera el baseline V22 sin aprobación humana previa y control de versiones formal.

---

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

---
# 🛡️ CONSTITUCIÓN OFICIAL V22 — BASE INALTERABLE DE PODER (APEX POWER SCALING)
El Roster oficial consolidado es **`ROSTER_NIVELES_PODER_CORREGIDO_V22.json`** (769 personajes con 68 parches auditados y aprobados).
- Prohibición absoluta de mutar tiers, Ki, multiplicadores, forms, franchise, universe o IDs fijados en V22.
- El archivo `APEX_NEEDS_REVIEW_BACKLOG_V22.json` rige únicamente como catálogo de advertencias y notas de calibración editorial.
- En cualquier simulación o cálculo: si un personaje tiene entrada en el backlog, se conservan sus valores oficiales de V22 y se advierte la limitación sin inventar números.

---

# ⚡ APEX Power Scaling Engine — Constitución Canónica, Arquitectura & DevOps

Este documento rige como la **Norma Suprema de Arquitectura, Lore Canónico y DevOps** para todos los agentes, desarrolladores y herramientas que operan en este repositorio.

---

## 🏛️ PARTE 1: LAS 6 REGLAS DE ORO CANÓNICAS DE LA FICHA PERFECTA

### 1. Regla de Oro de Formas (Forma Base Obligatoria en Índice 0)
- Toda ficha **DEBE** tener su Forma Base en el índice `0` del array `forms` con:
  - `apexKiMultiplier: 1.0`
  - `staminaDrain: 0`
  - `tier` base correspondiente.
- Si el personaje ya posee una forma base con nombre específico de saga (ej: *"Son Goku (Estado Base / Más de 8.000)"*, *"Piccolo Jr. Base"*, etc.), **CONSERVA ESA FORMA**. NUNCA crees una segunda forma llamada *"Estado Base"* genérica.
- **NUNCA sitúes una Forma Base después de una transformación.**
- **Prohibición Absoluta de Formas Artificiales**: Prohibido inventar formas como *"Estado Base (100% Máximo Poder)"*, *"Poder Desatado"*, *"Sin Contención"* o similares en personajes que poseen transformaciones reales (Goku, Vegeta, Gohan, Naruto, Ichigo). Solo se permite el 100% si es una transformación muscular canónica de autor (ej: Freezer 100%, Muten Roshi Máximo Poder, Younger Toguro 100%).

### 2. Orden Ascendente Estricto de Transformaciones
- Las transformaciones en `forms` deben ordenarse estrictamente de menor a mayor multiplicador:
  $$\text{Base (1.0x)} \rightarrow \text{Técnicas Menores (Kaio-ken, Gear 2)} \rightarrow \text{SSJ1 (50x)} \rightarrow \text{SSJ2 (100x)} \rightarrow \text{SSJ3 (400x)} \rightarrow \text{Formas Divinas}$$
- Toda transformación debe poseer: `id`, `name`, `apexKiMultiplier` numérico, `tier` escalado correlativo, `staminaDrain` por segundo y `stats` descriptivas.

### 3. Blindaje de Ki, Niveles de Poder y Cero Niveles Planos Genéricos
- **`sourceKi` (unidades numéricas de Scouter del Daizenshuu)**: SOLO está permitido en personajes canónicos de Dragon Ball (ej: Goku 8.000, Vegeta 18.000, Freezer 530.000).
- **Estrictamente Prohibido** asignar `sourceKi` a personajes ajenos a Dragon Ball (Marvel, DC, Jujutsu Kaisen, Demon Slayer, Baki, Hunter x Hunter, etc.). En ellos solo rige el sistema `tier` y `numericStats.apexKi`.
- **Cero Artefactos Flotantes**: Prohibidos números como `82500000000000020`. Redondear siempre a cifras significativas limpias (ej: `82.500.000.000`).
- **Prohibición Absoluta de Niveles Planos / Clones Estáticos**: Queda terminantemente prohibido asignar números genéricos sin contexto como `800 Unidades` o `5.50 Mil Millones` a personajes de un mismo Tier. Cada combatiente debe calcular su APEX-Ki y Scouter Ki mediante la **Fórmula Contextual Continua** y su **Firma Determinística Única** (`getCharacterSignatureVariance`), reflejando su velocidad real, durabilidad, intelecto táctico y hazañas.

### 4. Aislamiento Biológico y Cero Contaminación de Lore
- Solo los Saiyajins legítimos reciben la pasiva `Zenkai` y cola de mono.
- Solo Cell y bio-androides poseen absorción de biomasa celular.
- Solo hechiceros y espíritus malditos de Jujutsu Kaisen gestionan Energía Maldita y Expansión de Dominio.
- Solo cazadores de Hunter x Hunter usan Nen y condiciones de juramento.
- Solo usuarios de JoJo's Bizarre Adventure manifiestan Stands.

### 5. Las 16 Franquicias Oficiales Inmutables
El campo `franchise` debe pertenecer obligatoriamente a una de estas 16:
1. `Dragon Ball`
2. `Jujutsu Kaisen`
3. `Demon Slayer (Kimetsu no Yaiba)`
4. `Chainsaw Man`
5. `Hunter x Hunter`
6. `JoJo's Bizarre Adventure`
7. `One Punch Man`
8. `My Hero Academia`
9. `Baki the Grappler`
10. `Record of Ragnarok`
11. `Marvel Comics`
12. `DC Comics`
13. `Invincible`
14. `The Boys`
15. `Spy x Family`
16. `APEX Original / Híbrido`

### 6. Dinamismo Total del Roster
- **NUNCA** asumas un número estático de personajes (ej: 769 u 821). Procesa siempre sobre `characters.length` (la totalidad del roster activo dinámico).

---

## 📜 PARTE 2: ESQUEMA JSON DEL ESTÁNDAR DORADO APEX

Toda ficha enriquecida debe estructurarse con estos campos obligatorios:

```json
{
  "id": "identificador-kebab-case",
  "name": "Nombre Canónico (Saga o Versión)",
  "alias": "Alias o Epíteto",
  "universe": "Universo Canónico Específico",
  "franchise": "Una de las 16 Franquicias Oficiales",
  "tier": "Tier Principal (ej: 5-A | 2-C Hax)",
  "physicalTier": "Tier Físico (Fuerza/Resistencia)",
  "haxTier": "Tier de Hax y Técnicas Especiales",
  "ap": "Potencia de Ataque descriptiva y escala de energía",
  "range": "Alcance efectivo de combate",
  "speed": "Velocidad de combate y reacción (ej: FTL+, Mach 50)",
  "strength": "Fuerza de elevación e impacto físico",
  "durability": "Resistencia corporal a impactos y energía",
  "stamina": "Reserva energética y tolerancia al dolor",
  "battleIQ": "Inteligencia táctica de combate",
  "sourceKi": 18000,
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
      "stats": "Descripción de capacidades y límites iniciales."
    },
    {
      "id": "transformacion-id",
      "name": "Nombre Transformación Canónica",
      "apexKiMultiplier": 50.0,
      "staminaDrain": 20,
      "tier": "Tier Escalado",
      "stats": "Aumento exponencial de estadísticas y coste biológico."
    }
  ],
  "arsenal": {
    "basicAttacks": [
      {
        "name": "Ataque Básico Marcial",
        "description": "Golpe rápido o ráfaga menor de hostigamiento.",
        "staminaCost": 5
      }
    ],
    "superAttacks": [
      {
        "name": "Técnica Especial de Firma",
        "description": "Ataque concentrado con tiempo de carga.",
        "staminaCost": 25,
        "counterplay": "Esquiva angular o choque de energía opuesto."
      }
    ],
    "ultimateAttacks": [
      {
        "name": "Técnica Definitiva (Finisher)",
        "description": "Remate masivo que consume gran parte de la energía.",
        "staminaCost": 50,
        "counterplay": "Interrumpir la concentración o barrera absoluta."
      }
    ],
    "passives": [
      {
        "name": "Rasgo Fisiológico Canónico",
        "description": "Adaptación, regeneración celular o Zenkai Saiyan."
      }
    ],
    "specialMechanics": [
      {
        "name": "Mecánica Especial / Hax",
        "description": "Sellos, distorsión espacio-temporal o alteración causal."
      }
    ],
    "weaknesses": [
      {
        "name": "Punto Ciego / Debilidad Crítica",
        "description": "Vulnerabilidad física, mental o sobrecalentamiento de stamina.",
        "counterTags": ["StaminaBurn", "Overheat", "Cocky"]
      }
    ]
  },
  "synergies": [
    {
      "targetCharacterId": "id-aliado-lore",
      "name": "Nombre de Sinergia",
      "bonus": "+20% Precisión en relevos y cobertura táctica."
    }
  ],
  "teamCombos": [
    {
      "name": "Ataque Combinado de Equipo",
      "partner": "Nombre del Compañero",
      "phase1_opening": "Apertura desestabilizadora que rompe la guardia rival.",
      "phase2_bridge": "Enlace de aturdimiento o retención física.",
      "phase3_finisher": "Impacto simultáneo devastador inesquivable."
    }
  ],
  "combatAIPersonality": "Estilo de combate (Honorable, Calculador, Agresivo, Berserker, Sádico).",
  "environmentalAffinity": "Bonificaciones en terrenos favorables (ej: Gravedad x10, Espacio, Noche).",
  "provenFeats": [
    "Hazaña canónica comprobada con cita de capítulo de manga o escena de anime."
  ],
  "combatDialogue": {
    "intro": ["Frase inicial al comenzar el combate"],
    "lowHealth": ["Frase de desesperación o determinación al tener vida crítica"],
    "victory": ["Frase tras noquear al rival"]
  },
  "staminaProfile": {
    "basePool": 100,
    "recoveryRate": 5,
    "exhaustionThreshold": 20
  }
}
```

---

## 🛠️ PARTE 3: PROTOCOLO DE VALIDACIÓN CANÓNICA AUTOMÁTICA

Antes de considerar cualquier tarea completada o desplegar a producción:

1. **Ejecutar el Validador Canónico APEX**:
   ```powershell
   node src/scripts/rosterCanonicalValidator.js
   ```
2. **Criterio de Aprobación**:
   El validador debe reportar:
   ```text
   ✨ Roster 100% canónico, ordenado y sin anomalías detectadas (0 errores).
   ```
   Si detecta discrepancias, las auto-corrige y guarda en `characters.js` automáticamente.

---

## 🚀 PARTE 4: PROTOCOLO DE DEVOPS Y DESPLIEGUE DIRECTO A VERCEL

### 1. Variables y Credenciales de Producción
- **Token Oficial Vercel**: `$VERCEL_TOKEN`
- **URL Producción Oficial**: `https://apex-engine-six.vercel.app/`

### 2. Comando Obligatorio de Despliegue Directo (CLI)
En este proyecto **el despliegue se hace directo mediante el CLI de Vercel**:
```powershell
npx vercel --prod --yes --token $VERCEL_TOKEN
```
*(O pasando el token oficial directamente en el terminal local)*.
- `--prod`: Promueve de inmediato a producción y actualiza el alias principal.
- `--yes`: Omite cualquier confirmación interactiva.

### 3. Sincronización Multi-Disco Previa
Antes del despliegue, asegurar que los archivos del roster estén sincronizados en las rutas de trabajo correspondientes:
```powershell
if (Test-Path "D:\Vault Obsidian\apex-powerscaling-engine") {
    # Repositorio activo verificado
}
```

### 4. Verificación Post-Despliegue (Health Check)
Tras completar el despliegue, comprobar el estado HTTP del servidor:
```powershell
Invoke-WebRequest -Uri "https://apex-engine-six.vercel.app" -Method Head | Select-Object StatusCode, StatusDescription
```
El resultado debe ser estrictamente: **`StatusCode: 200`**.

---

## 🌟 PARTE 5: LOS 8 PILARES DE CALIDAD Y FIDELIDAD EN FICHAS (APEX EVOLUTION 3.0)

1. **Alineación Estricta de Franquicias y Cero Cruces:**
   - Cada combatiente debe pertenecer a su universo canónico legítimo (ej. *Kojiro Sasaki* en `Record of Ragnarok`, *Noriaki Kakyoin* en `JoJo's Bizarre Adventure`, nunca en *Chainsaw Man*).
2. **Blindaje de Tiers Canónicos Críticos:**
   - Personajes humanos y de nivel básico/cómico no pueden tener Tiers inflados arbitrariamente:
     * *Granjero con Escopeta*: Tier `10-C`, Ki exacto: `5`.
     * *Nam*: Tier `9-A`, Ki exacto: `26`.
     * *Videl*: Tier `9-A`, Ki exacto: `42`.
     * *Carmine*: Tier `9-C`, Ki exacto: `10`.
3. **Erradicación de Clones de Ki Numérico (Cero Niveles Planos):**
   - Prohibido asignar valores estáticos idénticos a través de los Tiers (como `5.80 Mil Millones`, `650.00 Millones`, `25.00 Billones`, `48.00 Mil` o `18.50 Mil`).
   - Todo personaje sin `sourceKi` oficial de Dragon Ball calcula su APEX-Ki de forma individualizada mediante **`getCharacterSignatureVariance`**, garantizando que cada gladiador posea una cifra distintiva y armónica.
4. **Erradicación de Notación Científica Rota en la Interfaz:**
   - Prohibido renderizar strings como `1.1694993910198652e+32 Cuatrimillones`.
   - Números $\ge 10^{30}$ o Tiers 1-A/0 se formatean limpiamente como `Trascendente Cósmico` o `∞ Incalculable`.
5. **Deduplicación Estricta de Arsenales:**
   - Prohibido repetir variantes de la misma técnica en `basicAttacks`, `superAttacks`, `ultimateAttacks` o `passives` (ej. 5 copias de *Discurso Maldito* o 4 de *Mano de Netero*).
   - El validador depura similitudes automáticamente.
6. **Erradicación de Textos de Plantilla Genéricos:**
   - Prohibido el texto copy-paste en Attack Potency (*"Capacidades de combate activas al 100% de su rendimiento físico..."*) y Durabilidad (*"Escalado a Base"*).
   - Cada ficha debe detallar el tipo de daño, armas y fisionomía del luchador.
7. **Nombres Limpios y Sin Duplicación:**
   - Prohibido patrones como `X / X` o duplicaciones en cabeceras.
8. **Monotonicidad y Consistencia en `resolveCombatState`:**
   - `resolveCombatState` prioriza siempre los stats auditados y calibrados de `numericStats.apexKi` multiplicados por la forma activa, protegiendo al motor de regresiones.

