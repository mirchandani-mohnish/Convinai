import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./reducers/list";

export default configureStore({
  reducer: {
    userList: listReducer,
  },
});
