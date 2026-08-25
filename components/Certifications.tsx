'use client';

import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, Award, Shield, BookOpen, Sparkles, Trophy } from 'lucide-react';

const certs = [
  {
    title: 'Google Cloud Gen AI Master Certificate',
    issuer: 'Google Cloud Skills Boost',
    date: 'Jul 2026',
    description: 'Master verification demonstrating enterprise proficiency across Vertex AI, Generative AI models, multimodal agent deployment, and RAG architectures.',
    link: 'https://www.skills.google/public_profiles/44a41e60-6e04-4a73-abbf-963ea83c87eb',
    icon: Sparkles,
    badge: 'Master Credential',
    tags: ['Google Cloud', 'Vertex AI', 'Gen AI', 'RAG'],
  },
  {
    title: 'Build & Deploy Agents in Production',
    issuer: 'Google Cloud Skills Boost',
    date: '2025',
    description: 'Advanced engineering badge covering production-grade agent deployment patterns, monitoring, observability, and scaling on Google Cloud.',
    link: 'https://www.skills.google/public_profiles/44a41e60-6e04-4a73-abbf-963ea83c87eb/badges/23799611',
    icon: CheckCircle2,
    badge: 'Verified Badge',
    tags: ['GCP', 'Production', 'Agent Architecture'],
  },
  {
    title: 'Agents 101 Certification',
    issuer: 'AMD AI Academy',
    date: '2025',
    description: 'Foundational certification covering AI agent architectures, tool-use patterns, cognitive loops, and multi-agent coordination concepts.',
    link: 'https://academy.amd.com/certs/31042/D5539744A4B347368F37FF267ED373CD166281.pdf',
    icon: Shield,
    badge: 'AMD Certified',
    tags: ['AMD', 'AI Agents', 'Tool Calling'],
  },
  {
    title: 'Deploy Your First Agent',
    issuer: 'Google Cloud Skills Boost',
    date: '2025',
    description: 'Hands-on validation badge for deploying autonomous AI agents to Google Cloud infrastructure using Vertex AI tooling.',
    link: 'https://www.skills.google/public_profiles/44a41e60-6e04-4a73-abbf-963ea83c87eb/badges/23799788',
    icon: Award,
    badge: 'Verified Badge',
    tags: ['Vertex AI', 'GCP', 'Agent Deploy'],
  },
  {
    title: 'Intermediate SQL',
    issuer: 'DataCamp',
    date: '2026',
    description: 'Advanced relational queries covering grouping with HAVING, multi-table joins, subqueries, set operations, and relational query tuning.',
    link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/ee43fbec5c8180e4a47a8aaa8eba801ebc59519f',
    icon: BookOpen,
    badge: 'DataCamp Accomplishment',
    tags: ['SQL', 'Relational DB', 'Query Optimization'],
  },
  {
    title: 'Introduction to SQL',
    issuer: 'DataCamp',
    date: '2025',
    description: 'Structured Query Language fundamentals — SELECT queries, JOINs, filtering, aggregations, and relational database normalization.',
    link: 'https://drive.google.com/file/d/1beBfZeQvKUGlmvTbkR8P7i9B4UhZ_MyC/view?usp=sharing',
    icon: BookOpen,
    badge: 'DataCamp Certificate',
    tags: ['SQL', 'Data Modeling', 'PostgreSQL'],
  },
  {
    title: 'National Project Showcase Finalist (Vitt)',
    issuer: 'NxtWave x OpenAI Academy x IndiaAI',
    date: '2026',
    description: 'Selected as a national buildathon finalist for engineering Vitt: 100% on-device AI financial tracking compliant with DPDP Act 2023.',
    link: 'https://github.com/nikhil49023',
    icon: Trophy,
    badge: 'National Finalist',
    tags: ['OpenAI Academy', 'IndiaAI', 'On-Device AI'],
  },
  {
    title: 'FinAgent Hackathon Award',
    issuer: 'Unstop',
    date: '2026',
    description: 'Participation and achievement credential in the FinAgent Hackathon, demonstrating skills in autonomous financial AI agent systems.',
    link: 'https://drive.google.com/file/d/1ZE8qmctlFchAgu9nPbzp8FcNYn5u_wgt/view?usp=sharing',
    icon: Trophy,
    badge: 'Hackathon Award',
    tags: ['FinTech', 'AI Agents', 'Unstop'],
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-premium border-t border-[var(--border-subtle)] bg-[var(--bg-void)] reveal-on-scroll">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-14">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-sm text-[var(--brand-primary)] font-bold">04</span>
            <h2 className="text-sm font-mono tracking-widest uppercase text-[var(--brand-secondary)] font-bold">
              Verified Credentials &amp; Honours
            </h2>
          </div>
          <div className="font-mono text-[10px] text-[var(--ink-muted)]">
            <span>GOOGLE CLUSTER · AMD ACADEMY · DATACAMP · NATIONAL HACKATHONS</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, borderColor: "var(--border-active)" }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: i * 0.03
                }}
                className="p-5 border border-[var(--border-subtle)] bg-[var(--bg-surface)]/60 hover:bg-[var(--bg-surface)] transition-colors duration-300 flex flex-col justify-between group cursor-pointer shadow-sm relative"
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className="w-9 h-9 flex items-center justify-center border border-[var(--border-subtle)] bg-[var(--bg-void)] text-[var(--brand-primary)] shrink-0"
                    >
                      <Icon size={16} />
                    </div>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 flex items-center justify-center border border-[var(--border-subtle)] bg-[var(--bg-void)] hover:border-[var(--border-active)] text-[var(--ink-muted)] hover:text-[var(--brand-primary)] transition-all duration-200"
                      title="Verify credential link"
                    >
                      <ExternalLink size={12} />
                    </a>
                  </div>

                  <div className="text-[9.5px] font-mono tracking-wider mb-1 font-bold uppercase text-[var(--brand-secondary)]">
                    {cert.issuer} · {cert.date}
                  </div>

                  <h3 className="font-bold text-[var(--ink-primary)] text-sm leading-tight mb-2 tracking-tight font-display">
                    {cert.title}
                  </h3>

                  <p className="text-xs leading-relaxed text-[var(--ink-muted)] mb-4">{cert.description}</p>
                </div>

                <div className="flex flex-wrap gap-1 pt-3 border-t border-[var(--border-subtle)]">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-mono px-2 py-0.5 border border-[var(--border-subtle)] bg-[var(--bg-void)] text-[var(--ink-secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

