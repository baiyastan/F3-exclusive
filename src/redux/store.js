import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice"
import productReducer from "./product/productSlice"
import cakeReducer from "./cake/cakeSlice"

export const myStore = configureStore({
    reducer: {
        category: categoryReducer,
        products: productReducer,
        cake: cakeReducer
    }
})