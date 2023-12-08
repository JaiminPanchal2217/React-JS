import React, { useEffect, useState } from 'react'
import CustomHook from './CustomHook';

function UseEffectHook() {
   const [pos,setPos] = useState({x:0,y:0});

   const handleMove =(e)=>{

    setPos({
        x:e.clientX,
        y:e.clientY
    })

   }

   CustomHook("mousemove",handleMove)
















//   useEffect(()=>{


//     const handleMove = (e)=>{

//         setPos({
//             x:e.clientX,
//             y:e.clientY
//         })
    
//        }
    
//        window.addEventListener("mousemove",handleMove)

//   })
  return (
    <>
        <div style={{
        height:20,
        width:20,
        background:"blue",
        borderRadius:"50%",
        transform:`translate(${pos.x}px,${pos.y}px)`
    }}>
      
    </div>
  
    </>
  )
}

export default UseEffectHook
