import React from 'react';
import { TrendingUp, Globe2, ArrowUpRight, Bot, Sparkles, Zap } from 'lucide-react';
import { TrendItem } from '../types';
import { useI18n } from '../i18n/useI18n';

interface LiveHeroProps {
  topTrends: TrendItem[];
  selectedCountry: string;
  onSelectCountry: (code: string) => void;
  onSelectTrend: (trend: TrendItem) => void;
  currentLangCode: string;
  onOpenChatbot?: () => void;
}

export const LiveHero: React.FC<LiveHeroProps> = ({
  topTrends,
  selectedCountry,
  onSelectCountry,
  onSelectTrend,
  currentLangCode,
  onOpenChatbot,
}) => {
  const { t, getLocalizedTrend, getLocalizedCategory } = useI18n(currentLangCode);
  const spotlightTrends = topTrends.slice(0, 3).map(getLocalizedTrend);

  const countryFilters = [
    { code: 'ALL', name: currentLangCode === 'hi' ? 'संपूर्ण विश्व' : currentLangCode === 'ur' ? 'پوری دنیا' : currentLangCode === 'es' ? 'Mundial' : currentLangCode === 'fr' ? 'Mondial' : currentLangCode === 'de' ? 'Weltweit' : currentLangCode === 'ar' ? 'العالم كله' : currentLangCode === 'ja' ? '全世界' : currentLangCode === 'zh' ? '全球' : 'Worldwide', flag: '🌍' },
    { code: 'IN', name: currentLangCode === 'hi' ? 'भारत' : currentLangCode === 'ur' ? 'بھارت' : currentLangCode === 'ar' ? 'الهند' : currentLangCode === 'ja' ? 'インド' : currentLangCode === 'zh' ? '印度' : 'India', flag: '🇮🇳' },
    { code: 'US', name: currentLangCode === 'hi' ? 'अमेरिका' : currentLangCode === 'ur' ? 'امریکہ' : currentLangCode === 'es' ? 'Estados Unidos' : currentLangCode === 'fr' ? 'États-Unis' : currentLangCode === 'de' ? 'USA' : currentLangCode === 'ar' ? 'أمريكا' : currentLangCode === 'ja' ? '米国' : currentLangCode === 'zh' ? '美国' : 'United States', flag: '🇺🇸' },
    { code: 'JP', name: currentLangCode === 'hi' ? 'जापान' : currentLangCode === 'ur' ? 'جاپان' : currentLangCode === 'es' ? 'Japón' : currentLangCode === 'ar' ? 'اليابان' : currentLangCode === 'ja' ? '日本' : currentLangCode === 'zh' ? '日本' : 'Japan', flag: '🇯🇵' },
    { code: 'DE', name: currentLangCode === 'hi' ? 'जर्मनी' : currentLangCode === 'ur' ? 'جرمنی' : currentLangCode === 'es' ? 'Alemania' : currentLangCode === 'fr' ? 'Allemagne' : currentLangCode === 'de' ? 'Deutschland' : currentLangCode === 'ar' ? 'ألمانيا' : currentLangCode === 'ja' ? 'ドイツ' : currentLangCode === 'zh' ? '德国' : 'Germany', flag: '🇩🇪' },
    { code: 'GB', name: currentLangCode === 'hi' ? 'ब्रिटेन' : currentLangCode === 'ur' ? 'برطانیہ' : currentLangCode === 'es' ? 'Reino Unido' : currentLangCode === 'fr' ? 'Royaume-Uni' : currentLangCode === 'de' ? 'UK' : currentLangCode === 'ar' ? 'المملكة المتحدة' : currentLangCode === 'ja' ? '英国' : currentLangCode === 'zh' ? '英国' : 'United Kingdom', flag: '🇬🇧' },
    { code: 'FR', name: currentLangCode === 'hi' ? 'फ्रांस' : currentLangCode === 'ur' ? 'فرانس' : currentLangCode === 'es' ? 'Francia' : currentLangCode === 'fr' ? 'France' : currentLangCode === 'de' ? 'Frankreich' : currentLangCode === 'ar' ? 'فرنسا' : currentLangCode === 'ja' ? 'フランス' : currentLangCode === 'zh' ? '法国' : 'France', flag: '🇫🇷' },
    { code: 'BR', name: currentLangCode === 'hi' ? 'ब्राज़ील' : currentLangCode === 'ur' ? 'برازیل' : currentLangCode === 'es' ? 'Brasil' : currentLangCode === 'fr' ? 'Brésil' : currentLangCode === 'de' ? 'Brasilien' : currentLangCode === 'ar' ? 'البرازيل' : currentLangCode === 'ja' ? 'ブラジル' : currentLangCode === 'zh' ? '巴西' : 'Brazil', flag: '🇧🇷' },
    { code: 'PK', name: currentLangCode === 'hi' ? 'पाकिस्तान' : currentLangCode === 'ur' ? 'پاکستان' : currentLangCode === 'ar' ? 'باكستان' : currentLangCode === 'ja' ? 'パキスタン' : currentLangCode === 'zh' ? '巴基斯坦' : 'Pakistan', flag: '🇵🇰' },
  ];

  return (
    <section className="relative overflow-hidden pt-6 pb-10 border-b border-white/[0.06]">
      {/* Background ambient lighting effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff0080]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#00ff88]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00ff88] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
              <span>{t('hero_badge')}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
              {t('hero_title_1')} <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[#ff0080] via-[#ffdd00] to-[#00ff88] bg-clip-text text-transparent">
                {t('hero_title_2')}
              </span>
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              {t('hero_desc')}
            </p>
          </div>

          {/* Micro Stat Counter Strip: 2x2 Grid on Mobile & Desktop perfectly fitting next to HALLUCINATION SHIELD */}
          <div className="grid grid-cols-2 gap-3 shrink-0 max-w-xl">
            {/* Box 1: INGESTED TOPICS */}
            <div className="bg-[#121218] border border-white/[0.08] rounded-xl p-3 sm:p-4 text-left shadow-md">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">{t('stat_ingested')}</div>
              <div className="text-xl sm:text-2xl font-bold text-white mt-0.5">{t('stat_ingested_val')}</div>
              <div className="text-[10px] text-[#00ff88] mt-1 font-mono">{t('stat_dedup')}</div>
            </div>

            {/* Box 2: TOP 20 RANKING */}
            <div className="bg-[#121218] border border-white/[0.08] rounded-xl p-3 sm:p-4 text-left shadow-md">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">{t('stat_top20')}</div>
              <div className="text-xl sm:text-2xl font-bold text-white mt-0.5">{t('stat_top20_val')}</div>
              <div className="text-[10px] text-[#ffdd00] mt-1 font-mono">{t('stat_weighted')}</div>
            </div>

            {/* Box 3: HALLUCINATION SHIELD (Directly below Ingested Topics) */}
            <div className="bg-[#121218] border border-white/[0.08] rounded-xl p-3 sm:p-4 text-left shadow-md">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">{t('stat_shield')}</div>
              <div className="text-xl sm:text-2xl font-bold text-[#00ff88] mt-0.5">{t('stat_shield_val')}</div>
              <div className="text-[10px] text-slate-400 mt-1 font-mono">{t('stat_grounded')}</div>
            </div>

            {/* Box 4: 3D AI CHATBOT (Directly below TOP 20 RANKING Algorithmic & directly opposite HALLUCINATION SHIELD) */}
            <button
              onClick={onOpenChatbot}
              type="button"
              className="relative group p-3 sm:p-4 rounded-xl bg-gradient-to-br from-[#ff0080]/30 via-[#7928ca]/35 to-[#00f0ff]/30 border-2 border-[#ff0080]/70 hover:border-[#00ff88] shadow-[0_8px_20px_-4px_rgba(255,0,128,0.5)] hover:shadow-[0_12px_28px_-4px_rgba(0,255,136,0.6)] transform hover:-translate-y-1 active:translate-y-0.5 transition-all duration-200 text-left flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              {/* 3D Gloss / Shine Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20 opacity-80 group-hover:opacity-100 pointer-events-none rounded-xl" />
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#00ff88]/30 rounded-full blur-xl group-hover:scale-150 transition-all duration-300 pointer-events-none" />

              <div className="flex items-center justify-between z-10">
                <span className="text-[10px] sm:text-[11px] font-mono text-white/90 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-ping" />
                  AI ASSISTANT
                </span>
                <span className="px-1.5 py-0.2 rounded bg-black/50 text-[9px] font-mono text-[#00ff88] font-black border border-[#00ff88]/40">
                  REAL AI
                </span>
              </div>

              <div className="text-base sm:text-xl font-black text-white mt-1 z-10 flex items-center gap-1.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                <Bot className="w-5 h-5 text-[#00ff88] animate-bounce shrink-0" />
                <span className="bg-gradient-to-r from-white via-[#ffdd00] to-[#00ff88] bg-clip-text text-transparent">
                  AI CHATBOT
                </span>
              </div>

              <div className="text-[10px] text-white/95 mt-1 font-mono font-bold flex items-center justify-between z-10">
                <span className="text-[#00f0ff] group-hover:text-white transition">Click to Chat Live</span>
                <span className="text-xs group-hover:translate-x-1 transition text-[#ffdd00]">➔</span>
              </div>
            </button>
          </div>
        </div>

        {/* Region Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 pt-1 no-scrollbar border-b border-white/[0.04]">
          <span className="text-xs font-mono text-slate-400 shrink-0 mr-1 flex items-center gap-1.5">
            <Globe2 className="w-3.5 h-3.5 text-slate-400" /> {t('filter_region')}
          </span>
          {countryFilters.map((country) => {
            const active = selectedCountry === country.code;
            return (
              <button
                key={country.code}
                onClick={() => onSelectCountry(country.code)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  active
                    ? 'bg-white text-slate-900 font-bold shadow-md shadow-white/10'
                    : 'bg-[#13131a] text-slate-300 hover:text-white hover:bg-white/[0.06] border border-white/[0.06]'
                }`}
              >
                <span>{country.flag}</span>
                <span>{country.name}</span>
              </button>
            );
          })}
        </div>

        {/* Top 3 Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
          {spotlightTrends.map((trend, idx) => {
            const rankColors = [
              'from-[#ff0080]/20 via-[#ff0080]/5 to-transparent border-[#ff0080]/40 text-[#ff0080]',
              'from-[#00ff88]/20 via-[#00ff88]/5 to-transparent border-[#00ff88]/40 text-[#00ff88]',
              'from-[#ffdd00]/20 via-[#ffdd00]/5 to-transparent border-[#ffdd00]/40 text-[#ffdd00]',
            ];

            return (
              <div
                key={trend.id}
                onClick={() => onSelectTrend(trend)}
                className={`group relative rounded-2xl p-5 border bg-gradient-to-b ${rankColors[idx]} hover:border-white/40 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-black font-mono tracking-tight">
                        #{trend.rank}
                      </span>
                      <span className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                        {getLocalizedCategory(trend.category)}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-xs font-bold font-mono text-[#00ff88] bg-[#00ff88]/10 px-2 py-1 rounded-md border border-[#00ff88]/20">
                      <TrendingUp className="w-3.5 h-3.5" />
                      +{trend.velocity}%
                    </div>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-white leading-snug line-clamp-2">
                    {trend.topic}
                  </h3>

                  <p className="mt-2.5 text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {trend.summary}
                  </p>
                </div>

                {/* Score breakdown footer */}
                <div className="mt-5 pt-3 border-t border-white/[0.08]">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                    <span>{t('global_score')}</span>
                    <span className="text-white font-bold">{trend.global_score} / 100</span>
                  </div>

                  {/* Progress track */}
                  <div className="h-1.5 bg-black/40 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        idx === 0
                          ? 'bg-[#ff0080]'
                          : idx === 1
                          ? 'bg-[#00ff88]'
                          : 'bg-[#ffdd00]'
                      }`}
                      style={{ width: `${trend.global_score}%` }}
                    />
                  </div>

                  <div className="mt-3 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-slate-400 font-mono">
                      {trend.search_volume_est}
                    </span>
                    <span className="text-white font-medium inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform text-[11px]">
                      {t('read_ai_analysis')} <ArrowUpRight className="w-3 h-3 text-slate-400" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
