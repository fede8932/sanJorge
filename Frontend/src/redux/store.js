import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import sidebarReducer from "./sidebar";
import supplierReducer from "./supplier";
import clientReducer from "./client"
import sellerReducer from "./seller"
import tableReducer from "./tableItems"
import brandReducer from "./brand"
import productReducer from "./product"
import searchBrandReducer from "./searchBrands"
import representativesReducer from "./representative"
import infoSupplierReducer from "./infoSupplier"
import newBuyOrderReducer from "./newOrder"
import productPagesReducer from "./productPageList"
import addOrderItem from "./addOrderItems"

import userSlice from "./user";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(/*logger*/),
  reducer: {
    user: userSlice,
    sidebar: sidebarReducer,
    supplier: supplierReducer,
    client: clientReducer,
    seller: sellerReducer,
    tableItems: tableReducer,
    brand: brandReducer,
    product: productReducer,
    searchBrand: searchBrandReducer,
    representatives: representativesReducer,
    infoSupplier: infoSupplierReducer,
    newBuyOrder: newBuyOrderReducer,
    productByPages: productPagesReducer,
    listOrderItems: addOrderItem
  },
});

export default store;
