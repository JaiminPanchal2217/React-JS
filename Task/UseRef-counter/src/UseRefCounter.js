import React, { useRef, useState } from 'react'

function UseRefCounter() {
    const ref = useRef(0);
    const[count,setcount]= useState(ref.current);
 
    const UpdateCount = ()=>{
     console.log(ref);//ref = {current:0}
      
  
      ref.current = ref.current + 1;
      setcount(ref.current)
    

 
    }
    return (
      <div className='App'>
  
        <h1>{ref.current}</h1>
        <button onClick={UpdateCount}>Increment</button>
        
      </div>
    )
}

export default UseRefCounter