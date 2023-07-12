import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";
import sidebarReducer from "./sidebar";
import supplierReducer from "./supplier";

import userSlice from "./user";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(/*logger*/),
  reducer: {
    user: userSlice,
    sidebar: sidebarReducer,
    supplier: supplierReducer,
  },
});

export default store;
