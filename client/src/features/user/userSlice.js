import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/baseUrl';

const initialState = {
  user: {},
  status: 'idle',
  error: null,
  isAuth: false,
};

export const registerUserAsync = createAsyncThunk(
  'user/registerUisAuth serAsync',
  async (payload, thunkAPI) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `${BASE_URL}/api/users/register`,
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

export const loginUserAsync = createAsyncThunk(
  'user/loginUserAsync',
  async (payload, thunkAPI) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `${BASE_URL}/api/users/login`,
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

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    //
    getUserInfoFromStorage(state) {
      const userInfo = localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null;

      if (userInfo) {
        state.isAuth = true;
        state.user = userInfo;
      }
    },

    // logout user
    logoutUser() {
      localStorage.removeItem('userInfo');
      window.location.href = '/';
    },
  },
  extraReducers: {
    // Register User
    [registerUserAsync.pending]: (state) => {
      state.status = 'loading';
    },
    [registerUserAsync.fulfilled]: (state, action) => {
      state.status = 'idle';
      state.user = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
      window.location.href = '/notes';
      console.log(action);
    },
    [registerUserAsync.rejected]: (state, action) => {
      state.status = 'idle';
      state.error = action.payload;
      console.log(action);
    },

    // Login User
    [loginUserAsync.pending]: (state) => {
      state.status = 'loading';
    },
    [loginUserAsync.fulfilled]: (state, action) => {
      state.status = 'idle';
      state.user = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
      window.location.href = '/notes';
      console.log(action);
    },
    [loginUserAsync.rejected]: (state, action) => {
      state.status = 'idle';
      state.error = action.payload;
      console.log(action);
    },
  },
});

export const { getUserInfoFromStorage, logoutUser } = userSlice.actions;

export default userSlice.reducer;
