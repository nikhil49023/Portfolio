"use client";

import React from "react";
import { Meteors } from "@/registry/magicui/meteors";

export function MeteorDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-void)]">
      <Meteors number={30} />
      <span className="pointer-events-none bg-gradient-to-b from-[var(--ink-primary)] to-[var(--ink-muted)]/30 bg-clip-text text-center text-8xl leading-none font-bold whitespace-pre-wrap text-transparent font-display">
        Meteors
      </span>
    </div>
  );
}

export default MeteorDemo;
