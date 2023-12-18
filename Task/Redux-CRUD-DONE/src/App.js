import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"

// import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import CreateUser from './CreateUser';
import EditUser from './EditUser';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/create" element={<CreateUser/>}></Route>
        <Route path="/edit/:userid" element={<EditUser/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
