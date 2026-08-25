'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Radar, Radio, Shield, Cpu, Activity, Camera, Eye, Zap } from 'lucide-react';

const CAMERAS = [
  { id: 'cam-01', name: 'CAM_01 // ENTRANCE_PLAZA', type: '4K IP (ONVIF)', status: 'LIVE', fps: '30 FPS' },
  { id: 'cam-02', name: 'CAM_02 // CENTRAL_CONCOURSE', type: 'RT-DETR-L Stream', status: 'INFERENCE', fps: '60 FPS' },
  { id: 'cam-03', name: 'CAM_03 // PERIMETER_ESP32', type: 'FOMO v3 INT8', status: 'EDGE_NODE', fps: '42.4 FPS' },
  { id: 'cam-04', name: 'CAM_04 // ACTIVE_HARVESTER', type: 'Grey-Zone Pool', status: 'SAMPLING', fps: '15 FPS' },
];

export function VaayuSwarmVisualization({ detailed = false }: { detailed?: boolean }) {
  const [selectedCam, setSelectedCam] = useState('cam-02');
  const [keypointTick, setKeypointTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKeypointTick((prev) => (prev + 1) % 100);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative h-full w-full overflow-hidden bg-slate-950 text-slate-100 font-mono select-none ${detailed ? 'min-h-[480px]' : 'min-h-[360px]'}`}>
      
      {/* Background Matrix Grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(16,185,129,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.15) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Top Telemetry Header */}
      <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between border-b border-emerald-500/20 bg-slate-950/80 px-4 py-2.5 backdrop-blur-md">
        <div className="flex items-center gap-2 text-emerald-400">
          <Radar size={15} className="animate-spin text-emerald-400" style={{ animationDuration: '8s' }} />
          <span className="text-xs font-bold tracking-widest uppercase">VAAYU SWARM // TRI-MODAL SURVEILLANCE</span>
        </div>
        <div className="flex items-center gap-4 text-[10px]">
          <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-400">
            <Cpu size={12} className="text-emerald-400" />
            <span>RTX 3050 TensorRT: 11.8ms</span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-emerald-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>MAKER'S CONCLAVE 2.0</span>
          </span>
        </div>
      </div>

      {/* Main Viewport */}
      <div className="absolute inset-0 pt-12 pb-14 px-4 sm:px-6 flex flex-col lg:flex-row gap-4">
        
        {/* Main Feed Viewport */}
        <div className="relative flex-1 rounded-none border border-emerald-500/30 bg-slate-900/60 overflow-hidden flex flex-col justify-between p-4">
          
          {/* Feed Header */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2 bg-slate-950/80 px-2.5 py-1 border border-emerald-500/20 text-[10px]">
              <Camera size={12} className="text-emerald-400" />
              <span className="text-emerald-300 font-bold">{CAMERAS.find(c => c.id === selectedCam)?.name}</span>
            </div>
            <div className="text-[9px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 border border-emerald-500/30 font-bold">
              YOLOv8-POSE // 17 COCO SKELETON POINTS
            </div>
          </div>

          {/* Center Simulated Pose & Detection Overlay */}
          <div className="relative w-full h-[220px] sm:h-[260px] flex items-center justify-center">
            
            {/* Person Detection Bounding Box 1 */}
            <motion.div
              animate={{
                x: [0, 8, -4, 0],
                y: [0, -3, 2, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-[20%] sm:left-[28%] top-[15%] w-[130px] sm:w-[150px] h-[190px] border-2 border-emerald-400/80 bg-emerald-500/5 p-2 flex flex-col justify-between"
            >
              <div className="text-[9px] bg-emerald-500 text-slate-950 px-1 font-bold inline-block self-start">
                PERSON #01 · 97.4%
              </div>

              {/* 17-Keypoint Skeleton Lines & Nodes */}
              <div className="relative w-full h-full">
                {/* Head / Nose / Eyes */}
                <div className="absolute left-[50%] top-[12%] -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-emerald-300 border border-emerald-500 animate-pulse" />
                {/* Shoulders */}
                <div className="absolute left-[32%] top-[25%] w-2 h-2 rounded-full bg-emerald-400" />
                <div className="absolute right-[32%] top-[25%] w-2 h-2 rounded-full bg-emerald-400" />
                <div className="absolute left-[32%] right-[32%] top-[27%] h-0.5 bg-emerald-400/80" />
                {/* Torso & Spine */}
                <div className="absolute left-[50%] top-[25%] bottom-[45%] w-0.5 bg-emerald-400/80" />
                {/* Hips */}
                <div className="absolute left-[38%] top-[55%] w-2 h-2 rounded-full bg-emerald-400" />
                <div className="absolute right-[38%] top-[55%] w-2 h-2 rounded-full bg-emerald-400" />
                <div className="absolute left-[38%] right-[38%] top-[57%] h-0.5 bg-emerald-400/80" />
                {/* Legs & Knees */}
                <div className="absolute left-[34%] top-[75%] w-2 h-2 rounded-full bg-emerald-400" />
                <div className="absolute right-[34%] top-[75%] w-2 h-2 rounded-full bg-emerald-400" />
                {/* Feet */}
                <div className="absolute left-[30%] bottom-[4%] w-2 h-2 rounded-full bg-emerald-300" />
                <div className="absolute right-[30%] bottom-[4%] w-2 h-2 rounded-full bg-emerald-300" />
              </div>

              <div className="text-[8px] text-emerald-400/90 font-mono">
                POSE_STATE: WALKING (0.91)
              </div>
            </motion.div>

            {/* Edge Micro-Target (FOMO v3) */}
            <motion.div
              animate={{
                x: [0, -6, 4, 0],
                y: [0, 4, -2, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute right-[18%] sm:right-[26%] top-[28%] w-[100px] sm:w-[120px] h-[150px] border border-cyan-400/70 bg-cyan-500/5 p-1.5 flex flex-col justify-between"
            >
              <div className="text-[8px] bg-cyan-500 text-slate-950 px-1 font-bold inline-block self-start">
                ESP32-S3 FOMO // 94.2%
              </div>
              <div className="flex items-center justify-center h-full">
                <div className="w-3 h-3 rounded-full border border-cyan-400 animate-ping" />
              </div>
              <div className="text-[8px] text-cyan-300">
                EDGE LATENCY: 23ms
              </div>
            </motion.div>

          </div>

          {/* Feed Telemetry Footer */}
          <div className="flex items-center justify-between text-[10px] text-slate-400 bg-slate-950/80 p-2 border border-emerald-500/20 z-10">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <Zap size={11} />
              <span>MediaMTX RTSP: 8554 → HLS: 8888</span>
            </span>
            <span className="font-bold text-slate-300">
              ACTIVE LEARNING HARVESTER: 1,480 FRAMES POOLED
            </span>
          </div>

        </div>

        {/* Multi-Camera Layout Switcher */}
        <div className="w-full lg:w-64 flex flex-row lg:flex-col gap-2 overflow-x-auto">
          {CAMERAS.map((cam) => (
            <button
              key={cam.id}
              onClick={() => setSelectedCam(cam.id)}
              className={`p-2.5 text-left border transition-all cursor-pointer flex-1 lg:flex-none ${
                selectedCam === cam.id
                  ? 'border-emerald-400 bg-emerald-500/10 text-emerald-300'
                  : 'border-slate-800 bg-slate-900/40 text-slate-400 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-[9px] font-bold">
                <span>{cam.id.toUpperCase()}</span>
                <span className="text-emerald-400">{cam.fps}</span>
              </div>
              <div className="text-[11px] font-bold text-slate-200 truncate mt-0.5">
                {cam.name}
              </div>
              <div className="text-[9px] text-slate-500 mt-0.5 flex items-center justify-between">
                <span>{cam.type}</span>
                <span className="text-emerald-500 font-bold">{cam.status}</span>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* Bottom Status Bar */}
      <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between border-t border-emerald-500/20 bg-slate-950/90 px-4 py-2 text-[9px] text-slate-400">
        <div>FASTAPI + DOCKER COMPOSE // 5 SERVICES HEALTHY</div>
        <div className="text-emerald-400 font-bold">INDIAN INDIGENOUS SURVEILLANCE STACK</div>
      </div>

    </div>
  );
}
