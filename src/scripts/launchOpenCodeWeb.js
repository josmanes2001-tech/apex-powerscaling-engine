import { spawn, exec } from 'child_process';
import http from 'http';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '../../');

console.log('  🚀 INICIANDO OPENCODE WEB — APEX POWER SCALING');
console.log('========================================================');
console.log('Directorio del proyecto:', projectRoot);

const KEYS = [
  process.env.OPENROUTER_API_KEY || '',
  process.env.OPENROUTER_BACKUP_API_KEY || ''
].filter(Boolean);

let activeKeyIndex = 0;
const proxyPort = 4097;

// „„ PROXY INTELIGENTE CON CONMUTACIӓ AUTOMÁTICA DE CLAVES „„„„„„„„„„
const proxyServer = http.createServer((clientReq, clientRes) => {
  const requestBodyChunks = [];
  clientReq.on('data', chunk => requestBodyChunks.push(chunk));

  clientReq.on('end', () => {
    const requestBody = Buffer.concat(requestBodyChunks);

    function attemptRequest(keyIndex) {
      if (keyIndex >= KEYS.length) {
        clientRes.writeHead(502, { 'Content-Type': 'application/json' });
        clientRes.end(JSON.stringify({ error: 'Todas las claves API de OpenRouter han fallado o agotado cuota.' }));
        return;
      }

      const currentKey = KEYS[keyIndex];
      const targetPath = clientReq.url.startsWith('/api/v1') ? clientReq.url : ('/api/v1' + clientReq.url);

      const headers = {
        ...clientReq.headers,
        host: 'openrouter.ai',
        authorization: 'Bearer ' + currentKey,
        'http-referer': 'http://localhost:4096',
        'x-title': 'APEX OpenCode Engine'
      };

      delete headers['content-length'];
      if (requestBody.length > 0) {
        headers['content-length'] = Buffer.byteLength(requestBody);
      }

      const options = {
        hostname: 'openrouter.ai',
        port: 443,
        path: targetPath,
        method: clientReq.method,
        headers: headers
      };

      const proxyReq = https.request(options, (proxyRes) => {
        const isErrorStatus = proxyRes.statusCode === 401 || proxyRes.statusCode === 402 || proxyRes.statusCode === 429;

        if (isErrorStatus && (keyIndex + 1) < KEYS.length) {
          console.log('\n[OPENROUTER FALLBACK] ⚠ Detectado error ' + proxyRes.statusCode + ' en Clave ' + (keyIndex + 1) + '. Conmutando automáticamente a Clave ' + (keyIndex + 2) + '...');
          activeKeyIndex = keyIndex + 1;
          attemptRequest(keyIndex + 1);
          return;
        }

        clientRes.writeHead(proxyRes.statusCode, proxyRes.headers);
        proxyRes.pipe(clientRes);
      });

      proxyReq.on('error', (err) => {
        console.error('[OPENROUTER PROXY ERROR] Error: ' + err.message);
        if ((keyIndex + 1) < KEYS.length) {
          console.log('[OPENROUTER FALLBACK] Reintentando con Clave ' + (keyIndex + 2) + '...');
          activeKeyIndex = keyIndex + 1;
          attemptRequest(keyIndex + 1);
        } else {
          clientRes.writeHead(502, { 'Content-Type': 'application/json' });
          clientRes.end(JSON.stringify({ error: 'Error conectando con OpenRouter: ' + err.message }));
        }
      });

      if (requestBody.length > 0) {
        proxyReq.write(requestBody);
      }
      proxyReq.end();
    }

    attemptRequest(activeKeyIndex);
  });
});

proxyServer.listen(proxyPort, '0.0.0.0', () => {
  console.log('🏡  Proxy de Respaldo Automático de Claves activo en:');
  console.log('   • Local: http://127.0.0.1:' + proxyPort + '/');
  console.log('   • Red LAN: http://0.0.0.0:' + proxyPort + '/');
  console.log('   • Clave Principal: ' + KEYS[0].slice(0, 16) + '...');
  console.log('   • Clave Respaldo:  ' + KEYS[1].slice(0, 16) + '...');
  console.log('   (Conmutación automática activa sin cortar la sesión)\n');
});

process.env.OPENROUTER_BASE_URL = 'http://127.0.0.1:' + proxyPort + '/api/v1';
process.env.OPENAI_BASE_URL = 'http://127.0.0.1:' + proxyPort + '/api/v1';
process.env.OPENROUTER_API_KEY = KEYS[0];
process.env.OPENROUTER_BACKUP_API_KEY = KEYS[1];
process.env.GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
process.env.GOOGLE_GENERATIVE_AI_API_KEY = process.env.GOOGLE_GENERATIVE_AI_API_KEY || '';
process.env.PATH = (process.env.APPDATA ? (process.env.APPDATA + '\\npm;') : '') + (process.env.PATH || '');

const isWin = process.platform === 'win32';
const cmd = isWin ? 'npx.cmd' : 'npx';
const args = ['opencode-ai', 'web', '--port', '4096', '--hostname', '0.0.0.0'];

const proc = spawn(cmd, args, {
  cwd: projectRoot,
  stdio: ['inherit', 'pipe', 'pipe'],
  shell: true,
  env: { ...process.env }
});

let browserOpened = false;

function checkAndOpenBrowser() {
  if (browserOpened) return;
  const req = http.get('http://127.0.0.1:4096/', (res) => {
    if (res.statusCode === 200 && !browserOpened) {
      browserOpened = true;
      console.log('\n=======================================================');
      console.log('  ✅ ¡OPENCODE WEB ESTÃ ACTIVO Y VINCULADO AL PROYECTO!');
      console.log('  🌐 Abriendo navegador en: http://127.0.0.1:4096/');
      console.log('=======================================================\n');
      exec('start http://127.0.0.1:4096/');
    }
  });
  req.on('error', () => {
    setTimeout(checkAndOpenBrowser, 800);
  });
}

setTimeout(checkAndOpenBrowser, 1000);

proc.stdout.on('data', (data) => {
  const str = data.toString();
  process.stdout.write(str);
  if (str.includes('Web interface') && !browserOpened) {
    checkAndOpenBrowser();
  }
});

proc.stderr.on('data', (data) => {
  process.stderr.write(data.toString());
});

proc.on('exit', (code) => {
  console.log('\nOpenCode se ha detenido con código: ' + code);
  try { proxyServer.close(); } catch {}
  process.exit(code || 0);
});