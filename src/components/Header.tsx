import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  Globe,
  Radio,
  Share2,
  Cpu,
  ChevronDown,
  Menu,
  X,
  Flame,
} from 'lucide-react';
import { SupportedLanguage, TrendCategory, TrendItem } from '../types';
import { SUPPORTED_LANGUAGES } from '../data/initialData';
import { useI18n } from '../i18n/useI18n';

interface HeaderProps {
  currentCategory: TrendCategory;
  onSelectCategory: (cat: TrendCategory) => void;
  currentLang: SupportedLanguage;
  onSelectLang: (lang: SupportedLanguage) => void;
  onOpenPipeline: () => void;
  onOpenDistribution: () => void;
  onOpenCloudflare: () => void;
  onOpenPowerSuite: () => void;
  onSelectTrend: (trend: TrendItem) => void;
  allTrends: TrendItem[];
}

export const Header: React.FC<HeaderProps> = ({
  currentCategory,
  onSelectCategory,
  currentLang,
  onSelectLang,
  onOpenPipeline,
  onOpenDistribution,
  onOpenCloudflare,
  onOpenPowerSuite,
  onSelectTrend,
  allTrends,
}) => {
  const { t, getLocalizedCategory, getLocalizedTrend } = useI18n(currentLang.code);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  const categories: TrendCategory[] = [
    'All',
    'Technology',
    'Science',
    'World',
    'Business',
    'Entertainment',
    'Sports',
    'Health',
  ];

  // Filter search results with localized text
  const searchResults = searchQuery.trim()
    ? allTrends
        .map(getLocalizedTrend)
        .filter(
          (tItem) =>
            tItem.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tItem.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tItem.summary.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 6)
    : [];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-[#070709]/90 backdrop-blur-md border-b border-white/[0.08]">
      {/* Top telemetry ticker strip */}
      <div className="bg-[#0e0e13] border-b border-white/[0.05] py-1 px-4 text-[11px] text-slate-400">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center gap-1.5 font-mono text-[#00ff88]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-ping" />
              {t('live_telemetry')}
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-slate-300 hidden sm:inline">
              {t('multi_source_ingestion')}
            </span>
            <span className="text-slate-600 hidden md:inline">|</span>
            <span className="text-[#ffdd00] hidden md:inline">
              {t('autopilot_active')}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenPipeline}
              className="text-slate-400 hover:text-white transition flex items-center gap-1 text-[11px]"
            >
              <Cpu className="w-3.5 h-3.5 text-[#ff0080]" />
              <span className="hidden sm:inline">{t('pipeline_engine')}</span>
            </button>
            <span className="text-slate-600">·</span>
            <button
              onClick={onOpenDistribution}
              className="text-slate-400 hover:text-white transition flex items-center gap-1 text-[11px]"
            >
              <Share2 className="w-3.5 h-3.5 text-[#00ff88]" />
              <span className="hidden sm:inline">{t('distribution_hub')}</span>
            </button>
            <span className="text-slate-600">·</span>
            <button
              onClick={onOpenCloudflare}
              className="text-[#f38020] hover:text-[#faae40] transition flex items-center gap-1 text-[11px] font-mono font-bold"
            >
              <span className="w-2 h-2 rounded-full bg-[#f38020] animate-pulse"></span>
              <span className="hidden sm:inline">Edge CDN / Cloudflare</span>
            </button>
            <span className="text-slate-600">·</span>
            <button
              onClick={onOpenPowerSuite}
              className="text-[#00ff88] hover:text-white bg-[#00ff88]/10 hover:bg-[#00ff88]/20 px-2.5 py-0.5 rounded-full border border-[#00ff88]/30 transition flex items-center gap-1.5 text-[11px] font-mono font-bold shadow-sm"
            >
              <span className="animate-spin text-xs">⚡</span>
              <span>13 Pro Tools</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        {/* Logo and Brand */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => onSelectCategory('All')}
            className="flex items-center gap-2.5 text-left group"
          >
            <div className="w-8 h-8 rounded-lg overflow-hidden bg-gradient-to-br from-[#ff0080] via-[#7928ca] to-[#00ff88] p-0.5 shadow-[0_0_15px_rgba(255,0,128,0.4)] flex items-center justify-center">
              <img
                src="/logo.png"
                alt="GOO-TRANDING"
                className="w-full h-full object-cover rounded-[6px]"
              />
            </div>
            <div>
              <div className="text-lg font-black tracking-tight text-white flex items-center gap-1">
                GOO-TRANDING
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-[#00ff88] font-bold">
                  AI
                </span>
              </div>
              <div className="text-[10px] text-slate-400 font-mono tracking-wider hidden sm:block">
                {t('global_trend_intelligence')}
              </div>
            </div>
          </button>

          {/* Desktop Categories Segmented Bar */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#13131a] p-1 rounded-xl border border-white/[0.06]">
            {categories.slice(0, 6).map((cat) => {
              const active = currentCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    active
                      ? 'bg-gradient-to-r from-[#ff0080] to-[#7928ca] text-white shadow-sm font-semibold'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {getLocalizedCategory(cat)}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Search, Language & Actions */}
        <div className="flex items-center gap-3">
          {/* Instant Search Bar */}
          <div ref={searchRef} className="relative w-44 sm:w-64 md:w-80">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchOpen(true);
                }}
                onFocus={() => setIsSearchOpen(true)}
                placeholder={t('search_placeholder')}
                className="w-full bg-[#13131a] border border-white/[0.08] hover:border-white/20 focus:border-[#ff0080] focus:ring-1 focus:ring-[#ff0080] focus:outline-none rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 transition-all"
              />
            </div>

            {/* Instant Search Dropdown */}
            {isSearchOpen && searchQuery.trim() && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-[#121218] border border-white/[0.1] rounded-xl shadow-2xl p-2 z-50 overflow-hidden">
                <div className="px-3 py-1.5 text-[10px] font-mono text-slate-400 uppercase tracking-wider border-b border-white/[0.05]">
                  {t('search_results')} ({searchResults.length})
                </div>
                {searchResults.length > 0 ? (
                  <div className="divide-y divide-white/[0.04] mt-1 max-h-80 overflow-y-auto">
                    {searchResults.map((tItem) => (
                      <button
                        key={tItem.id}
                        onClick={() => {
                          onSelectTrend(tItem);
                          setIsSearchOpen(false);
                          setSearchQuery('');
                        }}
                        className="w-full text-left p-2.5 hover:bg-white/[0.05] rounded-lg transition flex items-start justify-between gap-3 group"
                      >
                        <div>
                          <div className="text-xs font-semibold text-white group-hover:text-[#ff0080] transition line-clamp-1">
                            #{tItem.rank} {tItem.topic}
                          </div>
                          <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                            {tItem.summary}
                          </div>
                        </div>
                        <span className="text-[11px] font-mono text-[#00ff88] shrink-0 font-medium">
                          +{tItem.velocity}%
                        </span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center text-xs text-slate-400">
                    {t('no_results')} &ldquo;{searchQuery}&rdquo;
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Language Selector Dropdown */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 bg-[#13131a] hover:bg-[#1a1a24] border border-white/[0.08] rounded-xl px-2.5 py-2 text-xs font-medium text-slate-300 transition"
              title={t('select_language')}
            >
              <span className="text-sm">{currentLang.flag}</span>
              <span className="hidden sm:inline">{currentLang.native_name}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[#121218] border border-white/[0.1] rounded-xl shadow-2xl p-1.5 z-50 max-h-72 overflow-y-auto">
                <div className="px-2.5 py-1 text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  {t('select_language')}
                </div>
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onSelectLang(lang);
                      setIsLangOpen(false);
                    }}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between transition ${
                      currentLang.code === lang.code
                        ? 'bg-[#ff0080]/15 text-[#ff0080] font-semibold'
                        : 'text-slate-300 hover:bg-white/[0.05]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{lang.flag}</span>
                      <span>{lang.native_name}</span>
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">
                      {lang.code}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-[#13131a] border border-white/[0.08] text-slate-300 hover:text-white"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-white/[0.08] bg-[#0c0c11] px-4 py-3 space-y-3">
          <div className="text-[11px] font-mono text-slate-400 uppercase">
            {t('footer_verticals')}
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  onSelectCategory(cat);
                  setIsMobileMenuOpen(false);
                }}
                className={`px-3 py-2 rounded-lg text-xs font-medium text-left transition ${
                  currentCategory === cat
                    ? 'bg-[#ff0080] text-white font-semibold'
                    : 'bg-[#15151e] text-slate-300 hover:text-white'
                }`}
              >
                {getLocalizedCategory(cat)}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between">
            <button
              onClick={() => {
                onOpenPipeline();
                setIsMobileMenuOpen(false);
              }}
              className="text-xs text-slate-300 hover:text-white flex items-center gap-1.5"
            >
              <Cpu className="w-4 h-4 text-[#ff0080]" />
              <span>{t('pipeline_engine')}</span>
            </button>
            <button
              onClick={() => {
                onOpenDistribution();
                setIsMobileMenuOpen(false);
              }}
              className="text-xs text-slate-300 hover:text-white flex items-center gap-1.5"
            >
              <Share2 className="w-4 h-4 text-[#00ff88]" />
              <span>{t('distribution_hub')}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
