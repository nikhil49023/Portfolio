'use client';

import { motion } from 'framer-motion';

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Base light violet layer */}
      <div className="absolute inset-0 bg-[linear-gradient(150deg,#ffffff_0%,#faf8ff_50%,#f5f3ff_100%)]" />

      {/* Violet orb — top left */}
      <motion.div
        className="absolute -top-40 -left-32 h-[660px] w-[660px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.13) 0%, rgba(124,58,237,0) 70%)' }}
        animate={{ x: [0, 28, 0], y: [0, 14, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Cyan orb — top right */}
      <motion.div
        className="absolute top-[10%] -right-36 h-[560px] w-[560px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(8,145,178,0.1) 0%, rgba(8,145,178,0) 70%)' }}
        animate={{ x: [0, -24, 0], y: [0, 20, 0], scale: [1, 1.07, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Purple orb — bottom center */}
      <motion.div
        className="absolute -bottom-48 left-[20%] h-[600px] w-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.09) 0%, rgba(168,85,247,0) 70%)' }}
        animate={{ x: [0, 22, 0], y: [0, -18, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      {/* Pink micro orb — bottom right */}
      <motion.div
        className="absolute bottom-[20%] -right-20 h-[380px] w-[380px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.07) 0%, rgba(236,72,153,0) 70%)' }}
        animate={{ x: [0, -16, 0], y: [0, -12, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(109,40,217,1) 1px, transparent 1px), linear-gradient(90deg, rgba(109,40,217,1) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(109,40,217,0.15) 1px, transparent 0)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 100%)',
        }}
      />
    </div>
  );
}
