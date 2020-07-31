import axiosWithAuth from "../../utils/axiosWithAuth";
import { types } from "./index";

export const createAccount = credentials => dispatch => {
  dispatch({ type: types.CREATE_ACCOUNT_START });
  console.log("testing create account", credentials)
  return axiosWithAuth()
    .post("/auth/register", credentials)
    .then(res => {
      dispatch({
        type: types.CREATE_ACCOUNT_SUCCESS,
        payload: { message: "Account created" },
      });
    })
    .catch(err => {
      dispatch({ 
        type: types.CREATE_ACCOUNT_FAILURE, 
        payload: err 
      });
      console.log(err.response);
    });
};

