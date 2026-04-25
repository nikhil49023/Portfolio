'use client';

import { motion } from 'framer-motion';

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[#faf9f6]" />

      {/* Animated gradient orbs - light theme */}
      <motion.div
        className="floating-orb w-[550px] h-[380px] left-[-8%] top-[8%]"
        style={{ background: 'radial-gradient(circle, rgba(124, 58, 237, 0.18), transparent 70%)' }}
        animate={{ x: [0, 35, 0], y: [0, -25, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="floating-orb w-[480px] h-[340px] right-[-3%] top-[12%]"
        style={{ background: 'radial-gradient(circle, rgba(6, 182, 212, 0.14), transparent 70%)' }}
        animate={{ x: [0, -30, 0], y: [0, 20, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />
      <motion.div
        className="floating-orb w-[400px] h-[300px] left-[65%] bottom-[8%]"
        style={{ background: 'radial-gradient(circle, rgba(236, 72, 153, 0.12), transparent 70%)' }}
        animate={{ x: [0, 20, 0], y: [0, -15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
      />
      <motion.div
        className="floating-orb w-[350px] h-[260px] left-[3%] bottom-[18%]"
        style={{ background: 'radial-gradient(circle, rgba(124, 58, 237, 0.1), transparent 70%)' }}
        animate={{ x: [0, -15, 0], y: [0, 25, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Subtle mesh pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(55deg, rgba(124, 58, 237, 0.35) 0 1px, transparent 1px 18px),
            repeating-linear-gradient(-55deg, rgba(6, 182, 212, 0.3) 0 1px, transparent 1px 18px)
          `,
          backgroundSize: '90px 90px',
        }}
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(26, 26, 46, 0.25) 1px, transparent 0)',
          backgroundSize: '22px 22px',
          maskImage: 'radial-gradient(ellipse 85% 65% at 50% 45%, black 8%, transparent 92%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 65% at 50% 45%, black 8%, transparent 92%)',
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(124, 58, 237, 0.04), transparent 35%, rgba(6, 182, 212, 0.025)),
            linear-gradient(to top, rgba(236, 72, 153, 0.03), transparent 45%)
          `,
        }}
      />
    </div>
  );
}