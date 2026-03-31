'use client';

import { motion } from 'framer-motion';

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Base layer already handled in layout or here as fallback */}
      <div className="absolute inset-0 bg-[var(--bg-main)]" />

      <motion.div
        className="absolute left-1/2 top-[-110px] h-[340px] w-[460px] rangoli-knot opacity-70"
        style={{ marginLeft: '-230px' }}
        animate={{ opacity: [0.45, 0.68, 0.45], scale: [0.96, 1, 0.96] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Saffron silk ribbon */}
      <motion.div
        className="absolute -top-24 -left-52 h-[320px] w-[880px] rounded-[88px]"
        style={{ background: 'linear-gradient(110deg, rgba(223, 108, 43, 0.24), rgba(223, 108, 43, 0.02))' }}
        animate={{ x: [0, 28, 0], y: [0, 14, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Indigo jali panel */}
      <motion.div
        className="absolute top-[9%] -right-44 h-[300px] w-[760px] rounded-[76px] rotate-[-16deg]"
        style={{ background: 'linear-gradient(100deg, rgba(47, 42, 114, 0.2), rgba(47, 42, 114, 0.02))' }}
        animate={{ x: [0, -24, 0], y: [0, 20, 0], scale: [1, 1.07, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Vermilion cloth fold */}
      <motion.div
        className="absolute -bottom-28 left-[6%] h-[280px] w-[720px] rounded-[72px] rotate-[12deg]"
        style={{ background: 'linear-gradient(120deg, rgba(182, 58, 58, 0.18), rgba(182, 58, 58, 0.02))' }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      {/* Peacock beveled strip */}
      <motion.div
        className="absolute top-[54%] -right-36 h-[260px] w-[760px] rounded-[64px] rotate-[-9deg]"
        style={{ background: 'linear-gradient(104deg, rgba(15, 118, 110, 0.17), rgba(15, 118, 110, 0.02))' }}
        animate={{ x: [0, -16, 0], y: [0, -12, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />

      {/* Modern jali mesh */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(60deg, rgba(47, 42, 114, 0.22) 0 1px, transparent 1px 22px), repeating-linear-gradient(-60deg, rgba(223, 108, 43, 0.18) 0 1px, transparent 1px 22px)',
          backgroundSize: '120px 120px',
          maskImage: 'radial-gradient(ellipse 70% 55% at 50% 38%, black 0%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 55% at 50% 38%, black 0%, transparent 100%)',
        }}
      />

      {/* Subtle dot grain */}
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(47, 42, 114, 0.14) 1px, transparent 0)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 100%)',
        }}
      />
    </div>
  );
}
