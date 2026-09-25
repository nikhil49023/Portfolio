'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export interface FogRevealProps {
  /** First content plate / scene */
  childrenBefore: React.ReactNode;
  /** Second content plate / scene revealed after fog clearing */
  childrenAfter: React.ReactNode;
  /** Domain warp strength (0.0 to 1.5). Default: 0.6 */
  warp?: number;
  /** Softness of rising front (0.02 to 0.3). Default: 0.12 */
  softness?: number;
  /** Wispy tendril detail (0.0 to 1.0). Default: 0.5 */
  detail?: number;
  /** Edge mist tufts and holes (0.0 to 1.0). Default: 0.4 */
  mist?: number;
  /** Droplet texture along boundaries (0.0 to 0.02). Default: 0.015 */
  grain?: number;
  /** Billow repeat scale (1.0 to 6.0). Default: 2.2 */
  scale?: number;
  /** Maximum plate blur in px. Default: 18 */
  blur?: number;
  /** Atmospheric fog hex color. Default: #e8edf1 (cool alabaster) */
  fogColor?: string;
  /** Progress where hidden plate swap begins. Default: 0.42 */
  swapStart?: number;
  /** Progress where hidden plate swap completes. Default: 0.58 */
  swapEnd?: number;
  /** Ambient continuous drift when idle. Default: true */
  driftAtRest?: boolean;
  /** ScrollTrigger scrub lag in seconds. Default: 0.8 */
  scrub?: number;
  /** Optional custom className */
  className?: string;
  /** Label for plate 1 */
  labelBefore?: string;
  /** Label for plate 2 */
  labelAfter?: string;
}

// Helper: hex to RGB [0-1]
function hexToRgbNormalized(hex: string): [number, number, number] {
  let clean = hex.replace('#', '');
  if (clean.length === 3) {
    clean = clean.split('').map((c) => c + c).join('');
  }
  const num = parseInt(clean, 16);
  return [
    ((num >> 16) & 255) / 255,
    ((num >> 8) & 255) / 255,
    (num & 255) / 255,
  ];
}

const VERTEX_SHADER = `
  attribute vec2 aPosition;
  varying vec2 vUv;
  void main() {
    vUv = (aPosition + 1.0) * 0.5;
    gl_Position = vec4(aPosition, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  precision highp float;
  varying vec2 vUv;
  uniform vec2 uResolution;
  uniform float uProgress;
  uniform float uTime;
  uniform float uWarp;
  uniform float uSoftness;
  uniform float uDetail;
  uniform float uMist;
  uniform float uGrain;
  uniform float uScale;
  uniform vec3 uFogColor;

  // Pseudo-random hash
  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  // 2D Value Noise
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  // Fractal Brownian Motion (5 octaves)
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
    for (int i = 0; i < 5; ++i) {
      v += a * noise(p);
      p = rot * p * 2.0 + shift;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / uResolution.xy;
    vec2 p = uv * uScale;

    // Ambient fluid drift
    p.x += uTime * 0.035;
    p.y += uTime * 0.015;

    // Domain warping (Annnimate formula for billowing cauliflower clouds)
    vec2 q = vec2(fbm(p + vec2(0.0, 0.0)), fbm(p + vec2(5.2, 1.3)));
    vec2 r = vec2(
      fbm(p + 3.0 * q + vec2(1.7, 9.2) + 0.05 * uTime),
      fbm(p + 3.0 * q + vec2(8.3, 2.8) + 0.04 * uTime)
    );
    float f = fbm(p + uWarp * r);

    // Fine droplet noise along borders
    float grain = (hash(gl_FragCoord.xy + fract(uTime * 2.0) * 100.0) - 0.5) * uGrain * 10.0;

    // Rising fog front & trailing clearing boundary driven by uProgress (0.0 -> 1.0)
    float progress = uProgress;

    // Enter boundary: rolls up from bottom to top as progress moves from 0 to 0.5
    float edgeEnter = (1.0 - uv.y) - (1.0 - progress * 2.0) * 1.3;
    // Leave boundary: rolls up to clear from bottom to top as progress moves from 0.5 to 1.0
    float edgeLeave = (1.0 - uv.y) - (1.0 - max(0.0, progress - 0.5) * 2.0) * 1.3;

    float enterMask = smoothstep(-uSoftness, uSoftness, edgeEnter + (f - 0.5) * uDetail);
    float leaveMask = smoothstep(-uSoftness, uSoftness, edgeLeave + (f - 0.5) * uDetail);

    // Net fog density across the viewport
    float fogDensity = clamp(enterMask - leaveMask, 0.0, 1.0);

    // Modulate with mist porosity
    float mistFactor = mix(1.0, f, uMist);
    fogDensity = clamp(fogDensity * mistFactor + grain, 0.0, 1.0);

    // Alpha blending: dense center reaches full opacity (whiteout)
    gl_FragColor = vec4(uFogColor, fogDensity);
  }
`;

export function FogReveal({
  childrenBefore,
  childrenAfter,
  warp = 0.6,
  softness = 0.12,
  detail = 0.5,
  mist = 0.4,
  grain = 0.015,
  scale = 2.2,
  blur = 18,
  fogColor = '#e8edf1',
  swapStart = 0.42,
  swapEnd = 0.58,
  driftAtRest = true,
  scrub = 0.8,
  className = '',
  labelBefore = 'PRIMARY SYSTEM',
  labelAfter = 'EVOLVED SPEC',
}: FogRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const plateBeforeRef = useRef<HTMLDivElement>(null);
  const plateAfterRef = useRef<HTMLDivElement>(null);
  const progressValRef = useRef<number>(0);
  const [activePlate, setActivePlate] = useState<'before' | 'after'>('before');
  const [currentProgress, setCurrentProgress] = useState<number>(0);

  // ── WebGL Shader Context & GSAP Scrub ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { alpha: true, antialias: true });
    if (!gl) return;

    // Compile shader helper
    const compileShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = compileShader(gl.VERTEX_SHADER, VERTEX_SHADER);
    const fs = compileShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    // Full-screen quad buffer
    const quad = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);

    const aPosition = gl.getAttribLocation(program, 'aPosition');
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
    const uRes = gl.getUniformLocation(program, 'uResolution');
    const uProg = gl.getUniformLocation(program, 'uProgress');
    const uTm = gl.getUniformLocation(program, 'uTime');
    const uWrp = gl.getUniformLocation(program, 'uWarp');
    const uSoft = gl.getUniformLocation(program, 'uSoftness');
    const uDet = gl.getUniformLocation(program, 'uDetail');
    const uMst = gl.getUniformLocation(program, 'uMist');
    const uGrn = gl.getUniformLocation(program, 'uGrain');
    const uScl = gl.getUniformLocation(program, 'uScale');
    const uCol = gl.getUniformLocation(program, 'uFogColor');

    const rgb = hexToRgbNormalized(fogColor);

    // Resize handler
    const resize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.clientWidth * dpr;
      const height = canvas.clientHeight * dpr;
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    // Render loop
    let animId: number;
    let startTime = performance.now();

    const render = () => {
      const elapsed = (performance.now() - startTime) * 0.001;
      const timeVal = driftAtRest ? elapsed : 0;

      gl.useProgram(program);
      gl.uniform1f(uProg, progressValRef.current);
      gl.uniform1f(uTm, timeVal);
      gl.uniform1f(uWrp, warp);
      gl.uniform1f(uSoft, softness);
      gl.uniform1f(uDet, detail);
      gl.uniform1f(uMst, mist);
      gl.uniform1f(uGrn, grain);
      gl.uniform1f(uScl, scale);
      gl.uniform3f(uCol, rgb[0], rgb[1], rgb[2]);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      gl.deleteProgram(program);
      gl.deleteBuffer(buffer);
    };
  }, [warp, softness, detail, mist, grain, scale, fogColor, driftAtRest]);

  // ── GSAP ScrollTrigger Choreography ──
  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      if (plateBeforeRef.current) {
        plateBeforeRef.current.style.opacity = '1';
        plateBeforeRef.current.style.filter = 'blur(0px)';
      }
      if (plateAfterRef.current) {
        plateAfterRef.current.style.opacity = '0';
        plateAfterRef.current.style.filter = 'blur(0px)';
      }

      const trigger = ScrollTrigger.create({
        id: 'fog-trigger',
        trigger: container,
        start: 'top top',
        end: '+=130%',
        pin: true,
        scrub: scrub,
        anticipatePin: 1,
        onUpdate: (self) => {
          const p = self.progress;
          progressValRef.current = p;
          setCurrentProgress(p);

          // Update active plate during dense whiteout
          if (p >= swapStart && p <= swapEnd) {
            setActivePlate(p >= 0.5 ? 'after' : 'before');
          } else if (p < swapStart) {
            setActivePlate('before');
          } else if (p > swapEnd) {
            setActivePlate('after');
          }

          // Atmospheric scatter blur on plate
          // Peak blur occurs at p = 0.5 (dense fog bank)
          const blurFactor = Math.sin(p * Math.PI);
          const currentBlur = blurFactor * blur;

          if (plateBeforeRef.current) {
            plateBeforeRef.current.style.filter = `blur(${currentBlur.toFixed(1)}px)`;
            plateBeforeRef.current.style.opacity = p < swapStart ? '1' : `${Math.max(0, 1 - (p - swapStart) / (swapEnd - swapStart))}`;
          }
          if (plateAfterRef.current) {
            plateAfterRef.current.style.filter = `blur(${currentBlur.toFixed(1)}px)`;
            plateAfterRef.current.style.opacity = p > swapEnd ? '1' : `${Math.min(1, Math.max(0, (p - swapStart) / (swapEnd - swapStart)))}`;
          }
        },
      });

      return () => {
        trigger.kill();
      };
    },
    { scope: containerRef, dependencies: [scrub, swapStart, swapEnd, blur] }
  );

  // Manual scrubber jump helper
  const handleJump = (targetProgress: number) => {
    const trigger = ScrollTrigger.getById('fog-trigger');
    if (trigger) {
      const scrollPos = trigger.start + targetProgress * (trigger.end - trigger.start);
      window.scrollTo({ top: scrollPos, behavior: 'smooth' });
    } else {
      gsap.to(progressValRef, {
        current: targetProgress,
        duration: 0.9,
        ease: 'power3.inOut',
        onUpdate: () => {
          const p = progressValRef.current;
          setCurrentProgress(p);
          if (p >= swapStart && p <= swapEnd) {
            setActivePlate(p >= 0.5 ? 'after' : 'before');
          } else if (p < swapStart) {
            setActivePlate('before');
          } else if (p > swapEnd) {
            setActivePlate('after');
          }
        },
      });
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-screen overflow-hidden bg-[var(--bg-void)] select-none border-y border-[var(--border-subtle)] ${className}`}
    >
      {/* ── Background Content Plates ── */}
      <div className="absolute inset-0 z-0">
        {/* Plate 1: Initial Scene */}
        <div
          ref={plateBeforeRef}
          style={{ opacity: 1 }}
          className={`absolute inset-0 transition-opacity duration-150 flex items-center justify-center p-6 md:p-12 ${
            activePlate === 'before' ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
        >
          {childrenBefore}
        </div>

        {/* Plate 2: Revealed Scene */}
        <div
          ref={plateAfterRef}
          style={{ opacity: 0 }}
          className={`absolute inset-0 transition-opacity duration-150 flex items-center justify-center p-6 md:p-12 ${
            activePlate === 'after' ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
        >
          {childrenAfter}
        </div>
      </div>

      {/* ── Volumetric Atmospheric Fog Shader Canvas ── */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-10 w-full h-full"
      />

      {/* ── Studio Telemetry & Interactive Scrubber HUD ── */}
      <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-wrap items-center justify-between gap-4 pointer-events-auto bg-[var(--bg-surface)]/85 backdrop-blur-md px-5 py-3 rounded-2xl border border-[var(--border-medium)] shadow-lg">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#D71920] animate-pulse shadow-[0_0_8px_#D71920]" />
          <span className="font-mono text-xs font-bold tracking-wider uppercase text-[var(--ink-primary)]">
            ATMOSPHERIC FOG REVEAL // SHADER STAGE
          </span>
          <span className="hidden sm:inline font-mono text-[11px] text-[var(--ink-secondary)]">
            WARP: {warp.toFixed(2)} • SOFTNESS: {softness.toFixed(2)} • FOG: {fogColor}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Quick jump to Plate 1 */}
          <button
            onClick={() => handleJump(0.0)}
            className={`px-3 py-1 text-xs font-mono font-medium rounded-lg transition-all ${
              activePlate === 'before'
                ? 'bg-[#D71920] text-white shadow-sm'
                : 'text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] hover:bg-[var(--bg-raised)]'
            }`}
          >
            01 // {labelBefore}
          </button>

          {/* Quick jump to Plate 2 */}
          <button
            onClick={() => handleJump(1.0)}
            className={`px-3 py-1 text-xs font-mono font-medium rounded-lg transition-all ${
              activePlate === 'after'
                ? 'bg-[#D71920] text-white shadow-sm'
                : 'text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] hover:bg-[var(--bg-raised)]'
            }`}
          >
            02 // {labelAfter}
          </button>

          <span className="font-mono text-xs font-bold text-[#D71920] pl-2">
            {(currentProgress * 100).toFixed(0)}%
          </span>
        </div>
      </div>
    </div>
  );
}
export default FogReveal;
