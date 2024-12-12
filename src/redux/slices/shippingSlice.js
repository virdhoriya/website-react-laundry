import { createSlice } from "@reduxjs/toolkit";

const shippingSlice = createSlice({
  name: "shipping",
  initialState: {
    shippingInfo: null,
  },
  reducers: {
    setShippingInfo: (state, action) => {
      state.shippingInfo = action.payload;
    },
  },
});

export const { setShippingInfo } = shippingSlice.actions;
export default shippingSlice.reducer;
