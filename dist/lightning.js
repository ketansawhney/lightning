"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _config = _interopRequireDefault(require("./config"));

var _middleware = _interopRequireDefault(require("./middleware"));

var _logging = _interopRequireDefault(require("./logging"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function lightning() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var app = (0, _express["default"])();
  (0, _config["default"])(app, config);
  (0, _middleware["default"])(app);
  (0, _logging["default"])(app.get('log'));
  return app;
}

var _default = lightning;
exports["default"] = _default;
module.exports = lightning;