const postcss = require('rollup-plugin-postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.html', './src/**/*.tsx'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        inject: false,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: `${__dirname}/dist/styles.css`,
        plugins: [tailwindcss(), autoprefixer(), cssnano(), purgecss],
      })
    );
    return config;
  },
};
