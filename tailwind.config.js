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
      padding: {
        30: '2.8rem',
      },

      height: {
        30: '15rem',
      },
    },
  },
  font: {
    variants: {
      extend: {
        fontFamily: ['Fira', 'sans'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
