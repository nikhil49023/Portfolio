'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const tagAnim = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
};

const CATEGORIES = [
  {
    title: 'ML and LLMs',
    icon: 'ML',
    color: { text: '#7c3aed', bg: 'rgba(124,58,237,0.08)', border: 'rgba(124,58,237,0.18)' },
    skills: [
      'Agentic Frameworks', 'LLMops', 'Vision LLMs', 'Local Inference',
      'RAG Pipelines', 'QLoRA Fine-tuning', 'Groq and GPT-4o',
      'HuggingFace', 'Ollama', 'Sarvam AI',
    ],
  },
  {
    title: 'Full Stack',
    icon: 'APP',
    color: { text: '#0891b2', bg: 'rgba(8,145,178,0.08)', border: 'rgba(8,145,178,0.18)' },
    skills: [
      'Flutter', 'Dart', 'FastAPI', 'Python', 'SQL',
      'SQLite and Local DB', 'REST APIs', 'Cross-platform', 'AI-assisted Development',
    ],
  },
  {
    title: 'Dev Tools',
    icon: 'OPS',
    color: { text: '#d97706', bg: 'rgba(217,119,6,0.08)', border: 'rgba(217,119,6,0.18)' },
    skills: [
      'Git and GitHub', 'Ubuntu and Linux', 'Docker',
      'PyPI Publishing', 'Claude CLI', 'Copilot CLI', 'HuggingFace Hub',
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
        <motion.div variants={fadeUp} className="mb-10">
          <p className="eyebrow mb-2">Skills</p>
          <h2 className="display-heading text-3xl font-extrabold tracking-tight text-[#1e1b4b] sm:text-4xl">My toolkit</h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <motion.div key={cat.title} variants={fadeUp} className="card rounded-3xl p-6">
              <div className="mb-5 flex items-center gap-3">
                <div
                  className="grid h-10 w-10 place-items-center rounded-xl border text-xs font-black"
                  style={{ color: cat.color.text, background: cat.color.bg, borderColor: cat.color.border }}
                >
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#1e1b4b]">{cat.title}</h3>
                  <p className="text-xs text-[#9896ac]">{cat.skills.length} skills</p>
                </div>
              </div>

              <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={tagAnim}
                    className="rounded-md border px-2.5 py-1 text-[11px] font-semibold"
                    style={{ color: cat.color.text, background: cat.color.bg, borderColor: cat.color.border }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.p variants={fadeUp} className="mt-8 text-center text-sm text-[#9896ac]">
          Currently exploring multimodal agents and efficient fine-tuning strategies.
        </motion.p>
      </motion.div>
    </section>
  );
}
