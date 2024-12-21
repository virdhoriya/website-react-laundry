import { createSlice } from "@reduxjs/toolkit";

const settingSlice = createSlice({
  name: "settings",
  initialState: {
    settings: null,
  },
  reducers: {
    setSettings: (state, action) => {
      state.settings = action.payload;
    },
  },
});

export const { setSettings } = settingSlice.actions;
export default settingSlice.reducer;
