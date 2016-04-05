module.exports = {
    entry: "./BackboneApp/entry.js",
    output: {
        path: __dirname+'/build/',
        filename: "bundle.js"
    },
    devtool: "#eval",
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel" }
        ]
    }
};
