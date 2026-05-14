'use client';

import { motion } from 'framer-motion';

export function Background() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden bg-[#050505]">
      {/* Refined Ambient Glows */}
      <div className="absolute inset-0 opacity-[0.1] mix-blend-screen">
        <div 
          className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(247, 231, 206, 0.4) 0%, transparent 40%),
              radial-gradient(circle at 80% 20%, rgba(74, 29, 51, 0.5) 0%, transparent 40%)
            `,
            filter: 'blur(120px)',
          }}
        />
      </div>

      {/* Structured Grid (Subtle) */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '120px 120px',
        }}
      />
      
      {/* Animated Core Exhibit Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full"
        style={{ 
          background: 'radial-gradient(circle, rgba(247, 231, 206, 0.2), transparent 70%)',
          filter: 'blur(150px)' 
        }}
      />

      {/* Noise Texture Layer */}
      <div className="noise" />
    </div>
  );
}
