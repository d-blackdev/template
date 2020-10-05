import axios from "axios";

export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem("token", token);

    let token = axios.defaults.headers.common.Authorization.split(" ");
    token = token[1];
    return (axios.defaults.headers.commom.Authorization = `Bearer ${token}`);
  } else {
    localStorage.removeItem("token");

    delete axios.defaults.headers.common.Authorization;
  }
};
