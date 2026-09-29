import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  X,
  Cpu,
  Share2,
  Volume2,
  Layers,
  Bot,
} from 'lucide-react';
import { TrendCategory, TrendItem } from '../types';
import { useI18n } from '../i18n/useI18n';

interface CommandPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  trends: TrendItem[];
  onSelectTrend: (trend: TrendItem) => void;
  onSelectCategory: (cat: TrendCategory) => void;
  onOpenPipeline: () => void;
  onOpenDistribution: () => void;
  onToggleAudio: () => void;
  onOpenCompare: () => void;
  onOpenChatbot?: () => void;
  currentLangCode: string;
}

export const CommandPaletteModal: React.FC<CommandPaletteModalProps> = ({
  isOpen,
  onClose,
  trends,
  onSelectTrend,
  onSelectCategory,
  onOpenPipeline,
  onOpenDistribution,
  onToggleAudio,
  onOpenCompare,
  onOpenChatbot,
  currentLangCode,
}) => {
  const { t, getLocalizedTrend, getLocalizedCategory } = useI18n(currentLangCode);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const locTrends = trends.map(getLocalizedTrend);

  const filteredTrends = query.trim()
    ? locTrends.filter(
        (tItem) =>
          tItem.topic.toLowerCase().includes(query.toLowerCase()) ||
          tItem.category.toLowerCase().includes(query.toLowerCase()) ||
          tItem.summary.toLowerCase().includes(query.toLowerCase())
      )
    : locTrends.slice(0, 6);

  const categories: TrendCategory[] = [
    'Technology',
    'Science',
    'World',
    'Business',
    'Health',
    'Sports',
    'Entertainment',
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-lg flex justify-center p-3 sm:p-6 animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-[#0f0f18] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden my-auto text-slate-200">
        {/* Search Input Bar */}
        <div className="p-3.5 border-b border-white/[0.08] flex items-center gap-3 bg-[#131320]">
          <Search className="w-5 h-5 text-[#ff0080]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('command_placeholder')}
            className="w-full bg-transparent border-none text-sm text-white placeholder-slate-500 focus:outline-none"
          />
          <kbd className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.08] text-slate-400">
            ESC
          </kbd>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4">
          {/* Quick Actions Strip */}
          {!query && (
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 px-2 mb-1.5">
                {t('quick_shortcuts')}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  onClick={() => {
                    onOpenPipeline();
                    onClose();
                  }}
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] text-left transition flex items-center gap-2 text-xs"
                >
                  <Cpu className="w-4 h-4 text-[#ff0080]" />
                  <span>{t('pipeline_engine')}</span>
                </button>

                <button
                  onClick={() => {
                    onOpenDistribution();
                    onClose();
                  }}
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] text-left transition flex items-center gap-2 text-xs"
                >
                  <Share2 className="w-4 h-4 text-[#00ff88]" />
                  <span>{t('distribution_hub')}</span>
                </button>

                <button
                  onClick={() => {
                    onToggleAudio();
                    onClose();
                  }}
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] text-left transition flex items-center gap-2 text-xs"
                >
                  <Volume2 className="w-4 h-4 text-[#ffdd00]" />
                  <span>{t('nav_audio')}</span>
                </button>

                <button
                  onClick={() => {
                    onOpenCompare();
                    onClose();
                  }}
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] text-left transition flex items-center gap-2 text-xs"
                >
                  <Layers className="w-4 h-4 text-white" />
                  <span>{t('nav_compare')}</span>
                </button>

                <button
                  onClick={() => {
                    if (onOpenChatbot) onOpenChatbot();
                    onClose();
                  }}
                  className="p-2.5 rounded-xl bg-gradient-to-r from-[#ff0080]/20 to-[#00f0ff]/20 hover:from-[#ff0080]/30 hover:to-[#00f0ff]/30 border border-[#ff0080]/40 text-left transition flex items-center gap-2 text-xs col-span-2 sm:col-span-4"
                >
                  <Bot className="w-4 h-4 text-[#00ff88] animate-bounce" />
                  <span className="font-bold text-white">AI Trend Assistant (Real Autonomous Chatbot)</span>
                  <span className="ml-auto text-[10px] font-mono text-[#00ff88] bg-[#00ff88]/10 px-1.5 py-0.5 rounded">Active</span>
                </button>
              </div>
            </div>
          )}

          {/* Matched Trends */}
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 px-2 mb-1.5">
              {query ? `${t('matching_topics')} (${filteredTrends.length})` : t('stat_top20')}
            </div>
            <div className="space-y-1">
              {filteredTrends.map((tItem) => (
                <button
                  key={tItem.id}
                  onClick={() => {
                    onSelectTrend(tItem);
                    onClose();
                  }}
                  className="w-full p-2.5 rounded-xl hover:bg-white/[0.06] transition flex items-center justify-between text-left group"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#ff0080] w-6">
                      #{tItem.rank}
                    </span>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-[#00ff88] transition line-clamp-1">
                        {tItem.topic}
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono">
                        {getLocalizedCategory(tItem.category)} · {t('global_score')}: {tItem.global_score}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-[#00ff88]">
                      +{tItem.velocity}%
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Categories */}
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 px-2 mb-1.5">
              {t('filter_vertical')}
            </div>
            <div className="flex flex-wrap gap-1.5 px-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    onSelectCategory(cat);
                    onClose();
                  }}
                  className="px-2.5 py-1 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-xs text-slate-300 hover:text-white transition font-medium"
                >
                  {getLocalizedCategory(cat)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
