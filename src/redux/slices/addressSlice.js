import { createSlice } from "@reduxjs/toolkit";

const addressSlice = createSlice({
  name: "address",
  initialState: {
    address: [],
  },
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    addAddress: (state, action) => {
      const newAddress = action.payload;
      state.address.push(newAddress);
    },
    deleteAddress: (state, action) => {
      const address_id = action.payload;
      state.address = state.address.filter(
        (add) => add.address_id !== address_id
      );
    },
    editAddress: (state, action) => {
      const { formData, address_id } = action.payload;
      const itemIndex = state.address.findIndex(
        (address) => address.address_id === address_id
      );

      if (itemIndex !== -1) {
        state.address[itemIndex] = {
          ...state.address[itemIndex],
          ...formData,
        };
      }
    },
  },
});

export const { setAddress, addAddress, deleteAddress, editAddress } =
  addressSlice.actions;
export default addressSlice.reducer;
