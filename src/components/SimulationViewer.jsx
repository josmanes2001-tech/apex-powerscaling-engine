import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, Download, Copy, Check, Sparkles, FileText, Swords, RefreshCw, 
  Heart, Zap, History, Trash2, ShieldAlert, Award, Compass, AlertTriangle, 
  Flame, Crosshair, Trophy, Volume2, VolumeX, Eye, FastForward, GitBranch
} from 'lucide-react';
import { ObsidianBridge } from '../services/obsidianBridge';

const STORAGE_KEY_COMBAT_HISTORY = 'apex_combat_history';

// Configuración visual por cada tipo de fase
const PHASE_STYLES = {
  'analisis': {
    theme: 'border-blue-500/50 bg-gradient-to-br from-blue-950/40 to-slate-900/40 text-blue-300 shadow-[inset_0_0_20px_rgba(59,130,246,0.1)]',
    badgeBg: 'bg-blue-600/40 text-blue-200 border-blue-400/50 shadow-[0_0_10px_rgba(59,130,246,0.3)]',
    icon: <Compass className="w-4 h-4 text-blue-300" />,
    label: 'ANÁLISIS PREVIO & TÁCTICA'
  },
  'tanteo': {
    theme: 'border-emerald-500/50 bg-gradient-to-br from-emerald-950/40 to-slate-900/40 text-emerald-300 shadow-[inset_0_0_20px_rgba(16,185,129,0.1)]',
    badgeBg: 'bg-emerald-600/40 text-emerald-200 border-emerald-400/50 shadow-[0_0_10px_rgba(16,185,129,0.3)]',
    icon: <Crosshair className="w-4 h-4 text-emerald-300" />,
    label: 'FASE 1 · TANTEO CINÉTICO'
  },
  'escalada': {
    theme: 'border-amber-500/60 bg-gradient-to-br from-amber-950/40 to-orange-950/30 text-amber-300 shadow-[inset_0_0_25px_rgba(245,158,11,0.15)]',
    badgeBg: 'bg-gradient-to-r from-amber-600/40 to-orange-600/40 text-amber-200 border-amber-400/60 shadow-[0_0_15px_rgba(245,158,11,0.4)]',
    icon: <Flame className="w-4 h-4 text-amber-400 animate-pulse" />,
    label: 'FASE 2 · ESCALADA & SÚPER ATAQUES'
  },
  'giro': {
    theme: 'border-fuchsia-500/60 bg-gradient-to-br from-fuchsia-950/40 to-purple-950/30 text-fuchsia-200 shadow-[0_0_25px_rgba(217,70,239,0.2),inset_0_0_25px_rgba(217,70,239,0.15)]',
    badgeBg: 'bg-gradient-to-r from-fuchsia-600/40 to-purple-600/40 text-fuchsia-200 border-fuchsia-400/60 shadow-[0_0_15px_rgba(217,70,239,0.5)]',
    icon: <AlertTriangle className="w-4 h-4 text-fuchsia-300 animate-pulse" />,
    label: 'FASE 3 · EL GIRO TÁCTICO / CISNE NEGRO'
  },
  'climax': {
    theme: 'border-red-500/70 bg-gradient-to-br from-red-950/50 to-rose-950/40 text-red-200 shadow-[0_0_35px_rgba(239,68,68,0.3),inset_0_0_30px_rgba(239,68,68,0.2)] scale-[1.01]',
    badgeBg: 'bg-gradient-to-r from-red-600/50 to-rose-600/50 text-red-100 border-red-400/70 shadow-[0_0_20px_rgba(239,68,68,0.6)] animate-pulse',
    icon: <Swords className="w-4 h-4 text-red-300" />,
    label: 'FASE 4 · EL CLÍMAX ANATÓMICO (FINISHERS)'
  },
  'veredicto': {
    theme: 'border-yellow-400/70 bg-gradient-to-br from-yellow-950/50 to-amber-950/40 text-yellow-200 shadow-[0_0_40px_rgba(250,204,21,0.3),inset_0_0_40px_rgba(250,204,21,0.2)]',
    badgeBg: 'bg-gradient-to-r from-yellow-500/40 to-amber-500/40 text-yellow-100 border-yellow-300/70 shadow-[0_0_25px_rgba(250,204,21,0.6)]',
    icon: <Trophy className="w-5 h-5 text-yellow-300 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" />,
    label: 'VEREDICTO DEFINITIVO & ESTADO FINAL'
  },
  'mariposa': {
    theme: 'border-purple-500/70 bg-gradient-to-br from-purple-950/50 via-slate-900/50 to-fuchsia-950/40 text-purple-200 shadow-[0_0_35px_rgba(168,85,247,0.3),inset_0_0_30px_rgba(168,85,247,0.15)]',
    badgeBg: 'bg-gradient-to-r from-purple-600/40 to-fuchsia-600/40 text-purple-100 border-purple-400/60 shadow-[0_0_20px_rgba(168,85,247,0.5)]',
    icon: <GitBranch className="w-5 h-5 text-purple-300 animate-pulse" />,
    label: 'EFECTO MARIPOSA & CONSECUENCIAS (WHAT-IF)'
  },
  'acto': {
    theme: 'border-cyan-500/70 bg-gradient-to-br from-cyan-950/40 via-slate-900/50 to-blue-950/40 text-cyan-200 shadow-[0_0_35px_rgba(6,182,212,0.25),inset_0_0_30px_rgba(6,182,212,0.15)]',
    badgeBg: 'bg-gradient-to-r from-cyan-600/40 to-blue-600/40 text-cyan-100 border-cyan-400/60 shadow-[0_0_20px_rgba(6,182,212,0.5)]',
    icon: <FastForward className="w-5 h-5 text-cyan-300 animate-pulse" />,
    label: 'CONTINUACIÓN DE LA CRÓNICA · SIGUIENTE ACTO'
  }
};

function getPhaseStyle(title) {
  const t = title.toLowerCase();
  if (t.includes('acto') || t.includes('capítulo') || t.includes('capitulo') || t.includes('siguiente') || t.includes('continuación') || t.includes('continuacion')) return PHASE_STYLES.acto;
  if (t.includes('mariposa') || t.includes('what-if') || t.includes('consecuencias') || t.includes('secuelas')) return PHASE_STYLES.mariposa;
  if (t.includes('análisis') || t.includes('analisis')) return PHASE_STYLES.analisis;
  if (t.includes('fase 1') || t.includes('tanteo')) return PHASE_STYLES.tanteo;
  if (t.includes('fase 2') || t.includes('escalada')) return PHASE_STYLES.escalada;
  if (t.includes('fase 3') || t.includes('giro') || t.includes('cisne')) return PHASE_STYLES.giro;
  if (t.includes('fase 4') || t.includes('clímax') || t.includes('climax')) return PHASE_STYLES.climax;
  if (t.includes('veredicto') || t.includes('estado final') || t.includes('resultado')) return PHASE_STYLES.veredicto;
  return PHASE_STYLES.tanteo;
}

// Renderizador visual enriquecido de texto de combate
function RichCombatText({ content, isStreamingLast }) {
  if (!content) return null;

  const lines = content.split('\n');

  return (
    <div className="space-y-4 font-sans leading-relaxed text-[14px] text-slate-200">
      {lines.map((line, lIdx) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={lIdx} className="h-1.5" />;

        // Subtítulos tipo ## o **TITULO:**
        if (trimmed.startsWith('## ') || trimmed.startsWith('### ')) {
          return (
            <h4 key={lIdx} className="text-lg font-bold font-cinzel text-amber-300 pt-4 pb-2 border-b border-slate-700/60 tracking-wider shadow-[0_4px_10px_-6px_rgba(245,158,11,0.3)]">
              <span className="text-amber-500 mr-2">❖</span>{trimmed.replace(/^#+\s*/, '')}
            </h4>
          );
        }

        // Bloque de diálogo entrecomillado "..."
        if ((trimmed.startsWith('"') || trimmed.startsWith('“') || trimmed.startsWith('¡"')) && trimmed.length > 5) {
          return (
            <div key={lIdx} className="my-4 p-4 rounded-xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-l-4 border-amber-400 text-amber-100 font-medium italic shadow-[0_8px_20px_-5px_rgba(0,0,0,0.5)] transform hover:scale-[1.01] transition-transform">
              <div className="flex gap-3">
                <span className="text-amber-500 font-bold not-italic text-lg drop-shadow-[0_0_5px_rgba(245,158,11,0.8)]">💬</span>
                <p className="leading-snug">{trimmed}</p>
              </div>
            </div>
          );
        }

        // Grito de Ataque / Finisher ¡...!
        if (trimmed.startsWith('¡') && trimmed.endsWith('!') && trimmed.length < 80) {
          return (
            <div key={lIdx} className="my-5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/40 via-amber-500/30 to-red-600/40 blur-md group-hover:blur-lg transition-all" />
              <div className="relative p-3 px-6 rounded-xl bg-gradient-to-r from-red-950/80 via-black to-red-950/80 border border-red-500/60 text-red-100 font-mono font-black text-center uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                <span className="text-amber-400 animate-pulse mr-2">⚡</span>
                {trimmed}
                <span className="text-amber-400 animate-pulse ml-2">⚡</span>
              </div>
            </div>
          );
        }

        // Sonidos de impacto masivo (KRRRAAAACCCCKKKK, BOOM, CLAP)
        if (trimmed.match(/^(BOOM|KRR+A+C+K+|CL+A+P|BZZ+|THD+U+|KABOO+M)/i)) {
          return (
            <div key={lIdx} className="my-6 text-center">
              <span className="inline-block px-4 py-2 bg-gradient-to-br from-amber-600 to-red-700 rounded-full font-mono font-black text-white tracking-[0.3em] text-lg drop-shadow-[0_0_25px_rgba(245,158,11,1)] skew-x-[-10deg] animate-[bounce_1s_infinite]">
                💥 {trimmed} 💥
              </span>
            </div>
          );
        }

        // Pensamientos internos entre asteriscos sencillos *pensamiento* o - *pensamiento*
        if (trimmed.startsWith('*') && trimmed.endsWith('*') && !trimmed.startsWith('**') && trimmed.length > 5) {
          return (
            <div key={lIdx} className="my-3 p-3 px-4 rounded-xl bg-purple-950/30 border-l-4 border-purple-400 text-purple-200 font-mono italic text-xs shadow-md">
              <span className="text-purple-400 font-bold not-italic mr-2">🧠 Pensamiento Interno:</span>
              <span>{trimmed.slice(1, -1)}</span>
            </div>
          );
        }

        // Elementos de lista o bullet points • o -
        if (trimmed.startsWith('• ') || trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          const cleanItem = trimmed.replace(/^[•\-\*]\s*/, '');
          return (
            <div key={lIdx} className="flex items-start gap-3 text-slate-300 pl-2 group">
              <span className="text-amber-400 font-bold text-sm mt-1 transition-transform group-hover:scale-125">▹</span>
              <div className="flex-1 leading-relaxed">{parseInlineMarkdown(cleanItem)}</div>
            </div>
          );
        }

        // Párrafo estándar con formato inline
        return (
          <p key={lIdx} className="text-slate-300 leading-relaxed drop-shadow-sm">
            {parseInlineMarkdown(trimmed)}
          </p>
        );
      })}
      {isStreamingLast && (
        <span className="inline-block w-3 h-5 bg-gradient-to-t from-amber-500 to-amber-300 ml-1 animate-pulse rounded-sm shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
      )}
    </div>
  );
}

// Parsea negritas **texto**, cursivas *texto*, y marcas de tiempo T+X.X
function parseInlineMarkdown(text) {
  if (!text) return null;

  // Split by bold (**...**) and timestamps (T+... or T-...)
  const parts = text.split(/(\*\*.*?\*\*|T[+\-]\d+\.?\d*s?:?)/g);

  return parts.map((part, idx) => {
    if (!part) return null;

    // Bold text **...**
    if (part.startsWith('**') && part.endsWith('**')) {
      const boldContent = part.slice(2, -2);
      
      // Resaltar palabras clave
      if (boldContent.includes('ANÁLISIS') || boldContent.includes('FASE') || boldContent.includes('VEREDICTO')) {
        return <strong key={idx} className="text-amber-400 font-bold uppercase tracking-wider">{boldContent}</strong>;
      }
      if (boldContent.includes('CRÍTICO') || boldContent.includes('MUERTE') || boldContent.includes('DESTRUIDO')) {
        return <strong key={idx} className="text-red-400 font-bold">{boldContent}</strong>;
      }
      if (boldContent.includes('TRANSFORMACIÓN') || boldContent.includes('ULTRA') || boldContent.includes('BLUE')) {
        return <strong key={idx} className="text-cyan-300 font-bold">{boldContent}</strong>;
      }
      return <strong key={idx} className="text-white font-bold">{boldContent}</strong>;
    }

    // Timestamps T+0.0 / T-5.0
    if (part.match(/^T[+\-]\d+\.?\d*s?:?$/)) {
      return (
        <span key={idx} className="inline-block px-1.5 py-0.5 mx-1 rounded bg-slate-900 border border-amber-500/40 text-amber-400 font-mono text-[10px] font-bold">
          ⏱️ {part}
        </span>
      );
    }

    return part;
  });
}

// Función auxiliar para extraer barras de vida/energía y separar fases
const parseSimulation = (text) => {
  if (!text) return { phases: [], hpA: 100, stmA: 100, hpB: 100, stmB: 100 };

  let hpA = 100, stmA = 100;
  let hpB = 100, stmB = 100;

  // Regex para biometría dual: ||BIOMETRICS|HP_A:80|STM_A:60|HP_B:90|STM_B:75||
  const biometricsMatches = [...text.matchAll(/\|\|BIOMETRICS\|HP_A:(\d+)(?:\|STM_A:(\d+))?\|HP_B:(\d+)(?:\|STM_B:(\d+))?\|\|/g)];
  if (biometricsMatches.length > 0) {
    const lastMatch = biometricsMatches[biometricsMatches.length - 1];
    hpA = Math.max(0, Math.min(100, parseInt(lastMatch[1], 10) || 0));
    stmA = Math.max(0, Math.min(100, lastMatch[2] ? parseInt(lastMatch[2], 10) : 100));
    hpB = Math.max(0, Math.min(100, parseInt(lastMatch[3], 10) || 0));
    stmB = Math.max(0, Math.min(100, lastMatch[4] ? parseInt(lastMatch[4], 10) : 100));
  }

  // Limpiar las etiquetas ocultas
  const cleanText = text.replace(/\|\|BIOMETRICS\|[^|]+\|\|/g, '');

  // Separar el texto por los headers (### )
  const rawPhases = cleanText.split(/(?=### )/g);
  
  const phases = rawPhases.map((phaseText, index) => {
    const isLast = index === rawPhases.length - 1;
    let title = `Fase ${index + 1}`;
    let content = phaseText;
    
    if (phaseText.startsWith('### ')) {
      const lineBreak = phaseText.indexOf('\n');
      if (lineBreak !== -1) {
        title = phaseText.substring(4, lineBreak).trim();
        content = phaseText.substring(lineBreak + 1).trim();
      } else {
        title = phaseText.substring(4).trim();
        content = '';
      }
    }
    
    return { title, content, isLast };
  }).filter(p => p.title || p.content);

  return { phases, hpA, stmA, hpB, stmB };
};

export default function SimulationViewer({ simulationResult, isSimulating, progress, onStartSimulation, onContinueSimulation, simulationData }) {
  const [copied, setCopied] = useState(false);
  const [savedToVault, setSavedToVault] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [isImpactActive, setIsImpactActive] = useState(false);
  const [activePhaseTab, setActivePhaseTab] = useState('all'); // 'all' | phase index
  const [autoScroll, setAutoScroll] = useState(false); // Default to false so user can read freely without being dragged
  const [nextActionPrompt, setNextActionPrompt] = useState('');
  const [rpgDecisionsEnabled, setRpgDecisionsEnabled] = useState(true);
  const [rpgChoices, setRpgChoices] = useState([
    { letter: '🅰️', label: 'Sobrecarga de Ataque / Forzar Límite', prompt: 'El personaje arriesga su integridad física canalizando toda su energía en un asalto frontal implacable para quebrar la guardia rival.' },
    { letter: '🅱️', label: 'Replegarse al Entorno / Maniobra Táctica', prompt: 'Se repliega hacia los puntos ciegos y escombros del escenario, usando el magma/gravedad del mapa para ganar tiempo y recomponer su postura.' },
    { letter: '🅲', label: 'Contramedida Hax / Técnica Secreta', prompt: 'Prepara en secreto su habilidad pasiva o técnica definitiva más peligrosa a distancia cero como contraataque definitivo.' }
  ]);
  const [history, setHistory] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_COMBAT_HISTORY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const outputEndRef = useRef(null);

  const fullOutput = simulationResult?.fullOutput || '';
  const hasOutput = fullOutput.trim().length > 0;
  
  const { phases, hpA, stmA, hpB, stmB } = parseSimulation(fullOutput);

  // Auto-scroll to bottom of timeline ONLY if user explicitly enabled it
  useEffect(() => {
    if (outputEndRef.current && isSimulating && autoScroll && activePhaseTab === 'all') {
      outputEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [fullOutput, isSimulating, activePhaseTab, autoScroll]);

  // Critical Impact Pulse Detection
  useEffect(() => {
    if (!isSimulating || !fullOutput) return;
    const recentChunk = fullOutput.slice(-90).toUpperCase();
    const criticalWords = ['IMPACTO CRÍTICO', 'DESMEMBRACIÓN', 'EXPLOSIÓN', 'FATAL', 'CLÍMAX', '★ ULTIMATE', 'DESGARRO', 'K.O.', 'VEREDICTO', 'BIG BOOM', 'KRRRAAAACCCCKKKK'];
    if (criticalWords.some(w => recentChunk.includes(w))) {
      setIsImpactActive(true);
      const timer = setTimeout(() => setIsImpactActive(false), 700);
      return () => clearTimeout(timer);
    }
  }, [fullOutput, isSimulating]);

  // Auto-save completed simulation to local history
  useEffect(() => {
    if (!isSimulating && hasOutput && simulationData) {
      const entry = {
        id: `fight-${Date.now()}`,
        date: new Date().toLocaleString(),
        charA: simulationData.charA?.name || 'Luchador A',
        charB: simulationData.charB?.name || 'Luchador B',
        scenario: simulationData.scenario?.name || 'Arena Estándar',
        narrative: fullOutput.replace(/\|\|BIOMETRICS\|[^|]+\|\|/g, ''),
        hpA,
        hpB
      };

      setHistory(prev => {
        if (prev[0] && prev[0].narrative === entry.narrative) return prev;
        const updated = [entry, ...prev].slice(0, 20);
        try {
          localStorage.setItem(STORAGE_KEY_COMBAT_HISTORY, JSON.stringify(updated));
        } catch (e) {
          console.error(e);
        }
        return updated;
      });
    }
  }, [isSimulating, hasOutput]);

  const handleCopy = () => {
    if (!fullOutput) return;
    const cleanOutput = fullOutput.replace(/\|\|BIOMETRICS\|[^|]+\|\|/g, '');
    navigator.clipboard.writeText(cleanOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveObsidian = async () => {
    if (!simulationResult || !simulationData) return;
    const cleanOutput = fullOutput.replace(/\|\|BIOMETRICS\|[^|]+\|\|/g, '');
    await ObsidianBridge.saveToVault({
      ...simulationData,
      narrative: cleanOutput,
      result: simulationResult.result
    });
    setSavedToVault(true);
    setTimeout(() => setSavedToVault(false), 3000);
  };

  const handleDeleteHistoryItem = (id, e) => {
    e.stopPropagation();
    const updated = history.filter(h => h.id !== id);
    setHistory(updated);
    try {
      localStorage.setItem(STORAGE_KEY_COMBAT_HISTORY, JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const nameA = simulationData?.charA?.name || 'Luchador 1';
  const nameB = simulationData?.charB?.name || 'Luchador 2';

  const visiblePhases = activePhaseTab === 'all' 
    ? phases 
    : phases.filter((_, idx) => idx === activePhaseTab);

  return (
    <div className={`rounded-2xl glass-panel p-6 border shadow-2xl space-y-6 transition-all duration-300 relative overflow-hidden ${
      isImpactActive 
        ? 'border-red-500 shadow-[0_0_60px_rgba(239,68,68,0.7)] scale-[1.01] bg-red-950/10' 
        : 'border-slate-800/80 bg-[#090d16]/95'
    }`}>
      {/* Background Animated Combat Grid Pattern */}
      <div className={`absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none transition-opacity duration-300 ${isImpactActive ? 'opacity-0' : 'opacity-100'}`} />
      
      {/* Red flash overlay on impact */}
      <div className={`absolute inset-0 bg-red-600/10 mix-blend-color-dodge pointer-events-none transition-opacity duration-150 ${isImpactActive ? 'opacity-100' : 'opacity-0'}`} />

      {/* Top Bar / Actions */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-800/80 relative z-10">
        <div className="flex items-center gap-3">
          <div className="relative">
            {isImpactActive && <div className="absolute inset-0 bg-red-500 blur-xl opacity-50 rounded-full animate-pulse" />}
            <div className="p-3 rounded-2xl bg-gradient-to-br from-red-600/40 to-amber-600/30 text-red-300 border border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.4)] relative z-10">
              <Swords className={`w-5 h-5 ${isImpactActive ? 'animate-[spin_0.3s]' : ''}`} />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold text-white font-cinzel tracking-wider drop-shadow-md">
                Mesa de Simulación & Crónica APEX
              </h2>
              {isSimulating && (
                <span className="flex items-center gap-1.5 text-[11px] font-mono px-3 py-0.5 rounded-full bg-gradient-to-r from-red-600 to-red-800 text-white font-bold animate-pulse shadow-[0_0_15px_rgba(220,38,38,0.9)] border border-red-400">
                  <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_5px_white] animate-ping" /> EN VIVO
                </span>
              )}
              {isImpactActive && (
                <span className="text-[11px] font-mono px-3 py-1 rounded bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-black uppercase tracking-widest animate-[bounce_0.5s_infinite] shadow-[0_0_20px_rgba(245,158,11,1)] border border-yellow-300">
                  💥 IMPACTO CRÍTICO
                </span>
              )}
            </div>
            <p className="text-xs text-slate-400 font-mono mt-1">
              Consola de Combate Táctico y Renderizado Narrativo en 5 Fases
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* Auto-scroll Toggle Button */}
          <button
            onClick={() => setAutoScroll(!autoScroll)}
            className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-mono transition cursor-pointer border shadow-md ${
              autoScroll 
                ? 'bg-amber-500/20 border-amber-500/60 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.25)] font-bold' 
                : 'bg-slate-900 hover:bg-slate-800 border-slate-700/80 text-slate-400 hover:text-slate-200'
            }`}
            title={autoScroll ? 'Desactivar auto-desplazamiento automático' : 'Activar auto-desplazamiento para seguir el texto en vivo'}
          >
            <FastForward className={`w-3.5 h-3.5 ${autoScroll ? 'text-amber-400 animate-pulse' : 'text-slate-500'}`} />
            <span>Auto-scroll: {autoScroll ? 'ON' : 'OFF'}</span>
          </button>

          <button
            onClick={() => setShowHistory(true)}
            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-mono transition cursor-pointer border border-slate-700/80 shadow-md"
            title="Ver combates anteriores"
          >
            <History className="w-3.5 h-3.5 text-amber-400" />
            <span>Historial ({history.length})</span>
          </button>

          <button
            onClick={onStartSimulation}
            disabled={isSimulating}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-600 via-amber-600 to-red-600 hover:from-red-500 hover:to-amber-500 text-white font-mono font-bold text-xs shadow-lg shadow-red-950/80 transition cursor-pointer disabled:opacity-50"
          >
            {isSimulating ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-white" />
                <span>PROCESANDO BATALLA...</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-white" />
                <span>{hasOutput ? 'RE-SIMULAR ENCUENTRO' : 'INICIAR SIMULACIÓN'}</span>
              </>
            )}
          </button>

          {hasOutput && !isSimulating && (
            <>
              <button onClick={handleCopy} className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono transition cursor-pointer border border-slate-700 shadow">
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copiado' : 'Copiar'}</span>
              </button>
              <button onClick={handleSaveObsidian} className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-mono font-bold shadow-lg shadow-purple-950/60 transition cursor-pointer">
                {savedToVault ? <Check className="w-4 h-4 text-white" /> : <Download className="w-4 h-4" />}
                <span>Guardar Obsidian</span>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Cyberpunk HUD: Biometría Dual (HP + Stamina) */}
      {(hasOutput || isSimulating) && (
        <div className="p-4 bg-slate-950/90 rounded-2xl border border-slate-800/90 shadow-2xl relative z-10 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Fighter A Biometrics */}
            <div className="flex-1 w-full space-y-2 p-3.5 rounded-xl bg-gradient-to-r from-red-950/30 to-slate-900/40 border border-red-900/40">
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,1)] animate-pulse" />
                  <span className="text-sm font-bold text-red-400 uppercase tracking-wider font-cinzel">{nameA}</span>
                </div>
                <div className="text-xs font-mono flex items-center gap-3">
                  <span className="text-red-400 font-bold">{hpA}% HP</span>
                  <span className="text-amber-400 font-semibold">{stmA}% STM</span>
                </div>
              </div>
              
              {/* HP Bar A */}
              <div className="space-y-1">
                <div className="h-3 bg-slate-950 rounded-full overflow-hidden border border-slate-800 p-0.5">
                  <div 
                    className="h-full bg-gradient-to-r from-red-600 via-amber-500 to-red-500 transition-all duration-700 ease-out rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]"
                    style={{ width: `${hpA}%` }}
                  />
                </div>
                {/* Stamina Bar A */}
                <div className="h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800/60">
                  <div 
                    className="h-full bg-amber-400 transition-all duration-700 ease-out rounded-full"
                    style={{ width: `${stmA}%` }}
                  />
                </div>
              </div>
            </div>

            {/* VS Emblem & Battlefield Radar */}
            <div className="flex flex-col items-center justify-center shrink-0 px-2">
              <span className="text-slate-500 font-black text-2xl font-cinzel tracking-widest drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">VS</span>
              <span className="text-[10px] font-mono text-amber-400/90 font-bold max-w-[140px] truncate text-center mt-0.5">
                🏟️ {simulationData?.scenario?.name || 'Arena Estándar'}
              </span>
            </div>

            {/* Fighter B Biometrics */}
            <div className="flex-1 w-full space-y-2 p-3.5 rounded-xl bg-gradient-to-l from-blue-950/30 to-slate-900/40 border border-blue-900/40">
              <div className="flex justify-between items-end">
                <div className="text-xs font-mono flex items-center gap-3">
                  <span className="text-cyan-400 font-semibold">{stmB}% STM</span>
                  <span className="text-blue-400 font-bold">{hpB}% HP</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-blue-400 uppercase tracking-wider font-cinzel">{nameB}</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,1)] animate-pulse" />
                </div>
              </div>

              {/* HP Bar B */}
              <div className="space-y-1">
                <div className="h-3 bg-slate-950 rounded-full overflow-hidden border border-slate-800 p-0.5 flex justify-end">
                  <div 
                    className="h-full bg-gradient-to-l from-blue-600 via-cyan-400 to-blue-500 transition-all duration-700 ease-out rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                    style={{ width: `${hpB}%` }}
                  />
                </div>
                {/* Stamina Bar B */}
                <div className="h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800/60 flex justify-end">
                  <div 
                    className="h-full bg-cyan-400 transition-all duration-700 ease-out rounded-full"
                    style={{ width: `${stmB}%` }}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Connecting Progress Bar */}
      {isSimulating && !hasOutput && (
        <div className="p-5 bg-slate-900/80 border border-amber-500/30 rounded-2xl space-y-3 font-mono text-xs shadow-xl relative z-10">
          <div className="flex items-center justify-between text-slate-300">
            <span className="flex items-center gap-2.5 text-amber-300 font-bold">
              <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
              <span>{progress.step || 'Conectando con la IA...'}</span>
            </span>
            <span className="text-amber-400 font-bold">{progress.percent}%</span>
          </div>
          <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
            <div className="h-full bg-gradient-to-r from-red-600 via-amber-500 to-purple-600 transition-all duration-300 rounded-full" style={{ width: `${progress.percent}%` }} />
          </div>
        </div>
      )}

      {/* Phase Filter Tabs (Jump directly to any Phase) */}
      {phases.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-1 font-mono text-xs scrollbar-none relative z-10">
          <button
            onClick={() => setActivePhaseTab('all')}
            className={`px-3.5 py-1.5 rounded-xl border transition cursor-pointer font-bold ${
              activePhaseTab === 'all' 
                ? 'bg-amber-500/20 border-amber-500/60 text-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.3)]' 
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            Ver Todas ({phases.length})
          </button>
          {phases.map((p, idx) => {
            const style = getPhaseStyle(p.title);
            const active = activePhaseTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActivePhaseTab(idx)}
                className={`px-3 py-1.5 rounded-xl border transition cursor-pointer flex items-center gap-1.5 shrink-0 ${
                  active 
                    ? `${style.badgeBg} font-bold shadow-md` 
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {style.icon}
                <span>Fase {idx + 1}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Main Narrative Display: Styled Phase Action Cards */}
      {(hasOutput || isSimulating) && (
        <div className="space-y-5 max-h-[700px] overflow-y-auto pr-2 custom-scrollbar relative z-10">
          {visiblePhases.map((phase, idx) => {
            const style = getPhaseStyle(phase.title);
            const isLast = phase.isLast;

            return (
              <div 
                key={idx} 
                className={`p-6 rounded-2xl border transition-all duration-300 relative ${style.theme}`}
              >
                {/* Phase Header Badge */}
                <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-2.5">
                    <span className={`p-2 rounded-xl border ${style.badgeBg}`}>
                      {style.icon}
                    </span>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                        {style.label}
                      </span>
                      <h3 className="text-base font-bold text-white font-cinzel tracking-wider">
                        {phase.title}
                      </h3>
                    </div>
                  </div>

                  {isSimulating && isLast && (
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] font-mono font-bold animate-pulse">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" /> Generando...
                    </span>
                  )}
                </div>

                {/* Rich Formatted Narrative Body */}
                <RichCombatText content={phase.content} isStreamingLast={isSimulating && isLast} />
              </div>
            );
          })}
          {/* Continuation & RPG Decision Board */}
          {hasOutput && !isSimulating && onContinueSimulation && (
            <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-950/30 via-slate-900/70 to-purple-950/30 border border-cyan-500/40 shadow-xl space-y-4 font-mono relative z-10">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs">
                  <FastForward className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span>Modo Libro-Juego Interactivo (Decisiones Tácticas RPG):</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setRpgDecisionsEnabled(!rpgDecisionsEnabled)}
                    className={`px-3 py-1 rounded-xl text-[10px] font-bold uppercase transition cursor-pointer border ${
                      rpgDecisionsEnabled 
                        ? 'bg-purple-600/30 border-purple-500/60 text-purple-200' 
                        : 'bg-slate-900 border-slate-800 text-slate-500'
                    }`}
                  >
                    Decisiones RPG: {rpgDecisionsEnabled ? 'ACTIVADAS (ON)' : 'APAGADAS (OFF)'}
                  </button>
                </div>
              </div>

              {/* 3 RPG Tactical Choice Cards */}
              {rpgDecisionsEnabled && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {rpgChoices.map((choice, cIdx) => (
                    <button
                      key={cIdx}
                      type="button"
                      onClick={() => {
                        onContinueSimulation(choice.prompt);
                      }}
                      className="p-3.5 rounded-xl text-left bg-slate-950/90 border border-purple-900/50 hover:border-cyan-400/70 hover:bg-slate-900 transition-all cursor-pointer group space-y-1.5 shadow-md transform hover:scale-[1.02]"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-cyan-300">{choice.letter} {choice.label}</span>
                        <span className="text-[10px] text-purple-400 opacity-0 group-hover:opacity-100 transition font-bold">Elegir ▶</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed group-hover:text-slate-200 transition">
                        "{choice.prompt}"
                      </p>
                    </button>
                  ))}
                </div>
              )}

              {/* Free Text Input & Custom Next Act */}
              <div className="pt-2 border-t border-slate-800/60 space-y-2">
                <div className="flex items-center justify-between text-[10px] text-slate-400">
                  <span>O escribe tu propia acción / giro libre:</span>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => setNextActionPrompt("Aparece un tercer contendiente sorpresa para desafiar al superviviente.")}
                      className="px-2 py-0.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800"
                    >
                      💥 3er Contendiente
                    </button>
                    <button
                      type="button"
                      onClick={() => setNextActionPrompt("El escenario colapsa por completo y ambos son transportados al infierno.")}
                      className="px-2 py-0.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800"
                    >
                      🌌 Colapso Dimensional
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    value={nextActionPrompt}
                    onChange={(e) => setNextActionPrompt(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        onContinueSimulation(nextActionPrompt);
                        setNextActionPrompt('');
                      }
                    }}
                    placeholder="¿Qué pasa ahora? (Escribe una acción personalizada o déjalo vacío para continuar)..."
                    className="flex-1 p-2.5 px-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:border-cyan-500 focus:outline-none transition placeholder:text-slate-600"
                  />
                  <button
                    onClick={() => {
                      onContinueSimulation(nextActionPrompt);
                      setNextActionPrompt('');
                    }}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-cyan-950/60 transition cursor-pointer flex items-center justify-center gap-2 shrink-0"
                  >
                    <FastForward className="w-4 h-4" />
                    <span>Siguiente Acto ▶</span>
                  </button>
                </div>
              </div>

            </div>
          )}

          <div ref={outputEndRef} />
        </div>
      )}

      {/* History Modal */}
      {showHistory && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 max-w-2xl w-full max-h-[85vh] flex flex-col space-y-4 shadow-2xl font-mono text-xs">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white uppercase flex items-center gap-2 font-cinzel">
                <History className="w-4 h-4 text-amber-400" /> Registro de Combates Guardados
              </h3>
              <button onClick={() => setShowHistory(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            {history.length === 0 ? (
              <div className="py-12 text-center text-slate-500">
                No hay simulaciones previas guardadas aún.
              </div>
            ) : (
              <div className="space-y-2.5 overflow-y-auto flex-1 pr-1">
                {history.map((item) => (
                  <div key={item.id} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-3 hover:border-slate-700 transition">
                    <div className="space-y-1 flex-1">
                      <div className="font-bold text-white text-xs flex items-center gap-2">
                        <span className="text-red-400 font-bold">{item.charA}</span>
                        <span className="text-slate-500">vs</span>
                        <span className="text-blue-400 font-bold">{item.charB}</span>
                      </div>
                      <div className="text-[10px] text-slate-400">
                        <span>{item.scenario}</span> • <span>{item.date}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(item.narrative);
                          alert('Crónica de combate copiada al portapapeles.');
                        }}
                        className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
                        title="Copiar crónica completa"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={(e) => handleDeleteHistoryItem(item.id, e)}
                        className="p-2 rounded-lg bg-red-950/40 hover:bg-red-900/60 text-red-400 cursor-pointer"
                        title="Eliminar registro"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex justify-end pt-2 border-t border-slate-800">
              <button
                onClick={() => setShowHistory(false)}
                className="px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
