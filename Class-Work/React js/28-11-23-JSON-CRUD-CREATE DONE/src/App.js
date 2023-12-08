import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"

import EmpListing from './EmpListing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmpCreate from './EmpCreate';

function App() {

 return(
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<EmpListing/>}></Route>
    <Route path='/employee/create' element={<EmpCreate/>}></Route>
  </Routes>

  </BrowserRouter>


  </>
 )
}

export default App;
