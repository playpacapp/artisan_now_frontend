import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, PERMISSION_TYPE, User } from "@/src/functions/types";
import { authService } from "./services";
import { successAlert } from "./alert.slice";
import { toast } from "react-toastify";
import { artisanDashboardUrl, loginUrl, userDashboardUrl, VAR_STR_USER } from "../functions";

const initialState: AuthState = {
  user: null,
  token: null,
  loggingIn: false,
  loggedIn: false,
  registering: false,
  registered: false,
  role: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest(state) {
      state.loggingIn = true;
    },
    loginSuccess(state, action: PayloadAction<{user:User; token:string; role: PERMISSION_TYPE}>) {
      state.loggingIn = false;
      state.loggedIn = true;
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.user = action.payload.user;
    },
    switchToRole(state, action:PayloadAction<PERMISSION_TYPE>) {
      state.role = action.payload
    },
    loginFailure(state) {
      state.loggingIn = false;
      state.user = null;
    },
    logout(state) {
      state.loggingIn = false;
      state.loggedIn = false;
      state.token = null;
      state.role = null;
      state.user = null;
    },
    registerRequest(state) {
      state.registering = true;
    },
    registerSuccess(state, action: PayloadAction<User>) {
      state.registering = false;
      state.registered = true;
      state.user = action.payload;
    },
    registerFailure(state) {
      state.registering = false;
      state.user = null;
    }
  },
});

export const login = (email: string, password: string, role: PERMISSION_TYPE) => async (
  dispatch: any
) => {
  try {
    dispatch(loginRequest());
    const {token, user} = await authService.login(email, password);
    dispatch(loginSuccess({user, token, role}));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const register = (newUser: User) => async (
  dispatch: any
) => {
  try {
    dispatch(registerRequest());
    const {user} = await authService.register(newUser);
    dispatch(registerSuccess(user));
  } catch (error) {
    dispatch(registerFailure());
  }
};

export const { registerRequest, registerSuccess, registerFailure } =
  authSlice.actions;

export const { loginRequest, loginSuccess, loginFailure, logout, switchToRole } =
  authSlice.actions;

export const authSelector = (state: AuthState) => state
export const authLoggingIn = (state: AuthState) => state.loggingIn

export default authSlice.reducer;