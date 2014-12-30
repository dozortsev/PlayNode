var gulp        = require('gulp'),
    jade        = require('gulp-jade'),
    watch       = require('gulp-watch'),
    livereload  = require('gulp-livereload');

gulp.task('jade', function () {
    gulp.src('views/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('dist'));
});

gulp.task('jade', function () {
    gulp.src('views/*.jade')
        .pipe(watch())
        .pipe(jade())
        .pipe(gulp.dest('html/'))
        .pipe(livereload());
});

//gulp.task('watch', function() {
//    livereload.listen();
//    gulp.watch('views/*.jade', ['jade']);
//});