import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import serviceReducer from "./slices/serviceSlice";
import categoryReducer from "./slices/categorySlice";
import cartReducer from "./slices/cartSlice";
import settingReducer from "./slices/settingSlice";
import addressReducer from "./slices/addressSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    service: serviceReducer,
    category: categoryReducer,
    cart: cartReducer,
    setting: settingReducer,
    address: addressReducer,
  },
});

export default store;
