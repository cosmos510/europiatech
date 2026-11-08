'use client';

import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        // If the server suggests using the fallback form
        if (data.fallback) {
          // Open MailerLite form in new tab as last resort
          window.open(
            `https://assets.mailerlite.com/jsonp/2245625/forms/183935330376746350/subscribe?fields[email]=${encodeURIComponent(email)}`,
            '_blank'
          );
          setStatus('success');
          setEmail('');
          return;
        }
        throw new Error(data.error || 'Failed to subscribe');
      }

      setStatus('success');
      setEmail('');
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section id="newsletter" className="py-32 px-6 md:px-12 relative">
      {/* Background accent */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, var(--accent-primary) 0%, transparent 60%)',
          filter: 'blur(120px)',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="liquid-glass-intense p-8 md:p-16 text-center"
        >
          <span className="text-mono" style={{ color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: '1.5rem' }}>
            Newsletter
          </span>
          
          <h2 className="text-brutal-display" style={{ marginBottom: '1.5rem' }}>
            EUROPEAN AI &<br />
            <span style={{ color: 'var(--accent-primary)' }}>DEEP TECH</span><br />
            INTELLIGENCE
          </h2>
          
          <p style={{ 
            color: 'rgba(255,255,255,0.5)', 
            fontSize: '1.125rem', 
            marginBottom: '2.5rem', 
            maxWidth: '36rem', 
            marginLeft: 'auto', 
            marginRight: 'auto', 
            lineHeight: '1.7' 
          }}>
            Join 500+ engineers, founders & investors. One in-depth analysis on European AI, 
            sovereign infrastructure and deep tech per week. No spam, no disguised partnerships.
          </p>

          {/* Newsletter Form */}
          <div style={{ maxWidth: '28rem', margin: '0 auto' }}>
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ padding: '2rem 0', textAlign: 'center' }}
              >
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  background: 'rgba(34, 197, 94, 0.1)', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem'
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                    <path d="M20 6L9 17L4 12" />
                  </svg>
                </div>
                <h4 style={{ color: '#22c55e', fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                  Welcome aboard!
                </h4>
                <p style={{ color: 'rgba(255,255,255,0.6)' }}>
                  You&apos;ve successfully joined our subscriber list.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  style={{
                    marginTop: '1.5rem',
                    padding: '0.5rem 1rem',
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: 'rgba(255,255,255,0.5)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Subscribe another email
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                  <input 
                    aria-label="Email address" 
                    aria-required="true" 
                    type="email" 
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    placeholder="Enter your email" 
                    autoComplete="email"
                    disabled={status === 'loading'}
                    style={{
                      width: '100%',
                      padding: '1rem 1.5rem',
                      background: 'rgba(255,255,255,0.05)',
                      border: status === 'error' 
                        ? '2px solid #ef4444' 
                        : '2px solid rgba(255,255,255,0.1)',
                      color: 'white',
                      fontSize: '0.875rem',
                      fontFamily: 'var(--font-mono)',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => {
                      if (status !== 'error') {
                        e.currentTarget.style.borderColor = 'var(--accent-primary)';
                      }
                    }}
                    onBlur={(e) => {
                      if (status !== 'error') {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                      }
                    }}
                  />
                  {status === 'error' && errorMessage && (
                    <p style={{ 
                      color: '#ef4444', 
                      fontSize: '0.75rem', 
                      marginTop: '0.5rem',
                      fontFamily: 'var(--font-mono)',
                      textAlign: 'left'
                    }}>
                      {errorMessage}
                    </p>
                  )}
                </div>
                
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  style={{
                    width: '100%',
                    padding: '1rem 2rem',
                    background: status === 'loading' ? 'rgba(255,255,255,0.7)' : 'var(--white)',
                    color: 'var(--black)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    border: 'none',
                    cursor: status === 'loading' ? 'wait' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    if (status !== 'loading') {
                      e.currentTarget.style.transform = 'translate(-4px, -4px)';
                      e.currentTarget.style.boxShadow = '4px 4px 0 var(--accent-primary)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translate(0, 0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {status === 'loading' ? (
                    <>
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                        style={{ animation: 'spin 1s linear infinite' }}
                      >
                        <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                        <path d="M12 2a10 10 0 0 1 10 10" />
                      </svg>
                      <span>Subscribing...</span>
                    </>
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          <p style={{ 
            fontFamily: 'var(--font-mono)', 
            color: 'rgba(255,255,255,0.3)', 
            fontSize: '0.75rem', 
            marginTop: '1.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            Unsubscribe in one click. Your data is never shared.
          </p>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
