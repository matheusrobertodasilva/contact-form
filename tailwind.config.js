/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // Primary

        "Green-200-(lighter)": "hsl(148, 38%, 91%)",
        "Green-600-(medium)": "hsl(169, 82%, 27%)",
        "Red": "hsl(0, 66%, 54%)",

        // Neutral

        "White": "hsl(0, 0%, 100%)",
        "Grey-500-(medium)": "hsl(186, 15%, 59%)",
        "Grey-900-(darker)": "hsl(187, 24%, 22%)"
      },
      fontFamily:{
        "karla":'"Karla", "sans-serif"'
      }
    },
  },
  plugins: [],
}

