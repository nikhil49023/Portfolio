"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface LineShadowTextProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  shadowColor?: string;
  as?: React.ElementType;
  children: React.ReactNode;
}

export function LineShadowText({
  shadowColor = "currentColor",
  as: Component = "span",
  className,
  children,
  style,
  ...props
}: LineShadowTextProps) {
  // Generate multi-tiered crisp extruded line shadow
  const textShadow = Array.from({ length: 8 })
    .map((_, i) => `${i + 1}px ${i + 1}px 0px ${shadowColor}`)
    .join(", ");

  const Comp = Component as any;

  return (
    <Comp
      className={cn("inline-block transition-all", className)}
      style={{
        textShadow,
        ...style,
      }}
      {...props}
    >
      {children}
    </Comp>
  );
}

export default LineShadowText;
