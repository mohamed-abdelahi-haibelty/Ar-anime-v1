/** @type {import('tailwindcss').Config} */
import tailwindAspectRatio from '@tailwindcss/aspect-ratio'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'semiDarkBlue' : '#161D2F',
        'grBlue' : '#5A698F',
        'anRed' : '#FC4747',
        'darkBlue':'#10141E'
      }
    },
  },
  plugins: [tailwindAspectRatio],
}

