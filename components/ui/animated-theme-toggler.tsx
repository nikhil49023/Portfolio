"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AnimatedThemeTogglerProps {
  className?: string;
  size?: number;
}

export function AnimatedThemeToggler({
  className,
  size = 14,
}: AnimatedThemeTogglerProps) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  if (!mounted) {
    return (
      <div
        className={cn(
          "w-14 h-7 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] flex items-center p-1",
          className
        )}
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative w-14 h-7 rounded-full border border-[var(--border-subtle)] hover:border-[var(--border-active)] bg-[var(--bg-surface)] text-[var(--ink-primary)] p-0.5 flex items-center transition-all duration-300 cursor-pointer shadow-sm group select-none",
        className
      )}
      aria-label={`Switch to ${isDark ? "Light" : "Dark"} Mode (Neural UI)`}
      title={`Switch to ${isDark ? "Light" : "Dark"} Mode`}
    >
      {/* Sliding Tactile Pill Switch (iOS + Mechanical Spring Fusion) */}
      <motion.div
        className="w-5 h-5 rounded-full bg-[var(--ink-primary)] text-[var(--bg-void)] flex items-center justify-center shadow-md relative"
        layout
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        style={{
          marginLeft: isDark ? "auto" : "0",
          marginRight: isDark ? "0" : "auto",
        }}
      >
        {/* Micro Laser Diode on Toggle Handle */}
        <span className="absolute -top-0.5 right-0 w-1.5 h-1.5 rounded-full bg-[#D71920]" />

        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ scale: 0.4, rotate: -90, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.4, rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Moon size={size} className="text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ scale: 0.4, rotate: 90, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.4, rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Sun size={size} className="text-black" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </button>
  );
}

export default AnimatedThemeToggler;
