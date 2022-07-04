
var gulp = require('gulp');
var webpack = require('gulp-webpack');
var config = require('./config.js');
var gulp_sass = require('gulp-sass')(require('sass'));

gulp.task('webpack',function(){
    //js
    return gulp.src(config.webpack.entry)
    .pipe(webpack(config.webpack))
    .pipe(gulp.dest(config.js.dest));
});


gulp.task('css',function(){
    //css
    return gulp.src(config.css.src)
           .pipe(gulp_sass())
           .pipe(gulp.dest(config.css.dest));
});

//defaultのタスクはcssコンパイルとjsのコンパイル
gulp.task('default', gulp.parallel('css','webpack'));
