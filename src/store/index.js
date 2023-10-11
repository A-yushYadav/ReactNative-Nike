import { configureStore } from "@reduxjs/toolkit";
import { productslice } from "./productsSlice";
import { cartSlice } from "./cartSlice";

export const store = configureStore({
    reducer:{
        products:productslice.reducer,
        cart:cartSlice.reducer,
    }
})