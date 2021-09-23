import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  addModal: false,
  confirmDelModal: false,
  nav: false,
  viewModal: false,
  currentDisplay: 'notes',
  delNoteId: '',
  initialColor: '#202124',
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

    toggleConfirmDelModal(state) {
      state.confirmDelModal = !state.confirmDelModal;
    },
    setDelNoteId(state, action) {
      state.delNoteId = action.payload;
    },
    switchInitialColor(state, action) {
      state.initialColor = action.payload;
    },
  },
});

export const {
  openNewNoteModal,
  closeNewNoteModal,
  toggleViewNoteModal,
  switchDisplay,
  toggleConfirmDelModal,
  setDelNoteId,
  switchInitialColor,
} = actionsSlice.actions;

export default actionsSlice.reducer;
