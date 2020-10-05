import { initialState } from "../initialStates/userInitialState";
import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  AUTH_ERROR,
  LOAD_USER,
} from "../actions/actionTypes";

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loading: false,

        isLoggedIn: true,
      };
    case REGISTER_ERROR:
    case LOGIN_ERROR:
    case AUTH_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        errors: payload,
      };
    case REGISTER_LOADING:
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOAD_USER:
      localStorage.getItem("token");
      return {
        ...state,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default authReducer;
