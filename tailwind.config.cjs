//import { buildErrorMessage } from 'vite';
const colors = require( 'tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  
  mode:'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  
  ],
  theme: {
    extend: {
      colors:{
        primary: '#150D30',
        secondary: '#4E3C7C',
        third: '#AA92DB',
      },
      fontFamily:{
        sans: ['Montserrat', 'sans-serif'],
        heading:['Sacramento', 'sans-serif'],
      },
      

    },
  },
  plugins: [],
}