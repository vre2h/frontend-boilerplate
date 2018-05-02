/* global require */
/* eslint-disable */

'use strict';
 
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	cleanCSS = require('gulp-clean-css'),
	browserSync  = require('browser-sync').create(),
	rename = require('gulp-rename'),
	del = require('del'),
	run = require('run-sequence'), //запуск тасков последовательно
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	browserify = require('browserify'),
	source = require('vinyl-source-stream'),
	buffer = require('vinyl-buffer'),
	sourcemaps = require('gulp-sourcemaps'),
	babel = require('gulp-babel'),
	babelify = require('babelify');

// sass compiler and minifier
gulp.task('styles', function () {
	return gulp.src('src/styles/styles.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('src/styles/'))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(rename('styles.min.css'))
		.pipe(gulp.dest('src/styles/'))
		.pipe(browserSync.reload({stream: true}));
});

// watcher
gulp.task('watch', function () {
	gulp.watch('src/styles/styles.{scss,sass}', ['styles']);
	gulp.watch(['src/scripts/**/*.js'], ['scripts']);
	gulp.watch('src/*.html', browserSync.reload);
});

// Очистка папки build
gulp.task('clean', function() {
	return del('build');
});

// Сборка проекта в папку build
gulp.task('build', function(fn) {
	run(
		'clean',
		'styles',
		'js',
		'copy',
		fn
	);
});

gulp.task('copy', function() {
	return gulp.src([
		// 'src/fonts/**/*.*',
		'src/scripts/bundle.js',
		'src/styles/styles.min.css',
		'src/*.html'
	], {
		base: 'src'
	})
		.pipe(gulp.dest('build'));
});

// Сборка скриптов
gulp.task('js', function() {
	return gulp.src('src/scripts/index.js')
		.pipe(babel())
		.pipe(uglify())
		.pipe(rename('index.min.js'))
    .pipe(gulp.dest('src/scripts/'))
    .pipe(browserSync.reload({stream: true}));
});
 
// Lets bring es6 to es5 with this.
// Babel - converts ES6 code to ES5 - however it doesn't handle imports.
// Browserify - crawls your code for dependencies and packages them up 
// into one file. can have plugins.
// Babelify - a babel plugin for browserify, to make browserify 
// handle es6 including imports.
gulp.task('scripts', function() {
	browserify({
    	entries: './src/scripts/index.js',
    	debug: true
  	})
    .transform(babelify)
		.bundle()
		.pipe(source('bundle.js'))
    .pipe(gulp.dest('./src/scripts/'));
});