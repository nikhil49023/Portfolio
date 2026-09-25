'use client';

import React from 'react';
import { FogReveal } from '@/components/ui/fog-reveal';
import { Radio, Cpu, ShieldCheck, Check, Sparkles, ArrowUpRight, Brain, Layers, Navigation } from 'lucide-react';
import { MachinedButton } from '@/components/ui/machined-button';

export function FogRevealShowcase() {
  return (
    <section className="relative w-full bg-[var(--bg-void)]">
      <FogReveal
        warp={0.65}
        softness={0.14}
        detail={0.55}
        mist={0.4}
        grain={0.012}
        scale={2.2}
        blur={18}
        fogColor="#eef2f6"
        swapStart={0.42}
        swapEnd={0.58}
        driftAtRest={true}
        scrub={0.8}
        labelBefore="SWARM AVIONICS"
        labelAfter="SOVEREIGN EDGE AI"
        childrenBefore={
          <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Headline & Core Thesis */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/25 bg-sky-500/10 text-sky-700 text-xs font-mono font-bold uppercase tracking-wider mb-4 w-fit">
                <Radio size={13} className="text-sky-600 animate-pulse" />
                <span>PRIMARY SYSTEM // ROS 2 HUMBLE &amp; PX4 50Hz DDS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[var(--ink-primary)] leading-[1.08] mb-4">
                Autonomous Aerial <br />
                <span className="text-sky-600 font-serif italic font-normal">
                  Swarm Avionics.
                </span>
              </h2>

              <p className="text-sm md:text-base text-[var(--ink-secondary)] font-normal leading-relaxed mb-6 max-w-xl">
                Engineered for GPS-denied tactical search &amp; rescue. Streams 50 Hz offboard setpoints over MicroXRCE-DDS to PX4 Autopilot with zero jitter. Validated with 212 deterministic unit, integration, and Gazebo 8 SITL passing gates.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <MachinedButton
                  href="#projects"
                  variant="primary"
                  size="md"
                  icon={<ArrowUpRight size={14} />}
                >
                  Inspect Swarm Architecture
                </MachinedButton>
                <div className="font-mono text-xs text-[var(--ink-secondary)] flex items-center gap-2">
                  <Check size={14} className="text-emerald-500" />
                  <span>212 / 212 Passing Tests</span>
                </div>
              </div>
            </div>

            {/* Right: Technical Spec Card */}
            <div className="lg:col-span-5 bg-[var(--bg-surface)] p-6 md:p-8 rounded-3xl border border-[var(--border-medium)] shadow-md text-left">
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4 mb-5">
                <span className="font-mono text-xs font-bold text-[var(--ink-primary)] tracking-wider">
                  PROJECT SUTRA // GNC METRICS
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-700 border border-emerald-500/30">
                  VERIFIED HARDWARE
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-[var(--border-subtle)]">
                  <span className="text-xs text-[var(--ink-secondary)] font-mono">DDS Setpoint Rate</span>
                  <span className="text-sm font-mono font-bold text-sky-600">50 Hz Jitter-Free</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[var(--border-subtle)]">
                  <span className="text-xs text-[var(--ink-secondary)] font-mono">Sensors Injected</span>
                  <span className="text-sm font-mono font-bold text-[var(--ink-primary)]">EKF2 VIO + LiDAR</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[var(--border-subtle)]">
                  <span className="text-xs text-[var(--ink-secondary)] font-mono">Simulator SITL</span>
                  <span className="text-sm font-mono font-bold text-[var(--ink-primary)]">Gazebo Sim 8 Harmonic</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-xs text-[var(--ink-secondary)] font-mono">MOT Tracking</span>
                  <span className="text-sm font-mono font-bold text-emerald-600">ByteTrack + YOLOv8</span>
                </div>
              </div>
            </div>
          </div>
        }
        childrenAfter={
          <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Headline & Edge AI Thesis */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/25 bg-emerald-500/10 text-emerald-700 text-xs font-mono font-bold uppercase tracking-wider mb-4 w-fit">
                <ShieldCheck size={13} className="text-emerald-600 animate-pulse" />
                <span>EVOLVED SYSTEM // SOVEREIGN ON-DEVICE INTELLIGENCE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[var(--ink-primary)] leading-[1.08] mb-4">
                Sovereign Physical AI &amp; <br />
                <span className="text-emerald-600 font-serif italic font-normal">
                  Zero-Cloud Egress.
                </span>
              </h2>

              <p className="text-sm md:text-base text-[var(--ink-secondary)] font-normal leading-relaxed mb-6 max-w-xl">
                Deploying high-throughput computer vision and SLAM models directly on physical silicon. Zero cloud transmission, AES-256 encrypted SQLite vaults, and full DPDP Act 2023 compliance. Real-time TensorRT INT8 achieving 38.4 FPS on NVIDIA Jetson.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <MachinedButton
                  href="#about"
                  variant="primary"
                  size="md"
                  icon={<ArrowUpRight size={14} />}
                >
                  Explore Edge Architecture
                </MachinedButton>
                <div className="font-mono text-xs text-[var(--ink-secondary)] flex items-center gap-2">
                  <Cpu size={14} className="text-emerald-500" />
                  <span>38.4 FPS on Jetson Orin</span>
                </div>
              </div>
            </div>

            {/* Right: Technical Spec Card */}
            <div className="lg:col-span-5 bg-[var(--bg-surface)] p-6 md:p-8 rounded-3xl border border-[var(--border-medium)] shadow-md text-left">
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4 mb-5">
                <span className="font-mono text-xs font-bold text-[var(--ink-primary)] tracking-wider">
                  SUTRA &amp; VITT // EDGE METRICS
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-sky-500/15 text-sky-700 border border-sky-500/30">
                  ON-DEVICE VAULT
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-[var(--border-subtle)]">
                  <span className="text-xs text-[var(--ink-secondary)] font-mono">Cloud Egress</span>
                  <span className="text-sm font-mono font-bold text-emerald-600">0 Bytes Transmitted</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[var(--border-subtle)]">
                  <span className="text-xs text-[var(--ink-secondary)] font-mono">Edge Acceleration</span>
                  <span className="text-sm font-mono font-bold text-[var(--ink-primary)]">TensorRT INT8 / LiteRT</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[var(--border-subtle)]">
                  <span className="text-xs text-[var(--ink-secondary)] font-mono">Local Cryptography</span>
                  <span className="text-sm font-mono font-bold text-[var(--ink-primary)]">AES-256 SQLite Cipher</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-xs text-[var(--ink-secondary)] font-mono">Regulatory Safety</span>
                  <span className="text-sm font-mono font-bold text-emerald-600">DPDP Act 2023 Compliant</span>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </section>
  );
}

export default FogRevealShowcase;
