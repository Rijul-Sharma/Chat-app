/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bree : ["Bree Serif", "sans-serif"],
        bebas : ["Bebas Neue", "sans-serif"],
        oswald : ["Oswald", 'sans-serif']
      }
    },
  },
  plugins: [],
}

