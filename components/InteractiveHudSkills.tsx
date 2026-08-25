'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Terminal, Cpu, Activity, Layers, Code, Globe, Eye } from 'lucide-react';

interface SkillNode {
  id: string;
  name: string;
  category: string;
  level: number;
  capacity: string;
  color: string;
  icon: any;
  telemetry: { label: string; value: string }[];
  details: string[];
  // SVG coordinates for absolute layout
  cardX: number;
  cardY: number;
  cardW: number;
  cardH: number;
  anchorX: number;
  anchorY: number;
  portAnchorX: number;
  portAnchorY: number;
  path: string;
}

const skillsData: SkillNode[] = [
  {
    id: 'python',
    name: 'Python Core',
    category: 'Core Native / Human',
    level: 65,
    capacity: 'Intermediate',
    color: '#00f3ff', // cyan
    icon: Code,
    telemetry: [
      { label: 'COFFEE INTAKE', value: '3 cups/day' },
      { label: 'RUNTIME ENGINE', value: 'CPython 3.11' },
      { label: 'PARADIGM', value: 'OOP / Scripting' }
    ],
    details: ['Writing clean scripting logic', 'Building basic data engines', 'Debugging execution traceback logs'],
    cardX: 10, cardY: 20, cardW: 210, cardH: 115,
    anchorX: 220, anchorY: 75,
    portAnchorX: 280, portAnchorY: 160,
    path: 'M 280 160 L 245 160 L 220 135 L 220 75'
  },
  {
    id: 'cpp',
    name: 'C++ Programming',
    category: 'Core Native / Human',
    level: 60,
    capacity: 'Intermediate',
    color: '#00f3ff', // cyan
    icon: Cpu,
    telemetry: [
      { label: 'COMPILER', value: 'GCC / G++ 17' },
      { label: 'DATA STRUCTURES', value: 'Standard Template Lib' },
      { label: 'MEMORY SPACE', value: 'Stack & Heap allocation' }
    ],
    details: ['Solving algorithmic problems', 'Implementing class relationships', 'Understanding memory behaviors'],
    cardX: 10, cardY: 195, cardW: 210, cardH: 115,
    anchorX: 220, anchorY: 250,
    portAnchorX: 280, portAnchorY: 250,
    path: 'M 280 250 L 220 250'
  },
  {
    id: 'sql',
    name: 'SQL Databases',
    category: 'Core Native / Human',
    level: 65,
    capacity: 'Intermediate',
    color: '#00f3ff', // cyan
    icon: Layers,
    telemetry: [
      { label: 'RELATIONAL ENGINES', value: 'PostgreSQL / SQLite' },
      { label: 'QUERY CODES', value: 'Joins, GroupBy, Unions' },
      { label: 'SCHEMAS', value: 'Primary & Foreign Keys' }
    ],
    details: ['Designing structured tables', 'Writing optimized queries', 'Performing schema migrations'],
    cardX: 10, cardY: 370, cardW: 210, cardH: 115,
    anchorX: 220, anchorY: 425,
    portAnchorX: 280, portAnchorY: 340,
    path: 'M 280 340 L 245 340 L 220 365 L 220 425'
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    category: 'Core Native / Human',
    level: 70,
    capacity: 'Intermediate',
    color: '#00f3ff', // cyan
    icon: Terminal,
    telemetry: [
      { label: 'VCS UTILITY', value: 'Git CLI Client' },
      { label: 'REMOTE HOSTS', value: 'GitHub Enterprise' },
      { label: 'WORKFLOWS', value: 'Branches, Commits, PRs' }
    ],
    details: ['Managing version control branches', 'Staging and pushing changes', 'Resolving merge conflicts'],
    cardX: 580, cardY: 20, cardW: 210, cardH: 115,
    anchorX: 580, anchorY: 75,
    portAnchorX: 520, portAnchorY: 160,
    path: 'M 520 160 L 555 160 L 580 135 L 580 75'
  },
  {
    id: 'nextjs',
    name: 'Next.js / TS',
    category: 'Vibe Coded / AI',
    level: 90,
    capacity: 'Orchestrated',
    color: '#ff9f00', // gold
    icon: Globe,
    telemetry: [
      { label: 'AGENT ORCHESTRA', value: 'Cursor / Claude 3.5' },
      { label: 'UI RENDERING', value: 'Server Components' },
      { label: 'STYLE SHEETS', value: 'Tailwind + Framer Motion' }
    ],
    details: ['AI-augmented page scaffolding', 'Interpreting CSS styling rules', 'Configuring routing frameworks'],
    cardX: 580, cardY: 195, cardW: 210, cardH: 115,
    anchorX: 580, anchorY: 250,
    portAnchorX: 520, portAnchorY: 250,
    path: 'M 520 250 L 580 250'
  },
  {
    id: 'flutter',
    name: 'Flutter / Dart',
    category: 'Vibe Coded / AI',
    level: 85,
    capacity: 'Orchestrated',
    color: '#ff9f00', // gold
    icon: Activity,
    telemetry: [
      { label: 'AGENT ORCHESTRA', value: 'Cursor / Gemini Flash' },
      { label: 'BUILD SCHEDULER', value: 'Hot Reload / Flutter CLI' },
      { label: 'STATE ENGINE', value: 'Riverpod / Provider' }
    ],
    details: ['AI-driven mobile screen builds', 'Hot reload testing iterations', 'Scaffolding local notification hooks'],
    cardX: 580, cardY: 370, cardW: 210, cardH: 115,
    anchorX: 580, anchorY: 425,
    portAnchorX: 520, portAnchorY: 340,
    path: 'M 520 340 L 555 340 L 580 365 L 580 425'
  }
];

// Browser Audio Synthesizer for Game HUD Sound Effects
const playSound = (freq = 800, dur = 0.05, type: OscillatorType = 'sine', vol = 0.015) => {
  if (typeof window === 'undefined') return;
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    
    gain.gain.setValueAtTime(vol, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + dur);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + dur);
  } catch (e) {}
};

const playSweepSound = () => {
  if (typeof window === 'undefined') return;
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(150, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(450, ctx.currentTime + 0.15);
    
    gain.gain.setValueAtTime(0.015, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + 0.15);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.15);
  } catch (e) {}
};

export default function InteractiveHudSkills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [biometrics, setBiometrics] = useState({
    cpuTemp: 44,
    power: 92,
    state: 'THINKING',
    coffee: 'COFFEE_LOCKED'
  });

  // Keep values fluctuating for HUD aesthetic
  useEffect(() => {
    const interval = setInterval(() => {
      setBiometrics(prev => ({
        cpuTemp: Math.floor(40 + Math.random() * 8),
        power: Math.floor(90 + Math.random() * 5),
        state: Math.random() > 0.8 ? 'BUILDING' : 'THINKING',
        coffee: Math.random() > 0.9 ? 'NEED_REFILL' : 'COFFEE_LOCKED'
      }));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleCardHoverStart = (id: string) => {
    setHoveredSkill(id);
    playSound(950, 0.06, 'sine', 0.012); // High-pitched clean beep on hover
  };

  const handleCardHoverEnd = () => {
    setHoveredSkill(null);
  };

  const handlePortraitHover = () => {
    playSweepSound(); // Sci-fi frequency sweep on portrait hover
  };

  return (
    <div className="w-full select-none">
      
      {/* ─────────────────── DESKTOP HUD LAYOUT (768px+) ─────────────────── */}
      <div className="relative w-full max-w-[800px] h-[520px] mx-auto hidden md:block border border-cyan-500/10 bg-[#070913]/30 p-2 overflow-hidden">
        {/* Neon HUD grid backdrop */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,243,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        {/* Holographic scanning dots */}
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#00f3ff_0.5px,transparent_0.5px)] bg-[size:10px_10px]" />

        {/* ── SVG CONNECTING CHANNELS layer ── */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 800 520">
          {skillsData.map(node => {
            const isHovered = hoveredSkill === node.id;
            return (
              <g key={node.id}>
                {/* Backdrop static wire */}
                <path
                  d={node.path}
                  fill="none"
                  stroke={node.color}
                  strokeWidth="1.5"
                  className="opacity-[0.12] transition-opacity duration-300"
                />
                
                {/* Active glowing wire */}
                <motion.path
                  d={node.path}
                  fill="none"
                  stroke={isHovered ? node.color : 'transparent'}
                  strokeWidth="2.5"
                  filter={isHovered ? `drop-shadow(0 0 4px ${node.color})` : undefined}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                />

                {/* Energy pulses traveling down active wire */}
                {isHovered && (
                  <path
                    d={node.path}
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="3.5"
                    strokeDasharray="10 40"
                    className="opacity-90"
                    style={{
                      animation: 'hudPulse 1.2s linear infinite',
                      filter: `drop-shadow(0 0 5px ${node.color})`
                    }}
                  />
                )}
                
                {/* Anchor dot on Portrait Edge */}
                <circle
                  cx={node.portAnchorX}
                  cy={node.portAnchorY}
                  r="3.5"
                  fill={isHovered ? '#ffffff' : 'transparent'}
                  stroke={isHovered ? node.color : 'transparent'}
                  strokeWidth="1.5"
                  className="transition-all duration-300"
                  style={{ filter: isHovered ? `drop-shadow(0 0 4px ${node.color})` : undefined }}
                />
                
                {/* Anchor dot on Card Edge */}
                <circle
                  cx={node.anchorX}
                  cy={node.anchorY}
                  r="3.5"
                  fill={isHovered ? '#ffffff' : 'transparent'}
                  stroke={isHovered ? node.color : 'transparent'}
                  strokeWidth="1.5"
                  className="transition-all duration-300"
                  style={{ filter: isHovered ? `drop-shadow(0 0 4px ${node.color})` : undefined }}
                />
              </g>
            );
          })}
          
          <style>{`
            @keyframes hudPulse {
              from { stroke-dashoffset: 100; }
              to { stroke-dashoffset: 0; }
            }
          `}</style>
        </svg>

        {/* ── LEFT SKILL MODULES COLUMN ── */}
        <div className="absolute left-2 top-2 bottom-2 w-[220px] flex flex-col justify-between z-20">
          {skillsData.slice(0, 3).map(node => (
            <SkillCard
              key={node.id}
              node={node}
              isHovered={hoveredSkill === node.id}
              onHoverStart={() => handleCardHoverStart(node.id)}
              onHoverEnd={handleCardHoverEnd}
            />
          ))}
        </div>

        {/* ── CENTER PORTRAIT COMMAND BLOCK ── */}
        <div className="absolute left-[280px] top-[100px] w-[240px] h-[320px] z-20 group">
          <motion.div
            onMouseEnter={handlePortraitHover}
            whileHover={{ scale: 1.02, rotate: [0, -1, 1, -1, 0] }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full border border-cyan-500/30 bg-black/60 p-1 cursor-crosshair"
          >
            {/* HUD Bracket Corners */}
            <span className="absolute -top-0.5 -left-0.5 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
            <span className="absolute -bottom-0.5 -left-0.5 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
            <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

            <div className="relative w-full h-full overflow-hidden bg-black/80">
              {/* Scanline overlay */}
              <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px] opacity-70" />
              
              {/* User Photo */}
              <Image
                src="/A_sleek,_professional_portrait_of_202606121456.jpeg"
                alt="Sai Nikhil HUD Scanner"
                fill
                sizes="240px"
                className="object-cover transition-all duration-300 filter contrast-125 saturate-[0.8] brightness-[0.8] group-hover:brightness-105 group-hover:saturate-105 group-hover:scale-105"
              />

              {/* Reactor center core overlay */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-35 group-hover:opacity-75 transition-opacity duration-300">
                <svg className="w-48 h-48 text-cyan-400/30 animate-spin-slow" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 8" />
                  <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="10 5" />
                </svg>
              </div>

              {/* ────────────────── GAME HUD DYNAMIC PROJECTIONS ────────────────── */}
              
              {/* DEFAULT BIOMETRIC READOUT OVERLAY (NO HOVER) */}
              <AnimatePresence>
                {!hoveredSkill && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 z-20 pointer-events-none p-3.5 flex flex-col justify-between font-mono"
                  >
                    {/* Top Diagnostic HUD */}
                    <div className="flex justify-between items-start text-[8px] leading-relaxed text-cyan-300/90 bg-black/75 p-2 border border-cyan-500/10 backdrop-blur-sm">
                      <div className="flex flex-col gap-0.5">
                        <span>SYSTEM: RUNNING</span>
                        <span>BIOMETRICS: HUMAN</span>
                      </div>
                      <div className="flex flex-col items-end gap-0.5">
                        <span className="text-orange-400 font-bold animate-pulse">● LIVE FEED</span>
                        <span>ZONE: HYD_CORE</span>
                      </div>
                    </div>

                    {/* Bottom Biometric Dashboard */}
                    <div className="bg-black/80 border border-cyan-500/20 p-2.5 text-[9px] leading-normal text-cyan-100 flex flex-col gap-1 backdrop-blur-sm">
                      <div className="flex justify-between border-b border-cyan-500/10 pb-1 mb-1 text-cyan-400 font-bold">
                        <span>DEVELOPER STATS</span>
                        <span className="text-[7px] text-orange-400 font-black tracking-wide">STABLE</span>
                      </div>
                      <div className="flex justify-between">
                        <span>CORE TEMP: {biometrics.cpuTemp}°C</span>
                        <span>ENERGY: {biometrics.power}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>BRAIN STATE: {biometrics.state}</span>
                        <span className={biometrics.coffee === 'COFFEE_LOCKED' ? 'text-cyan-400' : 'text-orange-400 font-bold animate-pulse'}>
                          {biometrics.coffee}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* PYTHON DYNAMIC INTERPRETATION OVERLAY */}
              <AnimatePresence>
                {hoveredSkill === 'python' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 pointer-events-none p-3 flex flex-col justify-between font-mono bg-cyan-950/20 backdrop-blur-[1px]"
                  >
                    <div className="bg-black/90 border border-cyan-500/40 p-2.5 text-[8px] leading-relaxed text-cyan-400 flex flex-col gap-0.5">
                      <div className="font-bold border-b border-cyan-500/20 pb-1 mb-1 text-[9px] text-white flex justify-between">
                        <span>[PYTHON ENGINE]</span>
                        <span>ASYNCIO</span>
                      </div>
                      <span>&gt;&gt;&gt; import python_coder</span>
                      <span>&gt;&gt;&gt; coder.write_clean_code()</span>
                      <span>&gt;&gt;&gt; coder.drink_coffee()</span>
                      <span className="text-white font-bold">&quot;Code compilation: 100% OK&quot;</span>
                    </div>

                    <div className="text-[8px] text-cyan-300 bg-black/85 p-2 border border-cyan-500/20">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <div className="w-1.5 h-1.5 bg-cyan-400 animate-ping" />
                        <span className="font-bold uppercase tracking-wider text-[7px]">Analyzing Syntax Tree</span>
                      </div>
                      <div className="h-6 w-full flex items-end gap-1 justify-between">
                        {[40, 75, 55, 90, 30, 85, 60, 45, 95, 70].map((h, i) => (
                          <div key={i} className="bg-cyan-400/80 w-1.5" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* PYTORCH NEURAL LAYER OVERLAY */}
              <AnimatePresence>
                {hoveredSkill === 'pytorch' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 pointer-events-none p-3 flex flex-col justify-between font-mono bg-orange-950/20 backdrop-blur-[1px]"
                  >
                    <div className="bg-black/90 border border-orange-500/40 p-2.5 text-[8px] leading-relaxed text-orange-400 flex flex-col gap-0.5">
                      <div className="font-bold border-b border-orange-500/20 pb-1 mb-1 text-[9px] text-white flex justify-between">
                        <span>[NEURAL WEIGHTS]</span>
                        <span className="animate-pulse">● MODEL_RUN</span>
                      </div>
                      <span>Inputs: 224 x 224 x 3 images</span>
                      <span>Conv2d(3, 64) // Relu // MaxPool</span>
                      <span>Calculating autograd backward pass</span>
                      <span className="text-white font-bold">Tensor device: Nvidia GPU</span>
                    </div>

                    <div className="grid grid-cols-5 gap-1 bg-black/90 border border-orange-500/20 p-2 text-[7px] text-orange-300">
                      {Array.from({ length: 15 }).map((_, i) => (
                        <div key={i} className="border border-orange-500/20 p-0.5 flex flex-col items-center">
                          <span>W{i}</span>
                          <span className="text-white">{(Math.random() * 0.9).toFixed(3)}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* FASTAPI TRAFFIC OVERLAY */}
              <AnimatePresence>
                {hoveredSkill === 'fastapi' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 pointer-events-none p-3 flex flex-col justify-between font-mono bg-cyan-950/20"
                  >
                    <div className="bg-black/90 border border-cyan-500/40 p-2.5 text-[8px] leading-relaxed text-cyan-400">
                      <div className="font-bold border-b border-cyan-500/20 pb-1 mb-1 text-[9px] text-white flex justify-between">
                        <span>[HTTP TRAFFIC LOGGER]</span>
                        <span>PORT: 8000</span>
                      </div>
                      <div className="space-y-0.5">
                        <div className="flex justify-between">
                          <span>GET /api/v1/health</span>
                          <span className="text-green-400">200 OK (2ms)</span>
                        </div>
                        <div className="flex justify-between">
                          <span>POST /api/v1/generate</span>
                          <span className="text-green-400">200 OK (38ms)</span>
                        </div>
                        <div className="flex justify-between">
                          <span>GET /api/v1/metrics</span>
                          <span className="text-green-400">200 OK (1ms)</span>
                        </div>
                        <div className="flex justify-between">
                          <span>POST /api/v1/agent/task</span>
                          <span className="text-orange-400">202 ACCEPT (7ms)</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-black/85 border border-cyan-500/20 p-2.5 text-[8px] text-cyan-300">
                      <div className="flex justify-between mb-1.5">
                        <span>NETWORK THROUGHPUT</span>
                        <span>48.2 req/sec</span>
                      </div>
                      <div className="w-full bg-cyan-950/50 h-1.5 overflow-hidden relative border border-cyan-800/40">
                        <div className="absolute top-0 bottom-0 left-0 bg-cyan-400 w-2/3" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* YOLOv11 TACTICAL TARGET SCANNER */}
              <AnimatePresence>
                {hoveredSkill === 'yolo' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 pointer-events-none font-mono"
                  >
                    {/* Bounding box around the face area */}
                    <div className="absolute top-[40px] left-[50px] w-[140px] h-[150px] border border-orange-500 z-30">
                      {/* Corner target brackets */}
                      <span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-orange-500" />
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-orange-500" />
                      <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-orange-500" />
                      <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-orange-500" />
                      
                      <div className="absolute -top-4.5 left-0 bg-orange-500 text-black text-[8px] font-bold px-1.5 py-0.5 leading-none uppercase">
                        Sai Nikhil [Dev: 99.8%]
                      </div>
                    </div>

                    {/* Eye crosshair scanners */}
                    <div className="absolute top-[102px] left-[95px] w-6 h-6 border border-dashed border-cyan-400 rounded-full flex items-center justify-center z-30">
                      <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                      <span className="absolute -bottom-3.5 text-[6px] text-cyan-300 uppercase">Eye_L</span>
                    </div>

                    <div className="absolute top-[100px] left-[130px] w-6 h-6 border border-dashed border-cyan-400 rounded-full flex items-center justify-center z-30">
                      <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                      <span className="absolute -bottom-3.5 text-[6px] text-cyan-300 uppercase">Eye_R</span>
                    </div>

                    {/* Top status readouts */}
                    <div className="absolute top-2 left-2 right-2 flex justify-between text-[7px] text-orange-400 bg-black/70 p-1.5 border border-orange-500/20">
                      <span>[YOLO DETECTION FEED]</span>
                      <span>INFERENCE: 12ms</span>
                    </div>

                    {/* Bottom metrics panel */}
                    <div className="absolute bottom-2 left-2 right-2 bg-black/90 border border-orange-500/30 p-2 text-[8px] leading-normal text-orange-400">
                      <div className="flex justify-between text-white font-bold border-b border-orange-500/20 pb-1 mb-1">
                        <span>MODEL: YOLOv11-NANO</span>
                        <span>FPS: 82</span>
                      </div>
                      <div className="flex justify-between text-[7px]">
                        <span>COORDINATES: [50, 40, 190, 190]</span>
                        <span>CLASS: HUMAN</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* NEXT.JS WIREFRAME OVERLAY */}
              <AnimatePresence>
                {hoveredSkill === 'nextjs' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 pointer-events-none p-3 flex flex-col justify-between font-mono bg-cyan-950/20"
                  >
                    {/* CSS layout visualizer mockup overlay */}
                    <div className="absolute inset-0 border border-dashed border-cyan-500/40 m-2 flex flex-col justify-between p-1">
                      <div className="border border-dashed border-cyan-500/30 p-1.5 flex justify-between items-center text-[7px] text-cyan-400">
                        <span>&lt;Navbar /&gt;</span>
                        <span>h: 64px</span>
                      </div>
                      <div className="border border-cyan-500/50 border-double p-2.5 flex flex-col items-center justify-center flex-1 my-1.5 text-[8px] text-white">
                        <span>&lt;HolographicDashboard /&gt;</span>
                        <span className="text-[6px] text-cyan-400 mt-0.5">Hydration status: Complete</span>
                      </div>
                      <div className="border border-dashed border-cyan-500/30 p-1.5 flex justify-between items-center text-[7px] text-cyan-400">
                        <span>&lt;Footer /&gt;</span>
                        <span>h: 48px</span>
                      </div>
                    </div>

                    <div className="absolute bottom-2 left-2 right-2 bg-black/90 p-1.5 border border-cyan-500/30 text-[8px] text-cyan-300">
                      <div className="flex justify-between">
                        <span>VIRTUAL DOM RECONCILE</span>
                        <span className="text-green-400 font-bold">STABLE</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* DART / ROBOTICS SYSTEM READOUT OVERLAY */}
              <AnimatePresence>
                {hoveredSkill === 'dart' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 pointer-events-none p-3 flex flex-col justify-between font-mono bg-orange-950/20"
                  >
                    <div className="bg-black/90 border border-orange-500/40 p-2.5 text-[8px] leading-relaxed text-orange-400">
                      <div className="font-bold border-b border-orange-500/20 pb-1 mb-1 text-[9px] text-white flex justify-between">
                        <span>[DART VIRTUAL MACHINE]</span>
                        <span>MACOS/LINUX</span>
                      </div>
                      <div className="space-y-0.5">
                        <span>● Dev compile isolate: ACTIVE</span>
                        <span>● GC pause time: 0.8ms</span>
                        <span>● Flutter layout engine: Impeller</span>
                      </div>
                    </div>

                    <div className="bg-black/85 border border-orange-500/20 p-2.5 text-[8px] text-orange-300">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <Activity size={10} className="text-orange-500 animate-pulse" />
                        <span className="font-bold uppercase text-[7px]">CI/CD Docker Stream</span>
                      </div>
                      <div className="text-[7px] text-orange-400/90 leading-relaxed font-mono">
                        <span>$ docker build -t saara-ai/backend .</span>
                        <br />
                        <span className="text-white">--&gt; Step 4/12: Install dependencies</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>
        </div>

        {/* ── RIGHT SKILL MODULES COLUMN ── */}
        <div className="absolute right-2 top-2 bottom-2 w-[220px] flex flex-col justify-between z-20">
          {skillsData.slice(3, 6).map(node => (
            <SkillCard
              key={node.id}
              node={node}
              isHovered={hoveredSkill === node.id}
              onHoverStart={() => handleCardHoverStart(node.id)}
              onHoverEnd={handleCardHoverEnd}
            />
          ))}
        </div>

      </div>

      {/* ─────────────────── MOBILE INTERACTIVE STACK (<768px) ─────────────────── */}
      <div className="md:hidden w-full flex flex-col gap-6 items-center">
        
        {/* Simplified Diagnostic Portrait Box */}
        <div className="relative w-full max-w-[280px] aspect-[4/5] border border-cyan-500/30 bg-black/60 p-1">
          {/* Corner brackets */}
          <span className="absolute -top-0.5 -left-0.5 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
          <span className="absolute -bottom-0.5 -left-0.5 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
          <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />

          <div className="relative w-full h-full overflow-hidden bg-black">
            <Image
              src="/A_sleek,_professional_portrait_of_202606121456.jpeg"
              alt="Sai Nikhil Profile Mobile"
              fill
              sizes="280px"
              className="object-cover contrast-110 saturate-[0.85] brightness-[0.9]"
            />
            {/* Simple scan lines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.04)_1px,transparent_1px)] bg-[size:100%_8px]" />
            <div className="absolute inset-x-0 h-0.5 bg-cyan-400 shadow-[0_0_8px_#00f3ff] top-1/3 animate-scan pointer-events-none" />

            {/* Float HUD summary info */}
            <div className="absolute bottom-3 left-3 right-3 bg-black/75 border border-cyan-500/20 p-2 font-mono text-[9px] text-cyan-200">
              <div className="flex justify-between border-b border-cyan-500/10 pb-1 mb-1 text-cyan-400 font-bold">
                <span>DEV PROFILE: K. SAI NIKHIL</span>
                <span>ONLINE</span>
              </div>
              <div className="flex justify-between">
                <span>CPU TEMP: {biometrics.cpuTemp}°C</span>
                <span>SYSTEM STATUS: OK</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical list of skill blocks with clean micro-animations */}
        <div className="w-full space-y-4">
          {skillsData.map(node => (
            <div
              key={node.id}
              onTouchStart={() => playSound(950, 0.06, 'sine', 0.012)}
              className="p-4 border border-cyan-500/20 bg-[#070913]/40 relative flex flex-col gap-2.5 font-mono"
            >
              {/* Corner points */}
              <div className="absolute top-0 left-0 w-1 h-1 bg-cyan-400" />
              <div className="absolute bottom-0 right-0 w-1 h-1 bg-cyan-400" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <node.icon size={13} style={{ color: node.color }} />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">{node.name}</span>
                </div>
                <span className="text-[10px] text-cyan-400 tracking-wider font-semibold">{node.capacity}</span>
              </div>

              {/* Skill capacity progress bar */}
              <div className="h-1.5 bg-cyan-950/50 border border-cyan-900/40 relative overflow-hidden">
                <div
                  className="h-full"
                  style={{
                    width: `${node.level}%`,
                    background: `linear-gradient(90deg, ${node.color}, #ffffff)`,
                    boxShadow: `0 0 8px ${node.color}`
                  }}
                />
              </div>

              {/* Mini details list */}
              <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[9px] text-cyan-300/80 pt-1 border-t border-cyan-500/10">
                {node.telemetry.slice(0, 2).map((t, idx) => (
                  <div key={idx} className="flex justify-between">
                    <span className="text-cyan-500/70">{t.label}:</span>
                    <span className="font-bold text-white">{t.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

// Inner Component for individual skill card blocks
interface SkillCardProps {
  node: SkillNode;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

function SkillCard({ node, isHovered, onHoverStart, onHoverEnd }: SkillCardProps) {
  const Icon = node.icon;
  
  return (
    <div
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      className={`h-[115px] p-3 border font-mono text-[9px] flex flex-col justify-between transition-all duration-300 select-none cursor-pointer relative ${
        isHovered
          ? 'bg-[#0b1028]/80 border-cyan-400/90 shadow-[0_0_15px_rgba(0,243,255,0.15)] scale-[1.02]'
          : 'bg-[#070913]/50 border-cyan-500/20 hover:border-cyan-500/50'
      }`}
      style={{
        borderColor: isHovered ? node.color : undefined
      }}
    >
      {/* Corner indicators */}
      <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-cyan-400" />
      <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-cyan-400" />
      {isHovered && (
        <span
          className="absolute -inset-px border opacity-40 pointer-events-none animate-pulse"
          style={{ borderColor: node.color }}
        />
      )}

      {/* Header info */}
      <div className="flex items-center justify-between border-b border-cyan-500/10 pb-1.5">
        <div className="flex items-center gap-1.5">
          <Icon size={12} style={{ color: node.color }} />
          <span className="font-bold text-white tracking-wider text-[10px] uppercase">{node.name}</span>
        </div>
        <span className="text-orange-400 font-bold uppercase">{node.capacity}</span>
      </div>

      {/* Dynamic or static telemetry */}
      <div className="flex flex-col gap-0.5 py-1 text-cyan-200/90 leading-none">
        {node.telemetry.map((t, idx) => (
          <div key={idx} className="flex justify-between">
            <span className="text-cyan-500/60 font-semibold">{t.label} //</span>
            <span className="font-bold text-[9px] text-white">{t.value}</span>
          </div>
        ))}
      </div>

      {/* Sub-bar / Capacity Meter */}
      <div className="flex items-center gap-2 pt-1 border-t border-cyan-500/10">
        <span className="text-[7px] text-cyan-500/70 uppercase font-bold">METER //</span>
        <div className="flex-1 h-2 bg-black/60 border border-cyan-500/10 p-0.5 flex gap-0.5 overflow-hidden">
          {Array.from({ length: 10 }).map((_, i) => {
            const isActive = i < node.level / 10;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0.05 }}
                animate={{ 
                  opacity: isActive ? (isHovered ? 1 : 0.6) : 0.05,
                  scaleY: isHovered && isActive ? [1, 1.2, 1] : 1
                }}
                transition={{ delay: isHovered ? i * 0.03 : 0 }}
                className="h-full flex-1"
                style={{
                  background: isActive ? node.color : 'transparent',
                }}
              />
            );
          })}
        </div>
        <span className="font-bold text-white text-[8px]">{node.level}%</span>
      </div>

    </div>
  );
}
