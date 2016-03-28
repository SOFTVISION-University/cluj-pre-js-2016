module.exports = function(config) {
    config.set({
        basePath: '../',
        frameworks: ["jasmine"],
        files: [
          'core/**/*.js',
          'App/threePlaylist.js',
            'App/songs.js',


            'App/usersParse.js',
            'App/**/*.js',
            'tests/unit/**/*.js'
        ],
        autoWatch: true,
        singleRun: false,
        browsers: ['PhantomJS'],
        preprocessors: { 'App/**/*.js': 'coverage' },
        reporters: ['progress', 'coverage'],
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        }
    });
};
