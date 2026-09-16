"use client";

import React, { useEffect, useState, useRef } from "react";
import TerminalLoader from "@/components/ui/terminal-loader";

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Load Spline viewer web component script
    const existingScript = document.getElementById("spline-viewer-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "spline-viewer-script";
      script.type = "module";
      script.src = "https://unpkg.com/@splinetool/viewer@1.9.72/build/spline-viewer.js";
      script.onload = () => {
        setTimeout(() => setLoaded(true), 300);
      };
      document.body.appendChild(script);
    } else {
      setTimeout(() => setLoaded(true), 300);
    }

    // 2. Programmatically purge Spline watermark from Shadow DOM
    const purgeWatermark = () => {
      const viewer = containerRef.current?.querySelector("spline-viewer");
      if (viewer && viewer.shadowRoot) {
        // Remove logo node if present
        const logo = viewer.shadowRoot.querySelector(
          '#logo, a#logo, #spline-logo, a[href*="spline.design"], .watermark'
        );
        if (logo) {
          logo.remove();
        }

        // Inject persistent anti-watermark stylesheet into shadow root
        if (!viewer.shadowRoot.querySelector("#anti-watermark-style")) {
          const style = document.createElement("style");
          style.id = "anti-watermark-style";
          style.textContent = `
            #logo, a#logo, #spline-logo, a[href*="spline.design"], .watermark, [class*="watermark"] {
              display: none !important;
              opacity: 0 !important;
              visibility: hidden !important;
              pointer-events: none !important;
              width: 0 !important;
              height: 0 !important;
              overflow: hidden !important;
            }
          `;
          viewer.shadowRoot.appendChild(style);
        }
      }
    };

    // Run purge repeatedly during the initial initialization cycle
    const interval = setInterval(purgeWatermark, 100);
    const timeout = setTimeout(() => clearInterval(interval), 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full relative flex items-center justify-center pointer-events-auto bg-transparent ${className || ""}`}
      style={{
        maskImage: "radial-gradient(ellipse at center, black 70%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 70%, transparent 100%)",
      }}
    >
      {!loaded && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 select-none bg-transparent">
          <div className="flex items-center gap-2 mb-2 font-mono text-[10px] tracking-widest text-[var(--ink-muted)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] animate-pulse" />
            <span>CONNECTING_3D_CORE // 0x7F</span>
          </div>
          <TerminalLoader
            rows={3}
            cols={24}
            blockWidth={3}
            speed={40}
            color="text-[#D71920]"
            bgColor="bg-[#D71920]"
          />
        </div>
      )}
      {/* Spline Viewer Web Component */}
      {/* @ts-ignore */}
      <spline-viewer
        url={scene}
        style={{
          width: "100%",
          height: "100%",
          background: "transparent",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      />
    </div>
  );
}

export default SplineScene;
