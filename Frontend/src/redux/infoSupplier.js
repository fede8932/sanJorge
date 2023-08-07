import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as supplierRequest from "../request/supplierRequest"
const userState = {
  loading: false,
  data: {},
  error: "",
};
export const getInfoSupplierRequest = createAsyncThunk(
  "SUPPLIER_INFO",
  supplierRequest.getInfoSuppliers
);

const supplierInfoSlice = createSlice({
  name: "supplierInfo",
  initialState: userState,
  extraReducers: {
    [getInfoSupplierRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [getInfoSupplierRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getInfoSupplierRequest.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});

export default supplierInfoSlice.reducer;