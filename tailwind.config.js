const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        gray: {
          ...colors.gray,
          'gray-body': '#1e3656',
        }
      }
    }
  },
  variants: {},
  plugins: [],
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },
}
