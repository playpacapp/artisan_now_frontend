import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./services";
import { User } from "@/src/functions/types";

interface UsersState {
  users: User[];
  loading: boolean;
}

const initialState: UsersState = {
  users: [],
  loading: false,
};

export const getUsers = createAsyncThunk("users/getAll", async () => {
  const users = await authService.getAll();
  return users;
});

export const deleteUser = createAsyncThunk("users/delete", async (id: number) => {
  await authService.delete(id);
  return id;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        //state.users = action.payload;
        state.loading = false;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user.id !== action.payload.toString());
      });
  },
});

export default usersSlice.reducer;
