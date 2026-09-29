import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "rgb(var(--base) / <alpha-value>)",
          raised: "rgb(var(--base-raised) / <alpha-value>)",
          surface: "rgb(var(--base-surface) / <alpha-value>)",
          overlay: "rgb(var(--base-overlay) / <alpha-value>)",
        },
        line: {
          DEFAULT: "rgb(var(--fg) / 0.08)",
          soft: "rgb(var(--fg) / 0.05)",
          strong: "rgb(var(--fg) / 0.14)",
        },
        ink: {
          DEFAULT: "rgb(var(--ink) / <alpha-value>)",
          dim: "rgb(var(--ink-dim) / <alpha-value>)",
          faint: "rgb(var(--ink-faint) / <alpha-value>)",
        },
        fg: {
          DEFAULT: "rgb(var(--fg) / <alpha-value>)",
        },
        signal: {
          DEFAULT: "#14B8A6",
          soft: "#5EEAD4",
          dim: "#0D9488",
        },
        ember: {
          DEFAULT: "#22D3EE",
          soft: "#67E8F9",
        },
        bloom: {
          DEFAULT: "#38BDF8",
          soft: "#7DD3FC",
        },
        mint: {
          DEFAULT: "#2FDE9A",
          soft: "#6EEBC0",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["\"JetBrains Mono\"", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 7vw, 6.5rem)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 4.25rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(1.9rem, 3.2vw, 2.75rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(1.5rem, 2.2vw, 1.9rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },
      maxWidth: {
        shell: "1240px",
      },
      backgroundImage: {
        "dot-grid": "radial-gradient(rgb(var(--fg) / 0.10) 1px, transparent 1px)",
        "noise": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
      backgroundSize: {
        dots: "22px 22px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(20,184,166,0.28), 0 8px 40px -8px rgba(34,211,238,0.35)",
        panel: "0 1px 0 0 rgb(var(--fg) / 0.04) inset, 0 24px 60px -20px rgba(0,0,0,0.6)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.6" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        marquee: "marquee 28s linear infinite",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.4,0,0.6,1) infinite",
      },
      transitionTimingFunction: {
        signature: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
