# Kilani Sai Nikhil — Developer & Builder Portfolio

A modern, high-fidelity personal portfolio and resume dashboard showcasing machine learning tooling, full-stack applications, and computer vision systems.

Live URL: [https://portfolio-t65m5dm5sa-uc.a.run.app](https://portfolio-t65m5dm5sa-uc.a.run.app)

---

## 🚀 Technology Stack

- **Core Framework**: [Next.js](https://nextjs.org/) (TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [Three.js](https://threejs.org/) & [React Three Fiber (R3F)](https://r3f.docs.pmnd.rs/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Google Cloud Run](https://cloud.google.com/run) (via Google Cloud Build)
- **Containerization**: [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)

---

## ✨ Key Features

1. **High-Fidelity UI**: Clean dark-mode aesthetic with vibrant accent colors, smooth glassmorphism, and responsive layouts.
2. **Interactive 3D Elements**: Background particle effects and interactive 3D structures powered by Three.js and custom GLSL shaders.
3. **Interactive & ATS-Compliant Resume**: Dual-mode resume page showing a rich dashboard UI on screen and rendering an ATS-optimized, print-ready page when exporting to PDF.
4. **H-Fidelity Visualizations**: Interactive system mockups, visual pipelines, and drone vision simulators for featured projects.

---

## 📁 Featured Projects

### 1. `saara-ai` (Local-First CLI & SDK Dataset Engine)
- **Type**: Open-Source CLI / SDK (published on [PyPI](https://pypi.org/project/saara-ai/) and NPM)
- **Tech Stack**: Python, TypeScript, google-adk, crawl4ai, Ollama, vLLM
- **Overview**: Local-first CLI and SDK for high-fidelity dataset generation, labeling, and distillation. Utilizes google-adk to orchestrate autonomous ResearchAgents running firecrawl-local.

### 2. `Vitt` (On-Device AI Expense Tracker for MSMEs)
- **Type**: Full-Stack Mobile App (ready for [Indus Appstore]())
- **Tech Stack**: Flutter, Android AICore, Gemma 4 E2B, SQLite, Notification Listener
- **Overview**: Secure, local-first on-device AI financial tracking application for Indian MSMEs. Scrapes transaction notifications on-device (zero SMS/contact permissions) and schedules local Gemma 4 E2B models via Android AICore. Fully DPDP Act 2023 and SEBI AI Advisory compliant.

### 3. `AerialEye` (YOLOv11-Nano Aerial & Disaster Response Model)
- **Type**: Computer Vision Model (published on [Hugging Face](https://huggingface.co/kilanisainikhil/AerialEye))
- **Tech Stack**: YOLOv11, SAHI Slicing, PyTorch, ONNX, TFLite (INT8), Dataset Curation
- **Overview**: Fine-tuned SUTRA object detection model specialized for high-altitude drone and disaster-response imagery (6 target classes: `human`, `sos`, `vehicle`, `flood`, `road_damage`, `crack`). Integrates Slicing Aided Hyper Inference (SAHI) and is quantized to INT8 to run efficiently on low-power Google Coral TPUs.

### 4. `Super Orchestrator` (Master Agent Orchestration Protocol)
- **Type**: AI Engineering Tool (published as [Agent Skill](https://github.com/nvidia/skills))
- **Tech Stack**: TypeScript, GCP Vertex AI, Docker, Firecrawl, opencode CLI, code-review-graph
- **Overview**: Master agent orchestration protocol designed for token-efficient, cost-effective, and safe multi-agent execution. Implements a Task-to-Worker Routing Matrix (delegating lightweight tasks to free open-source models) and a Safelock Gatekeeper for risk-level classification to prevent prompt deadlocks.

---

## 🛠️ Local Development Setup

### Option A: Standard Setup (Node & npm)
1. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```
2. Start the local development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Option B: Dev Container (Docker Compose)
1. Build and run the local development container:
   ```bash
   docker-compose up -d
   ```
2. The dev environment automatically maps your workspace files and runs `npm run dev` inside the container.
3. Access the server at [http://localhost:3000](http://localhost:3000).

---

## ☁️ Cloud Run Deployment

Deployments are managed via Google Cloud CLI:
1. Ensure you are authenticated and have the correct project selected:
   ```bash
   gcloud config set project landing-pages-498606
   ```
2. Deploy the local folder (uses a `.gcloudignore` file to skip large directories and builds them in the cloud via Google Cloud Build):
   ```bash
   gcloud run deploy portfolio --source . --region us-central1 --quiet
   ```
3. Access your live service at the stable URL generated.
