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
  },
});

export default suppliersSlice.reducer;