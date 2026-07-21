/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#2170e6",
          light: "#2170e6",
          pale: "#2170e6",
          dim: "rgba(201,168,76,0.15)",
        },
        navy: {
          50:  "#E8EBF4",
          100: "#C5CCDF",
          200: "#9FAABF",
          300: "#7888A0",
          400: "#566985",
          500: "#344B6B",
          600: "#2D3F5E",
          700: "#1E2A42",
          800: "#111827",
          900: "#0A0F1E",
          950: "#060B16",
        },
        // Light mode surface tokens
        surface: {
          DEFAULT: "#FFFFFF",
          secondary: "#F7F8FC",
          tertiary: "#EEF0F8",
          border: "#DDE1EE",
        },
        // Dark mode surface tokens (rich dark-blue shades)
        dark: {
          surface:   "#0A0F1E",
          elevated:  "#111827",
          card:      "#1E2740",
          border:    "rgba(201,168,76,0.15)",
          muted:     "#edf0f5",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      animation: {
        marquee: "marquee 10s linear infinite",
        "fade-up": "fadeUp 0.5s ease forwards",
        "modal-in": "modalIn 0.25s ease forwards",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%":   { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        modalIn: {
          "0%":   { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
