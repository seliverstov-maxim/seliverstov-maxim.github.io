var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack');

var config = {
  entry: path.resolve(__dirname, 'app/main.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle-[hash].min.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.template.html',
      minify: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: false
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    },
    {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    }]
  }
};

module.exports = config;
