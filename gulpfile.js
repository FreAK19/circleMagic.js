/**
 * Created by Andrew on 22.05.2017.
 */

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');


gulp.task('image', function () {
    return gulp.src(['src/img/*.png', 'src/img/*.jpg'])
        .pipe(imagemin({
            optimizationLevel: 10
        }))
        .pipe(gulp.dest('dest/img/'));
});



