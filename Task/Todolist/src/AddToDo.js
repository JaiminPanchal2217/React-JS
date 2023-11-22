import React, { useState } from 'react'

function AddToDo({onAddToDo}) {

    const [title,setTitle] = useState("");
  return (
    <div>
    

        <input
        style={
            {
                background:"lightgreen",
            
            }
        }
        type='text'
        value={title}
        onChange={(e)=>{setTitle(e.target.value)}}
        />
        <button className='jaimin' onClick={()=>{
            onAddToDo(title)
        }}>Add</button>
      
    </div>
  )
}

export default AddToDo

