var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
var replace = require('gulp-replace');
var inject = require('gulp-inject-string');

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
  return gulp.src(paths.srcHTML).pipe(gulp.dest(paths.tmp));
}

function styles() {
  return gulp.src(paths.srcStyles)
    .pipe(sass())
    .pipe(gulp.dest(paths.tmp));
  // .pipe(browserSync.stream());
}

function scripts() {
  return gulp.src(paths.srcScripts)
    .pipe(gulp.dest(paths.tmp));
  // .pipe(browserSync.stream());
}

function inject() {
  return gulp.src(paths.srcStyles)
    .pipe(sass())
    .pipe(gulp.dest(paths.tmp));
  // .pipe(browserSync.stream());
}
  // var targetTagJs = "<!-- inject:js -->";
  // var targetTagCss = "<!-- inject:css -->";

  // return gulp.src(paths.tmpHtml)
  // .pipe(inject.after(targetTagCss, "hello"))
  // .pipe(gulp.dest(paths.tmpCSS));

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


// const staging = gulp.series(gulp.parallel(html, styles, scripts), inject);
// exports.watch = watch;
// exports.staging = staging;
exports.html = html;
exports.styles = styles;
exports.scripts = scripts;
exports.inject = inject;


