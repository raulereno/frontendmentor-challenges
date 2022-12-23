import { configureStore } from "@reduxjs/toolkit";
import adviceSliceReducer from "../slices/adviceSlice";
import ipTrackerSliceReducer from "../slices/ipTrackerSlice";

export const store = configureStore({
  reducer: {
    adviceGenerator: adviceSliceReducer,
    locationTracker: ipTrackerSliceReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
