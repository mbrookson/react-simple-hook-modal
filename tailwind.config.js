const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  prefix: 'rsm-',
  corePlugins: [
    'alignItems',
    'boxShadow',
    'borderRadius',
    'backgroundColor',
    'display',
    'flex',
    'flexDirection',
    'inset',
    'justifyContent',
    'margin',
    'maxHeight',
    'opacity',
    'overflow',
    'padding',
    'position',
    'preflight',
    'textAlign',
    'textColor',
    'width',
    'zIndex',
  ],
  theme: {
    colors: {
      white: colors.white,
      gray: colors.gray,
    },
    zIndex: {
      40: 40,
      9999: 9999,
      auto: 'auto',
    },
  },
};
