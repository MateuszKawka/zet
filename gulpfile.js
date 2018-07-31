var gulp = require('gulp');
//var gulpBabel = require('gulp-babel');
var gulpCSSMinify = require('gulp-clean-css');
var gulpAutoprefixer = require('gulp-autoprefixer');
var concatCss = require('gulp-concat-css');

gulp.task('css', function(){
    return gulp.src('./sources/styles/*.css')
        .pipe(gulpAutoprefixer({
            browsers: ['last 2 versions'],
            cascade: false }))
      .pipe(gulpCSSMinify())
      .pipe(gulp.dest('./dist'))
  });

gulp.task('bundleCSS', function () {
    return gulp.src('./dist/*.css')
      .pipe(concatCss("./bundle.css"))
      .pipe(gulp.dest('dist/cssBundle'));
  });