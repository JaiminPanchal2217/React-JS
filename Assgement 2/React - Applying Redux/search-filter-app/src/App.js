import React, { useState } from 'react';

const SearchFilterApp = () => {
 
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Grapes',
    'Lemon',
    'Orange',
    'Peach',
  ]);


  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };


  console.log('Filtered Items:', filteredItems);

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
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilterApp;
