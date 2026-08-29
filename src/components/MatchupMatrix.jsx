import React, { useState } from 'react';
import { Scale, Zap, Shield, Battery, Brain, Sparkles, AlertOctagon, Swords, Crosshair, BarChart3, Activity } from 'lucide-react';

const TIER_WEIGHTS = {
  '11': 1, '10': 2, '9': 3, '8': 4, '7': 5, '6': 6, '5': 7, '4': 8, '3': 9, '2': 10, '1': 11, '0': 12
};

function getTierScore(tierString) {
  if (!tierString) return 5;
  const match = tierString.match(/Tier\s*(\d+)/i);
  if (match && TIER_WEIGHTS[match[1]]) {
    return TIER_WEIGHTS[match[1]];
  }
  return 5;
}

// Radar Chart Component (SVG Hexagon)
function RadarChart({ charA, charB, stats }) {
  const size = 260;
  const center = size / 2;
  const radius = 90;
  const angleStep = (Math.PI * 2) / stats.length;

  const getCoordinates = (index, value) => {
    const angle = index * angleStep - Math.PI / 2;
    const r = (value / 100) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle)
    };
  };

  const polyA = stats.map((s, i) => {
    const pt = getCoordinates(i, s.valA);
    return `${pt.x},${pt.y}`;
  }).join(' ');

  const polyB = stats.map((s, i) => {
    const pt = getCoordinates(i, s.valB);
    return `${pt.x},${pt.y}`;
  }).join(' ');

  // Concentric levels (25%, 50%, 75%, 100%)
  const levels = [0.25, 0.5, 0.75, 1.0];

  return (
    <div className="flex flex-col items-center justify-center p-2 bg-slate-950/60 rounded-xl border border-slate-800/80">
      <svg width={size} height={size} className="overflow-visible">
        {/* Background Grids */}
        {levels.map((lvl, lIdx) => {
          const gridPoints = stats.map((_, i) => {
            const angle = i * angleStep - Math.PI / 2;
            const r = lvl * radius;
            return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`;
          }).join(' ');
          return (
            <polygon
              key={lIdx}
              points={gridPoints}
              fill="none"
              stroke="#334155"
              strokeWidth="1"
              strokeDasharray={lvl < 1 ? "3 3" : "none"}
            />
          );
        })}

        {/* Axis Lines & Labels */}
        {stats.map((stat, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const outerX = center + radius * Math.cos(angle);
          const outerY = center + radius * Math.sin(angle);
          const labelX = center + (radius + 22) * Math.cos(angle);
          const labelY = center + (radius + 18) * Math.sin(angle);

          return (
            <g key={i}>
              <line
                x1={center}
                y1={center}
                x2={outerX}
                y2={outerY}
                stroke="#1e293b"
                strokeWidth="1.5"
              />
              <text
                x={labelX}
                y={labelY}
                textAnchor="middle"
                dominantBaseline="central"
                className="fill-slate-400 text-[9px] font-mono font-bold"
              >
                {stat.short}
              </text>
            </g>
          );
        })}

        {/* Fighter A Polygon (Red) */}
        <polygon
          points={polyA}
          fill="rgba(239, 68, 68, 0.25)"
          stroke="#ef4444"
          strokeWidth="2"
        />
        {stats.map((s, i) => {
          const pt = getCoordinates(i, s.valA);
          return <circle key={`a-${i}`} cx={pt.x} cy={pt.y} r="3" fill="#ef4444" />;
        })}

        {/* Fighter B Polygon (Blue) */}
        <polygon
          points={polyB}
          fill="rgba(59, 130, 246, 0.25)"
          stroke="#3b82f6"
          strokeWidth="2"
        />
        {stats.map((s, i) => {
          const pt = getCoordinates(i, s.valB);
          return <circle key={`b-${i}`} cx={pt.x} cy={pt.y} r="3" fill="#3b82f6" />;
        })}
      </svg>

      {/* Legend */}
      <div className="flex items-center gap-6 mt-2 text-[11px] font-mono">
        <span className="flex items-center gap-1.5 text-red-400 font-bold">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500" /> {charA.name}
        </span>
        <span className="flex items-center gap-1.5 text-blue-400 font-bold">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500" /> {charB.name}
        </span>
      </div>
    </div>
  );
}

export default function MatchupMatrix({ charA, charB, modifiers = {} }) {
  const [viewMode, setViewMode] = useState('radar'); // 'radar' | 'bars'

  const scoreA = getTierScore(charA.tier);
  const scoreB = getTierScore(charB.tier);
  const tierDiff = Math.abs(scoreA - scoreB);
  const isMismatch = tierDiff >= 3 && !modifiers.statsEqualized;

  const haxCountA = charA.haxTags?.length || 0;
  const haxCountB = charB.haxTags?.length || 0;

  const STATS_6_AXIS = [
    { 
      label: 'Potencia de Ataque (AP)', 
      short: 'AP',
      valA: Math.min(100, Math.max(15, scoreA * 8.5)), 
      valB: Math.min(100, Math.max(15, scoreB * 8.5)), 
      icon: <Zap className="w-3 h-3 text-amber-400" /> 
    },
    { 
      label: 'Velocidad de Reacción & Desplazamiento', 
      short: 'VEL',
      valA: modifiers.speedEqualized ? 80 : Math.min(100, Math.max(20, scoreA * 8)), 
      valB: modifiers.speedEqualized ? 80 : Math.min(100, Math.max(20, scoreB * 8)), 
      icon: <Activity className="w-3 h-3 text-emerald-400" /> 
    },
    { 
      label: 'Durabilidad & Regeneración', 
      short: 'DUR',
      valA: Math.min(100, Math.max(20, scoreA * 8 + (charA.durability ? 10 : 0))), 
      valB: Math.min(100, Math.max(20, scoreB * 8 + (charB.durability ? 10 : 0))), 
      icon: <Shield className="w-3 h-3 text-cyan-400" /> 
    },
    { 
      label: 'Battle IQ & Estrategia', 
      short: 'BIQ',
      valA: charA.battleIQ?.toLowerCase().includes('genio') || charA.battleIQ?.toLowerCase().includes('maestro') ? 95 : 65, 
      valB: charB.battleIQ?.toLowerCase().includes('genio') || charB.battleIQ?.toLowerCase().includes('maestro') ? 95 : 65, 
      icon: <Brain className="w-3 h-3 text-indigo-400" /> 
    },
    { 
      label: 'Alcance / Rango Destructivo', 
      short: 'RNG',
      valA: charA.range?.toLowerCase().includes('universal') || charA.range?.toLowerCase().includes('planet') ? 95 : 55, 
      valB: charB.range?.toLowerCase().includes('universal') || charB.range?.toLowerCase().includes('planet') ? 95 : 55, 
      icon: <Crosshair className="w-3 h-3 text-pink-400" /> 
    },
    { 
      label: 'Versatilidad Hax & Pasivas', 
      short: 'HAX',
      valA: Math.min(100, 25 + haxCountA * 20), 
      valB: Math.min(100, 25 + haxCountB * 20), 
      icon: <Sparkles className="w-3 h-3 text-fuchsia-400" /> 
    }
  ];

  return (
    <div className="rounded-2xl glass-panel p-5 border border-slate-800/80 shadow-xl space-y-4 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2">
          <Scale className="w-4 h-4 text-amber-400" />
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">
            Matriz de Matchup & Gráfico Radial
          </h3>
        </div>
        <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 text-[11px]">
          <button
            onClick={() => setViewMode('radar')}
            className={`px-2.5 py-1 rounded transition cursor-pointer ${
              viewMode === 'radar' ? 'bg-amber-600 text-white font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Radar
          </button>
          <button
            onClick={() => setViewMode('bars')}
            className={`px-2.5 py-1 rounded transition cursor-pointer ${
              viewMode === 'bars' ? 'bg-amber-600 text-white font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Barras
          </button>
        </div>
      </div>

      {/* Mismatch Alert */}
      {isMismatch && (
        <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/50 flex items-center gap-3">
          <AlertOctagon className="w-5 h-5 text-red-500 shrink-0 animate-pulse" />
          <div className="text-xs">
            <span className="text-red-400 font-bold block">⚠️ ADVERTENCIA: DESEQUILIBRIO EXTREMO (MISMATCH)</span>
            <p className="text-slate-300 text-[11px] mt-0.5">
              Existe una brecha colosal de escala ({charA.tier} vs {charB.tier}). Salvo anulación por Hax conceptual o activar <em>Stats Equalized</em>, la victoria se resolverá por Blitz o Stomp unilateral.
            </p>
          </div>
        </div>
      )}

      {/* Dynamic Radar Chart or Bar Comparison */}
      {viewMode === 'radar' ? (
        <RadarChart charA={charA} charB={charB} stats={STATS_6_AXIS} />
      ) : (
        <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between text-xs font-bold border-b border-slate-800/60 pb-2">
            <span className="text-red-400">{charA.name}</span>
            <span className="text-slate-500 flex items-center gap-1"><Swords className="w-3.5 h-3.5"/> VS</span>
            <span className="text-blue-400">{charB.name}</span>
          </div>

          {STATS_6_AXIS.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">{stat.icon} {stat.label}</span>
                <span className="text-[10px] text-slate-500">{stat.valA}% vs {stat.valB}%</span>
              </div>
              <div className="flex h-2 rounded-full overflow-hidden bg-slate-950 border border-slate-800">
                <div 
                  className="bg-red-500 transition-all duration-500" 
                  style={{ width: `${(stat.valA / (stat.valA + stat.valB)) * 100}%` }} 
                />
                <div 
                  className="bg-blue-500 transition-all duration-500" 
                  style={{ width: `${(stat.valB / (stat.valA + stat.valB)) * 100}%` }} 
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Victory Route Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-900/30 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-red-400">{charA.name}</span>
            <span className="text-[10px] text-slate-400">{charA.tier}</span>
          </div>
          <div className="space-y-1 text-slate-300 text-[11px]">
            <p>🎯 <span className="text-slate-400">Ruta de Victoria:</span> Explotar {charA.arsenal?.ultimateAttacks?.[0]?.name || charA.abilities?.[0] || 'arsenal de ataque'} y anular con {charA.haxTags?.join(', ') || 'potencia bruta'}.</p>
            <p>⚠️ <span className="text-slate-400">Riesgo Crítico:</span> {charA.weaknesses?.slice(0, 90) || 'Fatiga acumulada'}...</p>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-blue-950/20 border border-blue-900/30 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-blue-400">{charB.name}</span>
            <span className="text-[10px] text-slate-400">{charB.tier}</span>
          </div>
          <div className="space-y-1 text-slate-300 text-[11px]">
            <p>🎯 <span className="text-slate-400">Ruta de Victoria:</span> Sostener desgaste y castigar con {charB.arsenal?.ultimateAttacks?.[0]?.name || charB.abilities?.[0] || 'técnicas clave'}.</p>
            <p>⚠️ <span className="text-slate-400">Riesgo Crítico:</span> {charB.weaknesses?.slice(0, 90) || 'Vulnerabilidad física'}...</p>
          </div>
        </div>
      </div>

      <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-[11px] text-slate-300">
        <span className="text-amber-400 font-bold">⚔️ Regla Anti-Inflación:</span> Las capacidades se resuelven por feats mostrados en canon directo; hax absoluto sin precedentes se evalúa bajo coste anatómico y condiciones reales de activación.
      </div>
    </div>
  );
}
