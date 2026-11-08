'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 100,
        padding: '1rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(255,255,255,0.1)',
        background: 'rgba(10, 10, 10, 0.8)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxSizing: 'border-box',
      }}
    >
      <Link href="/" className="nav-logo">
        EUROPIATECH<span>.</span>
      </Link>

      {/* Desktop nav */}
      <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <NavLink href="/#articles">Analysis</NavLink>
        <NavLink href="/#about">About</NavLink>
        <NavLink href="/press">Press</NavLink>
        <Link href="/#newsletter" className="btn-brutal">
          Subscribe
        </Link>
      </div>

      {/* Mobile burger */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="nav-mobile-burger"
        aria-label="Toggle menu"
        style={{
          display: 'none',
          flexDirection: 'column',
          gap: '0.375rem',
          padding: '0.5rem',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <motion.span
          animate={{
            rotate: isMobileMenuOpen ? 45 : 0,
            y: isMobileMenuOpen ? 8 : 0,
          }}
          style={{ width: '1.5rem', height: '2px', background: 'white', display: 'block' }}
        />
        <motion.span
          animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
          style={{ width: '1.5rem', height: '2px', background: 'white', display: 'block' }}
        />
        <motion.span
          animate={{
            rotate: isMobileMenuOpen ? -45 : 0,
            y: isMobileMenuOpen ? -8 : 0,
          }}
          style={{ width: '1.5rem', height: '2px', background: 'white', display: 'block' }}
        />
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'rgba(0,0,0,0.95)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem', gap: '1rem' }}>
              <MobileNavLink href="/#articles" onClick={() => setIsMobileMenuOpen(false)}>
                Analysis
              </MobileNavLink>
              <MobileNavLink href="/#about" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </MobileNavLink>
              <MobileNavLink href="/press" onClick={() => setIsMobileMenuOpen(false)}>
                Press
              </MobileNavLink>
              <Link 
                href="/#newsletter" 
                className="btn-brutal"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ marginTop: '1rem' }}
              >
                Subscribe
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-mono nav-link"
      style={{ 
        color: 'rgba(255,255,255,0.6)', 
        textDecoration: 'none',
        transition: 'color 0.3s',
        position: 'relative',
      }}
      onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
      onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode; 
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      style={{
        fontSize: '1.5rem',
        fontWeight: 700,
        color: 'rgba(255,255,255,0.8)',
        textDecoration: 'none',
        padding: '0.5rem 0',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        transition: 'color 0.3s',
      }}
      onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
      onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
    >
      {children}
    </Link>
  );
}
