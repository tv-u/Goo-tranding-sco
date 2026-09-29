import React from 'react';
import { ExternalLink, Sparkles, TrendingUp } from 'lucide-react';
import { useI18n } from '../i18n/useI18n';
import { getNextSmartLink, openSmartLink } from '../utils/adsterra';

interface MonetizationBannerProps {
  placement?: 'header' | 'in-feed' | 'footer' | 'sidebar';
  currentLangCode?: string;
}

export const MonetizationBanner: React.FC<MonetizationBannerProps> = ({
  placement = 'in-feed',
  currentLangCode = 'en',
}) => {
  const { t } = useI18n(currentLangCode);

  const handleClick = (e: React.MouseEvent) => {
    openSmartLink(e);
  };

  if (placement === 'header') {
    return (
      <div className="w-full bg-gradient-to-r from-[#ff0080]/15 via-[#7928ca]/20 to-[#00f0ff]/15 border-b border-white/[0.08] py-1.5 px-4 text-center cursor-pointer transition hover:opacity-95" onClick={handleClick}>
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-xs">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff88] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff88]"></span>
          </span>
          <span className="font-mono text-[11px] text-[#00ff88] font-bold uppercase tracking-wider">High Yield Partner:</span>
          <span className="text-slate-200 hover:text-white font-medium underline underline-offset-2">
            Trending Market Insights & High-Growth AI Opportunities 2026
          </span>
          <ExternalLink className="w-3 h-3 text-slate-400 shrink-0" />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 my-6 relative z-10">
      <div 
        onClick={handleClick}
        className="group relative p-3 sm:p-4 rounded-xl bg-gradient-to-r from-[#111118] via-[#161622] to-[#111118] border border-white/[0.08] hover:border-[#ff0080]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs transition duration-200 cursor-pointer shadow-lg hover:shadow-[#ff0080]/5"
      >
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#ff0080] to-[#7928ca] flex items-center justify-center text-white shrink-0 shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-[#00ff88] uppercase tracking-wider px-1.5 py-0.2 rounded bg-[#00ff88]/10 font-bold border border-[#00ff88]/20">
                {t('sponsored_partner')}
              </span>
              <span className="text-[11px] text-slate-400 font-mono">Verified Global Ad Network</span>
            </div>
            <p className="text-slate-200 group-hover:text-white font-medium text-xs mt-0.5 transition-colors">
              {t('sponsored_desc')} — Click to unlock global trading & high-conversion viral arbitrage opportunities.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleClick}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#ff0080] to-[#7928ca] hover:opacity-95 text-white font-bold transition inline-flex items-center gap-1.5 whitespace-nowrap text-xs shrink-0 shadow-md active:scale-95"
        >
          <span>{t('sponsored_cta')}</span>
          <ExternalLink className="w-3 h-3 text-white/80" />
        </button>
      </div>
    </div>
  );
};
