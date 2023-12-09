import { configureStore } from "@reduxjs/toolkit";
// reducerFun
import { reducerFun } from "./reducer";


  export const store = configureStore({
    reducer:{

        count:reducerFun
    }
})