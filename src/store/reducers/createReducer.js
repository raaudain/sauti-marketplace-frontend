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
      return {
        ...state,
        isLoading: true,
        isAuth: false,
        isSuccess: false,
        error: null,
        user: {}
      };
    case types.CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        isSuccess: true,
        error: null,
        user: {}
      };
    case types.CREATE_ACCOUNT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        isSuccess: false,
        error: action.payload,
        user: {}
      };
    default:
      return state;
  }
};