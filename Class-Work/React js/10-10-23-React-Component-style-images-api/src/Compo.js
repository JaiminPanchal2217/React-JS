import React from "react";
import './style.css';
import test from "./test.jpg";
import test1 from "./images/test1.jpg"

class DemoClass extends React.Component
{
    render()
    {
        return(
            <>
            functional compo inside class Compo
                <DemoFun/>
            </>
        )
    }
}

export default DemoClass;


function DemoFun()
{

    const x=2;
    const y ="kjh";
    const obj = {
        color:"green",
        background:"lightblue"
    }
    return(
        <>
        functional COmpo
            <h3 style={obj} className="harsh">{x}</h3>{x}
            <img src="https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg" height="200px"/>
            <img src={test} height="100px"/>
            <img src={test1} height="200px"/>
        
        </>
    )
}