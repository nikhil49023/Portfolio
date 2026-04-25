'use client';

import { motion } from 'framer-motion';

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]" />

      {/* Animated gradient orbs */}
      <motion.div
        className="floating-orb w-[600px] h-[400px] left-[-10%] top-[5%]"
        style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.25), transparent 70%)' }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="floating-orb w-[500px] h-[350px] right-[-5%] top-[15%]"
        style={{ background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2), transparent 70%)' }}
        animate={{ x: [0, -35, 0], y: [0, 25, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="floating-orb w-[450px] h-[320px] left-[60%] bottom-[10%]"
        style={{ background: 'radial-gradient(circle, rgba(244, 114, 182, 0.18), transparent 70%)' }}
        animate={{ x: [0, 25, 0], y: [0, -20, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />
      <motion.div
        className="floating-orb w-[380px] h-[280px] left-[5%] bottom-[20%]"
        style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15), transparent 70%)' }}
        animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Geometric mesh pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(60deg, rgba(139, 92, 246, 0.4) 0 1px, transparent 1px 20px),
            repeating-linear-gradient(-60deg, rgba(6, 182, 212, 0.35) 0 1px, transparent 1px 20px)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.3) 1px, transparent 0)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 10%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 10%, transparent 90%)',
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(139, 92, 246, 0.05), transparent 30%, rgba(6, 182, 212, 0.03)),
            linear-gradient(to top, rgba(244, 114, 182, 0.04), transparent 40%)
          `,
        }}
      />
    </div>
  );
}