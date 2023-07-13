import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import sidebarReducer from "./sidebar";
import supplierReducer from "./supplier";
import clientReducer from "./client"
import sellerReducer from "./seller"
import tableReducer from "./tableItems"

import userSlice from "./user";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(/*logger*/),
  reducer: {
    user: userSlice,
    sidebar: sidebarReducer,
    supplier: supplierReducer,
    client: clientReducer,
    seller: sellerReducer,
    tableItems: tableReducer
  },
});

export default store;
