'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { ArticlesGrid } from '@/components/ArticlesGrid';
import { About } from '@/components/About';
import { Newsletter } from '@/components/Newsletter';
import { Footer } from '@/components/Footer';
import { Marquee } from '@/components/Marquee';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll-driven parallax
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <div ref={containerRef} className="relative">
      {/* Ambient orbs — Maximalisme */}
      <motion.div 
        className="orb orb-violet"
        style={{
          width: 600,
          height: 600,
          top: '10%',
          left: '-10%',
          y: backgroundY,
        }}
      />
      <motion.div 
        className="orb orb-pink"
        style={{
          width: 400,
          height: 400,
          top: '60%',
          right: '-5%',
          y: backgroundY,
        }}
      />
      <motion.div 
        className="orb orb-cyan"
        style={{
          width: 300,
          height: 300,
          bottom: '20%',
          left: '20%',
          y: backgroundY,
        }}
      />

      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        
        <Marquee />
        
        <ArticlesGrid />
        
        <About />
        
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
}
