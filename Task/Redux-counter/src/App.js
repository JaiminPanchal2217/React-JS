import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decerement, incerement } from './actions';


function App() {

   const count = useSelector(sate=>sate.count)
   const dispatch =useDispatch();
  return (
    <div className="App">
      <button onClick={()=>{dispatch(incerement())}}>+</button>
     <h1>{count}</h1>
     {/* <button>-</button> */}
     <button onClick={()=>{dispatch(decerement())}}>-</button>
    </div>
  );
}

export default App;
