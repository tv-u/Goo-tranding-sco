import React from 'react';
import { Flame, Rss } from 'lucide-react';
import { TrendCategory } from '../types';
import { useI18n } from '../i18n/useI18n';

interface FooterProps {
  onSelectCategory: (cat: TrendCategory) => void;
  onOpenPipeline: () => void;
  onOpenDistribution: () => void;
  currentLangCode: string;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenPipeline,
  onOpenDistribution,
  currentLangCode,
}) => {
  const { t, getLocalizedCategory } = useI18n(currentLangCode);

  return (
    <footer className="bg-[#050508] border-t border-white/[0.08] text-slate-400 text-xs mt-16 pt-12 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md overflow-hidden bg-gradient-to-br from-[#ff0080] to-[#00ff88] p-0.5">
                <img src="/logo.png" alt="GOO-TRANDING" className="w-full h-full object-cover rounded-[4px]" />
              </div>
              <span className="font-black text-white text-base tracking-tight">
                GOO-TRANDING
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {t('footer_desc')}
            </p>

            <div className="pt-2 text-[11px] font-mono text-slate-500">
              {t('footer_autopilot')}
            </div>
          </div>

          {/* Categories Col */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider font-mono">
              {t('footer_verticals')}
            </h4>
            <ul className="space-y-1.5">
              {(['Technology', 'Science', 'World', 'Business', 'Health', 'Sports', 'Entertainment'] as TrendCategory[]).map(
                (cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => {
                        onSelectCategory(cat);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="hover:text-white transition"
                    >
                      {getLocalizedCategory(cat)}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Platform & Architecture Col */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider font-mono">
              {t('footer_engine')}
            </h4>
            <ul className="space-y-1.5">
              <li>
                <button onClick={onOpenPipeline} className="hover:text-[#ff0080] transition text-left">
                  {t('footer_worker_inspector')}
                </button>
              </li>
              <li>
                <button onClick={onOpenDistribution} className="hover:text-[#00ff88] transition text-left">
                  {t('footer_telegram_hub')}
                </button>
              </li>
              <li>
                <a href="/sitemap.xml" target="_blank" className="hover:text-white transition inline-flex items-center gap-1">
                  {t('footer_sitemap')}
                </a>
              </li>
              <li>
                <a href="/rss.xml" target="_blank" className="hover:text-[#ffdd00] transition inline-flex items-center gap-1">
                  <Rss className="w-3 h-3 text-[#ffdd00]" />
                  {t('footer_rss')}
                </a>
              </li>
              <li>
                <a href="/robots.txt" target="_blank" className="hover:text-white transition">
                  {t('footer_robots')}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Governance */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-white uppercase text-[11px] tracking-wider font-mono">
              {t('footer_methodology')}
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <span>{t('footer_transparent_scoring')}</span>
              </li>
              <li>
                <span>{t('footer_anti_hallucination')}</span>
              </li>
              <li>
                <span>{t('footer_wikimedia_attr')}</span>
              </li>
              <li>
                <span>{t('footer_privacy')}</span>
              </li>
              <li>
                <span>{t('footer_monetization')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Methodology & Algorithmic Disclaimer */}
        <div className="p-4 rounded-xl bg-[#0c0c11] border border-white/[0.05] text-[11px] leading-relaxed text-slate-500 mb-8 space-y-1">
          <p>{t('footer_disclaimer')}</p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.06] text-[11px] text-slate-500">
          <div>{t('footer_rights')}</div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[#00ff88]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88]" />
              {t('footer_nodes_operational')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
