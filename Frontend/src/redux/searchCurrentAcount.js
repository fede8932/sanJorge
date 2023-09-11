import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as currentRequest from "../request/currentAcountRequest";
const movementsState = {
  loading: false,
  data: { movements: [], totalRows: 0, totalPages: 1 },
  error: "",
};
export const getMovementsByTextRequest = createAsyncThunk(
  "GET_MOVEMENTS",
  currentRequest.getMovementsRequest
);

const movementsSlice = createSlice({
  name: "movements",
  initialState: movementsState,
  extraReducers: {
    [getMovementsByTextRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [getMovementsByTextRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getMovementsByTextRequest.fulfilled]: (state, action) => {
      state.loading = false;
      if (action.payload.movements) {
        state.data = action.payload;
      }
    },
  },
});

export default movementsSlice.reducer;
