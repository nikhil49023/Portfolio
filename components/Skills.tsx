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
    title: 'Mobile & Frontend',
    icon: 'APP',
    color: { text: '#0284c7', bg: 'rgba(2, 132, 199, 0.08)', border: 'rgba(2, 132, 199, 0.18)' },
    skills: [
      'Flutter', 'Dart', 'State Management', 'Mobile UI/UX', 'Figma to Code',
      'SQLite', 'Animations', 'Interactive UI', 'React Basics',
    ],
  },
  {
    title: 'Backend & Systems',
    icon: 'SYS',
    color: { text: '#0d9488', bg: 'rgba(13, 148, 136, 0.08)', border: 'rgba(13, 148, 136, 0.18)' },
    skills: [
      'FastAPI', 'Python', 'Asynchronous Programming', 'REST APIs', 'PostgreSQL',
      'Redis', 'Celery', 'Docker', 'System Architecture',
    ],
  },
  {
    title: 'Dev Tools',
    icon: 'OPS',
    color: { text: '#d97706', bg: 'rgba(217, 119, 6, 0.08)', border: 'rgba(217, 119, 6, 0.18)' },
    skills: [
        'Git & GitHub', 'Ubuntu / Linux', 'PyPI Publishing', 
        'CI/CD Basics', 'Unit Testing', 'Product Engineering'
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
          <h2 className="display-heading text-3xl font-extrabold tracking-tight text-[#0f172a] sm:text-4xl">Technical Proficiency</h2>
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
                    <h3 className="text-sm font-bold text-[#0f172a]">{cat.title}</h3>
                    <p className="text-xs text-[#64748b]">{cat.skills.length} skills</p>
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

        <motion.p variants={fadeUp} className="mt-8 text-center text-sm text-[#64748b]">
          I build high-performance products with a focus on clean architecture and scalable systems across the full stack.
        </motion.p>
      </motion.div>
    </section>
  );
}
