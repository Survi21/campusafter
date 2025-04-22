const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');

// File paths
const paths = {
  html: './*.html',
  css: './style.css',
  js: './script.js',
  images: './img/**/*'
};

// Process CSS
gulp.task('css', function() {
  return gulp.src(paths.css)
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
});

// Process JavaScript
gulp.task('js', function() {
  return gulp.src(paths.js)
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.stream());
});

// Optimize images
gulp.task('images', function() {
  return gulp.src(paths.images)
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'));
});

// Copy HTML files
gulp.task('html', function() {
  return gulp.src(paths.html)
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
});

// Watch for changes
gulp.task('watch', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch(paths.css, gulp.series('css'));
  gulp.watch(paths.js, gulp.series('js'));
  gulp.watch(paths.html, gulp.series('html'));
  gulp.watch(paths.images, gulp.series('images'));
});

// Build task
gulp.task('build', gulp.parallel('html', 'css', 'js', 'images'));

// Default task
gulp.task('default', gulp.series('build', 'watch'));