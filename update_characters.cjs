const fs = require('fs');
let code = fs.readFileSync('Z:/apex-powerscaling-engine/src/data/characters.js', 'utf-8');

// Broly forms
code = code.replace(
  /forms:\s*\[\s*\{\s*id:\s*"base",\s*name:\s*"Forma Base Restringida",\s*stats:\s*"Poder contenido, collar roto."\s*\},[\s\S]*?\]/,
  `forms: [
      { id: "base", name: "Forma Base (Restringida/Mind Control)", stats: "Poder contenido por la diadema." },
      { id: "ssj-a", name: "Super Saiyan (Type A - Pelo Azul/Morado)", stats: "Transformación incompleta por restricción." },
      { id: "ssj-c", name: "Super Saiyan Legendario (LSSJ - Pelo Verde)", stats: "Poder ilimitado en constante aumento. Destrucción estelar." },
      { id: "ikari-lssj", name: "Fusión Ikari + LSSJ (What-If)", stats: "15 Mil Millones PL. Multiplicador Oozaru x10 sumado al LSSJ." }
    ]`
);

// Cell forms
code = code.replace(
  /forms:\s*\[\s*\{\s*id:\s*"ultra-perfect",\s*name:\s*"Forma Ultra Perfecta",\s*stats:\s*"8\.2 Mil Millones PL\. Poder total y células estabilizadas\."\s*\}\s*\]/,
  `forms: [
      { id: "imperfect", name: "Forma Imperfecta (1ra Forma)", stats: "Requiere absorción bio-orgánica para escalar poder." },
      { id: "semi-perfect", name: "Forma Semi-Perfecta (Androide 17)", stats: "Aumento masivo de masa muscular y poder." },
      { id: "perfect", name: "Forma Perfecta (Androide 18)", stats: "Estabilidad máxima. Multiplicadores inmensos." },
      { id: "super-perfect", name: "Forma Super Perfecta (Post-Zenkai)", stats: "Aura eléctrica. Equivalente a un SSJ2." },
      { id: "ultra-perfect", name: "Forma Ultra Perfecta (What-If)", stats: "8.2 Mil Millones PL. Evolución sin límites biológicos." }
    ]`
);

// Gojo forms
code = code.replace(
  /forms:\s*\[\s*\{\s*id:\s*"base",\s*name:\s*"Estado Base",\s*stats:\s*"Pelea fluida con Infinito activo\."\s*\},[\s\S]*?\]/,
  `forms: [
      { id: "student", name: "Estudiante (Pre-Toji)", stats: "Infinito manual, RCT incompleto." },
      { id: "awakened", name: "El Despertar (Post-Toji)", stats: "RCT automático, Infinito pasivo 24/7, Hollow Purple desbloqueado." },
      { id: "adult", name: "Hechicero Grado Especial (Adulto)", stats: "Poder estabilizado y máxima eficiencia de Energía Maldita." },
      { id: "shinjuku", name: "Modo Shinjuku Showdown (Vs Sukuna)", stats: "Black Flash activo, restauración de cerebro con RCT. Rendimiento 120%." },
      { id: "burnout", name: "Limitless Burnout (Post-Dominio)", stats: "Técnica Maldita apagada por sobrecarga, usa combate cuerpo a cuerpo y Simple Domain." }
    ]`
);

fs.writeFileSync('Z:/apex-powerscaling-engine/src/data/characters.js', code, 'utf-8');
console.log('Local characters forms updated to exhaustive standard.');
