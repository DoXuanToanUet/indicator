const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const { src, series, parallel, dest, watch } = require('gulp');


function cssTask() {
    return src('assets/css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
}

function minifyCss() {
    return src('dist/css/*.css')
        .pipe(concat('style.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist'));
}

function devWatch() {
    watch('assets/css/*.scss', cssTask);
    watch('assets/css/*.scss', minifyCss);
}

exports.cssTask = cssTask;
exports.devWatch = devWatch;
exports.minifyCss = minifyCss;
exports.default = devWatch;