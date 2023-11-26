import React, { useState } from 'react'

function Ex1() {

    const [data,setData] = useState([])

    const handleChange= ()=>
    {
      setData(12)
    }

  return (
    <div>
        {data}
        <h1>{data}</h1>
        <input value={data} onChange={(e)=>{setData(e.target.value)}}/>
        <button onClick={handleChange}>Click Me</button>
    </div>
  )
}

export default Ex1
