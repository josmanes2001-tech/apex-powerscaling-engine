const fs = require('fs');

let content = fs.readFileSync('Z:/apex-powerscaling-engine/server.cjs', 'utf-8');

const startIndex = content.indexOf('const prompt = `Act');
const endIndex = content.indexOf('}`;', startIndex);

if (startIndex !== -1 && endIndex !== -1) {
  const originalBlock = content.substring(startIndex, endIndex + 3);

  const newPromptBlock = `const prompt = \`Actúa como el mayor experto mundial en Power Scaling (VS Battles Wiki) y rol narrativo avanzado. 
Genera la ficha técnica completa y rigurosa para el personaje "\${name}". 

[REGLA CRÍTICA PARA FORMAS, MODOS Y TRANSFORMACIONES]:
- Eres ESTRICTO con el canon de CUALQUIER franquicia (Anime, Cómics, Videojuegos, Novelas). NO inventes transformaciones que el personaje nunca alcanzó.
- Incluye TODAS las transformaciones, armaduras, estados de energía o despertares de forma EXHAUSTIVA y CRONOLÓGICA, abarcando incluso las formas previas, redundantes o superadas.
- Ejemplos Universales: 
  * One Piece: Gear 2, Gear 3, Gear 4 (Boundman/Snakeman), Gear 5. 
  * Bleach: Shikai, Bankai, Formas Hollow. 
  * Cómics: Armaduras previas de Iron Man, Trajes de Batman (Normal, Hellbat).
  * DBZ: Base, SSJ1, SSJ2, SSJ3, Ultimate (Nunca inventes SSJ Blue si no lo tiene).
- Si el personaje no tiene transformaciones, deja "forms" solo con su "Estado Base".

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
    { "id": "base", "name": "Estado Base / Armadura Estándar", "stats": "Poder base" },
    { "id": "fase-1", "name": "Nombre Forma 1 (ej: Gear 2 / Shikai / SSJ1)", "stats": "Stats y multiplicador" },
    { "id": "fase-2", "name": "Nombre Forma 2 (ej: Gear 3 / Bankai / SSJ2)", "stats": "Stats y multiplicador" }
  ],
  "feats": ["Hazaña destacada 1", "Hazaña destacada 2"],
  "psychology": "Psicología Tripartita: Lo que busca, lo que teme. Microgestos al mentir/sufrir dolor.",
  "weaknesses": "Debilidades físicas y psíquicas, condiciones para ser derrotado.",
  "equipment": "Armamento clave"
}\`;`;

  content = content.replace(originalBlock, newPromptBlock);
  fs.writeFileSync('Z:/apex-powerscaling-engine/server.cjs', content, 'utf-8');
  console.log('Prompt successfully updated to be universal for all fiction.');
} else {
  console.log('Error finding prompt block.');
}
