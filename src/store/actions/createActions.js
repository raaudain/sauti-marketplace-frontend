import axiosWithAuth from "../../utils/axiosWithAuth";
import { types } from "./index";

export const createAccount = credentials => dispatch => {
  dispatch({ type: types.CREATE_ACCOUNT_START });
  return axiosWithAuth()
    .post("/auth/register", credentials)
    .then(res => {
      dispatch({
        type: types.CREATE_ACCOUNT_SUCCESS, payload: { message: "Account created" }
      });
    })
    .catch(err => {
      dispatch({ 
        type: types.CREATE_ACCOUNT_FAILURE, payload: { message: err.response }
      });
      console.log(err.response);
    });
};

