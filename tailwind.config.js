/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'history-blue': '#86bcda',
        'history-gray': '#EDEDED'
      },
      height:{
        '60': '15rem'
      }
    },
  },
  plugins: [],
}