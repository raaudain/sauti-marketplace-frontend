import axiosWithAuth from "../../utils/axiosWithAuth";
import { types } from "./index";

export const logIn = credentials => dispatch => {
  dispatch({ type: types.LOGIN_START });
  return axiosWithAuth()
    .post("/auth/login", credentials)
    .then(res => {
      // Sets token
      console.log(res.data)
      localStorage.setItem("userId", res.data.id);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", res.data.user);
      dispatch({ 
        type: types.LOGIN_SUCCESS, payload: res.data 
      });
    })
    .catch(err => {
      dispatch({ 
        type: types.LOGIN_FAILURE, payload: { message: err.response }
      });
      console.log(err.response);
    });
};

export const logOut = () => dispatch => {
  dispatch({ type: types.LOGOUT_START });
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.reload();
};