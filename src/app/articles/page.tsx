'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { articles } from '@/lib/articles';

// Map tag to accent color
const tagColors: Record<string, string> = {
  'Event Preview': 'var(--accent-warm)',
  'Deep Tech': 'var(--accent-secondary)',
  'Infrastructure': 'var(--accent-tertiary)',
  'Event': 'var(--accent-warm)',
  'AI': 'var(--accent-primary)',
  'Security': 'var(--accent-tertiary)',
  'Regulation': 'var(--accent-secondary)',
};

export default function ArticlesPage() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <div style={{ position: 'relative' }}>
      {/* Ambient orbs */}
      <motion.div 
        className="orb orb-violet"
        style={{
          width: 500,
          height: 500,
          top: '10%',
          left: '-10%',
          y: backgroundY,
        }}
      />
      <motion.div 
        className="orb orb-cyan"
        style={{
          width: 300,
          height: 300,
          bottom: '20%',
          right: '-5%',
          y: backgroundY,
        }}
      />

      {/* Grid & noise */}
      <div className="grid-lines" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />

      <Navigation />

      <main style={{ position: 'relative', zIndex: 10, paddingTop: '8rem', paddingBottom: '6rem' }}>
        <div className="container-main">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '4rem' }}
          >
            <span className="text-mono" style={{ color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: '1rem' }}>
              All Articles
            </span>
            <h1 className="text-brutal-display" style={{ marginBottom: '1.5rem' }}>
              EUROPEAN<br />
              <span style={{ color: 'var(--accent-primary)' }}>TECH</span><br />
              ANALYSIS
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '600px' }}>
              In-depth coverage of AI innovation, sovereign infrastructure, and the regulatory landscape shaping Europe&apos;s tech future.
            </p>
          </motion.div>

          {/* Articles Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.5rem',
            }}
            className="articles-list-grid"
          >
            {articles.map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              >
                <Link 
                  href={`/articles/${article.slug}`}
                  className="bento-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    padding: '2rem',
                    position: 'relative',
                    overflow: 'hidden',
                    minHeight: '280px',
                  }}
                >
                  {/* Accent line */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '4px',
                      height: '100%',
                      background: tagColors[article.tag] || 'var(--accent-primary)',
                    }}
                  />

                  {/* Content */}
                  <div style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
                    {/* Tag */}
                    <span 
                      className="text-mono"
                      style={{ 
                        color: tagColors[article.tag] || 'var(--accent-primary)',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '1rem',
                      }}
                    >
                      {article.tag}
                    </span>
                    
                    {/* Title */}
                    <h2 
                      style={{ 
                        fontSize: '1.35rem',
                        fontWeight: 700,
                        color: 'white',
                        lineHeight: 1.3,
                        marginBottom: '1rem',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {article.title}
                    </h2>
                    
                    {/* Excerpt */}
                    <p style={{ 
                      color: 'rgba(255,255,255,0.5)', 
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                      marginBottom: '1.5rem',
                      flex: 1,
                    }}>
                      {article.excerpt}
                    </p>
                    
                    {/* Meta */}
                    <div 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '1rem',
                        paddingTop: '1rem',
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                      }}
                    >
                      <span className="text-mono" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>
                        {article.date}
                      </span>
                      <span style={{ color: 'rgba(255,255,255,0.2)' }}>•</span>
                      <span className="text-mono" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>
                        {article.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Arrow indicator */}
                  <div 
                    className="bento-card-arrow"
                    style={{
                      position: 'absolute',
                      bottom: '2rem',
                      right: '2rem',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 12L12 4M12 4H6M12 4V10" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{ marginTop: '4rem' }}
          >
            <Link href="/" className="btn-outline" style={{ display: 'inline-flex' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M10 12L6 8L10 4" />
              </svg>
              Back to Homepage
            </Link>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
