"use client";

import React, { useMemo } from "react";
// @ts-ignore
import DottedMapLib from "dotted-map";
import { cn } from "@/lib/utils";

export interface Marker {
  lat: number;
  lng: number;
  size?: number;
  color?: string;
  [key: string]: any;
}

export interface DottedMapProps<T extends Marker = Marker>
  extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  mapSamples?: number;
  dotRadius?: number;
  dotColor?: string;
  markers?: T[];
  renderMarkerOverlay?: (props: {
    marker: T;
    x: number;
    y: number;
    r: number;
    index: number;
  }) => React.ReactNode;
  className?: string;
}

export function DottedMap<T extends Marker = Marker>({
  width = 120,
  height = 84, // Higher resolution grid: denser, finer dots
  dotRadius = 0.14, // Smaller micro-dot radius
  dotColor = "currentColor",
  markers = [],
  renderMarkerOverlay,
  className,
  ...props
}: DottedMapProps<T>) {
  const { points, bounds, projectedMarkers } = useMemo(() => {
    try {
      const DMapConstructor: any =
        typeof DottedMapLib === "function"
          ? DottedMapLib
          : (DottedMapLib as any)?.default || DottedMapLib;

      const map = new DMapConstructor({
        height: height,
        grid: "diagonal",
      });

      const pts: Array<{ x: number; y: number }> = map.getPoints() || [];

      // Project pins with coordinates
      const prjMarkers = markers.map((m) => {
        const pin = map.getPin({ lat: m.lat, lng: m.lng });
        return {
          marker: m,
          x: pin?.x ?? 0,
          y: pin?.y ?? 0,
          r: m.size ?? dotRadius,
        };
      });

      return {
        points: pts,
        bounds: {
          width: map.image?.width || map.width || 120,
          height: map.image?.height || map.height || 60,
        },
        projectedMarkers: prjMarkers,
      };
    } catch {
      return {
        points: [],
        bounds: { width: 120, height: 60 },
        projectedMarkers: [],
      };
    }
  }, [height, markers, dotRadius]);

  return (
    <svg
      viewBox={`0 0 ${bounds.width} ${bounds.height}`}
      className={cn("w-full h-full text-black dark:text-white", className)}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      {/* Background Dots: Black in Light Mode, White in Dark Mode */}
      <g fill={dotColor}>
        {points.map((pt, i) => (
          <circle key={i} cx={pt.x} cy={pt.y} r={dotRadius} />
        ))}
      </g>

      {/* Markers: Hyderabad single red dot of exact same size */}
      <g>
        {projectedMarkers.map(({ marker, x, y, r }, idx) => {
          if (renderMarkerOverlay) {
            return (
              <React.Fragment key={idx}>
                {renderMarkerOverlay({
                  marker,
                  x,
                  y,
                  r,
                  index: idx,
                })}
              </React.Fragment>
            );
          }

          return (
            <circle
              key={idx}
              cx={x}
              cy={y}
              r={dotRadius}
              fill={marker.color || "#D71920"}
            />
          );
        })}
      </g>
    </svg>
  );
}

export default DottedMap;
