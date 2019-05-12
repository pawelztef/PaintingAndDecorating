var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


function styles(){
  return gulp.src('app/sass/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  });

  gulp.watch('app/sass/**/*.sass', styles);
  gulp.watch('app/*.html').on('change', browserSync.reload);
  gulp.watch('app/js/**/*.js').on('change', browserSync.reload);
}

exports.styles = styles;
exports.watch = watch;


