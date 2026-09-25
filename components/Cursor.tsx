'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Use GSAP quickTo for zero-jitter 60fps tracking
    const xToDot = gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power2.out' });
    const yToDot = gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power2.out' });
    const xToRing = gsap.quickTo(ring, 'x', { duration: 0.28, ease: 'power3.out' });
    const yToRing = gsap.quickTo(ring, 'y', { duration: 0.28, ease: 'power3.out' });

    let isHovered = false;

    const onMove = (e: MouseEvent) => {
      xToDot(e.clientX - 4);
      yToDot(e.clientY - 4);
      xToRing(e.clientX - (isHovered ? 28 : 18));
      yToRing(e.clientY - (isHovered ? 28 : 18));
    };

    const onEnter = () => {
      isHovered = true;
      gsap.to(dot, { scale: 2.2, duration: 0.2, ease: 'power2.out' });
      gsap.to(ring, {
        width: 56,
        height: 56,
        borderColor: '#D71920',
        backgroundColor: 'rgba(215, 25, 32, 0.06)',
        duration: 0.25,
        ease: 'power2.out'
      });
    };

    const onLeave = () => {
      isHovered = false;
      gsap.to(dot, { scale: 1, duration: 0.2, ease: 'power2.out' });
      gsap.to(ring, {
        width: 36,
        height: 36,
        borderColor: 'rgba(15, 23, 42, 0.25)',
        backgroundColor: 'transparent',
        duration: 0.25,
        ease: 'power2.out'
      });
    };

    window.addEventListener('mousemove', onMove, { passive: true });

    const setupInteractions = () => {
      const interactables = document.querySelectorAll('a, button, [data-cursor="expand"], input, select');
      interactables.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    setupInteractions();
    const observer = new MutationObserver(setupInteractions);
    observer.observe(document.body, { childList: true, subtree: true });

    dot.style.display = 'block';
    ring.style.display = 'block';

    return () => {
      window.removeEventListener('mousemove', onMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor pointer-events-none fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-[#D71920] shadow-[0_0_8px_rgba(215,25,32,0.6)]"
        style={{ display: 'none' }}
      />
      <div
        ref={ringRef}
        className="custom-cursor-ring pointer-events-none fixed top-0 left-0 z-[9998] w-9 h-9 rounded-full border border-slate-900/25 transition-[border-color,background-color] duration-200"
        style={{ display: 'none' }}
      />
    </>
  );
}
