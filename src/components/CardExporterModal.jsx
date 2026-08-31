import React, { useRef, useState } from 'react';
import { Download, X, Sparkles, Shield, Zap, Crosshair, Trophy, Flame, Image, Layers, Sparkle } from 'lucide-react';

export default function CardExporterModal({ isOpen, onClose, character }) {
  const [foilStyle, setFoilStyle] = useState('gold'); // 'gold' | 'amethyst' | 'rainbow' | 'cyber'
  const [isExporting, setIsExporting] = useState(false);

  if (!isOpen || !character) return null;

  const handleDownloadImage = async () => {
    setIsExporting(true);
    try {
      const canvas = document.createElement('canvas');
      const width = 640;
      const height = 960;
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');

      // 1. Cosmic Background Gradient
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, '#060810');
      bgGrad.addColorStop(0.5, '#120d24');
      bgGrad.addColorStop(1, '#05070c');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Cosmic Grid Pattern
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 30) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
      }
      for (let y = 0; y < height; y += 30) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
      }

      // 3. Foil Border Selection
      const borderGrad = ctx.createLinearGradient(0, 0, width, height);
      if (foilStyle === 'gold') {
        borderGrad.addColorStop(0, '#fef08a');
        borderGrad.addColorStop(0.3, '#eab308');
        borderGrad.addColorStop(0.7, '#ca8a04');
        borderGrad.addColorStop(1, '#fef08a');
      } else if (foilStyle === 'amethyst') {
        borderGrad.addColorStop(0, '#f472b6');
        borderGrad.addColorStop(0.4, '#c084fc');
        borderGrad.addColorStop(0.8, '#818cf8');
        borderGrad.addColorStop(1, '#38bdf8');
      } else if (foilStyle === 'rainbow') {
        borderGrad.addColorStop(0, '#ef4444');
        borderGrad.addColorStop(0.2, '#f97316');
        borderGrad.addColorStop(0.4, '#eab308');
        borderGrad.addColorStop(0.6, '#10b981');
        borderGrad.addColorStop(0.8, '#06b6d4');
        borderGrad.addColorStop(1, '#a855f7');
      } else {
        borderGrad.addColorStop(0, '#06b6d4');
        borderGrad.addColorStop(0.5, '#3b82f6');
        borderGrad.addColorStop(1, '#06b6d4');
      }

      ctx.strokeStyle = borderGrad;
      ctx.lineWidth = 14;
      ctx.strokeRect(18, 18, width - 36, height - 36);

      // Inner Border
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
      ctx.lineWidth = 2;
      ctx.strokeRect(30, 30, width - 60, height - 60);

      // 4. Universe Banner
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(45, 45, width - 90, 34);
      ctx.strokeStyle = borderGrad;
      ctx.lineWidth = 1.5;
      ctx.strokeRect(45, 45, width - 90, 34);

      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 13px monospace';
      ctx.textAlign = 'center';
      ctx.fillText((character.universe || 'APEX MULTIVERSE').toUpperCase(), width / 2, 67);

      // 5. Character Avatar Box
      const avatarBoxY = 90;
      const avatarBoxH = 260;
      ctx.fillStyle = '#090d16';
      ctx.fillRect(45, avatarBoxY, width - 90, avatarBoxH);
      ctx.strokeStyle = '#334155';
      ctx.strokeRect(45, avatarBoxY, width - 90, avatarBoxH);

      const avatarUrl = character.avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(character.name)}`;
      try {
        const img = new window.Image();
        img.crossOrigin = 'anonymous';
        img.src = avatarUrl;
        await new Promise((res) => {
          img.onload = res;
          img.onerror = res;
          setTimeout(res, 400);
        });
        ctx.drawImage(img, (width / 2) - 120, avatarBoxY + 10, 240, 240);
      } catch (e) {
        ctx.fillStyle = '#1e293b';
        ctx.fillRect((width / 2) - 120, avatarBoxY + 10, 240, 240);
      }

      // 6. Character Name
      ctx.fillStyle = '#ffffff';
      ctx.font = '900 28px serif';
      ctx.textAlign = 'center';
      ctx.fillText(character.name, width / 2, 385);

      // 7. Tier Ribbon
      const tierGrad = ctx.createLinearGradient(60, 405, width - 60, 405);
      tierGrad.addColorStop(0, '#7c3aed');
      tierGrad.addColorStop(1, '#db2777');
      ctx.fillStyle = tierGrad;
      ctx.fillRect(60, 400, width - 120, 34);

      ctx.fillStyle = '#fef08a';
      ctx.font = 'bold 15px monospace';
      ctx.fillText(character.tier || 'Tier 2-C | Multiversal', width / 2, 423);

      // 8. Stats Breakdown Grid
      ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 2;
      ctx.fillRect(45, 450, width - 90, 260);
      ctx.strokeRect(45, 450, width - 90, 260);

      const statsList = [
        { label: '💥 ATTACK POTENCY:', val: character.ap || 'Nivel Universal' },
        { label: '⚡ VELOCIDAD:', val: character.speed?.combat || 'MFTL+' },
        { label: '🛡️ DURABILIDAD:', val: character.durability || 'Alta' },
        { label: '🧠 BATTLE IQ:', val: character.battleIQ || 'Genio Táctico' },
        { label: '🎯 RANGO:', val: character.range || 'Universal' }
      ];

      ctx.textAlign = 'left';
      statsList.forEach((st, idx) => {
        const yPos = 485 + idx * 48;
        ctx.fillStyle = '#f59e0b';
        ctx.font = 'bold 13px monospace';
        ctx.fillText(st.label, 65, yPos);
        ctx.fillStyle = '#e2e8f0';
        ctx.font = '12px sans-serif';
        const truncated = (st.val.length > 55 ? st.val.slice(0, 52) + '...' : st.val);
        ctx.fillText(truncated, 65, yPos + 18);
      });

      // 9. Special Abilities / Super Attacks
      ctx.fillStyle = 'rgba(30, 41, 59, 0.85)';
      ctx.fillRect(45, 725, width - 90, 155);
      ctx.strokeStyle = '#475569';
      ctx.strokeRect(45, 725, width - 90, 155);

      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 13px monospace';
      ctx.textAlign = 'left';
      ctx.fillText('⚡ TÉCNICAS & ARSENAL DESTACADO:', 65, 750);

      const superAttacks = character.arsenal?.superAttacks || [];
      const ultimate = character.arsenal?.ultimateAttacks?.[0];
      let techY = 775;

      if (ultimate) {
        ctx.fillStyle = '#f43f5e';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText(`★ ULTIMATE: ${ultimate.name}`, 65, techY);
        techY += 24;
      }

      superAttacks.slice(0, 2).forEach((atk) => {
        ctx.fillStyle = '#cbd5e1';
        ctx.font = '11.5px sans-serif';
        ctx.fillText(`• ${atk.name}: ${(atk.desc || '').slice(0, 60)}...`, 65, techY);
        techY += 22;
      });

      // 10. Footer Tag
      ctx.fillStyle = '#64748b';
      ctx.font = 'bold 11px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('APEX POWERSCALING CARD GAME · OFFICIAL TRADING CARD', width / 2, 915);

      // Download Trigger
      const link = document.createElement('a');
      link.download = `APEX_Card_${character.name.replace(/[^a-zA-Z0-9]/g, '_')}_${foilStyle}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (e) {
      console.error(e);
      alert('Error al exportar la carta coleccionable.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-slate-950 border border-amber-500/40 rounded-2xl max-w-lg w-full max-h-[92vh] flex flex-col shadow-[0_0_50px_rgba(245,158,11,0.3)] font-mono text-xs overflow-hidden"
      >
        {/* Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/80 rounded-t-2xl gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-br from-amber-500 to-red-600 text-white">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest block">
                CARTA COLECCIONABLE HOLOGRÁFICA
              </span>
              <h3 className="text-sm font-bold text-white font-cinzel">
                {character.name}
              </h3>
            </div>
          </div>

          <button onClick={onClose} className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body Preview */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex flex-col items-center space-y-4">
          
          {/* Foil Selectors */}
          <div className="flex items-center gap-2">
            <span className="text-slate-400 text-[11px]">Efecto Holográfico:</span>
            {[
              { id: 'gold', label: '👑 Oro', bg: 'bg-amber-600' },
              { id: 'amethyst', label: '💎 Amatista', bg: 'bg-purple-600' },
              { id: 'rainbow', label: '🌈 Arcoíris', bg: 'bg-gradient-to-r from-red-500 via-green-500 to-blue-500' },
              { id: 'cyber', label: '⚡ Cyber Blue', bg: 'bg-cyan-600' }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setFoilStyle(f.id)}
                className={`px-2.5 py-1 rounded-lg font-bold text-[10.5px] border transition cursor-pointer ${
                  foilStyle === f.id ? `${f.bg} text-white border-white` : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Interactive Card Mockup Preview */}
          <div className={`w-64 rounded-2xl p-3 bg-gradient-to-b from-slate-900 to-slate-950 border-4 shadow-2xl transition transform hover:scale-105 duration-300 ${
            foilStyle === 'gold' ? 'border-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.3)]' :
            foilStyle === 'amethyst' ? 'border-purple-400 shadow-[0_0_30px_rgba(192,132,252,0.3)]' :
            foilStyle === 'rainbow' ? 'border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.3)]' :
            'border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.3)]'
          }`}>
            <div className="text-[8.5px] text-center text-cyan-300 font-bold uppercase truncate pb-1">
              {character.universe}
            </div>
            
            <div className="w-full h-36 rounded-xl bg-slate-950 border border-slate-800 overflow-hidden flex items-center justify-center relative">
              <img src={character.avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(character.name)}`} alt="" className="w-full h-full object-contain" />
              <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/80 text-yellow-300 text-[8px] font-bold">
                {character.tier?.split('|')[0] || character.tier}
              </span>
            </div>

            <div className="pt-2 text-center">
              <h4 className="font-bold text-white text-xs truncate font-cinzel">{character.name}</h4>
              <p className="text-[8.5px] text-slate-400 truncate">{character.alias || character.saga || 'Guerrero Multiversal'}</p>
            </div>

            <div className="mt-2 p-1.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1 text-[8.5px]">
              <div className="flex justify-between text-slate-300">
                <span className="text-amber-400 font-bold">AP:</span>
                <span className="truncate max-w-[120px]">{character.ap?.slice(0, 20)}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-cyan-400 font-bold">VEL:</span>
                <span className="truncate max-w-[120px]">{character.speed?.combat || 'MFTL+'}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-emerald-400 font-bold">BIQ:</span>
                <span className="truncate max-w-[120px]">{character.battleIQ?.slice(0, 20)}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-3 border-t border-slate-800 bg-slate-950 flex items-center justify-between">
          <button onClick={onClose} className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 text-xs border border-slate-800 transition cursor-pointer">
            Cerrar
          </button>
          
          <button
            onClick={handleDownloadImage}
            disabled={isExporting}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-500 hover:to-red-500 text-white font-bold text-xs transition flex items-center gap-2 cursor-pointer shadow-lg shadow-amber-950 disabled:opacity-50"
          >
            {isExporting ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
            <span>Descargar Carta PNG HD</span>
          </button>
        </div>

      </div>
    </div>
  );
}
