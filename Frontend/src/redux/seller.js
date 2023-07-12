import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as sellerRequest from "../request/sellerRequest"
const sellerState = {
  loading: false,
  data: null,
  error: "",
};
export const getSellersRequest = createAsyncThunk(
  "GET_SELLER",
  sellerRequest.getSellers
);

const sellerSlice = createSlice({
  name: "seller",
  initialState: sellerState,
  extraReducers: {
    [getSellersRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [getSellersRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getSellersRequest.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});

export default sellerSlice.reducer;