module.exports = {
    entry: "./app/entry.js",
    output: {
        path: __dirname +'/build/',
        filename: "bundle.js"
    },
    devtool: "#sourcemap",
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel" }
        ]
    }
};
