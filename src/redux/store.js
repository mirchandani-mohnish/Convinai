import { combineReducers, configureStore } from "@reduxjs/toolkit";
import listReducer from "./reducers/list";
import userReducer from "./reducers/currentUser";

export default configureStore({
  reducer: combineReducers({
    userList: listReducer,
    currentUser: userReducer,
  }),
});
