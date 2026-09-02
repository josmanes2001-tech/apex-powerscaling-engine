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

import { resolveCombatState } from '../lib/combatStateResolver.js';
import { INITIAL_CHARACTERS } from '../data/characters.js';

async function main() {
  const gokus = INITIAL_CHARACTERS.filter(c => c.name.toLowerCase().includes('goku') && c.name.toLowerCase().includes('cell'));
  const cells = INITIAL_CHARACTERS.filter(c => c.name.toLowerCase() === 'cell');
  
  console.log(`Found ${gokus.length} Goku Cell characters and ${cells.length} Cell characters.`);
  
  for (const g of gokus) {
    console.log(`\n--- ${g.name} (${g.id}) ---`);
    console.log(`Root tier: ${g.tier}`);
    for (const f of (g.forms || [])) {
      const res = resolveCombatState(g, f.id);
      console.log(`  Form [${f.name}] (${f.id}) -> Tier: ${res.tierExact} | Scouter: ${res.sourceKiDisplay} | APEX-Ki: ${res.apexKiDisplay}`);
    }
  }

  for (const c of cells) {
    console.log(`\n--- ${c.name} (${c.id}) ---`);
    console.log(`Root tier: ${c.tier}`);
    for (const f of (c.forms || [])) {
      const res = resolveCombatState(c, f.id);
      console.log(`  Form [${f.name}] (${f.id}) -> Tier: ${res.tierExact} | Scouter: ${res.sourceKiDisplay} | APEX-Ki: ${res.apexKiDisplay}`);
    }
  }
}

main().catch(console.error);
