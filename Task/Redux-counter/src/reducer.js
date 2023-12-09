import { type } from "@testing-library/user-event/dist/type";


 const intialVal=0;

 export const reducerFun=(state=intialVal,action)=>{

    switch(action.type){


           case "inc":
            return state+1;
            return
            case "dec":
            return state-1;
             default:
            return state;

    }

}