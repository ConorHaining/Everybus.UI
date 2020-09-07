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
          'body': '#f8f5f4',
        },

        green: {
          100: '#77c2a7',
          200: '#61b898',
          300: '#4aae89',
          400: '#34a47b',
          500: '#1d9a6c',
          600: '#1a8b61',
          700: '#177b56',
          800: '#146c4c',
          900: '#0f4d36',
        },

        purple: {
          100: '#b39ce6',
          200: '#a68ce2',
          300: '#997bdd',
          400: '#8d6bd9',
          500: '#805ad5',
          600: '#7351c0',
          700: '#6648aa',
          800: '#5a3f95',
          900: '#4d3680',
        },

        blue: {
          100: '#6eacd7',
          200: '#569ed0',
          300: '#3d91c9',
          400: '#2583c3',
          500: '#0d75bc',
          600: '#0c69a9',
          700: '#0a5e96',
          800: '#095284',
          900: '#084671',
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
