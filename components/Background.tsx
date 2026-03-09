'use client';

import { motion } from 'framer-motion';

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Base layer already handled in layout or here as fallback */}
      <div className="absolute inset-0 bg-[#f0f9ff]" />

      {/* Cobalt orb — top left */}
      <motion.div
        className="absolute -top-40 -left-32 h-[660px] w-[660px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(2, 132, 199, 0.12) 0%, rgba(2, 132, 199, 0) 70%)' }}
        animate={{ x: [0, 28, 0], y: [0, 14, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Teal orb — top right */}
      <motion.div
        className="absolute top-[10%] -right-36 h-[560px] w-[560px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(13, 148, 136, 0.08) 0%, rgba(13, 148, 136, 0) 70%)' }}
        animate={{ x: [0, -24, 0], y: [0, 20, 0], scale: [1, 1.07, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Amber orb — bottom center/left */}
      <motion.div
        className="absolute -bottom-48 left-[10%] h-[600px] w-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(245, 158, 11, 0.05) 0%, rgba(245, 158, 11, 0) 70%)' }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      {/* Sky blue orb — center right */}
      <motion.div
        className="absolute top-1/2 -right-20 h-[480px] w-[480px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(14, 165, 233, 0.06) 0%, rgba(14, 165, 233, 0) 70%)' }}
        animate={{ x: [0, -16, 0], y: [0, -12, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />

      {/* Subtle grid overlay — Sky 500 equivalent */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(14, 165, 233, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(14, 165, 233, 0.15) 1px, transparent 0)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 100%)',
        }}
      />
    </div>
  );
}
