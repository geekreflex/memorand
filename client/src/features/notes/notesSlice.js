import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { token } from '../../utils/token';
import { BASE_URL } from '../../utils/baseUrl';

const initialState = {
  notes: [],
  note: {},
  status: 'idle',
  error: null,
};

export const createNoteAsync = createAsyncThunk(
  'notes/createNoteAsync',
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

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const getNotesAsync = createAsyncThunk(
  'notes/getNotesAsync',
  async (thunkAPI) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.get(`${BASE_URL}/api/notes`, config);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const updateNoteAsync = createAsyncThunk(
  'notes/updateNoteAsync',
  async (payload, thunkAPI) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.put(
        `${BASE_URL}/api/notes/${payload.noteId}`,
        payload.data,
        config
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const trashNoteAsync = createAsyncThunk(
  'notes/trashNoteAsync',
  async (payload, thunkAPI) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.put(
        `${BASE_URL}/api/notes/${payload}/trash`,
        payload,
        config
      );

      console.log(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const setNoteColor = createAsyncThunk(
  'notes/setNoteColor',
  async (payload, thunkAPI) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.put(
        `${BASE_URL}/api/notes/${payload.noteId}/color`,
        payload,
        config
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const deleteNoteAsync = createAsyncThunk(
  'notes/deleteNoteAsync',
  async (payload, thunkAPI) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.delete(
        `${BASE_URL}/api/notes/${payload}`,
        config
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    switchColor(state, action) {
      console.log(action.payload);
      const { noteId, color } = action.payload;
      state.note.color = color;
      const existingNote = state.notes.find((note) => note._id === noteId);

      if (existingNote) {
        existingNote.color = color;
      }
    },
    storeNote(state, action) {
      const noteId = action.payload;
      const existingNote = state.notes.find((note) => note._id === noteId);
      if (existingNote) {
        state.note = existingNote;
      }
    },
    updateNote(state, action) {
      const { data, noteId } = action.payload;
      const existingNote = state.notes.find((note) => note._id === noteId);
      if (existingNote) {
        existingNote.title = data.title;
        existingNote.body = data.body;
      }
    },
    clearNote(state) {
      state.note = {};
    },
    toggleTrashNote(state, action) {
      const noteId = action.payload;
      const existingNote = state.notes.find((note) => note._id === noteId);
      if (existingNote) {
        existingNote.trashed = !existingNote.trashed;
      }
    },
    deleteNote(state, action) {
      const noteId = action.payload;
      const notes = state.notes.filter((note) => note._id !== noteId);
      state.notes = notes;
      console.log(notes);
    },
  },
  extraReducers: {
    [getNotesAsync.pending]: (state) => {
      state.status = 'loading';
    },
    [getNotesAsync.fulfilled]: (state, action) => {
      state.status = 'idle';
      state.notes = action.payload;
      console.log(action);
    },

    [createNoteAsync.pending]: (state) => {
      state.status = 'loading';
    },
    [createNoteAsync.fulfilled]: (state, action) => {
      state.status = 'idle';
      state.notes.unshift(action.payload);
      state.error = null;
    },
    [createNoteAsync.rejected]: (state, action) => {
      state.status = 'idle';
      state.error = action.payload;
    },

    [deleteNoteAsync.pending]: (state) => {
      state.status = 'loading';
    },
    [deleteNoteAsync.fulfilled]: (state, action) => {
      state.status = 'idle';
      console.log(action);
    },
    [deleteNoteAsync.rejected]: (state, action) => {
      state.status = 'idle';
      console.log(action.payload);
    },
  },
});

export const {
  switchColor,
  storeNote,
  clearNote,
  updateNote,
  toggleTrashNote,
  deleteNote,
} = notesSlice.actions;
export default notesSlice.reducer;
