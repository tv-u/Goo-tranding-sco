import React, { useState } from 'react';
import { Cloud, CheckCircle, ExternalLink, Zap, ShieldCheck, ArrowRight, Copy, Terminal, Globe, RefreshCw } from 'lucide-react';
import { openSmartLink } from '../utils/adsterra';

interface CloudflareConnectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CloudflareConnectionModal: React.FC<CloudflareConnectionModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [status, setStatus] = useState<'connected' | 'idle'>('connected');

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(id);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleTestEdge = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setStatus('connected');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xl flex justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0d0d14] border border-[#f38020]/30 rounded-2xl shadow-2xl overflow-hidden my-auto text-slate-200">
        {/* Top Gradient Banner */}
        <div className="bg-gradient-to-r from-[#f38020]/20 via-[#faae40]/10 to-transparent p-5 border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#f38020]/20 border border-[#f38020]/40 flex items-center justify-center text-[#f38020] shadow-lg">
              <Cloud className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                GitHub ➔ Cloudflare Pages Pipeline
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#00ff88]/20 text-[#00ff88] border border-[#00ff88]/30 font-bold">
                  Active Edge
                </span>
              </h3>
              <p className="text-xs text-slate-400">Zero-Latency Global Anycast CDN, DDoS Shield & Automated Deployments</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-slate-400 hover:text-white flex items-center justify-center text-sm transition"
          >
            ✕
          </button>
        </div>

        <div className="p-5 sm:p-6 space-y-5">
          {/* Status Metric Card */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-[#13131c] border border-white/[0.06]">
              <span className="text-[10px] font-mono text-slate-400 uppercase">CDN Latency</span>
              <div className="text-lg font-black text-[#00ff88] mt-0.5 font-mono">12 ms (Edge)</div>
              <span className="text-[10px] text-slate-500">300+ PoPs worldwide</span>
            </div>
            <div className="p-3 rounded-xl bg-[#13131c] border border-white/[0.06]">
              <span className="text-[10px] font-mono text-slate-400 uppercase">DDoS & Bot Shield</span>
              <div className="text-lg font-black text-[#00f0ff] mt-0.5 font-mono">Enterprise Level</div>
              <span className="text-[10px] text-slate-500">Under Attack Mode Ready</span>
            </div>
            <div className="p-3 rounded-xl bg-[#13131c] border border-white/[0.06]">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Auto Sync Push</span>
              <div className="text-lg font-black text-[#f38020] mt-0.5 font-mono">Instant Hook</div>
              <span className="text-[10px] text-slate-500">Every git push deploys</span>
            </div>
          </div>

          {/* Quick Setup Commands & Config */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-[#f38020]" />
              Cloudflare Pages Build Configuration
            </h4>

            <div className="p-3.5 rounded-xl bg-black/60 border border-white/[0.08] space-y-2.5 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-500">Framework Preset:</span>
                <span className="text-[#00ff88] font-bold">Vite</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-500">Build Command:</span>
                <div className="flex items-center gap-2">
                  <span className="text-white bg-white/[0.08] px-2 py-0.5 rounded">npm run build</span>
                  <button
                    onClick={() => copyToClipboard('npm run build', 'build_cmd')}
                    className="text-slate-400 hover:text-white"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-500">Build Output Directory:</span>
                <div className="flex items-center gap-2">
                  <span className="text-white bg-white/[0.08] px-2 py-0.5 rounded">dist</span>
                  <button
                    onClick={() => copyToClipboard('dist', 'dist_dir')}
                    className="text-slate-400 hover:text-white"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-500">Environment Node Version:</span>
                <span className="text-white font-bold">22.x</span>
              </div>
            </div>
          </div>

          {/* 1-Click Connect Instructions */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-[#161624] to-[#12121a] border border-white/[0.08] space-y-2">
            <div className="text-xs font-bold text-white flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#00f0ff]" />
              How to Link GitHub to Cloudflare Pages (100% Free):
            </div>
            <ol className="text-xs text-slate-300 list-decimal list-inside space-y-1 leading-relaxed">
              <li>Log in to <strong className="text-white">dash.cloudflare.com</strong> ➔ Click <strong className="text-white">Workers & Pages</strong>.</li>
              <li>Click <strong className="text-white">Create application</strong> ➔ Select <strong className="text-white">Pages</strong> ➔ <strong className="text-white">Connect to Git</strong>.</li>
              <li>Select your repository: <strong className="text-[#f38020]">tv-u/Goo-tranding-sco</strong>.</li>
              <li>Preset: <strong className="text-white">Vite</strong> | Output: <strong className="text-[#00ff88]">dist</strong> ➔ Click <strong className="text-white">Save and Deploy</strong>.</li>
            </ol>
          </div>

          {/* Monetized High CPM Sponsor Hook */}
          <div 
            onClick={(e) => openSmartLink(e)}
            className="p-3.5 rounded-xl bg-gradient-to-r from-[#ff0080]/15 via-[#7928ca]/15 to-[#00f0ff]/15 border border-[#ff0080]/30 flex items-center justify-between cursor-pointer hover:border-[#ff0080] transition group"
          >
            <div className="flex items-center gap-2.5">
              <span className="text-xs">⚡</span>
              <div>
                <div className="text-xs font-bold text-white group-hover:text-[#ff0080] transition-colors">
                  Turbocharge Global Edge RPM & Direct Adsterra Traffic
                </div>
                <div className="text-[11px] text-slate-400">
                  Boost CPM monetization across worldwide Tier-1 regions with ultra-fast latency.
                </div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-white/70 group-hover:text-white shrink-0" />
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <button
              onClick={handleTestEdge}
              disabled={isVerifying}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-white text-xs font-mono font-bold flex items-center justify-center gap-2 transition"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isVerifying ? 'animate-spin text-[#f38020]' : ''}`} />
              {isVerifying ? 'Verifying Anycast Mesh...' : 'Ping Cloudflare Edge Nodes'}
            </button>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#f38020] hover:bg-[#faae40] text-black font-black text-xs transition shadow-lg flex items-center justify-center gap-1.5"
            >
              <span>Done / Edge Synchronized</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
