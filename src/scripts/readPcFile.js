/**
 * APEX Engine — PC File Bridge
 * Safely reads files from the user's local PC directory (e.g. C:\Users\Jose Luis)
 * and formats them for OpenCode, Laguna, and APEX parsers.
 */

import fs from 'fs';
import path from 'path';

const targetPath = process.argv[2];

if (!targetPath) {
  console.log('Uso: node src/scripts/readPcFile.js <ruta-del-archivo>');
  console.log('Ejemplo: node src/scripts/readPcFile.js "C:\\Users\\Jose Luis\\Documentos\\mi-personaje.txt"');
  process.exit(1);
}

// Clean and resolve path
let resolved = targetPath.trim().replace(/^["']|["']$/g, '');
if (!path.isAbsolute(resolved)) {
  resolved = path.resolve('C:\\Users\\Jose Luis', resolved);
}

try {
  if (!fs.existsSync(resolved)) {
    console.error(`❌ Archivo no encontrado en: ${resolved}`);
    process.exit(1);
  }

  const stat = fs.statSync(resolved);
  if (stat.isDirectory()) {
    console.log(`📁 Contenido del directorio [${resolved}]:\n`);
    const files = fs.readdirSync(resolved);
    files.forEach(f => console.log('  • ' + f));
  } else {
    console.log(`========================================================`);
    console.log(`  📄 LEYENDO ARCHIVO DESDE EL PC PRINCIPAL`);
    console.log(`  Ruta: ${resolved}`);
    console.log(`  Tamaño: ${(stat.size / 1024).toFixed(2)} KB`);
    console.log(`========================================================\n`);
    const content = fs.readFileSync(resolved, 'utf8');
    console.log(content);
  }
} catch (err) {
  console.error(`❌ Error al acceder a ${resolved}: ${err.message}`);
  process.exit(1);
}
