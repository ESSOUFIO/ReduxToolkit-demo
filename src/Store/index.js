import { configureStore } from "@reduxjs/toolkit";
import couterReducer from "./couterSlice";

const store = configureStore({
  reducer: {
    counter: couterReducer,
  },
});

export default store;
