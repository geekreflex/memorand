import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { token } from "../../utils/token";

const initialState = {
  notes: [],
  status: "idle",
  error: null,
};

const BASE_URL = `http://localhost:7000/api/notes`;

export const createNote = createAsyncThunk(
  "notes/createNote",
  async (payload, thunkAPI) => {
    try {
      const config = {
        "Content-Type": "application/json",
      };

      const { data } = await axios.post(`${BASE_URL}/`, payload, config);

      console.log(data);
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

    const { data } = await axios.get(`${BASE_URL}/`, config);

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

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
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
      });
  },
});

export const {} = notesSlice.actions;

export default notesSlice.reducer;
