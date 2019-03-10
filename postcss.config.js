const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    tailwindcss('./tailwind.js'),
    cssnano({
      preset: 'default',
    }),
    purgecss({
      content: ['./src/index.html'],
      extractors: [
        {
          extractor: class {
            static extract(content) {
              return content.match(/[a-zA-Z0-9-:_/]+/g) || [];
            }
          },
          extensions: ['html'],
        },
      ],
    }),
    autoprefixer,
  ],
}
