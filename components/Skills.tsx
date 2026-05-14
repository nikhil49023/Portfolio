'use client';

import { motion } from 'framer-motion';
import { Database, Cpu, Layout, Boxes } from 'lucide-react';

const SKILLS = [
  {
    category: "Interfaces",
    icon: Layout,
    items: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"]
  },
  {
    category: "Agentics",
    icon: Cpu,
    items: ["Google ADK", "AutoGen", "Multi-Agent Systems", "LangChain", "Prompt Engineering", "Tool Use"]
  },
  {
    category: "Systems",
    icon: Database,
    items: ["Python", "Node.js", "PostgreSQL", "Redis", "Vector DBs", "Docker"]
  },
  {
    category: "Architecture",
    icon: Boxes,
    items: ["RAG Pipelines", "CV Pipelines", "Dataset Curation", "Hugging Face", "ETL Processes", "Data Viz"]
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
  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
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

export function Skills() {
  return (
    <section id="skills" className="section relative">
      <motion.div 
        variants={containerVariants}
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, amount: 0.2 }} 
        className="space-y-32"
      >
        <motion.div variants={fadeUp} className="text-center max-w-4xl mx-auto">
          <p className="eyebrow justify-center">Core Capabilities</p>
          <h2 className="display-heading text-[4rem] sm:text-[6rem] lg:text-[8rem] mb-12 uppercase tracking-tighter">
            SYSTEM <span className="gradient-text">INTELLIGENCE</span>
          </h2>
          <p className="text-xl text-white/40 font-medium leading-relaxed font-display italic">
            "A technical arsenal engineered for the next generation of autonomous and premium digital experiences."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-[2rem] overflow-hidden">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.category}
              variants={fadeUp}
              className="bg-[#050505] p-12 lg:p-16 group relative"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-accent-cyan/5 flex items-center justify-center border border-accent-cyan/10">
                      <skill.icon size={20} className="text-accent-cyan" />
                    </div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{skill.category}</h3>
                  </div>
                  <span className="text-[10px] font-bold text-white/10 uppercase tracking-widest">A-0{index + 1}</span>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {skill.items.map((item) => (
                    <span 
                      key={item} 
                      className="text-[10px] font-bold px-5 py-2.5 rounded-full glass border-white/5 text-white/30 hover:text-accent-cyan hover:border-accent-cyan/20 transition-all duration-500 uppercase tracking-widest"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
