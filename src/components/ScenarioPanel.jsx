import React, { useState, useEffect } from 'react';
import { 
  MapPin, Skull, Clock, Heart, Sliders, Zap, Shield, Globe, 
  Swords, AlertTriangle, Plus, Trash2, Flame, Thermometer, Compass, Sparkles, RefreshCw, FastForward
} from 'lucide-react';
import { SCENARIOS } from '../data/scenarios';
import { SimulationEngine } from '../services/simulationEngine';

const STORAGE_KEY_CUSTOM_SCENARIOS = 'apex_custom_scenarios';

export default function ScenarioPanel({ scenario, setScenario, modifiers, setModifiers, charA, charB, aiConfig }) {
  const [isGeneratingPremise, setIsGeneratingPremise] = useState(false);
  const [customScenarios, setCustomScenarios] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_CUSTOM_SCENARIOS);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCreatingArena, setIsCreatingArena] = useState(false);
  const [newArena, setNewArena] = useState({
    name: '',
    universe: '',
    sensory: '',
    gravity: '1G (Tierra Estándar)',
    temperature: 'Templada (22°C)',
    terrainEffect: ''
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_CUSTOM_SCENARIOS, JSON.stringify(customScenarios));
    } catch (e) {
      console.error(e);
    }
  }, [customScenarios]);

  const allScenarios = [...SCENARIOS, ...customScenarios];

  const handleAddArena = (e) => {
    e.preventDefault();
    if (!newArena.name.trim()) return;

    const created = {
      id: `custom-${Date.now()}`,
      name: newArena.name.trim(),
      universe: newArena.universe.trim() || 'Universo Personalizado',
      desc: newArena.sensory.trim(),
      sensory: newArena.sensory.trim(),
      gravity: newArena.gravity,
      temperature: newArena.temperature,
      terrainEffect: newArena.terrainEffect.trim() || 'Sin peligros adicionales.',
      isCustom: true
    };

    setCustomScenarios(prev => [created, ...prev]);
    setScenario(created);
    setIsCreatingArena(false);
    setNewArena({
      name: '',
      universe: '',
      sensory: '',
      gravity: '1G (Tierra Estándar)',
      temperature: 'Templada (22°C)',
      terrainEffect: ''
    });
  };

  const handleDeleteCustomArena = (id, e) => {
    e.stopPropagation();
    setCustomScenarios(prev => prev.filter(s => s.id !== id));
    if (scenario.id === id) {
      setScenario(SCENARIOS[0]);
    }
  };

  return (
    <div className="rounded-2xl glass-panel p-5 border border-slate-800/80 shadow-xl space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2">
          <Sliders className="w-4 h-4 text-red-500" />
          <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
            Presets & Modificadores de Escenario
          </h3>
        </div>
        <button
          onClick={() => setIsCreatingArena(true)}
          className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-red-600/20 hover:bg-red-600/30 text-red-400 border border-red-500/30 text-xs font-mono transition cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Crear Arena</span>
        </button>
      </div>

      {/* Arena Selector Grid */}
      <div>
        <label className="block text-xs font-mono text-slate-300 mb-2 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-red-400" />
            <span>Campo de Batalla / Terreno:</span>
          </span>
          <span className="text-[10px] text-slate-500">
            {allScenarios.length} arenas disponibles
          </span>
        </label>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-h-48 overflow-y-auto pr-1">
          {allScenarios.map((s) => {
            const active = scenario.id === s.id;
            return (
              <div
                key={s.id}
                onClick={() => setScenario(s)}
                className={`p-3 rounded-xl text-left border transition-all cursor-pointer relative group ${
                  active
                    ? 'bg-red-950/40 border-red-500/60 text-white shadow-md shadow-red-950/50'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <div className="font-bold text-xs line-clamp-1">{s.name}</div>
                <div className="text-[10px] font-mono text-slate-400 line-clamp-1">{s.universe}</div>
                
                {s.isCustom && (
                  <button
                    onClick={(e) => handleDeleteCustomArena(s.id, e)}
                    className="absolute top-2 right-2 p-1 text-slate-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition"
                    title="Eliminar arena personalizada"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Selected Arena Sensory Details & Physics */}
        <div className="mt-2 text-[11px] text-slate-300 font-mono bg-slate-950/80 p-3 rounded-xl border border-slate-800/80 space-y-1.5">
          <p className="italic text-slate-400">"{scenario.sensory}"</p>
          <div className="flex flex-wrap gap-3 pt-1 text-[10px] text-slate-400 border-t border-slate-900">
            {scenario.gravity && (
              <span className="flex items-center gap-1 text-amber-400">
                <Compass className="w-3 h-3" /> Gravedad: {scenario.gravity}
              </span>
            )}
            {scenario.temperature && (
              <span className="flex items-center gap-1 text-cyan-400">
                <Thermometer className="w-3 h-3" /> Clima: {scenario.temperature}
              </span>
            )}
            {scenario.terrainEffect && (
              <span className="flex items-center gap-1 text-red-400">
                <Flame className="w-3 h-3" /> Peligro: {scenario.terrainEffect}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* VS Battles Wiki Toggles */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
        {/* Bloodlust */}
        <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <Skull className="w-3.5 h-3.5 text-red-400" />
              <span>Bloodlust</span>
            </span>
            <button
              onClick={() => setModifiers(prev => ({ ...prev, bloodlust: !prev.bloodlust }))}
              className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase transition cursor-pointer ${
                modifiers.bloodlust ? 'bg-red-600 text-white shadow-[0_0_8px_rgba(220,38,38,0.5)]' : 'bg-slate-800 text-slate-400'
              }`}
            >
              {modifiers.bloodlust ? 'ON' : 'OFF'}
            </button>
          </div>
          <p className="text-[10px] text-slate-400 leading-tight">
            {modifiers.bloodlust ? 'Sin contención moral.' : 'Fiel a su psicología.'}
          </p>
        </div>

        {/* Speed Equalized */}
        <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <Zap className="w-3.5 h-3.5 text-yellow-400" />
              <span>Vel. Igualada</span>
            </span>
            <button
              onClick={() => setModifiers(prev => ({ ...prev, speedEqualized: !prev.speedEqualized }))}
              className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase transition cursor-pointer ${
                modifiers.speedEqualized ? 'bg-yellow-600 text-white shadow-[0_0_8px_rgba(202,138,4,0.5)]' : 'bg-slate-800 text-slate-400'
              }`}
            >
              {modifiers.speedEqualized ? 'ON' : 'OFF'}
            </button>
          </div>
          <p className="text-[10px] text-slate-400 leading-tight">
            {modifiers.speedEqualized ? 'Velocidad idéntica.' : 'Velocidad canon.'}
          </p>
        </div>

        {/* Stats Equalized */}
        <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <Shield className="w-3.5 h-3.5 text-blue-400" />
              <span>Stats Igualados</span>
            </span>
            <button
              onClick={() => setModifiers(prev => ({ ...prev, statsEqualized: !prev.statsEqualized }))}
              className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase transition cursor-pointer ${
                modifiers.statsEqualized ? 'bg-blue-600 text-white shadow-[0_0_8px_rgba(37,99,235,0.5)]' : 'bg-slate-800 text-slate-400'
              }`}
            >
              {modifiers.statsEqualized ? 'ON' : 'OFF'}
            </button>
          </div>
          <p className="text-[10px] text-slate-400 leading-tight">
            {modifiers.statsEqualized ? 'AP y Durabilidad igual.' : 'Stats de tier canon.'}
          </p>
        </div>

        {/* Verse Equalization */}
        <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>Igualar Versos</span>
            </span>
            <button
              onClick={() => setModifiers(prev => ({ ...prev, verseEqualization: !prev.verseEqualization }))}
              className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase transition cursor-pointer ${
                modifiers.verseEqualization ? 'bg-emerald-600 text-white shadow-[0_0_8px_rgba(5,150,105,0.5)]' : 'bg-slate-800 text-slate-400'
              }`}
            >
              {modifiers.verseEqualization ? 'ON' : 'OFF'}
            </button>
          </div>
          <p className="text-[10px] text-slate-400 leading-tight">
            {modifiers.verseEqualization ? 'Ki = Magia = Quirks.' : 'Sistemas aislados.'}
          </p>
        </div>
      </div>

      {/* Narrative Presets Selector & Black Swan */}
      <div className="pt-3 border-t border-slate-800/80 space-y-3 font-mono">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold text-fuchsia-400 uppercase tracking-wider flex items-center gap-2">
            <Globe className="w-3.5 h-3.5" /> Selector de Filtro Narrativo & Oráculo
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Preset Grimdark */}
          <button
            onClick={() => setModifiers(prev => ({ ...prev, narrativePreset: 'Grimdark / Brutal' }))}
            className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
              modifiers.narrativePreset === 'Grimdark / Brutal'
                ? 'bg-red-950/50 border-red-500 text-white shadow-lg shadow-red-950/40'
                : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="flex items-center gap-2 font-bold text-xs text-red-400">
              <span>🩸</span>
              <span>Grimdark / Brutal</span>
            </div>
            <p className="text-[10px] text-slate-400 mt-1 leading-tight">
              Coste anatómico real, fracturas, sangre y degradación biomecánica explícita.
            </p>
          </button>

          {/* Preset Shonen */}
          <button
            onClick={() => setModifiers(prev => ({ ...prev, narrativePreset: 'Shōnen Cinematográfico' }))}
            className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
              modifiers.narrativePreset === 'Shōnen Cinematográfico' || modifiers.narrativePreset === 'Equilibrado'
                ? 'bg-amber-950/50 border-amber-500 text-white shadow-lg shadow-amber-950/40'
                : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="flex items-center gap-2 font-bold text-xs text-amber-400">
              <span>⚡</span>
              <span>Shōnen Cinematográfico</span>
            </div>
            <p className="text-[10px] text-slate-400 mt-1 leading-tight">
              Coreografía épica, choques de energía y superación dramática de límites.
            </p>
          </button>

          {/* Preset VS Battles */}
          <button
            onClick={() => setModifiers(prev => ({ ...prev, narrativePreset: 'Análisis Técnico (VS Battles)' }))}
            className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
              modifiers.narrativePreset === 'Análisis Técnico (VS Battles)'
                ? 'bg-cyan-950/50 border-cyan-500 text-white shadow-lg shadow-cyan-950/40'
                : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="flex items-center gap-2 font-bold text-xs text-cyan-400">
              <span>📐</span>
              <span>Análisis VS Battles</span>
            </div>
            <p className="text-[10px] text-slate-400 mt-1 leading-tight">
              Resolución matemática estricta: Joules, Mach y jerarquía de Hax basada en feats.
            </p>
          </button>
        </div>

        {/* Oraculo Cisne Negro Toggle */}
        <div className="p-3 rounded-xl bg-slate-900/50 border border-fuchsia-900/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-fuchsia-400" />
            <div>
              <span className="text-xs font-bold text-slate-200 block">Oráculo: Evento Cisne Negro</span>
              <span className="text-[10px] text-slate-400">Introduce un giro inesperado en la Fase 3 (colapso del mapa o 3er contendiente).</span>
            </div>
          </div>
          <button
            onClick={() => setModifiers(prev => ({ ...prev, blackSwan: !prev.blackSwan }))}
            className={`px-3 py-1 rounded text-xs font-bold uppercase transition cursor-pointer ${
              modifiers.blackSwan ? 'bg-fuchsia-600 text-white shadow-[0_0_10px_rgba(192,38,211,0.6)]' : 'bg-slate-800 text-slate-400'
            }`}
          >
            {modifiers.blackSwan ? 'ACTIVADO' : 'APAGADO'}
          </button>
        </div>
      </div>

      {/* Formato de Simulación: Fases vs Crónica vs Episódico */}
      <div className="pt-3 border-t border-slate-800/80 space-y-3 font-mono">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
            <FastForward className="w-3.5 h-3.5" /> Modo de Narrativa y Ritmo de Simulación
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
          <button
            onClick={() => setModifiers(prev => ({ ...prev, simulationMode: 'fases' }))}
            className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
              (modifiers.simulationMode || 'fases') === 'fases'
                ? 'bg-amber-950/40 border-amber-500 text-white shadow-md'
                : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="font-bold text-xs text-amber-400 flex items-center gap-1.5">
              <span>⚡</span>
              <span>5 Fases + Veredicto</span>
            </div>
            <p className="text-[10px] text-slate-400 mt-1 leading-tight">
              Estructura canónica APEX con barras biométricas de HP/Stamina en cada fase.
            </p>
          </button>

          <button
            onClick={() => setModifiers(prev => ({ ...prev, simulationMode: 'cronica' }))}
            className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
              modifiers.simulationMode === 'cronica'
                ? 'bg-blue-950/40 border-blue-500 text-white shadow-md'
                : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="font-bold text-xs text-blue-400 flex items-center gap-1.5">
              <span>📜</span>
              <span>Crónica Continua (Novela)</span>
            </div>
            <p className="text-[10px] text-slate-400 mt-1 leading-tight">
              Relato fluido y cinematográfico sin divisiones de fases rígidas.
            </p>
          </button>

          <button
            onClick={() => setModifiers(prev => ({ ...prev, simulationMode: 'episodico' }))}
            className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
              modifiers.simulationMode === 'episodico'
                ? 'bg-purple-950/40 border-purple-500 text-white shadow-md'
                : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="font-bold text-xs text-purple-400 flex items-center gap-1.5">
              <span>🎬</span>
              <span>Modo Episódico / Por Actos</span>
            </div>
            <p className="text-[10px] text-slate-400 mt-1 leading-tight">
              Genera por partes con final abierto (Cliffhanger) para continuar la historia a tu ritmo.
            </p>
          </button>
        </div>
      </div>

      {/* Custom Context / Premisa Inicial Personalizada */}
      <div className="pt-3 border-t border-slate-800/80 space-y-2 font-mono">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <label className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
            <span className="text-emerald-400">✍️</span>
            <span>Premisa, Contexto Previo o Reglas Especiales:</span>
          </label>

          <button
            type="button"
            disabled={isGeneratingPremise}
            onClick={async () => {
              if (!aiConfig) {
                alert('Configura primero un motor de IA en Ajustes de IA.');
                return;
              }
              setIsGeneratingPremise(true);
              try {
                const generated = await SimulationEngine.generateQuickPremise(
                  charA || { name: 'Contendiente A' },
                  charB || { name: 'Contendiente B' },
                  scenario || { name: 'Arena Estándar' },
                  aiConfig
                );
                setModifiers(prev => ({ ...prev, customContext: generated }));
              } catch (err) {
                alert(`Error al generar premisa: ${err.message || err}`);
              } finally {
                setIsGeneratingPremise(false);
              }
            }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-[11px] font-bold shadow-md shadow-emerald-950/50 transition cursor-pointer disabled:opacity-50"
          >
            {isGeneratingPremise ? (
              <>
                <RefreshCw className="w-3 h-3 animate-spin" />
                <span>Generando...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-3 h-3" />
                <span>🎲 Generar Premisa con IA</span>
              </>
            )}
          </button>
        </div>

        {/* Quick Premise Chips */}
        <div className="flex items-center gap-1.5 flex-wrap text-[10px]">
          <span className="text-slate-400">Plantillas rápidas:</span>
          <button
            type="button"
            onClick={() => setModifiers(prev => ({ ...prev, customContext: `Torneo del Infierno organizado por Janemba en la dimensión de los caídos. ${charA?.name || 'Contendiente A'} llega con el brazo herido tras enfrentar a Beerus en semifinales. Prohibido usar ataques de borrado universal por reglas del torneo.` }))}
            className="px-2 py-0.5 rounded-lg bg-slate-900 hover:bg-emerald-900/40 text-slate-300 hover:text-emerald-200 border border-slate-800 transition cursor-pointer"
          >
            🏆 Torneo del Infierno
          </button>
          <button
            type="button"
            onClick={() => setModifiers(prev => ({ ...prev, customContext: `${charA?.name || 'Contendiente A'} entra al combate con un 15% de Stamina restante y el brazo derecho inutilizado por la batalla anterior. ${charB?.name || 'Contendiente B'} busca terminar el duelo rápidamente pero respeta el código de honor.` }))}
            className="px-2 py-0.5 rounded-lg bg-slate-900 hover:bg-emerald-900/40 text-slate-300 hover:text-emerald-200 border border-slate-800 transition cursor-pointer"
          >
            🩸 Handicap por Lesión
          </button>
          <button
            type="button"
            onClick={() => setModifiers(prev => ({ ...prev, customContext: "Una estrella supernova colapsará en exactamente 180 segundos. El campo de batalla se desintegra segundo a segundo y quien no gane antes del tiempo límite morirá en la explosión." }))}
            className="px-2 py-0.5 rounded-lg bg-slate-900 hover:bg-emerald-900/40 text-slate-300 hover:text-emerald-200 border border-slate-800 transition cursor-pointer"
          >
            ⏳ Duelo a Contrareloj (Supernova)
          </button>
          <button
            type="button"
            onClick={() => setModifiers(prev => ({ ...prev, customContext: "Combate a Primera Sangre: El choque termina inmediatamente cuando uno de los luchadores sufra un corte o herida visible. No se permiten transformaciones definitivas hasta el minuto 2." }))}
            className="px-2 py-0.5 rounded-lg bg-slate-900 hover:bg-emerald-900/40 text-slate-300 hover:text-emerald-200 border border-slate-800 transition cursor-pointer"
          >
            ⚔️ Primera Sangre (Reglas de Torneo)
          </button>
        </div>

        <textarea
          rows={2}
          value={modifiers.customContext || ''}
          onChange={(e) => setModifiers(prev => ({ ...prev, customContext: e.target.value }))}
          placeholder="Ej: 'Torneo del Infierno organizado por Janemba. Goku Super llega con el brazo herido tras enfrentar a Beerus, mientras Goku GT tiene prohibido usar la Genkidama...'"
          className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:border-emerald-500 focus:outline-none transition resize-y font-sans leading-relaxed placeholder:text-slate-600"
        />
      </div>

      {/* Modal Creación de Arena */}
      {isCreatingArena && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 max-w-lg w-full space-y-4 shadow-2xl font-mono text-xs">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white uppercase flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-400" /> Creador de Arena / Escenario
              </h3>
              <button onClick={() => setIsCreatingArena(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <form onSubmit={handleAddArena} className="space-y-3">
              <div>
                <label className="block text-slate-300 mb-1">Nombre de la Arena:</label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Núcleo de Namek en Colapso"
                  value={newArena.name}
                  onChange={(e) => setNewArena(p => ({ ...p, name: e.target.value }))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-slate-300 mb-1">Universo / Origen:</label>
                  <input
                    type="text"
                    placeholder="Ej. Dragon Ball Z"
                    value={newArena.universe}
                    onChange={(e) => setNewArena(p => ({ ...p, universe: e.target.value }))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1">Gravedad:</label>
                  <input
                    type="text"
                    placeholder="Ej. 100G / Cero Gravedad"
                    value={newArena.gravity}
                    onChange={(e) => setNewArena(p => ({ ...p, gravity: e.target.value }))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-slate-300 mb-1">Temperatura / Clima:</label>
                  <input
                    type="text"
                    placeholder="Ej. 1500°C Magma / Cero Absoluto"
                    value={newArena.temperature}
                    onChange={(e) => setNewArena(p => ({ ...p, temperature: e.target.value }))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1">Peligros Ambientales:</label>
                  <input
                    type="text"
                    placeholder="Ej. Erupciones y colapso en 5 min"
                    value={newArena.terrainEffect}
                    onChange={(e) => setNewArena(p => ({ ...p, terrainEffect: e.target.value }))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 mb-1">Descripción Sensorial (Atmósfera):</label>
                <textarea
                  rows={2}
                  placeholder="Describe los olores, sonidos, iluminación y textura del entorno..."
                  value={newArena.sensory}
                  onChange={(e) => setNewArena(p => ({ ...p, sensory: e.target.value }))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsCreatingArena(false)}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold cursor-pointer shadow-lg shadow-red-950/50"
                >
                  Guardar Arena
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
