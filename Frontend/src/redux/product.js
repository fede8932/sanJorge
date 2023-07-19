import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as productRequest from "../request/productRequest"
const initState = {
  loading: false,
  data: "",
  error: "",
};
export const productCreateRequest = createAsyncThunk(
  "PRODUCT_CREATE",
  productRequest.createProduct
);

const productSlice = createSlice({
  name: "product",
  initialState: initState,
  extraReducers: {
    [productCreateRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [productCreateRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [productCreateRequest.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});

export default productSlice.reducer;