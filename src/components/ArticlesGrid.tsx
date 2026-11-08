'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const articles = [
  {
    id: 1,
    slug: 'london-tech-week-2026-european-ai',
    title: 'Preview: London Tech Week 2026 — European AI & Sovereign Tech',
    excerpt: 'Key European AI companies to watch, who we want to interview, and the sovereign infrastructure themes we\'ll track on the ground.',
    tag: 'Event Preview',
    tagColor: 'orange',
    accentColor: 'var(--accent-primary)',
    date: 'Feb 18, 2026',
    readTime: '8 min',
    size: 'featured', // 2x2
  },
  {
    id: 2,
    slug: 'european-ai-2026-sovereign-infrastructure',
    title: 'The State of AI Innovation in Europe: 2026 Outlook',
    excerpt: 'Mapping European AI initiatives — from Mistral AI\'s production-ready models to sovereign infrastructure projects.',
    tag: 'Deep Tech',
    tagColor: 'violet',
    accentColor: 'var(--accent-secondary)',
    date: 'Feb 15, 2026',
    readTime: '12 min',
    size: 'tall', // 1x2
  },
  {
    id: 3,
    slug: 'zero-trust-post-quantum-security-startups',
    title: 'Zero Trust & Post-Quantum Security',
    excerpt: 'The new security standards every European startup CTO should implement now.',
    tag: 'Infrastructure',
    tagColor: 'cyan',
    accentColor: 'var(--accent-tertiary)',
    date: 'Feb 12, 2026',
    readTime: '9 min',
    size: 'normal',
  },
  {
    id: 4,
    slug: 'tech-conferences-2026-ai-regulation-cloud',
    title: '3 Key Themes at Tech Conferences 2026',
    excerpt: 'AI regulation, cloud sovereignty and industrial cybersecurity — our technical reading grid for the year.',
    tag: 'Event',
    tagColor: 'lime',
    accentColor: 'var(--accent-warm)',
    date: 'Feb 8, 2026',
    readTime: '7 min',
    size: 'wide', // 2x1
  },
];

export function ArticlesGrid() {
  return (
    <section id="articles" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div className="container-main">
        {/* Section header — Brutal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem' }}
        >
          <span className="text-mono" style={{ color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: '1rem' }}>
            Latest Analysis
          </span>
          <h2 className="text-brutal-display">
            IN-DEPTH<br />
            <span style={{ color: 'var(--accent-primary)' }}>EUROPEAN AI</span><br />
            ANALYSIS
          </h2>
        </motion.div>

        {/* Bento Grid — Custom layout */}
        <div 
          className="articles-bento-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(3, minmax(180px, auto))',
            gap: '1rem',
          }}
        >
          {/* Featured Article — 2 cols, 2 rows */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ gridColumn: 'span 2', gridRow: 'span 2' }}
            className="bento-article-featured"
          >
            <ArticleCard article={articles[0]} isFeatured />
          </motion.div>

          {/* Tall Article — 1 col, 2 rows */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ gridColumn: 'span 1', gridRow: 'span 2' }}
            className="bento-article-tall"
          >
            <ArticleCard article={articles[1]} />
          </motion.div>

          {/* Normal Article */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ gridColumn: 'span 1', gridRow: 'span 1' }}
            className="bento-article-normal"
          >
            <ArticleCard article={articles[2]} isCompact />
          </motion.div>

          {/* Wide Article — 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ gridColumn: 'span 2', gridRow: 'span 1' }}
            className="bento-article-wide"
          >
            <ArticleCard article={articles[3]} isWide />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ArticleCard({ 
  article, 
  isFeatured = false, 
  isCompact = false,
  isWide = false,
}: { 
  article: typeof articles[0]; 
  isFeatured?: boolean;
  isCompact?: boolean;
  isWide?: boolean;
}) {
  return (
    <Link 
      href={`/articles/${article.slug}`}
      className="bento-card"
      style={{
        display: 'flex',
        flexDirection: isWide ? 'row' : 'column',
        height: '100%',
        padding: isFeatured ? '2rem' : isCompact ? '1.25rem' : '1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Accent line */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: isFeatured ? '6px' : '4px',
          height: '100%',
          background: article.accentColor,
        }}
      />

      {/* Content */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%',
        paddingLeft: isFeatured ? '1rem' : '0.5rem',
        flex: isWide ? 1 : 'auto',
      }}>
        {/* Tag */}
        <span 
          className="text-mono"
          style={{ 
            color: article.accentColor,
            fontSize: '0.65rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: isFeatured ? '1.5rem' : '1rem',
          }}
        >
          {article.tag}
        </span>
        
        {/* Title */}
        <h3 
          style={{ 
            fontSize: isFeatured ? 'clamp(1.5rem, 3vw, 2.25rem)' : isCompact ? '1rem' : '1.25rem',
            fontWeight: 700,
            color: 'white',
            lineHeight: 1.2,
            marginBottom: isCompact ? '0.75rem' : '1rem',
            letterSpacing: '-0.02em',
          }}
        >
          {article.title}
        </h3>
        
        {/* Excerpt — hidden on compact */}
        {!isCompact && (
          <p style={{ 
            color: 'rgba(255,255,255,0.5)', 
            fontSize: isFeatured ? '1rem' : '0.9rem',
            lineHeight: 1.6,
            marginBottom: '1.5rem',
            flex: 1,
          }}>
            {article.excerpt}
          </p>
        )}
        
        {/* Meta */}
        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem',
            marginTop: 'auto',
            paddingTop: isCompact ? '0' : '1rem',
            borderTop: isCompact ? 'none' : '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <span className="text-mono" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem' }}>
            {article.date}
          </span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>•</span>
          <span className="text-mono" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem' }}>
            {article.readTime}
          </span>
        </div>
      </div>

      {/* Arrow indicator */}
      <div 
        className="bento-card-arrow"
        style={{
          position: 'absolute',
          bottom: isFeatured ? '2rem' : '1.25rem',
          right: isFeatured ? '2rem' : '1.25rem',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 12L12 4M12 4H6M12 4V10" />
        </svg>
      </div>
    </Link>
  );
}
