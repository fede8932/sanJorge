import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as supplierRequest from "../request/supplierRequest"
const sellerState = {
  loading: false,
  data: [],
  error: "",
};
export const getSuppliersByTextRequest = createAsyncThunk(
  "GET_SUPPLIERS",
  supplierRequest.getSuppliersByData
);
export const UpdateStatusSupplierRequest = createAsyncThunk(
  "UPDATE_STATUS_SUPPLIER",
  supplierRequest.updateSupplierStatusRequest
);
export const UpdateSuppliersRequest = createAsyncThunk(
  "UPDATE_SUPPLIER",
  supplierRequest.updateSupplierRequest
);

const suppliersSlice = createSlice({
  name: "suppliers",
  initialState: sellerState,
  extraReducers: {
    [getSuppliersByTextRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [getSuppliersByTextRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getSuppliersByTextRequest.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [UpdateStatusSupplierRequest.pending]: (state, action) => {
      state.loading = false;
    },
    [UpdateStatusSupplierRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [UpdateStatusSupplierRequest.fulfilled]: (state, action) => {
      const newStateData = state.data.map((supplier) => {
        if (supplier.id === action.payload.id) {
          supplier = action.payload;
        }
        return supplier;
      });
      state.loading = false;
      state.data = newStateData;
    },
    [UpdateSuppliersRequest.pending]: (state, action) => {
      state.loading = false;
    },
    [UpdateSuppliersRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [UpdateSuppliersRequest.fulfilled]: (state, action) => {
      const newStateData = state.data.map((supplier) => {
        if (supplier.id === action.payload.id) {
          supplier = action.payload;
        }
        return supplier;
      });
      state.loading = false;
      state.data = newStateData;
    },
  },
});

export default suppliersSlice.reducer;