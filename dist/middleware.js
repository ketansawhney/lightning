"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _responseTime = _interopRequireDefault(require("response-time"));

var _connectSlashes = _interopRequireDefault(require("connect-slashes"));

var _connectTimeout = _interopRequireDefault(require("connect-timeout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var haltOnTimedout = function haltOnTimedout(req, res, next) {
  req.on('timeout', function () {
    res.status(503).send('Request Timeout Error.');
  });
  next();
};

var _default = function _default(app) {
  var appTimeout = app.get('timeout') || '5s';
  app.disable('x-powered-by');
  app.use(_bodyParser["default"].urlencoded({
    extended: true
  }));
  app.use(_bodyParser["default"].json());
  app.use((0, _cookieParser["default"])());
  app.use((0, _morgan["default"])('tiny'));
  app.use((0, _responseTime["default"])());
  app.use((0, _connectSlashes["default"])(false));
  app.use((0, _connectTimeout["default"])(appTimeout));
  app.use(haltOnTimedout);
  return app;
};

exports["default"] = _default;