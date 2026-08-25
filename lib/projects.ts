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

