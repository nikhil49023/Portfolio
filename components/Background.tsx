'use client';

import { motion } from 'framer-motion';

export function Background() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden bg-[#050407]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(241,216,154,0.11),transparent_34%),linear-gradient(180deg,#050407_0%,#0d080c_45%,#050407_100%)]" />

      {/* Slow luxury color wash */}
      <div className="absolute inset-0 opacity-[0.18] mix-blend-screen">
        <div className="absolute top-[-20%] left-[-15%] w-[130%] h-[130%] bg-aurora bg-[length:240%_240%] animate-aurora pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(circle at 18% 28%, rgba(216,183,110,0.9) 0%, transparent 34%),
              radial-gradient(circle at 76% 22%, rgba(122,36,61,0.9) 0%, transparent 34%),
              radial-gradient(circle at 54% 76%, rgba(31,122,98,0.75) 0%, transparent 38%)
            `,
            filter: 'blur(110px)',
          }}
        />
      </div>

      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'linear-gradient(rgba(241,216,154,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(241,216,154,0.14) 1px, transparent 1px)',
          backgroundSize: '96px 96px',
          maskImage: 'radial-gradient(circle at 50% 35%, black, transparent 74%)',
        }}
      />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(115deg,transparent_0%,transparent_47%,rgba(241,216,154,0.16)_48%,transparent_49%,transparent_100%)] [background-size:180px_180px]" />
      
      {/* Animated Floating Glows */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 left-1/4 w-[620px] h-[620px] rounded-full opacity-[0.12]"
        style={{ 
          background: 'radial-gradient(circle, rgba(216,183,110,0.55), transparent 70%)',
          filter: 'blur(120px)' 
        }}
      />

      <motion.div
        animate={{
          x: [0, -80, 120, 0],
          y: [0, 120, -60, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/4 right-1/4 w-[520px] h-[520px] rounded-full opacity-[0.12]"
        style={{ 
          background: 'radial-gradient(circle, rgba(122,36,61,0.65), transparent 70%)',
          filter: 'blur(100px)' 
        }}
      />

      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-cyan/10 opacity-50"
      />

      {/* Noise Texture Layer */}
      <div className="noise" />
    </div>
  );
}
