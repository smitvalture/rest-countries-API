/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0 35px 10px #87fbb0',
      }
    },
    fontFamily: {
      'Manrope': ['Manrope', 'sans-serif'],
    }
  },
  
  plugins: [],
};
