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
          className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-600 shadow hover:bg-gray-50 transition-colors"
        >
          ← Portfolio
        </a>
      </div>

      {/* Resume document */}
      <main className="resume-page mx-auto max-w-[800px] bg-white px-4 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10 text-[#111827] font-sans">

        {/* ── Header ── */}
        <header className="mb-6 border-b-2 border-violet-500 pb-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-[#0f172a]">Kilani Sai Nikhil</h1>
              <p className="mt-1 text-base font-semibold text-violet-600">Agentic App Builder · LLM & AI Systems</p>
            </div>
            <div className="text-right text-xs text-gray-500 space-y-1 shrink-0">
              <p>Hyderabad, India</p>
              <a href="https://linkedin.com/in/kilanisainikhil" target="_blank" rel="noopener noreferrer" className="block text-violet-600 hover:underline">
                linkedin.com/in/kilanisainikhil
              </a>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-3 text-xs font-semibold">
            <a href="https://github.com/nikhil49023" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:underline">
              GitHub: nikhil49023
            </a>
            <a href="https://linkedin.com/in/kilanisainikhil" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:underline">
              LinkedIn: kilanisainikhil
            </a>
            <a href="https://pypi.org/user/SaiNikhil/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:underline">
              PyPI: SaiNikhil
            </a>
            <a href="mailto:kilanisainikhil@gmail.com" className="text-gray-600 hover:underline">
              Email: kilanisainikhil@gmail.com
            </a>
          </div>
        </header>

        {/* ── Summary ── */}
        <Section title="Summary">
          <p className="text-sm leading-relaxed text-gray-700">
            Agentic App Builder specializing in production-ready AI applications using Google ADK, AutoGen, and LLM frameworks.
            National finalist (Top 90 of 70,000+) at the OpenAI × NxtWave Buildathon 2026.
            I build reliable agentic systems with tool-using AI, multi-agent orchestration, and RAG pipelines.
            Published an open-source Python library (saara-ai) on PyPI.
          </p>
        </Section>

        {/* ── Education ── */}
        <Section title="Education">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-bold text-[#0f172a]">Nxt Wave Institute of Advanced Technologies (NIAT)</p>
              <p className="text-xs text-gray-600 mt-0.5">Bachelor of Technology (B.Tech) · Computer Science & Engineering</p>
            </div>
            <span className="text-xs text-gray-500 shrink-0">2025 – 2029 · Hyderabad</span>
          </div>
        </Section>

        {/* ── Skills ── */}
        <Section title="Skills">
          <div className="space-y-2">
            <SkillRow label="Agentic AI" skills="Google ADK · AutoGen · Multi-Agent Systems · Tool-using AI · Agentic Workflows" />
            <SkillRow label="ML & LLMs" skills="PyTorch · Hugging Face · LLMs · RAG · Computer Vision · OpenCV" />
            <SkillRow label="Data & Viz" skills="NumPy · Pandas · Matplotlib · Dataset Curation · Data Pipelines" />
            <SkillRow label="Systems & Tools" skills="System Architecture Design · Docker · Git & GitHub · PostgreSQL · Redis" />
          </div>
        </Section>

        {/* ── Projects ── */}
        <Section title="Projects">

          <ProjectItem
            name="WealthIn"
            role="Software Engineer"
            date="Feb 2026"
            link="https://github.com/nikhil49023"
            tags={['Python', 'Docker', 'System Architecture', 'PostgreSQL', 'Redis']}
            bullets={[
              'Built a comprehensive Financial OS for Indian MSMEs, automating institutional-grade Detailed Project Reports (DPR) in under 30 minutes.',
              'Architected an asynchronous backend to handle complex financial modeling and multi-user report generation.',
              'Implemented a robust data layer with PostgreSQL for persistence and Redis for task queuing and caching.',
              'Designed a modular system architecture supporting regional language localization and regulatory compliance checks.',
            ]}
          />

          <ProjectItem
            name="SAARA — Automated Dataset Engine"
            role="ML/Data Engineer · Open Source"
            date="2025"
            link="https://pypi.org/project/saara-ai/"
            tags={['Python', 'PyPI', 'Dataset Curation', 'Hugging Face', 'Automation']}
            bullets={[
              'Published saara-ai to PyPI — an open-source Python library for automated processing of unstructured PDF documents into structured datasets.',
              'Engineered a layout-aware document parsing engine that preserves semantic structure including tables, headings, and figures.',
              'Implemented a multi-stage pipeline for data extraction, quality filtering, and structured output generation.',
              'Automated complex data preparation workflows, reducing manual effort by over 90%.',
              'Managed the full software lifecycle from initial architecture to public package distribution and community maintenance.',
            ]}
          />

        </Section>

        {/* ── Awards & Certifications ── */}
        <Section title="Awards & Certifications">
          <div className="space-y-3">
            <AwardItem
              title="National Finalist — OpenAI × NxtWave Buildathon 2026"
              sub="Top 90 of 70,000+ participants across India · Application Track"
              date="17 Feb 2026"
              link="https://openai-buildathon.nxtwave.tech/"
            />
            <AwardItem
              title="AMD AI Academy — AI Agents 101"
              sub="Certified in fundamentals of AI agent architectures, tool-use patterns, and multi-agent systems"
              link="/certificates/amd-ai-agents-101.jpg"
            />
            <AwardItem
              title="PyPI Publisher — saara-ai"
              sub="Authored and published an open-source Python package for automated PDF-to-dataset pipelines"
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
        .resume-page { font-family: 'Space Grotesk', 'Segoe UI', system-ui, sans-serif; }
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
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#0f172a] hover:text-violet-600 hover:underline">
              {name}
            </a>
          ) : (
            <p className="text-sm font-bold text-[#0f172a]">{name}</p>
          )}
          <p className="text-xs text-violet-600 font-semibold">{role}</p>
        </div>
        <span className="text-xs text-gray-400 shrink-0">{date}</span>
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
          <li key={i} className="text-xs leading-relaxed text-gray-600 list-disc">{b}</li>
        ))}
      </ul>
    </div>
  );
}

function SkillRow({ label, skills }: { label: string; skills: string }) {
  return (
    <div className="flex gap-2 text-xs">
      <span className="w-28 shrink-0 font-bold text-[#0f172a]">{label}</span>
      <span className="text-gray-600">{skills}</span>
    </div>
  );
}

function AwardItem({ title, sub, date, link }: { title: string; sub: string; date?: string; link?: string }) {
  return (
    <div className="flex items-start justify-between gap-2">
      <div>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#0f172a] hover:text-violet-600 hover:underline">
            {title}
          </a>
        ) : (
          <p className="text-xs font-bold text-[#0f172a]">{title}</p>
        )}
        <p className="text-xs text-gray-500 mt-0.5">{sub}</p>
      </div>
      {date && <span className="text-xs text-gray-400 shrink-0">{date}</span>}
    </div>
  );
}