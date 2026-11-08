'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { articles } from '@/lib/articles';

export default function PressPage() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const articleCount = articles.length;

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
              Press & Media
            </span>
            <h1 className="text-brutal-display" style={{ marginBottom: '1.5rem' }}>
              PRESS<br />
              <span style={{ color: 'var(--accent-primary)' }}>KIT</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '600px' }}>
              Resources for journalists, analysts, and media partners covering European tech and AI.
            </p>
          </motion.div>

          {/* BENTO GRID LAYOUT */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gridAutoRows: 'minmax(120px, auto)',
              gap: '1rem',
            }}
            className="press-bento-grid"
          >
            
            {/* About — Large card spanning 2 cols, 2 rows */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bento-card"
              style={{ gridColumn: 'span 2', gridRow: 'span 2', padding: '2rem' }}
            >
              <span className="text-mono" style={{ color: 'var(--accent-primary)', marginBottom: '1rem', display: 'block' }}>
                About
              </span>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white', marginBottom: '1.5rem' }}>
                EuropiaTech
              </h2>
              <div style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                <p style={{ marginBottom: '1rem' }}>
                  Independent tech publication focused on European AI innovation, sovereign infrastructure, and deep tech analysis.
                </p>
                <p>
                  Founded in 2026 by a senior software engineer with expertise in scalable cloud architectures. 
                  We provide a "deployment-first" perspective on how complex technologies reach production.
                </p>
              </div>
            </motion.div>

            {/* Stat: Founded */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bento-card"
              style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
            >
              <p style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--accent-primary)', lineHeight: 1 }}>
                2026
              </p>
              <p className="text-mono" style={{ color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem' }}>
                Founded
              </p>
            </motion.div>

            {/* Stat: Subscribers */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bento-card"
              style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
            >
              <p style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--accent-secondary)', lineHeight: 1 }}>
                500+
              </p>
              <p className="text-mono" style={{ color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem' }}>
                Subscribers
              </p>
            </motion.div>

            {/* Stat: Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="bento-card"
              style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
            >
              <p style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--accent-tertiary)', lineHeight: 1 }}>
                {articleCount}
              </p>
              <p className="text-mono" style={{ color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem' }}>
                Deep Analysis
              </p>
            </motion.div>

            {/* Stat: Frequency */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bento-card"
              style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
            >
              <p style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--accent-warm)', lineHeight: 1 }}>
                WEEKLY
              </p>
              <p className="text-mono" style={{ color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem' }}>
                Publication
              </p>
            </motion.div>

            {/* Editorial Focus 1 — AI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="bento-card"
              style={{ gridColumn: 'span 2', padding: '1.5rem', borderLeft: '4px solid var(--accent-primary)' }}
            >
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'white', marginBottom: '0.5rem' }}>
                European AI Innovation
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                In-depth coverage of Mistral AI, Aleph Alpha, and emerging European AI labs building production-ready models.
              </p>
            </motion.div>

            {/* Editorial Focus 2 — Infrastructure */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bento-card"
              style={{ gridColumn: 'span 2', padding: '1.5rem', borderLeft: '4px solid var(--accent-secondary)' }}
            >
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'white', marginBottom: '0.5rem' }}>
                Sovereign Infrastructure
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Analysis of European cloud sovereignty initiatives, data residency requirements, and digital autonomy strategies.
              </p>
            </motion.div>

            {/* Editorial Focus 3 — Regulation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="bento-card"
              style={{ gridColumn: 'span 2', padding: '1.5rem', borderLeft: '4px solid var(--accent-warm)' }}
            >
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'white', marginBottom: '0.5rem' }}>
                AI Act & Regulation
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Technical guidance on AI Act compliance, risk classification, and regulatory requirements for deployment.
              </p>
            </motion.div>

            {/* Editorial Focus 4 — Security */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bento-card"
              style={{ gridColumn: 'span 2', padding: '1.5rem', borderLeft: '4px solid var(--accent-tertiary)' }}
            >
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'white', marginBottom: '0.5rem' }}>
                Security & Infrastructure
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Zero Trust architecture, post-quantum cryptography, and enterprise security standards.
              </p>
            </motion.div>

            {/* Contact — Wide card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="bento-card"
              style={{ gridColumn: 'span 2', gridRow: 'span 2', padding: '2rem' }}
            >
              <span className="text-mono" style={{ color: 'var(--accent-primary)', marginBottom: '1rem', display: 'block' }}>
                Media Contact
              </span>
              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ color: 'white', fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.25rem' }}>
                  Maxime Martin
                </p>
                <p className="text-mono" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Founder & Lead Analyst
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a 
                  href="mailto:contact@europiatech.eu" 
                  style={{ 
                    color: 'var(--accent-primary)', 
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontSize: '0.95rem',
                  }}
                >
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  contact@europiatech.eu
                </a>
                <a 
                  href="https://www.linkedin.com/in/maxime-martin-090731aa" 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    color: 'var(--accent-primary)', 
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontSize: '0.95rem',
                  }}
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn Profile
                </a>
              </div>
            </motion.div>

            {/* Brand — Logo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bento-card"
              style={{ gridColumn: 'span 2', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
              <span className="text-mono" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '1rem', display: 'block' }}>
                Logo
              </span>
              <p className="nav-logo" style={{ fontSize: '2rem' }}>
                EUROPIATECH<span>.</span>
              </p>
            </motion.div>

            {/* Brand Colors */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="bento-card"
              style={{ gridColumn: 'span 4', padding: '2rem' }}
            >
              <span className="text-mono" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem', display: 'block' }}>
                Brand Colors
              </span>
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <ColorSwatch color="#e07a5f" name="Terracotta" />
                <ColorSwatch color="#3d5a80" name="Slate Blue" />
                <ColorSwatch color="#81b29a" name="Sage" />
                <ColorSwatch color="#f2cc8f" name="Gold" />
                <ColorSwatch color="#293241" name="Navy" />
                <ColorSwatch color="#0a0a0a" name="Black" />
                <ColorSwatch color="#f5f5f0" name="Off-White" border />
              </div>
            </motion.div>

            {/* Typography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bento-card"
              style={{ gridColumn: 'span 2', padding: '2rem' }}
            >
              <span className="text-mono" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '1rem', display: 'block' }}>
                Typography
              </span>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
                <p style={{ marginBottom: '0.5rem' }}>
                  <strong style={{ color: 'white' }}>Display:</strong> Instrument Sans
                </p>
                <p>
                  <strong style={{ color: 'white' }}>Mono:</strong> JetBrains Mono
                </p>
              </div>
            </motion.div>

            {/* Editorial Note */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="bento-card"
              style={{ 
                gridColumn: 'span 2', 
                padding: '2rem',
                borderLeft: '4px solid var(--accent-primary)',
                background: 'rgba(224, 122, 95, 0.05)',
              }}
            >
              <p className="text-mono" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', lineHeight: 1.7 }}>
                EuropiaTech maintains complete editorial independence. No sponsored content, no equity stakes, no affiliate arrangements.
              </p>
            </motion.div>

          </motion.div>

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
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

function ColorSwatch({ color, name, border }: { color: string; name: string; border?: boolean }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div 
        style={{ 
          width: '48px', 
          height: '48px', 
          background: color, 
          border: border ? '1px solid rgba(255,255,255,0.2)' : 'none',
          marginBottom: '0.5rem'
        }} 
      />
      <p className="text-mono" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.6rem' }}>
        {name}
      </p>
    </div>
  );
}
