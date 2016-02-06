module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['systemjs', 'jasmine'],
        files: [
            './src/scripts/compiled/**/*.spec.js'
        ],
        browsers: ['Chrome'],
        singleRun: false,
        reporters: ['html'],
        autoWatch: true,
        plugins: [
            'karma-jasmine',
            'karma-systemjs',
            'karma-chrome-launcher',
            'karma-jasmine-html-reporter-livereload'
        ],
        systemjs: {
            configFile: './src/scripts/config.js',
            serveFiles: ['./src/scripts/jspm_packages/**/*.js', './src/scripts/compiled/**/*.js'],
            config: {
                transpiler: null,
                baseURL: "./",
                paths: {
                    "github:*": "./base/src/scripts/jspm_packages/github/*",
                    "systemjs": "./node_modules/systemjs/dist/system.js",
                    "system-polyfills": "./node_modules/systemjs/dist/system-polyfills.js",
                    "es6-module-loader": "./node_modules/es6-module-loader/dist/es6-module-loader.js",
                }
            },
        }
    });
};