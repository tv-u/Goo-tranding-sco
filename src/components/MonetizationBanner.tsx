import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useI18n } from '../i18n/useI18n';

interface MonetizationBannerProps {
  placement?: 'header' | 'in-feed' | 'footer';
  currentLangCode?: string;
}

export const MonetizationBanner: React.FC<MonetizationBannerProps> = ({
  placement = 'in-feed',
  currentLangCode = 'en',
}) => {
  const { t } = useI18n(currentLangCode);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 my-6">
      <div className="p-3 sm:p-4 rounded-xl bg-[#111118] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/[0.05]">
            {t('sponsored_partner')}
          </span>
          <span className="text-slate-300 font-medium">
            {t('sponsored_desc')}
          </span>
        </div>

        <a
          href="https://www.effectivecpmnetwork.com/x0wcj4zk?key=c2b46070b44982014166acafd6074c3d"
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="px-3 py-1.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.14] text-slate-200 hover:text-white font-medium transition inline-flex items-center gap-1.5 whitespace-nowrap text-xs shrink-0"
        >
          <span>{t('sponsored_cta')}</span>
          <ExternalLink className="w-3 h-3 text-slate-400" />
        </a>
      </div>
    </div>
  );
};
