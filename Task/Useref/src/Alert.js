import React, { useEffect, useState } from 'react'

function Alert() {
    const x =[
        {id: 1, title: "Jaimin"},
        {id: 2, title: "Nakuam"},
        {id: 3, title: "Abhay"}

    ];

   const [t,setT]= useState([]);
   useEffect(() => {
    setT([...x]);
  },[x]);

  return (
    <div>
      <div>
        {t.map((item) => (
          <div key={item.id}>{item.id +' '+ item.title}</div>
        ))}
      </div>
      <JaiminButton/>
    </div>
  );
}



function JaiminButton() {
  let i=0
  const handleButtonClick = () => {
  
    const x=i++
    alert(`Hello jaimin panchal ${x}`);
  };

  return (
    <div>
    
      <button onClick={handleButtonClick}>
        Click me
      </button>
    </div>
  );
}


export default Alert