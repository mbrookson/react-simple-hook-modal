const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./*.html', './*.tsx', './components/*.tsx'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [tailwindcss(), autoprefixer(), cssnano(), purgecss],
};
