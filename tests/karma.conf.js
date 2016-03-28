module.exports = function(config) {
    config.set({
        basePath: '../',
        frameworks: ["jasmine"],
        files: [
            'core/**/*.js',
            'App/**/*.js',
            'tests/unit/**/*.js'
        ],
        autoWatch: true,
        singleRun: false,
        browsers: ['PhantomJS'],
        preprocessors: { 'App/**/*.js': 'coverage','core/**/*.js': 'coverage' },
        reporters: ['progress', 'coverage'],
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        }
    });
};
