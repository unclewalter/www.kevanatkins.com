var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify');

gulp.task('js-fef', function(){
    return gulp.src([
                    'assets/js/src/*.js'
                    ])
        .pipe(gp_concat('app.js'))
        .pipe(gulp.dest('assets/js'))
        .pipe(gp_rename('app.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('assets/js'));
});

gulp.task('watch', function () {
   gulp.watch(['assets/js/**/*.js', 'gulpfile.js'], ['js-fef']);
});

gulp.task('default', ['js-fef'], function(){});
