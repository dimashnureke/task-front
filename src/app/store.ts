import { configureStore } from "@reduxjs/toolkit";
import  autherizedSlice  from "./features/autherizedSlice";

export const store = configureStore({
    reducer:{
        isOnline:autherizedSlice,
    }
})