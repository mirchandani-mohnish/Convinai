import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "currentUser",
  initialState: {
    value: {
      payload: {
        id: 0,
        email: "N/A",
        first_name: "N/A",
        last_name: "N/A",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
      },
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
