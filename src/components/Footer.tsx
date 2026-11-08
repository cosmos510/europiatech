'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer 
      style={{ 
        paddingTop: '4rem', 
        paddingBottom: '4rem', 
        borderTop: '1px solid rgba(255,255,255,0.1)',
        background: 'var(--surface-dark)',
      }}
    >
      <div className="container-main">
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'start',
          }}
          className="footer-grid"
        >
          {/* Logo & Copyright */}
          <div>
            <Link href="/" className="nav-logo" style={{ fontSize: '1.5rem', display: 'block', marginBottom: '1rem' }}>
              EUROPIATECH<span>.</span>
            </Link>
            <p className="text-mono" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem' }}>
              © 2026 EuropiaTech<br />
              Independent Tech Media
            </p>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }} className="footer-links">
            <FooterLink href="/#articles">Analysis</FooterLink>
            <FooterLink href="/#about">About</FooterLink>
            <FooterLink href="/press">Press</FooterLink>
            <FooterLink href="/legal">Legal</FooterLink>
            <FooterLink href="/rss.xml">RSS</FooterLink>
          </div>

          {/* Credits & Social */}
          <div className="footer-social">
            <p className="text-mono" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', marginBottom: '1rem' }}>
              Technical infrastructure by{' '}
              <a 
                href="https://www.webamax.fr" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
              >
                Webamax
              </a>
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <SocialLink 
                href="https://www.linkedin.com/in/maxime-martin-090731aa" 
                label="LinkedIn"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </SocialLink>
              <SocialLink 
                href="mailto:contact@europiatech.eu" 
                label="Email"
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </SocialLink>
            </div>
          </div>
        </div>

        {/* Bottom brutal line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)',
            marginTop: '4rem',
          }}
        />
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-mono"
      style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.3s' }}
      onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
      onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
    >
      {children}
    </Link>
  );
}

function SocialLink({ 
  href, 
  label, 
  children 
}: { 
  href: string; 
  label: string; 
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        width: '2.5rem',
        height: '2.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid rgba(255,255,255,0.1)',
        color: 'rgba(255,255,255,0.4)',
        transition: 'all 0.3s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = 'white';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'rgba(255,255,255,0.4)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
      }}
    >
      {children}
    </a>
  );
}
