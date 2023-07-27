import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as buyOrderRequest from "../request/buyOrderRequest"
const userState = {
  loading: false,
  data: null,
  error: "",
};
export const newBuyOrderRequest = createAsyncThunk(
  "ORDER_CREATE",
  buyOrderRequest.createBuyOrder
);

const newBuyOrderSlice = createSlice({
  name: "newOrder",
  initialState: userState,
  extraReducers: {
    [newBuyOrderRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [newBuyOrderRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [newBuyOrderRequest.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});

export default newBuyOrderSlice.reducer;