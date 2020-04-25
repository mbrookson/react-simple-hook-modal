const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    colors: {
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
      red: colors.red,
    },
  },
};
