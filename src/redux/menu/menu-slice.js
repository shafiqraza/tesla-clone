import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuIsOpen: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.menuIsOpen = !state.menuIsOpen;
    },
    closeMenu: (state) => {
      state.menuIsOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu } = menuSlice.actions;

export default menuSlice.reducer;
