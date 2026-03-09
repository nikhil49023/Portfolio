import { Smartphone, Brain, Github, Globe, Database, type LucideIcon } from 'lucide-react';

export type ArchNode = {
  label: string;
  sublabel?: string;
  color: string;
};

export type ArchLayer = {
  title: string;
  nodes: ArchNode[];
};

export type ProjectLink = {
  label: string;
  href: string;
  icon: LucideIcon;
  primary?: boolean;
};

export type Project = {
  slug: string;
  name: string;
  date: string;
  tagline: string;
  shortDesc: string;
  details: string[];
  highlights: string[];
  tags: string[];
  media: 'images' | 'terminal';
  images?: string[];
  accent: string;
  accentDark: string;
  icon: LucideIcon;
  category: string;
  links: ProjectLink[];
  architecture: ArchLayer[];
  techDetails: { name: string; desc: string; icon: string }[];
};

export const PROJECTS: Project[] = [
  {
    slug: 'wealthin',
    name: 'WealthIn',
    date: 'Feb 2026',
    tagline: 'AI Financial OS for Indian MSMEs',
    shortDesc:
      'Agentic Flutter & FastAPI ecosystem that automates institutional-grade Detailed Project Reports for MSMEs using a hybrid LLM strategy.',
    details: [
      'WealthIn is a full-stack AI-powered financial platform built to solve one of the most critical bottlenecks for Indian MSMEs — access to institutional credit. Banks and NBFCs require a Detailed Project Report (DPR) for most loan applications, a document that typically takes weeks and significant cost to prepare manually.',
      'The platform automates this entirely. A Flutter mobile app guides business owners through a structured intake form, collects financial data, and submits it to a FastAPI backend that orchestrates multiple specialized AI agents. A hybrid LLM router dispatches tasks to Groq (for high-speed inference) or GPT-4o (for complex financial reasoning), dynamically balancing cost and quality.',
      'The most innovative component is the RAG-based creditworthiness scoring engine powered by Sarvam AI, which processes documents and data in regional Indian languages — Hindi, Tamil, Marathi, Telugu, Kannada — making formal credit tools genuinely accessible to first-generation entrepreneurs in tier-2 and tier-3 cities.',
      'The generated DPR is a structured, bank-ready document covering project overview, market analysis, financial projections, risk assessment, and regulatory compliance — indistinguishable in quality from a consultancy-prepared report.',
    ],
    highlights: [
      'Automated DPR generation — from intake form to bank-ready document in under 30 minutes',
      'Hybrid LLM strategy routing between Groq (speed) and GPT-4o (reasoning) for cost optimization',
      'RAG-based Indic language creditworthiness scoring supporting 6+ regional languages',
      'Multi-agent orchestration covering financial modelling, risk assessment, and compliance checks',
      'Flutter mobile app with real-time document preview, section-by-section editing, and PDF export',
      'FastAPI backend with async Celery task queue enabling concurrent multi-user report generation',
    ],
    tags: ['Flutter', 'Dart', 'FastAPI', 'Python', 'Groq', 'GPT-4o', 'RAG', 'Sarvam AI', 'LangChain', 'Celery', 'Redis', 'PostgreSQL'],
    media: 'images',
    images: Array.from({ length: 16 }, (_, i) => `https://raw.githubusercontent.com/nikhil49023/Portfolio/main/public/wealthin/wealthin-${i + 1}.jpeg`),
    accent: '#4f46e5',
    accentDark: '#3730a3',
    icon: Smartphone,
    category: 'Mobile · Fintech · AI',
    links: [
      {
        label: 'GitHub Release',
        href: 'https://github.com/nikhil49023/Wealthin_release/releases/tag/v2.4.0',
        icon: Github,
        primary: true,
      },
    ],
    architecture: [
      {
        title: 'Frontend',
        nodes: [
          { label: 'Flutter App', sublabel: 'iOS & Android', color: '#4f46e5' },
          { label: 'Intake Forms', sublabel: 'Business data', color: '#6366f1' },
          { label: 'DPR Preview', sublabel: 'Real-time PDF', color: '#818cf8' },
        ],
      },
      {
        title: 'API & Orchestration',
        nodes: [
          { label: 'FastAPI', sublabel: 'REST + WebSocket', color: '#0891b2' },
          { label: 'Celery + Redis', sublabel: 'Async task queue', color: '#0e7490' },
          { label: 'LLM Router', sublabel: 'Cost optimizer', color: '#155e75' },
        ],
      },
      {
        title: 'AI Agents',
        nodes: [
          { label: 'Groq (LLaMA)', sublabel: 'Fast inference', color: '#059669' },
          { label: 'GPT-4o', sublabel: 'Complex reasoning', color: '#16a34a' },
          { label: 'Sarvam AI RAG', sublabel: 'Indic languages', color: '#15803d' },
        ],
      },
      {
        title: 'Output',
        nodes: [
          { label: 'DPR Generator', sublabel: 'Structured docs', color: '#b45309' },
          { label: 'PDF Export', sublabel: 'Bank-ready', color: '#d97706' },
          { label: 'Credit Score', sublabel: 'Risk assessment', color: '#f59e0b' },
        ],
      },
    ],
    techDetails: [
      { name: 'Flutter', desc: 'Cross-platform mobile UI with real-time state management and PDF preview', icon: '📱' },
      { name: 'FastAPI', desc: 'Async Python backend with WebSocket support for live document generation updates', icon: '⚡' },
      { name: 'LangChain', desc: 'Agent orchestration framework connecting LLMs, tools, and memory', icon: '🔗' },
      { name: 'Groq', desc: 'Ultra-low latency LLaMA inference for rapid data extraction tasks', icon: '🚀' },
      { name: 'GPT-4o', desc: 'Deep financial reasoning for projections, risk modelling, and compliance', icon: '🧠' },
      { name: 'Sarvam AI', desc: 'Regional language processing for Indic creditworthiness document analysis', icon: '🇮🇳' },
      { name: 'Celery + Redis', desc: 'Distributed task queue enabling parallel report generation for multiple users', icon: '⚙️' },
      { name: 'PostgreSQL', desc: 'Persistent storage for user sessions, report history, and financial data', icon: '🗄️' },
    ],
  },
  {
    slug: 'saara',
    name: 'SAARA',
    date: 'Dec 2025',
    tagline: 'Agentic ML Data Engine',
    shortDesc:
      'End-to-end pipeline converting raw PDFs into fine-tuned, deployed LLMs — zero manual labeling, fully autonomous.',
    details: [
      'SAARA (Self-Annotating Agentic RAG Architecture) is a PyPI-published Python library that solves the most expensive bottleneck in supervised fine-tuning: data labeling. It converts any collection of raw PDFs into a production-deployed language model with zero human annotation.',
      'The pipeline begins with a Vision-LLM agent that treats each PDF page as an image, performing layout-aware OCR that preserves document structure — headings, tables, figures, captions. This produces semantically rich text blocks that are far superior to naive text extraction.',
      'A Labeler agent then automatically constructs instruction-response pairs from these blocks, generating thousands of high-quality training examples tailored to the document domain. The crucial innovation is the Judge+Teacher self-improvement loop: a judge model scores every generated sample for relevance, coherence, and faithfulness, while a teacher model rewrites rejected samples and resubmits them for evaluation — iterating until quality thresholds are met.',
      'The fine-tuning stage uses QLoRA (Quantized Low-Rank Adaptation), making it viable on consumer hardware like an RTX 3050 (8GB VRAM). The trained adapter exports to both Ollama format for local serving and HuggingFace Hub for cloud deployment — a complete path from raw document to production model.',
    ],
    highlights: [
      'Zero-annotation pipeline: raw PDF corpus → production LLM, fully autonomous',
      'Vision-LLM OCR agent with structural layout understanding (tables, headings, figures)',
      'Judge+Teacher self-improvement loop achieving 94%+ training sample quality',
      'QLoRA fine-tuning runnable on consumer GPUs (RTX 3050, 8GB VRAM)',
      'Dual export: Ollama for local inference, HuggingFace Hub for cloud deployment',
      'Published on PyPI — pip install saara-ai',
    ],
    tags: ['Python', 'PyPI', 'Vision-LLM', 'QLoRA', 'LoRA', 'Ollama', 'HuggingFace', 'LangChain', 'transformers', 'PEFT', 'bitsandbytes'],
    media: 'terminal',
    accent: '#0891b2',
    accentDark: '#0e7490',
    icon: Brain,
    category: 'ML · Python · Open Source',
    links: [
      { label: 'Live Site', href: 'https://saara.onslate.in/', icon: Globe, primary: true },
      { label: 'PyPI', href: 'https://pypi.org/project/saara-ai/', icon: Database },
    ],
    architecture: [
      {
        title: 'Ingestion',
        nodes: [
          { label: 'PDF Corpus', sublabel: 'Any domain', color: '#0891b2' },
          { label: 'Vision Agent', sublabel: 'Layout-aware OCR', color: '#0e7490' },
          { label: 'Text Blocks', sublabel: '847+ per doc', color: '#155e75' },
        ],
      },
      {
        title: 'Data Generation',
        nodes: [
          { label: 'Labeler Agent', sublabel: 'Instruction pairs', color: '#7c3aed' },
          { label: 'Judge Model', sublabel: 'Quality scoring', color: '#6d28d9' },
          { label: 'Teacher Model', sublabel: 'Rewrite loop', color: '#5b21b6' },
        ],
      },
      {
        title: 'Fine-tuning',
        nodes: [
          { label: 'QLoRA Trainer', sublabel: 'Consumer GPU', color: '#be185d' },
          { label: 'PEFT Adapter', sublabel: '4-bit quant', color: '#9d174d' },
          { label: 'Eval Loop', sublabel: 'Benchmarks', color: '#831843' },
        ],
      },
      {
        title: 'Deployment',
        nodes: [
          { label: 'Ollama Export', sublabel: 'Local inference', color: '#b45309' },
          { label: 'HuggingFace', sublabel: 'Cloud hosting', color: '#d97706' },
          { label: 'PyPI Package', sublabel: 'pip install', color: '#f59e0b' },
        ],
      },
    ],
    techDetails: [
      { name: 'Vision-LLM', desc: 'Layout-aware OCR treating PDF pages as images for structure-preserving extraction', icon: '👁️' },
      { name: 'LangChain Agents', desc: 'Multi-agent orchestration for Labeler, Judge, and Teacher roles', icon: '🔗' },
      { name: 'QLoRA', desc: '4-bit quantized Low-Rank Adaptation enabling fine-tuning on 8GB VRAM GPUs', icon: '⚡' },
      { name: 'PEFT', desc: 'HuggingFace Parameter-Efficient Fine-Tuning library for LoRA adapter training', icon: '🛠️' },
      { name: 'bitsandbytes', desc: '8-bit and 4-bit quantization for memory-efficient model loading', icon: '🔢' },
      { name: 'Ollama', desc: 'Local model serving with GGUF format export for privacy-first deployment', icon: '🖥️' },
      { name: 'HuggingFace Hub', desc: 'Cloud model hosting and sharing via the Transformers ecosystem', icon: '🤗' },
      { name: 'PyPI', desc: 'Public Python package enabling one-line installation: pip install saara-ai', icon: '📦' },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
