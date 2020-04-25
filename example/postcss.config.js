const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./*.html', './*.tsx', './src/*.tsx'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);

module.exports = {
  plugins: [
    tailwindcss(),
    autoprefixer(),
    cssnano(),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
};
