const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    app: './app.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  externals: {
    'reveal': 'Reveal',
    'Reveal': 'Reveal',
    'hljs': 'hljs'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loaders: ['file-loader']
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      reveal: 'Reveal',
      Reveal: 'Reveal',
      'window.Reveal': 'Reveal',
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CopyWebpackPlugin([
      {
        from: 'assets/',
        to: 'assets/'
      },
      {
        from: '../node_modules/reveal.js/lib/',
        to: 'lib/'
      },
      {
        from: '../node_modules/reveal.js/js/',
        to: 'lib/js/'
      },
      {
        from: '../node_modules/reveal.js/plugin/',
        to: 'plugin/'
      }
    ])
  ]
}