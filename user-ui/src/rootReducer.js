import { combineReducers } from "redux";
import UserReducer from "./common/userReducer1.js";

const RootReducer = combineReducers({
  user: UserReducer,
});

export default RootReducer;
