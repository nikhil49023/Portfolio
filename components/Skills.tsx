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
    title: 'ML and LLMs',
    icon: 'ML',
    color: { text: '#7c3aed', bg: 'rgba(124,58,237,0.08)', border: 'rgba(124,58,237,0.18)' },
    skills: [
      'Agentic Frameworks', 'Vision LLMs', 'RAG Pipelines',
      'QLoRA Fine-tuning', 'Groq and GPT-4o',
      'HuggingFace', 'Ollama', 'Sarvam AI', 'Local Inference',
    ],
  },
  {
    title: 'Building',
    icon: 'APP',
    color: { text: '#0891b2', bg: 'rgba(8,145,178,0.08)', border: 'rgba(8,145,178,0.18)' },
    skills: [
      'Python', 'C++ Basics', 'Flutter', 'Dart', 'FastAPI',
      'SQLite', 'REST APIs', 'MVP Development', 'AI-assisted Development',
    ],
  },
  {
    title: 'Dev Tools',
    icon: 'OPS',
    color: { text: '#d97706', bg: 'rgba(217,119,6,0.08)', border: 'rgba(217,119,6,0.18)' },
    skills: [
      'Git and GitHub', 'Ubuntu and Linux',
      'PyPI Publishing', 'Claude CLI', 'Copilot CLI', 'HuggingFace Hub',
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
          <h2 className="display-heading text-3xl font-extrabold tracking-tight text-[#1e1b4b] sm:text-4xl">My toolkit</h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <motion.div key={cat.title} variants={fadeUp}>
              <Tilt3DCard className="card rounded-3xl p-6 h-full">
                <div className="mb-5 flex items-center gap-3" style={{ transform: 'translateZ(10px)' }}>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    className="grid h-10 w-10 place-items-center rounded-xl border text-xs font-black"
                    style={{ color: cat.color.text, background: cat.color.bg, borderColor: cat.color.border }}
                  >
                    {cat.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-sm font-bold text-[#1e1b4b]">{cat.title}</h3>
                    <p className="text-xs text-[#9896ac]">{cat.skills.length} skills</p>
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

        <motion.p variants={fadeUp} className="mt-8 text-center text-sm text-[#9896ac]">
          I build working AI products fast — Python is my core language, and I use AI tooling to ship across the full stack.
        </motion.p>
      </motion.div>
    </section>
  );
}
