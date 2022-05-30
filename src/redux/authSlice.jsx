import { createSlice } from '@reduxjs/toolkit';
import { authOperation } from './authOperation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      authOperation.endpoints.register.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(
      authOperation.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(authOperation.endpoints.logout.matchFulfilled, (state, _) => {
      state.token = null;
      state.user.name = null;
      state.user.email = null;
      state.isLoggedIn = false;
    });
    builder.addMatcher(
      authOperation.endpoints.fetchCurrentUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
      }
    );
  },
});

export default authSlice.reducer;