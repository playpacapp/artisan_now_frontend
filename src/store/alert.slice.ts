import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlertState } from "@/src/functions/types";

const initialState: AlertState = {
  type: null,
  message: null,
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    success(state, action: PayloadAction<string>) {
      state.type = "success";
      state.message = action.payload;
    },
    error(state, action: PayloadAction<string>) {
      state.type = "error";
      state.message = action.payload;
    },
    clear(state) {
      state.type = null;
      state.message = null;
    },
  },
});

export const { success, error, clear } = alertSlice.actions;

export default alertSlice.reducer;
