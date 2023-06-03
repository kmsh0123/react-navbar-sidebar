import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "../service/navbarSlice";

export const store = configureStore({
    reducer : {
        navbar : navbarSlice
    }
})