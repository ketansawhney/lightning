"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _winston = _interopRequireDefault(require("winston"));

var _util = _interopRequireDefault(require("util"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function formatArgs(args) {
  return _util["default"].format.apply(_util["default"], _toConsumableArray(args));
}

var _default = function _default(filename) {
  var debug = process.env.NODE_ENV !== 'production';

  if (!filename) {
    filename = '/var/log/lightning.log';
  }

  if (debug) {
    var _console = new _winston["default"].transports.Console({
      format: _winston["default"].format.cli(),
      level: 'info'
    });

    _winston["default"].add(_console);
  }

  var files = new _winston["default"].transports.File({
    filename: filename,
    maxsize: 512000000,
    maxFiles: 4,
    format: _winston["default"].format.json(),
    level: 'debug'
  });

  _winston["default"].add(files);

  console.log = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _winston["default"].info(formatArgs(args));
  };

  console.info = function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _winston["default"].info(formatArgs(args));
  };

  console.warn = function () {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _winston["default"].warn(formatArgs(args));
  };

  console.error = function () {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return _winston["default"].error(formatArgs(args));
  };

  console.debug = function () {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    return _winston["default"].debug(formatArgs(args));
  };
};

exports["default"] = _default;