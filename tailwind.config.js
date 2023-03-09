/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        "w-max": '3920px'
      },
      colors: {
        "brown-900": "#AA5E3F",
        "brown-700": "#BD6C4C",
        "brown-600": "#C2785B",
        "brown-300": "#D39D88",
        "brown-200": "#E2C2B6",
        "brown-100": "#EEDAD3",
        "brown-50":  "#f2e9e4",
      }
    },
  },
  plugins: [],
}
