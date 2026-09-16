import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./registry/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "var(--font-syne)", "var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-body)", "var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-mono)", "var(--font-space-mono)", "monospace"],
        ndot: ["var(--font-ndot)", "var(--font-space-mono)", "monospace"],
        arame: ["var(--font-arame)", "var(--font-syne)", "var(--font-space-grotesk)", "monospace"],
      },
      colors: {
        void: "var(--bg-void)",
        surface: "var(--bg-surface)",
        raised: "var(--bg-raised)",
        overlay: "var(--bg-overlay)",
        background: "var(--bg-void)",
        foreground: "var(--ink-primary)",
        primary: {
          DEFAULT: "var(--brand-primary)",
          foreground: "var(--bg-void)",
        },
        "primary-foreground": "var(--bg-void)",
        muted: {
          DEFAULT: "var(--bg-surface)",
          foreground: "var(--ink-muted)",
        },
        "muted-foreground": "var(--ink-muted)",
        brand: {
          primary: "var(--brand-primary)",
          secondary: "var(--brand-secondary)",
          accent: "var(--brand-accent)",
        },
        signal: {
          DEFAULT: "var(--signal-red)",
          dim: "var(--signal-red-dim)",
        },
        neural: {
          crimson: "#D71920",
          void: "#080808",
          surface: "#101012",
          plate: "#18181B",
          border: "#242428",
          glyph: "#FAFAFA",
        },
        border: {
          DEFAULT: "var(--border-subtle)",
          subtle: "var(--border-subtle)",
          medium: "var(--border-medium)",
          active: "var(--border-active)",
        },
        ink: {
          primary: "var(--ink-primary)",
          secondary: "var(--ink-secondary)",
          muted: "var(--ink-muted)",
          faint: "var(--ink-faint)",
        },
      },
      animation: {
        meteor: "meteor 5s linear infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        "fade-up": "fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fadeIn 0.8s ease both",
        "slide-right": "slideRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        blink: "blink 1.2s step-end infinite",
        "pulse-red": "pulseRed 2s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        "scan-line": "scanLine 3s linear infinite",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
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
          "0%, 100%": { boxShadow: "0 0 20px rgba(215,25,32,0.25)" },
          "50%": { boxShadow: "0 0 60px rgba(215,25,32,0.6)" },
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
