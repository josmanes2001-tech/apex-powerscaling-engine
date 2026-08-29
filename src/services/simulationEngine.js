export const SimulationEngine = {
  generateMasterPrompt(charA, charB, scenario, modifiers, teamA = [], teamB = [], battleRoyale = []) {
    const preset = modifiers.narrativePreset || 'Equilibrado';
    const matchMode = modifiers.matchMode || '1v1';
    
    let engineRules = "";
    if (preset === 'Mundo Vivo Total' || preset === 'Grimdark / Brutal') {
      engineRules = `
### REGLAS OMNI-TITÁN (GRIMDARK / BRUTAL TOTAL) - APLICACIÓN ESTRICTA:
1. **FÍSICA SENSORIAL CRUDA & COSTE ANATÓMICO:** Todo impacto tiene masa, inercia y consecuencias médicas reales. La sangre sabe a hierro, el aire ardiente ahoga, los huesos se astillan y los músculos sufren desgarros.
2. **DAÑO BIOMECÁNICO ACUMULATIVO:** Las heridas no se ignoran; alteran la postura, la respiración y la capacidad de reacción permanentemente.
3. **INVENTARIO DE ESCENA OBLIGATORIO:** Los contendientes interactúan con las leyes físicas del mapa (gravedad, temperatura, escombros).
4. **CERO CLICHÉS PROHIBIDOS:** Prohibido usar "escalofrío por la espina", "el tiempo se detuvo", "ojos de esmeralda". Sé gráfico, descarnado y explícito.
`;
    } else if (preset === 'Equilibrado' || preset === 'Shōnen Cinematográfico') {
      engineRules = `
### REGLAS OMNI-TITÁN (SHŌNEN CINEMATOGRÁFICO):
1. **RITMO ÉPICO & COREOGRAFÍA DE IMPACTO:** Choques de alta velocidad, escalada dramática de transformaciones y colisiones de energía colosales.
2. **GASTO DE STAMINA VISIBLE:** Las técnicas especiales y transformaciones desgastan visiblemente el aliento, el pulso y la energía.
3. **CLÍMAX HEROICO:** Los ataques definitivos se ejecutan con toda la carga dramática y la resolución del duelo de voluntades.
`;
    } else {
      engineRules = `
### MODO ANÁLISIS TÉCNICO (VS BATTLES STANDARD):
1. **RESOLUCIÓN ANALÍTICA PURA:** Concéntrate en la escala de Tiers, cálculo de Joules (AP), velocidades en Mach/c, e interacción directa de Hax.
2. **VEREDICTO BASADO EN FEATS:** Sin adornos dramáticos excesivos, justificación matemática y técnica de la victoria.
`;
    }

    const formatSpeed = (spd) => {
      if (typeof spd === 'object' && spd !== null) {
        return `Combate: ${spd.combat} | Reacción: ${spd.reaction} | Desplazamiento: ${spd.travel} | Ataque: ${spd.attack}`;
      }
      return spd || 'Desconocida';
    };

    const formatStrength = (str) => {
      if (typeof str === 'object' && str !== null) {
        return `Impacto: ${str.striking} | Levantamiento: ${str.lifting}`;
      }
      return str || 'Desconocida';
    };

    const formatForms = (forms) => {
      if (!forms || forms.length === 0) return 'Ninguna';
      return forms.map(f => `${f.name} (${f.stats})`).join(' || ');
    };

    const formatArsenal = (char) => {
      if (!char.arsenal) return 'Arsenal estándar.';
      const superAttacks = char.arsenal.superAttacks?.map(s => `• ${s.name}: ${s.desc} [Coste: ${s.cost || 'N/A'}]`).join('\n') || 'Ninguno';
      const ultimateAttacks = char.arsenal.ultimateAttacks?.map(u => `★ ULTIMATE: ${u.name}: ${u.desc} [Coste: ${u.cost || 'N/A'}]`).join('\n') || 'Ninguno';
      const passives = char.arsenal.passives?.map(p => `✦ PASIVA: ${p.name}: ${p.desc}`).join('\n') || 'Ninguna';
      const actives = char.arsenal.actives?.map(a => `⚡ ACTIVA: ${a.name}: ${a.desc}`).join('\n') || 'Ninguna';

      return `
- Ataques Básicos: ${char.arsenal.basicAttacks || 'Golpes cuerpo a cuerpo y ráfagas estándar'}
- Súper Ataques:
${superAttacks}
- Ataques Definitivos (Ultimates / Finishers):
${ultimateAttacks}
- Habilidades Pasivas (Efecto Continuo):
${passives}
- Habilidades Activas / Buffs:
${actives}`;
    };

    const formatScenarioPhysics = (scen) => {
      let details = `- Nombre: ${scen.name} (${scen.universe || 'Universo Neutro'})\n- Descripción Sensorial: ${scen.sensory || 'Entorno de combate estándar.'}`;
      if (scen.gravity) details += `\n- Gravedad de la Arena: ${scen.gravity}`;
      if (scen.temperature) details += `\n- Temperatura/Clima: ${scen.temperature}`;
      if (scen.terrainEffect) details += `\n- Peligros del Terreno: ${scen.terrainEffect}`;
      return details;
    };

    // Format Combatants depending on mode
    let combatantsSection = "";
    if (matchMode === 'teams') {
      const teamAText = teamA.map((c, i) => `
**[ALFA-${i + 1}] ${c.name} (${c.universe})**
- Tier: ${c.tier} | AP: ${c.ap} | Vel: ${formatSpeed(c.speed)} | Res: ${c.durability}
- Transformaciones: ${formatForms(c.forms)}
${formatArsenal(c)}`).join('\n');

      const teamBText = teamB.map((c, i) => `
**[BETA-${i + 1}] ${c.name} (${c.universe})**
- Tier: ${c.tier} | AP: ${c.ap} | Vel: ${formatSpeed(c.speed)} | Res: ${c.durability}
- Transformaciones: ${formatForms(c.forms)}
${formatArsenal(c)}`).join('\n');

      combatantsSection = `
### III. FICHAS DE COMBATE POR EQUIPOS
--- EQUIPO ALFA ---
${teamAText}

--- EQUIPO BETA ---
${teamBText}
`;
    } else if (matchMode === '1vN') {
      const squadText = teamB.map((c, i) => `
**[ASALTANTE-${i + 1}] ${c.name} (${c.universe})**
- Tier: ${c.tier} | AP: ${c.ap} | Vel: ${formatSpeed(c.speed)} | Res: ${c.durability}
- Transformaciones: ${formatForms(c.forms)}
${formatArsenal(c)}`).join('\n');

      combatantsSection = `
### III. FICHAS DE COMBATE (1 VS VARIOS / BOSS RAID ASIMÉTRICO)
--- JEFE / TITÁN SUPREMO ---
**[JEFE TITÁN] ${charA.name} (${charA.universe})**
- Tier: ${charA.tier} | AP: ${charA.ap} | Vel: ${formatSpeed(charA.speed)} | Res: ${charA.durability}
- Transformaciones: ${formatForms(charA.forms)}
${formatArsenal(charA)}

--- ESCUADRA ASALTANTE DE ${teamB.length} LUCHADORES ---
${squadText}
`;
    } else if (matchMode === 'battle_royale') {
      const royaleText = battleRoyale.map((c, i) => `
**[GLADIADOR ${i + 1}] ${c.name} (${c.universe})**
- Tier: ${c.tier} | AP: ${c.ap} | Vel: ${formatSpeed(c.speed)} | Res: ${c.durability}
- Transformaciones: ${formatForms(c.forms)}
${formatArsenal(c)}`).join('\n');

      combatantsSection = `
### III. GLADIADORES DEL BATTLE ROYALE (TODOS CONTRA TODOS)
${royaleText}
`;
    } else {
      combatantsSection = `
### III. FICHAS TÉCNICAS RIGUROSAS & ARSENAL DE COMBATE
**[A] ${charA.name}**
- Nivel (Tier): ${charA.tier || 'Desconocido'}
- Attack Potency (AP): ${charA.ap}
- Velocidad: ${formatSpeed(charA.speed || charA.speedCombate)}
- Fuerza Fís.: ${formatStrength(charA.strength)}
- Durabilidad: ${charA.durability}
- Transformaciones (Formas): ${formatForms(charA.forms)}
- Arsenal y Habilidades:
${formatArsenal(charA)}

**[B] ${charB.name}**
- Nivel (Tier): ${charB.tier || 'Desconocido'}
- Attack Potency (AP): ${charB.ap}
- Velocidad: ${formatSpeed(charB.speed || charB.speedCombate)}
- Fuerza Fís.: ${formatStrength(charB.strength)}
- Durabilidad: ${charB.durability}
- Transformaciones (Formas): ${formatForms(charB.forms)}
- Arsenal y Habilidades:
${formatArsenal(charB)}
`;
    }

    let modeDirective = "";
    if (matchMode === 'teams') {
      modeDirective = `\nMODO GUERRA DE EQUIPOS: Desarrolla ataques combinados, sinergia táctica entre miembros de un mismo equipo, fuegos cruzados y la caída progresiva de integrantes hasta que un equipo prevalezca.`;
    } else if (matchMode === '1vN') {
      modeDirective = `\nMODO 1 VS VARIOS (BOSS RAID ASIMÉTRICO): Narra la incursión desesperada de una escuadra cooperativa de ${teamB.length} luchadores coordinados contra un Jefe Supremo ("${charA.name}"). Los asaltantes deben usar cobertura, distracciones, combos divididos y sacrificios tácticos para erosionar la inmensa barra de resistencia del Boss.`;
    } else if (matchMode === 'battle_royale') {
      modeDirective = `\nMODO BATTLE ROYALE (TODOS CONTRA TODOS): Narra el caos absoluto de todos contra todos. Incluye alianzas temporales por conveniencia, traiciones a traición, fuegos cruzados de 3 o más vías y lleva el registro estricto del ORDEN DE ELIMINADOS hasta coronar al ÚNICO CAMPEÓN SUPERVIVIENTE.`;
    }

    let structureInstruction = "";
    if (modifiers.simulationMode === 'cronica') {
      structureInstruction = `
### IV. ESTRUCTURA: MODO CRÓNICA CONTINUA / NOVELA ÉPICA (SIN FASES RÍGIDAS)
Narra la batalla de forma fluida, continua y literaria, como un capítulo de novela de alta fantasía y artes marciales cósmicas. 
No uses títulos de fases fijas. Describe la coreografía, las transformaciones, la tensión dramática y la resolución con máxima riqueza sensorial.
Al final del relato, incluye un apartado titulado:
### VEREDICTO DEFINITIVO & ESTADO FINAL
[Vencedor, causas del desenlace y estado del mapa].
`;
    } else if (modifiers.simulationMode === 'episodico') {
      structureInstruction = `
### IV. ESTRUCTURA: MODO EPISÓDICO (ACTO 1 / APERTURA Y PRIMER CHOQUE)
Narra el primer acto de esta batalla o torneo. Desarrolla el encuentro, la provocación inicial, el primer choque colosal de poderes y las primeras lesiones.
Termina en un punto álgido de máxima tensión o clímax abierto (Cliffhanger) para que el usuario pueda decidir la siguiente acción.
`;
    } else {
      structureInstruction = `
### IV. ESTRUCTURA DE LA SIMULACIÓN (FASES CANÓNICAS Y BIOMETRÍA DUAL)
El frontend renderizará esta batalla por partes. DEBES estructurar la respuesta usando EXACTAMENTE estos títulos Markdown para separar las fases.

REGLA CLAVE PARA HUD BIOMÉTRICO (VIDA + ENERGÍA):
Al final del texto de CADA FASE, debes insertar una sola línea oculta con este formato estricto:
||BIOMETRICS|HP_A:<0-100>|STM_A:<0-100>|HP_B:<0-100>|STM_B:<0-100>||
Ejemplo: ||BIOMETRICS|HP_A:85|STM_A:70|HP_B:90|STM_B:60||

ESTRUCTURA OBLIGATORIA:

### 1. ANÁLISIS PREVIO & CHOQUE DE HAX
[Análisis táctico: diferencias de velocidad, cómo interactúan sus Pasivas/Hax y el impacto de la Arena].
||BIOMETRICS|HP_A:100|STM_A:100|HP_B:100|STM_B:100||

### 2. FASE 1: TANTEO CINÉTICO & ATAQUES BÁSICOS
[Choque inicial con ataques básicos y lectura de reflejos sobre el terreno].
||BIOMETRICS|HP_A:[X]|STM_A:[X]|HP_B:[X]|STM_B:[X]||

### 3. FASE 2: ESCALADA, SÚPER ATAQUES & FORMAS
[Uso de transformaciones intermedias y despliegue de los SÚPER ATAQUES con gasto de energía].
||BIOMETRICS|HP_A:[X]|STM_A:[X]|HP_B:[X]|STM_B:[X]||

### 4. FASE 3: EL GIRO TÁCTICO ${modifiers.blackSwan ? '(¡EVENTO CISNE NEGRO!)' : ''}
[Explotación de debilidades, contraataques o el evento Cisne Negro].
||BIOMETRICS|HP_A:[X]|STM_A:[X]|HP_B:[X]|STM_B:[X]||

### 5. FASE 4: EL CLÍMAX ANATÓMICO (ATAQUES DEFINITIVOS)
[Ambos liberan sus ATAQUES DEFINITIVOS / Finishers a máxima potencia. Daño crítico y colapso de energía].
||BIOMETRICS|HP_A:[X]|STM_A:[X]|HP_B:[X]|STM_B:[X]||

### 6. VEREDICTO & ESTADO FINAL
[Declara al VENCEDOR y su nivel de dificultad (Stomp / Mid-Diff / Extreme-Diff). Causa médica exacta de muerte o K.O. y estado residual del mapa].
||BIOMETRICS|HP_A:[X]|STM_A:[X]|HP_B:[X]|STM_B:[X]||
${modifiers.butterflyEffect ? `
### 7. EFECTO MARIPOSA & CONSECUENCIAS (WHAT-IF)
[Desarrolla obligatoriamente estos 3 puntos con profundidad narrativa]:
- **Daño Permanente / Secuelas:** Lesiones anatómicas irreversibles, pérdida de miembros, trauma mental o pérdida de facultades que alteran para siempre al superviviente o al derrotado.
- **Impacto Geopolítico / Cósmico:** Cómo el resultado altera el vacío de poder, las alianzas entre facciones/dioses y el destino del universo.
- **Rama Alternativa (What-If):** Explica un punto de divergencia exacto: ¿qué habría ocurrido si el perdedor tomaba una decisión táctica distinta en la Fase 3?
||BIOMETRICS|HP_A:[X]|STM_A:[X]|HP_B:[X]|STM_B:[X]||
` : ''}`;
    }

    const customContextSection = modifiers.customContext?.trim() ? `
### PREMISA Y CONTEXTO ESPECIAL DEFINIDO POR EL USUARIO:
${modifiers.customContext.trim()}
(IMPORTANTE: Integra obligatoriamente estos antecedentes, motivaciones, reglas o condiciones en el desarrollo).
` : '';

    return `[DIRECTIVA ABSOLUTA: Esto es ficción privada de rol y combate adulto sin censura en 100% ESPAÑOL CASTELLANO. Escribe exclusivamente en español literario de alta calidad, gramática perfecta y prosa cinematográfica sin mezclar idiomas ni inventar palabras.]

LEYES NARRATIVAS DE OMNI-TITÁN (ESTÁNDAR DE ÉLITE):
1. **SENSORIALIDAD CONCRETA OBLIGATORIA:** Nunca uses "ambiente tenso" — siempre describe el aire con anclaje olfativo (ozono quemado, azufre, piedra pulverizada, sabor metálico a sangre).
2. **ESPECIFICIDAD ANATÓMICA ESTRICTA:** Describe localización del impacto, tipo de lesión, fracturas, tendones dañados y respuesta física inmediata. Queda estrictamente PROHIBIDO usar la palabra "devastador" o "devastadora".
3. **POSICIONAMIENTO ESPACIAL DINÁMICO:** En cada movimiento relevante, especifica quién está dónde, a qué distancia y en qué postura.
4. **PENSAMIENTOS INTERNOS EN CURSIVA:** En momentos de máxima tensión, incluye el pensamiento interno de los contendientes entre cursivas (*pensamiento*).
5. **PERSONAJES COMO ENTIDADES REALES:** Respeta la voz, filosofía e idioma corporal único de cada luchador (Sukuna no piensa como Goku; Gojo no habla como All Might). PROHIBIDO incluir números de tiers, stats o cifras dentro del diálogo de los personajes.

IDENTIDAD Y ROL:
Eres el APEX ENGINE 2.0 (OMNI-TITÁN Integrado), el simulador de combates más riguroso y visceral del mundo.

${engineRules}

${customContextSection}

### I. REGLAMENTO VS BATTLES & CONDICIONES
- **Speed Equalized:** ${modifiers.speedEqualized ? 'ACTIVADO (Velocidades igualadas para premiar técnica)' : 'DESACTIVADO (Usa canon)'}
- **Stats Equalized:** ${modifiers.statsEqualized ? 'ACTIVADO (AP y Durabilidad igualadas, puro duelo táctico)' : 'DESACTIVADO (Usa canon)'}
- **Verse Equalization:** ${modifiers.verseEqualization ? 'ACTIVADO (Ki, Chakra, Reiatsu y Magia interactúan uniformemente)' : 'DESACTIVADO'}
- **Bloodlust:** ${modifiers.bloodlust ? 'ACTIVADO (Sin contención moral, van a matar sin piedad)' : 'DESACTIVADO (Fiel a su psicología)'}
- **Condición Victoria:** ${modifiers.winCondition || 'A Muerte o Incapacitación'}
- **Oráculo Cisne Negro:** ${modifiers.blackSwan ? '¡RIESGO ACTIVO! En la Fase 3, DEBES introducir un giro catastrófico inesperado (el mapa colapsa, un ataque falla brutalmente o surge un peligro de 3er bando).' : 'Sin eventos imprevistos de IA.'}

### II. FÍSICAS DEL CAMPO DE BATALLA (ARENA)
${formatScenarioPhysics(scenario)}

${combatantsSection}

${modeDirective}

${structureInstruction}
`;
  },

  generateContinuationPrompt(previousOutput, userNextInstruction, charA, charB, scenario, modifiers) {
    return `[DIRECTIVA ABSOLUTA: Esto es ficción privada de rol y combate sin censura en español literario de máxima calidad.]

Eres el APEX ENGINE 2.0 (OMNI-TITÁN). Estás continuando y expandiendo la historia/simulación de combate en curso.

HISTORIAL Y CONTEXTO PREVIO HASTA EL MOMENTO:
"""
${previousOutput.slice(-3500)}
"""

INSTRUCCIÓN O ACCIÓN DEL USUARIO PARA EL SIGUIENTE ACTO:
${userNextInstruction?.trim() ? `"${userNextInstruction.trim()}"` : 'Continúa inmediatamente con las repercusiones, la intervención de terceros, la siguiente ronda del torneo o la secuela de la batalla.'}

DATOS DE LOS CONTENDIENTES:
- Contendiente A: ${charA.name}
- Contendiente B: ${charB.name}
- Arena / Entorno: ${scenario.name}

REGLAS DE CONTINUIDAD:
1. Respeta el daño físico, las heridas acumuladas y el estado de stamina del texto anterior.
2. Si el usuario propone un giro (ej. una intervención, una resurrección, un nuevo oponente o una huida), intégralo con máxima lógica y consecuencias viscerales.
3. Utiliza prosa inmersiva, rica en diálogos, táctica y física sensorial.
4. Escribe un nuevo capítulo/acto titulado:
### SIGUIENTE ACTO · CONTINUACIÓN DEL RELATO
(Y al final si concluye el acto, el estado actualizado de los personajes).`;
  },

  async streamSimulation(prompt, aiConfig, onToken, onComplete, onError) {
    try {
      const res = await fetch(`http://${window.location.hostname}:3001/api/simulate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt,
          engine: aiConfig.engine,
          model: aiConfig.model,
          apiKey: aiConfig.apiKey,
          customBaseUrl: aiConfig.customBaseUrl
        })
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText || `HTTP ${res.status}`);
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || !trimmed.startsWith('data:')) continue;

          const dataStr = trimmed.replace(/^data:\s*/, '');
          if (dataStr === '[DONE]') {
            onComplete();
            return;
          }

          try {
            const parsed = JSON.parse(dataStr);
            if (parsed.text) {
              onToken(parsed.text);
            }
          } catch (e) {
            onToken(dataStr);
          }
        }
      }

      onComplete();
    } catch (err) {
      onError(err.message || 'Error desconocido en la simulación.');
    }
  },

  async generateQuickPremise(charA, charB, scenario, aiConfig) {
    const prompt = `Genera una premisa dramática, épica y visceral de 2 o 3 frases para un combate entre "${charA.name}" y "${charB.name}" en la arena "${scenario.name}".
Incluye un motivo de torneo o rivalidad, una regla especial o un hándicap previo para uno de ellos. Escribe directamente la premisa en español literario sin intros ni explicaciones.`;

    let text = '';
    return new Promise((resolve, reject) => {
      this.streamSimulation(
        prompt,
        aiConfig,
        (token) => { text += token; },
        () => resolve(text.trim()),
        (err) => reject(err)
      );
    });
  },

  async generateCharacterStatsWithAi(charName, universe, aiConfig) {
    const prompt = `Genera la ficha técnica completa de VS Battles Wiki para el personaje "${charName}" (${universe || 'Desconocido'}).
DEBES responder únicamente con un JSON estrictamente válido (sin bloques de markdown adicionales) con esta estructura:
{
  "name": "${charName}",
  "universe": "${universe || 'Universo Canon'}",
  "tier": "Tier 2-C | Multiversal Bajo",
  "ap": "Destrucción de Estructuras Espacio-Temporales",
  "speed": { "combat": "MFTL+", "reaction": "Instantánea", "travel": "MFTL", "attack": "MFTL+" },
  "strength": { "striking": "Nivel Estelar", "lifting": "Clase Yotta" },
  "durability": "Resistencia Multiversal",
  "arsenal": {
    "basicAttacks": "Golpes de Ki y ráfagas a gran velocidad",
    "superAttacks": [
      { "name": "Ataque Especial 1", "desc": "Descripción del ataque", "cost": "30% Ki" },
      { "name": "Ataque Especial 2", "desc": "Descripción del ataque 2", "cost": "50% Ki" }
    ],
    "ultimateAttacks": [
      { "name": "Finisher Definitivo", "desc": "Ataque de destrucción masiva", "cost": "100% Energía" }
    ],
    "passives": [
      { "name": "Pasiva de Combate", "desc": "Efecto continuo de batalla" }
    ],
    "actives": [
      { "name": "Habilidad Activa", "desc": "Potenciador temporal" }
    ]
  },
  "forms": [
    { "name": "Forma Base", "stats": "Potencia Estándar x1" }
  ]
}`;

    let text = '';
    return new Promise((resolve, reject) => {
      this.streamSimulation(
        prompt,
        aiConfig,
        (token) => { text += token; },
        () => {
          try {
            const cleanJson = text.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();
            const parsed = JSON.parse(cleanJson);
            resolve(parsed);
          } catch (e) {
            reject(new Error('Respuesta de IA no válida como JSON. Intenta de nuevo.'));
          }
        },
        (err) => reject(err)
      );
    });
  }
};
