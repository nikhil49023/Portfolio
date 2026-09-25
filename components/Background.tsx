'use client';

import React from 'react';

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#fbfcfd]">
      {/* ── Base Milky Mist Radiant Layers ── */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 40%, #f1f5f9 100%)',
        }}
      />

      {/* ── Layered Drifting Milky Mist Orbs (Atmospheric Cloud Billows) ── */}
      {/* Upper-Left Cerulean Mist Billow */}
      <div
        className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full opacity-60 blur-[130px] animate-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(224,242,254,0.7) 0%, rgba(241,245,249,0.4) 60%, transparent 80%)',
          animationDuration: '14s',
        }}
      />

      {/* Upper-Right Pearl Alabaster Mist Billow */}
      <div
        className="absolute -top-40 right-[-10%] w-[800px] h-[800px] rounded-full opacity-70 blur-[140px]"
        style={{
          background: 'radial-gradient(circle, rgba(248,250,252,0.9) 0%, rgba(226,232,240,0.5) 50%, transparent 80%)',
        }}
      />

      {/* Center Ambient Vermilion Mist Whisper */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[550px] rounded-full opacity-35 blur-[150px]"
        style={{
          background: 'radial-gradient(circle, rgba(215,25,32,0.06) 0%, rgba(254,226,226,0.15) 50%, transparent 75%)',
        }}
      />

      {/* Bottom Rising Fog Reservoir */}
      <div
        className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[120vw] h-[650px] rounded-[100%] opacity-80 blur-[120px]"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(241,245,249,0.95) 0%, rgba(226,232,240,0.6) 40%, transparent 80%)',
        }}
      />

      {/* ── Silky Noise Texture Overlay ── */}
      <div 
        className="absolute inset-0 opacity-[0.025] mix-blend-multiply"
        style={{
          backgroundImage: `radial-gradient(rgba(15,23,42,0.8) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />

      {/* ── Subtle Architectural Hairline Grid ── */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(15,23,42,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.6) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* ── Viewport Technical Alignment HUD Markers ── */}
      <div className="absolute top-5 left-6 font-mono text-[9px] text-slate-400 opacity-40 select-none tracking-widest hidden lg:block">
        + [MIST_LAYER // ATMOSPHERIC_LIGHT]
      </div>
      <div className="absolute top-5 right-6 font-mono text-[9px] text-slate-400 opacity-40 select-none tracking-widest hidden lg:block">
        + [AGENTIC_FLOW // SILICON]
      </div>
    </div>
  );
}
