export type TrendCategory =
  | 'All'
  | 'Technology'
  | 'World'
  | 'Business'
  | 'Entertainment'
  | 'Science'
  | 'Sports'
  | 'Health';

export interface ScoreBreakdown {
  search_interest: number;    // 30%
  growth_velocity: number;    // 20%
  global_reach: number;       // 15%
  freshness: number;          // 15%
  source_confidence: number;  // 10%
  content_potential: number;  // 5%
  duplicate_penalty: number;  // 5% penalty
}

export interface TrendItem {
  id: string;
  rank: number;
  topic: string;
  category: Exclude<TrendCategory, 'All'>;
  global_score: number;
  breakdown: ScoreBreakdown;
  velocity: number;            // e.g. 248 for +248%
  search_volume_est: string;   // e.g. "850K+ signals"
  countries: string[];         // e.g. ["US", "IN", "JP", "GB"]
  summary: string;
  slug: string;
  updated_at: string;
  sparkline: number[];
  citations_count: number;
  status: 'live' | 'analyzed' | 'published';
  is_verified_fact: boolean;
}

export interface KeyFact {
  fact: string;
  citation: string;
  verified: boolean;
}

export interface TimelineEntry {
  time: string;
  event: string;
  impact: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SourceReference {
  title: string;
  url: string;
  domain: string;
  type: 'wikipedia' | 'search_grounding' | 'official' | 'news';
  verified: boolean;
}

export interface LowCompetitionQuery {
  query: string;
  intent: 'informational' | 'question' | 'long-tail' | 'commercial';
  opportunity_score: number; // 0 - 100
  potential: 'High Gap' | 'Medium Gap' | 'Breakout';
}

export interface ArticleTranslation {
  title: string;
  summary: string;
  why_trending: string;
  what_happened: string;
  why_it_matters: string;
  background?: string;
  global_impact?: string;
  key_facts?: KeyFact[];
  timeline?: TimelineEntry[];
  faq?: FAQItem[];
  country_impact?: Record<string, string>;
  low_competition_queries?: LowCompetitionQuery[];
}

export interface Article {
  slug: string;
  topic: string;
  title: string;
  category: Exclude<TrendCategory, 'All'>;
  rank: number;
  published_at: string;
  updated_at: string;
  velocity: number;
  hero_image: string;
  hero_image_caption: string;
  summary: string;
  why_trending: string;
  background: string;
  what_happened: string;
  why_it_matters: string;
  key_facts: KeyFact[];
  timeline: TimelineEntry[];
  global_impact: string;
  country_impact: Record<string, string>;
  faq: FAQItem[];
  sources: SourceReference[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    canonical: string;
  };
  low_competition_queries: LowCompetitionQuery[];
  translations: Record<string, ArticleTranslation>;
}

export interface SyncRunLog {
  id: string;
  timestamp: string;
  status: 'COMPLETED' | 'RUNNING' | 'FAILED' | 'IDEMPOTENT_SKIPPED';
  step: string;
  sources_queried: number;
  trends_normalized: number;
  duplicates_removed: number;
  articles_generated: number;
  duration_ms: number;
  notes: string;
}

export interface DistributionQueueItem {
  id: string;
  platform: 'Telegram' | 'Email' | 'WhatsApp';
  channel_name: string;
  topic: string;
  headline: string;
  body_preview: string;
  status: 'SENT' | 'QUEUED' | 'PENDING';
  dispatched_at?: string;
  recipients_count?: string;
}

export interface SupportedLanguage {
  code: string;
  name: string;
  native_name: string;
  flag: string;
  country_match: string[];
}

export interface RadarCity {
  id: string;
  name: string;
  country: string;
  flag: string;
  x: number; // percentage 0 - 100
  y: number; // percentage 0 - 100
  signalStrength: number; // 0 - 100
  topTopic: string;
  velocity: number;
  category: TrendCategory;
  slug: string;
}

export interface DeepDiveAnalysis {
  strategicTakeaways: string[];
  swot: {
    strengths: string[];
    weaknesses: string[];
    opportunities: string[];
    threats: string[];
  };
  marketImplications: {
    bullCase: string;
    bearCase: string;
    timelineHorizon: string;
  };
  generatedAt: string;
}

