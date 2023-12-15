/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{html,js, mjs}'],
  mode: 'jit',
  darkMode: 'class',
  theme: {
      colors: theme => ({
        ...theme.colors,
        primary: '#CC2D4A',
        secondary: '#8FA206',
        terciary: '#61AEC9'
      }),
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },	
      extend: {
        fontSize: {
          xxs: '9px'
        },
        backgroundImage: {
          'sanFrancisco': "url('img/sanFrancisco.jpg')",
          'sanFranciscoDesktop': "url('img/sanFranciscoDesktop.jpg')",
          'yosemite': "url('img/yosemite.jpg')",
          'LA': "url('img/LA.jpg')",
          'seattle': "url('img/seattle.jpg')",
          'new_york': "url('img/new_york.jpg')",
          'norway': "url('img/norway.jpg')",
          'sydney': "url('img/sydney.jpg')",
          'miami': "url('img/miami.jpg')",
          'switzerland': "url('img/switzerland.jpg')",
          'bali': "url('img/bali.jpg')",
          'norway': "url('img/norway.jpg')",
          'chicago': "url('img/chicago.jpg')",
          'europe': "url('img/europe.jpg')",
          'iceland': "url('img/iceland.jpg')",
        },
        gridTemplateColumns: {
          'trending': '.4fr .6fr'
        },
        gridTemplateRows: {
          'trending': '.44fr .28fr .28fr'
        }
      },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
    require('tailwind-scrollbar-hide')
  ],
};

