import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://api.adviceslip.com/advice";

const initialState = {
  advice: {},
  isLoading: true,
};

export const getRandomAdvice = createAsyncThunk("advice/getAdvice", () => {
  return axios
    .get(url)
    .then((res) => res.data.slip)
    .catch((err) => console.log(err));
});

export const adviceSlice = createSlice({
  name: "adviceGenerator",
  initialState,
  reducers: {},
  extraReducers: {
    [getRandomAdvice.pending]: (state) => {
      state.isLoading = true;
    },
    [getRandomAdvice.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.advice = action.payload;
    },
    [getRandomAdvice.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getAdvice } = adviceSlice.actions;

export default adviceSlice.reducer;
