const fs = require('fs');
let content = fs.readFileSync('Z:/apex-powerscaling-engine/server.cjs', 'utf-8');

const newPromptBlock = `const prompt = \`Actúa como el mayor experto mundial en Power Scaling (VS Battles Wiki) y rol narrativo avanzado (OMNI-TITÁN). 
Genera la ficha técnica completa y rigurosa para el personaje "\${name}". 
Debes devolver ÚNICAMENTE un objeto JSON válido (sin markdown) con la siguiente estructura exacta de 12+ campos:
{
  "id": "nombre-slug",
  "name": "\${name}",
  "universe": "Franquicia de origen",
  "version": "Versión canónica (ej: Prime, Adulto)",
  "tier": "Tier oficial VS Battles y Nivel de Poder",
  "ap": "Attack Potency / DC exacto anclado a feats",
  "speed": {
    "combat": "Velocidad de combate (Lanzar golpes)",
    "reaction": "Velocidad de reacción (Esquivar)",
    "travel": "Velocidad de desplazamiento (Vuelo/Correr)",
    "attack": "Velocidad de ataques de energía/magia"
  },
  "strength": {
    "striking": "Fuerza de Impacto (ej: Town Class)",
    "lifting": "Fuerza de Levantamiento (ej: Clase K)"
  },
  "durability": "Resistencia física y resistencias a hax",
  "stamina": "Límite térmico/calórico o fatiga (ej: Agota Ki rápido, infinita)",
  "battleIQ": "Inteligencia Táctica (ej: Genio Táctico, Instintivo)",
  "abilities": [
    { "name": "Nombre", "desc": "Descripción precisa", "limit": "Coste, desgaste térmico o debilidad" }
  ],
  "forms": [
    { "id": "base", "name": "Estado Base", "stats": "Descripción del poder en esta forma" },
    { "id": "transformacion-1", "name": "Nombre Transformación", "stats": "Multiplicadores, desgaste de estamina y poder" }
  ],
  "feats": ["Hazaña destacada 1", "Hazaña destacada 2"],
  "psychology": "Psicología Tripartita: Lo que busca, lo que teme. Microgestos al mentir/sufrir dolor.",
  "weaknesses": "Debilidades físicas y psíquicas, condiciones para ser derrotado.",
  "equipment": "Armamento clave"
}\`;`;

const startIndex = content.indexOf('const prompt = `Act');
if (startIndex !== -1) {
  const endIndex = content.indexOf('}`;', startIndex);
  if (endIndex !== -1) {
    const originalBlock = content.substring(startIndex, endIndex + 3);
    content = content.replace(originalBlock, newPromptBlock);
    fs.writeFileSync('Z:/apex-powerscaling-engine/server.cjs', content, 'utf-8');
    console.log('Backend prompt updated successfully!');
  } else {
    console.log('Could not find end of prompt');
  }
} else {
  console.log('Could not find start of prompt');
}
