'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Compass, Radio, GitBranch, Cpu, Activity, Navigation, Globe, Shield, Terminal } from 'lucide-react';

const SUBSYSTEMS = [
  { id: 'sub-a', name: 'Subsystem A: GNC & PX4', role: 'Autonomous Navigation & Offboard Control', tech: 'ROS 2 Jazzy · PX4 · Gazebo 8', status: 'ACTIVE', color: '#38bdf8' },
  { id: 'sub-b', name: 'Subsystem B: Comms Mesh', role: 'Swarm Mesh & Deep JSCC Neural Channel', tech: 'Deep JSCC · WebRTC · UDP', status: 'SYNCHRONIZED', color: '#10b981' },
  { id: 'sub-c', name: 'Subsystem C: AI Perception', role: 'Tri-Modal Disaster Vision & TensorRT', tech: 'OpenCV · TensorRT · YOLOv11', status: 'INFERENCE', color: '#f59e0b' },
  { id: 'sub-d', name: 'Subsystem D: 3D GIS GCS', role: 'Ground Control Station & Telemetry Map', tech: 'React · TypeScript · Mapbox 3D', status: 'STREAMING', color: '#a855f7' },
  { id: 'sub-e', name: 'Subsystem E: Verification', role: 'Continuous Integration & Gate G1-G6', tech: 'Python Master Suite · pytest', status: 'VERIFIED', color: '#ec4899' },
  { id: 'sub-f', name: 'Subsystem F: Tactical CONOPS', role: 'NDMA Field Rescue & Swarm Strategy', tech: 'NDMA Protocols · GIS Waypoints', status: 'STANDBY', color: '#6366f1' },
];

export function SutraSwarmVisualization({ detailed = false }: { detailed?: boolean }) {
  const [activeSub, setActiveSub] = useState('sub-a');
  const [alt, setAlt] = useState(48.2);

  useEffect(() => {
    const interval = setInterval(() => {
      setAlt((prev) => +(48.0 + Math.sin(Date.now() / 1000) * 1.5).toFixed(2));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative h-full w-full overflow-hidden bg-slate-950 text-slate-100 font-mono select-none ${detailed ? 'min-h-[480px]' : 'min-h-[360px]'}`}>
      
      {/* Background Orbital Grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(56,189,248,0.15) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Top Header */}
      <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between border-b border-sky-500/20 bg-slate-950/80 px-4 py-2.5 backdrop-blur-md">
        <div className="flex items-center gap-2 text-sky-400">
          <Compass size={15} className="animate-spin text-sky-400" style={{ animationDuration: '12s' }} />
          <span className="text-xs font-bold tracking-widest uppercase">PROJECT SUTRA // SPACE-AIR-GROUND SWARM GCS</span>
        </div>
        <div className="flex items-center gap-4 text-[10px]">
          <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-400">
            <Radio size={12} className="text-sky-400" />
            <span>ROS 2 Jazzy Monorepo</span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-emerald-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>GATES G1–G6 PASSED</span>
          </span>
        </div>
      </div>

      {/* Main Viewport */}
      <div className="absolute inset-0 pt-12 pb-14 px-4 sm:px-6 flex flex-col lg:flex-row gap-4">
        
        {/* Swarm Flight Telemetry & Radar Viewport */}
        <div className="relative flex-1 border border-sky-500/30 bg-slate-900/60 p-4 flex flex-col justify-between overflow-hidden">
          
          {/* Viewport Top Bar */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2 bg-slate-950/80 px-2.5 py-1 border border-sky-500/20 text-[10px]">
              <Navigation size={12} className="text-sky-400" />
              <span className="text-sky-300 font-bold">SWARM FORMATION: V-SHAPED (3 DRONES)</span>
            </div>
            <div className="text-[9px] bg-sky-500/10 text-sky-400 px-2 py-0.5 border border-sky-500/30 font-bold">
              PX4 OFFBOARD // ALT: {alt}m
            </div>
          </div>

          {/* Center Radar / Swarm Coordinate Map */}
          <div className="relative w-full h-[220px] sm:h-[260px] flex items-center justify-center">
            
            {/* Concentric Radar Rings */}
            <div className="absolute w-[220px] h-[220px] rounded-full border border-sky-500/20" />
            <div className="absolute w-[150px] h-[150px] rounded-full border border-sky-500/30" />
            <div className="absolute w-[80px] h-[80px] rounded-full border border-sky-500/40" />
            <div className="absolute inset-x-0 top-1/2 h-px bg-sky-500/20" />
            <div className="absolute inset-y-0 left-1/2 w-px bg-sky-500/20" />

            {/* Drone Node 01 (Lead) */}
            <motion.div
              animate={{
                x: [0, 4, -4, 0],
                y: [0, -3, 3, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
            >
              <div className="w-3.5 h-3.5 rounded-full bg-sky-400 border-2 border-slate-950 shadow-[0_0_12px_#38bdf8] flex items-center justify-center text-[7px] font-bold text-slate-950">
                01
              </div>
              <span className="text-[8px] text-sky-300 font-bold mt-1 bg-slate-950/80 px-1 border border-sky-500/30">LEAD_UAV</span>
            </motion.div>

            {/* Drone Node 02 (Wing Left) */}
            <motion.div
              animate={{
                x: [0, -5, 3, 0],
                y: [0, 2, -2, 0],
              }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-[30%] top-[60%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
            >
              <div className="w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-950 shadow-[0_0_10px_#10b981] flex items-center justify-center text-[7px] font-bold text-slate-950">
                02
              </div>
              <span className="text-[8px] text-emerald-300 font-bold mt-1 bg-slate-950/80 px-1 border border-emerald-500/30">WING_L</span>
            </motion.div>

            {/* Drone Node 03 (Wing Right) */}
            <motion.div
              animate={{
                x: [0, 5, -3, 0],
                y: [0, -2, 2, 0],
              }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute right-[30%] top-[60%] translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
            >
              <div className="w-3 h-3 rounded-full bg-amber-400 border-2 border-slate-950 shadow-[0_0_10px_#f59e0b] flex items-center justify-center text-[7px] font-bold text-slate-950">
                03
              </div>
              <span className="text-[8px] text-amber-300 font-bold mt-1 bg-slate-950/80 px-1 border border-amber-500/30">WING_R</span>
            </motion.div>

            {/* Deep JSCC Neural Mesh Interconnect Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
              <line x1="50%" y1="30%" x2="30%" y2="60%" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="50%" y1="30%" x2="70%" y2="60%" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="30%" y1="60%" x2="70%" y2="60%" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
            </svg>

          </div>

          {/* Viewport Bottom Status */}
          <div className="flex items-center justify-between text-[10px] text-slate-400 bg-slate-950/80 p-2 border border-sky-500/20 z-10">
            <span className="flex items-center gap-1.5 text-sky-400">
              <Terminal size={11} />
              <span>/sutra/swarm/pose [100 Hz]</span>
            </span>
            <span className="font-bold text-slate-300">
              DEEP JSCC SNR: +18.4 dB // LOSS: 0.002%
            </span>
          </div>

        </div>

        {/* 6-Subsystem Monorepo Telemetry List */}
        <div className="w-full lg:w-72 flex flex-row lg:flex-col gap-1.5 overflow-x-auto">
          {SUBSYSTEMS.map((sub) => (
            <button
              key={sub.id}
              onClick={() => setActiveSub(sub.id)}
              className={`p-2.5 text-left border transition-all cursor-pointer flex-1 lg:flex-none ${
                activeSub === sub.id
                  ? 'border-sky-400 bg-sky-500/10 text-sky-300'
                  : 'border-slate-800 bg-slate-900/40 text-slate-400 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-[9px] font-bold">
                <span style={{ color: sub.color }}>{sub.id.toUpperCase()}</span>
                <span className="text-emerald-400 font-bold">{sub.status}</span>
              </div>
              <div className="text-[10px] font-bold text-slate-200 truncate mt-0.5">
                {sub.name}
              </div>
              <div className="text-[9px] text-slate-500 mt-0.5 line-clamp-1">
                {sub.tech}
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* Bottom Telemetry Bar */}
      <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between border-t border-sky-500/20 bg-slate-950/90 px-4 py-2 text-[9px] text-slate-400">
        <div>COLCON BUILD MONOREPO // 6 COOPERATIVE ROS 2 SUBSYSTEMS</div>
        <div className="text-sky-400 font-bold">NDMA DISASTER RESPONSE PROTOCOL</div>
      </div>

    </div>
  );
}
