'use client';

import { motion } from 'framer-motion';

export function Background() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden bg-[#050505]">
      {/* Aurora Effect */}
      <div className="absolute inset-0 opacity-[0.15] mix-blend-screen">
        <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-aurora bg-[length:200%_200%] animate-aurora pointer-events-none" 
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, var(--accent-cyan) 0%, transparent 40%),
              radial-gradient(circle at 80% 70%, var(--accent-purple) 0%, transparent 40%),
              radial-gradient(circle at 50% 50%, var(--accent-pink) 0%, transparent 50%)
            `,
            filter: 'blur(100px)',
          }}
        />
      </div>

      {/* Grid pattern with mask */}
      <div 
        className="absolute inset-0 opacity-[0.05]" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 216, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 216, 255, 0.2) 1px, transparent 1px)', 
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 80%)'
        }} 
      />
      
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
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.08]"
        style={{ 
          background: 'radial-gradient(circle, var(--accent-cyan), transparent 70%)', 
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
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.1]"
        style={{ 
          background: 'radial-gradient(circle, var(--accent-purple), transparent 70%)', 
          filter: 'blur(100px)' 
        }}
      />

      {/* Noise Texture Layer */}
      <div className="noise" />
    </div>
  );
}
