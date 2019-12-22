// Подключить необходимы плагины
const gulp = require('gulp');
const browserSync = require("browser-sync").create();
const fileinclude = require('gulp-file-include');
const watch = require('gulp-watch');
const less = require('gulp-less'); // Компиляция LESS
const plumber = require('gulp-plumber'); // Обработка ошибок
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require("gulp-autoprefixer");
const minifyCss = require("gulp-minify-css");


// Написать инструкции для этих плагинов

// Gulp таск для компиляции HTML
gulp.task('html', function(callback){

    return gulp.src('./app/html/*.html')
    .pipe(plumber({
            errorHandler: notify.onError(function(err){
                return {
                    title: 'HTML include',
                    sound: false,
                    message: err.message
                }
            })
        }))
        .pipe( fileinclude({ prefix: '@@'}) )
        .pipe( gulp.dest('./app/'));

    callback();
});   

// Gulp таск для компиляции LESS 
gulp.task('less', function(callback) {
    return gulp.src('./app/less/main.less')
        .pipe(plumber({
            errorHandler: notify.onError(function(err){
                return {
                    title: 'Styles',
                    sound: false,
                    message: err.message
                }
            })
        }))
        .pipe( sourcemaps.init() )
        .pipe( less() )
        .pipe( autoprefixer({ overrideBrowserslist: ['last 4 versions'] }) )
        .pipe( minifyCss() )
        .pipe( sourcemaps.write() )
        .pipe( gulp.dest('./app/css/') )
    callback();
});

// Gulp задача для слежения за файлами
gulp.task('watch', function() {
    watch('./app/html/**/*.html', gulp.parallel('html'));
    watch('./app/less/**/*.less', gulp.parallel('less'));
    watch(['./app/*.html', './app/css/**/*.css'], gulp.parallel( browserSync.reload ) )
});

// Gulp таск для старта локального сервера
gulp.task("server", function () {
	browserSync.init({
		notify: false,
		port: 1000,
		server: { baseDir: './app/' }
	});
});

// Gulp таск - по умолчанию, который стартует сервер и запускает Watch
gulp.task('default', gulp.parallel('server', 'watch') );
