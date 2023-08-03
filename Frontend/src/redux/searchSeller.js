import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as sellerRequest from "../request/sellerRequest"
const sellerState = {
  loading: false,
  data: [],
  error: "",
};
export const getSellersByTextRequest = createAsyncThunk(
  "GET_SELLERS",
  sellerRequest.getSellersByText
);

const sellersSlice = createSlice({
  name: "sellerS",
  initialState: sellerState,
  extraReducers: {
    [getSellersByTextRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [getSellersByTextRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getSellersByTextRequest.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});

export default sellersSlice.reducer;