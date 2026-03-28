'use client';

import { motion } from 'framer-motion';

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Base layer already handled in layout or here as fallback */}
      <div className="absolute inset-0 bg-[#f9f2e7]" />

      <motion.div
        className="absolute left-1/2 top-[-160px] h-[420px] w-[420px] rangoli-bloom opacity-65"
        animate={{ opacity: [0.45, 0.68, 0.45], scale: [0.96, 1, 0.96] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Saffron orb — top left */}
      <motion.div
        className="absolute -top-40 -left-32 h-[660px] w-[660px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(223, 108, 43, 0.22) 0%, rgba(223, 108, 43, 0) 70%)' }}
        animate={{ x: [0, 28, 0], y: [0, 14, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Indigo orb — top right */}
      <motion.div
        className="absolute top-[10%] -right-36 h-[560px] w-[560px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(47, 42, 114, 0.18) 0%, rgba(47, 42, 114, 0) 70%)' }}
        animate={{ x: [0, -24, 0], y: [0, 20, 0], scale: [1, 1.07, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Vermilion orb — bottom center/left */}
      <motion.div
        className="absolute -bottom-48 left-[10%] h-[600px] w-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(182, 58, 58, 0.14) 0%, rgba(182, 58, 58, 0) 70%)' }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      {/* Peacock orb — center right */}
      <motion.div
        className="absolute top-1/2 -right-20 h-[480px] w-[480px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(15, 118, 110, 0.14) 0%, rgba(15, 118, 110, 0) 70%)' }}
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
