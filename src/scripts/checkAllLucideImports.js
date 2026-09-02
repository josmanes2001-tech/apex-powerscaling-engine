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
  const charFile = path.join(projectRoot, 'src/data/characters.js');
  let content = fs.readFileSync(charFile, 'utf8');

  let changes = 0;
  
  // 1. Corregir Vegeta Saga Cell Base
  const oldVeg = 'Nivel Sistema Solar Menor. Forma base tras la Habitación del Tiempo';
  const newVeg = 'Nivel Planeta Grande a Estrella Pequeña. Forma base tras la Habitación del Tiempo';
  if (content.includes(oldVeg)) {
    content = content.replace(oldVeg, newVeg);
    changes++;
    console.log('✓ Corregido estado base de Vegeta Saga Cell (de Sistema Solar a Planeta Grande/Estrella Pequeña).');
  }

  // 2. Corregir Goku Saga Cell Base
  const oldGoku = 'Nivel Estrella Pequeña. Gran maestría de control de Ki post-Yadrat.';
  const newGoku = 'Nivel Planeta Grande a Estrella Pequeña. Gran maestría de control de Ki post-Yadrat.';
  if (content.includes(oldGoku)) {
    content = content.replace(oldGoku, newGoku);
    changes++;
    console.log('✓ Corregido estado base de Goku Saga Cell (de Estrella Pequeña a Planeta Grande/Estrella Pequeña).');
  }

  if (changes > 0) {
    fs.writeFileSync(charFile, content, 'utf8');
    console.log(`\n¡Listo! ${changes} formas base corregidas en characters.js.`);
  } else {
    console.log('\nNo se requirieron cambios o ya estaban corregidos.');
  }
}

main().catch(console.error);
