import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { token } from "../../utils/token";
import { BASE_URL } from "../../utils/baseUrl";

const initialState = {
  notes: [],
  status: "idle",
  error: null,
};

// const BASE_URL = `http://localhost:7000/api/notes`;

export const createNote = createAsyncThunk(
  "notes/createNote",
  async (payload, thunkAPI) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.post(
        `${BASE_URL}/api/notes`,
        payload,
        config
      );

      console.log(data);
      return data;
    } catch (error) {
      console.log(error.response);
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const getNotes = createAsyncThunk("notes/getNotes", async (thunkAPI) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(`${BASE_URL}/api/notes`, config);

    return data;
  } catch (error) {
    console.log(error.response);
    return thunkAPI.rejectWithValue(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
});

export const setNoteColor = createAsyncThunk(
  "notes/setColor",
  async (payload, thubkAPI) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.put(
        `${BASE_URL}/api/notes/${payload.noteId}/color`,
        payload,
        config
      );
    } catch (error) {
      console.error(error.response);
    }
  }
);

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setColor(state, action) {
      const { noteId, color } = action.payload;
      const existingNote = state.notes.find((note) => note._id === noteId);
      if (existingNote) {
        existingNote.color = color;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNotes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getNotes.fulfilled, (state, action) => {
        state.status = "idle";
        state.notes = action.payload;
        state.error = null;
      })
      .addCase(getNotes.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      })
      .addCase(createNote.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createNote.fulfilled, (state, action) => {
        state.status = "idle";
        state.notes.unshift(action.payload);
        state.error = null;
      })
      .addCase(createNote.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      });
  },
});

export const { setColor } = notesSlice.actions;
export default notesSlice.reducer;
