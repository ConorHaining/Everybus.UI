const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.ts',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          ...colors.gray,
          'body': '#F4F1DE',
        },

        green: {
          100: '#9AC1AE',
          200: '#8DB9A4',
          300: '#81B29A',
          400: '#74AA90',
          500: '#67A286',
          600: '#5D987C',
          700: '#558B72',
          800: '#4E7E68',
          900: '#46725E',
        },

        purple: {
          100: '#6C709D',
          200: '#626693',
          300: '#5A5E87',
          400: '#52567A',
          500: '#494D6E',
          600: '#3D405B',
          700: '#3D405B',
          800: '#313349',
          900: '#292B3D',
        },

      }
    }
  },
  variants: {},
  plugins: [],
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },
}
