import { types } from "../actions";

const initialState = {
  isLoading: false,
  isSuccess: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_START:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        error: null
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        error: null
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        error: action.payload
      };
    case types.LOGOUT_START:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        error: null
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        error: null
      };
    case types.LOGOUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        error: "Unable to logout"
      };
    default:
      return state;
  }
};
