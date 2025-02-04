/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // argentina: '#FF385C',
        // argentina: "#4CD3C2",
        argentina: "#E96479",
        dark_purple: "#0B2447",
        btn_primary: "#576CBC",
        heading_color: "#abd9d9",
        primero: "#7DB9B6",
        segundo: "#4D455D",
        tercero: "#E96479"
      },
      fontFamily: {
        comfortaa: ['Comfortaa', 'cursive'],
        'cairo-play': ['Cairo Play', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
        Poppins: "Poppins",
      },
      borderRadius: {
        "r-30": "30px",
      },
      width: {
        "w74": "74px",
        "w76": "76px",
        "w300": "300px",
        "w250": "250px",
        "w200": "200px",
        "w350": "350px"       
      },
      height: {
        "h-300": "300px"

      }
    },
  },
  plugins: [],
}