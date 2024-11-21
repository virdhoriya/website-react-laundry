import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "item",
  initialState: {
    categoryItems: [],
  },
  reducers: {
    setCategoryItems: (state, action) => {
      state.categoryItems = action.payload;
    },
  },
});

export const { setCategoryItems } = itemSlice.actions;
export default itemSlice.reducer;
