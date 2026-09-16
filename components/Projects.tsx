'use client';

import React, { useState, useRef } from 'react';
import { Eye, ArrowUpRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { PROJECTS, ProjectData } from '@/lib/projects';
import { ProjectDialogCarousel } from '@/components/ui/project-dialog-carousel';
import { TextScramble } from '@/components/ui/text-scramble';
import { hapticAudio } from '@/lib/audio';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Projects() {
  const projectList: ProjectData[] = Object.values(PROJECTS);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    // Header reveal
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
        },
      }
    );

    // Staggered row reveal
    if (listRef.current) {
      const rows = listRef.current.children;
      gsap.fromTo(
        rows,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: listRef.current,
            start: 'top 85%',
          },
        }
      );
    }
  }, { scope: sectionRef });

  const handleOpenDialog = (proj: ProjectData) => {
    hapticAudio.playTactileClick();
    setSelectedProject(proj);
    setIsDialogOpen(true);
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-premium border-t border-[var(--border-subtle)] bg-[var(--bg-void)] relative overflow-hidden select-none py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-8 pb-4 border-b border-[var(--border-subtle)]"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#D71920] shadow-[0_0_8px_#D71920]" />
            <h2 className="text-xs font-mono tracking-widest uppercase text-[var(--ink-primary)] font-bold flex items-center gap-2">
              <span className="text-[#D71920]">02 //</span>
              <TextScramble hoverTrigger duration={0.6}>Production Systems Index</TextScramble>
            </h2>
          </div>
          <div className="font-mono text-[10px] text-[var(--ink-muted)] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            <span>INTERACTIVE HARDWARE LEDGER // CLICK TO INSPECT</span>
          </div>
        </div>

        {/* ── AUTONOMOUS SYSTEMS & HARDWARE LEDGER (MACHINED DOUBLE-BEZEL) ── */}
        <div className="machined-bezel">
          <div
            ref={listRef}
            className="machined-inner divide-y divide-[var(--border-subtle)] dark:divide-white/5 overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
          >
            {projectList.map((proj, idx) => {
              const Icon = proj.icon;
              const num = String(idx + 1).padStart(2, '0');

              return (
                <div
                  key={proj.slug}
                  onClick={() => handleOpenDialog(proj)}
                  className="group flex flex-col lg:flex-row lg:items-center justify-between p-5 sm:p-6 hover:bg-[var(--bg-raised)]/70 dark:hover:bg-white/[0.03] transition-all duration-200 gap-4 text-left cursor-pointer active:scale-[0.99]"
                >
                  {/* Left: Index, Icon, Name & Type */}
                  <div className="flex items-start sm:items-center gap-4 lg:w-1/3">
                    <span className="font-mono text-sm font-bold text-[#D71920]">
                      [{num}]
                    </span>
                    
                    <div
                      className="w-11 h-11 rounded-[14px] flex items-center justify-center border border-black/5 dark:border-white/10 bg-[var(--bg-void)] shrink-0 transition-transform duration-200 group-hover:scale-110 shadow-inner"
                      style={{ color: proj.accent || '#D71920' }}
                    >
                      <Icon size={18} />
                    </div>

                    <div>
                      <h4 className="font-display font-bold text-base sm:text-lg text-[var(--ink-primary)] group-hover:text-[#D71920] transition-colors flex items-center gap-2">
                        <span>{proj.name}</span>
                        {proj.badge && (
                          <span className="text-[9px] font-mono font-bold px-2 py-0.5 border border-[var(--border-subtle)] dark:border-white/10 bg-[var(--bg-void)] text-[var(--ink-primary)] rounded-full">
                            {proj.badge}
                          </span>
                        )}
                      </h4>
                      <p className="text-[11px] font-mono text-[var(--ink-muted)]">
                        {proj.type}
                      </p>
                    </div>
                  </div>

                  {/* Center: Architecture & Stack */}
                  <div className="lg:w-5/12 space-y-1.5">
                    <div className="text-xs font-body text-[var(--ink-secondary)] line-clamp-1">
                      {proj.tagline}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[9.5px] font-mono px-2.5 py-0.5 rounded-full border border-[var(--border-subtle)] dark:border-white/5 bg-[var(--bg-void)] text-[var(--ink-muted)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Date, Status & Interactive Dialog Trigger */}
                  <div className="lg:w-1/4 flex items-center justify-between lg:justify-end gap-4 pt-2 lg:pt-0 border-t lg:border-t-0 border-[var(--border-subtle)] dark:border-white/5">
                    <span className="text-[10px] font-mono text-[var(--ink-muted)]">
                      {proj.date}
                    </span>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenDialog(proj);
                      }}
                      className="group/btn inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-subtle)] dark:border-white/10 hover:border-[#D71920] bg-[var(--bg-void)] text-xs font-mono font-bold text-[var(--ink-primary)] hover:text-[#D71920] transition-all duration-200 cursor-pointer active:scale-[0.95]"
                    >
                      <Eye size={12} className="text-[#D71920]" />
                      <span>Inspect</span>
                      <span className="w-5 h-5 rounded-full bg-white/10 dark:bg-white/10 flex items-center justify-center transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                        <ArrowUpRight size={10} />
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── ARCHITECTURAL POINTER TO SYSTEMS PROVING GROUNDS ── */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-[18px] border border-[var(--border-subtle)] bg-[var(--bg-surface)]/50 backdrop-blur-sm text-xs font-mono">
          <div className="flex items-center gap-2.5 text-[var(--ink-secondary)]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-[11px]">
              BESPOKE INSTRUMENTATION (SAHI HUD &amp; DISTILLATION SIEVE) CONSOLIDATED
            </span>
          </div>
          <a
            href="#proving-grounds"
            onClick={() => hapticAudio.playTactileClick()}
            className="inline-flex items-center gap-1.5 text-[var(--ink-primary)] hover:text-[#D71920] transition-colors font-bold group shrink-0"
          >
            <span>Proceed to Systems Proving Grounds</span>
            <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Project Dialog Carousel Modal */}
        {selectedProject && (
          <ProjectDialogCarousel
            project={selectedProject}
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
          />
        )}

      </div>
    </section>
  );
}
