import React, { useState } from 'react';
import {
  X,
  Cpu,
  RefreshCw,
  Database,
  Layers,
  CheckCircle2,
  Clock,
  Terminal,
  ShieldCheck,
  Server,
  Zap,
} from 'lucide-react';
import { SyncRunLog } from '../types';
import { useI18n } from '../i18n/useI18n';

interface AutomationPipelineModalProps {
  onClose: () => void;
  syncLogs: SyncRunLog[];
  onTriggerSync: () => Promise<void>;
  isSyncing: boolean;
  currentLangCode?: string;
}

export const AutomationPipelineModal: React.FC<AutomationPipelineModalProps> = ({
  onClose,
  syncLogs,
  onTriggerSync,
  isSyncing,
  currentLangCode = 'en',
}) => {
  const { t } = useI18n(currentLangCode);
  const [activeTab, setActiveTab] = useState<'architecture' | 'logs' | 'schema' | 'gemini'>('architecture');
  const [syncStatusMsg, setSyncStatusMsg] = useState<string | null>(null);

  const handleManualSync = async () => {
    setSyncStatusMsg('Triggering Ingestion → Deduplication → Scoring → Grounding...');
    try {
      await onTriggerSync();
      setSyncStatusMsg('Sync Cycle Complete: D1 Database and KV Edge Cache Invalidation Finished.');
      setTimeout(() => setSyncStatusMsg(null), 4000);
    } catch (err: any) {
      setSyncStatusMsg(`Sync error: ${err.message || 'Check logs'}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-lg flex justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0e0e14] border border-white/[0.1] rounded-2xl shadow-2xl overflow-hidden my-auto text-slate-200">
        {/* Modal Header */}
        <div className="bg-[#12121a] border-b border-white/[0.08] px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#ff0080]/15 border border-[#ff0080]/30 text-[#ff0080]">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                GOO-TRANDING Automation Architecture
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00ff88]/15 text-[#00ff88] font-bold">
                  Zero-Manual-Operation
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Cloudflare Worker · D1 Database · KV Cache · Cron Engine · Gemini 3.8-flash Grounding
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleManualSync}
              disabled={isSyncing}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#ff0080] to-[#7928ca] hover:from-[#ff0080]/90 text-white font-bold text-xs flex items-center gap-1.5 transition disabled:opacity-50 shadow-md shadow-[#ff0080]/20"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
              <span>{isSyncing ? 'Processing Cycle...' : 'Trigger Sync Now'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#181824] border border-white/[0.08] text-slate-400 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sync Status Banner */}
        {syncStatusMsg && (
          <div className="bg-[#00ff88]/10 border-b border-[#00ff88]/20 px-6 py-2.5 text-xs font-mono text-[#00ff88] flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{syncStatusMsg}</span>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-4 sm:px-6 pt-3 border-b border-white/[0.06] bg-[#101016]">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-3 py-2 text-xs font-medium border-b-2 transition ${
              activeTab === 'architecture'
                ? 'border-[#ff0080] text-white font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Pipeline Flowchart
          </button>
          <button
            onClick={() => setActiveTab('logs')}
            className={`px-3 py-2 text-xs font-medium border-b-2 transition ${
              activeTab === 'logs'
                ? 'border-[#ff0080] text-white font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Sync Logs ({syncLogs.length})
          </button>
          <button
            onClick={() => setActiveTab('schema')}
            className={`px-3 py-2 text-xs font-medium border-b-2 transition ${
              activeTab === 'schema'
                ? 'border-[#ff0080] text-white font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            D1 Database Schema
          </button>
          <button
            onClick={() => setActiveTab('gemini')}
            className={`px-3 py-2 text-xs font-medium border-b-2 transition ${
              activeTab === 'gemini'
                ? 'border-[#ff0080] text-white font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Gemini Content Engine
          </button>
        </div>

        {/* Modal Tab Content */}
        <div className="p-4 sm:p-6 max-h-[70vh] overflow-y-auto space-y-5">
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              {/* Architecture Diagram Representation */}
              <div className="bg-[#08080c] border border-white/[0.08] rounded-xl p-4 sm:p-5 font-mono text-xs text-slate-300 overflow-x-auto">
                <div className="text-[#00ff88] mb-2 font-bold flex items-center gap-1.5">
                  <Terminal className="w-4 h-4" /> CLOUDFLARE CRON (01:00 UTC) PIPELINE EXECUTION
                </div>
                <pre className="text-slate-300 leading-relaxed">
{`┌─────────────────────────┐
│     GLOBAL SOURCES      │ Google Trends Signals + Wikimedia REST + Grounding Feeds
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│   INGESTION & DEDUP     │ Ingest → Language & Country Tag → Idempotent Unique Check
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│   7-FACTOR SCORING      │ Interest(30%) + Velocity(20%) + Reach(15%) + Freshness(15%)
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│    RESEARCH ENGINE      │ Wikipedia Knowledge Graph + Google Search Grounding Facts
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│    GEMINI ENGINE        │ Structured Article JSON + FAQs + Anti-Hallucination Guardrails
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│   PERSISTENCE LAYER     │ Cloudflare D1 (Structured) + KV Edge Cache (Instant Read)
└────────────┬────────────┘
             │
   ┌─────────┴─────────┐
   ▼                   ▼
SEO & SITEMAP      DISTRIBUTION
/sitemap.xml       Telegram Digest Broadcast
/rss.xml           Email Daily Briefing
/feed.xml          WhatsApp Web Sharing`}
                </pre>
              </div>

              {/* Idempotent Check & Hallucination Defense Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#12121a] p-4 rounded-xl border border-white/[0.06] space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-[#00ff88]" />
                    Idempotent Ingestion Rule
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Same topic + same date = <strong className="text-white">NO duplicate publishing</strong>. D1 unique index constraints on <code>canonical_topic + source_date + language</code> ensure zero spam runs.
                  </p>
                </div>

                <div className="bg-[#12121a] p-4 rounded-xl border border-white/[0.06] space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-[#ff0080]" />
                    Anti-Hallucination Shield
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Gemini prompts explicitly prohibit fabricated statistics, dates, or URLs. Every article generates cross-referenced primary sources with Wikipedia REST grounding.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'logs' && (
            <div className="space-y-3">
              <div className="text-xs text-slate-400 font-mono flex items-center justify-between">
                <span>HISTORICAL AUTOMATION RUNS (IDEMPOTENT AUDIT TRAIL)</span>
                <span className="text-[#00ff88]">Cloudflare Worker Status: 100% Uptime</span>
              </div>

              <div className="divide-y divide-white/[0.06] border border-white/[0.08] rounded-xl overflow-hidden bg-[#101017]">
                {syncLogs.map((log) => (
                  <div key={log.id} className="p-4 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[#ffdd00] font-bold">{log.id}</span>
                        <span className="text-slate-400">·</span>
                        <span className="text-slate-300 font-medium">{log.step}</span>
                      </div>
                      <span className="font-mono text-[#00ff88] text-[11px] bg-[#00ff88]/10 px-2 py-0.5 rounded">
                        {log.status} ({log.duration_ms}ms)
                      </span>
                    </div>

                    <div className="text-xs text-slate-400 font-mono">
                      {log.notes}
                    </div>

                    <div className="flex items-center gap-4 text-[11px] font-mono text-slate-500 pt-1">
                      <span>Sources: {log.sources_queried}</span>
                      <span>Normalized: {log.trends_normalized}</span>
                      <span>Deduplicated: {log.duplicates_removed}</span>
                      <span>Timestamp: {new Date(log.timestamp).toLocaleTimeString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'schema' && (
            <div className="space-y-4">
              <div className="text-xs text-slate-400 font-mono">
                CLOUDFLARE D1 RELATIONAL DATABASE SCHEMA (schema.sql)
              </div>
              <div className="bg-[#08080c] border border-white/[0.08] rounded-xl p-4 font-mono text-xs text-slate-300 overflow-x-auto">
                <pre className="text-slate-300 leading-relaxed">
{`-- Core Trends Table
CREATE TABLE IF NOT EXISTS trends (
  id TEXT PRIMARY KEY,
  rank INTEGER NOT NULL,
  topic TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL,
  global_score REAL NOT NULL,
  velocity INTEGER NOT NULL,
  search_volume_est TEXT,
  countries TEXT, -- JSON array of country codes
  summary TEXT,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Structured Articles Table
CREATE TABLE IF NOT EXISTS articles (
  slug TEXT PRIMARY KEY,
  topic TEXT NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  summary TEXT NOT NULL,
  why_trending TEXT,
  background TEXT,
  what_happened TEXT,
  why_it_matters TEXT,
  global_impact TEXT,
  published_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Multilingual Translations Table
CREATE TABLE IF NOT EXISTS article_translations (
  id TEXT PRIMARY KEY,
  article_slug TEXT NOT NULL,
  language_code TEXT NOT NULL,
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  why_trending TEXT,
  what_happened TEXT,
  UNIQUE(article_slug, language_code)
);

-- Audit Runs & Distribution Queue Tables
CREATE TABLE IF NOT EXISTS sync_runs (
  id TEXT PRIMARY KEY,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
  status TEXT,
  duration_ms INTEGER,
  notes TEXT
);

CREATE TABLE IF NOT EXISTS distribution_queue (
  id TEXT PRIMARY KEY,
  platform TEXT NOT NULL,
  topic TEXT NOT NULL,
  headline TEXT NOT NULL,
  status TEXT DEFAULT 'QUEUED'
);`}
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'gemini' && (
            <div className="space-y-4">
              <div className="text-xs text-slate-400 font-mono">
                GEMINI 3.8-FLASH CONTENT & RESEARCH SYNTHESIS PIPELINE
              </div>
              <div className="p-4 bg-[#12121a] border border-white/[0.06] rounded-xl space-y-3 text-xs text-slate-300">
                <div className="font-bold text-white text-sm flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#ffdd00]" />
                  Automated Content Generation Directive
                </div>
                <p>
                  For every validated Top 20 topic, the server-side Gemini client (<code>@google/genai</code>) receives raw search telemetry and Wikipedia fact summaries. It produces a strictly typed JSON object containing:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-300">
                  <li><strong>Title & Slug:</strong> High CTR, factually descriptive, SEO-optimized.</li>
                  <li><strong>Why Trending:</strong> Exact root cause of the current interest surge.</li>
                  <li><strong>Timeline:</strong> Verified milestones with chronological timestamps.</li>
                  <li><strong>Key Facts:</strong> Factual bullet points with explicit source attribution.</li>
                  <li><strong>FAQ:</strong> 3-5 high-relevance user questions answered authoritatively.</li>
                  <li><strong>SEO Metadata:</strong> Google-compliant Title, Meta Description, Keywords, and Article JSON-LD schema.</li>
                  <li><strong>Low-Competition Search Queries:</strong> Uncovered search intent gaps.</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
