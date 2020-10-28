// import * as webpack from 'webpack';
// import * as WebpackDevMiddleware from 'webpack-dev-middleware';
// import * as WebpackHotMiddleware from 'webpack-hot-middleware';
import * as path from 'path';
import { Express } from 'express';

// const compiler = webpack({
//   mode: 'development', // production
//     devtool: 'eval',     // hidden-source-map => 그냥 source-map하면 개발자 도구에 코드 다 노출됨
//     resolve: {
//       extensions: ['.jsx', '.js', '.tsx','.ts']
//     },

//     entry: {
//       app: './client'
//     },

//     module: {
//       rules: [{
//         test: /\.tsx?$/,
//         loader: 'awesome-typescript-loader',
//       }]
//     },

//     plugins: [

//     ],

//     output: process.env.NODE_ENV === 'development'
//     ? {
//       publicPath: '/',
//     }
//     : {
//       path: path.resolve(__dirname, '../../dist/public'),
//       filename: '[name].bundle.js',
//     }, 
//     target: 'node',
// });
// const hotModule = WebpackHotMiddleware(compiler);

const useDevServer = (app: Express ): void => {
  // app.use(WebpackDevMiddleware(compiler, {
  //   publicPath: '/',
  // }));
  // app.use(hotModule);
}

export default useDevServer;