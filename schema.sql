-- ==============================================================
-- GOO-TRANDING: Cloudflare D1 Relational Database Schema
-- ==============================================================

-- 1. Ingested Global Trends Table
CREATE TABLE IF NOT EXISTS trends (
  id TEXT PRIMARY KEY,
  rank INTEGER NOT NULL,
  topic TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL,
  global_score REAL NOT NULL,
  velocity INTEGER NOT NULL,
  search_volume_est TEXT,
  countries TEXT, -- JSON array of country codes ['US','IN','JP']
  summary TEXT NOT NULL,
  citations_count INTEGER DEFAULT 0,
  status TEXT DEFAULT 'published',
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_trends_slug ON trends(slug);
CREATE INDEX IF NOT EXISTS idx_trends_rank ON trends(rank);
CREATE INDEX IF NOT EXISTS idx_trends_category ON trends(category);
CREATE INDEX IF NOT EXISTS idx_trends_score ON trends(global_score);

-- 2. Structured Articles Table
CREATE TABLE IF NOT EXISTS articles (
  slug TEXT PRIMARY KEY,
  topic TEXT NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  rank INTEGER NOT NULL,
  velocity INTEGER NOT NULL,
  hero_image TEXT,
  hero_image_caption TEXT,
  summary TEXT NOT NULL,
  why_trending TEXT NOT NULL,
  background TEXT NOT NULL,
  what_happened TEXT NOT NULL,
  why_it_matters TEXT NOT NULL,
  global_impact TEXT,
  country_impact TEXT, -- JSON map { "US": "...", "IN": "..." }
  key_facts TEXT, -- JSON array [{ fact, citation, verified }]
  timeline TEXT, -- JSON array [{ time, event, impact }]
  faq TEXT, -- JSON array [{ question, answer }]
  sources TEXT, -- JSON array [{ title, url, domain, type, verified }]
  low_competition_queries TEXT, -- JSON array
  published_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_articles_topic ON articles(topic);
CREATE INDEX IF NOT EXISTS idx_articles_published ON articles(published_at);

-- 3. Multilingual Translations Table
CREATE TABLE IF NOT EXISTS article_translations (
  id TEXT PRIMARY KEY,
  article_slug TEXT NOT NULL,
  language_code TEXT NOT NULL,
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  why_trending TEXT,
  what_happened TEXT,
  why_it_matters TEXT,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(article_slug, language_code),
  FOREIGN KEY (article_slug) REFERENCES articles(slug) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_translations_lang ON article_translations(language_code);

-- 4. Idempotent Sync Audit Logs
CREATE TABLE IF NOT EXISTS sync_runs (
  id TEXT PRIMARY KEY,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
  status TEXT NOT NULL, -- 'COMPLETED', 'FAILED', 'IDEMPOTENT_SKIPPED'
  step TEXT NOT NULL,
  sources_queried INTEGER NOT NULL,
  trends_normalized INTEGER NOT NULL,
  duplicates_removed INTEGER NOT NULL,
  articles_generated INTEGER NOT NULL,
  duration_ms INTEGER NOT NULL,
  notes TEXT
);

-- 5. Multi-Channel Distribution Queue
CREATE TABLE IF NOT EXISTS distribution_queue (
  id TEXT PRIMARY KEY,
  platform TEXT NOT NULL, -- 'Telegram', 'Email', 'WhatsApp'
  channel_name TEXT NOT NULL,
  topic TEXT NOT NULL,
  headline TEXT NOT NULL,
  body_preview TEXT NOT NULL,
  status TEXT DEFAULT 'PENDING', -- 'PENDING', 'QUEUED', 'SENT'
  dispatched_at DATETIME,
  recipients_count TEXT
);

CREATE INDEX IF NOT EXISTS idx_distribution_status ON distribution_queue(status);
