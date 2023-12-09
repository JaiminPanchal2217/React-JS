import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './action';

function App() {

 const count =  useSelector(state=>state.count);
 const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={()=>{dispatch(increment())}}>+</button>
     <h5>{count}</h5>
     <button onClick={()=>{dispatch(decrement())}}>-</button>
    </div>
  );
}

export default App;
