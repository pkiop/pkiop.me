const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config();

let frontendPath;
const ENV = process.env.NODE_ENV;
if(process.env.NODE_ENV === 'development') {
  frontendPath = '../../Frontend';
} else {
  frontendPath = '../Frontend';
}


module.exports = {
    mode: process.env.NODE_ENV, // production
    devtool: ENV === 'development' ? 'eval' : 'hidden-source-map',     // hidden-source-map => 그냥 source-map하면 개발자 도구에 코드 다 노출됨
    resolve: {
      extensions: ['.js', '.jsx','.ts','.tsx','.json'],
      alias: {
        '@Components': path.resolve(__dirname, frontendPath, 'Components'),
        '@Images': path.resolve(__dirname, frontendPath, 'public/Images'),
        '@Styles': path.resolve(__dirname, frontendPath, 'styles'),
      }
    },
    entry:  [
      'webpack-hot-middleware/client?reload=true',
      'react-hot-loader/patch',
      path.resolve(__dirname, frontendPath, 'client.tsx'),
    ], 
    module: {
      rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      }, 
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'file-loader'
        
      }
    ]
    },
    plugins: [
      new HtmlWebpackPlugin(
        {
          template: path.resolve(__dirname, frontendPath,'index.html')
        }
      ),
      new HotModuleReplacementPlugin(),
    ],

    output: {
      publicPath: '/',
      path: path.resolve(__dirname, '../Backend/public'),
      filename: '[name].bundle.js',
    }
  }