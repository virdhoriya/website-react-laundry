import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import serviceReducer from "./slices/serviceSlice";
import categoryReducer from "./slices/categorySlice";
import itemsSlice from "./slices/itemsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    service: serviceReducer,
    category: categoryReducer,
    items: itemsSlice,
  },
});

export default store;
