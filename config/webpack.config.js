const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

//require('bootstrap-loader');

module.exports = {
  entry: ['bootstrap-loader', './client/app.js'],
  resolveLoader: {
    root: path.join(__dirname, '/../node_modules')
  },
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.woff$/,
        loader: "url?limit=10000&minetype=application/font-woff&hash=sha512&digest=hex&name=assets/[hash].[ext]"},
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff2|ttf|eot|ico)$/,
        loader: "file?hash=sha512&digest=hex&name=assets/[hash].[ext]"
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'jQuery': 'jquery'
    }),
    new HtmlWebpackPlugin({
      title: 'Test',
      template: './client/index.html',
      inject: 'body'
    }),
    new ngAnnotatePlugin({
      add: true
    }),
    new ExtractTextPlugin('[hash].css'),
    new CleanWebpackPlugin(['public'], {
      root: path.resolve(__dirname, '../'),
      exclude: ['index.js'],
      verbose: true,
      dry: false
    })
  ]
};
