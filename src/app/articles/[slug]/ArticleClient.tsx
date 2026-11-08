'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import type { Article } from '@/lib/articles';

// Map tag colors to accent colors
const tagColorMap: Record<string, string> = {
  violet: 'var(--accent-secondary)',
  pink: 'var(--accent-primary)',
  cyan: 'var(--accent-tertiary)',
  orange: 'var(--accent-primary)',
  lime: 'var(--accent-warm)',
};

export function ArticleClient({ article }: { article: Article }) {
  const [progress, setProgress] = useState(0);
  const [currentUrl, setCurrentUrl] = useState('');
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  
  const accentColor = tagColorMap[article.tagColor] || 'var(--accent-primary)';

  useEffect(() => {
    setCurrentUrl(window.location.href);
    
    const handleScroll = () => {
      const articleEl = document.querySelector('article');
      if (!articleEl) return;
      
      const articleTop = articleEl.offsetTop;
      const articleHeight = articleEl.offsetHeight;
      const scrolled = window.scrollY - articleTop + 400;
      const pct = Math.min(Math.max(scrolled / (articleHeight - window.innerHeight) * 100, 0), 100);
      setProgress(pct);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ position: 'relative', background: 'var(--black)', minHeight: '100vh' }}>
      
      {/* Reading progress bar */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '3px',
          background: accentColor,
          width: `${progress}%`,
          zIndex: 200,
          transition: 'width 0.1s linear',
        }}
      />

      {/* Fixed Navigation */}
      <nav 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '1rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(10, 10, 10, 0.9)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <Link href="/" className="nav-logo" style={{ fontSize: '1.25rem' }}>
          EUROPIATECH<span>.</span>
        </Link>
        <Link 
          href="/#articles" 
          className="text-mono"
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem',
            color: 'rgba(255,255,255,0.5)',
            textDecoration: 'none',
            fontSize: '0.7rem',
            transition: 'color 0.3s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 12L6 8L10 4" />
          </svg>
          All Analysis
        </Link>
      </nav>

      {/* Background elements */}
      <motion.div 
        style={{
          position: 'fixed',
          top: '-10%',
          right: '-15%',
          width: '50vw',
          height: '50vw',
          maxWidth: '600px',
          maxHeight: '600px',
          background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`,
          opacity: 0.1,
          filter: 'blur(80px)',
          pointerEvents: 'none',
          y: backgroundY,
        }}
      />
      <div className="grid-lines" aria-hidden="true" />

      {/* HEADER */}
      <header 
        style={{ 
          paddingTop: '7rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <div className="container-main" style={{ maxWidth: '52rem' }}>
          
          {/* Breadcrumb + Meta row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem',
              marginBottom: '1.5rem',
              flexWrap: 'wrap',
            }}
          >
            <span 
              style={{
                padding: '0.4rem 0.75rem',
                background: accentColor,
                color: 'var(--black)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              {article.tag}
            </span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>—</span>
            <span className="text-mono" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem' }}>
              {article.date}
            </span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>•</span>
            <span className="text-mono" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem' }}>
              {article.readTime} read
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'white',
              marginBottom: '1.5rem',
            }}
          >
            {article.title}
          </motion.h1>

          {/* Excerpt */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontSize: '1.15rem',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.7,
              maxWidth: '600px',
              marginBottom: '2rem',
            }}
          >
            {article.excerpt}
          </motion.p>

          {/* Author */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
          >
            <div 
              style={{
                width: '44px',
                height: '44px',
                background: `linear-gradient(135deg, ${accentColor}, var(--accent-warm))`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '0.9rem',
                color: 'var(--black)',
              }}
            >
              MM
            </div>
            <div>
              <p style={{ color: 'white', fontWeight: 600, fontSize: '0.95rem', margin: 0 }}>
                {article.author}
              </p>
              <p className="text-mono" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.65rem', margin: 0, marginTop: '0.15rem' }}>
                Lead Analyst
              </p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* ARTICLE CONTENT */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        <article className="container-main" style={{ maxWidth: '44rem', paddingTop: '3rem', paddingBottom: '4rem' }}>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="article-content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Tags */}
          <div
            style={{
              marginTop: '4rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <p className="text-mono" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.65rem', marginBottom: '1rem' }}>
              Topics
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['European AI', 'Sovereign Tech', article.tag].map((topic) => (
                <span 
                  key={topic}
                  style={{
                    padding: '0.4rem 0.75rem',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.6)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Share & Back */}
          <div
            style={{
              marginTop: '2.5rem',
              padding: '1.5rem',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span className="text-mono" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.65rem' }}>
                Share
              </span>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <ShareButton platform="linkedin" title={article.title} accentColor={accentColor} url={currentUrl} />
                <ShareButton platform="twitter" title={article.title} accentColor={accentColor} url={currentUrl} />
                <CopyLinkButton accentColor={accentColor} url={currentUrl} />
              </div>
            </div>
            <Link 
              href="/#articles" 
              className="btn-outline" 
              style={{ padding: '0.6rem 1.25rem', fontSize: '0.7rem' }}
            >
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 12L6 8L10 4" />
              </svg>
              Back
            </Link>
          </div>

        </article>
      </main>

      {/* FOOTER */}
      <footer 
        style={{ 
          padding: '3rem 0', 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          background: 'var(--surface-dark)',
        }}
      >
        <div className="container-main">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}>
            <Link href="/" className="nav-logo" style={{ fontSize: '1.25rem' }}>
              EUROPIATECH<span>.</span>
            </Link>
            
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <FooterLink href="/#articles">Analysis</FooterLink>
              <FooterLink href="/#about">About</FooterLink>
              <FooterLink href="/press">Press</FooterLink>
              <FooterLink href="/legal">Legal</FooterLink>
            </div>
            
            <p className="text-mono" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.65rem' }}>
              © 2026 EuropiaTech
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-mono"
      style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.7rem', transition: 'color 0.3s' }}
      onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
      onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
    >
      {children}
    </Link>
  );
}

function ShareButton({ platform, title, accentColor, url }: { platform: 'linkedin' | 'twitter'; title: string; accentColor: string; url: string }) {
  const getShareUrl = () => {
    if (platform === 'linkedin') {
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    }
    return `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
  };

  return (
    <a
      href={url ? getShareUrl() : '#'}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Share on ${platform}`}
      style={{
        width: '36px',
        height: '36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        color: 'rgba(255,255,255,0.5)',
        transition: 'all 0.3s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = accentColor;
        e.currentTarget.style.borderColor = accentColor;
        e.currentTarget.style.color = 'var(--black)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
        e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
      }}
    >
      {platform === 'linkedin' ? (
        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ) : (
        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )}
    </a>
  );
}

function CopyLinkButton({ accentColor, url }: { accentColor: string; url: string }) {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    if (url) {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      aria-label="Copy link"
      style={{
        width: '36px',
        height: '36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: copied ? accentColor : 'rgba(255,255,255,0.05)',
        border: `1px solid ${copied ? accentColor : 'rgba(255,255,255,0.1)'}`,
        color: copied ? 'var(--black)' : 'rgba(255,255,255,0.5)',
        cursor: 'pointer',
        transition: 'all 0.3s',
      }}
      onMouseEnter={(e) => {
        if (!copied) {
          e.currentTarget.style.background = accentColor;
          e.currentTarget.style.borderColor = accentColor;
          e.currentTarget.style.color = 'var(--black)';
        }
      }}
      onMouseLeave={(e) => {
        if (!copied) {
          e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
          e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
        }
      }}
    >
      {copied ? (
        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      ) : (
        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      )}
    </button>
  );
}
