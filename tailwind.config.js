/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Brightorange': 'hsl(31, 77%, 52%)',
        'Darkcyan': 'hsl(184, 100%, 22%)',
        'Verydarkcyan': 'hsl(179, 100%, 13%)'
      }
    },
  },
  plugins: [],
}