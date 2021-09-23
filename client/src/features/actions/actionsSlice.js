import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  addModal: false,
  nav: false,
  viewModal: false,
  currentDisplay: 'notes',
};

const actionsSlice = createSlice({
  name: 'actions',
  initialState,
  reducers: {
    openNewNoteModal(state) {
      state.addModal = true;
    },
    closeNewNoteModal(state) {
      state.addModal = false;
    },
    toggleViewNoteModal(state) {
      state.viewModal = !state.viewModal;
    },
    switchDisplay(state, action) {
      state.currentDisplay = action.payload;
    },
  },
});

export const {
  openNewNoteModal,
  closeNewNoteModal,
  toggleViewNoteModal,
  switchDisplay,
} = actionsSlice.actions;

export default actionsSlice.reducer;
