# Agentic AI Hackathon Resume Plan

## Objective
Create a highly specialized, ATS-compliant resume at `app/resume/agentic/page.tsx`. This version will focus on an **Agentic + Edge AI Hybrid** narrative, tailored specifically for AI hackathons. It will be designed primarily for "Print to PDF" on desktop, featuring a clean, minimalist document layout with dense, high-signal technical wording.

## Key Files & Context
- `app/resume/agentic/page.tsx` (New): The dedicated route for the hackathon resume.
- `app/globals.css`: Will leverage the existing minimalist styles created during the previous redesign.

## Proposed Solution & Narrative Shift

### 1. Wording Focus: Agentic + Edge AI
The narrative will transition from general Full-Stack/ML to specialized AI Engineering:
- **saara-ai**: Highlight autonomous agent orchestration (`google-adk`), web-scraping agents (`crawl4ai`), and local LLM routing (`Ollama`/`vLLM`) for synthetic dataset generation.
- **Super Orchestrator**: Emphasize multi-agent frameworks, task delegation matrices, context-window token optimization, and RAG pipelines via local Firecrawl.
- **Vitt (Edge AI)**: Focus on on-device SLMs (Small Language Models like Gemma 4 E2B via Android AICore), local RAG, and privacy-preserving autonomous processing without cloud dependencies.
- **AerialEye (Perception)**: Position as a "Perception Agent" or vision node for multi-agent systems, focusing on edge deployment (INT8 TFLite) and SAHI for granular spatial awareness.

### 2. Executive Summary Update
Rewrite the summary to position you as an **AI Systems Engineer** specializing in local-first agentic workflows, on-device SLM deployment, and multi-agent orchestration.

### 3. Layout & Structure (ATS & PDF Optimized)
- The page will display a clean, highly legible document directly on the screen (no heavy dashboard UI like the main resume).
- Include a prominent, non-printing "Export PDF" button at the top.
- The layout will be a linear, single-column design (standard for traditional resumes and optimal for strict ATS parsing).
- Minimalist typography (black/dark charcoal text on white background) with clear section dividers.

## Implementation Steps
1. **Create Route**: Create the `app/resume/agentic` directory and `page.tsx` file.
2. **Draft Content**: Rewrite the `projects`, `skills`, and `summary` arrays with the new Agentic/Edge focus.
3. **Build Layout**: Implement a simple, centered document container with Tailwind/inline styles that perfectly mirror standard PDF dimensions (A4/Letter).
4. **Implement Print CSS**: Embed a strict `@media print` block to ensure margins, fonts, and link colors are perfectly formatted for the final PDF export.

## Verification
- Navigate to `/resume/agentic` in the browser.
- Verify the wording highlights Agentic and Edge AI tech appropriately.
- Use the browser's "Print" dialog to confirm the PDF output is a clean, perfectly formatted, 1-2 page document.
