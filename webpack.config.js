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
    'reveal': 'Reveal'
  },
  module: {
    loaders: [
      {test: /\.css$/, loaders: ['style-loader', 'css-loader']},
      {test: /\.(eot|svg|ttf|woff|woff2)$/, loaders: ['file-loader']}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CopyWebpackPlugin([{
      from: 'assets/',
      to: 'assets/'
    }])
  ]
}