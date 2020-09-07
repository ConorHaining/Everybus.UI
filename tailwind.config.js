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

      }
    }
  },
  variants: {},
  plugins: [],
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },
}
