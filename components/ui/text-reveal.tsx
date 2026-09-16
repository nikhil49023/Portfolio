"use client";

import React, { FC, ReactNode, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TextRevealProps {
  children: string;
  className?: string;
  containerClassName?: string;
}

export const TextReveal: FC<TextRevealProps> = ({
  children,
  className,
  containerClassName,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.9", "end 0.25"],
  });

  const words = children.split(" ");

  return (
    <div
      ref={targetRef}
      className={cn("relative z-0 min-h-[140vh] sm:min-h-[160vh] flex items-start", containerClassName)}
    >
      <div className="sticky top-0 mx-auto flex min-h-[60vh] sm:min-h-[70vh] max-w-5xl items-center bg-transparent px-4 sm:px-8 py-16">
        <p
          className={cn(
            "flex flex-wrap text-2xl font-bold font-display text-[var(--ink-faint)] dark:text-[var(--ink-faint)] sm:text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight",
            className
          )}
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative mx-1 sm:mx-1.5 inline-block">
      <span className="absolute opacity-20 select-none text-[var(--ink-muted)]">
        {children}
      </span>
      <motion.span
        style={{ opacity }}
        className="text-[var(--ink-primary)] selection:bg-[var(--brand-primary)] selection:text-[var(--bg-void)]"
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextReveal;
