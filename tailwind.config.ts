import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  corePlugins: {
    // The Webflow stylesheet owns `.container` (max-width: 1312px).
    // Tailwind's built-in `.container` utility (responsive max-width) would
    // override it and break the layout, so disable it.
    container: false,
  },
  theme: {
    extend: {
      colors: {
        white: { 100: "#ffffff", 200: "#f5f5f5", 300: "#e9e9e9", 400: "#eaeaea" },
        dark: { 100: "#010101", 200: "rgba(255,255,255,0.13)" },
        gray: {
          100: "#4a4a4a",
          200: "#6a6a6a",
          300: "#c8c8c8",
          400: "rgba(106,106,106,0.10)",
          500: "rgba(106,106,106,0.44)",
          600: "#d5d5d6",
        },
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
