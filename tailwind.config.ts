import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1B365D",
          light: "#24477A",
          dark: "#122543",
        },
        "solar-gold": {
          DEFAULT: "#E5A93C",
          light: "#FFD700",
          dark: "#C68B25",
        },
        white: { 100: "#ffffff", 200: "#f5f5f5", 300: "#e9e9e9", 400: "#eaeaea" },
        dark: { 100: "#010101", 200: "rgba(255,255,255,0.13)" },
        body: { DEFAULT: "#333333" },
      },
      borderRadius: {
        8: "8px",
        10: "10px",
        12: "12px",
        16: "16px",
        20: "20px",
        100: "100px",
      },
      fontFamily: {
        body: ["var(--font-body)", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
      },
      spacing: {
        // Site-wide Spacing System Tokens
        "section-y": "var(--space-section-y)",
        "block-y": "var(--space-block-y)",
        "card-pad": "var(--space-card-pad)",
        "grid-gap": "var(--space-grid-gap)",
        "heading-gap": "var(--space-heading-gap)",
        "inline-gap": "var(--space-inline)",
        10: "10px",
        16: "16px",
        20: "20px",
        24: "24px",
        30: "30px",
        36: "36px",
        40: "40px",
        50: "50px",
        60: "60px",
        70: "70px",
        80: "80px",
        100: "100px",
        120: "120px",
      },
      maxWidth: {
        container: "1312px",
      },
    },
  },
  plugins: [],
};

export default config;
