/* eslint-disable */

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        primary: '#FF9F29',
        secondary: '#1D1A1A',
      }),
      margin: {
        '-540': '-540px',
      },
    },
  },
  // theme: {
  //     extend: {
  //         fontFamily: {
  //             sans: ['Fira Sans', 'sans-serif'],
  //         },
  //     },
  // },
  variants: {
    extend: {},
  },
  plugins: [],
};
