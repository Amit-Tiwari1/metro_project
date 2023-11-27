import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get route

export const getStartStationRouteId = createAsyncThunk(
  "getStartStationRouteId",
  async ({ from, id }, thunkAPI) => {
    // console.log("from", from);
    try {
      const response = await axios.get(
        `http://localhost:56899/api/Station/GetRouteId?startStation=${from}&metroId=${id}`
      );
      return response.data;
    } catch (error) {
      console.log("startStation api call error: RouterSlice", error);
      return thunkAPI.rejectWithValue(error.response.data); // Store only the relevant error information
    }
  }
);

// end

export const getEndStationRouteId = createAsyncThunk(
  "getEndStationRouteId",
  async ({ to, id }, thunkAPI) => {
    // console.log("to", to);
    try {
      const response = await axios.get(
        `http://localhost:56899/api/Station/V2_GetEndRoute_Id?endStation=${to}&metroId=${id}`
      );
      return response.data;
    } catch (error) {
      console.log("endStation api call error: RouterSlice", error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const RoutesSlice = createSlice({
  name: "Routeslicer",
  initialState: {
    Startingroute: [],
    EndingRoute: [],
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
      // for  getStartStationRouteId
      .addCase(getStartStationRouteId.pending, (state) => {
        state.loading = true;
      })
      .addCase(getStartStationRouteId.fulfilled, (state, action) => {
        state.loading = false;
        state.Startingroute.push(action.payload);
      })
      .addCase(getStartStationRouteId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // for  getEndStationRouteId
      .addCase(getEndStationRouteId.pending, (state) => {
        state.loading = true;
      })
      .addCase(getEndStationRouteId.fulfilled, (state, action) => {
        state.loading = false;
        state.EndingRoute.push(action.payload);
      })
      .addCase(getEndStationRouteId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default RoutesSlice.reducer;
export const { searchUser } = RoutesSlice.actions;
