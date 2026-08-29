import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CharacterCard from './components/CharacterCard';
import CharacterModal from './components/CharacterModal';
import ScenarioPanel from './components/ScenarioPanel';
import MatchupMatrix from './components/MatchupMatrix';
import SimulationViewer from './components/SimulationViewer';
import WhatIfTree from './components/WhatIfTree';
import VaultBrowserModal from './components/VaultBrowserModal';
import AiConfigModal from './components/AiConfigModal';
import MultiFighterPanel from './components/MultiFighterPanel';
import TournamentModal from './components/TournamentModal';
import { INITIAL_CHARACTERS } from './data/characters';
import { SCENARIOS } from './data/scenarios';
import { SimulationEngine } from './services/simulationEngine';
import { Sparkles, Key, Settings, BookOpen, Swords } from 'lucide-react';

const STORAGE_KEY_CHARACTERS = 'apex_custom_characters';

const DEFAULT_AI_CONFIG = {
  characterEngine: {
    engine: 'totalgpt',
    model: 'Qwen-Qwen3.6-35B-A3B',
    apiKey: '',
    customBaseUrl: ''
  },
  simulationEngine: {
    engine: 'totalgpt',
    model: 'Doctor-Shotgun-L3.3-70B-Magnum-v4-SE',
    apiKey: '',
    customBaseUrl: ''
  }
};

export default function App() {
  // Load characters from localStorage if available, or fall back to INITIAL_CHARACTERS
  const [characters, setCharacters] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_CHARACTERS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Error cargando personajes:', e);
    }
    return INITIAL_CHARACTERS;
  });

  const [charA, setCharA] = useState(characters[0] || INITIAL_CHARACTERS[0]);
  const [charB, setCharB] = useState(characters[1] || INITIAL_CHARACTERS[1]);
  const [matchMode, setMatchMode] = useState('1v1'); // '1v1' | 'teams' | 'battle_royale'
  const [teamA, setTeamA] = useState([characters[0] || INITIAL_CHARACTERS[0], characters[1] || INITIAL_CHARACTERS[1]]);
  const [teamB, setTeamB] = useState([characters[2] || INITIAL_CHARACTERS[0], characters[3] || INITIAL_CHARACTERS[1]]);
  const [battleRoyale, setBattleRoyale] = useState(characters.slice(0, 4));

  const [scenario, setScenario] = useState(SCENARIOS[0]);
  const [mode, setMode] = useState('MODO VS');

  const [modifiers, setModifiers] = useState({
    bloodlust: false,
    speedEqualized: false,
    statsEqualized: false,
    verseEqualization: false,
    prepTime: 'Sin Preparación (Encuentro Espontáneo)',
    healthState: '100% Óptimo (Sin Heridas / Energía Plena)',
    winCondition: 'Muerte o Incapacitación Total',
    narrativePreset: 'Equilibrado',
    blackSwan: false,
    butterflyEffect: true,
    simulationMode: 'fases',
    customContext: ''
  });

  const [inspectModal, setInspectModal] = useState({ isOpen: false, character: null, isEditing: false });
  const [vaultModalOpen, setVaultModalOpen] = useState(false);
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [isTournamentOpen, setIsTournamentOpen] = useState(false);
  const [vaultStatus, setVaultStatus] = useState({ connected: false });

  const [isSimulating, setIsSimulating] = useState(false);
  const [progress, setProgress] = useState({ percent: 0, step: '' });
  
  // Persist characters on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_CHARACTERS, JSON.stringify(characters));
    } catch (e) {
      console.error('Error guardando personajes en localStorage:', e);
    }
  }, [characters]);

  // Persist AI Config in localStorage
  const [aiConfig, setAiConfig] = useState(() => {
    try {
      const saved = localStorage.getItem('apex_ai_config');
      if (!saved) return DEFAULT_AI_CONFIG;
      const parsed = JSON.parse(saved);
      if (parsed.characterEngine && parsed.simulationEngine) {
        return parsed;
      }
      return {
        characterEngine: { ...parsed, model: 'Qwen-Qwen3.6-35B-A3B' },
        simulationEngine: { ...parsed }
      };
    } catch (e) {
      return DEFAULT_AI_CONFIG;
    }
  });

  const [simulationResult, setSimulationResult] = useState(null);

  useEffect(() => {
    fetch('/api/vault/status')
      .then(res => res.json())
      .then(data => setVaultStatus(data))
      .catch(() => setVaultStatus({ connected: false }));
  }, []);

  const handleSaveAiConfig = (newConfig) => {
    setAiConfig(newConfig);
    try {
      localStorage.setItem('apex_ai_config', JSON.stringify(newConfig));
    } catch (e) {}
  };

  const charEngine = aiConfig.characterEngine || aiConfig;
  const simEngine = aiConfig.simulationEngine || aiConfig;

  const handleStartSimulation = async () => {
    setIsSimulating(true);
    setSimulationResult({ fullOutput: '' });
    setProgress({ percent: 10, step: 'Generando Prompt Maestro OMNI-TITÁN...' });

    try {
      const prompt = SimulationEngine.generateMasterPrompt(
        charA, 
        charB, 
        scenario, 
        { ...modifiers, matchMode },
        teamA,
        teamB,
        battleRoyale
      );
      setProgress({ percent: 25, step: `Conectando con ${simEngine.engine.toUpperCase()} (${simEngine.model})...` });
      
      let currentText = '';
      await SimulationEngine.streamSimulation(
        prompt, 
        simEngine,
        (token) => {
          currentText += token;
          setSimulationResult({ fullOutput: currentText });
          setProgress({ percent: 80, step: 'Generando Prosa de Combate en Vivo...' });
        },
        () => {
          setProgress({ percent: 100, step: 'Simulación Completada' });
          setIsSimulating(false);
        },
        (error) => {
          console.error('Stream error:', error);
          setSimulationResult({ fullOutput: currentText + '\n\n[ERROR: ' + error + ']' });
          setIsSimulating(false);
        }
      );
    } catch (err) {
      console.error('Simulation error:', err);
      setSimulationResult({ fullOutput: `[ERROR CRÍTICO AL INICIAR]: ${err.message || err}` });
      setIsSimulating(false);
    }
  };

  const handleContinueSimulation = async (userPromptNext = '') => {
    if (isSimulating || !simulationResult?.fullOutput) return;
    setIsSimulating(true);
    setProgress({ percent: 15, step: 'Preparando siguiente acto / continuación...' });

    try {
      const continuationPrompt = SimulationEngine.generateContinuationPrompt(
        simulationResult.fullOutput,
        userPromptNext,
        charA,
        charB,
        scenario,
        modifiers
      );

      let currentText = simulationResult.fullOutput + '\n\n';

      await SimulationEngine.streamSimulation(
        continuationPrompt,
        simEngine,
        (token) => {
          currentText += token;
          setSimulationResult({ fullOutput: currentText });
          setProgress({ percent: 80, step: 'Escribiendo continuación de la historia...' });
        },
        () => {
          setProgress({ percent: 100, step: 'Continuación Completada' });
          setIsSimulating(false);
        },
        (error) => {
          console.error('Stream continuation error:', error);
          setSimulationResult({ fullOutput: currentText + '\n\n[ERROR: ' + error + ']' });
          setIsSimulating(false);
        }
      );
    } catch (err) {
      console.error('Continuation error:', err);
      setIsSimulating(false);
    }
  };

  const handleSaveCustomCharacter = (newChar) => {
    setCharacters(prev => {
      const existsIndex = prev.findIndex(c => c.id === newChar.id);
      let updated;
      if (existsIndex !== -1) {
        updated = [...prev];
        updated[existsIndex] = newChar;
      } else {
        updated = [newChar, ...prev];
      }
      try {
        localStorage.setItem(STORAGE_KEY_CHARACTERS, JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });

    if (charA.id === newChar.id || !charA.id) setCharA(newChar);
    if (charB.id === newChar.id) setCharB(newChar);
  };

  const handleDeleteCharacter = (charId) => {
    if (characters.length <= 2) {
      alert('Debes mantener al menos 2 luchadores en la lista.');
      return;
    }
    const updated = characters.filter(c => c.id !== charId);
    setCharacters(updated);
    if (charA.id === charId) setCharA(updated[0]);
    if (charB.id === charId) setCharB(updated[1]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#06080d] text-slate-100">
      <Navbar
        mode={mode}
        setMode={setMode}
        vaultStatus={vaultStatus}
        onOpenVault={() => setVaultModalOpen(true)}
        onOpenNewCharacter={() => setInspectModal({ isOpen: true, character: null, isEditing: true })}
        onOpenAiConfig={() => setAiModalOpen(true)}
        onOpenTournament={() => setIsTournamentOpen(true)}
        aiConfig={simEngine}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 lg:px-8 py-6 space-y-6">
        
        {/* Banner de Estado Dual de los Motores de IA */}
        <div className="p-3.5 px-4 rounded-xl glass-panel border border-slate-800/80 bg-slate-950/40 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-4 flex-wrap">
            {/* Slot 1: Crear Fichas */}
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                <BookOpen className="w-3.5 h-3.5" />
              </span>
              <div>
                <span className="text-slate-400 block text-[10px]">IA Fichas (JSON):</span>
                <span className="text-indigo-300 font-bold">{charEngine.engine.toUpperCase()} · </span>
                <span className="text-slate-200">{charEngine.model}</span>
              </div>
            </div>

            <span className="text-slate-700 hidden md:inline">|</span>

            {/* Slot 2: Simulación Combate */}
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30">
                <Swords className="w-3.5 h-3.5" />
              </span>
              <div>
                <span className="text-slate-400 block text-[10px]">IA Combate (Narrativa):</span>
                <span className="text-red-400 font-bold">{simEngine.engine.toUpperCase()} · </span>
                <span className="text-slate-200">{simEngine.model}</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setAiModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition cursor-pointer border border-slate-700"
          >
            <Settings className="w-3.5 h-3.5 text-amber-400" />
            <span>Configurar Motores IA</span>
          </button>
        </div>

        <MultiFighterPanel
          matchMode={matchMode}
          setMatchMode={setMatchMode}
          charA={charA}
          setCharA={setCharA}
          charB={charB}
          setCharB={setCharB}
          teamA={teamA}
          setTeamA={setTeamA}
          teamB={teamB}
          setTeamB={setTeamB}
          battleRoyale={battleRoyale}
          setBattleRoyale={setBattleRoyale}
          allCharacters={characters}
          onInspect={(char) => setInspectModal({ isOpen: true, character: char, isEditing: false })}
          onEdit={(char) => setInspectModal({ isOpen: true, character: char, isEditing: true })}
        />

        {matchMode === '1v1' && (
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CharacterCard
              role="Contendiente A"
              character={charA}
              allCharacters={characters}
              onSelectChange={setCharA}
              onInspect={(char) => setInspectModal({ isOpen: true, character: char, isEditing: false })}
              onEdit={(char) => setInspectModal({ isOpen: true, character: char, isEditing: true })}
              onDelete={handleDeleteCharacter}
            />

            <CharacterCard
              role="Contendiente B"
              character={charB}
              allCharacters={characters}
              onSelectChange={setCharB}
              onInspect={(char) => setInspectModal({ isOpen: true, character: char, isEditing: false })}
              onEdit={(char) => setInspectModal({ isOpen: true, character: char, isEditing: true })}
              onDelete={handleDeleteCharacter}
            />
          </section>
        )}

        <ScenarioPanel
          scenario={scenario}
          setScenario={setScenario}
          modifiers={modifiers}
          setModifiers={setModifiers}
          charA={charA}
          charB={charB}
          aiConfig={simEngine}
        />

        <MatchupMatrix
          charA={charA}
          charB={charB}
          modifiers={modifiers}
        />

        <SimulationViewer
          simulationResult={simulationResult}
          isSimulating={isSimulating}
          progress={progress}
          onStartSimulation={handleStartSimulation}
          onContinueSimulation={handleContinueSimulation}
          simulationData={{
            charA,
            charB,
            scenario,
            modifiers
          }}
        />

        <WhatIfTree
          modifiers={modifiers}
          setModifiers={setModifiers}
        />

      </main>

      {/* Modales */}
      {inspectModal.isOpen && (
        <CharacterModal
          character={inspectModal.character}
          isEditing={inspectModal.isEditing}
          onClose={() => setInspectModal({ isOpen: false, character: null, isEditing: false })}
          onSave={handleSaveCustomCharacter}
          aiConfig={charEngine}
        />
      )}

      <VaultBrowserModal
        isOpen={vaultModalOpen}
        onClose={() => setVaultModalOpen(false)}
      />

      <AiConfigModal
        isOpen={aiModalOpen}
        onClose={() => setAiModalOpen(false)}
        config={aiConfig}
        onSaveConfig={handleSaveAiConfig}
      />

      <TournamentModal
        isOpen={isTournamentOpen}
        onClose={() => setIsTournamentOpen(false)}
        characters={characters}
        scenario={scenario}
        modifiers={modifiers}
        aiConfig={simEngine}
        onOpenSimulationResult={(narrative, winnerA, winnerB) => {
          setCharA(winnerA);
          setCharB(winnerB);
          setSimulationResult({ fullOutput: narrative });
        }}
      />
    </div>
  );
}
