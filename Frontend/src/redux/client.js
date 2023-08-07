import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as clientRequest from "../request/clientRequest"
const userState = {
  loading: false,
  data: null,
  error: "",
};
export const clientCreateRequest = createAsyncThunk(
  "CLIENT_CREATE",
  clientRequest.clientRegister
);

export const getClientRequest = createAsyncThunk(
  "GET_CLIENT",
  clientRequest.getClients
);

const clientSlice = createSlice({
  name: "client",
  initialState: userState,
  extraReducers: {
    [clientCreateRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [clientCreateRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [clientCreateRequest.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getClientRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [getClientRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getClientRequest.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});

export default clientSlice.reducer;