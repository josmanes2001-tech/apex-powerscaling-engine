const fs = require('fs');
const file = 'D:/Vault Obsidian/apex-powerscaling-engine/src/components/SimulationViewer.jsx';
let c = fs.readFileSync(file, 'utf8');

c = c.replace('<button\n            onClick={onStartSimulation}\n            disabled={isSimulating}', '<button\n            onClick={() => onStartSimulation({ fresh: true })}\n            disabled={isSimulating}');

c = c.replace('<span>EJECUTAR SIMULACI\u00D3N</span>', '<span>NUEVA SIMULACI\u00D3N</span>\n              </>\n            )}\n          </button>\n\n          <button\n            onClick={() => onStartSimulation({ seed: \'same\' })}\n            disabled={isSimulating}\n            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono font-bold text-xs border border-slate-700 shadow-lg transition cursor-pointer disabled:opacity-50"\n          >\n            <RefreshCw className={`w-4 h-4 ${isSimulating ? \'animate-spin\' : \'\'} text-slate-300`} />\n            <span>RE-SIMULAR (MISMO SEED)</span>');

fs.writeFileSync(file, c);
console.log("Replaced SimulationViewer buttons");
