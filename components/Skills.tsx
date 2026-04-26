'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

const CATEGORIES = [
  { title: 'Agentic AI', skills: ['Google ADK', 'AutoGen', 'Multi-Agent', 'Tool-using AI', 'LangChain'] },
  { title: 'ML & LLMs', skills: ['PyTorch', 'Hugging Face', 'LLMs', 'RAG', 'Computer Vision'] },
  { title: 'Data & Ops', skills: ['NumPy', 'Pandas', 'Docker', 'Git', 'PostgreSQL'] },
];

function TiltCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotX = useSpring(rx, { damping: 30, stiffness: 200 });
  const rotY = useSpring(ry, { damping: 30, stiffness: 200 });
  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        rx.set(-((e.clientY - r.top - r.height / 2) / r.height) * 8);
        ry.set(((e.clientX - r.left - r.width / 2) / r.width) * 8);
      }}
      onMouseLeave={() => { rx.set(0); ry.set(0); }}
      style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
        <motion.div variants={fadeUp} className="mb-12">
          <p className="eyebrow mb-2">Skills</p>
          <h2 className="display-heading text-3xl sm:text-4xl font-bold text-white">Technical Proficiency</h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {CATEGORIES.map((cat, i) => (
            <motion.div key={cat.title} variants={fadeUp}>
              <TiltCard className="card rounded-2xl p-5 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-rose-500/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-rose-400">{cat.title[0]}</span>
                  </div>
                  <h3 className="font-semibold text-white">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((s) => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}