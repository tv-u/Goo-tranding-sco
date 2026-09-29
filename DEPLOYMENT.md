# GOO-TRANDING — Complete Production Deployment Guide
# प्रोडक्शन डिप्लॉयमेंट गाइड (Hindi & English)

यह दस्तावेज़ **GOO-TRANDING** प्लेटफॉर्म को लाइव प्रोडक्शन सर्वर, क्लाउडफ्लेयर (Cloudflare Workers / Pages), डॉकर (Docker), और वीपीएस (VPS) पर डिप्लॉय करने की पूरी गाइड प्रदान करता है।

---

## 🚀 1. Quick Start (स्थानीय विकास और परीक्षण)

```bash
# 1. रिपॉजिटरी इंस्टॉल करें
npm install

# 2. पर्यावरण फाइल सेटअप करें
cp .env.example .env
# .env फाइल में अपनी GEMINI_API_KEY डालें

# 3. डेवलपमेंट सर्वर शुरू करें (Express + Vite)
npm run dev
# ब्राउज़र में खोलें: http://localhost:3000
```

---

## 🌐 2. Cloudflare Pages / Workers Deployment (D1 + KV Architecture)

GOO-TRANDING को विशेष रूप से **Cloudflare D1 (SQL)** और **Cloudflare KV (Edge Cache)** के साथ स्केल करने के लिए डिज़ाइन किया गया है।

### स्टेप 1: Wrangler CLI लॉगिन
```bash
npm install -g wrangler
wrangler login
```

### स्टेप 2: D1 रिलेशनल डेटाबेस बनाएं
```bash
wrangler d1 create goo_tranding_db
# आउटपुट में मिली database_id को wrangler.toml में पेस्ट करें
```

### स्टेप 3: डेटाबेस स्कीमा माइग्रेट करें
```bash
wrangler d1 execute goo_tranding_db --file=./schema.sql
```

### स्टेप 4: KV नेमस्पेस बनाएं (अल्ट्रा-फास्ट रिस्पॉन्स के लिए)
```bash
wrangler kv namespace create "goo_tranding_cache"
# आउटपुट में मिली kv id को wrangler.toml में पेस्ट करें
```

### स्टेप 5: प्रोडक्शन बिल्ड और डिप्लॉय
```bash
npm run build
wrangler deploy
```

---

## 🐳 3. Docker Production Deployment (AWS / GCP / DigitalOcean)

### सिंगल कमांड से डॉकर चलाएं:
```bash
docker compose up -d --build
```

### मैन्युअल डॉकर बिल्ड और रन:
```bash
# इमेज बिल्ड करें
docker build -t goo-tranding:latest .

# कंटेनर चलाएं
docker run -d \
  --name goo_tranding_live \
  -p 3000:3000 \
  -e NODE_ENV=production \
  -e GEMINI_API_KEY="your_gemini_key_here" \
  --restart unless-stopped \
  goo-tranding:latest
```

---

## ⏰ 4. Hourly Automated Sync Cron (स्वचालित क्रॉन जॉब)

GOO-TRANDING हर 1 घंटे में नए ट्रेंड्स को इनजेस्ट, नॉर्मलाइज, और पब्लिश करता है:

### लिनक्स क्रॉनटैब (`crontab -e`):
```cron
# हर घंटे के 0वें मिनट पर स्वचालित सिंक चलाएं
0 * * * * curl -X POST http://localhost:3000/api/internal/sync -H "Content-Type: application/json" > /dev/null 2>&1
```

### Cloudflare Cron Triggers:
`wrangler.toml` में पहले से कॉन्फ़िगर किया गया है:
```toml
[triggers]
crons = ["0 * * * *"]
```

---

## 🛡️ 5. Production API Reference (प्रमुख एंडपॉइंट्स)

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | सिस्टम हेल्थ, अपटाइम, और डेटाबेस स्टेटस |
| `GET` | `/api/status` | प्रोडक्शन इंजन मेट्रिक्स और सिंक हिस्ट्री |
| `GET` | `/api/trending` | सभी सक्रिय ट्रेंड्स स्कोर और स्पार्कलाइन के साथ |
| `GET` | `/api/trending/top20` | सत्यापित ग्लोबल टॉप 20 लीडरबोर्ड |
| `GET` | `/api/article/:slug` | डीप-डाइव स्ट्रक्चर्ड रिसर्च आर्टिकल |
| `GET` | `/api/search?q=...` | इंस्टेंट सर्च (मल्टीलिंगुअल) |
| `POST` | `/api/internal/sync` | आइडम्पोटेंट सिंक ट्रिगर (डी-डुप्लीकेशन + स्कोरिंग) |
| `POST` | `/api/internal/generate` | जेमिनी 3.8-फ़्लैश ऑटोमेटेड आर्टिकल जनरेटर |
| `POST` | `/api/internal/generate-deep-dive` | सामरिक SWOT और होराइजन इंटेलिजेंस |
| `POST` | `/api/internal/distribute` | टेलीग्राम / ईमेल / व्हाट्सएप वितरण कतार |
| `GET` | `/sitemap.xml` | गूगल सर्च कंसोल के लिए डायनेमिक साइटमैप |
| `GET` | `/rss.xml` | आरएसएस न्यूज़ एग्रीगेटर फीड |

---

## 🌍 6. Multi-Language Engine (13 समर्थित भाषाएं)
- **English (en)**
- **Hindi (hi - हिन्दी)**
- **Urdu (ur - اردو)**
- **Bengali (bn - বাংলা)**
- **Spanish (es - Español)**
- **French (fr - Français)**
- **German (de - Deutsch)**
- **Portuguese (pt - Português)**
- **Arabic (ar - العربية)**
- **Japanese (ja - 日本語)**
- **Korean (ko - 한국어)**
- **Chinese (zh - 中文)**
- **Russian (ru - Русский)**
