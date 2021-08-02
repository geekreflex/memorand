import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import notesReducer from "../features/note/noteSlice";
import actionReducer from "../features/action/actionSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    notes: notesReducer,
    action: actionReducer,
  },
});
