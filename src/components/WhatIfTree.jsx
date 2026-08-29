import React from 'react';
import { GitBranch, AlertOctagon, Globe, Skull, CheckCircle2, XCircle } from 'lucide-react';

export default function WhatIfTree({ modifiers, setModifiers }) {
  const isEnabled = modifiers?.butterflyEffect ?? true;

  const toggleEffect = () => {
    if (!setModifiers) return;
    setModifiers(prev => ({
      ...prev,
      butterflyEffect: !isEnabled
    }));
  };

  return (
    <div className={`rounded-2xl glass-panel p-5 border transition-all duration-300 shadow-xl space-y-4 ${
      isEnabled 
        ? 'border-purple-600/50 bg-gradient-to-br from-purple-950/20 to-slate-900/50 shadow-[0_0_25px_rgba(168,85,247,0.15)]' 
        : 'border-slate-800 bg-slate-950/40 opacity-70'
    }`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2.5">
          <div className={`p-2 rounded-xl border ${
            isEnabled 
              ? 'bg-purple-600/30 text-purple-300 border-purple-500/50 shadow-[0_0_12px_rgba(168,85,247,0.4)]' 
              : 'bg-slate-800 text-slate-500 border-slate-700'
          }`}>
            <GitBranch className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
                Efecto Mariposa & Consecuencias Narrativas
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-950/80 text-purple-300 border border-purple-700/50">
                Modo What-If
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono">
              Genera secuelas médicas, vacío de poder geopolítico y líneas temporales divergentes al final del combate.
            </p>
          </div>
        </div>

        {/* Toggle Button */}
        <button
          onClick={toggleEffect}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition cursor-pointer shrink-0 border ${
            isEnabled
              ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white border-purple-400/60 shadow-[0_0_15px_rgba(168,85,247,0.4)]'
              : 'bg-slate-900 hover:bg-slate-800 text-slate-400 border-slate-800'
          }`}
        >
          {isEnabled ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-purple-200" />
              <span>ACTIVADO (ON)</span>
            </>
          ) : (
            <>
              <XCircle className="w-4 h-4 text-slate-500" />
              <span>DESACTIVADO (OFF)</span>
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
        <div className={`p-3.5 rounded-xl border transition-all ${
          isEnabled 
            ? 'bg-purple-950/30 border-purple-800/50 text-slate-200 shadow-sm' 
            : 'bg-slate-900/40 border-slate-800/60 text-slate-500'
        }`}>
          <div className="flex items-center gap-1.5 text-purple-300 font-bold mb-1.5">
            <Skull className="w-4 h-4 text-red-400" />
            <span>1. Daño Permanente</span>
          </div>
          <p className="text-[11.5px] leading-relaxed">
            Fracturas críticas, pérdida de extremidades o trauma cerebral que alteran para siempre el estilo de combate de los implicados.
          </p>
        </div>

        <div className={`p-3.5 rounded-xl border transition-all ${
          isEnabled 
            ? 'bg-purple-950/30 border-purple-800/50 text-slate-200 shadow-sm' 
            : 'bg-slate-900/40 border-slate-800/60 text-slate-500'
        }`}>
          <div className="flex items-center gap-1.5 text-purple-300 font-bold mb-1.5">
            <Globe className="w-4 h-4 text-cyan-400" />
            <span>2. Efectos Geopolíticos</span>
          </div>
          <p className="text-[11.5px] leading-relaxed">
            El vacío de poder altera alianzas, despierta facciones dormidas y cambia el equilibrio de fuerzas del universo.
          </p>
        </div>

        <div className={`p-3.5 rounded-xl border transition-all ${
          isEnabled 
            ? 'bg-purple-950/30 border-purple-800/50 text-slate-200 shadow-sm' 
            : 'bg-slate-900/40 border-slate-800/60 text-slate-500'
        }`}>
          <div className="flex items-center gap-1.5 text-purple-300 font-bold mb-1.5">
            <AlertOctagon className="w-4 h-4 text-amber-400" />
            <span>3. Ramas Alternativas</span>
          </div>
          <p className="text-[11.5px] leading-relaxed">
            Punto de divergencia: qué habría ocurrido si un contendiente tomaba una decisión táctica diferente en un momento clave.
          </p>
        </div>
      </div>
    </div>
  );
}
