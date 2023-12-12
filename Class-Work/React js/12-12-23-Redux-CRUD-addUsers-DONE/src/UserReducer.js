import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";



const userSlice = createSlice({
    name:"Nakum",
    initialState:userList ,
    reducers:{
        addusers:(state,action)=>{

            // console.log(action)
            // console.log(action.payload)
            console.log(state)
            state.push(action.payload)

        },

        addusers:(state,action)=>{

            // console.log(action)
            // console.log(action.payload)
            console.log(state)
            state.push(action.payload)

        },

        addusers:(state,action)=>{

            // console.log(action)
            // console.log(action.payload)
            console.log(state)
            state.push(action.payload)

        }
    }
})

export const {addusers} = userSlice.actions;
export default userSlice.reducer;