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
          className="flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg hover:bg-sky-700 transition-colors"
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
      <main className="resume-page mx-auto max-w-[800px] bg-white px-4 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10 text-[#0f172a] font-sans">

        {/* ── Header ── */}
        <header className="mb-6 border-b-2 border-sky-600 pb-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-[#0f172a]">Kilani Sai Nikhil</h1>
              <p className="mt-1 text-base font-semibold text-sky-600">Full-Stack Developer · Flutter Specialist · Backend Architect</p>
            </div>
            <div className="text-right text-xs text-slate-500 space-y-1 shrink-0">
              <p>Hyderabad, India</p>
              <a href="https://linkedin.com/in/kilanisainikhil" target="_blank" rel="noopener noreferrer" className="block text-sky-600 hover:underline">
                linkedin.com/in/kilanisainikhil
              </a>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-3 text-xs font-semibold">
            <a href="https://kilanisainikhil.onslate.in" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">
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
          </div>
        </header>

        {/* ── Summary ── */}
        <Section title="Summary">
          <p className="text-sm leading-relaxed text-slate-700">
            B.Tech student specializing in production-grade application development, scalable backend architectures, and high-performance mobile systems.
            National finalist (Top 90 of 70,000+) at the OpenAI × NxtWave Buildathon 2026.
            I build end-to-end software products — from asynchronous FastAPI backends to polished Flutter mobile apps —
            and contribute open-source tooling published on PyPI.
          </p>
        </Section>

        {/* ── Education ── */}
        <Section title="Education">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-bold text-[#0f172a]">Nxt Wave Institute of Advanced Technologies (NIAT)</p>
              <p className="text-xs text-slate-600 mt-0.5">Bachelor of Technology (B.Tech) · Computer Science &amp; Engineering</p>
            </div>
            <span className="text-xs text-slate-500 shrink-0">2025 – 2029 · Hyderabad</span>
          </div>
        </Section>

        {/* ── Experience / Projects ── */}
        <Section title="Projects">

          <ProjectItem
            name="WealthIn"
            role="Full-Stack Developer"
            date="Feb 2026"
            link="https://github.com/nikhil49023"
            tags={['Flutter', 'FastAPI', 'Python', 'SQLite', 'PostgreSQL', 'Redis', 'Celery', 'Docker']}
            bullets={[
              'Built a comprehensive Financial OS for Indian MSMEs, automating institutional-grade Detailed Project Reports (DPR) in under 30 minutes.',
              'Developed a high-performance Flutter mobile app featuring real-time document preview, collaborative editing, and professional PDF export.',
              'Architected an asynchronous backend using FastAPI and Celery to handle complex financial modeling and multi-user report generation.',
              'Implemented a robust data layer with PostgreSQL for persistence and Redis for task queuing and caching.',
              'Designed a modular system architecture supporting regional language localization and complex regulatory compliance checks.',
            ]}
          />

          <ProjectItem
            name="SAARA — Automated Dataset Engine"
            role="Software Engineer · Open Source"
            date="2025"
            link="https://pypi.org/project/saara-ai/"
            tags={['Python', 'PyPI', 'CLI', 'Automation', 'File Processing', 'Software Architecture']}
            bullets={[
              'Published saara-ai to PyPI — an open-source Python library for automated processing of unstructured PDF documents into structured datasets.',
              'Engineered a layout-aware document parsing engine that preserves semantic structure including tables, headings, and figures.',
              'Implemented a multi-stage pipeline for data extraction, quality filtering, and structured output generation.',
              'Automated complex developer workflows, reducing manual data preparation time by over 90%.',
              'Managed the full software lifecycle from initial architecture to public package distribution and community maintenance.',
            ]}
          />

        </Section>

        {/* ── Skills ── */}
        <Section title="Skills">
          <div className="space-y-2">
            <SkillRow label="Backend & Systems" skills="FastAPI · Python · REST APIs · Asynchronous Programming · PostgreSQL · Redis · Celery · Docker · System Design" />
            <SkillRow label="Mobile & Frontend" skills="Flutter · Dart · Mobile UI/UX · State Management · SQLite · Responsive Design · Figma to Code" />
            <SkillRow label="Development Tools" skills="Git · GitHub · Linux / Ubuntu · PyPI Publishing · CI/CD Basics · Unit Testing" />
          </div>
        </Section>

        {/* ── Awards ── */}
        <Section title="Awards &amp; Recognition">
          <div className="space-y-3">
            <AwardItem
              title="National Finalist — OpenAI × NxtWave Buildathon 2026"
              sub="Top 90 of 70,000+ participants across India · Application Track"
              date="17 Feb 2026"
              link="https://openai-buildathon.nxtwave.tech/"
            />
            <AwardItem
              title="Open Source Contributor — saara-ai on PyPI"
              sub="Published open-source Python package with 1,000+ potential developer reach"
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
      <h2 className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-sky-600 border-b border-sky-100 pb-1">
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
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#0f172a] hover:text-sky-600 hover:underline">
              {name}
            </a>
          ) : (
            <p className="text-sm font-bold text-[#0f172a]">{name}</p>
          )}
          <p className="text-xs text-sky-600 font-semibold">{role}</p>
        </div>
        <span className="text-xs text-slate-400 shrink-0">{date}</span>
      </div>
      <div className="mb-1.5 flex flex-wrap gap-1">
        {tags.map((t) => (
          <span key={t} className="rounded px-1.5 py-0.5 text-[10px] font-semibold bg-sky-50 text-sky-700 border border-sky-100">
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
      <span className="w-24 shrink-0 font-bold text-[#0f172a]">{label}</span>
      <span className="text-slate-600">{skills}</span>
    </div>
  );
}

function AwardItem({ title, sub, date, link }: { title: string; sub: string; date?: string; link?: string }) {
  return (
    <div className="flex items-start justify-between gap-2">
      <div>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#0f172a] hover:text-sky-600 hover:underline">
            {title}
          </a>
        ) : (
          <p className="text-xs font-bold text-[#0f172a]">{title}</p>
        )}
        <p className="text-xs text-slate-500 mt-0.5">{sub}</p>
      </div>
      {date && <span className="text-xs text-slate-400 shrink-0">{date}</span>}
    </div>
  );
}
