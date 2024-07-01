/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: '#e52f2d',
        orangeLight: '#faa307',
        orangeDark: '#9d0208',
        background: '#edf2f4',
        backgroundDark: '#f9f9f9',
        text: '#333333',
        white: '#ffffff'
      },
    },
  },
  plugins: [],
}

