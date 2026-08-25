'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowUpRight, ArrowRight, Layers, Cpu, Terminal, Database, Sparkles, Shield, GitCommit, CheckCircle2
} from 'lucide-react';
import { PROJECTS, ProjectData } from '@/lib/projects';

const categories = [
  { id: 'all', label: 'All Systems' },
  { id: 'on-device', label: 'On-Device AI & Mobile' },
  { id: 'autonomous', label: 'Autonomous LLM Agents' },
  { id: 'vision-edge', label: 'Computer Vision & Slicing' },
  { id: 'data-analytics', label: 'Data Science & Biometrics' },
];

const categoryMap: Record<string, string[]> = {
  'vitt': ['all', 'on-device'],
  'saara-ai': ['all', 'autonomous'],
  'aerialeye': ['all', 'vision-edge', 'on-device'],
  'sleep-health-analytics': ['all', 'data-analytics'],
};

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projectList: ProjectData[] = Object.values(PROJECTS);

  const filteredProjects = projectList.filter((proj) => {
    const cats = categoryMap[proj.slug] || ['all'];
    return cats.includes(filter);
  });

  return (
    <section id="projects" className="section-premium border-t border-[var(--border-subtle)] bg-[var(--bg-void)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-6">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-sm text-[var(--brand-primary)] font-bold">02</span>
            <h2 className="text-sm font-mono tracking-widest uppercase text-[var(--brand-secondary)] font-bold">
              Engineering Systems &amp; Deployments
            </h2>
          </div>
          <div className="font-mono text-[10px] text-[var(--ink-muted)]">
            <span>SHOWING 4 VERIFIED PRODUCTION SYSTEMS &amp; CAPSTONES</span>
          </div>
        </div>

        {/* Filter Switcher Bar */}
        <div className="flex flex-wrap gap-2 mb-6 justify-start">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-mono font-semibold transition-all duration-200 cursor-pointer border ${
                filter === cat.id
                  ? 'bg-[var(--ink-primary)] text-[var(--bg-void)] border-[var(--ink-primary)] font-bold shadow-sm'
                  : 'text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:border-[var(--border-active)]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 2x2 Balanced High-Density Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredProjects.map((proj) => {
            const Icon = proj.icon;
            return (
              <div
                key={proj.slug}
                className="border border-[var(--border-subtle)] bg-[var(--bg-surface)] transition-all duration-300 hover:border-[var(--border-active)] p-6 sm:p-7 flex flex-col justify-between group shadow-sm relative overflow-hidden"
              >
                {/* Top accent strip on hover */}
                <div 
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: proj.accent }}
                />

                <div>
                  {/* Header info */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5 text-[var(--ink-primary)]">
                      <div 
                        className="w-8 h-8 flex items-center justify-center border border-[var(--border-subtle)] bg-[var(--bg-void)] text-xs shrink-0"
                        style={{ color: proj.accent }}
                      >
                        <Icon size={16} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg tracking-tight font-display text-[var(--ink-primary)] group-hover:text-[var(--brand-primary)] transition-colors">
                          {proj.name}
                        </h3>
                        <div className="text-[10px] font-mono text-[var(--ink-muted)]">
                          {proj.type} · {proj.date}
                        </div>
                      </div>
                    </div>
                    
                    {proj.badge && (
                      <span className="font-mono text-[9px] px-2 py-0.5 border border-[var(--border-subtle)] bg-[var(--bg-void)] text-[var(--brand-secondary)] font-bold whitespace-nowrap">
                        {proj.badge}
                      </span>
                    )}
                  </div>

                  {/* Tagline */}
                  <p className="text-xs font-mono font-bold text-[var(--brand-secondary)] mb-3 tracking-tight">
                    {proj.tagline}
                  </p>
                  
                  {/* Description */}
                  <p className="text-xs leading-relaxed text-[var(--ink-secondary)] mb-5">
                    {proj.shortDesc}
                  </p>

                  {/* Verified Metrics Strip */}
                  {proj.stats && (
                    <div className="grid grid-cols-2 gap-2 mb-5 p-3 bg-[var(--bg-void)]/80 border border-[var(--border-subtle)]">
                      {proj.stats.slice(0, 2).map((s) => (
                        <div key={s.label}>
                          <div className="text-[8.5px] font-mono text-[var(--ink-muted)] uppercase tracking-wider">{s.label}</div>
                          <div className="text-xs font-mono font-bold text-[var(--ink-primary)]">{s.value}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Key Highlights */}
                  <div className="mb-6 pt-3 border-t border-[var(--border-subtle)]">
                    <div className="text-[9px] font-mono text-[var(--ink-muted)] mb-2.5 font-bold uppercase tracking-wider">
                      Key Engineering Breakthroughs
                    </div>
                    <ul className="space-y-2 list-none p-0 m-0">
                      {proj.highlights.slice(0, 2).map((h, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span 
                            className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: proj.accent }}
                          />
                          <span className="text-xs leading-snug text-[var(--ink-secondary)]">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Actions & Direct Deep Dive Link */}
                <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[9.5px] font-mono px-2 py-0.5 border border-[var(--border-subtle)] bg-[var(--bg-void)] text-[var(--ink-secondary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${proj.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--ink-primary)] hover:text-[var(--brand-primary)] transition-colors border-b border-[var(--ink-primary)] hover:border-[var(--brand-primary)] pb-0.5 no-underline"
                  >
                    <span>Read Deep Dive</span>
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
