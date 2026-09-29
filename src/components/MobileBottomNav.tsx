import React from 'react';
import {
  Flame,
  TrendingUp,
  Radio,
  Search,
  Volume2,
  Layers,
} from 'lucide-react';
import { useI18n } from '../i18n/useI18n';

interface MobileBottomNavProps {
  activeTab: 'feed' | 'top20' | 'radar' | 'compare' | 'search';
  onSelectTab: (tab: 'feed' | 'top20' | 'radar' | 'compare' | 'search') => void;
  isAudioPlaying: boolean;
  onToggleAudio: () => void;
  currentLangCode: string;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  onSelectTab,
  isAudioPlaying,
  onToggleAudio,
  currentLangCode,
}) => {
  const { t } = useI18n(currentLangCode);

  return (
    <nav
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#07070a]/95 backdrop-blur-xl border-t border-white/[0.08] px-2 py-1.5 safe-area-pb"
      aria-label="Mobile Navigation Bar"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {/* Feed / Home */}
        <button
          onClick={() => onSelectTab('feed')}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all min-h-[44px] min-w-[48px] ${
            activeTab === 'feed'
              ? 'text-[#ff0080] font-bold'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Flame className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-mono tracking-tight">{t('nav_signals')}</span>
        </button>

        {/* Top 20 */}
        <button
          onClick={() => onSelectTab('top20')}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all min-h-[44px] min-w-[48px] relative ${
            activeTab === 'top20'
              ? 'text-[#00ff88] font-bold'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <span className="relative">
            <TrendingUp className="w-5 h-5 mb-0.5" />
            <span className="absolute -top-1 -right-2 text-[8px] font-mono px-1 rounded-full bg-[#00ff88] text-black font-extrabold leading-none py-0.5">
              20
            </span>
          </span>
          <span className="text-[10px] font-mono tracking-tight">{t('nav_top20')}</span>
        </button>

        {/* Global Radar */}
        <button
          onClick={() => onSelectTab('radar')}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all min-h-[44px] min-w-[48px] ${
            activeTab === 'radar'
              ? 'text-[#ffdd00] font-bold'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Radio className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-mono tracking-tight">{t('nav_radar')}</span>
        </button>

        {/* Compare Studio */}
        <button
          onClick={() => onSelectTab('compare')}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all min-h-[44px] min-w-[48px] ${
            activeTab === 'compare'
              ? 'text-white font-bold'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Layers className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-mono tracking-tight">{t('nav_compare')}</span>
        </button>

        {/* Audio Player Toggle */}
        <button
          onClick={onToggleAudio}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all min-h-[44px] min-w-[48px] ${
            isAudioPlaying
              ? 'text-[#00ff88] font-bold'
              : 'text-slate-400 hover:text-white'
          }`}
          title={t('nav_audio')}
        >
          <span className="relative">
            <Volume2 className={`w-5 h-5 mb-0.5 ${isAudioPlaying ? 'animate-bounce' : ''}`} />
            {isAudioPlaying && (
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#00ff88] animate-ping" />
            )}
          </span>
          <span className="text-[10px] font-mono tracking-tight">{t('nav_audio')}</span>
        </button>

        {/* Search / Command */}
        <button
          onClick={() => onSelectTab('search')}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all min-h-[44px] min-w-[48px] ${
            activeTab === 'search'
              ? 'text-white font-bold'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Search className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-mono tracking-tight">{t('nav_search')}</span>
        </button>
      </div>
    </nav>
  );
};
