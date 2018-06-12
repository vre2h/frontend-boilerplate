/* global require */
/* eslint-disable */

'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	cleanCSS = require('gulp-clean-css'),
	browserSync  = require('browser-sync').create(),
	rename = require('gulp-rename'),
	del = require('del'),
	rigger = require('gulp-rigger'),
	run = require('run-sequence'), //запуск тасков последовательно
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	sourcemaps = require('gulp-sourcemaps'),
	babel = require('gulp-babel');


	const path = {
		build: {
			html: 'build/',
			js: 'build/js',
			css: 'build/css'
		},
		src: {
			html: 'src/*.html',
			js: 'src/scripts/index.js',
			css: 'src/styles/styles.scss'
		},
		watch: {
			html: 'src/**/*.html',
			js: 'src/scripts/**/*.js',
			css: 'src/styles/**/*.scss'
		},
		clean: './build',
	}

	const blocks = ['src/scripts/blocks/example.js'];

// html:builder
gulp.task('html:build', function () {
	gulp.src(path.src.html)
		.pipe(rigger())
		.pipe(gulp.dest(path.src.html))
		.pipe(browserSync.reload({stream: true}));
})

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
	gulp.watch(['src/scripts/**/*.js'], ['js']);
	gulp.watch('src/*.html', browserSync.reload);
});

// Очистка папки build
gulp.task('clean', function() {
	return del(path.clean);
});


// Сборка скриптов
gulp.task('js', function() {
	return gulp.src(blocks)
		.pipe(concat('all.js'))
		.pipe(babel())
		.pipe(uglify())
		.pipe(rename('index.min.js'))
    .pipe(gulp.dest('src/scripts/'))
    .pipe(browserSync.reload({stream: true}));
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
