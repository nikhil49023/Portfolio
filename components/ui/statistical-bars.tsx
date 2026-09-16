"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Zap, ShieldCheck, Cpu, Lock, Sparkles, Activity } from "lucide-react";
import { NumberTicker } from "@/registry/magicui/number-ticker";

export interface StatBarItem {
  label: string;
  sublabel: string;
  percentage: number;
  isHighlighted?: boolean;
  highlightBadge?: string;
  metricDetail?: string;
}

export interface MetricDimension {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  badge: string;
  title: string;
  subtitle: string;
  items: StatBarItem[];
}

const DIMENSIONS: MetricDimension[] = [
  {
    id: "velocity",
    label: "Production Velocity",
    icon: Sparkles,
    badge: "10X ENGINEERING SPEED",
    title: "Hand-Written CS Internals + 10x AI Agentic Velocity",
    subtitle: "Comparing traditional linear software development against hallucinated AI vibe-coding and our hand-crafted dual architecture.",
    items: [
      {
        label: "Manual Legacy Dev",
        sublabel: "High boilerplate, slow linear iteration cycles",
        percentage: 34,
        metricDetail: "~1.2 PRs / week",
      },
      {
        label: "Fragile Vibe Coding",
        sublabel: "Hallucinated scripts, zero systems architecture grasp",
        percentage: 22,
        metricDetail: "78% runtime error rate",
      },
      {
        label: "Dual Architecture",
        sublabel: "Rock-solid native CS core + 10x autonomous AI velocity",
        percentage: 99,
        isHighlighted: true,
        highlightBadge: "99% Production Velocity",
        metricDetail: "38 stable PyPI/NPM releases",
      },
      {
        label: "Cloud API Wrappers",
        sublabel: "High recurring egress tax, vendor lock-in, latency",
        percentage: 38,
        metricDetail: "Dependent on proprietary APIs",
      },
    ],
  },
  {
    id: "privacy",
    label: "Data Privacy & Vault",
    icon: Lock,
    badge: "DPDP ACT 2023 COMPLIANCE",
    title: "100% On-Device Zero-Cloud Privacy Guarantee",
    subtitle: "Benchmarking personal data exposure across cloud personal finance harvesters vs. Vitt's local AES-256 SQLite encrypted vault.",
    items: [
      {
        label: "Cloud SaaS Finance",
        sublabel: "Third-party server telemetry & plaintext parsing",
        percentage: 16,
        metricDetail: "Centralized server storage",
      },
      {
        label: "SMS Scraper Apps",
        sublabel: "Excessive invasive Android permissions & ad trackers",
        percentage: 28,
        metricDetail: "Broad SMS read permissions",
      },
      {
        label: "Vitt Local Vault",
        sublabel: "Local Notification Listener + AES-256 SQLite encryption",
        percentage: 100,
        isHighlighted: true,
        highlightBadge: "100% Offline Privacy",
        metricDetail: "Zero cloud egress / DPDP compliant",
      },
      {
        label: "Web Browser Ext.",
        sublabel: "Vulnerable to cross-origin injection & scrapers",
        percentage: 24,
        metricDetail: "Remote analytics logging",
      },
    ],
  },
  {
    id: "edge-inference",
    label: "Edge ML Efficiency",
    icon: Cpu,
    badge: "SUB-WATT NPU INFERENCE",
    title: "Quantized Edge Acceleration vs. Cloud Roundtrip",
    subtitle: "Measuring model throughput, memory compression, and inference latency on low-power Google Coral & mobile NPUs.",
    items: [
      {
        label: "Cloud LLM Egress",
        sublabel: "Network roundtrip, jitter, cold starts, rate limits",
        percentage: 32,
        metricDetail: "~450ms network latency",
      },
      {
        label: "Unquantized FP32",
        sublabel: "Excessive VRAM consumption, thermal throttling",
        percentage: 44,
        metricDetail: ">1.8GB model footprint",
      },
      {
        label: "Gemma 4 LiteRT",
        sublabel: "INT8 quantization running locally on mobile NPU",
        percentage: 98,
        isHighlighted: true,
        highlightBadge: "~14 tok/s Edge Throughput",
        metricDetail: "Sub-watt power draw & instant wake",
      },
      {
        label: "Standard PyTorch",
        sublabel: "Desktop GPU dependent, heavy binary runtime",
        percentage: 46,
        metricDetail: "Non-portable mobile stack",
      },
    ],
  },
];

export function StatisticalBars() {
  const [activeDimIdx, setActiveDimIdx] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const activeDimension = DIMENSIONS[activeDimIdx];
  const ActiveIcon = activeDimension.icon;

  return (
    <div className="w-full py-6 flex flex-col items-center select-none">
      {/* Dimension Switcher Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8 z-10">
        {DIMENSIONS.map((dim, idx) => {
          const Icon = dim.icon;
          const isSelected = activeDimIdx === idx;
          return (
            <button
              key={dim.id}
              onClick={() => setActiveDimIdx(idx)}
              className={cn(
                "flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-300 cursor-pointer border",
                isSelected
                  ? "border-[var(--brand-primary)] bg-[var(--brand-primary)] text-[var(--bg-void)] font-bold shadow-md scale-105"
                  : "border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] hover:border-[var(--border-active)]"
              )}
            >
              <Icon size={13} className={isSelected ? "text-[var(--bg-void)]" : "text-[var(--brand-primary)]"} />
              <span>{dim.label}</span>
            </button>
          );
        })}
      </div>

      {/* Header Info with Smooth Morphing */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeDimension.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="text-center max-w-2xl mx-auto mb-10 space-y-2.5 px-4"
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[10px] font-mono font-bold tracking-widest uppercase text-[var(--brand-secondary)]">
            <ActiveIcon size={11} className="text-[var(--brand-primary)]" />
            <span>{activeDimension.badge}</span>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[var(--ink-primary)] font-display uppercase">
            {activeDimension.title}
          </h3>

          <p className="text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed font-mono">
            {activeDimension.subtitle}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* 4 Fluid Bars Comparison Grid */}
      <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-end px-4">
        {activeDimension.items.map((item, idx) => {
          const isHovered = hoveredIdx === idx;

          return (
            <div
              key={item.label}
              className="flex flex-col items-center group w-full cursor-pointer"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Top highlight indicator tag */}
              <div className="h-9 mb-2 flex items-center justify-center">
                {item.isHighlighted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative flex flex-col items-center"
                  >
                    <span className="px-2.5 py-0.5 rounded-full bg-[var(--brand-primary)] text-[var(--bg-void)] text-[10px] font-mono font-extrabold tracking-wider uppercase shadow-md flex items-center gap-1">
                      <ShieldCheck size={10} />
                      <span>{item.highlightBadge || "OPTIMIZED"}</span>
                    </span>
                    <span className="w-1.5 h-1.5 bg-[var(--brand-primary)] rotate-45 -mt-0.5" />
                  </motion.div>
                )}
              </div>

              {/* Fluid Bar Container */}
              <motion.div
                layout
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={cn(
                  "relative w-full h-[280px] sm:h-[320px] rounded-3xl overflow-hidden flex flex-col justify-end p-2 transition-all duration-300 shadow-md",
                  item.isHighlighted
                    ? "bg-[var(--brand-primary)] shadow-[0_0_35px_color-mix(in_oklch,var(--brand-primary)_40%,transparent)] border border-[var(--brand-primary)]"
                    : isHovered
                    ? "border-[var(--border-active)] bg-[var(--bg-surface)]"
                    : "border border-[var(--border-subtle)] bg-[var(--bg-surface)]"
                )}
              >
                {/* Diagonal striped hatching pattern on non-highlighted bars */}
                {!item.isHighlighted && (
                  <div
                    className={cn(
                      "absolute inset-0 transition-opacity duration-300",
                      isHovered ? "opacity-[0.35] dark:opacity-[0.3]" : "opacity-[0.22] dark:opacity-[0.16]"
                    )}
                    style={{
                      backgroundImage: `repeating-linear-gradient(
                        -45deg,
                        currentColor,
                        currentColor 1.5px,
                        transparent 1.5px,
                        transparent 8px
                      )`,
                    }}
                  />
                )}

                {/* Fluid Spring Rising Fill */}
                {item.isHighlighted ? (
                  /* Highlighted Full Fluid Bar with Wave Pulse */
                  <motion.div
                    key={`${activeDimension.id}-${item.label}`}
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    transition={{
                      type: "spring",
                      stiffness: 120,
                      damping: 14,
                      mass: 0.7,
                    }}
                    className="relative w-full flex flex-col justify-between items-center py-4 text-[var(--bg-void)] overflow-hidden"
                  >
                    {/* Glowing Top Pill with Animated Number Ticker */}
                    <div className="px-4 py-1 rounded-full bg-black/20 backdrop-blur-md border border-white/25 text-sm font-display font-extrabold tracking-wider flex items-center shadow-sm">
                      <NumberTicker value={item.percentage} className="text-inherit dark:text-inherit font-display" />
                      <span>%</span>
                    </div>

                    {/* Granular Micro Telemetry */}
                    <div className="text-[9px] font-mono text-center font-bold px-2 py-1 bg-black/15 rounded-md border border-white/10 max-w-[90%] truncate">
                      {item.metricDetail}
                    </div>

                    <div className="w-8 h-1 rounded-full bg-black/20" />
                  </motion.div>
                ) : (
                  /* Standard Muted Bar with Frosted Percentage Pill & Fluid Height */
                  <motion.div
                    key={`${activeDimension.id}-${item.label}`}
                    initial={{ height: 0 }}
                    animate={{ height: `${item.percentage}%` }}
                    transition={{
                      type: "spring",
                      stiffness: 110,
                      damping: 16,
                      mass: 0.8,
                      delay: idx * 0.05,
                    }}
                    className="relative w-full rounded-2xl bg-[var(--bg-void)]/85 backdrop-blur-md border border-[var(--border-subtle)] flex flex-col items-center justify-center p-2.5 shadow-inner"
                  >
                    <span className="font-display font-bold text-xs sm:text-sm text-[var(--ink-primary)] flex items-center">
                      <NumberTicker value={item.percentage} className="text-inherit dark:text-inherit font-display" />
                      <span>%</span>
                    </span>
                    {isHovered && item.metricDetail && (
                      <span className="text-[8.5px] font-mono text-[var(--ink-muted)] mt-0.5 truncate max-w-[95%]">
                        {item.metricDetail}
                      </span>
                    )}
                  </motion.div>
                )}
              </motion.div>

              {/* Bottom Label */}
              <div className="mt-3 text-center space-y-0.5">
                <div
                  className={cn(
                    "text-xs font-mono font-bold tracking-tight uppercase transition-colors",
                    item.isHighlighted
                      ? "text-[var(--brand-primary)]"
                      : isHovered
                      ? "text-[var(--ink-primary)] font-extrabold"
                      : "text-[var(--ink-primary)]"
                  )}
                >
                  {item.label}
                </div>
                <div className="text-[10px] font-mono text-[var(--ink-muted)] max-w-[160px] mx-auto hidden sm:block leading-tight">
                  {item.sublabel}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StatisticalBars;
