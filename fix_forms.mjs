import fs from 'fs';

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Toppo
  content = content.replace(
    /\"id\":\s*\"l-der-de-la-justicia\",\s*\"name\":\s*\"Líder de la Justicia\"/,
    '\"id\": \"toppo-base\",\n        \"name\": \"Toppo (Estado Base / Líder de la Justicia)\",\n        \"stats\": \"Nivel Universal Menor / Nivel Dios. Combate marcial de sumisión y juicio.\"\n      },\n      {\n        \"id\": \"toppo-lider\",\n        \"name\": \"Toppo (Líder de las Tropas del Orgullo)\"'
  );

  // Frost
  content = content.replace(
    /\"id\":\s*\"primera-forma\",\s*\"name\":\s*\"Primera Forma\"/,
    '\"id\": \"frost-base\",\n        \"name\": \"Frost (Primera Forma / Estado Base)\"'
  );

  // Garou
  content = content.replace(
    /\"forms\":\s*\[\s*\{\s*\"id\":\s*\"garou-monstruo-pre-cosmico\"/,
    '\"forms\": [\n      {\n        \"id\": \"garou-humano-base\",\n        \"name\": \"Garou (Humano / Cazador de Héroes Base)\",\n        \"stats\": \"Nivel Ciudad a Multi-Estructura. Puño de Agua Rompedor de Rocas.\"\n      },\n      {\n        \"id\": \"garou-monstruo-pre-cosmico\"'
  );

  // Sukuna
  content = content.replace(
    /\"forms\":\s*\[\s*\{\s*\"id\":\s*\"sukuna-megumi-20f\"/,
    '\"forms\": [\n      {\n        \"id\": \"sukuna-base-yuji\",\n        \"name\": \"Ryomen Sukuna (Estado Base / Recipiente Yuji Itadori)\",\n        \"stats\": \"Nivel Ciudad. Dominio territorial letal y reflejos sobrehumanos.\"\n      },\n      {\n        \"id\": \"sukuna-megumi-20f\"'
  );

  // All Might
  content = content.replace(
    /\"forms\":\s*\[\s*\{\s*\"id\":\s*\"all-might-forma-herida\"/,
    '\"forms\": [\n      {\n        \"id\": \"all-might-base-toshinori\",\n        \"name\": \"All Might (Estado Base / Toshinori Yagi)\",\n        \"stats\": \"Humano Ordinario. Estado debilitado de conservación.\"\n      },\n      {\n        \"id\": \"all-might-forma-herida\"'
  );

  // Muzan
  content = content.replace(
    /\"forms\":\s*\[\s*\{\s*\"id\":\s*\"muzan-humano-elegante\",\s*\"name\":\s*\"Forma Humana \/ Elegante \(Tsukihiko\)\"/,
    '\"forms\": [\n      {\n        \"id\": \"muzan-base-tsukihiko\",\n        \"name\": \"Muzan Kibutsuji (Estado Base / Forma Humana Tsukihiko)\"'
  );

  // Kakarotto DB After (Add SSJ1 and SSJ2)
  content = content.replace(
    /\"id\":\s*\"kakarotto-base\",\s*\"name\":\s*\"Saiyan Base\"[^\}]+},\s*\{\s*\"id\":\s*\"kakarotto-ssj3\"/,
    '\"id\": \"kakarotto-base\",\n        \"name\": \"Kakarotto (Estado Base Salvaje)\",\n        \"stats\": \"Nivel Galáctico Menor. Poder saiyan desatado sin golpe en la cabeza.\"\n      },\n      {\n        \"id\": \"kakarotto-ssj1\",\n        \"name\": \"Kakarotto (Super Saiyan 1)\",\n        \"stats\": \"Nivel Galáctico Medio.\"\n      },\n      {\n        \"id\": \"kakarotto-ssj2\",\n        \"name\": \"Kakarotto (Super Saiyan 2)\",\n        \"stats\": \"Nivel Galáctico Superior.\"\n      },\n      {\n        \"id\": \"kakarotto-ssj3\"'
  );

  // Gotenks Adulto DBM U18 (Add SSJ2)
  content = content.replace(
    /\"id\":\s*\"gotenks-u18-ssj1\",\s*\"name\":\s*\"Super Saiyan 1 Adulto\"[^\}]+},\s*\{\s*\"id\":\s*\"gotenks-u18-ssj3\"/,
    '\"id\": \"gotenks-u18-ssj1\",\n        \"name\": \"Gotenks Adulto (Super Saiyan 1)\",\n        \"stats\": \"Nivel Galáctico Superior.\"\n      },\n      {\n        \"id\": \"gotenks-u18-ssj2\",\n        \"name\": \"Gotenks Adulto (Super Saiyan 2)\",\n        \"stats\": \"Nivel Multi-Galáctico. Rayos dorados intensos.\"\n      },\n      {\n        \"id\": \"gotenks-u18-ssj3\"'
  );

  // Rey Cold DBM U8
  content = content.replace(
    /\"id\":\s*\"rey-cold-restringida\",\s*\"name\":\s*\"Forma Restringida \(Rey Cold con Cuernos\)\"/,
    '\"id\": \"rey-cold-base\",\n        \"name\": \"Rey Cold (Estado Base / Forma Restringida con Cuernos)\"'
  );

  // XXI DBM U5
  content = content.replace(
    /\"id\":\s*\"xxi-anciano\",\s*\"name\":\s*\"Forma de Anciano Encapuchado \/ Humo Espectral\"/,
    '\"id\": \"xxi-base\",\n        \"name\": \"XXI (Estado Base / Anciano Sabio Encapuchado)\",\n        \"stats\": \"Nivel Desconocido / Multi-Universal. Conoce la magia de sellado primordial.\"\n      },\n      {\n        \"id\": \"xxi-humo\",\n        \"name\": \"XXI (Forma Verdadera / Humo Espectral Multidimensional)\"'
  );

  // Eleim DBM U19
  content = content.replace(
    /\"forms\":\s*\[\s*\{\s*\"id\":\s*\"eleim-ultra\"/,
    '\"forms\": [\n      {\n        \"id\": \"eleim-base\",\n        \"name\": \"Eleim (Estado Base Heloita)\",\n        \"stats\": \"Nivel Humano Atlético / Estratega Militar.\"\n      },\n      {\n        \"id\": \"eleim-ultra\"'
  );

  // Zen Buu DBM U4
  content = content.replace(
    /\"forms\":\s*\[\s*\{\s*\"id\":\s*\"zen-buu-universal\"/,
    '\"forms\": [\n      {\n        \"id\": \"zen-buu-base\",\n        \"name\": \"Zen Buu (Estado Base / Super Buu Original U4)\",\n        \"stats\": \"Nivel Galáctico Superior. Fisiología de chicle maleable.\"\n      },\n      {\n        \"id\": \"zen-buu-universal\"'
  );

  // Rey Gomah Daima
  content = content.replace(
    /\"id\":\s*\"rey-gomah-soberano\",\s*\"name\":\s*\"Rey Gomah \(Forma de Soberano con Cetro\)\"/,
    '\"id\": \"rey-gomah-base\",\n        \"name\": \"Rey Gomah (Estado Base / Soberano con Cetro)\"'
  );

  // Tamagami 1, 2, 3
  content = content.replace(
    /\"forms\":\s*\[\s*\{\s*\"id\":\s*\"tamagami-1-combate\"/,
    '\"forms\": [\n      {\n        \"id\": \"tamagami-1-base\",\n        \"name\": \"Tamagami #1 (Modo Reposo / Guardián de Piedra)\",\n        \"stats\": \"Nivel Estructura / Durabilidad Mística.\"\n      },\n      {\n        \"id\": \"tamagami-1-combate\"'
  );
  content = content.replace(
    /\"forms\":\s*\[\s*\{\s*\"id\":\s*\"tamagami-2-guardia\"/,
    '\"forms\": [\n      {\n        \"id\": \"tamagami-2-base\",\n        \"name\": \"Tamagami #2 (Modo Reposo / Centinela con Escudo)\",\n        \"stats\": \"Nivel Estructura / Escudo Místico Impenetrable.\"\n      },\n      {\n        \"id\": \"tamagami-2-guardia\"'
  );
  content = content.replace(
    /\"forms\":\s*\[\s*\{\s*\"id\":\s*\"tamagami-3-supremo\"/,
    '\"forms\": [\n      {\n        \"id\": \"tamagami-3-base\",\n        \"name\": \"Tamagami #3 (Modo Reposo / Titán Guardián)\",\n        \"stats\": \"Nivel Colosal / Durabilidad Multiversal Daima.\"\n      },\n      {\n        \"id\": \"tamagami-3-supremo\"'
  );

  // Majin Kuu
  content = content.replace(
    /\"forms\":\s*\[\s*\{\s*\"id\":\s*\"majin-kuu-liquido\"/,
    '\"forms\": [\n      {\n        \"id\": \"majin-kuu-base\",\n        \"name\": \"Majin Kuu (Estado Base / Masa Mágica Demoníaca)\",\n        \"stats\": \"Nivel Galáctico. Biología gelatinosa autorregenerativa.\"\n      },\n      {\n        \"id\": \"majin-kuu-liquido\"'
  );

  // Glorio
  content = content.replace(
    /\"forms\":\s*\[\s*\{\s*\"id\":\s*\"glorio-pistolero\"/,
    '\"forms\": [\n      {\n        \"id\": \"glorio-base\",\n        \"name\": \"Glorio (Estado Base / Navegante del Reino Demoníaco)\",\n        \"stats\": \"Nivel Edificio a Ciudad. Puntería milimétrica.\"\n      },\n      {\n        \"id\": \"glorio-pistolero\"'
  );

  // Neva
  content = content.replace(
    /\"forms\":\s*\[\s*\{\s*\"id\":\s*\"neva-anciano\"/,
    '\"forms\": [\n      {\n        \"id\": \"neva-base\",\n        \"name\": \"Neva (Estado Base / Anciano Namekiano Sabio)\",\n        \"stats\": \"Nivel Sabio Ancestral. Manipulación de la magia de las Dragon Balls.\"\n      },\n      {\n        \"id\": \"neva-anciano\"'
  );

  // Princesa Panzy
  content = content.replace(
    /\"forms\":\s*\[\s*\{\s*\"id\":\s*\"panzy-pirata\"/,
    '\"forms\": [\n      {\n        \"id\": \"panzy-base\",\n        \"name\": \"Princesa Panzy (Estado Base / Soberana Infantil)\",\n        \"stats\": \"Nivel Humano Mejorado / Piloto de Élite.\"\n      },\n      {\n        \"id\": \"panzy-pirata\"'
  );

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log('Successfully updated:', filePath);
}

fixFile('./src/data/characters.js');
fixFile('./src/data/expandedRosterCharacters.js');
fixFile('./src/data/megaRosterCharacters.js');
fixFile('./src/data/ultraRosterCharacters.js');
