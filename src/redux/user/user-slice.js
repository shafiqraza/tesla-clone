import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: { type: null, message: null },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authCheck: () => {},
    signInStart: () => {},
    signUpStart: () => {},
    signIn: (state, payload) => {
      state.currentUser = payload;
      state.error = { type: null, message: null };
    },
    signOutStart: () => {},
    signOut: (state) => {
      state.currentUser = null;
      state.error = { type: null, message: null };
    },
    errorHandler: (state, payload) => {
      state.error = payload;
    },
  },
});

export const {
  authCheck,
  signUpStart,
  signInStart,
  signIn,
  signOutStart,
  signOut,
  errorHandler,
} = userSlice.actions;

export default userSlice.reducer;
