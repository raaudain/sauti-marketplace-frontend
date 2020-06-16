import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { types } from "./index";

export const createAccount = credentials => dispatch => {
    dispatch({type: types.CREATE_ACCOUNT_START});
    return axiosWithAuth()
        .post("/auth/register", credentials)
        .then(res => {
            console.log(res)
            dispatch({type: types.CREATE_ACCOUNT_SUCCESS, 
            payload: {message: "Account created"}})
        })
        .catch(err => {
            dispatch({type: types.CREATE_ACCOUNT_FAILURE,
            payload: err})
            console.log(err.response)
        })
}

export const logIn = credentials => dispatch => {
    dispatch({type: types.LOGIN_START});
    return axiosWithAuth()
        .post("/auth/login", credentials)
        .then(res => {
            console.log(res)
            dispatch({type: types.LOGIN_SUCCESS,
            payload: res.data})
        })
        .catch(err => {
            dispatch({type: types.LOGIN_FAILURE,
            payload: err})
            console.log(err.response)
        })
}