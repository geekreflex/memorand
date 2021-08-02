import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
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
  },
});

export const { openModal, closeModal } = actionSlice.actions;

export default actionSlice.reducer;
