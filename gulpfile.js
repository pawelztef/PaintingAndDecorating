var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
var replace = require('gulp-replace');
var injectString = require('gulp-inject-string');
var inject = require('gulp-inject');

var paths = {
  src: 'src/**/*',
  srcHTML: 'src/**/*.html',
  srcStyles: 'src/**/*.sass',
  srcScripts: 'src/**/*.js',

  tmp: 'tmp',
  tmpHTML: 'tmp/index.html',
  tmpCSS: 'tmp/**/*.css',
  tmpScripts: 'tmp/**/*.js',

  dist: 'dist',
  distHTML: 'dist/index.html',
  distCSS: 'dist/**/*.css',
  distScripts: 'dist/**/*.js'
};

function html(){
  return gulp.src(paths.srcHTML)
    .pipe(gulp.dest(paths.tmp))
    .pipe(browserSync.stream());
}

function styles() {
  return gulp.src(paths.srcStyles)
    .pipe(sass())
    .pipe(gulp.dest(paths.tmp))
    .pipe(browserSync.stream());
}

function scripts() {
  return gulp.src(paths.srcScripts)
    .pipe(gulp.dest(paths.tmp))
    .pipe(browserSync.stream());
}

function injectLinks () {
  var css = gulp.src(paths.tmpCSS);
  var js = gulp.src(paths.tmpScripts);
  return gulp.src(paths.tmpHTML)
    .pipe(inject( css, { relative:true } ))
    .pipe(inject( js, { relative:true } ))
    .pipe(gulp.dest(paths.tmp))
    .pipe(browserSync.stream());
};

function watch() {
  browserSync.init({
    server: {
      baseDir: 'tmp',
    },
  });
  // gulp.watch('app/images/*', imgSquash);
  gulp.watch(paths.srcStyles, styles);
  gulp.watch(paths.srcHTML, html); 
  gulp.watch(paths.srcScripts, scripts);
}

const copy = gulp.parallel(html, styles, scripts);
const staging = gulp.series(copy, injectLinks, watch);
exports.watch = watch;
exports.staging = staging;
exports.copy = copy;
exports.injectLinks = injectLinks;
exports.html = html;
exports.styles = styles;
exports.scripts = scripts;
