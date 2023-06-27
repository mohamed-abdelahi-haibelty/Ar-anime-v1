/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'semiDarkBlue' : '#161D2F',
        'grBlue' : '#5A698F'
      }
    },
  },
  plugins: [],
}

