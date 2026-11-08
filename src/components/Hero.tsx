'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { articles } from '@/lib/articles';

export function Hero() {
  const articleCount = articles.length;
  return (
    <section 
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '5rem',
        paddingBottom: '4rem',
      }}
    >
      {/* Grid accent line — Brutalisme */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: '25%',
          width: '1px',
          height: '100%',
          background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent)',
        }}
        aria-hidden="true"
      />
      <div 
        style={{
          position: 'absolute',
          top: 0,
          right: '33%',
          width: '1px',
          height: '100%',
          background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.05), transparent)',
        }}
        aria-hidden="true"
      />

      <div className="container-main">
        {/* Eyebrow — Mono brutal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginBottom: '2rem' }}
        >
          <span className="tag tag-violet">
            Independent Tech Media — Est. 2026
          </span>
        </motion.div>

        {/* Hero title — BRUTALISTE XXL */}
        <div style={{ marginBottom: '3rem' }}>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-brutal-hero"
            style={{ marginBottom: '1rem' }}
          >
            EUROPEAN
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-brutal-hero"
            style={{ 
              WebkitTextStroke: '2px white',
              WebkitTextFillColor: 'transparent',
            }}
          >
            AI & DEEP
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-brutal-hero"
            style={{ color: 'var(--accent-primary)' }}
          >
            TECH<span style={{ color: 'white' }}>.</span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
            color: 'rgba(255,255,255,0.6)',
            maxWidth: '42rem',
            marginBottom: '3rem',
            lineHeight: 1.7,
          }}
        >
          Sovereign AI infrastructure, AI Act compliance, production-ready models — 
          <span style={{ color: 'white' }}> the technical layers other media overlook.</span>
        </motion.p>

        {/* CTAs — Brutal style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}
        >
          <Link href="#articles" className="btn-brutal">
            <span>Read Analysis</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 12L12 4M12 4H6M12 4V10" />
            </svg>
          </Link>
          <Link href="#about" className="btn-outline">
            Our Mission
          </Link>
        </motion.div>

        {/* Stats row — Brutalist numbers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          style={{
            marginTop: '5rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
          }}
        >
          <StatItem number="500+" label="Subscribers" />
          <StatItem number={articleCount.toString()} label="Deep Analysis" />
          <StatItem number="2026" label="AI Act Era" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span className="text-mono" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: '1px',
            height: '2rem',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)',
          }}
        />
      </motion.div>
    </section>
  );
}

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <p 
        style={{ 
          fontSize: 'clamp(1.5rem, 5vw, 3rem)', 
          fontWeight: 700, 
          letterSpacing: '-0.02em',
          color: 'var(--accent-primary)' 
        }}
      >
        {number}
      </p>
      <p className="text-mono" style={{ color: 'rgba(255,255,255,0.4)', marginTop: '0.25rem' }}>{label}</p>
    </div>
  );
}
