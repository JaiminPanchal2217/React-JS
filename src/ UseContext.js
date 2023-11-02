import React, { createContext, useContext, useRef } from 'react'
import ParentCompo from './ParentCompo'
 export const data = createContext()

function  UseContext() {
   
  return (
    <div> 
    <data.Provider value={"jaimin"}>
    <ParentCompo/>
    </data.Provider>
    </div>
  )
}

export default  UseContext