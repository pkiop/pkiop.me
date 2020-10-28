import path from 'path';
import dotenv from 'dotenv';
dotenv.config();
export default (webpackEnv) => {
  return {
    mode: 'development', // production
    devtool: 'eval',     // hidden-source-map => 그냥 source-map하면 개발자 도구에 코드 다 노출됨
    resolve: {
      extensions: ['.jsx', '.js', '.tsx','.ts']
    },

    entry: {
      app: './client'
    },

    module: {
      rules: [{
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      }]
    },

    plugins: [

    ],

    output: webpackEnv === 'development'
    ? {
      publicPath: '/',
    }
    : {
      path: path.resolve(__dirname, '../../dist/public'),
      filename: '[name].bundle.js',
    }, 
    target: 'node',
  }
}