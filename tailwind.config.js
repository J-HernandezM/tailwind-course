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
          'sanFrancisco': "url('/public/img/sanFrancisco.jpg')",
          'sanFranciscoDesktop': "url('/public/img/sanFranciscoDesktop.jpg')",
          'yosemite': "url('/public/img/yosemite.jpg')",
          'LA': "url('/public/img/LA.jpg')",
          'seattle': "url('/public/img/seattle.jpg')",
          'new_york': "url('/public/img/new_york.jpg')",
          'norway': "url('/public/img/norway.jpg')",
          'sydney': "url('/public/img/sydney.jpg')",
          'miami': "url('/public/img/miami.jpg')",
          'switzerland': "url('/public/img/switzerland.jpg')",
          'bali': "url('/public/img/bali.jpg')",
          'norway': "url('/public/img/norway.jpg')",
          'chicago': "url('/public/img/chicago.jpg')",
          'europe': "url('/public/img/europe.jpg')",
          'iceland': "url('/public/img/iceland.jpg')",
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

