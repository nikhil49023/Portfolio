'use client';

import { motion } from 'framer-motion';

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div className="absolute inset-0 bg-[#0c0c0c]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(225,29,72,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(225,29,72,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      
      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, rgba(225,29,72,0.3), transparent 70%)', filter: 'blur(80px)' }} />
      
      {/* Bottom corner glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full opacity-15" style={{ background: 'radial-gradient(circle, rgba(225,29,72,0.4), transparent 60%)', filter: 'blur(60px)' }} />
    </div>
  );
}