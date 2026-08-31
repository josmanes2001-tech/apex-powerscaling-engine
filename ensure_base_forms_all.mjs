import fs from 'fs';

async function processFile(filePath, exportName) {
  const mod = await import(filePath);
  const chars = mod[exportName];
  if (!Array.isArray(chars)) {
    console.log('Not an array:', exportName);
    return;
  }

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
      const hasBase = f0Name.includes('base') || f0Name.includes('normal') || f0Name.includes('humano') || f0Name.includes('estándar') || f0Name.includes('sellado') || f0Name.includes('reposo') || f0Name.includes('sellada') || f0Name.includes('inicial') || f0Name.includes('toshinori') || f0Name.includes('infante') || f0Name.includes('recluta');

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

  // Write out formatted JS file
  const header = filePath.includes('ultra') ? '// APEX Engine - Ultra Roster Expansion\n' :
                 filePath.includes('mega') ? '// APEX Engine - Mega Roster Expansion\n' :
                 filePath.includes('expanded') ? '// APEX Engine - Expanded Roster\n' :
                 '// APEX Engine - Raw Initial Characters\n';

  const jsContent = `${header}export const ${exportName} = ${JSON.stringify(chars, null, 2)};\n`;
  fs.writeFileSync(filePath, jsContent, 'utf-8');
  console.log(`Saved ${filePath} with ${chars.length} characters (${modified} form additions).`);
}

async function run() {
  await processFile('./src/data/expandedRosterCharacters.js', 'EXPANDED_ROSTER_CHARACTERS');
  await processFile('./src/data/megaRosterCharacters.js', 'MEGA_ROSTER_CHARACTERS');
  await processFile('./src/data/ultraRosterCharacters.js', 'ULTRA_ROSTER_CHARACTERS');
}

run().catch(console.error);
