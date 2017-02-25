'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

gulp.task('sass-prod', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass-dev', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch:prod', function () {
  gulp.watch('./sass/**/*.scss', ['sass-prod']);
});

gulp.task('sass:watch:dev', function () {
    gulp.watch('./sass/**/*.scss', ['sass-dev']);
});