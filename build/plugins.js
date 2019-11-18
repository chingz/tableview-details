const webpack = require('webpack');
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const { isDevelopment } = require('./utils');

module.exports = [
  isDevelopment && new webpack.HotModuleReplacementPlugin(),
  new FriendlyErrorsWebpackPlugin(),
  new webpack.NamedModulesPlugin(),
  new ExtractCssChunks({
    filename: "static/[name].[hash].css",
    chunkFilename: "static/[id].[hash].css",
    hot: isDevelopment
  }),
  new HtmlWebpackPlugin({ alwaysWriteToDisk: true }),
  new HtmlWebpackHarddiskPlugin(),
];
