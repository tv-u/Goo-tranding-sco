import React from 'react';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { TrendCategory, TrendItem } from '../types';
import { useI18n } from '../i18n/useI18n';

interface CategorySectionProps {
  category: Exclude<TrendCategory, 'All'>;
  trends: TrendItem[];
  onSelectTrend: (trend: TrendItem) => void;
  currentLangCode: string;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  category,
  trends,
  onSelectTrend,
  currentLangCode,
}) => {
  const { t, getLocalizedCategory, getLocalizedTrend } = useI18n(currentLangCode);
  const categoryTrends = trends
    .filter((tItem) => tItem.category === category)
    .slice(0, 4)
    .map(getLocalizedTrend);

  if (categoryTrends.length === 0) return null;

  return (
    <div className="py-6 border-t border-white/[0.06]">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff0080]" />
            {getLocalizedCategory(category)} {t('category_signals')}
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            {t('category_breakout')} {getLocalizedCategory(category).toLowerCase()}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categoryTrends.map((trend) => (
          <div
            key={trend.id}
            onClick={() => onSelectTrend(trend)}
            className="p-4 rounded-xl bg-[#121219] hover:bg-[#181822] border border-white/[0.06] hover:border-white/20 transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="text-slate-400 font-bold">#{trend.rank}</span>
                <span className="text-[#00ff88] font-bold flex items-center gap-0.5">
                  <TrendingUp className="w-3 h-3" />
                  +{trend.velocity}%
                </span>
              </div>

              <h4 className="text-sm font-bold text-white group-hover:text-[#ff0080] transition leading-snug line-clamp-2">
                {trend.topic}
              </h4>

              <p className="text-xs text-slate-400 line-clamp-2 mt-2 leading-relaxed">
                {trend.summary}
              </p>
            </div>

            <div className="mt-4 pt-2.5 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>{t('global_score')}: {trend.global_score}</span>
              <span className="text-slate-300 group-hover:text-white transition flex items-center gap-1">
                {t('read_brief')} <ArrowRight className="w-3 h-3 text-slate-400" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
