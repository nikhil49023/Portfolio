'use client';

import { useState, useEffect } from 'react';
import { Download, FileText, ChevronRight, Briefcase, GraduationCap, Award, Mail, Linkedin, Github, ExternalLink, Sparkles, Code2, Cpu, Database } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type ResumeRole = 'AI' | 'FRONTEND' | 'FULLSTACK';

interface ResumeData {
  title: string;
  subtitle: string;
  summary: string;
  skills: { label: string; items: string }[];
  projects: {
    name: string;
    role: string;
    date: string;
    tags: string[];
    bullets: string[];
    link?: string;
  }[];
}

const RESUMES: Record<ResumeRole, ResumeData> = {
  AI: {
    title: "AI Agent Engineer",
    subtitle: "LLM Orchestration · RAG Pipelines · Agentic Workflows",
    summary: "Specialized in building production-ready autonomous systems using Google ADK, AutoGen, and advanced RAG architectures. National finalist at OpenAI × NxtWave Buildathon 2026. Published open-source dataset automation engines.",
    skills: [
      { label: "Agentic AI", items: "Google ADK · AutoGen · Multi-Agent Orchestration · Tool-use Patterns" },
      { label: "ML/LLMs", items: "PyTorch · Hugging Face · RAG · Prompt Engineering · Computer Vision" },
      { label: "Automation", items: "saara-ai (PyPI) · Dataset Curation · Layout-aware Parsing · PDF Processing" },
      { label: "Core Dev", items: "Python · System Architecture · Docker · Redis · Vector Databases" },
    ],
    projects: [
      {
        name: "WealthIn — AI Financial OS",
        role: "Lead AI Engineer",
        date: "Feb 2026",
        tags: ["Python", "AutoGen", "RAG", "PostgreSQL"],
        bullets: [
          "Built a Financial OS for MSMEs, automating institutional-grade DPR generation in < 30 mins.",
          "Implemented multi-agent orchestration for complex financial modeling and compliance.",
          "Optimized RAG pipelines for high-accuracy regulatory data retrieval."
        ]
      },
      {
        name: "saara-ai",
        role: "Founding Engineer",
        date: "2025",
        tags: ["Python", "PyPI", "Document AI", "Automation"],
        link: "https://pypi.org/project/saara-ai/",
        bullets: [
          "Developed an open-source layout-aware document parser for automated dataset curation.",
          "Achieved 90% reduction in manual data processing time for unstructured PDF documents.",
          "Maintained full lifecycle from architecture to public package distribution."
        ]
      }
    ]
  },
  FRONTEND: {
    title: "Frontend Architect",
    subtitle: "High-Performance UI · Creative Engineering · React/Next.js",
    summary: "Creative frontend developer dedicated to building visually stunning, pixel-perfect, and highly interactive web experiences. Expert in Next.js, Framer Motion, and modern CSS architectures with a focus on 'AI-ready' interfaces.",
    skills: [
      { label: "Core Web", items: "Next.js 14 · React 18 · TypeScript · Responsive Architecture" },
      { label: "Creative UI", items: "Framer Motion · Tailwind CSS · Three.js · Glassmorphism · Bento Layouts" },
      { label: "State & Data", items: "Zustand · React Query · SWR · Context API" },
      { label: "Performance", items: "Core Web Vitals · SEO · Asset Optimization · accessibility (A11Y)" },
    ],
    projects: [
      {
        name: "Digital Architect Portfolio",
        role: "UI/UX Engineer",
        date: "2026",
        tags: ["Next.js", "Framer Motion", "Tailwind", "Unique UI"],
        bullets: [
          "Designed and implemented a high-performance portfolio with custom glassmorphism and bento layouts.",
          "Engineered complex micro-interactions and smooth page transitions using Framer Motion.",
          "Achieved 100/100 Lighthouse performance scores through aggressive asset optimization."
        ]
      },
      {
        name: "WealthIn Interface",
        role: "Frontend Lead",
        date: "Feb 2026",
        tags: ["React", "Tailwind", "Data Visualization", "Chart.js"],
        bullets: [
          "Crafted a sophisticated dashboard for financial modeling with real-time data visualization.",
          "Implemented a modular component library used across the entire WealthIn ecosystem.",
          "Optimized complex form wizards for high conversion and user clarity."
        ]
      }
    ]
  },
  FULLSTACK: {
    title: "Full Stack Developer",
    subtitle: "Scalable Backends · Distributed Systems · Modern Web",
    summary: "Versatile engineer capable of architecting end-to-end applications. Strong focus on backend reliability, database optimization, and seamless frontend integration. Experienced in cloud-native deployment and system design.",
    skills: [
      { label: "Backend", items: "Node.js · Python (FastAPI/Express) · PostgreSQL · Redis · GraphQL" },
      { label: "Frontend", items: "Next.js · TypeScript · Tailwind CSS · State Management" },
      { label: "DevOps", items: "Docker · Docker Compose · Git Actions · AWS/Vercel · Linux Systems" },
      { label: "Architecture", items: "REST APIs · System Design · Database Schema Design · Caching Strategies" },
    ],
    projects: [
      {
        name: "WealthIn — Infrastructure",
        role: "Software Architect",
        date: "Feb 2026",
        tags: ["Docker", "PostgreSQL", "Redis", "FastAPI"],
        bullets: [
          "Architected an asynchronous backend processing 100+ complex financial reports simultaneously.",
          "Implemented a robust caching layer using Redis, reducing API latency by 60%.",
          "Designed a multi-tenant database schema ensuring 100% data isolation and security."
        ]
      },
      {
        name: "SAARA Data Engine",
        role: "Backend Engineer",
        date: "2025",
        tags: ["Python", "API Design", "Data Pipelines", "Pytest"],
        bullets: [
          "Built the core processing engine for high-volume document parsing and dataset generation.",
          "Developed comprehensive test suites ensuring 95%+ code coverage for critical data paths.",
          "Optimized data ingestion pipelines for memory efficiency when handling large PDF files."
        ]
      }
    ]
  }
};

export default function ResumePage() {
  const [activeRole, setActiveRole] = useState<ResumeRole>('AI');

  useEffect(() => {
    document.title = `Kilani Sai Nikhil — ${RESUMES[activeRole].title}`;
  }, [activeRole]);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-accent-cyan/30">
      
      {/* --- Floating Control Panel (No Print) --- */}
      <nav className="no-print fixed top-6 left-1/2 -translate-x-1/2 z-50 glass px-6 py-3 rounded-2xl flex items-center gap-6 border-white/5 shadow-2xl shadow-black">
        <div className="flex items-center gap-1">
          {(Object.keys(RESUMES) as ResumeRole[]).map((role) => (
            <button
              key={role}
              onClick={() => setActiveRole(role)}
              className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                activeRole === role ? 'bg-accent-cyan text-black shadow-lg shadow-accent-cyan/20' : 'text-zinc-500 hover:text-white'
              }`}
            >
              {role}
            </button>
          ))}
        </div>
        <div className="h-4 w-[1px] bg-white/10" />
        <div className="flex items-center gap-3">
          <button onClick={() => window.print()} className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-accent-cyan transition-colors">
            <Download size={18} />
          </button>
          <a href="/" className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 transition-colors">
            <ChevronRight size={18} />
          </a>
        </div>
      </nav>

      {/* --- Resume Document --- */}
      <AnimatePresence mode="wait">
        <motion.main
          key={activeRole}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="resume-container mx-auto max-w-[850px] bg-white text-[#111] p-12 shadow-2xl print:shadow-none print:p-0 min-h-[1100px]"
        >
          {/* Header */}
          <header className="flex justify-between items-start border-b-4 border-accent-cyan pb-8 mb-8">
            <div className="space-y-1">
              <h1 className="text-4xl font-black tracking-tighter uppercase text-black">Kilani Sai Nikhil</h1>
              <div className="flex items-center gap-2 text-accent-cyan">
                <div className="w-8 h-[2px] bg-accent-cyan" />
                <p className="text-sm font-black uppercase tracking-[0.2em]">{RESUMES[activeRole].title}</p>
              </div>
              <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{RESUMES[activeRole].subtitle}</p>
            </div>
            
            <div className="text-right space-y-2">
              <ContactInfo icon={Mail} text="kilanisainikhil@gmail.com" />
              <ContactInfo icon={Linkedin} text="linkedin.com/in/kilanisainikhil" href="https://linkedin.com/in/kilanisainikhil" />
              <ContactInfo icon={Github} text="github.com/nikhil49023" href="https://github.com/nikhil49023" />
              <div className="flex items-center justify-end gap-1.5 text-[10px] font-bold text-zinc-400">
                <MapPin size={10} /> HYDERABAD, INDIA
              </div>
            </div>
          </header>

          {/* Summary */}
          <Section title="Professional Narrative">
            <p className="text-sm leading-relaxed text-zinc-600 font-medium italic">
              "{RESUMES[activeRole].summary}"
            </p>
          </Section>

          {/* Core Competencies */}
          <Section title="Core Competencies">
            <div className="grid grid-cols-2 gap-x-12 gap-y-4">
              {RESUMES[activeRole].skills.map((s) => (
                <div key={s.label}>
                  <p className="text-[10px] font-black uppercase tracking-widest text-accent-cyan mb-1">{s.label}</p>
                  <p className="text-xs text-zinc-600 font-bold leading-relaxed">{s.items}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Selected Work */}
          <Section title="Strategic Implementations">
            <div className="space-y-8">
              {RESUMES[activeRole].projects.map((p) => (
                <div key={p.name} className="relative pl-6 border-l-2 border-zinc-100">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-accent-cyan" />
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-base font-black text-black uppercase flex items-center gap-2">
                        {p.name} {p.link && <a href={p.link} target="_blank"><ExternalLink size={12} className="text-accent-cyan" /></a>}
                      </h4>
                      <p className="text-xs font-bold text-accent-cyan uppercase">{p.role}</p>
                    </div>
                    <span className="text-[10px] font-black text-zinc-400 uppercase">{p.date}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {p.tags.map(t => (
                      <span key={t} className="text-[8px] font-black px-2 py-0.5 rounded bg-zinc-50 border border-zinc-100 text-zinc-500 uppercase">{t}</span>
                    ))}
                  </div>
                  <ul className="space-y-1.5">
                    {p.bullets.map((b, i) => (
                      <li key={i} className="text-xs text-zinc-600 leading-relaxed list-square ml-4">{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          {/* Background */}
          <div className="grid grid-cols-2 gap-12 mt-12 pt-8 border-t-2 border-zinc-100">
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-black mb-4 flex items-center gap-2">
                <GraduationCap size={14} className="text-accent-cyan" /> Academic Roots
              </h3>
              <p className="text-xs font-black text-black">NxtWave Institute (NIAT)</p>
              <p className="text-[10px] font-bold text-accent-cyan uppercase">B.Tech · Computer Science</p>
              <p className="text-[10px] font-medium text-zinc-500 mt-1">2025 – 2029 · HYDERABAD</p>
            </div>
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-black mb-4 flex items-center gap-2">
                <Award size={14} className="text-accent-cyan" /> Recognition
              </h3>
              <div className="space-y-3">
                <p className="text-[10px] font-bold text-zinc-600">
                  <span className="text-black font-black uppercase">National Finalist</span> · OpenAI Buildathon 2026 (Top 0.1%)
                </p>
                <p className="text-[10px] font-bold text-zinc-600">
                  <span className="text-black font-black uppercase">Certified Expert</span> · AMD AI Academy: Agents 101
                </p>
              </div>
            </div>
          </div>
          
          <footer className="mt-12 text-center">
            <p className="text-[8px] font-black text-zinc-300 uppercase tracking-[0.4em]">Verified Engineer Portfolio · Kilani Sai Nikhil · 2026</p>
          </footer>
        </motion.main>
      </AnimatePresence>

      <style jsx global>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; padding: 0 !important; margin: 0 !important; }
          .resume-container { 
            max-width: 100% !important; 
            box-shadow: none !important; 
            padding: 0 !important;
            margin: 0 !important;
            border: none !important;
          }
        }
        .list-square { list-style-type: square; }
        @page {
          size: A4;
          margin: 15mm;
        }
      `}</style>
    </div>
  );
}

/* --- Utilities --- */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <div className="flex items-center gap-4 mb-5">
        <h2 className="text-xs font-black uppercase tracking-[0.25em] text-black whitespace-nowrap">{title}</h2>
        <div className="h-[1px] w-full bg-zinc-100" />
      </div>
      {children}
    </section>
  );
}

function ContactInfo({ icon: Icon, text, href }: { icon: any; text: string; href?: string }) {
  const content = (
    <div className="flex items-center justify-end gap-2 text-[10px] font-bold text-zinc-600 hover:text-accent-cyan transition-colors uppercase tracking-wider">
      <span>{text}</span>
      <Icon size={12} className="text-accent-cyan" />
    </div>
  );
  return href ? <a href={href} target="_blank">{content}</a> : content;
}

function MapPin(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
  );
}
