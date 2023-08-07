import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as sellerRequest from "../request/sellerRequest";
import * as userRequest from "../request/userRequest";
const sellerState = {
  loading: false,
  data: [],
  error: "",
};
export const getSellersByTextRequest = createAsyncThunk(
  "GET_SELLERS",
  sellerRequest.getSellersByText
);
export const UpdateSellersRequest = createAsyncThunk(
  "UPDATE_SELLER",
  sellerRequest.updateSellerById
);
export const UpdateStatusSellerRequest = createAsyncThunk(
  "UPDATE_STATUS_SELLER",
  userRequest.updateUserStatusRequest
);

const sellersSlice = createSlice({
  name: "sellerS",
  initialState: sellerState,
  extraReducers: {
    [getSellersByTextRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [getSellersByTextRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getSellersByTextRequest.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [UpdateSellersRequest.pending]: (state, action) => {
      state.loading = false;
    },
    [UpdateSellersRequest.rejected]: (state, action) => {
      state.error = action.error.message;
    },
    [UpdateSellersRequest.fulfilled]: (state, action) => {
      const newStateData = state.data.map((seller) => {
        if (seller.id === action.payload.id) {
          seller = action.payload;
        }
        return seller;
      });
      state.data = newStateData;
    },
    [UpdateStatusSellerRequest.pending]: (state, action) => {
      state.loading = false;
    },
    [UpdateStatusSellerRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [UpdateStatusSellerRequest.fulfilled]: (state, action) => {
      const newStateData = state.data.map((seller) => {
        if (seller.user.id === action.payload.id) {
          seller.user = action.payload;
        }
        return seller;
      });
      state.loading = false;
      state.data = newStateData;
    },
  },
});

export default sellersSlice.reducer;
