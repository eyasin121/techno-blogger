/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bgPrimary: "#000000",
        primary: "#ffffff",
        accent: "#999999",
        
    },
  },
},
  plugins: [],

}


