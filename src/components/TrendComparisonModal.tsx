import React, { useState } from 'react';
import { X, Layers, TrendingUp, ArrowRight } from 'lucide-react';
import { TrendItem } from '../types';
import { useI18n } from '../i18n/useI18n';

interface TrendComparisonModalProps {
  trends: TrendItem[];
  onClose: () => void;
  onSelectTrend: (trend: TrendItem) => void;
  currentLangCode: string;
}

export const TrendComparisonModal: React.FC<TrendComparisonModalProps> = ({
  trends,
  onClose,
  onSelectTrend,
  currentLangCode,
}) => {
  const { t, getLocalizedTrend, getLocalizedCategory } = useI18n(currentLangCode);
  const locTrends = trends.map(getLocalizedTrend);

  const [selectedIdA, setSelectedIdA] = useState<string>(locTrends[0]?.id || '');
  const [selectedIdB, setSelectedIdB] = useState<string>(locTrends[1]?.id || '');

  const trendA = locTrends.find((tItem) => tItem.id === selectedIdA) || locTrends[0];
  const trendB = locTrends.find((tItem) => tItem.id === selectedIdB) || locTrends[1];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-lg flex justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0e0e16] border border-white/[0.1] rounded-2xl shadow-2xl overflow-hidden my-auto text-slate-200">
        {/* Header */}
        <div className="bg-[#12121c] border-b border-white/[0.08] px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#ffdd00]/15 border border-[#ffdd00]/30 text-[#ffdd00]">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                {t('compare_title')}
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-[#ffdd00] font-bold">
                  {t('compare_badge')}
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                {t('compare_desc')}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#181824] border border-white/[0.08] text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 max-h-[75vh] overflow-y-auto space-y-6">
          {/* Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-mono text-[#ff0080] mb-1.5 uppercase font-bold">
                {t('trend_subject_a')}
              </label>
              <select
                value={selectedIdA}
                onChange={(e) => setSelectedIdA(e.target.value)}
                className="w-full bg-[#151522] border border-white/[0.1] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#ff0080]"
              >
                {locTrends.map((tItem) => (
                  <option key={tItem.id} value={tItem.id}>
                    #{tItem.rank} {tItem.topic} (+{tItem.velocity}%)
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-[#00ff88] mb-1.5 uppercase font-bold">
                {t('trend_subject_b')}
              </label>
              <select
                value={selectedIdB}
                onChange={(e) => setSelectedIdB(e.target.value)}
                className="w-full bg-[#151522] border border-white/[0.1] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#00ff88]"
              >
                {locTrends.map((tItem) => (
                  <option key={tItem.id} value={tItem.id}>
                    #{tItem.rank} {tItem.topic} (+{tItem.velocity}%)
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Side-by-side Overview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card A */}
            <div className="p-4 rounded-xl bg-[#13131e] border border-[#ff0080]/30 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#ff0080] font-bold">#{trendA.rank} {getLocalizedCategory(trendA.category)}</span>
                <span className="text-[#00ff88] font-bold flex items-center gap-0.5">
                  <TrendingUp className="w-3.5 h-3.5" /> +{trendA.velocity}%
                </span>
              </div>
              <h3 className="text-base font-bold text-white">{trendA.topic}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{trendA.summary}</p>
              <button
                onClick={() => onSelectTrend(trendA)}
                className="w-full py-2 rounded-lg bg-[#ff0080]/20 hover:bg-[#ff0080]/30 text-[#ff0080] font-bold text-xs transition border border-[#ff0080]/40 flex items-center justify-center gap-1"
              >
                <span>{t('read_report_a')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Card B */}
            <div className="p-4 rounded-xl bg-[#13131e] border border-[#00ff88]/30 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#00ff88] font-bold">#{trendB.rank} {getLocalizedCategory(trendB.category)}</span>
                <span className="text-[#00ff88] font-bold flex items-center gap-0.5">
                  <TrendingUp className="w-3.5 h-3.5" /> +{trendB.velocity}%
                </span>
              </div>
              <h3 className="text-base font-bold text-white">{trendB.topic}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{trendB.summary}</p>
              <button
                onClick={() => onSelectTrend(trendB)}
                className="w-full py-2 rounded-lg bg-[#00ff88]/20 hover:bg-[#00ff88]/30 text-[#00ff88] font-bold text-xs transition border border-[#00ff88]/40 flex items-center justify-center gap-1"
              >
                <span>{t('read_report_b')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Metrics Comparison Bars */}
          <div className="p-4 rounded-xl bg-[#101018] border border-white/[0.06] space-y-4">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              {t('telemetry_benchmark')}
            </div>

            {/* Metric: Global Score */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-[#ff0080]">A: {trendA.global_score}</span>
                <span className="text-slate-400 font-bold">{t('global_score')} (/100)</span>
                <span className="text-[#00ff88]">B: {trendB.global_score}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 h-2.5 bg-black/40 rounded-full p-0.5">
                <div className="bg-[#ff0080] rounded-full" style={{ width: `${trendA.global_score}%` }} />
                <div className="bg-[#00ff88] rounded-full" style={{ width: `${trendB.global_score}%` }} />
              </div>
            </div>

            {/* Metric: Search Interest */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-[#ff0080]">{trendA.breakdown.search_interest}</span>
                <span className="text-slate-400 font-bold">{t('factor_search_interest')}</span>
                <span className="text-[#00ff88]">{trendB.breakdown.search_interest}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 h-2.5 bg-black/40 rounded-full p-0.5">
                <div className="bg-[#ff0080] rounded-full" style={{ width: `${trendA.breakdown.search_interest}%` }} />
                <div className="bg-[#00ff88] rounded-full" style={{ width: `${trendB.breakdown.search_interest}%` }} />
              </div>
            </div>

            {/* Metric: Growth Velocity */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-[#ff0080]">+{trendA.velocity}%</span>
                <span className="text-slate-400 font-bold">{t('factor_growth_velocity')}</span>
                <span className="text-[#00ff88]">+{trendB.velocity}%</span>
              </div>
              <div className="grid grid-cols-2 gap-2 h-2.5 bg-black/40 rounded-full p-0.5">
                <div className="bg-[#ff0080] rounded-full" style={{ width: `${Math.min(100, trendA.velocity / 3)}%` }} />
                <div className="bg-[#00ff88] rounded-full" style={{ width: `${Math.min(100, trendB.velocity / 3)}%` }} />
              </div>
            </div>

            {/* Metric: Citations */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-[#ff0080]">{trendA.citations_count}</span>
                <span className="text-slate-400 font-bold">{t('key_verified_facts')}</span>
                <span className="text-[#00ff88]">{trendB.citations_count}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 h-2.5 bg-black/40 rounded-full p-0.5">
                <div className="bg-[#ff0080] rounded-full" style={{ width: `${Math.min(100, trendA.citations_count * 4)}%` }} />
                <div className="bg-[#00ff88] rounded-full" style={{ width: `${Math.min(100, trendB.citations_count * 4)}%` }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
