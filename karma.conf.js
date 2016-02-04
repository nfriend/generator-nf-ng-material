module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            './src/scripts/compiled/**/*.spec.js'
        ],
        browsers: ['Chrome'],
        singleRun: false,
        reporters: ['html'],
        autoWatch: true
    });
};