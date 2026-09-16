"use client";

import * as React from "react";
import type { TCountryCode } from "countries-list";
import { DottedMap } from "@/registry/magicui/dotted-map";
import type { Marker } from "@/registry/magicui/dotted-map";

type CountryCode = Lowercase<TCountryCode>;

type MyMarker = Marker & {
  overlay: {
    countryCode: CountryCode;
    label: string;
  };
};

const markers: MyMarker[] = [
  {
    lat: 37.5665,
    lng: 126.978,
    size: 2.8,
    overlay: { countryCode: "kr", label: "Seoul" },
  },
  {
    lat: 40.7128,
    lng: -74.006,
    size: 2.8,
    overlay: { countryCode: "us", label: "NYC" },
  },
];

export function DottedMapDemo() {
  const id = React.useId();
  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)]">
      <div className="absolute inset-0 bg-radial from-transparent to-[var(--bg-void)] opacity-80" />
      <DottedMap<MyMarker>
        markers={markers}
        renderMarkerOverlay={({ marker, x, y, r, index }) => {
          const { countryCode, label } = marker.overlay;
          const href = `https://flagcdn.com/w80/${countryCode}.webp`;

          const clipId = `${id}-flag-clip-${index}`.replace(/:/g, "-");
          const imgR = r * 0.75;

          const fontSize = r * 0.9;
          const pillH = r * 1.5;
          const pillW = label.length * (fontSize * 0.62) + r * 1.4;
          const pillX = x + r + r * 0.6;
          const pillY = y - pillH / 2;

          return (
            <g style={{ pointerEvents: "none" }}>
              <clipPath id={clipId}>
                <circle cx={x} cy={y} r={imgR} />
              </clipPath>

              <image
                href={href}
                x={x - imgR}
                y={y - imgR}
                width={imgR * 2}
                height={imgR * 2}
                preserveAspectRatio="xMidYMid slice"
                clipPath={`url(#${clipId})`}
              />

              <rect
                x={pillX}
                y={pillY}
                width={pillW}
                height={pillH}
                rx={pillH / 2}
                fill="rgba(0,0,0,0.75)"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth={0.2}
              />
              <text
                x={pillX + r * 0.7}
                y={y + fontSize * 0.35}
                fontSize={fontSize}
                fill="white"
                fontFamily="var(--font-mono)"
                fontWeight="bold"
              >
                {label}
              </text>
            </g>
          );
        }}
      />
    </div>
  );
}

export default DottedMapDemo;
