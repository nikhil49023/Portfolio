'use client';

import { motion } from 'framer-motion';

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[var(--bg-void)]">
      {/* Cyber Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(var(--border-subtle)_1px,transparent_1px),linear-gradient(90deg,var(--border-subtle)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Floating Shader Gradients (Mesh blobs) */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.15, 0.9, 1],
          rotate: [0, 120, 240, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: 'radial-gradient(circle, var(--bg-gradient-1) 0%, transparent 70%)',
        }}
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] min-w-[300px] min-h-[300px] rounded-full blur-[80px] md:blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -90, 60, 0],
          y: [0, 70, -50, 0],
          scale: [1, 0.9, 1.1, 1],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: 'radial-gradient(circle, var(--bg-gradient-2) 0%, transparent 70%)',
        }}
        className="absolute -bottom-[10%] -right-[10%] w-[60vw] h-[60vw] min-w-[350px] min-h-[350px] rounded-full blur-[90px] md:blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, 60, -70, 0],
          y: [0, 80, -60, 0],
          scale: [1, 1.08, 0.92, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: 'radial-gradient(circle, var(--bg-gradient-3) 0%, transparent 70%)',
        }}
        className="absolute top-[35%] left-[25%] w-[45vw] h-[45vw] min-w-[280px] min-h-[280px] rounded-full blur-[80px] md:blur-[110px]"
      />
    </div>
  );
}
