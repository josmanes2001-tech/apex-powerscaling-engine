import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '../../');
const envPath = path.join(projectRoot, '.env');

if (!fs.existsSync(envPath)) {
  console.error('No se encontró el archivo .env');
  process.exit(1);
}

let envContent = fs.readFileSync(envPath, 'utf8');

const match1 = envContent.match(/OPENROUTER_API_KEY=([^\r\n]+)/);
const match2 = envContent.match(/OPENROUTER_BACKUP_API_KEY=([^\r\n]+)/);

if (match1 && match2) {
  const key1 = match1[1].trim();
  const key2 = match2[1].trim();

  envContent = envContent
    .replace(OPENROUTER_API_KEY=, OPENROUTER_API_KEY=__TEMP_KEY__)
    .replace(OPENROUTER_BACKUP_API_KEY=, OPENROUTER_BACKUP_API_KEY=)
    .replace(OPENROUTER_API_KEY=__TEMP_KEY__, OPENROUTER_API_KEY=);

  fs.writeFileSync(envPath, envContent, 'utf8');

  console.log('========================================================');
  console.log('  🔄 ¡CLAVES DE OPENROUTER ALTERNADAS CON ÉXITO!');
  console.log('========================================================');
  console.log('Nueva Clave Principal (OPENROUTER_API_KEY):', key2.slice(0, 16) + '...' + key2.slice(-8));
  console.log('Nueva Clave Respaldo  (OPENROUTER_BACKUP):  ', key1.slice(0, 16) + '...' + key1.slice(-8));
  console.log('========================================================\n');
} else {
  console.log('No se pudieron encontrar ambas variables en el .env');
}
