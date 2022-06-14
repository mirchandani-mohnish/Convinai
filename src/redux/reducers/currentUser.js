import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "currentUser",
  initialState: {
    value: {
      payload: {
        id: 7,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
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
