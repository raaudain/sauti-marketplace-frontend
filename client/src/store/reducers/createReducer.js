import { types } from "../actions";

const initialState = {
  user: null,
  isLoading: false,
  isAuth: false,
  isSuccess: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_ACCOUNT_START:
      console.log("start")
      return {
        ...state,
        isLoading: true,
        isAuth: false,
        isSuccess: false,
        errors: null,
        user: {}
      };
    case types.CREATE_ACCOUNT_SUCCESS:
      console.log("success")
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        isSuccess: true,
        errors: null,
        user: {}
      };
    case types.CREATE_ACCOUNT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        isSuccess: false,
        errors: action.payload,
        user: {}
      };
    default:
      return state;
  }
};