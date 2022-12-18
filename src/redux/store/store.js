import { configureStore } from "@reduxjs/toolkit";
import adviceSliceReducer from "../slices/adviceSlice";

export const store = configureStore({
  reducer: {
    adviceGenerator: adviceSliceReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
