'use strict';

var gulp = require('gulp');
var ts = require('gulp-typescript');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var KarmaServer = require('karma').Server;
var jspm = require('gulp-jspm');
var clean = require('gulp-clean');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var htmlReplace = require('gulp-html-replace');
var htmlmin = require('gulp-htmlmin');
var runSequence = require('run-sequence');
var tslint = require("gulp-tslint");

var tsProject = ts.createProject('tsconfig.json');
console.log(tsProject.options.outDir);

gulp.task('scripts', function () {
    var tsResult = tsProject.src()
        .pipe(ts(tsProject));

    return tsResult.js.pipe(gulp.dest(tsProject.options.outDir));
});

gulp.task('tslint', function () {
    return gulp.src(['./src/scripts/**/*.ts', '!./src/scripts/typings/**/*'])
        .pipe(tslint())
        .pipe(tslint.report('prose', {
            summarizeFailureOutput: true
        }));
});

gulp.task('tslint-watch', function() {
    return gulp.watch(['./src/scripts/**/*.ts', '!./src/scripts/typings/**/*'], ['tslint']);
})

gulp.task('styles', function () {
    return gulp.src('./src/styles/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./src/styles/'));
});

gulp.task('test', ['scripts'], function (done) {
    new KarmaServer({
        configFile: __dirname + '/karma.conf.js'
    }, done).start();
});

gulp.task('watch', ['scripts', 'styles'], function () {
    gulp.watch('./src/scripts/**/*.ts', ['scripts']);
    gulp.watch('./src/styles/**/*.scss', ['styles']);
});

gulp.task('clean-dist', function () {
    return gulp.src('./dist', { read: false })
        .pipe(clean());
});

gulp.task('bundle-js', function () {
    var jspmOptions = {
        selfExecutingBundle: true,
        inject: true,
        minify: true
    }

    return gulp.src('./src/scripts/compiled/app.js')
        .pipe(sourcemaps.init())
        .pipe(jspm(jspmOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('minify-css', function () {
    return gulp.src('./src/styles/app.css')
        .pipe(sourcemaps.init())
        .pipe(cssnano())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('replace-index', function () {
    var htmlReplaceOptions = {
        'jsReferences': '<script src="app.bundle.js"></script>',
        'cssReferences': '<link href="app.css" rel="stylesheet" type="text/css" />'
    }

    return gulp.src('./src/index.html')
        .pipe(htmlReplace(htmlReplaceOptions))
        .pipe(gulp.dest('./dist'));
});

gulp.task('minify-html', function () {
    var htmlMinOptions = {
        collapseWhitespace: true
    }

    return gulp.src('./dist/**/*.html')
        .pipe(htmlmin(htmlMinOptions))
        .pipe(gulp.dest('./dist'));
})

gulp.task('dist', function (done) {
    runSequence(
        'clean-dist',
        ['scripts', 'styles'],
        ['bundle-js', 'minify-css', 'replace-index'],
        'minify-html',
        done);
});

gulp.task('default', ['watch']);