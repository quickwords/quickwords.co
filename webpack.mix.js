const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')

mix.js('src/js/app.js', './dist/js/app.js')
    .sass('src/sass/app.sass', './dist/css/app.css')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.js') ],
    })
    // .version()
    .copyDirectory('src/assets', 'dist/assets')
    .copy('src/index.html', 'dist/index.html')
    .browserSync('http://quickwords.co.dev/')
