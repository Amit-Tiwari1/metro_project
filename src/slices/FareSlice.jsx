import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../config/Config";

// All station of master station
// getFare
export const getFare = createAsyncThunk(
  "getFare",
   async({ from, to }, thunkAPI) => {
    try {
      const response = await axios.get(`${API_URL}Fare/${from},${to}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const FareSlice = createSlice({
  name: "faredetails",
  initialState: {
    fare: [],
    loading: false,
    error: null,
    searchData: [],
  },
  reducers: {
    searchUser: (state, action) => {
      state.searchData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // getFare
      .addCase(getFare.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFare.fulfilled, (state, action) => {
        state.loading = false;
        state.fare = action.payload;
      })
      .addCase(getFare.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default FareSlice.reducer;
export const { searchUser } = FareSlice.actions;
