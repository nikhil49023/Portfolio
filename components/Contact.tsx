'use client';

import React, { useState, useRef } from 'react';
import { Mail, Github, Linkedin, Send, MapPin, Brain, Package, ArrowUpRight, Terminal, User } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import { TextScramble } from '@/components/ui/text-scramble';
import { hapticAudio } from '@/lib/audio';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const contacts = [
  {
    icon: Mail,
    label: 'Direct Email',
    value: 'kilanisainikhil@gmail.com',
    href: 'mailto:kilanisainikhil@gmail.com',
    accent: '#D71920',
  },
  {
    icon: Github,
    label: 'GitHub Registry',
    value: 'github.com/nikhil49023',
    href: 'https://github.com/nikhil49023',
    accent: '#06B6D4',
  },
  {
    icon: Brain,
    label: 'Hugging Face Hub',
    value: 'huggingface.co/kilanisainikhil',
    href: 'https://huggingface.co/kilanisainikhil',
    accent: '#F59E0B',
  },
  {
    icon: Package,
    label: 'PyPI Registry',
    value: 'pypi.org/project/saara-ai/',
    href: 'https://pypi.org/project/saara-ai/',
    accent: '#10B981',
  },
  {
    icon: Package,
    label: 'NPM Registry',
    value: 'npmjs.com/package/saara-ai',
    href: 'https://www.npmjs.com/package/saara-ai',
    accent: '#D71920',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/kilanisainikhil',
    href: 'https://linkedin.com/in/kilanisainikhil',
    accent: '#8B5CF6',
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [activeTab, setActiveTab] = useState<'ui' | 'curl'>('ui');
  const [sent, setSent] = useState(false);

  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    if (headerRef.current) {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 28,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
        },
      });
    }

    if (leftColRef.current) {
      gsap.from(leftColRef.current, {
        opacity: 0,
        x: -25,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: leftColRef.current,
          start: 'top 80%',
        },
      });
    }

    if (rightColRef.current) {
      gsap.from(rightColRef.current, {
        opacity: 0,
        x: 25,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: rightColRef.current,
          start: 'top 80%',
        },
      });
    }
  }, { scope: containerRef });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    hapticAudio.playBip();
    const { name, email, message } = formState;
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:kilanisainikhil@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const handleTabSwitch = (tab: 'ui' | 'curl') => {
    hapticAudio.playTactileClick();
    setActiveTab(tab);
  };

  const curlSnippet = `curl -X POST "https://api.kilanisainikhil.dev/v1/messages" \\
  -H "Content-Type: application/json" \\
  -d '{
    "sender": "${formState.name || 'Anonymous'}",
    "email": "${formState.email || 'sender@example.com'}",
    "payload": "${formState.message ? formState.message.replace(/"/g, '\\"') : 'Requesting collaboration...'}"
  }'`;

  return (
    <section 
      ref={containerRef}
      id="contact" 
      className="section-premium border-t border-[var(--border-subtle)] bg-[var(--bg-void)] select-none"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#D71920]" />
            <h2 className="text-xs font-mono tracking-widest uppercase text-[var(--ink-primary)] font-bold flex items-center gap-2">
              <span>06 //</span>
              <TextScramble hoverTrigger duration={0.6}>Direct Dispatch &amp; Registries</TextScramble>
            </h2>
          </div>
          <div className="font-mono text-[10px] text-[var(--ink-muted)] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span>HYDERABAD (UTC+5:30) · DIRECT DISPATCH TERMINAL</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Block - Text & Links */}
          <div ref={leftColRef} className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--ink-primary)] uppercase mb-3 tracking-tight font-display">
                Have a High-Stakes Project? Let&apos;s Talk.
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[var(--ink-secondary)] font-body">
                Open for high-impact roles in Autonomous Systems, Robotics, Edge AI, and Fullstack Engineering. No corporate fluff — just clean architecture and deterministic code that ships.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-[var(--bg-surface)] border border-[var(--border-subtle)] px-4 py-2 rounded-full w-max backdrop-blur-md shadow-xs">
              <MapPin size={13} className="text-[#D71920]" />
              <span className="text-[10px] font-mono text-[var(--ink-primary)] font-bold tracking-wider">
                HYDERABAD, INDIA (IST UTC+5:30)
              </span>
            </div>

            {/* Social Cards with multi-spectral telemetry accents */}
            <div className="space-y-2.5">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  onMouseEnter={() => hapticAudio.playTactileClick()}
                  className="flex items-center justify-between p-3.5 border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-active)] group transition-all duration-200 no-underline rounded-[18px] backdrop-blur-xl shadow-xs hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center border border-[var(--border-subtle)] bg-[var(--bg-void)] transition-transform group-hover:scale-105"
                      style={{ color: c.accent }}
                    >
                      <c.icon size={14} />
                    </div>
                    <div>
                      <div className="text-[9px] font-mono text-[var(--ink-muted)] tracking-widest uppercase mb-0.5">{c.label}</div>
                      <div className="text-[var(--ink-primary)] text-xs font-semibold font-mono group-hover:text-[var(--ink-primary)]">
                        {c.value}
                      </div>
                    </div>
                  </div>
                  <span className="w-6 h-6 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-void)] flex items-center justify-center transition-all duration-200 group-hover:border-[var(--border-active)] text-[var(--ink-muted)] group-hover:text-[#D71920]">
                    <ArrowUpRight size={11} />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Block - Machined Double-Bezel API Client Style Form */}
          <div ref={rightColRef} className="lg:col-span-7">
            <div className="machined-bezel w-full rounded-[24px] overflow-hidden shadow-xl">
              <div className="machined-inner bg-[var(--bg-surface)] rounded-[22px] overflow-hidden flex flex-col">
                
                {/* Window Header */}
                <div className="flex items-center justify-between border-b border-[var(--border-subtle)] px-5 py-3.5 bg-[var(--bg-raised)]/60">
                  <div className="flex items-center gap-2">
                    <span className="text-[9.5px] font-mono font-bold bg-[#D71920] text-white px-2 py-0.5 rounded-full">POST</span>
                    <span className="text-[10px] font-mono text-[var(--ink-secondary)]">/api/v1/dispatch</span>
                  </div>
                  <div className="flex border border-[var(--border-subtle)] bg-[var(--bg-void)] p-0.5 rounded-full text-[9px] font-mono">
                    <button
                      onClick={() => handleTabSwitch('ui')}
                      className={`px-3 py-1 rounded-full cursor-pointer transition-all ${
                        activeTab === 'ui'
                          ? 'bg-[var(--ink-primary)] text-[var(--bg-void)] font-bold shadow-xs'
                          : 'text-[var(--ink-muted)] hover:text-[var(--ink-primary)] bg-transparent'
                      }`}
                    >
                      UI CLIENT
                    </button>
                    <button
                      onClick={() => handleTabSwitch('curl')}
                      className={`px-3 py-1 rounded-full cursor-pointer transition-all ${
                        activeTab === 'curl'
                          ? 'bg-[var(--ink-primary)] text-[var(--bg-void)] font-bold shadow-xs'
                          : 'text-[var(--ink-muted)] hover:text-[var(--ink-primary)] bg-transparent'
                      }`}
                    >
                      cURL CMD
                    </button>
                  </div>
                </div>

                {/* Form Body */}
                <div className="p-6 md:p-8 bg-[var(--bg-surface)] min-h-[340px]">
                  {sent ? (
                    <div className="text-center py-12 space-y-3">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 border border-[var(--border-subtle)] bg-[var(--bg-void)]">
                        <Send size={18} className="text-[#D71920]" />
                      </div>
                      <h4 className="font-bold text-base text-[var(--ink-primary)] uppercase tracking-wider font-display">
                        Mail Client Triggered
                      </h4>
                      <p className="text-xs text-[var(--ink-secondary)] max-w-sm mx-auto leading-relaxed font-body">
                        Your mail client opened with this payload addressed to <strong className="text-[var(--ink-primary)] font-mono">kilanisainikhil@gmail.com</strong>.
                      </p>
                      <button
                        onClick={() => {
                          hapticAudio.playTactileClick();
                          setSent(false);
                        }}
                        className="mt-3 px-4 py-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-void)] text-xs font-mono text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] cursor-pointer"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : activeTab === 'ui' ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {[
                        { id: 'name', label: 'sender_name', type: 'text', placeholder: 'Sai Nikhil' },
                        { id: 'email', label: 'reply_to', type: 'email', placeholder: 'nikhil@example.com' },
                      ].map((field) => (
                        <div key={field.id}>
                          <label className="text-[10px] font-mono text-[var(--ink-muted)] tracking-widest block mb-1 font-bold uppercase">
                            {field.label}
                          </label>
                          <input
                            type={field.type}
                            required
                            placeholder={field.placeholder}
                            value={formState[field.id as 'name' | 'email']}
                            onChange={(e) => setFormState((s) => ({ ...s, [field.id]: e.target.value }))}
                            className="w-full bg-[var(--bg-void)] border border-[var(--border-subtle)] focus:border-[var(--border-active)] rounded-[12px] px-3.5 py-2.5 text-xs text-[var(--ink-primary)] placeholder:text-[var(--ink-muted)] focus:outline-none transition-all duration-200 font-mono"
                          />
                        </div>
                      ))}

                      <div>
                        <label className="text-[10px] font-mono text-[var(--ink-muted)] tracking-widest block mb-1 font-bold uppercase">
                          payload_message
                        </label>
                        <textarea
                          required
                          rows={4}
                          placeholder="What would you like to engineer together?"
                          value={formState.message}
                          onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                          className="w-full bg-[var(--bg-void)] border border-[var(--border-subtle)] focus:border-[var(--border-active)] rounded-[12px] px-3.5 py-2.5 text-xs text-[var(--ink-primary)] placeholder:text-[var(--ink-muted)] focus:outline-none transition-all duration-200 resize-none font-mono"
                        />
                      </div>

                      <div className="pt-2">
                        <InteractiveHoverButton
                          type="submit"
                          text="Dispatch Message"
                          className="w-full h-11"
                        />
                      </div>
                    </form>
                  ) : (
                    <div className="space-y-4">
                      <div className="border border-[var(--border-subtle)] bg-[var(--bg-void)] p-4 rounded-[14px] font-mono text-xs text-[var(--ink-secondary)] leading-relaxed select-text overflow-x-auto max-h-[260px]">
                        <code className="text-[#D71920] whitespace-pre">{curlSnippet}</code>
                      </div>
                      <p className="text-[10px] font-mono text-[var(--ink-muted)] leading-relaxed">
                        Edit the UI client fields to update this payload in real time.
                      </p>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
