import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as buyOrderRequest from "../request/buyOrderRequest";
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
);
export const updateCantItemsRequest = createAsyncThunk(
  "UPDAT_CANT_ITEM",
  buyOrderRequest.updateOrderItem
);
export const updatePriceItemsRequest = createAsyncThunk(
  "UPDAT_PREC_ITEM",
  buyOrderRequest.updatePriceOrderItem
);

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
      state.data = action.payload;
      state.loading = false;
    },
    [updateCantItemsRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [updateCantItemsRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [updateCantItemsRequest.fulfilled]: (state, action) => {
      const newState = state.data.map(item =>{
        if(item.id === action.payload.id){
          item.amount = action.payload.amount
        }
        return item
      })
      state.loading = false;
      state.data = newState;
    },
    [updatePriceItemsRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [updatePriceItemsRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [updatePriceItemsRequest.fulfilled]: (state, action) => {
      const newState = state.data.map(item =>{
        if(item.id === action.payload.id){
          item.buyPrice = action.payload.buyPrice
        }
        return item
      })
      state.loading = false;
      state.data = newState;
    },
  },
});

export default newOrderItem.reducer;
