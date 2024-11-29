/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // require("@tailwindcss/forms"),
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    darkTheme: 'bettermint',
    themes: [
      {
        bettermint: {
          primary: colors.green[600],
          'primary-content': colors.green[100],
          secondary: colors.green[800],
          'secondary-focus': colors.green[900],
          'secondary-content': colors.green[200],
          'base-100': colors.gray[100],
          '--rounded-box': '0.5rem',
          '--rounded-btn': '0.25rem',
          '--tab-radius': '0.25rem',
        },
      },
    ],
  },
};
