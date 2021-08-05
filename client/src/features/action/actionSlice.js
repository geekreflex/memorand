import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
  nav: false,
  noteModal: false,
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
    toggleNoteModal(state) {
      state.noteModal = !state.noteModal;
    },
  },
});

export const { openModal, closeModal, toggleNav, toggleNoteModal } =
  actionSlice.actions;

export default actionSlice.reducer;
