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
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

let envGemini = process.env.GEMINI_API_KEY || '';
let envOpenRouterKeys = [
  process.env.OPENROUTER_API_KEY || '',
  process.env.OPENROUTER_BACKUP_API_KEY || ''
].filter(Boolean);

// Resolver la ruta real del directorio actual soportando espacios en Windows (D:\Vault Obsidian\...)
const __filename = fileURLToPath(import.meta.url);
const __rotatorDir = path.dirname(__filename);
const projectRoot = path.resolve(__rotatorDir, '../../');

const envCandidateFiles = [
  path.resolve(projectRoot, '.env.local'),
  path.resolve(projectRoot, '.env'),
  path.resolve(process.cwd(), '.env.local'),
  path.resolve(process.cwd(), '.env'),
  'D:\\Vault Obsidian\\apex-powerscaling-engine\\.env.local',
  'Z:\\apex-powerscaling-engine\\.env.local',
  path.join(process.env.USERPROFILE || 'C:\\Users\\Jose Luis', '.env')
];

for (const envFile of envCandidateFiles) {
  try {
    if (fs.existsSync(envFile)) {
      const content = fs.readFileSync(envFile, 'utf8');
      const or1 = content.match(/OPENROUTER_API_KEY=([^\r\n]+)/);
      const or2 = content.match(/OPENROUTER_API_KEY_BACKUP=([^\r\n]+)/);
      const gem = content.match(/GEMINI_API_KEY=([^\r\n]+)/);
      if (or1 && or1[1] && !envOpenRouterKeys.includes(or1[1].trim())) envOpenRouterKeys.push(or1[1].trim());
      if (or2 && or2[1] && !envOpenRouterKeys.includes(or2[1].trim())) envOpenRouterKeys.push(or2[1].trim());
      if (!envGemini && gem && gem[1] && gem[1].trim().length > 10) envGemini = gem[1].trim();
    }
  } catch (e) {}
}

if (!envGemini) {
  envGemini = process.env.GEMINI_API_KEY || '';
}

const SECURE_FALLBACK_KEYS = [];

for (const b64 of SECURE_FALLBACK_KEYS) {
  try {
    const rawKey = Buffer.from(b64, 'base64').toString('utf8');
    if (rawKey && !envOpenRouterKeys.includes(rawKey)) {
      envOpenRouterKeys.push(rawKey);
    }
  } catch (e) {}
}

export const GEMINI_API_KEY = envGemini;
export const OPENROUTER_KEYS = envOpenRouterKeys;

console.log(`\x1b[90m  [aiKeyRotator] Cargadas ${OPENROUTER_KEYS.length} clave(s) de OpenRouter activas.\x1b[0m`);

let currentOpenRouterKeyIdx = 0;
let hybridTurn = 0;

export function getNextOpenRouterKey() {
  if (OPENROUTER_KEYS.length === 0) return '';
  const key = OPENROUTER_KEYS[currentOpenRouterKeyIdx];
  currentOpenRouterKeyIdx = (currentOpenRouterKeyIdx + 1) % OPENROUTER_KEYS.length;
  return key;
}

// 🚀 Llamada a Google Gemini Oficial Directo (Google AI Studio API)
export function callGeminiDirect(systemPrompt, userPayload, model = 'gemini-flash-lite-latest') {
  if (!GEMINI_API_KEY || GEMINI_API_KEY.length < 10) {
    // Si no hay clave oficial de Google AI Studio, usar Gemini gratuito a traves de OpenRouter
    return callOpenRouterRotated(systemPrompt, userPayload, 'google/gemini-2.0-flash-lite:free');
  }

  return new Promise((resolve, reject) => {
    let resolvedModel = 'gemini-flash-lite-latest';
    if (typeof model === 'string') {
      if (model.includes('flash-latest') && !model.includes('lite')) resolvedModel = 'gemini-flash-latest';
      else if (model.includes('3.6')) resolvedModel = 'gemini-3.6-flash';
      else if (model.includes('lite') || model.includes('flash-lite')) resolvedModel = 'gemini-flash-lite-latest';
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

// 🔄 Llamada a OpenRouter con Auto-Rotación y Reintento Inteligente ante Rate-Limit (429)
export function callOpenRouterRotated(systemPrompt, userPayload, model = 'minimax/minimax-m3:free') {
  return new Promise((resolve, reject) => {
    let attempts = 0;
    let rateLimitRetries = 0;
    const maxRateLimitRetries = 3;

    function tryKey() {
      if (attempts >= OPENROUTER_KEYS.length) {
        if (rateLimitRetries < maxRateLimitRetries) {
          rateLimitRetries++;
          const waitTime = rateLimitRetries * 4000;
          console.log(`  ⏳ OpenRouter rate-limit (429). Esperando ${waitTime / 1000}s para reintentar (intento ${rateLimitRetries}/${maxRateLimitRetries})...`);
          attempts = 0;
          setTimeout(tryKey, waitTime);
          return;
        }
        return reject(new Error('Todas las claves de OpenRouter alcanzaron su limite por minuto.'));
      }

      const apiKey = OPENROUTER_KEYS[(currentOpenRouterKeyIdx + attempts) % OPENROUTER_KEYS.length];
      attempts++;

      let resolvedModel = model;
      if (model.includes('gemini') && (model.includes('lite') || model.includes('flash-lite'))) {
        resolvedModel = 'google/gemini-3.5-flash-lite';
      } else if (model.includes('gemini-flash') || model.includes('gemini-latest')) {
        resolvedModel = '~google/gemini-flash-latest';
      }

      const isFreeModel = resolvedModel.includes(':free');
      const isLite = resolvedModel.includes('flash-lite');
      const tokenLimit = isFreeModel ? 12288 : (isLite ? 4096 : 8192);

      const postData = JSON.stringify({
        model: resolvedModel,
        temperature: 0.12,
        max_tokens: tokenLimit,
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
          } else if (res.statusCode === 402) {
            // Modelo de pago sin saldo suficiente: conmutar inmediatamente sin reintentos inútiles
            reject(new Error(`Saldo insuficiente en OpenRouter para ${resolvedModel} (HTTP 402).`));
          } else if (res.statusCode === 429 || res.statusCode >= 500) {
            if (OPENROUTER_KEYS.length > 1 && attempts < OPENROUTER_KEYS.length) {
              console.log(`  🔄 OpenRouter (Clave ${attempts}/${OPENROUTER_KEYS.length}) dio HTTP ${res.statusCode}. Rotando a siguiente clave...`);
              tryKey();
            } else {
              if (rateLimitRetries < maxRateLimitRetries) {
                rateLimitRetries++;
                const waitSec = rateLimitRetries * 4;
                console.log(`  ⏳ Límite de velocidad OpenRouter (429). Pausando ${waitSec}s para reintentar...`);
                attempts = 0;
                setTimeout(tryKey, waitSec * 1000);
              } else {
                reject(new Error(`OpenRouter saturado (HTTP ${res.statusCode}) tras ${maxRateLimitRetries} reintentos.`));
              }
            }
          } else {
            reject(new Error(`OpenRouter HTTP ${res.statusCode}: ${body.slice(0, 200)}`));
          }
        });
      });

      req.on('error', (err) => {
        console.log(`  🔄 Error de red en OpenRouter: ${err.message}. Reintentando...`);
        tryKey();
      });

      req.on('timeout', () => {
        req.destroy();
        console.log(`  🔄 Timeout en OpenRouter. Reintentando...`);
        tryKey();
      });

      req.write(postData);
      req.end();
    }

    tryKey();
  });
}

// 🌓 MODO HÍBRIDO CONJUNTO (Alterna 50% Modelo A y 50% Modelo B lote por lote)
export async function executeHybridCompletion(systemPrompt, userPayload, modelA = 'gemini-flash-lite-latest', modelB = 'nvidia/nemotron-3.5-lightning:free') {
  const isTurnA = (hybridTurn % 2 === 0);
  hybridTurn++;

  const activeModel = isTurnA ? modelA : modelB;
  const backupModel = isTurnA ? modelB : modelA;

  console.log(`  ⚡ [Turno Híbrido 50/50: ${activeModel}]`);
  try {
    if (activeModel.includes('gemini') || activeModel.includes('google')) {
      return await callGeminiDirect(systemPrompt, userPayload, 'gemini-flash-lite-latest');
    }
    return await callOpenRouterRotated(systemPrompt, userPayload, activeModel);
  } catch (err) {
    console.warn(`  ⚠️ ${activeModel} falló (${err.message}). Conmutando al compañero híbrido (${backupModel})...`);
    if (backupModel.includes('gemini') || backupModel.includes('google')) {
      return await callGeminiDirect(systemPrompt, userPayload, 'gemini-flash-lite-latest');
    }
    return await callOpenRouterRotated(systemPrompt, userPayload, backupModel);
  }
}

// 🛡️ Llamada Maestra Universal con Auto-Fallback Total
export async function executeResilientCompletion(systemPrompt, userPayload, preferredModel = 'gemini-flash-lite-latest') {
  if (preferredModel.startsWith('hybrid:')) {
    const spec = preferredModel.replace('hybrid:', '');
    const [modelA, modelB] = spec.split('|');
    return await executeHybridCompletion(systemPrompt, userPayload, modelA, modelB || 'nvidia/nemotron-3.5-lightning:free');
  }

  // 🔥 Si el modelo solicitado es Meta Muse Spark
  if (preferredModel.includes('muse')) {
    try {
      console.log(`  🔥 [Meta Muse Spark 1.3]: Conectando a través de OpenRouter...`);
      return await callOpenRouterRotated(systemPrompt, userPayload, 'meta/muse-spark-1.3-contributor');
    } catch (museErr) {
      console.log(`  ℹ️  Nota: Meta Muse Spark 1.3 Free funciona de forma gratuita interactiva dentro de OpenCode Web (http://localhost:4096).`);
      console.log(`  🌐 Para esta auditoría autónoma por lotes en consola, conmutando a Google Gemini Flash Lite Oficial (1M de contexto, JSON nativo y 0 errores)...`);
      return await callGeminiDirect(systemPrompt, userPayload, 'gemini-flash-lite-latest');
    }
  }

  // 🌐 Si el modelo solicitado es Gemini, usar SIEMPRE la API oficial de Google Gemini Directo
  if (preferredModel.includes('gemini') || preferredModel.includes('google')) {
    try {
      console.log(`  🌐 [Google Gemini API Oficial Directa]: Conectando a generativelanguage.googleapis.com (gemini-flash-lite-latest)...`);
      return await callGeminiDirect(systemPrompt, userPayload, 'gemini-flash-lite-latest');
    } catch (geminiErr) {
      console.warn(`  ⚠️ Google Gemini API Oficial dio error (${geminiErr.message}). Conmutando a OpenRouter...`);
      return await callOpenRouterRotated(systemPrompt, userPayload, 'nvidia/nemotron-3.5-lightning:free');
    }
  }

  try {
    return await callOpenRouterRotated(systemPrompt, userPayload, preferredModel);
  } catch (openRouterErr) {
    const backup = preferredModel.includes('lightning') ? 'nvidia/nemotron-3-super-120b-a12b:free' : 'nvidia/nemotron-3.5-lightning:free';
    console.warn(`  ⚠️ ${preferredModel} saturado (${openRouterErr.message}). Conmutando a respaldo gratuito (${backup})...`);
    return await callOpenRouterRotated(systemPrompt, userPayload, backup);
  }
}
