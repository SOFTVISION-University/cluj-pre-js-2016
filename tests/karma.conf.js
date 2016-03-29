module.exports = function(config) {
    config.set({
        basePath: '../',
        frameworks: ["jasmine"],
        files: [
            'core/**/*.js',
            'app/my_jss/dataController/*.js',
            'app/my_jss/accounts/*.js',
              'app/my_jss/music/Song.js',
              'app/my_jss/music/Playlist.js',
              'app/my_jss/music/PlaylistsManager.js',
          //    'app/my_jss/music/domConnectPlaylistFunc.js',
            'tests/unit/**/*.js'
        ],
        autoWatch: true,
        singleRun: false,
        browsers: ['Chrome'],
        preprocessors: { 'app/**/*.js': 'coverage','core/**/*.js': 'coverage' },
        reporters: ['progress', 'coverage'],
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        }
    });
};
