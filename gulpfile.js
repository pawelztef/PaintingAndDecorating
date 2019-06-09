var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
var replace = require('gulp-replace');
var paths = {
  src: 'src/**/*',
  srcHTML: 'src/**/*.html',
  srcSASS: 'src/**/*.sass',
  srcJS: 'src/**/*.js',
  tmp: 'tmp',
  tmpHTML: 'tmp/index.html',
  tmpCSS: 'tmp/**/*.css',
  tmpJS: 'tmp/**/*.js',
  dist: 'dist',
  distHTML: 'dist/index.html',
  distCSS: 'dist/**/*.css',
  distJS: 'dist/**/*.js'
};

function html(){
  return gulp.src(paths.srcHTML).pipe(gulp.dest(paths.tmp));
}

function css() {
  return gulp.src(paths.srcSASS)
    .pipe(sass())
    .pipe(gulp.dest(paths.tmp));
    // .pipe(browserSync.stream());
}

function javaScripts() {
  return gulp.src(paths.srcJS)
    .pipe(gulp.dest(paths.tmp));
    // .pipe(browserSync.stream());
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

// exports.styles = styles;
// exports.imgSquash = imgSquash;
// exports.watch = watch;
exports.html = html;


