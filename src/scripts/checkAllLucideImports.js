// src/scripts/checkAllLucideImports.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '../../');
const srcDir = path.join(projectRoot, 'src');

// Get all exported keys from installed lucide-react
async function getLucideExports() {
  const mod = await import('lucide-react');
  return new Set(Object.keys(mod));
}

function getAllFiles(dir, exts = ['.jsx', '.js', '.tsx', '.ts'], res = []) {
  const list = fs.readdirSync(dir);
  for (const f of list) {
    const full = path.join(dir, f);
    const st = fs.statSync(full);
    if (st.isDirectory()) {
      getAllFiles(full, exts, res);
    } else if (exts.includes(path.extname(f))) {
      res.push(full);
    }
  }
  return res;
}

async function main() {
  const serverFile = path.join(projectRoot, 'server.cjs');
  let content = fs.readFileSync(serverFile, 'utf8');

  const oldHttpBlock = `const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(\`====================================================\`);
  console.log(\`⚡ APEX ENGINE MULTI-AI BACKEND RUNNING\`);
  console.log(\`🌐 Port: http://0.0.0.0:\${PORT}\`);
  console.log(\`🧠 Providers: OpenRouter, Gemini, OpenAI, Ollama, Custom URL\`);
  console.log(\`📂 Vault Path: \${VAULT_PATH}\`);
  console.log(\`====================================================\`);
});

server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.log(\`ℹ️ El puerto \${PORT} ya está en uso por otra instancia activa de APEX. Continuando normalmente...\`);
  } else {
    console.error('Error en el servidor backend:', e);
  }
});`;

  const newHttpBlock = `const http = require('http');
const server = http.createServer(app);

function startServer(portToTry) {
  server.listen(portToTry, '0.0.0.0', () => {
    console.log(\`====================================================\`);
    console.log(\`⚡ APEX ENGINE MULTI-AI BACKEND RUNNING\`);
    console.log(\`🌐 Port: http://0.0.0.0:\${portToTry}\`);
    console.log(\`🧠 Providers: OpenRouter, Gemini, OpenAI, Ollama, Custom URL\`);
    console.log(\`📂 Vault Path: \${VAULT_PATH}\`);
    console.log(\`====================================================\`);
  });
}

server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.log(\`ℹ️ El puerto \${PORT} ya está en uso por una instancia previa de APEX.\`);
    console.log(\`⚡ Conectando automáticamente al puerto de respaldo \${PORT + 1}...\`);
    setTimeout(() => {
      server.close();
      startServer(PORT + 1);
    }, 500);
  } else {
    console.error('Error en el servidor backend:', e);
  }
});

startServer(PORT);`;

  if (content.includes('const server = app.listen(PORT, \'0.0.0.0\'')) {
    content = content.replace(oldHttpBlock, newHttpBlock);
    fs.writeFileSync(serverFile, content, 'utf8');
    console.log('✓ server.cjs actualizado con creación segura de servidor HTTP y fallback de puerto.');
  }
}

main().catch(console.error);
