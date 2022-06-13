import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "currentUser",
  initialState: {
    value: {
      payload: { id: -1 },
    },
  },
  reducers: {
    updateUser: (state, currentUser) => {
      state.value = state.value === currentUser ? state.value : currentUser;
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
