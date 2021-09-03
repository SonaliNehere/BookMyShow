module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      
  colors:{
    pavan:{
      50: '#ffe2ec',
      100: '#ffb3c5',
      200: '#fc839f',
      300: '#f95278',
      400: '#f62252',
      500: '#dd0939',
      600: '#ad032c',
      700: '#7c001e',
      800: '#4d0012',
      900: '#200005',
      },
      bms: {
        50: "#edf1fc",
        100: "#d3d4e1",
        200: "#b6b8c9",
        300: "#989bb2",
        400: "#7c7f9b",
        500: "#636582",
        600: "#4c4f66",
        700: "#363849",
        800: "#2b3147",
        900: "#0a0a16",
      },
    }
  },
},
  variants: {
    extend: {},
  },
  plugins: [],
}
