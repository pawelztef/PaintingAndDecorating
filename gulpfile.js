var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
var replace = require('gulp-replace');


function styles(){
  return gulp.src('app/sass/**/*.sass')
    .pipe(replace('url("', 'url("app/minified/images/'))
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
}

function imgSquash() {
  return gulp.src("app/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("app/minified/images"));
}

function watch() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  });

  gulp.watch('app/images/*', imgSquash);
  gulp.watch('app/sass/**/*.sass', styles);
  gulp.watch('app/*.html').on('change', browserSync.reload);
  gulp.watch('app/js/**/*.js').on('change', browserSync.reload);
}

exports.styles = styles;
exports.imgSquash = imgSquash;
exports.watch = watch;


