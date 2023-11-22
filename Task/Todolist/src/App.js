import React, { useState, useEffect } from 'react'
import AddToDo from './AddToDo';
import TaskList from './TaskList';




function App() {

  let nextId=4;
  const intialtodos = [
    {id:1,title:"Jaimin"},
    {id:2,title:"parth"},
    {id:3,title:"janvi"}
  ];

  const [todos,setTodos] = useState(intialtodos);

  const handleAddTodo = (title)=>
  {
    setTodos([
      ...todos,
      {
        id:nextId++,
        title:title
      }

    ])
  }


  const handleChangeTodo = (nextTodo)=>
  {
   setTodos(
    todos.map((t)=>{

      if(t.id == nextTodo.id)
      {
        return nextTodo;
      }
      else 
      {
        return t;
      }

    })
   )
    
  }



  const handleDeleteTodo = (todoId)=>
  {
    setTodos(
      todos.filter((t)=>{
        return(t.id !== todoId)
      })
    )
  }


  return (
    <div>

      
         <AddToDo onAddToDo={handleAddTodo}/>
      <TaskList
       todos={todos}
       onChangeTodo={handleChangeTodo}
       onDeleteTodo={handleDeleteTodo}
      
      /> 
    





      
   
      
    </div>
  )
}

export default App

