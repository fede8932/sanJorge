import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as supplierRequest from "../request/supplierRequest"
const userState = {
  loading: false,
  data: [],
  error: "",
};
export const supplierCreateRequest = createAsyncThunk(
  "SUPPLIER_CREATE",
  supplierRequest.suplierRegister
);
export const getSupplierRequest = createAsyncThunk(
  "SUPPLIER_LIST",
  supplierRequest.getSuppliers
);

const supplierSlice = createSlice({
  name: "supplier",
  initialState: userState,
  extraReducers: {
    [supplierCreateRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [supplierCreateRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [supplierCreateRequest.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [getSupplierRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [getSupplierRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getSupplierRequest.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});

export default supplierSlice.reducer;