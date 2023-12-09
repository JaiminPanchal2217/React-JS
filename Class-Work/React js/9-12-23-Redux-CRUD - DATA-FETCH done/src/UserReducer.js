import { createSlice } from "@reduxjs/toolkit";
import { userData } from "./Data";


const userSlice = createSlice({
    name:"user",
    initialState:userData,
    reducers:{
        // addUser:
    }
})

export default userSlice.reducer;