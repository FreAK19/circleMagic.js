"use strict";

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageResize = require('gulp-image-resize');
const autoprefixer = require('gulp-autoprefixer');
const concatCSS = require('gulp-concat-css');
const rename = require('gulp-rename');
const jsmin = require('gulp-jsmin');
const csso = require('gulp-csso');


let image_prop = {
    width : 1600,
    height : 700,
    crop : true,
    upscale : false
};

gulp.task('image', () => {
    gulp.src(['src/img/*.png', 'src/img/*.jpg'])
        .pipe(imagemin({
            optimizationLevel: 10,
        }))
        .pipe(imageResize(image_prop))
        .pipe(gulp.dest('dest/img'));
});


gulp.task('css', () => {
    gulp.src('src/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(csso())
        .pipe(concatCSS('dest/css/style.css'))
        .pipe(gulp.dest('dest/css/'));
});

gulp.task('js', ()=> {
    gulp.src('src/circleMagic.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
});

gulp.task('watch', () => {
    gulp.watch('src/css/*.css', 'css');
    gulp.watch('src/circleMagic.js', 'js');
});