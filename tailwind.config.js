/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Google Sans", "Inter", "system-ui", "sans-serif"],
        display: ["Google Sans Display", "Inter", "sans-serif"],
      },
      colors: {
        // Light theme (Antigravity-inspired)
        light: {
          bg: "#ffffff",
          surface: "#f8f9fa",
          text: "#202124",
          "text-secondary": "#5f6368",
          border: "#e8eaed",
          accent: "#1a73e8",
        },
        // Dark theme
        dark: {
          bg: "#0a0a0a",
          surface: "#1a1a1a",
          text: "#e8eaed",
          "text-secondary": "#9aa0a6",
          border: "#3c4043",
          accent: "#8ab4f8",
        },
        // Particle colors
        particle: {
          blue: "#4285f4",
          red: "#ea4335",
          yellow: "#fbbc04",
          green: "#34a853",
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-down": "slideDown 0.3s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      transitionTimingFunction: {
        antigravity: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
