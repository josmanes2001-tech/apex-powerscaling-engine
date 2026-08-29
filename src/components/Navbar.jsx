import React from 'react';
import { Shield, Swords, Sparkles, GitBranch, FolderCheck, PlusCircle, Cpu, Trophy } from 'lucide-react';

export default function Navbar({ mode, setMode, onOpenNewCharacter, onOpenVault, vaultStatus, onOpenAiConfig, aiConfig, onOpenTournament }) {
  const modes = [
    { id: 'MODO VS', label: 'Modo VS (Batalla)', icon: Swords, color: 'text-red-400 border-red-500/50 bg-red-950/30' },
    { id: 'MODO WHAT-IF', label: 'Modo What-If', icon: GitBranch, color: 'text-purple-400 border-purple-500/50 bg-purple-950/30' },
    { id: 'MODO HÍBRIDO', label: 'Modo Híbrido', icon: Sparkles, color: 'text-amber-400 border-amber-500/50 bg-amber-950/30' }
  ];

  const getProviderBadge = (engine) => {
    switch (engine) {
      case 'openrouter': return { name: 'OpenRouter', color: 'text-purple-400 border-purple-500/40 bg-purple-950/40' };
      case 'gemini': return { name: 'Gemini', color: 'text-blue-400 border-blue-500/40 bg-blue-950/40' };
      case 'openai': return { name: 'OpenAI', color: 'text-emerald-400 border-emerald-500/40 bg-emerald-950/40' };
      case 'custom': return { name: 'Custom API', color: 'text-amber-400 border-amber-500/40 bg-amber-950/40' };
      case 'ollama':
      default: return { name: 'Ollama (Local)', color: 'text-slate-400 border-slate-700 bg-slate-900' };
    }
  };

  const badge = getProviderBadge(aiConfig?.engine);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#080b12]/90 backdrop-blur-xl px-4 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-amber-600 shadow-lg shadow-red-950/50 border border-red-400/40">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-cinzel text-lg font-black tracking-wider text-white">APEX<span className="text-red-500 font-sans">SCALE</span></span>
              <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-red-900/60 text-red-300 border border-red-700/50">v3.0 PRO</span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono tracking-tight">Canonical Feats & Literary What-If Engine</p>
          </div>
        </div>

        <div className="flex items-center p-1 rounded-xl bg-slate-900/90 border border-slate-800 shadow-inner">
          {modes.map((m) => {
            const Icon = m.icon;
            const active = mode === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setMode(m.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  active ? `${m.color} shadow-sm border` : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{m.label}</span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          {/* AI Config Selector Button */}
          <button
            onClick={onOpenAiConfig}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono transition cursor-pointer hover:opacity-90 ${badge.color}`}
            title="Configurar Proveedor y API Keys de IA"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span className="font-bold">{badge.name}</span>
            <span className="text-[10px] opacity-75 max-w-[90px] truncate hidden sm:inline">({aiConfig?.model?.split('/')?.pop() || 'default'})</span>
          </button>

          <button
            onClick={onOpenVault}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 transition cursor-pointer"
          >
            <FolderCheck className={`w-3.5 h-3.5 ${vaultStatus?.connected ? 'text-emerald-400' : 'text-amber-400'}`} />
            <span className="font-mono text-[11px]">Vault: Z:\</span>
            <span className={`w-2 h-2 rounded-full ${vaultStatus?.connected ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
          </button>

          <button
            onClick={onOpenTournament}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-xs text-amber-300 font-bold transition cursor-pointer shadow-md shadow-amber-950/40"
            title="Generar Cuadro Eliminatorio de Torneo"
          >
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>🏆 Torneo</span>
          </button>

          <button
            onClick={onOpenNewCharacter}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600/20 hover:bg-red-600/30 border border-red-500/40 text-xs text-red-200 font-medium transition cursor-pointer"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Crear Ficha</span>
          </button>
        </div>
      </div>
    </header>
  );
}
