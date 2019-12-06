import express from 'express';
import setupConfig from './config';
import setupMiddleware from './middleware';
import setupLogging from './logging';

function lightning(config = {}) {
  const app = express();

  setupConfig(app, config);
  setupMiddleware(app);
  setupLogging(app.get('log'));

  return app;
}

export default lightning;
module.exports = lightning;
