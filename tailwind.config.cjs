/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gradient': 'linear-gradient( to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50% )',
      },
    },
  },
  plugins: [],
}
