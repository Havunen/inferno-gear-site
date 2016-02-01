'use strict';

const gulp = require('gulp'),
    util = require('gulp-util'),
    size = require('gulp-size'),
    del = require('del'),
    htmlMin = require('gulp-htmlmin'),
    rollup = require('rollup-stream'),
    eslint = require('gulp-eslint'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
    postcss  = require('gulp-postcss'),
    cssmqpacker = require('css-mqpacker'),
    scss = require('postcss-scss'),
    nested = require('postcss-nested'),
    cssimport = require('postcss-import'),
    cssvars = require('postcss-simple-vars'),
    rename = require('gulp-rename'),
    colorfunctions = require("postcss-color-function"),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    babel = require('rollup-plugin-babel'),
    npm = require('rollup-plugin-npm'),
    commonjs = require('rollup-plugin-commonjs'),
    json = require('rollup-plugin-json'),
    replace = require('rollup-plugin-replace'),
    isRelease = (util.env.mode === 'release');

cssnano({
    discardComments: {removeAll: true}
});

eslint({
    useEslintrc: true
});

autoprefixer({
    browsers: ['last 2 versions']
});

cssmqpacker({
    sort: true
});

//
// Configs
//

gulp.task('htaccess', function() {
    return gulp.src('config/.htaccess')
        .pipe(gulp.dest('build'));
});


//
// Lint Scripts
//

gulp.task('eslint', function () {
    return gulp.src('src/js/**')
        .pipe(eslint())
        .pipe(eslint.format()); // outputs the lint results to the console.
});

//
// Styles
//

gulp.task('styles', function () {
    var processors = [cssimport, cssvars, nested, autoprefixer,colorfunctions, cssmqpacker, cssnano];
    return gulp.src('src/scss/index.scss')
        .pipe(postcss(processors, {syntax: scss}))
        .pipe(size())
        .pipe(rename('bundle.css'))
        .pipe(gulp.dest('build/css'));
});

//
// Scripts
//

gulp.task('scripts', function (done) {
    return rollup({
            entry: './src/js/main.js',
            sourceMap: false,
            format: 'iife',
            plugins: [
                json(),
                babel({ runtimeHelpers: true }),
                npm(),
                commonjs({
                    // search for files other than .js files (must already
                    // be transpiled by a previous plugin!)
                    include: [
                        'node_modules/*/**'
                    ]
                }),
                replace({
                    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
                })
            ]
        }
    )
    .pipe(source('main.js', './src/js'))
    .pipe(buffer())
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./build/js'));
});

//
// Clean
//

gulp.task('clean', function (done) {
    del(['build/**/*']).then(function(){
        done();
    });
});

//
// Images
//

gulp.task('images', function () {
    return gulp.src('src/img/**')
        .pipe(gulp.dest('build/img'))
        .pipe(size({title: 'images'}));
});

//
// HTML
//

gulp.task('html', function () {
    return gulp.src(['src/index.html'])
        .pipe(htmlMin({
            collapseWhitespace: true,
            preserveLineBreaks: false
        }))
        .pipe(gulp.dest('build'))
        .pipe(size({title: 'html'}));
});

//
// Watch
//

gulp.task('watch', ['html', 'styles', 'eslint', 'scripts', 'htaccess', 'images'], function () {
    function changeEvent(evt) {
        util.log(
            'File',
            util.colors.cyan(evt.path.replace(new RegExp('/.*(?=/src)/'), '')),
            'was',
            util.colors.magenta(evt.type));
    }
    gulp.watch('src/index.html', ['html']).on('change', changeEvent);
    gulp.watch('src/scss/**', ['styles']).on('change', changeEvent);
    gulp.watch('src/js/**', ['scripts', 'eslint']).on('change', changeEvent);
    gulp.watch('src/img/**', ['images']).on('change', changeEvent);
});

//
// Default
//
gulp.task('default', ['clean'], function() {
    gulp.start(['watch']);
});
