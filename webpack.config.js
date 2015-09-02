var webpack = require('webpack');

module.exports = {
  cache: true,
  debug: true,
  devtool: 'source-map',
  context: __dirname + '/src',
  entry: [
    'webpack-dev-server/client?http://localhost:4000',
    'webpack/hot/only-dev-server',
    './index'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.scss'],
    modulesDirectories: [
      'node_modules',
      'src'
    ],
    fallback: __dirname
  },
  externals: [
    {
      "window": "window"
    }
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
