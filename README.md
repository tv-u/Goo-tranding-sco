# GOO-TRANDING — Global Trend AI Publishing & Distribution Engine

Autonomous Global Trend Telemetry → Deduplication & Normalization → Knowledge Grounding → SEO Publishing → Multilingual Multi-Channel Distribution Engine.

---

## 🌟 Key Features

1. **Global Multi-Source Signal Ingestion**:
   - Ingests real-time trends across 7 categories (Technology, Science, World, Business, Entertainment, Sports, Health).
   - Multi-country telemetry filtering across 20+ countries (US, IN, JP, DE, FR, GB, AE, etc.).

2. **Algorithmic 7-Factor Global Trend Score**:
   $$\text{Score} = 30\% \text{ SearchInterest} + 20\% \text{ GrowthVelocity} + 15\% \text{ GlobalReach} + 15\% \text{ Freshness} + 10\% \text{ Confidence} + 5\% \text{ Potential} - 5\% \text{ DuplicatePenalty}$$

3. **Anti-Hallucination & Wikipedia Knowledge Grounding**:
   - Zero-hallucination constraint with fact citations and cross-checked entity validation.
   - Structured timelines, key facts, and country impact analysis.

4. **Strategic SWOT & Horizon Deep-Dive (Gemini 3.8-Flash)**:
   - On-demand AI analysis calculating Strengths, Weaknesses, Opportunities, Threats, and multi-year market horizon.

5. **13-Language Multilingual Engine with RTL Support**:
   - Native support for English, Hindi (हिन्दी), Urdu (اردو), Bengali, Spanish, French, German, Portuguese, Arabic, Japanese, Korean, Chinese, and Russian.

6. **Interactive 60fps Signal Radar Canvas & Interactive Map**:
   - Dynamic HTML5 2D interactive telemetry radar showing high-velocity signal nodes.

7. **Multi-Channel Outbound Distribution Queue**:
   - Automated distribution to Telegram channels, Email digests, and WhatsApp broadcast lists.

8. **SEO & Discovery Engine**:
   - Auto-generated dynamic `sitemap.xml`, `rss.xml`, Schema.org JSON-LD NewsArticle data, and PWA manifest.

---

## 📂 Project Structure

```
├── Dockerfile                  # Multi-stage production container
├── docker-compose.yml          # Container orchestration configuration
├── wrangler.toml               # Cloudflare Workers / Pages configuration
├── schema.sql                  # Complete Cloudflare D1 SQL database schema
├── server.ts                   # Express full-stack API server + Vite middleware
├── .env.example                # Production environment template
├── DEPLOYMENT.md               # Detailed deployment guide (Hindi & English)
├── index.html                  # HTML entry point with OpenGraph & Schema.org JSON-LD
├── public/
│   ├── logo.png                # High-res square emblem insignia
│   ├── icon-192.png            # PWA mobile icon
│   ├── icon-512.png            # PWA splash icon
│   ├── manifest.json           # Web App Manifest
│   └── robots.txt              # Production crawler permissions
└── src/
    ├── App.tsx                 # Main React layout & state orchestrator
    ├── components/             # Reusable UI components
    │   ├── Header.tsx          # Top bar with telemetry & language switcher
    │   ├── LiveHero.tsx        # Top 3 breakout spotlights & regional filters
    │   ├── Top20Leaderboard.tsx# Verified global rank list with factor audit
    │   ├── TrendSignalsMap.tsx # Country-level geographic footprint
    │   ├── TrendRadarCanvas.tsx# 60fps HTML5 canvas signal radar
    │   ├── CategorySection.tsx # Category-wise breakout cards
    │   ├── ArticleReaderModal.tsx # In-depth verified article modal
    │   ├── AutomationPipelineModal.tsx # D1/KV sync logs & cron trigger
    │   ├── DistributionCenterModal.tsx # Telegram/Email/WhatsApp dispatcher
    │   ├── TrendComparisonModal.tsx    # Multi-trend comparison studio
    │   ├── CommandPaletteModal.tsx     # Quick search & shortcut menu (Ctrl+K)
    │   ├── AudioPodcasterDock.tsx      # Ambient voice article narrator
    │   └── Footer.tsx          # Algorithmic disclosure & legal notes
    ├── data/
    │   └── initialData.ts      # Seed data, verified facts & multi-country topics
    ├── i18n/
    │   ├── translations.ts     # 13-language complete dictionary
    │   ├── trendTranslations.ts# Translated trend titles & summaries
    │   ├── articleTranslations.ts# Localized research articles
    │   └── useI18n.ts          # Language hook with direction (LTR/RTL)
    └── types.ts                # TypeScript strict interface definitions
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```
