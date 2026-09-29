import React, { useState, useEffect } from 'react';
import {
  X,
  Volume2,
  VolumeX,
  Share2,
  Calendar,
  TrendingUp,
  CheckCircle2,
  ShieldCheck,
  Globe2,
  FileText,
  Copy,
  Check,
  ChevronDown,
  Sparkles,
  ExternalLink,
  Send,
  MessageSquare,
  Clock,
  ArrowRight,
  Bookmark,
  BookmarkCheck,
  Download,
  Zap,
} from 'lucide-react';
import { Article, SupportedLanguage, DeepDiveAnalysis } from '../types';
import { useI18n } from '../i18n/useI18n';
import { SUPPORTED_LANGUAGES } from '../data/initialData';

interface ArticleReaderModalProps {
  article: Article | null;
  onClose: () => void;
  currentLang: SupportedLanguage;
  onSelectLang?: (lang: SupportedLanguage) => void;
  onOpenDistributionWithTopic?: (topic: string, title: string) => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({
  article,
  onClose,
  currentLang,
  onSelectLang,
  onOpenDistributionWithTopic,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);
  const [selectedLanguageCode, setSelectedLanguageCode] = useState<string>(currentLang.code);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedJsonLd, setCopiedJsonLd] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const { t, getLocalizedCategory, getLocalizedArticle } = useI18n(selectedLanguageCode);
  const locArticle = article ? getLocalizedArticle(article) : null;

  // Localized text items
  const displayTitle = locArticle?.title || article?.title || '';
  const displaySummary = locArticle?.summary || article?.summary || '';
  const displayWhyTrending = locArticle?.why_trending || article?.why_trending || '';
  const displayWhatHappened = locArticle?.what_happened || article?.what_happened || '';
  const displayWhyItMatters = locArticle?.why_it_matters || article?.why_it_matters || '';
  const displayBackground = locArticle?.background || article?.background || '';
  const displayGlobalImpact = locArticle?.global_impact || article?.global_impact || '';
  const displayKeyFacts = locArticle?.key_facts || article?.key_facts || [];
  const displayTimeline = locArticle?.timeline || article?.timeline || [];
  const displayFAQ = locArticle?.faq || article?.faq || [];
  const displayCountryImpact = locArticle?.country_impact || article?.country_impact || {};
  const displayQueries = locArticle?.low_competition_queries || article?.low_competition_queries || [];

  // Gemini On-Demand Deep-Dive state
  const [isGeneratingDeepDive, setIsGeneratingDeepDive] = useState(false);
  const [deepDiveData, setDeepDiveData] = useState<DeepDiveAnalysis | null>(null);

  useEffect(() => {
    setSelectedLanguageCode(currentLang.code);
    if (article) {
      const saved = localStorage.getItem(`bookmark_${article.slug}`);
      setIsBookmarked(!!saved);
      setDeepDiveData(null);
    }
  }, [currentLang.code, article]);

  // Audio Speech Synthesis
  useEffect(() => {
    if (!isPlayingAudio) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      return;
    }

    if ('speechSynthesis' in window && article) {
      const textToRead = `${displayTitle}. ${displaySummary}. ${displayWhyTrending}.`;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.rate = 1.0;
      utterance.lang = selectedLanguageCode;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
    }

    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isPlayingAudio, article, selectedLanguageCode]);

  if (!article) return null;

  const toggleBookmark = () => {
    if (isBookmarked) {
      localStorage.removeItem(`bookmark_${article.slug}`);
      setIsBookmarked(false);
    } else {
      localStorage.setItem(`bookmark_${article.slug}`, JSON.stringify({ slug: article.slug, title: article.title }));
      setIsBookmarked(true);
    }
  };

  const handleGenerateDeepDive = async () => {
    setIsGeneratingDeepDive(true);
    try {
      const res = await fetch('/api/internal/generate-deep-dive', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: article.topic,
          category: article.category,
        }),
      });
      const data = await res.json();
      if (data.success && data.data) {
        setDeepDiveData(data.data);
      }
    } catch (err) {
      console.error('Deep dive generation error:', err);
    } finally {
      setIsGeneratingDeepDive(false);
    }
  };

  const handleExportMarkdown = () => {
    const md = `# ${displayTitle}
Rank: #${article.rank} Global Trend (${article.category})
Velocity: +${article.velocity}%
Updated: ${article.updated_at}
Canonical: ${article.seo.canonical}

## Summary
${displaySummary}

## Why Is This Trending?
${displayWhyTrending}

## What Happened
${displayWhatHappened}

## Key Verified Facts
${displayKeyFacts.map((f) => `- ${f.fact} (Citation: ${f.citation})`).join('\n')}

## Timeline
${displayTimeline.map((t) => `- **${t.time}**: ${t.event} (${t.impact})`).join('\n')}

## Global Impact
${displayGlobalImpact}

---
Generated by GOO-TRANDING Global Intelligence Engine (Gemini 3.8-flash Grounding)
`;
    const blob = new Blob([md], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${article.slug}-intel-report.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(article.seo.canonical || window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleCopyJsonLd = () => {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: article.title,
      description: article.summary,
      image: [article.hero_image],
      datePublished: article.published_at,
      dateModified: article.updated_at,
      author: {
        '@type': 'Organization',
        name: 'GOO-TRANDING Global Intelligence Unit',
      },
      publisher: {
        '@type': 'Organization',
        name: 'GOO-TRANDING',
        logo: {
          '@type': 'ImageObject',
          url: 'https://goo-tranding.com/logo.png',
        },
      },
    };
    navigator.clipboard.writeText(JSON.stringify(jsonLd, null, 2));
    setCopiedJsonLd(true);
    setTimeout(() => setCopiedJsonLd(false), 2000);
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `🔥 *${displayTitle}*\n\nGrowth: +${article.velocity}%\n\n${displaySummary}\n\nRead full verified analysis: ${article.seo.canonical}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleTelegramShare = () => {
    const text = encodeURIComponent(
      `🔥 *${displayTitle}* (+${article.velocity}%)\n\n${displaySummary}\n\nFull Report: ${article.seo.canonical}`
    );
    window.open(`https://t.me/share/url?url=${encodeURIComponent(article.seo.canonical)}&text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-lg flex justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0f0f15] border border-white/[0.1] rounded-2xl shadow-2xl overflow-hidden my-auto text-slate-200">
        {/* Sticky Modal Top Bar */}
        <div className="sticky top-0 z-20 bg-[#0f0f15]/95 backdrop-blur border-b border-white/[0.08] px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono truncate">
            <span className="text-slate-400">GOO-TRANDING</span>
            <span aria-hidden="true">/</span>
            <span className="text-[#ff0080] font-semibold">{getLocalizedCategory(article.category)}</span>
            <span aria-hidden="true">/</span>
            <span className="text-white font-medium truncate">#{article.rank} {article.topic}</span>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Bookmark button */}
            <button
              onClick={toggleBookmark}
              className={`p-2 rounded-xl border text-xs transition ${
                isBookmarked
                  ? 'bg-[#ffdd00]/20 border-[#ffdd00] text-[#ffdd00]'
                  : 'bg-[#181822] border-white/[0.08] text-slate-400 hover:text-white'
              }`}
              title={isBookmarked ? t('bookmark_saved') : t('bookmark_save')}
            >
              {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
            </button>

            {/* Audio Reader Toggle */}
            <button
              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
              className={`p-2 rounded-xl border text-xs flex items-center gap-1.5 transition ${
                isPlayingAudio
                  ? 'bg-[#00ff88]/20 border-[#00ff88] text-[#00ff88]'
                  : 'bg-[#181822] border-white/[0.08] text-slate-300 hover:text-white'
              }`}
              title={t('listen_aloud')}
            >
              {isPlayingAudio ? (
                <>
                  <VolumeX className="w-4 h-4" />
                  <span className="hidden sm:inline">{t('pause_audio')}</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4" />
                  <span className="hidden sm:inline">{t('listen_aloud')}</span>
                </>
              )}
            </button>

            {/* Export Markdown */}
            <button
              onClick={handleExportMarkdown}
              className="p-2 rounded-xl bg-[#181822] border border-white/[0.08] text-slate-400 hover:text-white transition hidden sm:flex items-center gap-1 text-xs"
              title="Export as Markdown report"
            >
              <Download className="w-4 h-4" />
              <span className="hidden md:inline">{t('export_md')}</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#181822] border border-white/[0.08] text-slate-400 hover:text-white transition"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-4 sm:p-8 space-y-8 max-h-[85vh] overflow-y-auto">
          {/* Article Header & Rank Pill */}
          <div>
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono mb-3">
              <span className="bg-[#ff0080]/15 text-[#ff0080] border border-[#ff0080]/30 font-bold px-2.5 py-0.5 rounded-md">
                {t('top_global_trend').replace('#', `#${article.rank}`)}
              </span>
              <span className="bg-[#00ff88]/15 text-[#00ff88] border border-[#00ff88]/30 font-bold px-2 py-0.5 rounded-md inline-flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" />
                +{article.velocity}% {t('velocity')}
              </span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {t('updated')}
              </span>
              <span className="text-slate-400">·</span>
              <span className="text-[#00ff88] font-bold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                {t('verified_fact')}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              {displayTitle}
            </h1>

            {/* Language Switcher Bar inside Article */}
            <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
              <span className="text-slate-400 font-mono flex items-center gap-1 shrink-0 mr-1">
                <Globe2 className="w-3.5 h-3.5 text-slate-400" /> {t('read_in')}
              </span>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setSelectedLanguageCode(lang.code);
                    if (onSelectLang) {
                      onSelectLang(lang);
                    }
                  }}
                  className={`px-2.5 py-1 rounded-lg font-medium transition shrink-0 flex items-center gap-1.5 text-xs ${
                    selectedLanguageCode === lang.code
                      ? 'bg-gradient-to-r from-[#ff0080] to-[#7928ca] text-white font-bold shadow-md shadow-[#ff0080]/20'
                      : 'bg-[#181822] text-slate-300 hover:text-white border border-white/[0.06]'
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.native_name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#12121a]">
            <img
              src={article.hero_image}
              alt={displayTitle || article.title}
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/assets/images/goo_trending_hero_1790604587244.jpg';
              }}
              className="w-full h-64 sm:h-96 object-cover"
            />
            {article.hero_image_caption && (
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 text-[11px] text-slate-300">
                {article.hero_image_caption}
              </div>
            )}
          </div>

          {/* Quick Summary Callout */}
          <div className="bg-[#14141e] border-l-4 border-[#ff0080] p-4 sm:p-5 rounded-r-xl">
            <div className="text-[11px] font-mono text-[#ff0080] uppercase tracking-wider mb-1 font-bold">
              {t('quick_summary')}
            </div>
            <p className="text-sm sm:text-base text-slate-100 leading-relaxed">
              {displaySummary}
            </p>
          </div>

          {/* Why Is This Trending */}
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00ff88]" />
              {t('why_trending')}
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {displayWhyTrending}
            </p>
          </div>

          {/* What Happened & Background */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-white/[0.06]">
            <div>
              <h3 className="text-base font-bold text-white mb-2">{t('what_happened')}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {displayWhatHappened}
              </p>
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-2">{t('background_context')}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {displayBackground || article.background}
              </p>
            </div>
          </div>

          {/* ON-DEMAND GEMINI STRATEGIC DEEP-DIVE TRIGGER */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#161624] via-[#101018] to-[#0a0a10] border border-white/[0.1] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#ffdd00] font-bold">
                  <Sparkles className="w-4 h-4 text-[#ffdd00]" />
                  {t('ai_deep_dive_badge')}
                </div>
                <h3 className="text-base font-bold text-white mt-0.5">
                  {t('ai_deep_dive_title')}
                </h3>
              </div>

              <button
                onClick={handleGenerateDeepDive}
                disabled={isGeneratingDeepDive}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#ff0080] to-[#00ff88] text-white font-bold text-xs flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition disabled:opacity-50 shadow-lg shadow-[#ff0080]/20 shrink-0 self-start sm:self-auto"
              >
                <Zap className={`w-3.5 h-3.5 ${isGeneratingDeepDive ? 'animate-spin' : ''}`} />
                <span>{isGeneratingDeepDive ? t('ai_deep_dive_loading') : t('ai_deep_dive_btn')}</span>
              </button>
            </div>

            {/* Generated SWOT & Market Analysis Display */}
            {deepDiveData ? (
              <div className="space-y-4 pt-3 border-t border-white/[0.06] animate-in fade-in duration-200">
                {/* Strategic Takeaways */}
                <div>
                  <div className="text-xs font-mono text-slate-400 mb-2 uppercase">{t('strategic_takeaways')}</div>
                  <div className="space-y-1.5">
                    {deepDiveData.strategicTakeaways.map((point, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                        <Check className="w-3.5 h-3.5 text-[#00ff88] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SWOT Matrix Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-[#00ff88]/5 rounded-xl border border-[#00ff88]/20">
                    <div className="text-xs font-bold text-[#00ff88] font-mono mb-1.5">{t('swot_strengths')}</div>
                    <ul className="text-[11px] text-slate-300 space-y-1 list-disc pl-4">
                      {deepDiveData.swot.strengths.map((s, i) => <li key={i}>{s}</li>)}
                    </ul>
                  </div>

                  <div className="p-3 bg-[#ff0080]/5 rounded-xl border border-[#ff0080]/20">
                    <div className="text-xs font-bold text-[#ff0080] font-mono mb-1.5">{t('swot_weaknesses')}</div>
                    <ul className="text-[11px] text-slate-300 space-y-1 list-disc pl-4">
                      {deepDiveData.swot.weaknesses.map((w, i) => <li key={i}>{w}</li>)}
                    </ul>
                  </div>

                  <div className="p-3 bg-[#ffdd00]/5 rounded-xl border border-[#ffdd00]/20">
                    <div className="text-xs font-bold text-[#ffdd00] font-mono mb-1.5">{t('swot_opportunities')}</div>
                    <ul className="text-[11px] text-slate-300 space-y-1 list-disc pl-4">
                      {deepDiveData.swot.opportunities.map((o, i) => <li key={i}>{o}</li>)}
                    </ul>
                  </div>

                  <div className="p-3 bg-red-500/5 rounded-xl border border-red-500/20">
                    <div className="text-xs font-bold text-red-400 font-mono mb-1.5">{t('swot_threats')}</div>
                    <ul className="text-[11px] text-slate-300 space-y-1 list-disc pl-4">
                      {deepDiveData.swot.threats.map((th, i) => <li key={i}>{th}</li>)}
                    </ul>
                  </div>
                </div>

                {/* Market Bull / Bear Horizon */}
                <div className="p-3.5 bg-black/40 rounded-xl border border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="text-[#00ff88] font-bold font-mono">{t('bull_case')} </span>
                    <span className="text-slate-300">{deepDiveData.marketImplications.bullCase}</span>
                  </div>
                  <div className="font-mono text-[11px] text-[#ffdd00] shrink-0 bg-[#ffdd00]/10 px-2 py-1 rounded">
                    {deepDiveData.marketImplications.timelineHorizon}
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-xs text-slate-400 leading-relaxed">
                {t('ai_deep_dive_desc')}
              </p>
            )}
          </div>

          {/* Key Facts with Source Attribution (Hallucination Defense) */}
          <div className="space-y-3 pt-2 border-t border-white/[0.06]">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00ff88]" />
                {t('key_verified_facts')}
              </h3>
              <span className="text-[11px] font-mono text-[#00ff88]">
                {t('cross_checked')}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {displayKeyFacts.map((fact, idx) => (
                <div
                  key={idx}
                  className="bg-[#12121a] border border-white/[0.06] rounded-xl p-3.5 space-y-1.5"
                >
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-mono text-slate-500">#{idx + 1}</span>
                    <p className="text-xs text-slate-200 leading-normal font-medium">
                      {fact.fact}
                    </p>
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono flex items-center gap-1 pt-1">
                    <ShieldCheck className="w-3 h-3 text-[#00ff88]" />
                    <span>{t('citation')} {fact.citation}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Timeline */}
          {displayTimeline && displayTimeline.length > 0 && (
            <div className="space-y-3 pt-2 border-t border-white/[0.06]">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#ffdd00]" />
                {t('timeline_title')}
              </h3>

              <div className="relative pl-6 space-y-4 border-l border-white/[0.1] ml-2">
                {displayTimeline.map((entry, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-[#ff0080] border-2 border-[#0f0f15]" />
                    <div className="text-xs font-mono text-[#ff0080] font-bold">
                      {entry.time}
                    </div>
                    <div className="text-sm font-semibold text-white mt-0.5">
                      {entry.event}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {entry.impact}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Global Impact vs Country Impact */}
          <div className="space-y-3 pt-2 border-t border-white/[0.06]">
            <h3 className="text-base sm:text-lg font-bold text-white">
              {t('global_regional_impact')}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {displayGlobalImpact}
            </p>

            {displayCountryImpact && Object.keys(displayCountryImpact).length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                {Object.entries(displayCountryImpact).map(([code, impact]) => (
                  <div
                    key={code}
                    className="p-3 bg-[#13131c] rounded-xl border border-white/[0.05]"
                  >
                    <div className="text-xs font-bold font-mono text-[#ffdd00] mb-1">
                      {code} {t('regional_footprint')}
                    </div>
                    <div className="text-xs text-slate-300 leading-relaxed">
                      {impact}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Frequently Asked Questions (FAQ Accordion) */}
          {displayFAQ && displayFAQ.length > 0 && (
            <div className="space-y-3 pt-2 border-t border-white/[0.06]">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#00ff88]" />
                {t('faq_title')}
              </h3>

              <div className="space-y-2">
                {displayFAQ.map((item, idx) => {
                  const isOpen = activeFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-white/[0.06] rounded-xl overflow-hidden bg-[#121219]"
                    >
                      <button
                        onClick={() => setActiveFaqIndex(isOpen ? null : idx)}
                        className="w-full text-left p-3.5 flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-white hover:text-[#ff0080] transition"
                      >
                        <span>{item.question}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 transition-transform ${
                            isOpen ? 'rotate-180 text-[#ff0080]' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-3.5 pb-3.5 text-xs text-slate-300 border-t border-white/[0.04] pt-2.5 leading-relaxed">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Low-Competition Search Queries (SEO Opportunities) */}
          {displayQueries && displayQueries.length > 0 && (
            <div className="p-4 bg-[#121219] border border-white/[0.08] rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-[#ffdd00]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t('seo_queries_title')}</span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">
                  {t('content_gap')}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {t('seo_queries_desc')}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {displayQueries.map((q, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 bg-[#171722] rounded-lg border border-white/[0.04] flex items-center justify-between gap-2"
                  >
                    <div>
                      <div className="text-xs font-medium text-white">{q.query}</div>
                      <div className="text-[10px] text-slate-400 font-mono capitalize">
                        {q.intent} intent
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#00ff88]/15 text-[#00ff88]">
                      {q.potential}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sources and Grounding References */}
          <div className="space-y-2 pt-2 border-t border-white/[0.06]">
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              {t('citations_sources_title')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {article.sources.map((source, idx) => (
                <a
                  key={idx}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#14141e] hover:bg-[#1a1a28] border border-white/[0.06] text-xs text-slate-300 hover:text-white transition inline-flex items-center gap-1.5"
                >
                  <span>{source.title}</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Social Distribution & Export Toolbar */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={handleTelegramShare}
                className="px-3 py-2 rounded-xl bg-[#229ED9]/15 hover:bg-[#229ED9]/25 text-[#229ED9] border border-[#229ED9]/30 text-xs font-semibold transition flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{t('broadcast_telegram')}</span>
              </button>

              <button
                onClick={handleWhatsAppShare}
                className="px-3 py-2 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/30 text-xs font-semibold transition flex items-center gap-1.5"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{t('share_whatsapp')}</span>
              </button>

              <button
                onClick={handleCopyLink}
                className="px-3 py-2 rounded-xl bg-[#181822] hover:bg-[#20202e] text-slate-300 text-xs font-medium transition flex items-center gap-1.5 border border-white/[0.06]"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-[#00ff88]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedLink ? t('copied_url') : t('copy_link')}</span>
              </button>
            </div>

            <button
              onClick={handleCopyJsonLd}
              className="px-3 py-2 rounded-xl bg-[#181822] hover:bg-[#20202e] text-slate-400 hover:text-white text-xs font-mono transition flex items-center gap-1.5 border border-white/[0.06]"
              title="Copy Google Schema.org NewsArticle JSON-LD"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{copiedJsonLd ? t('copied_jsonld') : t('copy_jsonld')}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
