/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        somar: ['Somar', 'sans-serif'],
        somarBold: ['SomarBold', 'sans-serif'],
        somarExtraBold: ['SomarExtraBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

