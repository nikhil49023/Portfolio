'use client';

import { useEffect } from 'react';

export default function ResumePage() {
  useEffect(() => {
    document.title = 'Kilani Sai Nikhil — Resume';
  }, []);

  return (
    <>
      {/* Print / Save-as-PDF button — hidden when printing */}
      <div className="no-print fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex gap-2 sm:gap-3">
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg hover:bg-violet-700 transition-colors"
        >
          ↓ Save as PDF
        </button>
        <a
          href="/"
          className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 shadow hover:bg-slate-50 transition-colors"
        >
          ← Portfolio
        </a>
      </div>

      {/* Resume document */}
      <main className="resume-page mx-auto max-w-[800px] bg-white px-4 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10 text-[#1a1a2e] font-sans">

        {/* ── Header ── */}
        <header className="mb-6 border-b-2 border-violet-600 pb-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-[#1a1a2e]">Kilani Sai Nikhil</h1>
              <p className="mt-1 text-base font-semibold text-violet-600">AI Developer · LLM Engineer · Flutter Builder</p>
            </div>
            <div className="text-right text-xs text-slate-500 space-y-1 shrink-0">
              <p>Hyderabad, India</p>
              <a href="https://linkedin.com/in/kilanisainikhil" target="_blank" rel="noopener noreferrer" className="block text-violet-600 hover:underline">
                linkedin.com/in/kilanisainikhil
              </a>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-3 text-xs font-semibold">
            <a href="https://kilanisainikhil.onslate.in" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:underline">
              🌐 kilanisainikhil.onslate.in
            </a>
            <a href="https://github.com/nikhil49023" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:underline">
              GitHub: nikhil49023
            </a>
            <a href="https://linkedin.com/in/kilanisainikhil" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:underline">
              LinkedIn: kilanisainikhil
            </a>
            <a href="https://pypi.org/user/SaiNikhil/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:underline">
              PyPI: SaiNikhil
            </a>
            <a href="https://huggingface.co/kilanisainikhil" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:underline">
              HuggingFace: kilanisainikhil
            </a>
          </div>
        </header>

        {/* ── Summary ── */}
        <Section title="Summary">
          <p className="text-sm leading-relaxed text-slate-700">
            B.Tech student specializing in large language models, agentic architectures, and production AI systems.
            National finalist (Top 90 of 70,000+) at the OpenAI × NxtWave Buildathon 2026.
            I build end-to-end AI products — from agentic workflows and RAG pipelines to polished Flutter mobile apps —
            and contribute open-source tooling published on PyPI.
          </p>
        </Section>

        {/* ── Education ── */}
        <Section title="Education">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-bold text-[#1a1a2e]">Nxt Wave Institute of Advanced Technologies (NIAT)</p>
              <p className="text-xs text-slate-600 mt-0.5">Bachelor of Technology (B.Tech) · Computer Science &amp; Engineering</p>
            </div>
            <span className="text-xs text-slate-500 shrink-0">2025 – 2029 · Hyderabad</span>
          </div>
        </Section>

        {/* ── Experience / Projects ── */}
        <Section title="Projects">

          <ProjectItem
            name="WealthIn"
            role="Full-Stack AI Developer"
            date="Feb 2026"
            link="https://github.com/nikhil49023"
            tags={['Flutter', 'FastAPI', 'GPT-4o', 'Groq', 'RAG', 'LangChain', 'Sarvam AI', 'Celery', 'Redis', 'PostgreSQL']}
            bullets={[
              'Built an AI-powered Detailed Project Report (DPR) generator for Indian MSMEs, reducing preparation time from weeks to under 30 minutes.',
              'Designed a hybrid LLM router dynamically dispatching tasks between Groq (speed) and GPT-4o (complex reasoning) to balance cost and quality.',
              'Implemented a RAG-based creditworthiness scoring engine using Sarvam AI supporting 6+ Indic languages (Hindi, Tamil, Marathi, Telugu, Kannada).',
              'Architected a multi-agent orchestration pipeline covering financial modelling, risk assessment, and regulatory compliance checks.',
              'Delivered a Flutter mobile app with real-time document preview, section editing, and PDF export.',
            ]}
          />

          <ProjectItem
            name="SAARA — Self-Automated Agentic Research Assistant"
            role="AI Developer · Open Source"
            date="2025"
            link="https://pypi.org/project/saara-ai/"
            tags={['Python', 'LangChain', 'QLoRA', 'Vision LLM', 'HuggingFace', 'PyPI']}
            bullets={[
              'Published saara-ai to PyPI — an agentic pipeline that automatically generates domain-specific training datasets from unstructured PDF documents.',
              'Implemented a Vision Agent for layout-aware OCR, a Labeler Agent for structured Q&A pair generation, and a Teacher-Student Judge Loop for quality filtering.',
              'Fine-tuned domain-specific LLMs using QLoRA on consumer hardware (RTX 3050), achieving efficient adaptation with minimal compute.',
              'Automated the full loop from raw document to deployed model on HuggingFace Hub.',
            ]}
          />

        </Section>

        {/* ── Skills ── */}
        <Section title="Skills">
          <div className="space-y-2">
            <SkillRow label="AI / ML / LLMs" skills="Agentic Frameworks · Vision LLMs · RAG Pipelines · QLoRA Fine-tuning · Groq · GPT-4o · HuggingFace · Ollama · Sarvam AI · Local Inference" />
            <SkillRow label="Building" skills="Python · C++ Basics · Flutter · Dart · FastAPI · SQLite · REST APIs · MVP Development · AI-assisted Development" />
            <SkillRow label="DevTools" skills="Git · GitHub · Ubuntu / Linux · PyPI Publishing · Claude CLI · HuggingFace Hub" />
          </div>
        </Section>

        {/* ── Awards ── */}
        <Section title="Awards &amp; Recognition">
          <div className="space-y-3">
            <AwardItem
              title="National Finalist — OpenAI × NxtWave Buildathon 2026"
              sub="Top 90 of 70,000+ participants across India · AI Application Track"
              date="17 Feb 2026"
              link="https://openai-buildathon.nxtwave.tech/"
            />
            <AwardItem
              title="Open Source Contributor — saara-ai on PyPI"
              sub="Published open-source agentic AI package downloaded by the developer community"
              link="https://pypi.org/project/saara-ai/"
            />
          </div>
        </Section>

      </main>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; }
          .resume-page { max-width: 100% !important; padding: 0 !important; }
        }
        @page {
          size: A4;
          margin: 18mm 16mm;
        }
        .resume-page { font-family: 'Inter', 'Segoe UI', system-ui, sans-serif; }
      `}</style>
    </>
  );
}

/* ── Sub-components ── */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-6">
      <h2 className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-violet-600 border-b border-violet-100 pb-1">
        {title}
      </h2>
      {children}
    </section>
  );
}

function ProjectItem({
  name, role, date, link, tags, bullets,
}: {
  name: string; role: string; date: string; link?: string;
  tags: string[]; bullets: string[];
}) {
  return (
    <div className="mb-5 last:mb-0">
      <div className="flex items-start justify-between gap-2 mb-1">
        <div>
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#1a1a2e] hover:text-violet-600 hover:underline">
              {name}
            </a>
          ) : (
            <p className="text-sm font-bold text-[#1a1a2e]">{name}</p>
          )}
          <p className="text-xs text-violet-600 font-semibold">{role}</p>
        </div>
        <span className="text-xs text-slate-400 shrink-0">{date}</span>
      </div>
      <div className="mb-1.5 flex flex-wrap gap-1">
        {tags.map((t) => (
          <span key={t} className="rounded px-1.5 py-0.5 text-[10px] font-semibold bg-violet-50 text-violet-700 border border-violet-100">
            {t}
          </span>
        ))}
      </div>
      <ul className="space-y-1 pl-3">
        {bullets.map((b, i) => (
          <li key={i} className="text-xs leading-relaxed text-slate-600 list-disc">{b}</li>
        ))}
      </ul>
    </div>
  );
}

function SkillRow({ label, skills }: { label: string; skills: string }) {
  return (
    <div className="flex gap-2 text-xs">
      <span className="w-24 shrink-0 font-bold text-[#1a1a2e]">{label}</span>
      <span className="text-slate-600">{skills}</span>
    </div>
  );
}

function AwardItem({ title, sub, date, link }: { title: string; sub: string; date?: string; link?: string }) {
  return (
    <div className="flex items-start justify-between gap-2">
      <div>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#1a1a2e] hover:text-violet-600 hover:underline">
            {title}
          </a>
        ) : (
          <p className="text-xs font-bold text-[#1a1a2e]">{title}</p>
        )}
        <p className="text-xs text-slate-500 mt-0.5">{sub}</p>
      </div>
      {date && <span className="text-xs text-slate-400 shrink-0">{date}</span>}
    </div>
  );
}
