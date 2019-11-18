import { RequestHandler } from 'express';

const dummyMiddleware: RequestHandler = (_req, _res, next) => next();

export default () => {
  if (['production', 'test'].includes(process.env.NODE_ENV || '')) return [dummyMiddleware];

  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpack_config = require('../../build/webpack.config');
  const compiler = webpack(webpack_config);

  return [
    webpackDevMiddleware(compiler, { noInfo: true, laze: false }),
    webpackHotMiddleware(compiler)
  ];
}
