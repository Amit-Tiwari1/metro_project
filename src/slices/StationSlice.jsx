import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../config/Config";

// All Master Station
export const AllStations = createAsyncThunk("GetMaster", async (thunkAPI) => {
  try {
    const response = await axios.get(`${API_URL}Station/GetMaster`);
    //  console.log("response", response);
    return response.data;
   
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// All station of master station

export const AllStationOfMasterStation = createAsyncThunk(
  "AllStationOfMasterStation",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(
        `${API_URL}Station/GetMasterStation?id=${id}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

/* -------- Station Between to station ---------------------------------------------------*/
export const stationBetween = createAsyncThunk(
  "stationBetween",
  async ({ from, to }, thunkAPI) => {
    try {
      const response = await axios.get(
        `${API_URL}Station/StationsBetweenTwoPoints?startStation=${from}&endStation=${to}`
      );
      console.log("stationbitweendata", response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const StationSlice = createSlice({
  name: "stations",
  initialState: {
    MasterStaions: [],
    AllStationMstr: [],
    StationBetween: [],
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
      // All Master Station
      .addCase(AllStations.pending, (state) => {
        state.loading = true;
      })
      .addCase(AllStations.fulfilled, (state, action) => {
        state.loading = false;
        state.MasterStaions = action.payload;
      })
      .addCase(AllStations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // All station of master station
      .addCase(AllStationOfMasterStation.pending, (state) => {
        state.loading = true;
      })
      .addCase(AllStationOfMasterStation.fulfilled, (state, action) => {
        state.loading = false;
        state.AllStationMstr = action.payload;
      })
      .addCase(AllStationOfMasterStation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // station between
      .addCase(stationBetween.pending, (state) => {
        state.loading = true;
      })
      .addCase(stationBetween.fulfilled, (state, action) => {
        state.loading = false;
        state.StationBetween = action.payload;
      })
      .addCase(stationBetween.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default StationSlice.reducer;
export const { searchUser } = StationSlice.actions;
