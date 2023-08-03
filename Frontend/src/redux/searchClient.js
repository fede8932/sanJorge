import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as clientRequest from "../request/clientRequest"
const sellerState = {
  loading: false,
  data: [],
  error: "",
};
export const getClientssByTextRequest = createAsyncThunk(
  "GET_CLIENTS",
  clientRequest.getClientsByData
);

const clientsSlice = createSlice({
  name: "clients",
  initialState: sellerState,
  extraReducers: {
    [getClientssByTextRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [getClientssByTextRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getClientssByTextRequest.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});

export default clientsSlice.reducer;