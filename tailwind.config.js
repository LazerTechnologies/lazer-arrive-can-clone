/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#19354B',
        primary: '#19354B',
        secondary: '#4784AB',
      },
    },
  },
  plugins: [],
}
