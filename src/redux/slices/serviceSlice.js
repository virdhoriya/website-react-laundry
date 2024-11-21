import { createSlice } from "@reduxjs/toolkit";

const serviceSlice = createSlice({
  name: "service",
  initialState: {
    services: [],
    selectedServiceId: null,
  },
  reducers: {
    setServices: (state, action) => {
      state.services = action.payload;
    },
    setSelectedServiceId: (state, action) => {
      state.selectedServiceId = action.payload;
    },
  },
});

export const { setServices, setSelectedServiceId } = serviceSlice.actions;
export default serviceSlice.reducer;
