import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Service from './Service';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Service1 from './Service1';
import Service2 from './Service2';
import Service3 from './Service3';

function App() {
  return (
    <div className="App">
      {/* <a href="">Homeq</a> */}
      
      <BrowserRouter>

      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/service">Service</Link>

    

        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/service' element={<Service/>}>

            <Route path='/service/s1' element={<Service1/>}></Route>
            <Route path='/service/s2' element={<Service2/>}></Route>
            <Route path='/service/s3' element={<Service3/>}></Route>

          </Route>

         
        </Routes>
        
      </BrowserRouter>


    {/* <Home/>
    <About/>
    <Service/> */}
    </div>
  );
}

export default App;
