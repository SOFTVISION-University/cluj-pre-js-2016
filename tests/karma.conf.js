module.exports = function(config) {
    config.set({
        basePath: '../',
        frameworks: ["jasmine"],
        files: [
            'core/**/*.js',
            'app/song.js',
            'app/user.js',
            'app/playlist.js',
           'tests/unit/user-tests.js',
           'tests/unit/song-tests.js',
           'tests/unit/playlist-tests.js'
        ],
        autoWatch: true,
        singleRun: false,
        browsers: ['PhantomJS'],
        preprocessors: { 'app/**/*.js': 'coverage' , 'core/**/*.js': 'coverage' },
        reporters: ['progress', 'coverage'],
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        }
    });
};
