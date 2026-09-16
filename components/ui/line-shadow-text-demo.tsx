"use client";

import React, { useEffect, useState } from "react";
import { LineShadowText } from "@/registry/magicui/line-shadow-text";

export function LineShadowTextDemo() {
  const [shadowColor, setShadowColor] = useState("black");

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setShadowColor(isDark ? "white" : "black");
  }, []);

  return (
    <h1 className="text-5xl leading-none font-semibold tracking-tighter text-balance sm:text-6xl md:text-7xl lg:text-8xl">
      Ship{" "}
      <LineShadowText className="italic" shadowColor={shadowColor}>
        Fast
      </LineShadowText>
    </h1>
  );
}

export default LineShadowTextDemo;
