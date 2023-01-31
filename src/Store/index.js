import { configureStore } from "@reduxjs/toolkit";
import couterReducer from "./couterSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    counter: couterReducer,
    auth: authReducer,
  },
});

export default store;
