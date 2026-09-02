// src/scripts/checkAllLucideImports.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '../../');
const srcDir = path.join(projectRoot, 'src');

// Get all exported keys from installed lucide-react
async function getLucideExports() {
  const mod = await import('lucide-react');
  return new Set(Object.keys(mod));
}

function getAllFiles(dir, exts = ['.jsx', '.js', '.tsx', '.ts'], res = []) {
  const list = fs.readdirSync(dir);
  for (const f of list) {
    const full = path.join(dir, f);
    const st = fs.statSync(full);
    if (st.isDirectory()) {
      getAllFiles(full, exts, res);
    } else if (exts.includes(path.extname(f))) {
      res.push(full);
    }
  }
  return res;
}

async function main() {
  const charFile = path.join(projectRoot, 'src/data/characters.js');
  const appFile = path.join(projectRoot, 'src/App.jsx');
  let charContent = fs.readFileSync(charFile, 'utf8');
  let appContent = fs.readFileSync(appFile, 'utf8');

  let fixed = 0;

  // 1. Configurar las formas de Cell (Saga Androides) con sus Tiers y Scouter Ki exactos:
  // - Larval: Tier 7-B (~800 unidades)
  // - Imperfecto: Tier 4-C (~390 Millones)
  // - Semi-Perfecto: Tier 4-C (~940 Millones)
  // - Perfecto: Tier 4-B (~3.4 Mil Millones)
  // - Super Perfecto: Tier 4-B (~5.5 Mil Millones)
  const cellFormsDef = `"forms": [
      {
        "id": "cell-larval",
        "name": "Cell (Forma Larval / Incubación)",
        "stats": "Nivel Ciudad++ (Tier 7-B). Embrión en crisálida subterránea antes de emerger como bioandroide insectoide.",
        "apexKiMultiplier": 1,
        "sourceKi": 800,
        "tier": "7-B",
        "tierExact": "7-B",
        "multiplier": "1x"
      },
      {
        "id": "cell-imperfecto",
        "name": "Cell Imperfecto",
        "tier": "4-C",
        "tierExact": "4-C",
        "sourceKi": 390000000,
        "stats": "Nivel Estrella Enana (Tier 4-C). Aspecto de insecto reptiliano, usa su cola para absorber biomasa y rivalizar con Piccolo y A-17."
      },
      {
        "id": "cell-semi",
        "name": "Cell Semi-Perfecto",
        "tier": "High 4-C",
        "tierExact": "High 4-C",
        "sourceKi": 940000000,
        "stats": "Nivel Estrella Enana Alta (Tier High 4-C). Tras absorber al Androide 17. Gran masa muscular y potencia superior a A-16."
      },
      {
        "id": "cell-perfecto",
        "name": "Cell Perfecto",
        "tier": "4-B",
        "tierExact": "4-B",
        "sourceKi": 3400000000,
        "stats": "Nivel Sistema Solar Menor (Tier 4-B). Tras absorber a 18. Cuerpo pulido e intocable para Vegeta y Trunks SSJ Dai Ni/San Dankai."
      },
      {
        "id": "cell-super-perfecto",
        "name": "Cell Super Perfecto",
        "tier": "4-B",
        "tierExact": "4-B",
        "sourceKi": 5500000000,
        "stats": "Nivel Sistema Solar (Tier 4-B). Zenkai tras sobrevivir a su autodestrucción. Aura dorada con relámpagos y Kamehameha Solar."
      }
    ]`;

  const oldCellFormsRegex = /"forms":\s*\[\s*\{\s*"id":\s*"cell-larval"[\s\S]*?"id":\s*"cell-super-perfecto"[\s\S]*?\}\s*\]/;
  if (oldCellFormsRegex.test(charContent)) {
    charContent = charContent.replace(oldCellFormsRegex, cellFormsDef);
    fixed++;
    console.log('✓ Formas de Cell actualizadas con Tiers y Scouter Ki canónicos individuales.');
  }

  // 2. Corregir Cell DBM (cell-dbm-u17) base tier de 7-A a 4-B
  const oldCellDbm = '\"id\": \"cell-dbm-u17\",\n    \"name\": \"Cell (Multiverse — U17)\",\n    \"saga\": \"Torneo del Multiverso / Universo 17\",\n    \"version\": \"Vencedor de los Cell Games de su Universo (Evolucionado)\",\n    \"tier\": \"3-C\",\n    \"ap\": \"En el Universo 17, Cell derrotó a Gohan en los Cell Games y exterminó a todos los Guerreros Z. Con décadas adicionales de evolución biológica y regeneraciones Zenkai planificadas, su poder supera con creces al Cell de la línea canónica.\",\n    \"range\": \"Galáctico.\",\n    \"speed\": {\n      \"combat\": \"MFTL+.\",\n      \"reaction\": \"MFTL+.\",\n      \"travel\": \"MFTL+.\",\n      \"attack\": \"MFTL+.\"\n    },\n    \"strength\": \"Clase Galáctica.. Levantamiento: Incalculable.\",\n    \"durability\": \"Nivel Galáctico. Núcleo celular móvil capaz de regenerarse instantáneamente de fragmentos atómicos.\",\n    \"stamina\": \"Infinita (reactores bio-mecánicos perfeccionados).\",\n    \"battleIQ\": \"Genio táctico absoluto. Conoce cada técnica de Goku, Vegeta y Piccolo con precisión atómica.\",\n    \"haxTags\": [\n      \"Regeneración Celular Atómica\",\n      \"Zenkai Infinito\",\n      \"Engendro de Cell Juniors Galácticos\",\n      \"Mimetismo Instantáneo\"\n    ],\n    \"arsenal\": {\n      \"basicAttacks\": [\n        {\n          \"name\": \"Golpe Sísmico\",\n          \"desc\": \"Impacto concentrado con precisión celular.\",\n          \"cost\": 5\n        }\n      ],\n      \"superAttacks\": [\n        {\n          \"name\": \"Kamehameha Multi-Universal\",\n          \"desc\": \"Haz de Ki con potencia galáctica.\",\n          \"cost\": \"30% Ki\"\n        }\n      ],\n      \"ultimateAttacks\": [\n        {\n          \"name\": \"Obliteración Génesis\",\n          \"desc\": \"Explosión omnidireccional capaz de destruir un sistema estelar entero.\",\n          \"cost\": \"70% Ki\"\n        }\n      ],\n      \"passives\": [\n        {\n          \"name\": \"Memoria Genética Perfecta\",\n          \"desc\": \"Se adapta inmediatamente a cualquier estilo de combate tras verlo una vez.\",\n          \"cost\": \"Pasivo\"\n        }\n      ],\n      \"specialMechanics\": [\n        {\n          \"name\": \"Núcleo Móvil\",\n          \"desc\": \"Puede desplazar su núcleo vital por todo su cuerpo para evitar golpes fatales.\"\n        }\n      ],\n      \"weaknesses\": [\n        {\n          \"name\": \"Arrogancia Evolutiva\",\n          \"desc\": \"Permite que los rivales muestren su máximo poder por curiosidad científica.\"\n        }\n      ]\n    },\n    \"forms\": [\n      {\n        \"id\": \"base\",\n        \"name\": \"Cell Perfecto (Estado Base DBM)\",\n        \"tier\": \"7-A\",';

  if (charContent.includes('\"id\": \"cell-dbm-u17\"')) {
    charContent = charContent.replace(
      /("id":\s*"cell-dbm-u17"[\s\S]*?"id":\s*"base"[\s\S]*?"tier":\s*)"7-A"/,
      '$1"4-B"'
    );
    fixed++;
    console.log('✓ Corregido Tier de forma base de Cell DBM de 7-A a 4-B.');
  }

  // 3. Subir versión de ROSTER_VERSION en App.jsx para forzar al navegador a desechar el localStorage viejo y cargar los personajes corregidos automáticamente
  const oldVersionRegex = /const ROSTER_VERSION = '([^']+)';/;
  const newVersion = `v8.0_cell_and_dbs_tiers_verified_${Date.now()}`;
  appContent = appContent.replace(oldVersionRegex, `const ROSTER_VERSION = '${newVersion}';`);
  console.log(`✓ ROSTER_VERSION actualizado a ${newVersion} en App.jsx.`);

  fs.writeFileSync(charFile, charContent, 'utf8');
  fs.writeFileSync(appFile, appContent, 'utf8');
  console.log('🎉 Archivos characters.js y App.jsx sincronizados.');
}

main().catch(console.error);
