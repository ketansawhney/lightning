import dotenv from 'dotenv';

const merge = (app, config) => {
  Object.keys(config).forEach(key => app.set(key, config[key]));
  return app;
};

export default (app, config) => {
  dotenv.config();
  merge(app, process.env);
  merge(app, config);
};
