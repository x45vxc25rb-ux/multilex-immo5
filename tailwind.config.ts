import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#000000",
        paper: "#FFFFFF",
        line: "#1A1A1A",
        mute: "#6E6E6E",
        haze: "#9C9C9C",
        fog: "#F2F2F2",
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        "display-1": ["clamp(3.5rem, 12vw, 11rem)", { lineHeight: "0.92", letterSpacing: "-0.03em" }],
        "display-2": ["clamp(2.5rem, 7vw, 5.5rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-3": ["clamp(1.9rem, 4vw, 3.2rem)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      maxWidth: {
        content: "1600px",
      },
    },
  },
  plugins: [],
};

export default config;
