const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  corePlugins: [
    'boxShadow',
    'borderRadius',
    'backgroundColor',
    'display',
    'fontSize',
    'margin',
    'padding',
    'preflight',
    'textAlign',
    'textColor',
    'textDecoration',
  ],
  theme: {
    colors: {
      white: colors.white,
      blue: colors.blue,
      red: colors.red,
    },
  },
};
