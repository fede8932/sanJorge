import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as supplierRequest from "../request/supplierRequest";
const userState = {
  loading: false,
  data: [],
  error: "",
};
export const addSupplierToTable = createAsyncThunk(
  "SUPPLIER_TABLE",
  supplierRequest.addSupplierToTable
);

export const resetSupplierToTable = createAsyncThunk(
  "SUPPLIER_TABLE",
  supplierRequest.resetSupplierToTable
);

const tableSlice = createSlice({
  name: "tableItems",
  initialState: userState,
  extraReducers: {
    [addSupplierToTable.pending]: (state, action) => {
      state.loading = true;
    },
    [addSupplierToTable.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [addSupplierToTable.fulfilled]: (state, action) => {
      state.loading = false;
      if (state.data.length === 0) {
        state.data = state.data.concat(action.payload);
      } else {
        const repetido = state.data.map((obj) => {
          if (obj.supplierRazonSocial ===  action.payload[0].supplierRazonSocial) {
            return true;
          } else {
            return false;
          }
        });
        if (repetido.includes(true)) {
          state.error = "Dato repetido";
        } else {
          state.data = state.data.concat(action.payload);
        }
      }
    },
    [resetSupplierToTable.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload
    },
  },
});

export default tableSlice.reducer;
