/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'rosado': '#EB0062',
      'verde': '#72DB85',
      'celeste': '#2196F3',
    },
    extend: {
      fontFamily: {
        rubik: ['Rubik Wet Paint', 'sans-serif'],
        rubikv: ['Rubik Vinyl', 'sans-serif']
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


