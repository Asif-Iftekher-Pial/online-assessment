import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loginToStore: (state, action) => {
      console.log({ "state:": state, "action :": action });
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logoutFromStore: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
  },
});

export const { loginToStore, logoutFromStore } = authSlice.actions;
export default authSlice.reducer;
