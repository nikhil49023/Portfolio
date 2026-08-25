'use client';

import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Don't show custom cursor on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let animId: number;
    let isHovered = false;
    let ringSize = 36;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px) ${isHovered ? 'scale(2.5)' : 'scale(1)'}`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        const offset = ringSize / 2;
        ringRef.current.style.transform = `translate(${ringX - offset}px, ${ringY - offset}px)`;
      }
      animId = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      isHovered = true;
      ringSize = 56;
      if (dotRef.current) {
        dotRef.current.style.backgroundColor = 'var(--brand-secondary)';
      }
      if (ringRef.current) {
        ringRef.current.style.width = '56px';
        ringRef.current.style.height = '56px';
        ringRef.current.style.borderColor = 'var(--brand-primary)';
      }
    };

    const onLeave = () => {
      isHovered = false;
      ringSize = 36;
      if (dotRef.current) {
        dotRef.current.style.backgroundColor = 'var(--brand-primary)';
      }
      if (ringRef.current) {
        ringRef.current.style.width = '36px';
        ringRef.current.style.height = '36px';
        ringRef.current.style.borderColor = 'var(--brand-primary)';
      }
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    
    // Set up hover event listeners on all links and interactive elements
    const setupInteractions = () => {
      const interactables = document.querySelectorAll('a, button, [data-cursor="expand"]');
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    setupInteractions();
    animId = requestAnimationFrame(animate);

    // Re-bind interactions when DOM changes (e.g. page navigation or loading states)
    const observer = new MutationObserver(setupInteractions);
    observer.observe(document.body, { childList: true, subtree: true });

    if (dotRef.current) dotRef.current.style.display = 'block';
    if (ringRef.current) ringRef.current.style.display = 'block';

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor" style={{ display: 'none' }} />
      <div ref={ringRef} className="custom-cursor-ring" style={{ display: 'none' }} />
    </>
  );
}
