/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        alyamama: ["Alyamama", "sans-serif"],
        lemonada: ["Lemonada", "sans-serif"],
      },
    },
  },

  plugins: [],
};