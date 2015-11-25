var gulp = require('gulp'),
    minifyCss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename');

gulp.task('default', function() {
  return gulp.src('styles.css')
    .pipe(minifyCss({ compatibility: 'ie8' }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('.'));
});
