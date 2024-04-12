import { configureStore } from "@reduxjs/toolkit";
import catalogSlice from "./slice/catalog-slice";

export const store = configureStore({
    reducer: {
         catalogSlice
    }
})