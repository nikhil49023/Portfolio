'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Folder, ArrowUpRight, Star, GitFork, ArrowRight, Layers, Eye, Package, Radio, Terminal, Activity, CheckCircle2, ShieldCheck, Download
} from 'lucide-react';
import { PROJECTS, ProjectData } from '@/lib/projects';

const categories = [
  { id: 'all', label: 'All Systems' },
  { id: 'on-device', label: 'On-Device AI & Mobile' },
  { id: 'open-source', label: 'Open-Source & SDKs' },
  { id: 'vision-deep-tech', label: 'Vision & Deep Tech' },
  { id: 'robotics-agents', label: 'Robotics & Orchestration' },
];

const categoryMap: Record<string, string[]> = {
  'vitt': ['all', 'on-device'],
  'saara-ai': ['all', 'open-source'],
  'aerialeye': ['all', 'vision-deep-tech'],
  'prithvi-lifeline': ['all', 'vision-deep-tech'],
  'super-orchestrator': ['all', 'open-source', 'robotics-agents'],
  'neuronav-ros2': ['all', 'robotics-agents'],
};

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projectList: ProjectData[] = Object.values(PROJECTS);

  const filteredProjects = projectList.filter((proj) => {
    const cats = categoryMap[proj.slug] || ['all'];
    return cats.includes(filter);
  });

  return (
    <section id="projects" className="section-premium border-t border-[var(--border-subtle)] bg-[var(--bg-void)] reveal-on-scroll">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-12">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-sm text-[var(--brand-primary)] font-bold">02</span>
            <h2 className="text-sm font-mono tracking-widest uppercase text-[var(--brand-secondary)] font-bold">
              Engineering Systems &amp; Deployments
            </h2>
          </div>
          <div className="font-mono text-[10px] text-[var(--ink-muted)]">
            <span>SHOWING 6 VERIFIED PRODUCTION REPOSITORIES &amp; MODELS</span>
          </div>
        </div>

        {/* Filter Switcher Bar */}
        <div className="flex flex-wrap gap-2 mb-10 justify-start">
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

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => {
              const Icon = proj.icon;
              return (
                <motion.div
                  key={proj.slug}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  whileHover={{ y: -6, borderColor: "var(--border-active)" }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 24
                  }}
                  className="border border-[var(--border-subtle)] bg-[var(--bg-surface)] transition-colors duration-300 p-6 flex flex-col justify-between cursor-pointer group shadow-sm relative overflow-hidden"
                >
                  {/* Top accent strip on hover */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: proj.accent }}
                  />

                  <div>
                    {/* Repo Header */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2 text-[var(--ink-primary)]">
                        <div 
                          className="w-7 h-7 flex items-center justify-center border border-[var(--border-subtle)] bg-[var(--bg-void)] text-xs shrink-0"
                          style={{ color: proj.accent }}
                        >
                          <Icon size={14} />
                        </div>
                        <h3 className="font-bold text-base tracking-tight font-display text-[var(--ink-primary)]">
                          {proj.name}
                        </h3>
                      </div>
                      
                      {proj.badge && (
                        <span className="font-mono text-[9px] px-2 py-0.5 border border-[var(--border-subtle)] bg-[var(--bg-void)] text-[var(--brand-secondary)] font-bold whitespace-nowrap">
                          {proj.badge}
                        </span>
                      )}
                    </div>

                    {/* Tagline */}
                    <p className="text-[11px] font-mono font-bold text-[var(--brand-secondary)] mb-3 tracking-tight">
                      {proj.tagline}
                    </p>
                    
                    {/* Description */}
                    <p className="text-xs leading-relaxed text-[var(--ink-muted)] mb-5">
                      {proj.shortDesc}
                    </p>

                    {/* Verified Metrics Strip */}
                    {proj.stats && (
                      <div className="grid grid-cols-2 gap-2 mb-5 p-2.5 bg-[var(--bg-void)]/60 border border-[var(--border-subtle)]">
                        {proj.stats.slice(0, 2).map((s) => (
                          <div key={s.label}>
                            <div className="text-[8.5px] font-mono text-[var(--ink-muted)] uppercase tracking-wider">{s.label}</div>
                            <div className="text-[11px] font-mono font-bold text-[var(--ink-primary)]">{s.value}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Key Highlights */}
                    <div className="mb-6 pt-3 border-t border-[var(--border-subtle)]">
                      <div className="text-[9px] font-mono text-[var(--ink-muted)] mb-2 font-bold uppercase tracking-wider">
                        Key Milestones
                      </div>
                      <ul className="space-y-1.5 list-none p-0 m-0">
                        {proj.highlights.slice(0, 2).map((h, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span 
                              className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                              style={{ backgroundColor: proj.accent }}
                            />
                            <span className="text-[11px] leading-tight text-[var(--ink-secondary)]">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer and Links */}
                  <div>
                    <div className="flex flex-wrap gap-1 mb-5">
                      {proj.stack.slice(0, 4).map((tech) => (
                        <span 
                          key={tech} 
                          className="text-[9px] font-mono px-2 py-0.5 border border-[var(--border-subtle)] text-[var(--ink-secondary)] bg-[var(--bg-void)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-[var(--border-subtle)]">
                      {/* Deep dive internal link */}
                      <Link
                        href={`/projects/${proj.slug}`}
                        className="text-xs font-mono font-bold text-[var(--ink-primary)] hover:text-[var(--brand-primary)] flex items-center gap-1.5 no-underline transition-colors"
                      >
                        <span>Deep Dive</span>
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </Link>

                      {/* Primary external action */}
                      {proj.links[0] && (
                        <a
                          href={proj.links[0].href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-1 px-2.5 text-[10px] font-mono font-semibold border border-[var(--border-subtle)] hover:border-[var(--border-active)] hover:bg-[var(--bg-void)] text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] flex items-center gap-1 no-underline transition-colors"
                        >
                          <span>{proj.links[0].label.split(' ')[0]}</span>
                          <ArrowUpRight size={10} className="text-[var(--brand-primary)]" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

