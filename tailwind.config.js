/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <--- TAMBAHKAN INI
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      colors: {
        'sdi-navy': '#000839',
        'sdi-red': '#ff1e42',
      }
    },
  },
  plugins: [],
}