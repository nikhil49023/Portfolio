'use client';

import { motion } from 'framer-motion';
import { Radar, LocateFixed } from 'lucide-react';

type DetectionBox = {
  id: string;
  label: string;
  confidence: string;
  left: string;
  top: string;
  width: string;
  height: string;
};

const DETECTIONS: DetectionBox[] = [
  { id: 'person', label: 'person', confidence: '0.93', left: '12%', top: '30%', width: '14%', height: '38%' },
  { id: 'car', label: 'car', confidence: '0.96', left: '40%', top: '42%', width: '20%', height: '22%' },
  { id: 'truck', label: 'truck', confidence: '0.88', left: '66%', top: '38%', width: '24%', height: '29%' },
  { id: 'bike', label: 'bicycle', confidence: '0.84', left: '30%', top: '68%', width: '15%', height: '18%' },
];

export function AerialEyeVisualization({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className={`relative h-full w-full overflow-hidden ${detailed ? 'min-h-[420px]' : ''}`}>
      <div className="absolute inset-0 bg-[linear-gradient(145deg,#0b1220_0%,#18263d_45%,#1f2d62_100%)]" />

      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(rgba(125,211,252,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,0.22) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between border-b border-cyan-200/20 bg-slate-950/40 px-4 py-2.5 backdrop-blur-sm">
        <div className="flex items-center gap-2 text-cyan-200">
          <Radar size={14} />
          <span className="text-[11px] font-semibold tracking-[0.14em] uppercase">AerialEye Vision Feed</span>
        </div>
        <div className="flex items-center gap-1.5 text-emerald-300 text-[11px] font-semibold">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Live Detection
        </div>
      </div>

      <div className="absolute inset-0 pt-12 pb-14 px-4 sm:px-6">
        <div className="relative h-full w-full overflow-hidden rounded-2xl border border-cyan-200/25 bg-[linear-gradient(165deg,rgba(14,116,144,0.2),rgba(30,64,175,0.16),rgba(12,74,110,0.22))] shadow-[0_20px_50px_rgba(2,6,23,0.48)]">
          <div className="absolute left-[8%] top-[22%] h-[18%] w-[70%] rotate-[9deg] rounded-[20px] bg-white/6" />
          <div className="absolute right-[10%] top-[38%] h-[16%] w-[58%] rotate-[-12deg] rounded-[18px] bg-white/5" />
          <div className="absolute left-[22%] bottom-[18%] h-[14%] w-[62%] rotate-[7deg] rounded-[16px] bg-white/5" />

          {DETECTIONS.map((box, index) => (
            <motion.div
              key={box.id}
              className="absolute rounded-lg border-2 border-amber-300/90 bg-amber-200/5"
              style={{
                left: box.left,
                top: box.top,
                width: box.width,
                height: box.height,
                boxShadow: '0 0 0 1px rgba(253,224,71,0.14), inset 0 0 24px rgba(253,224,71,0.08)',
              }}
              animate={{ opacity: [0.75, 1, 0.75] }}
              transition={{ duration: 2.4, delay: index * 0.25, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="absolute -top-7 left-0 rounded-md bg-amber-300/95 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-slate-900">
                {box.label} {box.confidence}
              </div>
            </motion.div>
          ))}

          <motion.div
            className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
            animate={{ top: ['14%', '86%', '14%'] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between border-t border-cyan-200/20 bg-slate-950/45 px-4 py-2.5 backdrop-blur-sm">
        <div className="flex items-center gap-2 text-[11px] text-cyan-100/90">
          <LocateFixed size={13} />
          <span className="font-semibold">5-class aerial object detector</span>
        </div>
        <span className="text-[11px] font-semibold text-orange-200">YOLOv8 · ONNX · PyTorch</span>
      </div>
    </div>
  );
}
