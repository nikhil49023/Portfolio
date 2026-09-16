'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  ExternalLink,
  CheckCircle2,
  Award,
  Shield,
  BookOpen,
  Sparkles,
  Trophy,
  Check,
  ShieldCheck,
} from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';
import { CoverflowCarousel, CoverflowSlide } from '@/components/ui/coverflow-carousel';
import { TextScramble } from '@/components/ui/text-scramble';
import { hapticAudio } from '@/lib/audio';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export type CredentialLevel = 'all' | 'advanced' | 'intermediate' | 'beginner';

export interface CredentialItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  level: 'advanced' | 'intermediate' | 'beginner';
  levelLabel: string;
  description: string;
  link: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  badge: string;
  tags: string[];
  skillsGained: string[];
}

const CERTS: CredentialItem[] = [
  // ── ADVANCED / MASTER ──
  {
    id: 'gcp-genai-master',
    title: 'Google Cloud Gen AI Master Certificate',
    issuer: 'Google Cloud Skills Boost',
    date: 'Jul 2026',
    level: 'advanced',
    levelLabel: 'Advanced / Master',
    description: 'Master verification demonstrating enterprise proficiency across Vertex AI, Generative AI models, multimodal agent deployment, and RAG architectures.',
    link: 'https://www.skills.google/public_profiles/44a41e60-6e04-4a73-abbf-963ea83c87eb',
    icon: Sparkles,
    badge: 'Master Credential',
    tags: ['Google Cloud', 'Vertex AI', 'Gen AI', 'RAG'],
    skillsGained: ['Vertex AI Studio', 'Multimodal LLMs', 'Enterprise RAG Pipelines', 'Model Tuning'],
  },
  {
    id: 'gcp-agents-prod',
    title: 'Build & Deploy Agents in Production',
    issuer: 'Google Cloud Skills Boost',
    date: '2025',
    level: 'advanced',
    levelLabel: 'Advanced / Master',
    description: 'Advanced engineering badge covering production-grade agent deployment patterns, monitoring, observability, and scaling on Google Cloud.',
    link: 'https://www.skills.google/public_profiles/44a41e60-6e04-4a73-abbf-963ea83c87eb/badges/23799611',
    icon: CheckCircle2,
    badge: 'Production Verified',
    tags: ['GCP', 'Production Agents', 'Cloud Run', 'Observability'],
    skillsGained: ['Agent Architectures', 'Cloud Run Microservices', 'Vertex Agent Builder', 'Latency Optimization'],
  },
  {
    id: 'vitt-national-finalist',
    title: 'National Project Showcase Finalist (Vitt)',
    issuer: 'NxtWave x OpenAI Academy x IndiaAI',
    date: '2026',
    level: 'advanced',
    levelLabel: 'Advanced / Master',
    description: 'Selected as a national buildathon finalist for engineering Vitt: 100% on-device AI financial tracking compliant with DPDP Act 2023.',
    link: 'https://github.com/nikhil49023',
    icon: Trophy,
    badge: 'National Finalist',
    tags: ['OpenAI Academy', 'IndiaAI', 'On-Device AI', 'LiteRT'],
    skillsGained: ['On-Device Gemma 4', 'AES-256 SQLite Vault', 'DPDP Compliance', 'Flutter / Android'],
  },

  // ── INTERMEDIATE ──
  {
    id: 'datacamp-intermediate-sql',
    title: 'Intermediate SQL',
    issuer: 'DataCamp',
    date: '2026',
    level: 'intermediate',
    levelLabel: 'Intermediate',
    description: 'Advanced relational queries covering grouping with HAVING, multi-table joins, subqueries, set operations, and relational query tuning.',
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/ee43fbec5c8180e4a47a8aaa8eba801ebc59519f',
    icon: BookOpen,
    badge: 'DataCamp Accomplishment',
    tags: ['SQL', 'Relational DB', 'Query Optimization'],
    skillsGained: ['Multi-table JOINs', 'Subqueries & CTEs', 'HAVING Aggregations', 'B-Tree Indexing'],
  },
  {
    id: 'finagent-hackathon',
    title: 'FinAgent Hackathon Award',
    issuer: 'Unstop',
    date: '2026',
    level: 'intermediate',
    levelLabel: 'Intermediate',
    description: 'Participation and achievement credential in the FinAgent Hackathon, demonstrating skills in autonomous financial AI agent systems.',
    link: 'https://drive.google.com/file/d/1ZE8qmctlFchAgu9nPbzp8FcNYn5u_wgt/view?usp=sharing',
    icon: Trophy,
    badge: 'Hackathon Award',
    tags: ['FinTech', 'AI Agents', 'Unstop'],
    skillsGained: ['Financial Agent Loops', 'Transaction Categorization', 'Autonomous Tool Execution'],
  },
  {
    id: 'amd-agents-101',
    title: 'Agents 101 Certification',
    issuer: 'AMD AI Academy',
    date: '2025',
    level: 'intermediate',
    levelLabel: 'Intermediate',
    description: 'Foundational certification covering AI agent architectures, tool-use patterns, cognitive loops, and multi-agent coordination concepts.',
    link: 'https://academy.amd.com/certs/31042/D5539744A4B347368F37FF267ED373CD166281.pdf',
    icon: Shield,
    badge: 'AMD Certified',
    tags: ['AMD', 'AI Agents', 'Tool Calling'],
    skillsGained: ['Tool Calling Protocols', 'ReAct Reasoning Loops', 'Context Management', 'Agentic Memory'],
  },

  // ── BEGINNER / FOUNDATIONAL ──
  {
    id: 'gcp-first-agent',
    title: 'Deploy Your First Agent',
    issuer: 'Google Cloud Skills Boost',
    date: '2025',
    level: 'beginner',
    levelLabel: 'Foundational / Beginner',
    description: 'Hands-on validation badge for deploying autonomous AI agents to Google Cloud infrastructure using Vertex AI tooling.',
    link: 'https://www.skills.google/public_profiles/44a41e60-6e04-4a73-abbf-963ea83c87eb/badges/23799788',
    icon: Award,
    badge: 'Foundational Badge',
    tags: ['Vertex AI', 'GCP', 'Agent Deploy'],
    skillsGained: ['Cloud Console', 'Agent Routing', 'API Configuration', 'Basic Tool Chains'],
  },
  {
    id: 'datacamp-intro-sql',
    title: 'Introduction to SQL',
    issuer: 'DataCamp',
    date: '2025',
    level: 'beginner',
    levelLabel: 'Foundational / Beginner',
    description: 'Structured Query Language fundamentals — SELECT queries, JOINs, filtering, aggregations, and relational database normalization.',
    link: 'https://drive.google.com/file/d/1beBfZeQvKUGlmvTbkR8P7i9B4UhZ_MyC/view?usp=sharing',
    icon: BookOpen,
    badge: 'DataCamp Certificate',
    tags: ['SQL', 'Data Modeling', 'PostgreSQL'],
    skillsGained: ['Relational Schemas', 'SELECT & WHERE Filtering', 'GROUP BY Aggregations', 'Database Normalization'],
  },
];

const CATEGORIES: { key: CredentialLevel; label: string; count: number }[] = [
  { key: 'all', label: 'All Credentials', count: CERTS.length },
  { key: 'advanced', label: 'Advanced', count: CERTS.filter((c) => c.level === 'advanced').length },
  { key: 'intermediate', label: 'Intermediate', count: CERTS.filter((c) => c.level === 'intermediate').length },
  { key: 'beginner', label: 'Foundational', count: CERTS.filter((c) => c.level === 'beginner').length },
];

export function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState<CredentialLevel>('all');
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const carouselWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    if (!containerRef.current) return;

    if (headerRef.current) {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 28,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
        },
      });
    }

    if (filterRef.current) {
      gsap.from(filterRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: filterRef.current,
          start: 'top 85%',
        },
      });
    }

    if (carouselWrapperRef.current) {
      gsap.from(carouselWrapperRef.current, {
        opacity: 0,
        scale: 0.96,
        y: 30,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: carouselWrapperRef.current,
          start: 'top 80%',
        },
      });
    }
  }, { scope: containerRef });

  const handleCategoryChange = (key: CredentialLevel) => {
    hapticAudio.playTactileClick();
    setSelectedCategory(key);
  };

  const filteredCerts = selectedCategory === 'all'
    ? CERTS
    : CERTS.filter((c) => c.level === selectedCategory);

  // Map to Coverflow Slides
  const coverflowSlides: CoverflowSlide[] = filteredCerts.map((cert) => ({
    title: cert.title,
    subtitle: `${cert.issuer} · ${cert.date}`,
    issuer: cert.issuer,
    date: cert.date,
    category: cert.level,
    levelLabel: cert.levelLabel,
    badge: cert.badge,
    description: cert.description,
    link: cert.link,
    tags: cert.tags,
    skillsGained: cert.skillsGained,
    meta: [
      { label: 'Issuer', value: cert.issuer },
      { label: 'Date', value: cert.date },
      { label: 'Tier', value: cert.levelLabel },
    ],
  }));

  return (
    <section 
      ref={containerRef}
      id="certifications" 
      className="section-premium border-t border-[var(--border-subtle)] bg-[var(--bg-void)] relative overflow-hidden select-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-[radial-gradient(circle,color-mix(in_oklch,var(--brand-primary)_6%,transparent),transparent_70%)] pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-[radial-gradient(circle,color-mix(in_oklch,var(--accent-amber)_5%,transparent),transparent_70%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[var(--brand-primary)]" />
            <h2 className="text-xs font-mono tracking-widest uppercase text-[var(--ink-primary)] font-bold flex items-center gap-2">
              <span>05 //</span>
              <TextScramble hoverTrigger duration={0.6}>Verified Credentials &amp; Honours</TextScramble>
            </h2>
          </div>
          <div className="font-mono text-[10px] text-[var(--ink-muted)] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span>3D COVERFLOW // BEGINNER · INTERMEDIATE · ADVANCED</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div ref={filterRef} className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-[var(--border-subtle)]">
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => handleCategoryChange(cat.key)}
                className={cn(
                  'px-3.5 py-1.5 text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer border rounded-lg',
                  selectedCategory === cat.key
                    ? 'border-[var(--brand-primary)] bg-[var(--brand-primary)]/15 text-[var(--brand-primary)] shadow-sm'
                    : 'border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--ink-muted)] hover:text-[var(--ink-primary)] hover:border-[var(--border-active)]'
                )}
              >
                <span>{cat.label}</span>
                <span className="ml-1.5 opacity-60">({cat.count})</span>
              </button>
            ))}
          </div>
          <div className="text-[11px] font-mono text-[var(--ink-muted)] hidden sm:flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-primary)] animate-pulse" />
            <span>Wheel / Trackpad / Drag / Keys to browse</span>
          </div>
        </div>

        {/* ── 3D COVERFLOW CAROUSEL ── */}
        <div ref={carouselWrapperRef} className="w-full">
          <CoverflowCarousel
            key={selectedCategory}
            slides={coverflowSlides}
            showCaption={true}
            renderSlide={(slide, isActive, index) => {
              const rawCert = filteredCerts[index] || CERTS[0];
              const Icon = rawCert.icon;
              const isAdvanced = slide.category === 'advanced';
              const isIntermediate = slide.category === 'intermediate';

              return (
                <div className="machined-bezel w-full h-full rounded-[24px] overflow-hidden shadow-xl">
                  <div className="machined-inner relative w-full h-full p-5 sm:p-6 bg-[var(--bg-surface)] flex flex-col justify-between overflow-hidden rounded-[22px]">
                    {/* Background Subtle Gradient Mesh */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-void)]/60 via-[var(--bg-surface)] to-[var(--bg-void)]/60 opacity-80 pointer-events-none" />

                    {/* Top Row: Issuer Icon, Tier Badge, Meta */}
                    <div className="relative z-10 flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={cn(
                            'w-10 h-10 rounded-[10px] flex items-center justify-center border shrink-0 transition-transform duration-300 shadow-sm',
                            isActive
                              ? isAdvanced
                                ? 'border-[#10B981]/40 bg-[#10B981]/15 text-[#10B981] scale-105'
                                : isIntermediate
                                ? 'border-[#06B6D4]/40 bg-[#06B6D4]/15 text-[#06B6D4] scale-105'
                                : 'border-[#D71920]/40 bg-[#D71920]/15 text-[#D71920] scale-105'
                              : 'border-[var(--border-subtle)] bg-[var(--bg-void)] text-[var(--ink-muted)]'
                          )}
                        >
                          <Icon size={18} />
                        </div>
                        <div>
                          <div className="text-[9.5px] font-mono font-bold tracking-wider uppercase text-[var(--ink-primary)] truncate max-w-[170px]">
                            {slide.issuer}
                          </div>
                          <div className="text-[9px] font-mono text-[var(--ink-muted)]">
                            {slide.date}
                          </div>
                        </div>
                      </div>

                      {/* Level Pill */}
                      <span
                        className={cn(
                          'text-[8.5px] font-mono px-2.5 py-0.5 rounded-full uppercase font-bold tracking-wider border shrink-0 shadow-xs',
                          isAdvanced
                            ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                            : isIntermediate
                            ? 'border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400'
                            : 'border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400'
                        )}
                      >
                        {slide.levelLabel}
                      </span>
                    </div>

                    {/* Center: Title & Skills */}
                    <div className="relative z-10 my-auto py-2">
                      <h3 className="text-base sm:text-lg font-bold font-display tracking-tight text-[var(--ink-primary)] leading-snug line-clamp-2">
                        {slide.title}
                      </h3>

                      {/* Verified Skills Gained */}
                      {slide.skillsGained && slide.skillsGained.length > 0 && (
                        <div className="mt-3 space-y-1">
                          {slide.skillsGained.slice(0, 2).map((skill) => (
                            <div key={skill} className="flex items-center gap-1.5 text-[10px] font-mono text-[var(--ink-secondary)]">
                              <Check size={10} className="text-[#10B981] shrink-0" />
                              <span className="truncate">{skill}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Bottom: Tags & Direct Authenticity Link */}
                    <div className="relative z-10 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-1 overflow-hidden h-5">
                        {slide.tags?.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-[8.5px] font-mono px-2 py-0.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-void)] text-[var(--ink-muted)] truncate"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {slide.link && (
                        <a
                          href={slide.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] font-mono font-bold text-[#D71920] hover:text-[#D71920]/80 inline-flex items-center gap-1 shrink-0 uppercase tracking-wider transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            hapticAudio.playBip();
                          }}
                        >
                          <span>Verify</span>
                          <ExternalLink size={10} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            }}
          />
        </div>

      </div>
    </section>
  );
}

export default Certifications;
