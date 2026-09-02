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

  let fixedCount = 0;

  // 1. Mecha Freezer (Tier 4-B vs Estrella Enana Alta -> Debe ser Tier 4-C)
  if (content.includes('"Tier 4-B | Nivel Estrella Enana Alta. Reconstruido con prótesis')) {
    content = content.replace(
      '"Tier 4-B | Nivel Estrella Enana Alta. Reconstruido con prótesis',
      '"Tier 4-C | Nivel Estrella Enana Alta. Reconstruido con prótesis'
    );
    fixedCount++;
    console.log('✓ Corregido Mecha Freezer (Tier 4-C / Estrella Enana Alta).');
  }

  // 2. Androide 18 Saga Androides (En su base pone Nivel Galaxia cuando en DBZ Androides es Tier 4-C / 4-B)
  const oldA18 = '"id": "humana-modificada-base",\n        "name": "Humana Modificada Base",\n        "stats": "Nivel Galaxia. Vestimenta casual, mirada fría y confiada."';
  const newA18 = '"id": "humana-modificada-base",\n        "name": "Humana Modificada Base",\n        "stats": "Nivel Estrella Enana a Sistema Solar Menor. Vestimenta casual, energía infinita, mirada fría y confiada."';
  if (content.includes(oldA18)) {
    content = content.replace(oldA18, newA18);
    fixedCount++;
    console.log('✓ Corregida Androide 18 Base DBZ (Estrella Enana a Sistema Solar Menor).');
  } else if (content.includes('Nivel Galaxia. Vestimenta casual, mirada fría y confiada.')) {
    content = content.replace(
      'Nivel Galaxia. Vestimenta casual, mirada fría y confiada.',
      'Nivel Estrella Enana a Sistema Solar Menor. Vestimenta casual, energía infinita, mirada fría y confiada.'
    );
    fixedCount++;
    console.log('✓ Corregida Androide 18 Base DBZ (substring).');
  }

  // 3. Gohan del Futuro Base (Místico What-If)
  if (content.includes('"Nivel Sistema Solar. Gohan con 1 solo brazo pero gran poder."')) {
    content = content.replace(
      '"Nivel Sistema Solar. Gohan con 1 solo brazo pero gran poder."',
      '"Nivel Planeta Grande a Estrella Pequeña. Gohan con 1 solo brazo en estado base antes de despertar el potencial místico."'
    );
    fixedCount++;
    console.log('✓ Corregido Gohan del Futuro Base.');
  }

  // 4. Son Gohan DB After Base
  if (content.includes('"Son Gohan Base (DB After)",\n        "stats": "Nivel Sistema Solar."')) {
    content = content.replace(
      '"Son Gohan Base (DB After)",\n        "stats": "Nivel Sistema Solar."',
      '"Son Gohan Base (DB After)",\n        "stats": "Nivel Planeta Grande a Estrella Pequeña."'
    );
    fixedCount++;
    console.log('✓ Corregido Son Gohan DB After Base.');
  }

  // 5. Goten New Hope Adulto Base
  if (content.includes('"Goten Adulto (Estado Base)",\n        "stats": "Nivel Sistema Solar. Gran madurez')) {
    content = content.replace(
      '"Goten Adulto (Estado Base)",\n        "stats": "Nivel Sistema Solar. Gran madurez',
      '"Goten Adulto (Estado Base)",\n        "stats": "Nivel Planeta Grande a Estrella Pequeña. Gran madurez'
    );
    fixedCount++;
    console.log('✓ Corregido Goten New Hope Adulto Base.');
  }

  // 6. Krillin New Hope Base
  if (content.includes('"Krillin (Forma Base / Condensador Limitador)",\n        "stats": "Nivel Sistema Solar Menor.')) {
    content = content.replace(
      '"Krillin (Forma Base / Condensador Limitador)",\n        "stats": "Nivel Sistema Solar Menor.',
      '"Krillin (Forma Base / Condensador Limitador)",\n        "stats": "Nivel Planeta Grande a Estrella Enana.'
    );
    fixedCount++;
    console.log('✓ Corregido Krillin New Hope Base.');
  }

  // 7. Piccolo New Hope Base
  if (content.includes('"Piccolo (Maestro Namekiano / Base)",\n        "stats": "Nivel Sistema Solar Menor. Concentración')) {
    content = content.replace(
      '"Piccolo (Maestro Namekiano / Base)",\n        "stats": "Nivel Sistema Solar Menor. Concentración',
      '"Piccolo (Maestro Namekiano / Base)",\n        "stats": "Nivel Planeta Grande a Estrella Enana. Concentración'
    );
    fixedCount++;
    console.log('✓ Corregido Piccolo New Hope Base.');
  }

  if (fixedCount > 0) {
    fs.writeFileSync(charFile, content, 'utf8');
    console.log(`\n🎉 ¡Se han corregido ${fixedCount} inconsistencias en characters.js!`);
  } else {
    console.log('\nNo se detectaron nuevas inconsistencias pendientes.');
  }
}

main().catch(console.error);
