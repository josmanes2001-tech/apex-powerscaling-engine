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
  const cardFile = path.join(projectRoot, 'src/components/CharacterCard.jsx');
  let cardContent = fs.readFileSync(cardFile, 'utf8');
  if (cardContent.includes("from './SearchableCharacterSelector'")) {
    cardContent = cardContent.replace("from './SearchableCharacterSelector'", "from './SearchableCharacterSelector.jsx'");
    fs.writeFileSync(cardFile, cardContent, 'utf8');
    console.log('✓ Fixed CharacterCard.jsx SearchableCharacterSelector.jsx import.');
  } else {
    console.log('CharacterCard.jsx already has .jsx extension.');
  }
}

main().catch(console.error);
