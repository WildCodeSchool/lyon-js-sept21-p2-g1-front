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
        primary: '#FCCF31',
        secondary: '#1D1A1A',
      }),
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
