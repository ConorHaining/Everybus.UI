const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.ts',
    './src/styles/**',
    './src/styles.scss',
  ],
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
