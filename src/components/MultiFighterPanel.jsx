import React from 'react';
import { Swords, Users, Crown, Plus, Trash2, Shield, Flame, Sparkles, UserPlus } from 'lucide-react';

export default function MultiFighterPanel({ 
  matchMode, 
  setMatchMode, 
  charA, 
  setCharA, 
  charB, 
  setCharB, 
  teamA, 
  setTeamA, 
  teamB, 
  setTeamB, 
  battleRoyale, 
  setBattleRoyale, 
  allCharacters,
  onInspect,
  onEdit
}) {

  // Add fighter to Team A
  const addTeamAMember = () => {
    const available = allCharacters.find(c => !teamA.some(t => t.id === c.id)) || allCharacters[0];
    setTeamA([...teamA, available]);
  };

  // Remove fighter from Team A
  const removeTeamAMember = (index) => {
    if (teamA.length <= 1) return alert('El equipo debe tener al menos 1 luchador.');
    setTeamA(teamA.filter((_, i) => i !== index));
  };

  // Add fighter to Team B
  const addTeamBMember = () => {
    const available = allCharacters.find(c => !teamB.some(t => t.id === c.id)) || allCharacters[1] || allCharacters[0];
    setTeamB([...teamB, available]);
  };

  // Remove fighter from Team B
  const removeTeamBMember = (index) => {
    if (teamB.length <= 1) return alert('El equipo debe tener al menos 1 luchador.');
    setTeamB(teamB.filter((_, i) => i !== index));
  };

  // Add fighter to Battle Royale
  const addRoyaleMember = () => {
    if (battleRoyale.length >= 10) return alert('Máximo 10 luchadores en el Battle Royale.');
    const available = allCharacters.find(c => !battleRoyale.some(t => t.id === c.id)) || allCharacters[0];
    setBattleRoyale([...battleRoyale, available]);
  };

  // Remove fighter from Battle Royale
  const removeRoyaleMember = (index) => {
    if (battleRoyale.length <= 2) return alert('El Battle Royale necesita al menos 2 participantes.');
    setBattleRoyale(battleRoyale.filter((_, i) => i !== index));
  };

  return (
    <div className="rounded-2xl glass-panel p-5 border border-amber-500/30 shadow-2xl space-y-5 font-mono relative overflow-hidden bg-[#090d16]/90">
      {/* Top Header & Mode Tabs */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-600/30 to-red-600/20 border border-amber-500/40 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
            {matchMode === '1v1' && <Swords className="w-5 h-5" />}
            {matchMode === 'teams' && <Users className="w-5 h-5" />}
            {matchMode === 'battle_royale' && <Crown className="w-5 h-5 text-yellow-300" />}
          </div>
          <div>
            <h3 className="text-lg font-bold text-white font-cinzel tracking-wider flex items-center gap-2">
              Modalidad de Combate & Alineación
            </h3>
            <p className="text-xs text-slate-400">
              Selecciona entre Duelo 1v1, Guerra de Equipos Múltiples o Caos de Battle Royale.
            </p>
          </div>
        </div>

        {/* Match Mode Tabs */}
        <div className="flex items-center gap-2 bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800 flex-wrap">
          <button
            type="button"
            onClick={() => setMatchMode('1v1')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              matchMode === '1v1'
                ? 'bg-amber-500 text-black shadow-[0_0_12px_rgba(245,158,11,0.6)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Swords className="w-3.5 h-3.5" />
            <span>1 vs 1</span>
          </button>

          <button
            type="button"
            onClick={() => setMatchMode('1vN')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              matchMode === '1vN'
                ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-[0_0_12px_rgba(220,38,38,0.6)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-amber-300" />
            <span>1 vs Varios (Boss Raid)</span>
          </button>

          <button
            type="button"
            onClick={() => setMatchMode('teams')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              matchMode === 'teams'
                ? 'bg-blue-600 text-white shadow-[0_0_12px_rgba(37,99,235,0.6)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Equipos (Team VS)</span>
          </button>

          <button
            type="button"
            onClick={() => setMatchMode('battle_royale')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              matchMode === 'battle_royale'
                ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.6)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Crown className="w-3.5 h-3.5 text-yellow-300" />
            <span>Battle Royale</span>
          </button>
        </div>
      </div>

      {/* MODO 1 VS VARIOS (BOSS RAID) */}
      {matchMode === '1vN' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* El Jefe / Boss (1 Solitario) */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-red-950/40 via-slate-900/70 to-orange-950/40 border border-red-500/60 shadow-xl space-y-3">
              <div className="flex items-center gap-2 border-b border-red-900/50 pb-2">
                <Flame className="w-4 h-4 text-red-400 animate-pulse" />
                <span className="text-sm font-bold text-red-300 font-cinzel">JEFE / TITÁN SOLITARIO (1)</span>
              </div>

              <label className="block text-[11px] text-slate-400">Selecciona al Boss:</label>
              <select
                value={charA.id}
                onChange={(e) => {
                  const selected = allCharacters.find(c => c.id === e.target.value);
                  if (selected) setCharA(selected);
                }}
                className="w-full bg-slate-950 border border-red-900/60 text-white text-xs p-2.5 rounded-xl font-bold focus:border-red-500 focus:outline-none"
              >
                {allCharacters.map(c => (
                  <option key={c.id} value={c.id}>
                    🐉 {c.name} ({c.universe})
                  </option>
                ))}
              </select>

              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] space-y-1">
                <div className="text-red-400 font-bold">{charA.name}</div>
                <div className="text-slate-400">Tier: {charA.tier || 'Desconocido'}</div>
                <div className="text-amber-400 text-[10px]">AP: {charA.ap}</div>
              </div>
            </div>

            {/* VS Symbol */}
            <div className="flex flex-col items-center justify-center p-2 text-center">
              <span className="text-2xl font-black font-cinzel text-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.8)] animate-pulse">
                VS
              </span>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mt-1">
                Duelo Asimétrico Raid
              </span>
            </div>

            {/* La Escuadra / Equipo Asaltante */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-950/30 via-slate-900/70 to-slate-900/50 border border-blue-800/50 space-y-3">
              <div className="flex items-center justify-between border-b border-blue-900/40 pb-2">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm font-cinzel">
                  <Users className="w-4 h-4 text-cyan-400" />
                  <span>ESCUADRA ASALTANTE ({teamB.length})</span>
                </div>
                <button
                  type="button"
                  onClick={addTeamBMember}
                  className="flex items-center gap-1 px-3 py-1 rounded-xl bg-blue-600/30 hover:bg-blue-600 text-blue-200 text-xs font-bold border border-blue-500/50 transition cursor-pointer"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>Añadir</span>
                </button>
              </div>

              <div className="space-y-2 max-h-[260px] overflow-y-auto pr-1">
                {teamB.map((member, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-950/80 border border-blue-900/30 flex items-center justify-between gap-2">
                    <span className="text-cyan-400 font-bold text-xs">#{idx + 1}</span>
                    <select
                      value={member.id}
                      onChange={(e) => {
                        const selected = allCharacters.find(c => c.id === e.target.value);
                        if (selected) {
                          const updated = [...teamB];
                          updated[idx] = selected;
                          setTeamB(updated);
                        }
                      }}
                      className="flex-1 bg-slate-900 border border-slate-800 text-white text-xs p-2 rounded-lg focus:border-cyan-500 focus:outline-none"
                    >
                      {allCharacters.map(c => (
                        <option key={c.id} value={c.id}>
                          {c.name} ({c.universe})
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      onClick={() => removeTeamBMember(idx)}
                      className="p-1.5 rounded-lg bg-red-950/40 hover:bg-red-900 text-red-400 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* MODO EQUIPOS (TEAMS) */}
      {matchMode === 'teams' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Equipo Alfa (Red) */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-red-950/30 to-slate-900/60 border border-red-800/50 space-y-3">
              <div className="flex items-center justify-between border-b border-red-900/40 pb-2">
                <div className="flex items-center gap-2 text-red-400 font-bold text-sm font-cinzel">
                  <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_red]" />
                  <span>EQUIPO ALFA ({teamA.length} Luchadores)</span>
                </div>
                <button
                  type="button"
                  onClick={addTeamAMember}
                  className="flex items-center gap-1 px-3 py-1 rounded-xl bg-red-600/30 hover:bg-red-600 text-red-200 text-xs font-bold border border-red-500/50 transition cursor-pointer"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>Añadir</span>
                </button>
              </div>

              <div className="space-y-2 max-h-[320px] overflow-y-auto pr-1">
                {teamA.map((member, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950/80 border border-red-900/30 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 flex-1">
                      <span className="text-red-400 font-bold text-xs">#{idx + 1}</span>
                      <select
                        value={member.id}
                        onChange={(e) => {
                          const selected = allCharacters.find(c => c.id === e.target.value);
                          if (selected) {
                            const updated = [...teamA];
                            updated[idx] = selected;
                            setTeamA(updated);
                          }
                        }}
                        className="flex-1 bg-slate-900 border border-slate-800 text-white text-xs p-2 rounded-lg focus:border-red-500 focus:outline-none"
                      >
                        {allCharacters.map(c => (
                          <option key={c.id} value={c.id}>
                            {c.name} ({c.universe})
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeTeamAMember(idx)}
                      className="p-2 rounded-lg bg-red-950/50 hover:bg-red-900 text-red-400 cursor-pointer"
                      title="Eliminar del equipo"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipo Beta (Blue) */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-950/30 to-slate-900/60 border border-blue-800/50 space-y-3">
              <div className="flex items-center justify-between border-b border-blue-900/40 pb-2">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm font-cinzel">
                  <span className="w-3 h-3 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_cyan]" />
                  <span>EQUIPO BETA ({teamB.length} Luchadores)</span>
                </div>
                <button
                  type="button"
                  onClick={addTeamBMember}
                  className="flex items-center gap-1 px-3 py-1 rounded-xl bg-blue-600/30 hover:bg-blue-600 text-blue-200 text-xs font-bold border border-blue-500/50 transition cursor-pointer"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>Añadir</span>
                </button>
              </div>

              <div className="space-y-2 max-h-[320px] overflow-y-auto pr-1">
                {teamB.map((member, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950/80 border border-blue-900/30 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 flex-1">
                      <span className="text-blue-400 font-bold text-xs">#{idx + 1}</span>
                      <select
                        value={member.id}
                        onChange={(e) => {
                          const selected = allCharacters.find(c => c.id === e.target.value);
                          if (selected) {
                            const updated = [...teamB];
                            updated[idx] = selected;
                            setTeamB(updated);
                          }
                        }}
                        className="flex-1 bg-slate-900 border border-slate-800 text-white text-xs p-2 rounded-lg focus:border-blue-500 focus:outline-none"
                      >
                        {allCharacters.map(c => (
                          <option key={c.id} value={c.id}>
                            {c.name} ({c.universe})
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeTeamBMember(idx)}
                      className="p-2 rounded-lg bg-red-950/50 hover:bg-red-900 text-red-400 cursor-pointer"
                      title="Eliminar del equipo"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* MODO BATTLE ROYALE */}
      {matchMode === 'battle_royale' && (
        <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-950/30 via-slate-900/60 to-fuchsia-950/30 border border-purple-600/40 space-y-4">
          <div className="flex items-center justify-between border-b border-purple-900/50 pb-3">
            <div className="flex items-center gap-2">
              <Crown className="w-5 h-5 text-yellow-300 animate-pulse" />
              <h4 className="text-sm font-bold text-purple-200 uppercase tracking-wider font-cinzel">
                Arena de Battle Royale ({battleRoyale.length} Competidores en Caos Total)
              </h4>
            </div>
            <button
              type="button"
              onClick={addRoyaleMember}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white text-xs font-bold shadow-md shadow-purple-950/50 transition cursor-pointer"
            >
              <UserPlus className="w-4 h-4" />
              <span>Añadir Gladiador</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-h-[360px] overflow-y-auto pr-1">
            {battleRoyale.map((gladiator, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-950/90 border border-purple-900/40 space-y-2 relative group hover:border-purple-500 transition">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded bg-purple-950 text-purple-300 font-bold text-[10px] border border-purple-800">
                    Gladiador #{idx + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeRoyaleMember(idx)}
                    className="text-slate-500 hover:text-red-400 p-1 transition cursor-pointer"
                    title="Eliminar del royale"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <select
                  value={gladiator.id}
                  onChange={(e) => {
                    const selected = allCharacters.find(c => c.id === e.target.value);
                    if (selected) {
                      const updated = [...battleRoyale];
                      updated[idx] = selected;
                      setBattleRoyale(updated);
                    }
                  }}
                  className="w-full bg-slate-900 border border-slate-800 text-white text-xs p-2 rounded-lg focus:border-purple-500 focus:outline-none"
                >
                  {allCharacters.map(c => (
                    <option key={c.id} value={c.id}>
                      {c.name} ({c.universe})
                    </option>
                  ))}
                </select>

                <div className="text-[10px] text-slate-400 flex items-center justify-between">
                  <span>Tier: {gladiator.tier || 'Desconocido'}</span>
                  <span className="text-amber-400 font-bold">{gladiator.ap?.slice(0, 15)}...</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
