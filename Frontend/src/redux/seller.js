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
export const createSellersRequest = createAsyncThunk(
  "CREATE_SELLER",
  sellerRequest.createSellers
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
    [createSellersRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [createSellersRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [createSellersRequest.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});

export default sellerSlice.reducer;