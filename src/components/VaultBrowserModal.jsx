import React, { useEffect, useState } from 'react';
import { X, Folder, FileText, RefreshCw, CheckCircle, AlertCircle } from 'lucide-react';

export default function VaultBrowserModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [vaultFiles, setVaultFiles] = useState([]);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStatusAndFiles();
  }, []);

  const fetchStatusAndFiles = async () => {
    setLoading(true);
    try {
      const statusRes = await fetch('/api/vault/status');
      const statusData = await statusRes.json();
      setStatus(statusData);

      const filesRes = await fetch('/api/vault/files');
      const filesData = await filesRes.json();
      setVaultFiles(filesData.files || []);
    } catch (e) {
      setStatus({ connected: false, error: e.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl rounded-2xl glass-panel border border-slate-700 shadow-2xl p-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Folder className="w-5 h-5 text-purple-400" />
            <h2 className="text-lg font-bold text-white font-cinzel">Explorador de Obsidian Vault (Z:\)</h2>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono flex items-center justify-between">
          <div className="flex items-center gap-2">
            {status?.connected ? <CheckCircle className="w-4 h-4 text-emerald-400" /> : <AlertCircle className="w-4 h-4 text-amber-400" />}
            <span className="text-slate-300">{status?.connected ? 'Conectado a Z:\Obsidian Vault' : 'No conectado'}</span>
          </div>
          <button onClick={fetchStatusAndFiles} className="p-1 rounded bg-slate-800 text-slate-400 hover:text-white transition">
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>

        <div className="mt-4 space-y-2 max-h-64 overflow-y-auto text-xs font-mono">
          <div className="text-slate-400 text-[11px] uppercase tracking-wider mb-1">Archivos en 06 - Proyectos / Obsidian + IA:</div>
          {vaultFiles.length === 0 ? (
            <div className="p-4 text-center text-slate-500 bg-slate-950/40 rounded-lg">
              {loading ? 'Cargando notas...' : 'No se encontraron notas en esta carpeta.'}
            </div>
          ) : (
            vaultFiles.map((file, idx) => (
              <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:bg-slate-800/60 transition">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-purple-400" />
                  <span className="text-slate-200 font-medium">{file.name}</span>
                </div>
                <span className="text-[10px] text-slate-500">{(file.size / 1024).toFixed(1)} KB</span>
              </div>
            ))
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button onClick={onClose} className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono cursor-pointer">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
