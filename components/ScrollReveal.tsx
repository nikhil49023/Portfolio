'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Configuration for Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            // Unobserve once revealed to keep it active
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08, // trigger when 8% is visible
        rootMargin: '0px 0px -60px 0px', // slight negative bottom margin to delay trigger until slightly inside viewport
      }
    );

    const updateObservers = () => {
      const targets = document.querySelectorAll('.reveal-on-scroll');
      targets.forEach((target) => {
        if (!target.classList.contains('is-revealed')) {
          observer.observe(target);
        }
      });
    };

    updateObservers();

    // Set up MutationObserver to re-bind when components load/change dynamically
    const mutationObserver = new MutationObserver(updateObservers);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
