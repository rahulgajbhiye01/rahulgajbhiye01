import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,md,mdx}"],
  theme: {
    extend: {
      animation: {
        "slide-down": "slideDown 0.3s ease-out",
        fadeIn: "fadeIn 0.4s ease-out forwards",
      },
      keyframes: {
        slideDown: {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
