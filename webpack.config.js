module.exports = {
    entry: "./app/my_jss/index.js",
    output: {
        path: __dirname+'/build/',
        filename: "bundle.js"
    },
  devtool: "#sourcemap",
  module: {
    loaders: [
         { test: /\.js$/, loader: "babel" }
        ]
    }
};
