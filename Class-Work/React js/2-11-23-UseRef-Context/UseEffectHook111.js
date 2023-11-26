import React from 'react';
import  { useEffect } from 'react'

function UseEffectHook111() {

    const x =[
        {id:1,title:"Apple"},
        {id:1,title:"Apple"},
        {id:1,title:"Apple"}
    ];

    useEffect(()=>{

        const t = x;
        console.log(t)

    },[x])
  return (
    <div>
        {/* {t[0].id}     */}
        {/* {x.id} */}
        sdf

    </div>
  )
}

export default UseEffectHook111


