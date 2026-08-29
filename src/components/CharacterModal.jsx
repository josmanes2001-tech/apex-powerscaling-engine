import React, { useState } from 'react';
import { 
  X, Shield, Zap, Activity, Brain, AlertTriangle, ListPlus, Battery, 
  Dumbbell, Move, Swords, Book, Target, Sparkles, Users, Wrench, Flame, ShieldAlert, Cpu 
} from 'lucide-react';

const COMMON_HAX_TAGS = [
  'Negación de Durabilidad',
  'Manipulación Espacial',
  'Manipulación Temporal',
  'Borrado Existencial',
  'Inmunidad Mental',
  'Anulación de Regeneración',
  'Adaptación Reactiva',
  'Acausalidad',
  'Ataques Conceptuales',
  'Inducción de Muerte'
];

export default function CharacterModal({ character, onClose, onSave, isEditing = false, aiConfig }) {
  const [activeTab, setActiveTab] = useState('basico');
  const [formData, setFormData] = useState(character || {
    id: `custom-${Date.now()}`,
    name: '',
    universe: '',
    version: '',
    tier: 'Tier 7-B',
    ap: '',
    range: 'Cuerpo a cuerpo estándar',
    speed: { combat: '', reaction: '', travel: '', attack: '' },
    strength: { striking: '', lifting: '' },
    durability: '',
    stamina: '',
    battleIQ: '',
    haxTags: [],
    subEntity: { name: '', type: '', stats: '' },
    arsenal: {
      basicAttacks: '',
      superAttacks: [],
      ultimateAttacks: [],
      passives: [],
      actives: []
    },
    abilities: [],
    forms: [],
    feats: [],
    psychology: '',
    weaknesses: '',
    equipment: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNestedChange = (parent, field, value) => {
    setFormData(prev => ({
      ...prev,
      [parent]: { ...prev[parent], [field]: value }
    }));
  };

  const toggleHaxTag = (tag) => {
    const current = formData.haxTags || [];
    if (current.includes(tag)) {
      setFormData(prev => ({ ...prev, haxTags: current.filter(t => t !== tag) }));
    } else {
      setFormData(prev => ({ ...prev, haxTags: [...current, tag] }));
    }
  };

  // Arsenal Array Helpers
  const addArsenalItem = (category) => {
    setFormData(prev => {
      const currentArsenal = prev.arsenal || { basicAttacks: '', superAttacks: [], ultimateAttacks: [], passives: [], actives: [] };
      const updatedList = [...(currentArsenal[category] || []), { name: '', desc: '', cost: '' }];
      return {
        ...prev,
        arsenal: { ...currentArsenal, [category]: updatedList }
      };
    });
  };

  const updateArsenalItem = (category, index, field, value) => {
    setFormData(prev => {
      const currentArsenal = prev.arsenal || { basicAttacks: '', superAttacks: [], ultimateAttacks: [], passives: [], actives: [] };
      const updatedList = [...(currentArsenal[category] || [])];
      updatedList[index][field] = value;
      return {
        ...prev,
        arsenal: { ...currentArsenal, [category]: updatedList }
      };
    });
  };

  const removeArsenalItem = (category, index) => {
    setFormData(prev => {
      const currentArsenal = prev.arsenal || { basicAttacks: '', superAttacks: [], ultimateAttacks: [], passives: [], actives: [] };
      const updatedList = currentArsenal[category].filter((_, i) => i !== index);
      return {
        ...prev,
        arsenal: { ...currentArsenal, [category]: updatedList }
      };
    });
  };

  const handleAutoFill = async () => {
    if (!formData.name) return alert('Pon un nombre primero para buscar.');
    setIsLoading(true);
    try {
      const res = await fetch(`http://${window.location.hostname}:3001/api/character/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          engine: aiConfig?.engine || 'ollama',
          model: aiConfig?.model || '',
          apiKey: aiConfig?.apiKey || '',
          customBaseUrl: aiConfig?.customBaseUrl || ''
        })
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setFormData(prev => ({
        ...prev,
        ...data,
        id: prev.id
      }));
    } catch (e) {
      alert('Error en IA: ' + e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const addForm = () => {
    setFormData(prev => ({
      ...prev,
      forms: [...(prev.forms || []), { id: `form-${Date.now()}`, name: '', stats: '' }]
    }));
  };

  const updateForm = (index, field, value) => {
    const newForms = [...formData.forms];
    newForms[index][field] = value;
    setFormData(prev => ({ ...prev, forms: newForms }));
  };

  const removeForm = (index) => {
    setFormData(prev => ({ ...prev, forms: prev.forms.filter((_, i) => i !== index) }));
  };

  const TABS = [
    { id: 'basico', label: 'Básico', icon: <Book className="w-3.5 h-3.5" /> },
    { id: 'arsenal', label: 'Ataques & Habilidades', icon: <Flame className="w-3.5 h-3.5 text-orange-400" /> },
    { id: 'cinetica', label: 'Cinética', icon: <Move className="w-3.5 h-3.5" /> },
    { id: 'biomecanica', label: 'Biomecánica', icon: <Activity className="w-3.5 h-3.5" /> },
    { id: 'hax', label: 'Hax & Tags', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'formas', label: 'Formas', icon: <ListPlus className="w-3.5 h-3.5" /> },
    { id: 'invocaciones', label: 'Stands/Armas', icon: <Users className="w-3.5 h-3.5" /> },
    { id: 'psicologia', label: 'Psicología', icon: <Brain className="w-3.5 h-3.5" /> }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl rounded-2xl glass-panel border border-slate-700 shadow-2xl p-0 my-8 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/50 rounded-t-2xl">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Shield className="w-5 h-5 text-red-500" />
              {isEditing ? 'Crear / Editar Ficha Técnica (Arsenal Completo)' : formData.name}
            </h2>
            <p className="text-xs text-slate-400 font-mono mt-1">
              {formData.universe} — {formData.version || 'Sistema Oficial VS Battles & OMNI-TITÁN'}
            </p>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* AI Autocomplete */}
        {isEditing && (
          <div className="px-5 pt-4">
            <div className="flex items-center gap-3 p-3 bg-indigo-900/20 border border-indigo-500/30 rounded-xl">
              <div className="flex-1 text-xs font-mono">
                <label className="block text-indigo-300 font-bold mb-1">Buscar Nombre con IA (Genera Arsenal, Pasivas y Ultimates)</label>
                <input 
                  type="text" 
                  value={formData.name} 
                  onChange={e => handleChange('name', e.target.value)} 
                  placeholder="Ej: Goku, Broly, Rocky Zeppeli, Sukuna, Thor..." 
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white" 
                />
              </div>
              <button 
                onClick={handleAutoFill} 
                disabled={isLoading}
                className="px-4 py-2.5 mt-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition disabled:opacity-50 flex items-center gap-2 cursor-pointer text-xs"
              >
                <Zap className="w-4 h-4" />
                {isLoading ? 'Analizando Arsenal...' : '✨ Autocompletar'}
              </button>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex border-b border-slate-800 px-5 pt-4 gap-2 overflow-x-auto">
          {TABS.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-bold border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === t.id ? 'border-red-500 text-red-400' : 'border-transparent text-slate-400 hover:text-slate-300'
              }`}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div className="p-5 overflow-y-auto flex-1 font-mono text-xs">
          
          {/* TAB 1: BÁSICO */}
          {activeTab === 'basico' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 mb-1">Universo / Franquicia</label>
                  {isEditing ? <input type="text" value={formData.universe} onChange={e => handleChange('universe', e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white" /> : <p className="text-slate-200">{formData.universe}</p>}
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Versión / Lore</label>
                  {isEditing ? <input type="text" value={formData.version} onChange={e => handleChange('version', e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white" /> : <p className="text-slate-200">{formData.version}</p>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-amber-400 mb-1 font-bold">Tier / Power Level</label>
                  {isEditing ? <input type="text" value={formData.tier} onChange={e => handleChange('tier', e.target.value)} className="w-full bg-slate-900 border border-amber-900/50 rounded-lg p-2 text-white" /> : <p className="text-amber-200">{formData.tier}</p>}
                </div>
                <div>
                  <label className="block text-cyan-400 mb-1 font-bold flex items-center gap-1"><Target className="w-3.5 h-3.5"/> Rango / Alcance</label>
                  {isEditing ? <input type="text" placeholder="Ej: Cuerpo a cuerpo, Planetario, Multiversal" value={formData.range || ''} onChange={e => handleChange('range', e.target.value)} className="w-full bg-slate-900 border border-cyan-900/50 rounded-lg p-2 text-white" /> : <p className="text-cyan-200">{formData.range || 'Cuerpo a cuerpo estándar'}</p>}
                </div>
              </div>

              <div>
                <label className="block text-red-400 mb-1 font-bold flex items-center gap-1"><Zap className="w-3.5 h-3.5"/> Attack Potency (DC)</label>
                {isEditing ? <textarea rows={2} value={formData.ap} onChange={e => handleChange('ap', e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white" /> : <p className="text-slate-200">{formData.ap}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800">
                  <label className="block text-slate-400 mb-1 font-bold flex items-center gap-1"><Dumbbell className="w-3.5 h-3.5"/> Fuerza de Impacto</label>
                  {isEditing ? <input type="text" value={formData.strength?.striking || ''} onChange={e => handleNestedChange('strength', 'striking', e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded p-1.5 text-white" /> : <p className="text-slate-200">{formData.strength?.striking}</p>}
                </div>
                <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800">
                  <label className="block text-slate-400 mb-1 font-bold flex items-center gap-1"><Dumbbell className="w-3.5 h-3.5"/> Levantamiento (Lifting)</label>
                  {isEditing ? <input type="text" value={formData.strength?.lifting || ''} onChange={e => handleNestedChange('strength', 'lifting', e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded p-1.5 text-white" /> : <p className="text-slate-200">{formData.strength?.lifting}</p>}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ARSENAL, ATAQUES Y HABILIDADES (NUEVO) */}
          {activeTab === 'arsenal' && (
            <div className="space-y-5">
              {/* Ataques Básicos */}
              <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
                <label className="block text-amber-400 font-bold mb-1 flex items-center gap-2">
                  <Swords className="w-4 h-4 text-amber-400" /> Ataques Básicos / Normales
                </label>
                <p className="text-[10px] text-slate-500 mb-2">Golpes cuerpo a cuerpo estándar, ráfagas de ki menores, combinaciones sin gasto crítico.</p>
                {isEditing ? (
                  <textarea 
                    rows={2} 
                    placeholder="Ej: Golpes de plasma a 5,000°C, Ráfagas de Ki consecutivas, Barrido de piernas imbuido en fuego." 
                    value={formData.arsenal?.basicAttacks || ''} 
                    onChange={e => handleNestedChange('arsenal', 'basicAttacks', e.target.value)} 
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white" 
                  />
                ) : (
                  <p className="text-slate-300">{formData.arsenal?.basicAttacks || 'Sin ataques básicos registrados.'}</p>
                )}
              </div>

              {/* Súper Ataques */}
              <div className="p-4 bg-orange-950/20 border border-orange-500/30 rounded-xl space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-orange-400 font-bold flex items-center gap-2">
                    <Flame className="w-4 h-4 text-orange-400" /> Súper Ataques (Técnicas Especiales)
                  </label>
                  {isEditing && (
                    <button type="button" onClick={() => addArsenalItem('superAttacks')} className="px-2.5 py-1 bg-orange-600 hover:bg-orange-500 text-white rounded text-[10px] font-bold cursor-pointer">
                      + Añadir Súper Ataque
                    </button>
                  )}
                </div>

                {(!formData.arsenal?.superAttacks || formData.arsenal.superAttacks.length === 0) ? (
                  <p className="text-slate-500 italic text-[11px]">No hay súper ataques registrados.</p>
                ) : (
                  <div className="space-y-2">
                    {formData.arsenal.superAttacks.map((item, idx) => (
                      <div key={idx} className="p-3 bg-slate-900 border border-slate-700 rounded-lg space-y-1.5 relative">
                        {isEditing ? (
                          <>
                            <div className="flex items-center justify-between gap-2">
                              <input type="text" placeholder="Nombre (Ej: Kamehameha, Raikiri, Getsuga Tensho)" value={item.name} onChange={e => updateArsenalItem('superAttacks', idx, 'name', e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded p-1 text-orange-300 font-bold" />
                              <button type="button" onClick={() => removeArsenalItem('superAttacks', idx)} className="text-red-400 hover:text-red-300 text-xs font-bold">✕</button>
                            </div>
                            <textarea rows={1} placeholder="Descripción del efecto, velocidad y rango..." value={item.desc} onChange={e => updateArsenalItem('superAttacks', idx, 'desc', e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded p-1 text-slate-300 text-[11px]" />
                            <input type="text" placeholder="Coste (Ej: 15% Ki, 2 seg de carga)" value={item.cost} onChange={e => updateArsenalItem('superAttacks', idx, 'cost', e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded p-1 text-slate-400 text-[10px]" />
                          </>
                        ) : (
                          <div>
                            <span className="font-bold text-orange-300">{item.name}</span>
                            <p className="text-slate-300 text-[11px] mt-0.5">{item.desc}</p>
                            {item.cost && <span className="text-[10px] text-amber-500/80 font-mono">Coste: {item.cost}</span>}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Ataques Definitivos (Ultimates) */}
              <div className="p-4 bg-red-950/30 border border-red-500/40 rounded-xl space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-red-400 font-bold flex items-center gap-2">
                    <Zap className="w-4 h-4 text-red-500" /> Ataques Definitivos (Ultimates / Finisher)
                  </label>
                  {isEditing && (
                    <button type="button" onClick={() => addArsenalItem('ultimateAttacks')} className="px-2.5 py-1 bg-red-600 hover:bg-red-500 text-white rounded text-[10px] font-bold cursor-pointer">
                      + Añadir Ultimate
                    </button>
                  )}
                </div>
                <p className="text-[10px] text-red-400/70">La técnica final que se ejecuta en el Clímax de la simulación (Genkidama, Hollow Purple 200%, Final Flash, Expansión de Dominio).</p>

                {(!formData.arsenal?.ultimateAttacks || formData.arsenal.ultimateAttacks.length === 0) ? (
                  <p className="text-slate-500 italic text-[11px]">No hay ataques definitivos registrados.</p>
                ) : (
                  <div className="space-y-2">
                    {formData.arsenal.ultimateAttacks.map((item, idx) => (
                      <div key={idx} className="p-3 bg-slate-900 border border-red-900/50 rounded-lg space-y-1.5">
                        {isEditing ? (
                          <>
                            <div className="flex items-center justify-between gap-2">
                              <input type="text" placeholder="Nombre (Ej: Omega Blaster Gigante, Vacío Inconmensurable)" value={item.name} onChange={e => updateArsenalItem('ultimateAttacks', idx, 'name', e.target.value)} className="w-full bg-slate-950 border border-red-900/60 rounded p-1 text-red-300 font-bold" />
                              <button type="button" onClick={() => removeArsenalItem('ultimateAttacks', idx)} className="text-red-400 hover:text-red-300 text-xs font-bold">✕</button>
                            </div>
                            <textarea rows={1} placeholder="Efecto destructivo a escala masiva / Borrado atómico..." value={item.desc} onChange={e => updateArsenalItem('ultimateAttacks', idx, 'desc', e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded p-1 text-slate-300 text-[11px]" />
                            <input type="text" placeholder="Desgaste terminal (Ej: Agota el 90% de energía, fractura de brazos)" value={item.cost} onChange={e => updateArsenalItem('ultimateAttacks', idx, 'cost', e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded p-1 text-red-400 text-[10px]" />
                          </>
                        ) : (
                          <div>
                            <span className="font-bold text-red-400">{item.name}</span>
                            <p className="text-slate-200 text-[11px] mt-0.5">{item.desc}</p>
                            {item.cost && <span className="text-[10px] text-red-400/90 font-mono">⚠️ Coste: {item.cost}</span>}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Habilidades Pasivas y Activas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Pasivas */}
                <div className="p-3 bg-emerald-950/20 border border-emerald-500/30 rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-400 font-bold flex items-center gap-1.5"><ShieldAlert className="w-3.5 h-3.5"/> Habilidades Pasivas</span>
                    {isEditing && (
                      <button type="button" onClick={() => addArsenalItem('passives')} className="px-2 py-0.5 bg-emerald-700 hover:bg-emerald-600 text-white rounded text-[9px] font-bold cursor-pointer">+ Pasiva</button>
                    )}
                  </div>
                  <p className="text-[9px] text-emerald-500/70">Zenkai, Regeneración pasiva, Adaptación biológica continua, Intangibilidad.</p>
                  <div className="space-y-1.5">
                    {formData.arsenal?.passives?.map((item, idx) => (
                      <div key={idx} className="p-2 bg-slate-900 border border-emerald-900/40 rounded">
                        {isEditing ? (
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <input type="text" placeholder="Nombre Pasiva" value={item.name} onChange={e => updateArsenalItem('passives', idx, 'name', e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded p-1 text-emerald-300 text-xs font-bold" />
                              <button type="button" onClick={() => removeArsenalItem('passives', idx)} className="text-red-400 ml-1 text-xs">✕</button>
                            </div>
                            <input type="text" placeholder="Efecto continuo..." value={item.desc} onChange={e => updateArsenalItem('passives', idx, 'desc', e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded p-1 text-slate-300 text-[10px]" />
                          </div>
                        ) : (
                          <div>
                            <span className="font-bold text-emerald-300">{item.name}</span>
                            <p className="text-slate-300 text-[10px]">{item.desc}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activas */}
                <div className="p-3 bg-cyan-950/20 border border-cyan-500/30 rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 font-bold flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5"/> Habilidades Activas / Buffs</span>
                    {isEditing && (
                      <button type="button" onClick={() => addArsenalItem('actives')} className="px-2 py-0.5 bg-cyan-700 hover:bg-cyan-600 text-white rounded text-[9px] font-bold cursor-pointer">+ Activa</button>
                    )}
                  </div>
                  <p className="text-[9px] text-cyan-500/70">Teletransportación, Kaio-ken, Ilusiones, Campo de Fuerza manual.</p>
                  <div className="space-y-1.5">
                    {formData.arsenal?.actives?.map((item, idx) => (
                      <div key={idx} className="p-2 bg-slate-900 border border-cyan-900/40 rounded">
                        {isEditing ? (
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <input type="text" placeholder="Nombre Activa" value={item.name} onChange={e => updateArsenalItem('actives', idx, 'name', e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded p-1 text-cyan-300 text-xs font-bold" />
                              <button type="button" onClick={() => removeArsenalItem('actives', idx)} className="text-red-400 ml-1 text-xs">✕</button>
                            </div>
                            <input type="text" placeholder="Efecto y duración..." value={item.desc} onChange={e => updateArsenalItem('actives', idx, 'desc', e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded p-1 text-slate-300 text-[10px]" />
                          </div>
                        ) : (
                          <div>
                            <span className="font-bold text-cyan-300">{item.name}</span>
                            <p className="text-slate-300 text-[10px]">{item.desc}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CINÉTICA */}
          {activeTab === 'cinetica' && (
            <div className="space-y-4">
              <h3 className="text-cyan-400 font-bold mb-2 flex items-center gap-2"><Move className="w-4 h-4" /> Desglose Cinético de Velocidades</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg">
                  <label className="block text-slate-400 mb-1">Combate (Cuerpo a Cuerpo)</label>
                  {isEditing ? <input type="text" value={formData.speed?.combat || ''} onChange={e => handleNestedChange('speed', 'combat', e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded p-1.5 text-white" /> : <p className="text-slate-200">{formData.speed?.combat}</p>}
                </div>
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg">
                  <label className="block text-slate-400 mb-1">Reacción (Esquiva/Reflejos)</label>
                  {isEditing ? <input type="text" value={formData.speed?.reaction || ''} onChange={e => handleNestedChange('speed', 'reaction', e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded p-1.5 text-white" /> : <p className="text-slate-200">{formData.speed?.reaction}</p>}
                </div>
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg">
                  <label className="block text-slate-400 mb-1">Desplazamiento (Viaje/Vuelo)</label>
                  {isEditing ? <input type="text" value={formData.speed?.travel || ''} onChange={e => handleNestedChange('speed', 'travel', e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded p-1.5 text-white" /> : <p className="text-slate-200">{formData.speed?.travel}</p>}
                </div>
                <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg">
                  <label className="block text-slate-400 mb-1">Ataque (Habilidades/Proyectiles)</label>
                  {isEditing ? <input type="text" value={formData.speed?.attack || ''} onChange={e => handleNestedChange('speed', 'attack', e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded p-1.5 text-white" /> : <p className="text-slate-200">{formData.speed?.attack}</p>}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: BIOMECÁNICA */}
          {activeTab === 'biomecanica' && (
            <div className="space-y-4">
              <div className="p-4 bg-emerald-900/20 border border-emerald-500/30 rounded-xl">
                <label className="block text-emerald-400 font-bold mb-1 flex items-center gap-2"><Battery className="w-4 h-4"/> Stamina / Límite Térmico & Calórico</label>
                <p className="text-[10px] text-emerald-500/70 mb-2">Desgaste antes de fatiga terminal, colapso de órganos o daño autoinfligido.</p>
                {isEditing ? <textarea rows={2} value={formData.stamina || ''} onChange={e => handleChange('stamina', e.target.value)} className="w-full bg-slate-900 border border-emerald-900/50 rounded-lg p-2 text-white" /> : <p className="text-emerald-100">{formData.stamina}</p>}
              </div>

              <div>
                <label className="block text-cyan-400 mb-1 font-bold flex items-center gap-1"><Shield className="w-3.5 h-3.5"/> Durabilidad y Barreras</label>
                {isEditing ? <textarea rows={2} value={formData.durability} onChange={e => handleChange('durability', e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white" /> : <p className="text-slate-200">{formData.durability}</p>}
              </div>

              <div>
                <label className="block text-red-400 mb-1 font-bold flex items-center gap-1"><AlertTriangle className="w-3.5 h-3.5"/> Debilidades (Condición de Derrota)</label>
                {isEditing ? <textarea rows={2} value={formData.weaknesses} onChange={e => handleChange('weaknesses', e.target.value)} className="w-full bg-slate-900 border border-red-900/50 rounded-lg p-2 text-white" /> : <p className="text-slate-200">{formData.weaknesses}</p>}
              </div>
            </div>
          )}

          {/* TAB 5: HAX */}
          {activeTab === 'hax' && (
            <div className="space-y-4">
              <h3 className="text-fuchsia-400 font-bold mb-1 flex items-center gap-2"><Sparkles className="w-4 h-4" /> Matriz de Hax & Resistencias Especiales</h3>
              <p className="text-[10px] text-slate-400 mb-3">Activa los tags de combate que la IA debe respetar con máxima prioridad de anulación.</p>
              
              <div className="grid grid-cols-2 gap-2">
                {COMMON_HAX_TAGS.map(tag => {
                  const isChecked = (formData.haxTags || []).includes(tag);
                  return (
                    <button
                      key={tag}
                      type="button"
                      disabled={!isEditing}
                      onClick={() => toggleHaxTag(tag)}
                      className={`p-2.5 rounded-xl border text-left transition flex items-center justify-between text-xs cursor-pointer ${
                        isChecked 
                          ? 'bg-fuchsia-950/80 border-fuchsia-500 text-fuchsia-200 shadow-[0_0_10px_rgba(217,70,239,0.2)]' 
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <span>{tag}</span>
                      <span className={`w-2 h-2 rounded-full ${isChecked ? 'bg-fuchsia-400' : 'bg-slate-700'}`} />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 6: FORMAS */}
          {activeTab === 'formas' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-amber-400 font-bold flex items-center gap-2"><ListPlus className="w-4 h-4" /> Gestor Exhaustivo de Transformaciones</h3>
                {isEditing && (
                  <button onClick={addForm} className="px-3 py-1 bg-amber-600 hover:bg-amber-500 text-white rounded text-[10px] font-bold cursor-pointer">
                    + Añadir Forma
                  </button>
                )}
              </div>
              
              {(!formData.forms || formData.forms.length === 0) ? (
                <p className="text-slate-500 italic">No hay transformaciones registradas.</p>
              ) : (
                <div className="space-y-3">
                  {formData.forms.map((f, i) => (
                    <div key={i} className="p-3 bg-slate-900 border border-slate-700 rounded-xl relative">
                      {isEditing ? (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] text-amber-500 font-mono">Fase #{i + 1}</span>
                            <button type="button" onClick={() => removeForm(i)} className="text-red-400 hover:text-red-300 text-xs font-bold">Eliminar</button>
                          </div>
                          <input type="text" placeholder="Nombre (Ej: Gear 4, SSJ2, Bankai)" value={f.name} onChange={e => updateForm(i, 'name', e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded p-1.5 text-white font-bold text-sm" />
                          <textarea rows={2} placeholder="Stats, multiplicadores y desgaste..." value={f.stats} onChange={e => updateForm(i, 'stats', e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded p-1.5 text-slate-300 text-xs" />
                        </div>
                      ) : (
                        <div>
                          <h4 className="font-bold text-amber-300">{f.name}</h4>
                          <p className="text-slate-300 mt-1">{f.stats}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 7: STANDS & ARMAS */}
          {activeTab === 'invocaciones' && (
            <div className="space-y-4">
              <div className="p-4 bg-purple-900/20 border border-purple-500/30 rounded-xl">
                <label className="block text-purple-400 font-bold mb-1 flex items-center gap-2"><Users className="w-4 h-4"/> Sub-Entidad / Stand / Invocación / Simbionte</label>
                <p className="text-[10px] text-purple-400/70 mb-2">Para personajes con entidades ligadas (Stands de Jojo, Mahoraga, Venom, Kurama).</p>
                <div className="space-y-2">
                  {isEditing ? (
                    <>
                      <input type="text" placeholder="Nombre de la Entidad (Ej: Star Platinum, Mahoraga)" value={formData.subEntity?.name || ''} onChange={e => handleNestedChange('subEntity', 'name', e.target.value)} className="w-full bg-slate-900 border border-purple-900/50 rounded p-2 text-white" />
                      <textarea rows={2} placeholder="Stats de la entidad, rango y reglas de daño compartido..." value={formData.subEntity?.stats || ''} onChange={e => handleNestedChange('subEntity', 'stats', e.target.value)} className="w-full bg-slate-900 border border-purple-900/50 rounded p-2 text-white" />
                    </>
                  ) : (
                    <div>
                      <p className="font-bold text-purple-300">{formData.subEntity?.name || 'Ninguna entidad ligada.'}</p>
                      {formData.subEntity?.stats && <p className="text-slate-300 mt-1">{formData.subEntity.stats}</p>}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-amber-400 mb-1 font-bold flex items-center gap-1"><Wrench className="w-3.5 h-3.5"/> Armamento y Reliquias Clave</label>
                {isEditing ? <textarea rows={2} placeholder="Armas, armaduras y condiciones de rotura física..." value={formData.equipment || ''} onChange={e => handleChange('equipment', e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white" /> : <p className="text-slate-200">{formData.equipment || 'Sin equipamiento especial.'}</p>}
              </div>
            </div>
          )}

          {/* TAB 8: PSICOLOGÍA */}
          {activeTab === 'psicologia' && (
            <div className="space-y-4">
              <div className="p-4 bg-indigo-900/20 border border-indigo-500/30 rounded-xl">
                <label className="block text-indigo-400 font-bold mb-1 flex items-center gap-2"><Brain className="w-4 h-4"/> Battle IQ (Inteligencia Táctica)</label>
                {isEditing ? <input type="text" value={formData.battleIQ || ''} onChange={e => handleChange('battleIQ', e.target.value)} className="w-full bg-slate-900 border border-indigo-900/50 rounded-lg p-2 text-white" /> : <p className="text-indigo-100">{formData.battleIQ}</p>}
              </div>

              <div>
                <label className="block text-fuchsia-400 mb-1 font-bold">Psicología Tripartita y Microgestos</label>
                <p className="text-[10px] text-slate-500 mb-2">Lo que busca, lo que teme y qué gestos físicos le delatan cuando miente, sufre o enfurece (ADN OMNI-TITÁN).</p>
                {isEditing ? <textarea rows={3} value={formData.psychology} onChange={e => handleChange('psychology', e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white" /> : <p className="text-slate-200">{formData.psychology}</p>}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/80 rounded-b-2xl flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition cursor-pointer">
            {isEditing ? 'Cancelar' : 'Cerrar'}
          </button>
          {isEditing && (
            <button onClick={() => { onSave(formData); onClose(); }} className="px-6 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition cursor-pointer">
              Guardar Ficha
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
