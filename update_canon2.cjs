const fs = require('fs');

let content = fs.readFileSync('Z:/apex-powerscaling-engine/server.cjs', 'utf-8');

const startIndex = content.indexOf('const prompt = `Act');
const endIndex = content.indexOf('}`;', startIndex);

if (startIndex !== -1 && endIndex !== -1) {
  const originalBlock = content.substring(startIndex, endIndex + 3);

  const newPromptBlock = `const prompt = \`Actúa como el mayor experto mundial en Power Scaling (VS Battles Wiki) y rol narrativo avanzado. 
Genera la ficha técnica completa y rigurosa para el personaje "\${name}". 

[REGLA CRÍTICA PARA TRANSFORMACIONES Y HABILIDADES]:
- Eres estricto con el canon. NO inventes transformaciones, poderes ni estados que el personaje nunca alcanzó oficialmente. (Ejemplo: Gohan NO tiene SSJ Blue).
- Incluye TODAS las transformaciones canónicas de forma exhaustiva y cronológica, incluso las redundantes, previas o superadas (ej: Para Gohan incluye SSJ1 y SSJ2, no solo Ultimate o Beast).
- Si el personaje no tiene transformaciones, deja el array "forms" solo con su "Estado Base".

Debes devolver ÚNICAMENTE un objeto JSON válido (sin markdown) con la siguiente estructura exacta de 12+ campos:
{
  "id": "nombre-slug",
  "name": "\${name}",
  "universe": "Franquicia de origen",
  "version": "Versión canónica (ej: Prime, Adulto, Super)",
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
    { "id": "base", "name": "Estado Base", "stats": "Poder base, sin transformaciones" },
    { "id": "canon-1", "name": "Nombre Transformación 1 (ej: Super Saiyan)", "stats": "Stats y multiplicador" },
    { "id": "canon-2", "name": "Nombre Transformación 2 (ej: Super Saiyan 2)", "stats": "Stats y multiplicador" }
  ],
  "feats": ["Hazaña destacada 1", "Hazaña destacada 2"],
  "psychology": "Psicología Tripartita: Lo que busca, lo que teme. Microgestos al mentir/sufrir dolor.",
  "weaknesses": "Debilidades físicas y psíquicas, condiciones para ser derrotado.",
  "equipment": "Armamento clave"
}\`;`;

  content = content.replace(originalBlock, newPromptBlock);
  fs.writeFileSync('Z:/apex-powerscaling-engine/server.cjs', content, 'utf-8');
  console.log('Prompt successfully updated with exhaustive forms list.');
} else {
  console.log('Error finding prompt block.');
}
