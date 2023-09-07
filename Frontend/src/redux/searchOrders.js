import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as orderRequest from "../request/buyOrderRequest";
const orderState = {
  loading: false,
  data: [],
  error: "",
};
export const getOrdersByTextRequest = createAsyncThunk(
  "ORDERS_LIST",
  orderRequest.searchGeneralOrder
);
export const deleteOrderById = createAsyncThunk(
  "ORDER_DELETE",
  orderRequest.deleteOrder
);
export const cancelOrderById = createAsyncThunk(
  "CANCEL_DELETE",
  orderRequest.cancelOrder
);
export const updateOrderConfirmById = createAsyncThunk(
  "ORDER_UPDATE_RECIVER",
  orderRequest.updateStatusOrderConfirm
);

const orderListSlice = createSlice({
  name: "Orders",
  initialState: orderState,
  extraReducers: {
    [getOrdersByTextRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [getOrdersByTextRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getOrdersByTextRequest.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [deleteOrderById.rejected]: (state, action) => {
      state.error = action.error.message;
    },
    [deleteOrderById.fulfilled]: (state, action) => {
      state.loading = false;
      const newState = state.data.filter(order => order.id !== action.payload)
      state.data = newState;
    },
    [updateOrderConfirmById.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [updateOrderConfirmById.fulfilled]: (state, action) => {
      state.loading = false;
      const newState = state.data.map(order => {
        if(order.id == action.payload.id) return action.payload
        return order
      })
      state.data = newState;
    },
    [cancelOrderById.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [cancelOrderById.fulfilled]: (state, action) => {
      state.loading = false;
      const newState = state.data.map(order => {
        if(order.id == action.payload.id) return action.payload
        return order
      })
      state.data = newState;
    },
  },
});

export default orderListSlice.reducer;
