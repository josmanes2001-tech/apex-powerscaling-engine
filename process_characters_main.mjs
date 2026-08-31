import fs from 'fs';

async function processMainFile() {
  const mod = await import('./src/data/characters.js');
  // We want to process RAW_INITIAL_CHARACTERS which is in the file
  let content = fs.readFileSync('./src/data/characters.js', 'utf-8');
  
  // Extract the array between "const RAW_INITIAL_CHARACTERS = [" and "];\n\nexport const INITIAL_CHARACTERS"
  const startIdx = content.indexOf('const RAW_INITIAL_CHARACTERS = [');
  const endIdx = content.lastIndexOf('];\n\nexport const INITIAL_CHARACTERS');

  if (startIdx === -1 || endIdx === -1) {
    console.error('Could not find RAW_INITIAL_CHARACTERS markers');
    return;
  }

  const jsonStr = content.slice(startIdx + 'const RAW_INITIAL_CHARACTERS = '.length, endIdx + 1);
  const chars = JSON.parse(jsonStr);

  let modified = 0;

  for (const c of chars) {
    if (!c.forms) c.forms = [];

    // 1. Ensure forms is not empty and has Base form
    if (c.forms.length === 0) {
      c.forms.push({
        id: `${c.id}-base`,
        name: `${c.name} (Estado Base)`,
        stats: `Nivel y estadísticas estándar de combate en estado base.`
      });
      modified++;
    } else {
      const f0Name = (c.forms[0].name || '').toLowerCase();
      const hasBase = f0Name.includes('base') || f0Name.includes('normal') || f0Name.includes('humano') || f0Name.includes('estándar') || f0Name.includes('sellado') || f0Name.includes('reposo') || f0Name.includes('sellada') || f0Name.includes('inicial') || f0Name.includes('toshinori') || f0Name.includes('infante') || f0Name.includes('recluta') || f0Name.includes('niño') || f0Name.includes('joven') || f0Name.includes('adulto') || f0Name.includes('príncipe') || f0Name.includes('cuerpo mutante original') || f0Name.includes('ropa pesada') || f0Name.includes('100%');

      if (!hasBase) {
        c.forms.unshift({
          id: `${c.id}-base-std`,
          name: `${c.name} (Estado Base)`,
          stats: `Tier base. Fuerza, velocidad y reservas de energía estándar de ${c.name} antes de liberar transformaciones.`
        });
        modified++;
      }
    }

    // 2. Check for missing intermediate Saiyan forms (e.g. has SSJ3 but missing SSJ1/SSJ2)
    const lowerForms = c.forms.map(f => (f.name || '').toLowerCase());
    const hasSSJ3 = lowerForms.some(n => n.includes('ssj3') || n.includes('fase 3') || n.includes('super saiyan 3'));
    const hasSSJ2 = lowerForms.some(n => n.includes('ssj2') || n.includes('fase 2') || n.includes('super saiyan 2'));
    const hasSSJ1 = lowerForms.some(n => n.includes('ssj1') || n.includes('ssj 1') || n.includes('super saiyan 1') || n.includes('super saiyajin 1') || (n.includes('super saiyan') && !n.includes('2') && !n.includes('3') && !n.includes('4') && !n.includes('god') && !n.includes('blue')));
    const hasSSJ4 = lowerForms.some(n => n.includes('ssj4') || n.includes('fase 4') || n.includes('super saiyan 4'));

    if (hasSSJ3 && !hasSSJ1) {
      c.forms.splice(1, 0, {
        id: `${c.id}-ssj1-std`,
        name: `${c.name} (Super Saiyan 1)`,
        stats: `Multiplicador x50 de poder. Cabello erizado dorado y aura ardiente.`
      });
      modified++;
    }

    const lowerForms2 = c.forms.map(f => (f.name || '').toLowerCase());
    const hasSSJ2_now = lowerForms2.some(n => n.includes('ssj2') || n.includes('fase 2') || n.includes('super saiyan 2'));
    const ssj3Idx = c.forms.findIndex(f => (f.name || '').toLowerCase().includes('ssj3') || (f.name || '').toLowerCase().includes('super saiyan 3') || (f.name || '').toLowerCase().includes('fase 3'));

    if (hasSSJ3 && !hasSSJ2_now && ssj3Idx > 0) {
      c.forms.splice(ssj3Idx, 0, {
        id: `${c.id}-ssj2-std`,
        name: `${c.name} (Super Saiyan 2)`,
        stats: `Multiplicador x100 de poder. Rayos eléctricos bio-plasmáticos y velocidad superior.`
      });
      modified++;
    }

    if (hasSSJ4 && !hasSSJ3) {
      const ssj4Idx = c.forms.findIndex(f => (f.name || '').toLowerCase().includes('ssj4') || (f.name || '').toLowerCase().includes('super saiyan 4') || (f.name || '').toLowerCase().includes('fase 4'));
      if (ssj4Idx > 0) {
        c.forms.splice(ssj4Idx, 0, {
          id: `${c.id}-ssj3-std`,
          name: `${c.name} (Super Saiyan 3)`,
          stats: `Multiplicador x400 de poder. Melena dorada masiva y liberación total de ki.`
        });
        modified++;
      }
    }
  }

  const newContent = `// APEX Engine - Database Central de Personajes & Power Scaling
// 320+ Luchadores Canónicos, Fan Mangas, What-Ifs y OCs Oficiales
import { EXPANDED_ROSTER_CHARACTERS } from './expandedRosterCharacters.js';
import { MEGA_ROSTER_CHARACTERS } from './megaRosterCharacters.js';
import { ULTRA_ROSTER_CHARACTERS } from './ultraRosterCharacters.js';

const RAW_INITIAL_CHARACTERS = ${JSON.stringify(chars, null, 2)};

export const INITIAL_CHARACTERS = [...RAW_INITIAL_CHARACTERS, ...EXPANDED_ROSTER_CHARACTERS, ...MEGA_ROSTER_CHARACTERS, ...ULTRA_ROSTER_CHARACTERS];
`;

  fs.writeFileSync('./src/data/characters.js', newContent, 'utf-8');
  console.log(`Saved characters.js with ${chars.length} characters (${modified} form additions).`);
}

processMainFile().catch(console.error);
