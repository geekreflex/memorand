import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
  nav: false,
};

const actionSlice = createSlice({
  name: "action",
  initialState,
  reducers: {
    openModal(state) {
      state.modal = true;
    },
    closeModal(state) {
      state.modal = false;
    },
    toggleNav(state) {
      state.nav = !state.nav;
    },
  },
});

export const { openModal, closeModal, toggleNav } = actionSlice.actions;

export default actionSlice.reducer;
