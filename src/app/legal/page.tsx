'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function LegalPage() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <div style={{ position: 'relative' }}>
      {/* Ambient orbs */}
      <motion.div 
        className="orb orb-violet"
        style={{
          width: 400,
          height: 400,
          top: '10%',
          right: '-10%',
          y: backgroundY,
        }}
      />

      {/* Grid & noise */}
      <div className="grid-lines" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />

      <Navigation />

      <main style={{ position: 'relative', zIndex: 10, paddingTop: '8rem', paddingBottom: '6rem' }}>
        <div className="container-main" style={{ maxWidth: '48rem' }}>
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '4rem' }}
          >
            <span className="text-mono" style={{ color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: '1rem' }}>
              Legal
            </span>
            <h1 className="text-brutal-display" style={{ marginBottom: '1.5rem' }}>
              LEGAL<br />
              <span style={{ color: 'var(--accent-primary)' }}>NOTICE</span>
            </h1>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '3rem' }}
          >
            
            <section>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>
                Publisher
              </h2>
              <div className="liquid-glass" style={{ padding: '1.5rem' }}>
                <p><strong style={{ color: 'white' }}>EuropiaTech</strong></p>
                <p>Independent Tech Media</p>
                <p style={{ marginTop: '1rem' }}>
                  Director of Publication: Maxime Martin<br />
                  Email: <a href="mailto:contact@europiatech.eu" style={{ color: 'var(--accent-primary)' }}>contact@europiatech.eu</a>
                </p>
              </div>
            </section>

            <section>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>
                Hosting
              </h2>
              <div className="liquid-glass" style={{ padding: '1.5rem' }}>
                <p><strong style={{ color: 'white' }}>Vercel Inc.</strong></p>
                <p>340 S Lemon Ave #4133</p>
                <p>Walnut, CA 91789, USA</p>
              </div>
            </section>

            <section>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>
                Intellectual Property
              </h2>
              <p>
                All content published on EuropiaTech (articles, analysis, graphics, logos) is protected 
                by intellectual property rights. Reproduction, distribution, or use of content without 
                prior written authorization is prohibited.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>
                Personal Data & GDPR
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                EuropiaTech collects email addresses solely for newsletter subscription purposes. 
                This data is processed by MailerLite (data processor) in compliance with GDPR.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'white' }}>Your rights:</strong> You may access, rectify, or delete 
                your personal data at any time by contacting us at{' '}
                <a href="mailto:contact@europiatech.eu" style={{ color: 'var(--accent-primary)' }}>
                  contact@europiatech.eu
                </a>.
              </p>
              <p>
                Newsletter unsubscription is available via a one-click link in every email.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>
                Cookies
              </h2>
              <p>
                This site uses only essential technical cookies necessary for its operation. 
                No advertising or tracking cookies are used.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>
                Editorial Independence
              </h2>
              <p>
                EuropiaTech maintains complete editorial independence. We do not accept sponsored content, 
                paid placements, or affiliate arrangements. All analysis and opinions expressed are our own.
              </p>
            </section>

          </motion.div>

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
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
