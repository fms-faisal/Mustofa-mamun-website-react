export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Roboto Slab', 'serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.5s ease-out forwards',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        lightgreen: {
          "primary": "#16a34a",
          "secondary": "#4ade80",
          "accent": "#36d399",         // Using a success green for accent
          "neutral": "#1f2937",
          "base-100": "#ffffff",       // White background
          "base-200": "#f0fdf4",       // Very light green for cards
          "base-300": "#dcfce7",       // A bit darker green for other elements
          "base-content": "#1f2937",   // Dark text for high contrast
          "info": "#14b8a6",
          "success": "#22c55e",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
        night: {
          ...require("daisyui/src/theming/themes")["night"],
          "primary": "#22c55e",
          "secondary": "#4ade80",
          "accent": "#36d399",
          "base-100": "#0f172a",
          "info": "#2dd4bf",
        },
      },
    ],
  },
}
