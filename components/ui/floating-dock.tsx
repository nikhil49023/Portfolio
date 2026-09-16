"use client";

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { hapticAudio } from "@/lib/audio";

export interface FloatingDockItem {
  title: string;
  icon: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  target?: string;
  isActive?: boolean;
}

export interface FloatingDockProps {
  items: FloatingDockItem[];
  desktopClassName?: string;
  mobileClassName?: string;
  className?: string;
}

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: FloatingDockProps) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: FloatingDockItem[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute bottom-full mb-3 inset-x-0 flex flex-col items-center gap-2"
          >
            {items.map((item, idx) => {
              const content = (
                <div className="h-10 w-10 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-center shadow-lg text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] hover:border-[var(--brand-primary)] transition-colors">
                  <div className="h-4 w-4 flex items-center justify-center">{item.icon}</div>
                </div>
              );

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    transition: { delay: idx * 0.04 },
                  }}
                  transition={{ delay: (items.length - 1 - idx) * 0.04 }}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      target={item.target}
                      rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                      onClick={() => {
                        hapticAudio.playTactileClick();
                        setOpen(false);
                      }}
                      aria-label={item.title}
                    >
                      {content}
                    </Link>
                  ) : (
                    <button
                      onClick={(e) => {
                        hapticAudio.playTactileClick();
                        item.onClick?.(e);
                        setOpen(false);
                      }}
                      className="cursor-pointer bg-transparent border-0 p-0"
                      aria-label={item.title}
                    >
                      {content}
                    </button>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="h-11 w-11 rounded-full bg-[var(--bg-surface)]/95 backdrop-blur-md border border-[var(--border-subtle)] flex items-center justify-center shadow-xl text-[var(--ink-primary)] hover:border-[var(--brand-primary)] transition-colors cursor-pointer"
        aria-label="Toggle floating navigation"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-[var(--ink-primary)]" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: FloatingDockItem[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex h-16 gap-3 items-end rounded-2xl bg-[var(--bg-surface)]/85 backdrop-blur-md border border-[var(--border-subtle)] px-4 pb-3 shadow-2xl",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  onClick,
  target,
  isActive,
}: FloatingDockItem & {
  mouseX: MotionValue;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 76, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 76, 40]);

  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 38, 20]);
  const heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 38, 20]
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const body = (
    <motion.div
      ref={ref}
      style={{ width, height }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className={cn(
        "aspect-square rounded-full bg-[var(--bg-void)] border flex items-center justify-center relative transition-colors shadow-sm cursor-pointer",
        isActive
          ? "border-[var(--brand-primary)] shadow-[0_0_12px_color-mix(in_oklch,var(--brand-primary)_30%,transparent)]"
          : "border-[var(--border-subtle)] hover:border-[var(--brand-primary)]"
      )}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 2, x: "-50%" }}
            className="px-2.5 py-0.5 whitespace-pre rounded-md bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--ink-primary)] absolute left-1/2 -top-9 w-fit text-[11px] font-mono font-bold shadow-lg pointer-events-none z-50 uppercase tracking-wider"
          >
            {title}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        style={{ width: widthIcon, height: heightIcon }}
        className="flex items-center justify-center text-[var(--ink-secondary)] hover:text-[var(--ink-primary)]"
      >
        {icon}
      </motion.div>
      {isActive && (
        <span className="absolute bottom-1 w-1 h-1 rounded-full bg-[var(--brand-primary)]" />
      )}
    </motion.div>
  );

  const handleClick = (e: React.MouseEvent) => {
    hapticAudio.playTactileClick();
    if (onClick) {
      onClick(e);
    }
  };

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        onClick={handleClick}
        aria-label={title}
      >
        {body}
      </Link>
    );
  }

  return (
    <button onClick={handleClick} aria-label={title} className="bg-transparent border-0 p-0 cursor-pointer">
      {body}
    </button>
  );
}
