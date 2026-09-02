// src/scripts/fixFormTiersAndLore.js
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '../../');
const CHARACTERS_FILE = path.join(projectRoot, 'src/data/characters.js');

async function loadCharacters() {
  const mod = await import('file://' + CHARACTERS_FILE.replace(/\\/g, '/'));
  return mod.INITIAL_CHARACTERS || [];
}

function getBaseTierForCharacter(c) {
  const name = (c.name || '').toLowerCase();
  const saga = (c.saga || c.version || '').toLowerCase();
  const uni = (c.universe || '').toLowerCase();

  // Dragon Ball Base Tiers
  if (uni.includes('dragon ball') || name.includes('goku') || name.includes('vegeta') || name.includes('gohan')) {
    if (saga.includes('clásico') || saga.includes('clasico') || saga.includes('piccolo') || saga.includes('red ribbon')) {
      return { tier: '7-B', desc: 'Nivel Ciudad a Montaña' };
    }
    if (saga.includes('23') || saga.includes('torneo')) {
      return { tier: '7-A', desc: 'Nivel Montaña' };
    }
    if (saga.includes('saiyan') || saga.includes('llegada')) {
      return { tier: '5-C', desc: 'Nivel Lunar / Planeta Pequeño' };
    }
    if (saga.includes('namek') || saga.includes('freezer')) {
      return { tier: 'Low 5-B', desc: 'Nivel Pequeño Planeta / Planetario' };
    }
    if (saga.includes('androide') || saga.includes('cell')) {
      return { tier: '5-A', desc: 'Nivel Planeta Grande / Enana Marrón' };
    }
    if (saga.includes('buu')) {
      return { tier: 'High 5-A', desc: 'Nivel Planeta Grande+' };
    }
    if (saga.includes('super') || saga.includes('dbs')) {
      return { tier: 'Low 2-C', desc: 'Nivel Universal+ (Base con Ki Divino Absorbido)' };
    }
    if (saga.includes('gt')) {
      return { tier: '4-C', desc: 'Nivel Estelar' };
    }
    if (saga.includes('daima')) {
      return { tier: '5-A', desc: 'Nivel Planeta Grande (Comprimido)' };
    }
    return { tier: '5-A', desc: 'Nivel Planetario' };
  }

  // Naruto / Bleach / One Piece / OPM Base Tiers
  if (name.includes('naruto') || name.includes('sasuke')) {
    if (saga.includes('shippuden') || saga.includes('guerra')) return { tier: '6-A', desc: 'Nivel Continental' };
    if (saga.includes('boruto') || saga.includes('hokage')) return { tier: 'High 6-A', desc: 'Nivel Multi-Continental' };
    return { tier: '7-A', desc: 'Nivel Montaña' };
  }
  if (name.includes('ichigo')) {
    if (saga.includes('tybw') || saga.includes('quincy')) return { tier: '5-A', desc: 'Nivel Planetario' };
    return { tier: '6-A', desc: 'Nivel Continental' };
  }
  if (name.includes('luffy')) {
    if (saga.includes('wano') || saga.includes('egghead')) return { tier: '6-A', desc: 'Nivel Continental' };
    return { tier: '6-B', desc: 'Nivel País' };
  }
  if (name.includes('saitama') || name.includes('garou')) {
    if (name.includes('garou') && saga.includes('cósmico')) return { tier: '4-B', desc: 'Nivel Sistema Solar' };
    return { tier: '5-A', desc: 'Nivel Planeta Grande' };
  }

  return null;
}

async function main() {
  const characters = await loadCharacters();
  console.log(`Processing ${characters.length} characters...`);

  let bioFixed = 0;
  let formFixed = 0;

  characters.forEach(c => {
    // 1. Fix illegal biological absorption on Saiyans / Humans / Non-Bio
    const isSaiyanOrHuman = /saiyajin|saiyan|humano|human/i.test(c.race || c.name || c.universe || '');
    const isBio = /cell|buu|moro|baby|parasito|parásito|absorbedor/i.test(c.name || c.id || '');

    if (isSaiyanOrHuman && !isBio) {
      if (c.arsenal) {
        ['basicAttacks', 'specialAttacks', 'ultimateAttacks'].forEach(cat => {
          if (Array.isArray(c.arsenal[cat])) {
            c.arsenal[cat] = c.arsenal[cat].filter(atk => {
              const str = (atk.name + ' ' + (atk.desc || '')).toLowerCase();
              if (str.includes('asimilación genética') || str.includes('asimilacion genetica') || str.includes('biomasa compartida')) {
                bioFixed++;
                return false;
              }
              return true;
            });
          }
        });
      }
      if (Array.isArray(c.passives)) {
        c.passives = c.passives.filter(p => {
          const str = (p.name + ' ' + (p.desc || p.effect || '')).toLowerCase();
          if (str.includes('asimilación genética') || str.includes('asimilacion genetica') || str.includes('biomasa compartida')) {
            bioFixed++;
            return false;
          }
          return true;
        });
      }
      if (Array.isArray(c.synergies)) {
        c.synergies = c.synergies.filter(s => {
          const str = (s.name + ' ' + (s.effect || '')).toLowerCase();
          if (str.includes('asimilación genética') || str.includes('asimilacion genetica') || str.includes('biomasa compartida')) {
            bioFixed++;
            return false;
          }
          return true;
        });
      }
    }

    // 2. Fix Base Form Tier decoupling
    if (c.forms && Array.isArray(c.forms) && c.forms.length > 1) {
      const baseForm = c.forms[0];
      if (baseForm && (baseForm.name.toLowerCase().includes('base') || baseForm.name.toLowerCase().includes('estado base') || baseForm.name.toLowerCase().includes('normal'))) {
        const baseSpec = getBaseTierForCharacter(c);
        if (baseSpec) {
          baseForm.tier = baseSpec.tier;
          baseForm.tierExact = baseSpec.tier;
          if (!baseForm.multiplier) baseForm.multiplier = '1x';
          formFixed++;
        }
      }
    }
  });

  console.log(`✓ Eliminadas ${bioFixed} técnicas/sinergias biológicas ilegales en Saiyans/Humanos.`);
  console.log(`✓ Desacopladas ${formFixed} formas base con sus Tiers físicos canónicos reales.`);

  // Write updated characters.js
  const fileContent = `export const INITIAL_CHARACTERS = ${JSON.stringify(characters, null, 2)};\n`;
  fs.writeFileSync(CHARACTERS_FILE, fileContent, 'utf8');
  console.log('✓ characters.js guardado con éxito.');
}

main().catch(err => console.error('Error fixing characters:', err));
