import { Smartphone, Code2, Github, Globe, Database, type LucideIcon } from 'lucide-react';

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
    tagline: 'Financial OS for Indian MSMEs',
    shortDesc:
      'Production Flutter & FastAPI ecosystem that automates institutional-grade Detailed Project Reports for MSMEs with a modular system architecture.',
    details: [
      'WealthIn is a full-stack financial platform built to solve one of the most critical bottlenecks for Indian MSMEs — access to institutional credit. Banks and NBFCs require a Detailed Project Report (DPR) for most loan applications, a document that typically takes weeks and significant cost to prepare manually.',
      'The platform automates this entirely. A Flutter mobile app guides business owners through a structured intake form, collects financial data, and submits it to a FastAPI backend that orchestrates the document generation process. The system ensures high performance and reliability across the full stack.',
      'The most innovative component is the automated creditworthiness scoring engine, which processes documents and data in regional Indian languages — Hindi, Tamil, Marathi, Telugu, Kannada — making formal credit tools genuinely accessible to first-generation entrepreneurs in tier-2 and tier-3 cities.',
      'The generated DPR is a structured, bank-ready document covering project overview, market analysis, financial projections, risk assessment, and regulatory compliance — ensuring a professional output for every user.',
    ],
    highlights: [
      'Automated DPR generation — from intake form to bank-ready document in under 30 minutes',
      'High-performance Flutter mobile app with real-time document preview and section editing',
      'Asynchronous FastAPI backend with Celery task queue for concurrent multi-user report generation',
      'Regional language support for 6+ Indic languages across document processing and UI',
      'Robust data layer using PostgreSQL for persistence and Redis for state management',
      'Modular architecture enabling rapid scaling and integration of new financial modules',
    ],
    tags: ['Flutter', 'Dart', 'FastAPI', 'Python', 'SQLite', 'PostgreSQL', 'Celery', 'Redis', 'Docker'],
    media: 'images',
    images: Array.from({ length: 16 }, (_, i) => `https://raw.githubusercontent.com/nikhil49023/Portfolio/main/public/wealthin/wealthin-${i + 1}.jpeg`),
    accent: '#0284c7',
    accentDark: '#075985',
    icon: Smartphone,
    category: 'Mobile · Fintech · Software',
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
          { label: 'Flutter App', sublabel: 'iOS & Android', color: '#0284c7' },
          { label: 'Intake Forms', sublabel: 'Business data', color: '#0ea5e9' },
          { label: 'DPR Preview', sublabel: 'Real-time PDF', color: '#38bdf8' },
        ],
      },
      {
        title: 'API & Orchestration',
        nodes: [
          { label: 'FastAPI', sublabel: 'REST + WebSocket', color: '#0891b2' },
          { label: 'Celery + Redis', sublabel: 'Async task queue', color: '#0e7490' },
          { label: 'System Router', sublabel: 'Task optimizer', color: '#155e75' },
        ],
      },
      {
        title: 'Data & Processing',
        nodes: [
          { label: 'PostgreSQL', sublabel: 'Primary storage', color: '#14b8a6' },
          { label: 'Redis Cache', sublabel: 'Session mgmt', color: '#2dd4bf' },
          { label: 'Indic Processor', sublabel: 'Regional lang', color: '#5eead4' },
        ],
      },
      {
        title: 'Output',
        nodes: [
          { label: 'DPR Generator', sublabel: 'Structured docs', color: '#f59e0b' },
          { label: 'PDF Export', sublabel: 'Bank-ready', color: '#fbbf24' },
          { label: 'Credit Score', sublabel: 'Risk assessment', color: '#fcd34d' },
        ],
      },
    ],
    techDetails: [
      { name: 'Flutter', desc: 'Cross-platform mobile UI with real-time state management and PDF preview', icon: '📱' },
      { name: 'FastAPI', desc: 'Async Python backend with WebSocket support for live document generation updates', icon: '⚡' },
      { name: 'PostgreSQL', desc: 'Persistent storage for user sessions, report history, and financial data', icon: '🗄️' },
      { name: 'Celery + Redis', desc: 'Distributed task queue enabling parallel report generation for multiple users', icon: '⚙️' },
      { name: 'Python', desc: 'Core business logic and complex financial modeling modules', icon: '🐍' },
      { name: 'SQLite', desc: 'Local persistence for offline-first mobile app experience', icon: '💾' },
      { name: 'Docker', desc: 'Containerized deployment ensuring consistency across environments', icon: '🐳' },
    ],
  },
  {
    slug: 'saara',
    name: 'SAARA',
    date: 'Dec 2025',
    tagline: 'Automated ML Dataset Engine',
    shortDesc:
      'End-to-end pipeline converting raw PDFs into structured, ML-ready datasets — published as a production-ready Python library.',
    details: [
      'SAARA (Self-Annotating Automated Reporting Architecture) is a PyPI-published Python library that solves one of the most expensive bottlenecks in data engineering: structured dataset generation. It converts any collection of raw PDFs into structured datasets with zero manual intervention.',
      'The pipeline begins with a layout-aware parsing engine that treats each PDF page as an image to perform structural extraction — headings, tables, figures, captions. This produces semantically rich text blocks that are far superior to naive text extraction.',
      'A processing engine then automatically constructs structured data pairs from these blocks, generating thousands of high-quality examples tailored to the document domain. The crucial innovation is the multi-stage validation loop: the system scores every generated sample for relevance and coherence, iterating until quality thresholds are met.',
      'The engine is optimized for performance, making it viable on standard consumer hardware. The library supports export to multiple formats and is designed for easy integration into existing enterprise data workflows — a complete path from raw document to structured data.',
    ],
    highlights: [
      'Zero-manual-effort pipeline: raw PDF corpus → structured dataset, fully autonomous',
      'Layout-aware parsing with structural understanding (tables, headings, figures)',
      'Multi-stage validation loop achieving 94%+ data sample quality',
      'Optimized for performance, runnable on standard consumer hardware',
      'Multiple export formats: JSON, CSV, and HuggingFace Hub integration',
      'Published on PyPI — pip install saara-ai',
    ],
    tags: ['Python', 'PyPI', 'CLI', 'Automation', 'Data Engineering', 'Hugging Face', 'Dataset Curation'],
    media: 'terminal',
    accent: '#0d9488',
    accentDark: '#115e59',
    icon: Code2,
    category: 'AI Data · Python · Open Source',
    links: [
      { label: 'Live Site', href: 'https://saara.onslate.in/', icon: Globe, primary: true },
      { label: 'PyPI', href: 'https://pypi.org/project/saara-ai/', icon: Database },
    ],
    architecture: [
      {
        title: 'Ingestion',
        nodes: [
          { label: 'PDF Corpus', sublabel: 'Any domain', color: '#14b8a6' },
          { label: 'Parsing Engine', sublabel: 'Layout-aware', color: '#2dd4bf' },
          { label: 'Text Blocks', sublabel: 'Structural extraction', color: '#5eead4' },
        ],
      },
      {
        title: 'Processing',
        nodes: [
          { label: 'Data Engine', sublabel: 'Structured pairs', color: '#0d9488' },
          { label: 'Validation Loop', sublabel: 'Quality scoring', color: '#0f766e' },
          { label: 'Formatting', sublabel: 'Output preparation', color: '#115e59' },
        ],
      },
      {
        title: 'Integration',
        nodes: [
          { label: 'CLI Tool', sublabel: 'Command line', color: '#f59e0b' },
          { label: 'API Access', sublabel: 'Library integration', color: '#fbbf24' },
          { label: 'Export Layer', sublabel: 'Multi-format', color: '#fcd34d' },
        ],
      },
      {
        title: 'Distribution',
        nodes: [
          { label: 'PyPI Package', sublabel: 'pip install', color: '#d97706' },
          { label: 'HuggingFace', sublabel: 'Data hosting', color: '#b45309' },
          { label: 'GitHub', sublabel: 'Open source', color: '#92400e' },
        ],
      },
    ],
    techDetails: [
      { name: 'Python', desc: 'Core library development with extensive standard library and third-party integrations', icon: '🐍' },
      { name: 'PyPI', desc: 'Public Python package enabling one-line installation: pip install saara-ai', icon: '📦' },
      { name: 'CLI Development', desc: 'Robust command-line interface for seamless automation and workflow integration', icon: '💻' },
      { name: 'Data Engineering', desc: 'Complex multi-stage data pipelines for structural extraction and validation', icon: '⚙️' },
      { name: 'Unit Testing', desc: 'Extensive test suite ensuring library stability and reliability across versions', icon: '🧪' },
      { name: 'Documentation', desc: 'Comprehensive API documentation and usage guides for the developer community', icon: '📖' },
      { name: 'GitHub Actions', desc: 'CI/CD pipelines for automated testing and package publishing', icon: '🚀' },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
