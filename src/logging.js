import winston from 'winston';
import util from 'util';

function formatArgs(args) {
  return util.format(...args);
}

export default filename => {
  const debug = process.env.NODE_ENV !== 'production';

  if (!filename || filename === '') {
    filename = '/var/log/lightning.log';
  }

  if (debug) {
    const console = new winston.transports.Console({
      format: winston.format.cli(),
      level: 'info'
    });

    winston.add(console);
  }

  const files = new winston.transports.File({
    filename: filename,
    maxsize: 512000000,
    maxFiles: 4,
    format: winston.format.json(),
    level: 'debug'
  });

  winston.add(files);

  console.log = (...args) => winston.info(formatArgs(args));
  console.info = (...args) => winston.info(formatArgs(args));
  console.warn = (...args) => winston.warn(formatArgs(args));
  console.error = (...args) => winston.error(formatArgs(args));
  console.debug = (...args) => winston.debug(formatArgs(args));
};
