import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  error: null,
  isAuthenticated: false
};

const loginSlice = createSlice({
  name: 'login',

  initialState,

  reducers: {
    submitLoginSuccess(state, action) {
        state.user =  action.payload;
        state.error = null;
        state.isAuthenticated = true;
    },
    submitLoginFailure(state, action) {
        state.error =  action.payload;
        state.user = null;
        state.isAuthenticated = false;
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
