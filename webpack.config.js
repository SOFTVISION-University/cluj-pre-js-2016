module.exports = {
    entry: "./app/entry.js",
    output: {
        path: __dirname+'/build/',
        filename: "bundle.js"
    },
    devtol : "#sourcemap",
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel" }
        ]
    }
};
