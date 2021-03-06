var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './containers/Root'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'counter.min.js',
    libraryTarget: 'umd',
    library: 'counter'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  externals: [
    {
      "react": {
        root: "React",
        commonjs2: "react",
        commonjs: "react",
        amd: "react"
      },
      "react/addons": {
        root: "React",
        commonjs2: "react/addons",
        commonjs: "react/addons",
        amd: "react/addons"
      }
    }
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: __dirname
    }]
  }
};
