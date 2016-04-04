module.exports = {
  entry: './app/entry.js',
  output: {
    path: __dirname+ '/build/',
    filename: "bundle.js"
  },
  module: {
    loaders: [
        { test: /\.js$/, loader: 'babel-loader' }
    ]
  }
};
