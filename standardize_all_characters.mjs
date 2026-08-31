import fs from 'fs';

function standardizeArray(filePath) {
  let text = fs.readFileSync(filePath, 'utf-8');

  // Regex to match every character object and adjust forms
  const charRegex = /\{\s*\"id\":\s*\"([^\"]+)\",\s*\"name\":\s*\"([^\"]+)\"[^}]*?\"forms\":\s*\[([\s\S]*?)\]/g;

  let modifiedCount = 0;

  text = text.replace(charRegex, (fullMatch, id, name, formsContent) => {
    // Check if the first form mentions Base
    const firstFormMatch = formsContent.match(/\{\s*\"id\":\s*\"([^\"]+)\",\s*\"name\":\s*\"([^\"]+)\"/);
    if (!firstFormMatch) return fullMatch;

    const [_, fId, fName] = firstFormMatch;
    const fNameLower = fName.toLowerCase();
    const isBase = fNameLower.includes('base') || fNameLower.includes('normal') || fNameLower.includes('humano') || fNameLower.includes('estándar') || fNameLower.includes('sellado') || fNameLower.includes('reposo') || fNameLower.includes('sellada') || fNameLower.includes('toshinori') || fNameLower.includes('infante') || fNameLower.includes('recluta');

    if (!isBase) {
      modifiedCount++;
      const cleanName = name.replace(/\s*\([^\)]+\)/g, '').trim();
      const baseForm = `{\n        "id": "${id}-base-std",\n        "name": "${cleanName} (Estado Base)",\n        "stats": "Nivel y estadísticas estándar de combate en estado base."\n      },\n      `;
      return fullMatch.replace(formsContent, baseForm + formsContent.trim());
    }

    return fullMatch;
  });

  fs.writeFileSync(filePath, text, 'utf-8');
  console.log(`Updated ${filePath}: ${modifiedCount} characters modified.`);
}

standardizeArray('./src/data/characters.js');
standardizeArray('./src/data/expandedRosterCharacters.js');
standardizeArray('./src/data/megaRosterCharacters.js');
standardizeArray('./src/data/ultraRosterCharacters.js');
