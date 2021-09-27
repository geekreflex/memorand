import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  addModal: false,
  confirmDelModal: false,
  nav: false,
  viewModal: false,
  currentDisplay: 'notes',
  delNoteId: '',
  initialColor: '#202124',
  optionsOverlay: false,
  mobSearch: false,
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
    openViewNoteModal(state) {
      state.viewModal = true;
    },
    closeViewNoteModal(state) {
      state.viewModal = false;
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
    toggleMobSearch(state) {
      state.mobSearch = !state.mobSearch;
    },
  },
});

export const {
  openNewNoteModal,
  closeNewNoteModal,
  openViewNoteModal,
  closeViewNoteModal,
  switchDisplay,
  toggleConfirmDelModal,
  setDelNoteId,
  switchInitialColor,
  toggleMobSearch,
} = actionsSlice.actions;

export default actionsSlice.reducer;
