"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TerminalProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  hideHeader?: boolean;
  title?: string;
}

export function Terminal({
  children,
  className,
  hideHeader = false,
  title = "bash // runtime_init.sh",
  ...props
}: TerminalProps) {
  return (
    <div
      className={cn(
        "z-0 h-full w-full font-mono text-xs overflow-hidden flex flex-col bg-[var(--bg-void)] border border-[var(--border-subtle)]",
        className
      )}
      {...props}
    >
      {/* Top Window Header */}
      {!hideHeader && (
        <div className="flex flex-row items-center justify-between border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] px-4 py-2.5">
          <div className="flex flex-row gap-1.5 items-center">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
          </div>
          <div className="text-[10px] text-[var(--ink-muted)] font-bold tracking-wider uppercase flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-primary)] animate-pulse" />
            <span>{title}</span>
          </div>
          <div className="w-10" />
        </div>
      )}

      {/* Terminal Content Body */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-2.5 text-left select-text">
        {children}
      </div>
    </div>
  );
}

export interface AnimatedSpanProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedSpan({
  children,
  delay = 0,
  className,
}: AnimatedSpanProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: delay / 1000 }}
      className={cn("flex items-center gap-2 leading-relaxed font-mono text-xs", className)}
    >
      {children}
    </motion.div>
  );
}

export interface TypingAnimationProps {
  children: string;
  duration?: number;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}

export function TypingAnimation({
  children,
  duration = 35,
  delay = 0,
  className,
  as: Component = "div",
}: TypingAnimationProps) {
  const text = typeof children === "string" ? children : String(children);
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayedText(text.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, duration);

    return () => clearInterval(interval);
  }, [started, text, duration]);

  const Comp = Component as any;

  return (
    <Comp
      className={cn("leading-relaxed flex items-center gap-1 font-mono text-xs", className)}
    >
      <span>{displayedText}</span>
      {displayedText.length < text.length && (
        <span className="w-1.5 h-3.5 bg-[var(--brand-primary)] animate-pulse inline-block" />
      )}
    </Comp>
  );
}

export default Terminal;
