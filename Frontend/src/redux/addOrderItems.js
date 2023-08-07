import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as buyOrderRequest from "../request/buyOrderRequest"
const userState = {
  loading: false,
  data: [],
  error: "",
};
export const addOrderItemsRequest = createAsyncThunk(
  "ADD_ITEM",
  buyOrderRequest.addOrderItem
);
export const deleteOrderItemsRequest = createAsyncThunk(
  "DELETE_ITEM",
  buyOrderRequest.deleteOrderItem
)

const newOrderItem = createSlice({
  name: "newOrderItem",
  initialState: userState,
  extraReducers: {
    [addOrderItemsRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [addOrderItemsRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [addOrderItemsRequest.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [deleteOrderItemsRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteOrderItemsRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [deleteOrderItemsRequest.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});

export default newOrderItem.reducer;