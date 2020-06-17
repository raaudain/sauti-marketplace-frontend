import { types } from "../actions";

const initialState = {
  isLoading: false,
  isSuccess: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    // case types.CREATE_ACCOUNT_START:
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };
    // case types.CREATE_ACCOUNT_SUCCESS:
    //   return {
    //     ...state,
    //     isSuccess: true,
    //   };
    // case types.CREATE_ACCOUNT_FAILURE:
    //   return {
    //     ...state,
    //     error: action.payload,
    //   };
    default:
      return state;
  }
};
