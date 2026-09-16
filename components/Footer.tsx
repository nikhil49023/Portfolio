"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { DottedMap } from "@/components/ui/dotted-map";
import {
  ArrowUpRight,
  Terminal,
  Github,
  Linkedin,
  Brain,
  Package,
  Activity,
  Radio,
} from "lucide-react";
import { hapticAudio } from "@/lib/audio";

// Regional cluster of multiple Crimson Red micro-dots representing Hyderabad metro area
const hyderabadCluster = [
  { lat: 17.3850, lng: 78.4867, color: "#D71920" }, // Central Hyderabad / Abids
  { lat: 17.4400, lng: 78.3489, color: "#D71920" }, // Hitec City / Cyberabad
  { lat: 17.4399, lng: 78.4983, color: "#D71920" }, // Secunderabad
  { lat: 17.4435, lng: 78.3772, color: "#D71920" }, // Madhapur / Knowledge City
  { lat: 17.4947, lng: 78.3996, color: "#D71920" }, // Kukatpally
  { lat: 17.3616, lng: 78.4747, color: "#D71920" }, // Old City / Charminar
  { lat: 17.2403, lng: 78.4294, color: "#D71920" }, // Shamshabad
  { lat: 17.4065, lng: 78.5593, color: "#D71920" }, // Uppal / East Hub
  { lat: 17.4325, lng: 78.4071, color: "#D71920" }, // Jubilee Hills
  { lat: 17.4483, lng: 78.4636, color: "#D71920" }, // Begumpet
];

const navLinks = [
  { label: "About Identity", href: "/#about" },
  { label: "Production Systems", href: "/#projects" },
  { label: "Proving Grounds", href: "/#proving-grounds" },
  { label: "Dual Skills Matrix", href: "/#skills" },
  { label: "Credentials & Honours", href: "/#certifications" },
  { label: "Direct Dispatch", href: "/#contact" },
  { label: "Executive Resume Dossier", href: "/resume" },
];

const registries = [
  { label: "GitHub Registry", href: "https://github.com/nikhil49023", icon: Github },
  { label: "Hugging Face Hub", href: "https://huggingface.co/kilanisainikhil", icon: Brain },
  { label: "PyPI Package (saara-ai)", href: "https://pypi.org/project/saara-ai/", icon: Package },
  { label: "NPM Package (saara-ai)", href: "https://www.npmjs.com/package/saara-ai", icon: Package },
  { label: "LinkedIn Network", href: "https://linkedin.com/in/kilanisainikhil", icon: Linkedin },
];

export function Footer() {
  const [timeStr, setTimeStr] = useState<string>("14:00:00 IST");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = now.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTimeStr(`${istTime} IST`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-void)] text-[var(--ink-primary)] relative overflow-hidden select-none">
      
      {/* ── EXPANSIVE HIGH-DENSITY WORLD MAP WITH HYDERABAD MULTI-DOT CLUSTER ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        
        {/* Minimal Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 font-mono text-xs px-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] animate-ping" />
            <span className="font-bold text-[var(--ink-primary)]">
              HYDERABAD, IN // 17.3850° N, 78.4867° E (REGIONAL NODE CLUSTER)
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-[var(--ink-muted)]">
            <span className="flex items-center gap-1.5 text-emerald-500 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>EDGE LINK ONLINE</span>
            </span>
            <span>SYS.TIME: {timeStr}</span>
          </div>
        </div>

        {/* High-density expansive world map covering width inside machined double bezel */}
        <div className="machined-bezel rounded-[24px] overflow-hidden shadow-xl mb-8">
          <div className="machined-inner relative w-full h-[280px] sm:h-[380px] md:h-[480px] lg:h-[540px] bg-[var(--bg-surface)] p-3 sm:p-6 overflow-hidden flex items-center justify-center rounded-[22px]">
            {/* Ambient telemetry badge overlay */}
            <div className="absolute top-4 left-4 z-10 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-void)]/85 border border-[var(--border-subtle)] backdrop-blur-md font-mono text-[10px] text-[var(--ink-muted)] shadow-xs">
              <Radio size={11} className="text-[#D71920] animate-pulse" />
              <span>CENTRAL STATION // HYDERABAD IST</span>
            </div>

            <DottedMap
              markers={hyderabadCluster}
              height={84}
              dotRadius={0.14}
              dotColor="currentColor"
              className="w-full h-full text-black/75 dark:text-white/80 transition-colors duration-300"
            />
          </div>
        </div>
      </div>

      {/* ── Main Footer Directory Grid ── */}
      <div className="border-t border-[var(--border-subtle)] bg-[var(--bg-surface)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Column 1: Identity & Bio (5 Cols) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="font-mono font-bold text-sm tracking-wider text-[var(--ink-primary)] flex items-center gap-2">
                <Terminal size={14} className="text-[#D71920]" />
                <span>KILANI_SAI_NIKHIL</span>
              </div>
              
              <p className="text-xs text-[var(--ink-secondary)] leading-relaxed font-body max-w-md">
                Computer Science student &amp; Systems Architect specializing in on-device machine learning, dataset distillation, and edge systems engineering.
              </p>
            </div>

            {/* Column 2: Navigation (3 Cols) */}
            <div className="lg:col-span-3 space-y-3">
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D71920]">
                Navigation
              </div>
              <ul className="space-y-2 text-xs font-mono">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onMouseEnter={() => hapticAudio.playTactileClick()}
                      className="text-[var(--ink-secondary)] hover:text-[#D71920] transition-colors inline-flex items-center gap-1.5"
                    >
                      <span className="text-zinc-500">//</span>
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Registries (4 Cols) */}
            <div className="lg:col-span-4 space-y-3">
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D71920]">
                Registries &amp; Networks
              </div>
              <ul className="space-y-2 text-xs font-mono">
                {registries.map((reg) => {
                  const Icon = reg.icon;
                  return (
                    <li key={reg.label}>
                      <a
                        href={reg.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => hapticAudio.playTactileClick()}
                        className="text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] transition-colors flex items-center justify-between group py-0.5"
                      >
                        <span className="flex items-center gap-2">
                          <Icon size={12} className="text-[#D71920]" />
                          <span>{reg.label}</span>
                        </span>
                        <ArrowUpRight size={11} className="text-[var(--ink-muted)] group-hover:text-[#D71920] transition-colors" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom Legal Bar ── */}
      <div className="border-t border-[var(--border-subtle)] bg-[var(--bg-void)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-mono text-[var(--ink-muted)]">
          <div>
            &copy; {new Date().getFullYear()} KILANI SAI NIKHIL
          </div>
          <div className="flex items-center gap-3">
            <span>HYDERABAD // IST (UTC+5:30)</span>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
