import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import notesReducer from "../features/note/noteSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    notes: notesReducer,
  },
});
