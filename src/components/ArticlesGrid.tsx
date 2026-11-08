'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { articles as allArticles } from '@/lib/articles';

// Map tag to accent color
const tagColors: Record<string, string> = {
  'Event Preview': 'var(--accent-primary)',
  'Deep Tech': 'var(--accent-secondary)',
  'Infrastructure': 'var(--accent-tertiary)',
  'Event': 'var(--accent-warm)',
  'Gaming': 'var(--accent-primary)',
  'AI': 'var(--accent-secondary)',
  'Security': 'var(--accent-tertiary)',
  'Web': 'var(--accent-warm)',
};

export function ArticlesGrid() {
  // Take latest 4 articles for the bento grid
  const articles = allArticles.slice(0, 4).map((article, index) => ({
    ...article,
    accentColor: tagColors[article.tag] || 'var(--accent-primary)',
    size: index === 0 ? 'featured' : index === 1 ? 'tall' : index === 3 ? 'wide' : 'normal',
  }));

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
          {articles[0] && (
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
          )}

          {/* Tall Article — 1 col, 2 rows */}
          {articles[1] && (
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
          )}

          {/* Normal Article */}
          {articles[2] && (
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
          )}

          {/* Wide Article — 2 cols */}
          {articles[3] && (
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
          )}
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
  article: typeof allArticles[0] & { accentColor: string }; 
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
