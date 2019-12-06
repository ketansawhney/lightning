import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import responseTime from 'response-time';
import slashes from 'connect-slashes';
import timeout from 'connect-timeout';

const haltOnTimedout = (req, res, next) => {
  req.on('timeout', function() {
    res.status(503).send('Request Timeout Error.');
  });
  next();
};

export default app => {
  const appTimeout = app.get('timeout') || '5s';

  app.disable('x-powered-by');

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(morgan('tiny'));
  app.use(responseTime());
  app.use(slashes(false));
  app.use(timeout(appTimeout));
  app.use(haltOnTimedout);

  return app;
};
