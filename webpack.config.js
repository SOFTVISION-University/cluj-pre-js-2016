module.exports = {
    entry: "./App/entry.js",
    output: {
        path: __dirname+"/Build/",
        filename: "bundle.js"
    },
    devtool: "#sourcemap",
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel" }
        ]
    }
};
