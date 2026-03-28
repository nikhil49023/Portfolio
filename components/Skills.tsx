'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24, rotateX: 6 },
  show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const tagAnim = {
  hidden: { opacity: 0, scale: 0.85, y: 8 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
};

const CATEGORIES = [
  {
    title: 'ML & LLMs',
    icon: 'ML',
    color: { text: '#1f6f69', bg: 'rgba(47, 158, 147, 0.12)', border: 'rgba(47, 158, 147, 0.24)' },
    skills: [
      'PyTorch', 'Hugging Face', 'LLMs', 'RAG', 'Agentic Workflows',
      'Computer Vision', 'OpenCV',
    ],
  },
  {
    title: 'Data & Visualization',
    icon: 'DATA',
    color: { text: '#3a86ff', bg: 'rgba(58, 134, 255, 0.12)', border: 'rgba(58, 134, 255, 0.24)' },
    skills: [
      'NumPy', 'Pandas', 'Matplotlib', 'Dataset Curation', 'Data Pipelines',
    ],
  },
  {
    title: 'Systems & Tools',
    icon: 'OPS',
    color: { text: '#f07f5a', bg: 'rgba(240, 127, 90, 0.12)', border: 'rgba(240, 127, 90, 0.24)' },
    skills: [
        'System Architecture Design', 'Docker', 'Git & GitHub', 'Open Env'
    ],
  },
];

function Tilt3DCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotX = useSpring(rx, { damping: 35, stiffness: 220 });
  const rotY = useSpring(ry, { damping: 35, stiffness: 220 });
  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        rx.set(-((e.clientY - r.top - r.height / 2) / r.height) * 12);
        ry.set(((e.clientX - r.left - r.width / 2) / r.width) * 12);
      }}
      onMouseLeave={() => { rx.set(0); ry.set(0); }}
      style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 900, transformStyle: 'preserve-3d' }}
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
        <motion.div variants={fadeUp} className="mb-10">
          <p className="eyebrow mb-2">Skills</p>
          <h2 className="display-heading text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl">Technical Proficiency</h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <motion.div key={cat.title} variants={fadeUp}>
              <Tilt3DCard className="card rounded-3xl p-6 h-full liquid-glass">
                <div className="mb-5 flex items-center gap-3" style={{ transform: 'translateZ(10px)' }}>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    className="grid h-10 w-10 place-items-center rounded-xl border text-xs font-black"
                    style={{ color: cat.color.text, background: cat.color.bg, borderColor: cat.color.border }}
                  >
                    {cat.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-sm font-bold text-[#111827]">{cat.title}</h3>
                    <p className="text-xs text-[#5b6673]">{cat.skills.length} skills</p>
                  </div>
                </div>

                <motion.div
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-1.5"
                  style={{ transform: 'translateZ(6px)' }}
                >
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={tagAnim}
                      whileHover={{ scale: 1.07, y: -1 }}
                      className="rounded-md border px-2.5 py-1 text-[11px] font-semibold cursor-default"
                      style={{ color: cat.color.text, background: cat.color.bg, borderColor: cat.color.border }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </Tilt3DCard>
            </motion.div>
          ))}
        </div>

        <motion.p variants={fadeUp} className="mt-8 text-center text-sm text-[#5b6673]">
          I build ML systems with a focus on data quality, evaluation, and scalable AI architecture.
        </motion.p>
      </motion.div>
    </section>
  );
}
