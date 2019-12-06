"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var merge = function merge(app, config) {
  Object.keys(config).forEach(function (key) {
    return app.set(key, config[key]);
  });
  return app;
};

var _default = function _default(app, config) {
  _dotenv["default"].config();

  merge(app, process.env);
  merge(app, config);
};

exports["default"] = _default;