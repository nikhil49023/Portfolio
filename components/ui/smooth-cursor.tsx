"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface SmoothCursorProps {
  className?: string;
  springConfig?: {
    damping?: number;
    stiffness?: number;
    mass?: number;
  };
}

export function SmoothCursor({
  className,
  springConfig = { damping: 28, stiffness: 350, mass: 0.15 },
}: SmoothCursorProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const rawMouseX = useMotionValue(-100);
  const rawMouseY = useMotionValue(-100);

  const cursorX = useSpring(rawMouseX, springConfig);
  const cursorY = useSpring(rawMouseY, springConfig);

  useEffect(() => {
    // Disable on touch devices or coarse pointers
    if (typeof window !== "undefined") {
      const touchCheck =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches;
      
      if (touchCheck) {
        setIsTouch(true);
        return;
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      rawMouseX.set(e.clientX);
      rawMouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible, rawMouseX, rawMouseY]);

  if (isTouch || prefersReducedMotion) {
    return null;
  }

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ opacity: { duration: 0.15 } }}
      className={cn(
        "pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 will-change-transform hidden md:block",
        className
      )}
    >
      {/* High-Tech Precision Cursor */}
      <div className="relative flex items-center justify-center">
        {/* Ambient Subtle Aura */}
        <div className="absolute w-8 h-8 rounded-full bg-[radial-gradient(circle,color-mix(in_oklch,var(--brand-primary)_30%,transparent),transparent_70%)] pointer-events-none" />

        {/* Outer Minimalist Reticle Ring */}
        <div className="w-5 h-5 rounded-full border border-[var(--brand-primary)]/40 flex items-center justify-center shadow-[0_0_10px_color-mix(in_oklch,var(--brand-primary)_20%,transparent)]">
          {/* Inner Core Dot */}
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-primary)]" />
        </div>
      </div>
    </motion.div>
  );
}

export default SmoothCursor;
