import React, { useState } from 'react';
import {
  TrendingUp,
  BarChart3,
  Globe,
  Clock,
  ShieldCheck,
  ChevronRight,
  Info,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { TrendItem } from '../types';
import { useI18n } from '../i18n/useI18n';

interface Top20LeaderboardProps {
  trends: TrendItem[];
  onSelectTrend: (trend: TrendItem) => void;
  currentLangCode: string;
}

export const Top20Leaderboard: React.FC<Top20LeaderboardProps> = ({
  trends,
  onSelectTrend,
  currentLangCode,
}) => {
  const { t, getLocalizedTrend, getLocalizedCategory } = useI18n(currentLangCode);
  const [sortBy, setSortBy] = useState<'rank' | 'score' | 'velocity'>('rank');
  const [activeScoreDetail, setActiveScoreDetail] = useState<string | null>(null);

  // Sorting
  const sortedTrends = [...trends].map(getLocalizedTrend).sort((a, b) => {
    if (sortBy === 'score') return b.global_score - a.global_score;
    if (sortBy === 'velocity') return b.velocity - a.velocity;
    return a.rank - b.rank;
  });

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#00ff88]">
            <span className="w-2 h-2 rounded-full bg-[#00ff88]" />
            <span>{t('top20_badge')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
            {t('top20_title')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            {t('top20_desc')}
          </p>
        </div>

        {/* Sort Controls (Functional Segmented Buttons) */}
        <div className="flex items-center gap-1.5 p-1 bg-[#121218] border border-white/[0.08] rounded-xl self-start md:self-auto">
          <button
            onClick={() => setSortBy('rank')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              sortBy === 'rank'
                ? 'bg-white text-slate-900 font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {t('sort_rank')}
          </button>
          <button
            onClick={() => setSortBy('score')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              sortBy === 'score'
                ? 'bg-white text-slate-900 font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {t('sort_score')}
          </button>
          <button
            onClick={() => setSortBy('velocity')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              sortBy === 'velocity'
                ? 'bg-white text-slate-900 font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {t('sort_velocity')}
          </button>
        </div>
      </div>

      {/* Transparent Algorithm Callout Box */}
      <div className="mt-4 p-3.5 bg-[#101016] border border-white/[0.06] rounded-xl text-xs text-slate-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px]">
          <Info className="w-4 h-4 text-[#ffdd00] shrink-0" />
          <span>{t('formula_callout')}</span>
        </div>
        <span className="text-[10px] font-mono text-slate-500 whitespace-nowrap">
          {t('cron_update_notice')}
        </span>
      </div>

      {/* Leaderboard Table / Card List */}
      <div className="mt-6 space-y-2.5">
        {sortedTrends.map((trend) => {
          const isDetailOpen = activeScoreDetail === trend.id;

          return (
            <div
              key={trend.id}
              className="bg-[#121218] border border-white/[0.06] hover:border-white/20 rounded-xl transition-all duration-200 overflow-hidden"
            >
              {/* Main Row */}
              <div className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Left: Rank & Title */}
                <div className="flex items-start gap-4 flex-1">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center font-mono font-bold text-sm shrink-0 ${
                      trend.rank === 1
                        ? 'bg-[#ff0080]/20 text-[#ff0080] border border-[#ff0080]/30'
                        : trend.rank === 2
                        ? 'bg-[#00ff88]/20 text-[#00ff88] border border-[#00ff88]/30'
                        : trend.rank === 3
                        ? 'bg-[#ffdd00]/20 text-[#ffdd00] border border-[#ffdd00]/30'
                        : 'bg-white/[0.05] text-slate-300 border border-white/[0.05]'
                    }`}
                  >
                    #{trend.rank}
                  </div>

                  <div className="space-y-1">
                    <button
                      onClick={() => onSelectTrend(trend)}
                      className="text-left text-base sm:text-lg font-bold text-white hover:text-[#ff0080] transition leading-snug line-clamp-1"
                    >
                      {trend.topic}
                    </button>

                    {/* Metadata with Zero-Pill discipline */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                      <span className="font-semibold text-slate-300">{getLocalizedCategory(trend.category)}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span>{trend.search_volume_est}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="font-mono text-slate-400">{trend.updated_at}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="text-slate-400">
                        {trend.countries.slice(0, 4).join(', ')}
                        {trend.countries.length > 4 ? ` +${trend.countries.length - 4}` : ''}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 line-clamp-2 pt-1 hidden sm:block">
                      {trend.summary}
                    </p>
                  </div>
                </div>

                {/* Right: Scores & Actions */}
                <div className="flex items-center justify-between md:justify-end gap-5 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-white/[0.05]">
                  {/* Growth Velocity */}
                  <div className="text-left md:text-right">
                    <div className="text-[10px] font-mono text-slate-500 uppercase">{t('growth')}</div>
                    <div className="text-sm font-bold font-mono text-[#00ff88] flex items-center gap-0.5">
                      <TrendingUp className="w-3.5 h-3.5" />
                      +{trend.velocity}%
                    </div>
                  </div>

                  {/* Global Score with button to inspect breakdown */}
                  <div className="text-left md:text-right">
                    <div className="text-[10px] font-mono text-slate-500 uppercase">{t('global_score')}</div>
                    <button
                      onClick={() =>
                        setActiveScoreDetail(isDetailOpen ? null : trend.id)
                      }
                      className="text-sm font-bold font-mono text-white hover:text-[#ffdd00] transition flex items-center gap-1"
                      title="Inspect 7-factor score calculation"
                    >
                      <span>{trend.global_score}</span>
                      <span className="text-[10px] text-slate-500">/100</span>
                      <Info className="w-3 h-3 text-slate-500" />
                    </button>
                  </div>

                  {/* Primary CTA: Read Analysis */}
                  <button
                    onClick={() => onSelectTrend(trend)}
                    className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs transition shadow-sm hover:shadow flex items-center gap-1.5"
                  >
                    <span>{t('read_analysis')}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-900" />
                  </button>
                </div>
              </div>

              {/* Expandable 7-factor calculation inspector */}
              {isDetailOpen && (
                <div className="bg-[#0b0b0e] border-t border-white/[0.06] p-4 sm:p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs font-mono text-[#ffdd00] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{t('audit_for')} {trend.topic}</span>
                    </div>
                    <button
                      onClick={() => setActiveScoreDetail(null)}
                      className="text-xs text-slate-500 hover:text-white"
                    >
                      {t('close_breakdown')}
                    </button>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 text-center">
                    <div className="bg-[#14141d] p-2.5 rounded-lg border border-white/[0.04]">
                      <div className="text-[10px] font-mono text-slate-400">{t('factor_search_interest')}</div>
                      <div className="text-base font-bold text-white mt-1">
                        {trend.breakdown.search_interest}
                      </div>
                    </div>
                    <div className="bg-[#14141d] p-2.5 rounded-lg border border-white/[0.04]">
                      <div className="text-[10px] font-mono text-slate-400">{t('factor_growth_velocity')}</div>
                      <div className="text-base font-bold text-[#00ff88] mt-1">
                        {trend.breakdown.growth_velocity}
                      </div>
                    </div>
                    <div className="bg-[#14141d] p-2.5 rounded-lg border border-white/[0.04]">
                      <div className="text-[10px] font-mono text-slate-400">{t('factor_global_reach')}</div>
                      <div className="text-base font-bold text-white mt-1">
                        {trend.breakdown.global_reach}
                      </div>
                    </div>
                    <div className="bg-[#14141d] p-2.5 rounded-lg border border-white/[0.04]">
                      <div className="text-[10px] font-mono text-slate-400">{t('factor_freshness')}</div>
                      <div className="text-base font-bold text-white mt-1">
                        {trend.breakdown.freshness}
                      </div>
                    </div>
                    <div className="bg-[#14141d] p-2.5 rounded-lg border border-white/[0.04]">
                      <div className="text-[10px] font-mono text-slate-400">{t('factor_confidence')}</div>
                      <div className="text-base font-bold text-[#00ff88] mt-1">
                        {trend.breakdown.source_confidence}
                      </div>
                    </div>
                    <div className="bg-[#14141d] p-2.5 rounded-lg border border-white/[0.04]">
                      <div className="text-[10px] font-mono text-slate-400">{t('factor_content_pot')}</div>
                      <div className="text-base font-bold text-white mt-1">
                        {trend.breakdown.content_potential}
                      </div>
                    </div>
                    <div className="bg-[#14141d] p-2.5 rounded-lg border border-white/[0.04]">
                      <div className="text-[10px] font-mono text-slate-400">{t('factor_dup_penalty')}</div>
                      <div className="text-base font-bold text-slate-400 mt-1">
                        {trend.breakdown.duplicate_penalty}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
