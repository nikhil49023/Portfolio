"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Cpu,
  Database,
  Eye,
  Lock,
  Workflow,
  Sparkles,
} from "lucide-react";

export interface OrbitNode {
  id: string;
  label: string;
  sublabel?: string;
  icon: React.ReactNode;
  color?: string;
}

export interface OrbitingCirclesProps {
  className?: string;
  title?: string;
  subtitle?: string;
  nodes?: OrbitNode[];
  radius?: number;
  duration?: number;
}

const DEFAULT_NODES: OrbitNode[] = [
  {
    id: "edge-ml",
    label: "Edge ML",
    sublabel: "Gemma 4 · LiteRT (14 tok/s)",
    icon: <Cpu size={16} />,
  },
  {
    id: "synthetic-data",
    label: "Distillation",
    sublabel: "saara-ai (38 releases)",
    icon: <Database size={16} />,
  },
  {
    id: "vision-sahi",
    label: "Perception",
    sublabel: "AerialEye (89.4% mAP)",
    icon: <Eye size={16} />,
  },
  {
    id: "local-vault",
    label: "Security",
    sublabel: "AES-256 SQLite Vault",
    icon: <Lock size={16} />,
  },
  {
    id: "agentic-loops",
    label: "Autonomy",
    sublabel: "google-adk & MCP Tools",
    icon: <Workflow size={16} />,
  },
];

export function OrbitingCircles({
  className,
  title,
  subtitle,
  nodes = DEFAULT_NODES,
  radius = 160,
  duration = 32,
}: OrbitingCirclesProps) {
  const [activeNode, setActiveNode] = useState<OrbitNode | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={cn("relative flex flex-col items-center justify-center w-full py-8 overflow-hidden", className)}>
      {/* Header Info */}
      {(title || subtitle) && (
        <div className="text-center max-w-xl mx-auto mb-8 space-y-2 px-4 z-10">
          {title && (
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[var(--ink-primary)] font-display uppercase">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-xs font-mono text-[var(--ink-secondary)] leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Orbit Container */}
      <div
        className="relative flex items-center justify-center w-[340px] h-[340px] sm:w-[420px] sm:h-[420px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          setActiveNode(null);
        }}
      >
        {/* Outer Ring Background Track */}
        <div
          className="absolute rounded-full border border-dashed border-[var(--border-subtle)]/70 pointer-events-none"
          style={{ width: radius * 2, height: radius * 2 }}
        />
        {/* Inner Ring Background Track */}
        <div
          className="absolute rounded-full border border-[var(--border-subtle)]/40 pointer-events-none"
          style={{ width: radius * 1.1, height: radius * 1.1 }}
        />

        {/* Center Glowing Core Engine */}
        <div className="relative z-10 flex items-center justify-center pointer-events-auto cursor-pointer group">
          {/* Ambient Glow */}
          <div className="absolute w-28 h-28 rounded-full bg-[radial-gradient(circle,color-mix(in_oklch,var(--brand-primary)_35%,transparent),transparent_70%)] animate-pulse pointer-events-none" />
          
          {/* Glowing Center Sphere */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full p-[1.5px] border border-[var(--brand-primary)] bg-[var(--bg-surface)] shadow-[0_0_25px_color-mix(in_oklch,var(--brand-primary)_35%,transparent)] flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-[var(--bg-surface)] flex flex-col items-center justify-center text-center p-1">
              <Sparkles size={16} className="text-[var(--brand-primary)] mb-0.5" />
              <span className="text-[9px] font-mono font-bold tracking-tight text-[var(--ink-primary)] leading-none">
                AI CORE
              </span>
              <span className="text-[7.5px] font-mono text-[var(--brand-secondary)] font-bold leading-none mt-0.5">
                ON-DEVICE
              </span>
            </div>
          </div>
        </div>

        {/* Rotating Orbit Ring (Rendered when mounted to eliminate float hydration difference) */}
        {mounted && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            animate={{ rotate: isPaused ? 0 : 360 }}
            transition={{
              repeat: Infinity,
              duration: duration,
              ease: "linear",
            }}
          >
            {nodes.map((node, index) => {
              const angle = (index / nodes.length) * 360;
              const rad = (angle * Math.PI) / 180;
              const x = (Math.cos(rad) * radius).toFixed(2);
              const y = (Math.sin(rad) * radius).toFixed(2);

              return (
                <div
                  key={node.id}
                  className="absolute flex flex-col items-center justify-center pointer-events-auto"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                  onMouseEnter={() => setActiveNode(node)}
                >
                  {/* Counter-Rotating Container so Node Stays Upright */}
                  <motion.div
                    animate={{ rotate: isPaused ? 0 : -360 }}
                    transition={{
                      repeat: Infinity,
                      duration: duration,
                      ease: "linear",
                    }}
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    {/* Node Circle with frosted halo on hover */}
                    <div
                      className={cn(
                        "w-11 h-11 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-all duration-300 shadow-md",
                        activeNode?.id === node.id
                          ? "border-[var(--brand-primary)] bg-[var(--bg-surface)] scale-110 shadow-[0_0_20px_color-mix(in_oklch,var(--brand-primary)_50%,transparent)] text-[var(--brand-primary)]"
                          : "border-[var(--border-subtle)] bg-[var(--bg-void)] text-[var(--ink-secondary)] hover:border-[var(--brand-primary)] hover:text-[var(--ink-primary)]"
                      )}
                    >
                      {node.icon}
                    </div>

                    {/* Typographic Label */}
                    <span
                      className={cn(
                        "mt-1.5 text-[11px] font-mono font-bold tracking-tight uppercase transition-colors whitespace-nowrap px-1.5 py-0.5 rounded bg-[var(--bg-surface)]/80 backdrop-blur-sm border border-[var(--border-subtle)]",
                        activeNode?.id === node.id
                          ? "text-[var(--brand-primary)] border-[var(--brand-primary)]"
                          : "text-[var(--ink-secondary)] group-hover:text-[var(--ink-primary)]"
                      )}
                    >
                      {node.label}
                    </span>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        )}
      </div>

      {/* Active Node Live Telemetry Status Banner */}
      <div className="h-10 mt-6 flex items-center justify-center z-10">
        {activeNode ? (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-4 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-xs font-mono text-[var(--ink-primary)] shadow-md flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-primary)] animate-pulse" />
            <span className="font-bold text-[var(--brand-primary)]">{activeNode.label}:</span>
            <span>{activeNode.sublabel || "Active Autonomous Node"}</span>
          </motion.div>
        ) : (
          <div className="text-[11px] font-mono text-[var(--ink-muted)] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span>Hover any subsystem node to inspect neural telemetry</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrbitingCircles;
