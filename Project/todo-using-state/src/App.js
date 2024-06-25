
import React, { useEffect, useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
import ToDo from './components/ToDo';
import UpdateForm from './components/UpdateForm';

function App() {
  //get Local Items
  let getLocalItem = () => {
    let list = localStorage.getItem("lists");
    if(list){
      return JSON.parse(localStorage.getItem("lists"))
    }else{
      return [];
    }
  }

  const [todo, setTodo] = useState(getLocalItem())
  const [newTask, setNewTask] = useState("")
  const [updateData, setUpdateData] = useState("")

  useEffect(()=>{
    localStorage.setItem("lists",JSON.stringify(todo))
  },[todo])

  // Add task
  const Addtask = () => {
    if (newTask) {
      let sum = todo.length + 1;
      setTodo([...todo, {
        id: sum,
        title: newTask,
        status: false
      }])
      setNewTask("")
    }
  }

  // Delete Task 
  const Deletetask = (id) => {
    setTodo(todo.filter(task => task.id !== id))
  }

  //mark task as done or completed
  const markDone = (id) => {
    setTodo(todo.map(task => task.id === id ? { ...task, status: !task.status } : task))
  }

  //Cancel update
  const cancelUpdate = () => {
    setUpdateData("")
  }

  // change task for update
  const changeTask = (e) => {
    setUpdateData({
      ...updateData,
      title: e.target.value
    })
  }

  // update task
  const updateTask = () => {
    let filterRecord = [...todo].filter(task => task.id !== updateData.id);
    setTodo([updateData, ...filterRecord])
    setUpdateData("")
  }

  return (
    <div className="App container ">
      <h2>To Do List App</h2>

      {
        updateData ? (
          <UpdateForm
            updateData={updateData}
            changeTask={changeTask}
            updateTask={updateTask}
            cancelUpdate={cancelUpdate}
          />
        )
          :
          (
            <AddTaskForm
              newTask={newTask}
              setNewTask={setNewTask}
              Addtask={Addtask}
            />
          )
      }
      <br />
      {
        todo && todo.length ? "" : "No Tasks..."
      }
      <ToDo
        todo={todo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        Deletetask={Deletetask}
      />
    </div>
  );
}

export default App;
