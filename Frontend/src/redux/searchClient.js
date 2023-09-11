import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import * as clientRequest from "../request/clientRequest";
import * as userRequest from "../request/userRequest";
const clientState = {
  loading: false,
  data: { clients: [], totalRows: 1, totalPages: 1 },
  error: "",
};
export const getClientssByTextRequest = createAsyncThunk(
  "GET_CLIENTS",
  clientRequest.getClientsByData
);
export const getClientByTextRequest = createAsyncThunk(
  "GET_CLIENT",
  clientRequest.getClientByData
);
export const UpdateClientsRequest = createAsyncThunk(
  "UPDATE_CLIENT",
  clientRequest.updateClientById
);
export const UpdateStatusClientRequest = createAsyncThunk(
  "UPDATE_STATUS_CLIENT",
  userRequest.updateUserStatusRequest
);

const clientsSlice = createSlice({
  name: "clients",
  initialState: clientState,
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
    [getClientByTextRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [getClientByTextRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getClientByTextRequest.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = [action.payload];
    },
    [UpdateStatusClientRequest.pending]: (state, action) => {
      state.loading = false;
    },
    [UpdateStatusClientRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [UpdateStatusClientRequest.fulfilled]: (state, action) => {
      const newClients = state.data.clients.map((client) => {
        if (client.user.id === action.payload.id) {
          client.user = action.payload;
        }
        return client;
      });
      const newStateData = state.data;
      newStateData.clients = newClients;
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
      const actState = { ...current(state).data };
      const newClents = actState.clients.map((client) => {
        if (client.id === action.payload.id) {
          const newClient = action.payload;
          return newClient;
        }
        return client;
      });
      const newStateData = actState;
      newStateData.clients = newClents;
      state.loading = false;
      state.data = newStateData;
      // const newStateData = state.data.map((client) => {
      //   if (client.id === action.payload.id) {
      //     client = action.payload;
      //   }
      //   return client;
      // });
      // state.data = newStateData;
    },
  },
});

export default clientsSlice.reducer;
