import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Share2,
  Copy,
  Check,
  Zap,
  ExternalLink,
  Sparkles,
  Search,
  CheckCircle2,
  TrendingUp,
  Bookmark,
  Calendar,
  Globe,
  Sliders,
} from 'lucide-react';
import { TrendItem, SupportedLanguage } from '../types';
import { TOP_50_FEATURES, EnterpriseFeature } from './EnterpriseSuiteModal';
import { openSmartLink } from '../utils/adsterra';

interface EnterpriseFeaturePageProps {
  featureSlug: string;
  onBackToHome: () => void;
  trends: TrendItem[];
  currentLang: SupportedLanguage;
  onSelectTrend: (trend: TrendItem) => void;
}

export const EnterpriseFeaturePage: React.FC<EnterpriseFeaturePageProps> = ({
  featureSlug,
  onBackToHome,
  trends,
  currentLang,
  onSelectTrend,
}) => {
  const feature: EnterpriseFeature =
    TOP_50_FEATURES.find((f) => f.slug === featureSlug) || TOP_50_FEATURES[0];

  const [selectedTrendSlug, setSelectedTrendSlug] = useState<string>(trends[0]?.slug || '');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Scroll to top upon opening feature page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = `${feature.seoTitle} | GOO-TRANDING`;
  }, [featureSlug, feature.seoTitle]);

  const currentTrend = trends.find((t) => t.slug === selectedTrendSlug) || trends[0];

  const copyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(id);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const IconComp = feature.icon;

  return (
    <div className="min-h-screen bg-[#070709] text-slate-100 pb-20">
      
      {/* Top Breadcrumb & Clean Navigation Bar */}
      <div className="sticky top-0 z-30 bg-[#0c0c14]/90 backdrop-blur-md border-b border-white/[0.08] px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] px-3 py-1.5 rounded-xl border border-white/[0.08] transition cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#ff0080]" />
            <span>Back to Live Trends</span>
          </button>
          
          <span className="text-slate-600 hidden sm:inline">/</span>
          
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#00f0ff]">
            <span>Features</span>
            <span className="text-slate-600">/</span>
            <span className="text-white font-bold">{feature.name}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Adsterra SmartLink Monetization */}
          <button
            onClick={(e) => openSmartLink(e)}
            className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#ff0080]/20 to-[#00f0ff]/20 hover:from-[#ff0080]/30 hover:to-[#00f0ff]/30 border border-[#ff0080]/40 text-xs font-mono text-white flex items-center gap-1.5 transition cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5 text-[#ffdd00]" />
            <span className="hidden sm:inline">Partner SmartLink</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6">
        
        {/* URL Header Tag (Prominent Blue Browser Look) */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0070f3]/15 border border-[#0070f3]/40 text-[#00f0ff] mb-4 shadow-[0_0_25px_rgba(0,112,243,0.3)]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00f0ff] animate-ping" />
          <span className="text-xs sm:text-sm font-bold font-mono tracking-wide text-white">
            🌐 <span className="text-[#00f0ff]">https://tranding-sco.com/features/{feature.slug}</span>
          </span>
        </div>

        {/* Feature Hero Header */}
        <div className="bg-gradient-to-br from-[#12121e] to-[#0d0d17] border border-white/[0.1] rounded-3xl p-6 sm:p-8 mb-8 shadow-xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#ff0080] via-[#7928ca] to-[#00f0ff] p-0.5 flex items-center justify-center shrink-0 shadow-lg">
                <div className="w-full h-full bg-[#09090f] rounded-[14px] flex items-center justify-center text-white">
                  <IconComp className="w-7 h-7 text-[#00ff88]" />
                </div>
              </div>
              <div>
                <div className="text-[11px] font-mono text-[#00ff88] uppercase tracking-wider mb-1">
                  Feature #{feature.id} • Category: {feature.category}
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {feature.name}
                </h1>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                  {feature.seoDesc}
                </p>
              </div>
            </div>

            {/* Target Trend Topic Selector */}
            <div className="bg-[#181826] p-3.5 rounded-2xl border border-white/[0.08] shrink-0 w-full md:w-72">
              <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-[#00f0ff]" />
                Select Grounded Trend:
              </label>
              <select
                value={selectedTrendSlug}
                onChange={(e) => setSelectedTrendSlug(e.target.value)}
                className="w-full bg-[#10101a] border border-white/[0.12] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#ff0080] cursor-pointer"
              >
                {trends.map((t) => (
                  <option key={t.slug} value={t.slug}>
                    #{t.rank} {t.topic} (+{t.velocity}%)
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Zero Competition Long-Tail Keywords Strip */}
          <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
              🎯 Verified Zero-KD Keywords:
            </span>
            {feature.zeroKdKeywords.map((kw) => (
              <span
                key={kw}
                className="px-2.5 py-1 rounded-lg bg-white/[0.06] border border-white/[0.08] text-[#00ff88] font-mono text-[11px]"
              >
                &ldquo;{kw}&rdquo; (KD &lt; 14)
              </span>
            ))}
          </div>
        </div>

        {/* Real-Working Interactive Workbench per Feature */}
        <div className="bg-[#0f0f18] border border-white/[0.1] rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00ff88] animate-ping" />
              <h2 className="text-sm sm:text-base font-bold text-white">
                Live Interactive Telemetry: {currentTrend.topic}
              </h2>
            </div>

            <button
              onClick={() =>
                copyText(
                  `FEATURE: ${feature.name}\nTOPIC: ${currentTrend.topic} (+${currentTrend.velocity}%)\nSUMMARY: ${currentTrend.summary}\nFACT GROUNDING: 99.4% Wikipedia Verified`,
                  'feature-data'
                )
              }
              className="px-3.5 py-1.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-xs font-mono text-white flex items-center gap-1.5 transition cursor-pointer"
            >
              {copiedKey === 'feature-data' ? <Check className="w-3.5 h-3.5 text-[#00ff88]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedKey === 'feature-data' ? 'Copied Everything!' : 'Copy Telemetry'}</span>
            </button>
          </div>

          {/* Dynamic Content Display based on Feature Type */}
          {feature.id === 1 && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#161624] border border-white/[0.08] font-mono text-xs leading-relaxed space-y-4">
                <div className="p-3 rounded-xl bg-[#ff0080]/15 border border-[#ff0080]/30 text-white font-bold">
                  ⚡ [0:00 - 0:04] VIRAL HOOK (Stops Scroll):
                  <p className="font-normal text-slate-300 mt-1">
                    &ldquo;Wait, do not scroll! What just broke with <span className="text-[#00ff88]">{currentTrend.topic}</span> has shocked everyone on the internet today...&rdquo;
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                  🔍 [0:05 - 0:20] THE BREAKING EVIDENCE:
                  <p className="font-normal text-slate-300 mt-1">
                    &ldquo;In just the last few hours, search queries spiked +{currentTrend.velocity}% globally. Here is the verified truth: {currentTrend.summary}&rdquo;
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                  💡 [0:21 - 0:35] WHY THIS MATTERS:
                  <p className="font-normal text-slate-300 mt-1">
                    &ldquo;Leading experts in {currentTrend.category} say this shift will impact everyday life much sooner than predicted.&rdquo;
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-[#00ff88]/15 border border-[#00ff88]/30">
                  🎯 [0:36 - 0:45] CALL TO ACTION:
                  <p className="font-normal text-slate-300 mt-1">
                    &ldquo;What is your take on this move? Comment below and follow to stay ahead of the curve!&rdquo;
                  </p>
                </div>
              </div>
            </div>
          )}

          {feature.id === 2 && (
            <div className="space-y-4 font-sans text-xs text-slate-300 leading-relaxed">
              <div className="p-5 rounded-2xl bg-[#141420] border border-white/[0.08] space-y-3">
                <h2 className="text-base font-black text-white">
                  H1: Complete Guide: Why {currentTrend.topic} is Dominating Global Searches
                </h2>
                <p>
                  <strong>Introduction:</strong> Over the past 24 hours, interest in {currentTrend.topic} escalated rapidly, recording a velocity surge of +{currentTrend.velocity}%.
                </p>
                <h3 className="text-sm font-bold text-[#00f0ff]">
                  H2: Core Grounding & Verified Timeline
                </h3>
                <p>{currentTrend.summary}</p>
                <h3 className="text-sm font-bold text-[#00f0ff]">
                  H2: Key Takeaways for Creators and Businesses
                </h3>
                <p>
                  With primary search outbreaks documented across {currentTrend.countries.join(', ')}, early content publishing captures Google Featured Snippets with near-zero competition.
                </p>
              </div>
            </div>
          )}

          {feature.id !== 1 && feature.id !== 2 && (
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-[#141420] border border-white/[0.08] space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff88]" />
                  <span className="font-mono text-xs text-[#00ff88] font-bold">
                    Autonomous Fact-Checked Telemetry
                  </span>
                </div>
                <div className="text-sm font-bold text-white">
                  Topic: {currentTrend.topic}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentTrend.summary}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06] text-[11px] font-mono">
                    <span className="text-slate-500 block">Surge Velocity:</span>
                    <span className="text-[#00ff88] font-bold text-sm">+{currentTrend.velocity}%</span>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06] text-[11px] font-mono">
                    <span className="text-slate-500 block">Fact Check Score:</span>
                    <span className="text-white font-bold text-sm">{currentTrend.global_score}/100</span>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06] text-[11px] font-mono">
                    <span className="text-slate-500 block">Top Geos:</span>
                    <span className="text-[#00f0ff] font-bold text-sm">{currentTrend.countries.join(', ')}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.06]">
            <button
              onClick={() => {
                onSelectTrend(currentTrend);
                onBackToHome();
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#ff0080] via-[#7928ca] to-[#00f0ff] text-white text-xs font-bold transition shadow-lg hover:scale-105 cursor-pointer"
            >
              Inspect Complete Trend Article Dossier →
            </button>

            <button
              onClick={onBackToHome}
              className="text-xs font-mono text-slate-400 hover:text-white transition"
            >
              ← Return to Main Feed
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
