import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as brandRequest from "../request/brandRequest"
const initState = {
  loading: false,
  data: "",
  error: "",
};
export const brandCreateRequest = createAsyncThunk(
  "BRAND_CREATE",
  brandRequest.createBrand
);
export const getBrandRequest = createAsyncThunk(
  "GET_BRAND",
  brandRequest.getBrands
);

const brandSlice = createSlice({
  name: "brand",
  initialState: initState,
  extraReducers: {
    [brandCreateRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [brandCreateRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [brandCreateRequest.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getBrandRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [getBrandRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getBrandRequest.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});

export default brandSlice.reducer;