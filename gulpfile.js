/* global require */

'use strict';
 
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	cleanCSS = require('gulp-clean-css'),
	browserSync  = require('browser-sync').create(),
	rename = require('gulp-rename'),
	del = require('del'),
	run = require('run-sequence'), //запуск тасков последовательно
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'); 

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
	gulp.watch('src/styles/styles.scss', ['styles']);
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
		'src/scripts/index.min.js',
		'src/styles/styles.min.css',
		'src/*.html'
	], { 
		base: 'src'
	})
		.pipe(gulp.dest('build'));
});


// Слежение за изменениями, локальный сервер
gulp.task('serve', ['styles'], function() {
	browserSync.init({
		server: 'src',
		notify: false,
		open: true,
		tunnel: false,
		cors: true,
		ui: false
	});

	gulp.watch('src/styles/styles.{scss,sass}', ['styles']);
	gulp.watch(['src/scripts/**/*.js'], ['js']);
	gulp.watch('src/*.html', browserSync.reload);
});

// Сборка скриптов
gulp.task('js', function() {
	return gulp.src('src/scripts/babel/index.js')
		.pipe(concat('index.min.js'))
		.pipe(uglify())
    .pipe(gulp.dest('src/scripts/'))
    .pipe(browserSync.reload({stream: true}));
});
