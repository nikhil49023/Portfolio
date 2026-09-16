"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface ArcBeaconProps {
  /** Size of the beacon matrix container in pixels (default: 64) */
  size?: number;
  /** Radius of individual dots in pixels (default: 3.5) */
  dotRadius?: number;
  /** Rotation duration in seconds (default: 1.4) */
  speed?: number;
  /** Optional label beneath the beacon */
  label?: string;
  /** Active beacon color class or color string */
  activeColor?: string;
  /** Base inactive color class or color string */
  baseColor?: string;
  /** Custom class name */
  className?: string;
}

// 21-dot circular matrix coordinates (5x5 grid with corners omitted)
const MATRIX_DOTS: Array<{ x: number; y: number; angle: number; dist: number }> = [];

for (let r = -2; r <= 2; r++) {
  for (let c = -2; c <= 2; c++) {
    // Skip 4 corner points for a perfect circular / disc geometry (3-5-5-5-3 layout)
    if (Math.abs(r) === 2 && Math.abs(c) === 2) continue;

    const angle = (Math.atan2(r, c) * 180) / Math.PI; // -180 to 180
    const normalizedAngle = (angle + 360 + 90) % 360; // 0 to 360 starting from top (12 o'clock)
    const dist = Math.sqrt(r * r + c * c);

    MATRIX_DOTS.push({
      x: c,
      y: r,
      angle: normalizedAngle,
      dist,
    });
  }
}

export function ArcBeacon({
  size = 64,
  dotRadius = 3.2,
  speed = 1.4,
  label = "ARC BEACON",
  className,
}: ArcBeaconProps) {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let animFrame: number;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000;
      const currentAngle = ((elapsed / speed) * 360) % 360;
      setRotation(currentAngle);
      animFrame = requestAnimationFrame(animate);
    };

    animFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrame);
  }, [speed]);

  const viewBoxSize = 100;
  const center = viewBoxSize / 2;
  const gridSpacing = 16;

  return (
    <div className={cn("inline-flex flex-col items-center justify-center select-none", className)}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        className="overflow-visible"
        aria-label="Loading indicator"
        role="status"
      >
        {MATRIX_DOTS.map((dot, idx) => {
          const posX = center + dot.x * gridSpacing;
          const posY = center + dot.y * gridSpacing;

          // Calculate angular distance between current beacon sweep angle and dot angle
          let angleDiff = (rotation - dot.angle + 360) % 360; // 0 to 360 (0 = head of beacon)

          // Exponential angular decay curve (sweeping beacon tail)
          let opacity = 0.12; // Base ambient dot opacity

          if (dot.x === 0 && dot.y === 0) {
            // Center core dot pulses with rotation
            opacity = 0.4 + 0.6 * Math.abs(Math.sin((rotation * Math.PI) / 180));
          } else {
            // Radial beam width (~120 degree trail)
            const trailLength = 140;
            if (angleDiff <= trailLength) {
              const progress = 1 - angleDiff / trailLength;
              opacity = 0.12 + 0.88 * Math.pow(progress, 2.2);
            }
          }

          return (
            <circle
              key={idx}
              cx={posX}
              cy={posY}
              r={dotRadius}
              className="fill-zinc-950 dark:fill-zinc-100 transition-opacity duration-75"
              style={{
                opacity,
              }}
            />
          );
        })}
      </svg>

      {label && (
        <span className="mt-3.5 font-mono text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.25em] text-zinc-600 dark:text-zinc-400">
          {label}
        </span>
      )}
    </div>
  );
}

export default ArcBeacon;
