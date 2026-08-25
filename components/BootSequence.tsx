'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Smooth progress simulation
    const duration = 1800; // 1.8s progress loading
    const intervalTime = 15;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(nextProgress);

      if (currentStep >= steps) {
        clearInterval(interval);
        // Clean fade-out sequence
        const fadeTimeout = setTimeout(() => {
          setVisible(false);
        }, 300);

        const completeTimeout = setTimeout(() => {
          onComplete();
        }, 850);

        return () => {
          clearTimeout(fadeTimeout);
          clearTimeout(completeTimeout);
        };
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[10000] bg-[var(--bg-void)] flex flex-col items-center justify-center p-6 select-none overflow-hidden"
        >
          {/* Subtle glowing mesh backdrop that expands as loading completes */}
          <motion.div 
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.15, 0.25, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              width: '40vw',
              height: '40vw',
              background: 'radial-gradient(circle, var(--brand-primary) 0%, transparent 75%)',
              filter: 'blur(80px)',
            }}
            className="absolute z-0 pointer-events-none"
          />

          <div className="flex flex-col items-center max-w-xs w-full z-10">
            {/* Extraordinary Glossy Monogram Emblem with floating 3D tilt effect */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.85, rotateX: -20 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                rotateX: [0, 10, -8, 0],
                rotateY: [0, -12, 12, 0],
              }}
              transition={{ 
                duration: 1.8, 
                ease: [0.16, 1, 0.3, 1],
                delay: 100,
                rotateX: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                rotateY: { repeat: Infinity, duration: 7, ease: "easeInOut" }
              }}
              className="w-20 h-20 rounded-3xl border border-white/20 dark:border-white/10 flex items-center justify-center mb-10 bg-white/5 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.4)] relative overflow-hidden group"
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            >
              {/* Glossy radial overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_60%)]" />
              
              {/* Shining sweep light effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                style={{ skewX: -25, width: '50%' }}
                animate={{ x: ['-150%', '300%'] }}
                transition={{ repeat: Infinity, repeatDelay: 1.2, duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              />

              <span 
                className="font-display text-4xl italic text-[var(--ink-primary)] font-black select-none leading-none mt-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
                style={{ transform: 'translateZ(20px)' }}
              >
                SN
              </span>

              {/* Glossy inner border reflection */}
              <div className="absolute inset-[1px] rounded-[23px] border border-white/10 pointer-events-none" />
            </motion.div>

            {/* Fiber-optic style Loading Progress Bar */}
            <div className="w-44 h-[3px] bg-[var(--border-subtle)] overflow-hidden relative rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
              {/* Dynamic filled progress */}
              <motion.div
                style={{ width: `${progress}%` }}
                className="h-full bg-gradient-to-r from-[var(--brand-secondary)] to-[var(--ink-primary)] absolute left-0 top-0 rounded-full"
                transition={{ ease: "easeOut" }}
              />
              {/* Glowing lead edge that runs across the loading bar */}
              <motion.div
                style={{ left: `${Math.max(0, progress - 15)}%`, width: '15%' }}
                className="h-full bg-white absolute top-0 blur-[1px] opacity-80"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
