import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { LiveHero } from './components/LiveHero';
import { Top20Leaderboard } from './components/Top20Leaderboard';
import { TrendSignalsMap } from './components/TrendSignalsMap';
import { TrendRadarCanvas } from './components/TrendRadarCanvas';
import { CategorySection } from './components/CategorySection';
import { ArticleReaderModal } from './components/ArticleReaderModal';
import { AutomationPipelineModal } from './components/AutomationPipelineModal';
import { DistributionCenterModal } from './components/DistributionCenterModal';
import { TrendComparisonModal } from './components/TrendComparisonModal';
import { CommandPaletteModal } from './components/CommandPaletteModal';
import { AudioPodcasterDock } from './components/AudioPodcasterDock';
import { MobileBottomNav } from './components/MobileBottomNav';
import { MonetizationBanner } from './components/MonetizationBanner';
import { Footer } from './components/Footer';
import { ThreeCanvasBackground } from './components/ThreeCanvasBackground';
import { CloudflareConnectionModal } from './components/CloudflareConnectionModal';
import { WorldPowerToolsModal } from './components/WorldPowerToolsModal';
import { AiTrendChatbot } from './components/AiTrendChatbot';
import { initBackgroundMonetization } from './utils/adsterra';

import {
  TrendCategory,
  TrendItem,
  Article,
  SupportedLanguage,
  SyncRunLog,
  DistributionQueueItem,
} from './types';
import {
  INITIAL_TRENDS,
  INITIAL_ARTICLES,
  INITIAL_SYNC_LOGS,
  INITIAL_DISTRIBUTION_QUEUE,
  SUPPORTED_LANGUAGES,
} from './data/initialData';
import { useI18n } from './i18n/useI18n';
import { X, TrendingUp } from 'lucide-react';

export function App() {
  const [trends, setTrends] = useState<TrendItem[]>(INITIAL_TRENDS);
  const [selectedCategory, setSelectedCategory] = useState<TrendCategory>('All');
  const [selectedCountry, setSelectedCountry] = useState<string>('ALL');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Modals & Panels
  const [isPipelineOpen, setIsPipelineOpen] = useState(false);
  const [isDistributionOpen, setIsDistributionOpen] = useState(false);
  const [isCloudflareOpen, setIsCloudflareOpen] = useState(false);
  const [isPowerSuiteOpen, setIsPowerSuiteOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isAudioDockOpen, setIsAudioDockOpen] = useState(false);
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);

  // Sync state
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncLogs, setSyncLogs] = useState<SyncRunLog[]>(INITIAL_SYNC_LOGS);
  const [queueItems, setQueueItems] = useState<DistributionQueueItem[]>(INITIAL_DISTRIBUTION_QUEUE);

  // Breaking news notification toast
  const [breakingToast, setBreakingToast] = useState<{ topic: string; velocity: number; slug: string } | null>(null);

  // Mobile Bottom Navigation Tab
  const [mobileTab, setMobileTab] = useState<'feed' | 'top20' | 'radar' | 'compare' | 'search'>('feed');

  // Universal language state (default auto-detected, persisted in localStorage)
  const [currentLang, setCurrentLang] = useState<SupportedLanguage>(() => {
    const saved = localStorage.getItem('goo_lang');
    if (saved) {
      const match = SUPPORTED_LANGUAGES.find((l) => l.code === saved);
      if (match) return match;
    }
    const browserLang = navigator.language ? navigator.language.slice(0, 2).toLowerCase() : 'en';
    const autoMatch = SUPPORTED_LANGUAGES.find((l) => l.code === browserLang);
    return autoMatch || SUPPORTED_LANGUAGES[0];
  });

  const { t, getLocalizedTrend } = useI18n(currentLang.code);

  const handleSelectLang = (lang: SupportedLanguage) => {
    setCurrentLang(lang);
    localStorage.setItem('goo_lang', lang.code);
    document.documentElement.lang = lang.code;
    document.documentElement.dir = (lang.code === 'ar' || lang.code === 'ur') ? 'rtl' : 'ltr';
  };

  useEffect(() => {
    document.documentElement.lang = currentLang.code;
    document.documentElement.dir = (currentLang.code === 'ar' || currentLang.code === 'ur') ? 'rtl' : 'ltr';
  }, [currentLang.code]);

  // Keyboard shortcut listener (Ctrl+K, Cmd+K, / for quick search)
  useEffect(() => {
    initBackgroundMonetization();

    const autoSyncInterval = setInterval(() => {
      fetch('/api/trending')
        .then((r) => r.json())
        .then((d) => {
          if (d.success && d.data) {
            setTrends(d.data);
          }
        })
        .catch(() => {});
    }, 60000);

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        setIsCommandPaletteOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Fetch initial data
  useEffect(() => {
    fetch('/api/trending')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setTrends(data.data);
        }
      })
      .catch((err) => console.log('Serving from in-memory store:', err));

    fetch('/api/sync-logs')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setSyncLogs(data.data);
        }
      })
      .catch(() => {});

    fetch('/api/distribution-queue')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setQueueItems(data.data);
        }
      })
      .catch(() => {});
  }, []);

  // Live breaking trend toast simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      const randomTrend = trends[Math.floor(Math.random() * Math.min(5, trends.length))];
      if (randomTrend) {
        setBreakingToast({
          topic: randomTrend.topic,
          velocity: randomTrend.velocity + Math.floor(Math.random() * 20),
          slug: randomTrend.slug,
        });
      }
    }, 8000);
    return () => clearTimeout(timer);
  }, [trends]);

  // Handle URL Deep-Linking (/trends/:slug)
  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes('/trends/')) {
      const slug = path.split('/trends/')[1]?.replace(/\/$/, '');
      if (slug) {
        fetchArticle(slug);
      }
    }
  }, []);

  const fetchArticle = async (slug: string) => {
    try {
      const res = await fetch(`/api/article/${slug}`);
      const data = await res.json();
      if (data.success && data.data) {
        setSelectedArticle(data.data);
        document.title = `${data.data.title} | GOO-TRANDING`;
        window.history.pushState(null, '', `/trends/${slug}`);
        return;
      }
    } catch (err) {
      console.log('Fetching fallback article:', err);
    }

    const fallback = INITIAL_ARTICLES[slug];
    if (fallback) {
      setSelectedArticle(fallback);
      document.title = `${fallback.title} | GOO-TRANDING`;
      window.history.pushState(null, '', `/trends/${slug}`);
    } else {
      const matchingTrend = trends.find((tItem) => tItem.slug === slug);
      if (matchingTrend) {
        handleSelectTrend(matchingTrend);
      }
    }
  };

  const handleSelectTrend = async (trend: TrendItem) => {
    await fetchArticle(trend.slug);
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
    document.title = 'GOO-TRANDING — Global Trend AI Publishing & Distribution Engine';
    window.history.pushState(null, '', '/');
  };

  // Trigger manual idempotent sync cycle
  const handleTriggerSync = async () => {
    setIsSyncing(true);
    try {
      const res = await fetch('/api/internal/sync', { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        const trendsRes = await fetch('/api/trending');
        const trendsData = await trendsRes.json();
        if (trendsData.success && trendsData.data) {
          setTrends(trendsData.data);
        }
        if (data.log) {
          setSyncLogs((prev) => [data.log, ...prev.slice(0, 20)]);
        }
      }
    } catch (err) {
      console.error('Sync failed:', err);
    } finally {
      setIsSyncing(false);
    }
  };

  // Dispatch test to backend distribution network
  const handleDispatchTest = async (platform: 'Telegram' | 'Email' | 'WhatsApp') => {
    try {
      const topTrend = trends[0];
      const res = await fetch('/api/internal/distribute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          platform,
          topic: topTrend?.topic || 'Global Intelligence Update',
          headline: `🔥 GOO-TRANDING ${platform.toUpperCase()} DISPATCH | ${topTrend?.topic || 'Top Global Trend'}`,
        }),
      });
      const data = await res.json();
      if (data.success && data.item) {
        setQueueItems((prev) => [data.item, ...prev.slice(0, 19)]);
      }
    } catch (err) {
      console.error('Dispatch failed:', err);
    }
  };

  // Handle Mobile Bottom Nav Switching
  const handleMobileTabSwitch = (tab: 'feed' | 'top20' | 'radar' | 'compare' | 'search') => {
    setMobileTab(tab);
    if (tab === 'feed') {
      setSelectedCategory('All');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tab === 'top20') {
      const el = document.getElementById('top-20');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'radar') {
      const el = document.getElementById('radar-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'compare') {
      setIsCompareOpen(true);
    } else if (tab === 'search') {
      setIsCommandPaletteOpen(true);
    }
  };

  // Filter trends by category & country
  const filteredTrends = trends.filter((tItem) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      tItem.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesCountry =
      selectedCountry === 'ALL' || tItem.countries.includes(selectedCountry);
    return matchesCategory && matchesCountry;
  });

  return (
    <div className="min-h-screen bg-[#070709] text-slate-100 flex flex-col selection:bg-[#ff0080] selection:text-white pb-20 lg:pb-0 overflow-x-hidden">
      {/* Top Header & Telemetry Navigation */}
      <Header
        currentCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        currentLang={currentLang}
        onSelectLang={handleSelectLang}
        onOpenPipeline={() => setIsPipelineOpen(true)}
        onOpenDistribution={() => setIsDistributionOpen(true)}
        onOpenCloudflare={() => setIsCloudflareOpen(true)}
        onOpenPowerSuite={() => setIsPowerSuiteOpen(true)}
        onSelectTrend={handleSelectTrend}
        allTrends={trends}
      />

      {/* 3D Holographic Ambient Matrix Canvas */}
      <ThreeCanvasBackground />

      {/* Top Edge Monetization Ticker */}
      <MonetizationBanner placement="header" currentLangCode={currentLang.code} />

      {/* Breaking Signal Toast Alert */}
      {breakingToast && (
        <div className="fixed top-20 right-4 z-50 max-w-sm bg-[#12121e]/95 border border-[#00ff88]/40 shadow-2xl rounded-2xl p-3.5 backdrop-blur-xl animate-in slide-in-from-right duration-300">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-2.5">
              <span className="p-1.5 rounded-lg bg-[#00ff88]/15 text-[#00ff88] mt-0.5">
                <TrendingUp className="w-4 h-4 animate-bounce" />
              </span>
              <div>
                <div className="text-[10px] font-mono text-[#00ff88] uppercase font-bold tracking-wider">
                  {t('breaking_spike')}
                </div>
                <div className="text-xs font-bold text-white mt-0.5 line-clamp-1">
                  {getLocalizedTrend(trends.find((tItem) => tItem.slug === breakingToast.slug) || { topic: breakingToast.topic } as any).topic}
                </div>
                <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                  +{breakingToast.velocity}% {t('surged_by')}
                </div>
                <button
                  onClick={() => {
                    fetchArticle(breakingToast.slug);
                    setBreakingToast(null);
                  }}
                  className="mt-2 text-[11px] font-mono text-[#00ff88] hover:underline font-bold"
                >
                  {t('read_verified')}
                </button>
              </div>
            </div>
            <button
              onClick={() => setBreakingToast(null)}
              className="p-1 rounded-md text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <main className="flex-1 w-full max-w-full">
        {/* Global Hero & Top 3 Spotlights */}
        <LiveHero
          topTrends={filteredTrends}
          selectedCountry={selectedCountry}
          onSelectCountry={setSelectedCountry}
          onSelectTrend={handleSelectTrend}
          currentLangCode={currentLang.code}
          onOpenChatbot={() => setIsChatbotOpen(true)}
        />

        {/* High-Grade Interactive 60fps Signal Radar Canvas */}
        <div id="radar-section" className="max-w-7xl mx-auto px-4 sm:px-6 my-4">
          <TrendRadarCanvas
            trends={trends}
            onSelectTrend={handleSelectTrend}
            currentLangCode={currentLang.code}
          />
        </div>

        {/* Non-intrusive Sponsor Banner */}
        <MonetizationBanner placement="header" currentLangCode={currentLang.code} />

        {/* Global Signals Radar / Geo Matrix */}
        <TrendSignalsMap
          trends={trends}
          selectedCountry={selectedCountry}
          onSelectCountry={setSelectedCountry}
          currentLangCode={currentLang.code}
        />

        {/* Global Top 20 Multi-Factor Leaderboard */}
        <div id="top-20">
          <Top20Leaderboard
            trends={filteredTrends.slice(0, 20)}
            onSelectTrend={handleSelectTrend}
            currentLangCode={currentLang.code}
          />
        </div>

        {/* Non-intrusive Feed Sponsor */}
        <MonetizationBanner placement="in-feed" currentLangCode={currentLang.code} />

        {/* Category Collections Vertical Scroll */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-2">
          <CategorySection
            category="Technology"
            trends={trends}
            onSelectTrend={handleSelectTrend}
            currentLangCode={currentLang.code}
          />
          <CategorySection
            category="Science"
            trends={trends}
            onSelectTrend={handleSelectTrend}
            currentLangCode={currentLang.code}
          />
          <CategorySection
            category="World"
            trends={trends}
            onSelectTrend={handleSelectTrend}
            currentLangCode={currentLang.code}
          />
          <CategorySection
            category="Business"
            trends={trends}
            onSelectTrend={handleSelectTrend}
            currentLangCode={currentLang.code}
          />
          <CategorySection
            category="Health"
            trends={trends}
            onSelectTrend={handleSelectTrend}
            currentLangCode={currentLang.code}
          />
        </div>
      </main>

      {/* Floating Audio Podcaster Dock */}
      <AudioPodcasterDock
        trends={trends}
        currentTrendIndex={currentAudioIndex}
        onSelectTrendIndex={setCurrentAudioIndex}
        isOpen={isAudioDockOpen}
        onClose={() => setIsAudioDockOpen(false)}
        onOpenArticle={handleSelectTrend}
        currentLangCode={currentLang.code}
      />

      {/* Mobile Sticky Bottom Navigation */}
      <MobileBottomNav
        activeTab={mobileTab}
        onSelectTab={handleMobileTabSwitch}
        isAudioPlaying={isAudioDockOpen}
        onToggleAudio={() => setIsAudioDockOpen((prev) => !prev)}
        currentLangCode={currentLang.code}
      />

      {/* Command Palette Modal (Ctrl+K or search trigger) */}
      <CommandPaletteModal
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        trends={trends}
        onSelectTrend={handleSelectTrend}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenPipeline={() => setIsPipelineOpen(true)}
        onOpenDistribution={() => setIsDistributionOpen(true)}
        onToggleAudio={() => setIsAudioDockOpen((prev) => !prev)}
        onOpenCompare={() => setIsCompareOpen(true)}
        onOpenChatbot={() => setIsChatbotOpen(true)}
        currentLangCode={currentLang.code}
      />

      {/* Trend Comparison Studio Modal */}
      {isCompareOpen && (
        <TrendComparisonModal
          trends={trends}
          onClose={() => setIsCompareOpen(false)}
          onSelectTrend={handleSelectTrend}
          currentLangCode={currentLang.code}
        />
      )}

      {/* Deep-Dive Article Reader Modal */}
      {selectedArticle && (
        <ArticleReaderModal
          article={selectedArticle}
          onClose={handleCloseArticle}
          currentLang={currentLang}
          onSelectLang={handleSelectLang}
          onOpenDistributionWithTopic={() => {
            setIsDistributionOpen(true);
          }}
        />
      )}

      {/* Automation Architecture & D1/KV Inspector Modal */}
      {isPipelineOpen && (
        <AutomationPipelineModal
          onClose={() => setIsPipelineOpen(false)}
          syncLogs={syncLogs}
          onTriggerSync={handleTriggerSync}
          isSyncing={isSyncing}
          currentLangCode={currentLang.code}
        />
      )}

      {/* Multi-Channel Distribution Hub Modal */}
      {isDistributionOpen && (
        <DistributionCenterModal
          onClose={() => setIsDistributionOpen(false)}
          queueItems={queueItems}
          topTrends={trends}
          onDispatchTest={handleDispatchTest}
          currentLangCode={currentLang.code}
        />
      )}

      {/* Cloudflare Pages & Global Edge Anycast Modal */}
      <CloudflareConnectionModal
        isOpen={isCloudflareOpen}
        onClose={() => setIsCloudflareOpen(false)}
      />

      {/* World-Wide Enterprise 13 Pro Power Tools Suite Modal */}
      <WorldPowerToolsModal
        isOpen={isPowerSuiteOpen}
        onClose={() => setIsPowerSuiteOpen(false)}
        trends={trends}
        currentLangCode={currentLang.code}
      />

      {/* Autonomous Real-Working AI Trend Chatbot (Zero API Key Req) */}
      <AiTrendChatbot
        trends={trends}
        onOpenArticleBySlug={(slug) => fetchArticle(slug)}
        currentLangCode={currentLang.code}
        isOpenControlled={isChatbotOpen}
        onOpenControlled={() => setIsChatbotOpen(true)}
        onCloseControlled={() => setIsChatbotOpen(false)}
      />

      {/* Footer & Algorithmic Disclosure */}
      <Footer
        onSelectCategory={setSelectedCategory}
        onOpenPipeline={() => setIsPipelineOpen(true)}
        onOpenDistribution={() => setIsDistributionOpen(true)}
        currentLangCode={currentLang.code}
      />
    </div>
  );
}

export default App;
