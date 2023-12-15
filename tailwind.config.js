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
          'sanFrancisco': "url('/tailwind-course/public/img/sanFrancisco.jpg')",
          'sanFranciscoDesktop': "url('/tailwind-course/public/img/sanFranciscoDesktop.jpg')",
          'yosemite': "url('/tailwind-course/public/img/yosemite.jpg')",
          'LA': "url('/tailwind-course/public/img/LA.jpg')",
          'seattle': "url('/tailwind-course/public/img/seattle.jpg')",
          'new_york': "url('/tailwind-course/public/img/new_york.jpg')",
          'norway': "url('/tailwind-course/public/img/norway.jpg')",
          'sydney': "url('/tailwind-course/public/img/sydney.jpg')",
          'miami': "url('/tailwind-course/public/img/miami.jpg')",
          'switzerland': "url('/tailwind-course/public/img/switzerland.jpg')",
          'bali': "url('/tailwind-course/public/img/bali.jpg')",
          'norway': "url('/tailwind-course/public/img/norway.jpg')",
          'chicago': "url('/tailwind-course/public/img/chicago.jpg')",
          'europe': "url('/tailwind-course/public/img/europe.jpg')",
          'iceland': "url('/tailwind-course/public/img/iceland.jpg')",
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

