import { combineReducers } from "redux";

import authReducer from "./authReducer";
import createReducer from "./createReducer";

export default combineReducers({
  authReducer,
  createReducer
});
