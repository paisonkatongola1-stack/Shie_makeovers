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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#C97C9B", // Deep Mauve
          foreground: "#f5f5f5",
        },
        secondary: {
          DEFAULT: "#8b6f47", // Deep Gold
          foreground: "#f5f5f5",
        },
        accent: {
          DEFAULT: "#1f1f1f", // Dark Gray
          dark: "#0a0a0a",
        }
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
