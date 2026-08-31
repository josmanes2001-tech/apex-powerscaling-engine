import React, { useState } from 'react';
import { Sparkles, X, Wand2, Swords, RefreshCw, AlertCircle, PlusCircle, Check, ArrowRight, Shield, Flame, Users, Skull, Crown } from 'lucide-react';
import { SimulationEngine } from '../services/simulationEngine';
import { SoundFX } from '../services/soundFx';

const QUICK_PROMPTS = [
  "1v1 entre Goku Mini SSJ3 Daima y Lord Boros",
  "Boss Raid: Lord Boros (Boss) contra All Might Prime, Genos y Tatsumaki",
  "Guerra de Equipos: Equipo Alfa con Gojo y Yuta vs Equipo Omega con Sukuna y Kenjaku",
  "Battle Royale entre Vegetto U16, Son Bra Majin, Zen Buu U4 y Gast Carcolh",
  "Boss Raid: Tamagami #3 Supremo contra Goku Mini SSJ3 Daima y Vegeta Mini SSJ3",
  "1v1 entre Nikola Tesla y All Might Prime en la Fortaleza de la U.A."
];

export default function AiSmartMatchmakerModal({
  isOpen,
  onClose,
  characters = [],
  aiConfig,
  onApplyMatchup,
  onSaveNewCharacter,
  lang = 'es'
}) {
  const [promptText, setPromptText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analyzedMatch, setAnalyzedMatch] = useState(null);
  const [missingChars, setMissingChars] = useState([]);
  const [isGeneratingChar, setIsGeneratingChar] = useState({});

  if (!isOpen) return null;

  // Intelligent parser using AI with heuristic fallback
  const handleAnalyzePrompt = async () => {
    if (!promptText.trim()) return;
    setIsAnalyzing(true);
    setAnalyzedMatch(null);
    setMissingChars([]);

    const characterNames = characters.map(c => ({ id: c.id, name: c.name, alias: c.alias, universe: c.universe }));

    const aiPrompt = `Eres el asistente maestro de emparejamientos y Power Scaling del APEX ENGINE.
Analiza la siguiente solicitud del usuario en lenguaje natural:
"${promptText.trim()}"

Lista de personajes disponibles en la base de datos (con IDs):
${JSON.stringify(characterNames.slice(0, 150))}

INSTRUCCIONES:
1. Detecta la modalidad de combate:
   - "1v1" si es un duelo entre 2 luchadores.
   - "boss" si es un Boss Raid (1 jefe vs 2 o más asaltantes, o si dice "boss raid", "1 vs 2", "1 vs 3").
   - "team" si es Guerra de Equipos (Equipo A/Alfa vs Equipo B/Omega).
   - "battleRoyale" si es Todos contra Todos (3 o más luchadores en la misma arena).
2. Asocia cada luchador mencionado con su personaje correspondiente en la base de datos mediante su "id".
3. Si el usuario menciona un personaje que NO está en la base de datos de personajes disponibles, colócalo en la lista "missingCharacters" con su nombre tal cual fue solicitado.
4. Si el usuario menciona una transformación específica (ej: "SSJ3", "Majin", "Prime", "Adulto", "Fase 4"), indícala en el campo "requestedForm".
5. Si el usuario menciona un mapa o escenario (ej: "Valhalla", "Castillo Infinito", "Domo Kourakuen", "Ring Multiverse"), indica su nombre.

Devuelve ÚNICAMENTE un JSON válido con este formato:
{
  "mode": "1v1" | "boss" | "team" | "battleRoyale",
  "scenarioName": "Nombre del mapa mencionado o null",
  "charA": { "id": "id-del-personaje", "requestedForm": "nombre o null" },
  "charB": { "id": "id-del-personaje", "requestedForm": "nombre o null" },
  "boss": { "id": "id-del-boss", "requestedForm": "nombre o null" },
  "squad": [{ "id": "id", "requestedForm": "nombre o null" }],
  "teamA": [{ "id": "id", "requestedForm": "nombre o null" }],
  "teamB": [{ "id": "id", "requestedForm": "nombre o null" }],
  "battleRoyale": [{ "id": "id", "requestedForm": "nombre o null" }],
  "missingCharacters": ["Nombre de personaje no encontrado 1"]
}`;

    try {
      let parsed = null;
      try {
        const response = await SimulationEngine.queryAiDirectly(aiPrompt, aiConfig, true);
        if (response) {
          const match = response.match(/\{[\s\S]*\}/);
          if (match) {
            parsed = JSON.parse(match[0]);
          }
        }
      } catch (err) {
        console.warn('AI prompt matchmaker failed, using heuristic:', err);
      }

      // Fallback heuristic if AI query is offline or fails
      if (!parsed) {
        parsed = heuristicParse(promptText, characters);
      }

      setAnalyzedMatch(parsed);
      setMissingChars(parsed.missingCharacters || []);
      SoundFX.playMenuClick?.();
    } catch (e) {
      alert('Error analizando la solicitud: ' + e.message);
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Heuristic parser helper
  const heuristicParse = (text, allChars) => {
    const lower = text.toLowerCase();
    let mode = '1v1';
    if (lower.includes('boss') || lower.includes('raid') || lower.includes('1 vs 2') || lower.includes('1 vs 3') || lower.includes('1v2') || lower.includes('1v3')) {
      mode = 'boss';
    } else if (lower.includes('equipo') || lower.includes('team') || lower.includes('alfa vs omega') || lower.includes('2 vs 2') || lower.includes('3 vs 3')) {
      mode = 'team';
    } else if (lower.includes('battle royale') || lower.includes('todos contra todos') || lower.includes('royale') || lower.includes('caos')) {
      mode = 'battleRoyale';
    }

    // Find characters mentioned
    const matched = [];
    const missing = [];
    allChars.forEach(c => {
      const n = c.name.toLowerCase();
      const simpleName = n.split('(')[0].trim();
      if (lower.includes(simpleName) || (c.alias && lower.includes(c.alias.toLowerCase()))) {
        if (!matched.find(m => m.id === c.id)) {
          matched.push({ id: c.id, name: c.name, char: c });
        }
      }
    });

    if (mode === 'boss') {
      return {
        mode: 'boss',
        boss: matched[0] || { id: allChars[0]?.id },
        squad: matched.slice(1).length > 0 ? matched.slice(1) : [matched[1] || allChars[1], matched[2] || allChars[2]].filter(Boolean),
        missingCharacters: []
      };
    } else if (mode === 'team') {
      const half = Math.max(1, Math.floor(matched.length / 2));
      return {
        mode: 'team',
        teamA: matched.slice(0, half).length > 0 ? matched.slice(0, half) : [allChars[0], allChars[1]].filter(Boolean),
        teamB: matched.slice(half).length > 0 ? matched.slice(half) : [allChars[2], allChars[3]].filter(Boolean),
        missingCharacters: []
      };
    } else if (mode === 'battleRoyale') {
      return {
        mode: 'battleRoyale',
        battleRoyale: matched.length >= 3 ? matched : matched.concat(allChars.slice(0, 4 - matched.length)),
        missingCharacters: []
      };
    } else {
      return {
        mode: '1v1',
        charA: matched[0] || { id: allChars[0]?.id },
        charB: matched[1] || { id: allChars[1]?.id },
        missingCharacters: []
      };
    }
  };

  // Generate missing character on the fly with AI
  const handleGenerateMissing = async (missingName) => {
    setIsGeneratingChar(prev => ({ ...prev, [missingName]: true }));
    try {
      const createdList = await SimulationEngine.batchParseCharactersWithAi(
        `Crea una ficha canónica de Power Scaling extremadamente detallada para el personaje: ${missingName}.
Incluye transformaciones comenzando desde Estado Base, Tier de VS Battles oficial, velocidades en Mach/FTL, hax, arsenal y debilidades.`,
        aiConfig
      );

      if (createdList && createdList.length > 0) {
        const newChar = createdList[0];
        onSaveNewCharacter(newChar);
        setMissingChars(prev => prev.filter(n => n !== missingName));
        SoundFX.playBetWin?.();
        alert(`¡Ficha de ${newChar.name} generada exitosamente y añadida al Roster!`);
      } else {
        alert('No se pudo generar la ficha. Intenta de nuevo.');
      }
    } catch (e) {
      alert('Error generando personaje con IA: ' + e.message);
    } finally {
      setIsGeneratingChar(prev => ({ ...prev, [missingName]: false }));
    }
  };

  // Apply to Arena
  const handleApply = () => {
    if (!analyzedMatch) return;
    onApplyMatchup(analyzedMatch);
    SoundFX.playStartBattle?.();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-950 border border-purple-500/50 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto space-y-5 shadow-[0_0_50px_rgba(168,85,247,0.3)] font-mono text-xs animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/40">
              <Wand2 className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase font-cinzel tracking-wider flex items-center gap-2">
                Emparejamiento Inteligente por Prompt IA
              </h3>
              <p className="text-[10px] text-slate-400">
                Escribe en lenguaje natural el combate que imaginas y la IA configurará el modo y luchadores al instante.
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-white cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Prompt Input Box */}
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-purple-300 uppercase tracking-wider block">
            💬 Escribe tu Matchup o Batalla:
          </label>
          <textarea
            rows={3}
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
            placeholder="Ejemplo: Pon a Goku Mini SSJ3 Daima contra Vegeta Mini SSJ3 en un 1 vs 1 en el Ring de DB Multiverse..."
            className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl p-3 text-slate-100 font-mono text-xs focus:border-purple-500 focus:outline-none leading-relaxed"
          />

          <div className="flex justify-between items-center flex-wrap gap-2">
            <div className="text-[9.5px] text-slate-400">
              Detecta automáticamente: 1v1, Boss Raid (1vN), Equipos y Battle Royale.
            </div>
            <button
              disabled={isAnalyzing || !promptText.trim()}
              onClick={handleAnalyzePrompt}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-xs shadow-lg shadow-purple-950/80 transition cursor-pointer flex items-center gap-2 disabled:opacity-50"
            >
              {isAnalyzing ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Interpretando Batalla...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>⚡ Interpretar & Configurar Matchup</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quick Example Prompts */}
        <div className="space-y-1.5 pt-2 border-t border-slate-900">
          <span className="text-[9.5px] font-bold text-slate-400 block">💡 Ejemplos Rápidos:</span>
          <div className="flex flex-wrap gap-1.5">
            {QUICK_PROMPTS.map((qp, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setPromptText(qp);
                }}
                className="text-[10px] px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-purple-500/40 text-slate-300 transition cursor-pointer text-left"
              >
                {qp}
              </button>
            ))}
          </div>
        </div>

        {/* Matchup Preview */}
        {analyzedMatch && (
          <div className="space-y-3 pt-3 border-t border-slate-800 animate-in fade-in duration-200">
            <div className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-500/40 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-purple-300 uppercase flex items-center gap-1.5">
                  <Swords className="w-3.5 h-3.5 text-pink-400" />
                  Modalidad Detectada: <span className="text-white font-mono bg-purple-900/60 px-2 py-0.5 rounded border border-purple-500/50">{analyzedMatch.mode.toUpperCase()}</span>
                </span>
                {analyzedMatch.scenarioName && (
                  <span className="text-[10px] text-cyan-300">
                    🏟️ Mapa: {analyzedMatch.scenarioName}
                  </span>
                )}
              </div>

              {/* Roster Matchup Elements */}
              <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1.5 text-[11px]">
                {analyzedMatch.mode === '1v1' && (
                  <div className="flex items-center justify-between text-slate-200">
                    <span className="text-red-400 font-bold">🔴 {characters.find(c => c.id === analyzedMatch.charA?.id)?.name || 'Contendiente A'}</span>
                    <span className="font-bold text-slate-500">VS</span>
                    <span className="text-blue-400 font-bold">🔵 {characters.find(c => c.id === analyzedMatch.charB?.id)?.name || 'Contendiente B'}</span>
                  </div>
                )}

                {analyzedMatch.mode === 'boss' && (
                  <div className="space-y-1">
                    <p className="text-amber-400 font-bold">👑 Jefe Supremo: {characters.find(c => c.id === analyzedMatch.boss?.id)?.name || 'Boss'}</p>
                    <p className="text-slate-300 text-[10px]">
                      ⚔️ Escuadra Asaltante: {(analyzedMatch.squad || []).map(s => characters.find(c => c.id === s.id)?.name || s.id).join(', ')}
                    </p>
                  </div>
                )}

                {analyzedMatch.mode === 'team' && (
                  <div className="grid grid-cols-2 gap-2 text-[10.5px]">
                    <div className="p-1.5 rounded bg-blue-950/30 border border-blue-800/40">
                      <span className="font-bold text-blue-400 block mb-0.5">🛡️ Equipo Alfa:</span>
                      {(analyzedMatch.teamA || []).map(m => characters.find(c => c.id === m.id)?.name || m.id).join(', ')}
                    </div>
                    <div className="p-1.5 rounded bg-red-950/30 border border-red-800/40">
                      <span className="font-bold text-red-400 block mb-0.5">⚔️ Equipo Omega:</span>
                      {(analyzedMatch.teamB || []).map(m => characters.find(c => c.id === m.id)?.name || m.id).join(', ')}
                    </div>
                  </div>
                )}

                {analyzedMatch.mode === 'battleRoyale' && (
                  <div className="space-y-1">
                    <span className="font-bold text-purple-300 block">👑 Gladiadores en la Arena (Battle Royale):</span>
                    <p className="text-slate-300 text-[10px]">
                      {(analyzedMatch.battleRoyale || []).map(m => characters.find(c => c.id === m.id)?.name || m.id).join(' ⚡ ')}
                    </p>
                  </div>
                )}
              </div>

              {/* Missing Characters Alert and Instant AI Generator */}
              {missingChars.length > 0 && (
                <div className="p-2.5 rounded-lg bg-amber-950/40 border border-amber-500/50 space-y-2">
                  <div className="flex items-center gap-1.5 text-amber-300 text-[10.5px] font-bold">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Personajes no encontrados en el Roster:</span>
                  </div>
                  <div className="space-y-1.5">
                    {missingChars.map((missingName, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-slate-950 p-2 rounded-lg border border-slate-800">
                        <span className="text-white font-bold text-[11px]">{missingName}</span>
                        <button
                          disabled={isGeneratingChar[missingName]}
                          onClick={() => handleGenerateMissing(missingName)}
                          className="px-2.5 py-1 rounded-md bg-purple-600 hover:bg-purple-500 text-white font-bold text-[10px] transition cursor-pointer flex items-center gap-1.5 disabled:opacity-50"
                        >
                          {isGeneratingChar[missingName] ? (
                            <>
                              <RefreshCw className="w-3 h-3 animate-spin" />
                              <span>Generando Ficha...</span>
                            </>
                          ) : (
                            <>
                              <Sparkles className="w-3 h-3" />
                              <span>✨ Generar con IA & Añadir</span>
                            </>
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Apply Button */}
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={handleApply}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-bold text-xs shadow-lg shadow-emerald-950/80 transition cursor-pointer flex items-center gap-2"
                >
                  <Swords className="w-4 h-4" />
                  <span>⚔️ Aplicar Alineación a la Arena</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
