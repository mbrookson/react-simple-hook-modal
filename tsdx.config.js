const postcss = require('rollup-plugin-postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        inject: false,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: `${__dirname}/dist/styles.css`,
        plugins: [tailwindcss(), autoprefixer(), cssnano()],
      })
    );
    return config;
  },
};
