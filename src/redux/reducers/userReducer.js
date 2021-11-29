import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    user: null,
    loading: false,
    error: false,
  },
  reducers: {
    actionStart: (state) => {
      state.loading = true;
    },
    actionSuccess: (state) => {
      state.loading = false;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    getUserSuccess: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
    },
    actionFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

const { actions, reducer } = userSlice;
export const {
  actionStart,
  loginSuccess,
  getUserSuccess,
  actionSuccess,
  actionFailure,
  logout,
} = actions;
export default reducer;
