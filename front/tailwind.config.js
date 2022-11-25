/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    screens: {
      'sm': {'max': '767px'},
      // => @media  max-width: 767px) { ... }
      'md': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }
      'lg': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }
      'xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
