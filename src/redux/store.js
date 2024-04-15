import { configureStore } from "@reduxjs/toolkit";
import catalogSlice from "./slice/catalog-slice";
import orderSlice from "./slice/order-slice";

export const store = configureStore({
    reducer: {
         catalogSlice,
         orderSlice
    }
})