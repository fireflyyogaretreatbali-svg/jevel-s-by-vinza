import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0B",
        ink: "#F6F3EC",
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F1D48C",
          deep: "#8A6A1F",
        },
        line: "rgba(212,175,55,0.14)",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      boxShadow: {
        gold: "0 0 40px -10px rgba(212,175,55,0.35)",
        panel: "0 30px 80px -30px rgba(0,0,0,0.8)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        shimmer: "shimmer 3.5s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
