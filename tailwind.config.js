/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: '#e85d04',
        orangeLight: '#faa307',
        orangeDark: '#9d0208',
        background: '#edf2f4',
        backgroundDark: '#edede9',
      },
    },
  },
  plugins: [],
}

