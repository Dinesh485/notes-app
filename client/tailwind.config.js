module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif']
       },
       screens:{
         'xs': '375px',
       },
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
