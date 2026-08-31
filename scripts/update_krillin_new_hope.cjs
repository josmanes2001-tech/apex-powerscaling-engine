const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../src/data/characters.js');
let content = fs.readFileSync(filePath, 'utf8');

const prefix = 'export const INITIAL_CHARACTERS = ';
const currentList = eval(content.replace(prefix, ''));

const krillinIndex = currentList.findIndex(c => c.id === 'krillin-new-hope');

if (krillinIndex !== -1) {
  const krillin = currentList[krillinIndex];
  
  // Agregar el Kikoho Kaio-ken a Ultimate Attacks si no está ya
  const hasKikoho = krillin.arsenal.ultimateAttacks.find(a => a.name.includes('Kikoho'));
  
  if (!hasKikoho) {
    krillin.arsenal.ultimateAttacks.push({
      "name": "Kikoho Kaio-ken (Sacrificio Absoluto)",
      "desc": "Combinando la fuerza vital del Kikoho con la presión masiva del Kaio-ken, Krillin libera una onda cuadrada abrumadora capaz de destrozar y retener la masa celular de Cell Hiper Perfecto a costa de un estrés corporal letal.",
      "cost": "70% HP / 50% Ki"
    });
    
    const output = "// APEX Engine — Base de Datos de Personajes Estructurada (VS Battles Tier System)\\n// Total fichas deduplicadas y normalizadas\\n\\nexport const INITIAL_CHARACTERS = " + JSON.stringify(currentList, null, 2) + ";\\n";
    fs.writeFileSync(filePath, output.replace(/\\n/g, '\n'), 'utf8');
    console.log('Krillin New Hope successfully updated with Kikoho Kaio-ken.');
  } else {
    console.log('Kikoho already present.');
  }
} else {
  console.log('Krillin New Hope not found.');
}
