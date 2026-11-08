# EuropiaTech - Blog Tech Européen

Publication indépendante sur l'innovation AI européenne, l'infrastructure souveraine et l'analyse deep tech.

**Live:** [europiatech.eu](https://europiatech.eu)

## Stack Technique

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Langage**: TypeScript
- **Styling**: Tailwind CSS v4 + CSS Custom Properties
- **Animations**: Framer Motion
- **Newsletter**: MailerLite API
- **Automation**: n8n (self-hosted)
- **AI/LLM**: Groq API
- **Hébergement**: Vercel

## Features

### Publication Automatisée

Pipeline de contenu entièrement automatisé :
- Fetch RSS (MIT Tech Review, TechCrunch EU, Ars Technica)
- Génération d'articles via Groq LLM
- Validation humaine via Discord
- Publication via API GitHub

### API de Publication

Endpoint REST pour créer des articles programmatiquement :
- Conversion automatique Markdown → HTML
- Commit direct sur GitHub via API
- Déploiement automatique Vercel

### Newsletter

Intégration MailerLite avec :
- Validation email
- Segmentation par groupe
- Gestion des erreurs

## Architecture

```
RSS Feeds ──► n8n ──► Groq AI ──► Discord ──► API ──► GitHub ──► Vercel
(3 sources)   │      (generate)   (approve)   │      (commit)   (deploy)
              │                               │
              └── Filter by keywords ─────────┘
```

## Structure du Projet

```
src/
├── app/
│   ├── api/
│   │   ├── articles/route.ts    # API publication articles
│   │   └── subscribe/route.ts   # API newsletter
│   ├── articles/
│   │   ├── page.tsx             # Liste tous les articles
│   │   └── [slug]/page.tsx      # Page article
│   ├── press/page.tsx           # Press kit
│   └── page.tsx                 # Homepage
├── components/
│   ├── Hero.tsx                 # Section hero
│   ├── ArticlesGrid.tsx         # Bento grid articles
│   ├── Navigation.tsx           # Header + mobile menu
│   ├── Newsletter.tsx           # Formulaire inscription
│   └── Footer.tsx
└── lib/
    └── articles.ts              # Data store articles
```

## Installation

```bash
# Cloner le repo
git clone https://github.com/cosmos510/blog-tech.git
cd blog-tech

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env.local

# Lancer en développement
npm run dev

# Build production
npm run build
```

## Variables d'environnement

```env
# Newsletter (MailerLite)
MAILERLITE_API_KEY=
MAILERLITE_GROUP_ID=

# API Publication
ARTICLES_API_KEY=
GITHUB_TOKEN=
GITHUB_REPO_OWNER=
GITHUB_REPO_NAME=
GITHUB_BRANCH=
```

## Pages

### Contenu
- `/` - Homepage avec bento grid
- `/articles` - Liste tous les articles
- `/articles/[slug]` - Article individuel
- `/press` - Press kit et assets

### API
- `POST /api/articles` - Publier un article
- `POST /api/subscribe` - Inscription newsletter

## Workflow n8n

```
RSS MIT AI ────┐
               │
RSS TechCrunch ┼──► Merge ──► Filter ──► Limit ──► Groq ──► Discord ──► Publish
               │
RSS Ars Tech ──┘
```

### Configuration Groq

```json
{
  "model": "openai/gpt-oss-120b",
  "max_tokens": 4000,
  "temperature": 0.3
}
```

## Design

- Dark mode first
- Brutalisme nuancé
- Bento grid layouts
- Glassmorphism cards
- Animations scroll-triggered
- Mobile-first responsive

## Performance

- Lighthouse 95+
- Build ~3s (Turbopack)
- Static generation
- Edge caching Vercel

## Auteur

**Maxime Martin**  
Senior Software Engineer

- LinkedIn: [linkedin.com/in/maxime-martin-090731aa](https://www.linkedin.com/in/maxime-martin-090731aa)
- Email: contact@europiatech.eu

## License

Portfolio project - Maxime Martin © 2026
