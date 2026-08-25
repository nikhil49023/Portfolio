'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Printer, ExternalLink, Mail, MapPin,
  Github, Linkedin, Package, Award, CheckCircle2, Shield, BookOpen,
  GraduationCap, Code, Globe, User, Brain, Sparkles, Trophy, Radio, Terminal, Cpu, Layers
} from 'lucide-react';

/* ── ATS print styles optimized for a clean, single-page PDF output ── */
const PRINT_CSS = `
@media print {
  .no-print { display: none !important; }
  .print-show { display: block !important; }
  body, html {
    background: #ffffff !important;
    color: #0d0d0d !important;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
    font-size: 9.5pt !important;
    margin: 0 !important; padding: 0 !important;
    line-height: 1.35 !important;
  }
  * {
    background: transparent !important;
    color: #0d0d0d !important;
    box-shadow: none !important;
    text-shadow: none !important;
    border-color: #d1d5db !important;
    -webkit-text-fill-color: unset !important;
  }
  .print-container {
    max-width: 100% !important;
    padding: 0.3in 0.45in !important;
    margin: 0 auto !important;
  }
  .print-name {
    font-size: 18pt !important; font-weight: 800 !important;
    text-align: center !important; text-transform: uppercase !important;
    letter-spacing: 1.5px !important; margin-bottom: 2px !important;
  }
  .print-subtitle {
    font-size: 9.5pt !important; text-align: center !important;
    color: #374151 !important; font-weight: 600 !important;
    text-transform: uppercase !important; letter-spacing: 0.5px !important;
    margin-bottom: 4px !important;
  }
  .print-contact {
    font-size: 8pt !important; text-align: center !important;
    color: #4b5563 !important; margin-bottom: 10px !important;
    border-bottom: 1.5px solid #111111 !important;
    padding-bottom: 6px !important;
  }
  .print-section {
    font-size: 9.5pt !important; font-weight: 800 !important;
    text-transform: uppercase !important; border-bottom: 1px solid #111111 !important;
    margin-top: 10px !important; margin-bottom: 5px !important;
    padding-bottom: 2px !important; letter-spacing: 0.5px !important;
  }
  .print-item-head {
    display: flex !important; justify-content: space-between !important;
    font-weight: 700 !important; font-size: 9pt !important;
    margin-bottom: 1px !important;
  }
  .print-item-sub {
    font-size: 8pt !important; font-style: italic !important;
    color: #374151 !important; margin-bottom: 2px !important;
  }
  .print-bullets {
    margin: 2px 0 6px 14px !important; padding: 0 !important;
    list-style-type: disc !important;
  }
  .print-bullets li {
    font-size: 8pt !important; line-height: 1.3 !important;
    margin-bottom: 1.5px !important;
  }
  .print-skills-line {
    font-size: 8pt !important; margin-bottom: 2.5px !important;
    line-height: 1.35 !important;
  }
  .print-cert-row {
    font-size: 8pt !important; margin-bottom: 1.5px !important;
  }
  @page { size: letter; margin: 0; }
}
`;

const certs = [
  {
    title: 'Google Cloud Gen AI Master Certificate',
    issuer: 'Google Cloud Skills Boost',
    link: 'https://www.skills.google/public_profiles/44a41e60-6e04-4a73-abbf-963ea83c87eb',
    icon: Sparkles,
    date: 'Jul 2026',
  },
  {
    title: 'Build & Deploy Agents in Production',
    issuer: 'Google Cloud Skills Boost',
    link: 'https://www.skills.google/public_profiles/44a41e60-6e04-4a73-abbf-963ea83c87eb/badges/23799611',
    icon: CheckCircle2,
    date: '2025',
  },
  {
    title: 'Agents 101 Certification',
    issuer: 'AMD AI Academy',
    link: 'https://academy.amd.com/certs/31042/D5539744A4B347368F37FF267ED373CD166281.pdf',
    icon: Shield,
    date: '2025',
  },
  {
    title: 'Intermediate SQL Certification',
    issuer: 'DataCamp',
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/ee43fbec5c8180e4a47a8aaa8eba801ebc59519f',
    icon: BookOpen,
    date: '2026',
  },
  {
    title: 'Introduction to SQL',
    issuer: 'DataCamp',
    link: 'https://drive.google.com/file/d/1beBfZeQvKUGlmvTbkR8P7i9B4UhZ_MyC/view?usp=sharing',
    icon: BookOpen,
    date: '2025',
  },
  {
    title: 'Deploy Your First Agent',
    issuer: 'Google Cloud Skills Boost',
    link: 'https://www.skills.google/public_profiles/44a41e60-6e04-4a73-abbf-963ea83c87eb/badges/23799788',
    icon: Award,
    date: '2025',
  },
  {
    title: 'National Showcase Finalist (Vitt)',
    issuer: 'NxtWave x OpenAI Academy x IndiaAI',
    link: 'https://github.com/nikhil49023',
    icon: Trophy,
    date: '2026',
  },
  {
    title: 'FinAgent Hackathon Award',
    issuer: 'Unstop',
    link: 'https://drive.google.com/file/d/1ZE8qmctlFchAgu9nPbzp8FcNYn5u_wgt/view?usp=sharing',
    icon: Trophy,
    date: '2026',
  },
];

const projects = [
  {
    name: 'Vitt (Artha)',
    type: 'Full-Stack Mobile App · Play Store / Indus Ready',
    date: '2026',
    role: 'On-Device AI Mobile Architect',
    tech: 'Flutter · Dart · LiteRT (Gemma 4 E2B) · SQLite AES-256 · Android Notification Listener',
    bullets: [
      'Engineered a 100% private, on-device AI financial tracking mobile application running Gemma 4 E2B via LiteRT (~14 tokens/sec).',
      'Eliminated invasive SMS and contact permissions by extracting transaction alerts locally via Android Notification Listener.',
      'Designed local encrypted SQLite vault (AES-256) ensuring zero telemetry and zero cloud API expenditure.',
      'Fully compliant with India DPDP Act 2023 and SEBI AI Advisory standards; selected for NxtWave x OpenAI Academy x IndiaAI showcase.',
    ],
    accent: 'var(--accent-emerald)',
  },
  {
    name: 'saara-ai',
    type: 'Open-Source CLI & Python/NPM SDK · PyPI & NPM',
    date: '2026',
    role: 'Creator & Maintainer (38 Releases)',
    tech: 'Python · TypeScript · google-adk · crawl4ai · Ollama/vLLM · SFT/DPO Distillation',
    bullets: [
      'Architected an open-source local-first dataset synthesis and distillation engine published globally across 38 package releases.',
      'Generated 2,600+ direct PyPI downloads with active distribution on NPM (`npx saara-ai wizard`) and PyPI (`pip install saara-ai`).',
      'Orchestrated bounded autonomous ResearchAgents combining google-adk and crawl4ai to convert documentation into clean training datasets.',
      'Integrated dynamic local LLM routing (Ollama, vLLM) and a custom TUI curation console, exporting to Parquet, JSONL, and HF formats.',
    ],
    accent: 'var(--brand-secondary)',
  },
  {
    name: 'VAAYU SWARM',
    type: "Edge AI CCTV Platform · Maker's Conclave 2.0",
    date: '2026',
    role: 'Edge ML & Systems Architect',
    tech: 'ESP32-S3 · FOMO v3 (ESP-DL) · RT-DETR-L · YOLOv8-pose · MediaMTX RTSP · FastAPI (CUDA) · React',
    bullets: [
      'Engineered indigenous multi-camera surveillance platform for Indian environments presented at Maker\'s Conclave 2.0.',
      'Partitioned edge-to-server compute: ESP32-S3 (FOMO v3 INT8 at 42.4 FPS) + Server (RT-DETR-L and YOLOv8 17-keypoint pose at 11.8ms).',
      'Integrated MediaMTX RTSP proxy enabling zero-latency CCTV feed ingestion with WebSocket broadcast to React operator console.',
      'Built an Active Learning harvester sampling uncertain frames into Label Studio for automated iterative model distillation.',
    ],
    accent: 'var(--accent-emerald)',
  },
  {
    name: 'AerialEye',
    type: 'Computer Vision Model & Dataset · Hugging Face Hub',
    date: '2026',
    role: 'Edge CV Researcher & Trainer',
    tech: 'YOLOv11-Nano · SAHI Dynamic Slicing · PyTorch · ONNX · INT8 Coral Edge TPU',
    bullets: [
      'Fine-tuned YOLOv11-Nano with SAHI dynamic tile slicing (640x640) for small-object disaster detection from high drone altitudes.',
      'Curated and validated a unified dataset of 6,327 aerial images across 6 classes (human, sos, vehicle, flood, road_damage, crack).',
      'Achieved 89.4% mAP@0.5 validation accuracy with INT8 TFLite quantization for real-time inference on Google Coral Edge TPUs.',
      'Published model cards and pipelines on Hugging Face Hub (kilanisainikhil/AerialEye) with 1,900+ total community downloads.',
    ],
    accent: 'var(--accent-amber)',
  },
  {
    name: 'Project SUTRA',
    type: 'Autonomous Multi-Agent Swarm Monorepo · NDMA Rescue Ops',
    date: '2026',
    role: 'Lead Architect & Systems Engineer',
    tech: 'ROS 2 Jazzy · PX4 Autopilot · Gazebo Sim 8 · Deep JSCC Mesh · React · Mapbox 3D',
    bullets: [
      'Architected a 6-subsystem ROS 2 Jazzy monorepo for space-air-ground multi-agent swarm operations in disaster zones.',
      'Integrated PX4 offboard guidance with Gazebo Sim 8 physics to simulate cooperative V-formation flight and obstacle avoidance.',
      'Developed Deep JSCC neural communication mesh maintaining telemetry integrity under noisy -5 dB SNR RF conditions.',
      'Constructed browser-based 3D GIS Ground Control Station in React and Mapbox streaming real-time drone telemetry and survivor coordinates.',
    ],
    accent: 'var(--accent-cyan, #38bdf8)',
  },
  {
    name: 'Sleep Health Biometrics & Analytics',
    type: 'Data Science & Statistical Modeling · Kaggle Capstone',
    date: '2025',
    role: 'Data Science & Biometrics Researcher',
    tech: 'Python · Pandas · NumPy · Seaborn · Matplotlib · Statistical EDA · Kaggle',
    bullets: [
      'Engineered an exploratory data analysis (EDA) and feature engineering pipeline on multidimensional biometric datasets.',
      'Decomposed compound blood pressure readings into discrete systolic/diastolic components with normalized distributions.',
      'Constructed correlation heatmaps and violin plots modeling links between occupational stress, sleep architecture, and heart rate.',
      'Published reproducible Jupyter/Pandas workflows and analytical reports on Kaggle Hub for public peer review.',
    ],
    accent: 'var(--accent-purple, #a855f7)',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 28 } }
};

export default function ResumePage() {
  const handlePrint = () => {
    if (typeof window !== 'undefined') window.print();
  };

  return (
    <div className="min-h-screen bg-[var(--bg-void)] text-[var(--ink-primary)] font-body relative overflow-x-hidden">
      
      {/* Dynamic Background pattern matching main site */}
      <div className="absolute inset-0 bg-[var(--bg-void)] -z-20" />
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] bg-[linear-gradient(var(--border-subtle)_1px,transparent_1px),linear-gradient(90deg,var(--border-subtle)_1px,transparent_1px)] bg-[size:32px_32px] -z-10 pointer-events-none" />

      {/* Floating glossy light source glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70vw] h-[400px] bg-[radial-gradient(circle_at_top,color-mix(in_oklch,var(--brand-primary)_8%,transparent),transparent_60%)] -z-10 pointer-events-none" />

      {/* Inject print CSS safely */}
      <style dangerouslySetInnerHTML={{ __html: PRINT_CSS }} />

      {/* ── SCREEN VIEW (Premium Executive Digital CV) ── */}
      <main className="no-print pt-20 pb-24 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="py-12 border-b border-[var(--border-subtle)] mb-16"
          >
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-[var(--border-subtle)] bg-[var(--bg-surface)]/80 text-[var(--ink-muted)]">
                  <User size={10} />
                  <span className="font-mono text-[9px] tracking-widest uppercase font-bold">Curriculum Vitae</span>
                </div>
                <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-none text-[var(--ink-primary)] relative">
                  Kilani Sai Nikhil
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--brand-primary)] ml-2.5 shadow-[0_0_10px_var(--brand-primary)]" />
                </h1>
                <p className="text-base md:text-lg font-mono font-medium text-[var(--ink-secondary)]">
                  AI-Augmented Systems &amp; Deep Tech / Edge ML Engineer
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 lg:min-w-[440px] p-5 border border-[var(--border-subtle)] bg-[var(--bg-surface)]/30 backdrop-blur-md relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                {[
                  { icon: Mail, val: 'kilanisainikhil@gmail.com', href: 'mailto:kilanisainikhil@gmail.com' },
                  { icon: MapPin, val: 'Hyderabad, India (IST)', href: null },
                  { icon: Github, val: 'github.com/nikhil49023', href: 'https://github.com/nikhil49023' },
                  { icon: Linkedin, val: 'linkedin.com/in/kilanisainikhil', href: 'https://linkedin.com/in/kilanisainikhil' },
                  { icon: Brain, val: 'huggingface.co/kilanisainikhil', href: 'https://huggingface.co/kilanisainikhil' },
                  { icon: Package, val: 'pypi.org/project/saara-ai', href: 'https://pypi.org/project/saara-ai/' },
                  { icon: Package, val: 'npmjs.com/package/saara-ai', href: 'https://www.npmjs.com/package/saara-ai' },
                ].map(({ icon: Icon, val, href }) => (
                  <div key={val} className="flex items-center gap-2.5 group">
                    <Icon size={12} className="text-[var(--ink-muted)] group-hover:text-[var(--brand-primary)] transition-colors flex-shrink-0" />
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer"
                        className="text-[11px] transition-colors no-underline font-medium text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] hover:underline font-mono">
                        {val}
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono font-medium text-[var(--ink-secondary)]">{val}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Two-Column Grid Layout */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 lg:grid-cols-12 gap-16"
          >
            
            {/* Left Column (Sidebar, 5 cols) */}
            <div className="lg:col-span-5 space-y-12">
              
              {/* Technical Skills Section */}
              <motion.section variants={itemVariants} className="space-y-6">
                <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase font-bold border-b border-[var(--border-subtle)] pb-2 text-[var(--ink-muted)]">
                  Technical Skills &amp; Stack
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { head: 'Languages & Core Systems', val: 'Python 3.11, C++17, SQL, TypeScript, Dart 3.5, Linux Syscalls, POSIX Terminal, Bash' },
                    { head: 'Databases & Local Storage', val: 'PostgreSQL, SQLite (AES-256 Encryption), Redis, Vector MBTiles, 3NF Normalization' },
                    { head: 'Edge ML & Computer Vision', val: 'PyTorch 2.5, YOLOv11-Nano, SAHI Slicing, LiteRT (Gemma 4 E2B), INT8 TFLite, Google Coral TPU' },
                    { head: 'Deep Tech, Mesh & Tools', val: 'Deep JSCC Neural Mesh, Sentinel-1 SAR Radar, ROS 2 (rclpy), Docker Stacks, Firecrawl, MCP' },
                  ].map((row) => (
                    <div 
                      key={row.head} 
                      className="p-4 border border-[var(--border-subtle)] bg-[var(--bg-surface)]/20 backdrop-blur-sm relative overflow-hidden group hover:border-[var(--border-active)] transition-colors duration-300"
                    >
                      <div className="absolute top-0 left-0 w-[2px] h-0 bg-[var(--brand-primary)] group-hover:h-full transition-all duration-300" />
                      <div className="text-[10px] font-mono tracking-wider uppercase font-bold text-[var(--brand-secondary)] group-hover:text-[var(--brand-primary)] transition-colors">
                        {row.head}
                      </div>
                      <p className="text-xs font-semibold leading-relaxed text-[var(--ink-secondary)] mt-2">
                        {row.val}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Education Section */}
              <motion.section variants={itemVariants} className="space-y-6">
                <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase font-bold border-b border-[var(--border-subtle)] pb-2 text-[var(--ink-muted)]">
                  Education &amp; Academic Base
                </h3>
                <div className="p-6 border border-[var(--border-subtle)] bg-[var(--bg-surface)]/30 backdrop-blur-sm relative group hover:border-[var(--border-active)] transition-colors duration-300">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--brand-secondary)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="space-y-2">
                    <h4 className="font-bold text-lg text-[var(--ink-primary)] font-display">NxtWave Institute</h4>
                    <p className="text-sm font-bold text-[var(--brand-primary)]">B.Tech in Computer Science &amp; Engineering</p>
                    <div className="flex items-center justify-between pt-3 border-t border-[var(--border-subtle)]/50 mt-4">
                      <span className="text-[11px] font-mono uppercase font-bold text-[var(--ink-muted)]">Hyderabad, India</span>
                      <span className="text-[11px] font-mono font-bold text-[var(--ink-primary)]">Class of 2029</span>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Verified Credentials Section */}
              <motion.section variants={itemVariants} className="space-y-6">
                <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase font-bold border-b border-[var(--border-subtle)] pb-2 text-[var(--ink-muted)]">
                  Verified Credentials &amp; Honours
                </h3>
                <div className="space-y-3">
                  {certs.map((cert) => {
                    const Icon = cert.icon;
                    return (
                      <div 
                        key={cert.title} 
                        className="group flex items-start justify-between gap-4 p-3.5 border border-[var(--border-subtle)] bg-[var(--bg-surface)]/20 backdrop-blur-sm hover:border-[var(--border-active)] hover:bg-[var(--bg-surface)]/40 transition-all duration-300"
                      >
                        <div className="flex gap-3 items-center">
                          <div className="flex-shrink-0 w-7 h-7 border border-[var(--border-subtle)] bg-[var(--bg-void)] flex items-center justify-center group-hover:border-[var(--brand-primary)] group-hover:text-[var(--brand-primary)] transition-colors duration-300">
                            <Icon size={12} className="text-[var(--ink-muted)] group-hover:text-[var(--brand-primary)] transition-colors" />
                          </div>
                          <div>
                            <div className="text-xs font-bold leading-snug text-[var(--ink-primary)] font-display">{cert.title}</div>
                            <div className="text-[9px] font-mono uppercase tracking-wider text-[var(--ink-muted)]">{cert.issuer} · {cert.date}</div>
                          </div>
                        </div>
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--ink-muted)] hover:text-[var(--brand-primary)] transition-colors p-1"
                          title="Verify Credential"
                        >
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    );
                  })}
                </div>
              </motion.section>

            </div>

            {/* Right Column (Main Content, 7 cols) */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Executive Summary */}
              <motion.section variants={itemVariants} className="space-y-6">
                <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase font-bold border-b border-[var(--border-subtle)] pb-2 text-[var(--ink-muted)]">
                  Executive Summary
                </h3>
                <div className="p-6 border border-[var(--border-subtle)] bg-[var(--bg-surface)]/20 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,color-mix(in_oklch,var(--brand-primary)_5%,transparent),transparent_60%)] pointer-events-none" />
                  <p className="text-sm md:text-base leading-relaxed text-[var(--ink-secondary)] font-normal">
                    AI-Augmented Systems and Deep Tech Engineer combining rigorous native computer science fundamentals (C++, Python, SQL relational design, Linux, Docker, PyTorch) with 10x agentic scaffolding velocity (Model Context Protocol, LiteRT on-device inference, semantic code graphs). Author of <strong className="text-[var(--ink-primary)]">saara-ai</strong> (38 releases, 2,600+ PyPI downloads), architect of <strong className="text-[var(--ink-primary)]">Vitt</strong> (100% on-device Gemma 4 E2B via LiteRT, AES-256 SQLite), trainer of <strong className="text-[var(--ink-primary)]">AerialEye</strong> (1,900+ Hugging Face downloads, 89.4% mAP@0.5 YOLOv11), and author of <strong className="text-[var(--ink-primary)]">Sleep Health Biometrics &amp; Analytics</strong> (Kaggle Data Science Capstone).
                  </p>
                </div>
              </motion.section>

              {/* Technical Projects Section */}
              <motion.section variants={itemVariants} className="space-y-8">
                <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase font-bold border-b border-[var(--border-subtle)] pb-2 text-[var(--ink-muted)]">
                  Engineering Systems &amp; Projects
                </h3>
                <div className="space-y-8">
                  {projects.map((proj) => (
                    <div 
                      key={proj.name} 
                      className="p-6 border border-[var(--border-subtle)] bg-[var(--bg-surface)]/10 backdrop-blur-sm hover:border-[var(--border-active)] hover:bg-[var(--bg-surface)]/20 transition-all duration-300 relative group shadow-sm"
                    >
                      <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b from-transparent via-[var(--brand-primary)] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      
                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                          <div className="flex flex-wrap items-baseline gap-2.5">
                            <h4 className="font-display font-bold text-xl text-[var(--ink-primary)]">{proj.name}</h4>
                            <span className="font-mono text-[9px] uppercase tracking-widest font-bold text-[var(--ink-muted)]">
                              {proj.type.split(' · ')[0]}
                            </span>
                          </div>
                          <span className="font-mono text-[10px] font-bold text-[var(--brand-secondary)]">{proj.date}</span>
                        </div>
                        <div className="text-[10px] font-mono uppercase tracking-widest font-bold text-[var(--ink-secondary)]">
                          {proj.role} &bull; <span className="text-[var(--ink-muted)]">{proj.tech}</span>
                        </div>
                        <ul className="space-y-1.5 list-none p-0 m-0 pt-1">
                          {proj.bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--brand-primary)] flex-shrink-0" />
                              <span className="text-xs leading-relaxed text-[var(--ink-secondary)] group-hover:text-[var(--ink-primary)] transition-colors duration-300">
                                {b}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>

            </div>

          </motion.div>

        </div>
      </main>

      {/* ── PRINT-ONLY ATS VIEW (hidden on screen, visible in print) ── */}
      <div className="print-show hidden print-container">
        <div className="print-name">Kilani Sai Nikhil</div>
        <div className="print-subtitle">AI-Augmented Systems &amp; Deep Tech / Edge ML Engineer</div>
        <div className="print-contact">
          Hyderabad, India &nbsp;|&nbsp; <a href="mailto:kilanisainikhil@gmail.com">kilanisainikhil@gmail.com</a> &nbsp;|&nbsp;
          <a href="https://github.com/nikhil49023">github.com/nikhil49023</a> &nbsp;|&nbsp; <a href="https://linkedin.com/in/kilanisainikhil">linkedin.com/in/kilanisainikhil</a> &nbsp;|&nbsp;
          <a href="https://huggingface.co/kilanisainikhil">huggingface.co/kilanisainikhil</a> &nbsp;|&nbsp; <a href="https://pypi.org/project/saara-ai/">pypi.org/project/saara-ai</a> &nbsp;|&nbsp;
          <a href="https://www.npmjs.com/package/saara-ai">npmjs.com/package/saara-ai</a> &nbsp;|&nbsp;
          <a href="https://www.kaggle.com/code/sainikhilkilani/pandas-sleep-health-data-capstone-project-1">kaggle.com/code/sainikhilkilani</a>
        </div>

        <div className="print-section">Professional Summary</div>
        <div className="print-skills-line">
          AI-Augmented Systems and Deep Tech Engineer combining native computer science fundamentals (C++, Python, SQL relational design, Linux, Docker, PyTorch) with 10x agentic scaffolding velocity (Model Context Protocol, LiteRT on-device inference, semantic code graphs). Author of saara-ai (38 releases, 2,600+ PyPI downloads), architect of Vitt (100% on-device Gemma 4 E2B via LiteRT, AES-256 SQLite), trainer of AerialEye (1,900+ Hugging Face downloads, 89.4% mAP@0.5 YOLOv11), and author of Sleep Health Biometrics &amp; Analytics (Kaggle Data Science Capstone). Certified across Google Cloud Gen AI Master, AMD AI Academy, and DataCamp SQL Professional.
        </div>

        <div className="print-section">Technical Skills</div>
        <div className="print-skills-line"><strong>Languages &amp; Systems:</strong> Python 3.11, C++17, SQL (PostgreSQL, SQLite), TypeScript, Dart 3.5, Linux Syscalls, POSIX, Bash</div>
        <div className="print-skills-line"><strong>Databases &amp; Data Science:</strong> Pandas, NumPy, Seaborn, Matplotlib, PostgreSQL, SQLite (AES-256 Encrypted Vault), B-Tree Indexing, 3NF Normalization</div>
        <div className="print-skills-line"><strong>Edge ML &amp; Computer Vision:</strong> PyTorch 2.5, YOLOv11-Nano, SAHI Slicing, LiteRT (Gemma 4 E2B), INT8 TFLite, Google Coral TPU, Hugging Face Hub</div>
        <div className="print-skills-line"><strong>Developer Tooling &amp; MLOps:</strong> Docker Stacks, Local Firecrawl, Model Context Protocol (MCP), Git, Kaggle Hub, CI/CD Workflows</div>

        <div className="print-section">Technical Projects</div>

        <div className="print-item-head"><span>Vitt (Artha) — 100% Private On-Device AI Financial Assistant</span><span>2026</span></div>
        <div className="print-item-sub">On-Device AI Mobile Architect | Flutter, LiteRT (Gemma 4 E2B), AES-256 SQLite, Notification Listener, DPDP Act 2023</div>
        <ul className="print-bullets">
          <li>Engineered a 100% private, on-device AI financial tracking mobile application running Gemma 4 E2B via LiteRT (~14 tokens/sec).</li>
          <li>Eliminated invasive SMS and contact permissions by extracting transaction alerts locally via Android Notification Listener.</li>
          <li>Designed local encrypted SQLite vault (AES-256) ensuring zero telemetry and zero cloud API expenditure.</li>
          <li>Fully compliant with India DPDP Act 2023 and SEBI AI Advisory standards; selected for NxtWave x OpenAI Academy x IndiaAI showcase.</li>
        </ul>

        <div className="print-item-head"><span>saara-ai — Local-First Dataset Synthesis &amp; Distillation Engine</span><span>2026</span></div>
        <div className="print-item-sub">Creator &amp; Maintainer | Python, TypeScript, google-adk, crawl4ai, Ollama, vLLM, SFT/DPO Distillation (38 Releases)</div>
        <ul className="print-bullets">
          <li>Architected an open-source local-first dataset synthesis and distillation engine published globally across 38 package releases.</li>
          <li>Generated 2,600+ direct PyPI downloads with active distribution on NPM (npx saara-ai wizard) and PyPI (pip install saara-ai).</li>
          <li>Orchestrated bounded autonomous ResearchAgents combining google-adk and crawl4ai to convert documentation into clean training datasets.</li>
          <li>Integrated dynamic local LLM routing (Ollama, vLLM) and a custom TUI curation console, exporting to Parquet, JSONL, and HF formats.</li>
        </ul>

        <div className="print-item-head"><span>VAAYU SWARM — Indigenous Edge AI CCTV Surveillance Platform</span><span>2026</span></div>
        <div className="print-item-sub">Edge ML &amp; Systems Lead | ESP32-S3, FOMO v3 (ESP-DL), RT-DETR-L, YOLOv8-pose, MediaMTX RTSP, FastAPI (CUDA), React</div>
        <ul className="print-bullets">
          <li>Engineered indigenous multi-camera surveillance platform for Indian environments presented at Maker's Conclave 2.0.</li>
          <li>Partitioned edge-to-server compute: ESP32-S3 (FOMO v3 INT8 at 42.4 FPS) + Server (RT-DETR-L and YOLOv8 17-keypoint pose at 11.8ms).</li>
          <li>Integrated MediaMTX RTSP proxy enabling zero-latency CCTV feed ingestion with WebSocket broadcast to React operator console.</li>
          <li>Built an Active Learning harvester sampling uncertain frames into Label Studio for automated iterative model distillation.</li>
        </ul>

        <div className="print-item-head"><span>AerialEye — YOLOv11-Nano Aerial &amp; Disaster Response CV Model</span><span>2026</span></div>
        <div className="print-item-sub">Edge CV Researcher &amp; Trainer | YOLOv11-Nano, SAHI Dynamic Slicing, PyTorch, ONNX, INT8 Google Coral Edge TPU</div>
        <ul className="print-bullets">
          <li>Fine-tuned YOLOv11-Nano with SAHI dynamic tile slicing (640x640) for small-object disaster detection from high drone altitudes.</li>
          <li>Curated and validated a unified dataset of 6,327 aerial images across 6 classes (human, sos, vehicle, flood, road_damage, crack).</li>
          <li>Achieved 89.4% mAP@0.5 validation accuracy with INT8 TFLite quantization for real-time inference on Google Coral Edge TPUs.</li>
          <li>Published model cards and pipelines on Hugging Face Hub (kilanisainikhil/AerialEye) with 1,900+ total community downloads.</li>
        </ul>

        <div className="print-item-head"><span>Project SUTRA — Autonomous Multi-Agent Swarm Monorepo</span><span>2026</span></div>
        <div className="print-item-sub">Lead Architect &amp; Systems Engineer | ROS 2 Jazzy, PX4 Autopilot, Gazebo Sim 8, Deep JSCC Mesh, React Mapbox 3D</div>
        <ul className="print-bullets">
          <li>Architected a 6-subsystem ROS 2 Jazzy monorepo for space-air-ground multi-agent swarm operations in disaster zones.</li>
          <li>Integrated PX4 offboard guidance with Gazebo Sim 8 physics to simulate cooperative V-formation flight and obstacle avoidance.</li>
          <li>Developed Deep JSCC neural communication mesh maintaining telemetry integrity under noisy -5 dB SNR RF conditions.</li>
          <li>Constructed browser-based 3D GIS Ground Control Station in React and Mapbox streaming real-time drone telemetry and survivor coordinates.</li>
        </ul>

        <div className="print-item-head"><span>Sleep Health Biometrics &amp; Analytics — Statistical EDA &amp; Modeling</span><span>2025</span></div>
        <div className="print-item-sub">Data Science &amp; Biometrics Researcher | Python, Pandas, NumPy, Seaborn, Matplotlib, Kaggle</div>
        <ul className="print-bullets">
          <li>Engineered an exploratory data analysis (EDA) and feature engineering pipeline on multidimensional clinical lifestyle datasets.</li>
          <li>Decomposed compound blood pressure readings into discrete systolic/diastolic components with normalized distributions.</li>
          <li>Constructed correlation heatmaps and violin plots modeling links between occupational stress, sleep architecture, and heart rate.</li>
          <li>Published reproducible Jupyter/Pandas workflows and analytical reports on Kaggle Hub for public peer review.</li>
        </ul>

        <div className="print-section">Verified Credentials &amp; Honours</div>
        <div className="print-cert-row"><strong>Google Cloud Gen AI Master Certificate</strong> — Google Cloud Skills Boost (Jul 2026) · <a href="https://www.skills.google/public_profiles/44a41e60-6e04-4a73-abbf-963ea83c87eb">skills.google/public_profiles/44a41e60-6e04-4a73-abbf-963ea83c87eb</a></div>
        <div className="print-cert-row"><strong>Build &amp; Deploy Agents in Production</strong> — Google Cloud Skills Boost · <a href="https://www.skills.google/public_profiles/44a41e60-6e04-4a73-abbf-963ea83c87eb/badges/23799611">skills.google/public_profiles/44a41e60-6e04-4a73-abbf-963ea83c87eb/badges/23799611</a></div>
        <div className="print-cert-row"><strong>Agents 101 Certification</strong> — AMD AI Academy · <a href="https://academy.amd.com/certs/31042/D5539744A4B347368F37FF267ED373CD166281.pdf">academy.amd.com/certs/31042/D5539744A4B347368F37FF267ED373CD166281.pdf</a></div>
        <div className="print-cert-row"><strong>Intermediate SQL &amp; Introduction to SQL</strong> — DataCamp · <a href="https://www.datacamp.com/completed/statement-of-accomplishment/course/ee43fbec5c8180e4a47a8aaa8eba801ebc59519f">datacamp.com/statement-of-accomplishment/ee43fbec5c8180e4a47a8aaa8eba801ebc59519f</a></div>
        <div className="print-cert-row"><strong>National Showcase Finalist (Vitt)</strong> — NxtWave x OpenAI Academy x IndiaAI Buildathon (2026)</div>
        <div className="print-cert-row"><strong>FinAgent Hackathon Award</strong> — Unstop (2026) · <a href="https://drive.google.com/file/d/1ZE8qmctlFchAgu9nPbzp8FcNYn5u_wgt/view?usp=sharing">drive.google.com/file/d/1ZE8qmctlFchAgu9nPbzp8FcNYn5u_wgt</a></div>

        <div className="print-section">Education</div>
        <div className="print-item-head"><span>NxtWave Institute</span><span>Class of 2029</span></div>
        <div className="print-item-sub">B.Tech in Computer Science &amp; Engineering | Hyderabad, India</div>
      </div>

    </div>
  );
}

