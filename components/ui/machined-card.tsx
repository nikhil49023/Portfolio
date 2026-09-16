'use client';

import React from 'react';

interface MachinedCardProps {
  children: React.ReactNode;
  tag?: string;
  status?: string;
  className?: string;
  innerClassName?: string;
  alignmentLabel?: string;
}

export const MachinedCard: React.FC<MachinedCardProps> = ({
  children,
  tag,
  status,
  className = '',
  innerClassName = '',
  alignmentLabel,
}) => {
  return (
    <div
      className={`group relative p-1.5 rounded-[24px] bg-gradient-to-b from-white/10 to-white/5 dark:from-white/10 dark:to-white/[0.02] border border-black/5 dark:border-white/10 shadow-xl transition-all duration-300 hover:border-black/20 dark:hover:border-white/20 ${className}`}
    >
      {/* Outer Chassis Specular Rim */}
      <div
        className={`relative p-5 sm:p-6 rounded-[calc(24px-6px)] bg-[var(--bg-surface)] dark:bg-[#0C0C0E] border border-black/5 dark:border-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] overflow-hidden ${innerClassName}`}
      >
        {/* Top Telemetry Header (if provided) */}
        {(tag || status || alignmentLabel) && (
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] dark:border-white/5 pb-3 mb-4 font-mono text-[10px] text-[var(--ink-muted)] uppercase tracking-widest select-none">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] shadow-[0_0_6px_#D71920]" />
              {tag && <span className="font-semibold text-[var(--ink-secondary)]">{tag}</span>}
            </div>
            <div className="flex items-center gap-3">
              {status && <span className="text-[var(--ink-muted)]">{status}</span>}
              {alignmentLabel && (
                <span className="opacity-40 hidden sm:inline-block">[{alignmentLabel}]</span>
              )}
            </div>
          </div>
        )}

        {/* Content */}
        {children}

        {/* Subtle Bottom Technical Crosshairs */}
        <div className="absolute bottom-2 right-3 font-mono text-[8px] text-[var(--ink-muted)] opacity-20 pointer-events-none select-none">
          + // 0x49
        </div>
      </div>
    </div>
  );
};
