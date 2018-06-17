const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')
const glob = require('glob-all')
const PurgecssPlugin = require('purgecss-webpack-plugin')

// Custom PurgeCSS extractor for Tailwind that allows special characters in
// class names.
//
// https://github.com/FullHuman/purgecss#extractor
class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-z0-9-:\/]+/g) || [];
    }
}

// .setPublicPath('./dist')
mix
    .js('src/js/app.js', 'dist/js/app.js')
    .sass('src/sass/app.sass', 'dist/css/app.css')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.js') ],
    })
    .copyDirectory('src/assets', 'dist/assets')
    .copy('src/index.html', 'dist/index.html')

if (! mix.config.production) {
    mix.browserSync({
        proxy: 'quickwords.co.dev',
        files: [
            'src/*.html',
            'src/*.js',
            'src/*.sass',
            'dist/css/app.css',
            'tailwind.js'
        ],
    })
}

// if (mix.config.production) {
//     mix.version()
// }

// Only run PurgeCSS during production builds for faster development builds
// and so you still have the full set of utilities available during
// development.
if (mix.config.production) {
    mix.webpackConfig({
        plugins: [
            new PurgecssPlugin({
                // Specify the locations of any files you want to scan for class names.
                paths: glob.sync([
                    path.join(__dirname, 'src/*.html')
                ]),
                extractors: [
                    {
                        extractor: TailwindExtractor,

                        // Specify the file extensions to include when scanning for
                        // class names.
                        extensions: ['html', 'js', 'php', 'vue']
                    }
                ]
            })
        ]
    })
}
