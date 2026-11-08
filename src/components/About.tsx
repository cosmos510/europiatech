'use client';

import { motion } from 'framer-motion';

const pillars = [
  {
    number: '01',
    title: 'Enterprise Scalability & SaaS',
    description: 'Deconstructing the architectures that allow high-growth startups to scale into global tech leaders.',
    color: 'var(--accent-primary)',
  },
  {
    number: '02',
    title: 'Applied AI & Machine Learning',
    description: 'Beyond the benchmarks: analyzing the engineering challenges of integrating AI into real-world workflows.',
    color: 'var(--accent-secondary)',
  },
  {
    number: '03',
    title: 'Infrastructure & Security',
    description: 'Monitoring the shift toward sovereign clouds, edge computing, and zero-trust security standards.',
    color: 'var(--accent-tertiary)',
  },
];

export function About() {
  return (
    <section id="about" style={{ paddingTop: '8rem', paddingBottom: '8rem', position: 'relative', overflow: 'hidden' }}>
      {/* Background text */}
      <div
        style={{ 
          position: 'absolute',
          right: '-5rem',
          top: '20%',
          fontSize: 'clamp(8rem, 20vw, 20rem)',
          fontWeight: 900,
          color: 'rgba(255,255,255,0.02)',
          pointerEvents: 'none',
          userSelect: 'none',
          lineHeight: 1,
        }}
      >
        ABOUT
      </div>

      <div className="container-main" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem' }}
        >
          <span className="text-mono" style={{ color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: '1rem' }}>About</span>
          <h2 className="text-brutal-display" style={{ maxWidth: '56rem' }}>
            OUR MISSION:<br />
            <span style={{ color: 'var(--accent-primary)' }}>INDEPENDENT</span><br />
            EUROPEAN TECH<br />
            ANALYSIS
          </h2>
        </motion.div>

        {/* Two column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }} className="about-grid-layout">
          {/* Left — Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.7)' }}>
                <span style={{ color: 'white', fontWeight: 600 }}>EuropiaTech</span> is an independent tech publication 
                founded by a senior software engineer with over a decade of expertise in scalable cloud 
                architectures and AI-driven systems.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.5)' }}>
                While mainstream media focuses on venture capital and valuations, the{' '}
                <span style={{ color: 'white', fontWeight: 500 }}>technical foundations</span> — 
                infrastructure resilience, deployment velocity, and digital sovereignty — 
                remain largely overlooked.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.5)' }}>
                We provide a <span style={{ color: 'var(--accent-primary)' }}>"deployment-first"</span> perspective 
                on innovation, analyzing how complex technologies actually reach production.
              </p>

              {/* Editorial note */}
              <div 
                style={{ 
                  marginTop: '2rem',
                  padding: '1.5rem',
                  borderLeft: '4px solid var(--accent-primary)',
                  background: 'rgba(255,255,255,0.02)'
                }}
              >
                <p style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.875rem', 
                  color: 'rgba(255,255,255,0.5)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  margin: 0,
                }}>
                  No sponsored content, no equity stakes. Our only commitment is to technical rigour.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — Pillars */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="liquid-glass"
                style={{ 
                  padding: '1.5rem', 
                  borderLeft: `4px solid ${pillar.color}`,
                  transition: 'border-color 0.3s, background 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '';
                }}
              >
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <span 
                    style={{ 
                      fontSize: '2rem',
                      fontWeight: 800,
                      color: pillar.color,
                      lineHeight: 1,
                    }}
                  >
                    {pillar.number}
                  </span>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'white', marginBottom: '0.4rem' }}>
                      {pillar.title}
                    </h3>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
