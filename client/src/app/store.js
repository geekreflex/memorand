import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import notesReducer from '../features/notes/notesSlice';
import actionsReducer from '../features/actions/actionsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    notes: notesReducer,
    actions: actionsReducer,
  },
});
