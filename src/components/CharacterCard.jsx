import React, { useState } from 'react';
import { Shield, Zap, Eye, Crosshair, AlertTriangle, Target, Sparkles, Flame, ShieldAlert, Edit3, Trash2 } from 'lucide-react';

export default function CharacterCard({ character, role, onInspect, onEdit, onDelete, onSelectChange, allCharacters }) {
  const isSideA = role === 'Contendiente A';
  const [selectedFormId, setSelectedFormId] = useState(character.forms?.[0]?.id || 'base');

  const currentForm = character.forms?.find(f => f.id === selectedFormId) || character.forms?.[0];
  const speedDisplay = typeof character.speed === 'object' ? character.speed.combat : (character.speedCombate || character.speed || 'Nivel Canon');

  return (
    <div className={`relative flex flex-col rounded-2xl transition-all duration-300 ${
      isSideA ? 'glass-panel-danger border-red-500/30' : 'glass-panel-blue border-blue-500/30'
    } p-5 shadow-xl`}>
      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <span className={`w-2.5 h-2.5 rounded-full ${isSideA ? 'bg-red-500 animate-ping' : 'bg-blue-500 animate-ping'}`} />
          <span className={`text-xs font-mono font-bold uppercase tracking-wider ${isSideA ? 'text-red-400' : 'text-blue-400'}`}>
            {role}
          </span>
        </div>

        <select
          value={character.id}
          onChange={(e) => {
            const chosen = allCharacters.find(c => c.id === e.target.value);
            if (chosen) onSelectChange(chosen);
          }}
          className="bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none cursor-pointer max-w-[200px]"
        >
          {allCharacters.map(c => (
            <option key={c.id} value={c.id}>
              {c.name} ({c.universe})
            </option>
          ))}
        </select>
      </div>

      {/* Info & Form Selector */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white tracking-tight">{character.name}</h3>
          <p className="text-xs text-slate-400 font-mono mb-1.5">{character.universe} · <span className="text-slate-300">{character.version}</span></p>
          
          {character.forms && character.forms.length > 0 && (
            <div className="mb-2">
              <label className="text-[10px] text-amber-500/80 font-mono block mb-0.5">Forma Activa:</label>
              <select 
                value={selectedFormId} 
                onChange={(e) => setSelectedFormId(e.target.value)}
                className="bg-slate-950 border border-amber-500/40 text-amber-400 text-xs rounded-lg px-2 py-1 focus:outline-none cursor-pointer w-full font-bold shadow-[0_0_8px_rgba(245,158,11,0.15)]"
              >
                {character.forms.map((f, i) => (
                  <option key={i} value={f.id}>{f.name}</option>
                ))}
              </select>
              {currentForm?.stats && (
                <p className="text-[10px] text-amber-300/80 font-mono mt-1 italic px-1 line-clamp-1">
                  ⚡ {currentForm.stats}
                </p>
              )}
            </div>
          )}

          <div className="flex items-center gap-2 mt-1">
            <span className="px-2 py-0.5 rounded bg-slate-900 border border-amber-500/30 text-[11px] font-mono text-amber-300 font-bold">
              {character.tier}
            </span>
            {character.range && (
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-cyan-500/30 text-[10px] font-mono text-cyan-300 flex items-center gap-1">
                <Target className="w-3 h-3" /> {character.range}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons: View, Edit, Delete */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={() => onInspect(character)}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white transition cursor-pointer"
            title="Ver Ficha Completa"
          >
            <Eye className="w-4 h-4" />
          </button>
          <button
            onClick={() => onEdit(character)}
            className="p-2 rounded-xl bg-indigo-950/60 hover:bg-indigo-900/80 border border-indigo-500/40 text-indigo-300 hover:text-white transition cursor-pointer"
            title="Editar Ficha / Transformaciones / Arsenal"
          >
            <Edit3 className="w-4 h-4" />
          </button>
          {onDelete && (
            <button
              onClick={() => {
                if (confirm(`¿Eliminar la ficha de "${character.name}"?`)) {
                  onDelete(character.id);
                }
              }}
              className="p-2 rounded-xl bg-red-950/40 hover:bg-red-900/60 border border-red-500/30 text-red-400 hover:text-red-200 transition cursor-pointer"
              title="Eliminar Ficha"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-2 mt-3 text-xs font-mono">
        <div className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800/80">
          <div className="flex items-center gap-1.5 text-slate-400 mb-1">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[10px] uppercase">Attack Potency</span>
          </div>
          <p className="text-slate-200 line-clamp-2 text-[11px]">{character.ap}</p>
        </div>

        <div className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800/80">
          <div className="flex items-center gap-1.5 text-slate-400 mb-1">
            <Shield className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[10px] uppercase">Durabilidad</span>
          </div>
          <p className="text-slate-200 line-clamp-2 text-[11px]">{character.durability}</p>
        </div>
      </div>

      {/* Stamina & Battle IQ */}
      <div className="mt-2 grid grid-cols-2 gap-2 text-[10px] font-mono">
         <div className="p-2 rounded-lg bg-slate-900/40 border border-slate-800/40">
           <span className="text-slate-500 block mb-0.5">Stamina:</span>
           <span className="text-slate-300 line-clamp-1">{character.stamina || 'Desconocida'}</span>
         </div>
         <div className="p-2 rounded-lg bg-slate-900/40 border border-slate-800/40">
           <span className="text-slate-500 block mb-0.5">Battle IQ:</span>
           <span className="text-slate-300 line-clamp-1">{character.battleIQ || 'Desconocido'}</span>
         </div>
      </div>

      {/* Speed & Arsenal Badges */}
      <div className="mt-3 p-2.5 rounded-xl bg-slate-900/50 border border-slate-800/60 text-xs space-y-2">
        <div className="flex items-center justify-between text-slate-400 pb-1.5 border-b border-slate-800/60 text-[11px]">
          <span className="flex items-center gap-1"><Crosshair className="w-3.5 h-3.5 text-red-400" /> Vel. Combate:</span>
          <span className="text-slate-200 font-mono font-bold">{speedDisplay}</span>
        </div>

        {/* Ultimates / Finishers Badges */}
        {character.arsenal?.ultimateAttacks && character.arsenal.ultimateAttacks.length > 0 && (
          <div className="space-y-1">
            {character.arsenal.ultimateAttacks.map((ult, idx) => (
              <div key={idx} className="p-1.5 rounded-lg bg-red-950/40 border border-red-500/30 flex items-center justify-between text-[10px] font-mono">
                <span className="text-red-400 font-bold flex items-center gap-1">
                  <Zap className="w-3 h-3 text-red-400" /> Finisher:
                </span>
                <span className="text-red-200 font-bold truncate max-w-[170px]">{ult.name}</span>
              </div>
            ))}
          </div>
        )}

        {/* Super Attacks, Passives & Actives Badges */}
        <div className="flex items-center gap-1 flex-wrap">
          {character.arsenal?.superAttacks?.map((s, idx) => (
            <span key={`super-${idx}`} className="px-2 py-0.5 rounded bg-orange-950/60 border border-orange-500/40 text-[9px] text-orange-300 font-mono flex items-center gap-1" title={s.desc}>
              <Flame className="w-2.5 h-2.5" /> {s.name}
            </span>
          ))}
          {character.arsenal?.passives?.map((p, idx) => (
            <span key={`pass-${idx}`} className="px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/40 text-[9px] text-emerald-300 font-mono flex items-center gap-1" title={p.desc}>
              <ShieldAlert className="w-2.5 h-2.5" /> {p.name}
            </span>
          ))}
          {character.arsenal?.actives?.map((a, idx) => (
            <span key={`act-${idx}`} className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/40 text-[9px] text-cyan-300 font-mono flex items-center gap-1" title={a.desc}>
              <Sparkles className="w-2.5 h-2.5" /> {a.name}
            </span>
          ))}
        </div>
      </div>

      {/* Weakness */}
      <div className="mt-3 flex items-start gap-1.5 text-[11px] text-slate-400">
        <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
        <p className="line-clamp-1"><span className="text-slate-300 font-medium">Debilidad:</span> {character.weaknesses}</p>
      </div>
    </div>
  );
}
