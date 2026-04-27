'use client';

import { motion } from 'framer-motion';
import { Terminal, Zap, Search, Shield, Cpu, Layout, MessageSquareCode, Workflow } from 'lucide-react';

const SERVICES = [
  {
    title: "AI Agent Ecosystems",
    description: "Architecting autonomous agentic workflows using AutoGen and Google ADK for complex task automation and orchestration.",
    icon: Cpu,
    tags: ["AutoGen", "ADK", "Multi-Agent"]
  },
  {
    title: "Creative Frontend Architecture",
    description: "Developing high-fidelity, performance-optimized user interfaces with Next.js, focusing on immersive experiences.",
    icon: Layout,
    tags: ["React", "Motion", "Architecture"]
  },
  {
    title: "Intelligence-Driven RAG",
    description: "Building sophisticated Retrieval Augmented Generation systems with advanced semantic search and knowledge graph integration.",
    icon: MessageSquareCode,
    tags: ["LLM", "Vector DB", "RAG"]
  },
  {
    title: "System Automation & Scale",
    description: "Engineering scalable backend architectures and automated data pipelines using Docker, Python, and cloud-native patterns.",
    icon: Workflow,
    tags: ["Docker", "Python", "Scalability"]
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function Services() {
  return (
    <section id="services" className="section relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-purple/5 blur-[120px] -z-10" />
      
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-16">
        <motion.div variants={fadeUp} className="max-w-3xl">
          <p className="eyebrow">Service Spectrum</p>
          <h2 className="display-heading text-4xl sm:text-6xl mb-8 uppercase">
            STRATEGIC <span className="gradient-text">SOLUTIONS</span> FOR THE NEXT ERA
          </h2>
          <p className="text-xl text-zinc-400">
            I provide specialized engineering services that leverage cutting-edge AI and frontend technologies to solve non-trivial problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              transition={{ delay: index * 0.1 }}
              className="group card p-10 flex flex-col justify-between hover:border-accent-purple/30"
            >
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-accent-purple/10 group-hover:scale-110 transition-all">
                  <service.icon size={32} className="text-zinc-500 group-hover:text-accent-purple transition-colors" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">{service.title}</h3>
                  <p className="text-zinc-400 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 text-zinc-500 group-hover:text-accent-purple group-hover:bg-accent-purple/5 transition-all">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
