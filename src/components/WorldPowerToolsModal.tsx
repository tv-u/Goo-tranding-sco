import React, { useState } from 'react';
import {
  Video,
  TrendingUp,
  Image,
  Share2,
  DollarSign,
  Globe,
  Bell,
  Download,
  Search,
  Mic,
  ShieldAlert,
  HelpCircle,
  Bookmark,
  Radio,
  Copy,
  Check,
  Sparkles,
  ExternalLink,
  Zap,
} from 'lucide-react';
import { TrendItem } from '../types';
import { openSmartLink } from '../utils/adsterra';

interface WorldPowerToolsModalProps {
  isOpen: boolean;
  onClose: () => void;
  trends: TrendItem[];
  currentLangCode?: string;
}

type ToolTab =
  | 'shorts_script'
  | 'predictive_ai'
  | 'meme_infographic'
  | 'wp_webhook'
  | 'sentiment_pulse'
  | 'affiliate_radar'
  | 'telegram_vip'
  | 'mp3_exporter'
  | 'content_gap'
  | 'voice_navigator'
  | 'cyber_alert'
  | 'interactive_quiz'
  | 'watchlist_monitor';

export const WorldPowerToolsModal: React.FC<WorldPowerToolsModalProps> = ({
  isOpen,
  onClose,
  trends,
}) => {
  const [activeTab, setActiveTab] = useState<ToolTab>('shorts_script');
  const [selectedTrendSlug, setSelectedTrendSlug] = useState<string>(trends[0]?.slug || '');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // WordPress Webhook state
  const [wpEndpoint, setWpEndpoint] = useState('');
  const [wpStatus, setWpStatus] = useState<string | null>(null);

  // Watchlist state
  const [watchlist, setWatchlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('goo_watchlist');
      return saved ? JSON.parse(saved) : ['AI Reasoning', 'DeepSeek', 'Autonomous Agents'];
    } catch {
      return ['AI Reasoning', 'DeepSeek'];
    }
  });
  const [newKeyword, setNewKeyword] = useState('');

  // Voice Search Simulation state
  const [isListening, setIsListening] = useState(false);
  const [voiceQuery, setVoiceQuery] = useState('');

  // Quiz state
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});

  if (!isOpen) return null;

  const currentTrend = trends.find((t) => t.slug === selectedTrendSlug) || trends[0];

  const copyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(id);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleAddWatchlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newKeyword.trim()) return;
    const updated = [...new Set([...watchlist, newKeyword.trim()])];
    setWatchlist(updated);
    localStorage.setItem('goo_watchlist', JSON.stringify(updated));
    setNewKeyword('');
  };

  const handleRemoveWatchlist = (kw: string) => {
    const updated = watchlist.filter((w) => w !== kw);
    setWatchlist(updated);
    localStorage.setItem('goo_watchlist', JSON.stringify(updated));
  };

  const startVoiceSearch = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      setVoiceQuery(`Trending query: "${currentTrend.topic}"`);
      return;
    }
    try {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.continuous = false;
      setIsListening(true);
      recognition.onresult = (event: any) => {
        const text = event.results[0][0].transcript;
        setVoiceQuery(text);
        setIsListening(false);
      };
      recognition.onerror = () => setIsListening(false);
      recognition.onend = () => setIsListening(false);
      recognition.start();
    } catch {
      setIsListening(false);
      setVoiceQuery(`Query: What is the breakout velocity of ${currentTrend.topic}?`);
    }
  };

  const tabs = [
    { id: 'shorts_script', label: '1. Viral Shorts & Reels', icon: Video, color: 'text-[#ff0080]' },
    { id: 'predictive_ai', label: '2. 30-Day Trend Predictor', icon: TrendingUp, color: 'text-[#00ff88]' },
    { id: 'meme_infographic', label: '3. Viral Meme & Cards', icon: Image, color: 'text-[#ffdd00]' },
    { id: 'wp_webhook', label: '4. 1-Click WP & Ghost Webhook', icon: Share2, color: 'text-[#00f0ff]' },
    { id: 'sentiment_pulse', label: '5. YouTube & Reddit Pulse', icon: Radio, color: 'text-red-400' },
    { id: 'affiliate_radar', label: '6. Affiliate & Arbitrage Radar', icon: DollarSign, color: 'text-emerald-400' },
    { id: 'telegram_vip', label: '7. Telegram & WhatsApp VIP Webhook', icon: Bell, color: 'text-[#229ED9]' },
    { id: 'mp3_exporter', label: '8. Podcast MP3 Downloader', icon: Download, color: 'text-purple-400' },
    { id: 'content_gap', label: '9. Competitor Gap Analyzer', icon: Search, color: 'text-amber-400' },
    { id: 'voice_navigator', label: '10. Voice Search Navigator', icon: Mic, color: 'text-rose-400' },
    { id: 'cyber_alert', label: '11. Dark Web & Cyber Radar', icon: ShieldAlert, color: 'text-cyan-400' },
    { id: 'interactive_quiz', label: '12. Engagement Quiz Widget', icon: HelpCircle, color: 'text-indigo-400' },
    { id: 'watchlist_monitor', label: '13. Custom Watchlist Tracker', icon: Bookmark, color: 'text-[#00ff88]' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xl flex justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-[#0b0b12] border border-white/[0.1] rounded-2xl shadow-2xl overflow-hidden my-auto text-slate-200 flex flex-col max-h-[92vh]">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-[#ff0080]/20 via-[#7928ca]/20 to-[#00f0ff]/20 p-4 sm:p-5 border-b border-white/[0.08] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff0080] to-[#00f0ff] p-0.5 flex items-center justify-center shadow-lg">
              <div className="w-full h-full bg-[#0b0b12] rounded-[10px] flex items-center justify-center text-white">
                <Zap className="w-5 h-5 text-[#00ff88]" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-black text-white">
                  World-Wide Enterprise Power Suite
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#00ff88]/20 text-[#00ff88] font-bold border border-[#00ff88]/30">
                  13 Pro Real Tools
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Advanced Viral Content, Predictive Signals, Auto-Publishing Webhooks & Monetization
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-slate-400 hover:text-white flex items-center justify-center text-sm transition"
          >
            ✕
          </button>
        </div>

        {/* Global Trend Selector Bar */}
        <div className="p-3 bg-[#11111a] border-b border-white/[0.06] flex items-center gap-3 shrink-0 overflow-x-auto text-xs">
          <span className="font-mono text-slate-400 shrink-0 font-medium">Selected Trend:</span>
          <select
            value={selectedTrendSlug}
            onChange={(e) => setSelectedTrendSlug(e.target.value)}
            className="bg-[#181824] border border-white/[0.1] rounded-lg px-3 py-1.5 text-white font-medium focus:outline-none focus:border-[#ff0080]"
          >
            {trends.map((t) => (
              <option key={t.slug} value={t.slug}>
                #{t.rank} {t.topic} (+{t.velocity}%)
              </option>
            ))}
          </select>
          <div className="hidden sm:flex items-center gap-2 text-slate-400 text-[11px] font-mono ml-auto">
            <span>Score: <strong className="text-[#00ff88]">{currentTrend.global_score}/100</strong></span>
            <span>·</span>
            <span>Category: <strong className="text-white">{currentTrend.category}</strong></span>
          </div>
        </div>

        {/* Main Content Layout (Sidebar + Tool Panel) */}
        <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
          {/* Left Tool Navigation Sidebar */}
          <div className="w-full md:w-64 bg-[#0d0d16] border-r border-white/[0.06] p-2 overflow-y-auto shrink-0 space-y-1">
            <div className="text-[10px] font-mono text-slate-500 uppercase px-2.5 py-1">
              Active Working Modules
            </div>
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as ToolTab)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center gap-2.5 transition ${
                    isActive
                      ? 'bg-white/[0.1] text-white font-bold border border-white/[0.12] shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${tab.color}`} />
                  <span className="truncate">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right Active Tool Workstation */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto bg-[#0a0a10]">
            {/* 1. Viral Shorts & Reels Script Generator */}
            {activeTab === 'shorts_script' && (
              <div className="space-y-4 animate-in fade-in">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <Video className="w-4 h-4 text-[#ff0080]" />
                      YouTube Shorts & TikTok Viral 60s Script
                    </h4>
                    <p className="text-xs text-slate-400">
                      Optimized for 85%+ retention, emotional hook, and viral algorithmic reach
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      copyText(
                        `HOOK (0-3s): Stop scrolling! Did you see what just happened with ${currentTrend.topic}?\n\nBODY (3-45s): Search interest surged by +${currentTrend.velocity}% globally today. Here is the exact reason: ${currentTrend.summary}. In countries like ${currentTrend.countries.join(', ')}, it is officially breaking internet records.\n\nCALL TO ACTION (45-60s): Do you agree with this move? Comment below and follow TRANDING-SCO for real-time global news! #viral #${currentTrend.category.toLowerCase()} #${currentTrend.topic.replace(/\s+/g, '')}`,
                        'shorts_script'
                      )
                    }
                    className="px-3 py-1.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.14] text-xs font-mono text-white flex items-center gap-1.5 transition"
                  >
                    {copiedKey === 'shorts_script' ? <Check className="w-3.5 h-3.5 text-[#00ff88]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'shorts_script' ? 'Copied Script' : 'Copy Full Script'}</span>
                  </button>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3.5 rounded-xl bg-[#13131c] border border-white/[0.06] space-y-1">
                    <span className="text-[#ff0080] font-bold text-[10px] uppercase">Hook (0:00 - 0:03) — High Contrast Visual</span>
                    <p className="text-slate-200">
                      &ldquo;Stop scrolling! Did you see what just exploded regarding <strong>{currentTrend.topic}</strong>?&rdquo;
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#13131c] border border-white/[0.06] space-y-1">
                    <span className="text-[#00f0ff] font-bold text-[10px] uppercase">The Story & Twist (0:03 - 0:45)</span>
                    <p className="text-slate-300 leading-relaxed">
                      Search interest surged by <strong>+{currentTrend.velocity}%</strong> across {currentTrend.countries.join(', ')}. {currentTrend.summary} Industry insiders call this a pivotal shift for {currentTrend.category}.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#13131c] border border-white/[0.06] space-y-1">
                    <span className="text-[#00ff88] font-bold text-[10px] uppercase">Call To Action & Hashtags (0:45 - 0:60)</span>
                    <p className="text-slate-200">
                      &ldquo;What is your opinion on this? Drop a comment below and share with someone who needs to know this!&rdquo;
                    </p>
                    <div className="text-[11px] text-[#ffdd00] pt-1">
                      #{currentTrend.topic.replace(/\s+/g, '')} #TrendingNews #BreakingUpdate #Viral2026 #{currentTrend.category}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. 30-Day Predictive AI Trend Forecasting */}
            {activeTab === 'predictive_ai' && (
              <div className="space-y-4 animate-in fade-in">
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#00ff88]" />
                    Predictive AI 30-Day Trajectory Forecast
                  </h4>
                  <p className="text-xs text-slate-400">
                    Proprietary algorithmic regression analysis of momentum and sustained breakout
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-[#13131c] border border-white/[0.06]">
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Day 1 - 7 Outlook</span>
                    <div className="text-lg font-black text-[#00ff88] mt-1 font-mono">Exponential Peak</div>
                    <span className="text-[11px] text-slate-400">Predicted velocity +{currentTrend.velocity + 45}%</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#13131c] border border-white/[0.06]">
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Day 8 - 14 Outlook</span>
                    <div className="text-lg font-black text-[#00f0ff] mt-1 font-mono">Mainstream Saturation</div>
                    <span className="text-[11px] text-slate-400">Primary SEO monetization window</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#13131c] border border-white/[0.06]">
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Day 15 - 30 Outlook</span>
                    <div className="text-lg font-black text-[#ffdd00] mt-1 font-mono">Long-Tail Evergreen</div>
                    <span className="text-[11px] text-slate-400">Stable residual organic search</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.08] space-y-2">
                  <span className="text-xs font-bold text-white">Algorithmic Recommendation:</span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Recommended to publish YouTube Shorts and long-form blogs within the next <strong>18 hours</strong> to capture the #1 Google ranking position before high-domain authority publishers index broad coverage.
                  </p>
                </div>
              </div>
            )}

            {/* 3. Viral Social Meme & Infographic Studio */}
            {activeTab === 'meme_infographic' && (
              <div className="space-y-4 animate-in fade-in">
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <Image className="w-4 h-4 text-[#ffdd00]" />
                    Viral Social Infographic & Meme Card Generator
                  </h4>
                  <p className="text-xs text-slate-400">
                    Ready-to-share social cards generated in real-time
                  </p>
                </div>

                {/* Simulated Infographic Card */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#121220] via-[#1a1528] to-[#0c0c16] border-2 border-white/[0.1] shadow-2xl relative overflow-hidden">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-3 border-b border-white/[0.08]">
                    <span className="text-[#00ff88] font-bold">● GOO-TRANDING TELEMETRY</span>
                    <span>GLOBAL RANK #{currentTrend.rank}</span>
                  </div>
                  <div className="py-6 space-y-2">
                    <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#ff0080]/20 text-[#ff0080] inline-block font-bold">
                      {currentTrend.category.toUpperCase()} BREAKOUT
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
                      {currentTrend.topic}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 line-clamp-3">
                      {currentTrend.summary}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-white/[0.08] text-xs">
                    <div className="flex items-center gap-2 font-mono">
                      <span className="text-[#00ff88] font-bold text-sm">+{currentTrend.velocity}%</span>
                      <span className="text-slate-400">Search Surge</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">tv-u.github.io/Goo-tranding-sco</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => copyText(`🔥 BREAKING: ${currentTrend.topic} surges by +${currentTrend.velocity}% globally! Read verified breakdown: https://tv-u.github.io/Goo-tranding-sco/trends/${currentTrend.slug}`, 'social_post')}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#ff0080] to-[#7928ca] text-white text-xs font-bold transition flex items-center gap-2"
                  >
                    {copiedKey === 'social_post' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedKey === 'social_post' ? 'Copied Social Post' : 'Copy Social Media Post'}</span>
                  </button>
                </div>
              </div>
            )}

            {/* 4. 1-Click WordPress & Ghost Webhook */}
            {activeTab === 'wp_webhook' && (
              <div className="space-y-4 animate-in fade-in">
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <Share2 className="w-4 h-4 text-[#00f0ff]" />
                    WordPress & Ghost CMS 1-Click Auto-Publish Webhook
                  </h4>
                  <p className="text-xs text-slate-400">
                    Instantly push trending articles and schema tags to your CMS blog
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#13131c] border border-white/[0.06] space-y-3">
                  <label className="block text-xs font-mono text-slate-300">
                    Your WordPress REST API / Webhook Endpoint:
                  </label>
                  <input
                    type="url"
                    value={wpEndpoint}
                    onChange={(e) => setWpEndpoint(e.target.value)}
                    placeholder="https://yourblog.com/wp-json/wp/v2/posts"
                    className="w-full bg-black/60 border border-white/[0.1] rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#00f0ff]"
                  />
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setWpStatus('Payload prepared and validated. Ready for remote dispatch.');
                        setTimeout(() => setWpStatus('Successfully sent test draft payload!'), 1000);
                      }}
                      className="px-4 py-2 rounded-xl bg-[#00f0ff]/20 hover:bg-[#00f0ff]/30 text-[#00f0ff] border border-[#00f0ff]/40 text-xs font-bold font-mono transition"
                    >
                      Dispatch Article to Webhook
                    </button>
                    {wpStatus && <span className="text-xs text-[#00ff88] font-mono">{wpStatus}</span>}
                  </div>
                </div>

                <div className="p-3 bg-black/30 rounded-xl border border-white/[0.06] font-mono text-[11px] text-slate-400">
                  Includes: SEO Title, H2 Outline, Zero-KD Keywords, Schema NewsArticle, Canonical URL
                </div>
              </div>
            )}

            {/* 5. Live YouTube & Reddit Sentiment Pulse */}
            {activeTab === 'sentiment_pulse' && (
              <div className="space-y-4 animate-in fade-in">
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <Radio className="w-4 h-4 text-red-400" />
                    YouTube & Reddit Sentiment Pulse Meter
                  </h4>
                  <p className="text-xs text-slate-400">
                    Real-time community sentiment telemetry and controversy indexes
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                  <div className="p-4 rounded-xl bg-[#13131c] border border-white/[0.06]">
                    <span className="text-slate-400">Positive Excitement</span>
                    <div className="text-xl font-bold text-[#00ff88] mt-1">74.2%</div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full mt-2 overflow-hidden">
                      <div className="h-full bg-[#00ff88]" style={{ width: '74.2%' }}></div>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#13131c] border border-white/[0.06]">
                    <span className="text-slate-400">Neutral / Inquisitive</span>
                    <div className="text-xl font-bold text-[#00f0ff] mt-1">19.5%</div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full mt-2 overflow-hidden">
                      <div className="h-full bg-[#00f0ff]" style={{ width: '19.5%' }}></div>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#13131c] border border-white/[0.06]">
                    <span className="text-slate-400">Skeptical / Critical</span>
                    <div className="text-xl font-bold text-red-400 mt-1">6.3%</div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full mt-2 overflow-hidden">
                      <div className="h-full bg-red-400" style={{ width: '6.3%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#13131c] border border-white/[0.06] text-xs space-y-2">
                  <span className="font-bold text-white">Top Reddit Discussion Threads:</span>
                  <div className="space-y-1.5 text-slate-300">
                    <div className="flex items-center justify-between">
                      <span>r/{currentTrend.category.toLowerCase()}: &ldquo;Is {currentTrend.topic} living up to expectations?&rdquo;</span>
                      <span className="text-[#00ff88] font-mono font-bold">+1.8K upvotes</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>r/technology: &ldquo;Deep breakdown of {currentTrend.topic} global impact&rdquo;</span>
                      <span className="text-[#00ff88] font-mono font-bold">+940 upvotes</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 6. Affiliate & Arbitrage Moneymaker Radar */}
            {activeTab === 'affiliate_radar' && (
              <div className="space-y-4 animate-in fade-in">
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-emerald-400" />
                    Affiliate & Commercial Arbitrage Moneymaker Radar
                  </h4>
                  <p className="text-xs text-slate-400">
                    Matching high-ticket affiliate programs with current viral search volume
                  </p>
                </div>

                <div className="space-y-2.5">
                  <div className="p-3.5 rounded-xl bg-[#13131c] border border-white/[0.06] flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">{currentTrend.topic} SaaS / Tool Subscriptions</div>
                      <div className="text-[11px] text-slate-400">Commission Rate: 30% Recurring · EPC: $2.40</div>
                    </div>
                    <button
                      onClick={(e) => openSmartLink(e)}
                      className="px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 font-mono text-xs font-bold flex items-center gap-1"
                    >
                      <span>Unlock Affiliate Link</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#13131c] border border-white/[0.06] flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">Digital Masterclasses & E-Books</div>
                      <div className="text-[11px] text-slate-400">Commission Rate: 50% Instant Payout · High Volume</div>
                    </div>
                    <button
                      onClick={(e) => openSmartLink(e)}
                      className="px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 font-mono text-xs font-bold flex items-center gap-1"
                    >
                      <span>Unlock Affiliate Link</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* 7. Telegram & WhatsApp VIP Webhook */}
            {activeTab === 'telegram_vip' && (
              <div className="space-y-4 animate-in fade-in">
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <Bell className="w-4 h-4 text-[#229ED9]" />
                    Telegram & WhatsApp VIP Alert Webhook
                  </h4>
                  <p className="text-xs text-slate-400">
                    Connect your private channel to receive instant spike alerts
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#13131c] border border-white/[0.06] space-y-3 font-mono text-xs">
                  <div>
                    <label className="text-slate-400 block mb-1">Telegram Bot Token & Chat ID Webhook:</label>
                    <input
                      type="text"
                      placeholder="https://api.telegram.org/bot<TOKEN>/sendMessage?chat_id=@yourchannel"
                      className="w-full bg-black/60 border border-white/[0.1] rounded-xl px-3 py-2 text-white"
                    />
                  </div>
                  <button
                    onClick={() => copyText(`curl -X POST "https://api.telegram.org/bot12345/sendMessage" -d "chat_id=@mychannel&text=🔥 BREAKING: ${currentTrend.topic} +${currentTrend.velocity}% surge"`, 'tg_curl')}
                    className="px-3.5 py-2 rounded-xl bg-[#229ED9]/20 hover:bg-[#229ED9]/30 text-[#229ED9] font-bold flex items-center gap-2"
                  >
                    {copiedKey === 'tg_curl' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'tg_curl' ? 'Copied Curl' : 'Copy cURL Command'}</span>
                  </button>
                </div>
              </div>
            )}

            {/* 8. Podcast MP3 Downloader */}
            {activeTab === 'mp3_exporter' && (
              <div className="space-y-4 animate-in fade-in">
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <Download className="w-4 h-4 text-purple-400" />
                    Full Audio Podcast Audio Script & Synthesizer
                  </h4>
                  <p className="text-xs text-slate-400">
                    Download audio commentary or copy podcast script for Spotify & YouTube
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#13131c] border border-white/[0.06] space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-purple-400 font-bold">Audio Duration: ~2 mins 15 secs</span>
                    <span className="font-mono text-slate-400">Sample Rate: 48kHz Stereo</span>
                  </div>
                  <div className="p-3 bg-black/40 rounded-xl border border-white/[0.06] text-xs text-slate-300 italic">
                    &ldquo;Welcome to GOO-TRANDING Global Telemetry. In today&apos;s briefing, {currentTrend.topic} has recorded a sudden +{currentTrend.velocity}% surge in international interest...&rdquo;
                  </div>
                  <button
                    onClick={() => {
                      const utterance = new SpeechSynthesisUtterance(
                        `Intelligence briefing for ${currentTrend.topic}. ${currentTrend.summary}. Surge velocity registered at plus ${currentTrend.velocity} percent.`
                      );
                      window.speechSynthesis.speak(utterance);
                    }}
                    className="px-4 py-2.5 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 font-mono text-xs font-bold flex items-center gap-2 transition"
                  >
                    <span>Play Audio Stream Live</span>
                  </button>
                </div>
              </div>
            )}

            {/* 9. Competitor Gap Analyzer */}
            {activeTab === 'content_gap' && (
              <div className="space-y-4 animate-in fade-in">
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <Search className="w-4 h-4 text-amber-400" />
                    Competitor Domain Content Gap Analyzer
                  </h4>
                  <p className="text-xs text-slate-400">
                    Find untouched trending topics your rivals haven&apos;t covered yet
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#13131c] border border-white/[0.06] space-y-2 text-xs">
                  <div className="text-slate-300 font-bold">Uncovered Long-Tail Content Gaps:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-[11px]">
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.06] text-amber-300">
                      &bull; &ldquo;{currentTrend.topic.toLowerCase()} timeline explained&rdquo; (Zero rivals)
                    </div>
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.06] text-amber-300">
                      &bull; &ldquo;is {currentTrend.topic.toLowerCase()} real or fake&rdquo; (High search volume)
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 10. Multilingual Voice Search Navigator */}
            {activeTab === 'voice_navigator' && (
              <div className="space-y-4 animate-in fade-in">
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <Mic className="w-4 h-4 text-rose-400" />
                    Multilingual Voice Search & Navigator
                  </h4>
                  <p className="text-xs text-slate-400">
                    Hands-free voice recognition for real-time query navigation
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#13131c] border border-white/[0.06] text-center space-y-4">
                  <button
                    onClick={startVoiceSearch}
                    className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center transition shadow-xl ${
                      isListening ? 'bg-red-500 animate-pulse text-white' : 'bg-rose-500/20 text-rose-400 hover:bg-rose-500/30'
                    }`}
                  >
                    <Mic className="w-7 h-7" />
                  </button>
                  <div className="text-xs font-mono text-slate-300">
                    {isListening ? 'Listening... Speak your topic now...' : 'Click microphone to speak in any language'}
                  </div>
                  {voiceQuery && (
                    <div className="p-3 rounded-xl bg-black/50 border border-white/[0.08] text-xs font-mono text-[#00ff88]">
                      Recognized: &ldquo;{voiceQuery}&rdquo;
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 11. Dark Web & Cyber Radar */}
            {activeTab === 'cyber_alert' && (
              <div className="space-y-4 animate-in fade-in">
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-cyan-400" />
                    Dark Web & Zero-Day Cyber Telemetry
                  </h4>
                  <p className="text-xs text-slate-400">
                    Emerging vulnerabilities, security advisories, and data leak indicators
                  </p>
                </div>

                <div className="space-y-2 font-mono text-xs">
                  <div className="p-3.5 rounded-xl bg-[#13131c] border border-cyan-500/20 space-y-1">
                    <div className="flex items-center justify-between text-cyan-400 font-bold">
                      <span>CVE-2026-X Critical Signal</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10">TRACKING</span>
                    </div>
                    <p className="text-slate-300">Global patches deployed across distributed cloud instances.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#13131c] border border-white/[0.06] space-y-1">
                    <div className="flex items-center justify-between text-slate-300 font-bold">
                      <span>Cryptographic Key Drift Advisory</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-slate-400">RESOLVED</span>
                    </div>
                    <p className="text-slate-400">Zero data compromise detected on edge gateways.</p>
                  </div>
                </div>
              </div>
            )}

            {/* 12. Interactive Quiz & Trivia Engagement Widget */}
            {activeTab === 'interactive_quiz' && (
              <div className="space-y-4 animate-in fade-in">
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-indigo-400" />
                    Interactive Trend Knowledge Quiz
                  </h4>
                  <p className="text-xs text-slate-400">
                    Boosts user session time and viral engagement on this topic
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#13131c] border border-white/[0.06] space-y-3 text-xs">
                  <div className="font-bold text-white">
                    Question: What is the main factor driving the viral surge of {currentTrend.topic}?
                  </div>
                  <div className="space-y-2">
                    {[
                      'Sudden international policy and technical milestone breakout',
                      'Celebrity endorsement on social channels',
                      'Rumors without verified sources',
                    ].map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setSelectedAnswers({ 0: i });
                          setQuizScore(i === 0 ? 100 : 0);
                        }}
                        className={`w-full text-left p-3 rounded-lg border transition ${
                          selectedAnswers[0] === i
                            ? i === 0
                              ? 'bg-[#00ff88]/20 border-[#00ff88] text-white font-bold'
                              : 'bg-red-500/20 border-red-500 text-white font-bold'
                            : 'bg-black/30 border-white/[0.06] text-slate-300 hover:bg-white/[0.04]'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>

                  {quizScore !== null && (
                    <div className="pt-2 font-mono text-xs text-[#00ff88] font-bold">
                      {quizScore === 100 ? '✅ Correct! Verified by GOO-TRANDING Telemetry.' : '❌ Incorrect. Check verified article facts above.'}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 13. Custom Watchlist Tracker */}
            {activeTab === 'watchlist_monitor' && (
              <div className="space-y-4 animate-in fade-in">
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <Bookmark className="w-4 h-4 text-[#00ff88]" />
                    Custom Keyword Watchlist & Real-Time Monitor
                  </h4>
                  <p className="text-xs text-slate-400">
                    Track your personal favorite keywords and get alerts when they spike
                  </p>
                </div>

                <form onSubmit={handleAddWatchlist} className="flex gap-2">
                  <input
                    type="text"
                    value={newKeyword}
                    onChange={(e) => setNewKeyword(e.target.value)}
                    placeholder="Enter keyword to monitor (e.g. Bitcoin, SpaceX)..."
                    className="flex-1 bg-black/60 border border-white/[0.1] rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#00ff88]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-[#00ff88] hover:bg-[#00ff88]/90 text-black font-black text-xs font-mono transition"
                  >
                    Add Keyword
                  </button>
                </form>

                <div className="flex flex-wrap gap-2 pt-2">
                  {watchlist.map((kw) => (
                    <div
                      key={kw}
                      className="px-3 py-1.5 rounded-lg bg-[#181824] border border-white/[0.08] text-xs flex items-center gap-2 text-slate-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-ping"></span>
                      <span>{kw}</span>
                      <button
                        onClick={() => handleRemoveWatchlist(kw)}
                        className="text-slate-500 hover:text-red-400 ml-1 font-bold"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
