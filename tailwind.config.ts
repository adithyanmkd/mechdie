import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        surface: "#F5F5F7",
        "surface-muted": "#EBEBF0",
        dark: "#202027",
        muted: "#5A5A68",
        brand: {
          DEFAULT: "#261A66",
          hover: "#1D134F",
          light: "#F0EEF9",
          subtle: "#E4E1F4",
          border: "#D1CDED",
          dark: "#170F42",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(32, 32, 39, 0.05), 0 1px 2px -1px rgba(32, 32, 39, 0.05)",
        card: "0 4px 20px -2px rgba(32, 32, 39, 0.06), 0 2px 6px -1px rgba(32, 32, 39, 0.04)",
        "card-hover": "0 12px 30px -4px rgba(38, 26, 102, 0.12), 0 4px 10px -2px rgba(32, 32, 39, 0.04)",
        modal: "0 20px 40px -10px rgba(32, 32, 39, 0.25)",
      },
      borderRadius: {
        soft: "0.75rem",
        button: "0.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
