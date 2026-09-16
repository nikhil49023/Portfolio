"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const variantStyles: Record<string, string> = {
  default:
    "bg-[var(--brand-primary)] text-[var(--bg-void)] font-bold hover:opacity-90 shadow-sm",
  destructive:
    "bg-red-600 text-white font-bold hover:bg-red-700 shadow-sm",
  outline:
    "border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-active)] hover:text-[var(--ink-primary)] text-[var(--ink-secondary)]",
  secondary:
    "bg-[var(--bg-surface)] text-[var(--ink-primary)] hover:bg-[var(--bg-surface)]/80 border border-[var(--border-subtle)]",
  ghost:
    "hover:bg-[var(--bg-surface)] text-[var(--ink-secondary)] hover:text-[var(--ink-primary)]",
  link:
    "text-[var(--brand-primary)] underline-offset-4 hover:underline",
};

const sizeStyles: Record<string, string> = {
  default: "h-9 px-4 py-2 text-xs",
  sm: "h-8 px-3 text-[11px]",
  lg: "h-10 px-6 text-sm",
  icon: "h-9 w-9 p-0 flex items-center justify-center",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap font-mono transition-all duration-200 cursor-pointer disabled:pointer-events-none disabled:opacity-50 select-none",
          variantStyles[variant] || variantStyles.default,
          sizeStyles[size] || sizeStyles.default,
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
