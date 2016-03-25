module.exports = function(config) {
    config.set({
        basePath: '../',
        frameworks: ["jasmine"],
        files: [
            'app/playlists.js',
            'app/**/*.js',
            'tests/unit/**/*.js'

        ],
        autoWatch: true,
        singleRun: false,
        browsers: ['PhantomJS'],
        preprocessors: { 'app/scripts/scripts.js': 'coverage' },
        reporters: ['progress', 'coverage'],
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        }
    });
};
