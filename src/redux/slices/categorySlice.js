import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    selectedCategoryId: null,
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setSelectedCategoryId: (state, action) => {
      state.selectedCategoryId = action.payload;
    },
  },
});

export const { setCategories, setSelectedCategoryId } = categorySlice.actions;
export default categorySlice.reducer;
