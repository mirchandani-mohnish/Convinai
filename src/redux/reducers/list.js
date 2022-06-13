import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "UserList",
  initialState: {
    value: { payload: [0, 1] },
  },
  reducers: {
    updateList: (state, userList) => {
      state.value = state.value === userList ? state.value : userList;
    },

    appendToList: (state, userList) => {
      state.value = [...state.value, userList];
    },
  },
});

export const { updateList, appendToList } = listSlice.actions;

export default listSlice.reducer;
