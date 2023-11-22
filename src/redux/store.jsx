import { configureStore } from "@reduxjs/toolkit";
// import userDetail from "../features/userDetailSlice";
import  FareSlice  from "../slices/FareSlice";
import StationSlice from "../slices/StationSlice";
import RoutesSlice from "../slices/RoutesSlice";

export const store = configureStore({
  reducer: {
    fare: FareSlice,
    station: StationSlice,
    routes : RoutesSlice,
  },
});