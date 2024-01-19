import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';



function App() {

    const [searchfilter, setSearchfilter] = useState('');
    const [items, setItems] = useState([
      'Apple',
      'Banana',
      'Orange',
      'Mango',
      'Pineapple',
    ]);
  
    const filteredItems = items.filter(item =>
      item.toLowerCase().includes(searchfilter.toLowerCase())
    );
  
    const handleSearchChange = event => {
      setSearchfilter(event.target.value);
    };
  
    return (
      <div>
        <h1>Search Filter App</h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <ul>
          {filteredItems.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };



export default App;