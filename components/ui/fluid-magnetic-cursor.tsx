"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useVelocity, useTransform, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface FluidMagneticCursorProps {
  className?: string;
  magneticRadius?: number;
}

export function FluidMagneticCursor({
  className,
  magneticRadius = 45,
}: FluidMagneticCursorProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredRect, setHoveredRect] = useState<{ width: number; height: number; radius: number } | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Springs for physics-based fluid lag
  const springX = useSpring(mouseX, { damping: 28, stiffness: 400, mass: 0.2 });
  const springY = useSpring(mouseY, { damping: 28, stiffness: 400, mass: 0.2 });

  // Velocity tracking for fluid stretch
  const velocityX = useVelocity(mouseX);
  const velocityY = useVelocity(mouseY);

  const [stretch, setStretch] = useState({ scaleX: 1, scaleY: 1, angle: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice) {
      setIsTouch(true);
      return;
    }

    let activeMagneticEl: HTMLElement | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);

      const clientX = e.clientX;
      const clientY = e.clientY;

      // Calculate speed for fluid velocity elongation
      const vx = velocityX.get();
      const vy = velocityY.get();
      const speed = Math.sqrt(vx * vx + vy * vy);

      if (speed > 120 && !activeMagneticEl) {
        const maxStretch = Math.min(speed / 900, 0.45);
        const angle = Math.atan2(vy, vx) * (180 / Math.PI);
        setStretch({
          scaleX: 1 + maxStretch,
          scaleY: Math.max(0.7, 1 - maxStretch * 0.6),
          angle,
        });
      } else {
        setStretch({ scaleX: 1, scaleY: 1, angle: 0 });
      }

      // Check proximity to interactive elements (Magnetic Snapping)
      const interactables = document.querySelectorAll<HTMLElement>(
        'a, button, [data-magnetic="true"], [role="button"], input[type="submit"]'
      );

      let foundMagnetic = false;

      for (let i = 0; i < interactables.length; i++) {
        const el = interactables[i];
        const rect = el.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dist = Math.hypot(clientX - centerX, clientY - centerY);

        // Within magnetic attraction envelope
        if (dist < Math.max(rect.width, rect.height) / 2 + magneticRadius) {
          foundMagnetic = true;
          activeMagneticEl = el;

          // Subtle magnetic pull toward center
          const pullFactor = 0.35;
          const targetX = clientX + (centerX - clientX) * pullFactor;
          const targetY = clientY + (centerY - clientY) * pullFactor;

          mouseX.set(targetX);
          mouseY.set(targetY);

          setIsHovered(true);
          const computedRadius = window.getComputedStyle(el).borderRadius;
          const radiusVal = parseFloat(computedRadius) || 12;
          setHoveredRect({
            width: Math.min(rect.width + 12, 180),
            height: Math.min(rect.height + 12, 70),
            radius: Math.min(radiusVal + 6, 32),
          });
          break;
        }
      }

      if (!foundMagnetic) {
        activeMagneticEl = null;
        mouseX.set(clientX);
        mouseY.set(clientY);
        if (isHovered) {
          setIsHovered(false);
          setHoveredRect(null);
        }
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHovered(false);
      setHoveredRect(null);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible, isHovered, magneticRadius, mouseX, mouseY, velocityX, velocityY]);

  if (isTouch || prefersReducedMotion) {
    return null;
  }

  return (
    <>
      {/* ── Smart Contrast Fluid Magnetic Cursor ── */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ opacity: { duration: 0.15 } }}
        className={cn(
          "pointer-events-none fixed top-0 left-0 z-[99999] -translate-x-1/2 -translate-y-1/2 will-change-transform hidden md:block",
          className
        )}
      >
        <motion.div
          animate={
            isHovered && hoveredRect
              ? {
                  width: Math.max(hoveredRect.width, 36),
                  height: Math.max(hoveredRect.height, 36),
                  borderRadius: hoveredRect.radius,
                  rotate: 0,
                  scaleX: 1,
                  scaleY: 1,
                }
              : {
                  width: 14,
                  height: 14,
                  borderRadius: 9999,
                  rotate: stretch.angle,
                  scaleX: stretch.scaleX,
                  scaleY: stretch.scaleY,
                }
          }
          transition={{
            type: "spring",
            stiffness: 420,
            damping: 28,
            mass: 0.25,
          }}
          className={cn(
            "relative flex items-center justify-center transition-colors duration-150",
            // Smart Contrast: Invert colors via mix-blend-mode: difference against underlying layers
            "mix-blend-difference bg-white",
            isHovered ? "opacity-85 shadow-[0_0_15px_rgba(255,255,255,0.4)]" : "opacity-95"
          )}
        >
          {/* Inner focal dot when expanded */}
          {isHovered && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="w-1.5 h-1.5 rounded-full bg-black/80"
            />
          )}
        </motion.div>
      </motion.div>
    </>
  );
}

export default FluidMagneticCursor;
