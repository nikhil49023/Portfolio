"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface CardBodyProps {
  title?: string;
  description?: string;
  className?: string;
}

export const CardBody = ({
  title = "Edge Model Telemetry",
  description = "Autonomous on-device model quantization and deterministic inference benchmark.",
  className = "",
}: CardBodyProps) => (
  <div className={cn("text-start p-4 md:p-6", className)}>
    <h3 className="text-lg font-bold mb-1 text-[var(--ink-primary)] font-display tracking-tight">
      {title}
    </h3>
    <p className="text-wrap text-[var(--ink-secondary)] text-xs md:text-sm leading-relaxed font-mono">
      {description}
    </p>
  </div>
);

export const CardWithGridEllipsis = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "border w-full rounded-xl overflow-hidden border-[var(--border-subtle)] bg-[var(--bg-surface)] p-1 shadow-sm transition-all hover:border-[var(--border-active)]",
      className
    )}
  >
    <div className="size-full bg-repeat bg-[url(/svg/grid-ellipsis.svg)] bg-[length:25px_25px] text-[var(--ink-faint)]">
      <div className="size-full bg-gradient-to-tr from-[var(--bg-void)] via-[var(--bg-surface)]/80 to-[var(--bg-void)]">
        {children}
      </div>
    </div>
  </div>
);

export function CardWithGridEllipsisDemo() {
  return (
    <CardWithGridEllipsis>
      <CardBody />
    </CardWithGridEllipsis>
  );
}

export default CardWithGridEllipsis;
