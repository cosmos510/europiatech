'use client';

import { motion } from 'framer-motion';

const words = [
  'SOVEREIGN AI',
  '•',
  'AI ACT COMPLIANCE',
  '•',
  'DEEP TECH',
  '•',
  'MISTRAL AI',
  '•',
  'INFRASTRUCTURE',
  '•',
  'OPEN WEIGHTS',
  '•',
  'EDGE DEPLOYMENT',
  '•',
];

export function Marquee() {
  return (
    <div 
      style={{
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        overflow: 'hidden',
        background: 'rgba(0,0,0,0.5)',
      }}
    >
      <motion.div
        animate={{ x: [0, -1920] }}
        transition={{
          x: {
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        style={{ display: 'flex', whiteSpace: 'nowrap' }}
      >
        {/* Duplicate for seamless loop */}
        {[...words, ...words, ...words, ...words].map((word, i) => (
          <span
            key={i}
            className="text-mono"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              marginLeft: '1.5rem',
              marginRight: '1.5rem',
              color: 'rgba(255,255,255,0.3)',
            }}
          >
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
