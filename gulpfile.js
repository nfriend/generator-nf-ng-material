var gulp = require('gulp');
var ts = require('gulp-typescript');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var tsProject = ts.createProject('tsconfig.json');
console.log(tsProject.options.outDir);

gulp.task('scripts', function () {
    var tsResult = tsProject.src()
        .pipe(ts(tsProject));

    return tsResult.js.pipe(gulp.dest(tsProject.options.outDir));
});

gulp.task('styles', function() {
    gulp.src('./src/styles/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./src/styles/'));
});

gulp.task('watch', ['scripts', 'styles'], function () {
    gulp.watch('./src/scripts/**/*.ts', ['scripts']);
    gulp.watch('./src/styles/**/*.scss', ['styles']);
});

gulp.task('default', ['watch']);