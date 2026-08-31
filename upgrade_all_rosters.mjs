import fs from 'fs';

const files = [
  './src/data/characters.js',
  './src/data/expandedRosterCharacters.js',
  './src/data/megaRosterCharacters.js',
  './src/data/ultraRosterCharacters.js'
];

for (const f of files) {
  let text = fs.readFileSync(f, 'utf-8');

  // Specific targeted enhancements
  // Spider-Man
  text = text.replace(
    /\"name\":\s*\"Spider-Man Clásico\"/g,
    '\"name\": \"Spider-Man (Estado Base / Peter Parker)\"'
  );

  // Flash
  text = text.replace(
    /\"name\":\s*\"The Flash\"/g,
    '\"name\": \"The Flash (Estado Base / Barry Allen)\"'
  );

  // Darkseid
  text = text.replace(
    /\"name\":\s*\"Avatar de Darkseid \(Forma Física\)\"/g,
    '\"name\": \"Darkseid (Estado Base / Avatar Físico)\"'
  );

  // Cell New Hope
  text = text.replace(
    /\"name\":\s*\"Cell Perfecto \(Resucitado\)\"/g,
    '\"name\": \"Cell (Estado Base / Forma Perfecta Resucitada)\"'
  );

  // Gast Carcolh
  text = text.replace(
    /\"name\":\s*\"Gast Carcolh \(El Gran Namekiano\)\"/g,
    '\"name\": \"Gast Carcolh (Estado Base / Fusión Namekiana)\"'
  );

  // Hyper Buu / Zen Buu
  text = text.replace(
    /\"name\":\s*\"Zen Buu \(Forma Original U4\)\"/g,
    '\"name\": \"Zen Buu (Estado Base / Super Buu Original U4)\"'
  );

  // Cell U17
  text = text.replace(
    /\"name\":\s*\"Cell \(Perfección Vencedora U17\)\"/g,
    '\"name\": \"Cell U17 (Estado Base / Perfección Vencedora)\"'
  );

  // Raichi
  text = text.replace(
    /\"name\":\s*\"Dr\. Raichi\"/g,
    '\"name\": \"Dr. Raichi (Estado Base / Generador de Odio)\"'
  );

  // Baby Vegeta Brokoly
  text = text.replace(
    /\"forms\":\s*\[\s*\{\s*\"id\":\s*\"baby-god\"[^\}]+}\s*\]/g,
    '\"forms\": [\n      {\n        \"id\": \"baby-base\",\n        \"name\": \"Baby (Estado Base / Parásito Tsufuru)\",\n        \"stats\": \"Nivel Humano / Infección celular.\"\n      },\n      {\n        \"id\": \"baby-vegeta-base\",\n        \"name\": \"Super Baby Vegeta (Estado Base)\",\n        \"stats\": \"Nivel Galáctico.\"\n      },\n      {\n        \"id\": \"baby-god\",\n        \"name\": \"Baby God (Super Saiyan Dios Tsufuru)\",\n        \"stats\": \"Nivel Universal / Ki Divino Corrupto.\"\n      }\n    ]'
  );

  // Amond Kakumei
  text = text.replace(
    /\"name\":\s*\"Amond \(Forma Sellada\)\"/g,
    '\"name\": \"Amond (Estado Base / Forma Sellada)\"'
  );

  // Vegeta DB After
  text = text.replace(
    /\"name\":\s*\"Vegeta Base \(DB After\)\"/g,
    '\"name\": \"Vegeta (Estado Base DB After)\"'
  );

  // Gotenks DB After
  text = text.replace(
    /\"forms\":\s*\[\s*\{\s*\"id\":\s*\"gotenks-base\",\s*\"name\":\s*\"Gotenks Adulto \(Estado Base\)\"[^\}]+},\s*\{\s*\"id\":\s*\"gotenks-ssj1\"[^\}]+},\s*\{\s*\"id\":\s*\"gotenks-ssj3\"/g,
    '\"forms\": [\n      {\n        \"id\": \"gotenks-base\",\n        \"name\": \"Gotenks Adulto (Estado Base)\",\n        \"stats\": \"Nivel Galáctico.\"\n      },\n      {\n        \"id\": \"gotenks-ssj1\",\n        \"name\": \"Gotenks Adulto (Super Saiyan 1)\",\n        \"stats\": \"Nivel Galáctico Superior.\"\n      },\n      {\n        \"id\": \"gotenks-ssj2\",\n        \"name\": \"Gotenks Adulto (Super Saiyan 2)\",\n        \"stats\": \"Nivel Multi-Galáctico.\"\n      },\n      {\n        \"id\": \"gotenks-ssj3\"'
  );

  // Toppo
  text = text.replace(
    /\"name\":\s*\"Líder de la Justicia\"/g,
    '\"name\": \"Toppo (Estado Base / Líder de la Justicia)\"'
  );

  // Frost
  text = text.replace(
    /\"name\":\s*\"Primera Forma\"/g,
    '\"name\": \"Frost (Primera Forma / Estado Base)\"'
  );

  // Cosmic Garou
  text = text.replace(
    /\"name\":\s*\"Garou Monstruo Despertado \(Pre-Cósmico\)\"/g,
    '\"name\": \"Garou (Estado Base / Cazador de Héroes)\",\n        \"stats\": \"Nivel Ciudad a Multi-Estructura.\"\n      },\n      {\n        \"id\": \"garou-monstruo-pre-cosmico\",\n        \"name\": \"Garou Monstruo Despertado (Pre-Cósmico)\"'
  );

  // Sukuna
  text = text.replace(
    /\"name\":\s*\"Sukuna 20 Dedos \(Cuerpo de Megumi\)\"/g,
    '\"name\": \"Ryomen Sukuna (Estado Base / Yuji Itadori)\",\n        \"stats\": \"Nivel Ciudad.\"\n      },\n      {\n        \"id\": \"sukuna-megumi-20f\",\n        \"name\": \"Sukuna 20 Dedos (Cuerpo de Megumi / Diez Sombras)\"'
  );

  // All Might
  text = text.replace(
    /\"name\":\s*\"Forma Muscular Herida \(Post-Lesión \/ 3 Horas\)\"/g,
    '\"name\": \"All Might (Estado Base / Toshinori Yagi)\",\n        \"stats\": \"Humano Ordinario / Estado debil.\"\n      },\n      {\n        \"id\": \"all-might-herida\",\n        \"name\": \"Forma Muscular Herida (Post-Lesión / 3 Horas)\"'
  );

  // Muzan
  text = text.replace(
    /\"name\":\s*\"Forma Humana \/ Elegante \(Tsukihiko\)\"/g,
    '\"name\": \"Muzan Kibutsuji (Estado Base / Tsukihiko)\"'
  );

  // Zen Buu Multiverse U4
  text = text.replace(
    /\"name\":\s*\"Forma Zen Buu Universal \(Omnipresente\)\"/g,
    '\"name\": \"Zen Buu (Estado Base / Super Buu U4)\",\n        \"stats\": \"Nivel Galáctico Superior.\"\n      },\n      {\n        \"id\": \"zen-buu-universal\",\n        \"name\": \"Forma Zen Buu Universal (Omnipresente / Absorción Cósmica)\"'
  );

  // XXI
  text = text.replace(
    /\"name\":\s*\"Forma de Anciano Encapuchado \/ Humo Espectral\"/g,
    '\"name\": \"XXI (Estado Base / Anciano Sabio Encapuchado)\",\n        \"stats\": \"Nivel Cósmico / Magia Antigua.\"\n      },\n      {\n        \"id\": \"xxi-espectral\",\n        \"name\": \"XXI (Forma Verdadera / Humo Espectral Multidimensional)\"'
  );

  // Rey Cold
  text = text.replace(
    /\"name\":\s*\"Forma Restringida \(Rey Cold con Cuernos\)\"/g,
    '\"name\": \"Rey Cold (Estado Base / Forma Restringida con Cuernos)\"'
  );

  // Eleim
  text = text.replace(
    /\"name\":\s*\"Eleim con Armadura Ultra Heloita\"/g,
    '\"name\": \"Eleim (Estado Base Heloita)\",\n        \"stats\": \"Nivel Humano Atlético / Estratega.\"\n      },\n      {\n        \"id\": \"eleim-ultra\",\n        \"name\": \"Eleim con Armadura Ultra Heloita\"'
  );

  // Rey Gomah
  text = text.replace(
    /\"name\":\s*\"Rey Gomah \(Forma de Soberano con Cetro\)\"/g,
    '\"name\": \"Rey Gomah (Estado Base / Soberano con Cetro)\"'
  );

  // Tamagami 1, 2, 3
  text = text.replace(
    /\"name\":\s*\"Tamagami #1 \(Forma de Combate\)\"/g,
    '\"name\": \"Tamagami #1 (Modo Reposo / Guardián de Piedra)\",\n        \"stats\": \"Nivel Estructura / Durabilidad Mística.\"\n      },\n      {\n        \"id\": \"tamagami-1-combate\",\n        \"name\": \"Tamagami #1 (Forma de Combate / Espada de Fuego)\"'
  );
  text = text.replace(
    /\"name\":\s*\"Tamagami #2 \(Forma de Guardia\)\"/g,
    '\"name\": \"Tamagami #2 (Modo Reposo / Centinela)\",\n        \"stats\": \"Nivel Estructura / Escudo Místico.\"\n      },\n      {\n        \"id\": \"tamagami-2-guardia\",\n        \"name\": \"Tamagami #2 (Forma de Guardia / Escudo y Lanza)\"'
  );
  text = text.replace(
    /\"name\":\s*\"Tamagami #3 Supremo\"/g,
    '\"name\": \"Tamagami #3 (Modo Reposo / Titán Guardián)\",\n        \"stats\": \"Nivel Colosal / Durabilidad Multiversal.\"\n      },\n      {\n        \"id\": \"tamagami-3-supremo\",\n        \"name\": \"Tamagami #3 Supremo (Despertar del Guardián Supremo)\"'
  );

  // Majin Kuu
  text = text.replace(
    /\"name\":\s*\"Majin Kuu \(Forma Líquida\)\"/g,
    '\"name\": \"Majin Kuu (Estado Base / Masa Mágica)\",\n        \"stats\": \"Nivel Galáctico / Masa Gelatinosa.\"\n      },\n      {\n        \"id\": \"majin-kuu-liquido\",\n        \"name\": \"Majin Kuu (Forma Líquida de Asalto)\"'
  );

  // Glorio
  text = text.replace(
    /\"name\":\s*\"Glorio \(Pistolero del Reino Demoníaco\)\"/g,
    '\"name\": \"Glorio (Estado Base / Navegante del Reino Demoníaco)\",\n        \"stats\": \"Nivel Edificio a Ciudad.\"\n      },\n      {\n        \"id\": \"glorio-combate\",\n        \"name\": \"Glorio (Modo Asesino de Élite / Magia Demoníaca)\"'
  );

  // Neva
  text = text.replace(
    /\"name\":\s*\"Neva \(Anciano Sabio Namekiano\)\"/g,
    '\"name\": \"Neva (Estado Base / Anciano Sabio Namekiano)\",\n        \"stats\": \"Nivel Sabio Ancestral.\"\n      },\n      {\n        \"id\": \"neva-magia\",\n        \"name\": \"Neva (Magia de Creación de Esferas / Poder Místico)\"'
  );

  // Princesa Panzy
  text = text.replace(
    /\"name\":\s*\"Princesa Panzy \(Pirata Aérea\)\"/g,
    '\"name\": \"Princesa Panzy (Estado Base / Soberana Infantil)\",\n        \"stats\": \"Nivel Humano Mejorado / Piloto de Élite.\"\n      },\n      {\n        \"id\": \"panzy-combate\",\n        \"name\": \"Princesa Panzy (Armamento de Asalto Mecánico)\"'
  );

  fs.writeFileSync(f, text, 'utf-8');
  console.log('Saved updates to:', f);
}
