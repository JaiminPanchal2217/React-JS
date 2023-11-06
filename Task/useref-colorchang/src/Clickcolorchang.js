// import React, { useRef } from 'react'

import { useRef } from "react";



const data =[
    {
        titlex: "Title 1",
        subtitle: "Subtitle 1",
        color: "green",
      },

      {
        titlex: "Title 2",
        subtitle: "Subtitle 2",
        color: "pink",
      },
      {
        titlex: "Title 3",
        subtitle: "Subtitle 3",
        color: "red",
      },
]

function Clickcolorchang() {

    const h1Ref =useRef() ;
  const titleRefs = data.map(() => ({
    titleRef:useRef(),
    subtitleRef:useRef()
  }));

  const changeColors = () => {
    h1Ref.current.style.color = "navy";

    data.forEach((v, index) => {
      titleRefs[index].titleRef.current.style.color = v.color;
      titleRefs[index].subtitleRef.current.style.color = v.color;
    });
  }
  return (
    <div className="App">
    <h1 ref={h1Ref} onClick={changeColors}>Hello</h1>

    
    <main>
      {data.map((v, index) => (
        <div key={v.titlex}>
          <h2 ref={titleRefs[index].titleRef}>{v.titlex}</h2>
          <p ref={titleRefs[index].subtitleRef}>{v.subtitle}</p>
        </div>
      ))}
    </main>
  </div>
);
}


export default Clickcolorchang