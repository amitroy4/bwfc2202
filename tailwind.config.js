/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1200px',
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
      },
      colors: {
        'primary': '#3734A9',
      },
      dropShadow: {
        'paybtn': '0 20px 19px rgba(255, 127, 92, 0.2)',
        'accbtn': '0 20px 19px rgba(55, 52, 169, 0.2)',

    },
  },
  plugins: [],
}
}
