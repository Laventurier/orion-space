var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browser = require('browser-sync');

gulp.task("scss-compile", function() {
    return gulp.src('app/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browser.reload({
            stream: true
        }))
});



gulp.task('browser-sync', function() {
    browser({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});
gulp.task('watch', ['browser-sync', 'scss-compile'], function() {
    gulp.watch('app/scss/*.scss', ['scss-compile']);
});
