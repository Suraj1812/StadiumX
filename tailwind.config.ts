import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/hooks/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "430px",
        "3xl": "1800px",
      },
      colors: {
        pitch: "#0B3D2E",
        neon: "#5CFF8F",
        gold: "#E6B325",
        ink: "#050505",
        flood: "#071B2A",
        led: "#FF3B3B",
      },
      boxShadow: {
        "neon-ring":
          "0 0 0 1px rgb(92 255 143 / 0.42), 0 0 34px rgb(92 255 143 / 0.2)",
        "gold-glow": "0 0 42px rgb(230 179 37 / 0.28)",
        "led-red": "0 0 30px rgb(255 59 59 / 0.34)",
      },
      backgroundImage: {
        "stadium-radial":
          "radial-gradient(circle at 50% 0%, rgb(92 255 143 / 0.15), transparent 30%), radial-gradient(circle at 20% 20%, rgb(230 179 37 / 0.14), transparent 18%), radial-gradient(circle at 80% 20%, rgb(255 59 59 / 0.12), transparent 16%)",
      },
      animation: {
        "led-flicker": "led-flicker 2.2s steps(8) infinite",
        ticker: "ticker 24s linear infinite",
        spotlight: "spotlight 7s ease-in-out infinite alternate",
        "fog-drift": "fog-drift 16s ease-in-out infinite alternate",
      },
      keyframes: {
        "led-flicker": {
          "0%, 18%, 22%, 25%, 53%, 57%, 100%": { opacity: "1" },
          "20%, 24%, 55%": { opacity: "0.62" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        spotlight: {
          "0%": { transform: "translate3d(-12%, -6%, 0) rotate(-9deg)" },
          "100%": { transform: "translate3d(12%, 4%, 0) rotate(10deg)" },
        },
        "fog-drift": {
          "0%": { transform: "translate3d(-2%, 2%, 0) scale(1)" },
          "100%": { transform: "translate3d(3%, -1%, 0) scale(1.06)" },
        },
      },
    },
  },
};

export default config;
