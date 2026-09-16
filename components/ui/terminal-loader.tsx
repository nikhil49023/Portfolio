"use client";

import React, { useEffect, useState, useMemo } from "react";
import { cn } from "@/lib/utils";

interface TerminalLoaderProps {
  rows?: number;
  cols?: number;
  blockWidth?: number;
  speed?: number;
  color?: string;
  bgColor?: string;
  className?: string;
}

export default function TerminalLoader({
  rows = 5,
  cols = 40,
  blockWidth = 3,
  speed = 50,
  color = "text-[#D71920]",
  bgColor = "bg-[#D71920]",
  className,
}: TerminalLoaderProps) {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  const totalBlocks = useMemo(() => rows * cols, [rows, cols]);

  useEffect(() => {
    let currentIdx = 0;
    const interval = setInterval(() => {
      setActiveIndices(() => {
        const nextIndices: number[] = [];
        for (let r = 0; r < rows; r++) {
          const base = r * cols;
          for (let w = 0; w < blockWidth; w++) {
            const colPos = (currentIdx + w + r * 3) % cols;
            nextIndices.push(base + colPos);
          }
        }
        return nextIndices;
      });
      currentIdx = (currentIdx + 1) % cols;
    }, speed);

    return () => clearInterval(interval);
  }, [rows, cols, blockWidth, speed]);

  return (
    <div
      className={cn(
        "font-mono select-none overflow-hidden rounded-lg p-3 bg-black/90 border border-white/10 shadow-inner inline-block",
        className
      )}
      aria-label="Terminal Memory Loader"
    >
      <div
        className="grid gap-[2px]"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
        }}
      >
        {Array.from({ length: totalBlocks }).map((_, i) => {
          const isActive = activeIndices.includes(i);
          return (
            <div
              key={i}
              className={cn(
                "w-1.5 h-2.5 sm:w-2 sm:h-3 rounded-[1px] transition-all duration-75",
                isActive
                  ? `${bgColor} opacity-100 shadow-[0_0_6px_currentColor]`
                  : "bg-white/5 opacity-20"
              )}
            />
          );
        })}
      </div>
    </div>
  );
}

export { TerminalLoader };
