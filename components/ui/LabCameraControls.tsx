'use client';

import React, { useState } from 'react';
import { hapticAudio } from '@/lib/audio';
import { Camera, Eye } from 'lucide-react';

const views = [
  { id: 'overview', label: '01 ROOM' },
  { id: 'laptop', label: '02 LAPTOP' },
  { id: 'bench', label: '03 BENCH' },
  { id: 'skills', label: '04 MATRIX' },
  { id: 'comms', label: '05 COMMS' },
];

export function LabCameraControls() {
  const [activeView, setActiveView] = useState('overview');

  const handleSelectView = (viewId: string) => {
    setActiveView(viewId);
    hapticAudio.playTactileClick();
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('set-lab-camera-view', { detail: { view: viewId } })
      );
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-1.5 p-1.5 rounded-full border border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-lg select-none font-mono text-[10px]">
      <div className="flex items-center gap-1 px-2 text-zinc-500 dark:text-zinc-400">
        <Camera size={12} className="text-[#D71920]" />
        <span className="font-semibold tracking-wider">CAM:</span>
      </div>

      <div className="flex items-center gap-1">
        {views.map((v) => {
          const isActive = activeView === v.id;
          return (
            <button
              key={v.id}
              onClick={() => handleSelectView(v.id)}
              className={`px-2.5 py-1 rounded-full transition-all active:scale-[0.95] cursor-pointer ${
                isActive
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-bold shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900'
              }`}
            >
              {v.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
