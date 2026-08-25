'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Printer, ExternalLink, Mail, MapPin,
  Github, Linkedin, Package, Award, CheckCircle2, Shield, BookOpen,
  GraduationCap, Code, Globe, User, Brain, Cpu, Zap, Activity
} from 'lucide-react';

/* ── ATS Document Style (Open Design: Neutral Modern) ── */
const PRINT_CSS = `
@media print {
  .no-print { display: none !important; }
  body, html {
    background: #ffffff !important;
    color: #000000 !important;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
    font-size: 10.2pt !important;
    margin: 0 !important; padding: 0 !important;
    line-height: 1.25 !important;
  }
  .doc-container {
    width: 100% !important;
    margin: 0 !important;
    padding: 0.4in 0.6in !important;
    border: none !important;
    box-shadow: none !important;
    display: block !important;
    opacity: 1 !important;
    visibility: visible !important;
  }
  section { page-break-inside: avoid !important; margin-bottom: 12pt !important; }
  .project-item { page-break-inside: avoid !important; margin-bottom: 10pt !important; }
  h1 { font-size: 22pt !important; font-weight: 800 !important; text-align: left !important; margin-bottom: 2pt !important; color: #000 !important; }
  h2 { font-size: 10.5pt !important; font-weight: 800 !important; border-bottom: 1.5pt solid #000 !important; margin-top: 10pt !important; margin-bottom: 5pt !important; text-transform: uppercase !important; letter-spacing: 0.05em !important; color: #000 !important; }
  h3 { font-size: 11pt !important; font-weight: 700 !important; margin-top: 6pt !important; margin-bottom: 1pt !important; color: #000 !important; }
  .contact-line { font-size: 9pt !important; text-align: left !important; margin-bottom: 10pt !important; color: #111 !important; font-weight: 600 !important; }
  .item-header { display: flex !important; justify-content: space-between !important; font-weight: 700 !important; font-size: 10.2pt !important; color: #000 !important; }
  .item-sub { font-size: 9pt !important; font-style: italic !important; color: #222 !important; margin-bottom: 2pt !important; font-weight: 600 !important; }
  .bullets { margin: 1pt 0 6pt 14pt !important; padding: 0 !important; list-style-type: disc !important; }
  .bullets li { margin-bottom: 1.5pt !important; color: #000 !important; font-weight: 500 !important; }
  .tech-line { font-size: 8.5pt !important; font-weight: 700 !important; color: #333 !important; margin-bottom: 3pt !important; text-transform: uppercase !important; }
  @page { size: letter; margin: 0; }
}
`;

const agenticProjects = [
  {
    name: 'saara-ai',
    subtitle: 'Autonomous Dataset Generation & Distillation Engine',
    date: 'Jun 2026',
    tech: 'Python · TypeScript · google-adk · crawl4ai · Ollama/vLLM',
    bullets: [
      'Architected an autonomous dataset pipeline using multi-agent ResearchAgents (google-adk) for automated topic discovery and deep-scraping.',
      'Developed a tool-use layer for crawl4ai, allowing agents to navigate complex SPAs and extract structured ground-truth data from the web.',
      'Implemented local model routing with vLLM and Ollama, supporting seamless distillation from DeepSeek-V3 to Llama-3.1-8B via RAG-assisted labeling.',
      'Optimized synthetic data generation costs by 80% through asynchronous batch processing and local TUI-based human-in-the-loop curation.',
    ],
  },
  {
    name: 'Sleep Health Analytics',
    subtitle: 'Statistical Biometric Feature Modeling & Analysis',
    date: '2025',
    tech: 'Python · Pandas · NumPy · Seaborn · Matplotlib · Kaggle',
    bullets: [
      'Engineered an automated data extraction and feature engineering pipeline on multidimensional biometric datasets.',
      'Decomposed compound blood pressure metrics and handled missing clinical distributions using vectorized Pandas operations.',
      'Constructed correlation matrices and statistical distribution plots to expose relationships between stress and sleep architecture.',
      'Published reproducible Jupyter/Pandas workflows on Kaggle Hub for public validation and statistical review.',
    ],
  },
  {
    name: 'Vitt',
    subtitle: 'On-Device Edge AI Agent for Privacy-First Finance',
    date: 'Jun 2026',
    tech: 'Flutter · Android AICore · Gemma 4 E2B · SQLite · RAG',
    bullets: [
      'Deployed an on-device agent using Android AICore to run Gemma 4 E2B locally, enabling secure, offline transaction reasoning.',
      'Implemented a local RAG system within SQLite to provide the agent with temporal context for expense predictions and budget planning.',
      'Built an autonomous Notification Listener Service that parses raw transaction data locally, replacing cloud-based SMS scraping.',
      'Engineered privacy-preserving agentic workflows compliant with DPDP Act 2023, ensuring zero data egress for financial analysis.',
    ],
  },
  {
    name: 'AerialEye',
    subtitle: 'Spatial Perception Node for Multi-Agent Systems',
    date: 'Mar 2026',
    tech: 'YOLOv11 · SAHI · PyTorch · ONNX · TFLite (INT8)',
    bullets: [
      'Fine-tuned a YOLOv11-Nano vision model as a "Perception Agent" for autonomous drone swarms in disaster-response scenarios.',
      'Integrated SAHI (Slicing Aided Hyper Inference) to enable high-precision detection of small objects from high-altitude aerial feeds.',
      'Optimized the vision pipeline for INT8 TFLite deployment on edge hardware (Google Coral TPU), achieving <30ms inference latency.',
      'Published a specialized dataset of 6,327 aerial disaster samples on Hugging Face Hub to train secondary reasoning agents.',
    ],
  },
];

export default function AgenticResumePage() {
  const handlePrint = () => {
    if (typeof window !== 'undefined') window.print();
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] py-10 font-sans text-black">
      <style dangerouslySetInnerHTML={{ __html: PRINT_CSS }} />

      {/* ── DOCUMENT VIEW (Open Design: Neutral Modern) ── */}
      <main className="doc-container mx-auto bg-white shadow-[0_0_50px_rgba(0,0,0,0.1)] max-w-[850px] p-[0.5in] md:p-[0.7in] mt-12 mb-20">
        
        {/* Header Block */}
        <header className="mb-6 border-l-4 border-black pl-6">
          <h1 className="text-4xl font-black tracking-tight uppercase leading-none mb-2">Kilani Sai Nikhil</h1>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-bold text-gray-800">
            <span>Hyderabad, India</span>
            <span>&bull;</span>
            <a href="mailto:kilanisainikhil@gmail.com" className="no-underline text-black border-b-2 border-black/10">kilanisainikhil@gmail.com</a>
            <span>&bull;</span>
            <a href="https://github.com/nikhil49023" className="no-underline text-black border-b-2 border-black/10">github.com/nikhil49023</a>
            <span>&bull;</span>
            <a href="https://linkedin.com/in/kilanisainikhil" className="no-underline text-black border-b-2 border-black/10">linkedin.com/in/kilanisainikhil</a>
          </div>
        </header>

        {/* Executive Summary */}
        <section className="mb-8">
          <h2 className="text-xs font-black border-b-2 border-black pb-1 mb-3 uppercase tracking-[0.2em]">AI Systems & Agentic Orchestration</h2>
          <p className="text-[14.5px] leading-relaxed font-medium text-gray-900">
            AI Systems Engineer specializing in **Autonomous Multi-Agent Frameworks** and **Edge LLM Infrastructure**. Expert in building local-first RAG pipelines, optimizing token efficiency for on-device reasoning, and deploying privacy-preserving SLMs. Author of specialized agentic tooling including `saara-ai` and `Super Orchestrator`.
          </p>
        </section>

        {/* Technical Grid */}
        <section className="mb-8">
          <h2 className="text-xs font-black border-b-2 border-black pb-1 mb-3 uppercase tracking-[0.2em]">Core Technical Stack</h2>
          <div className="grid grid-cols-2 gap-x-10 gap-y-3">
            <div>
              <div className="text-[9px] font-black uppercase text-gray-500 mb-0.5 tracking-widest">Agentic Frameworks</div>
              <div className="text-[12.5px] font-bold leading-snug text-gray-900">Multi-Agent Systems (MAS), Tool-Use, Autonomous Planning, google-adk, crawl4ai, Firecrawl.</div>
            </div>
            <div>
              <div className="text-[9px] font-black uppercase text-gray-500 mb-0.5 tracking-widest">Local LLMs & Inference</div>
              <div className="text-[12.5px] font-bold leading-snug text-gray-900">Ollama, vLLM, Android AICore (Gemma), INT8 Quantization, ONNX, TFLite Edge.</div>
            </div>
            <div>
              <div className="text-[9px] font-black uppercase text-gray-500 mb-0.5 tracking-widest">Data & Intelligence</div>
              <div className="text-[12.5px] font-bold leading-snug text-gray-900">Synthetic Data Generation, Local RAG (SQLite), Vector Embeddings, Dataset Distillation.</div>
            </div>
            <div>
              <div className="text-[9px] font-black uppercase text-gray-500 mb-0.5 tracking-widest">Systems Engineering</div>
              <div className="text-[12.5px] font-bold leading-snug text-gray-900">Python (FastAPI), TypeScript, SQL, Docker, Vertex AI, Linux, CI/CD.</div>
            </div>
          </div>
        </section>

        {/* Experience / Projects */}
        <section className="mb-8">
          <h2 className="text-xs font-black border-b-2 border-black pb-1 mb-4 uppercase tracking-[0.2em]">Key Agentic Implementations</h2>
          <div className="space-y-6">
            {agenticProjects.map((proj) => (
              <div key={proj.name} className="project-item relative">
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="text-base font-black tracking-tight">{proj.name} &ndash; <span className="text-indigo-600">{proj.subtitle}</span></h3>
                  <span className="text-xs font-black text-gray-900">{proj.date}</span>
                </div>
                <div className="text-[9px] font-black uppercase text-gray-500 mb-2 tracking-widest">{proj.tech}</div>
                <ul className="list-disc pl-5 space-y-1">
                  {proj.bullets.map((b, i) => (
                    <li key={i} className="text-[13.5px] leading-snug font-medium text-gray-800">{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Credentials & Education */}
        <div className="grid grid-cols-2 gap-x-12">
          <section>
            <h2 className="text-xs font-black border-b-2 border-black pb-1 mb-3 uppercase tracking-[0.2em]">AI Credentials</h2>
            <ul className="space-y-1.5">
              <li className="text-sm font-bold text-gray-900">
                <span className="font-black">FinAgent Hackathon Winner</span> &bull; Unstop
              </li>
              <li className="text-sm font-bold text-gray-900">
                <span className="font-black">Agents 101 Certification</span> &bull; AMD AI
              </li>
              <li className="text-sm font-bold text-gray-900">
                <span className="font-black">Production AI Agent Deployment</span> &bull; Google
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-xs font-black border-b-2 border-black pb-1 mb-3 uppercase tracking-[0.2em]">Education</h2>
            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-black text-gray-900">NxtWave Institute</h3>
                <span className="text-xs font-black text-gray-900">2029</span>
              </div>
              <div className="text-sm text-gray-700 italic font-bold">B.Tech in CS & Engineering</div>
              <div className="text-[9px] font-black uppercase text-gray-400 tracking-widest">Hyderabad, India</div>
            </div>
          </section>
        </div>

      </main>

      <footer className="text-center no-print pb-20">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">
          Agentic AI Hackathon Ready &bull; 2026
        </p>
      </footer>
    </div>
  );
}


