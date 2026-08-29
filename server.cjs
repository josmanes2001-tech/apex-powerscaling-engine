const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '20mb' }));

const VAULT_PATH = 'Z:\\Obsidian Vault';

// ==========================================
// 1. OBSIDIAN VAULT ENDPOINTS
// ==========================================

app.get('/api/vault/status', (req, res) => {
  try {
    const exists = fs.existsSync(VAULT_PATH);
    res.json({
      connected: exists,
      path: VAULT_PATH,
      message: exists ? 'Bóveda de Obsidian conectada correctamente en Z:\\Obsidian Vault' : 'No se pudo encontrar Z:\\Obsidian Vault'
    });
  } catch (err) {
    res.status(500).json({ connected: false, error: err.message });
  }
});

app.get('/api/vault/files', (req, res) => {
  try {
    if (!fs.existsSync(VAULT_PATH)) {
      return res.status(404).json({ error: 'La ruta de la bóveda no existe.' });
    }

    const getAllFiles = (dirPath, arrayOfFiles = []) => {
      const files = fs.readdirSync(dirPath);
      files.forEach((file) => {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
          arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
        } else if (file.endsWith('.md')) {
          const relPath = path.relative(VAULT_PATH, fullPath);
          const stats = fs.statSync(fullPath);
          arrayOfFiles.push({
            name: file,
            path: relPath,
            size: stats.size,
            mtime: stats.mtime
          });
        }
      });
      return arrayOfFiles;
    };

    const files = getAllFiles(VAULT_PATH);
    res.json({ files });
  } catch (err) {
    console.error('Error leyendo archivos de Obsidian:', err);
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/vault/save', (req, res) => {
  try {
    const { folder = '06 - Proyectos/Obsidian + IA/Simulaciones APEX', filename, content } = req.body;
    if (!content || !filename) {
      return res.status(400).json({ error: 'Se requiere un nombre de archivo y contenido.' });
    }

    const targetDir = path.join(VAULT_PATH, folder);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const safeFilename = filename.endsWith('.md') ? filename : `${filename}.md`;
    const targetFile = path.join(targetDir, safeFilename);

    fs.writeFileSync(targetFile, content, 'utf-8');
    res.json({
      success: true,
      message: `Simulación guardada exitosamente en: ${path.relative(VAULT_PATH, targetFile)}`,
      filePath: targetFile
    });
  } catch (err) {
    console.error('Error guardando en Obsidian:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// ==========================================
// 2. UNIVERSAL AI ENGINE HELPERS
// ==========================================

function getEndpointConfig(engine, model, apiKey, customBaseUrl) {
  switch (engine) {
    case 'totalgpt':
    case 'infermatic':
      return {
        url: 'https://api.totalgpt.ai/v1/chat/completions',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        model: model || 'Doctor-Shotgun-L3.3-70B-Magnum-v4-SE',
        type: 'openai_chat'
      };
    case 'openrouter':
      return {
        url: 'https://openrouter.ai/api/v1/chat/completions',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'HTTP-Referer': 'https://apex-powerscaling.local',
          'X-Title': 'APEX Power Scaling Engine'
        },
        model: model || 'anthropic/claude-3.5-sonnet',
        type: 'openai_chat'
      };
    case 'openai':
      return {
        url: 'https://api.openai.com/v1/chat/completions',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        model: model || 'gpt-4o',
        type: 'openai_chat'
      };
    case 'gemini':
      return {
        url: `https://generativelanguage.googleapis.com/v1beta/models/${model || 'gemini-1.5-pro'}`,
        apiKey: apiKey,
        model: model || 'gemini-1.5-pro',
        type: 'gemini'
      };
    case 'custom':
      return {
        url: customBaseUrl?.replace(/\/$/, '') + '/chat/completions',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': apiKey ? `Bearer ${apiKey}` : undefined
        },
        model: model || 'default',
        type: 'openai_chat'
      };
    case 'ollama':
    default:
      return {
        url: (customBaseUrl || 'http://127.0.0.1:11434').replace(/\/$/, ''),
        model: model || 'qwen2.5-coder',
        type: 'ollama'
      };
  }
}

// Endpoint: Test connection / model sanity check
app.post('/api/ai/test', async (req, res) => {
  try {
    const { engine, model, apiKey, customBaseUrl } = req.body;
    const cfg = getEndpointConfig(engine, model, apiKey, customBaseUrl);

    if (cfg.type === 'ollama') {
      const response = await fetch(`${cfg.url}/api/tags`);
      if (!response.ok) throw new Error(`Ollama no responde en ${cfg.url}`);
      const data = await response.json();
      return res.json({ success: true, message: `Conexión a Ollama exitosa. Modelos disponibles: ${data.models?.map(m => m.name).join(', ') || 'ninguno'}` });
    }

    if (cfg.type === 'gemini') {
      if (!cfg.apiKey) return res.status(400).json({ success: false, message: 'Falta la API Key de Gemini.' });
      const testUrl = `${cfg.url}:generateContent?key=${cfg.apiKey}`;
      const response = await fetch(testUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: 'Di únicamente "APEX_ONLINE".' }] }] })
      });
      const data = await response.json();
      if (data.error) throw new Error(data.error.message || JSON.stringify(data.error));
      return res.json({ success: true, message: `Conexión a Gemini (${cfg.model}) exitosa.` });
    }

    if (cfg.type === 'openai_chat') {
      if (!apiKey && engine !== 'custom') return res.status(400).json({ success: false, message: 'Falta la API Key.' });
      const response = await fetch(cfg.url, {
        method: 'POST',
        headers: cfg.headers,
        body: JSON.stringify({
          model: cfg.model,
          messages: [{ role: 'user', content: 'Di únicamente "APEX_ONLINE".' }],
          max_tokens: 10
        })
      });
      const data = await response.json();
      if (data.error) throw new Error(data.error.message || JSON.stringify(data.error));
      return res.json({ success: true, message: `Conexión a ${engine.toUpperCase()} (${cfg.model}) exitosa.` });
    }

    res.status(400).json({ success: false, message: 'Motor no reconocido.' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ==========================================
// 3. AUTO-FILL CHARACTER DATA (JSON)
// ==========================================

app.post('/api/character/generate', async (req, res) => {
  try {
    const { name, engine, model, apiKey, customBaseUrl } = req.body;
    if (!name) return res.status(400).json({ error: 'Se requiere el nombre del personaje.' });

    const cfg = getEndpointConfig(engine, model, apiKey, customBaseUrl);
    const prompt = `Actúa como el mayor experto mundial en Power Scaling (VS Battles Wiki) y rol narrativo avanzado. 
Genera la ficha técnica completa y rigurosa para el personaje "${name}". 

[REGLAS CRÍTICAS PARA ARSENAL, FORMAS Y HABILIDADES]:
- Eres ESTRICTO con el canon oficial de CUALQUIER franquicia.
- Incluye TODAS las transformaciones cronológicas en "forms".
- Desglosa su ARSENAL en:
  * basicAttacks: Golpes estándar o ráfagas menores.
  * superAttacks: Técnicas especiales características (ej: Kamehameha, Getsuga Tensho, Chidori).
  * ultimateAttacks: Ataques definitivos o finishers de máxima escala (ej: Genkidama, Hollow Purple, Final Flash).
  * passives: Habilidades pasivas continuas (ej: Zenkai, Regeneración, Intangibilidad, Adaptación).
  * actives: Técnicas de soporte o buffs (ej: Kaio-ken, Teletransportación, Ilusiones).

Debes devolver ÚNICAMENTE un objeto JSON válido (sin markdown) con esta estructura:
{
  "id": "nombre-slug",
  "name": "${name}",
  "universe": "Franquicia de origen",
  "version": "Versión canónica (ej: Prime, Adulto, Super)",
  "tier": "Tier oficial VS Battles y Nivel de Poder",
  "ap": "Attack Potency / DC exacto anclado a feats",
  "range": "Rango de ataque efectivo (ej: Cuerpo a cuerpo estándar, Planetario)",
  "speed": {
    "combat": "Velocidad de combate (Lanzar golpes)",
    "reaction": "Velocidad de reacción (Esquivar)",
    "travel": "Velocidad de desplazamiento (Vuelo/Correr)",
    "attack": "Velocidad de ataques de energía/magia"
  },
  "strength": {
    "striking": "Fuerza de Impacto (ej: Town Class)",
    "lifting": "Fuerza de Levantamiento (ej: Clase K)"
  },
  "durability": "Resistencia física y resistencias a hax",
  "stamina": "Límite térmico/calórico o fatiga (ej: Agota Ki rápido, infinita)",
  "battleIQ": "Inteligencia Táctica (ej: Genio Táctico, Instintivo)",
  "haxTags": ["Tag 1", "Tag 2"],
  "subEntity": {
    "name": "Nombre Stand / Invocación (si aplica)",
    "type": "Stand / Invocación / Simbionte",
    "stats": "Poder y reglas"
  },
  "arsenal": {
    "basicAttacks": "Golpes básicos y ráfagas menores",
    "superAttacks": [
      { "name": "Super Ataque", "desc": "Descripción precisa y alcance", "cost": "Coste de energía" }
    ],
    "ultimateAttacks": [
      { "name": "Ataque Definitivo (Finisher)", "desc": "Efecto destructivo masivo / Borrado", "cost": "Desgaste de stamina" }
    ],
    "passives": [
      { "name": "Habilidad Pasiva", "desc": "Efecto continuo (ej: Zenkai, Regeneración)" }
    ],
    "actives": [
      { "name": "Habilidad Activa", "desc": "Efecto y duración (ej: Kaio-ken)" }
    ]
  },
  "abilities": [
    { "name": "Nombre", "desc": "Descripción precisa", "limit": "Coste" }
  ],
  "forms": [
    { "id": "base", "name": "Estado Base", "stats": "Poder base" },
    { "id": "fase-1", "name": "Nombre Forma 1", "stats": "Stats y multiplicador" }
  ],
  "feats": ["Hazaña destacada 1", "Hazaña destacada 2"],
  "psychology": "Psicología Tripartita: Lo que busca, lo que teme. Microgestos al mentir/sufrir dolor.",
  "weaknesses": "Debilidades físicas y psíquicas, condiciones para ser derrotado.",
  "equipment": "Armamento y reliquias clave"
}`;

    let jsonString = '';

    if (cfg.type === 'gemini') {
      const response = await fetch(`${cfg.url}:generateContent?key=${cfg.apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { 
            responseMimeType: "application/json",
            temperature: 0.3
          }
        })
      });
      const data = await response.json();
      if (data.error) throw new Error(data.error.message || JSON.stringify(data.error));
      jsonString = data.candidates?.[0]?.content?.parts?.[0]?.text || '{}';

    } else if (cfg.type === 'openai_chat') {
      const response = await fetch(cfg.url, {
        method: 'POST',
        headers: cfg.headers,
        body: JSON.stringify({
          model: cfg.model,
          messages: [
            { role: 'system', content: 'Eres un generador de fichas de Power Scaling en formato JSON estricto.' },
            { role: 'user', content: prompt }
          ],
          response_format: { type: 'json_object' },
          temperature: 0.3
        })
      });
      const data = await response.json();
      if (data.error) throw new Error(data.error.message || JSON.stringify(data.error));
      jsonString = data.choices?.[0]?.message?.content || '{}';

    } else {
      // Ollama
      const response = await fetch(`${cfg.url}/api/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: cfg.model,
          prompt: prompt,
          stream: false,
          format: 'json',
          options: { temperature: 0.3 }
        })
      });
      const data = await response.json();
      if (data.error) throw new Error(data.error);
      jsonString = data.response;
    }

    const cleaned = jsonString.replace(/^```json\s*/i, '').replace(/\s*```$/i, '').trim();
    const parsed = JSON.parse(cleaned);
    res.json(parsed);

  } catch (error) {
    console.error('Error generando personaje:', error);
    res.status(500).json({ error: error.message || 'Fallo al generar el personaje con la IA.' });
  }
});

// ==========================================
// 4. STREAMING COMBAT SIMULATION (SSE)
// ==========================================

app.post('/api/simulate', async (req, res) => {
  try {
    const { prompt, engine, model, apiKey, customBaseUrl } = req.body;
    const cfg = getEndpointConfig(engine, model, apiKey, customBaseUrl);

    res.setHeader('Content-Type', 'text/event-stream; charset=utf-8');
    res.setHeader('Cache-Control', 'no-cache, no-transform');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders?.();

    if (cfg.type === 'gemini') {
      const response = await fetch(`${cfg.url}:streamGenerateContent?key=${cfg.apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.65,
            topP: 0.95
          }
        })
      });

      if (!response.ok) {
        const errText = await response.text();
        res.write(`data: ${JSON.stringify({ text: `\n\n[Error de Gemini API: ${errText}]` })}\n\n`);
        res.write(`data: [DONE]\n\n`);
        return res.end();
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (trimmed.startsWith('data:')) {
            try {
              const payload = JSON.parse(trimmed.slice(5).trim());
              const text = payload.candidates?.[0]?.content?.parts?.[0]?.text;
              if (text) {
                res.write(`data: ${JSON.stringify({ text })}\n\n`);
              }
            } catch (e) {}
          } else if (trimmed.includes('"text":')) {
            try {
              const match = trimmed.match(/"text":\s*"((?:[^"\\]|\\.)*)"/);
              if (match) {
                const text = JSON.parse(`"${match[1]}"`);
                res.write(`data: ${JSON.stringify({ text })}\n\n`);
              }
            } catch (e) {}
          }
        }
      }

      res.write(`data: [DONE]\n\n`);
      return res.end();

    } else if (cfg.type === 'openai_chat') {
      const response = await fetch(cfg.url, {
        method: 'POST',
        headers: cfg.headers,
        body: JSON.stringify({
          model: cfg.model,
          messages: [
            { 
              role: 'system', 
              content: 'Eres el motor APEX ENGINE 2.0. Escribe prosa de combate fluida, descarnada y de máxima calidad literaria EXCLUSIVAMENTE en español. Prohibido mezclar idiomas, caracteres extraños o palabras corruptas.' 
            },
            { role: 'user', content: prompt }
          ],
          temperature: 0.65,
          top_p: 0.9,
          stream: true
        })
      });

      if (!response.ok) {
        const errText = await response.text();
        res.write(`data: ${JSON.stringify({ text: `\n\n[Error de ${engine.toUpperCase()}: ${errText}]` })}\n\n`);
        res.write(`data: [DONE]\n\n`);
        return res.end();
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed.startsWith('data:')) continue;
          const dataStr = trimmed.slice(5).trim();
          if (dataStr === '[DONE]') {
            res.write(`data: [DONE]\n\n`);
            return res.end();
          }
          try {
            const parsed = JSON.parse(dataStr);
            const content = parsed.choices?.[0]?.delta?.content || parsed.choices?.[0]?.text || '';
            if (content) {
              res.write(`data: ${JSON.stringify({ text: content })}\n\n`);
            }
          } catch (e) {}
        }
      }

      res.write(`data: [DONE]\n\n`);
      return res.end();

    } else {
      // Ollama
      const response = await fetch(`${cfg.url}/api/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: cfg.model,
          prompt: prompt,
          stream: true,
          options: {
            temperature: 0.65,
            top_p: 0.9
          }
        })
      });

      if (!response.ok) {
        const errText = await response.text();
        res.write(`data: ${JSON.stringify({ text: `\n\n[Error de Ollama: ${errText}]` })}\n\n`);
        res.write(`data: [DONE]\n\n`);
        return res.end();
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed) continue;
          try {
            const parsed = JSON.parse(trimmed);
            if (parsed.response) {
              res.write(`data: ${JSON.stringify({ text: parsed.response })}\n\n`);
            }
          } catch (e) {}
        }
      }

      res.write(`data: [DONE]\n\n`);
      return res.end();
    }

  } catch (error) {
    console.error('Simulation stream error:', error);
    res.write(`data: ${JSON.stringify({ text: `\n\n[Error crítico del servidor: ${error.message}]` })}\n\n`);
    res.write(`data: [DONE]\n\n`);
    res.end();
  }
});

// ==========================================
// 4. CHARACTER AUTO-FILL AI GENERATOR
// ==========================================
app.post('/api/character/generate', async (req, res) => {
  try {
    const { name, universe, engine = 'totalgpt', model, apiKey, customBaseUrl } = req.body;
    if (!name) return res.status(400).json({ error: 'Se requiere el nombre del personaje.' });

    const prompt = `Genera la ficha técnica completa de VS Battles Wiki para el personaje "${name}" (${universe || 'Canon'}).
DEBES responder únicamente con un JSON estrictamente válido (sin explicaciones adicionales ni etiquetas markdown) con este formato exacto:
{
  "name": "${name}",
  "universe": "${universe || 'Universo Canon'}",
  "tier": "Tier 2-C | Multiversal Bajo",
  "ap": "Destrucción de Universos / Multiversal",
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
    { "id": "form-1", "name": "Forma Base", "stats": "Potencia Estándar x1" }
  ]
}`;

    const cfg = getEndpointConfig(engine, model, apiKey, customBaseUrl);
    let fullText = '';

    if (cfg.type === 'gemini') {
      const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${cfg.model}:generateContent?key=${cfg.apiKey}`;
      const response = await fetch(geminiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      });
      const data = await response.json();
      fullText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    } else {
      const response = await fetch(cfg.url, {
        method: 'POST',
        headers: cfg.headers,
        body: JSON.stringify({
          model: cfg.model,
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.5
        })
      });
      const data = await response.json();
      fullText = data.choices?.[0]?.message?.content || data.choices?.[0]?.text || '';
    }

    const cleanJson = fullText.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();
    const parsed = JSON.parse(cleanJson);
    res.json(parsed);
  } catch (err) {
    console.error('Character generate error:', err);
    res.status(500).json({ error: 'Error al generar la ficha de personaje: ' + err.message });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`====================================================`);
  console.log(`⚡ APEX ENGINE MULTI-AI BACKEND RUNNING`);
  console.log(`🌐 Port: http://0.0.0.0:${PORT}`);
  console.log(`🧠 Providers: OpenRouter, Gemini, OpenAI, Ollama, Custom URL`);
  console.log(`📂 Vault Path: ${VAULT_PATH}`);
  console.log(`====================================================`);
});
