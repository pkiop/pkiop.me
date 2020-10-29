import webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../Frontend/webpack.config';

const compiler = webpack(webpackConfig);
const hotModule = WebpackHotMiddleware(compiler);

const useDevServer = (app) => {
  app.use(WebpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
  }));
  app.use(hotModule);
};

export default useDevServer;