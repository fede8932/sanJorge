import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as clientRequest from "../request/clientRequest"
import * as userRequest from "../request/userRequest";
const sellerState = {
  loading: false,
  data: [],
  error: "",
};
export const getClientssByTextRequest = createAsyncThunk(
  "GET_CLIENTS",
  clientRequest.getClientsByData
);
export const UpdateClientsRequest = createAsyncThunk(
  "UPDATE_SELLER",
  clientRequest.updateClientById
);
export const UpdateStatusClientRequest = createAsyncThunk(
  "UPDATE_STATUS_CLIENT",
  userRequest.updateUserStatusRequest
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
    [UpdateStatusClientRequest.pending]: (state, action) => {
      state.loading = false;
    },
    [UpdateStatusClientRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [UpdateStatusClientRequest.fulfilled]: (state, action) => {
      const newStateData = state.data.map((client) => {
        if (client.user.id === action.payload.id) {
          client.user = action.payload;
        }
        return client;
      });
      state.loading = false;
      state.data = newStateData;
    },
    [UpdateClientsRequest.pending]: (state, action) => {
      state.loading = false;
    },
    [UpdateClientsRequest.rejected]: (state, action) => {
      state.error = action.error.message;
    },
    [UpdateClientsRequest.fulfilled]: (state, action) => {
      const newStateData = state.data.map((client) => {
        if (client.id === action.payload.id) {
          client = action.payload;
        }
        return client;
      });
      state.data = newStateData;
    },
  },
});

export default clientsSlice.reducer;