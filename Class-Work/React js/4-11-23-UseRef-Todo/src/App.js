import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import AddTodo from './AddTodo';
import Tasklist from './Tasklist';

let i =4;
const intialval = [
  {id:1,title:"Apple"},
  {id:2,title:"Banana"},
  {id:3,title:"Mango"}
]

const data = [
  {
    titlex:"Title 1",
    subtitle:"Subtitle 1"
  },
  {
    titlex:"Title 2",
    subtitle:"Subtitle 2"
  },
  {
    titlex:"Title 3",
    subtitle:"Subtitle 3"
  }
]

function App() {

  const h1Ref = useRef();
  const divRef = useRef();

  const getH1 = ()=>{
    console.log(h1Ref)
    console.log(h1Ref.current)
    console.log(divRef)
    console.log(divRef.current)

    h1Ref.current.style.color ="red";
    divRef.current.style.color="pink"
  }



  const [todos,setTodos] = useState(intialval);

  const handleAddTodo = (title)=>{
    setTodos([
      ...todos,
      {
        id:i++,
        title:title
      }
    ])

  }

  const handleChangeTodo = (nextTodo)=>{

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

  const handleDeleteTodo = (todoId)=>{

   setTodos( todos.filter((t)=>{
    return (t.id !== todoId)
  }))
  }

  return (
    <div className="App">
        {/* <AddTodo onAddTodo={handleAddTodo}/>
        <Tasklist
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
        /> */}
        <h1 ref={h1Ref} onClick={getH1}>Hello</h1>
{/* 
        <abhay style={{"color":"blue"}}>
          hello
        </abhay> */}

        <main>

        

          {data.map((v)=>{

            return(
                <div ref={divRef} key={v.titlex}>
                <h2>{v.titlex}</h2>
                <p> {v.subtitle}</p>
              </div>
            )

          })}


          {/* <div>
            <h2>Title 2</h2>
            <p> Subtitle 2</p>
          </div>

          <div>
            <h2>Title 3</h2>
            <p> Subtitle 3</p>
          </div> */}
        </main>

    </div>
  );
}

export default App;
