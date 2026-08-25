'use client';

import { useState } from 'react';
import { FileCode, GraduationCap, Briefcase, ChevronRight, FileText, Cpu, Terminal, Layers, Shield, Activity, Database } from 'lucide-react';

const systemsData = [
  {
    name: 'Vitt (Artha)',
    type: 'On-Device AI Financial Assistant',
    status: 'Ready for Play Store & Indus Release',
    stack: 'Flutter, LiteRT (Gemma 4 E2B), AES-256 SQLite',
    privacy: '100% On-Device · Zero SMS Permissions · DPDP Act 2023 Compliant'
  },
  {
    name: 'saara-ai',
    type: 'Local-First Dataset Synthesis Engine',
    status: 'Published on PyPI & NPM (38 Releases)',
    downloads: '2,600+ PyPI Direct Downloads',
    stack: 'Python, TypeScript, google-adk, crawl4ai, Ollama, vLLM'
  },
  {
    name: 'AerialEye',
    type: 'YOLOv11 Aerial & Disaster Response Model',
    status: 'Hosted on Hugging Face Hub (kilanisainikhil/AerialEye)',
    downloads: '1,900+ Transfers · 6,327 Curated Images',
    stack: 'YOLOv11, SAHI Tiling, PyTorch, ONNX, INT8 Coral Edge TPU'
  },
  {
    name: 'Sleep Health Analytics',
    type: 'Statistical Biometric EDA & Modeling',
    status: 'Published on Kaggle Hub',
    specs: 'Pandas & NumPy Pipelines · Seaborn Correlation Matrices',
    stack: 'Python, Pandas, NumPy, Seaborn, Matplotlib, Kaggle'
  }
];

const experienceData = [
  {
    role: 'Open-Source SDK Creator & Maintainer',
    org: 'saara-ai (PyPI & NPM)',
    period: '2025 - Present',
    impact: 'Architected local dataset synthesis engine with 38 releases and 2,600+ direct PyPI downloads. Integrated google-adk and crawl4ai for bounded autonomous research agents.'
  },
  {
    role: 'On-Device AI Mobile Architect',
    org: 'Vitt (Play Store & Indus Appstore)',
    period: '2025 - 2026',
    impact: 'Engineered 100% private financial tracker using LiteRT Gemma 4 E2B (~14 tok/s). Eliminated SMS permissions using Android Notification Listener and encrypted local SQLite.'
  },
  {
    role: 'Edge ML & Computer Vision Researcher',
    org: 'AerialEye (Hugging Face Hub)',
    period: '2025 - 2026',
    impact: 'Curated 6,327 high-altitude disaster images, fine-tuned YOLOv11-Nano with SAHI slicing (89.4% mAP@0.5), and exported INT8 TFLite for Google Coral TPUs (1,900+ downloads).'
  },
  {
    role: 'Data Science & Biometrics Researcher',
    org: 'Sleep Health Capstone (Kaggle)',
    period: '2025',
    impact: 'Engineered exploratory data pipelines in Pandas & NumPy to model correlations between occupational stress, sleep architecture, and cardiovascular metrics.'
  }
];

const hardwareData = {
  os: 'Linux (Ubuntu 24.04 LTS)',
  runtime_environments: ['Python 3.11 / PyTorch 2.5', 'Node.js 22 LTS / Bun', 'Flutter 3.24 / Dart 3.5', 'Jupyter / Pandas / NumPy'],
  accelerators: ['Google Coral Edge TPU (INT8 USB Accelerator)', 'Local vLLM & Ollama CUDA Clusters'],
  agent_tooling: ['Model Context Protocol (MCP)', 'Local Docker Stacks', 'Local Firecrawl Documentation Scrapers']
};

const competencies = [
  {
    title: 'On-Device AI & LiteRT',
    desc: 'Deploying quantized small language models (Gemma 4 E2B) locally on mobile hardware with zero cloud latency, zero recurring API cost, and strict privacy.',
    tags: ['LiteRT', 'Gemma 4', 'AICore', 'Flutter', 'SQLite AES-256'],
    icon: Cpu
  },
  {
    title: 'Edge Vision & Disaster CV',
    desc: 'Fine-tuning YOLOv11 with SAHI dynamic tile slicing for small high-altitude objects, quantized to INT8 precision for low-power Google Coral TPUs.',
    tags: ['YOLOv11', 'SAHI', 'PyTorch', 'ONNX', 'Coral Edge TPU'],
    icon: Layers
  },
  {
    title: 'Data Science & Biometrics',
    desc: 'Conducting statistical exploratory data analysis, feature engineering, and distribution modeling on clinical datasets using Pandas, NumPy, and Seaborn.',
    tags: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'Kaggle', 'EDA'],
    icon: Database
  },
  {
    title: 'Open-Source Tooling & MCP',
    desc: 'Publishing production developer SDKs and dataset distillation engines on PyPI and NPM with clean architecture and automated CI/CD pipelines.',
    tags: ['Python', 'TypeScript', 'PyPI', 'NPM', 'google-adk', 'MCP'],
    icon: Terminal
  }
];

// Helper components for JSON formatting & coloring on screen
function JsonHighlighter({ data }: { data: any }) {
  const jsonString = JSON.stringify(data, null, 2);
  const lines = jsonString.split('\n');
  
  return (
    <pre className="font-mono text-xs md:text-sm overflow-x-auto text-[var(--ink-secondary)] leading-relaxed select-text p-1">
      <code>
        {lines.map((line, i) => {
          const keyRegex = /^(\s*)"([^"]+)"\s*:/;
          const stringRegex = /:\s*"([^"]+)"(,)?$/;
          const numberRegex = /:\s*(true|false|\d+)(,)?$/;
          
          if (keyRegex.test(line)) {
            const match = line.match(keyRegex);
            if (match) {
              const spaces = match[1];
              const key = match[2];
              const rest = line.substring(match[0].length);
              
              if (stringRegex.test(rest)) {
                const valMatch = rest.match(stringRegex);
                if (valMatch) {
                  const val = valMatch[1];
                  const comma = valMatch[2] || '';
                  return (
                    <div key={i} className="whitespace-pre">
                      {spaces}
                      <span className="text-[var(--brand-secondary)] font-medium">"{key}"</span>:
                      <span className="text-emerald-600 dark:text-emerald-400">"{val}"</span>{comma}
                    </div>
                  );
                }
              } else if (numberRegex.test(rest)) {
                const valMatch = rest.match(numberRegex);
                if (valMatch) {
                  const val = valMatch[1];
                  const comma = valMatch[2] || '';
                  return (
                    <div key={i} className="whitespace-pre">
                      {spaces}
                      <span className="text-[var(--brand-secondary)] font-medium">"{key}"</span>:
                      <span className="text-amber-600 dark:text-amber-400 font-bold">{val}</span>{comma}
                    </div>
                  );
                }
              }
              
              return (
                <div key={i} className="whitespace-pre">
                  {spaces}
                  <span className="text-[var(--brand-secondary)] font-medium">"{key}"</span>:
                  {rest}
                </div>
              );
            }
          }
          
          const charElements = line.split('').map((char, charIdx) => {
            if (['{', '}', '[', ']'].includes(char)) {
              return <span key={charIdx} className="text-blue-500 dark:text-sky-400 font-bold">{char}</span>;
            }
            return char;
          });

          return (
            <div key={i} className="whitespace-pre">
              {charElements}
            </div>
          );
        })}
      </code>
    </pre>
  );
}

export default function About() {
  const [activeFile, setActiveFile] = useState<'README.md' | 'systems.json' | 'experience.json' | 'environment.json'>('README.md');

  return (
    <section id="about" className="section-premium border-t border-[var(--border-subtle)] bg-[var(--bg-void)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex items-baseline gap-4 mb-8">
          <span className="font-mono text-sm text-[var(--brand-primary)] font-bold">01</span>
          <h2 className="text-sm font-mono tracking-widest uppercase text-[var(--brand-secondary)] font-bold">
            Engineering Identity &amp; Profile
          </h2>
        </div>

        {/* Two-Column Core Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Narrative Block */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--ink-primary)] leading-tight">
              Engineering at the Intersection of Edge ML &amp; Systems Architecture
            </h3>
            
            <p className="text-sm leading-relaxed text-[var(--ink-secondary)]">
              I am a Computer Science student at NxtWave (Class of 2029) based in Hyderabad, India. My engineering philosophy combines <strong className="text-[var(--ink-primary)] font-bold">rock-solid native CS fundamentals</strong> (C++, Python, SQL, Linux, Docker, PyTorch) with <strong className="text-[var(--ink-primary)] font-bold">10x AI-augmented velocity</strong> (MCP orchestration, LiteRT on-device inference, semantic code graphs).
            </p>

            <p className="text-sm leading-relaxed text-[var(--ink-secondary)]">
              I focus on building software that runs directly on edge hardware—eliminating recurring cloud subscription costs, safeguarding personal privacy through zero-cloud architectures, and maintaining resilience during severe infrastructure disruption.
            </p>

            {/* Quick Metrics Badge */}
            <div className="p-4 border border-[var(--border-subtle)] bg-[var(--bg-surface)] space-y-3">
              <div className="flex justify-between items-center text-[10px] font-mono border-b border-[var(--border-subtle)] pb-2">
                <span className="text-[var(--ink-muted)] uppercase tracking-wider">runtime_telemetry</span>
                <span className="text-[var(--brand-primary)] font-bold">HYD // IST (UTC+5:30)</span>
              </div>
              <div className="space-y-1.5 font-mono text-[11px] text-[var(--ink-primary)]">
                <div className="flex justify-between">
                  <span className="text-[var(--ink-muted)]">Active Node:</span>
                  <span>saara-ai (PyPI: 2.6k+ DL)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--ink-muted)]">Edge Inference:</span>
                  <span>LiteRT / Google Coral Edge TPU</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--ink-muted)]">Education:</span>
                  <span>B.Tech CSE (2025–2029)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block - Code Workspace Container */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="w-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] flex flex-col shadow-sm">
              
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] px-4 py-3 bg-[var(--bg-surface)]/80">
                <span className="text-[10px] font-mono text-[var(--ink-muted)]">workspace // kilani-sai-nikhil</span>
                <span className="text-[10px] font-mono text-[var(--brand-primary)] font-bold">UTF-8</span>
              </div>

              {/* Tab Header Selector */}
              <div className="flex border-b border-[var(--border-subtle)] bg-[var(--bg-void)]/60 text-xs font-mono overflow-x-auto">
                {[
                  { name: 'README.md', icon: FileText },
                  { name: 'systems.json', icon: FileCode },
                  { name: 'experience.json', icon: Briefcase },
                  { name: 'environment.json', icon: Cpu },
                ].map((file) => {
                  const FileIcon = file.icon;
                  const isActive = activeFile === file.name;
                  return (
                    <button
                      key={file.name}
                      onClick={() => setActiveFile(file.name as any)}
                      className={`relative flex items-center gap-2 px-3.5 py-2.5 transition-all border-r border-[var(--border-subtle)] cursor-pointer rounded-none border-0 whitespace-nowrap ${
                        isActive
                          ? 'bg-[var(--bg-surface)] text-[var(--ink-primary)] font-bold border-b-2 border-b-[var(--brand-primary)]'
                          : 'text-[var(--ink-secondary)] hover:bg-[var(--bg-surface)]/30 hover:text-[var(--ink-primary)]'
                      }`}
                    >
                      <FileIcon size={12} className={isActive ? 'text-[var(--brand-primary)]' : 'text-[var(--ink-muted)]'} />
                      <span>{file.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab Content Panel */}
              <div className="p-6 min-h-[340px] bg-[var(--bg-surface)] overflow-y-auto max-h-[440px]">
                {activeFile === 'README.md' && (
                  <div className="font-sans space-y-4 text-sm leading-relaxed text-[var(--ink-secondary)]">
                    <h4 className="text-lg font-bold text-[var(--ink-primary)] font-mono border-b border-[var(--border-subtle)] pb-2 flex items-center gap-1.5">
                      <ChevronRight size={16} className="text-[var(--brand-primary)]" />
                      <span>Kilani Sai Nikhil // Profile Overview</span>
                    </h4>
                    <p>
                      I am pursuing a Bachelor of Technology in Computer Science &amp; Engineering at NxtWave Institute (2025–2029). I engineer local-first software systems, open-source AI tooling, and edge computer vision models.
                    </p>
                    <div className="space-y-2 font-mono text-xs text-[var(--ink-secondary)] mt-4">
                      <div className="font-bold text-[var(--brand-secondary)] uppercase tracking-wider text-[10px]">Dual-Track Engineering Philosophy:</div>
                      <ul className="list-disc pl-5 space-y-1.5">
                        <li><strong className="text-[var(--ink-primary)]">Native Systems Mastery:</strong> Deep proficiency in Python, C++, SQL relational modeling, Linux OS internals, and Docker containerization.</li>
                        <li><strong className="text-[var(--ink-primary)]">10x AI Augmentation:</strong> Accelerated scaffolding, semantic code-review graph traversal, and multi-agent MCP toolchain orchestration.</li>
                        <li><strong className="text-[var(--ink-primary)]">Edge Privacy Stance:</strong> 100% on-device inference via LiteRT &amp; Google Coral TPUs with zero external cloud dependencies.</li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeFile === 'systems.json' && (
                  <JsonHighlighter data={systemsData} />
                )}

                {activeFile === 'experience.json' && (
                  <JsonHighlighter data={experienceData} />
                )}

                {activeFile === 'environment.json' && (
                  <JsonHighlighter data={hardwareData} />
                )}
              </div>

            </div>
          </div>
          
        </div>

        {/* Core Competencies Grid */}
        <div className="mt-10">
          <h3 className="font-bold text-xs text-[var(--ink-primary)] mb-4 uppercase tracking-wider flex items-center gap-2 font-mono">
            <span className="w-1.5 h-1.5 bg-[var(--brand-primary)] rounded-full" />
            <span>Core Engineering Disciplines</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {competencies.map((item) => {
              const CompIcon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-5 border border-[var(--border-subtle)] bg-[var(--bg-surface)]/70 hover:bg-[var(--bg-surface)] hover:border-[var(--border-active)] transition-all duration-300 flex flex-col justify-between shadow-sm cursor-pointer"
                >
                  <div>
                    <div className="w-8 h-8 flex items-center justify-center border border-[var(--border-subtle)] bg-[var(--bg-void)] text-[var(--brand-primary)] mb-4">
                      <CompIcon size={16} />
                    </div>
                    <h4 className="font-bold text-[var(--ink-primary)] text-sm tracking-tight mb-2 font-display">
                      {item.title}
                    </h4>
                    <p className="text-xs leading-relaxed text-[var(--ink-secondary)] mb-4">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-3 border-t border-[var(--border-subtle)]">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-mono px-2 py-0.5 border border-[var(--border-subtle)] bg-[var(--bg-void)] text-[var(--ink-secondary)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
