import { configureStore } from "@reduxjs/toolkit";
import MyProductReducer from "./MyProductSlice";


export const Store=configureStore ({
    reducer:{
        product: MyProductReducer,
    },
});