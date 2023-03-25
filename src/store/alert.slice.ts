import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlertState } from "@/src/functions/types";
import { toast } from "react-toastify";

const initialState: AlertState = {
  type: null,
  message: null,
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    successAlert(state, action: PayloadAction<string>) {
      toast.success(action.payload)
      state.type = "success";
      state.message = action.payload;
    },
    errorAlert(state, action: PayloadAction<string>) {
      toast.error(action.payload)
      state.type = "error";
      state.message = action.payload;
    },
    clearAlert(state) {
      state.type = null;
      state.message = null;
    },
  },
});

export const { successAlert, errorAlert, clearAlert } = alertSlice.actions;

export default alertSlice.reducer;
