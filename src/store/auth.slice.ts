import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, User } from "@/src/functions/types";
import { authService } from "./services";

const initialState: AuthState = {
  user: null,
  token: null,
  loggingIn: false,
  loggedIn: false,
  registering: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest(state) {
      state.loggingIn = true;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.loggingIn = false;
      state.loggedIn = true;
      state.user = action.payload;
    },
    loginFailure(state) {
      state.loggingIn = false;
      state.user = null;
    },
    logout(state) {
      state.loggingIn = false;
      state.loggedIn = false;
      state.user = null;
    },
    registerRequest(state) {
      state.registering = true;
    },
    registerSuccess(state, action: PayloadAction<User>) {
      state.registering = false;
      state.user = action.payload;
    },
    registerFailure(state) {
      state.registering = false;
      state.user = null;
    },
  },
});

export const login = (email: string, password: string, role: string) => async (
  dispatch: any
) => {
  try {
    dispatch(loginRequest());
    const user = await authService.login(email, password, role);
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const register = (newUser: User) => async (
  dispatch: any
) => {
  try {
    dispatch(registerRequest());
    const user = await authService.register(newUser);
    dispatch(registerSuccess(user));
  } catch (error) {
    dispatch(registerFailure());
  }
};

export const { registerRequest, registerSuccess, registerFailure } =
  authSlice.actions;

export const { loginRequest, loginSuccess, loginFailure, logout } =
  authSlice.actions;

export const authSelector =  (state: AuthState) => state
export const authLoggingIn = (state: AuthState) => state.loggingIn
export default authSlice.reducer;