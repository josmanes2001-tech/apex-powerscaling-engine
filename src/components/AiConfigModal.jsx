import React, { useState, useEffect } from 'react';
import { X, Sparkles, Key, Cpu, Globe, Check, Zap, AlertCircle, RefreshCw, Layers, Swords, BookOpen, ShieldCheck, ChevronDown, ChevronUp, Gift } from 'lucide-react';

export const AI_PRESETS = {
  totalgpt: [
    { id: 'Qwen-Qwen3.6-35B-A3B', name: 'Qwen3.6 35B 66K (RECOMENDADO CREAR FICHAS JSON)' },
    { id: 'Doctor-Shotgun-L3.3-70B-Magnum-v4-SE', name: 'Llama3.3 Magnum v4 SE 70B 32K (TOP VISCERAL COMBATE)' },
    { id: 'Infermatic-Cydonia-24B-v4.3-FP8-Dynamic', name: 'Cydonia 24B v4.3 FP8 Dynamic 66K (RÁPIDO Y BUENA NARRATIVA)' },
    { id: 'Sao10K-L3.3-70B-Euryale-v2.3-FP8-Dynamic', name: 'Llama3.3 Euryale v2.3 70B FP8 32K (TOP VISCERAL EURYALE)' },
    { id: 'anthracite-org-magnum-v4-72b-FP8-Dynamic', name: 'Magnum V4 72B FP8 Dynamic 32K' },
    { id: 'TheDrummer-Anubis-70B-v1.1-FP8-Dynamic', name: 'Anubis v1.1 70B FP8 Dynamic 32K' },
    { id: 'TheDrummer-Fallen-Llama-3.3-R1-70B-v1', name: 'DeepSeek L3.3 R1 Fallen v1 70B 32K' },
    { id: 'Sao10K-L3.1-70B-Hanami-x1', name: 'Llama3.1 Hanami x1 70B 32K' },
    { id: 'Strawberrylemonade-L3-70B-v1.1-FP8-Dynamic', name: 'Llama3.3 Strawberrylemonade v1.1 70B FP8 32K' },
    { id: 'Midnight-Miqu-70B-v1.5', name: 'Midnight Miqu v1.5 70B 16K' },
    { id: 'Sao10K-72B-Qwen2.5-Kunou-v1-FP8-Dynamic', name: 'Qwen2.5 Kunou v1 72B FP8 Dynamic 32K' },
    { id: 'TheDrummer-Valkyrie-49B-v1', name: 'Valkyrie v1 49B 64K' },
    { id: 'TheDrummer-Rocinante-12B-v1.1', name: 'Rocinante v1.1 12B 32K (ULTRARRÁPIDO)' },
    { id: 'Qwen-Qwen3-VL-8B-Instruct', name: 'Qwen3 VL 8B Instruct 32K' },
    { id: 'prometheus-eval-prometheus-7b-v2.0', name: 'Prometheus 7B v2.0 16K' }
  ],
  openrouter: [
    // --- Modelos 100% GRATIS (:free) en OpenRouter ---
    { id: 'cohere/north-mini-code:free', name: '🎁 [GRATIS] Cohere: North Mini Code (30B MoE · 256K)' },
    { id: 'z-ai/glm-5.2:free', name: '🎁 [GRATIS] Z.ai: GLM 5.2 (1M Contexto · Razonamiento Extremo)' },
    { id: 'nvidia/nemotron-3-ultra-550b-a55b:free', name: '🎁 [GRATIS] NVIDIA: Nemotron 3 Ultra 550B (MoE 1M Contexto)' },
    { id: 'nvidia/nemotron-3-super-120b-a12b:free', name: '🎁 [GRATIS] NVIDIA: Nemotron 3 Super 120B (MoE 1M Contexto)' },
    { id: 'nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free', name: '🎁 [GRATIS] NVIDIA: Nemotron 3 Nano Omni 30B (Razonamiento)' },
    { id: 'nvidia/nemotron-3.5-content-safety:free', name: '🎁 [GRATIS] NVIDIA: Nemotron 3.5 Content Safety (128K)' },
    { id: 'nvidia/llama-nemotron-rerank-vl-1b-v2:free', name: '🎁 [GRATIS] NVIDIA: Llama Nemotron Rerank VL 1B V2' },
    { id: 'nvidia/llama-nemotron-embed-vl-1b-v2:free', name: '🎁 [GRATIS] NVIDIA: Llama Nemotron Embed VL 1B V2' },
    { id: 'minimax/minimax-m3:free', name: '🎁 [GRATIS] MiniMax: MiniMax M3 (1.05M Contexto · Multimodal)' },
    { id: 'minimax/minimax-m2.7:free', name: '🎁 [GRATIS] MiniMax: MiniMax M2.7 (Multiagente Autónomo)' },
    { id: 'google/gemma-4-31b-it:free', name: '🎁 [GRATIS] Google: Gemma 4 31B Instruct (DeepMind)' },
    { id: 'google/gemma-4-26b-a4b-it:free', name: '🎁 [GRATIS] Google: Gemma 4 26B A4B MoE' },
    { id: 'google/gemini-2.0-flash-exp:free', name: '🎁 [GRATIS] Google: Gemini 2.0 Flash Exp' },
    { id: 'deepseek/deepseek-r1:free', name: '🎁 [GRATIS] DeepSeek: DeepSeek R1 (Razonamiento)' },
    { id: 'deepseek/deepseek-chat:free', name: '🎁 [GRATIS] DeepSeek: DeepSeek V3' },
    { id: 'meta-llama/llama-3.3-70b-instruct:free', name: '🎁 [GRATIS] Meta: Llama 3.3 70B Instruct' },
    { id: 'mistralai/mistral-7b-instruct:free', name: '🎁 [GRATIS] Mistral: Mistral 7B Instruct' },
    { id: 'qwen/qwen-2.5-coder-32b-instruct:free', name: '🎁 [GRATIS] Qwen: Qwen 2.5 Coder 32B' },

    // --- Modelos Google / Gemini en OpenRouter ---
    { id: 'google/gemini-flash-lite-latest', name: 'Google: Gemini Flash Lite Latest' },
    { id: 'google/gemini-flash-latest', name: 'Google: Gemini Flash Latest' },
    { id: 'google/gemini-pro-latest', name: 'Google: Gemini Pro Latest' },
    { id: 'google/gemini-3.7-flash', name: 'Google: Gemini 3.7 Flash' },
    { id: 'google/gemini-3.6-flash', name: 'Google: Gemini 3.6 Flash' },
    { id: 'google/gemini-3.5-flash', name: 'Google: Gemini 3.5 Flash' },
    { id: 'google/gemini-3.5-flash-lite', name: 'Google: Gemini 3.5 Flash Lite' },
    { id: 'google/gemini-3.1-pro-preview', name: 'Google: Gemini 3.1 Pro Preview' },
    { id: 'google/gemini-3.1-flash-lite', name: 'Google: Gemini 3.1 Flash Lite' },
    { id: 'google/gemini-3-flash-preview', name: 'Google: Gemini 3 Flash Preview' },
    { id: 'google/gemini-2.5-pro', name: 'Google: Gemini 2.5 Pro' },
    { id: 'google/gemini-2.5-flash', name: 'Google: Gemini 2.5 Flash' },
    { id: 'google/gemini-2.5-flash-lite', name: 'Google: Gemini 2.5 Flash-Lite' },
    { id: 'google/gemma-4-31b-it', name: 'Google: Gemma 4 31B' },
    { id: 'google/gemma-4-26b-a4b-it', name: 'Google: Gemma 4 26B A4B' },
    { id: 'google/gemma-3-27b-it', name: 'Google: Gemma 3 27B' },
    { id: 'google/gemma-3-12b-it', name: 'Google: Gemma 3 12B' },
    { id: 'google/gemma-3-4b-it', name: 'Google: Gemma 3 4B' },

    // --- Anthropic Claude ---
    { id: 'anthropic/claude-3.7-sonnet', name: 'Anthropic: Claude 3.7 Sonnet (Híbrido Razonamiento)' },
    { id: 'anthropic/claude-3.5-sonnet', name: 'Anthropic: Claude 3.5 Sonnet (Narrativa Top)' },
    { id: 'anthropic/claude-3.5-haiku', name: 'Anthropic: Claude 3.5 Haiku' },
    { id: 'anthropic/claude-3-opus', name: 'Anthropic: Claude 3 Opus' },

    // --- DeepSeek & OpenAI & Meta ---
    { id: 'deepseek/deepseek-r1', name: 'DeepSeek: DeepSeek R1 Oficial' },
    { id: 'deepseek/deepseek-chat', name: 'DeepSeek: DeepSeek V3 Oficial' },
    { id: 'openai/o3-mini', name: 'OpenAI: o3-mini' },
    { id: 'openai/gpt-4o', name: 'OpenAI: GPT-4o' },
    { id: 'openai/gpt-4o-mini', name: 'OpenAI: GPT-4o Mini' },
    { id: 'meta-llama/llama-3.3-70b-instruct', name: 'Meta: Llama 3.3 70B Instruct' },
    { id: 'qwen/qwen-2.5-72b-instruct', name: 'Qwen: Qwen 2.5 72B Instruct' }
  ],
  gemini: [
    // --- Modelos "Latest" / Redirección Automática ---
    { id: 'gemini-flash-lite-latest', name: 'Gemini Flash Lite Latest (Siempre el Flash-Lite más reciente)' },
    { id: 'gemini-flash-latest', name: 'Gemini Flash Latest (Siempre el Flash más reciente)' },
    { id: 'gemini-pro-latest', name: 'Gemini Pro Latest (Siempre el Pro más reciente)' },

    // --- Gemini 3.7 & 3.6 & 3.5 (Última Generación) ---
    { id: 'gemini-3.7-flash', name: 'Gemini 3.7 Flash (Multimodal Ágil & Razonamiento Complejo)' },
    { id: 'gemini-3.6-flash', name: 'Gemini 3.6 Flash (Alta Eficiencia & Flujos de Agentes)' },
    { id: 'gemini-3.5-flash', name: 'Gemini 3.5 Flash (Razonamiento Pro al Coste de Flash)' },
    { id: 'gemini-3.5-flash-lite', name: 'Gemini 3.5 Flash Lite (Subagentes y Cargas Rápidas)' },
    { id: 'gemini-3.1-pro-preview', name: 'Gemini 3.1 Pro (Preview Extremo - Razonamiento Superior)' },
    { id: 'gemini-3.1-pro-preview-customtools', name: 'Gemini 3.1 Pro Preview (Custom Tools)' },
    { id: 'gemini-3-flash-preview', name: 'Gemini 3 Flash (Preview Thinking Rápido)' },
    { id: 'gemini-3.1-flash-lite', name: 'Gemini 3.1 Flash-Lite (Ultrarrápido y Económico)' },

    // --- Gemini 2.5 Series ---
    { id: 'gemini-2.5-pro', name: 'Gemini 2.5 Pro (Razonamiento Profundo & Programación)' },
    { id: 'gemini-2.5-flash', name: 'Gemini 2.5 Flash (Top Precio/Rendimiento y Volumen)' },
    { id: 'gemini-2.5-flash-lite', name: 'Gemini 2.5 Flash-Lite (Baja Latencia & Alto Volumen)' },

    // --- Modelos Abiertos Gemma 4 & Gemma 3 ---
    { id: 'gemma-4-31b-it', name: 'Gemma 4 31B Instruct (Multimodal Denso de Google DeepMind)' },
    { id: 'gemma-4-26b-a4b-it', name: 'Gemma 4 26B A4B (MoE Ligero Eficiente)' },
    { id: 'gemma-3-27b-it', name: 'Gemma 3 27B Instruct' },
    { id: 'gemma-3-12b-it', name: 'Gemma 3 12B Instruct' },
    { id: 'gemma-3-4b-it', name: 'Gemma 3 4B Instruct' },
    { id: 'gemma-3-1b-it', name: 'Gemma 3 1B Instruct' },
    { id: 'gemma-3n-e4b-it', name: 'Gemma 3n E4B (On-Device Eficiente)' },
    { id: 'gemma-3n-e2b-it', name: 'Gemma 3n E2B' },

    // --- Agentes, Razonamiento e Investigación ---
    { id: 'deep-research-preview-04-2026', name: 'Deep Research de Gemini (Agente Investigador Autónomo)' },
    { id: 'deep-research-max-preview-04-2026', name: 'Gemini Deep Research Max' },
    { id: 'antigravity-preview-05-2026', name: 'Agente de Antigravity (Planificación & Código)' },
    { id: 'gemini-2.5-computer-use-preview-10-2025', name: 'Gemini 2.5 Computer Use (Automatización UI/Navegador)' },

    // --- Nano Banana (Imagen) & Veo (Video) ---
    { id: 'gemini-3-pro-image', name: 'Nano Banana Pro (Gemini 3 Pro Image 4K Profesional)' },
    { id: 'gemini-3.1-flash-image', name: 'Nano Banana 2 (Gemini 3.1 Flash Image)' },
    { id: 'gemini-3.1-flash-lite-image', name: 'Nano Banana 2 Lite (Generación Visual Ultrarrápida)' },
    { id: 'gemini-2.5-flash-image', name: 'Nano Banana (Gemini 2.5 Flash Image)' },
    { id: 'gemini-omni-flash', name: 'Gemini Omni Flash (Video & Texto Conversacional)' },
    { id: 'veo-3.1', name: 'Veo 3.1 (Video Cinematográfico 1080p con Audio)' },
    { id: 'veo-3.1-fast', name: 'Veo 3.1 Fast (Video Rápido y Equilibrado)' },
    { id: 'veo-3.1-lite', name: 'Veo 3.1 Lite (Video Económico de Alto Volumen)' },

    // --- Audio, Voz (TTS) y Reconocimiento ---
    { id: 'gemini-3.5-live-translate-preview', name: 'Gemini 3.5 Live Translate (Traducción en Tiempo Real)' },
    { id: 'gemini-3.1-flash-live-preview', name: 'Gemini 3.1 Flash Live (A2A Audio Nativo)' },
    { id: 'gemini-3.1-flash-tts-preview', name: 'TTS de Gemini 3.1 Flash (Voz Guiada & Emociones)' },
    { id: 'chirp-3', name: 'Chirp 3 (Voz a Texto Multilingüe)' },
    { id: 'gemini-2.5-flash-native-audio-preview-12-2025', name: 'Gemini 2.5 Flash Live' },
    { id: 'gemini-2.5-flash-preview-tts', name: 'TTS de Gemini 2.5 Flash' },
    { id: 'gemini-2.5-pro-preview-tts', name: 'TTS de Gemini 2.5 Pro' },

    // --- Música & Especializados ---
    { id: 'lyria-3-pro-preview', name: 'Lyria 3 Pro (Generación de Canciones Completas)' },
    { id: 'lyria-3-clip-preview', name: 'Lyria 3 Clip (Clips Musicales 30s)' },
    { id: 'lyria-realtime-exp', name: 'Lyria RealTime (Transmisión Musical)' },
    { id: 'gemini-robotics-er-2-preview', name: 'Gemini Robotics ER 2 (Razonamiento Espacial Robótico)' },
    { id: 'gemini-robotics-er-1.6-preview', name: 'Gemini Robotics ER 1.6' },
    { id: 'gemini-embedding-2', name: 'Gemini Embedding 2 (Espacio Vectorial Multimodal)' },
    { id: 'gemini-embedding-001', name: 'Gemini Embedding 001' },

    // --- Modelos Anteriores / Clásicos ---
    { id: 'gemini-2.0-flash-001', name: 'Gemini 2.0 Flash' },
    { id: 'gemini-2.0-flash-lite-001', name: 'Gemini 2.0 Flash Lite' },
    { id: 'gemini-flash-1.5-8b', name: 'Gemini 1.5 Flash 8B' },
    { id: 'gemini-1.5-pro', name: 'Gemini 1.5 Pro' },
    { id: 'gemini-1.5-flash', name: 'Gemini 1.5 Flash' }
  ],
  openai: [
    { id: 'gpt-4o', name: 'GPT-4o' },
    { id: 'gpt-4o-mini', name: 'GPT-4o Mini' },
    { id: 'o3-mini', name: 'o3-mini (Razonamiento Técnico)' },
    { id: 'o1', name: 'o1 (Máximo Análisis)' }
  ],
  ollama: [
    { id: 'qwen2.5-coder', name: 'Qwen 2.5 Coder (Instalado en Mini PC)' },
    { id: 'phi4-mini', name: 'Phi-4 Mini (Instalado en Mini PC)' },
    { id: 'llama3.2', name: 'Llama 3.2' },
    { id: 'deepseek-r1:8b', name: 'DeepSeek R1 (Local)' }
  ],
  custom: [
    { id: 'default', name: 'Modelo por defecto de la API Custom' }
  ]
};

const PROVIDER_NAMES = {
  totalgpt: 'TotalGPT / Infermatic',
  gemini: 'Google Gemini API',
  openrouter: 'OpenRouter API',
  openai: 'OpenAI Oficial',
  ollama: 'Ollama (Local / Mini PC)',
  custom: 'Endpoint Custom'
};

const STORAGE_KEY_PROVIDER_KEYS = 'apex_provider_api_keys';

export default function AiConfigModal({ isOpen, onClose, config, onSaveConfig }) {
  const [targetSlot, setTargetSlot] = useState('simulation'); // 'character' | 'simulation'
  const [showKeyVault, setShowKeyVault] = useState(false);

  // Dedicated dictionary of API keys per provider
  const [providerKeys, setProviderKeys] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROVIDER_KEYS);
      if (saved) return JSON.parse(saved);
    } catch {}
    return {
      totalgpt: config?.characterEngine?.apiKey || config?.apiKey || '',
      gemini: '',
      openrouter: '',
      openai: '',
      custom: ''
    };
  });

  // Normalized multi-config state
  const [localConfig, setLocalConfig] = useState(() => {
    const isDual = config && (config.characterEngine || config.simulationEngine);
    if (isDual) {
      return {
        characterEngine: config.characterEngine || { engine: 'totalgpt', model: 'Qwen-Qwen3.6-35B-A3B', apiKey: '', customBaseUrl: '' },
        simulationEngine: config.simulationEngine || { engine: 'totalgpt', model: 'Doctor-Shotgun-L3.3-70B-Magnum-v4-SE', apiKey: '', customBaseUrl: '' }
      };
    }
    return {
      characterEngine: { ...config, model: 'Qwen-Qwen3.6-35B-A3B' },
      simulationEngine: { ...config }
    };
  });

  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState(null);

  // Persist providerKeys on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_PROVIDER_KEYS, JSON.stringify(providerKeys));
    } catch (e) {
      console.error(e);
    }
  }, [providerKeys]);

  if (!isOpen) return null;

  const currentConfigKey = targetSlot === 'character' ? 'characterEngine' : 'simulationEngine';
  const activeSlotConfig = localConfig[currentConfigKey];

  // Provider switched: auto-load API key for that provider!
  const handleProviderChange = (engine) => {
    const defaultModel = AI_PRESETS[engine]?.[0]?.id || '';
    const keyForProvider = providerKeys[engine] || '';

    setLocalConfig(prev => ({
      ...prev,
      [currentConfigKey]: {
        ...prev[currentConfigKey],
        engine,
        model: defaultModel,
        apiKey: keyForProvider
      }
    }));
    setTestResult(null);
  };

  const handleFieldChange = (field, value) => {
    setLocalConfig(prev => ({
      ...prev,
      [currentConfigKey]: {
        ...prev[currentConfigKey],
        [field]: value
      }
    }));

    // If changing API Key, also remember it for this provider!
    if (field === 'apiKey') {
      setProviderKeys(prev => ({
        ...prev,
        [activeSlotConfig.engine]: value
      }));
    }
  };

  const handleVaultKeyChange = (provider, value) => {
    setProviderKeys(prev => ({
      ...prev,
      [provider]: value
    }));

    // Also update any slot currently using this provider
    setLocalConfig(prev => {
      const updated = { ...prev };
      if (updated.characterEngine.engine === provider) {
        updated.characterEngine = { ...updated.characterEngine, apiKey: value };
      }
      if (updated.simulationEngine.engine === provider) {
        updated.simulationEngine = { ...updated.simulationEngine, apiKey: value };
      }
      return updated;
    });
  };

  const handleTestConnection = async () => {
    setTesting(true);
    setTestResult(null);
    try {
      const res = await fetch(`http://${window.location.hostname}:3001/api/ai/test`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(activeSlotConfig)
      });
      const data = await res.json();
      setTestResult(data);
    } catch (err) {
      setTestResult({ success: false, message: `Error conectando al backend: ${err.message}` });
    } finally {
      setTesting(false);
    }
  };

  const handleSave = () => {
    onSaveConfig(localConfig);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl rounded-2xl glass-panel border border-slate-700/80 bg-[#0c101a] shadow-2xl p-6 overflow-hidden space-y-5">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-indigo-400 border border-indigo-500/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white font-cinzel tracking-wide">
                Configuración Dual & Bóveda de API Keys
              </h2>
              <p className="text-xs text-slate-400 font-mono">
                Cada proveedor (Gemini, TotalGPT, OpenRouter) guarda su propia API Key de forma independiente
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Slot Selection Tabs: Character Engine vs Simulation Engine */}
        <div className="grid grid-cols-2 gap-2 p-1 bg-slate-950/80 border border-slate-800 rounded-xl font-mono text-xs">
          <button
            onClick={() => { setTargetSlot('character'); setTestResult(null); }}
            className={`flex items-center justify-center gap-2 py-2.5 rounded-lg transition font-bold cursor-pointer ${
              targetSlot === 'character' 
                ? 'bg-indigo-600 text-white shadow-[0_0_12px_rgba(79,70,229,0.4)]' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>📝 1. Crear Fichas (JSON/Lore)</span>
          </button>

          <button
            onClick={() => { setTargetSlot('simulation'); setTestResult(null); }}
            className={`flex items-center justify-center gap-2 py-2.5 rounded-lg transition font-bold cursor-pointer ${
              targetSlot === 'simulation' 
                ? 'bg-red-600 text-white shadow-[0_0_12px_rgba(220,38,38,0.4)]' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Swords className="w-4 h-4" />
            <span>⚔️ 2. Simulación de Combate</span>
          </button>
        </div>

        {/* Provider Selector */}
        <div className="space-y-4 text-xs font-mono">
          <div>
            <label className="block text-slate-400 mb-2 font-bold flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-amber-400" />
                Proveedor para {targetSlot === 'character' ? 'Crear Fichas' : 'Simulación'}:
              </span>
              <span className="text-[10px] text-emerald-400 font-normal">
                🔑 Clave activa: {PROVIDER_NAMES[activeSlotConfig.engine] || activeSlotConfig.engine}
              </span>
            </label>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {[
                { id: 'totalgpt', name: 'TotalGPT', badge: 'Recomendado' },
                { id: 'openrouter', name: 'OpenRouter', badge: 'Modelos Gratis' },
                { id: 'gemini', name: 'Gemini API' },
                { id: 'openai', name: 'OpenAI' },
                { id: 'ollama', name: 'Ollama (Local)' },
                { id: 'custom', name: 'Custom' }
              ].map(p => (
                <button
                  key={p.id}
                  onClick={() => handleProviderChange(p.id)}
                  className={`p-2 rounded-xl border text-center transition cursor-pointer ${
                    activeSlotConfig.engine === p.id 
                      ? 'bg-amber-950/40 border-amber-500/80 text-amber-300 font-bold shadow-[0_0_10px_rgba(245,158,11,0.2)]' 
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="truncate">{p.name}</div>
                  {p.badge && <div className="text-[9px] text-amber-400/80 mt-0.5">{p.badge}</div>}
                </button>
              ))}
            </div>
          </div>

          {/* Model Selector */}
          <div>
            <label className="block text-slate-400 mb-1 font-bold flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-indigo-400" />
                Modelo Seleccionado ({AI_PRESETS[activeSlotConfig.engine]?.length || 0} disponibles):
              </span>
              {activeSlotConfig.engine === 'openrouter' && (
                <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <Gift className="w-3 h-3" /> Incluye modelos con tag <strong>:free</strong>
                </span>
              )}
            </label>
            <select
              value={activeSlotConfig.model}
              onChange={(e) => handleFieldChange('model', e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white font-mono cursor-pointer"
            >
              {AI_PRESETS[activeSlotConfig.engine]?.map(m => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </select>
          </div>

          {/* Active API Key for Selected Provider */}
          {activeSlotConfig.engine !== 'ollama' && (
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-slate-400 font-bold flex items-center gap-2">
                  <Key className="w-4 h-4 text-amber-400" />
                  API Key específica para {PROVIDER_NAMES[activeSlotConfig.engine] || activeSlotConfig.engine}:
                </label>
                <span className="text-[10px] text-slate-500">Se guarda automáticamente</span>
              </div>
              <input
                type="password"
                placeholder={`Pega tu API Key de ${PROVIDER_NAMES[activeSlotConfig.engine] || activeSlotConfig.engine}`}
                value={activeSlotConfig.apiKey || ''}
                onChange={(e) => handleFieldChange('apiKey', e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white font-mono"
              />
            </div>
          )}

          {/* Custom URL */}
          {(activeSlotConfig.engine === 'ollama' || activeSlotConfig.engine === 'custom') && (
            <div>
              <label className="block text-slate-400 mb-1 font-bold flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-400" />
                URL Base de la API:
              </label>
              <input
                type="text"
                placeholder={activeSlotConfig.engine === 'ollama' ? 'http://127.0.0.1:11434' : 'http://mi-endpoint:8000/v1'}
                value={activeSlotConfig.customBaseUrl || ''}
                onChange={(e) => handleFieldChange('customBaseUrl', e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white font-mono"
              />
            </div>
          )}

          {/* Expandable Provider Key Vault */}
          <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-950/60">
            <button
              onClick={() => setShowKeyVault(p => !p)}
              className="w-full p-2.5 flex items-center justify-between text-slate-400 hover:text-slate-200 transition text-[11px]"
            >
              <span className="flex items-center gap-1.5 font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                <span>Ver y gestionar todas las claves API guardadas por proveedor</span>
              </span>
              {showKeyVault ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {showKeyVault && (
              <div className="p-3 border-t border-slate-800 space-y-2.5 text-[11px]">
                {['openrouter', 'gemini', 'totalgpt', 'openai'].map(prov => (
                  <div key={prov} className="flex items-center gap-2">
                    <span className="w-28 text-slate-400 font-bold">{PROVIDER_NAMES[prov]}:</span>
                    <input
                      type="password"
                      placeholder={`Clave de ${prov}`}
                      value={providerKeys[prov] || ''}
                      onChange={(e) => handleVaultKeyChange(prov, e.target.value)}
                      className="flex-1 bg-slate-900 border border-slate-700 rounded p-1.5 text-white font-mono"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Test Result Message */}
        {testResult && (
          <div className={`p-3 rounded-xl border text-xs font-mono flex items-center gap-2 ${
            testResult.success ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300' : 'bg-red-950/40 border-red-500/40 text-red-300'
          }`}>
            {testResult.success ? <Check className="w-4 h-4 text-emerald-400" /> : <AlertCircle className="w-4 h-4 text-red-400" />}
            <span>{testResult.message}</span>
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-800">
          <button
            onClick={handleTestConnection}
            disabled={testing}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono transition cursor-pointer disabled:opacity-50"
          >
            {testing ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Zap className="w-3.5 h-3.5 text-amber-400" />}
            <span>Probar Conexión Slot</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono transition cursor-pointer"
            >
              Cancelar
            </button>
            <button
              onClick={handleSave}
              className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono font-bold transition shadow-lg shadow-indigo-950/50 cursor-pointer"
            >
              Guardar Configuración
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
