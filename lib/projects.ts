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
  icon: React.ReactNode;
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
      'Eliminates intrusive SMS permissions entirely by utilizing Android\'s isolated Notification Listener Service to extract real-time transaction amounts and merchant metadata.',
      'Schedules Gemma 4 E2B inference on Android NPU/GPU via LiteRT runtime, reducing battery consumption by 60% compared to standard cloud-polling wrappers.',
      'Stores user income, expense categories, and monthly summaries inside an AES-256 encrypted SQLite database that never transmits telemetry to external servers.',
      'Selected for national project showcase at NxtWave x OpenAI Academy x IndiaAI Buildathon 2026.'
    ],
    stats: [
      { label: 'Privacy Stance', value: '100% On-Device' },
      { label: 'Inference Speed', value: '~14 tok/sec' },
      { label: 'Cloud Costs', value: '$0 / month' },
      { label: 'Encryption', value: 'AES-256 SQLite' },
    ],
    architecture: [
      {
        title: 'Ingestion Layer',
        nodes: [
          { label: 'Android Notification Listener', color: '#00d68f', sublabel: 'Local bank alert scraper' },
          { label: 'Consent & DPDP Gatekeeper', color: '#ffb700', sublabel: 'LegalDisclosureDialog' }
        ]
      },
      {
        title: 'On-Device AI Engine',
        nodes: [
          { label: 'LiteRT / Android AICore', color: '#3b82f6', sublabel: 'Gemma 4 E2B local model' },
          { label: 'NPU Hardware Acceleration', color: '#6366f1', sublabel: 'Battery-optimized compute' }
        ]
      },
      {
        title: 'Secure Local Storage',
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
        icon: React.createElement(Layers, { size: 24 })
      },
      {
        name: 'LiteRT Gemma 4 E2B',
        desc: 'Quantized local model inference engine running on-device with zero latency, zero recurring API cost, and high token efficiency.',
        icon: React.createElement(Cpu, { size: 24 })
      },
      {
        name: 'Encrypted SQLite Vault',
        desc: 'Hardware-backed encrypted relational database storing transactional histories and ledger analytics with strict offline boundary.',
        icon: React.createElement(Database, { size: 24 })
      },
      {
        name: 'DPDP & SEBI Compliance',
        desc: 'Integrated regulatory consent flows, explicit data erasure mechanisms, and advisory disclaimers meeting national standards.',
        icon: React.createElement(Shield, { size: 24 })
      }
    ],
    tags: ['On-Device AI', 'Flutter', 'LiteRT', 'Gemma LLM', 'FinTech', 'Privacy-First', 'SQLite'],
    links: [
      { label: 'GitHub Repository', href: 'https://github.com/nikhil49023', icon: Github, primary: true }
    ]
  },

  'saara-ai': {
    slug: 'saara-ai',
    name: 'saara-ai',
    icon: Package,
    media: 'terminal',
    tagline: 'Local-First CLI & SDK Dataset Synthesis Engine',
    type: 'Open-Source CLI & Python/NPM SDK',
    category: 'Open-Source & Developer Tooling',
    status: 'Published · 38 Releases',
    badge: '2,600+ PyPI Downloads',
    date: '2026',
    accent: '#ff2d55',
    accentDark: '#8a0024',
    description:
      'saara-ai is a local-first CLI and SDK designed for high-fidelity dataset generation, automated labeling, validation, and distillation (SFT / DPO). It integrates with google-adk and crawl4ai to coordinate autonomous ResearchAgents that build machine learning datasets on local hardware.',
    shortDesc: 'Open-source CLI & SDK for automated dataset synthesis, curation, and distillation published on PyPI and NPM.',
    longDescription: `
Building high-fidelity datasets for LLM fine-tuning, reasoning tasks, and supervised fine-tuning (SFT) is notoriously bottlenecked by manual scraping and expensive proprietary API calls. saara-ai solves this through an autonomous, local-first dataset pipeline.

By combining google-adk with crawl4ai, saara-ai orchestrates bounded ResearchAgent bots that crawl web documentation and synthesize structured training datasets locally. Generation tasks are dynamically routed to local LLM engines (Ollama, vLLM), eliminating API subscription overhead.

Developers can inspect and curate generated records via an interactive terminal user interface (TUI), apply confidence-based validation scoring, and export clean datasets to Parquet, JSONL, Arrow, and Hugging Face Dataset formats. Published globally across 38 package releases on PyPI and NPM.
    `.trim(),
    stack: ['Python', 'TypeScript', 'google-adk', 'crawl4ai', 'Ollama', 'vLLM', 'DPO / SFT Distillation', 'TUI'],
    highlights: [
      'Published on PyPI across 38 releases with 2,600+ direct package downloads',
      'Distributed globally on NPM (`npx saara-ai wizard`) and PyPI (`pip install saara-ai`)',
      'Autonomous ResearchAgents combining google-adk and crawl4ai for structured dataset generation',
      'Local model routing via Ollama and vLLM supporting SFT, DPO, and reasoning formats',
    ],
    details: [
      'Orchestrates multi-step web scraping workflows with crawl4ai, converting raw HTML into LLM-ready markdown for topic extraction.',
      'Routes high-throughput prompt batches across local Ollama and vLLM instances to minimize latency and token expenditure.',
      'Features a custom Terminal User Interface (TUI) for manual review, record editing, and confidence scoring of synthetic data.',
      'Exports production-ready datasets directly to Hugging Face Hub, Apache Parquet, and JSONL formats.'
    ],
    stats: [
      { label: 'PyPI Downloads', value: '2,600+' },
      { label: 'Package Releases', value: '38 Versions' },
      { label: 'Registries', value: 'PyPI & NPM' },
      { label: 'Local Engines', value: 'Ollama & vLLM' },
    ],
    architecture: [
      {
        title: 'Discovery & Scraping Layer',
        nodes: [
          { label: 'Bounded ResearchAgent', color: '#ff2d55', sublabel: 'google-adk orchestration' },
          { label: 'crawl4ai Web Scraper', color: '#ffb700', sublabel: 'High-speed markdown extraction' }
        ]
      },
      {
        title: 'Local Synthesis & Curation',
        nodes: [
          { label: 'Local Model Router', color: '#00d68f', sublabel: 'Ollama & vLLM engine' },
          { label: 'Interactive Curation TUI', color: '#3b82f6', sublabel: 'Terminal validation suite' }
        ]
      },
      {
        title: 'Distillation & Export',
        nodes: [
          { label: 'SFT / DPO Distillation', color: '#6366f1', sublabel: 'Preference pair alignment' },
          { label: 'Multi-Format Exporter', color: '#ff2d55', sublabel: 'HF / Parquet / JSONL output' }
        ]
      }
    ],
    techDetails: [
      {
        name: 'ResearchAgent Engine',
        desc: 'Autonomous orchestrator leveraging google-adk to crawl technical documentation and extract validated training samples.',
        icon: React.createElement(Layers, { size: 24 })
      },
      {
        name: 'Local LLM Routing',
        desc: 'High-throughput prompt dispatch matrix interfacing directly with locally hosted vLLM and Ollama inference endpoints.',
        icon: React.createElement(Cpu, { size: 24 })
      },
      {
        name: 'TUI Curation Console',
        desc: 'Keyboard-driven interactive terminal interface for real-time inspection, filtering, and annotation of generated dataset samples.',
        icon: React.createElement(Terminal, { size: 24 })
      },
      {
        name: 'Dual Package Registry',
        desc: 'Packaged and maintained as a native Python package on PyPI and an NPX CLI binary on NPM with automated CI/CD.',
        icon: React.createElement(Box, { size: 24 })
      }
    ],
    tags: ['Python', 'Dataset Synthesis', 'LLM Distillation', 'PyPI', 'NPM', 'Ollama', 'vLLM', 'google-adk'],
    links: [
      { label: 'PyPI Package', href: 'https://pypi.org/project/saara-ai/', icon: Box, primary: true },
      { label: 'NPM Package', href: 'https://www.npmjs.com/package/saara-ai', icon: Package },
      { label: 'GitHub Repository', href: 'https://github.com/nikhil49023', icon: Github }
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
        icon: React.createElement(Eye, { size: 24 })
      },
      {
        name: 'SAHI Inference Slicing',
        desc: 'Tiled sliding-window inference preserves fine pixel details for tiny objects viewed from high drone altitudes.',
        icon: React.createElement(Layers, { size: 24 })
      },
      {
        name: 'INT8 Quantization',
        desc: 'Post-training INT8 quantization compressing model weights to run on low-power Google Coral Edge TPU hardware.',
        icon: React.createElement(Cpu, { size: 24 })
      },
      {
        name: 'Hugging Face Hub',
        desc: 'Open-access distribution of weights, ONNX pipelines, and training datasets for disaster relief researchers.',
        icon: React.createElement(Globe, { size: 24 })
      }
    ],
    tags: ['Computer Vision', 'YOLOv11', 'PyTorch', 'ONNX', 'TFLite', 'Google Coral TPU', 'Hugging Face', 'Disaster Relief'],
    links: [
      { label: 'Hugging Face Hub', href: 'https://huggingface.co/kilanisainikhil/AerialEye', icon: Eye, primary: true },
      { label: 'GitHub Repository', href: 'https://github.com/nikhil49023', icon: Github }
    ]
  },

  'prithvi-lifeline': {
    slug: 'prithvi-lifeline',
    name: 'PRITHVI-LIFELINE',
    icon: Radio,
    media: 'images',
    images: [
      '/projects/prithvi/intro_page-1.png',
      '/projects/prithvi/proposal_page-1.png',
      '/projects/prithvi/proposal_page-2.png',
      '/projects/prithvi/sleek_page-1.png',
      '/projects/prithvi/sleek_page-2.png',
      '/projects/prithvi/earthy_page-1.png',
      '/projects/prithvi/rich_page-1.png',
    ],
    tagline: 'Space-Ground Disaster Mesh & Deep JSCC Neural Wireless Network',
    type: 'Space-Ground Deep Tech Architecture',
    category: 'Deep Tech & Wireless Mesh',
    status: 'iQOO Hackathon 2026 Proposal',
    badge: 'iQOO Hackathon 2026',
    date: '2026',
    accent: '#38bdf8',
    accentDark: '#0369a1',
    description:
      'PRITHVI-LIFELINE is a sovereign Space-Air-Ground disaster communication companion engineered for 72-hour energy survival during catastrophic power grid collapse. Combines pre-cached Sentinel-1 SAR orbital radar flood tiles with single-shot Deep JSCC neural photo compression (98.2% payload reduction) and a duty-cycled P2P mesh network.',
    shortDesc: 'Space-ground disaster communication mesh featuring Deep JSCC neural wireless image compression and orbital SAR flood mapping.',
    longDescription: `
During severe monsoon emergencies and flash floods, terrestrial 4G/5G mobile base stations collapse within 30–45 minutes due to power outages or severed fiber lines. In real disasters, battery preservation equals survival: running heavy continuous edge vision or generative LLMs depletes phone batteries within 2 hours.

iQOO PRITHVI-LIFELINE introduces an energy-first disaster survival architecture. It pairs pre-cached orbital Sentinel-1 SAR radar risk tiles with single-shot Deep JSCC (Joint Source-Channel Coding) neural image transmission and a 72-hour duty-cycled BLE 5.4 / Wi-Fi Direct peer-to-peer mesh.

Deep JSCC maps emergency SOS photos into continuous complex latent tensors at 98.2% payload compression. Unlike JPEG or H.264, Deep JSCC eliminates the Digital Cliff Effect, providing graceful analog degradation rather than frame blackout even under noisy 0 dB or -5 dB SNR wireless channels in a single sub-1.5ms execution shot.
    `.trim(),
    stack: ['PyTorch Deep JSCC', 'Sentinel-1 SAR Radar', 'BLE 5.4 / Wi-Fi Direct Mesh', 'Android NDK Haptics', 'Barometer Sensor Fusion', 'Rust SIMD'],
    highlights: [
      'Deep JSCC neural wireless transceiver achieving 98.2% payload compression without the Digital Cliff Effect',
      'Pre-cached orbital Sentinel-1 SAR radar risk tiles vectorizing cloud-penetrating water masks offline',
      '72-hour duty-cycled BLE 5.4 & Wi-Fi Direct store-and-forward mesh protocol',
      'Sensor fusion altimeter combining barometer and IMU data to track vertical flood rise in multi-story buildings',
    ],
    details: [
      'Eliminates digital transmission dropouts by mapping raw photo pixels into latent tensors that degrade gracefully into smooth analog blur under extreme signal attenuation.',
      'Pre-caches 30m Digital Elevation Models (DEM) and SAR flood polygons into compact SQLite vector MBTiles for offline topological hazard evaluation.',
      'Utilizes Android NDK RichTap linear haptic drivers to pulse tactile directional navigation vectors when visibility is impaired by smoke or water.',
      'Engineered in collaboration as an energy-first architecture for the iQOO Hackathon 2026.'
    ],
    stats: [
      { label: 'Payload Reduction', value: '98.2%' },
      { label: 'Mesh Battery Life', value: '72 Hours' },
      { label: 'Encode Latency', value: '<1.5 ms' },
      { label: 'Radar Ingestion', value: 'Sentinel-1 SAR' },
    ],
    architecture: [
      {
        title: 'Space Layer (Orbital Ingestion)',
        nodes: [
          { label: 'Sentinel-1 SAR Radar', color: '#38bdf8', sublabel: 'Cloud-penetrating flood GeoTIFFs' },
          { label: 'Offline Vector MBTiles', color: '#ffb700', sublabel: '30m DEM elevation polygons' }
        ]
      },
      {
        title: 'Ground Neural Mesh Layer',
        nodes: [
          { label: 'Deep JSCC Neural Transceiver', color: '#00d68f', sublabel: 'Single-shot 98.2% SOS photo compression' },
          { label: 'Duty-Cycled P2P Mesh', color: '#6366f1', sublabel: 'BLE 5.4 + Wi-Fi Direct store & forward' }
        ]
      },
      {
        title: 'Tactical Command HUD',
        nodes: [
          { label: 'Barometer Flood Altimeter', color: '#ff2d55', sublabel: 'Vertical water rise tracking' },
          { label: 'Tactile Linear Haptic Compass', color: '#38bdf8', sublabel: 'Directional navigation pulses' }
        ]
      }
    ],
    techDetails: [
      {
        name: 'Deep JSCC Transceiver',
        desc: 'Joint Source-Channel Coding neural network mapping SOS photos directly into complex radio symbols without cliff effect.',
        icon: React.createElement(Radio, { size: 24 })
      },
      {
        name: 'Orbital SAR Ingestion',
        desc: 'Pre-cached radar satellite telemetry generating binary flood inundation contours that work through dense storm clouds.',
        icon: React.createElement(Globe, { size: 24 })
      },
      {
        name: 'Duty-Cycled Mesh',
        desc: 'Energy-optimized store-and-forward routing engine keeping devices operational for over 72 hours on emergency reserve power.',
        icon: React.createElement(Layers, { size: 24 })
      },
      {
        name: 'Haptic Compass & Altimeter',
        desc: 'Dual X-axis linear motor pulses and barometric vertical sensor fusion guiding stranded civilians to higher ground.',
        icon: React.createElement(Compass, { size: 24 })
      }
    ],
    tags: ['Deep JSCC', 'Neural Comms', 'Space Tech', 'Wireless Mesh', 'PyTorch', 'Android NDK', 'Disaster Relief', 'SAR Radar'],
    links: [
      { label: 'GitHub Repository', href: 'https://github.com/nikhil49023', icon: Github, primary: true }
    ]
  },

  'super-orchestrator': {
    slug: 'super-orchestrator',
    name: 'Super Orchestrator',
    icon: Terminal,
    media: 'terminal',
    tagline: 'Master Agent Multi-Agent Orchestration Protocol',
    type: 'AI Systems Framework',
    category: 'AI Tooling & Orchestration',
    status: 'Open Source',
    badge: '95% Token Savings',
    date: '2026',
    accent: '#3b82f6',
    accentDark: '#1d4ed8',
    description:
      'Super Orchestrator is a master agent orchestration framework engineered for token-efficient, cost-effective, and safe multi-agent execution. It leverages code-review-graph semantic databases, local Firecrawl scraping, and free open-source models for automated subtask delegation.',
    shortDesc: 'Token-efficient multi-agent orchestration framework saving up to 95% tokens via semantic code graphs and local scraping.',
    longDescription: `
Traditional AI coding agents consume millions of context tokens by looping through iterative grep searches and querying large proprietary models for routine tasks. Super Orchestrator addresses this with a structured Task-to-Worker Routing Matrix.

The framework bootstraps a local developer environment comprising a self-hosted Firecrawl instance, a semantic code-review-graph database, and the opencode CLI. Heavy operations such as architectural mapping and web research are resolved locally, while routine coding tasks are delegated to free, lightweight models.

A Safelock Gatekeeper protocol classifies operation risk levels, preventing interactive CLI deadlock states and blocking destructive actions without explicit authorization. Real-time telemetry is recorded into structured logs for complete architectural visibility.
    `.trim(),
    stack: ['TypeScript', 'Vertex AI', 'Docker', 'Firecrawl', 'opencode CLI', 'code-review-graph'],
    highlights: [
      'Task-to-Worker Routing Matrix saving up to 95% in codebase traversal token costs',
      'Code-graph-first exploration replacing repetitive grep and glob searches with semantic queries',
      'Zero-cloud-cost web scraping via self-hosted Firecrawl Docker stack',
      'Safelock Gatekeeper protocol preventing interactive CLI deadlocks and unauthorized system mutations',
    ],
    details: [
      'Replaces file-by-file token dumping with structured call-graph queries, caller/callee tracing, and impacted-flow analysis.',
      'Runs self-hosted Firecrawl scrapers in isolated Docker containers, delivering high-fidelity markdown documentation without paid API keys.',
      'Auto-approves low-risk idempotent read operations while requiring verification gates for file mutations and external execution.',
      'Tracks token consumption and session telemetry across multi-agent task execution trajectories.'
    ],
    stats: [
      { label: 'Token Reduction', value: 'Up to 95%' },
      { label: 'Scraping Cost', value: '$0 (Self-Hosted)' },
      { label: 'Safety Layer', value: 'Safelock Protocol' },
      { label: 'Code Map', value: 'Semantic Graph' },
    ],
    architecture: [
      {
        title: 'Task Ingestion & Risk Gate',
        nodes: [
          { label: 'User Directive', color: '#3b82f6', sublabel: 'High-level objective' },
          { label: 'Safelock Gatekeeper', color: '#ff2d55', sublabel: 'Risk classification matrix' }
        ]
      },
      {
        title: 'Semantic Graph & Local Search',
        nodes: [
          { label: 'Code Review Graph', color: '#ffb700', sublabel: 'Caller/callee dependency index' },
          { label: 'Firecrawl Docker Stack', color: '#00d68f', sublabel: 'Local web & docs scraper' }
        ]
      },
      {
        title: 'Execution & Verification',
        nodes: [
          { label: 'Model Router', color: '#6366f1', sublabel: 'Routes to free/local workers' },
          { label: 'Deterministic Gatekeeper', color: '#3b82f6', sublabel: 'Verified lint & build checks' }
        ]
      }
    ],
    techDetails: [
      {
        name: 'Task Router Matrix',
        desc: 'Intelligent workload distributor routing routine tasks to free open-source models and complex reasoning to frontier engines.',
        icon: React.createElement(Layers, { size: 24 })
      },
      {
        name: 'Semantic Code Graph',
        desc: 'Pre-indexed relational codebase database enabling structural queries without expensive token dumps.',
        icon: React.createElement(Cpu, { size: 24 })
      },
      {
        name: 'Safelock Protocol',
        desc: 'Strict security gate preventing tool hallucination loops and safeguarding production file trees.',
        icon: React.createElement(Shield, { size: 24 })
      },
      {
        name: 'Local Firecrawl Stack',
        desc: 'Self-hosted Dockerized web scraper extracting clean, LLM-ready markdown documentation on demand.',
        icon: React.createElement(Globe, { size: 24 })
      }
    ],
    tags: ['AI Orchestration', 'Multi-Agent Systems', 'Token Optimization', 'Docker', 'TypeScript', 'MCP'],
    links: [
      { label: 'GitHub Repository', href: 'https://github.com/nikhil49023', icon: Github, primary: true }
    ]
  },

  'neuronav-ros2': {
    slug: 'neuronav-ros2',
    name: 'NeuroNav-ROS2',
    icon: Activity,
    media: 'custom',
    tagline: 'Homeostatic Neuromodulated Local Planner in ROS 2',
    type: 'Robotics & Deep Learning Research',
    category: 'Robotics & Autonomous Systems',
    status: 'Active Research Milestone',
    badge: 'Research Capstone',
    date: '2026',
    accent: '#a855f7',
    accentDark: '#6b21a8',
    description:
      'NeuroNav-ROS2 is an endocrine-gated real-time local planner in ROS 2 that utilizes artificial hormone dynamics (Cortisol / Adrenaline) modulated via PyTorch FiLM layers to achieve zero-shot trajectory recovery and slip compensation in dynamic Gazebo environments without online backpropagation.',
    shortDesc: 'Endocrine-gated ROS 2 local planner with PyTorch FiLM artificial hormone dynamics for zero-shot robot recovery.',
    longDescription: `
Autonomous mobile robots navigating hazardous, unpredictable terrain (such as ice, loose gravel, or sudden obstacles) often suffer catastrophic failure when standard kinematic planners (like Nav2 DWA) encounter unmodeled wheel slip or actuator latency.

NeuroNav-ROS2 investigates a novel biological inspiration: an Endocrine-Gated Local Planner running inside a real-time ROS 2 node. The system models artificial stress hormones through coupled differential equations (ODEs). When sensor telemetry detects sudden jerk or wheel slip ratio anomalies, hormone levels surge.

These hormone states are fed into PyTorch FiLM (Feature-wise Linear Modulation) conditioning layers, dynamically scaling navigation policy weights in real-time (30–50 Hz) without requiring computationally prohibitive online backpropagation. Benchmarked in Gazebo differential-drive simulations.
    `.trim(),
    stack: ['ROS 2 (rclpy)', 'Gazebo Simulation', 'PyTorch FiLM Layers', 'Differential Kinematics', 'Slip ODEs', 'Python'],
    highlights: [
      'Endocrine-gated local planner modeling artificial Cortisol and Adrenaline stress dynamics',
      'PyTorch FiLM layer conditioning for real-time (30–50 Hz) dynamic policy weight modulation',
      'Zero-shot slip compensation and recovery in Gazebo without online backpropagation',
      'Targeted for 4-page IEEE / arXiv research preprint with full ablation benchmarks',
    ],
    details: [
      'Formulates biological hormone accumulation and decay using continuous differential equations ($ds/dt$).',
      'Uses PyTorch FiLM conditioning to affine-transform intermediate policy layers based on immediate robot stress states.',
      'Publishes real-time velocity commands to `/cmd_vel` at 50 Hz from a lightweight rclpy node in ROS 2 Humble/Jazzy.',
      'Executes 50 automated Gazebo benchmark runs comparing against standard Nav2 DWA and unmodulated MLPs.'
    ],
    stats: [
      { label: 'Control Frequency', value: '50 Hz Real-Time' },
      { label: 'Modulation Type', value: 'PyTorch FiLM' },
      { label: 'Simulation Engine', value: 'Gazebo & ROS 2' },
      { label: 'Target Output', value: 'IEEE / arXiv Paper' },
    ],
    architecture: [
      {
        title: 'Sensor Telemetry & Slip Sensing',
        nodes: [
          { label: 'IMU Jerk & LiDAR Stream', color: '#a855f7', sublabel: 'Real-time state telemetry' },
          { label: 'Slip Ratio Estimator ODE', color: '#ff2d55', sublabel: 'Wheel slip & hazard detection' }
        ]
      },
      {
        title: 'Endocrine Gating Engine',
        nodes: [
          { label: 'Hormone Dynamic Model', color: '#00d68f', sublabel: 'Cortisol / Adrenaline ODEs' },
          { label: 'PyTorch FiLM Gating Layers', color: '#38bdf8', sublabel: 'Affine policy transformation' }
        ]
      },
      {
        title: 'Actuation & Benchmarking',
        nodes: [
          { label: 'Real-Time /cmd_vel Publisher', color: '#ffb700', sublabel: '50 Hz trajectory execution' },
          { label: 'Gazebo Automated Benchmarks', color: '#a855f7', sublabel: 'Nav2 DWA ablation suite' }
        ]
      }
    ],
    techDetails: [
      {
        name: 'Hormone Dynamics ODE',
        desc: 'Mathematical differential equation model computing synthetic stress levels from IMU accelerations and wheel slip.',
        icon: React.createElement(Activity, { size: 24 })
      },
      {
        name: 'PyTorch FiLM Layers',
        desc: 'Feature-wise Linear Modulation conditioning neural network layers without computationally costly online retraining.',
        icon: React.createElement(Cpu, { size: 24 })
      },
      {
        name: 'ROS 2 rclpy Node',
        desc: 'Low-latency ROS 2 navigation node streaming modulated velocity vectors to the differential drive base at 50 Hz.',
        icon: React.createElement(Layers, { size: 24 })
      },
      {
        name: 'Gazebo Simulation Suite',
        desc: 'Custom simulated worlds featuring dynamic ground friction plugins, ice patches, and obstacle mazes.',
        icon: React.createElement(Globe, { size: 24 })
      }
    ],
    tags: ['ROS 2', 'Robotics', 'PyTorch', 'Gazebo', 'Deep Learning', 'Kinematics', 'Neuromodulation', 'Research'],
    links: [
      { label: 'GitHub Repository', href: 'https://github.com/nikhil49023', icon: Github, primary: true }
    ]
  }
};

