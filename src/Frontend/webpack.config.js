const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config();

module.exports = {
    mode: 'development', // production
    devtool: 'eval',     // hidden-source-map => 그냥 source-map하면 개발자 도구에 코드 다 노출됨
    resolve: {
      extensions: ['.jsx', '.js', '.tsx','.ts']
    },

    entry:  [
      'webpack-hot-middleware/client?reload=true',
      'react-hot-loader/patch',
      path.resolve(__dirname, '../../Frontend/client.tsx'),
    ], 
    module: {
      rules: [{
        test: /\.tsx?$/,
        loader: 'ts-loader',
      }, 
    ]
    },
    plugins: [
      new HtmlWebpackPlugin(
        {
          template: path.resolve(__dirname, '../../Frontend/index.html')
        }
      ),
      new HotModuleReplacementPlugin(),
    ],

    output: {
      publicPath: '/',
      path: path.resolve(__dirname, './dist/public'),
      filename: '[name].bundle.js',
    }
  }