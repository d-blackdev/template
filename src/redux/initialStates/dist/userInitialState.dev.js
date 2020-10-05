"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = void 0;
var initialState = {
  loading: false,
  token: localStorage.getItem('token'),
  isLoggedIn: false,
  errors: {}
};
exports.initialState = initialState;