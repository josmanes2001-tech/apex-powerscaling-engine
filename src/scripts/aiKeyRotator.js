/**
 * APEX UNIVERSAL MULTI-KEY ROTATOR & CLIENT
 * 
 * Gestiona la alternancia automática y conmutación por fallo entre:
 * 1. Google Gemini Oficial (gemini-3.5-flash-lite)
 * 2. OpenRouter Clave 1 (Nemotron 3.5 Lightning / Llama 3.3 70B)
 * 3. OpenRouter Clave 2 (Respaldo)
 * 4. MODO HÍBRIDO (Alterna 50/50 entre Gemini y OpenRouter lote por lote)
 */

import https from 'https';
import http from 'http';

export const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';

export const OPENROUTER_KEYS = [
  process.env.OPENROUTER_API_KEY || '',
  process.env.OPENROUTER_BACKUP_API_KEY || ''
].filter(Boolean);

let currentOpenRouterKeyIdx = 0;
let hybridTurn = 0;

export function getNextOpenRouterKey() {
  const key = OPENROUTER_KEYS[currentOpenRouterKeyIdx];
  currentOpenRouterKeyIdx = (currentOpenRouterKeyIdx + 1) % OPENROUTER_KEYS.length;
  return key;
}

// 🚀 Llamada a Google Gemini Oficial Directo
export function callGeminiDirect(systemPrompt, userPayload, model = 'gemini-3.5-flash-lite') {
  return new Promise((resolve, reject) => {
    let resolvedModel = 'gemini-3.5-flash-lite';
    if (typeof model === 'string') {
      if (model.includes('3.6')) resolvedModel = 'gemini-3.6-flash';
      else if (model.includes('flash')) resolvedModel = 'gemini-3.5-flash-lite';
    }

    const postData = JSON.stringify({
      system_instruction: {
        parts: [{ text: systemPrompt }]
      },
      contents: [
        { role: 'user', parts: [{ text: typeof userPayload === 'string' ? userPayload : JSON.stringify(userPayload, null, 2) }] }
      ],
      generationConfig: {
        temperature: 0.12,
        maxOutputTokens: 8192,
        response_mime_type: 'application/json'
      }
    });

    const req = https.request({
      hostname: 'generativelanguage.googleapis.com',
      path: `/v1beta/models/${resolvedModel}:generateContent?key=${GEMINI_API_KEY}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      },
      timeout: 120000
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try {
            const parsed = JSON.parse(body);
            const text = parsed.candidates?.[0]?.content?.parts?.[0]?.text || '';
            resolve(text);
          } catch (e) {
            reject(new Error('Gemini Parse Error: ' + e.message));
          }
        } else {
          reject(new Error(`Google Gemini HTTP ${res.statusCode}: ${body.slice(0, 200)}`));
        }
      });
    });

    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Timeout de 120s en Google Gemini API'));
    });
    req.write(postData);
    req.end();
  });
}

// 🔄 Llamada a OpenRouter con Auto-Rotación entre Clave 1 y Clave 2
export function callOpenRouterRotated(systemPrompt, userPayload, model = 'nvidia/nemotron-3.5-lightning:free') {
  return new Promise((resolve, reject) => {
    let attempts = 0;

    function tryKey() {
      if (attempts >= OPENROUTER_KEYS.length) {
        return reject(new Error('Todas las claves de OpenRouter fallaron o están saturadas.'));
      }

      const apiKey = OPENROUTER_KEYS[(currentOpenRouterKeyIdx + attempts) % OPENROUTER_KEYS.length];
      attempts++;

      const postData = JSON.stringify({
        model: model,
        temperature: 0.12,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: typeof userPayload === 'string' ? userPayload : JSON.stringify(userPayload, null, 2) }
        ]
      });

      const req = https.request({
        hostname: 'openrouter.ai',
        path: '/api/v1/chat/completions',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + apiKey,
          'HTTP-Referer': 'http://localhost:4096',
          'X-Title': 'APEX Roster Enrichment',
          'Content-Length': Buffer.byteLength(postData)
        },
        timeout: 180000
      }, (res) => {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            try {
              const parsed = JSON.parse(body);
              currentOpenRouterKeyIdx = (currentOpenRouterKeyIdx + 1) % OPENROUTER_KEYS.length;
              resolve(parsed.choices?.[0]?.message?.content || '');
            } catch (e) {
              reject(new Error('OpenRouter Parse Error: ' + e.message));
            }
          } else if (res.statusCode === 429 || res.statusCode >= 500) {
            console.log(`  🔄 OpenRouter (Clave ${attempts}/${OPENROUTER_KEYS.length}) dio HTTP ${res.statusCode}. Conmutando a la siguiente clave...`);
            tryKey();
          } else {
            reject(new Error(`OpenRouter HTTP ${res.statusCode}: ${body.slice(0, 200)}`));
          }
        });
      });

      req.on('error', (err) => {
        console.log(`  🔄 Error de red en OpenRouter. Conmutando clave: ${err.message}`);
        tryKey();
      });

      req.on('timeout', () => {
        req.destroy();
        console.log(`  🔄 Timeout en OpenRouter. Conmutando clave...`);
        tryKey();
      });

      req.write(postData);
      req.end();
    }

    tryKey();
  });
}

// 🌓 MODO HÍBRIDO CONJUNTO (Alterna 50% Gemini Directo y 50% OpenRouter lote por lote)
export async function executeHybridCompletion(systemPrompt, userPayload, openRouterModel = 'nvidia/nemotron-3.5-lightning:free') {
  const isGeminiTurn = (hybridTurn % 2 === 0);
  hybridTurn++;

  if (isGeminiTurn) {
    console.log(`  🌟 [Turno Híbrido: Google Gemini 3.5 Flash Lite Directo]`);
    try {
      return await callGeminiDirect(systemPrompt, userPayload, 'gemini-3.5-flash-lite');
    } catch (err) {
      console.warn(`  ⚠️ Gemini saturado (${err.message}). Conmutando al instante a OpenRouter (${openRouterModel})...`);
      return await callOpenRouterRotated(systemPrompt, userPayload, openRouterModel);
    }
  } else {
    console.log(`  ⚡ [Turno Híbrido: OpenRouter (${openRouterModel}) - Claves Rotadas]`);
    try {
      return await callOpenRouterRotated(systemPrompt, userPayload, openRouterModel);
    } catch (err) {
      console.warn(`  ⚠️ OpenRouter saturado (${err.message}). Conmutando al instante a Google Gemini Directo...`);
      return await callGeminiDirect(systemPrompt, userPayload, 'gemini-3.5-flash-lite');
    }
  }
}

// 🛡️ Llamada Maestra Universal con Auto-Fallback Total
export async function executeResilientCompletion(systemPrompt, userPayload, preferredModel = 'hybrid') {
  if (preferredModel.startsWith('hybrid')) {
    const parts = preferredModel.split(':');
    const orModel = parts.length > 1 ? parts.slice(1).join(':') : 'nvidia/nemotron-3.5-lightning:free';
    return await executeHybridCompletion(systemPrompt, userPayload, orModel);
  }

  const isGeminiPreferred = preferredModel.toLowerCase().includes('gemini');

  if (isGeminiPreferred) {
    try {
      return await callGeminiDirect(systemPrompt, userPayload, 'gemini-3.5-flash-lite');
    } catch (geminiErr) {
      console.warn(`  ⚠️ Google Gemini temporalmente no disponible (${geminiErr.message}). Conmutando automáticamente a OpenRouter (Nemotron 3.5 Lightning)...`);
      return await callOpenRouterRotated(systemPrompt, userPayload, 'nvidia/nemotron-3.5-lightning:free');
    }
  } else {
    try {
      return await callOpenRouterRotated(systemPrompt, userPayload, preferredModel);
    } catch (openRouterErr) {
      console.warn(`  ⚠️ OpenRouter temporalmente no disponible (${openRouterErr.message}). Conmutando automáticamente a Google Gemini Directo...`);
      return await callGeminiDirect(systemPrompt, userPayload, 'gemini-3.5-flash-lite');
    }
  }
}
