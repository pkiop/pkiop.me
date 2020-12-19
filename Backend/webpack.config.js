const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const babelConfig = require('./babel.config.js');

module.exports = {
  target: 'node',
  resolve: {
    extensions: ['.js', '.jsx','.ts','.tsx','.json'],
    alias: {
      '@Controller': path.resolve(__dirname, 'controller'),
      '@Router': path.resolve(__dirname, 'router')
    }
  },
  entry: [
    path.resolve(__dirname, 'app.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  externals: [
    nodeExternals(),
  ],
  plugins: [
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelConfig,
        },
      },
    ],
  },
};