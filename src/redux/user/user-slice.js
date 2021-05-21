import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userAuth: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state, payload) => {
      state.userAuth = payload;
    },
    signOut: (state) => {
      state.userAuth = null;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;

export default userSlice.reducer;
