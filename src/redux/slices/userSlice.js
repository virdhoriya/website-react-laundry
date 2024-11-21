import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { addUser, updateUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
