'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {
  IconHome,
  IconTerminal2,
  IconNewSection,
  IconAward,
  IconMail,
  IconBrandGithub,
  IconFileText,
  IconPrinter,
  IconArrowLeft,
  IconCpu,
} from '@tabler/icons-react';
import { FloatingDock, FloatingDockItem } from '@/components/ui/floating-dock';

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>('about');

  const isHome = pathname === '/';
  const isResume = pathname.startsWith('/resume');
  const isProjectDetail = pathname.startsWith('/projects/');

  useEffect(() => {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }, []);

  // Set up ScrollSpy IntersectionObserver for home page sections
  useEffect(() => {
    if (!isHome) return;

    const sectionIds = ['about', 'projects', 'proving-grounds', 'skills', 'certifications', 'contact'];
    const observers: IntersectionObserver[] = [];

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const obs = new IntersectionObserver(handleIntersect, {
          rootMargin: '-20% 0px -60% 0px',
          threshold: 0,
        });
        obs.observe(el);
        observers.push(obs);
      }
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [isHome]);

  const handlePrint = () => {
    if (typeof window !== 'undefined') window.print();
  };

  // Build unified dock items based on current page
  const dockItems: FloatingDockItem[] = [
    // 1. Navigation / Back
    isProjectDetail
      ? {
          title: 'Back to Systems',
          icon: <IconArrowLeft className="h-full w-full" />,
          href: '/#projects',
        }
      : isResume
      ? {
          title: 'Back to Portfolio',
          icon: <IconArrowLeft className="h-full w-full" />,
          href: '/',
        }
      : {
          title: 'About / Profile',
          icon: <IconHome className="h-full w-full" />,
          href: '/#about',
          isActive: isHome && activeSection === 'about',
        },

    // 2. Systems
    {
      title: 'Production Systems',
      icon: <IconTerminal2 className="h-full w-full" />,
      href: isHome ? '#projects' : '/#projects',
      isActive: isHome && activeSection === 'projects',
    },

    // 2b. Proving Grounds
    {
      title: 'Proving Grounds',
      icon: <IconCpu className="h-full w-full" />,
      href: isHome ? '#proving-grounds' : '/#proving-grounds',
      isActive: isHome && activeSection === 'proving-grounds',
    },

    // 3. Skills Matrix
    {
      title: 'Dual Skills Matrix',
      icon: <IconNewSection className="h-full w-full" />,
      href: isHome ? '#skills' : '/#skills',
      isActive: isHome && activeSection === 'skills',
    },

    // 4. Credentials
    {
      title: 'Credentials & Honours',
      icon: <IconAward className="h-full w-full" />,
      href: isHome ? '#certifications' : '/#certifications',
      isActive: isHome && activeSection === 'certifications',
    },

    // 5. Contact
    {
      title: 'Direct Dispatch',
      icon: <IconMail className="h-full w-full" />,
      href: isHome ? '#contact' : '/#contact',
      isActive: isHome && activeSection === 'contact',
    },

    // 7. Context Action (Print ATS on resume, otherwise link to resume)
    isResume
      ? {
          title: 'Print ATS Resume',
          icon: <IconPrinter className="h-full w-full text-emerald-400" />,
          onClick: handlePrint,
        }
      : {
          title: 'Verified Resume',
          icon: <IconFileText className="h-full w-full" />,
          href: '/resume',
        },

    // 8. GitHub Registry
    {
      title: 'GitHub Registry',
      icon: <IconBrandGithub className="h-full w-full" />,
      href: 'https://github.com/nikhil49023',
      target: '_blank',
    },
  ];

  return (
    <>
      {/* ── UNIFIED BOTTOM FLOATING MAGNIFICATION DOCK ── */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 pointer-events-none no-print">
        <div className="pointer-events-auto">
          <FloatingDock items={dockItems} mobileClassName="translate-y-0" />
        </div>
      </div>
    </>
  );
}
