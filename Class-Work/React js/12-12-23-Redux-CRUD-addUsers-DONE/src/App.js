import logo from './logo.svg';
import './App.css';

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateUser from './CreateUser';

function App() {
  return (
    <div className="App">
    

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/create' element={<CreateUser/>}></Route>
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
