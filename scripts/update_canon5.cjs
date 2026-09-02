const fs = require('fs');

let content = fs.readFileSync('Z:/apex-powerscaling-engine/server.cjs', 'utf-8');

const startIndex = content.indexOf('const prompt = `Act');
const endIndex = content.indexOf('}`;', startIndex);

if (startIndex !== -1 && endIndex !== -1) {
  const originalBlock = content.substring(startIndex, endIndex + 3);

  const newPromptBlock = `const prompt = \`Actúa como el mayor experto mundial en Power Scaling (VS Battles Wiki) y rol narrativo avanzado. 
Genera la ficha técnica completa y rigurosa para el personaje "\${name}". 

[REGLAS CRÍTICAS PARA ARSENAL, FORMAS Y HABILIDADES]:
- Eres ESTRICTO con el canon oficial de CUALQUIER franquicia.
- Incluye TODAS las transformaciones cronológicas en "forms".
- Desglosa su ARSENAL en:
  * basicAttacks: Golpes estándar o ráfagas menores.
  * superAttacks: Técnicas especiales características (ej: Kamehameha, Getsuga Tensho, Chidori).
  * ultimateAttacks: Ataques definitivos o finishers de máxima escala (ej: Genkidama, Hollow Purple, Final Flash).
  * passives: Habilidades pasivas continuas (ej: Zenkai, Regeneración, Intangibilidad, Adaptación).
  * actives: Técnicas de soporte o buffs (ej: Kaio-ken, Teletransportación, Ilusiones).

Debes devolver ÚNICAMENTE un objeto JSON válido (sin markdown) con esta estructura:
{
  "id": "nombre-slug",
  "name": "\${name}",
  "universe": "Franquicia de origen",
  "version": "Versión canónica (ej: Prime, Adulto, Super)",
  "tier": "Tier oficial VS Battles y Nivel de Poder",
  "ap": "Attack Potency / DC exacto anclado a feats",
  "range": "Rango de ataque efectivo (ej: Cuerpo a cuerpo estándar, Planetario)",
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
  "haxTags": ["Tag 1", "Tag 2"],
  "subEntity": {
    "name": "Nombre Stand / Invocación (si aplica)",
    "type": "Stand / Invocación / Simbionte",
    "stats": "Poder y reglas"
  },
  "arsenal": {
    "basicAttacks": "Golpes básicos y ráfagas menores",
    "superAttacks": [
      { "name": "Super Ataque", "desc": "Descripción precisa y alcance", "cost": "Coste de energía" }
    ],
    "ultimateAttacks": [
      { "name": "Ataque Definitivo (Finisher)", "desc": "Efecto destructivo masivo / Borrado", "cost": "Desgaste de stamina" }
    ],
    "passives": [
      { "name": "Habilidad Pasiva", "desc": "Efecto continuo (ej: Zenkai, Regeneración)" }
    ],
    "actives": [
      { "name": "Habilidad Activa", "desc": "Efecto y duración (ej: Kaio-ken)" }
    ]
  },
  "abilities": [
    { "name": "Nombre", "desc": "Descripción precisa", "limit": "Coste" }
  ],
  "forms": [
    { "id": "base", "name": "Estado Base", "stats": "Poder base" },
    { "id": "fase-1", "name": "Nombre Forma 1", "stats": "Stats y multiplicador" }
  ],
  "feats": ["Hazaña destacada 1", "Hazaña destacada 2"],
  "psychology": "Psicología Tripartita: Lo que busca, lo que teme. Microgestos al mentir/sufrir dolor.",
  "weaknesses": "Debilidades físicas y psíquicas, condiciones para ser derrotado.",
  "equipment": "Armamento y reliquias clave"
}\`;`;

  content = content.replace(originalBlock, newPromptBlock);
  fs.writeFileSync('Z:/apex-powerscaling-engine/server.cjs', content, 'utf-8');
  console.log('Prompt successfully updated with Full Arsenal support.');
} else {
  console.log('Error finding prompt block.');
}
