import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//https://api.ipify.org?format=json <-- devuelve la ip
//`https://geo.ipify.org/api/v2/country?apiKey=${API_KEY}&ipAddress=8.8.8.8`
const API_KEY = process.env.REACT_APP_API_KEY_GEOLOCATION;

const initialState = {
  ip: "",
  location: {},
  error: "",
};

export const getIp = createAsyncThunk("ip/getIpJson", async () => {
  return await axios
    .get("https://api.ipify.org?format=json")
    .then((res) => res.data)
    .catch((err) => console.log(err));
});

export const getLocation = createAsyncThunk(
  "location/getLocationApi",
  async ({ ip, domain }, { rejectWithValue }) => {
    return await axios
      .get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}&domain=${domain}`
      )
      .then((res) => res.data)
      .catch((err) => {
        throw rejectWithValue(err.message);
      });
  }
);

export const ipTrackerSlice = createSlice({
  name: "locationTracker",
  initialState,
  reducers: {},
  extraReducers: {
    [getIp.pending]: (state) => {},
    [getIp.fulfilled]: (state, action) => {
      state.ip = action.payload.ip;
    },
    [getIp.rejected]: (state) => {
      console.log(state);
    },

    [getLocation.pending]: (state) => {},
    [getLocation.fulfilled]: (state, action) => {
      state.location = action.payload;
      state.error = "";
    },
    [getLocation.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { getIpJson, getLocationApi } = ipTrackerSlice.actions;

export default ipTrackerSlice.reducer;
