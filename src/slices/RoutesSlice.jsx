import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// create action
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://65435af301b5e279de2037dc.mockapi.io/crud",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


export const RoutesSlice = createSlice({
  name: "metroDetails",
  initialState: {
    users: [],
    loading: false,
    error: null,
    searchData :[],
  },
  reducers:{
    searchUser : (state,action) => {
    state.searchData = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      // for  =create
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      ;
  },
});

export default RoutesSlice.reducer;
export const {searchUser} = RoutesSlice.actions;