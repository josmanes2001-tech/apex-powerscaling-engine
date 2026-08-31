import React, { useState, useEffect, useMemo } from 'react';
import { 
  Trophy, Swords, Sparkles, RefreshCw, X, Play, Shield, ChevronRight, 
  Crown, Flame, Coins, Dices, FastForward, Award, CheckCircle, AlertCircle,
  Save, History, Download, Trash2, Filter, Shuffle, Layers, BookOpen, ExternalLink
} from 'lucide-react';
import { FRANCHISE_GROUPS } from '../services/franchiseHelper';
import { SoundFX } from '../services/soundFx';

const STORAGE_KEY_TOURNAMENT_HISTORY = 'apex_tournament_history';

export default function TournamentModal({ 
  isOpen, 
  onClose, 
  characters = [], 
  scenario, 
  modifiers, 
  aiConfig, 
  oracleCoins = 1000,
  onUpdateCoins,
  onOpenSimulationResult 
}) {
  const [tournamentSize, setTournamentSize] = useState(8); // 4, 8, or 16
  const [tournamentTitle, setTournamentTitle] = useState('Gran Torneo Multiversal');
  const [participants, setParticipants] = useState([]);
  const [rounds, setRounds] = useState([]);
  const [champion, setChampion] = useState(null);
  
  // Navigation & Modals
  const [activeTab, setActiveTab] = useState('bracket'); // 'bracket' | 'history' | 'filter'
  
  // Betting System
  const [bets, setBets] = useState({}); // { [matchId]: { charId, amount, odds } }
  const [betAmount, setBetAmount] = useState(50);
  const [toastMsg, setToastMsg] = useState(null);

  // Advanced Randomizer Filter States
  const [filterFranchise, setFilterFranchise] = useState('all');
  const [filterTier, setFilterTier] = useState('all');
  const [filterTag, setFilterTag] = useState('all');
  const [seedMode, setSeedMode] = useState('random'); // 'random' | 'balanced' | 'cross_universe'

  // Tournament History
  const [history, setHistory] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_TOURNAMENT_HISTORY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    if (isOpen && rounds.length === 0) {
      initTournament(tournamentSize);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Calculate Powerscaling Score
  const getTierScore = (tierStr) => {
    if (!tierStr) return 50;
    const t = tierStr.toLowerCase();
    if (t.includes('1-a') || t.includes('omni')) return 130;
    if (t.includes('2-a') || t.includes('1-b')) return 120;
    if (t.includes('2-b') || t.includes('2-c')) return 110;
    if (t.includes('3-a') || t.includes('3-b')) return 95;
    if (t.includes('3-c') || t.includes('4-a')) return 80;
    if (t.includes('4-b') || t.includes('4-c')) return 70;
    if (t.includes('5-a') || t.includes('5-b')) return 60;
    if (t.includes('6-') || t.includes('7-a')) return 45;
    if (t.includes('7-b') || t.includes('7-c')) return 35;
    if (t.includes('8-')) return 20;
    return 10;
  };

  const calculateOdds = (charA, charB) => {
    if (!charA || !charB) return { oddsA: 2.0, oddsB: 2.0 };
    const scoreA = getTierScore(charA.tier);
    const scoreB = getTierScore(charB.tier);
    const total = scoreA + scoreB;
    const probA = Math.max(0.1, Math.min(0.9, scoreA / total));
    const probB = 1 - probA;
    const oddsA = Number((1.1 / probA).toFixed(2));
    const oddsB = Number((1.1 / probB).toFixed(2));
    return { oddsA: Math.max(1.05, Math.min(10.0, oddsA)), oddsB: Math.max(1.05, Math.min(10.0, oddsB)) };
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
    } else if (size === 8) {
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
    } else {
      // 16 participants (Octavos de Final)
      const octavosMatches = [];
      for (let i = 0; i < 8; i++) {
        octavosMatches.push({
          id: `oct-${i + 1}`,
          round: `Octavos ${i + 1}`,
          charA: gladiators[i * 2],
          charB: gladiators[i * 2 + 1],
          winner: null,
          log: ''
        });
      }
      const quarterMatches = [
        { id: 'q-1', round: 'Cuartos 1', charA: null, charB: null, winner: null, log: '' },
        { id: 'q-2', round: 'Cuartos 2', charA: null, charB: null, winner: null, log: '' },
        { id: 'q-3', round: 'Cuartos 3', charA: null, charB: null, winner: null, log: '' },
        { id: 'q-4', round: 'Cuartos 4', charA: null, charB: null, winner: null, log: '' }
      ];
      const semiMatches = [
        { id: 'semi-1', round: 'Semifinal 1', charA: null, charB: null, winner: null, log: '' },
        { id: 'semi-2', round: 'Semifinal 2', charA: null, charB: null, winner: null, log: '' }
      ];
      const finalMatch = [
        { id: 'final', round: 'Gran Final', charA: null, charB: null, winner: null, log: '' }
      ];
      setRounds([
        { name: 'Octavos de Final', matches: octavosMatches },
        { name: 'Cuartos de Final', matches: quarterMatches },
        { name: 'Semifinales', matches: semiMatches },
        { name: 'Gran Final', matches: finalMatch }
      ]);
    }
  };

  const initTournament = (size, customList = null) => {
    let list = customList || [];
    if (list.length < size) {
      const remaining = characters.filter(c => !list.some(x => x.id === c.id));
      const shuffled = [...remaining].sort(() => 0.5 - Math.random());
      list = [...list, ...shuffled].slice(0, size);
    }
    setParticipants(list);
    setChampion(null);
    setBets({});
    setupBracket(list, size);
  };

  // Advanced Category & Tag Filtered Generator
  const handleGenerateFilteredTournament = () => {
    let pool = [...characters];

    // 1. Franchise Filter
    if (filterFranchise !== 'all') {
      const group = FRANCHISE_GROUPS.find(g => g.id === filterFranchise);
      if (group && group.keywords.length > 0) {
        pool = pool.filter(c => {
          const full = `${c.name} ${c.universe} ${c.saga || ''}`.toLowerCase();
          return group.keywords.some(k => full.includes(k.toLowerCase()));
        });
      }
    }

    // 2. Tier Range Filter
    if (filterTier !== 'all') {
      pool = pool.filter(c => {
        const t = (c.tier || '').toLowerCase();
        if (filterTier === 'cosmic') return t.includes('1-') || t.includes('2-') || t.includes('3-a') || t.includes('3-b');
        if (filterTier === 'planetary') return t.includes('3-c') || t.includes('4-') || t.includes('5-');
        if (filterTier === 'continental') return t.includes('6-') || t.includes('7-a');
        if (filterTier === 'street') return t.includes('7-b') || t.includes('7-c') || t.includes('8-') || t.includes('9-');
        return true;
      });
    }

    // 3. Combat Tag Filter
    if (filterTag !== 'all') {
      pool = pool.filter(c => {
        const full = `${c.name} ${c.haxTags?.join(' ') || ''} ${c.abilities?.join(' ') || ''}`.toLowerCase();
        return full.includes(filterTag.toLowerCase());
      });
    }

    if (pool.length < 2) {
      alert('No hay suficientes luchadores que cumplan todos los filtros seleccionados. Amplía tu búsqueda.');
      return;
    }

    let selectedList = [];
    if (seedMode === 'balanced') {
      // Balanced Seeding: Sort by Tier, pair High vs Moderate to avoid round 1 stomps
      const sorted = [...pool].sort((a, b) => getTierScore(b.tier) - getTierScore(a.tier));
      selectedList = sorted.slice(0, tournamentSize);
    } else {
      // Chaotic random
      selectedList = pool.sort(() => 0.5 - Math.random()).slice(0, tournamentSize);
    }

    // If still less than tournamentSize, fill from global pool
    if (selectedList.length < tournamentSize) {
      const needed = tournamentSize - selectedList.length;
      const extra = characters.filter(c => !selectedList.some(x => x.id === c.id)).sort(() => 0.5 - Math.random()).slice(0, needed);
      selectedList = [...selectedList, ...extra];
    }

    setParticipants(selectedList);
    setChampion(null);
    setBets({});
    setupBracket(selectedList, tournamentSize);
    setActiveTab('bracket');

    try { SoundFX.playFanfare?.(); } catch {}
    setToastMsg(`🎯 Torneo generado con éxito (${tournamentSize} luchadores filtrados).`);
    setTimeout(() => setToastMsg(null), 3500);
  };

  const handlePlaceBet = (matchId, char, odds) => {
    if (oracleCoins < betAmount) {
      alert('¡No tienes suficientes Monedas del Oráculo!');
      return;
    }
    const newCoins = oracleCoins - betAmount;
    if (onUpdateCoins) onUpdateCoins(newCoins);
    setBets(prev => ({
      ...prev,
      [matchId]: { charId: char.id, charName: char.name, amount: betAmount, odds }
    }));
    try { SoundFX.playBetPlace?.(); } catch {}
    setToastMsg(`🎰 ¡Apuesta de ${betAmount} 🪙 registrada por ${char.name} (Cuota x${odds})!`);
    setTimeout(() => setToastMsg(null), 3500);
  };

  // Instant Powerscaling Battle Resolution
  const resolveMatchFast = (match) => {
    const scoreA = getTierScore(match.charA.tier);
    const scoreB = getTierScore(match.charB.tier);
    
    const rollA = scoreA * (0.85 + Math.random() * 0.3);
    const rollB = scoreB * (0.85 + Math.random() * 0.3);
    
    const winner = rollA >= rollB ? match.charA : match.charB;
    const diff = Math.abs(rollA - rollB);
    let log = '';
    if (diff > 40) {
      log = `Victoria aplastante por superioridad de Tier y Speedblitzing absoluto. ${winner.name} dominó sin esfuerzo.`;
    } else if (diff > 15) {
      log = `Combate reñido donde ${winner.name} logró imponer su ventaja de Arsenal y Potencia de Ataque en el clímax.`;
    } else {
      log = `¡Duelo de extrema igualdad al borde de la incapacitación! ${winner.name} venció por Battle IQ y resistencia final.`;
    }

    return { winner, log };
  };

  const advanceWinner = (roundIdx, matchIdx, winner, logText) => {
    const updatedRounds = [...rounds];
    updatedRounds[roundIdx].matches[matchIdx].winner = winner;
    updatedRounds[roundIdx].matches[matchIdx].log = logText;

    // Check Bet Settlement
    const matchId = updatedRounds[roundIdx].matches[matchIdx].id;
    const activeBet = bets[matchId];
    if (activeBet) {
      if (activeBet.charId === winner.id) {
        const reward = Math.round(activeBet.amount * activeBet.odds);
        const newTotal = oracleCoins + reward;
        if (onUpdateCoins) onUpdateCoins(newTotal);
        try { SoundFX.playBetWin?.(); } catch {}
        setToastMsg(`🎉 ¡GANASTE TU APUESTA! +${reward} 🪙 por la victoria de ${winner.name}!`);
      } else {
        try { SoundFX.playBetLose?.(); } catch {}
        setToastMsg(`❌ Apuesta perdida en ${matchId}. Vencedor: ${winner.name}.`);
      }
      setTimeout(() => setToastMsg(null), 4000);
    }

    // Advance to next round
    const isFinal = roundIdx === rounds.length - 1;
    if (isFinal) {
      setChampion(winner);
      try { SoundFX.playChampionFanfare?.(); } catch {}
      
      // Auto-save finished tournament to history
      saveTournamentToHistory(tournamentTitle, winner, updatedRounds);
    } else {
      const nextRoundIdx = roundIdx + 1;
      const nextMatchIdx = Math.floor(matchIdx / 2);
      const isCharA = matchIdx % 2 === 0;

      if (isCharA) {
        updatedRounds[nextRoundIdx].matches[nextMatchIdx].charA = winner;
      } else {
        updatedRounds[nextRoundIdx].matches[nextMatchIdx].charB = winner;
      }
    }

    setRounds(updatedRounds);
  };

  const handleSimulateFast = (roundIdx, matchIdx) => {
    const match = rounds[roundIdx]?.matches[matchIdx];
    if (!match || !match.charA || !match.charB || match.winner) return;
    const { winner, log } = resolveMatchFast(match);
    advanceWinner(roundIdx, matchIdx, winner, log);
  };

  const handleSimulateAllRemainingFast = () => {
    for (let r = 0; r < rounds.length; r++) {
      for (let m = 0; m < rounds[r].matches.length; m++) {
        const match = rounds[r].matches[m];
        if (match.charA && match.charB && !match.winner) {
          const { winner, log } = resolveMatchFast(match);
          advanceWinner(r, m, winner, log);
        }
      }
    }
  };

  // Tournament Save & History Functions
  const saveTournamentToHistory = (title, champ, roundList) => {
    const entry = {
      id: `tourney_${Date.now()}`,
      title: title || 'Torneo Multiversal',
      date: new Date().toISOString(),
      size: tournamentSize,
      champion: champ,
      rounds: roundList || rounds,
      participants: participants,
      betsCount: Object.keys(bets).length
    };

    setHistory(prev => {
      const updated = [entry, ...prev.filter(t => t.id !== entry.id)].slice(0, 30);
      try {
        localStorage.setItem(STORAGE_KEY_TOURNAMENT_HISTORY, JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });

    setToastMsg(`💾 Torneo "${entry.title}" guardado en el Historial.`);
    setTimeout(() => setToastMsg(null), 3500);
  };

  const handleLoadTournament = (tourney) => {
    setTournamentTitle(tourney.title);
    setTournamentSize(tourney.size || 8);
    setParticipants(tourney.participants || []);
    setChampion(tourney.champion || null);
    setRounds(tourney.rounds || []);
    setActiveTab('bracket');
    setToastMsg(`📥 Torneo "${tourney.title}" cargado en el cuadro.`);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const handleDeleteHistoryTournament = (id, e) => {
    e.stopPropagation();
    setHistory(prev => {
      const updated = prev.filter(t => t.id !== id);
      try {
        localStorage.setItem(STORAGE_KEY_TOURNAMENT_HISTORY, JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
  };

  const handleExportTournamentMarkdown = (tourney) => {
    let md = `# APEX TORNEO MULTIVERSAL: ${tourney.title}\n\n`;
    md += `**Fecha:** ${new Date(tourney.date).toLocaleString()}\n`;
    md += `**Luchadores:** ${tourney.size}\n`;
    md += `**🏆 Campeón:** ${tourney.champion?.name} (${tourney.champion?.universe})\n\n`;
    md += `## Rondas y Combates:\n\n`;

    (tourney.rounds || []).forEach(r => {
      md += `### ${r.name}\n`;
      r.matches.forEach(m => {
        md += `- **${m.charA?.name || '?'}** vs **${m.charB?.name || '?'}** ➔ **Vencedor:** ${m.winner?.name || 'Pendiente'}\n`;
        if (m.log) md += `  - *${m.log}*\n`;
      });
      md += `\n`;
    });

    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Torneo_${tourney.title.replace(/\s+/g, '_')}_${Date.now()}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-slate-950 border border-amber-500/40 rounded-2xl max-w-6xl w-full max-h-[94vh] flex flex-col shadow-[0_0_60px_rgba(245,158,11,0.25)] font-mono text-xs overflow-hidden"
      >
        {/* Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/80 rounded-t-2xl gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-500 to-red-600 text-white shadow-lg shadow-amber-950">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest block">
                MODO TORNEO MULTIVERSAL · BRACKET & HISTORIAL
              </span>
              <input
                type="text"
                value={tournamentTitle}
                onChange={(e) => setTournamentTitle(e.target.value)}
                className="text-sm sm:text-base font-bold text-white font-cinzel bg-transparent border-b border-transparent hover:border-slate-700 focus:border-amber-400 outline-none"
              />
            </div>
          </div>

          {/* Navigation Tabs & Coins */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-amber-500/40 text-amber-300 font-bold text-xs">
              <Coins className="w-4 h-4 text-yellow-400" />
              <span>{oracleCoins} 🪙</span>
            </div>

            <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveTab('bracket')}
                className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition cursor-pointer flex items-center gap-1 ${
                  activeTab === 'bracket' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Trophy className="w-3.5 h-3.5" />
                <span>Cuadro</span>
              </button>

              <button
                onClick={() => setActiveTab('filter')}
                className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition cursor-pointer flex items-center gap-1 ${
                  activeTab === 'filter' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Filter className="w-3.5 h-3.5" />
                <span>Llenar por Filtros</span>
              </button>

              <button
                onClick={() => setActiveTab('history')}
                className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition cursor-pointer flex items-center gap-1 ${
                  activeTab === 'history' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <History className="w-3.5 h-3.5" />
                <span>Historial ({history.length})</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Toolbar (When in Bracket View) */}
        {activeTab === 'bracket' && (
          <div className="px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-slate-400 text-[11px]">Tamaño:</span>
              <div className="flex bg-slate-900 p-0.5 rounded-lg border border-slate-800">
                {[4, 8, 16].map(sz => (
                  <button
                    key={sz}
                    onClick={() => {
                      setTournamentSize(sz);
                      initTournament(sz);
                    }}
                    className={`px-2.5 py-0.5 rounded text-[11px] font-bold transition cursor-pointer ${
                      tournamentSize === sz ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {sz} Luchadores
                  </button>
                ))}
              </div>

              <button
                onClick={() => initTournament(tournamentSize)}
                className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-[10.5px] flex items-center gap-1 cursor-pointer"
                title="Mezclar y reiniciar cuadro"
              >
                <Shuffle className="w-3 h-3" />
                <span>Barajar</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => saveTournamentToHistory(tournamentTitle, champion, rounds)}
                className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-amber-500/40 text-amber-300 font-bold transition flex items-center gap-1.5 cursor-pointer shadow-sm text-[11px]"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Guardar Estado</span>
              </button>

              <button
                onClick={handleSimulateAllRemainingFast}
                disabled={!!champion}
                className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-500 hover:to-red-500 text-white font-bold transition flex items-center gap-1.5 cursor-pointer shadow-md text-[11px] disabled:opacity-50"
              >
                <FastForward className="w-3.5 h-3.5" />
                <span>Simular Todo</span>
              </button>
            </div>
          </div>
        )}

        {/* Toast Alert */}
        {toastMsg && (
          <div className="p-2.5 mx-4 mt-2 rounded-xl bg-amber-950/60 border border-amber-500/50 text-amber-200 text-xs flex items-center justify-between animate-in fade-in">
            <span>{toastMsg}</span>
          </div>
        )}

        {/* Modal Body: TAB 1 (BRACKET) */}
        {activeTab === 'bracket' && (
          <div className="p-4 sm:p-6 overflow-x-auto overflow-y-auto flex-1 flex gap-6 items-stretch min-w-[700px]">
            {rounds.map((round, rIdx) => (
              <div key={round.name} className="flex-1 flex flex-col justify-around gap-4 min-w-[240px]">
                <div className="text-center pb-2 border-b border-slate-800 font-bold font-cinzel text-amber-400 text-xs uppercase tracking-wider">
                  {round.name}
                </div>

                <div className="flex flex-col justify-around gap-4 flex-1">
                  {round.matches.map((match, mIdx) => {
                    const hasFighters = match.charA && match.charB;
                    const { oddsA, oddsB } = calculateOdds(match.charA, match.charB);
                    const activeBet = bets[match.id];

                    return (
                      <div 
                        key={match.id}
                        className={`p-3 rounded-2xl border transition shadow-lg relative ${
                          match.winner 
                            ? 'bg-slate-900/60 border-emerald-500/40' 
                            : hasFighters 
                              ? 'bg-slate-900 border-amber-500/40 hover:border-amber-400' 
                              : 'bg-slate-950/60 border-slate-800'
                        }`}
                      >
                        {/* Match Header */}
                        <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2 border-b border-slate-800 pb-1">
                          <span>{match.round}</span>
                          {match.winner ? (
                            <span className="text-emerald-400 font-bold flex items-center gap-1">
                              <CheckCircle className="w-3 h-3" /> Resuelto
                            </span>
                          ) : hasFighters ? (
                            <span className="text-amber-400 font-bold animate-pulse">
                              ⚔️ Listo
                            </span>
                          ) : (
                            <span className="text-slate-600">Esperando</span>
                          )}
                        </div>

                        {/* Fighter A */}
                        <div className={`p-2 rounded-xl border flex items-center justify-between gap-2 mb-1.5 transition ${
                          match.winner?.id === match.charA?.id 
                            ? 'bg-emerald-950/40 border-emerald-500/60 text-emerald-300 font-bold' 
                            : match.charA 
                              ? 'bg-slate-950 border-slate-800 text-slate-200' 
                              : 'bg-slate-950/40 border-dashed border-slate-800 text-slate-600'
                        }`}>
                          <div className="flex items-center gap-2 truncate">
                            {match.charA && (
                              <div className="w-6 h-6 rounded-lg overflow-hidden bg-slate-900 shrink-0">
                                <img src={match.charA.avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(match.charA.name)}`} alt="" className="w-full h-full object-contain" />
                              </div>
                            )}
                            <span className="truncate text-xs">{match.charA?.name || 'Por definir...'}</span>
                          </div>
                          {match.charA && !match.winner && (
                            <button
                              onClick={() => handlePlaceBet(match.id, match.charA, oddsA)}
                              disabled={!!activeBet}
                              className={`px-1.5 py-0.5 rounded text-[9px] font-mono border transition ${
                                activeBet?.charId === match.charA.id 
                                  ? 'bg-yellow-500 text-black font-black border-yellow-400' 
                                  : 'bg-slate-900 border-amber-500/30 text-amber-300 hover:bg-amber-950'
                              }`}
                              title={`Apostar 50 monedas a ${match.charA.name}`}
                            >
                              x{oddsA}
                            </button>
                          )}
                        </div>

                        {/* Fighter B */}
                        <div className={`p-2 rounded-xl border flex items-center justify-between gap-2 transition ${
                          match.winner?.id === match.charB?.id 
                            ? 'bg-emerald-950/40 border-emerald-500/60 text-emerald-300 font-bold' 
                            : match.charB 
                              ? 'bg-slate-950 border-slate-800 text-slate-200' 
                              : 'bg-slate-950/40 border-dashed border-slate-800 text-slate-600'
                        }`}>
                          <div className="flex items-center gap-2 truncate">
                            {match.charB && (
                              <div className="w-6 h-6 rounded-lg overflow-hidden bg-slate-900 shrink-0">
                                <img src={match.charB.avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(match.charB.name)}`} alt="" className="w-full h-full object-contain" />
                              </div>
                            )}
                            <span className="truncate text-xs">{match.charB?.name || 'Por definir...'}</span>
                          </div>
                          {match.charB && !match.winner && (
                            <button
                              onClick={() => handlePlaceBet(match.id, match.charB, oddsB)}
                              disabled={!!activeBet}
                              className={`px-1.5 py-0.5 rounded text-[9px] font-mono border transition ${
                                activeBet?.charId === match.charB.id 
                                  ? 'bg-yellow-500 text-black font-black border-yellow-400' 
                                  : 'bg-slate-900 border-amber-500/30 text-amber-300 hover:bg-amber-950'
                              }`}
                              title={`Apostar 50 monedas a ${match.charB.name}`}
                            >
                              x{oddsB}
                            </button>
                          )}
                        </div>

                        {/* Log / Resolution Controls */}
                        {hasFighters && !match.winner && (
                          <div className="mt-2 pt-2 border-t border-slate-800 flex items-center justify-between gap-1">
                            <button
                              onClick={() => handleSimulateFast(rIdx, mIdx)}
                              className="flex-1 py-1 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-bold text-[10px] transition cursor-pointer flex items-center justify-center gap-1 shadow-sm"
                            >
                              <Play className="w-3 h-3" />
                              <span>Resolver</span>
                            </button>
                          </div>
                        )}

                        {match.log && (
                          <p className="mt-2 text-[10px] text-slate-400 italic bg-slate-950 p-2 rounded-lg border border-slate-800">
                            {match.log}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Champion Podium */}
            {champion && (
              <div className="flex-1 flex flex-col items-center justify-center min-w-[240px] p-6 rounded-3xl bg-gradient-to-b from-amber-950/40 via-slate-900 to-slate-950 border-2 border-amber-400 shadow-[0_0_50px_rgba(245,158,11,0.4)] animate-in zoom-in-95">
                <Crown className="w-12 h-12 text-yellow-400 animate-bounce mb-2" />
                <span className="text-[11px] text-amber-400 font-bold uppercase tracking-widest block text-center">
                  🏆 CAMPEÓN DEL MULTIVERSO 🏆
                </span>
                <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-yellow-400 shadow-xl my-3 bg-slate-950">
                  <img src={champion.avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(champion.name)}`} alt="" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-base font-black text-white font-cinzel text-center">{champion.name}</h3>
                <span className="text-xs text-amber-300 font-mono text-center mt-1">{champion.universe}</span>
                <span className="text-[11px] text-slate-400 font-mono text-center mt-0.5">{champion.tier}</span>
              </div>
            )}
          </div>
        )}

        {/* Modal Body: TAB 2 (ADVANCED FILTER & RANDOMIZER) */}
        {activeTab === 'filter' && (
          <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-5">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-950/40 via-slate-900 to-purple-950/40 border border-purple-500/40 space-y-1">
              <h4 className="font-bold text-white text-sm font-cinzel flex items-center gap-2">
                <Filter className="w-4 h-4 text-purple-400" />
                <span>Generador Temático & Aleatorio Multiversal</span>
              </h4>
              <p className="text-slate-400 text-xs">
                Selecciona una franquicia, universo, tier de poder o arquetipo de combate para generar un torneo a medida.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Franchise / Universe Group */}
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <label className="block text-slate-300 font-bold text-xs">Franquicia o Universo:</label>
                <select
                  value={filterFranchise}
                  onChange={(e) => setFilterFranchise(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-white text-xs outline-none"
                >
                  <option value="all">Todas las Franquicias ({characters.length} Luchadores)</option>
                  {FRANCHISE_GROUPS.filter(g => g.id !== 'other').map(g => (
                    <option key={g.id} value={g.id}>{g.label}</option>
                  ))}
                </select>
              </div>

              {/* Tier Range */}
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <label className="block text-slate-300 font-bold text-xs">Rango de Tier de Poder:</label>
                <select
                  value={filterTier}
                  onChange={(e) => setFilterTier(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-white text-xs outline-none"
                >
                  <option value="all">Todos los Tiers (Desde Humano hasta Omni)</option>
                  <option value="cosmic">🌌 Cósmico & Multiversal (Tier 1 a 3)</option>
                  <option value="planetary">💥 Planetario & Estelar (Tier 4 a 5)</option>
                  <option value="continental">🌋 Continental & País (Tier 6 a 7-A)</option>
                  <option value="street">🥋 Callejero, Marcial & Humano (Tier 7-B a 10)</option>
                </select>
              </div>

              {/* Combat Tag / Arquetipo */}
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <label className="block text-slate-300 font-bold text-xs">Arquetipo o Hax de Combate:</label>
                <select
                  value={filterTag}
                  onChange={(e) => setFilterTag(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-white text-xs outline-none"
                >
                  <option value="all">Cualquier Tipo de Hax</option>
                  <option value="stand">Usuarios de Stand (JoJo)</option>
                  <option value="ki divino">Ki Divino / Dioses</option>
                  <option value="regenera">Regeneración Celular</option>
                  <option value="espadachin">Espadachines / Armas</option>
                  <option value="artes marciales">Artes Marciales Puras</option>
                  <option value="maldita">Energía Maldita / Hechiceros</option>
                  <option value="nen">Usuarios de Nen</option>
                </select>
              </div>

              {/* Seeding Strategy */}
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <label className="block text-slate-300 font-bold text-xs">Método de Emparejamiento:</label>
                <select
                  value={seedMode}
                  onChange={(e) => setSeedMode(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-white text-xs outline-none"
                >
                  <option value="random">🎲 Caótico / Azar Absoluto</option>
                  <option value="balanced">⚖️ Equilibrado por Tiers (Evita Speedblitz en Ronda 1)</option>
                </select>
              </div>

            </div>

            {/* Generate Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleGenerateFilteredTournament}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-purple-600 via-amber-600 to-red-600 hover:from-purple-500 hover:to-red-500 text-white font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-purple-950 text-sm"
              >
                <Sparkles className="w-4 h-4" />
                <span>Generar Torneo con estos Filtros ({tournamentSize} Guerreros)</span>
              </button>
            </div>
          </div>
        )}

        {/* Modal Body: TAB 3 (TOURNAMENT HISTORY & SAVED) */}
        {activeTab === 'history' && (
          <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-3">
            {history.length === 0 ? (
              <div className="p-8 text-center text-slate-500 space-y-2">
                <Trophy className="w-10 h-10 mx-auto text-slate-700" />
                <p>Aún no has guardado ningún torneo en el historial.</p>
                <p className="text-[11px]">Cuando completes o guardes un torneo en el cuadro, aparecerá aquí con su podio y combates.</p>
              </div>
            ) : (
              history.map((t) => (
                <div 
                  key={t.id}
                  className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-amber-500/40 transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-amber-500/40 p-1 overflow-hidden shrink-0 flex items-center justify-center">
                      {t.champion ? (
                        <img src={t.champion.avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(t.champion.name)}`} alt="" className="w-full h-full object-contain" />
                      ) : (
                        <Trophy className="w-6 h-6 text-amber-500" />
                      )}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-white text-xs sm:text-sm font-cinzel">{t.title}</h4>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                          {t.size} Guerreros
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        🏆 Campeón: <strong className="text-amber-300">{t.champion?.name || 'En curso...'}</strong> · {new Date(t.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                    <button
                      type="button"
                      onClick={() => handleLoadTournament(t)}
                      className="px-3 py-1.5 rounded-xl bg-amber-600/30 hover:bg-amber-600/50 border border-amber-500/50 text-amber-300 font-bold text-xs transition cursor-pointer flex items-center gap-1.5"
                    >
                      <Play className="w-3 h-3" />
                      <span>Cargar</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleExportTournamentMarkdown(t)}
                      className="p-2 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition cursor-pointer"
                      title="Exportar Resumen a Markdown"
                    >
                      <Download className="w-3.5 h-3.5 text-cyan-400" />
                    </button>

                    <button
                      type="button"
                      onClick={(e) => handleDeleteHistoryTournament(t.id, e)}
                      className="p-2 rounded-xl bg-slate-950 hover:bg-red-950 border border-slate-700 text-slate-400 hover:text-red-400 transition cursor-pointer"
                      title="Eliminar del historial"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Footer */}
        <div className="p-3 border-t border-slate-800 bg-slate-950 flex items-center justify-between text-xs font-mono">
          <span className="text-slate-500 text-[11px]">
            💡 Puedes apostar Monedas del Oráculo en cualquier combate antes de resolverlo para multiplicar tus ganancias.
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold border border-slate-800 transition cursor-pointer"
          >
            Cerrar Torneo
          </button>
        </div>
      </div>
    </div>
  );
}
