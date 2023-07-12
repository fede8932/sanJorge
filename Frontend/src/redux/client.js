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
  },
});

export default clientSlice.reducer;