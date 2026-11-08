# EuropiaTech — European Tech Analysis Blog

> Independent tech publication focused on European AI innovation, sovereign infrastructure, and deep tech analysis.

**Live:** [europiatech.eu](https://europiatech.eu)

![Next.js](https://img.shields.io/badge/Next.js-16.4-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)
![n8n](https://img.shields.io/badge/Automation-n8n-orange)

---

## 🎯 Project Overview

EuropiaTech is a fully automated tech blog built with modern web technologies. The project demonstrates:

- **Full-stack Next.js 16** application with App Router
- **Automated content pipeline** using n8n + AI (Groq API)
- **API-driven publishing** with GitHub integration
- **Newsletter system** with MailerLite
- **Modern UI/UX** with Framer Motion animations

---

## ✨ Key Features

### For Recruiters & Product Managers

| Feature | Description |
|---------|-------------|
| 🤖 **AI-Powered Content** | Automated article generation from RSS feeds using Groq LLM |
| 📱 **Discord Approval Flow** | Human-in-the-loop review before publishing |
| 📧 **Newsletter Integration** | MailerLite subscription with group segmentation |
| 🔄 **CI/CD Pipeline** | Automatic deployment on Vercel |
| 📊 **Dynamic Content** | Article counts and stats update automatically |

### For Developers

| Technology | Implementation |
|------------|----------------|
| **Framework** | Next.js 16 (App Router, Turbopack) |
| **Language** | TypeScript (strict mode) |
| **Styling** | Tailwind CSS v4 + CSS Custom Properties |
| **Animations** | Framer Motion (scroll-triggered, parallax) |
| **API Routes** | REST endpoints for article publishing |
| **Automation** | n8n workflows (self-hosted) |
| **AI/LLM** | Groq API (GPT-OSS-120B) |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        CONTENT PIPELINE                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   RSS Feeds ──► n8n ──► Groq AI ──► Discord ──► API ──► GitHub  │
│   (3 sources)   │      (generate)   (approve)   │      (commit)  │
│                 │                               │                │
│                 └── Filter by keywords ─────────┘                │
│                     (AI, Europe, Security...)                    │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│                        FRONTEND                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   Next.js 16 ◄── Vercel ◄── GitHub (auto-deploy on push)        │
│       │                                                          │
│       ├── /                    (Homepage + Bento Grid)           │
│       ├── /articles            (All articles listing)            │
│       ├── /articles/[slug]     (Article detail page)             │
│       ├── /press               (Press kit + Brand assets)        │
│       ├── /api/articles        (Publish API endpoint)            │
│       └── /api/subscribe       (Newsletter registration)         │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🔧 Technical Highlights

### API-Driven Article Publishing

```typescript
// POST /api/articles
// Receives article from n8n, converts Markdown to HTML, commits to GitHub

const article = await request.json();

// Auto-convert Markdown to HTML
if (article.content.includes('##')) {
  htmlContent = await marked.parse(article.content);
}

// Commit via GitHub API
await fetch(`https://api.github.com/repos/.../contents/...`, {
  method: 'PUT',
  body: JSON.stringify({ content: base64(updatedFile), sha, branch })
});
```

### n8n Automation Workflow

```
RSS Feed Trigger (MIT Tech Review)  ─┐
RSS Feed Trigger (TechCrunch EU)    ─┼─► Merge ─► Code Filter ─► Limit(1)
RSS Feed Trigger (Ars Technica)     ─┘              │
                                                    ▼
                                           HTTP Request (Groq)
                                                    │
                                                    ▼
                                            Edit Fields (JSON parse)
                                                    │
                                                    ▼
                                           Discord (Send & Wait)
                                                    │
                                          ┌────────┴────────┐
                                          ▼                 ▼
                                      Approved           Rejected
                                          │                 │
                                          ▼                 ▼
                                   HTTP Request          (stop)
                                   (Publish API)
```

### Design System

- **Brutalist aesthetic** with nuanced color palette
- **Bento Grid layouts** for visual hierarchy
- **Glassmorphism** cards with backdrop blur
- **Scroll-triggered animations** via Framer Motion
- **Fully responsive** (mobile-first approach)

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── articles/route.ts    # Article publishing API
│   │   └── subscribe/route.ts   # Newsletter subscription
│   ├── articles/
│   │   ├── page.tsx             # All articles listing
│   │   └── [slug]/page.tsx      # Article detail
│   ├── press/page.tsx           # Press kit
│   ├── legal/page.tsx           # Legal pages
│   └── page.tsx                 # Homepage
├── components/
│   ├── Hero.tsx                 # Landing hero section
│   ├── ArticlesGrid.tsx         # Bento grid for articles
│   ├── Navigation.tsx           # Header with mobile menu
│   ├── Newsletter.tsx           # Email subscription form
│   └── Footer.tsx               # Site footer
├── lib/
│   └── articles.ts              # Articles data store
└── styles/
    └── globals.css              # Design system & Tailwind
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/cosmos510/blog-tech.git
cd blog-tech

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your API keys

# Run development server
npm run dev
```

### Environment Variables

```env
# Newsletter (MailerLite)
MAILERLITE_API_KEY=your_api_key
MAILERLITE_GROUP_ID=your_group_id

# Article Publishing API
ARTICLES_API_KEY=your_secret_key
GITHUB_TOKEN=your_github_pat
GITHUB_REPO_OWNER=your_username
GITHUB_REPO_NAME=blog-tech
GITHUB_BRANCH=main
```

---

## 🤖 Automation Setup (n8n)

### Required Services

1. **n8n** (self-hosted via Docker or n8n Cloud)
2. **Groq API** account (free tier available)
3. **Discord Bot** with message permissions

### Groq API Configuration

```json
{
  "model": "openai/gpt-oss-120b",
  "messages": [...],
  "max_tokens": 4000,
  "temperature": 0.3
}
```

### RSS Feeds Used

- MIT Technology Review (AI)
- TechCrunch Europe
- Ars Technica

---

## 📈 Performance

- **Lighthouse Score:** 95+ (Performance, Accessibility, SEO)
- **Build Time:** ~3 seconds (Turbopack)
- **Static Generation:** Articles pre-rendered at build time
- **Edge Caching:** Vercel CDN for global distribution

---

## 🛠️ Tech Stack Summary

| Category | Technology |
|----------|------------|
| Frontend | Next.js 16, React 19, TypeScript |
| Styling | Tailwind CSS v4, CSS Custom Properties |
| Animation | Framer Motion |
| Deployment | Vercel (auto-deploy) |
| Newsletter | MailerLite API |
| Automation | n8n (self-hosted) |
| AI/LLM | Groq API (GPT-OSS-120B) |
| Version Control | GitHub |

---

## 👤 Author

**Maxime Martin**  
Senior Software Engineer  

- LinkedIn: [linkedin.com/in/maxime-martin-090731aa](https://www.linkedin.com/in/maxime-martin-090731aa)
- Email: contact@europiatech.eu

---

## 📄 License

This project is for portfolio demonstration purposes.

---

*Built with ☕ and a passion for European tech innovation.*
