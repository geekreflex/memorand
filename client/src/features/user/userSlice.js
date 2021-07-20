import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: {},
  status: "idle",
  error: null,
  isAuthenticated: false,
};

const BASE_URL = `http://localhost:7000/api/users`;

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (payload, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${BASE_URL}/register`,
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

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (payload, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(`${BASE_URL}/login`, payload, config);

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

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserInfoFromStorage(state) {
      const userInfo = localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null;
      if (userInfo) {
        state.isAuthenticated = true;
        state.user = userInfo;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload;
        state.error = null;
        localStorage.setItem("userInfo", JSON.stringify(action.payload));
        window.location.href = "/";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload;
        state.error = null;
        localStorage.setItem("userInfo", JSON.stringify(action.payload));
        window.location.href = "/";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      });
  },
});

export const { getUserInfoFromStorage } = userSlice.actions;

export default userSlice.reducer;
