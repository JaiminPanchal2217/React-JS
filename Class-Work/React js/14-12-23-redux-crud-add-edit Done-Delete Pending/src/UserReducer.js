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

        editUsers:(state,action)=>{

            // console.log(action)
            // console.log(action.payload)

            const {id,name,email} = action.payload;
            // console.log(id)
            // console.log(state)
           const userId =  state.find(user=>       
                user.id == id
            )
            // console.log(userId)

            // console.log(userId.name ="hello")

            if(userId)
             {
                userId.name=name
                userId.email=email 
             }
           

        },

        deleteUsers:(state,action)=>{
            const {id} = action.payload;
            const userId =  state.find(user=>       
                user.id == id
            )
            if(userId)
             {
                return state.filter(user=>user.id !==id)
             }


        }

        
           
          

       
    }
})

export const {addusers,editUsers,deleteUsers} = userSlice.actions;
export default userSlice.reducer;