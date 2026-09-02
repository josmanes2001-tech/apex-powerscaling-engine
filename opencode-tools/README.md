# 🤖 OpenCode AI Agent — APEX Power Scaling Engine

Esta carpeta contiene todos los accesos directos y herramientas para utilizar el agente de inteligencia artificial **OpenCode** integrado con OpenRouter en este proyecto.

---

## 📂 Archivos en esta carpeta:

1. **`PANEL_DE_CONTROL.bat`** (o `CENTRO_DE_CONTROL.html`):
   - Centro de Control visual en tu navegador con botones directos para abrir OpenCode Web, crear nuevos proyectos, cambiar modelos y desplegar a Vercel.

2. **`INICIAR_WEB.bat`** *(Recomendado)*:
   - Inicia el servidor local y abre la **interfaz web interactiva en tu navegador en el puerto 4096**.
   - Vinculado directamente a APEX Engine con chat visual, diffs y explorador de código.

3. **`NUEVO_PROYECTO.bat`**:
   - Asistente interactivo para crear una nueva carpeta de proyecto con plantilla de reglas, OpenCode configurado y tus claves de OpenRouter listas.

4. **`CAMBIAR_MODELO.bat`**:
   - Menú interactivo para cambiar al instante el modelo de IA:
     * **Google Gemini**: Gemini 2.5 Pro, Gemini 2.5 Flash, Gemini 2.0 Flash Lite.
     * **Anthropic**: Claude 3.7 Sonnet, Claude 3.5 Sonnet.
     * **DeepSeek**: DeepSeek V3, DeepSeek R1 (Razonamiento).
     * **OpenAI**: GPT-4o, o3-mini.
     * **APEX Free**: Modelos 100% gratuitos (DeepSeek R1 Free, Llama 3.3 70B Free).
     * O ingresar cualquier Model ID personalizado de OpenRouter.

5. **`INICIAR_TERMINAL.bat`**:
   - Inicia OpenCode en tu **consola/terminal** (Modo TUI interactivo).

6. **`CONFIGURAR_OPENROUTER.bat`**:
   - Menú para verificar o actualizar tu API Key de OpenRouter (`sk-or-...`).

---

## 🧠 Modelos Recomendados Clasificados por Tarea:

1. **🛠️ Tarea 1: Modificar Código, Añadir Personajes y Multiplicadores**
   - 🥇 **Top 1 Gratis**: `openrouter/poolside/laguna-s-2.1:free` (118B MoE · 70.2% Terminal-Bench)
   - 👑 **Top 1 Pro**: `openrouter/anthropic/claude-3.7-sonnet` (El mejor del mundo)
   - ⚡ **Rápido**: `openrouter/cohere/north-mini-code:free` (Optimizado para OpenCode)

2. **🧠 Tarea 2: Refactorización Grande & Arquitectura (1M+ Contexto)**
   - 🥇 **Top 1 Gratis**: `openrouter/z-ai/glm-5.2:free` (1M Tokens Ctx · Razonamiento Extremo)
   - 👑 **Top 1 Pro**: `openrouter/google/gemini-2.5-pro` (2M Tokens Ctx Multimodal)

3. **📊 Tarea 3: Cálculo Matemático de Tiers, AP y Fichas JSON**
   - 🥇 **Top 1 Gratis**: `openrouter/inclusionai/ling-3.0-flash-fin:free` (124B MoE · Razonamiento Matemático)
   - 🧠 **Razonamiento**: `openrouter/deepseek/deepseek-r1:free` (Deducción lógica de Hax)

4. **🦁 Tarea 4: Narrativa de Combates, Diálogos y Textos Épicos**
   - 🥇 **Top 1 Gratis**: `openrouter/thinkingmachines/inkling:free` (975B MoE · 1.05M Ctx)
   - ⚡ **Lightning**: `openrouter/nvidia/nemotron-3.5-lightning:free` (1M Ctx)

7. **`EJECUTAR_AUDITORIA_NOCTURNA.bat`** *(Nuevo · Modo Desatendido)*:
   - Recorre los 821 personajes en bucle autónomo continuo sin pausas ni confirmaciones.
   - Guarda parches en tiempo real en `src/data/rosterEnrichmentPatches.json`.

8. **`ENRIQUECER_ROSTER_AUTONOMO.bat`** *(Nuevo · Multi-Tarea)*:
   - Menú interactivo para lanzar enriquecimiento masivo de Tags, Súpers/Finishers con stamina, Pasivas, Combos y Sinergias (todo el roster o por universo).

---

## ⚡ Comandos de Barra dentro de OpenCode:
- `/enrich` $\rightarrow$ Enriquecimiento continuo de Tags, Súpers, Pasivas, Combos y Sinergias.
- `/audit_auto` $\rightarrow$ Auditoría nocturna continua de todo el roster.
- `/audit_progress` $\rightarrow$ Muestra el avance y porcentaje completado en tiempo real.
- `/read_pc` $\rightarrow$ Lee cualquier archivo de tu PC principal (`C:\Users\Jose Luis`) sin moverlo.
- `/test` $\rightarrow$ Ejecuta todas las pruebas unitarias de APEX.
- `/verify` $\rightarrow$ Comprueba los multiplicadores de Ki y estados de combate.
- `/build` $\rightarrow$ Compila el código de producción.
- `/deploy` $\rightarrow$ Compila y despliega a `https://apex-engine-six.vercel.app/`.

---

## 📁 Configuración del Proyecto:
- **`opencode.json`** (en la raíz del proyecto): Configura el modelo por defecto (`Claude 3.7 Sonnet` vía OpenRouter) y los comandos de barra diagonal (`/`).
- **`APEX_RULES.md`** (en la raíz del proyecto): Contiene todas las reglas de combate y arquitectura que OpenCode respetará automáticamente al modificar código.