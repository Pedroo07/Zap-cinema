/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex:{
        0 : -1
      },
      fontFamily: {
        sans:['Neo Sans Pro', 'sans-serif']
      }
    },
  },
  plugins: [],
}
