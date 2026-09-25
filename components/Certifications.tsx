'use client';

import React, { useState, useRef } from 'react';
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
  ArrowUpRight,
} from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';
import { TextScramble } from '@/components/ui/text-scramble';
import { hapticAudio } from '@/lib/audio';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
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
    levelLabel: 'Master Credential',
    description: 'Enterprise validation across Vertex AI, multimodal models, agent deployment, and scalable RAG pipelines.',
    link: 'https://www.skills.google/public_profiles/44a41e60-6e04-4a73-abbf-963ea83c87eb',
    icon: Sparkles,
    badge: 'Master Verified',
    tags: ['Vertex AI', 'Gen AI', 'RAG'],
    skillsGained: ['Vertex AI Studio', 'Multimodal LLMs', 'Enterprise RAG', 'Model Tuning'],
  },
  {
    id: 'gcp-agents-prod',
    title: 'Build & Deploy Agents in Production',
    issuer: 'Google Cloud Skills Boost',
    date: '2025',
    level: 'advanced',
    levelLabel: 'Production Verified',
    description: 'Production-grade agent architecture, observability, latency optimization, and scaling on Cloud Run.',
    link: 'https://www.skills.google/public_profiles/44a41e60-6e04-4a73-abbf-963ea83c87eb/badges/23799611',
    icon: CheckCircle2,
    badge: 'Production Grade',
    tags: ['GCP', 'Agent Loops', 'Cloud Run'],
    skillsGained: ['Agent Orchestration', 'Cloud Run Microservices', 'Vertex Agent Builder', 'Latency Optimization'],
  },
  {
    id: 'vitt-national-finalist',
    title: 'National Buildathon Finalist (Vitt)',
    issuer: 'NxtWave x OpenAI Academy x IndiaAI',
    date: '2026',
    level: 'advanced',
    levelLabel: 'National Finalist',
    description: 'Engineered Vitt: 100% on-device AI financial tracking with AES-256 local vaults and DPDP Act 2023 compliance.',
    link: 'https://github.com/nikhil49023',
    icon: Trophy,
    badge: 'National Honors',
    tags: ['OpenAI Academy', 'IndiaAI', 'On-Device AI'],
    skillsGained: ['On-Device Gemma 4', 'AES-256 SQLite Vault', 'DPDP Compliance', 'Flutter / Android'],
  },

  // ── INTERMEDIATE ──
  {
    id: 'datacamp-intermediate-sql',
    title: 'Intermediate SQL & Query Optimization',
    issuer: 'DataCamp',
    date: '2026',
    level: 'intermediate',
    levelLabel: 'Intermediate',
    description: 'Relational query architecture: multi-table joins, subqueries, CTEs, window functions, and B-Tree indexing.',
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/ee43fbec5c8180e4a47a8aaa8eba801ebc59519f',
    icon: BookOpen,
    badge: 'Verified DataCamp',
    tags: ['SQL', 'Relational DB', 'Indexing'],
    skillsGained: ['Multi-table JOINs', 'Subqueries & CTEs', 'HAVING Aggregations', 'B-Tree Indexing'],
  },
  {
    id: 'finagent-hackathon',
    title: 'FinAgent Autonomous AI Award',
    issuer: 'Unstop',
    date: '2026',
    level: 'intermediate',
    levelLabel: 'Hackathon Award',
    description: 'Autonomous financial agent design, real-time transaction classification, and deterministic tool-use loops.',
    link: 'https://drive.google.com/file/d/1ZE8qmctlFchAgu9nPbzp8FcNYn5u_wgt/view?usp=sharing',
    icon: Trophy,
    badge: 'Hackathon Winner',
    tags: ['FinTech', 'AI Agents', 'Tool Calling'],
    skillsGained: ['Financial Agent Loops', 'Transaction Categorization', 'Autonomous Tool Execution'],
  },
  {
    id: 'amd-agents-101',
    title: 'Agents 101 Architecture Certification',
    issuer: 'AMD AI Academy',
    date: '2025',
    level: 'intermediate',
    levelLabel: 'AMD Certified',
    description: 'Cognitive reasoning architectures, ReAct decision loops, tool-calling protocols, and persistent agent memory.',
    link: 'https://academy.amd.com/certs/31042/D5539744A4B347368F37FF267ED373CD166281.pdf',
    icon: Shield,
    badge: 'AMD Academy',
    tags: ['AMD', 'AI Agents', 'Tool Calling'],
    skillsGained: ['Tool Calling Protocols', 'ReAct Reasoning Loops', 'Context Management', 'Agentic Memory'],
  },

  // ── FOUNDATIONAL ──
  {
    id: 'gcp-first-agent',
    title: 'Deploy Your First Agent on GCP',
    issuer: 'Google Cloud Skills Boost',
    date: '2025',
    level: 'beginner',
    levelLabel: 'Foundational',
    description: 'Deployment patterns for autonomous AI agents on Google Cloud infrastructure using Vertex AI tooling.',
    link: 'https://www.skills.google/public_profiles/44a41e60-6e04-4a73-abbf-963ea83c87eb/badges/23799788',
    icon: Award,
    badge: 'Cloud Foundational',
    tags: ['Vertex AI', 'GCP', 'Agent Deploy'],
    skillsGained: ['Cloud Console', 'Agent Routing', 'API Configuration', 'Basic Tool Chains'],
  },
  {
    id: 'datacamp-intro-sql',
    title: 'Introduction to Relational Databases',
    issuer: 'DataCamp',
    date: '2025',
    level: 'beginner',
    levelLabel: 'Foundational',
    description: 'Relational data modeling, 3NF schema design, primary keys, foreign constraints, and PostgreSQL syntax.',
    link: 'https://drive.google.com/file/d/1beBfZeQvKUGlmvTbkR8P7i9B4UhZ_MyC/view?usp=sharing',
    icon: BookOpen,
    badge: 'DataCamp Foundational',
    tags: ['SQL', 'Data Modeling', 'PostgreSQL'],
    skillsGained: ['Relational Schemas', 'SELECT & WHERE Filtering', 'GROUP BY Aggregations', 'Database Normalization'],
  },
];

const CATEGORIES: { key: CredentialLevel; label: string; count: number }[] = [
  { key: 'all', label: 'All Credentials', count: CERTS.length },
  { key: 'advanced', label: 'Advanced & Master', count: CERTS.filter((c) => c.level === 'advanced').length },
  { key: 'intermediate', label: 'Intermediate', count: CERTS.filter((c) => c.level === 'intermediate').length },
  { key: 'beginner', label: 'Foundational', count: CERTS.filter((c) => c.level === 'beginner').length },
];

export function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState<CredentialLevel>('all');
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredCerts = selectedCategory === 'all'
    ? CERTS
    : CERTS.filter((c) => c.level === selectedCategory);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Header reveal
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 28 },
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
    }

    // Filter bar reveal
    if (filterRef.current) {
      gsap.fromTo(
        filterRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: filterRef.current,
            start: 'top 85%',
          },
        }
      );
    }

    // Bento grid cards staggered entrance
    if (gridRef.current) {
      const cards = gridRef.current.children;
      gsap.fromTo(
        cards,
        { opacity: 0, y: 35, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.07,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
          },
        }
      );
    }
  }, { scope: containerRef, dependencies: [selectedCategory] });

  const handleCategoryChange = (key: CredentialLevel) => {
    hapticAudio.playTactileClick();
    setSelectedCategory(key);
  };

  return (
    <section 
      ref={containerRef}
      id="certifications" 
      className="section-premium border-t border-[var(--border-subtle)] bg-[var(--bg-void)] relative overflow-hidden select-none py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#D71920] shadow-[0_0_8px_#D71920]" />
            <h2 className="text-xs font-mono tracking-widest uppercase text-[var(--ink-primary)] font-bold flex items-center gap-2">
              <span className="text-[#D71920]">05 //</span>
              <TextScramble hoverTrigger duration={0.6}>Verified Credentials &amp; Honors</TextScramble>
            </h2>
          </div>
          <div className="font-mono text-[10px] text-[var(--ink-muted)] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>VERIFIED LEDGER // 8 CERTIFICATES &amp; HONORS</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div ref={filterRef} className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[var(--border-subtle)]">
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => handleCategoryChange(cat.key)}
                className={cn(
                  'px-4 py-2 text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer border rounded-full',
                  selectedCategory === cat.key
                    ? 'border-[#D71920] bg-[#D71920] text-white shadow-sm'
                    : 'border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] hover:border-[var(--ink-primary)]'
                )}
              >
                <span>{cat.label}</span>
                <span className="ml-1.5 opacity-70">({cat.count})</span>
              </button>
            ))}
          </div>
          <div className="text-[11px] font-mono text-[var(--ink-muted)] hidden sm:flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-emerald-500" />
            <span>Cryptographically Verified Badges</span>
          </div>
        </div>

        {/* ── BENTO CREDENTIAL LEDGER (Replaces Coverflow Carousel) ── */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCerts.map((cert) => {
            const Icon = cert.icon;
            const isAdvanced = cert.level === 'advanced';
            const isIntermediate = cert.level === 'intermediate';

            return (
              <div
                key={cert.id}
                className="group relative bg-[var(--bg-surface)] hover:bg-[var(--bg-raised)] p-6 rounded-3xl border border-[var(--border-medium)] hover:border-[var(--ink-primary)] shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between text-left"
              >
                {/* Top Row: Issuer & Tier Pill */}
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div 
                        className={cn(
                          'w-10 h-10 rounded-2xl flex items-center justify-center border shrink-0 transition-transform duration-200 group-hover:scale-105 shadow-xs',
                          isAdvanced
                            ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600'
                            : isIntermediate
                            ? 'border-cyan-500/30 bg-cyan-500/10 text-cyan-600'
                            : 'border-amber-500/30 bg-amber-500/10 text-amber-600'
                        )}
                      >
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className="text-xs font-mono font-bold uppercase text-[var(--ink-primary)] leading-tight">
                          {cert.issuer}
                        </div>
                        <div className="text-[10px] font-mono text-[var(--ink-muted)]">
                          {cert.date}
                        </div>
                      </div>
                    </div>

                    <span
                      className={cn(
                        'text-[9px] font-mono px-2.5 py-0.5 rounded-full uppercase font-bold tracking-wider border shrink-0',
                        isAdvanced
                          ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-700'
                          : isIntermediate
                          ? 'border-cyan-500/30 bg-cyan-500/10 text-cyan-700'
                          : 'border-amber-500/30 bg-amber-500/10 text-amber-700'
                      )}
                    >
                      {cert.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base sm:text-lg font-bold font-display tracking-tight text-[var(--ink-primary)] group-hover:text-[#D71920] transition-colors leading-snug mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-[var(--ink-secondary)] font-body leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                {/* Bottom: Skills & Verification Link */}
                <div className="pt-4 border-t border-[var(--border-subtle)] space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsGained.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1 text-[9.5px] font-mono px-2 py-0.5 rounded-md bg-[var(--bg-void)] border border-[var(--border-subtle)] text-[var(--ink-secondary)]"
                      >
                        <Check size={9} className="text-emerald-600" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => hapticAudio.playTactileClick()}
                    className="inline-flex items-center justify-between w-full px-3 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-[var(--ink-primary)] hover:text-white bg-[var(--bg-void)] hover:bg-[#D71920] border border-[var(--border-subtle)] hover:border-[#D71920] transition-all duration-150"
                  >
                    <span>Verify Credential</span>
                    <ArrowUpRight size={13} className="shrink-0" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Certifications;
