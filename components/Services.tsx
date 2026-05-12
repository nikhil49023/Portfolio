'use client';

import { motion } from 'framer-motion';
import { Cpu, Layout, MessageSquareCode, Workflow } from 'lucide-react';

const SERVICES = [
  {
    title: "AI Agent Ecosystems",
    description: "Architecting autonomous agentic workflows using AutoGen and Google ADK for complex task automation and orchestration.",
    icon: Cpu,
    tags: ["AutoGen", "ADK", "Multi-Agent"],
    color: "cyan"
  },
  {
    title: "Creative Frontend Architecture",
    description: "Developing high-fidelity, performance-optimized user interfaces with Next.js, focusing on immersive experiences.",
    icon: Layout,
    tags: ["React", "Motion", "Architecture"],
    color: "purple"
  },
  {
    title: "Intelligence-Driven RAG",
    description: "Building sophisticated Retrieval Augmented Generation systems with advanced semantic search and knowledge graph integration.",
    icon: MessageSquareCode,
    tags: ["LLM", "Vector DB", "RAG"],
    color: "pink"
  },
  {
    title: "System Automation & Scale",
    description: "Engineering scalable backend architectures and automated data pipelines using Docker, Python, and cloud-native patterns.",
    icon: Workflow,
    tags: ["Docker", "Python", "Scalability"],
    color: "lime"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  show: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { 
      duration: 1, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  },
};

export function Services() {
  return (
    <section id="services" className="section relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-purple/5 blur-[180px] -z-10" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, amount: 0.2 }} 
        className="space-y-24"
      >
        <motion.div variants={fadeUp} className="max-w-4xl">
          <p className="eyebrow">Service Spectrum</p>
          <h2 className="display-heading text-[3rem] sm:text-[5rem] lg:text-[6.5rem] mb-10 uppercase tracking-tighter leading-[0.85]">
            STRATEGIC <span className="gradient-text">SOLUTIONS</span><br />
            <span className="text-white">FOR THE NEXT ERA</span>
          </h2>
          <p className="text-xl lg:text-2xl text-zinc-400 font-medium leading-relaxed max-w-3xl">
            I provide specialized engineering services that leverage cutting-edge AI and frontend technologies to solve <span className="text-white font-bold">non-trivial problems</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="group card p-12 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Animated Accent Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br from-accent-${service.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10 space-y-10">
                <div className={`w-20 h-20 rounded-[2rem] bg-accent-${service.color}/10 flex items-center justify-center border border-accent-${service.color}/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl`}>
                  <service.icon size={40} className={`text-accent-${service.color} group-hover:scale-110 transition-transform`} />
                </div>
                <div className="space-y-6">
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter group-hover:text-accent-cyan transition-colors duration-500">{service.title}</h3>
                  <p className="text-lg text-zinc-400 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>
              </div>
              
              <div className="relative z-10 mt-12 flex flex-wrap gap-3">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-black uppercase tracking-[0.25em] px-5 py-2 rounded-xl glass border-white/5 text-zinc-500 group-hover:text-white transition-all duration-300">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Background Index */}
              <div className="absolute -bottom-4 -right-2 text-[10rem] font-black text-white/5 pointer-events-none select-none group-hover:text-white/[0.08] transition-colors duration-700 leading-none">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
