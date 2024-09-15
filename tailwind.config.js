/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6A9C89",
        secondary:"#EFBC9B",
        primary_hover: "#8967B3",
        placehold: "#6B8A7A",
        textColor :"#CD5C08",
        buttonCol: "#405D72",
        backHov: "#C69774",
      },
      fontFamily:{
        title: ["Protest Guerrilla"],
        placehold :["Annie Use Your Telescope"],
        todos : ["Schoolbell"]
      }
    },
  },
  plugins: [],
}