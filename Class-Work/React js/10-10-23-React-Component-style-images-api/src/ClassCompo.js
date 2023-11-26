import React from "react";

class ClassCompo extends React.Component
{

     x =2;
     y=4;

    render()
    {
        return(
            <>
                <h1>Class Component {this.x + this.y}</h1>
                <T/>
            </>
        )
    }
}

export default ClassCompo;

class T extends React.Component
{
    render()
    {
        return(
            <>
            kljsdfhjl
            </>
        )
    }
}