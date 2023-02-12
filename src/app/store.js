import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
// import poductReducer from "../features/productSlice"

export const store = configureStore({
    reducer: {
        cart:cartReducer,
        // product:poductReducer
    }
})
