"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _userInitialState = require("../initialStates/userInitialState");

var _actionTypes = require("../actions/actionTypes");

var authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _userInitialState.initialState;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _actionTypes.REGISTER_SUCCESS:
    default:
      return state;
  }
};

var _default = authReducer;
exports["default"] = _default;