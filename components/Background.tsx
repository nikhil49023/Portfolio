'use client';

import React from 'react';

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[var(--bg-void)]">
      {/* ── Cyber-Physical Micro Dot-Matrix Raster Grid ── */}
      <div 
        className="absolute inset-0 opacity-[0.07] dark:opacity-[0.12]"
        style={{
          backgroundImage: `radial-gradient(var(--ink-primary) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* ── Subtle Technical PCB Circuit Lines ── */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(var(--border-active) 1px, transparent 1px), linear-gradient(90deg, var(--border-active) 1px, transparent 1px)`,
          backgroundSize: '96px 96px',
        }}
      />

      {/* ── Top Ambient Glyph Illumination Rails ── */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(215,25,32,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 right-1/4 translate-x-1/2 w-[400px] h-[250px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none" />

      {/* ── Viewport Edge Alignment Reticles ── */}
      <div className="absolute top-4 left-4 font-mono text-[9px] text-[var(--ink-muted)] opacity-30 select-none hidden lg:block">
        + [SYS_ALIGN: 0,0]
      </div>
      <div className="absolute top-4 right-4 font-mono text-[9px] text-[var(--ink-muted)] opacity-30 select-none hidden lg:block">
        + [SYS_ALIGN: 1280,0]
      </div>
      <div className="absolute bottom-4 left-4 font-mono text-[9px] text-[var(--ink-muted)] opacity-30 select-none hidden lg:block">
        + [NEURAL_OS // v2.6]
      </div>
      <div className="absolute bottom-4 right-4 font-mono text-[9px] text-[var(--ink-muted)] opacity-30 select-none hidden lg:block">
        + [AUTONOMOUS_ROBOTICS // LIVE]
      </div>
    </div>
  );
}
