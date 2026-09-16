'use client';

import React from 'react';
import Link from 'next/link';
import { hapticAudio } from '@/lib/audio';

interface MachinedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  icon?: React.ReactNode;
  ledIndicator?: boolean;
  ledColor?: 'red' | 'green' | 'amber';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const MachinedButton: React.FC<MachinedButtonProps> = ({
  href,
  variant = 'primary',
  icon,
  ledIndicator = false,
  ledColor = 'red',
  size = 'md',
  className = '',
  children,
  onClick,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    hapticAudio.playTactileClick();
    if (onClick) {
      (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e);
    }
  };

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs gap-2',
    md: 'px-5 py-2.5 text-xs gap-3 h-11',
    lg: 'px-6 py-3 text-sm gap-3.5 h-12',
  }[size];

  const variantStyles = {
    primary:
      'bg-[var(--ink-primary)] text-[var(--bg-void)] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] hover:bg-[#D71920] hover:border-[#D71920] hover:text-white',
    secondary:
      'bg-[var(--bg-surface)] text-[var(--ink-primary)] border border-[var(--border-medium)] hover:border-[var(--ink-primary)] shadow-sm',
    outline:
      'bg-transparent text-[var(--ink-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-active)] hover:bg-[var(--bg-raised)]',
    danger:
      'bg-[#D71920] text-white border border-[#D71920] hover:bg-[#B5141A] shadow-[0_0_15px_rgba(215,25,32,0.35)]',
  }[variant];

  const ledColorClass = {
    red: 'bg-[#D71920] shadow-[0_0_8px_#D71920]',
    green: 'bg-emerald-500 shadow-[0_0_8px_#10B981]',
    amber: 'bg-amber-400 shadow-[0_0_8px_#FBBF24]',
  }[ledColor];

  const baseStyles =
    'group relative inline-flex items-center justify-center rounded-full font-mono font-bold tracking-wider uppercase no-underline select-none cursor-pointer transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]';

  const content = (
    <>
      {ledIndicator && (
        <span className={`w-1.5 h-1.5 rounded-full ${ledColorClass} animate-pulse shrink-0`} />
      )}
      <span>{children}</span>
      {icon && (
        <span className="w-6 h-6 rounded-full bg-white/10 dark:bg-white/10 flex items-center justify-center shrink-0 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={handleClick}
        className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
};
