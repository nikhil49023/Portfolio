"use client";

import React from "react";
import { ArcBeacon } from "./arc-beacon";

export function ArcBeaconDemo() {
  return (
    <div className="flex flex-col items-center justify-center p-12 bg-background min-h-[220px]">
      <ArcBeacon size={68} label="ARC BEACON" speed={1.4} />
    </div>
  );
}

export default ArcBeaconDemo;
