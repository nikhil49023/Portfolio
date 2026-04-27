'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Globe, Layers, Cpu, Layout, Boxes, ShieldCheck } from 'lucide-react';

const SKILLS = [
  {
    category: "Intelligent Interfaces",
    icon: Layout,
    color: "cyan",
    items: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"]
  },
  {
    category: "Agentic Engineering",
    icon: Cpu,
    color: "purple",
    items: ["Google ADK", "AutoGen", "Multi-Agent Systems", "LangChain", "Prompt Engineering", "Tool Use"]
  },
  {
    category: "Backend & Systems",
    icon: Database,
    color: "lime",
    items: ["Python", "Node.js", "PostgreSQL", "Redis", "Vector DBs", "Docker"]
  },
  {
    category: "Data Architecture",
    icon: Boxes,
    color: "pink",
    items: ["RAG Pipelines", "CV Pipelines", "Dataset Curation", "Hugging Face", "ETL Processes", "Data Viz"]
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function Skills() {
  return (
    <section id="skills" className="section relative">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent-cyan/5 blur-[120px] -z-10" />
      
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-16">
        <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto">
          <p className="eyebrow justify-center">Technical Arsenal</p>
          <h2 className="display-heading text-4xl sm:text-6xl mb-6">THE <span className="gradient-text">ENGINEERING</span> STACK</h2>
          <p className="text-zinc-400">
            A comprehensive suite of technologies curated for building highly intelligent, scalable, and visually superior digital products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.category}
              variants={fadeUp}
              transition={{ delay: index * 0.1 }}
              className="card p-8 group hover:border-accent-cyan/30"
            >
              <div className={`w-14 h-14 rounded-2xl bg-accent-${skill.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <skill.icon size={28} className={`text-accent-${skill.color}`} />
              </div>
              <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="text-[10px] font-bold px-3 py-1 rounded-lg glass border-white/5 text-zinc-400 group-hover:text-white transition-colors">
                    {item}
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
