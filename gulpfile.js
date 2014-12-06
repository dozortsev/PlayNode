var gulp = require('gulp'),
    jade = require('gulp-jade');

gulp.task('jade', function () {
    gulp.src('jade/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    gulp.watch('jade/*.jade', ['jade'])
});

gulp.task('default', ['jade', 'watch']);



