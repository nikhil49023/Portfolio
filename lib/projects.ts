import React from 'react';
import { 
  Package, Github, Layers, Eye, ExternalLink, Cpu, Terminal, Database, Shield, Zap, BookOpen, GitBranch, Box, Globe, Radio, Compass, Activity
} from 'lucide-react';

export interface ProjectNode {
  label: string;
  color: string;
  sublabel?: string;
}

export interface ProjectArchitecture {
  title: string;
  nodes: ProjectNode[];
}

export interface ProjectTechDetail {
  name: string;
  desc: string;
  icon: React.ComponentType<any>;
}

export interface ProjectCommitLog {
  hash: string;
  message: string;
  date: string;
  tag?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  icon: React.ComponentType<any>;
  primary?: boolean;
}

export interface ProjectData {
  slug: string;
  name: string;
  icon: React.ComponentType<any>;
  tagline: string;
  type: string;
  category: string;
  status: string;
  badge?: string;
  date: string;
  accent: string;
  accentDark: string;
  description: string;
  shortDesc: string;
  longDescription: string;
  stack: string[];
  highlights: string[];
  details: string[];
  architecture: ProjectArchitecture[];
  techDetails: ProjectTechDetail[];
  commits: ProjectCommitLog[];
  tags: string[];
  links: ProjectLink[];
  media?: 'images' | 'terminal' | 'custom';
  images?: string[];
  stats?: { label: string; value: string }[];
}

export const PROJECTS: Record<string, ProjectData> = {
  'vitt': {
    slug: 'vitt',
    name: 'Vitt (Artha)',
    icon: Layers,
    media: 'images',
    images: [
      '/projects/vitt/hero-phone.png',
      '/projects/vitt/bento-inspected.png',
      '/projects/vitt/local_verification.png',
      '/projects/vitt/feature-ai.png',
      '/projects/vitt/feature-vault.png',
      '/projects/vitt/feature-cashflow.png',
      '/projects/vitt/feature-security.png',
      '/projects/vitt/feature-budgets.png',
      '/projects/vitt/feature-upi.png',
    ],
    tagline: '100% Private, On-Device AI Financial Assistant',
    type: 'Full-Stack Mobile App',
    category: 'On-Device AI & Mobile',
    status: 'Ready for Play Store Release',
    badge: 'Play Store Ready',
    date: '2026',
    accent: '#00d68f',
    accentDark: '#005f3f',
    description:
      'Vitt is a 100% private, on-device AI financial tracking application built for Indian MSMEs and individual privacy. It runs local small language models (Gemma 4 E2B via LiteRT / AICore) and processes financial alerts on-device with zero cloud dependencies and zero SMS permissions.',
    shortDesc: '100% private on-device AI financial assistant for MSMEs running Gemma 4 E2B via LiteRT with zero SMS permissions.',
    longDescription: `
Vitt (rebranded from WealthIn / Artha) is an end-to-end local-first financial intelligence mobile application built in Flutter and Dart, engineered for release on the Google Play Store and Indus Appstore.

Unlike traditional financial management apps that harvest SMS messages or upload unencrypted bank records to third-party cloud APIs, Vitt operates on a strict zero-cloud, zero-intrusive-permissions architecture. It captures transaction notifications using Android's native Notification Listener API after explicit user consent through an interactive LegalDisclosureDialog.

Transaction parsing and financial summarization are performed locally on the smartphone via LiteRT running quantized Gemma 4 E2B models (~14 tokens/sec on modern Android hardware). All ledgers and financial histories are persisted locally in AES-256 encrypted SQLite databases.

The application is fully compliant with India's Digital Personal Data Protection (DPDP) Act 2023 and adheres to SEBI AI Advisory guidelines with explicit inline disclaimer mechanisms.
    `.trim(),
    stack: ['Flutter', 'Dart', 'LiteRT (Gemma 4 E2B)', 'SQLite (AES-256)', 'Android Notification Listener', 'DPDP Act 2023'],
    highlights: [
      'On-device local LLM inference via LiteRT (Gemma 4 E2B) at ~14 tokens/sec with zero cloud bills',
      'Zero SMS or contact permissions: scrapes banking alerts locally via Android Notification Listener',
      'AES-256 encrypted local SQLite database for 100% private offline ledger storage',
      'Full compliance with India DPDP Act 2023 and SEBI AI Advisory standards',
    ],
    details: [
      'Replaces insecure SMS scraping with native Android Notification Listener Service.',
      'Executes quantized Gemma 4 E2B directly on-device with zero recurrent API token costs.',
      'Stores encrypted ledger entries and automated category analytics in an offline SQLite database.',
      'Includes verified legal documentation: DPDP Act 2023 disclosures, Privacy Policy, Terms of Service, and SEBI compliance disclaimers.'
    ],
    stats: [
      { label: 'Inference Speed', value: '~14 tok/sec' },
      { label: 'Privacy Stance', value: '100% Local / 0 Cloud' },
      { label: 'Cloud Costs', value: '₹0 / Month' },
      { label: 'Encryption', value: 'AES-256 Local Vault' },
    ],
    architecture: [
      {
        title: 'Android Ingestion Boundary',
        nodes: [
          { label: 'Android Notification Listener', color: '#00d68f', sublabel: 'Local event capture' },
          { label: 'Interactive Legal Disclosure', color: '#3b82f6', sublabel: 'DPDP 2023 consent gate' }
        ]
      },
      {
        title: 'On-Device Reasoning Engine',
        nodes: [
          { label: 'LiteRT Inference Engine', color: '#a855f7', sublabel: 'Hardware-accelerated NPU' },
          { label: 'Gemma 4 E2B Local Model', color: '#ffb700', sublabel: 'On-device transaction parsing' }
        ]
      },
      {
        title: 'Encrypted Storage & UI',
        nodes: [
          { label: 'AES-256 Encrypted SQLite', color: '#ff2d55', sublabel: 'Zero-cloud offline ledger' },
          { label: 'SEBI Advisory Compliance UI', color: '#00d68f', sublabel: 'Real-time disclaimer guard' }
        ]
      }
    ],
    techDetails: [
      {
        name: 'Notification Scraper',
        desc: 'Native Android service parsing banking notifications locally into structured transaction payloads with zero cloud transmission.',
        icon: Layers
      },
      {
        name: 'LiteRT Gemma 4 E2B',
        desc: 'Quantized local model inference engine running on-device with zero latency, zero recurring API cost, and high token efficiency.',
        icon: Cpu
      },
      {
        name: 'Encrypted SQLite Vault',
        desc: 'Hardware-backed encrypted relational database storing transactional histories and ledger analytics with strict offline boundary.',
        icon: Database
      },
      {
        name: 'DPDP & SEBI Compliance',
        desc: 'Integrated regulatory consent flows, explicit data erasure mechanisms, and advisory disclaimers meeting national standards.',
        icon: Shield
      }
    ],
    commits: [
      { hash: 'e78b2a1', message: 'feat(compliance): add DPDP Act 2023 legal disclosures & consent dialog', date: 'Aug 2026', tag: 'v1.2.0-indus' },
      { hash: '4a1f902', message: 'feat(inference): integrate LiteRT Gemma 4 E2B on-device parsing engine', date: 'Aug 2026' },
      { hash: '2d890cf', message: 'feat(vault): add AES-256 encrypted SQLite offline ledger storage', date: 'Jul 2026' },
      { hash: '1b44c10', message: 'feat(service): implement native Android Notification Listener scraper', date: 'Jun 2026' }
    ],
    tags: ['On-Device AI', 'Flutter', 'LiteRT', 'Gemma LLM', 'FinTech', 'Privacy-First', 'SQLite'],
    links: [
      { label: 'Landing Page & Docs', href: 'https://github.com/nikhil49023/vitt-landing-page', icon: Globe, primary: true },
      { label: 'Privacy Policy Repo', href: 'https://github.com/nikhil49023/vitt-privacy', icon: Shield },
      { label: 'Legal Policies Repo', href: 'https://github.com/nikhil49023/vitt-legal', icon: Github }
    ]
  },

  'saara-ai': {
    slug: 'saara-ai',
    name: 'saara-ai',
    icon: Terminal,
    media: 'terminal',
    tagline: 'Local-First Dataset Generation & Distillation Engine',
    type: 'Developer CLI & Python Package',
    category: 'Autonomous Systems & Agents',
    status: 'Published on PyPI & NPM (v2.0)',
    badge: '38 Releases · 2.6k+ DL',
    date: '2026',
    accent: '#ff2d55',
    accentDark: '#80001a',
    description:
      'saara-ai is a local-first dataset generation and distillation engine published on PyPI and NPM. It utilizes bounded ResearchAgents (google-adk + crawl4ai) to scrape and synthesize high-quality fine-tuning datasets from documentation and open web sources, with local model routing (Ollama/vLLM) and interactive TUI curation.',
    shortDesc: 'Local-first dataset generation CLI on PyPI & NPM with 2,600+ downloads, 38 releases, and multi-agent web scraping.',
    longDescription: `
saara-ai is an open-source, dual-distributed developer tool designed to eliminate high cloud costs and API rate-limits associated with synthetic dataset creation for LLM fine-tuning.

Published as a native Python package on PyPI (2,600+ downloads across 38 stable releases) and as an NPX CLI binary on NPM (\`npx saara-ai wizard\`), saara-ai orchestrates bounded ResearchAgents leveraging google-adk and crawl4ai to autonomously discover, parse, and clean structured data from technical documentation and web applications.

The engine routes prompts through local LLM backends (Ollama and vLLM), supporting distillation from large reasoning models down to compact edge models (Llama 3.2, Qwen 2.5). An interactive terminal curation console allows real-time review, score filtering, and direct export to Hugging Face, Parquet, and JSONL formats.
    `.trim(),
    stack: ['Python', 'TypeScript', 'google-adk', 'crawl4ai', 'Ollama', 'vLLM', 'PyPI', 'NPM'],
    highlights: [
      'Dual published on PyPI and NPM with 2,600+ downloads and 38 stable releases',
      'Interactive terminal CLI wizard (`npx saara-ai wizard`) for zero-configuration dataset synthesis',
      'Autonomous web exploration using google-adk agents and crawl4ai headless browser integration',
      'Local model routing through Ollama and vLLM, eliminating external LLM API costs',
    ],
    details: [
      'Engineered multi-agent ResearchAgent orchestration for recursive topic exploration and deep-scraping.',
      'Built a headless browser tool-use layer via crawl4ai to extract structured ground-truth data from SPAs.',
      'Supports local distillation pipelines with automated confidence scoring and human-in-the-loop TUI inspection.',
      'Exports clean dataset partitions directly to Hugging Face Hub, Apache Parquet, and JSONL.'
    ],
    stats: [
      { label: 'PyPI Downloads', value: '2,600+' },
      { label: 'Published Releases', value: '38 Stable' },
      { label: 'Distribution', value: 'PyPI + NPM' },
      { label: 'Local Routing', value: 'Ollama & vLLM' },
    ],
    architecture: [
      {
        title: 'Research & Ingestion Agent',
        nodes: [
          { label: 'google-adk ResearchAgent', color: '#ff2d55', sublabel: 'Recursive topic exploration' },
          { label: 'crawl4ai Browser Tool', color: '#00d68f', sublabel: 'Structured DOM extraction' }
        ]
      },
      {
        title: 'Local Distillation Matrix',
        nodes: [
          { label: 'vLLM & Ollama Engine', color: '#3b82f6', sublabel: 'Local prompt-response dispatch' },
          { label: 'TUI Human-in-the-Loop', color: '#a855f7', sublabel: 'Real-time confidence scoring' }
        ]
      },
      {
        title: 'Export & Publishing Pipeline',
        nodes: [
          { label: 'Hugging Face Hub Exporter', color: '#ffb700', sublabel: 'Direct dataset upload' },
          { label: 'Multi-Format Exporter', color: '#ff2d55', sublabel: 'HF / Parquet / JSONL output' }
        ]
      }
    ],
    techDetails: [
      {
        name: 'ResearchAgent Engine',
        desc: 'Autonomous orchestrator leveraging google-adk to crawl technical documentation and extract validated training samples.',
        icon: Layers
      },
      {
        name: 'Local LLM Routing',
        desc: 'High-throughput prompt dispatch matrix interfacing directly with locally hosted vLLM and Ollama inference endpoints.',
        icon: Cpu
      },
      {
        name: 'TUI Curation Console',
        desc: 'Keyboard-driven interactive terminal interface for real-time inspection, filtering, and annotation of generated dataset samples.',
        icon: Terminal
      },
      {
        name: 'Dual Package Registry',
        desc: 'Packaged and maintained as a native Python package on PyPI and an NPX CLI binary on NPM with automated CI/CD.',
        icon: Box
      }
    ],
    commits: [
      { hash: '9b21a8f', message: 'release: v2.0.0 — dual publish on PyPI & NPM with 38 verified releases', date: 'Jun 2026', tag: 'v2.0.0' },
      { hash: '7e30d12', message: 'feat(agents): add bounded google-adk ResearchAgents with crawl4ai tool use', date: 'Jun 2026' },
      { hash: '5a8b411', message: 'feat(router): implement dynamic local vLLM & Ollama inference dispatch', date: 'May 2026' },
      { hash: '3c990ef', message: 'feat(tui): interactive terminal curation console with Parquet/HF export', date: 'May 2026' }
    ],
    tags: ['Python', 'Dataset Synthesis', 'LLM Distillation', 'PyPI', 'NPM', 'Ollama', 'vLLM', 'google-adk'],
    links: [
      { label: 'PyPI Package', href: 'https://pypi.org/project/saara-ai/', icon: Box, primary: true },
      { label: 'NPM Package', href: 'https://www.npmjs.com/package/saara-ai', icon: Package },
      { label: 'GitHub Repository', href: 'https://github.com/nikhil49023/Saara', icon: Github }
    ]
  },

  'aerialeye': {
    slug: 'aerialeye',
    name: 'AerialEye',
    icon: Eye,
    media: 'custom',
    tagline: 'YOLOv11-Nano Disaster Response & Aerial CV Model',
    type: 'Computer Vision Model & Dataset',
    category: 'Edge AI & Computer Vision',
    status: 'Published on Hugging Face',
    badge: '1,900+ HF Downloads',
    date: '2026',
    accent: '#ffb700',
    accentDark: '#7a5400',
    description:
      'AerialEye is a fine-tuned YOLOv11-Nano object detection model integrated with Slicing Aided Hyper Inference (SAHI) for high-altitude drone surveillance and disaster response. Trained on 6,327 aerial images and quantized to INT8 TFLite for deployment on Google Coral Edge TPUs.',
    shortDesc: 'YOLOv11-Nano aerial object detection model with SAHI slicing, 89.4% mAP@0.5, and INT8 Coral TPU quantization.',
    longDescription: `
Standard computer vision models trained on horizontal ground datasets perform poorly on aerial drone perspectives due to extreme perspective distortion, dense object clustering, and sub-30px target scales. AerialEye was engineered specifically to solve high-altitude disaster detection.

Upgraded to YOLOv11-Nano for optimized feature extraction, the model integrates SAHI (Slicing Aided Hyper Inference) to dynamically tile high-resolution aerial frames into 640x640 overlapping patches during inference, preserving critical pixel density for distant survivors and structural damage.

The model is trained on a unified, curated dataset of 6,327 high-altitude frames across 6 critical disaster classes: human, sos, vehicle, flood, road_damage, and crack. It achieves 89.4% mAP@0.5 and is exported to PyTorch (.pt), ONNX, and INT8 quantized TFLite for accelerated inference on low-power Google Coral Edge TPUs. Published openly on Hugging Face Hub.
    `.trim(),
    stack: ['YOLOv11', 'SAHI Slicing', 'PyTorch', 'ONNX', 'TFLite (INT8)', 'Google Coral Edge TPU', 'Hugging Face'],
    highlights: [
      'Published on Hugging Face Hub with 1,900+ downloads across weights and dataset',
      'Curated unified dataset of 6,327 high-altitude aerial and disaster-response images',
      '89.4% mAP@0.5 validation accuracy across 6 critical disaster classes',
      'INT8 TFLite weight quantization tailored for low-power Google Coral Edge TPU hardware',
    ],
    details: [
      'Integrates SAHI dynamic tiling to inspect high-resolution aerial drone feeds in real time without downscaling artifacts.',
      'Trained with rotation, mosaic, and perspective augmentations to ensure orientation-invariant aerial object recognition.',
      'Quantized to INT8 precision, enabling 45+ FPS inference speeds on edge-deployed micro-TPUs and embedded drone companion computers.',
      'Public model card and dataset repository hosted under kilanisainikhil/AerialEye on Hugging Face.'
    ],
    stats: [
      { label: 'HF Downloads', value: '1,900+' },
      { label: 'Validation mAP@0.5', value: '89.4%' },
      { label: 'Dataset Size', value: '6,327 Images' },
      { label: 'Target Hardware', value: 'Google Coral TPU' },
    ],
    architecture: [
      {
        title: 'Aerial Ingestion Layer',
        nodes: [
          { label: 'High-Res Drone Stream', color: '#ffb700', sublabel: '6,327 image training corpus' },
          { label: 'SAHI Slicing Engine', color: '#ff2d55', sublabel: 'Dynamic 640x640 tile slicing' }
        ]
      },
      {
        title: 'Neural Backbone',
        nodes: [
          { label: 'YOLOv11-Nano Backbone', color: '#00d68f', sublabel: 'Feature pyramid extraction' },
          { label: '6-Class Disaster Head', color: '#3b82f6', sublabel: 'Human, SOS, Flood, Damage' }
        ]
      },
      {
        title: 'Edge Deployment',
        nodes: [
          { label: 'INT8 TFLite Quantizer', color: '#6366f1', sublabel: 'Google Coral TPU acceleration' },
          { label: 'Hugging Face Hub Registry', color: '#ffb700', sublabel: 'kilanisainikhil/AerialEye' }
        ]
      }
    ],
    techDetails: [
      {
        name: '6 Disaster Classes',
        desc: 'Detects human, SOS markers, vehicles, flood zones, road breaches, and structural cracks in real-time.',
        icon: Eye
      },
      {
        name: 'SAHI Inference Slicing',
        desc: 'Tiled sliding-window inference preserves fine pixel details for tiny objects viewed from high drone altitudes.',
        icon: Layers
      },
      {
        name: 'INT8 Quantization',
        desc: 'Post-training INT8 quantization compressing model weights to run on low-power Google Coral Edge TPU hardware.',
        icon: Cpu
      },
      {
        name: 'Hugging Face Hub',
        desc: 'Open-access distribution of weights, ONNX pipelines, and training datasets for disaster relief researchers.',
        icon: Globe
      }
    ],
    commits: [
      { hash: '8d1209a', message: 'release: YOLOv11-Nano weights with SAHI dynamic 640x640 tile slicing', date: 'Mar 2026', tag: 'v1.1-hf' },
      { hash: '6c44b91', message: 'feat(dataset): curate unified 6,327 aerial disaster response corpus', date: 'Mar 2026' },
      { hash: '4b11f30', message: 'feat(quant): INT8 post-training quantization for Google Coral Edge TPU', date: 'Feb 2026' },
      { hash: '2a99e41', message: 'eval: achieve 89.4% mAP@0.5 validation baseline across 6 disaster classes', date: 'Feb 2026' }
    ],
    tags: ['Computer Vision', 'YOLOv11', 'PyTorch', 'ONNX', 'TFLite', 'Google Coral TPU', 'Hugging Face', 'Disaster Relief'],
    links: [
      { label: 'Hugging Face Hub', href: 'https://huggingface.co/kilanisainikhil/AerialEye', icon: Eye, primary: true },
      { label: 'Dataset on Hugging Face', href: 'https://huggingface.co/datasets/kilanisainikhil/sutra-aerial-dataset', icon: Database },
      { label: 'GitHub Repository', href: 'https://github.com/nikhil49023/AerialEye', icon: Github }
    ]
  },

  'sleep-health-analytics': {
    slug: 'sleep-health-analytics',
    name: 'Sleep Health Biometrics & Analytics',
    icon: Database,
    media: 'terminal',
    tagline: 'Statistical Biometric Modeling & Lifestyle Sleep Health Analysis',
    type: 'Data Science & Statistical Analysis',
    category: 'Data Science & Analytics',
    status: 'Published on Kaggle',
    badge: 'Kaggle Capstone',
    date: '2025',
    accent: '#38bdf8',
    accentDark: '#0369a1',
    description:
      'A comprehensive exploratory data analysis and statistical biometric capstone analyzing the interplay between lifestyle factors, sleep architecture, stress levels, and cardiovascular health. Built with Pandas, NumPy, and Seaborn on Kaggle.',
    shortDesc: 'Statistical biometric EDA and sleep health analysis modeling correlations between stress, sleep quality, and cardiovascular indicators.',
    longDescription: `
Sleep disorders and chronic fatigue are strongly tied to lifestyle factors, occupational stress, and physiological biometrics. This Capstone Project conducts an in-depth exploratory data analysis (EDA) on multidimensional biometric datasets.

Leveraging Python, Pandas, NumPy, Matplotlib, and Seaborn, the analysis cleanses raw clinical records, decomposes blood pressure readings into discrete systolic/diastolic components, and computes normalized statistical distributions across diverse occupational cohorts.

The project models the correlation between physical activity levels, daily step counts, sleep duration, and heart rate metrics, providing actionable statistical insights into sleep apnea and insomnia risk factors. Published as an open, reproducible notebook on Kaggle Hub.
    `.trim(),
    stack: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib', 'Kaggle', 'Statistical EDA'],
    highlights: [
      'Comprehensive biometric data pipeline cleaning, feature engineering, and blood pressure decomposition',
      'Statistical correlation analysis identifying key lifestyle drivers behind sleep quality and stress levels',
      'Cohort segmentation across occupational stress brackets, BMI categories, and cardiovascular metrics',
      'Published open notebook on Kaggle Hub demonstrating reproducible data science methodologies',
    ],
    details: [
      'Engineers feature pipelines splitting compound metrics (e.g. Systolic/Diastolic BP) and handling categorical encodings.',
      'Generates correlation heatmaps and violin distribution plots to expose relationships between stress indices and sleep duration.',
      'Analyzes sleep disorder prevalence (None vs. Sleep Apnea vs. Insomnia) across daily physical activity thresholds.',
      'Published live as a public interactive notebook on Kaggle Hub for data science peer review.'
    ],
    stats: [
      { label: 'Platform', value: 'Kaggle Notebook' },
      { label: 'Core Libraries', value: 'Pandas & NumPy' },
      { label: 'Focus Area', value: 'Biometrics & EDA' },
      { label: 'Visualizations', value: 'Seaborn & Matplotlib' },
    ],
    architecture: [
      {
        title: 'Ingestion & Data Cleaning',
        nodes: [
          { label: 'Raw Clinical Dataset', color: '#38bdf8', sublabel: 'Multidimensional records' },
          { label: 'Pandas Cleaning Pipeline', color: '#ffb700', sublabel: 'Missing value handling' }
        ]
      },
      {
        title: 'Feature Engineering',
        nodes: [
          { label: 'Blood Pressure Split', color: '#00d68f', sublabel: 'Systolic / Diastolic values' },
          { label: 'Stress & BMI Cohorts', color: '#ff2d55', sublabel: 'Stratified lifestyle brackets' }
        ]
      },
      {
        title: 'Statistical Modeling & EDA',
        nodes: [
          { label: 'Correlation Heatmaps', color: '#a855f7', sublabel: 'Seaborn statistical plots' },
          { label: 'Kaggle Hub Distribution', color: '#38bdf8', sublabel: 'Public reproducible notebook' }
        ]
      }
    ],
    techDetails: [
      {
        name: 'Pandas & NumPy Pipelines',
        desc: 'Vectorized data transformations, missing value imputation, and groupby cohort aggregations across biometric indicators.',
        icon: Database
      },
      {
        name: 'Seaborn Statistical Plots',
        desc: 'Multi-variable correlation matrices, pair plots, and distribution visualizers exposing hidden lifestyle patterns.',
        icon: Layers
      },
      {
        name: 'Biometric Feature Engineering',
        desc: 'Derived indicators for cardiovascular stress and sleep efficiency scores derived from raw clinical telemetry.',
        icon: Cpu
      },
      {
        name: 'Kaggle Notebook Publishing',
        desc: 'Fully documented narrative markdown with reproducible execution cells shared openly with the data community.',
        icon: Globe
      }
    ],
    commits: [
      { hash: '1f88e90', message: 'feat(eda): publish reproducible Pandas & NumPy sleep health capstone', date: '2025', tag: 'kaggle-v1' },
      { hash: '3d44a21', message: 'feat(pipeline): decompose compound blood pressure into systolic/diastolic vectors', date: '2025' },
      { hash: '5c22b10', message: 'feat(viz): generate multi-variable Seaborn correlation heatmaps & violin plots', date: '2025' }
    ],
    tags: ['Data Science', 'Python', 'Pandas', 'NumPy', 'Seaborn', 'EDA', 'Kaggle', 'Biometrics'],
    links: [
      { label: 'Kaggle Notebook', href: 'https://www.kaggle.com/code/sainikhilkilani/pandas-sleep-health-data-capstone-project-1', icon: ExternalLink, primary: true },
      { label: 'GitHub Profile', href: 'https://github.com/nikhil49023', icon: Github }
    ]
  }
};
