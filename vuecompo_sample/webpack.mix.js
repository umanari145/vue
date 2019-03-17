const mix = require('laravel-mix');

//console.log(mix)
mix.js('src/app.js', 'dist/build.js')


//本番以外はdebug用にsource-mapをつける
if (!mix.inProduction()) {
    mix.webpackConfig({
        devtool: 'source-map'
    })
    .sourceMaps()
}
