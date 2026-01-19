/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        surface: "#FAFAFA",
        "surface-hover": "#F5F5F5",
        border: "#E5E5E5",
        "text-primary": "#171717",
        "text-secondary": "#525252",
        "text-muted": "#A3A3A3",
        brand: {
          DEFAULT: "#171717", // Primary Black
          hover: "#333333",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
