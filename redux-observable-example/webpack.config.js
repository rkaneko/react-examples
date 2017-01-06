'use strict';

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './src/js/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  node: {
    fs: 'empty',
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src')
        ],
        // Only run `.js`
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /src\/test/
        ]
      },
      {
        test: /\.css$/,
        exclude: [path.resolve(__dirname, 'src', 'css', 'some.css')],
        loader: 'style-loader!css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]!postcss-loader'
      },
      {
        test: /\.(woff|woff2|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'url-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /(\.txt|\.md|LICENSE)$/,
        loader: 'raw-loader'
      },
      {
        test: /.html$/,
        loader: 'html-loader'
      }
    ]
  },
  postcss: function (webpack) {
    return [
      autoprefixer
    ];
  }
}
