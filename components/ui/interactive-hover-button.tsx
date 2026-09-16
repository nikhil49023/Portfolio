import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  variant?: "red" | "monochrome";
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", variant = "red", className, ...props }, ref) => {
  const dotBg = variant === "red" ? "bg-[#D71920]" : "bg-[var(--ink-primary)]";
  const hoverTextBg = variant === "red" ? "text-white" : "text-[var(--bg-void)]";

  return (
    <button
      ref={ref}
      className={cn(
        "group relative inline-flex min-w-[150px] cursor-pointer items-center justify-center overflow-hidden rounded-full border border-[var(--border-subtle)] hover:border-[var(--border-active)] bg-[var(--bg-surface)] px-5 py-2.5 text-center text-xs font-mono font-bold tracking-wider uppercase text-[var(--ink-primary)] transition-all duration-300 shadow-sm select-none active:scale-[0.97]",
        className
      )}
      {...props}
    >
      {/* Resting Label */}
      <span className="inline-block translate-x-2 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {text}
      </span>

      {/* Active Hover Content */}
      <div
        className={cn(
          "absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100",
          hoverTextBg
        )}
      >
        <span>{text}</span>
        <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
      </div>

      {/* Expanding Neural Crimson Dot Matrix Diode */}
      <div
        className={cn(
          "absolute left-4 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full transition-all duration-300 ease-out group-hover:left-0 group-hover:top-0 group-hover:translate-y-0 group-hover:h-full group-hover:w-full group-hover:scale-100 group-hover:rounded-full",
          dotBg
        )}
      />
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
export default InteractiveHoverButton;
