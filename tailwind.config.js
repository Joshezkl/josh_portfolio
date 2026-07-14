/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        display: ['"Instrument Serif"', "Georgia", "serif"],
      },
      colors: {
        canvas: {
          DEFAULT: "#f7f6f3",
          dark: "#0a0c10",
        },
        surface: {
          DEFAULT: "#ffffff",
          dark: "#12151c",
          elevated: "#fafaf8",
          "elevated-dark": "#1a1e28",
        },
        ink: {
          DEFAULT: "#1a1d26",
          muted: "#5c6370",
          faint: "#9199a8",
          "dark-default": "#eef0f4",
          "dark-muted": "#9aa3b2",
          "dark-faint": "#5e6678",
        },
        brand: {
          DEFAULT: "#4c5fd5",
          light: "#6b7de8",
          dark: "#3a4cb8",
          glow: "rgba(76, 95, 213, 0.15)",
        },
        accent: {
          DEFAULT: "#0d9488",
          light: "#14b8a6",
          warm: "#d97706",
        },
      },
      boxShadow: {
        soft: "0 2px 20px rgba(26, 29, 38, 0.06)",
        card: "0 4px 32px rgba(26, 29, 38, 0.08)",
        glow: "0 0 40px rgba(76, 95, 213, 0.12)",
        "glow-dark": "0 0 40px rgba(107, 125, 232, 0.15)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
