var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: "./app/App.jsx",
  output: {
    path: './public',
    filename: "bundle.js"
  },
  resolve: {extensions: ['', '.js', '.jsx'], fallback: path.join(__dirname, "node_modules") },
  resolveLoader: { fallback: path.join(__dirname, "node_modules") },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
};
