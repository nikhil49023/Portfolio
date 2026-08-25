import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "system-ui", "sans-serif"],
        body: ["Space Grotesk", "system-ui", "sans-serif"],
        mono: ["Space Mono", "Courier New", "monospace"],
      },
      colors: {
        void: "#0a0a0a",
        surface: "#111113",
        raised: "#18181b",
        overlay: "#1f1f23",
        signal: {
          DEFAULT: "#ff2d55",
          dim: "rgba(255,45,85,0.15)",
        },
        emerald: "#00d68f",
        amber: "#ffb700",
        cobalt: "#3d8eff",
        ink: {
          primary: "#f0f0f0",
          secondary: "#909099",
          muted: "#4a4a55",
          faint: "#2a2a30",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fadeIn 0.8s ease both",
        "slide-right": "slideRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        blink: "blink 1.2s step-end infinite",
        "pulse-red": "pulseRed 2s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        "scan-line": "scanLine 3s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        pulseRed: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255,45,85,0.2)" },
          "50%": { boxShadow: "0 0 60px rgba(255,45,85,0.5)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
