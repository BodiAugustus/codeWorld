/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xxxs: '359px',
      xxs: '373px',
      xs: '384px',
      xp: '394px',
      small: '404px',
      ...defaultTheme.screens,
    },
    extend: {
      animation: {
        'spin-slow': 'spin 15s linear infinite',
      },
    },
    fontFamily: {
      poppins: 'Poppins, sans-serif',
      roboto: 'Roboto, sans-serif',
    },

    flex: {
      2: '2 2 0%',
      3: '3 3 0%',
      4: '4 4 0%',
    },
    opacity: ['disabled'],
    cursor: ['disabled'],
  },
  plugins: [],
};
