import React from "react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export function InteractiveHoverButtonDemo() {
  return (
    <div className="relative flex items-center justify-center p-6 border border-border bg-background">
      <InteractiveHoverButton text="Deploy Agent" />
    </div>
  );
}

export default InteractiveHoverButtonDemo;
