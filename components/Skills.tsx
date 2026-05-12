'use client';

import { motion } from 'framer-motion';
import { Database, Cpu, Layout, Boxes } from 'lucide-react';

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

export function Skills() {
  return (
    <section id="skills" className="section relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent-cyan/5 blur-[150px] -z-10" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, amount: 0.2 }} 
        className="space-y-24"
      >
        <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto">
          <p className="eyebrow justify-center">Technical Arsenal</p>
          <h2 className="display-heading text-[3rem] sm:text-[5rem] lg:text-[6.5rem] mb-8 uppercase tracking-tighter leading-[0.85]">
            THE <span className="gradient-text">ENGINEERING</span><br />
            <span className="text-white">STACK</span>
          </h2>
          <p className="text-lg lg:text-xl text-zinc-400 font-medium leading-relaxed">
            A comprehensive suite of technologies curated for building highly intelligent, scalable, and visually superior digital products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.category}
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="card p-10 group relative overflow-hidden"
            >
              {/* Hover Glow */}
              <div className={`absolute inset-0 bg-accent-${skill.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-accent-${skill.color}/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-accent-${skill.color}/20 shadow-2xl`}>
                  <skill.icon size={32} className={`text-accent-${skill.color}`} />
                </div>
                <h3 className="text-xl font-black text-white mb-8 uppercase tracking-widest">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <motion.span 
                      key={item} 
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.08)' }}
                      className="text-[10px] font-black px-4 py-2 rounded-xl glass border-white/5 text-zinc-500 group-hover:text-zinc-200 transition-all duration-300 uppercase tracking-widest"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Decorative Index */}
              <div className="absolute -bottom-4 -right-4 text-[8rem] font-black text-white/5 pointer-events-none select-none group-hover:text-white/10 transition-colors duration-700">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Tagline */}
        <motion.div variants={fadeUp} className="pt-12 flex justify-center">
          <div className="glass px-8 py-4 rounded-3xl border-white/5 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`w-8 h-8 rounded-full border-2 border-[#050505] bg-accent-${i === 1 ? 'cyan' : i === 2 ? 'purple' : 'pink'}/20`} />
              ))}
            </div>
            <p className="text-xs font-black text-zinc-500 uppercase tracking-widest">
              Continuously evolving with <span className="text-white">latest industry standards</span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
