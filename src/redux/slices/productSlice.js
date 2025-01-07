import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    filteredProducts: [],
  },
  reducers: {
    setPruducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    updateProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
  },
});

export const { setPruducts, updateProducts } = productSlice.actions;
export default productSlice.reducer;
