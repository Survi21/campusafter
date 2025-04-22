const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');

gulp.task('minify-css', () => {
 return gulp.src('style/*.css')
 .pipe(cleanCSS())
 .pipe(gulp.dest('dist/css'));
});

gulp.task('minify-html', () => {
 return gulp.src('./*.html')
 .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
 .pipe(gulp.dest('dist'))
});
gulp.task('default', gulp.parallel('minify-css', 'minify-html'));