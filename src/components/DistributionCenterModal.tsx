import React, { useState } from 'react';
import {
  X,
  Share2,
  Send,
  Mail,
  MessageCircle,
  Copy,
  Check,
  CheckCircle2,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { DistributionQueueItem, TrendItem } from '../types';
import { useI18n } from '../i18n/useI18n';

interface DistributionCenterModalProps {
  onClose: () => void;
  queueItems: DistributionQueueItem[];
  topTrends: TrendItem[];
  onDispatchTest: (platform: 'Telegram' | 'Email' | 'WhatsApp') => void;
  currentLangCode?: string;
}

export const DistributionCenterModal: React.FC<DistributionCenterModalProps> = ({
  onClose,
  queueItems,
  topTrends,
  onDispatchTest,
  currentLangCode = 'en',
}) => {
  const { t, getLocalizedTrend } = useI18n(currentLangCode);
  const [activePlatform, setActivePlatform] = useState<'telegram' | 'email' | 'whatsapp'>('telegram');
  const [copiedText, setCopiedText] = useState(false);
  const [dispatchedNotice, setDispatchedNotice] = useState<string | null>(null);

  const locTopTrends = topTrends.map(getLocalizedTrend);

  const handleDispatch = (platform: 'Telegram' | 'Email' | 'WhatsApp') => {
    onDispatchTest(platform);
    setDispatchedNotice(`Dispatched to ${platform} network! Broadcast logged in queue.`);
    setTimeout(() => setDispatchedNotice(null), 3500);
  };

  // Generate Telegram broadcast template
  const telegramDigest = `🔥 *GOO-TRANDING DAILY GLOBAL DIGEST*
📅 ${new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}

Top 10 Global Trends Ingested & Verified:

${locTopTrends
  .slice(0, 10)
  .map((tItem, idx) => `${idx + 1}. *${tItem.topic}* (↑ ${tItem.velocity}%)\n   🌐 Score: ${tItem.global_score}/100 | ${tItem.category}\n   🔗 https://goo-tranding.com/trends/${tItem.slug}`)
  .join('\n\n')}

⚡️ Ingested across Google Trends, Wikipedia & Grounding Feeds
Read all Top 20 Analysis: https://goo-tranding.com`;

  // Generate WhatsApp broadcast text
  const whatsappDigest = `🔥 *GOO-TRANDING TODAY'S TOP 5 BREAKING TRENDS*

1️⃣ *${locTopTrends[0]?.topic || topTrends[0]?.topic}* (+${locTopTrends[0]?.velocity || topTrends[0]?.velocity}%)
${locTopTrends[0]?.summary || topTrends[0]?.summary}
🔗 https://goo-tranding.com/trends/${locTopTrends[0]?.slug || topTrends[0]?.slug}

2️⃣ *${locTopTrends[1]?.topic || topTrends[1]?.topic}* (+${locTopTrends[1]?.velocity || topTrends[1]?.velocity}%)
${locTopTrends[1]?.summary || topTrends[1]?.summary}
🔗 https://goo-tranding.com/trends/${locTopTrends[1]?.slug || topTrends[1]?.slug}

3️⃣ *${locTopTrends[2]?.topic || topTrends[2]?.topic}* (+${locTopTrends[2]?.velocity || topTrends[2]?.velocity}%)
${locTopTrends[2]?.summary || topTrends[2]?.summary}
🔗 https://goo-tranding.com/trends/${locTopTrends[2]?.slug || topTrends[2]?.slug}

Read all Top 20: https://goo-tranding.com`;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-lg flex justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#0e0e14] border border-white/[0.1] rounded-2xl shadow-2xl overflow-hidden my-auto text-slate-200">
        {/* Modal Header */}
        <div className="bg-[#12121a] border-b border-white/[0.08] px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#00ff88]/15 border border-[#00ff88]/30 text-[#00ff88]">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                Automated Distribution Hub
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00ff88]/15 text-[#00ff88] font-bold">
                  Multi-Channel
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Auto-formatted broadcasts for Telegram Channels, Email Digests & WhatsApp Business
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#181824] border border-white/[0.08] text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live Dispatch Notification Banner */}
        {dispatchedNotice && (
          <div className="bg-[#00ff88]/15 border-b border-[#00ff88]/30 px-6 py-2.5 text-xs font-mono text-[#00ff88] flex items-center gap-2 animate-in fade-in">
            <Check className="w-4 h-4 shrink-0" />
            <span>{dispatchedNotice}</span>
          </div>
        )}

        {/* Platform Tabs */}
        <div className="flex items-center gap-2 px-4 sm:px-6 pt-3 border-b border-white/[0.06] bg-[#101016]">
          <button
            onClick={() => setActivePlatform('telegram')}
            className={`px-3 py-2 text-xs font-medium border-b-2 transition flex items-center gap-1.5 ${
              activePlatform === 'telegram'
                ? 'border-[#229ED9] text-[#229ED9] font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Send className="w-3.5 h-3.5" />
            Telegram Channel
          </button>
          <button
            onClick={() => setActivePlatform('email')}
            className={`px-3 py-2 text-xs font-medium border-b-2 transition flex items-center gap-1.5 ${
              activePlatform === 'email'
                ? 'border-[#ff0080] text-[#ff0080] font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            Email Newsletter
          </button>
          <button
            onClick={() => setActivePlatform('whatsapp')}
            className={`px-3 py-2 text-xs font-medium border-b-2 transition flex items-center gap-1.5 ${
              activePlatform === 'whatsapp'
                ? 'border-[#25D366] text-[#25D366] font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <MessageCircle className="w-3.5 h-3.5" />
            WhatsApp Community
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-6 max-h-[70vh] overflow-y-auto space-y-4">
          {activePlatform === 'telegram' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  LIVE TELEGRAM CHANNEL BROADCAST PREVIEW
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(telegramDigest)}
                    className="px-3 py-1.5 rounded-lg bg-[#181822] hover:bg-[#20202e] text-xs font-medium text-slate-300 transition flex items-center gap-1.5 border border-white/[0.06]"
                  >
                    {copiedText ? <Check className="w-3.5 h-3.5 text-[#00ff88]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedText ? 'Copied Markdown!' : 'Copy Formatted Text'}</span>
                  </button>

                  <button
                    onClick={() => handleDispatch('Telegram')}
                    className="px-3 py-1.5 rounded-lg bg-[#229ED9] hover:bg-[#229ED9]/90 text-xs font-bold text-white transition flex items-center gap-1.5 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Dispatch to Telegram</span>
                  </button>
                </div>
              </div>

              <div className="bg-[#08080c] border border-white/[0.08] rounded-xl p-4 sm:p-5 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed max-h-96 overflow-y-auto">
                {telegramDigest}
              </div>
            </div>
          )}

          {activePlatform === 'email' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  DAILY HTML NEWSLETTER PREVIEW
                </span>
                <button
                  onClick={() => handleDispatch('Email')}
                  className="px-3 py-1.5 rounded-lg bg-[#ff0080] hover:bg-[#ff0080]/90 text-xs font-bold text-white transition flex items-center gap-1.5 shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Test Email</span>
                </button>
              </div>

              <div className="bg-white text-slate-900 rounded-xl p-6 space-y-4 font-sans max-h-96 overflow-y-auto">
                <div className="border-b pb-4">
                  <div className="text-xs font-bold text-[#ff0080] uppercase tracking-wider font-mono">
                    GOO-TRANDING MORNING DISPATCH
                  </div>
                  <h3 className="text-xl font-black mt-1">
                    Today&apos;s Top 20 Global Signals Grounded in Fact
                  </h3>
                  <div className="text-xs text-slate-500 mt-1">
                    Delivered to 142,300 subscribed analysts and leaders.
                  </div>
                </div>

                <div className="space-y-3">
                  {topTrends.slice(0, 4).map((t) => (
                    <div key={t.id} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold font-mono text-slate-500">#{t.rank} {t.category}</span>
                        <span className="text-xs font-bold text-emerald-600 font-mono">+{t.velocity}%</span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 mt-0.5">{t.topic}</h4>
                      <p className="text-xs text-slate-600 mt-1">{t.summary}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activePlatform === 'whatsapp' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  WHATSAPP COMMUNITY BROADCAST PREVIEW
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(whatsappDigest)}
                    className="px-3 py-1.5 rounded-lg bg-[#181822] hover:bg-[#20202e] text-xs font-medium text-slate-300 transition flex items-center gap-1.5 border border-white/[0.06]"
                  >
                    {copiedText ? <Check className="w-3.5 h-3.5 text-[#00ff88]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedText ? 'Copied' : 'Copy'}</span>
                  </button>

                  <button
                    onClick={() => handleDispatch('WhatsApp')}
                    className="px-3 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#25D366]/90 text-xs font-bold text-white transition flex items-center gap-1.5 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Dispatch to Queue</span>
                  </button>

                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(whatsappDigest)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#181824] hover:bg-[#222234] border border-white/[0.1] text-xs font-bold text-[#25D366] transition flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open Web</span>
                  </a>
                </div>
              </div>

              <div className="bg-[#0b141a] border border-[#25D366]/20 rounded-xl p-4 sm:p-5 font-mono text-xs text-slate-200 whitespace-pre-wrap leading-relaxed max-h-96 overflow-y-auto">
                {whatsappDigest}
              </div>
            </div>
          )}

          {/* Active Queue Status */}
          <div className="pt-4 border-t border-white/[0.06]">
            <div className="text-xs font-mono text-slate-400 uppercase mb-2">
              DISPATCH QUEUE HISTORY
            </div>
            <div className="divide-y divide-white/[0.04] bg-[#12121a] rounded-xl border border-white/[0.06] overflow-hidden">
              {queueItems.map((item) => (
                <div key={item.id} className="p-3 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-semibold text-white">{item.headline}</div>
                    <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                      {item.channel_name} · {item.platform}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-[10px] text-[#00ff88] bg-[#00ff88]/10 px-2 py-0.5 rounded font-bold">
                      {item.status}
                    </span>
                    <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                      {item.recipients_count || 'Pending'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
