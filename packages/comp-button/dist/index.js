"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type,
      children = _ref.children,
      onClick = _ref.onClick;
  return _react.default.createElement("div", null, _react.default.createElement("button", {
    type: type,
    className: "button",
    onClick: onClick
  }, children));
};

var _default = Button;
exports.default = _default;