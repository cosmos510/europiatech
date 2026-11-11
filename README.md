# EuropiaTech - Blog Tech Européen

Publication indépendante sur l'innovation AI européenne, l'infrastructure souveraine et l'analyse deep tech.

**Live:** [europiatech.eu](https://europiatech.eu)

## Stack Technique

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Langage**: TypeScript
- **Styling**: Tailwind CSS v4 + CSS Custom Properties
- **Animations**: Framer Motion
- **Newsletter**: MailerLite API
- **Automation**: n8n (self-hosted sur Raspberry Pi)
- **AI/LLM**: Groq API
- **Hébergement**: Vercel
- **Analytics**: Vercel Analytics + Speed Insights

## Features

### Publication Automatisée (RSS)

Pipeline de contenu entièrement automatisé :
- Fetch RSS (MIT Tech Review, TechCrunch EU, Ars Technica)
- Génération d'articles via Groq LLM
- Validation humaine via Discord
- Publication via API GitHub
- Déploiement automatique Vercel

### Bot Discord Notes (`#idees-vrac`)

- Poste une idée en vrac dans Discord
- L'IA la structure proprement
- Répond directement dans le canal

### Bot Discord MVP (`#go-mvp`)

- Décris un projet dans Discord
- L'IA génère une spec MVP complète
- Messages découpés automatiquement (limite Discord 2000 chars)

### Bot Discord Veille (`#articles-veille`)

- Colle un lien d'article dans Discord
- Jina AI scrape le contenu
- Groq réécrit l'article en anglais avec angle européen
- Prêt à publier sur le blog

### Page Admin (`/admin`)

- Interface sécurisée par mot de passe
- Liste tous les articles
- Suppression en un clic (commit GitHub auto)

### Analytics

- Vercel Analytics (visiteurs, pages vues, pays)
- Speed Insights (Core Web Vitals)

### Newsletter

Intégration MailerLite avec :
- Validation email
- Segmentation par groupe
- Gestion des erreurs

## Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                         AUTOMATISATIONS                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  RSS Feeds ──► n8n ──► Groq AI ──► Discord ──► API ──► GitHub ──► Vercel
│  (3 sources)          (generate)   (approve)         (commit)   (deploy)
│                                                                      │
│  Discord #articles-veille ──► n8n ──► Jina (scrape) ──► Groq ──► API │
│                                                                      │
│  Discord #idees-vrac ──► n8n ──► Groq ──► Discord (réponse)         │
│                                                                      │
│  Discord #go-mvp ──► n8n ──► Groq ──► Discord (spec MVP)            │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

## Infrastructure

| Service | Localisation |
|---------|--------------|
| Blog | Vercel (europiatech.eu) |
| Bot Discord | Raspberry Pi 5 (`~/discord-notes-bot/index.js`) |
| n8n | Raspberry Pi 5 (`http://localhost:5678`) |
| IA | Groq API (cloud) |

## Structure du Projet

```
src/
├── app/
│   ├── admin/
│   │   └── page.tsx             # Page admin (gestion articles)
│   ├── api/
│   │   ├── admin/auth/route.ts  # API authentification admin
│   │   ├── articles/route.ts    # API CRUD articles
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
git clone https://github.com/cosmos510/europiatech.git
cd europiatech

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

# Admin
ADMIN_PASSWORD=
```

## API Endpoints

### Articles
- `GET /api/articles` - Liste tous les articles
- `POST /api/articles` - Publier un article
- `DELETE /api/articles` - Supprimer un article (par slug)

### Admin
- `POST /api/admin/auth` - Authentification admin

### Newsletter
- `POST /api/subscribe` - Inscription newsletter

## Bot Discord (Raspberry Pi)

Le bot écoute 3 canaux Discord et envoie vers les webhooks n8n :

```javascript
const CHANNELS = {
  '#idees-vrac': 'webhook/notes',
  '#go-mvp': 'webhook/mvp', 
  '#articles-veille': 'webhook/veille'
};
```

### Commandes

```bash
# Démarrer le bot
nohup node ~/discord-notes-bot/index.js > ~/discord-notes-bot/bot.log 2>&1 &

# Voir les logs
cat ~/discord-notes-bot/bot.log

# Arrêter le bot
pkill -f "node.*index.js"
```

## Workflows n8n

### 1. RSS → Articles
```
RSS Feeds → Merge → Filter → Groq → Discord → Publish API
```

### 2. Notes
```
Webhook → Groq (structure) → Discord
```

### 3. MVP
```
Webhook → Groq (spec) → Code (split messages) → Discord
```

### 4. Veille
```
Webhook → Jina (scrape) → Code (prompt) → Groq → Edit Fields → API
```

## Configuration Groq

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
Développeur Freelance

- LinkedIn: [linkedin.com/in/maxime-martin-090731aa](https://www.linkedin.com/in/maxime-martin-090731aa)
- Email: contact@europiatech.eu

## License

Portfolio project - Maxime Martin © 2026
