// recalcRoster.js
// Este script crea una copia de seguridad de characters.js y recalcula apexKi y demás estadísticas usando calcPower.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { calcPower } from './calcPower.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const charactersPath = path.resolve(__dirname, '../data/characters.js');
const backupPath = charactersPath + '.backup_' + Date.now();

console.log('Creando copia de seguridad en', backupPath);
fs.copyFileSync(charactersPath, backupPath);

// Cargar los personajes (ESM)
import { INITIAL_CHARACTERS } from '../data/characters.js';

const updated = INITIAL_CHARACTERS.map(calcPower);

const output = `export const INITIAL_CHARACTERS = ${JSON.stringify(updated, null, 2)};`;
fs.writeFileSync(charactersPath, output);
console.log('Recalculación completada y archivo sobrescrito.');
