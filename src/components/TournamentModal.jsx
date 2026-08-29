import React, { useState, useEffect } from 'react';
import { Trophy, Swords, Sparkles, RefreshCw, X, Play, Shield, ChevronRight, Crown, Flame } from 'lucide-react';
import { SimulationEngine } from '../services/simulationEngine';

export default function TournamentModal({ isOpen, onClose, characters, scenario, modifiers, aiConfig, onOpenSimulationResult }) {
  const [tournamentSize, setTournamentSize] = useState(4); // 4 or 8
  const [participants, setParticipants] = useState([]);
  const [rounds, setRounds] = useState([]);
  const [isSimulatingMatch, setIsSimulatingMatch] = useState(false);
  const [activeSimulatingId, setActiveSimulatingId] = useState(null);
  const [champion, setChampion] = useState(null);

  // Initialize participants when opened or size changes
  useEffect(() => {
    if (isOpen) {
      initTournament(tournamentSize);
    }
  }, [isOpen, tournamentSize]);

  const initTournament = (size) => {
    const list = [];
    for (let i = 0; i < size; i++) {
      list.push(characters[i % characters.length] || { id: `gladiator-${i}`, name: `Luchador ${i + 1}`, universe: 'Desconocido', tier: 'Tier 2-C' });
    }
    setParticipants(list);
    setChampion(null);
    setupBracket(list, size);
  };

  const setupBracket = (gladiators, size) => {
    if (size === 4) {
      const semiMatches = [
        { id: 'semi-1', round: 'Semifinal 1', charA: gladiators[0], charB: gladiators[1], winner: null, log: '' },
        { id: 'semi-2', round: 'Semifinal 2', charA: gladiators[2], charB: gladiators[3], winner: null, log: '' }
      ];
      const finalMatch = [
        { id: 'final', round: 'Gran Final', charA: null, charB: null, winner: null, log: '' }
      ];
      setRounds([
        { name: 'Semifinales', matches: semiMatches },
        { name: 'Gran Final', matches: finalMatch }
      ]);
    } else {
      // 8 participants
      const quarterMatches = [
        { id: 'q-1', round: 'Cuartos 1', charA: gladiators[0], charB: gladiators[1], winner: null, log: '' },
        { id: 'q-2', round: 'Cuartos 2', charA: gladiators[2], charB: gladiators[3], winner: null, log: '' },
        { id: 'q-3', round: 'Cuartos 3', charA: gladiators[4], charB: gladiators[5], winner: null, log: '' },
        { id: 'q-4', round: 'Cuartos 4', charA: gladiators[6], charB: gladiators[7], winner: null, log: '' }
      ];
      const semiMatches = [
        { id: 'semi-1', round: 'Semifinal 1', charA: null, charB: null, winner: null, log: '' },
        { id: 'semi-2', round: 'Semifinal 2', charA: null, charB: null, winner: null, log: '' }
      ];
      const finalMatch = [
        { id: 'final', round: 'Gran Final', charA: null, charB: null, winner: null, log: '' }
      ];
      setRounds([
        { name: 'Cuartos de Final', matches: quarterMatches },
        { name: 'Semifinales', matches: semiMatches },
        { name: 'Gran Final', matches: finalMatch }
      ]);
    }
  };

  const randomizeParticipants = () => {
    const shuffled = [...characters].sort(() => 0.5 - Math.random()).slice(0, tournamentSize);
    while (shuffled.length < tournamentSize) {
      shuffled.push(characters[0] || { id: 'gladiator', name: 'Luchador', universe: 'Universo' });
    }
    setParticipants(shuffled);
    setChampion(null);
    setupBracket(shuffled, tournamentSize);
  };

  const updateParticipant = (index, charId) => {
    const selected = characters.find(c => c.id === charId);
    if (!selected) return;
    const updated = [...participants];
    updated[index] = selected;
    setParticipants(updated);
    setupBracket(updated, tournamentSize);
  };

  // Simulate a specific match in the tournament
  const simulateMatch = async (roundIdx, matchIdx) => {
    const match = rounds[roundIdx]?.matches[matchIdx];
    if (!match || !match.charA || !match.charB || match.winner || isSimulatingMatch) return;

    setIsSimulatingMatch(true);
    setActiveSimulatingId(match.id);

    try {
      const matchModifiers = {
        ...modifiers,
        customContext: `Encuentro de Torneo eliminatorio por llaves: Ronda ${match.round}. Ambos luchan con todo su arsenal para avanzar a la final.`
      };

      const prompt = SimulationEngine.generateMasterPrompt(match.charA, match.charB, scenario, matchModifiers);
      
      let fullNarrative = '';
      await SimulationEngine.streamSimulation(
        prompt,
        aiConfig,
        (token) => { fullNarrative += token; },
        () => {},
        (err) => { throw err; }
      );

      // Determine winner based on output
      let winnerChar = match.charA;
      const lower = fullNarrative.toLowerCase();
      if (lower.includes(`ganador: ${match.charB.name.toLowerCase()}`) || lower.includes(`vencedor: ${match.charB.name.toLowerCase()}`)) {
        winnerChar = match.charB;
      } else if (lower.includes(`ganador: ${match.charA.name.toLowerCase()}`) || lower.includes(`vencedor: ${match.charA.name.toLowerCase()}`)) {
        winnerChar = match.charA;
      }

      // Update rounds
      setRounds(prevRounds => {
        const newRounds = JSON.parse(JSON.stringify(prevRounds));
        newRounds[roundIdx].matches[matchIdx].winner = winnerChar;
        newRounds[roundIdx].matches[matchIdx].log = fullNarrative;

        // Propagate winner to next round
        const nextRoundIdx = roundIdx + 1;
        if (nextRoundIdx < newRounds.length) {
          const nextMatchIdx = Math.floor(matchIdx / 2);
          const isSlotA = matchIdx % 2 === 0;
          if (isSlotA) {
            newRounds[nextRoundIdx].matches[nextMatchIdx].charA = winnerChar;
          } else {
            newRounds[nextRoundIdx].matches[nextMatchIdx].charB = winnerChar;
          }
        } else {
          // Final Winner!
          setChampion(winnerChar);
        }

        return newRounds;
      });

    } catch (err) {
      alert('Error simulando combate del torneo: ' + (err.message || err));
    } finally {
      setIsSimulatingMatch(false);
      setActiveSimulatingId(null);
    }
  };

  // Simulate next playable match
  const simulateNextAvailable = async () => {
    for (let r = 0; r < rounds.length; r++) {
      for (let m = 0; m < rounds[r].matches.length; m++) {
        const match = rounds[r].matches[m];
        if (match.charA && match.charB && !match.winner) {
          await simulateMatch(r, m);
          return;
        }
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#090d16] border border-amber-500/40 rounded-3xl p-6 max-w-6xl w-full max-h-[92vh] flex flex-col space-y-5 shadow-2xl font-mono text-xs overflow-hidden">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-600/40 to-yellow-600/30 text-yellow-300 border border-amber-400/50 shadow-[0_0_20px_rgba(245,158,11,0.4)]">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white font-cinzel tracking-wider">
                  Simulador de Torneo por Llaves (Brackets)
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-bold">
                  OMNI-TITÁN TOURNAMENT
                </span>
              </div>
              <p className="text-slate-400 text-[11px]">
                Cuadro eliminatorio automático con simulación de combates y coronación del campeón.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Size Selector */}
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1">
              <button
                type="button"
                onClick={() => setTournamentSize(4)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${tournamentSize === 4 ? 'bg-amber-500 text-black shadow' : 'text-slate-400'}`}
              >
                4 Gladiadores
              </button>
              <button
                type="button"
                onClick={() => setTournamentSize(8)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${tournamentSize === 8 ? 'bg-amber-500 text-black shadow' : 'text-slate-400'}`}
              >
                8 Gladiadores
              </button>
            </div>

            <button
              type="button"
              onClick={randomizeParticipants}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>🎲 Aleatorio</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Champion Banner if finished */}
        {champion && (
          <div className="p-4 rounded-2xl bg-gradient-to-r from-yellow-600/30 via-amber-500/20 to-yellow-600/30 border border-yellow-400 text-center space-y-1 shadow-[0_0_30px_rgba(250,204,21,0.4)] animate-pulse">
            <div className="flex items-center justify-center gap-2 text-yellow-300 font-bold text-sm font-cinzel">
              <Crown className="w-5 h-5 text-yellow-300" />
              <span>¡GRAN CAMPEÓN DEL TORNEO MULTIVERSAL!</span>
              <Crown className="w-5 h-5 text-yellow-300" />
            </div>
            <div className="text-xl font-black text-white uppercase font-cinzel tracking-widest">
              🏆 {champion.name} ({champion.universe}) 🏆
            </div>
          </div>
        )}

        {/* Bracket Visualizer Grid */}
        <div className="flex-1 overflow-x-auto overflow-y-auto pr-2 custom-scrollbar">
          <div className="flex items-start gap-8 min-w-[750px] p-2">
            {rounds.map((round, rIdx) => (
              <div key={rIdx} className="flex-1 space-y-6">
                <div className="text-center pb-2 border-b border-slate-800 font-bold text-amber-400 uppercase tracking-wider text-xs font-cinzel">
                  {round.name}
                </div>

                <div className="space-y-6 flex flex-col justify-around h-full">
                  {round.matches.map((match, mIdx) => {
                    const isSimulating = activeSimulatingId === match.id;
                    const canPlay = match.charA && match.charB && !match.winner;

                    return (
                      <div 
                        key={match.id}
                        className={`p-3.5 rounded-2xl border transition-all relative ${
                          match.winner 
                            ? 'bg-slate-900/90 border-slate-700 shadow-md' 
                            : canPlay 
                              ? 'bg-gradient-to-br from-amber-950/20 to-slate-900 border-amber-500/50 shadow-lg shadow-amber-950/20' 
                              : 'bg-slate-950/50 border-slate-800/60 opacity-60'
                        }`}
                      >
                        <div className="flex items-center justify-between text-[10px] text-slate-400 border-b border-slate-800/80 pb-1.5 mb-2">
                          <span className="font-bold text-slate-300">{match.round}</span>
                          {match.winner && (
                            <span className="text-emerald-400 font-bold">✓ FINALIZADO</span>
                          )}
                        </div>

                        {/* Fighter A */}
                        <div className={`p-2 rounded-xl flex items-center justify-between gap-2 mb-1.5 transition ${
                          match.winner?.id === match.charA?.id 
                            ? 'bg-emerald-950/40 border border-emerald-500/50 text-emerald-300 font-bold' 
                            : 'bg-slate-900/60 text-slate-200'
                        }`}>
                          <span className="truncate">{match.charA?.name || 'Por Definir'}</span>
                          {match.winner?.id === match.charA?.id && <span className="text-[10px]">👑 Ganador</span>}
                        </div>

                        <div className="text-center text-[10px] text-slate-500 font-bold my-0.5">VS</div>

                        {/* Fighter B */}
                        <div className={`p-2 rounded-xl flex items-center justify-between gap-2 transition ${
                          match.winner?.id === match.charB?.id 
                            ? 'bg-emerald-950/40 border border-emerald-500/50 text-emerald-300 font-bold' 
                            : 'bg-slate-900/60 text-slate-200'
                        }`}>
                          <span className="truncate">{match.charB?.name || 'Por Definir'}</span>
                          {match.winner?.id === match.charB?.id && <span className="text-[10px]">👑 Ganador</span>}
                        </div>

                        {/* Action Buttons for Match */}
                        <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between gap-2">
                          {canPlay && (
                            <button
                              type="button"
                              disabled={isSimulatingMatch}
                              onClick={() => simulateMatch(rIdx, mIdx)}
                              className="w-full py-1.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-[11px] shadow-md transition flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                            >
                              {isSimulating ? (
                                <>
                                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                                  <span>Simulando...</span>
                                </>
                              ) : (
                                <>
                                  <Play className="w-3 h-3 fill-white" />
                                  <span>Simular Duelo</span>
                                </>
                              )}
                            </button>
                          )}

                          {match.log && onOpenSimulationResult && (
                            <button
                              type="button"
                              onClick={() => {
                                onOpenSimulationResult(match.log, match.charA, match.charB);
                                onClose();
                              }}
                              className="w-full py-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-[10px] transition cursor-pointer text-center"
                            >
                              📖 Ver Crónica Completa
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-800">
          <div className="text-slate-400 text-[11px]">
            <span>Arena del Torneo: </span>
            <span className="text-amber-400 font-bold">{scenario?.name || 'Arena Estándar'}</span>
          </div>

          <div className="flex items-center gap-2">
            {!champion && (
              <button
                type="button"
                disabled={isSimulatingMatch}
                onClick={simulateNextAvailable}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 hover:from-amber-500 hover:to-yellow-500 text-black font-bold text-xs shadow-lg shadow-amber-950/60 transition cursor-pointer flex items-center gap-2 disabled:opacity-50"
              >
                {isSimulatingMatch ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-black" />
                    <span>PROCESANDO COMBATE...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-black" />
                    <span>Simular Siguiente Combate</span>
                  </>
                )}
              </button>
            )}

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-bold border border-slate-800 cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
