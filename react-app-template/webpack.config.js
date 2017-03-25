var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

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
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  node: {
    fs: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: [/node_modules/],
        use: [
          {loader: 'babel-loader'}
        ]
      },
      {
        test: /\.css$/,
        exclude: [path.resolve(__dirname, 'src', 'css', 'some.css')],
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules:true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () =>
                [
                  require('autoprefixer')
                ]
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {loader: 'url-loader'}
          // {loader: 'url-loader' options: {limit: 10000, minetype: 'application/font-woff'}}
        ]
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: [
          {loader: 'url-loader'}
        ]
      },
      {
        test: /(\.txt|\.md|LICENSE)$/,
        use: [
          {loader: 'raw-loader'}
        ]
      }
    ]
  }
}
