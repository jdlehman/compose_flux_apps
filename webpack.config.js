var webpack = require('webpack');
var autoprefixer = require('autoprefixer-core');

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
      { test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'postcss']
      },
      {
        test: /\.(jpg|svgz|png)$/,
        loader: 'file?name=[path][name]-[hash].[ext]'
      },
      { test: /\.svg$/,
        loaders: [
          'svg?name=[path][name]-[hash].[ext]',
          'svgo'
        ],
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  postcss: [autoprefixer]
};
