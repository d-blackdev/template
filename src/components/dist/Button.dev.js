"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

require("../css/button.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var STYLES = ['btn--primary', 'btn--outline'];
var SIZES = ['btn--meduim', 'btn--large', 'btn--mobile'];
var COLOR = ['primary', 'blue', 'red', 'green'];

var Button = function Button(_ref) {
  var children = _ref.children,
      type = _ref.type,
      onClick = _ref.onClick,
      buttonStyle = _ref.buttonStyle,
      buttonSize = _ref.buttonSize,
      buttonColor = _ref.buttonColor;
  return;
};

exports.Button = Button;