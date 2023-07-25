import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as brandRequest from "../request/brandRequest"
const initState = {
  loading: false,
  data: [],
  error: "",
};
export const getBrandByDataRequest = createAsyncThunk(
  "GET_BRAND_DATA",
  brandRequest.getBrandsByData
);

const searchBrandSlice = createSlice({
  name: "searchBrand",
  initialState: initState,
  extraReducers: {
    [getBrandByDataRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [getBrandByDataRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getBrandByDataRequest.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});

export default searchBrandSlice.reducer;