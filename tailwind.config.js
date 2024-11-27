/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        neue: ['Neue-Machina','sans-serif'],
        neuer: ['Neue-Machina-Regular','sans-serif'],
        raleway: ['Raleway','sans-serif'],
        conthrax: ['Conthrax','sans-serif'],
        roboto: ['Roboto','sans-serif']
      },
      screens: {
        'lgbt': '800px'
      },
      backgroundSize: {
        'vpw':"var(--viewportW)"
      }
    },
  },
  plugins: [],
}