import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "sandy-gold":  "#F5C518",
        "goa-cyan":    "#00D4E8",
        "beach-pink":  "#FF6B9D",
        "night-navy":  "#0D0D1A",
        "card-dark":   "#111827",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Plus Jakarta Sans", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/hero-bg.jpg')",
        "gradient-brand":
          "linear-gradient(135deg, #0D0D1A 0%, #1a0a2e 50%, #0D1A2A 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        float:     "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;