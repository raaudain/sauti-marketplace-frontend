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
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isSuccess: true,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
